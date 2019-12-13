import { AssetDetails } from './AssetDetails';
import { SignalSubscriberInfo } from './SignalSubscriberInfo';
import { SubscriptionMode } from './SubscriptionMode';
export declare class SignalSubscription {
    'subscriberInfo': SignalSubscriberInfo;
    'asset': AssetDetails;
    'hasSignalAccount': boolean;
    'hasActiveSubscription': boolean;
    'mode': SubscriptionMode;
    'percent': number;
    'openTolerancePercent': number;
    'fixedVolume': number;
    'fixedCurrency': FixedCurrencyEnum;
    'totalProfit': number;
    'totalVolume': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): SignalSubscription | undefined;
}
declare type FixedCurrencyEnum = 'BTC' | 'ETH' | 'USDT' | 'USD' | 'GVT' | 'Undefined' | 'ADA' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
export {};
