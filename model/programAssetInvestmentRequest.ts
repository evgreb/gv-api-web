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

export class ProgramAssetInvestmentRequest { 
    public isWithdrawAll?: boolean;
    public successFee?: number;
    public entryFee?: number;

    static constructFromObject(data: {[key: string]: any}, obj: ProgramAssetInvestmentRequest = new ProgramAssetInvestmentRequest()): ProgramAssetInvestmentRequest {
        if (data) {
            if (data.hasOwnProperty('isWithdrawAll')) {
                obj['isWithdrawAll'] = ApiClient.convertToType(data['isWithdrawAll'], 'boolean');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
        }
        return obj;
    }
}




