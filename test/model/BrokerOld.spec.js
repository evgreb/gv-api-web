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
    instance = new CoreApiV10.BrokerOld();
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

  describe('BrokerOld', function() {
    it('should create an instance of BrokerOld', function() {
      // uncomment below and update the code to test BrokerOld
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be.a(CoreApiV10.BrokerOld);
    });

    it('should have the property name (base name: "name")', function() {
      // uncomment below and update the code to test the property name
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property terms (base name: "terms")', function() {
      // uncomment below and update the code to test the property terms
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property assets (base name: "assets")', function() {
      // uncomment below and update the code to test the property assets
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property fee (base name: "fee")', function() {
      // uncomment below and update the code to test the property fee
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property leverageMin (base name: "leverageMin")', function() {
      // uncomment below and update the code to test the property leverageMin
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property leverageMax (base name: "leverageMax")', function() {
      // uncomment below and update the code to test the property leverageMax
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property accountTypes (base name: "accountTypes")', function() {
      // uncomment below and update the code to test the property accountTypes
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property isForex (base name: "isForex")', function() {
      // uncomment below and update the code to test the property isForex
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property isSignalsAvailable (base name: "isSignalsAvailable")', function() {
      // uncomment below and update the code to test the property isSignalsAvailable
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

    it('should have the property tags (base name: "tags")', function() {
      // uncomment below and update the code to test the property tags
      //var instane = new CoreApiV10.BrokerOld();
      //expect(instance).to.be();
    });

  });

}));