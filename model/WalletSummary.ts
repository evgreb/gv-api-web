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
import { WalletData } from './WalletData';
import { WalletsGrandTotal } from './WalletsGrandTotal';

import ApiClient from "../ApiClient";

export class WalletSummary { 
    public 'grandTotal': WalletsGrandTotal;
    public 'wallets': Array<WalletData>;
    public 'payFeesWithGvt': boolean;

    constructor(data: {[key: string]: any}) { 
        this['grandTotal'] = data['grandTotal'];
        this['wallets'] = data['wallets'];
        this['payFeesWithGvt'] = data['payFeesWithGvt'];
    }

    static constructFromObject(data: {[key: string]: any}): WalletSummary | undefined {
        if (data) {
            return new WalletSummary({ 
                'grandTotal': WalletsGrandTotal.constructFromObject(data['grandTotal']),
                'wallets': ApiClient.convertToType(data['wallets'], [WalletData]),
                'payFeesWithGvt': ApiClient.convertToType(data['payFeesWithGvt'], 'boolean'),
            });
        }
    }
}



