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
 * @interface SignalFee
 */

/**
 *
 * @name SignalFee#title
 * @type {String}
 */
/**
 *
 * @name SignalFee#type
 * @type SignalFeeTypeEnum
 */
/**
 *
 * @name SignalFee#value
 * @type {Number}
 */
/**
 *
 * @name SignalFee#currency
 * @type SignalFeeCurrencyEnum
 */





export default class SignalFee {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalFee();

            
            
            

            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
        }
        return obj;
    }

    title = undefined;
    type = undefined;
    value = undefined;
    currency = undefined;






    static TypeEnum = {
    
        "Undefined": "Undefined",
    
        "GvProgramEntry": "GvProgramEntry",
    
        "GvProgramSuccess": "GvProgramSuccess",
    
        "GvFundEntry": "GvFundEntry",
    
        "GvGmGvtHolderFee": "GvGmGvtHolderFee",
    
        "ManagerProgramEntry": "ManagerProgramEntry",
    
        "ManagerProgramSuccess": "ManagerProgramSuccess",
    
        "ManagerFundEntry": "ManagerFundEntry",
    
        "ManagerFundExit": "ManagerFundExit",
    
        "GvWithdrawal": "GvWithdrawal",
    
        "ManagerSignalMasterSuccessFee": "ManagerSignalMasterSuccessFee",
    
        "ManagerSignalMasterVolumeFee": "ManagerSignalMasterVolumeFee",
    
        "GvSignalSuccessFee": "GvSignalSuccessFee"    
    };

    static CurrencyEnum = {
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR",
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE"    
    };



}




/**
 * @typedef SignalFeeTypeEnum 
 * @type {("Undefined"|"GvProgramEntry"|"GvProgramSuccess"|"GvFundEntry"|"GvGmGvtHolderFee"|"ManagerProgramEntry"|"ManagerProgramSuccess"|"ManagerFundEntry"|"ManagerFundExit"|"GvWithdrawal"|"ManagerSignalMasterSuccessFee"|"ManagerSignalMasterVolumeFee"|"GvSignalSuccessFee")}
 */

/**
 * @typedef SignalFeeCurrencyEnum 
 * @type {("BNB"|"USD"|"EUR"|"Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE")}
 */



