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

import AddressAutofill from './customizations/address-autofill/address-autofill';
export { AddressAutofill };

import { init as collapsibleText } from '../../theme-creativeshop/src/components/collapsible-text/collapsible-text';
collapsibleText();

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
