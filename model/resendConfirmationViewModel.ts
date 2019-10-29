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
import { CaptchaCheckResult } from './captchaCheckResult';

import ApiClient from "../ApiClient";

export class ResendConfirmationViewModel { 
    public email?: string;
    public captchaCheckResult?: CaptchaCheckResult;

    static constructFromObject(data: {[key: string]: any}, obj: ResendConfirmationViewModel = new ResendConfirmationViewModel()): ResendConfirmationViewModel {
        if (data) {
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'string');
            }
            if (data.hasOwnProperty('captchaCheckResult')) {
                obj['captchaCheckResult'] = CaptchaCheckResult.constructFromObject(data['captchaCheckResult']);
            }
        }
        return obj;
    }
}




