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
import ChartProgramDetails from './ChartProgramDetails';
import ChartSimple from './ChartSimple';





/**
* The ProgramChart model module.
* @module model/ProgramChart
* @version v1.0
*/
export default class ProgramChart {
    /**
    * Constructs a new <code>ProgramChart</code>.
    * @alias module:model/ProgramChart
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramChart</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramChart} obj Optional instance to populate.
    * @return {module:model/ProgramChart} The populated <code>ProgramChart</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramChart();

            
            
            

            if (data.hasOwnProperty('equity')) {
                obj['equity'] = ApiClient.convertToType(data['equity'], 'Number');
            }
            if (data.hasOwnProperty('totalProfit')) {
                obj['totalProfit'] = ApiClient.convertToType(data['totalProfit'], 'Number');
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
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartProgramDetails]);
            }
            if (data.hasOwnProperty('pnLChart')) {
                obj['pnLChart'] = ApiClient.convertToType(data['pnLChart'], [ChartSimple]);
            }
        }
        return obj;
    }

    /**
    * @member {Number} equity
    */
    equity = undefined;
    /**
    * @member {Number} totalProfit
    */
    totalProfit = undefined;
    /**
    * @member {Number} sharpeRatio
    */
    sharpeRatio = undefined;
    /**
    * @member {Number} sortinoRatio
    */
    sortinoRatio = undefined;
    /**
    * @member {Number} calmarRatio
    */
    calmarRatio = undefined;
    /**
    * @member {Array.<module:model/ChartProgramDetails>} chart
    */
    chart = undefined;
    /**
    * @member {Array.<module:model/ChartSimple>} pnLChart
    */
    pnLChart = undefined;








}


