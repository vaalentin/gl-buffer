# gl-buffer

WebGL buffer wrapper.

## Installation

```
$ npm install --save @vaalention/gl-buffer
```

## Usage

```js
import Buffer from '@vaalentin/gl-buffer';

// setup canvas, gl, program, etc.

const verts = new Float32Array([
  -1.0, -1.0,  0.0,
   1.0, -1.0,  0.0,
   1.0,  1.0,  0.0,
  -1.0,  1.0,  0.0
]);

const faces = new Uint16Array([
  0, 1, 2,
  0, 2, 3
]);

const vertsBuffer = new Buffer(gl, gl.ARRAY_BUFFER, vertices, gl.STATIC_DRAW);
const facesBuffer = new Buffer(gl, gl.ELEMENT_ARRAY_BUFFER, faces, gl.STATIC_DRAW);

program.bind();
vertsBuffer.bind();
program.setAttributePointer('aPos');
facesBuffer.bind();

// draw elements
```

## API

#### `buffer = new Buffer(gl, type, data, usage)`

Create a new buffer, where:
- `gl` is the [WebGL context](https://github.com/vaalentin/gl-context).
- `type` is the buffer type. Default is `gl.ARRAY_BUFFER`.
- `data` is a typed array representing the data.
- `usage` is the buffer usage type. Default is `gl.STATIC_DRAW`.

#### `buffer.bind()`

Make the buffer the active one.

#### `buffer.dispose()`

Delete instance. Calls `gl.deleteBuffer()`.

## License

MIT, see [LICENSE.md](https://github.com/vaalentin/gl-buffer/blob/master/LICENSE.md) for more details.

## Credits

Thanks to the amazing [stackgl](http://stack.gl/) for the inspiration.
