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

import AddressAutofill from './customizations/address-autofill/address-autofill';
export { AddressAutofill };
