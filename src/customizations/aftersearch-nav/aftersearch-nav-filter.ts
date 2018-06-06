import $ from 'jquery';

export default class AftersearchNavFilter {
    public constructor() {
        this._fixFilterVisibility();
    }

    // Add z-indexes to correct alignment of filters
    protected _fixFilterVisibility(): void {
        $('.cs-aftersearch-nav__filter').on('click', function() {
            $('.cs-aftersearch-nav__filter-content').css('z-index', '1');
            $.each($('.cs-aftersearch-nav__filter-title'), function() {
                if ($(this).attr('aria-expanded') === 'true') {
                    $(this).css('z-index', '4');
                    $('.cs-aftersearch-nav__filter-content.active').css(
                        'z-index',
                        '3'
                    );
                } else {
                    $(this).css('z-index', '1');
                }
            });
        });
    }
}

new AftersearchNavFilter();
