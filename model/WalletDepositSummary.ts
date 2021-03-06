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
import { WalletDeposit } from './WalletDeposit';

import ApiClient from "../ApiClient";

export class WalletDepositSummary { 
    public 'wallets': Array<WalletDeposit>;

    constructor(data: {[key: string]: any}) { 
        this['wallets'] = data['wallets'];
    }

    static constructFromObject(data: {[key: string]: any}): WalletDepositSummary | undefined {
        if (data) {
            return new WalletDepositSummary({ 
                'wallets': ApiClient.convertToType(data['wallets'], [WalletDeposit]),
            });
        }
    }
}



