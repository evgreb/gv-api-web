import { InvestmentEventViewModel } from './investmentEventViewModel';
import ApiClient from "../ApiClient";
export class InvestmentEventViewModels {
    constructor() {
    }
    static constructFromObject(data, obj = new InvestmentEventViewModels()) {
        if (data) {
            if (data.hasOwnProperty('events')) {
                obj['events'] = ApiClient.convertToType(data['events'], [InvestmentEventViewModel]);
            }
            if (data.hasOwnProperty('total')) {
                obj['total'] = ApiClient.convertToType(data['total'], 'number');
            }
        }
        return obj;
    }
}