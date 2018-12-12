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





    /**
     *
     * @interface RegisterInvestorViewModel
     */
    
    /**
     *
     * @name RegisterInvestorViewModel#email
     * @type {String}
     */
    /**
     *
     * @name RegisterInvestorViewModel#password
     * @type {String}
     */
    /**
     *
     * @name RegisterInvestorViewModel#confirmPassword
     * @type {String}
     */
    /**
     *
     * @name RegisterInvestorViewModel#refCode
     * @type {String}
     */





export default class RegisterInvestorViewModel {

    constructor(email, password) {
        

        
        

        this['email'] = email;this['password'] = password;

        
    }

    static constructFromObject(data, obj) {
        if (data) {
            obj = obj || new RegisterInvestorViewModel();

            
            
            

            if (data.hasOwnProperty('email')) {
                obj['email'] = ApiClient.convertToType(data['email'], 'String');
            }
            if (data.hasOwnProperty('password')) {
                obj['password'] = ApiClient.convertToType(data['password'], 'String');
            }
            if (data.hasOwnProperty('confirmPassword')) {
                obj['confirmPassword'] = ApiClient.convertToType(data['confirmPassword'], 'String');
            }
            if (data.hasOwnProperty('refCode')) {
                obj['refCode'] = ApiClient.convertToType(data['refCode'], 'String');
            }
        }
        return obj;
    }

    email = undefined;
    password = undefined;
    confirmPassword = undefined;
    refCode = undefined;








}


