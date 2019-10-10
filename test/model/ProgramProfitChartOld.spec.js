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
    instance = new CoreApiV10.ProgramProfitChartOld();
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

  describe('ProgramProfitChartOld', function() {
    it('should create an instance of ProgramProfitChartOld', function() {
      // uncomment below and update the code to test ProgramProfitChartOld
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be.a(CoreApiV10.ProgramProfitChartOld);
    });

    it('should have the property equityChart (base name: "equityChart")', function() {
      // uncomment below and update the code to test the property equityChart
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property totalProfit (base name: "totalProfit")', function() {
      // uncomment below and update the code to test the property totalProfit
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property timeframeProfit (base name: "timeframeProfit")', function() {
      // uncomment below and update the code to test the property timeframeProfit
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property programCurrency (base name: "programCurrency")', function() {
      // uncomment below and update the code to test the property programCurrency
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property trades (base name: "trades")', function() {
      // uncomment below and update the code to test the property trades
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property successTradesPercent (base name: "successTradesPercent")', function() {
      // uncomment below and update the code to test the property successTradesPercent
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property profitFactor (base name: "profitFactor")', function() {
      // uncomment below and update the code to test the property profitFactor
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property periods (base name: "periods")', function() {
      // uncomment below and update the code to test the property periods
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property lastPeriodStarts (base name: "lastPeriodStarts")', function() {
      // uncomment below and update the code to test the property lastPeriodStarts
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property lastPeriodEnds (base name: "lastPeriodEnds")', function() {
      // uncomment below and update the code to test the property lastPeriodEnds
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property tradingVolume (base name: "tradingVolume")', function() {
      // uncomment below and update the code to test the property tradingVolume
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property balance (base name: "balance")', function() {
      // uncomment below and update the code to test the property balance
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property investors (base name: "investors")', function() {
      // uncomment below and update the code to test the property investors
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property profitChangePercent (base name: "profitChangePercent")', function() {
      // uncomment below and update the code to test the property profitChangePercent
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property sharpeRatio (base name: "sharpeRatio")', function() {
      // uncomment below and update the code to test the property sharpeRatio
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property sortinoRatio (base name: "sortinoRatio")', function() {
      // uncomment below and update the code to test the property sortinoRatio
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property calmarRatio (base name: "calmarRatio")', function() {
      // uncomment below and update the code to test the property calmarRatio
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property maxDrawdown (base name: "maxDrawdown")', function() {
      // uncomment below and update the code to test the property maxDrawdown
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

    it('should have the property rate (base name: "rate")', function() {
      // uncomment below and update the code to test the property rate
      //var instane = new CoreApiV10.ProgramProfitChartOld();
      //expect(instance).to.be();
    });

  });

}));
