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
import { EventInvestorItemFiltersOld } from './eventInvestorItemFiltersOld';
import { EventItemFiltersOld } from './eventItemFiltersOld';

import ApiClient from "../ApiClient";

export class EventFiltersOld { 
    public 'manager'?: EventItemFiltersOld;
    public 'investor'?: EventInvestorItemFiltersOld;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: EventFiltersOld = new EventFiltersOld()): EventFiltersOld {
        if (data) {
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = EventItemFiltersOld.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('investor')) {
                obj['investor'] = EventInvestorItemFiltersOld.constructFromObject(data['investor']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

