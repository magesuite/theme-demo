// =============================================================================
// Main scripting entry point.
// We import all of the components here and initialize them.
// It is a job of every component if it is present of the page.
// This approach creates nice bundle, with all of the components and their dependencies.
// =============================================================================

// =============================================================================
// Asynchronous importing of vendor modules.
// =============================================================================

import 'vendors';
import $ from 'jquery';

import '../../theme-creativeshop/src/components/collapse/collapse';
import { Flyout } from '../../theme-creativeshop/src/components/flyout/class.flyout';
export { Flyout };

import AddressAutofill from './customizations/address-autofill/address-autofill';
export { AddressAutofill };

import { init as collapsibleText } from '../../theme-creativeshop/src/components/collapsible-text/collapsible-text';
collapsibleText();

import { QtyIncrementCollection } from '../../theme-creativeshop/src/customizations/qty-increment/qty-increment';
new QtyIncrementCollection();

import Select from '../../theme-creativeshop/src/customizations/select/select';
export { Select };

import './customizations/aftersearch-nav/aftersearch-nav-filter';

import '../../theme-creativeshop/src/customizations/aftersearch-nav/aftersearch-nav';
import '../../theme-creativeshop/src/customizations/brand-carousel/brand-carousel';
import '../../theme-creativeshop/src/customizations/header-search/header-search';
import '../../theme-creativeshop/src/customizations/hero/hero';
import '../../theme-creativeshop/src/customizations/item-cloner/item-cloner';
import '../../theme-creativeshop/src/customizations/offcanvas-navigation/offcanvas-navigation';
import '../../theme-creativeshop/src/customizations/offcanvas/offcanvas';
import '../../theme-creativeshop/src/customizations/grid-layout/grid-layout';
import '../../theme-creativeshop/src/customizations/navigation/navigation';
import '../../theme-creativeshop/src/customizations/products-promo/products-promo';
import '../../theme-creativeshop/src/customizations/image-teaser/image-teaser';
import '../../theme-creativeshop/src/customizations/indicators/fast-shipping-init';
import '../../theme-creativeshop/src/customizations/dailydeal/dailydeal';
import '../../theme-creativeshop/src/customizations/plugincompany-contactforms/plugincompany-contactforms';
import '../../theme-creativeshop/src/customizations/video-player/video-player';
import '../../theme-creativeshop/src/customizations/searchresults-switcher/searchresults-switcher';
