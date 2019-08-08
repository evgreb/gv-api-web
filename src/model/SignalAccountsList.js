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
import SignalAccountDetails from './SignalAccountDetails';





/**
 *
 * @interface SignalAccountsList
 */

/**
 *
 * @name SignalAccountsList#signalAccounts
 * @type {Array<SignalAccountDetails>}
 */
/**
 *
 * @name SignalAccountsList#total
 * @type {Number}
 */





export default class SignalAccountsList {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalAccountsList();

            
            
            

            if (data.hasOwnProperty('signalAccounts')) {
                obj['signalAccounts'] = ApiClient.convertToType(data['signalAccounts'], [SignalAccountDetails]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    signalAccounts = undefined;
    total = undefined;








}





