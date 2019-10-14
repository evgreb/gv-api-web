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
import AssetDetails from './model/AssetDetails';
import AssetsValue from './model/AssetsValue';
import AttachToSignalProvider from './model/AttachToSignalProvider';
import AttachToSignalProviderInfo from './model/AttachToSignalProviderInfo';
import BalanceChartElementOld from './model/BalanceChartElementOld';
import BrokerAccountTypeOld from './model/BrokerAccountTypeOld';
import BrokerDetailsOld from './model/BrokerDetailsOld';
import BrokerOld from './model/BrokerOld';
import BrokersInfoOld from './model/BrokersInfoOld';
import BrokersProgramInfoOld from './model/BrokersProgramInfoOld';
import CaptchaCheckResult from './model/CaptchaCheckResult';
import CaptchaDetails from './model/CaptchaDetails';
import ChangeBrokerProgramRequest from './model/ChangeBrokerProgramRequest';
import ChangePasswordViewModel from './model/ChangePasswordViewModel';
import ChartSimple from './model/ChartSimple';
import ConvertingDetails from './model/ConvertingDetails';
import CopyTradingAccountInfo from './model/CopyTradingAccountInfo';
import CopyTradingAccountsList from './model/CopyTradingAccountsList';
import CreateWithdrawalRequestModel from './model/CreateWithdrawalRequestModel';
import DashboardChartValue from './model/DashboardChartValue';
import DashboardProgramDetailsOld from './model/DashboardProgramDetailsOld';
import DashboardSummary from './model/DashboardSummary';
import DetachFromSignalProvider from './model/DetachFromSignalProvider';
import EnumsOld from './model/EnumsOld';
import ErrorMessage from './model/ErrorMessage';
import ErrorViewModel from './model/ErrorViewModel';
import EventFiltersOld from './model/EventFiltersOld';
import EventInvestorItemFiltersOld from './model/EventInvestorItemFiltersOld';
import EventItemFiltersOld from './model/EventItemFiltersOld';
import ExternalKeyAddViewModel from './model/ExternalKeyAddViewModel';
import ExternalKeyViewModel from './model/ExternalKeyViewModel';
import ExternalKeysViewModel from './model/ExternalKeysViewModel';
import ExternalTransactionDetails from './model/ExternalTransactionDetails';
import FcmTokenViewModel from './model/FcmTokenViewModel';
import FeeDetails from './model/FeeDetails';
import FilterModelOld from './model/FilterModelOld';
import ForgotPasswordViewModel from './model/ForgotPasswordViewModel';
import FundAssetInfo from './model/FundAssetInfo';
import FundAssetPart from './model/FundAssetPart';
import FundAssetPartWithIcon from './model/FundAssetPartWithIcon';
import FundAssetPercent from './model/FundAssetPercent';
import FundAssetsListInfo from './model/FundAssetsListInfo';
import FundAssetsState from './model/FundAssetsState';
import FundBalanceChartOld from './model/FundBalanceChartOld';
import FundDetailsFull from './model/FundDetailsFull';
import FundDetailsListStatistic from './model/FundDetailsListStatistic';
import FundDetailsOld from './model/FundDetailsOld';
import FundEquityChartElementOld from './model/FundEquityChartElementOld';
import FundFacet from './model/FundFacet';
import FundFiltersOld from './model/FundFiltersOld';
import FundInvestInfo from './model/FundInvestInfo';
import FundNotificationSettingList from './model/FundNotificationSettingList';
import FundProfitChartOld from './model/FundProfitChartOld';
import FundSets from './model/FundSets';
import FundStatistic from './model/FundStatistic';
import FundWithdrawInfo from './model/FundWithdrawInfo';
import FundsListOld from './model/FundsListOld';
import GeeTestDetails from './model/GeeTestDetails';
import GeeTestResult from './model/GeeTestResult';
import IOsAppVersion from './model/IOsAppVersion';
import IdModel from './model/IdModel';
import InternalTransferRequest from './model/InternalTransferRequest';
import InvestmentEventItemViewModel from './model/InvestmentEventItemViewModel';
import InvestmentEventViewModel from './model/InvestmentEventViewModel';
import InvestmentEventViewModels from './model/InvestmentEventViewModels';
import ItemsViewModelReferralFriend from './model/ItemsViewModelReferralFriend';
import LevelInfo from './model/LevelInfo';
import LevelsParamsInfo from './model/LevelsParamsInfo';
import LoginViewModel from './model/LoginViewModel';
import ManagerAssets from './model/ManagerAssets';
import ManagerFinancialStatistic from './model/ManagerFinancialStatistic';
import ManagerFundWithdrawInfo from './model/ManagerFundWithdrawInfo';
import ManagerNotificationSettingList from './model/ManagerNotificationSettingList';
import ManagerOverview from './model/ManagerOverview';
import ManagerProfileDetails from './model/ManagerProfileDetails';
import ManagerProgramCreateResult from './model/ManagerProgramCreateResult';
import ManagerProgramWithdrawInfo from './model/ManagerProgramWithdrawInfo';
import ManagerSimpleFund from './model/ManagerSimpleFund';
import ManagerSimpleProgram from './model/ManagerSimpleProgram';
import ManagersList from './model/ManagersList';
import MigrationRequestOld from './model/MigrationRequestOld';
import MultiWalletExternalTransaction from './model/MultiWalletExternalTransaction';
import MultiWalletExternalTransactionsViewModel from './model/MultiWalletExternalTransactionsViewModel';
import MultiWalletFiltersOld from './model/MultiWalletFiltersOld';
import MultiWalletTransaction from './model/MultiWalletTransaction';
import MultiWalletTransactionsViewModel from './model/MultiWalletTransactionsViewModel';
import NewFundRequest from './model/NewFundRequest';
import NewProgramRequest from './model/NewProgramRequest';
import NotificationList from './model/NotificationList';
import NotificationSettingList from './model/NotificationSettingList';
import NotificationSettingViewModel from './model/NotificationSettingViewModel';
import NotificationViewModel from './model/NotificationViewModel';
import OrderModel from './model/OrderModel';
import OrderModelSignalData from './model/OrderModelSignalData';
import OrderProgramData from './model/OrderProgramData';
import OrderSignalFee from './model/OrderSignalFee';
import OrderSignalModel from './model/OrderSignalModel';
import OrderSignalProgramInfo from './model/OrderSignalProgramInfo';
import OtherAssetsValue from './model/OtherAssetsValue';
import PasswordModel from './model/PasswordModel';
import PeriodDate from './model/PeriodDate';
import PersonalFundDetailsFull from './model/PersonalFundDetailsFull';
import PersonalProgramDetailsFullOld from './model/PersonalProgramDetailsFullOld';
import PersonalSignalDetailsFull from './model/PersonalSignalDetailsFull';
import PlatformAsset from './model/PlatformAsset';
import PlatformAssets from './model/PlatformAssets';
import PlatformCurrencyOld from './model/PlatformCurrencyOld';
import PlatformInfoOld from './model/PlatformInfoOld';
import PlatformStatisticOld from './model/PlatformStatisticOld';
import PowDetails from './model/PowDetails';
import PowResult from './model/PowResult';
import ProfileFullViewModel from './model/ProfileFullViewModel';
import ProfileHeaderViewModel from './model/ProfileHeaderViewModel';
import ProfilePublic from './model/ProfilePublic';
import ProgramBalanceChartElementOld from './model/ProgramBalanceChartElementOld';
import ProgramBalanceChartOld from './model/ProgramBalanceChartOld';
import ProgramDetailsFullOld from './model/ProgramDetailsFullOld';
import ProgramDetailsListStatistic from './model/ProgramDetailsListStatistic';
import ProgramDetailsOld from './model/ProgramDetailsOld';
import ProgramFacet from './model/ProgramFacet';
import ProgramFiltersOld from './model/ProgramFiltersOld';
import ProgramInvestInfoOld from './model/ProgramInvestInfoOld';
import ProgramLevelInfo from './model/ProgramLevelInfo';
import ProgramMinimumDepositOld from './model/ProgramMinimumDepositOld';
import ProgramNotificationSettingList from './model/ProgramNotificationSettingList';
import ProgramPeriodViewModel from './model/ProgramPeriodViewModel';
import ProgramPeriodsViewModel from './model/ProgramPeriodsViewModel';
import ProgramProfitChartOld from './model/ProgramProfitChartOld';
import ProgramPwdUpdate from './model/ProgramPwdUpdate';
import ProgramRequestOld from './model/ProgramRequestOld';
import ProgramRequestsOld from './model/ProgramRequestsOld';
import ProgramSets from './model/ProgramSets';
import ProgramStatistic from './model/ProgramStatistic';
import ProgramTag from './model/ProgramTag';
import ProgramTransactionDetails from './model/ProgramTransactionDetails';
import ProgramUpdate from './model/ProgramUpdate';
import ProgramWithdrawInfo from './model/ProgramWithdrawInfo';
import ProgramsInfoOld from './model/ProgramsInfoOld';
import ProgramsLevelsInfo from './model/ProgramsLevelsInfo';
import ProgramsListOld from './model/ProgramsListOld';
import PublicProfile from './model/PublicProfile';
import RateItem from './model/RateItem';
import RatesModel from './model/RatesModel';
import RatesModelRates from './model/RatesModelRates';
import ReallocationModel from './model/ReallocationModel';
import ReallocationsViewModel from './model/ReallocationsViewModel';
import RecoveryCode from './model/RecoveryCode';
import RecoveryCodesViewModel from './model/RecoveryCodesViewModel';
import ReferralFriend from './model/ReferralFriend';
import RegisterViewModel from './model/RegisterViewModel';
import ResendConfirmationViewModel from './model/ResendConfirmationViewModel';
import ResetPasswordViewModel from './model/ResetPasswordViewModel';
import RewardDetails from './model/RewardDetails';
import RewardsHistoryViewModel from './model/RewardsHistoryViewModel';
import SearchViewModel from './model/SearchViewModel';
import SignalDataMaster from './model/SignalDataMaster';
import SignalDetails from './model/SignalDetails';
import SignalFee from './model/SignalFee';
import SignalProviderSubscribers from './model/SignalProviderSubscribers';
import SignalSubscriber from './model/SignalSubscriber';
import SignalSubscription from './model/SignalSubscription';
import SignalTradingEvent from './model/SignalTradingEvent';
import SignalTradingEvents from './model/SignalTradingEvents';
import SignalsList from './model/SignalsList';
import SocialLinkViewModel from './model/SocialLinkViewModel';
import SocialLinksViewModel from './model/SocialLinksViewModel';
import TradesSignalViewModel from './model/TradesSignalViewModel';
import TradesViewModel from './model/TradesViewModel';
import TransactionDetails from './model/TransactionDetails';
import TwoFactorAuthenticator from './model/TwoFactorAuthenticator';
import TwoFactorAuthenticatorConfirm from './model/TwoFactorAuthenticatorConfirm';
import TwoFactorCodeModel from './model/TwoFactorCodeModel';
import TwoFactorStatus from './model/TwoFactorStatus';
import UpdatePersonalDetailViewModel from './model/UpdatePersonalDetailViewModel';
import UpdateProfileViewModel from './model/UpdateProfileViewModel';
import UpdateSocialLinkViewModel from './model/UpdateSocialLinkViewModel';
import UploadResult from './model/UploadResult';
import UserCommissionData from './model/UserCommissionData';
import ValueChartBar from './model/ValueChartBar';
import WalletBaseData from './model/WalletBaseData';
import WalletData from './model/WalletData';
import WalletDeposit from './model/WalletDeposit';
import WalletDepositSummary from './model/WalletDepositSummary';
import WalletMultiAvailable from './model/WalletMultiAvailable';
import WalletMultiSummary from './model/WalletMultiSummary';
import WalletWithdrawalInfo from './model/WalletWithdrawalInfo';
import WalletsGrandTotal from './model/WalletsGrandTotal';
import WithdrawalSummary from './model/WithdrawalSummary';
import AuthApi from './api/AuthApi';
import BrokersApi from './api/BrokersApi';
import FileApi from './api/FileApi';
import FundsApi from './api/FundsApi';
import InvestorApi from './api/InvestorApi';
import ManagerApi from './api/ManagerApi';
import NotificationsApi from './api/NotificationsApi';
import PartnershipApi from './api/PartnershipApi';
import PlatformApi from './api/PlatformApi';
import ProfileApi from './api/ProfileApi';
import ProgramsApi from './api/ProgramsApi';
import RateApi from './api/RateApi';
import SearchApi from './api/SearchApi';
import SignalApi from './api/SignalApi';
import WalletApi from './api/WalletApi';


