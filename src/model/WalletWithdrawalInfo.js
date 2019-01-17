/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';





    /**
     *
     * @interface WalletWithdrawalInfo
     */
    
    /**
     *
     * @name WalletWithdrawalInfo#currency
     * @type {("USD"|"GVT"|"Undefined"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"EUR")}
     */
    /**
     *
     * @name WalletWithdrawalInfo#description
     * @type {String}
     */
    /**
     *
     * @name WalletWithdrawalInfo#logo
     * @type {String}
     */
    /**
     *
     * @name WalletWithdrawalInfo#commission
     * @type {Number}
     */
    /**
     *
     * @name WalletWithdrawalInfo#rateToGvt
     * @type {Number}
     */





export default class WalletWithdrawalInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletWithdrawalInfo();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
            }
            if (data.hasOwnProperty('rateToGvt')) {
                obj['rateToGvt'] = ApiClient.convertToType(data['rateToGvt'], 'Number');
            }
        }
        return obj;
    }

    currency = undefined;
    description = undefined;
    logo = undefined;
    commission = undefined;
    rateToGvt = undefined;






    static CurrencyEnum = {
    
        "USD": "USD",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "EUR": "EUR"    
    };



}


