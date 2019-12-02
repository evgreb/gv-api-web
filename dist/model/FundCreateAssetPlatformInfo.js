import ApiClient from "../ApiClient";
export class FundCreateAssetPlatformInfo {
    constructor(data) {
        this['maxEntryFee'] = data['maxEntryFee'];
        this['maxExitFee'] = data['maxExitFee'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundCreateAssetPlatformInfo({
                'maxEntryFee': ApiClient.convertToType(data['maxEntryFee'], 'number'),
                'maxExitFee': ApiClient.convertToType(data['maxExitFee'], 'number'),
            });
        }
    }
}
