import { ChartSimple } from './chartSimple';
import { ValueChartBar } from './valueChartBar';
export declare class DashboardChartValue {
    'investedProgramsInfo'?: Array<ValueChartBar>;
    'balanceChart'?: Array<ChartSimple>;
    'value'?: number;
    'valueCurrency'?: number;
    'changePercent'?: number;
    'changeValue'?: number;
    'changeValueCurrency'?: number;
    'rate'?: number;
    constructor();
    static constructFromObject(data: {
        [key: string]: any;
    }, obj?: DashboardChartValue): DashboardChartValue;
}