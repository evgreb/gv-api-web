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
    instance = new CoreApiV10.Review();
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

  describe('Review', function() {
    it('should create an instance of Review', function() {
      // uncomment below and update the code to test Review
      //var instane = new CoreApiV10.Review();
      //expect(instance).to.be.a(CoreApiV10.Review);
    });

    it('should have the property moderationComment (base name: "moderationComment")', function() {
      // uncomment below and update the code to test the property moderationComment
      //var instane = new CoreApiV10.Review();
      //expect(instance).to.be();
    });

    it('should have the property clientComment (base name: "clientComment")', function() {
      // uncomment below and update the code to test the property clientComment
      //var instane = new CoreApiV10.Review();
      //expect(instance).to.be();
    });

    it('should have the property reviewAnswer (base name: "reviewAnswer")', function() {
      // uncomment below and update the code to test the property reviewAnswer
      //var instane = new CoreApiV10.Review();
      //expect(instance).to.be();
    });

    it('should have the property rejectLabels (base name: "rejectLabels")', function() {
      // uncomment below and update the code to test the property rejectLabels
      //var instane = new CoreApiV10.Review();
      //expect(instance).to.be();
    });

    it('should have the property reviewRejectType (base name: "reviewRejectType")', function() {
      // uncomment below and update the code to test the property reviewRejectType
      //var instane = new CoreApiV10.Review();
      //expect(instance).to.be();
    });

  });

}));
