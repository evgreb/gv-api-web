/**
 * Core API v2
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v2.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AndroidAppVersion from './model/AndroidAppVersion';
import AndroidVersion from './model/AndroidVersion';
import BrokerAssetsPartChangeRequest from './model/BrokerAssetsPartChangeRequest';
import BrokerInitData from './model/BrokerInitData';
import BrokerInvestmentProgram from './model/BrokerInvestmentProgram';
import BrokerOefInitData from './model/BrokerOefInitData';
import BrokerOefInvestmentProgram from './model/BrokerOefInvestmentProgram';
import ChangePasswordViewModel from './model/ChangePasswordViewModel';
import ChartProgramDetails from './model/ChartProgramDetails';
import ChartSimple from './model/ChartSimple';
import ClosePeriodData from './model/ClosePeriodData';
import DExchangeRequest from './model/DExchangeRequest';
import DExchangeResponse from './model/DExchangeResponse';
import ErrorMessage from './model/ErrorMessage';
import ErrorViewModel from './model/ErrorViewModel';
import ForgotPasswordViewModel from './model/ForgotPasswordViewModel';
import IOsAppVersion from './model/IOsAppVersion';
import InvestmentProgramAccrual from './model/InvestmentProgramAccrual';
import InvestmentProgramRequest from './model/InvestmentProgramRequest';
import InvestorAmount from './model/InvestorAmount';
import LoginViewModel from './model/LoginViewModel';
import ManagerAccountOnlineInfo from './model/ManagerAccountOnlineInfo';
import ManagerHistoryIpfsHash from './model/ManagerHistoryIpfsHash';
import ManagerIpfsHash from './model/ManagerIpfsHash';
import ManagerOpenTrades from './model/ManagerOpenTrades';
import ManagerRequest from './model/ManagerRequest';
import NewManager from './model/NewManager';
import NewOpenTradesEvent from './model/NewOpenTradesEvent';
import NewTradeEvent from './model/NewTradeEvent';
import OefAssetPart from './model/OefAssetPart';
import OefManagerRequest from './model/OefManagerRequest';
import OpenOrderModel from './model/OpenOrderModel';
import OrderModel from './model/OrderModel';
import PasswordModel from './model/PasswordModel';
import Period from './model/Period';
import PlatformInfo from './model/PlatformInfo';
import ProfileFullViewModel from './model/ProfileFullViewModel';
import ProfilePublicViewModel from './model/ProfilePublicViewModel';
import ProgramChart from './model/ProgramChart';
import ProgramDetailsFull from './model/ProgramDetailsFull';
import ProgramDetailsList from './model/ProgramDetailsList';
import ProgramDetailsListStatistic from './model/ProgramDetailsListStatistic';
import ProgramStatistic from './model/ProgramStatistic';
import ProgramsFilter from './model/ProgramsFilter';
import ProgramsList from './model/ProgramsList';
import RateViewModel from './model/RateViewModel';
import RealOefAssetPart from './model/RealOefAssetPart';
import RecoveryCode from './model/RecoveryCode';
import RecoveryCodesViewModel from './model/RecoveryCodesViewModel';
import RegisterInvestorViewModel from './model/RegisterInvestorViewModel';
import RegisterManagerViewModel from './model/RegisterManagerViewModel';
import RequestRate from './model/RequestRate';
import ResetPasswordViewModel from './model/ResetPasswordViewModel';
import StartValues from './model/StartValues';
import TradesViewModel from './model/TradesViewModel';
import TwoFactorAuthenticator from './model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from './model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeModel from './model/TwoFactorCodeModel';
import TwoFactorStatus from './model/TwoFactorStatus';
import UpdateProfileViewModel from './model/UpdateProfileViewModel';
import UploadResult from './model/UploadResult';
import UsersRealAssets from './model/UsersRealAssets';
import BrokerApi from './api/BrokerApi';
import DexchangeApi from './api/DexchangeApi';
import FilesApi from './api/FilesApi';
import InvestorApi from './api/InvestorApi';
import ManagerApi from './api/ManagerApi';
import PlatformApi from './api/PlatformApi';
import ProgramApi from './api/ProgramApi';
import RateApi from './api/RateApi';


/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CoreApiV2 = require('index'); // See note below*.
* var xxxSvc = new CoreApiV2.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CoreApiV2.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* <em>*NOTE: For a top-level AMD script, use require(['index'], function(){...})
* and put the application logic within the callback function.</em>
* </p>
* <p>
* A non-AMD browser application (discouraged) might do something like this:
* <pre>
* var xxxSvc = new CoreApiV2.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CoreApiV2.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v2.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AndroidAppVersion model constructor.
     * @property {module:model/AndroidAppVersion}
     */
    AndroidAppVersion,

    /**
     * The AndroidVersion model constructor.
     * @property {module:model/AndroidVersion}
     */
    AndroidVersion,

    /**
     * The BrokerAssetsPartChangeRequest model constructor.
     * @property {module:model/BrokerAssetsPartChangeRequest}
     */
    BrokerAssetsPartChangeRequest,

    /**
     * The BrokerInitData model constructor.
     * @property {module:model/BrokerInitData}
     */
    BrokerInitData,

    /**
     * The BrokerInvestmentProgram model constructor.
     * @property {module:model/BrokerInvestmentProgram}
     */
    BrokerInvestmentProgram,

    /**
     * The BrokerOefInitData model constructor.
     * @property {module:model/BrokerOefInitData}
     */
    BrokerOefInitData,

    /**
     * The BrokerOefInvestmentProgram model constructor.
     * @property {module:model/BrokerOefInvestmentProgram}
     */
    BrokerOefInvestmentProgram,

    /**
     * The ChangePasswordViewModel model constructor.
     * @property {module:model/ChangePasswordViewModel}
     */
    ChangePasswordViewModel,

    /**
     * The ChartProgramDetails model constructor.
     * @property {module:model/ChartProgramDetails}
     */
    ChartProgramDetails,

    /**
     * The ChartSimple model constructor.
     * @property {module:model/ChartSimple}
     */
    ChartSimple,

    /**
     * The ClosePeriodData model constructor.
     * @property {module:model/ClosePeriodData}
     */
    ClosePeriodData,

    /**
     * The DExchangeRequest model constructor.
     * @property {module:model/DExchangeRequest}
     */
    DExchangeRequest,

    /**
     * The DExchangeResponse model constructor.
     * @property {module:model/DExchangeResponse}
     */
    DExchangeResponse,

    /**
     * The ErrorMessage model constructor.
     * @property {module:model/ErrorMessage}
     */
    ErrorMessage,

    /**
     * The ErrorViewModel model constructor.
     * @property {module:model/ErrorViewModel}
     */
    ErrorViewModel,

    /**
     * The ForgotPasswordViewModel model constructor.
     * @property {module:model/ForgotPasswordViewModel}
     */
    ForgotPasswordViewModel,

    /**
     * The IOsAppVersion model constructor.
     * @property {module:model/IOsAppVersion}
     */
    IOsAppVersion,

    /**
     * The InvestmentProgramAccrual model constructor.
     * @property {module:model/InvestmentProgramAccrual}
     */
    InvestmentProgramAccrual,

    /**
     * The InvestmentProgramRequest model constructor.
     * @property {module:model/InvestmentProgramRequest}
     */
    InvestmentProgramRequest,

    /**
     * The InvestorAmount model constructor.
     * @property {module:model/InvestorAmount}
     */
    InvestorAmount,

    /**
     * The LoginViewModel model constructor.
     * @property {module:model/LoginViewModel}
     */
    LoginViewModel,

    /**
     * The ManagerAccountOnlineInfo model constructor.
     * @property {module:model/ManagerAccountOnlineInfo}
     */
    ManagerAccountOnlineInfo,

    /**
     * The ManagerHistoryIpfsHash model constructor.
     * @property {module:model/ManagerHistoryIpfsHash}
     */
    ManagerHistoryIpfsHash,

    /**
     * The ManagerIpfsHash model constructor.
     * @property {module:model/ManagerIpfsHash}
     */
    ManagerIpfsHash,

    /**
     * The ManagerOpenTrades model constructor.
     * @property {module:model/ManagerOpenTrades}
     */
    ManagerOpenTrades,

    /**
     * The ManagerRequest model constructor.
     * @property {module:model/ManagerRequest}
     */
    ManagerRequest,

    /**
     * The NewManager model constructor.
     * @property {module:model/NewManager}
     */
    NewManager,

    /**
     * The NewOpenTradesEvent model constructor.
     * @property {module:model/NewOpenTradesEvent}
     */
    NewOpenTradesEvent,

    /**
     * The NewTradeEvent model constructor.
     * @property {module:model/NewTradeEvent}
     */
    NewTradeEvent,

    /**
     * The OefAssetPart model constructor.
     * @property {module:model/OefAssetPart}
     */
    OefAssetPart,

    /**
     * The OefManagerRequest model constructor.
     * @property {module:model/OefManagerRequest}
     */
    OefManagerRequest,

    /**
     * The OpenOrderModel model constructor.
     * @property {module:model/OpenOrderModel}
     */
    OpenOrderModel,

    /**
     * The OrderModel model constructor.
     * @property {module:model/OrderModel}
     */
    OrderModel,

    /**
     * The PasswordModel model constructor.
     * @property {module:model/PasswordModel}
     */
    PasswordModel,

    /**
     * The Period model constructor.
     * @property {module:model/Period}
     */
    Period,

    /**
     * The PlatformInfo model constructor.
     * @property {module:model/PlatformInfo}
     */
    PlatformInfo,

    /**
     * The ProfileFullViewModel model constructor.
     * @property {module:model/ProfileFullViewModel}
     */
    ProfileFullViewModel,

    /**
     * The ProfilePublicViewModel model constructor.
     * @property {module:model/ProfilePublicViewModel}
     */
    ProfilePublicViewModel,

    /**
     * The ProgramChart model constructor.
     * @property {module:model/ProgramChart}
     */
    ProgramChart,

    /**
     * The ProgramDetailsFull model constructor.
     * @property {module:model/ProgramDetailsFull}
     */
    ProgramDetailsFull,

    /**
     * The ProgramDetailsList model constructor.
     * @property {module:model/ProgramDetailsList}
     */
    ProgramDetailsList,

    /**
     * The ProgramDetailsListStatistic model constructor.
     * @property {module:model/ProgramDetailsListStatistic}
     */
    ProgramDetailsListStatistic,

    /**
     * The ProgramStatistic model constructor.
     * @property {module:model/ProgramStatistic}
     */
    ProgramStatistic,

    /**
     * The ProgramsFilter model constructor.
     * @property {module:model/ProgramsFilter}
     */
    ProgramsFilter,

    /**
     * The ProgramsList model constructor.
     * @property {module:model/ProgramsList}
     */
    ProgramsList,

    /**
     * The RateViewModel model constructor.
     * @property {module:model/RateViewModel}
     */
    RateViewModel,

    /**
     * The RealOefAssetPart model constructor.
     * @property {module:model/RealOefAssetPart}
     */
    RealOefAssetPart,

    /**
     * The RecoveryCode model constructor.
     * @property {module:model/RecoveryCode}
     */
    RecoveryCode,

    /**
     * The RecoveryCodesViewModel model constructor.
     * @property {module:model/RecoveryCodesViewModel}
     */
    RecoveryCodesViewModel,

    /**
     * The RegisterInvestorViewModel model constructor.
     * @property {module:model/RegisterInvestorViewModel}
     */
    RegisterInvestorViewModel,

    /**
     * The RegisterManagerViewModel model constructor.
     * @property {module:model/RegisterManagerViewModel}
     */
    RegisterManagerViewModel,

    /**
     * The RequestRate model constructor.
     * @property {module:model/RequestRate}
     */
    RequestRate,

    /**
     * The ResetPasswordViewModel model constructor.
     * @property {module:model/ResetPasswordViewModel}
     */
    ResetPasswordViewModel,

    /**
     * The StartValues model constructor.
     * @property {module:model/StartValues}
     */
    StartValues,

    /**
     * The TradesViewModel model constructor.
     * @property {module:model/TradesViewModel}
     */
    TradesViewModel,

    /**
     * The TwoFactorAuthenticator model constructor.
     * @property {module:model/TwoFactorAuthenticator}
     */
    TwoFactorAuthenticator,

    /**
     * The TwoFactorAuthenticatorConfirm model constructor.
     * @property {module:model/TwoFactorAuthenticatorConfirm}
     */
    TwoFactorAuthenticatorConfirm,

    /**
     * The TwoFactorCodeModel model constructor.
     * @property {module:model/TwoFactorCodeModel}
     */
    TwoFactorCodeModel,

    /**
     * The TwoFactorStatus model constructor.
     * @property {module:model/TwoFactorStatus}
     */
    TwoFactorStatus,

    /**
     * The UpdateProfileViewModel model constructor.
     * @property {module:model/UpdateProfileViewModel}
     */
    UpdateProfileViewModel,

    /**
     * The UploadResult model constructor.
     * @property {module:model/UploadResult}
     */
    UploadResult,

    /**
     * The UsersRealAssets model constructor.
     * @property {module:model/UsersRealAssets}
     */
    UsersRealAssets,

    /**
    * The BrokerApi service constructor.
    * @property {module:api/BrokerApi}
    */
    BrokerApi,

    /**
    * The DexchangeApi service constructor.
    * @property {module:api/DexchangeApi}
    */
    DexchangeApi,

    /**
    * The FilesApi service constructor.
    * @property {module:api/FilesApi}
    */
    FilesApi,

    /**
    * The InvestorApi service constructor.
    * @property {module:api/InvestorApi}
    */
    InvestorApi,

    /**
    * The ManagerApi service constructor.
    * @property {module:api/ManagerApi}
    */
    ManagerApi,

    /**
    * The PlatformApi service constructor.
    * @property {module:api/PlatformApi}
    */
    PlatformApi,

    /**
    * The ProgramApi service constructor.
    * @property {module:api/ProgramApi}
    */
    ProgramApi,

    /**
    * The RateApi service constructor.
    * @property {module:api/RateApi}
    */
    RateApi
};
