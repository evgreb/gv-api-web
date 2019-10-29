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
import { AssetDetails } from './assetDetails';
import { Currency } from './currency';
import { FundAssetInvestmentRequest } from './fundAssetInvestmentRequest';
import { InvestmentRequestStatus } from './investmentRequestStatus';
import { InvestmentRequestType } from './investmentRequestType';
import { ProgramAssetInvestmentRequest } from './programAssetInvestmentRequest';

import ApiClient from "../ApiClient";

export class AssetInvestmentRequest { 
    public id?: string;
    public date?: Date;
    public amount?: number;
    public currency?: Currency;
    public type?: InvestmentRequestType;
    public status?: InvestmentRequestStatus;
    public canCancelRequest?: boolean;
    public assetDetails?: AssetDetails;
    public fundRequestDetails?: FundAssetInvestmentRequest;
    public programRequestDetails?: ProgramAssetInvestmentRequest;

    static constructFromObject(data: {[key: string]: any}, obj: AssetInvestmentRequest = new AssetInvestmentRequest()): AssetInvestmentRequest {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('amount')) {
                obj['amount'] = ApiClient.convertToType(data['amount'], 'number');
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('type')) {
                obj['type'] = InvestmentRequestType.constructFromObject(data['type']);
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = InvestmentRequestStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('canCancelRequest')) {
                obj['canCancelRequest'] = ApiClient.convertToType(data['canCancelRequest'], 'boolean');
            }
            if (data.hasOwnProperty('assetDetails')) {
                obj['assetDetails'] = AssetDetails.constructFromObject(data['assetDetails']);
            }
            if (data.hasOwnProperty('fundRequestDetails')) {
                obj['fundRequestDetails'] = FundAssetInvestmentRequest.constructFromObject(data['fundRequestDetails']);
            }
            if (data.hasOwnProperty('programRequestDetails')) {
                obj['programRequestDetails'] = ProgramAssetInvestmentRequest.constructFromObject(data['programRequestDetails']);
            }
        }
        return obj;
    }
}




