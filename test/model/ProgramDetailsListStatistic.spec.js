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

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD.
    define(['expect.js', '../../src/index'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    factory(require('expect.js'), require('../../src/index'));
  } else {
    // Browser globals (root is window)
    factory(root.expect, root.CoreApiV2);
  }
}(this, function(expect, CoreApiV2) {
  'use strict';

  var instance;

  beforeEach(function() {
    instance = new CoreApiV2.ProgramDetailsListStatistic();
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

  describe('ProgramDetailsListStatistic', function() {
    it('should create an instance of ProgramDetailsListStatistic', function() {
      // uncomment below and update the code to test ProgramDetailsListStatistic
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be.a(CoreApiV2.ProgramDetailsListStatistic);
    });

    it('should have the property balanceBase (base name: "balanceBase")', function() {
      // uncomment below and update the code to test the property balanceBase
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property currencyBase (base name: "currencyBase")', function() {
      // uncomment below and update the code to test the property currencyBase
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property balanceConverted (base name: "balanceConverted")', function() {
      // uncomment below and update the code to test the property balanceConverted
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property currencyConverted (base name: "currencyConverted")', function() {
      // uncomment below and update the code to test the property currencyConverted
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property investorsCount (base name: "investorsCount")', function() {
      // uncomment below and update the code to test the property investorsCount
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property tradesCount (base name: "tradesCount")', function() {
      // uncomment below and update the code to test the property tradesCount
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property drawdownPercent (base name: "drawdownPercent")', function() {
      // uncomment below and update the code to test the property drawdownPercent
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

    it('should have the property profitPercent (base name: "profitPercent")', function() {
      // uncomment below and update the code to test the property profitPercent
      //var instane = new CoreApiV2.ProgramDetailsListStatistic();
      //expect(instance).to.be();
    });

  });

}));
