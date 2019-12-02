import { DashboardProfits } from './DashboardProfits';
import { ItemsViewModelInvestmentEventViewModel } from './ItemsViewModelInvestmentEventViewModel';
export declare class DashboardTradingDetails {
    'equity': number;
    'assetsUnderManagement': number;
    'profits': DashboardProfits;
    'events': ItemsViewModelInvestmentEventViewModel;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): DashboardTradingDetails | undefined;
}
