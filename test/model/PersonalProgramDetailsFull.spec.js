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
    instance = new CoreApiV10.PersonalProgramDetailsFull();
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

  describe('PersonalProgramDetailsFull', function() {
    it('should create an instance of PersonalProgramDetailsFull', function() {
      // uncomment below and update the code to test PersonalProgramDetailsFull
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be.a(CoreApiV10.PersonalProgramDetailsFull);
    });

    it('should have the property isReinvest (base name: "isReinvest")', function() {
      // uncomment below and update the code to test the property isReinvest
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property gvtValue (base name: "gvtValue")', function() {
      // uncomment below and update the code to test the property gvtValue
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property isFavorite (base name: "isFavorite")', function() {
      // uncomment below and update the code to test the property isFavorite
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property isInvested (base name: "isInvested")', function() {
      // uncomment below and update the code to test the property isInvested
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property isOwnProgram (base name: "isOwnProgram")', function() {
      // uncomment below and update the code to test the property isOwnProgram
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canCloseProgram (base name: "canCloseProgram")', function() {
      // uncomment below and update the code to test the property canCloseProgram
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property isFinishing (base name: "isFinishing")', function() {
      // uncomment below and update the code to test the property isFinishing
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canInvest (base name: "canInvest")', function() {
      // uncomment below and update the code to test the property canInvest
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canWithdraw (base name: "canWithdraw")', function() {
      // uncomment below and update the code to test the property canWithdraw
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canClosePeriod (base name: "canClosePeriod")', function() {
      // uncomment below and update the code to test the property canClosePeriod
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property hasNotifications (base name: "hasNotifications")', function() {
      // uncomment below and update the code to test the property hasNotifications
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property value (base name: "value")', function() {
      // uncomment below and update the code to test the property value
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property profit (base name: "profit")', function() {
      // uncomment below and update the code to test the property profit
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property invested (base name: "invested")', function() {
      // uncomment below and update the code to test the property invested
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property pendingInput (base name: "pendingInput")', function() {
      // uncomment below and update the code to test the property pendingInput
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property pendingOutput (base name: "pendingOutput")', function() {
      // uncomment below and update the code to test the property pendingOutput
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property status (base name: "status")', function() {
      // uncomment below and update the code to test the property status
      //var instane = new CoreApiV10.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

  });

}));
