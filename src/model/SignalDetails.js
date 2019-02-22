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
import ChartSimple from './ChartSimple';
import PersonalSignalDetailsFull from './PersonalSignalDetailsFull';
import ProfilePublic from './ProfilePublic';
import ProgramDetailsListStatistic from './ProgramDetailsListStatistic';
import ProgramTag from './ProgramTag';





    /**
     *
     * @interface SignalDetails
     */
    
    /**
     *
     * @name SignalDetails#statistic
     * @type {ProgramDetailsListStatistic}
     */
    /**
     *
     * @name SignalDetails#personalDetails
     * @type {PersonalSignalDetailsFull}
     */
    /**
     *
     * @name SignalDetails#currency
     * @type {("BTC"|"GVT"|"Undefined"|"ETH"|"ADA"|"USDT"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name SignalDetails#level
     * @type {Number}
     */
    /**
     *
     * @name SignalDetails#tags
     * @type {Array<ProgramTag>}
     */
    /**
     *
     * @name SignalDetails#subscribers
     * @type {Number}
     */
    /**
     *
     * @name SignalDetails#id
     * @type {String}
     */
    /**
     *
     * @name SignalDetails#logo
     * @type {String}
     */
    /**
     *
     * @name SignalDetails#url
     * @type {String}
     */
    /**
     *
     * @name SignalDetails#color
     * @type {String}
     */
    /**
     *
     * @name SignalDetails#title
     * @type {String}
     */
    /**
     *
     * @name SignalDetails#description
     * @type {String}
     */
    /**
     *
     * @name SignalDetails#status
     * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
     */
    /**
     *
     * @name SignalDetails#manager
     * @type {ProfilePublic}
     */
    /**
     *
     * @name SignalDetails#chart
     * @type {Array<ChartSimple>}
     */





export default class SignalDetails {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SignalDetails();

            
            
            

            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramDetailsListStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('personalDetails')) {
                obj['personalDetails'] = PersonalSignalDetailsFull.constructFromObject(data['personalDetails']);
            }
            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
            }
            if (data.hasOwnProperty('subscribers')) {
                obj['subscribers'] = ApiClient.convertToType(data['subscribers'], 'Number');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('color')) {
                obj['color'] = ApiClient.convertToType(data['color'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('chart')) {
                obj['chart'] = ApiClient.convertToType(data['chart'], [ChartSimple]);
            }
        }
        return obj;
    }

    statistic = undefined;
    personalDetails = undefined;
    currency = undefined;
    level = undefined;
    tags = undefined;
    subscribers = undefined;
    id = undefined;
    logo = undefined;
    url = undefined;
    color = undefined;
    title = undefined;
    description = undefined;
    status = undefined;
    manager = undefined;
    chart = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ETH": "ETH",
    
        "ADA": "ADA",
    
        "USDT": "USDT",
    
        "XRP": "XRP",
    
        "BCH": "BCH",
    
        "LTC": "LTC",
    
        "DOGE": "DOGE",
    
        "BNB": "BNB",
    
        "USD": "USD",
    
        "EUR": "EUR"    
    };

    static StatusEnum = {
    
        "None": "None",
    
        "Pending": "Pending",
    
        "ErrorCreating": "ErrorCreating",
    
        "Active": "Active",
    
        "Closed": "Closed",
    
        "Archived": "Archived",
    
        "ClosedDueToInactivity": "ClosedDueToInactivity"    
    };



}


