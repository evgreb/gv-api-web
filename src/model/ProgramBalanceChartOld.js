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
import ProgramBalanceChartElementOld from './ProgramBalanceChartElementOld';





/**
 *
 * @interface ProgramBalanceChartOld
 */

/**
 *
 * @name ProgramBalanceChartOld#balance
 * @type {Number}
 */
/**
 *
 * @name ProgramBalanceChartOld#programCurrency
 * @type ProgramBalanceChartOldProgramCurrencyEnum
 */
/**
 *
 * @name ProgramBalanceChartOld#balanceChart
 * @type {Array<ProgramBalanceChartElementOld>}
 */





export default class ProgramBalanceChartOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramBalanceChartOld();

            
            
            

            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = ApiClient.convertToType(data['programCurrency'], 'String');
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [ProgramBalanceChartElementOld]);
            }
        }
        return obj;
    }

    balance = undefined;
    programCurrency = undefined;
    balanceChart = undefined;






    static ProgramCurrencyEnum = {
    
        "Undefined": "Undefined",
    
        "GVT": "GVT",
    
        "ETH": "ETH",
    
        "BTC": "BTC",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };



}




/**
 * @typedef ProgramBalanceChartOldProgramCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



