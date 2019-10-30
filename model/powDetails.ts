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
import { SecureAlgorithm } from './secureAlgorithm';

import ApiClient from "../ApiClient";

export class PowDetails { 
    public 'secureAlgorithm'?: SecureAlgorithm;
    public 'difficulty'?: number;
    public 'nonce'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: PowDetails = new PowDetails()): PowDetails {
        if (data) {
            if (data.hasOwnProperty('secureAlgorithm')) {
                obj['secureAlgorithm'] = SecureAlgorithm.constructFromObject(data['secureAlgorithm']);
            }
            if (data.hasOwnProperty('difficulty')) {
                obj['difficulty'] = ApiClient.convertToType(data['difficulty'], 'number');
            }
            if (data.hasOwnProperty('nonce')) {
                obj['nonce'] = ApiClient.convertToType(data['nonce'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


