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
import { SignalDetails } from './signalDetails';

import ApiClient from "../ApiClient";

export class SignalsList { 
    public 'programs'?: Array<SignalDetails>;
    public 'total'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: SignalsList = new SignalsList()): SignalsList {
        if (data) {
            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ApiClient.convertToType(data['programs'], [SignalDetails]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


