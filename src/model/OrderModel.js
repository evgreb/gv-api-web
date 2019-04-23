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
 * @interface OrderModel
 */

/**
 *
 * @name OrderModel#id
 * @type {String}
 */
/**
 *
 * @name OrderModel#login
 * @type {String}
 */
/**
 *
 * @name OrderModel#ticket
 * @type {String}
 */
/**
 *
 * @name OrderModel#symbol
 * @type {String}
 */
/**
 *
 * @name OrderModel#volume
 * @type {Number}
 */
/**
 *
 * @name OrderModel#profit
 * @type {Number}
 */
/**
 *
 * @name OrderModel#direction
 * @type OrderModelDirectionEnum
 */
/**
 *
 * @name OrderModel#date
 * @type {Date}
 */
/**
 *
 * @name OrderModel#price
 * @type {Number}
 */
/**
 *
 * @name OrderModel#priceCurrent
 * @type {Number}
 */
/**
 *
 * @name OrderModel#entry
 * @type OrderModelEntryEnum
 */
/**
 *
 * @name OrderModel#baseVolume
 * @type {Number}
 */
/**
 *
 * @name OrderModel#originalCommission
 * @type {Number}
 */
/**
 *
 * @name OrderModel#originalCommissionCurrency
 * @type {String}
 */
/**
 *
 * @name OrderModel#commission
 * @type {Number}
 */
/**
 *
 * @name OrderModel#swap
 * @type {Number}
 */
/**
 *
 * @name OrderModel#showOriginalCommission
 * @type {Boolean}
 */
/**
 *
 * @name OrderModel#masterLogin
 * @type {String}
 */





export default class OrderModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('priceCurrent')) {
                obj['priceCurrent'] = ApiClient.convertToType(data['priceCurrent'], 'Number');
            }
            if (data.hasOwnProperty('entry')) {
                obj['entry'] = ApiClient.convertToType(data['entry'], 'String');
            }
            if (data.hasOwnProperty('baseVolume')) {
                obj['baseVolume'] = ApiClient.convertToType(data['baseVolume'], 'Number');
            }
            if (data.hasOwnProperty('originalCommission')) {
                obj['originalCommission'] = ApiClient.convertToType(data['originalCommission'], 'Number');
            }
            if (data.hasOwnProperty('originalCommissionCurrency')) {
                obj['originalCommissionCurrency'] = ApiClient.convertToType(data['originalCommissionCurrency'], 'String');
            }
            if (data.hasOwnProperty('commission')) {
                obj['commission'] = ApiClient.convertToType(data['commission'], 'Number');
            }
            if (data.hasOwnProperty('swap')) {
                obj['swap'] = ApiClient.convertToType(data['swap'], 'Number');
            }
            if (data.hasOwnProperty('showOriginalCommission')) {
                obj['showOriginalCommission'] = ApiClient.convertToType(data['showOriginalCommission'], 'Boolean');
            }
            if (data.hasOwnProperty('masterLogin')) {
                obj['masterLogin'] = ApiClient.convertToType(data['masterLogin'], 'String');
            }
        }
        return obj;
    }

    id = undefined;
    login = undefined;
    ticket = undefined;
    symbol = undefined;
    volume = undefined;
    profit = undefined;
    direction = undefined;
    date = undefined;
    price = undefined;
    priceCurrent = undefined;
    entry = undefined;
    baseVolume = undefined;
    originalCommission = undefined;
    originalCommissionCurrency = undefined;
    commission = undefined;
    swap = undefined;
    showOriginalCommission = undefined;
    masterLogin = undefined;






    static DirectionEnum = {
    
        "Buy": "Buy",
    
        "Sell": "Sell",
    
        "Balance": "Balance",
    
        "Credit": "Credit",
    
        "Undefined": "Undefined"    
    };

    static EntryEnum = {
    
        "In": "In",
    
        "Out": "Out",
    
        "InOut": "InOut",
    
        "OutBy": "OutBy"    
    };



}




/**
 * @typedef OrderModelDirectionEnum 
 * @type {("Buy"|"Sell"|"Balance"|"Credit"|"Undefined")}
 */

/**
 * @typedef OrderModelEntryEnum 
 * @type {("In"|"Out"|"InOut"|"OutBy")}
 */



