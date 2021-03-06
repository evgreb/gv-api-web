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
import { FacetSortType } from './FacetSortType';
import { Timeframe } from './Timeframe';

import ApiClient from "../ApiClient";

export class AssetFacet { 
    public 'id': string;
    public 'title': string;
    public 'description': string;
    public 'logo': string;
    public 'url': string;
    public 'sortType': FacetSortType;
    public 'timeframe': Timeframe;
    public 'sorting': string;

    constructor(data: {[key: string]: any}) { 
        this['id'] = data['id'];
        this['title'] = data['title'];
        this['description'] = data['description'];
        this['logo'] = data['logo'];
        this['url'] = data['url'];
        this['sortType'] = data['sortType'];
        this['timeframe'] = data['timeframe'];
        this['sorting'] = data['sorting'];
    }

    static constructFromObject(data: {[key: string]: any}): AssetFacet | undefined {
        if (data) {
            return new AssetFacet({ 
                'id': ApiClient.convertToType(data['id'], 'string'),
                'title': ApiClient.convertToType(data['title'], 'string'),
                'description': ApiClient.convertToType(data['description'], 'string'),
                'logo': ApiClient.convertToType(data['logo'], 'string'),
                'url': ApiClient.convertToType(data['url'], 'string'),
                'sortType': FacetSortType.constructFromObject(data['sortType']),
                'timeframe': Timeframe.constructFromObject(data['timeframe']),
                'sorting': ApiClient.convertToType(data['sorting'], 'string'),
            });
        }
    }
}



