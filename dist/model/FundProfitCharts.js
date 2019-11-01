import { FundAssetsState } from './FundAssetsState';
import { FundChartStatistic } from './FundChartStatistic';
import { SimpleChart } from './SimpleChart';
import ApiClient from "../ApiClient";
export class FundProfitCharts {
    constructor(data) {
        this['statistic'] = data['statistic'];
        this['charts'] = data['charts'];
        this['assets'] = data['assets'];
    }
    static constructFromObject(data) {
        if (data) {
            return new FundProfitCharts({
                'statistic': FundChartStatistic.constructFromObject(data['statistic']),
                'charts': ApiClient.convertToType(data['charts'], [SimpleChart]),
                'assets': ApiClient.convertToType(data['assets'], [FundAssetsState]),
            });
        }
    }
}
