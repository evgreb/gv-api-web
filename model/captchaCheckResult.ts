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
import { GeeTestResult } from './geeTestResult';
import { PowResult } from './powResult';

import ApiClient from "../ApiClient";

export class CaptchaCheckResult { 
    public 'id'?: string;
    public 'pow'?: PowResult;
    public 'geeTest'?: GeeTestResult;
    constructor() {
    }

    static constructFromObject(data: {[key: string]: any}, obj: CaptchaCheckResult = new CaptchaCheckResult()): CaptchaCheckResult {
        if (data) {
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'string');
            }
            if (data.hasOwnProperty('pow')) {
                obj['pow'] = PowResult.constructFromObject(data['pow']);
            }
            if (data.hasOwnProperty('geeTest')) {
                obj['geeTest'] = GeeTestResult.constructFromObject(data['geeTest']);
            }
        }
        return obj;
    }
}


//modelGenericEnums.mustache


