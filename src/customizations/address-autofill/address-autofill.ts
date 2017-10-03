// In this file we have to insert customer's own google api key
// suggestions.

import $ from 'jquery';

import {
    AddressAutofill,
    IAddressAutofillOptions,
} from '../../../../theme-creativeshop/src/components/address-autofill/address-autofill';

export default (options: IAddressAutofillOptions): AddressAutofill => {
    options = $.extend(
        {
            // Please change below key on production to client's one
            apiKey: 'AIzaSyDwjU7ABFBMRg_i6pU4gYTnGFZvLUS2Y94',
            dev: false,
        },
        options
    );

    return new AddressAutofill(options);
};
