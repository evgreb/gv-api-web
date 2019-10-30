import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { CaptchaDetails } from "../model/captchaDetails";
import { LevelsParamsInfo } from "../model/levelsParamsInfo";
import { PlatformInfoOld } from "../model/platformInfoOld";
import { PlatformStatisticOld } from "../model/platformStatisticOld";
import { ProgramsLevelsInfo } from "../model/programsLevelsInfo";
export declare class PlatformService {
    apiClient: ApiClient;
    constructor(apiClient?: ApiClient);
    getCaptchaModel(route: string, opts?: {
        client?: string;
        version?: string;
    }): CancelablePromise<CaptchaDetails>;
    private getCaptchaModelWithHttpInfo;
    getLevelsParams(opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<LevelsParamsInfo>;
    private getLevelsParamsWithHttpInfo;
    getPlatformDate(): CancelablePromise<string>;
    private getPlatformDateWithHttpInfo;
    getPlatformStatistic(): CancelablePromise<PlatformStatisticOld>;
    private getPlatformStatisticWithHttpInfo;
    getPlatformStatus(): CancelablePromise<PlatformInfoOld>;
    private getPlatformStatusWithHttpInfo;
    getProgramsLevels(opts?: {
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramsLevelsInfo>;
    private getProgramsLevelsWithHttpInfo;
}