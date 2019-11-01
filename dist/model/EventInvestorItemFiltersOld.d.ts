import { FilterModelOld } from './FilterModelOld';
export declare class EventInvestorItemFiltersOld {
    'signalProgramDetails': Array<FilterModelOld>;
    'programDetails': Array<FilterModelOld>;
    'fundDetails': Array<FilterModelOld>;
    'allAssets': Array<FilterModelOld>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): EventInvestorItemFiltersOld | undefined;
}
