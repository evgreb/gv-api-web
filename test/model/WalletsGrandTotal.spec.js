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
    instance = new CoreApiV10.WalletsGrandTotal();
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

  describe('WalletsGrandTotal', function() {
    it('should create an instance of WalletsGrandTotal', function() {
      // uncomment below and update the code to test WalletsGrandTotal
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be.a(CoreApiV10.WalletsGrandTotal);
    });

    it('should have the property currency (base name: "currency")', function() {
      // uncomment below and update the code to test the property currency
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property available (base name: "available")', function() {
      // uncomment below and update the code to test the property available
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property invested (base name: "invested")', function() {
      // uncomment below and update the code to test the property invested
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property pending (base name: "pending")', function() {
      // uncomment below and update the code to test the property pending
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property total (base name: "total")', function() {
      // uncomment below and update the code to test the property total
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property currencyCcy (base name: "currencyCcy")', function() {
      // uncomment below and update the code to test the property currencyCcy
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property availableCcy (base name: "availableCcy")', function() {
      // uncomment below and update the code to test the property availableCcy
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property investedCcy (base name: "investedCcy")', function() {
      // uncomment below and update the code to test the property investedCcy
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property pendingCcy (base name: "pendingCcy")', function() {
      // uncomment below and update the code to test the property pendingCcy
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

    it('should have the property totalCcy (base name: "totalCcy")', function() {
      // uncomment below and update the code to test the property totalCcy
      //var instane = new CoreApiV10.WalletsGrandTotal();
      //expect(instance).to.be();
    });

  });

}));