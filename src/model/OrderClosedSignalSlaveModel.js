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
import OrderProgramData from './OrderProgramData';
import ProfilePublic from './ProfilePublic';





    /**
     *
     * @interface OrderClosedSignalSlaveModel
     */
    
    /**
     *
     * @name OrderClosedSignalSlaveModel#dateClose
     * @type {Date}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#priceClose
     * @type {Number}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#manager
     * @type {ProfilePublic}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#program
     * @type {OrderProgramData}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#programId
     * @type {String}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#id
     * @type {String}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#login
     * @type {String}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#ticket
     * @type {String}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#symbol
     * @type {String}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#volume
     * @type {Number}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#profit
     * @type {Number}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#direction
     * @type {("Buy"|"Sell"|"Balance"|"Credit"|"Undefined")}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#date
     * @type {Date}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#price
     * @type {Number}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#priceCurrent
     * @type {Number}
     */
    /**
     *
     * @name OrderClosedSignalSlaveModel#entry
     * @type {("In"|"Out"|"InOut"|"OutBy")}
     */





export default class OrderClosedSignalSlaveModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new OrderClosedSignalSlaveModel();

            
            
            

            if (data.hasOwnProperty('dateClose')) {
                obj['dateClose'] = ApiClient.convertToType(data['dateClose'], 'Date');
            }
            if (data.hasOwnProperty('priceClose')) {
                obj['priceClose'] = ApiClient.convertToType(data['priceClose'], 'Number');
            }
            if (data.hasOwnProperty('manager')) {
                obj['manager'] = ProfilePublic.constructFromObject(data['manager']);
            }
            if (data.hasOwnProperty('program')) {
                obj['program'] = OrderProgramData.constructFromObject(data['program']);
            }
            if (data.hasOwnProperty('programId')) {
                obj['programId'] = ApiClient.convertToType(data['programId'], 'String');
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('login')) {
                obj['login'] = ApiClient.convertToType(data['login'], 'String');
            }
            if (data.hasOwnProperty('ticket')) {
                obj['ticket'] = ApiClient.convertToType(data['ticket'], 'String');
            }
            if (data.hasOwnProperty('symbol')) {
                obj['symbol'] = ApiClient.convertToType(data['symbol'], 'String');
            }
            if (data.hasOwnProperty('volume')) {
                obj['volume'] = ApiClient.convertToType(data['volume'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('direction')) {
                obj['direction'] = ApiClient.convertToType(data['direction'], 'String');
            }
            if (data.hasOwnProperty('date')) {
                obj['date'] = ApiClient.convertToType(data['date'], 'Date');
            }
            if (data.hasOwnProperty('price')) {
                obj['price'] = ApiClient.convertToType(data['price'], 'Number');
            }
            if (data.hasOwnProperty('priceCurrent')) {
                obj['priceCurrent'] = ApiClient.convertToType(data['priceCurrent'], 'Number');
            }
            if (data.hasOwnProperty('entry')) {
                obj['entry'] = ApiClient.convertToType(data['entry'], 'String');
            }
        }
        return obj;
    }

    dateClose = undefined;
    priceClose = undefined;
    manager = undefined;
    program = undefined;
    programId = undefined;
    id = undefined;
    login = undefined;
    ticket = undefined;
    symbol = undefined;
    volume = undefined;
    profit = undefined;
    direction = undefined;
    date = undefined;
    price = undefined;
    priceCurrent = undefined;
    entry = undefined;






    static DirectionEnum = {
    
        "Buy": "Buy",
    
        "Sell": "Sell",
    
        "Balance": "Balance",
    
        "Credit": "Credit",
    
        "Undefined": "Undefined"    
    };

    static EntryEnum = {
    
        "In": "In",
    
        "Out": "Out",
    
        "InOut": "InOut",
    
        "OutBy": "OutBy"    
    };



}

