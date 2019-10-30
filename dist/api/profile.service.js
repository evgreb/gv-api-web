import ApiClient from "../ApiClient";
import { ExternalKeysViewModel } from "../model/externalKeysViewModel";
import { ProfileFullViewModel } from "../model/profileFullViewModel";
import { ProfileHeaderViewModel } from "../model/profileHeaderViewModel";
import { PublicProfile } from "../model/publicProfile";
import { SocialLinksViewModel } from "../model/socialLinksViewModel";
export class ProfileService {
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }
    addExternalKey(authorization, opts) {
        return this.addExternalKeyWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    addExternalKeyWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling addExternalKey");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/keys/add', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    deleteExternalKey(authorization, opts) {
        return this.deleteExternalKeyWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    deleteExternalKeyWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling deleteExternalKey");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/keys/delete', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getExternalKey(authorization) {
        return this.getExternalKeyWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getExternalKeyWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getExternalKey");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ExternalKeysViewModel;
        return this.apiClient.callApi('/v1.0/profile/keys', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getManagerProfile(id) {
        return this.getManagerProfileWithHttpInfo(id)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getManagerProfileWithHttpInfo(id) {
        let postBody = null;
        if (id === undefined || id === null) {
            throw new Error("Missing the required parameter \"id\" when calling getManagerProfile");
        }
        let pathParams = {
            "id": id
        };
        let queryParams = {};
        let headerParams = {};
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = PublicProfile;
        return this.apiClient.callApi('/v1.0/profile/{id}/public', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProfileFull(authorization) {
        return this.getProfileFullWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProfileFullWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProfileFull");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProfileFullViewModel;
        return this.apiClient.callApi('/v1.0/profile', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getProfileHeader(authorization) {
        return this.getProfileHeaderWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getProfileHeaderWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getProfileHeader");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = ProfileHeaderViewModel;
        return this.apiClient.callApi('/v1.0/profile/header', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getSocialLinks(authorization) {
        return this.getSocialLinksWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getSocialLinksWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getSocialLinks");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = SocialLinksViewModel;
        return this.apiClient.callApi('/v1.0/profile/sociallinks', 'GET', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    getVerificationToken(authorization) {
        return this.getVerificationTokenWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    getVerificationTokenWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling getVerificationToken");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = 'string';
        return this.apiClient.callApi('/v1.0/profile/verification/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    removeAvatar(authorization) {
        return this.removeAvatarWithHttpInfo(authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    removeAvatarWithHttpInfo(authorization) {
        let postBody = null;
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling removeAvatar");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/avatar/remove', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateAvatar(fileId, authorization) {
        return this.updateAvatarWithHttpInfo(fileId, authorization)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateAvatarWithHttpInfo(fileId, authorization) {
        let postBody = null;
        if (fileId === undefined || fileId === null) {
            throw new Error("Missing the required parameter \"fileId\" when calling updateAvatar");
        }
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateAvatar");
        }
        let pathParams = {
            "fileId": fileId
        };
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = [];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/avatar/update/{fileId}', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateFcmToken(authorization, opts) {
        return this.updateFcmTokenWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateFcmTokenWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["token"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateFcmToken");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/push/token', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updatePersonalDetails(authorization, opts) {
        return this.updatePersonalDetailsWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updatePersonalDetailsWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updatePersonalDetails");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/personal/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateProfile(authorization, opts) {
        return this.updateProfileWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateProfileWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateProfile");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
    updateSocialLinks(authorization, opts) {
        return this.updateSocialLinksWithHttpInfo(authorization, opts)
            .then(function (response_and_data) {
            return response_and_data.data;
        });
    }
    updateSocialLinksWithHttpInfo(authorization, opts = {}) {
        let postBody = opts["model"];
        if (authorization === undefined || authorization === null) {
            throw new Error("Missing the required parameter \"authorization\" when calling updateSocialLinks");
        }
        let pathParams = {};
        let queryParams = {};
        let headerParams = {
            "Authorization": authorization
        };
        let formParams = {};
        let authNames = [];
        let contentTypes = ["application/json-patch+json", "application/json", "text/json", "application/_*+json"];
        let accepts = ["text/plain", "application/json", "text/json"];
        let returnType = null;
        return this.apiClient.callApi('/v1.0/profile/sociallinks/update', 'POST', pathParams, queryParams, headerParams, formParams, postBody, authNames, contentTypes, accepts, returnType);
    }
}