
# worker

  Web worker API wrapper.

## Installation

    $ component install component/worker

## Example

```js
var Worker = require('worker');
var worker = new Worker('work.js');

worker.on('message', function(msg, e){
  if (!msg.progress) return worker.off('message');
  console.log(msg.progress);
});

worker.send({ id: 1 });
```

## API

### Worker(script)

  Initialize a worker with the given `script`.

### Worker#send(msg)

  Send a message to the worker.

```js
worker.send({ string: 'hello' });
worker.send({ string: 'world' });
```

### Worker#send(msg, callback)

  Send a request message to the worker with the given `callback`. When
  using the request/response paradigm you should pass the `e.data.id` property
  back with your response so that the correct callback may be invoked:

```js
onmessage = function(e) {
  setTimeout(function(){
    postMessage({ id: e.data.id, value: e.data.value.toUpperCase() });
  }, 500);
};
```

### Worker#close()

  Terminate the worker.

## License

  MIT
