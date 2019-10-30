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
import { SignalSubscriber } from './signalSubscriber';

import ApiClient from "../ApiClient";

export class SignalProviderSubscribers { 
    public 'subscribers'?: Array<SignalSubscriber>;
    public 'total'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalProviderSubscribers = new SignalProviderSubscribers()): SignalProviderSubscribers {
        if (data) {
            if (data.hasOwnProperty('subscribers')) {
                obj['subscribers'] = ApiClient.convertToType(data['subscribers'], [SignalSubscriber]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


