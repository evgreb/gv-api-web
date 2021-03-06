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

import ApiClient from "../ApiClient";

export class ChangeBrokerProgramRequest { 
    public 'newBrokerAccountTypeId': string;
    public 'newLeverage': number;

    constructor(data: {[key: string]: any}) { 
        this['newBrokerAccountTypeId'] = data['newBrokerAccountTypeId'];
        this['newLeverage'] = data['newLeverage'];
    }

    static constructFromObject(data: {[key: string]: any}): ChangeBrokerProgramRequest | undefined {
        if (data) {
            return new ChangeBrokerProgramRequest({ 
                'newBrokerAccountTypeId': ApiClient.convertToType(data['newBrokerAccountTypeId'], 'string'),
                'newLeverage': ApiClient.convertToType(data['newLeverage'], 'number'),
            });
        }
    }
}



