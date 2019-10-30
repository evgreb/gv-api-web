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

export class ReferralFriend { 
    public 'date'?: Date;
    public 'emailMask'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ReferralFriend = new ReferralFriend()): ReferralFriend {
        if (data) {
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('emailMask')) {
                obj['emailMask'] = ApiClient.convertToType(data['emailMask'], 'string');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


