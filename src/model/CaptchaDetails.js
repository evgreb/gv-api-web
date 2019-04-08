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
import GeeTestDetails from './GeeTestDetails';
import PowDetails from './PowDetails';





    /**
     *
     * @interface CaptchaDetails
     */
    
    /**
     *
     * @name CaptchaDetails#captchaType
     * @type {("None"|"Pow"|"GeeTest")}
     */
    /**
     *
     * @name CaptchaDetails#id
     * @type {String}
     */
    /**
     *
     * @name CaptchaDetails#route
     * @type {String}
     */
    /**
     *
     * @name CaptchaDetails#pow
     * @type {PowDetails}
     */
    /**
     *
     * @name CaptchaDetails#geeTest
     * @type {GeeTestDetails}
     */





export default class CaptchaDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new CaptchaDetails();

            
            
            

            if (data.hasOwnProperty('captchaType')) {
                obj['captchaType'] = ApiClient.convertToType(data['captchaType'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('route')) {
                obj['route'] = ApiClient.convertToType(data['route'], 'String');
            }
            if (data.hasOwnProperty('pow')) {
                obj['pow'] = PowDetails.constructFromObject(data['pow']);
            }
            if (data.hasOwnProperty('geeTest')) {
                obj['geeTest'] = GeeTestDetails.constructFromObject(data['geeTest']);
            }
        }
        return obj;
    }

    captchaType = undefined;
    id = undefined;
    route = undefined;
    pow = undefined;
    geeTest = undefined;






    static CaptchaTypeEnum = {
    
        "None": "None",
    
        "Pow": "Pow",
    
        "GeeTest": "GeeTest"    
    };



}


