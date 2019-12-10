import { GenericFabric } from "../constructFromObject";
export declare type FeeType = 'GvProgramEntry' | 'ManagerFundEntry' | 'GvFundEntry' | 'Undefined' | 'GvProgramSuccess' | 'GvProgramSuccessSum' | 'GvGmGvtHolderFee' | 'GvGmRegularFee' | 'ManagerProgramEntry' | 'ManagerProgramSuccess' | 'ManagerProgramSuccessSum' | 'ManagerFundExit' | 'GvWithdrawal' | 'ManagerSignalMasterSuccessFee' | 'ManagerSignalMasterVolumeFee' | 'GvSignalSuccessFee' | 'GvSignalVolumeFee' | 'GvFundTrade';
export declare const FeeType: {
    constructFromObject: GenericFabric<FeeType>;
};
