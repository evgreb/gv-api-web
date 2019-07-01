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
 * @interface UpdateSocialLinkViewModel
 */

/**
 *
 * @name UpdateSocialLinkViewModel#type
 * @type UpdateSocialLinkViewModelTypeEnum
 */
/**
 *
 * @name UpdateSocialLinkViewModel#value
 * @type {String}
 */





export default class UpdateSocialLinkViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new UpdateSocialLinkViewModel();

            
            
            

            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'String');
            }
        }
        return obj;
    }

    type = undefined;
    value = undefined;






    static TypeEnum = {
    
        "Twitter": "Twitter",
    
        "Telegram": "Telegram",
    
        "Facebook": "Facebook",
    
        "LinkedIn": "LinkedIn",
    
        "Youtube": "Youtube",
    
        "WeChat": "WeChat",
    
        "Email": "Email",
    
        "Undefined": "Undefined"    
    };



}




/**
 * @typedef UpdateSocialLinkViewModelTypeEnum 
 * @type {("Twitter"|"Telegram"|"Facebook"|"LinkedIn"|"Youtube"|"WeChat"|"Email"|"Undefined")}
 */



