import ApiClient from "../ApiClient";
export class ProgramFollowOwnerActions {
    constructor(data) {
        this['canClose'] = data['canClose'];
        this['canClosePeriod'] = data['canClosePeriod'];
        this['canChangePassword'] = data['canChangePassword'];
        this['canTransferMoney'] = data['canTransferMoney'];
        this['canMakeProgramFromPrivateTradingAccount'] = data['canMakeProgramFromPrivateTradingAccount'];
        this['canMakeSignalProviderFromPrivateTradingAccount'] = data['canMakeSignalProviderFromPrivateTradingAccount'];
        this['canMakeSignalProviderFromPrivateExternalTradingAccount'] = data['canMakeSignalProviderFromPrivateExternalTradingAccount'];
        this['canMakeProgramFromSignalProvider'] = data['canMakeProgramFromSignalProvider'];
        this['canMakeSignalProviderFromProgram'] = data['canMakeSignalProviderFromProgram'];
        this['canEditSignalProviderSettings'] = data['canEditSignalProviderSettings'];
        this['isEnoughMoneyToCreateProgram'] = data['isEnoughMoneyToCreateProgram'];
    }
    static constructFromObject(data) {
        if (data) {
            return new ProgramFollowOwnerActions({
                'canClose': ApiClient.convertToType(data['canClose'], 'boolean'),
                'canClosePeriod': ApiClient.convertToType(data['canClosePeriod'], 'boolean'),
                'canChangePassword': ApiClient.convertToType(data['canChangePassword'], 'boolean'),
                'canTransferMoney': ApiClient.convertToType(data['canTransferMoney'], 'boolean'),
                'canMakeProgramFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeProgramFromPrivateTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromPrivateTradingAccount': ApiClient.convertToType(data['canMakeSignalProviderFromPrivateTradingAccount'], 'boolean'),
                'canMakeSignalProviderFromPrivateExternalTradingAccount': ApiClient.convertToType(data['canMakeSignalProviderFromPrivateExternalTradingAccount'], 'boolean'),
                'canMakeProgramFromSignalProvider': ApiClient.convertToType(data['canMakeProgramFromSignalProvider'], 'boolean'),
                'canMakeSignalProviderFromProgram': ApiClient.convertToType(data['canMakeSignalProviderFromProgram'], 'boolean'),
                'canEditSignalProviderSettings': ApiClient.convertToType(data['canEditSignalProviderSettings'], 'boolean'),
                'isEnoughMoneyToCreateProgram': ApiClient.convertToType(data['isEnoughMoneyToCreateProgram'], 'boolean'),
            });
        }
    }
}
