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
     * @interface ProgramProfitChart
     */
    
    /**
     *
     * @name ProgramProfitChart#totalProgramCurrencyProfit
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#timeframeProgramCurrencyProfit
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#programCurrency
     * @type {("Undefined"|"GVT"|"ETH"|"BTC"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name ProgramProfitChart#trades
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#successTradesPercent
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#profitFactor
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#pnLChart
     * @type {[ChartSimple]}
     */
    /**
     *
     * @name ProgramProfitChart#periods
     * @type {[PeriodDate]}
     */
    /**
     *
     * @name ProgramProfitChart#lastPeriodStarts
     * @type {Date}
     */
    /**
     *
     * @name ProgramProfitChart#lastPeriodEnds
     * @type {Date}
     */
    /**
     *
     * @name ProgramProfitChart#equityChart
     * @type {[ChartSimple]}
     */
    /**
     *
     * @name ProgramProfitChart#balance
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#investors
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#profitChangePercent
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#sharpeRatio
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#sortinoRatio
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#calmarRatio
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#maxDrawdown
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#totalGvtProfit
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#timeframeGvtProfit
     * @type {Number}
     */
    /**
     *
     * @name ProgramProfitChart#rate
     * @type {Number}
     */





export default class ProgramProfitChart {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramProfitChart();

            
            
            

            if (data.hasOwnProperty('totalProgramCurrencyProfit')) {
                obj['totalProgramCurrencyProfit'] = ApiClient.convertToType(data['totalProgramCurrencyProfit'], 'Number');
            }
            if (data.hasOwnProperty('timeframeProgramCurrencyProfit')) {
                obj['timeframeProgramCurrencyProfit'] = ApiClient.convertToType(data['timeframeProgramCurrencyProfit'], 'Number');
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
            if (data.hasOwnProperty('pnLChart')) {
                obj['pnLChart'] = ApiClient.convertToType(data['pnLChart'], [ChartSimple]);
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
            if (data.hasOwnProperty('equityChart')) {
                obj['equityChart'] = ApiClient.convertToType(data['equityChart'], [ChartSimple]);
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
            if (data.hasOwnProperty('totalGvtProfit')) {
                obj['totalGvtProfit'] = ApiClient.convertToType(data['totalGvtProfit'], 'Number');
            }
            if (data.hasOwnProperty('timeframeGvtProfit')) {
                obj['timeframeGvtProfit'] = ApiClient.convertToType(data['timeframeGvtProfit'], 'Number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'Number');
            }
        }
        return obj;
    }

    totalProgramCurrencyProfit = undefined;
    timeframeProgramCurrencyProfit = undefined;
    programCurrency = undefined;
    trades = undefined;
    successTradesPercent = undefined;
    profitFactor = undefined;
    pnLChart = undefined;
    periods = undefined;
    lastPeriodStarts = undefined;
    lastPeriodEnds = undefined;
    equityChart = undefined;
    balance = undefined;
    investors = undefined;
    profitChangePercent = undefined;
    sharpeRatio = undefined;
    sortinoRatio = undefined;
    calmarRatio = undefined;
    maxDrawdown = undefined;
    totalGvtProfit = undefined;
    timeframeGvtProfit = undefined;
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


