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
     * @interface ProgramTag
     */
    
    /**
     *
     * @name ProgramTag#name
     * @type {("Crypto"|"Forex"|"HighRisk"|"Signal")}
     */
    /**
     *
     * @name ProgramTag#color
     * @type {String}
     */





export default class ProgramTag {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramTag();

            
            
            

            if (data.hasOwnProperty('name')) {
                obj['name'] = ApiClient.convertToType(data['name'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
        }
        return obj;
    }

    name = undefined;
    color = undefined;






    static NameEnum = {
    
        "Crypto": "Crypto",
    
        "Forex": "Forex",
    
        "HighRisk": "HighRisk",
    
        "Signal": "Signal"    
    };



}


