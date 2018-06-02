/**
 * Elasticsuite search autocomplete extension that allows to search for a phrase
 * before automatic suggestions are loaded.
 */

define(['jquery'], function($) {
    'use strict';
    return function(quickSearch) {
        $.widget('smileEs.quickSearch', quickSearch, {
            _onPropertyChange: _.debounce(function() {
                var searchField = this.element,
                    clonePosition = {
                        position: 'absolute',
                        // Removed to fix display issues
                        // left: searchField.offset().left,
                        // top: searchField.offset().top + searchField.outerHeight(),
                        width: searchField.outerWidth(),
                    },
                    value = this.element.val();

                // It makes visible button all time
                this.submitBtn.disabled = false;

                if (
                    value.length >= parseInt(this.options.minSearchLength, 10)
                ) {
                    this.searchForm.addClass('processing');
                    this.currentRequest = $.ajax({
                        method: 'GET',
                        url: this.options.url,
                        data: { q: value },
                        // This function will ensure proper killing of the last Ajax call.
                        // In order to prevent requests of an old request to pop up later and replace results.
                        beforeSend: function() {
                            if (this.currentRequest !== null) {
                                this.currentRequest.abort();
                            }
                        }.bind(this),
                        success: $.proxy(function(data) {
                            var self = this;
                            var lastElement = false;
                            var content = this._getResultWrapper();
                            var sectionDropdown = this._getSectionHeader();
                            $.each(
                                data,
                                function(index, element) {
                                    if (
                                        !lastElement ||
                                        (lastElement &&
                                            lastElement.type !== element.type)
                                    ) {
                                        sectionDropdown = this._getSectionHeader(
                                            element.type,
                                            data
                                        );
                                    }

                                    var elementHtml = this._renderItem(
                                        element,
                                        index
                                    );

                                    sectionDropdown.append(elementHtml);

                                    if (
                                        !lastElement ||
                                        (lastElement &&
                                            lastElement.type !== element.type)
                                    ) {
                                        content.append(sectionDropdown);
                                    }

                                    lastElement = element;
                                }.bind(this)
                            );
                            this.responseList.indexList = this.autoComplete
                                .html(content)
                                .css(clonePosition)
                                .show()
                                .find(
                                    this.options.responseFieldElements +
                                        ':visible'
                                );

                            this._resetResponseList(false);
                            this.element.removeAttr('aria-activedescendant');

                            if (this.responseList.indexList.length) {
                                this._updateAriaHasPopup(true);
                            } else {
                                this._updateAriaHasPopup(false);
                            }

                            this.responseList.indexList
                                .on('click', function(e) {
                                    self.responseList.selected = $(this);
                                    if (
                                        self.responseList.selected.attr('href')
                                    ) {
                                        window.location.href = self.responseList.selected.attr(
                                            'href'
                                        );
                                        e.stopPropagation();
                                        return false;
                                    }
                                    self.searchForm.trigger('submit');
                                })
                                .on('mouseenter mouseleave', function(e) {
                                    self.responseList.indexList.removeClass(
                                        self.options.selectClass
                                    );
                                    $(this).addClass(self.options.selectClass);
                                    self.responseList.selected = $(e.target);
                                    self.element.attr(
                                        'aria-activedescendant',
                                        $(e.target).attr('id')
                                    );
                                })
                                .on('mouseout', function() {
                                    if (
                                        !self._getLastElement() &&
                                        self
                                            ._getLastElement()
                                            .hasClass(self.options.selectClass)
                                    ) {
                                        $(this).removeClass(
                                            self.options.selectClass
                                        );
                                        self._resetResponseList(false);
                                    }
                                });
                        }, this),
                        complete: $.proxy(function() {
                            this.searchForm.removeClass('processing');
                        }, this),
                    });
                } else {
                    this._resetResponseList(true);
                    this.autoComplete.hide();
                    this._updateAriaHasPopup(false);
                    this.element.removeAttr('aria-activedescendant');
                }
            }, 250),
        });

        return $.smileEs.quickSearch;
    };
});
