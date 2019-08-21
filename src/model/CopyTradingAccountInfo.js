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
 * @interface CopyTradingAccountInfo
 */

/**
 *
 * @name CopyTradingAccountInfo#id
 * @type {String}
 */
/**
 *
 * @name CopyTradingAccountInfo#currency
 * @type CopyTradingAccountInfoCurrencyEnum
 */
/**
 *
 * @name CopyTradingAccountInfo#logo
 * @type {String}
 */
/**
 *
 * @name CopyTradingAccountInfo#title
 * @type {String}
 */
/**
 *
 * @name CopyTradingAccountInfo#balance
 * @type {Number}
 */
/**
 *
 * @name CopyTradingAccountInfo#equity
 * @type {Number}
 */
/**
 *
 * @name CopyTradingAccountInfo#freeMargin
 * @type {Number}
 */
/**
 *
 * @name CopyTradingAccountInfo#marginLevel
 * @type {Number}
 */
/**
 *
 * @name CopyTradingAccountInfo#available
 * @type {Number}
 */





export default class CopyTradingAccountInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CopyTradingAccountInfo();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('equity')) {
                obj['equity'] = ApiClient.convertToType(data['equity'], 'Number');
            }
            if (data.hasOwnProperty('freeMargin')) {
                obj['freeMargin'] = ApiClient.convertToType(data['freeMargin'], 'Number');
            }
            if (data.hasOwnProperty('marginLevel')) {
                obj['marginLevel'] = ApiClient.convertToType(data['marginLevel'], 'Number');
            }
            if (data.hasOwnProperty('available')) {
                obj['available'] = ApiClient.convertToType(data['available'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    currency = undefined;
    logo = undefined;
    title = undefined;
    balance = undefined;
    equity = undefined;
    freeMargin = undefined;
    marginLevel = undefined;
    available = undefined;






    static CurrencyEnum = {
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined"    
    };



}




/**
 * @typedef CopyTradingAccountInfoCurrencyEnum 
 * @type {("GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR"|"Undefined")}
 */



