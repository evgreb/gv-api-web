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
import { AndroidAppVersion } from './androidAppVersion';
import { IOsAppVersion } from './iOsAppVersion';

import ApiClient from "../ApiClient";

export class AppVersion { 
    public iOS?: IOsAppVersion;
    public android?: AndroidAppVersion;

    static constructFromObject(data: {[key: string]: any}, obj: AppVersion = new AppVersion()): AppVersion {
        if (data) {
            if (data.hasOwnProperty('iOS')) {
                obj['iOS'] = IOsAppVersion.constructFromObject(data['iOS']);
            }
            if (data.hasOwnProperty('android')) {
                obj['android'] = AndroidAppVersion.constructFromObject(data['android']);
            }
        }
        return obj;
    }
}




