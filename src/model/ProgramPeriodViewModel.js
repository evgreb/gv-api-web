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
import ManagerFinancialStatistic from './ManagerFinancialStatistic';
import PeriodStatus from './PeriodStatus';





/**
 *
 * @interface ProgramPeriodViewModel
 */

/**
 *
 * @name ProgramPeriodViewModel#dateFrom
 * @type {Date}
 */
/**
 *
 * @name ProgramPeriodViewModel#dateTo
 * @type {Date}
 */
/**
 *
 * @name ProgramPeriodViewModel#periodLength
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#status
 * @type {PeriodStatus}
 */
/**
 *
 * @name ProgramPeriodViewModel#number
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#profit
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#balance
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#investors
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#managerDeposit
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#managerWithdraw
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#managerCommissionRebate
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#investorsDeposit
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#investorsWithdraw
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#investorsProfitWithdraw
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#platformSuccessFee
 * @type {Number}
 */
/**
 *
 * @name ProgramPeriodViewModel#managerStatistic
 * @type {ManagerFinancialStatistic}
 */





export default class ProgramPeriodViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProgramPeriodViewModel();

            
            
            

            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('dateTo')) {
                obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'Date');
            }
            if (data.hasOwnProperty('periodLength')) {
                obj['periodLength'] = ApiClient.convertToType(data['periodLength'], 'Number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = PeriodStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'Number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'Number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'Number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'Number');
            }
            if (data.hasOwnProperty('managerDeposit')) {
                obj['managerDeposit'] = ApiClient.convertToType(data['managerDeposit'], 'Number');
            }
            if (data.hasOwnProperty('managerWithdraw')) {
                obj['managerWithdraw'] = ApiClient.convertToType(data['managerWithdraw'], 'Number');
            }
            if (data.hasOwnProperty('managerCommissionRebate')) {
                obj['managerCommissionRebate'] = ApiClient.convertToType(data['managerCommissionRebate'], 'Number');
            }
            if (data.hasOwnProperty('investorsDeposit')) {
                obj['investorsDeposit'] = ApiClient.convertToType(data['investorsDeposit'], 'Number');
            }
            if (data.hasOwnProperty('investorsWithdraw')) {
                obj['investorsWithdraw'] = ApiClient.convertToType(data['investorsWithdraw'], 'Number');
            }
            if (data.hasOwnProperty('investorsProfitWithdraw')) {
                obj['investorsProfitWithdraw'] = ApiClient.convertToType(data['investorsProfitWithdraw'], 'Number');
            }
            if (data.hasOwnProperty('platformSuccessFee')) {
                obj['platformSuccessFee'] = ApiClient.convertToType(data['platformSuccessFee'], 'Number');
            }
            if (data.hasOwnProperty('managerStatistic')) {
                obj['managerStatistic'] = ManagerFinancialStatistic.constructFromObject(data['managerStatistic']);
            }
        }
        return obj;
    }

    dateFrom = undefined;
    dateTo = undefined;
    periodLength = undefined;
    status = undefined;
    number = undefined;
    profit = undefined;
    balance = undefined;
    investors = undefined;
    managerDeposit = undefined;
    managerWithdraw = undefined;
    managerCommissionRebate = undefined;
    investorsDeposit = undefined;
    investorsWithdraw = undefined;
    investorsProfitWithdraw = undefined;
    platformSuccessFee = undefined;
    managerStatistic = undefined;








}






