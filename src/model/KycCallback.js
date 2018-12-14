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
import Review from './Review';





/**
* The KycCallback model module.
* @module model/KycCallback
* @version v1.0
*/
export default class KycCallback {
    /**
    * Constructs a new <code>KycCallback</code>.
    * @alias module:model/KycCallback
    * @class
    */

    constructor() {
        

        
        

        

        
    }

    /**
    * Constructs a <code>KycCallback</code> from a plain JavaScript object, optionally creating a new instance.
    * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
    * @param {Object} data The plain JavaScript object bearing properties of interest.
    * @param {module:model/KycCallback} obj Optional instance to populate.
    * @return {module:model/KycCallback} The populated <code>KycCallback</code> instance.
    */
    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new KycCallback();

            
            
            

            if (data.hasOwnProperty('applicantId')) {
                obj['applicantId'] = ApiClient.convertToType(data['applicantId'], 'String');
            }
            if (data.hasOwnProperty('inspectionId')) {
                obj['inspectionId'] = ApiClient.convertToType(data['inspectionId'], 'String');
            }
            if (data.hasOwnProperty('correlationId')) {
                obj['correlationId'] = ApiClient.convertToType(data['correlationId'], 'String');
            }
            if (data.hasOwnProperty('externalUserId')) {
                obj['externalUserId'] = ApiClient.convertToType(data['externalUserId'], 'String');
            }
            if (data.hasOwnProperty('success')) {
                obj['success'] = ApiClient.convertToType(data['success'], 'Boolean');
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = ApiClient.convertToType(data['type'], 'String');
            }
            if (data.hasOwnProperty('review')) {
                obj['review'] = Review.constructFromObject(data['review']);
            }
        }
        return obj;
    }

    /**
    * @member {String} applicantId
    */
    applicantId = undefined;
    /**
    * @member {String} inspectionId
    */
    inspectionId = undefined;
    /**
    * @member {String} correlationId
    */
    correlationId = undefined;
    /**
    * @member {String} externalUserId
    */
    externalUserId = undefined;
    /**
    * @member {Boolean} success
    */
    success = undefined;
    /**
    * @member {String} type
    */
    type = undefined;
    /**
    * @member {module:model/Review} review
    */
    review = undefined;








}


