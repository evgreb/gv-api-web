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
import { AssetInvestmentStatus } from './AssetInvestmentStatus';

import ApiClient from "../ApiClient";

export class PersonalInvestingFundDetailsList { 
    public 'isOwnAsset': boolean;
    public 'isFavorite': boolean;
    public 'canInvest': boolean;
    public 'canWithdraw': boolean;
    public 'share': number;
    public 'value': number;
    public 'status': AssetInvestmentStatus;

    constructor(data: {[key: string]: any}) { 
        this['isOwnAsset'] = data['isOwnAsset'];
        this['isFavorite'] = data['isFavorite'];
        this['canInvest'] = data['canInvest'];
        this['canWithdraw'] = data['canWithdraw'];
        this['share'] = data['share'];
        this['value'] = data['value'];
        this['status'] = data['status'];
    }

    static constructFromObject(data: {[key: string]: any}): PersonalInvestingFundDetailsList | undefined {
        if (data) {
            return new PersonalInvestingFundDetailsList({ 
                'isOwnAsset': ApiClient.convertToType(data['isOwnAsset'], 'boolean'),
                'isFavorite': ApiClient.convertToType(data['isFavorite'], 'boolean'),
                'canInvest': ApiClient.convertToType(data['canInvest'], 'boolean'),
                'canWithdraw': ApiClient.convertToType(data['canWithdraw'], 'boolean'),
                'share': ApiClient.convertToType(data['share'], 'number'),
                'value': ApiClient.convertToType(data['value'], 'number'),
                'status': AssetInvestmentStatus.constructFromObject(data['status']),
            });
        }
    }
}



