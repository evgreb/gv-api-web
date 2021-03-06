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
import { SimpleChartPoint } from './SimpleChartPoint';

import ApiClient from "../ApiClient";

export class ProfitChart { 
    public 'chart': Array<SimpleChartPoint>;
    public 'profit': number;
    public 'drawdown': number;

    constructor(data: {[key: string]: any}) { 
        this['chart'] = data['chart'];
        this['profit'] = data['profit'];
        this['drawdown'] = data['drawdown'];
    }

    static constructFromObject(data: {[key: string]: any}): ProfitChart | undefined {
        if (data) {
            return new ProfitChart({ 
                'chart': ApiClient.convertToType(data['chart'], [SimpleChartPoint]),
                'profit': ApiClient.convertToType(data['profit'], 'number'),
                'drawdown': ApiClient.convertToType(data['drawdown'], 'number'),
            });
        }
    }
}



