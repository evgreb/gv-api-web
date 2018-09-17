/**
 * Core API v1.0
 * No description provided (generated by Swagger Codegen https://github.com/swagger-api/swagger-codegen)
 *
 * OpenAPI spec version: v1.0
 * 
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 * Do not edit the class manually.
 *
 */


import ApiClient from './ApiClient';
import AmountWithCurrency from './model/AmountWithCurrency';
import AndroidAppVersion from './model/AndroidAppVersion';
import AndroidVersion from './model/AndroidVersion';
import AssetsValue from './model/AssetsValue';
import Broker from './model/Broker';
import BrokerTradingServer from './model/BrokerTradingServer';
import BrokersInfo from './model/BrokersInfo';
import ChangePasswordViewModel from './model/ChangePasswordViewModel';
import ChartProgramDetails from './model/ChartProgramDetails';
import ChartSimple from './model/ChartSimple';
import CreateWithdrawalRequestModel from './model/CreateWithdrawalRequestModel';
import DExchangeRequest from './model/DExchangeRequest';
import DExchangeResponse from './model/DExchangeResponse';
import DashboardChartValue from './model/DashboardChartValue';
import DashboardPortfolioEvent from './model/DashboardPortfolioEvent';
import DashboardPortfolioEvents from './model/DashboardPortfolioEvents';
import DashboardProgramDetails from './model/DashboardProgramDetails';
import DashboardSummary from './model/DashboardSummary';
import ErrorMessage from './model/ErrorMessage';
import ErrorViewModel from './model/ErrorViewModel';
import Facet from './model/Facet';
import ForgotPasswordViewModel from './model/ForgotPasswordViewModel';
import IOsAppVersion from './model/IOsAppVersion';
import InvestInfo from './model/InvestInfo';
import InvestmentProgramUpdate from './model/InvestmentProgramUpdate';
import LoginViewModel from './model/LoginViewModel';
import ManagerNotificationSettingList from './model/ManagerNotificationSettingList';
import ManagerProfile from './model/ManagerProfile';
import NewProgramRequest from './model/NewProgramRequest';
import NotificationList from './model/NotificationList';
import NotificationSettingList from './model/NotificationSettingList';
import NotificationSettingViewModel from './model/NotificationSettingViewModel';
import NotificationViewModel from './model/NotificationViewModel';
import OrderModel from './model/OrderModel';
import PasswordModel from './model/PasswordModel';
import PersonalProgramDetailsFull from './model/PersonalProgramDetailsFull';
import PersonalProgramDetailsList from './model/PersonalProgramDetailsList';
import PlatformAsset from './model/PlatformAsset';
import PlatformAssets from './model/PlatformAssets';
import PlatformInfo from './model/PlatformInfo';
import ProfileFullViewModel from './model/ProfileFullViewModel';
import ProfileHeaderViewModel from './model/ProfileHeaderViewModel';
import ProfilePublic from './model/ProfilePublic';
import ProgramChart from './model/ProgramChart';
import ProgramDetails from './model/ProgramDetails';
import ProgramDetailsFull from './model/ProgramDetailsFull';
import ProgramDetailsListStatistic from './model/ProgramDetailsListStatistic';
import ProgramNotificationSettingList from './model/ProgramNotificationSettingList';
import ProgramRequest from './model/ProgramRequest';
import ProgramRequests from './model/ProgramRequests';
import ProgramSets from './model/ProgramSets';
import ProgramStatistic from './model/ProgramStatistic';
import ProgramsList from './model/ProgramsList';
import RateItem from './model/RateItem';
import RatesModel from './model/RatesModel';
import RatesModelRates from './model/RatesModelRates';
import RecoveryCode from './model/RecoveryCode';
import RecoveryCodesViewModel from './model/RecoveryCodesViewModel';
import RegisterInvestorViewModel from './model/RegisterInvestorViewModel';
import RegisterManagerViewModel from './model/RegisterManagerViewModel';
import ResendConfirmationViewModel from './model/ResendConfirmationViewModel';
import ResetPasswordViewModel from './model/ResetPasswordViewModel';
import StatisticProgramDetails from './model/StatisticProgramDetails';
import TradesViewModel from './model/TradesViewModel';
import TwoFactorAuthenticator from './model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from './model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeModel from './model/TwoFactorCodeModel';
import TwoFactorStatus from './model/TwoFactorStatus';
import UpdateProfileViewModel from './model/UpdateProfileViewModel';
import UploadResult from './model/UploadResult';
import ValueChartBar from './model/ValueChartBar';
import WalletInfo from './model/WalletInfo';
import WalletSummary from './model/WalletSummary';
import WalletTransaction from './model/WalletTransaction';
import WalletTransactionsViewModel from './model/WalletTransactionsViewModel';
import WithdrawInfo from './model/WithdrawInfo';
import AuthApi from './api/AuthApi';
import BrokersApi from './api/BrokersApi';
import DexchangeApi from './api/DexchangeApi';
import FileApi from './api/FileApi';
import InvestorApi from './api/InvestorApi';
import ManagersApi from './api/ManagersApi';
import NotificationsApi from './api/NotificationsApi';
import OefApi from './api/OefApi';
import PlatformApi from './api/PlatformApi';
import ProfileApi from './api/ProfileApi';
import ProgramsApi from './api/ProgramsApi';
import RateApi from './api/RateApi';
import WalletApi from './api/WalletApi';