/**
*
* @interface index
* @version v1.0
*/
export {
    /**
     * The ApiClient constructor.
     * @name index#ApiClient
     * @type {ApiClient}
     */
    ApiClient,

    /**
     * @name index#AmountWithCurrency
     * @type {AmountWithCurrency}
     */
    AmountWithCurrency,

    /**
     * @name index#AndroidAppVersion
     * @type {AndroidAppVersion}
     */
    AndroidAppVersion,

    /**
     * @name index#AndroidVersion
     * @type {AndroidVersion}
     */
    AndroidVersion,

    /**
     * @name index#AssetDetails
     * @type {AssetDetails}
     */
    AssetDetails,

    /**
     * @name index#AssetsValue
     * @type {AssetsValue}
     */
    AssetsValue,

    /**
     * @name index#AttachToSignalProvider
     * @type {AttachToSignalProvider}
     */
    AttachToSignalProvider,

    /**
     * @name index#AttachToSignalProviderInfo
     * @type {AttachToSignalProviderInfo}
     */
    AttachToSignalProviderInfo,

    /**
     * @name index#BalanceChartElementOld
     * @type {BalanceChartElementOld}
     */
    BalanceChartElementOld,

    /**
     * @name index#BrokerAccountTypeOld
     * @type {BrokerAccountTypeOld}
     */
    BrokerAccountTypeOld,

    /**
     * @name index#BrokerDetailsOld
     * @type {BrokerDetailsOld}
     */
    BrokerDetailsOld,

    /**
     * @name index#BrokerOld
     * @type {BrokerOld}
     */
    BrokerOld,

    /**
     * @name index#BrokersInfoOld
     * @type {BrokersInfoOld}
     */
    BrokersInfoOld,

    /**
     * @name index#BrokersProgramInfoOld
     * @type {BrokersProgramInfoOld}
     */
    BrokersProgramInfoOld,

    /**
     * @name index#CaptchaCheckResult
     * @type {CaptchaCheckResult}
     */
    CaptchaCheckResult,

    /**
     * @name index#CaptchaDetails
     * @type {CaptchaDetails}
     */
    CaptchaDetails,

    /**
     * @name index#ChangeBrokerProgramRequest
     * @type {ChangeBrokerProgramRequest}
     */
    ChangeBrokerProgramRequest,

    /**
     * @name index#ChangePasswordViewModel
     * @type {ChangePasswordViewModel}
     */
    ChangePasswordViewModel,

    /**
     * @name index#ChartSimple
     * @type {ChartSimple}
     */
    ChartSimple,

    /**
     * @name index#ConvertingDetails
     * @type {ConvertingDetails}
     */
    ConvertingDetails,

    /**
     * @name index#CopyTradingAccountInfo
     * @type {CopyTradingAccountInfo}
     */
    CopyTradingAccountInfo,

    /**
     * @name index#CopyTradingAccountsList
     * @type {CopyTradingAccountsList}
     */
    CopyTradingAccountsList,

    /**
     * @name index#CreateWithdrawalRequestModel
     * @type {CreateWithdrawalRequestModel}
     */
    CreateWithdrawalRequestModel,

    /**
     * @name index#DashboardChartValue
     * @type {DashboardChartValue}
     */
    DashboardChartValue,

    /**
     * @name index#DashboardProgramDetailsOld
     * @type {DashboardProgramDetailsOld}
     */
    DashboardProgramDetailsOld,

    /**
     * @name index#DashboardSummary
     * @type {DashboardSummary}
     */
    DashboardSummary,

    /**
     * @name index#DetachFromSignalProvider
     * @type {DetachFromSignalProvider}
     */
    DetachFromSignalProvider,

    /**
     * @name index#EnumsOld
     * @type {EnumsOld}
     */
    EnumsOld,

    /**
     * @name index#ErrorMessage
     * @type {ErrorMessage}
     */
    ErrorMessage,

    /**
     * @name index#ErrorViewModel
     * @type {ErrorViewModel}
     */
    ErrorViewModel,

    /**
     * @name index#EventFiltersOld
     * @type {EventFiltersOld}
     */
    EventFiltersOld,

    /**
     * @name index#EventInvestorItemFiltersOld
     * @type {EventInvestorItemFiltersOld}
     */
    EventInvestorItemFiltersOld,

    /**
     * @name index#EventItemFiltersOld
     * @type {EventItemFiltersOld}
     */
    EventItemFiltersOld,

    /**
     * @name index#ExternalKeyAddViewModel
     * @type {ExternalKeyAddViewModel}
     */
    ExternalKeyAddViewModel,

    /**
     * @name index#ExternalKeyViewModel
     * @type {ExternalKeyViewModel}
     */
    ExternalKeyViewModel,

    /**
     * @name index#ExternalKeysViewModel
     * @type {ExternalKeysViewModel}
     */
    ExternalKeysViewModel,

    /**
     * @name index#ExternalTransactionDetails
     * @type {ExternalTransactionDetails}
     */
    ExternalTransactionDetails,

    /**
     * @name index#FcmTokenViewModel
     * @type {FcmTokenViewModel}
     */
    FcmTokenViewModel,

    /**
     * @name index#FeeDetails
     * @type {FeeDetails}
     */
    FeeDetails,

    /**
     * @name index#FilterModelOld
     * @type {FilterModelOld}
     */
    FilterModelOld,

    /**
     * @name index#ForgotPasswordViewModel
     * @type {ForgotPasswordViewModel}
     */
    ForgotPasswordViewModel,

    /**
     * @name index#FundAssetInfo
     * @type {FundAssetInfo}
     */
    FundAssetInfo,

    /**
     * @name index#FundAssetPart
     * @type {FundAssetPart}
     */
    FundAssetPart,

    /**
     * @name index#FundAssetPartWithIcon
     * @type {FundAssetPartWithIcon}
     */
    FundAssetPartWithIcon,

    /**
     * @name index#FundAssetPercent
     * @type {FundAssetPercent}
     */
    FundAssetPercent,

    /**
     * @name index#FundAssetsListInfo
     * @type {FundAssetsListInfo}
     */
    FundAssetsListInfo,

    /**
     * @name index#FundAssetsState
     * @type {FundAssetsState}
     */
    FundAssetsState,

    /**
     * @name index#FundBalanceChartOld
     * @type {FundBalanceChartOld}
     */
    FundBalanceChartOld,

    /**
     * @name index#FundDetailsFull
     * @type {FundDetailsFull}
     */
    FundDetailsFull,

    /**
     * @name index#FundDetailsListStatistic
     * @type {FundDetailsListStatistic}
     */
    FundDetailsListStatistic,

    /**
     * @name index#FundDetailsOld
     * @type {FundDetailsOld}
     */
    FundDetailsOld,

    /**
     * @name index#FundEquityChartElementOld
     * @type {FundEquityChartElementOld}
     */
    FundEquityChartElementOld,

    /**
     * @name index#FundFacet
     * @type {FundFacet}
     */
    FundFacet,

    /**
     * @name index#FundFiltersOld
     * @type {FundFiltersOld}
     */
    FundFiltersOld,

    /**
     * @name index#FundInvestInfo
     * @type {FundInvestInfo}
     */
    FundInvestInfo,

    /**
     * @name index#FundNotificationSettingList
     * @type {FundNotificationSettingList}
     */
    FundNotificationSettingList,

    /**
     * @name index#FundProfitChartOld
     * @type {FundProfitChartOld}
     */
    FundProfitChartOld,

    /**
     * @name index#FundSets
     * @type {FundSets}
     */
    FundSets,

    /**
     * @name index#FundStatistic
     * @type {FundStatistic}
     */
    FundStatistic,

    /**
     * @name index#FundWithdrawInfo
     * @type {FundWithdrawInfo}
     */
    FundWithdrawInfo,

    /**
     * @name index#FundsListOld
     * @type {FundsListOld}
     */
    FundsListOld,

    /**
     * @name index#GeeTestDetails
     * @type {GeeTestDetails}
     */
    GeeTestDetails,

    /**
     * @name index#GeeTestResult
     * @type {GeeTestResult}
     */
    GeeTestResult,

    /**
     * @name index#IOsAppVersion
     * @type {IOsAppVersion}
     */
    IOsAppVersion,

    /**
     * @name index#IdModel
     * @type {IdModel}
     */
    IdModel,

    /**
     * @name index#InternalTransferRequest
     * @type {InternalTransferRequest}
     */
    InternalTransferRequest,

    /**
     * @name index#InvestmentEventItemViewModel
     * @type {InvestmentEventItemViewModel}
     */
    InvestmentEventItemViewModel,

    /**
     * @name index#InvestmentEventViewModel
     * @type {InvestmentEventViewModel}
     */
    InvestmentEventViewModel,

    /**
     * @name index#InvestmentEventViewModels
     * @type {InvestmentEventViewModels}
     */
    InvestmentEventViewModels,

    /**
     * @name index#ItemsViewModelReferralFriend
     * @type {ItemsViewModelReferralFriend}
     */
    ItemsViewModelReferralFriend,

    /**
     * @name index#LevelInfo
     * @type {LevelInfo}
     */
    LevelInfo,

    /**
     * @name index#LevelsParamsInfo
     * @type {LevelsParamsInfo}
     */
    LevelsParamsInfo,

    /**
     * @name index#LoginViewModel
     * @type {LoginViewModel}
     */
    LoginViewModel,

    /**
     * @name index#ManagerAssets
     * @type {ManagerAssets}
     */
    ManagerAssets,

    /**
     * @name index#ManagerFinancialStatistic
     * @type {ManagerFinancialStatistic}
     */
    ManagerFinancialStatistic,

    /**
     * @name index#ManagerFundWithdrawInfo
     * @type {ManagerFundWithdrawInfo}
     */
    ManagerFundWithdrawInfo,

    /**
     * @name index#ManagerNotificationSettingList
     * @type {ManagerNotificationSettingList}
     */
    ManagerNotificationSettingList,

    /**
     * @name index#ManagerOverview
     * @type {ManagerOverview}
     */
    ManagerOverview,

    /**
     * @name index#ManagerProfileDetails
     * @type {ManagerProfileDetails}
     */
    ManagerProfileDetails,

    /**
     * @name index#ManagerProgramCreateResult
     * @type {ManagerProgramCreateResult}
     */
    ManagerProgramCreateResult,

    /**
     * @name index#ManagerProgramWithdrawInfo
     * @type {ManagerProgramWithdrawInfo}
     */
    ManagerProgramWithdrawInfo,

    /**
     * @name index#ManagerSimpleFund
     * @type {ManagerSimpleFund}
     */
    ManagerSimpleFund,

    /**
     * @name index#ManagerSimpleProgram
     * @type {ManagerSimpleProgram}
     */
    ManagerSimpleProgram,

    /**
     * @name index#ManagersList
     * @type {ManagersList}
     */
    ManagersList,

    /**
     * @name index#MigrationRequestOld
     * @type {MigrationRequestOld}
     */
    MigrationRequestOld,

    /**
     * @name index#MultiWalletExternalTransaction
     * @type {MultiWalletExternalTransaction}
     */
    MultiWalletExternalTransaction,

    /**
     * @name index#MultiWalletExternalTransactionsViewModel
     * @type {MultiWalletExternalTransactionsViewModel}
     */
    MultiWalletExternalTransactionsViewModel,

    /**
     * @name index#MultiWalletFiltersOld
     * @type {MultiWalletFiltersOld}
     */
    MultiWalletFiltersOld,

    /**
     * @name index#MultiWalletTransaction
     * @type {MultiWalletTransaction}
     */
    MultiWalletTransaction,

    /**
     * @name index#MultiWalletTransactionsViewModel
     * @type {MultiWalletTransactionsViewModel}
     */
    MultiWalletTransactionsViewModel,

    /**
     * @name index#NewFundRequest
     * @type {NewFundRequest}
     */
    NewFundRequest,

    /**
     * @name index#NewProgramRequest
     * @type {NewProgramRequest}
     */
    NewProgramRequest,

    /**
     * @name index#NotificationList
     * @type {NotificationList}
     */
    NotificationList,

    /**
     * @name index#NotificationSettingList
     * @type {NotificationSettingList}
     */
    NotificationSettingList,

    /**
     * @name index#NotificationSettingViewModel
     * @type {NotificationSettingViewModel}
     */
    NotificationSettingViewModel,

    /**
     * @name index#NotificationViewModel
     * @type {NotificationViewModel}
     */
    NotificationViewModel,

    /**
     * @name index#OrderModel
     * @type {OrderModel}
     */
    OrderModel,

    /**
     * @name index#OrderModelSignalData
     * @type {OrderModelSignalData}
     */
    OrderModelSignalData,

    /**
     * @name index#OrderProgramData
     * @type {OrderProgramData}
     */
    OrderProgramData,

    /**
     * @name index#OrderSignalFee
     * @type {OrderSignalFee}
     */
    OrderSignalFee,

    /**
     * @name index#OrderSignalModel
     * @type {OrderSignalModel}
     */
    OrderSignalModel,

    /**
     * @name index#OrderSignalProgramInfo
     * @type {OrderSignalProgramInfo}
     */
    OrderSignalProgramInfo,

    /**
     * @name index#OtherAssetsValue
     * @type {OtherAssetsValue}
     */
    OtherAssetsValue,

    /**
     * @name index#PasswordModel
     * @type {PasswordModel}
     */
    PasswordModel,

    /**
     * @name index#PeriodDate
     * @type {PeriodDate}
     */
    PeriodDate,

    /**
     * @name index#PersonalFundDetailsFull
     * @type {PersonalFundDetailsFull}
     */
    PersonalFundDetailsFull,

    /**
     * @name index#PersonalProgramDetailsFullOld
     * @type {PersonalProgramDetailsFullOld}
     */
    PersonalProgramDetailsFullOld,

    /**
     * @name index#PersonalSignalDetailsFull
     * @type {PersonalSignalDetailsFull}
     */
    PersonalSignalDetailsFull,

    /**
     * @name index#PlatformAsset
     * @type {PlatformAsset}
     */
    PlatformAsset,

    /**
     * @name index#PlatformAssets
     * @type {PlatformAssets}
     */
    PlatformAssets,

    /**
     * @name index#PlatformCurrencyOld
     * @type {PlatformCurrencyOld}
     */
    PlatformCurrencyOld,

    /**
     * @name index#PlatformInfoOld
     * @type {PlatformInfoOld}
     */
    PlatformInfoOld,

    /**
     * @name index#PlatformStatisticOld
     * @type {PlatformStatisticOld}
     */
    PlatformStatisticOld,

    /**
     * @name index#PowDetails
     * @type {PowDetails}
     */
    PowDetails,

    /**
     * @name index#PowResult
     * @type {PowResult}
     */
    PowResult,

    /**
     * @name index#ProfileFullViewModel
     * @type {ProfileFullViewModel}
     */
    ProfileFullViewModel,

    /**
     * @name index#ProfileHeaderViewModel
     * @type {ProfileHeaderViewModel}
     */
    ProfileHeaderViewModel,

    /**
     * @name index#ProfilePublic
     * @type {ProfilePublic}
     */
    ProfilePublic,

    /**
     * @name index#ProgramBalanceChartElementOld
     * @type {ProgramBalanceChartElementOld}
     */
    ProgramBalanceChartElementOld,

    /**
     * @name index#ProgramBalanceChartOld
     * @type {ProgramBalanceChartOld}
     */
    ProgramBalanceChartOld,

    /**
     * @name index#ProgramDetailsFullOld
     * @type {ProgramDetailsFullOld}
     */
    ProgramDetailsFullOld,

    /**
     * @name index#ProgramDetailsListStatistic
     * @type {ProgramDetailsListStatistic}
     */
    ProgramDetailsListStatistic,

    /**
     * @name index#ProgramDetailsOld
     * @type {ProgramDetailsOld}
     */
    ProgramDetailsOld,

    /**
     * @name index#ProgramFacet
     * @type {ProgramFacet}
     */
    ProgramFacet,

    /**
     * @name index#ProgramFiltersOld
     * @type {ProgramFiltersOld}
     */
    ProgramFiltersOld,

    /**
     * @name index#ProgramInvestInfoOld
     * @type {ProgramInvestInfoOld}
     */
    ProgramInvestInfoOld,

    /**
     * @name index#ProgramLevelInfo
     * @type {ProgramLevelInfo}
     */
    ProgramLevelInfo,

    /**
     * @name index#ProgramMinimumDepositOld
     * @type {ProgramMinimumDepositOld}
     */
    ProgramMinimumDepositOld,

    /**
     * @name index#ProgramNotificationSettingList
     * @type {ProgramNotificationSettingList}
     */
    ProgramNotificationSettingList,

    /**
     * @name index#ProgramPeriodViewModel
     * @type {ProgramPeriodViewModel}
     */
    ProgramPeriodViewModel,

    /**
     * @name index#ProgramPeriodsViewModel
     * @type {ProgramPeriodsViewModel}
     */
    ProgramPeriodsViewModel,

    /**
     * @name index#ProgramProfitChartOld
     * @type {ProgramProfitChartOld}
     */
    ProgramProfitChartOld,

    /**
     * @name index#ProgramPwdUpdate
     * @type {ProgramPwdUpdate}
     */
    ProgramPwdUpdate,

    /**
     * @name index#ProgramRequestOld
     * @type {ProgramRequestOld}
     */
    ProgramRequestOld,

    /**
     * @name index#ProgramRequestsOld
     * @type {ProgramRequestsOld}
     */
    ProgramRequestsOld,

    /**
     * @name index#ProgramSets
     * @type {ProgramSets}
     */
    ProgramSets,

    /**
     * @name index#ProgramStatistic
     * @type {ProgramStatistic}
     */
    ProgramStatistic,

    /**
     * @name index#ProgramTag
     * @type {ProgramTag}
     */
    ProgramTag,

    /**
     * @name index#ProgramTransactionDetails
     * @type {ProgramTransactionDetails}
     */
    ProgramTransactionDetails,

    /**
     * @name index#ProgramUpdate
     * @type {ProgramUpdate}
     */
    ProgramUpdate,

    /**
     * @name index#ProgramWithdrawInfo
     * @type {ProgramWithdrawInfo}
     */
    ProgramWithdrawInfo,

    /**
     * @name index#ProgramsInfoOld
     * @type {ProgramsInfoOld}
     */
    ProgramsInfoOld,

    /**
     * @name index#ProgramsLevelsInfo
     * @type {ProgramsLevelsInfo}
     */
    ProgramsLevelsInfo,

    /**
     * @name index#ProgramsListOld
     * @type {ProgramsListOld}
     */
    ProgramsListOld,

    /**
     * @name index#PublicProfile
     * @type {PublicProfile}
     */
    PublicProfile,

    /**
     * @name index#RateItem
     * @type {RateItem}
     */
    RateItem,

    /**
     * @name index#RatesModel
     * @type {RatesModel}
     */
    RatesModel,

    /**
     * @name index#RatesModelRates
     * @type {RatesModelRates}
     */
    RatesModelRates,

    /**
     * @name index#ReallocationModel
     * @type {ReallocationModel}
     */
    ReallocationModel,

    /**
     * @name index#ReallocationsViewModel
     * @type {ReallocationsViewModel}
     */
    ReallocationsViewModel,

    /**
     * @name index#RecoveryCode
     * @type {RecoveryCode}
     */
    RecoveryCode,

    /**
     * @name index#RecoveryCodesViewModel
     * @type {RecoveryCodesViewModel}
     */
    RecoveryCodesViewModel,

    /**
     * @name index#ReferralFriend
     * @type {ReferralFriend}
     */
    ReferralFriend,

    /**
     * @name index#RegisterViewModel
     * @type {RegisterViewModel}
     */
    RegisterViewModel,

    /**
     * @name index#ResendConfirmationViewModel
     * @type {ResendConfirmationViewModel}
     */
    ResendConfirmationViewModel,

    /**
     * @name index#ResetPasswordViewModel
     * @type {ResetPasswordViewModel}
     */
    ResetPasswordViewModel,

    /**
     * @name index#RewardDetails
     * @type {RewardDetails}
     */
    RewardDetails,

    /**
     * @name index#RewardsHistoryViewModel
     * @type {RewardsHistoryViewModel}
     */
    RewardsHistoryViewModel,

    /**
     * @name index#SearchViewModel
     * @type {SearchViewModel}
     */
    SearchViewModel,

    /**
     * @name index#SignalDataMaster
     * @type {SignalDataMaster}
     */
    SignalDataMaster,

    /**
     * @name index#SignalDetails
     * @type {SignalDetails}
     */
    SignalDetails,

    /**
     * @name index#SignalFee
     * @type {SignalFee}
     */
    SignalFee,

    /**
     * @name index#SignalProviderSubscribers
     * @type {SignalProviderSubscribers}
     */
    SignalProviderSubscribers,

    /**
     * @name index#SignalSubscriber
     * @type {SignalSubscriber}
     */
    SignalSubscriber,

    /**
     * @name index#SignalSubscription
     * @type {SignalSubscription}
     */
    SignalSubscription,

    /**
     * @name index#SignalTradingEvent
     * @type {SignalTradingEvent}
     */
    SignalTradingEvent,

    /**
     * @name index#SignalTradingEvents
     * @type {SignalTradingEvents}
     */
    SignalTradingEvents,

    /**
     * @name index#SignalsList
     * @type {SignalsList}
     */
    SignalsList,

    /**
     * @name index#SocialLinkViewModel
     * @type {SocialLinkViewModel}
     */
    SocialLinkViewModel,

    /**
     * @name index#SocialLinksViewModel
     * @type {SocialLinksViewModel}
     */
    SocialLinksViewModel,

    /**
     * @name index#TradesSignalViewModel
     * @type {TradesSignalViewModel}
     */
    TradesSignalViewModel,

    /**
     * @name index#TradesViewModel
     * @type {TradesViewModel}
     */
    TradesViewModel,

    /**
     * @name index#TransactionDetails
     * @type {TransactionDetails}
     */
    TransactionDetails,

    /**
     * @name index#TwoFactorAuthenticator
     * @type {TwoFactorAuthenticator}
     */
    TwoFactorAuthenticator,

    /**
     * @name index#TwoFactorAuthenticatorConfirm
     * @type {TwoFactorAuthenticatorConfirm}
     */
    TwoFactorAuthenticatorConfirm,

    /**
     * @name index#TwoFactorCodeModel
     * @type {TwoFactorCodeModel}
     */
    TwoFactorCodeModel,

    /**
     * @name index#TwoFactorStatus
     * @type {TwoFactorStatus}
     */
    TwoFactorStatus,

    /**
     * @name index#UpdatePersonalDetailViewModel
     * @type {UpdatePersonalDetailViewModel}
     */
    UpdatePersonalDetailViewModel,

    /**
     * @name index#UpdateProfileViewModel
     * @type {UpdateProfileViewModel}
     */
    UpdateProfileViewModel,

    /**
     * @name index#UpdateSocialLinkViewModel
     * @type {UpdateSocialLinkViewModel}
     */
    UpdateSocialLinkViewModel,

    /**
     * @name index#UploadResult
     * @type {UploadResult}
     */
    UploadResult,

    /**
     * @name index#UserCommissionData
     * @type {UserCommissionData}
     */
    UserCommissionData,

    /**
     * @name index#ValueChartBar
     * @type {ValueChartBar}
     */
    ValueChartBar,

    /**
     * @name index#WalletBaseData
     * @type {WalletBaseData}
     */
    WalletBaseData,

    /**
     * @name index#WalletData
     * @type {WalletData}
     */
    WalletData,

    /**
     * @name index#WalletDeposit
     * @type {WalletDeposit}
     */
    WalletDeposit,

    /**
     * @name index#WalletDepositSummary
     * @type {WalletDepositSummary}
     */
    WalletDepositSummary,

    /**
     * @name index#WalletMultiAvailable
     * @type {WalletMultiAvailable}
     */
    WalletMultiAvailable,

    /**
     * @name index#WalletMultiSummary
     * @type {WalletMultiSummary}
     */
    WalletMultiSummary,

    /**
     * @name index#WalletWithdrawalInfo
     * @type {WalletWithdrawalInfo}
     */
    WalletWithdrawalInfo,

    /**
     * @name index#WalletsGrandTotal
     * @type {WalletsGrandTotal}
     */
    WalletsGrandTotal,

    /**
     * @name index#WithdrawalSummary
     * @type {WithdrawalSummary}
     */
    WithdrawalSummary,

    /**
    * @name index#AuthApi
    * @type {AuthApi}
    */
    AuthApi,

    /**
    * @name index#BrokersApi
    * @type {BrokersApi}
    */
    BrokersApi,

    /**
    * @name index#FileApi
    * @type {FileApi}
    */
    FileApi,

    /**
    * @name index#FundsApi
    * @type {FundsApi}
    */
    FundsApi,

    /**
    * @name index#InvestorApi
    * @type {InvestorApi}
    */
    InvestorApi,

    /**
    * @name index#ManagerApi
    * @type {ManagerApi}
    */
    ManagerApi,

    /**
    * @name index#NotificationsApi
    * @type {NotificationsApi}
    */
    NotificationsApi,

    /**
    * @name index#PartnershipApi
    * @type {PartnershipApi}
    */
    PartnershipApi,

    /**
    * @name index#PlatformApi
    * @type {PlatformApi}
    */
    PlatformApi,

    /**
    * @name index#ProfileApi
    * @type {ProfileApi}
    */
    ProfileApi,

    /**
    * @name index#ProgramsApi
    * @type {ProgramsApi}
    */
    ProgramsApi,

    /**
    * @name index#RateApi
    * @type {RateApi}
    */
    RateApi,

    /**
    * @name index#SearchApi
    * @type {SearchApi}
    */
    SearchApi,

    /**
    * @name index#SignalApi
    * @type {SignalApi}
    */
    SignalApi,

    /**
    * @name index#WalletApi
    * @type {WalletApi}
    */
    WalletApi
};
