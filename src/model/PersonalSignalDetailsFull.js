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
import SignalSubscriberStatus from './SignalSubscriberStatus';
import SignalSubscription from './SignalSubscription';





/**
 *
 * @interface PersonalSignalDetailsFull
 */

/**
 *
 * @name PersonalSignalDetailsFull#subscriptionDate
 * @type {Date}
 */
/**
 *
 * @name PersonalSignalDetailsFull#tradesCount
 * @type {Number}
 */
/**
 *
 * @name PersonalSignalDetailsFull#signalSubscription
 * @type {SignalSubscription}
 */
/**
 *
 * @name PersonalSignalDetailsFull#profit
 * @type {Number}
 */
/**
 *
 * @name PersonalSignalDetailsFull#volume
 * @type {Number}
 */
/**
 *
 * @name PersonalSignalDetailsFull#isFavorite
 * @type {Boolean}
 */
/**
 *
 * @name PersonalSignalDetailsFull#isInvested
 * @type {Boolean}
 */
/**
 *
 * @name PersonalSignalDetailsFull#status
 * @type {SignalSubscriberStatus}
 */
/**
 *
 * @name PersonalSignalDetailsFull#signalSettingsId
 * @type {String}
 */





export default class PersonalSignalDetailsFull {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PersonalSignalDetailsFull();

            
            
            

            if (data.hasOwnProperty('subscriptionDate')) {
                obj['subscriptionDate'] = ApiClient.convertToType(data['subscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'Number');
            }
            if (data.hasOwnProperty('signalSubscription')) {
                obj['signalSubscription'] = SignalSubscription.constructFromObject(data['signalSubscription']);
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'Boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'Boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SignalSubscriberStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('signalSettingsId')) {
                obj['signalSettingsId'] = ApiClient.convertToType(data['signalSettingsId'], 'String');
            }
        }
        return obj;
    }

    subscriptionDate = undefined;
    tradesCount = undefined;
    signalSubscription = undefined;
    profit = undefined;
    volume = undefined;
    isFavorite = undefined;
    isInvested = undefined;
    status = undefined;
    signalSettingsId = undefined;








}






