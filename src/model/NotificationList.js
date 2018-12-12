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
import NotificationViewModel from './NotificationViewModel';





    /**
     *
     * @interface NotificationList
     */
    
    /**
     *
     * @name NotificationList#notifications
     * @type {[NotificationViewModel]}
     */
    /**
     *
     * @name NotificationList#total
     * @type {Number}
     */





export default class NotificationList {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new NotificationList();

            
            
            

            if (data.hasOwnProperty('notifications')) {
                obj['notifications'] = ApiClient.convertToType(data['notifications'], [NotificationViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'Number');
            }
        }
        return obj;
    }

    notifications = undefined;
    total = undefined;








}


