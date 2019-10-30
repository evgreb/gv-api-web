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
import { EventFiltersOld } from './eventFiltersOld';
import { FundFiltersOld } from './fundFiltersOld';
import { MultiWalletFiltersOld } from './multiWalletFiltersOld';
import { ProgramFiltersOld } from './programFiltersOld';

import ApiClient from "../ApiClient";

export class EnumsOld { 
    public 'multiWallet'?: MultiWalletFiltersOld;
    public 'program'?: ProgramFiltersOld;
    public 'fund'?: FundFiltersOld;
    public 'event'?: EventFiltersOld;
    public 'assetTypes'?: [string];
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: EnumsOld = new EnumsOld()): EnumsOld {
        if (data) {
            if (data.hasOwnProperty('multiWallet')) {
                obj['multiWallet'] = MultiWalletFiltersOld.constructFromObject(data['multiWallet']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = ProgramFiltersOld.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('fund')) {
                obj['fund'] = FundFiltersOld.constructFromObject(data['fund']);
            }
            if (data.hasOwnProperty('event')) {
                obj['event'] = EventFiltersOld.constructFromObject(data['event']);
            }
            if (data.hasOwnProperty('assetTypes')) {
                obj['assetTypes'] = ApiClient.convertToType(data['assetTypes'], ['string']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


