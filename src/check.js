'use strict';

exports.init = function () {
    Object.prototype.checkContainsKeys = function (keys) {
        for (var key of keys) {
            if (!(key in this)) {
                return false;
            }
        }
        return true;
    }

    Object.prototype.checkHasKeys = function (keys) {
        var thisArr = this;
        var filter = keys.filter(function(key) {
            return (key in thisArr);
        });
        return filter.length == Object.keys(arr).length;
    }

    Object.prototype.checkContainsValues = function (values) {
        for (var value of values) {
            if (this.indexOf(value) < 0) {
                return false;
            }
        }
        return true;
    }

    Object.prototype.checkHasValues = function (values) {
        var arr = this;
        var filter = values.filter(function(value) {
            return (arr.indexOf(value) > 0);
        });
        return filter.length == Object.keys(arr).length;
    }

    Object.prototype.checkHasValueType = function (key, type) {
        return typeof this[key] == type.name.toLowerCase();
    }

    Object.prototype.checkHasLength = function (length) {
        return this.length == length;
    }

    Function.prototype.checkHasParamsCount = function (count) {
        return this.length == count;
    }

    String.prototype.checkHasWordsCount = function (count) {
        var words = this.split(' ');
        return words.length == count;
    }
};
