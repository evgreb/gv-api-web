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
import { ProgramRequestOld } from './programRequestOld';

import ApiClient from "../ApiClient";

export class ProgramRequestsOld { 
    public 'requests'?: Array<ProgramRequestOld>;
    public 'total'?: number;
    public 'totalValue'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramRequestsOld = new ProgramRequestsOld()): ProgramRequestsOld {
        if (data) {
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ApiClient.convertToType(data['requests'], [ProgramRequestOld]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
            if (data.hasOwnProperty('totalValue')) {
                obj['totalValue'] = ApiClient.convertToType(data['totalValue'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

