import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { ItemsViewModelProgramDetailsList } from "../model/ItemsViewModelProgramDetailsList";
import { ProgramBalanceChart } from "../model/ProgramBalanceChart";
import { ProgramDetailsFull } from "../model/ProgramDetailsFull";
import { ProgramPeriodsViewModel } from "../model/ProgramPeriodsViewModel";
import { ProgramProfitCharts } from "../model/ProgramProfitCharts";
import { SignalProviderSubscribers } from "../model/SignalProviderSubscribers";
import { TradesViewModel } from "../model/TradesViewModel";
export declare class ProgramsApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    exportProgramPeriods(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: 'Planned' | 'InProccess' | 'Closed';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramPeriodsWithHttpInfo;
    exportProgramPeriodsFinStatistic(id: string, authorization: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: 'Planned' | 'InProccess' | 'Closed';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramPeriodsFinStatisticWithHttpInfo;
    exportProgramTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<Blob>;
    private exportProgramTradesWithHttpInfo;
    getProgramBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
    }): CancelablePromise<ProgramBalanceChart>;
    private getProgramBalanceChartWithHttpInfo;
    getProgramDetails(id: string, opts?: {
        authorization?: string;
    }): CancelablePromise<ProgramDetailsFull>;
    private getProgramDetailsWithHttpInfo;
    getProgramOpenTrades(id: string, opts?: {
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        symbol?: string;
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    private getProgramOpenTradesWithHttpInfo;
    getProgramPeriods(id: string, opts?: {
        authorization?: string;
        dateFrom?: Date;
        dateTo?: Date;
        numberMin?: number;
        numberMax?: number;
        status?: 'Planned' | 'InProccess' | 'Closed';
        skip?: number;
        take?: number;
    }): CancelablePromise<ProgramPeriodsViewModel>;
    private getProgramPeriodsWithHttpInfo;
    getProgramProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        currencies?: Array<Object>;
    }): CancelablePromise<ProgramProfitCharts>;
    private getProgramProfitChartWithHttpInfo;
    getProgramSubscribers(id: string, authorization: string, opts?: {
        status?: 'All' | 'Active';
        skip?: number;
        take?: number;
    }): CancelablePromise<SignalProviderSubscribers>;
    private getProgramSubscribersWithHttpInfo;
    getProgramTrades(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        symbol?: string;
        sorting?: 'ByDateAsc' | 'ByDateDesc' | 'ByTicketAsc' | 'ByTicketDesc' | 'BySymbolAsc' | 'BySymbolDesc' | 'ByDirectionAsc' | 'ByDirectionDesc' | 'ByVolumeAsc' | 'ByVolumeDesc' | 'ByPriceAsc' | 'ByPriceDesc' | 'ByPriceCurrentAsc' | 'ByPriceCurrentDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByCommissionAsc' | 'ByCommissionDesc' | 'BySwapAsc' | 'BySwapDesc';
        accountId?: string;
        accountCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        skip?: number;
        take?: number;
    }): CancelablePromise<TradesViewModel>;
    private getProgramTradesWithHttpInfo;
    getPrograms(opts?: {
        authorization?: string;
        showIn?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        tags?: Array<string>;
        programCurrency?: 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'USD' | 'EUR';
        levelMin?: number;
        levelMax?: number;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelProgramDetailsList>;
    private getProgramsWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}