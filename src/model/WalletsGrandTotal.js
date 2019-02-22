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
     * @interface WalletsGrandTotal
     */
    
    /**
     *
     * @name WalletsGrandTotal#currency
     * @type {("BTC"|"GVT"|"Undefined"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name WalletsGrandTotal#available
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#invested
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#pending
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#total
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#currencyCcy
     * @type {("BTC"|"GVT"|"Undefined"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name WalletsGrandTotal#availableCcy
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#investedCcy
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#pendingCcy
     * @type {Number}
     */
    /**
     *
     * @name WalletsGrandTotal#totalCcy
     * @type {Number}
     */





export default class WalletsGrandTotal {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletsGrandTotal();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('invested')) {
                obj['invested'] = ApiClient.convertToType(data['invested'], 'Number');
            }
            if (data.hasOwnProperty('pending')) {
                obj['pending'] = ApiClient.convertToType(data['pending'], 'Number');
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
            if (data.hasOwnProperty('currencyCcy')) {
                obj['currencyCcy'] = ApiClient.convertToType(data['currencyCcy'], 'String');
            }
            if (data.hasOwnProperty('availableCcy')) {
                obj['availableCcy'] = ApiClient.convertToType(data['availableCcy'], 'Number');
            }
            if (data.hasOwnProperty('investedCcy')) {
                obj['investedCcy'] = ApiClient.convertToType(data['investedCcy'], 'Number');
            }
            if (data.hasOwnProperty('pendingCcy')) {
                obj['pendingCcy'] = ApiClient.convertToType(data['pendingCcy'], 'Number');
            }
            if (data.hasOwnProperty('totalCcy')) {
                obj['totalCcy'] = ApiClient.convertToType(data['totalCcy'], 'Number');
            }
        }
        return obj;
    }

    currency = undefined;
    available = undefined;
    invested = undefined;
    pending = undefined;
    total = undefined;
    currencyCcy = undefined;
    availableCcy = undefined;
    investedCcy = undefined;
    pendingCcy = undefined;
    totalCcy = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ETH": "ETH",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };

    static CurrencyCcyEnum = {
    
        "BTC": "BTC",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ETH": "ETH",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };



}


