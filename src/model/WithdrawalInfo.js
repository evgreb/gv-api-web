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
 * @interface WithdrawalInfo
 */

/**
 *
 * @name WithdrawalInfo#wallet
 * @type {String}
 */
/**
 *
 * @name WithdrawalInfo#status
 * @type WithdrawalInfoStatusEnum
 */
/**
 *
 * @name WithdrawalInfo#canResendEmail
 * @type {Boolean}
 */
/**
 *
 * @name WithdrawalInfo#canCancelRequest
 * @type {Boolean}
 */





export default class WithdrawalInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new WithdrawalInfo();

            
            
            

            if (data.hasOwnProperty('wallet')) {
                obj['wallet'] = ApiClient.convertToType(data['wallet'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('canResendEmail')) {
                obj['canResendEmail'] = ApiClient.convertToType(data['canResendEmail'], 'Boolean');
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'Boolean');
            }
        }
        return obj;
    }

    wallet = undefined;
    status = undefined;
    canResendEmail = undefined;
    canCancelRequest = undefined;






    static StatusEnum = {
    
        "New": "New",
    
        "InProcess": "InProcess",
    
        "Done": "Done",
    
        "Error": "Error",
    
        "Rejected": "Rejected",
    
        "Cancelled": "Cancelled"    
    };



}




/**
 * @typedef WithdrawalInfoStatusEnum 
 * @type {("New"|"InProcess"|"Done"|"Error"|"Rejected"|"Cancelled")}
 */


