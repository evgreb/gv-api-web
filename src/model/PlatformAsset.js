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
 * @interface PlatformAsset
 */

/**
 *
 * @name PlatformAsset#id
 * @type {String}
 */
/**
 *
 * @name PlatformAsset#name
 * @type {String}
 */
/**
 *
 * @name PlatformAsset#asset
 * @type {String}
 */
/**
 *
 * @name PlatformAsset#description
 * @type {String}
 */
/**
 *
 * @name PlatformAsset#icon
 * @type {String}
 */
/**
 *
 * @name PlatformAsset#color
 * @type {String}
 */
/**
 *
 * @name PlatformAsset#mandatoryFundPercent
 * @type {Number}
 */





export default class PlatformAsset {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformAsset();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('asset')) {
                obj['asset'] = ApiClient.convertToType(data['asset'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('icon')) {
                obj['icon'] = ApiClient.convertToType(data['icon'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('mandatoryFundPercent')) {
                obj['mandatoryFundPercent'] = ApiClient.convertToType(data['mandatoryFundPercent'], 'Number');
            }
        }
        return obj;
    }

    id = undefined;
    name = undefined;
    asset = undefined;
    description = undefined;
    icon = undefined;
    color = undefined;
    mandatoryFundPercent = undefined;








}






