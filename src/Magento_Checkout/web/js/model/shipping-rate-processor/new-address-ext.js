define([
  'Magento_Checkout/js/model/resource-url-manager',
  'Magento_Checkout/js/model/quote',
  'mage/storage',
  'Magento_Checkout/js/model/shipping-service',
  'Magento_Checkout/js/model/shipping-rate-registry',
  'Magento_Checkout/js/model/error-processor',
  'jquery'
], function(resourceUrlManager, quote, storage, shippingService, rateRegistry, errorProcessor, $) {
  'use strict';

  return function(NewAddress) {
    return _.extend({}, NewAddress, {
      getRates: function (address) {

        function filterMethods(result) {
          var $select = $('select[name=repertus_address_type]');
          if($select.length && (parseInt($select.val()) === 1 || parseInt($select.val()) === 2)) {
            return result.filter(function(method) {
              return method.carrier_code.toLowerCase().indexOf('dhl') !== -1
              || method.carrier_title.toLowerCase().indexOf('dhl') !== -1
              || method.method_code.toLowerCase().indexOf('dhl') !== -1
              || method.method_title ? method.method_title.toLowerCase().indexOf('dhl') !== -1 : false;
            });
          } else {
            return result;
          }
        }
        var cache, serviceUrl, payload, storedResult, $select;

        $(document).one('click', 'select[name=repertus_address_type]', function() {
          $select = $('select[name=repertus_address_type]');
          shippingService.setShippingRates(filterMethods(storedResult));
          $select.on('change', function() {
            shippingService.setShippingRates(filterMethods(storedResult));
            $('input[name=shipping_method]').prop('disabled', false);
          });
        });

        shippingService.isLoading(true);
        cache = rateRegistry.get(address.getCacheKey());
        serviceUrl = resourceUrlManager.getUrlForEstimationShippingMethodsForNewAddress(quote);
        payload = JSON.stringify({
            address: {
              'street': address.street,
              'city': address.city,
              'region_id': address.regionId,
              'region': address.region,
              'country_id': address.countryId,
              'postcode': address.postcode,
              'email': address.email,
              'customer_id': address.customerId,
              'firstname': address.firstname,
              'lastname': address.lastname,
              'middlename': address.middlename,
              'prefix': address.prefix,
              'suffix': address.suffix,
              'vat_id': address.vatId,
              'company': address.company,
              'telephone': address.telephone,
              'fax': address.fax,
              'custom_attributes': address.customAttributes,
              'save_in_address_book': address.saveInAddressBook
            }
          }
        );

        if (cache) {
          shippingService.setShippingRates(cache);
          shippingService.isLoading(false);
        } else {
          storage.post(serviceUrl, payload, false).done(function(result) {
            storedResult = result;
            rateRegistry.set(address.getCacheKey(), result);
            shippingService.setShippingRates(filterMethods(result));
          }).fail(function(response) {
            shippingService.setShippingRates([]);
            errorProcessor.process(response);
          }).always(function() {
            shippingService.isLoading(false);
          });
        }
      }
    });
  };
});


