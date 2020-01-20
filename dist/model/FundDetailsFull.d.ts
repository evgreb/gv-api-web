import { AssetPublicDetails } from './AssetPublicDetails';
import { FundAssetInfo } from './FundAssetInfo';
import { PersonalFundDetails } from './PersonalFundDetails';
import { ProfilePublic } from './ProfilePublic';
export declare class FundDetailsFull {
    'id': string;
    'publicInfo': AssetPublicDetails;
    'entryFeeSelected': number;
    'entryFeeCurrent': number;
    'exitFeeSelected': number;
    'exitFeeCurrent': number;
    'assetsStructure': Array<FundAssetInfo>;
    'personalDetails': PersonalFundDetails;
    'owner': ProfilePublic;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FundDetailsFull | undefined;
}