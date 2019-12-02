import { RatesModelRates } from './RatesModelRates';
export class RatesModel {
    constructor(data) {
        this['rates'] = data['rates'];
    }
    static constructFromObject(data) {
        if (data) {
            return new RatesModel({
                'rates': RatesModelRates.constructFromObject(data['rates']),
            });
        }
    }
}
