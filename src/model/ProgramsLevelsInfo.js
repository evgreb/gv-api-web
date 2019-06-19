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
import LevelInfo from './LevelInfo';





/**
 *
 * @interface ProgramsLevelsInfo
 */

/**
 *
 * @name ProgramsLevelsInfo#levels
 * @type {Array<LevelInfo>}
 */





export default class ProgramsLevelsInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramsLevelsInfo();

            
            
            

            if (data.hasOwnProperty('levels')) {
                obj['levels'] = ApiClient.convertToType(data['levels'], [LevelInfo]);
            }
        }
        return obj;
    }

    levels = undefined;








}






