function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _unsupportedIterableToArray(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function _iterableToArrayLimit(arr, i) { var _i = arr == null ? null : typeof Symbol !== "undefined" && arr[Symbol.iterator] || arr["@@iterator"]; if (_i == null) return; var _arr = []; var _n = true; var _d = false; var _s, _e; try { for (_i = _i.call(arr); !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _typeof(obj) { "@babel/helpers - typeof"; return _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) { return typeof obj; } : function (obj) { return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }, _typeof(obj); }

(function (global, factory) {
  (typeof exports === "undefined" ? "undefined" : _typeof(exports)) === 'object' && typeof module !== 'undefined' ? factory(exports) : typeof define === 'function' && define.amd ? define(['exports'], factory) : (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.itools = {}));
})(this, function (exports) {
  'use strict';
  /**
   * @file 数据类型相关API
   */

  /**
   * @description 获取数据类型
   */

  var getType = function getType(data) {
    return Object.prototype.toString.call(data).slice(8, -1).toLowerCase();
  };
  /**
   * @description 判断数据是否为Null
   */


  var isNull = function isNull(value) {
    return getType(value) === 'null';
  };
  /**
   * @file URL相关API
   */

  /**
   * @description 将对象拼接成查询字符串
   */


  var stringfyQuery = function stringfyQuery(query) {
    if (getType(query) === 'object' && Object.keys(query).length) {
      var pairs = Object.entries(query).map(function (_ref) {
        var _ref2 = _slicedToArray(_ref, 2),
            key = _ref2[0],
            value = _ref2[1];

        return "".concat(key, "=").concat(value);
      });
      return "?".concat(pairs.join('&'));
    }
  };
  /**
   * @description 将查询字符串转换为对象
   */


  var parseQueryString = function parseQueryString(url) {
    if (getType(url) !== 'string') return;
    if (!url.includes('?')) return;

    var _decodeURIComponent$s = decodeURIComponent(url).split('?'),
        _decodeURIComponent$s2 = _slicedToArray(_decodeURIComponent$s, 2),
        _ = _decodeURIComponent$s2[0],
        queryString = _decodeURIComponent$s2[1];

    if (!queryString) return;
    var result = {};
    queryString.split('&').map(function (item) {
      var _item$split = item.split('='),
          _item$split2 = _slicedToArray(_item$split, 2),
          key = _item$split2[0],
          value = _item$split2[1];

      if (key) {
        result[key] = value;
      }
    });
    return result;
  };
  /**
   * @description 获取查询字符串的某个属性值
   */


  var getQueryByKey = function getQueryByKey() {
    var url = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : '';
    var key = arguments.length > 1 ? arguments[1] : undefined;

    var _a;

    return (_a = parseQueryString(url)) === null || _a === void 0 ? void 0 : _a[key];
  };

  exports.getQueryByKey = getQueryByKey;
  exports.getType = getType;
  exports.isNull = isNull;
  exports.parseQueryString = parseQueryString;
  exports.stringfyQuery = stringfyQuery;
  Object.defineProperty(exports, '__esModule', {
    value: true
  });
});
