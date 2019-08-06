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
import ProfilePublic from './ProfilePublic';
import ProgramTag from './ProgramTag';





/**
 *
 * @interface SignalAccountDetails
 */

/**
 *
 * @name SignalAccountDetails#tags
 * @type {Array<ProgramTag>}
 */
/**
 *
 * @name SignalAccountDetails#id
 * @type {String}
 */
/**
 *
 * @name SignalAccountDetails#logo
 * @type {String}
 */
/**
 *
 * @name SignalAccountDetails#url
 * @type {String}
 */
/**
 *
 * @name SignalAccountDetails#color
 * @type {String}
 */
/**
 *
 * @name SignalAccountDetails#title
 * @type {String}
 */
/**
 *
 * @name SignalAccountDetails#description
 * @type {String}
 */
/**
 *
 * @name SignalAccountDetails#status
 * @type SignalAccountDetailsStatusEnum
 */
/**
 *
 * @name SignalAccountDetails#creationDate
 * @type {Date}
 */
/**
 *
 * @name SignalAccountDetails#manager
 * @type {ProfilePublic}
 */
/**
 *
 * @name SignalAccountDetails#chart
 * @type {Array<ChartSimple>}
 */





export default class SignalAccountDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalAccountDetails();

            
            
            

            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('creationDate')) {
                obj['creationDate'] = ApiClient.convertToType(data['creationDate'], 'Date');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartSimple]);
            }
        }
        return obj;
    }

    tags = undefined;
    id = undefined;
    logo = undefined;
    url = undefined;
    color = undefined;
    title = undefined;
    description = undefined;
    status = undefined;
    creationDate = undefined;
    manager = undefined;
    chart = undefined;






    static StatusEnum = {
    
        "None": "None",
    
        "Pending": "Pending",
    
        "ErrorCreating": "ErrorCreating",
    
        "Active": "Active",
    
        "Closed": "Closed",
    
        "Archived": "Archived",
    
        "ClosedDueToInactivity": "ClosedDueToInactivity"    
    };



}




/**
 * @typedef SignalAccountDetailsStatusEnum 
 * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
 */



