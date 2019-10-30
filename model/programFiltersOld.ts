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
import { ProgramTag } from './programTag';

import ApiClient from "../ApiClient";

export class ProgramFiltersOld { 
    public 'programTags'?: Array<ProgramTag>;
    public 'actionType'?: Array<string>;
    public 'customNotificationType'?: Array<string>;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: ProgramFiltersOld = new ProgramFiltersOld()): ProgramFiltersOld {
        if (data) {
            if (data.hasOwnProperty('programTags')) {
                obj['programTags'] = ApiClient.convertToType(data['programTags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('actionType')) {
                obj['actionType'] = ApiClient.convertToType(data['actionType'], ['string']);
            }
            if (data.hasOwnProperty('customNotificationType')) {
                obj['customNotificationType'] = ApiClient.convertToType(data['customNotificationType'], ['string']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache

