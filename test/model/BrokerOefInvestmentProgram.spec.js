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
    instance = new CoreApiV2.BrokerOefInvestmentProgram();
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

  describe('BrokerOefInvestmentProgram', function() {
    it('should create an instance of BrokerOefInvestmentProgram', function() {
      // uncomment below and update the code to test BrokerOefInvestmentProgram
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be.a(CoreApiV2.BrokerOefInvestmentProgram);
    });

    it('should have the property feeEntrance (base name: "feeEntrance")', function() {
      // uncomment below and update the code to test the property feeEntrance
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property feeExit (base name: "feeExit")', function() {
      // uncomment below and update the code to test the property feeExit
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property feeManagement (base name: "feeManagement")', function() {
      // uncomment below and update the code to test the property feeManagement
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property balancingIpfsHash (base name: "balancingIpfsHash")', function() {
      // uncomment below and update the code to test the property balancingIpfsHash
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property lastPeriod (base name: "lastPeriod")', function() {
      // uncomment below and update the code to test the property lastPeriod
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property assetParts (base name: "assetParts")', function() {
      // uncomment below and update the code to test the property assetParts
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property managerAccountId (base name: "managerAccountId")', function() {
      // uncomment below and update the code to test the property managerAccountId
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property dateFrom (base name: "dateFrom")', function() {
      // uncomment below and update the code to test the property dateFrom
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property dateTo (base name: "dateTo")', function() {
      // uncomment below and update the code to test the property dateTo
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property isEnabled (base name: "isEnabled")', function() {
      // uncomment below and update the code to test the property isEnabled
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property investMinAmount (base name: "investMinAmount")', function() {
      // uncomment below and update the code to test the property investMinAmount
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property investMaxAmount (base name: "investMaxAmount")', function() {
      // uncomment below and update the code to test the property investMaxAmount
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property ipfsHash (base name: "ipfsHash")', function() {
      // uncomment below and update the code to test the property ipfsHash
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new CoreApiV2.BrokerOefInvestmentProgram();
      //expect(instance).to.be();
    });

  });

}));
