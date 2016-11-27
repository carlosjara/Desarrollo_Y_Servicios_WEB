var string_util = require("underscore.string");

var exports = module.exports = {};

exports.validateBookmark = function(name, link) {
    var errors = {
        name: {
            hasErrors : false
        },
        link: {
            hasErrors : false
        }
    };

    if (string_util.isBlank(name)) {
        errors.name.error = "Name field is mandatory";
        errors.name.hasErrors = true;
    }

    if (string_util.isBlank(link)) {
        errors.link.error = "Link field is mandatory";
        errors.link.hasErrors = true;
    }


    errors.hasErrors = errors.name.hasErrors || errors.link.hasErrors;
    return errors;
}