import ApiClient from "../ApiClient";
export class PrivateTradingAccountOwnerActions {
    constructor(data) {
        this['canClose'] = data['canClose'];
        this['canChangePassword'] = data['canChangePassword'];
        this['canTransferMoney'] = data['canTransferMoney'];
        this['canMakeDemoDeposit'] = data['canMakeDemoDeposit'];
        this['canMakeProgramFromPrivateTradingAccount'] = data['canMakeProgramFromPrivateTradingAccount'];
        this['canMakeSignalProviderFromPrivateTradingAccount'] = data['canMakeSignalProviderFromPrivateTradingAccount'];
        this['canMakeSignalProviderFromPrivateExternalTradingAccount'] = data['canMakeSignalProviderFromPrivateExternalTradingAccount'];
        this['canMakeProgramFromSignalProvider'] = data['canMakeProgramFromSignalProvider'];
        this['canMakeSignalProviderFromProgram'] = data['canMakeSignalProviderFromProgram'];
        this['canEditSignalProviderSettings'] = data['canEditSignalProviderSettings'];
        this['isEnoughMoneyToCreateProgram'] = data['isEnoughMoneyToCreateProgram'];
        this['canConfirm2FA'] = data['canConfirm2FA'];
    }
    static constructFromObject(data) {
        if (data) {
            return new PrivateTradingAccountOwnerActions({
                'canClose': ApiClient.convertToType(data['canClose'], 'boolean'),
                'canChangePassword': ApiClient.convertToType(data['canChangePassword'], 'boolean'),
                'canTransferMoney': ApiClient.convertToType(data['canTransferMoney'], 'boolean'),
                'canMakeDemoDeposit': ApiClient.convertToType(data['canMakeDemoDeposit'], 'boolean'),
                'canMakeProgramFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeProgramFromPrivateTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeSignalProviderFromPrivateTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromPrivateExternalTradingAccount': ApiClient.convertToType(data['canMakeSignalProviderFromPrivateExternalTradingAccount'], 'boolean'),
                'canMakeProgramFromSignalProvider': ApiClient.convertToType(data['canMakeProgramFromSignalProvider'], 'boolean'),
                'canMakeSignalProviderFromProgram': ApiClient.convertToType(data['canMakeSignalProviderFromProgram'], 'boolean'),
                'canEditSignalProviderSettings': ApiClient.convertToType(data['canEditSignalProviderSettings'], 'boolean'),
                'isEnoughMoneyToCreateProgram': ApiClient.convertToType(data['isEnoughMoneyToCreateProgram'], 'boolean'),
                'canConfirm2FA': ApiClient.convertToType(data['canConfirm2FA'], 'boolean'),
            });
        }
    }
}