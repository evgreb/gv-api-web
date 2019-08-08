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
import FundsList from './FundsList';
import ManagersList from './ManagersList';
import ProgramsList from './ProgramsList';





/**
 *
 * @interface SearchViewModel
 */

/**
 *
 * @name SearchViewModel#programs
 * @type {ProgramsList}
 */
/**
 *
 * @name SearchViewModel#funds
 * @type {FundsList}
 */
/**
 *
 * @name SearchViewModel#managers
 * @type {ManagersList}
 */





export default class SearchViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new SearchViewModel();

            
            
            

            if (data.hasOwnProperty('programs')) {
                obj['programs'] = ProgramsList.constructFromObject(data['programs']);
            }
            if (data.hasOwnProperty('funds')) {
                obj['funds'] = FundsList.constructFromObject(data['funds']);
            }
            if (data.hasOwnProperty('managers')) {
                obj['managers'] = ManagersList.constructFromObject(data['managers']);
            }
        }
        return obj;
    }

    programs = undefined;
    funds = undefined;
    managers = undefined;








}





