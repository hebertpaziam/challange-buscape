var register = function (Handlebars) {
    var helpers = {
        currency: function (amount) {
            var rounded = Math.round(amount * 100);
            var dec = rounded % 100;
            var whole = rounded / 100 - dec / 100;
            var decStr = '' + dec;
            return whole + ',' + decStr + (decStr.length < 2 ? '0' : '');
        },
    };

    if (Handlebars && typeof Handlebars.registerHelper === "function") {
        for (var prop in helpers) {
            Handlebars.registerHelper(prop, helpers[prop]);
        }
    } else {
        return helpers;
    }

};

module.exports.register = register;
module.exports.helpers = register(null);