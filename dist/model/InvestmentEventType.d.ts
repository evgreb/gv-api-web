import { GenericFabric } from "../constructFromObject";
export declare type InvestmentEventType = 'All' | 'AssetStarted' | 'AssetFinished' | 'AssetPeriodStarted' | 'AssetPeriodEnded' | 'AssetPeriodEndedDueToStopOut' | 'AssetBrokerChanged' | 'AssetInvestByInvestor' | 'AssetWithdrawalByInvestor' | 'AssetInvestByManager' | 'AssetWithdrawalByManager' | 'AssetPeriodProcessed' | 'AssetReallocation' | 'AssetSubscribeByInvestor' | 'AssetUnsubscribeByInvestor' | 'AssetTradeOpen' | 'AssetTradeClosed' | 'AssetSubscriptionEdit' | 'AssetEnterInvestment';
export declare const InvestmentEventType: {
    constructFromObject: GenericFabric<"All" | "AssetStarted" | "AssetFinished" | "AssetPeriodStarted" | "AssetPeriodEnded" | "AssetPeriodEndedDueToStopOut" | "AssetBrokerChanged" | "AssetInvestByInvestor" | "AssetWithdrawalByInvestor" | "AssetInvestByManager" | "AssetWithdrawalByManager" | "AssetPeriodProcessed" | "AssetReallocation" | "AssetSubscribeByInvestor" | "AssetUnsubscribeByInvestor" | "AssetTradeOpen" | "AssetTradeClosed" | "AssetSubscriptionEdit" | "AssetEnterInvestment">;
};
