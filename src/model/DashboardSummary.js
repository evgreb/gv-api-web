/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from '../ApiClient';
import DashboardChartValue from './DashboardChartValue';
import DashboardPortfolioEvents from './DashboardPortfolioEvents';
import ProfileHeaderViewModel from './ProfileHeaderViewModel';
import ProgramRequests from './ProgramRequests';





    /**
     *
     * @interface DashboardSummary
     */
    
    /**
     *
     * @name DashboardSummary#chart
     * @type {DashboardChartValue}
     */
    /**
     *
     * @name DashboardSummary#events
     * @type {DashboardPortfolioEvents}
     */
    /**
     *
     * @name DashboardSummary#profileHeader
     * @type {ProfileHeaderViewModel}
     */
    /**
     *
     * @name DashboardSummary#programsCount
     * @type {Number}
     */
    /**
     *
     * @name DashboardSummary#fundsCount
     * @type {Number}
     */
    /**
     *
     * @name DashboardSummary#requests
     * @type {ProgramRequests}
     */





export default class DashboardSummary {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new DashboardSummary();

            
            
            

            if (data.hasOwnProperty('chart')) {
                obj['chart'] = DashboardChartValue.constructFromObject(data['chart']);
            }
            if (data.hasOwnProperty('events')) {
                obj['events'] = DashboardPortfolioEvents.constructFromObject(data['events']);
            }
            if (data.hasOwnProperty('profileHeader')) {
                obj['profileHeader'] = ProfileHeaderViewModel.constructFromObject(data['profileHeader']);
            }
            if (data.hasOwnProperty('programsCount')) {
                obj['programsCount'] = ApiClient.convertToType(data['programsCount'], 'Number');
            }
            if (data.hasOwnProperty('fundsCount')) {
                obj['fundsCount'] = ApiClient.convertToType(data['fundsCount'], 'Number');
            }
            if (data.hasOwnProperty('requests')) {
                obj['requests'] = ProgramRequests.constructFromObject(data['requests']);
            }
        }
        return obj;
    }

    chart = undefined;
    events = undefined;
    profileHeader = undefined;
    programsCount = undefined;
    fundsCount = undefined;
    requests = undefined;








}


