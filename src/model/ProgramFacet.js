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
import FacetSortType from './FacetSortType';
import ProgramsFilterSorting from './ProgramsFilterSorting';
import Timeframe from './Timeframe';





/**
 *
 * @interface ProgramFacet
 */

/**
 *
 * @name ProgramFacet#sorting
 * @type {ProgramsFilterSorting}
 */
/**
 *
 * @name ProgramFacet#id
 * @type {String}
 */
/**
 *
 * @name ProgramFacet#title
 * @type {String}
 */
/**
 *
 * @name ProgramFacet#description
 * @type {String}
 */
/**
 *
 * @name ProgramFacet#logo
 * @type {String}
 */
/**
 *
 * @name ProgramFacet#url
 * @type {String}
 */
/**
 *
 * @name ProgramFacet#sortType
 * @type {FacetSortType}
 */
/**
 *
 * @name ProgramFacet#timeframe
 * @type {Timeframe}
 */





export default class ProgramFacet {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramFacet();

            
            
            

            if (data.hasOwnProperty('sorting')) {
                obj['sorting'] = ProgramsFilterSorting.constructFromObject(data['sorting']);
            }
            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'String');
            }
            if (data.hasOwnProperty('description')) {
                obj['description'] = ApiClient.convertToType(data['description'], 'String');
            }
            if (data.hasOwnProperty('logo')) {
                obj['logo'] = ApiClient.convertToType(data['logo'], 'String');
            }
            if (data.hasOwnProperty('url')) {
                obj['url'] = ApiClient.convertToType(data['url'], 'String');
            }
            if (data.hasOwnProperty('sortType')) {
                obj['sortType'] = FacetSortType.constructFromObject(data['sortType']);
            }
            if (data.hasOwnProperty('timeframe')) {
                obj['timeframe'] = Timeframe.constructFromObject(data['timeframe']);
            }
        }
        return obj;
    }

    sorting = undefined;
    id = undefined;
    title = undefined;
    description = undefined;
    logo = undefined;
    url = undefined;
    sortType = undefined;
    timeframe = undefined;








}






