export declare class LevelsParamsInfo {
    'minAvailableToInvest'?: number;
    'maxAvailableToInvest'?: number;
    'unverifiedAvailableToInvest'?: number;
    'genesisRatioMin'?: number;
    'genesisRatioMax'?: number;
    'genesisRatioHighRisk'?: number;
    'volumeScaleMin'?: number;
    'volumeScaleMax'?: number;
    'programAgeMax'?: number;
    'ageByVolumeMax'?: number;
    'investmentScaleMin'?: number;
    'investmentScaleMax'?: number;
    'investmentScaleHighRisk'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: LevelsParamsInfo): LevelsParamsInfo;
}