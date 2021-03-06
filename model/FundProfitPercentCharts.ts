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
import { FundAssetsState } from './FundAssetsState';
import { FundChartStatistic } from './FundChartStatistic';
import { SimpleChart } from './SimpleChart';

import ApiClient from "../ApiClient";

export class FundProfitPercentCharts { 
    public 'statistic': FundChartStatistic;
    public 'charts': Array<SimpleChart>;
    public 'assets': Array<FundAssetsState>;

    constructor(data: {[key: string]: any}) { 
        this['statistic'] = data['statistic'];
        this['charts'] = data['charts'];
        this['assets'] = data['assets'];
    }

    static constructFromObject(data: {[key: string]: any}): FundProfitPercentCharts | undefined {
        if (data) {
            return new FundProfitPercentCharts({ 
                'statistic': FundChartStatistic.constructFromObject(data['statistic']),
                'charts': ApiClient.convertToType(data['charts'], [SimpleChart]),
                'assets': ApiClient.convertToType(data['assets'], [FundAssetsState]),
            });
        }
    }
}



