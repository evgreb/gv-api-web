import { BrokerDetailsOld } from './BrokerDetailsOld';
import { Currency } from './Currency';
import { InvestmentProgramStatus } from './InvestmentProgramStatus';
import { PersonalProgramDetailsFullOld } from './PersonalProgramDetailsFullOld';
import { ProfilePublic } from './ProfilePublic';
import { ProgramStatistic } from './ProgramStatistic';
import { ProgramTag } from './ProgramTag';
import { TradesDelay } from './TradesDelay';
export declare class ProgramDetailsFullOld {
    'currency': Currency;
    'level': number;
    'levelProgress': number;
    'periodDuration': number;
    'periodStarts': Date;
    'periodEnds': Date;
    'entryFeeSelected': number;
    'entryFeeCurrent': number;
    'successFeeSelected': number;
    'successFeeCurrent': number;
    'stopOutLevelSelected': number;
    'stopOutLevelCurrent': number;
    'isReinvesting': boolean;
    'isSignalProgram': boolean;
    'signalSuccessFee': number;
    'signalVolumeFee': number;
    'leverageMin': number;
    'leverageMax': number;
    'ageDays': number;
    'genesisRatio': number;
    'investmentScale': number;
    'volumeScale': number;
    'tradesDelay': TradesDelay;
    'availableInvestmentBase': number;
    'availableInvestmentLimit': number;
    'totalAvailableInvestment': number;
    'brokerDetails': BrokerDetailsOld;
    'statistic': ProgramStatistic;
    'personalProgramDetails': PersonalProgramDetailsFullOld;
    'tags': Array<ProgramTag>;
    'id': string;
    'logo': string;
    'url': string;
    'color': string;
    'description': string;
    'title': string;
    'ipfsHash': string;
    'creationDate': Date;
    'status': InvestmentProgramStatus;
    'manager': ProfilePublic;
    constructor(data: {
        [key: string]: any;
    });
    static constructFromObject(data: {
        [key: string]: any;
    }): ProgramDetailsFullOld | undefined;
}
