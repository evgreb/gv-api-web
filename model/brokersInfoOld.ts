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
import { BrokerOld } from './brokerOld';

import ApiClient from "../ApiClient";

export class BrokersInfoOld { 
    public 'brokers'?: [BrokerOld];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: BrokersInfoOld = new BrokersInfoOld()): BrokersInfoOld {
        if (data) {
            if (data.hasOwnProperty('brokers')) {
                obj['brokers'] = ApiClient.convertToType(data['brokers'], [BrokerOld]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


