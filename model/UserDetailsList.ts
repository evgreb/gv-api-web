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
import { Tag } from './Tag';

import ApiClient from "../ApiClient";

export class UserDetailsList { 
    public 'userId': string;
    public 'username': string;
    public 'avatar': string;
    public 'url': string;
    public 'socialLinks': Array<SocialLinkViewModel>;
    public 'tags': Array<Tag>;
    public 'regDate': Date;
    public 'assetsUnderManagement': number;
    public 'investorsCount': number;
    public 'followersCount': number;
    public 'totalProfit': number;
    public 'tradingProfit': number;
    public 'investingProfit': number;

    constructor(data: {[key: string]: any}) { 
        this['userId'] = data['userId'];
        this['username'] = data['username'];
        this['avatar'] = data['avatar'];
        this['url'] = data['url'];
        this['socialLinks'] = data['socialLinks'];
        this['tags'] = data['tags'];
        this['regDate'] = data['regDate'];
        this['assetsUnderManagement'] = data['assetsUnderManagement'];
        this['investorsCount'] = data['investorsCount'];
        this['followersCount'] = data['followersCount'];
        this['totalProfit'] = data['totalProfit'];
        this['tradingProfit'] = data['tradingProfit'];
        this['investingProfit'] = data['investingProfit'];
    }

    static constructFromObject(data: {[key: string]: any}): UserDetailsList | undefined {
        if (data) {
            return new UserDetailsList({ 
                'userId': ApiClient.convertToType(data['userId'], 'string'),
                'username': ApiClient.convertToType(data['username'], 'string'),
                'avatar': ApiClient.convertToType(data['avatar'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'socialLinks': ApiClient.convertToType(data['socialLinks'], [SocialLinkViewModel]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
                'regDate': ApiClient.convertToType(data['regDate'], 'Date'),
                'assetsUnderManagement': ApiClient.convertToType(data['assetsUnderManagement'], 'number'),
                'investorsCount': ApiClient.convertToType(data['investorsCount'], 'number'),
                'followersCount': ApiClient.convertToType(data['followersCount'], 'number'),
                'totalProfit': ApiClient.convertToType(data['totalProfit'], 'number'),
                'tradingProfit': ApiClient.convertToType(data['tradingProfit'], 'number'),
                'investingProfit': ApiClient.convertToType(data['investingProfit'], 'number'),
            });
        }
    }
}



