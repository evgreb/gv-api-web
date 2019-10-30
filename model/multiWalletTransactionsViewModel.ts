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
import { MultiWalletTransaction } from './multiWalletTransaction';

import ApiClient from "../ApiClient";

export class MultiWalletTransactionsViewModel { 
    public 'transactions'?: Array<MultiWalletTransaction>;
    public 'total'?: number;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: MultiWalletTransactionsViewModel = new MultiWalletTransactionsViewModel()): MultiWalletTransactionsViewModel {
        if (data) {
            if (data.hasOwnProperty('transactions')) {
                obj['transactions'] = ApiClient.convertToType(data['transactions'], [MultiWalletTransaction]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

