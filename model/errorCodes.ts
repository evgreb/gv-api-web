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
 */

import { GenericFabric, fabric } from "../constructFromObject";
export type ErrorCodes = 'InternalServerError' | 'ValidationError' | 'RequiresTwoFactor' | 'WrongCaptcha';

export const ErrorCodes = {
  constructFromObject: fabric as GenericFabric<ErrorCodes>
};

