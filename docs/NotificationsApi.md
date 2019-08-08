# CoreApiV10.NotificationsApi

All URIs are relative to *https://localhost/api*

Method | HTTP request | Description
------------- | ------------- | -------------
[**v10NotificationsByIdReadPost**](NotificationsApi.md#v10NotificationsByIdReadPost) | **POST** /v1.0/notifications/{id}/read | Read notification
[**v10NotificationsGet**](NotificationsApi.md#v10NotificationsGet) | **GET** /v1.0/notifications | User notifications
[**v10NotificationsNewGet**](NotificationsApi.md#v10NotificationsNewGet) | **GET** /v1.0/notifications/new | Unread notifications count
[**v10NotificationsSettingsAddPost**](NotificationsApi.md#v10NotificationsSettingsAddPost) | **POST** /v1.0/notifications/settings/add | Add new setting
[**v10NotificationsSettingsByIdByEnablePost**](NotificationsApi.md#v10NotificationsSettingsByIdByEnablePost) | **POST** /v1.0/notifications/settings/{id}/{enable} | Enable/disable setting
[**v10NotificationsSettingsFundsByIdGet**](NotificationsApi.md#v10NotificationsSettingsFundsByIdGet) | **GET** /v1.0/notifications/settings/funds/{id} | User settings for fund
[**v10NotificationsSettingsGet**](NotificationsApi.md#v10NotificationsSettingsGet) | **GET** /v1.0/notifications/settings | User settings
[**v10NotificationsSettingsManagersByIdGet**](NotificationsApi.md#v10NotificationsSettingsManagersByIdGet) | **GET** /v1.0/notifications/settings/managers/{id} | User settings for manager
[**v10NotificationsSettingsProgramsByIdGet**](NotificationsApi.md#v10NotificationsSettingsProgramsByIdGet) | **GET** /v1.0/notifications/settings/programs/{id} | User settings for program
[**v10NotificationsSettingsRemoveByIdPost**](NotificationsApi.md#v10NotificationsSettingsRemoveByIdPost) | **POST** /v1.0/notifications/settings/remove/{id} | Remove setting


<a name="v10NotificationsByIdReadPost"></a>
# **v10NotificationsByIdReadPost**
> v10NotificationsByIdReadPost(id, authorization)

Read notification

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsByIdReadPost(id, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsGet"></a>
# **v10NotificationsGet**
> NotificationList v10NotificationsGet(authorization, opts)

User notifications

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'skip': 56, // Number | 
  'take': 56 // Number | 
};
apiInstance.v10NotificationsGet(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **skip** | **Number**|  | [optional] 
 **take** | **Number**|  | [optional] 

### Return type

[**NotificationList**](NotificationList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsNewGet"></a>
# **v10NotificationsNewGet**
> &#39;Number&#39; v10NotificationsNewGet(authorization)

Unread notifications count

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsNewGet(authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

**&#39;Number&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsAddPost"></a>
# **v10NotificationsSettingsAddPost**
> &#39;String&#39; v10NotificationsSettingsAddPost(authorization, opts)

Add new setting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

let opts = { 
  'assetId': "assetId_example", // String | 
  'managerId': "managerId_example", // String | 
  'type': "type_example", // String | 
  'conditionType': "conditionType_example", // String | 
  'conditionAmount': 1.2 // Number | 
};
apiInstance.v10NotificationsSettingsAddPost(authorization, opts).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 
 **assetId** | [**String**](.md)|  | [optional] 
 **managerId** | [**String**](.md)|  | [optional] 
 **type** | **String**|  | [optional] 
 **conditionType** | **String**|  | [optional] 
 **conditionAmount** | **Number**|  | [optional] 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsByIdByEnablePost"></a>
# **v10NotificationsSettingsByIdByEnablePost**
> &#39;String&#39; v10NotificationsSettingsByIdByEnablePost(id, enable, authorization)

Enable/disable setting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let enable = true; // Boolean | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsByIdByEnablePost(id, enable, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **enable** | **Boolean**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

**&#39;String&#39;**

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsFundsByIdGet"></a>
# **v10NotificationsSettingsFundsByIdGet**
> FundNotificationSettingList v10NotificationsSettingsFundsByIdGet(id, authorization)

User settings for fund

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsFundsByIdGet(id, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**FundNotificationSettingList**](FundNotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsGet"></a>
# **v10NotificationsSettingsGet**
> NotificationSettingList v10NotificationsSettingsGet(authorization)

User settings

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsGet(authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **authorization** | **String**| JWT access token | 

### Return type

[**NotificationSettingList**](NotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsManagersByIdGet"></a>
# **v10NotificationsSettingsManagersByIdGet**
> ManagerNotificationSettingList v10NotificationsSettingsManagersByIdGet(id, authorization)

User settings for manager

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsManagersByIdGet(id, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ManagerNotificationSettingList**](ManagerNotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsProgramsByIdGet"></a>
# **v10NotificationsSettingsProgramsByIdGet**
> ProgramNotificationSettingList v10NotificationsSettingsProgramsByIdGet(id, authorization)

User settings for program

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsProgramsByIdGet(id, authorization).then((data) => {
  console.log('API called successfully. Returned data: ' + data);
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | **String**|  | 
 **authorization** | **String**| JWT access token | 

### Return type

[**ProgramNotificationSettingList**](ProgramNotificationSettingList.md)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json

<a name="v10NotificationsSettingsRemoveByIdPost"></a>
# **v10NotificationsSettingsRemoveByIdPost**
> v10NotificationsSettingsRemoveByIdPost(id, authorization)

Remove setting

### Example
```javascript
import CoreApiV10 from 'core_api_v10';

let apiInstance = new CoreApiV10.NotificationsApi();

let id = "id_example"; // String | 

let authorization = "authorization_example"; // String | JWT access token

apiInstance.v10NotificationsSettingsRemoveByIdPost(id, authorization).then(() => {
  console.log('API called successfully.');
}, (error) => {
  console.error(error);
});

```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **id** | [**String**](.md)|  | 
 **authorization** | **String**| JWT access token | 

### Return type

null (empty response body)

### Authorization

No authorization required

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain, application/json, text/json
