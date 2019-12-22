export declare class DashboardTradingAssetActions {
    'canAddRequestInvest': boolean;
    'canAddRequestWithdraw': boolean;
    'canTransferMoney': boolean;
    'canChangePassword': boolean;
    'canMakeProgramFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateTradingAccount': boolean;
    'canMakeSignalProviderFromPrivateExternalTradingAccount': boolean;
    'canMakeProgramFromSignalProvider': boolean;
    'canMakeSignalProviderFromProgram': boolean;
    'canEditSignalProviderSettings': boolean;
    'isEnoughMoneyToCreateProgram': boolean;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingAssetActions | undefined;
}
