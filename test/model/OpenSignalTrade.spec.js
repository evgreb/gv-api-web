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
    instance = new CoreApiV10.OpenSignalTrade();
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

  describe('OpenSignalTrade', function() {
    it('should create an instance of OpenSignalTrade', function() {
      // uncomment below and update the code to test OpenSignalTrade
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be.a(CoreApiV10.OpenSignalTrade);
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property symbol (base name: "symbol")', function() {
      // uncomment below and update the code to test the property symbol
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property orderId (base name: "orderId")', function() {
      // uncomment below and update the code to test the property orderId
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property openDate (base name: "openDate")', function() {
      // uncomment below and update the code to test the property openDate
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property openPrice (base name: "openPrice")', function() {
      // uncomment below and update the code to test the property openPrice
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property volume (base name: "volume")', function() {
      // uncomment below and update the code to test the property volume
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property price (base name: "price")', function() {
      // uncomment below and update the code to test the property price
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

    it('should have the property profit (base name: "profit")', function() {
      // uncomment below and update the code to test the property profit
      //var instane = new CoreApiV10.OpenSignalTrade();
      //expect(instance).to.be();
    });

  });

}));
