seshat - Create your interactive API
============


seshat: http://en.wikipedia.org/wiki/Seshat

Inspired by: https://github.com/strongloop/sls-sample-app-cookbook
Idea by: https://github.com/pgte
Originaly created for: http://percent.io/


### How to use

Prepare
```
$ git clone git@github.com:diasdavid/seshat.git
$ cd seshat
$ npm link
```


Generating API Docs
```bash
$ seshat gen <api-map.json> [<output-folder>]
```

### How to test

```bash
$ cd seshat-playground
$ seshat gen api-map.json
$ node index.js
# open your browser in localhost:8080
```

:)
