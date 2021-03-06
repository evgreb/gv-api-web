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
import { FundInvestingDetailsList } from './FundInvestingDetailsList';

import ApiClient from "../ApiClient";

export class ItemsViewModelFundInvestingDetailsList { 
    public 'items': Array<FundInvestingDetailsList>;
    public 'total': number;

    constructor(data: {[key: string]: any}) { 
        this['items'] = data['items'];
        this['total'] = data['total'];
    }

    static constructFromObject(data: {[key: string]: any}): ItemsViewModelFundInvestingDetailsList | undefined {
        if (data) {
            return new ItemsViewModelFundInvestingDetailsList({ 
                'items': ApiClient.convertToType(data['items'], [FundInvestingDetailsList]),
                'total': ApiClient.convertToType(data['total'], 'number'),
            });
        }
    }
}



