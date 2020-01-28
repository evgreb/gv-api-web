/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { SignalSubscriber } from './SignalSubscriber';

import ApiClient from "../ApiClient";

export class SignalProviderSubscribers { 
    public 'subscribers': Array<SignalSubscriber>;
    public 'total': number;

    constructor(data: {[key: string]: any}) { 
        this['subscribers'] = data['subscribers'];
        this['total'] = data['total'];
    }

    static constructFromObject(data: {[key: string]: any}): SignalProviderSubscribers | undefined {
        if (data) {
            return new SignalProviderSubscribers({ 
                'subscribers': ApiClient.convertToType(data['subscribers'], [SignalSubscriber]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}


