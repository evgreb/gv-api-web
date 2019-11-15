import { AssetSignalSettings } from './AssetSignalSettings';
import { BrokerDetails } from './BrokerDetails';
import { Currency } from './Currency';
import { PersonalProgramDetails } from './PersonalProgramDetails';
import { ProfilePublic } from './ProfilePublic';
import { ProgramTag } from './ProgramTag';
import { TradesDelay } from './TradesDelay';
export declare class ProgramDetailsFull {
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'title': string;
    'description': string;
    'creationDate': Date;
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'periodDuration': number;
    'periodStarts': Date;
    'periodEnds': Date;
    'tradesDelay': TradesDelay;
    'status': string;
    'login': string;
    'ageDays': number;
    'leverageMin': number;
    'leverageMax': number;
    'genesisRatio': number;
    'investmentScale': number;
    'volumeScale': number;
    'entryFeeSelected': number;
    'entryFeeCurrent': number;
    'successFeeSelected': number;
    'successFeeCurrent': number;
    'stopOutLevelSelected': number;
    'stopOutLevelCurrent': number;
    'availableInvestmentBase': number;
    'availableInvestmentLimit': number;
    'totalAvailableInvestment': number;
    'owner': ProfilePublic;
    'brokerDetails': BrokerDetails;
    'signalSettings': AssetSignalSettings;
    'personalDetails': PersonalProgramDetails;
    'tags': Array<ProgramTag>;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramDetailsFull | undefined;
}
