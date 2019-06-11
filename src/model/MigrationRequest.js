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
 * @interface MigrationRequest
 */

/**
 *
 * @name MigrationRequest#dateCreate
 * @type {Date}
 */
/**
 *
 * @name MigrationRequest#newLeverage
 * @type {Number}
 */
/**
 *
 * @name MigrationRequest#brokerTradingAccountId
 * @type {String}
 */
/**
 *
 * @name MigrationRequest#brokerTradingAccountName
 * @type {String}
 */
/**
 *
 * @name MigrationRequest#brokerName
 * @type {String}
 */





export default class MigrationRequest {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new MigrationRequest();

            
            
            

            if (data.hasOwnProperty('dateCreate')) {
                obj['dateCreate'] = ApiClient.convertToType(data['dateCreate'], 'Date');
            }
            if (data.hasOwnProperty('newLeverage')) {
                obj['newLeverage'] = ApiClient.convertToType(data['newLeverage'], 'Number');
            }
            if (data.hasOwnProperty('brokerTradingAccountId')) {
                obj['brokerTradingAccountId'] = ApiClient.convertToType(data['brokerTradingAccountId'], 'String');
            }
            if (data.hasOwnProperty('brokerTradingAccountName')) {
                obj['brokerTradingAccountName'] = ApiClient.convertToType(data['brokerTradingAccountName'], 'String');
            }
            if (data.hasOwnProperty('brokerName')) {
                obj['brokerName'] = ApiClient.convertToType(data['brokerName'], 'String');
            }
        }
        return obj;
    }

    dateCreate = undefined;
    newLeverage = undefined;
    brokerTradingAccountId = undefined;
    brokerTradingAccountName = undefined;
    brokerName = undefined;








}






