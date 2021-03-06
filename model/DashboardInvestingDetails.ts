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
import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';

import ApiClient from "../ApiClient";

export class DashboardInvestingDetails { 
    public 'equity': number;
    public 'programsCount': number;
    public 'fundsCount': number;
    public 'profits': DashboardProfits;
    public 'events': ItemsViewModelInvestmentEventViewModel;

    constructor(data: {[key: string]: any}) { 
        this['equity'] = data['equity'];
        this['programsCount'] = data['programsCount'];
        this['fundsCount'] = data['fundsCount'];
        this['profits'] = data['profits'];
        this['events'] = data['events'];
    }

    static constructFromObject(data: {[key: string]: any}): DashboardInvestingDetails | undefined {
        if (data) {
            return new DashboardInvestingDetails({ 
                'equity': ApiClient.convertToType(data['equity'], 'number'),
                'programsCount': ApiClient.convertToType(data['programsCount'], 'number'),
                'fundsCount': ApiClient.convertToType(data['fundsCount'], 'number'),
                'profits': DashboardProfits.constructFromObject(data['profits']),
                'events': ItemsViewModelInvestmentEventViewModel.constructFromObject(data['events']),
            });
        }
    }
}



