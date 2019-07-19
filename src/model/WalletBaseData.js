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
 * @interface WalletBaseData
 */

/**
 *
 * @name WalletBaseData#id
 * @type {String}
 */
/**
 *
 * @name WalletBaseData#title
 * @type {String}
 */
/**
 *
 * @name WalletBaseData#logo
 * @type {String}
 */
/**
 *
 * @name WalletBaseData#currency
 * @type WalletBaseDataCurrencyEnum
 */
/**
 *
 * @name WalletBaseData#available
 * @type {Number}
 */
/**
 *
 * @name WalletBaseData#rate
 * @type {Number}
 */





export default class WalletBaseData {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletBaseData();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    title = undefined;
    logo = undefined;
    currency = undefined;
    available = undefined;
    rate = undefined;






    static CurrencyEnum = {
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE"    
    };



}




/**
 * @typedef WalletBaseDataCurrencyEnum 
 * @type {("BNB"|"USD"|"EUR"|"Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE")}
 */



