# timestamp-stream
Creates a new Transform Stream.

pipe newline-separated data in -> get a time-series formatted object out


# example
```javascript
var stamper = new StampStream({
    sep: '\n',
    timeStamper: getTimeFunc
});

someDataStream.pipe(stamper).pipe(process.stdout);

// { "x":"2015-03-21T04:33:18.254Z","y": dataFromStream }
// { "x":"2015-03-21T04:34:18.354Z","y": dataFromStream }
// { "x":"2015-03-21T04:35:18.294Z","y": dataFromStream }
```

# methods
```javascript
var TimeStampStream = require('timestamp-stream');
```

## var stamper = new TimeStampStream()

# install
```bash
npm install timestamp-stream
```

# license
MIT
