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

import { GenericFabric, fabric } from "../constructFromObject";
export type BrokerTradeServerType = 'Undefined' | 'MetaTrader4' | 'MetaTrader5' | 'NinjaTrader' | 'cTrader' | 'Rumus' | 'Metastock' | 'IDEX' | 'Huobi' | 'Exante' | 'BinanceFollow';

export const BrokerTradeServerType = {
  constructFromObject: fabric as GenericFabric<BrokerTradeServerType>
};

