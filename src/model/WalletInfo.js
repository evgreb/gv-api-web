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
     * @interface WalletInfo
     */
    
    /**
     *
     * @name WalletInfo#currency
     * @type {("USD"|"GVT"|"Undefined"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"EUR")}
     */
    /**
     *
     * @name WalletInfo#address
     * @type {String}
     */
    /**
     *
     * @name WalletInfo#rateToGVT
     * @type {Number}
     */
    /**
     *
     * @name WalletInfo#description
     * @type {String}
     */
    /**
     *
     * @name WalletInfo#logo
     * @type {String}
     */





export default class WalletInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletInfo();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('rateToGVT')) {
                obj['rateToGVT'] = ApiClient.convertToType(data['rateToGVT'], 'Number');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
        }
        return obj;
    }

    currency = undefined;
    address = undefined;
    rateToGVT = undefined;
    description = undefined;
    logo = undefined;






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


