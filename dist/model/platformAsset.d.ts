export declare class PlatformAsset {
    'id'?: string;
    'name'?: string;
    'asset'?: string;
    'description'?: string;
    'icon'?: string;
    'color'?: string;
    'mandatoryFundPercent'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: PlatformAsset): PlatformAsset;
}