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


import ApiClient from '../ApiClient';
import UserVerificationStatus from './UserVerificationStatus';





/**
 *
 * @interface ProfileFullViewModel
 */

/**
 *
 * @name ProfileFullViewModel#id
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#email
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#firstName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#middleName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#lastName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#country
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#city
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#address
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#phone
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#phoneNumberConfirmed
 * @type {Boolean}
 */
/**
 *
 * @name ProfileFullViewModel#birthday
 * @type {Date}
 */
/**
 *
 * @name ProfileFullViewModel#gender
 * @type {Boolean}
 */
/**
 *
 * @name ProfileFullViewModel#avatar
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#about
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#userName
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#index
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#citizenship
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#refUrl
 * @type {String}
 */
/**
 *
 * @name ProfileFullViewModel#verificationStatus
 * @type {UserVerificationStatus}
 */





export default class ProfileFullViewModel {

    constructor() {
        

        
        

        

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new ProfileFullViewModel();

            
            
            

            if (data.hasOwnProperty('id')) {
                obj['id'] = ApiClient.convertToType(data['id'], 'String');
            }
            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('firstName')) {
                obj['firstName'] = ApiClient.convertToType(data['firstName'], 'String');
            }
            if (data.hasOwnProperty('middleName')) {
                obj['middleName'] = ApiClient.convertToType(data['middleName'], 'String');
            }
            if (data.hasOwnProperty('lastName')) {
                obj['lastName'] = ApiClient.convertToType(data['lastName'], 'String');
            }
            if (data.hasOwnProperty('country')) {
                obj['country'] = ApiClient.convertToType(data['country'], 'String');
            }
            if (data.hasOwnProperty('city')) {
                obj['city'] = ApiClient.convertToType(data['city'], 'String');
            }
            if (data.hasOwnProperty('address')) {
                obj['address'] = ApiClient.convertToType(data['address'], 'String');
            }
            if (data.hasOwnProperty('phone')) {
                obj['phone'] = ApiClient.convertToType(data['phone'], 'String');
            }
            if (data.hasOwnProperty('phoneNumberConfirmed')) {
                obj['phoneNumberConfirmed'] = ApiClient.convertToType(data['phoneNumberConfirmed'], 'Boolean');
            }
            if (data.hasOwnProperty('birthday')) {
                obj['birthday'] = ApiClient.convertToType(data['birthday'], 'Date');
            }
            if (data.hasOwnProperty('gender')) {
                obj['gender'] = ApiClient.convertToType(data['gender'], 'Boolean');
            }
            if (data.hasOwnProperty('avatar')) {
                obj['avatar'] = ApiClient.convertToType(data['avatar'], 'String');
            }
            if (data.hasOwnProperty('about')) {
                obj['about'] = ApiClient.convertToType(data['about'], 'String');
            }
            if (data.hasOwnProperty('userName')) {
                obj['userName'] = ApiClient.convertToType(data['userName'], 'String');
            }
            if (data.hasOwnProperty('index')) {
                obj['index'] = ApiClient.convertToType(data['index'], 'String');
            }
            if (data.hasOwnProperty('citizenship')) {
                obj['citizenship'] = ApiClient.convertToType(data['citizenship'], 'String');
            }
            if (data.hasOwnProperty('refUrl')) {
                obj['refUrl'] = ApiClient.convertToType(data['refUrl'], 'String');
            }
            if (data.hasOwnProperty('verificationStatus')) {
                obj['verificationStatus'] = UserVerificationStatus.constructFromObject(data['verificationStatus']);
            }
        }
        return obj;
    }

    id = undefined;
    email = undefined;
    firstName = undefined;
    middleName = undefined;
    lastName = undefined;
    country = undefined;
    city = undefined;
    address = undefined;
    phone = undefined;
    phoneNumberConfirmed = undefined;
    birthday = undefined;
    gender = undefined;
    avatar = undefined;
    about = undefined;
    userName = undefined;
    index = undefined;
    citizenship = undefined;
    refUrl = undefined;
    verificationStatus = undefined;








}






