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
 * @interface ProgramWithdrawInfo
 */

/**
 *
 * @name ProgramWithdrawInfo#periodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramWithdrawInfo#title
 * @type {String}
 */
/**
 *
 * @name ProgramWithdrawInfo#availableToWithdraw
 * @type {Number}
 */
/**
 *
 * @name ProgramWithdrawInfo#rate
 * @type {Number}
 */





export default class ProgramWithdrawInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramWithdrawInfo();

            
            
            

            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
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

    periodEnds = undefined;
    title = undefined;
    availableToWithdraw = undefined;
    rate = undefined;








}