/**
* ERROR_UNKNOWN.<br>
* The <code>index</code> module provides access to constructors for all the classes which comprise the public API.
* <p>
* An AMD (recommended!) or CommonJS application will generally do something equivalent to the following:
* <pre>
* var CoreApiV10 = require('index'); // See note below*.
* var xxxSvc = new CoreApiV10.XxxApi(); // Allocate the API class we're going to use.
* var yyyModel = new CoreApiV10.Yyy(); // Construct a model instance.
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
* var xxxSvc = new CoreApiV10.XxxApi(); // Allocate the API class we're going to use.
* var yyy = new CoreApiV10.Yyy(); // Construct a model instance.
* yyyModel.someProperty = 'someValue';
* ...
* var zzz = xxxSvc.doSomething(yyyModel); // Invoke the service.
* ...
* </pre>
* </p>
* @module index
* @version v1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @property {module:ApiClient}
     */
    ApiClient,

    /**
     * The AmountWithCurrency model constructor.
     * @property {module:model/AmountWithCurrency}
     */
    AmountWithCurrency,

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
     * The AssetsValue model constructor.
     * @property {module:model/AssetsValue}
     */
    AssetsValue,

    /**
     * The Broker model constructor.
     * @property {module:model/Broker}
     */
    Broker,

    /**
     * The BrokerTradingServer model constructor.
     * @property {module:model/BrokerTradingServer}
     */
    BrokerTradingServer,

    /**
     * The BrokersInfo model constructor.
     * @property {module:model/BrokersInfo}
     */
    BrokersInfo,

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
     * The CreateWithdrawalRequestModel model constructor.
     * @property {module:model/CreateWithdrawalRequestModel}
     */
    CreateWithdrawalRequestModel,

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
     * The DashboardChartValue model constructor.
     * @property {module:model/DashboardChartValue}
     */
    DashboardChartValue,

    /**
     * The DashboardPortfolioEvent model constructor.
     * @property {module:model/DashboardPortfolioEvent}
     */
    DashboardPortfolioEvent,

    /**
     * The DashboardPortfolioEvents model constructor.
     * @property {module:model/DashboardPortfolioEvents}
     */
    DashboardPortfolioEvents,

    /**
     * The DashboardProgramDetails model constructor.
     * @property {module:model/DashboardProgramDetails}
     */
    DashboardProgramDetails,

    /**
     * The DashboardSummary model constructor.
     * @property {module:model/DashboardSummary}
     */
    DashboardSummary,

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
     * The Facet model constructor.
     * @property {module:model/Facet}
     */
    Facet,

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
     * The InvestInfo model constructor.
     * @property {module:model/InvestInfo}
     */
    InvestInfo,

    /**
     * The InvestmentProgramUpdate model constructor.
     * @property {module:model/InvestmentProgramUpdate}
     */
    InvestmentProgramUpdate,

    /**
     * The LoginViewModel model constructor.
     * @property {module:model/LoginViewModel}
     */
    LoginViewModel,

    /**
     * The ManagerNotificationSettingList model constructor.
     * @property {module:model/ManagerNotificationSettingList}
     */
    ManagerNotificationSettingList,

    /**
     * The ManagerProfile model constructor.
     * @property {module:model/ManagerProfile}
     */
    ManagerProfile,

    /**
     * The NewProgramRequest model constructor.
     * @property {module:model/NewProgramRequest}
     */
    NewProgramRequest,

    /**
     * The NotificationList model constructor.
     * @property {module:model/NotificationList}
     */
    NotificationList,

    /**
     * The NotificationSettingList model constructor.
     * @property {module:model/NotificationSettingList}
     */
    NotificationSettingList,

    /**
     * The NotificationSettingViewModel model constructor.
     * @property {module:model/NotificationSettingViewModel}
     */
    NotificationSettingViewModel,

    /**
     * The NotificationViewModel model constructor.
     * @property {module:model/NotificationViewModel}
     */
    NotificationViewModel,

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
     * The PersonalProgramDetailsFull model constructor.
     * @property {module:model/PersonalProgramDetailsFull}
     */
    PersonalProgramDetailsFull,

    /**
     * The PersonalProgramDetailsList model constructor.
     * @property {module:model/PersonalProgramDetailsList}
     */
    PersonalProgramDetailsList,

    /**
     * The PlatformAsset model constructor.
     * @property {module:model/PlatformAsset}
     */
    PlatformAsset,

    /**
     * The PlatformAssets model constructor.
     * @property {module:model/PlatformAssets}
     */
    PlatformAssets,

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
     * The ProfileHeaderViewModel model constructor.
     * @property {module:model/ProfileHeaderViewModel}
     */
    ProfileHeaderViewModel,

    /**
     * The ProfilePublic model constructor.
     * @property {module:model/ProfilePublic}
     */
    ProfilePublic,

    /**
     * The ProgramChart model constructor.
     * @property {module:model/ProgramChart}
     */
    ProgramChart,

    /**
     * The ProgramDetails model constructor.
     * @property {module:model/ProgramDetails}
     */
    ProgramDetails,

    /**
     * The ProgramDetailsFull model constructor.
     * @property {module:model/ProgramDetailsFull}
     */
    ProgramDetailsFull,

    /**
     * The ProgramDetailsListStatistic model constructor.
     * @property {module:model/ProgramDetailsListStatistic}
     */
    ProgramDetailsListStatistic,

    /**
     * The ProgramNotificationSettingList model constructor.
     * @property {module:model/ProgramNotificationSettingList}
     */
    ProgramNotificationSettingList,

    /**
     * The ProgramRequest model constructor.
     * @property {module:model/ProgramRequest}
     */
    ProgramRequest,

    /**
     * The ProgramRequests model constructor.
     * @property {module:model/ProgramRequests}
     */
    ProgramRequests,

    /**
     * The ProgramSets model constructor.
     * @property {module:model/ProgramSets}
     */
    ProgramSets,

    /**
     * The ProgramStatistic model constructor.
     * @property {module:model/ProgramStatistic}
     */
    ProgramStatistic,

    /**
     * The ProgramsList model constructor.
     * @property {module:model/ProgramsList}
     */
    ProgramsList,

    /**
     * The RateItem model constructor.
     * @property {module:model/RateItem}
     */
    RateItem,

    /**
     * The RatesModel model constructor.
     * @property {module:model/RatesModel}
     */
    RatesModel,

    /**
     * The RatesModelRates model constructor.
     * @property {module:model/RatesModelRates}
     */
    RatesModelRates,

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
     * The ResendConfirmationViewModel model constructor.
     * @property {module:model/ResendConfirmationViewModel}
     */
    ResendConfirmationViewModel,

    /**
     * The ResetPasswordViewModel model constructor.
     * @property {module:model/ResetPasswordViewModel}
     */
    ResetPasswordViewModel,

    /**
     * The StatisticProgramDetails model constructor.
     * @property {module:model/StatisticProgramDetails}
     */
    StatisticProgramDetails,

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
     * The ValueChartBar model constructor.
     * @property {module:model/ValueChartBar}
     */
    ValueChartBar,

    /**
     * The WalletInfo model constructor.
     * @property {module:model/WalletInfo}
     */
    WalletInfo,

    /**
     * The WalletSummary model constructor.
     * @property {module:model/WalletSummary}
     */
    WalletSummary,

    /**
     * The WalletTransaction model constructor.
     * @property {module:model/WalletTransaction}
     */
    WalletTransaction,

    /**
     * The WalletTransactionsViewModel model constructor.
     * @property {module:model/WalletTransactionsViewModel}
     */
    WalletTransactionsViewModel,

    /**
     * The WithdrawInfo model constructor.
     * @property {module:model/WithdrawInfo}
     */
    WithdrawInfo,

    /**
    * The AuthApi service constructor.
    * @property {module:api/AuthApi}
    */
    AuthApi,

    /**
    * The BrokersApi service constructor.
    * @property {module:api/BrokersApi}
    */
    BrokersApi,

    /**
    * The DexchangeApi service constructor.
    * @property {module:api/DexchangeApi}
    */
    DexchangeApi,

    /**
    * The FileApi service constructor.
    * @property {module:api/FileApi}
    */
    FileApi,

    /**
    * The InvestorApi service constructor.
    * @property {module:api/InvestorApi}
    */
    InvestorApi,

    /**
    * The ManagersApi service constructor.
    * @property {module:api/ManagersApi}
    */
    ManagersApi,

    /**
    * The NotificationsApi service constructor.
    * @property {module:api/NotificationsApi}
    */
    NotificationsApi,

    /**
    * The OefApi service constructor.
    * @property {module:api/OefApi}
    */
    OefApi,

    /**
    * The PlatformApi service constructor.
    * @property {module:api/PlatformApi}
    */
    PlatformApi,

    /**
    * The ProfileApi service constructor.
    * @property {module:api/ProfileApi}
    */
    ProfileApi,

    /**
    * The ProgramsApi service constructor.
    * @property {module:api/ProgramsApi}
    */
    ProgramsApi,

    /**
    * The RateApi service constructor.
    * @property {module:api/RateApi}
    */
    RateApi,

    /**
    * The WalletApi service constructor.
    * @property {module:api/WalletApi}
    */
    WalletApi
};
