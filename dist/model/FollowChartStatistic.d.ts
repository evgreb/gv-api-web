export declare class FollowChartStatistic {
    'subscribers': number;
    'tradingVolume': number;
    'trades': number;
    'successTradesPercent': number;
    'profitFactor': number;
    'balance': number;
    'profitPercent': number;
    'sharpeRatio': number;
    'sortinoRatio': number;
    'calmarRatio': number;
    'maxDrawdown': number;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): FollowChartStatistic | undefined;
}
