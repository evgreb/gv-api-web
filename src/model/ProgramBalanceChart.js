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
import ProgramBalanceChartElement from './ProgramBalanceChartElement';





/**
* The ProgramBalanceChart model module.
* @module model/ProgramBalanceChart
* @version v1.0
*/
export default class ProgramBalanceChart {
    /**
    * Constructs a new <code>ProgramBalanceChart</code>.
    * @alias module:model/ProgramBalanceChart
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramBalanceChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramBalanceChart} obj Optional instance to populate.
    * @return {module:model/ProgramBalanceChart} The populated <code>ProgramBalanceChart</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramBalanceChart();

            
            
            

            if (data.hasOwnProperty('programCurrencyBalance')) {
                obj['programCurrencyBalance'] = ApiClient.convertToType(data['programCurrencyBalance'], 'Number');
            }
            if (data.hasOwnProperty('programCurrency')) {
                obj['programCurrency'] = ApiClient.convertToType(data['programCurrency'], 'String');
            }
            if (data.hasOwnProperty('balanceChart')) {
                obj['balanceChart'] = ApiClient.convertToType(data['balanceChart'], [ProgramBalanceChartElement]);
            }
            if (data.hasOwnProperty('gvtBalance')) {
                obj['gvtBalance'] = ApiClient.convertToType(data['gvtBalance'], 'Number');
            }
        }
        return obj;
    }

    /**
    * @member {Number} programCurrencyBalance
    */
    programCurrencyBalance = undefined;
    /**
    * @member {module:model/ProgramBalanceChart.ProgramCurrencyEnum} programCurrency
    */
    programCurrency = undefined;
    /**
    * @member {Array.<module:model/ProgramBalanceChartElement>} balanceChart
    */
    balanceChart = undefined;
    /**
    * @member {Number} gvtBalance
    */
    gvtBalance = undefined;






    /**
    * Allowed values for the <code>programCurrency</code> property.
    * @enum {String}
    * @readonly
    */
    static ProgramCurrencyEnum = {
    
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


