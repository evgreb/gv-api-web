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
import { AssetDetails } from './AssetDetails';
import { ChangeState } from './ChangeState';
import { FeeDetails } from './FeeDetails';
import { InvestmentEventItemViewModel } from './InvestmentEventItemViewModel';

import ApiClient from "../ApiClient";

export class InvestmentEventViewModel { 
    public 'title': string;
    public 'icon': string;
    public 'date': Date;
    public 'assetDetails': AssetDetails;
    public 'amount': number;
    public 'currency': CurrencyEnum;
    public 'changeState': ChangeState;
    public 'extendedInfo': Array<InvestmentEventItemViewModel>;
    public 'feesInfo': Array<FeeDetails>;
    public 'totalFeesAmount': number;
    public 'totalFeesCurrency': TotalFeesCurrencyEnum;

    constructor(data: {[key: string]: any}) { 
        this['title'] = data['title'];
        this['icon'] = data['icon'];
        this['date'] = data['date'];
        this['assetDetails'] = data['assetDetails'];
        this['amount'] = data['amount'];
        this['currency'] = data['currency'];
        this['changeState'] = data['changeState'];
        this['extendedInfo'] = data['extendedInfo'];
        this['feesInfo'] = data['feesInfo'];
        this['totalFeesAmount'] = data['totalFeesAmount'];
        this['totalFeesCurrency'] = data['totalFeesCurrency'];
    }

    static constructFromObject(data: {[key: string]: any}): InvestmentEventViewModel | undefined {
        if (data) {
            return new InvestmentEventViewModel({ 
                'title': ApiClient.convertToType(data['title'], 'string'),
                'icon': ApiClient.convertToType(data['icon'], 'string'),
                'date': ApiClient.convertToType(data['date'], 'Date'),
                'assetDetails': AssetDetails.constructFromObject(data['assetDetails']),
                'amount': ApiClient.convertToType(data['amount'], 'number'),
                'currency': ApiClient.convertToType(data['currency'], 'string'),
                'changeState': ChangeState.constructFromObject(data['changeState']),
                'extendedInfo': ApiClient.convertToType(data['extendedInfo'], [InvestmentEventItemViewModel]),
                'feesInfo': ApiClient.convertToType(data['feesInfo'], [FeeDetails]),
                'totalFeesAmount': ApiClient.convertToType(data['totalFeesAmount'], 'number'),
                'totalFeesCurrency': ApiClient.convertToType(data['totalFeesCurrency'], 'string'),
            });
        }
    }
}


type CurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
type TotalFeesCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';


