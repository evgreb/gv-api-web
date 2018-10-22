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
* The ProgramRequest model module.
* @module model/ProgramRequest
* @version v1.0
*/
export default class ProgramRequest {
    /**
    * Constructs a new <code>ProgramRequest</code>.
    * @alias module:model/ProgramRequest
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>ProgramRequest</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/ProgramRequest} obj Optional instance to populate.
    * @return {module:model/ProgramRequest} The populated <code>ProgramRequest</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramRequest();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('value')) {
                obj['value'] = ApiClient.convertToType(data['value'], 'Number');
            }
            if (data.hasOwnProperty('fundWithdrawPercent')) {
                obj['fundWithdrawPercent'] = ApiClient.convertToType(data['fundWithdrawPercent'], 'Number');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'Boolean');
            }
            if (data.hasOwnProperty('programType')) {
                obj['programType'] = ApiClient.convertToType(data['programType'], 'String');
            }
        }
        return obj;
    }

    /**
    * @member {String} id
    */
    id = undefined;
    /**
    * @member {String} programId
    */
    programId = undefined;
    /**
    * @member {Date} date
    */
    date = undefined;
    /**
    * @member {Number} value
    */
    value = undefined;
    /**
    * Used only in fund withdraw request
    * @member {Number} fundWithdrawPercent
    */
    fundWithdrawPercent = undefined;
    /**
    * @member {module:model/ProgramRequest.TypeEnum} type
    */
    type = undefined;
    /**
    * @member {module:model/ProgramRequest.StatusEnum} status
    */
    status = undefined;
    /**
    * @member {String} logo
    */
    logo = undefined;
    /**
    * @member {String} title
    */
    title = undefined;
    /**
    * @member {String} color
    */
    color = undefined;
    /**
    * @member {Boolean} canCancelRequest
    */
    canCancelRequest = undefined;
    /**
    * @member {module:model/ProgramRequest.ProgramTypeEnum} programType
    */
    programType = undefined;






    /**
    * Allowed values for the <code>type</code> property.
    * @enum {String}
    * @readonly
    */
    static TypeEnum = {
    
        /**
         * value: "Invest"
         * @const
         */
        "Invest": "Invest",
    
        /**
         * value: "Withdrawal"
         * @const
         */
        "Withdrawal": "Withdrawal"    
    };

    /**
    * Allowed values for the <code>status</code> property.
    * @enum {String}
    * @readonly
    */
    static StatusEnum = {
    
        /**
         * value: "New"
         * @const
         */
        "New": "New",
    
        /**
         * value: "Executed"
         * @const
         */
        "Executed": "Executed",
    
        /**
         * value: "Cancelled"
         * @const
         */
        "Cancelled": "Cancelled"    
    };

    /**
    * Allowed values for the <code>programType</code> property.
    * @enum {String}
    * @readonly
    */
    static ProgramTypeEnum = {
    
        /**
         * value: "Program"
         * @const
         */
        "Program": "Program",
    
        /**
         * value: "Fund"
         * @const
         */
        "Fund": "Fund"    
    };



}


