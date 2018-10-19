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
import AmountWithCurrency from './AmountWithCurrency';





/**
* The ProgramStatistic model module.
* @module model/ProgramStatistic
* @version v1.0
*/
export default class ProgramStatistic {
    /**
    * Constructs a new <code>ProgramStatistic</code>.
    * @alias module:model/ProgramStatistic
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramStatistic</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramStatistic} obj Optional instance to populate.
    * @return {module:model/ProgramStatistic} The populated <code>ProgramStatistic</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramStatistic();

            
            
            

            if (data.hasOwnProperty('balanceBase')) {
                obj['balanceBase'] = AmountWithCurrency.constructFromObject(data['balanceBase']);
            }
            if (data.hasOwnProperty('balanceGVT')) {
                obj['balanceGVT'] = AmountWithCurrency.constructFromObject(data['balanceGVT']);
            }
            if (data.hasOwnProperty('balanceSecondary')) {
                obj['balanceSecondary'] = AmountWithCurrency.constructFromObject(data['balanceSecondary']);
            }
            if (data.hasOwnProperty('currentValue')) {
                obj['currentValue'] = ApiClient.convertToType(data['currentValue'], 'Number');
            }
            if (data.hasOwnProperty('profitPercent')) {
                obj['profitPercent'] = ApiClient.convertToType(data['profitPercent'], 'Number');
            }
            if (data.hasOwnProperty('profitValue')) {
                obj['profitValue'] = ApiClient.convertToType(data['profitValue'], 'Number');
            }
            if (data.hasOwnProperty('drawdownPercent')) {
                obj['drawdownPercent'] = ApiClient.convertToType(data['drawdownPercent'], 'Number');
            }
            if (data.hasOwnProperty('investorsCount')) {
                obj['investorsCount'] = ApiClient.convertToType(data['investorsCount'], 'Number');
            }
            if (data.hasOwnProperty('startDate')) {
                obj['startDate'] = ApiClient.convertToType(data['startDate'], 'Date');
            }
            if (data.hasOwnProperty('startBalance')) {
                obj['startBalance'] = ApiClient.convertToType(data['startBalance'], 'Number');
            }
            if (data.hasOwnProperty('startCurrency')) {
                obj['startCurrency'] = ApiClient.convertToType(data['startCurrency'], 'String');
            }
            if (data.hasOwnProperty('investedAmount')) {
                obj['investedAmount'] = ApiClient.convertToType(data['investedAmount'], 'Number');
            }
            if (data.hasOwnProperty('investedCurrency')) {
                obj['investedCurrency'] = ApiClient.convertToType(data['investedCurrency'], 'String');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'Number');
            }
            if (data.hasOwnProperty('tradesSuccessCount')) {
                obj['tradesSuccessCount'] = ApiClient.convertToType(data['tradesSuccessCount'], 'Number');
            }
            if (data.hasOwnProperty('profitFactorPercent')) {
                obj['profitFactorPercent'] = ApiClient.convertToType(data['profitFactorPercent'], 'Number');
            }
            if (data.hasOwnProperty('sharpeRatioPercent')) {
                obj['sharpeRatioPercent'] = ApiClient.convertToType(data['sharpeRatioPercent'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {module:model/AmountWithCurrency} balanceBase
    */
    balanceBase = undefined;
    /**
    * @member {module:model/AmountWithCurrency} balanceGVT
    */
    balanceGVT = undefined;
    /**
    * @member {module:model/AmountWithCurrency} balanceSecondary
    */
    balanceSecondary = undefined;
    /**
    * @member {Number} currentValue
    */
    currentValue = undefined;
    /**
    * @member {Number} profitPercent
    */
    profitPercent = undefined;
    /**
    * @member {Number} profitValue
    */
    profitValue = undefined;
    /**
    * @member {Number} drawdownPercent
    */
    drawdownPercent = undefined;
    /**
    * @member {Number} investorsCount
    */
    investorsCount = undefined;
    /**
    * @member {Date} startDate
    */
    startDate = undefined;
    /**
    * @member {Number} startBalance
    */
    startBalance = undefined;
    /**
    * @member {module:model/ProgramStatistic.StartCurrencyEnum} startCurrency
    */
    startCurrency = undefined;
    /**
    * @member {Number} investedAmount
    */
    investedAmount = undefined;
    /**
    * @member {module:model/ProgramStatistic.InvestedCurrencyEnum} investedCurrency
    */
    investedCurrency = undefined;
    /**
    * @member {Number} tradesCount
    */
    tradesCount = undefined;
    /**
    * @member {Number} tradesSuccessCount
    */
    tradesSuccessCount = undefined;
    /**
    * @member {Number} profitFactorPercent
    */
    profitFactorPercent = undefined;
    /**
    * @member {Number} sharpeRatioPercent
    */
    sharpeRatioPercent = undefined;






    /**
    * Allowed values for the <code>startCurrency</code> property.
    * @enum {String}
    * @readonly
    */
    static StartCurrencyEnum = {
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };

    /**
    * Allowed values for the <code>investedCurrency</code> property.
    * @enum {String}
    * @readonly
    */
    static InvestedCurrencyEnum = {
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "ETH"
         * @const
         */
        "ETH": "ETH",
    
        /**
         * value: "BTC"
         * @const
         */
        "BTC": "BTC",
    
        /**
         * value: "ADA"
         * @const
         */
        "ADA": "ADA",
    
        /**
         * value: "USDT"
         * @const
         */
        "USDT": "USDT",
    
        /**
         * value: "XRP"
         * @const
         */
        "XRP": "XRP",
    
        /**
         * value: "BCH"
         * @const
         */
        "BCH": "BCH",
    
        /**
         * value: "LTC"
         * @const
         */
        "LTC": "LTC",
    
        /**
         * value: "DOGE"
         * @const
         */
        "DOGE": "DOGE",
    
        /**
         * value: "USD"
         * @const
         */
        "USD": "USD",
    
        /**
         * value: "EUR"
         * @const
         */
        "EUR": "EUR"    
    };



}


