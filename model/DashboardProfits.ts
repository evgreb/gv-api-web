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
import { DashboardTimeframeProfit } from './DashboardTimeframeProfit';

import ApiClient from "../ApiClient";

export class DashboardProfits { 
    public 'day': DashboardTimeframeProfit;
    public 'week': DashboardTimeframeProfit;
    public 'month': DashboardTimeframeProfit;

    constructor(data: {[key: string]: any}) { 
        this['day'] = data['day'];
        this['week'] = data['week'];
        this['month'] = data['month'];
    }

    static constructFromObject(data: {[key: string]: any}): DashboardProfits | undefined {
        if (data) {
            return new DashboardProfits({ 
                'day': DashboardTimeframeProfit.constructFromObject(data['day']),
                'week': DashboardTimeframeProfit.constructFromObject(data['week']),
                'month': DashboardTimeframeProfit.constructFromObject(data['month']),
            });
        }
    }
}



