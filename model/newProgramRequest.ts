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
import { Currency } from './currency';

import ApiClient from "../ApiClient";

export class NewProgramRequest { 
    public 'currency'?: Currency;
    public 'periodLength'?: number;
    public 'successFee'?: number;
    public 'stopOutLevel'?: number;
    public 'leverage'?: number;
    public 'brokerAccountTypeId'?: string;
    public 'signalSuccessFee'?: number;
    public 'signalVolumeFee'?: number;
    public 'isSignalProgram'?: boolean;
    public 'investmentLimit'?: number;
    public 'tradesDelay'?: TradesDelayEnum;
    public 'entryFee'?: number;
    public 'depositAmount'?: number;
    public 'depositWalletId'?: string;
    public 'title'?: string;
    public 'description'?: string;
    public 'logo'?: string;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: NewProgramRequest = new NewProgramRequest()): NewProgramRequest {
        if (data) {
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = Currency.constructFromObject(data['currency']);
            }
            if (data.hasOwnProperty('periodLength')) {
                obj['periodLength'] = ApiClient.convertToType(data['periodLength'], 'number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'number');
            }
            if (data.hasOwnProperty('leverage')) {
                obj['leverage'] = ApiClient.convertToType(data['leverage'], 'number');
            }
            if (data.hasOwnProperty('brokerAccountTypeId')) {
                obj['brokerAccountTypeId'] = ApiClient.convertToType(data['brokerAccountTypeId'], 'string');
            }
            if (data.hasOwnProperty('signalSuccessFee')) {
                obj['signalSuccessFee'] = ApiClient.convertToType(data['signalSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('signalVolumeFee')) {
                obj['signalVolumeFee'] = ApiClient.convertToType(data['signalVolumeFee'], 'number');
            }
            if (data.hasOwnProperty('isSignalProgram')) {
                obj['isSignalProgram'] = ApiClient.convertToType(data['isSignalProgram'], 'boolean');
            }
            if (data.hasOwnProperty('investmentLimit')) {
                obj['investmentLimit'] = ApiClient.convertToType(data['investmentLimit'], 'number');
            }
            if (data.hasOwnProperty('tradesDelay')) {
                obj['tradesDelay'] = ApiClient.convertToType(data['tradesDelay'], 'string');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'number');
            }
            if (data.hasOwnProperty('depositAmount')) {
                obj['depositAmount'] = ApiClient.convertToType(data['depositAmount'], 'number');
            }
            if (data.hasOwnProperty('depositWalletId')) {
                obj['depositWalletId'] = ApiClient.convertToType(data['depositWalletId'], 'string');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'string');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'string');
            }
        }
        return obj;
    }
}


type TradesDelayEnum = 'None' | 'FiveMinutes' | 'FifteenMinutes' | 'ThirtyMinutes' | 'OneHour' | 'SixHours';


//modelGenericEnums.mustache


