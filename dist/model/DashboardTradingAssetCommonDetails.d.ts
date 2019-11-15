import { DashboardTradingAssetStatus } from './DashboardTradingAssetStatus';
export declare class DashboardTradingAssetCommonDetails {
    'status': DashboardTradingAssetStatus;
    'creationDate': Date;
    'balance': number;
    'login': string;
    'currency': CurrencyEnum;
    'leverage': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAssetCommonDetails | undefined;
}
declare type CurrencyEnum = 'USDT' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
export {};
