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
     * @interface ManagerPortfolioEvent
     */
    
    /**
     *
     * @name ManagerPortfolioEvent#assetId
     * @type {String}
     */
    /**
     *
     * @name ManagerPortfolioEvent#date
     * @type {Date}
     */
    /**
     *
     * @name ManagerPortfolioEvent#title
     * @type {String}
     */
    /**
     *
     * @name ManagerPortfolioEvent#value
     * @type {Number}
     */
    /**
     *
     * @name ManagerPortfolioEvent#feeValue
     * @type {Number}
     */
    /**
     *
     * @name ManagerPortfolioEvent#profitPercent
     * @type {Number}
     */
    /**
     *
     * @name ManagerPortfolioEvent#currency
     * @type {("BTC"|"GVT"|"Undefined"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name ManagerPortfolioEvent#type
     * @type {("All"|"AssetStarted"|"ProgramPeriodStats"|"ProgramPeriodEnds"|"InvestorInvest"|"InvestorWithdraw"|"ManagerInvest"|"ManagerWithdraw"|"AssetFinished"|"EntranceFee"|"ExitFee")}
     */
    /**
     *
     * @name ManagerPortfolioEvent#programType
     * @type {("Program"|"Fund")}
     */
    /**
     *
     * @name ManagerPortfolioEvent#logo
     * @type {String}
     */
    /**
     *
     * @name ManagerPortfolioEvent#color
     * @type {String}
     */
    /**
     *
     * @name ManagerPortfolioEvent#description
     * @type {String}
     */
    /**
     *
     * @name ManagerPortfolioEvent#periodNumber
     * @type {Number}
     */





export default class ManagerPortfolioEvent {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ManagerPortfolioEvent();

            
            
            

            if (data.hasOwnProperty('assetId')) {
                obj['assetId'] = ApiClient.convertToType(data['assetId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('feeValue')) {
                obj['feeValue'] = ApiClient.convertToType(data['feeValue'], 'Number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = ApiClient.convertToType(data['programType'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('periodNumber')) {
                obj['periodNumber'] = ApiClient.convertToType(data['periodNumber'], 'Number');
            }
        }
        return obj;
    }

    assetId = undefined;
    date = undefined;
    title = undefined;
    value = undefined;
    feeValue = undefined;
    profitPercent = undefined;
    currency = undefined;
    type = undefined;
    programType = undefined;
    logo = undefined;
    color = undefined;
    description = undefined;
    periodNumber = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ETH": "ETH",
    
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

    static TypeEnum = {
    
        "All": "All",
    
        "AssetStarted": "AssetStarted",
    
        "ProgramPeriodStats": "ProgramPeriodStats",
    
        "ProgramPeriodEnds": "ProgramPeriodEnds",
    
        "InvestorInvest": "InvestorInvest",
    
        "InvestorWithdraw": "InvestorWithdraw",
    
        "ManagerInvest": "ManagerInvest",
    
        "ManagerWithdraw": "ManagerWithdraw",
    
        "AssetFinished": "AssetFinished",
    
        "EntranceFee": "EntranceFee",
    
        "ExitFee": "ExitFee"    
    };

    static ProgramTypeEnum = {
    
        "Program": "Program",
    
        "Fund": "Fund"    
    };



}


