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
 * @interface ManagerFundWithdrawInfoOld
 */

/**
 *
 * @name ManagerFundWithdrawInfoOld#withheldInvestment
 * @type {Number}
 */
/**
 *
 * @name ManagerFundWithdrawInfoOld#exitFee
 * @type {Number}
 */
/**
 *
 * @name ManagerFundWithdrawInfoOld#title
 * @type {String}
 */
/**
 *
 * @name ManagerFundWithdrawInfoOld#availableToWithdraw
 * @type {Number}
 */
/**
 *
 * @name ManagerFundWithdrawInfoOld#rate
 * @type {Number}
 */





export default class ManagerFundWithdrawInfoOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerFundWithdrawInfoOld();

            
            
            

            if (data.hasOwnProperty('withheldInvestment')) {
                obj['withheldInvestment'] = ApiClient.convertToType(data['withheldInvestment'], 'Number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'Number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('availableToWithdraw')) {
                obj['availableToWithdraw'] = ApiClient.convertToType(data['availableToWithdraw'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    withheldInvestment = undefined;
    exitFee = undefined;
    title = undefined;
    availableToWithdraw = undefined;
    rate = undefined;








}






