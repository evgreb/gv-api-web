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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoreApiV10);
  }
}(this, function(expect, CoreApiV10) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoreApiV10.ProgramsInfo();
  });

  var getProperty = function(object, getter, property) {
    // Use getter method if present; otherwise, get the property directly.
    if (typeof object[getter] === 'function')
      return object[getter]();
    else
      return object[property];
  }

  var setProperty = function(object, setter, property, value) {
    // Use setter method if present; otherwise, set the property directly.
    if (typeof object[setter] === 'function')
      object[setter](value);
    else
      object[property] = value;
  }

  describe('ProgramsInfo', function() {
    it('should create an instance of ProgramsInfo', function() {
      // uncomment below and update the code to test ProgramsInfo
      //var instane = new CoreApiV10.ProgramsInfo();
      //expect(instance).to.be.a(CoreApiV10.ProgramsInfo);
    });

    it('should have the property managerProgramInvestment (base name: "managerProgramInvestment")', function() {
      // uncomment below and update the code to test the property managerProgramInvestment
      //var instane = new CoreApiV10.ProgramsInfo();
      //expect(instance).to.be();
    });

    it('should have the property managerFundInvestment (base name: "managerFundInvestment")', function() {
      // uncomment below and update the code to test the property managerFundInvestment
      //var instane = new CoreApiV10.ProgramsInfo();
      //expect(instance).to.be();
    });

    it('should have the property periods (base name: "periods")', function() {
      // uncomment below and update the code to test the property periods
      //var instane = new CoreApiV10.ProgramsInfo();
      //expect(instance).to.be();
    });

  });

}));
