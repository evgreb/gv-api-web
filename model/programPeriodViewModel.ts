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
import { ManagerFinancialStatistic } from './managerFinancialStatistic';
import { PeriodStatus } from './periodStatus';

import ApiClient from "../ApiClient";

export class ProgramPeriodViewModel { 
    public dateFrom?: Date;
    public dateTo?: Date;
    public periodLength?: number;
    public status?: PeriodStatus;
    public number?: number;
    public profit?: number;
    public balance?: number;
    public investors?: number;
    public managerDeposit?: number;
    public managerWithdraw?: number;
    public managerCommissionRebate?: number;
    public investorsDeposit?: number;
    public investorsWithdraw?: number;
    public investorsProfitWithdraw?: number;
    public platformSuccessFee?: number;
    public managerStatistic?: ManagerFinancialStatistic;

    static constructFromObject(data: {[key: string]: any}, obj: ProgramPeriodViewModel = new ProgramPeriodViewModel()): ProgramPeriodViewModel {
        if (data) {
            if (data.hasOwnProperty('dateFrom')) {
                obj['dateFrom'] = ApiClient.convertToType(data['dateFrom'], 'Date');
            }
            if (data.hasOwnProperty('dateTo')) {
                obj['dateTo'] = ApiClient.convertToType(data['dateTo'], 'Date');
            }
            if (data.hasOwnProperty('periodLength')) {
                obj['periodLength'] = ApiClient.convertToType(data['periodLength'], 'number');
            }
            if (data.hasOwnProperty('status')) {
                obj['status'] = PeriodStatus.constructFromObject(data['status']);
            }
            if (data.hasOwnProperty('number')) {
                obj['number'] = ApiClient.convertToType(data['number'], 'number');
            }
            if (data.hasOwnProperty('profit')) {
                obj['profit'] = ApiClient.convertToType(data['profit'], 'number');
            }
            if (data.hasOwnProperty('balance')) {
                obj['balance'] = ApiClient.convertToType(data['balance'], 'number');
            }
            if (data.hasOwnProperty('investors')) {
                obj['investors'] = ApiClient.convertToType(data['investors'], 'number');
            }
            if (data.hasOwnProperty('managerDeposit')) {
                obj['managerDeposit'] = ApiClient.convertToType(data['managerDeposit'], 'number');
            }
            if (data.hasOwnProperty('managerWithdraw')) {
                obj['managerWithdraw'] = ApiClient.convertToType(data['managerWithdraw'], 'number');
            }
            if (data.hasOwnProperty('managerCommissionRebate')) {
                obj['managerCommissionRebate'] = ApiClient.convertToType(data['managerCommissionRebate'], 'number');
            }
            if (data.hasOwnProperty('investorsDeposit')) {
                obj['investorsDeposit'] = ApiClient.convertToType(data['investorsDeposit'], 'number');
            }
            if (data.hasOwnProperty('investorsWithdraw')) {
                obj['investorsWithdraw'] = ApiClient.convertToType(data['investorsWithdraw'], 'number');
            }
            if (data.hasOwnProperty('investorsProfitWithdraw')) {
                obj['investorsProfitWithdraw'] = ApiClient.convertToType(data['investorsProfitWithdraw'], 'number');
            }
            if (data.hasOwnProperty('platformSuccessFee')) {
                obj['platformSuccessFee'] = ApiClient.convertToType(data['platformSuccessFee'], 'number');
            }
            if (data.hasOwnProperty('managerStatistic')) {
                obj['managerStatistic'] = ManagerFinancialStatistic.constructFromObject(data['managerStatistic']);
            }
        }
        return obj;
    }
}




