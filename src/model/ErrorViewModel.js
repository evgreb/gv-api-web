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
import ErrorMessage from './ErrorMessage';





/**
 *
 * @interface ErrorViewModel
 */

/**
 *
 * @name ErrorViewModel#errors
 * @type {Array<ErrorMessage>}
 */
/**
 *
 * @name ErrorViewModel#code
 * @type ErrorViewModelCodeEnum
 */





export default class ErrorViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ErrorViewModel();

            
            
            

            if (data.hasOwnProperty('errors')) {
                obj['errors'] = ApiClient.convertToType(data['errors'], [ErrorMessage]);
            }
            if (data.hasOwnProperty('code')) {
                obj['code'] = ApiClient.convertToType(data['code'], 'String');
            }
        }
        return obj;
    }

    errors = undefined;
    code = undefined;






    static CodeEnum = {
    
        "InternalServerError": "InternalServerError",
    
        "ValidationError": "ValidationError",
    
        "RequiresTwoFactor": "RequiresTwoFactor",
    
        "WrongCaptcha": "WrongCaptcha"    
    };



}




/**
 * @typedef ErrorViewModelCodeEnum 
 * @type {("InternalServerError"|"ValidationError"|"RequiresTwoFactor"|"WrongCaptcha")}
 */


