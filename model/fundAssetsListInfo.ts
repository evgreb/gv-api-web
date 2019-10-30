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
import { FundAssetInfo } from './fundAssetInfo';

import ApiClient from "../ApiClient";

export class FundAssetsListInfo { 
    public 'assets'?: Array<FundAssetInfo>;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: FundAssetsListInfo = new FundAssetsListInfo()): FundAssetsListInfo {
        if (data) {
            if (data.hasOwnProperty('assets')) {
                obj['assets'] = ApiClient.convertToType(data['assets'], [FundAssetInfo]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


