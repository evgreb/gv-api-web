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
 */
import { SignalSubscriberStatus } from './signalSubscriberStatus';
import { SignalSubscription } from './signalSubscription';

import ApiClient from "../ApiClient";

export class PersonalSignalDetailsFull { 
    public 'subscriptionDate'?: Date;
    public 'tradesCount'?: number;
    public 'signalSubscription'?: SignalSubscription;
    public 'profit'?: number;
    public 'volume'?: number;
    public 'isFavorite'?: boolean;
    public 'isInvested'?: boolean;
    public 'status'?: SignalSubscriberStatus;
    public 'signalSettingsId'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: PersonalSignalDetailsFull = new PersonalSignalDetailsFull()): PersonalSignalDetailsFull {
        if (data) {
            if (data.hasOwnProperty('subscriptionDate')) {
                obj['subscriptionDate'] = ApiClient.convertToType(data['subscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('tradesCount')) {
                obj['tradesCount'] = ApiClient.convertToType(data['tradesCount'], 'number');
            }
            if (data.hasOwnProperty('signalSubscription')) {
                obj['signalSubscription'] = SignalSubscription.constructFromObject(data['signalSubscription']);
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'number');
            }
            if (data.hasOwnProperty('isFavorite')) {
                obj['isFavorite'] = ApiClient.convertToType(data['isFavorite'], 'boolean');
            }
            if (data.hasOwnProperty('isInvested')) {
                obj['isInvested'] = ApiClient.convertToType(data['isInvested'], 'boolean');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SignalSubscriberStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('signalSettingsId')) {
                obj['signalSettingsId'] = ApiClient.convertToType(data['signalSettingsId'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


