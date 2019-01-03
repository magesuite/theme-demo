/* tslint:disable:no-unused-expression no-unused-new */

// =============================================================================
// Main scripting entry point.
// We import all of the components here and initialize them.
// It is a job of every component if it is present of the page.
// This approach creates nice bundle, with all of the components and their dependencies.

// =============================================================================
// Vendors
// =============================================================================

import 'vendors';
import $ from 'jquery';

// =============================================================================
// Utilities
// =============================================================================

// =============================================================================
// Components
// =============================================================================

import '../../theme-creativeshop/src/components/collapse/collapse';
import '../../theme-creativeshop/src/components/dropdown/dropdown';
import '../../theme-creativeshop/src/components/filter-horizontal/filter-horizontal';

import { Flyout } from '../../theme-creativeshop/src/components/flyout/class.flyout';
export { Flyout };

// =============================================================================
// Customizations
// =============================================================================

import '../../theme-creativeshop/src/customizations/header-search/header-search';
import Select from '../../theme-creativeshop/src/customizations/select/select';
export { Select };
import { init as collapsibleText } from '../../theme-creativeshop/src/components/collapsible-text/collapsible-text';
collapsibleText();
import '../../theme-creativeshop/src/customizations/navigation/navigation';
import '../../theme-creativeshop/src/customizations/offcanvas-navigation/offcanvas-navigation';
import '../../theme-creativeshop/src/customizations/offcanvas/offcanvas';
import { QtyIncrementCollection } from '../../theme-creativeshop/src/customizations/qty-increment/qty-increment';
new QtyIncrementCollection();
import '../../theme-creativeshop/src/customizations/aftersearch-nav/aftersearch-nav';
import '../../theme-creativeshop/src/customizations/hero/hero';
import '../../theme-creativeshop/src/customizations/image-teaser/image-teaser';
import '../../theme-creativeshop/src/customizations/products-promo/products-promo';
import '../../theme-creativeshop/src/customizations/brand-carousel/brand-carousel';
import '../../theme-creativeshop/src/customizations/category-links/category-links';
import '../../theme-creativeshop/src/customizations/sticky-block/sticky-block';
import '../../theme-creativeshop/src/customizations/pagination/pagination';
import '../../theme-creativeshop/src/customizations/reviews/reviews';
import '../../theme-creativeshop/src/customizations/item-cloner/item-cloner';
import '../../theme-creativeshop/src/customizations/grid-layout/grid-layout';
import '../../theme-creativeshop/src/customizations/product-finder/product-finder';
import '../../theme-creativeshop/src/customizations/indicators/fast-shipping-init';
import '../../theme-creativeshop/src/customizations/dailydeal/dailydeal';
import '../../theme-creativeshop/src/customizations/daily-deal-teaser/daily-deal-teaser';
import '../../theme-creativeshop/src/customizations/plugincompany-contactforms/plugincompany-contactforms';
import '../../theme-creativeshop/src/customizations/cart/cart';
import '../../theme-creativeshop/src/customizations/video-player/video-player';
import '../../theme-creativeshop/src/customizations/searchresults-switcher/searchresults-switcher';
import AddressAutofill from '../../theme-creativeshop/src/customizations/address-autofill/address-autofill';
export { AddressAutofill };

// Sometimes there is a need to apply different styling for mobile/tablet devices and body class is necessary
if (isMobile.any) {
    document.body.classList.add('is-mobile');
}

if (isMobile.tablet) {
    document.body.classList.add('is-tablet');
} else if (isMobile.phone) {
    document.body.classList.add('is-phone');
}

window.addEventListener(
    'touchstart',
    function onFirstTouch(): void {
        document.body.classList.add('touch-device');
        window.removeEventListener('touchstart', onFirstTouch, false);
    },
    false
);
