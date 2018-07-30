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
    instance = new CoreApiV2.PersonalProgramDetailsFull();
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
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be.a(CoreApiV2.PersonalProgramDetailsFull);
    });

    it('should have the property isFavorite (base name: "isFavorite")', function() {
      // uncomment below and update the code to test the property isFavorite
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property isInvested (base name: "isInvested")', function() {
      // uncomment below and update the code to test the property isInvested
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property isOwnProgram (base name: "isOwnProgram")', function() {
      // uncomment below and update the code to test the property isOwnProgram
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canCloseProgram (base name: "canCloseProgram")', function() {
      // uncomment below and update the code to test the property canCloseProgram
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canClosePeriod (base name: "canClosePeriod")', function() {
      // uncomment below and update the code to test the property canClosePeriod
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

    it('should have the property canInvest (base name: "canInvest")', function() {
      // uncomment below and update the code to test the property canInvest
      //var instane = new CoreApiV2.PersonalProgramDetailsFull();
      //expect(instance).to.be();
    });

  });

}));
