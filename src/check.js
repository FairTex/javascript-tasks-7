'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        for (var key of keys) {
            if (!(key in this)) {
                return false;
            }
        }
        return true;
    };

    Object.prototype.checkHasKeys = function (keys) {
        var thisArr = this;

        if (Object.keys(thisArr).length != keys.length) {
            return false;
        }
        return thisArr.checkContainsKeys(keys);
    };

    Object.prototype.checkContainsValues = function (values) {
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
    };

    Object.prototype.checkHasValues = function (values) {
        var arr = [];
        var keys = Object.keys(this);

        for (var key of keys) {
            arr.push(this[key]);
        }
        console.log(arr, values);

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
    };

    Object.prototype.checkHasValueType = function (key, type) {
        return typeof this[key] == type.name.toLowerCase();
    };

    Object.prototype.checkHasLength = function (length) {
        return this.length == length;
    };

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length == count;
    };

    String.prototype.checkHasWordsCount = function (count) {
        var words = this.split(' ');
        return words.length == count;
    };
};
