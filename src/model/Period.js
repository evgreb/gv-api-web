/**
 * Core API v2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import InvestmentProgramRequest from './InvestmentProgramRequest';





/**
* The Period model module.
* @module model/Period
* @version v2.0
*/
export default class Period {
    /**
    * Constructs a new <code>Period</code>.
    * @alias module:model/Period
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>Period</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/Period} obj Optional instance to populate.
    * @return {module:model/Period} The populated <code>Period</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new Period();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('dateTo')) {
                obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('startBalance')) {
                obj['startBalance'] = ApiClient.convertToType(data['startBalance'], 'Number');
            }
            if (data.hasOwnProperty('managerStartBalance')) {
                obj['managerStartBalance'] = ApiClient.convertToType(data['managerStartBalance'], 'Number');
            }
            if (data.hasOwnProperty('managerStartShare')) {
                obj['managerStartShare'] = ApiClient.convertToType(data['managerStartShare'], 'Number');
            }
            if (data.hasOwnProperty('processStatus')) {
                obj['processStatus'] = ApiClient.convertToType(data['processStatus'], 'String');
            }
            if (data.hasOwnProperty('investmentRequest')) {
                obj['investmentRequest'] = ApiClient.convertToType(data['investmentRequest'], [InvestmentProgramRequest]);
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {Number} number
    */
    number = undefined;
    /**
    * @member {Date} dateFrom
    */
    dateFrom = undefined;
    /**
    * @member {Date} dateTo
    */
    dateTo = undefined;
    /**
    * @member {module:model/Period.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {Number} startBalance
    */
    startBalance = undefined;
    /**
    * @member {Number} managerStartBalance
    */
    managerStartBalance = undefined;
    /**
    * @member {Number} managerStartShare
    */
    managerStartShare = undefined;
    /**
    * @member {module:model/Period.ProcessStatusEnum} processStatus
    */
    processStatus = undefined;
    /**
    * @member {Array.<module:model/InvestmentProgramRequest>} investmentRequest
    */
    investmentRequest = undefined;






    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "Planned"
         * @const
         */
        "Planned": "Planned",
    
        /**
         * value: "InProccess"
         * @const
         */
        "InProccess": "InProccess",
    
        /**
         * value: "Closed"
         * @const
         */
        "Closed": "Closed"    
    };

    /**
    * Allowed values for the <code>processStatus</code> property.
    * @enum {String}
    * @readonly
    */
    static ProcessStatusEnum = {
    
        /**
         * value: "None"
         * @const
         */
        "None": "None",
    
        /**
         * value: "AccrueProfitsDone"
         * @const
         */
        "AccrueProfitsDone": "AccrueProfitsDone",
    
        /**
         * value: "ReevaluateManagerTokenDone"
         * @const
         */
        "ReevaluateManagerTokenDone": "ReevaluateManagerTokenDone",
    
        /**
         * value: "ProcessInvestmentRequestsDone"
         * @const
         */
        "ProcessInvestmentRequestsDone": "ProcessInvestmentRequestsDone",
    
        /**
         * value: "ClosePeriodDone"
         * @const
         */
        "ClosePeriodDone": "ClosePeriodDone"    
    };



}


