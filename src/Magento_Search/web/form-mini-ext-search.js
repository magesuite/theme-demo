/**
 * Elasticsuite search autocomplete extension that allows to search for a phrase
 * before automatic suggestions are loaded.
 */

define(['jquery'], function($) {
    'use strict';
    return function(quickSearch) {
        $.widget('mage.quickSearch', quickSearch, {
            _create: function() {
                this.responseList = {
                    indexList: null,
                    selected: null,
                };
                this.autoComplete = $(this.options.destinationSelector);
                this.searchForm = $(this.options.formSelector);
                this.submitBtn = this.searchForm.find(
                    this.options.submitBtn
                )[0];
                this.searchLabel = $(this.options.searchLabel);
                this.isExpandable = this.options.isExpandable;

                _.bindAll(this, '_onKeyDown', '_onPropertyChange', '_onSubmit');

                // It makes visible button all time
                this.submitBtn.disabled = false;

                this.element.attr('autocomplete', this.options.autocomplete);

                mediaCheck({
                    media: '(max-width: 768px)',
                    entry: function() {
                        this.isExpandable = true;
                    }.bind(this),
                    exit: function() {
                        this.isExpandable = false;
                        this.element.removeAttr('aria-expanded');
                    }.bind(this),
                });

                this.searchLabel.on(
                    'click',
                    function(e) {
                        // allow input to lose its' focus when clicking on label
                        if (this.isExpandable && this.isActive()) {
                            e.preventDefault();
                        }
                    }.bind(this)
                );

                this.element.on(
                    'blur',
                    $.proxy(function() {
                        if (!this.searchLabel.hasClass('active')) {
                            return;
                        }

                        setTimeout(
                            $.proxy(function() {
                                if (this.autoComplete.is(':hidden')) {
                                    this.setActiveState(false);
                                } else {
                                    this.element.trigger('focus');
                                }
                                this.autoComplete.hide();
                                this._updateAriaHasPopup(false);
                            }, this),
                            250
                        );
                    }, this)
                );

                if (this.element.get(0) === document.activeElement) {
                    this.setActiveState(true);
                }

                this.element.on('focus', this.setActiveState.bind(this, true));
                this.element.on('keydown', this._onKeyDown);
                this.element.on('input propertychange', this._onPropertyChange);

                this.searchForm.on(
                    'submit',
                    $.proxy(function() {
                        this._onSubmit();
                        this._updateAriaHasPopup(false);
                    }, this)
                );
            },
        });

        return $.mage.quickSearch;
    };
});
