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
import { AmountWithCurrency } from './amountWithCurrency';
import { BrokerTradeServerType } from './brokerTradeServerType';

import ApiClient from "../ApiClient";

export class ProgramMinInvestAmount { 
    public serverType?: BrokerTradeServerType;
    public minInvestAmountOwnProgram?: [AmountWithCurrency];
    public minInvestAmountSomeoneProgram?: [AmountWithCurrency];

    static constructFromObject(data: {[key: string]: any}, obj: ProgramMinInvestAmount = new ProgramMinInvestAmount()): ProgramMinInvestAmount {
        if (data) {
            if (data.hasOwnProperty('serverType')) {
                obj['serverType'] = BrokerTradeServerType.constructFromObject(data['serverType']);
            }
            if (data.hasOwnProperty('minInvestAmountOwnProgram')) {
                obj['minInvestAmountOwnProgram'] = ApiClient.convertToType(data['minInvestAmountOwnProgram'], [AmountWithCurrency]);
            }
            if (data.hasOwnProperty('minInvestAmountSomeoneProgram')) {
                obj['minInvestAmountSomeoneProgram'] = ApiClient.convertToType(data['minInvestAmountSomeoneProgram'], [AmountWithCurrency]);
            }
        }
        return obj;
    }
}




