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
 * @interface InternalTransferRequest
 */

/**
 *
 * @name InternalTransferRequest#sourceId
 * @type {String}
 */
/**
 *
 * @name InternalTransferRequest#sourceType
 * @type InternalTransferRequestSourceTypeEnum
 */
/**
 *
 * @name InternalTransferRequest#destinationId
 * @type {String}
 */
/**
 *
 * @name InternalTransferRequest#destinationType
 * @type InternalTransferRequestDestinationTypeEnum
 */
/**
 *
 * @name InternalTransferRequest#amount
 * @type {Number}
 */
/**
 *
 * @name InternalTransferRequest#transferAll
 * @type {Boolean}
 */





export default class InternalTransferRequest {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new InternalTransferRequest();

            
            
            

            if (data.hasOwnProperty('sourceId')) {
                obj['sourceId'] = ApiClient.convertToType(data['sourceId'], 'String');
            }
            if (data.hasOwnProperty('sourceType')) {
                obj['sourceType'] = ApiClient.convertToType(data['sourceType'], 'String');
            }
            if (data.hasOwnProperty('destinationId')) {
                obj['destinationId'] = ApiClient.convertToType(data['destinationId'], 'String');
            }
            if (data.hasOwnProperty('destinationType')) {
                obj['destinationType'] = ApiClient.convertToType(data['destinationType'], 'String');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'Number');
            }
            if (data.hasOwnProperty('transferAll')) {
                obj['transferAll'] = ApiClient.convertToType(data['transferAll'], 'Boolean');
            }
        }
        return obj;
    }

    sourceId = undefined;
    sourceType = undefined;
    destinationId = undefined;
    destinationType = undefined;
    amount = undefined;
    transferAll = undefined;






    static SourceTypeEnum = {
    
        "Undefined": "Undefined",
    
        "Wallet": "Wallet",
    
        "CopyTradingAccount": "CopyTradingAccount",
    
        "GenesisVisionPlatform": "GenesisVisionPlatform",
    
        "SignalProviderSettings": "SignalProviderSettings"    
    };

    static DestinationTypeEnum = {
    
        "Undefined": "Undefined",
    
        "Wallet": "Wallet",
    
        "CopyTradingAccount": "CopyTradingAccount",
    
        "GenesisVisionPlatform": "GenesisVisionPlatform",
    
        "SignalProviderSettings": "SignalProviderSettings"    
    };



}




/**
 * @typedef InternalTransferRequestSourceTypeEnum 
 * @type {("Undefined"|"Wallet"|"CopyTradingAccount"|"GenesisVisionPlatform"|"SignalProviderSettings")}
 */

/**
 * @typedef InternalTransferRequestDestinationTypeEnum 
 * @type {("Undefined"|"Wallet"|"CopyTradingAccount"|"GenesisVisionPlatform"|"SignalProviderSettings")}
 */



