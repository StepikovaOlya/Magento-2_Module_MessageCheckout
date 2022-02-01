define([
    'jquery',
    'underscore',
    'uiComponent',
    'Magento_Checkout/js/checkout-data'
], function ($, _, Component, checkoutData) {
    'use strict';

    return Component.extend({
        defaults: {
            template: 'Stepikova_MessageCheckout/message',
            activePaymentMethod: 'truelayer'
        },

        /**
         * Initialize function
         */
        initialize: function () {
            this._super();

            this.checkSelectedPaymentMethod();
        },

        /**
         * Checking selected payment method
         */
        checkSelectedPaymentMethod: function () {
            return checkoutData.getSelectedPaymentMethod() === this.activePaymentMethod;
        }
    });
});