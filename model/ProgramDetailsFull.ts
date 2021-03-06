/**
 * Core API v2.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 */
import { PersonalProgramDetails } from './PersonalProgramDetails';
import { TradesDelay } from './TradesDelay';

import ApiClient from "../ApiClient";

export class ProgramDetailsFull { 
    public 'level': number;
    public 'levelProgress': number;
    public 'periodDuration': number;
    public 'periodStarts': Date;
    public 'periodEnds': Date;
    public 'tradesDelay': TradesDelay;
    public 'ageDays': number;
    public 'genesisRatio': number;
    public 'investmentScale': number;
    public 'volumeScale': number;
    public 'entryFeeSelected': number;
    public 'entryFeeCurrent': number;
    public 'successFeeSelected': number;
    public 'successFeeCurrent': number;
    public 'stopOutLevelSelected': number;
    public 'stopOutLevelCurrent': number;
    public 'availableInvestmentBase': number;
    public 'availableInvestmentLimit': number;
    public 'totalAvailableInvestment': number;
    public 'personalDetails': PersonalProgramDetails;

    constructor(data: {[key: string]: any}) { 
        this['level'] = data['level'];
        this['levelProgress'] = data['levelProgress'];
        this['periodDuration'] = data['periodDuration'];
        this['periodStarts'] = data['periodStarts'];
        this['periodEnds'] = data['periodEnds'];
        this['tradesDelay'] = data['tradesDelay'];
        this['ageDays'] = data['ageDays'];
        this['genesisRatio'] = data['genesisRatio'];
        this['investmentScale'] = data['investmentScale'];
        this['volumeScale'] = data['volumeScale'];
        this['entryFeeSelected'] = data['entryFeeSelected'];
        this['entryFeeCurrent'] = data['entryFeeCurrent'];
        this['successFeeSelected'] = data['successFeeSelected'];
        this['successFeeCurrent'] = data['successFeeCurrent'];
        this['stopOutLevelSelected'] = data['stopOutLevelSelected'];
        this['stopOutLevelCurrent'] = data['stopOutLevelCurrent'];
        this['availableInvestmentBase'] = data['availableInvestmentBase'];
        this['availableInvestmentLimit'] = data['availableInvestmentLimit'];
        this['totalAvailableInvestment'] = data['totalAvailableInvestment'];
        this['personalDetails'] = data['personalDetails'];
    }

    static constructFromObject(data: {[key: string]: any}): ProgramDetailsFull | undefined {
        if (data) {
            return new ProgramDetailsFull({ 
                'level': ApiClient.convertToType(data['level'], 'number'),
                'levelProgress': ApiClient.convertToType(data['levelProgress'], 'number'),
                'periodDuration': ApiClient.convertToType(data['periodDuration'], 'number'),
                'periodStarts': ApiClient.convertToType(data['periodStarts'], 'Date'),
                'periodEnds': ApiClient.convertToType(data['periodEnds'], 'Date'),
                'tradesDelay': TradesDelay.constructFromObject(data['tradesDelay']),
                'ageDays': ApiClient.convertToType(data['ageDays'], 'number'),
                'genesisRatio': ApiClient.convertToType(data['genesisRatio'], 'number'),
                'investmentScale': ApiClient.convertToType(data['investmentScale'], 'number'),
                'volumeScale': ApiClient.convertToType(data['volumeScale'], 'number'),
                'entryFeeSelected': ApiClient.convertToType(data['entryFeeSelected'], 'number'),
                'entryFeeCurrent': ApiClient.convertToType(data['entryFeeCurrent'], 'number'),
                'successFeeSelected': ApiClient.convertToType(data['successFeeSelected'], 'number'),
                'successFeeCurrent': ApiClient.convertToType(data['successFeeCurrent'], 'number'),
                'stopOutLevelSelected': ApiClient.convertToType(data['stopOutLevelSelected'], 'number'),
                'stopOutLevelCurrent': ApiClient.convertToType(data['stopOutLevelCurrent'], 'number'),
                'availableInvestmentBase': ApiClient.convertToType(data['availableInvestmentBase'], 'number'),
                'availableInvestmentLimit': ApiClient.convertToType(data['availableInvestmentLimit'], 'number'),
                'totalAvailableInvestment': ApiClient.convertToType(data['totalAvailableInvestment'], 'number'),
                'personalDetails': PersonalProgramDetails.constructFromObject(data['personalDetails']),
            });
        }
    }
}



