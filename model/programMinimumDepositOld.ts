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

import ApiClient from "../ApiClient";

export class ProgramMinimumDepositOld { 
    public 'minimumDepositsAmount'?: { [key: string]: number; };
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramMinimumDepositOld = new ProgramMinimumDepositOld()): ProgramMinimumDepositOld {
        if (data) {
            if (data.hasOwnProperty('minimumDepositsAmount')) {
                obj['minimumDepositsAmount'] = ApiClient.convertToType(data['minimumDepositsAmount'], {'string': 'number'});
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

