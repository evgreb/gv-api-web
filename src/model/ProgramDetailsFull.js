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
import PersonalProgramDetailsFull from './PersonalProgramDetailsFull';
import ProfilePublic from './ProfilePublic';
import ProgramDetailsRating from './ProgramDetailsRating';
import ProgramStatistic from './ProgramStatistic';
import ProgramTag from './ProgramTag';





    /**
     *
     * @interface ProgramDetailsFull
     */
    
    /**
     *
     * @name ProgramDetailsFull#currency
     * @type {("BTC"|"ETH"|"USDT"|"GVT"|"Undefined"|"ADA"|"XRP"|"BCH"|"LTC"|"DOGE"|"BNB"|"USD"|"EUR")}
     */
    /**
     *
     * @name ProgramDetailsFull#level
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#periodDuration
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#periodStarts
     * @type {Date}
     */
    /**
     *
     * @name ProgramDetailsFull#periodEnds
     * @type {Date}
     */
    /**
     *
     * @name ProgramDetailsFull#entryFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#entryFeeSelected
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#entryFeeCurrent
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#successFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#stopOutLevel
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#isReinvesting
     * @type {Boolean}
     */
    /**
     *
     * @name ProgramDetailsFull#isSignalProgram
     * @type {Boolean}
     */
    /**
     *
     * @name ProgramDetailsFull#signalSuccessFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#signalSubscriptionFee
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#availableInvestment
     * @type {Number}
     */
    /**
     *
     * @name ProgramDetailsFull#statistic
     * @type {ProgramStatistic}
     */
    /**
     *
     * @name ProgramDetailsFull#rating
     * @type {ProgramDetailsRating}
     */
    /**
     *
     * @name ProgramDetailsFull#personalProgramDetails
     * @type {PersonalProgramDetailsFull}
     */
    /**
     *
     * @name ProgramDetailsFull#tags
     * @type {Array<ProgramTag>}
     */
    /**
     *
     * @name ProgramDetailsFull#id
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#logo
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#url
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#color
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#description
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#title
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#ipfsHash
     * @type {String}
     */
    /**
     *
     * @name ProgramDetailsFull#status
     * @type {("None"|"Pending"|"ErrorCreating"|"Active"|"Closed"|"Archived"|"ClosedDueToInactivity")}
     */
    /**
     *
     * @name ProgramDetailsFull#manager
     * @type {ProfilePublic}
     */





export default class ProgramDetailsFull {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramDetailsFull();

            
            
            

            if (data.hasOwnProperty('currency')) {
                obj['currency'] = ApiClient.convertToType(data['currency'], 'String');
            }
            if (data.hasOwnProperty('level')) {
                obj['level'] = ApiClient.convertToType(data['level'], 'Number');
            }
            if (data.hasOwnProperty('periodDuration')) {
                obj['periodDuration'] = ApiClient.convertToType(data['periodDuration'], 'Number');
            }
            if (data.hasOwnProperty('periodStarts')) {
                obj['periodStarts'] = ApiClient.convertToType(data['periodStarts'], 'Date');
            }
            if (data.hasOwnProperty('periodEnds')) {
                obj['periodEnds'] = ApiClient.convertToType(data['periodEnds'], 'Date');
            }
            if (data.hasOwnProperty('entryFee')) {
                obj['entryFee'] = ApiClient.convertToType(data['entryFee'], 'Number');
            }
            if (data.hasOwnProperty('entryFeeSelected')) {
                obj['entryFeeSelected'] = ApiClient.convertToType(data['entryFeeSelected'], 'Number');
            }
            if (data.hasOwnProperty('entryFeeCurrent')) {
                obj['entryFeeCurrent'] = ApiClient.convertToType(data['entryFeeCurrent'], 'Number');
            }
            if (data.hasOwnProperty('successFee')) {
                obj['successFee'] = ApiClient.convertToType(data['successFee'], 'Number');
            }
            if (data.hasOwnProperty('stopOutLevel')) {
                obj['stopOutLevel'] = ApiClient.convertToType(data['stopOutLevel'], 'Number');
            }
            if (data.hasOwnProperty('isReinvesting')) {
                obj['isReinvesting'] = ApiClient.convertToType(data['isReinvesting'], 'Boolean');
            }
            if (data.hasOwnProperty('isSignalProgram')) {
                obj['isSignalProgram'] = ApiClient.convertToType(data['isSignalProgram'], 'Boolean');
            }
            if (data.hasOwnProperty('signalSuccessFee')) {
                obj['signalSuccessFee'] = ApiClient.convertToType(data['signalSuccessFee'], 'Number');
            }
            if (data.hasOwnProperty('signalSubscriptionFee')) {
                obj['signalSubscriptionFee'] = ApiClient.convertToType(data['signalSubscriptionFee'], 'Number');
            }
            if (data.hasOwnProperty('availableInvestment')) {
                obj['availableInvestment'] = ApiClient.convertToType(data['availableInvestment'], 'Number');
            }
            if (data.hasOwnProperty('statistic')) {
                obj['statistic'] = ProgramStatistic.constructFromObject(data['statistic']);
            }
            if (data.hasOwnProperty('rating')) {
                obj['rating'] = ProgramDetailsRating.constructFromObject(data['rating']);
            }
            if (data.hasOwnProperty('personalProgramDetails')) {
                obj['personalProgramDetails'] = PersonalProgramDetailsFull.constructFromObject(data['personalProgramDetails']);
            }
            if (data.hasOwnProperty('tags')) {
                obj['tags'] = ApiClient.convertToType(data['tags'], [ProgramTag]);
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
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('ipfsHash')) {
                obj['ipfsHash'] = ApiClient.convertToType(data['ipfsHash'], 'String');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = ApiClient.convertToType(data['status'], 'String');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
        }
        return obj;
    }

    currency = undefined;
    level = undefined;
    periodDuration = undefined;
    periodStarts = undefined;
    periodEnds = undefined;
    entryFee = undefined;
    entryFeeSelected = undefined;
    entryFeeCurrent = undefined;
    successFee = undefined;
    stopOutLevel = undefined;
    isReinvesting = undefined;
    isSignalProgram = undefined;
    signalSuccessFee = undefined;
    signalSubscriptionFee = undefined;
    availableInvestment = undefined;
    statistic = undefined;
    rating = undefined;
    personalProgramDetails = undefined;
    tags = undefined;
    id = undefined;
    logo = undefined;
    url = undefined;
    color = undefined;
    description = undefined;
    title = undefined;
    ipfsHash = undefined;
    status = undefined;
    manager = undefined;






    static CurrencyEnum = {
    
        "BTC": "BTC",
    
        "ETH": "ETH",
    
        "USDT": "USDT",
    
        "GVT": "GVT",
    
        "Undefined": "Undefined",
    
        "ADA": "ADA",
    
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


