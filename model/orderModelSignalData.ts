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
import { SignalDataMaster } from './signalDataMaster';

import ApiClient from "../ApiClient";

export class OrderModelSignalData { 
    public masters?: [SignalDataMaster];

    static constructFromObject(data: {[key: string]: any}, obj: OrderModelSignalData = new OrderModelSignalData()): OrderModelSignalData {
        if (data) {
            if (data.hasOwnProperty('masters')) {
                obj['masters'] = ApiClient.convertToType(data['masters'], [SignalDataMaster]);
            }
        }
        return obj;
    }
}




