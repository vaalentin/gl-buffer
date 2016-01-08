"use strict";

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

Object.defineProperty(exports, "__esModule", {
  value: true
});

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

/**
 * @class Buffer
 */

var Buffer = function () {
  /**
   * @constructs Buffer
   * @param {WebGLRenderingContext} gl
   * @param {uint} type
   * @param {Float32Array|Uint16Array|Uint32Array} data
   * @param {uint} usage
   */

  function Buffer(gl, type, data, usage) {
    _classCallCheck(this, Buffer);

    this.gl = gl;

    this._type = type || this.gl.ARRAY_BUFFER;

    this.length = data.length;

    this.buffer = this.gl.createBuffer();

    this.gl.bindBuffer(this._type, this.buffer);
    this.gl.bufferData(this._type, data, usage || this.gl.STATIC_DRAW);
  }

  /**
   * @method bind
   * @public
   */

  _createClass(Buffer, [{
    key: "bind",
    value: function bind() {
      this.gl.bindBuffer(this._type, this.buffer);
    }

    /**
     * @method dispose
     * @public
     */

  }, {
    key: "dispose",
    value: function dispose() {
      this.gl.deleteBuffer(this.buffer);
      this.buffer = null;

      this.length = null;
      this._type = null;

      this.gl = null;
    }
  }]);

  return Buffer;
}();

exports.default = Buffer;
