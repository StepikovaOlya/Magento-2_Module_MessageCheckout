define([
    'jquery',
    'ko',
    'uiComponent',
    'Magento_Checkout/js/model/quote'
], function ($, ko, Component, quote) {
    'use strict';
    return Component.extend({
        defaults: {
            template: 'Vendic_ShippingMessage/checkout/shipping/shipping-message',
            selectedShippingMethodCode: 'tablerate',
            selectedCountryId: 'NL'
        },

        initObservable: function () {
            this.showHomeDeliveryShippingInfo = ko.computed(function() {
              var selectedShippingMethodCode = this.selectedShippingMethodCode;
              var selectedCountryId = this.selectedCountryId;
              var method = quote.shippingMethod();
              var country = quote.shippingAddress();

              if((method && method['carrier_code'] !== undefined) && (country && country['countryId'] !== undefined)) {
                  if((method['carrier_code'] === selectedShippingMethodCode) && (country['countryId'] === selectedCountryId)) {
                      return true;
                  }
              }

              return false;

          }, this);
            return this;
        },
    });
});
