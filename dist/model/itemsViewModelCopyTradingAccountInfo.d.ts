import { CopyTradingAccountInfo } from './copyTradingAccountInfo';
export declare class ItemsViewModelCopyTradingAccountInfo {
    'items'?: Array<CopyTradingAccountInfo>;
    'total'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: ItemsViewModelCopyTradingAccountInfo): ItemsViewModelCopyTradingAccountInfo;
}