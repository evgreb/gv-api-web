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
import FundFacet from './FundFacet';
import IOsAppVersion from './IOsAppVersion';
import PlatformCurrency from './PlatformCurrency';
import ProgramFacet from './ProgramFacet';
import ProgramTag from './ProgramTag';
import ProgramsInfo from './ProgramsInfo';





    /**
     *
     * @interface PlatformInfo
     */
    
    /**
     *
     * @name PlatformInfo#iOSVersion
     * @type {IOsAppVersion}
     */
    /**
     *
     * @name PlatformInfo#androidVersion
     * @type {AndroidAppVersion}
     */
    /**
     *
     * @name PlatformInfo#programsFacets
     * @type {Array<ProgramFacet>}
     */
    /**
     *
     * @name PlatformInfo#fundsFacets
     * @type {Array<FundFacet>}
     */
    /**
     *
     * @name PlatformInfo#programsInfo
     * @type {ProgramsInfo}
     */
    /**
     *
     * @name PlatformInfo#currencies
     * @type {Array<String>}
     */
    /**
     *
     * @name PlatformInfo#platformCurrencies
     * @type {Array<PlatformCurrency>}
     */
    /**
     *
     * @name PlatformInfo#programTags
     * @type {Array<ProgramTag>}
     */





export default class PlatformInfo {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new PlatformInfo();

            
            
            

            if (data.hasOwnProperty('iOSVersion')) {
                obj['iOSVersion'] = IOsAppVersion.constructFromObject(data['iOSVersion']);
            }
            if (data.hasOwnProperty('androidVersion')) {
                obj['androidVersion'] = AndroidAppVersion.constructFromObject(data['androidVersion']);
            }
            if (data.hasOwnProperty('programsFacets')) {
                obj['programsFacets'] = ApiClient.convertToType(data['programsFacets'], [ProgramFacet]);
            }
            if (data.hasOwnProperty('fundsFacets')) {
                obj['fundsFacets'] = ApiClient.convertToType(data['fundsFacets'], [FundFacet]);
            }
            if (data.hasOwnProperty('programsInfo')) {
                obj['programsInfo'] = ProgramsInfo.constructFromObject(data['programsInfo']);
            }
            if (data.hasOwnProperty('currencies')) {
                obj['currencies'] = ApiClient.convertToType(data['currencies'], ['String']);
            }
            if (data.hasOwnProperty('platformCurrencies')) {
                obj['platformCurrencies'] = ApiClient.convertToType(data['platformCurrencies'], [PlatformCurrency]);
            }
            if (data.hasOwnProperty('programTags')) {
                obj['programTags'] = ApiClient.convertToType(data['programTags'], [ProgramTag]);
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
    platformCurrencies = undefined;
    programTags = undefined;








}


