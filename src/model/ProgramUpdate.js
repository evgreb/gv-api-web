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
 * @interface ProgramUpdate
 */

/**
 *
 * @name ProgramUpdate#title
 * @type {String}
 */
/**
 *
 * @name ProgramUpdate#description
 * @type {String}
 */
/**
 *
 * @name ProgramUpdate#logo
 * @type {String}
 */
/**
 *
 * @name ProgramUpdate#feeEntrance
 * @type {Number}
 */
/**
 *
 * @name ProgramUpdate#feeSuccess
 * @type {Number}
 */
/**
 *
 * @name ProgramUpdate#stopOutLevel
 * @type {Number}
 */
/**
 *
 * @name ProgramUpdate#investmentLimit
 * @type {Number}
 */





export default class ProgramUpdate {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramUpdate();

            
            
            

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('feeEntrance')) {
                obj['feeEntrance'] = ApiClient.convertToType(data['feeEntrance'], 'Number');
            }
            if (data.hasOwnProperty('feeSuccess')) {
                obj['feeSuccess'] = ApiClient.convertToType(data['feeSuccess'], 'Number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'Number');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'Number');
            }
        }
        return obj;
    }

    title = undefined;
    description = undefined;
    logo = undefined;
    feeEntrance = undefined;
    feeSuccess = undefined;
    stopOutLevel = undefined;
    investmentLimit = undefined;








}






