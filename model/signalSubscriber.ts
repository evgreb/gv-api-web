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
import { Currency } from './currency';
import { SignalSubscriberStatus } from './signalSubscriberStatus';

import ApiClient from "../ApiClient";

export class SignalSubscriber { 
    public 'number'?: number;
    public 'trades'?: number;
    public 'profit'?: number;
    public 'volume'?: number;
    public 'subscriptionDate'?: Date;
    public 'unsubscriptionDate'?: Date;
    public 'status'?: SignalSubscriberStatus;
    public 'totalCommissionAmount'?: number;
    public 'totalCommissionCurrency'?: Currency;
    public 'totalSuccessFeeAmount'?: number;
    public 'totalSuccessFeeCurrency'?: Currency;
    public 'totalVolumeFeeAmount'?: number;
    public 'totalVolumeFeeCurrency'?: Currency;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalSubscriber = new SignalSubscriber()): SignalSubscriber {
        if (data) {
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'number');
            }
            if (data.hasOwnProperty('trades')) {
                obj['trades'] = ApiClient.convertToType(data['trades'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'number');
            }
            if (data.hasOwnProperty('subscriptionDate')) {
                obj['subscriptionDate'] = ApiClient.convertToType(data['subscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('unsubscriptionDate')) {
                obj['unsubscriptionDate'] = ApiClient.convertToType(data['unsubscriptionDate'], 'Date');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = SignalSubscriberStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('totalCommissionAmount')) {
                obj['totalCommissionAmount'] = ApiClient.convertToType(data['totalCommissionAmount'], 'number');
            }
            if (data.hasOwnProperty('totalCommissionCurrency')) {
                obj['totalCommissionCurrency'] = Currency.constructFromObject(data['totalCommissionCurrency']);
            }
            if (data.hasOwnProperty('totalSuccessFeeAmount')) {
                obj['totalSuccessFeeAmount'] = ApiClient.convertToType(data['totalSuccessFeeAmount'], 'number');
            }
            if (data.hasOwnProperty('totalSuccessFeeCurrency')) {
                obj['totalSuccessFeeCurrency'] = Currency.constructFromObject(data['totalSuccessFeeCurrency']);
            }
            if (data.hasOwnProperty('totalVolumeFeeAmount')) {
                obj['totalVolumeFeeAmount'] = ApiClient.convertToType(data['totalVolumeFeeAmount'], 'number');
            }
            if (data.hasOwnProperty('totalVolumeFeeCurrency')) {
                obj['totalVolumeFeeCurrency'] = Currency.constructFromObject(data['totalVolumeFeeCurrency']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

