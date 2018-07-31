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
    instance = new CoreApiV10.BrokerApi();
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

  describe('BrokerApi', function() {
    describe('v10BrokerAccountCreatePost', function() {
      it('should call v10BrokerAccountCreatePost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerAccountCreatePost
        //instance.v10BrokerAccountCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerAccountOefCreatePost', function() {
      it('should call v10BrokerAccountOefCreatePost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerAccountOefCreatePost
        //instance.v10BrokerAccountOefCreatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerFreeaddressesGet', function() {
      it('should call v10BrokerFreeaddressesGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerFreeaddressesGet
        //instance.v10BrokerFreeaddressesGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerInitDataGet', function() {
      it('should call v10BrokerInitDataGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerInitDataGet
        //instance.v10BrokerInitDataGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerManagersAccountsOnlineInfoUpdatePost', function() {
      it('should call v10BrokerManagersAccountsOnlineInfoUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerManagersAccountsOnlineInfoUpdatePost
        //instance.v10BrokerManagersAccountsOnlineInfoUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerOefAssetAllGet', function() {
      it('should call v10BrokerOefAssetAllGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerOefAssetAllGet
        //instance.v10BrokerOefAssetAllGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerOefGetRealAssetsGet', function() {
      it('should call v10BrokerOefGetRealAssetsGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerOefGetRealAssetsGet
        //instance.v10BrokerOefGetRealAssetsGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerOefInitDataGet', function() {
      it('should call v10BrokerOefInitDataGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerOefInitDataGet
        //instance.v10BrokerOefInitDataGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerOefSetRealAssetsPost', function() {
      it('should call v10BrokerOefSetRealAssetsPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerOefSetRealAssetsPost
        //instance.v10BrokerOefSetRealAssetsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodAccrueProfitsPost', function() {
      it('should call v10BrokerPeriodAccrueProfitsPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodAccrueProfitsPost
        //instance.v10BrokerPeriodAccrueProfitsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodClosePost', function() {
      it('should call v10BrokerPeriodClosePost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodClosePost
        //instance.v10BrokerPeriodClosePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodOefApplyAssetPartsPost', function() {
      it('should call v10BrokerPeriodOefApplyAssetPartsPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodOefApplyAssetPartsPost
        //instance.v10BrokerPeriodOefApplyAssetPartsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodOefProcessClosingProgramPost', function() {
      it('should call v10BrokerPeriodOefProcessClosingProgramPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodOefProcessClosingProgramPost
        //instance.v10BrokerPeriodOefProcessClosingProgramPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodOefProcessForceClosingProgramPost', function() {
      it('should call v10BrokerPeriodOefProcessForceClosingProgramPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodOefProcessForceClosingProgramPost
        //instance.v10BrokerPeriodOefProcessForceClosingProgramPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodProcessClosingProgramPost', function() {
      it('should call v10BrokerPeriodProcessClosingProgramPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodProcessClosingProgramPost
        //instance.v10BrokerPeriodProcessClosingProgramPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodProcessInvestmentRequestsPost', function() {
      it('should call v10BrokerPeriodProcessInvestmentRequestsPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodProcessInvestmentRequestsPost
        //instance.v10BrokerPeriodProcessInvestmentRequestsPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodReevaluateManagerTokenPost', function() {
      it('should call v10BrokerPeriodReevaluateManagerTokenPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodReevaluateManagerTokenPost
        //instance.v10BrokerPeriodReevaluateManagerTokenPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodSetStartValuesPost', function() {
      it('should call v10BrokerPeriodSetStartValuesPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodSetStartValuesPost
        //instance.v10BrokerPeriodSetStartValuesPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodTerminatePost', function() {
      it('should call v10BrokerPeriodTerminatePost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodTerminatePost
        //instance.v10BrokerPeriodTerminatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerPeriodlosingDataGet', function() {
      it('should call v10BrokerPeriodlosingDataGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerPeriodlosingDataGet
        //instance.v10BrokerPeriodlosingDataGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerTradehistoryGet', function() {
      it('should call v10BrokerTradehistoryGet successfully', function(done) {
        //uncomment below and update the code to test v10BrokerTradehistoryGet
        //instance.v10BrokerTradehistoryGet(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerTradesIpfsHashUpdatePost', function() {
      it('should call v10BrokerTradesIpfsHashUpdatePost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerTradesIpfsHashUpdatePost
        //instance.v10BrokerTradesIpfsHashUpdatePost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
    describe('v10BrokerTradesNewPost', function() {
      it('should call v10BrokerTradesNewPost successfully', function(done) {
        //uncomment below and update the code to test v10BrokerTradesNewPost
        //instance.v10BrokerTradesNewPost(function(error) {
        //  if (error) throw error;
        //expect().to.be();
        //});
        done();
      });
    });
  });

}));
