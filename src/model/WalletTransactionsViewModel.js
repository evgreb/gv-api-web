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
import WalletTransaction from './WalletTransaction';





/**
* The WalletTransactionsViewModel model module.
* @module model/WalletTransactionsViewModel
* @version v1.0
*/
export default class WalletTransactionsViewModel {
    /**
    * Constructs a new <code>WalletTransactionsViewModel</code>.
    * @alias module:model/WalletTransactionsViewModel
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>WalletTransactionsViewModel</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WalletTransactionsViewModel} obj Optional instance to populate.
    * @return {module:model/WalletTransactionsViewModel} The populated <code>WalletTransactionsViewModel</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WalletTransactionsViewModel();

            
            
            

            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [WalletTransaction]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Array.<module:model/WalletTransaction>} transactions
    */
    transactions = undefined;
    /**
    * @member {Number} total
    */
    total = undefined;








}


