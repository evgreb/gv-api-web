import ApiClient from "../ApiClient";
export class ManagerFundWithdrawInfoOld {
    constructor() {
    }
    static constructFromObject(data, obj = new ManagerFundWithdrawInfoOld()) {
        if (data) {
            if (data.hasOwnProperty('withheldInvestment')) {
                obj['withheldInvestment'] = ApiClient.convertToType(data['withheldInvestment'], 'number');
            }
            if (data.hasOwnProperty('exitFee')) {
                obj['exitFee'] = ApiClient.convertToType(data['exitFee'], 'number');
            }
            if (data.hasOwnProperty('title')) {
                obj['title'] = ApiClient.convertToType(data['title'], 'string');
            }
            if (data.hasOwnProperty('availableToWithdraw')) {
                obj['availableToWithdraw'] = ApiClient.convertToType(data['availableToWithdraw'], 'number');
            }
            if (data.hasOwnProperty('rate')) {
                obj['rate'] = ApiClient.convertToType(data['rate'], 'number');
            }
        }
        return obj;
    }
}
