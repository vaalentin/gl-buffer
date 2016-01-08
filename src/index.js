/**
 * @class Buffer
 */
export default class Buffer {
  /**
   * @constructs Buffer
   * @param {WebGLRenderingContext} gl
   * @param {uint} type
   * @param {Float32Array|Uint16Array|Uint32Array} data
   * @param {uint} usage
   */
  constructor(gl, type, data, usage) {
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
  bind() {
    this.gl.bindBuffer(this._type, this.buffer);
  }

  /**
   * @method dispose
   * @public
   */
  dispose() {
    this.gl.deleteBuffer(this.buffer);
    this.buffer = null;

    this.length = null;
    this._type = null;

    this.gl = null;
  }
}

