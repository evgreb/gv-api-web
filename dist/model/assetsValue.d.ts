import { AssetFilterType } from './assetFilterType';
export declare class AssetsValue {
    'type'?: AssetFilterType;
    'id'?: string;
    'title'?: string;
    'avatar'?: string;
    'color'?: string;
    'value'?: number;
    'changePercent'?: number;
    'changeValue'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: AssetsValue): AssetsValue;
}
