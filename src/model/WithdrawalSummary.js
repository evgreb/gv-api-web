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
import WalletWithdrawalInfo from './WalletWithdrawalInfo';





/**
* The WithdrawalSummary model module.
* @module model/WithdrawalSummary
* @version v1.0
*/
export default class WithdrawalSummary {
    /**
    * Constructs a new <code>WithdrawalSummary</code>.
    * @alias module:model/WithdrawalSummary
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>WithdrawalSummary</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/WithdrawalSummary} obj Optional instance to populate.
    * @return {module:model/WithdrawalSummary} The populated <code>WithdrawalSummary</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WithdrawalSummary();

            
            
            

            if (data.hasOwnProperty('availableToWithdrawal')) {
                obj['availableToWithdrawal'] = ApiClient.convertToType(data['availableToWithdrawal'], 'Number');
            }
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletWithdrawalInfo]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} availableToWithdrawal
    */
    availableToWithdrawal = undefined;
    /**
    * @member {Array.<module:model/WalletWithdrawalInfo>} wallets
    */
    wallets = undefined;








}


