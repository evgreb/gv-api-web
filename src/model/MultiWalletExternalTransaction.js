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
import Currency from './Currency';
import MultiWalletExternalTransactionType from './MultiWalletExternalTransactionType';





/**
 *
 * @interface MultiWalletExternalTransaction
 */

/**
 *
 * @name MultiWalletExternalTransaction#id
 * @type {String}
 */
/**
 *
 * @name MultiWalletExternalTransaction#currency
 * @type {Currency}
 */
/**
 *
 * @name MultiWalletExternalTransaction#logo
 * @type {String}
 */
/**
 *
 * @name MultiWalletExternalTransaction#date
 * @type {Date}
 */
/**
 *
 * @name MultiWalletExternalTransaction#amount
 * @type {Number}
 */
/**
 *
 * @name MultiWalletExternalTransaction#type
 * @type {MultiWalletExternalTransactionType}
 */
/**
 *
 * @name MultiWalletExternalTransaction#status
 * @type {String}
 */
/**
 *
 * @name MultiWalletExternalTransaction#isEnableActions
 * @type {Boolean}
 */
/**
 *
 * @name MultiWalletExternalTransaction#statusUrl
 * @type {String}
 */





export default class MultiWalletExternalTransaction {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MultiWalletExternalTransaction();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = MultiWalletExternalTransactionType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('isEnableActions')) {
                obj['isEnableActions'] = ApiClient.convertToType(data['isEnableActions'], 'Boolean');
            }
            if (data.hasOwnProperty('statusUrl')) {
                obj['statusUrl'] = ApiClient.convertToType(data['statusUrl'], 'String');
            }
        }
        return obj;
    }

    id = undefined;
    currency = undefined;
    logo = undefined;
    date = undefined;
    amount = undefined;
    type = undefined;
    status = undefined;
    isEnableActions = undefined;
    statusUrl = undefined;








}






