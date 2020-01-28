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
import { BrokerAccountType } from './BrokerAccountType';
import { Tag } from './Tag';

import ApiClient from "../ApiClient";

export class Broker { 
    public 'name': string;
    public 'description': string;
    public 'logo': string;
    public 'terms': string;
    public 'assets': string;
    public 'fee': number;
    public 'leverageMin': number;
    public 'leverageMax': number;
    public 'isKycRequired': boolean;
    public 'accountTypes': Array<BrokerAccountType>;
    public 'tags': Array<Tag>;

    constructor(data: {[key: string]: any}) { 
        this['name'] = data['name'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['terms'] = data['terms'];
        this['assets'] = data['assets'];
        this['fee'] = data['fee'];
        this['leverageMin'] = data['leverageMin'];
        this['leverageMax'] = data['leverageMax'];
        this['isKycRequired'] = data['isKycRequired'];
        this['accountTypes'] = data['accountTypes'];
        this['tags'] = data['tags'];
    }

    static constructFromObject(data: {[key: string]: any}): Broker | undefined {
        if (data) {
            return new Broker({ 
                'name': ApiClient.convertToType(data['name'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'terms': ApiClient.convertToType(data['terms'], 'string'),
                'assets': ApiClient.convertToType(data['assets'], 'string'),
                'fee': ApiClient.convertToType(data['fee'], 'number'),
                'leverageMin': ApiClient.convertToType(data['leverageMin'], 'number'),
                'leverageMax': ApiClient.convertToType(data['leverageMax'], 'number'),
                'isKycRequired': ApiClient.convertToType(data['isKycRequired'], 'boolean'),
                'accountTypes': ApiClient.convertToType(data['accountTypes'], [BrokerAccountType]),
                'tags': ApiClient.convertToType(data['tags'], [Tag]),
            });
        }
    }
}


