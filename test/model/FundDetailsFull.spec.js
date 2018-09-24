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
    instance = new CoreApiV10.FundDetailsFull();
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

  describe('FundDetailsFull', function() {
    it('should create an instance of FundDetailsFull', function() {
      // uncomment below and update the code to test FundDetailsFull
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be.a(CoreApiV10.FundDetailsFull);
    });

    it('should have the property entryFee (base name: "entryFee")', function() {
      // uncomment below and update the code to test the property entryFee
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property exitFee (base name: "exitFee")', function() {
      // uncomment below and update the code to test the property exitFee
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property managementFee (base name: "managementFee")', function() {
      // uncomment below and update the code to test the property managementFee
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property currentAssets (base name: "currentAssets")', function() {
      // uncomment below and update the code to test the property currentAssets
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property statistic (base name: "statistic")', function() {
      // uncomment below and update the code to test the property statistic
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property personalFundDetails (base name: "personalFundDetails")', function() {
      // uncomment below and update the code to test the property personalFundDetails
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property id (base name: "id")', function() {
      // uncomment below and update the code to test the property id
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property logo (base name: "logo")', function() {
      // uncomment below and update the code to test the property logo
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property description (base name: "description")', function() {
      // uncomment below and update the code to test the property description
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property title (base name: "title")', function() {
      // uncomment below and update the code to test the property title
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property manager (base name: "manager")', function() {
      // uncomment below and update the code to test the property manager
      //var instane = new CoreApiV10.FundDetailsFull();
      //expect(instance).to.be();
    });

  });

}));
