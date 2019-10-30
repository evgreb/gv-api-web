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
import { WalletDeposit } from './walletDeposit';

import ApiClient from "../ApiClient";

export class WalletDepositSummary { 
    public 'wallets'?: Array<WalletDeposit>;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: WalletDepositSummary = new WalletDepositSummary()): WalletDepositSummary {
        if (data) {
            if (data.hasOwnProperty('wallets')) {
                obj['wallets'] = ApiClient.convertToType(data['wallets'], [WalletDeposit]);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


