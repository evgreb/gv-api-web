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
import { SocialLinkViewModel } from './SocialLinkViewModel';

import ApiClient from "../ApiClient";

export class PublicProfile { 
    public 'id': string;
    public 'username': string;
    public 'about': string;
    public 'avatar': string;
    public 'regDate': Date;
    public 'assets': Array<string>;
    public 'url': string;
    public 'socialLinks': Array<SocialLinkViewModel>;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['username'] = data['username'];
        this['about'] = data['about'];
        this['avatar'] = data['avatar'];
        this['regDate'] = data['regDate'];
        this['assets'] = data['assets'];
        this['url'] = data['url'];
        this['socialLinks'] = data['socialLinks'];
    }

    static constructFromObject(data: {[key: string]: any}): PublicProfile | undefined {
        if (data) {
            return new PublicProfile({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'username': ApiClient.convertToType(data['username'], 'string'),
                'about': ApiClient.convertToType(data['about'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'regDate': ApiClient.convertToType(data['regDate'], 'Date'),
                'assets': ApiClient.convertToType(data['assets'], ['string']),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'socialLinks': ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]),
            });
        }
    }
}



