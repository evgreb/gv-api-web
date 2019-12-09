import ApiClient from "../ApiClient";
import CancelablePromise from "../cancelable-promise/CancelablePromise.js";
import { AbsoluteProfitChart } from "../model/AbsoluteProfitChart";
import { AccountBalanceChart } from "../model/AccountBalanceChart";
import { FollowDetailsFull } from "../model/FollowDetailsFull";
import { FollowProfitPercentCharts } from "../model/FollowProfitPercentCharts";
import { ItemsViewModelFollowDetailsList } from "../model/ItemsViewModelFollowDetailsList";
import { ItemsViewModelSignalSubscription } from "../model/ItemsViewModelSignalSubscription";
export declare class FollowApi {
    private apiClient;
    constructor(apiClient?: ApiClient);
    addToFavorites(id: string, authorization: string): CancelablePromise<null>;
    private addToFavoritesWithHttpInfo;
    getAbsoluteProfitChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<AbsoluteProfitChart>;
    private getAbsoluteProfitChartWithHttpInfo;
    getBalanceChart(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
    }): CancelablePromise<AccountBalanceChart>;
    private getBalanceChartWithHttpInfo;
    getFollowAssetDetails(id: string, opts?: {
        authorization?: string;
    }): CancelablePromise<FollowDetailsFull>;
    private getFollowAssetDetailsWithHttpInfo;
    getFollowAssets(opts?: {
        authorization?: string;
        sorting?: 'ByTitleAsc' | 'ByTitleDesc' | 'BySubscribersAsc' | 'BySubscribersDesc' | 'ByTradesAsc' | 'ByTradesDesc' | 'ByDrawdownAsc' | 'ByDrawdownDesc' | 'ByProfitAsc' | 'ByProfitDesc' | 'ByNewAsc' | 'ByNewDesc';
        showIn?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        tags?: Array<string>;
        dateFrom?: Date;
        dateTo?: Date;
        chartPointsCount?: number;
        facetId?: string;
        mask?: string;
        ownerId?: string;
        showFavorites?: boolean;
        skip?: number;
        take?: number;
    }): CancelablePromise<ItemsViewModelFollowDetailsList>;
    private getFollowAssetsWithHttpInfo;
    getFollowSubscriptionsForAsset(id: string, authorization: string): CancelablePromise<ItemsViewModelSignalSubscription>;
    private getFollowSubscriptionsForAssetWithHttpInfo;
    getFollowSubscriptionsForOwnAccount(id: string, authorization: string): CancelablePromise<ItemsViewModelSignalSubscription>;
    private getFollowSubscriptionsForOwnAccountWithHttpInfo;
    getProfitPercentCharts(id: string, opts?: {
        dateFrom?: Date;
        dateTo?: Date;
        maxPointCount?: number;
        currency?: 'USD' | 'Undefined' | 'GVT' | 'ETH' | 'BTC' | 'ADA' | 'USDT' | 'XRP' | 'BCH' | 'LTC' | 'DOGE' | 'BNB' | 'EUR';
        currencies?: Array<Object>;
    }): CancelablePromise<FollowProfitPercentCharts>;
    private getProfitPercentChartsWithHttpInfo;
    removeFromFavorites(id: string, authorization: string): CancelablePromise<null>;
    private removeFromFavoritesWithHttpInfo;
}
