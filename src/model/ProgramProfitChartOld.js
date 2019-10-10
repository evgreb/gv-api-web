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
import ChartSimple from './ChartSimple';
import PeriodDate from './PeriodDate';





/**
 *
 * @interface ProgramProfitChartOld
 */

/**
 *
 * @name ProgramProfitChartOld#equityChart
 * @type {Array<ChartSimple>}
 */
/**
 *
 * @name ProgramProfitChartOld#totalProfit
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#timeframeProfit
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#programCurrency
 * @type ProgramProfitChartOldProgramCurrencyEnum
 */
/**
 *
 * @name ProgramProfitChartOld#trades
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#successTradesPercent
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#profitFactor
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#periods
 * @type {Array<PeriodDate>}
 */
/**
 *
 * @name ProgramProfitChartOld#lastPeriodStarts
 * @type {Date}
 */
/**
 *
 * @name ProgramProfitChartOld#lastPeriodEnds
 * @type {Date}
 */
/**
 *
 * @name ProgramProfitChartOld#tradingVolume
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#balance
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#investors
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#profitChangePercent
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#sharpeRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#sortinoRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#calmarRatio
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#maxDrawdown
 * @type {Number}
 */
/**
 *
 * @name ProgramProfitChartOld#rate
 * @type {Number}
 */





export default class ProgramProfitChartOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramProfitChartOld();

            
            
            

            if (data.hasOwnProperty('equityChart')) {
                obj['equityChart'] = ApiClient.convertToType(data['equityChart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('totalProfit')) {
                obj['totalProfit'] = ApiClient.convertToType(data['totalProfit'], 'Number');
            }
            if (data.hasOwnProperty('timeframeProfit')) {
                obj['timeframeProfit'] = ApiClient.convertToType(data['timeframeProfit'], 'Number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = ApiClient.convertToType(data['programCurrency'], 'String');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'Number');
            }
            if (data.hasOwnProperty('successTradesPercent')) {
                obj['successTradesPercent'] = ApiClient.convertToType(data['successTradesPercent'], 'Number');
            }
            if (data.hasOwnProperty('profitFactor')) {
                obj['profitFactor'] = ApiClient.convertToType(data['profitFactor'], 'Number');
            }
            if (data.hasOwnProperty('periods')) {
                obj['periods'] = ApiClient.convertToType(data['periods'], [PeriodDate]);
            }
            if (data.hasOwnProperty('lastPeriodStarts')) {
                obj['lastPeriodStarts'] = ApiClient.convertToType(data['lastPeriodStarts'], 'Date');
            }
            if (data.hasOwnProperty('lastPeriodEnds')) {
                obj['lastPeriodEnds'] = ApiClient.convertToType(data['lastPeriodEnds'], 'Date');
            }
            if (data.hasOwnProperty('tradingVolume')) {
                obj['tradingVolume'] = ApiClient.convertToType(data['tradingVolume'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'Number');
            }
            if (data.hasOwnProperty('profitChangePercent')) {
                obj['profitChangePercent'] = ApiClient.convertToType(data['profitChangePercent'], 'Number');
            }
            if (data.hasOwnProperty('sharpeRatio')) {
                obj['sharpeRatio'] = ApiClient.convertToType(data['sharpeRatio'], 'Number');
            }
            if (data.hasOwnProperty('sortinoRatio')) {
                obj['sortinoRatio'] = ApiClient.convertToType(data['sortinoRatio'], 'Number');
            }
            if (data.hasOwnProperty('calmarRatio')) {
                obj['calmarRatio'] = ApiClient.convertToType(data['calmarRatio'], 'Number');
            }
            if (data.hasOwnProperty('maxDrawdown')) {
                obj['maxDrawdown'] = ApiClient.convertToType(data['maxDrawdown'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    equityChart = undefined;
    totalProfit = undefined;
    timeframeProfit = undefined;
    programCurrency = undefined;
    trades = undefined;
    successTradesPercent = undefined;
    profitFactor = undefined;
    periods = undefined;
    lastPeriodStarts = undefined;
    lastPeriodEnds = undefined;
    tradingVolume = undefined;
    balance = undefined;
    investors = undefined;
    profitChangePercent = undefined;
    sharpeRatio = undefined;
    sortinoRatio = undefined;
    calmarRatio = undefined;
    maxDrawdown = undefined;
    rate = undefined;






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
 * @typedef ProgramProfitChartOldProgramCurrencyEnum 
 * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
 */



