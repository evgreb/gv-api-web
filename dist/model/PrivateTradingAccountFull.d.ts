import { BrokerDetails } from './BrokerDetails';
import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
import { PrivateTradingAccountOwnerActions } from './PrivateTradingAccountOwnerActions';
import { PrivateTradingAccountType } from './PrivateTradingAccountType';
export declare class PrivateTradingAccountFull {
    'id': string;
    'title': string;
    'creationDate': Date;
    'currency': CurrencyEnum;
    'leverage': number;
    'apiKey': string;
    'login': string;
    'balance': number;
    'type': PrivateTradingAccountType;
    'status': DashboardTradingAssetStatus;
    'brokerDetails': BrokerDetails;
    'ownerActions': PrivateTradingAccountOwnerActions;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): PrivateTradingAccountFull | undefined;
}
declare type CurrencyEnum = 'USD' | 'BTC' | 'ETH' | 'USDT' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};