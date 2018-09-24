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
import FundAssetPartWithIcon from './FundAssetPartWithIcon';
import FundStatistic from './FundStatistic';
import PersonalFundDetailsFull from './PersonalFundDetailsFull';
import ProfilePublic from './ProfilePublic';





/**
* The FundDetailsFull model module.
* @module model/FundDetailsFull
* @version v1.0
*/
export default class FundDetailsFull {
    /**
    * Constructs a new <code>FundDetailsFull</code>.
    * @alias module:model/FundDetailsFull
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>FundDetailsFull</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/FundDetailsFull} obj Optional instance to populate.
    * @return {module:model/FundDetailsFull} The populated <code>FundDetailsFull</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new FundDetailsFull();

            
            
            

            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'Number');
            }
            if (data.hasOwnProperty('managementFee')) {
                obj['managementFee'] = ApiClient.convertToType(data['managementFee'], 'Number');
            }
            if (data.hasOwnProperty('currentAssets')) {
                obj['currentAssets'] = ApiClient.convertToType(data['currentAssets'], [FundAssetPartWithIcon]);
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = FundStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('personalFundDetails')) {
                obj['personalFundDetails'] = PersonalFundDetailsFull.constructFromObject(data['personalFundDetails']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
        }
        return obj;
    }

    /**
    * @member {Number} entryFee
    */
    entryFee = undefined;
    /**
    * @member {Number} exitFee
    */
    exitFee = undefined;
    /**
    * @member {Number} managementFee
    */
    managementFee = undefined;
    /**
    * @member {Array.<module:model/FundAssetPartWithIcon>} currentAssets
    */
    currentAssets = undefined;
    /**
    * @member {module:model/FundStatistic} statistic
    */
    statistic = undefined;
    /**
    * Fields for authorized user
    * @member {module:model/PersonalFundDetailsFull} personalFundDetails
    */
    personalFundDetails = undefined;
    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} description
    */
    description = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {module:model/FundDetailsFull.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {module:model/ProfilePublic} manager
    */
    manager = undefined;






    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "None"
         * @const
         */
        "None": "None",
    
        /**
         * value: "Pending"
         * @const
         */
        "Pending": "Pending",
    
        /**
         * value: "ErrorCreating"
         * @const
         */
        "ErrorCreating": "ErrorCreating",
    
        /**
         * value: "Active"
         * @const
         */
        "Active": "Active",
    
        /**
         * value: "Closed"
         * @const
         */
        "Closed": "Closed",
    
        /**
         * value: "Archived"
         * @const
         */
        "Archived": "Archived",
    
        /**
         * value: "ClosedDueToInactivity"
         * @const
         */
        "ClosedDueToInactivity": "ClosedDueToInactivity"    
    };



}


