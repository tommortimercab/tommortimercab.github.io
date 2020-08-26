'use strict';

/**
 * @desc: Live Person Google Analytics Tracking.
 * @author: Citizens Advice CMS team.
 */
var lp_gatracking = (function () {

    /**
    * @desc: Push data to dataLayer for GA interegation.
    * @param: object data - data coming from Live Person script.
    */
    var sendData = function (data) {
        return dataLayer.push(data);
    }

    return {
        sendData: sendData
    }
})();
