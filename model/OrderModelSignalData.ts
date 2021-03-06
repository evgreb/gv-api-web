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
import { SignalDataMaster } from './SignalDataMaster';

import ApiClient from "../ApiClient";

export class OrderModelSignalData { 
    public 'masters': Array<SignalDataMaster>;

    constructor(data: {[key: string]: any}) { 
        this['masters'] = data['masters'];
    }

    static constructFromObject(data: {[key: string]: any}): OrderModelSignalData | undefined {
        if (data) {
            return new OrderModelSignalData({ 
                'masters': ApiClient.convertToType(data['masters'], [SignalDataMaster]),
            });
        }
    }
}



