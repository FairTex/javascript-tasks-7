'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        if (Object.getPrototypeOf(this) == Array.prototype ||
            Object.getPrototypeOf(this) == Object.prototype) {
            for (var key of keys) {
                if (!(key in this)) {
                    return false;
                }
            }
            return true;
        }
    };

    Object.prototype.checkHasKeys = function (keys) {
        if (Object.getPrototypeOf(this) == Array.prototype ||
            Object.getPrototypeOf(this) == Object.prototype) {
            var thisArr = this;

            if (Object.keys(thisArr).length != keys.length) {
                return false;
            }
            return thisArr.checkContainsKeys(keys);
        }
    };

    Object.prototype.checkContainsValues = function (values) {
        if (Object.getPrototypeOf(this) == Array.prototype ||
            Object.getPrototypeOf(this) == Object.prototype) {
            var thisArr = this;

            var arr = [];
            for (var val in thisArr) {
                arr.push(thisArr[val]);
            }

            for (var value of values) {
                if (arr.indexOf(value) < 0) {
                    return false;
                }
            }
            return true;
        }
    };

    Object.prototype.checkHasValues = function (values) {
        if (Object.getPrototypeOf(this) == Array.prototype ||
            Object.getPrototypeOf(this) == Object.prototype) {
            var arr = [];
            var keys = Object.keys(this);

            for (var key of keys) {
                arr.push(this[key]);
            }

            for (var e of arr) {
                if (values.indexOf(e) < 0) {
                    return false;
                }
            }
            for (var i of values) {
                if (arr.indexOf(i) < 0) {
                    return false;
                }
            }
            return true;
        }
    };

    Object.prototype.checkHasValueType = function (key, type) {
        if (Object.getPrototypeOf(this) == Array.prototype ||
            Object.getPrototypeOf(this) == Object.prototype) {
            return this[key].constructor === type;
        }
    };

    Object.prototype.checkHasLength = function (length) {
        if (Object.getPrototypeOf(this) == Array.prototype ||
            Object.getPrototypeOf(this) == String.prototype) {
            return this.length == length;
        }
    };

    Object.prototype.checkHasParamsCount = function (count) {
        if (Object.getPrototypeOf(this) == Function.prototype) {
            return this.length == count;
        }
    };

    Object.prototype.checkHasWordsCount = function (count) {
        if (Object.getPrototypeOf(this) == String.prototype) {
            var words = this.split(' ');
            return words.length == count;
        }
    };
};
