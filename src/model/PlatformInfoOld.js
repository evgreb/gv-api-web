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
import AndroidAppVersion from './AndroidAppVersion';
import EnumsOld from './EnumsOld';
import FundFacetOld from './FundFacetOld';
import IOsAppVersion from './IOsAppVersion';
import PlatformCurrencyOld from './PlatformCurrencyOld';
import ProgramFacetOld from './ProgramFacetOld';
import ProgramsInfoOld from './ProgramsInfoOld';





/**
 *
 * @interface PlatformInfoOld
 */

/**
 *
 * @name PlatformInfoOld#iOSVersion
 * @type {IOsAppVersion}
 */
/**
 *
 * @name PlatformInfoOld#androidVersion
 * @type {AndroidAppVersion}
 */
/**
 *
 * @name PlatformInfoOld#programsFacets
 * @type {Array<ProgramFacetOld>}
 */
/**
 *
 * @name PlatformInfoOld#fundsFacets
 * @type {Array<FundFacetOld>}
 */
/**
 *
 * @name PlatformInfoOld#programsInfo
 * @type {ProgramsInfoOld}
 */
/**
 *
 * @name PlatformInfoOld#currencies
 * @type {Array<String>}
 */
/**
 *
 * @name PlatformInfoOld#programCurrencies
 * @type {Array<String>}
 */
/**
 *
 * @name PlatformInfoOld#platformCurrencies
 * @type {Array<PlatformCurrencyOld>}
 */
/**
 *
 * @name PlatformInfoOld#enums
 * @type {EnumsOld}
 */





export default class PlatformInfoOld {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformInfoOld();

            
            
            

            if (data.hasOwnProperty('iOSVersion')) {
                obj['iOSVersion'] = IOsAppVersion.constructFromObject(data['iOSVersion']);
            }
            if (data.hasOwnProperty('androidVersion')) {
                obj['androidVersion'] = AndroidAppVersion.constructFromObject(data['androidVersion']);
            }
            if (data.hasOwnProperty('programsFacets')) {
                obj['programsFacets'] = ApiClient.convertToType(data['programsFacets'], [ProgramFacetOld]);
            }
            if (data.hasOwnProperty('fundsFacets')) {
                obj['fundsFacets'] = ApiClient.convertToType(data['fundsFacets'], [FundFacetOld]);
            }
            if (data.hasOwnProperty('programsInfo')) {
                obj['programsInfo'] = ProgramsInfoOld.constructFromObject(data['programsInfo']);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], ['String']);
            }
            if (data.hasOwnProperty('programCurrencies')) {
                obj['programCurrencies'] = ApiClient.convertToType(data['programCurrencies'], ['String']);
            }
            if (data.hasOwnProperty('platformCurrencies')) {
                obj['platformCurrencies'] = ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrencyOld]);
            }
            if (data.hasOwnProperty('enums')) {
                obj['enums'] = EnumsOld.constructFromObject(data['enums']);
            }
        }
        return obj;
    }

    iOSVersion = undefined;
    androidVersion = undefined;
    programsFacets = undefined;
    fundsFacets = undefined;
    programsInfo = undefined;
    currencies = undefined;
    programCurrencies = undefined;
    platformCurrencies = undefined;
    enums = undefined;








}






