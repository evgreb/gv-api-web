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
import ManagerProfile from './ManagerProfile';
import PersonalProgramDetailsList from './PersonalProgramDetailsList';
import ProgramDetailsListStatistic from './ProgramDetailsListStatistic';





/**
* The ProgramDetails model module.
* @module model/ProgramDetails
* @version v1.0
*/
export default class ProgramDetails {
    /**
    * Constructs a new <code>ProgramDetails</code>.
    * @alias module:model/ProgramDetails
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramDetails</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramDetails} obj Optional instance to populate.
    * @return {module:model/ProgramDetails} The populated <code>ProgramDetails</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetails();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'Number');
            }
            if (data.hasOwnProperty('periodDateStart')) {
                obj['periodDateStart'] = ApiClient.convertToType(data['periodDateStart'], 'Date');
            }
            if (data.hasOwnProperty('periodDateEnd')) {
                obj['periodDateEnd'] = ApiClient.convertToType(data['periodDateEnd'], 'Date');
            }
            if (data.hasOwnProperty('availableForInvestment')) {
                obj['availableForInvestment'] = ApiClient.convertToType(data['availableForInvestment'], 'Number');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ManagerProfile.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramDetailsListStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartSimple]);
            }
            if (data.hasOwnProperty('personalProgramDetails')) {
                obj['personalProgramDetails'] = PersonalProgramDetailsList.constructFromObject(data['personalProgramDetails']);
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} avatar
    */
    avatar = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {module:model/ProgramDetails.CurrencyEnum} currency
    */
    currency = undefined;
    /**
    * @member {Number} level
    */
    level = undefined;
    /**
    * @member {Number} periodDuration
    */
    periodDuration = undefined;
    /**
    * @member {Date} periodDateStart
    */
    periodDateStart = undefined;
    /**
    * @member {Date} periodDateEnd
    */
    periodDateEnd = undefined;
    /**
    * @member {Number} availableForInvestment
    */
    availableForInvestment = undefined;
    /**
    * @member {module:model/ManagerProfile} manager
    */
    manager = undefined;
    /**
    * @member {module:model/ProgramDetailsListStatistic} statistic
    */
    statistic = undefined;
    /**
    * @member {Array.<module:model/ChartSimple>} chart
    */
    chart = undefined;
    /**
    * Fields for authorized user
    * @member {module:model/PersonalProgramDetailsList} personalProgramDetails
    */
    personalProgramDetails = undefined;






    /**
    * Allowed values for the <code>currency</code> property.
    * @enum {String}
    * @readonly
    */
    static CurrencyEnum = {
    
        /**
         * value: "Undefined"
         * @const
         */
        "Undefined": "Undefined",
    
        /**
         * value: "GVT"
         * @const
         */
        "GVT": "GVT",
    
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


