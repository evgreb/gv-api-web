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

export class PartnershipDetails { 
    public totalReferralsL1?: number;
    public totalReferralsL2?: number;
    public totalAmount?: number;

    static constructFromObject(data: {[key: string]: any}, obj: PartnershipDetails = new PartnershipDetails()): PartnershipDetails {
        if (data) {
            if (data.hasOwnProperty('totalReferralsL1')) {
                obj['totalReferralsL1'] = ApiClient.convertToType(data['totalReferralsL1'], 'number');
            }
            if (data.hasOwnProperty('totalReferralsL2')) {
                obj['totalReferralsL2'] = ApiClient.convertToType(data['totalReferralsL2'], 'number');
            }
            if (data.hasOwnProperty('totalAmount')) {
                obj['totalAmount'] = ApiClient.convertToType(data['totalAmount'], 'number');
            }
        }
        return obj;
    }
}




