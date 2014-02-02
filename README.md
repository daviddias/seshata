seshat - Create your interactive API
============

**seshat** is a new way to document your API, without documenting anything at all! Just let your users try it, live! 


seshat: 




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

### Why **seshat**?

![Seshat](http://upload.wikimedia.org/wikipedia/commons/thumb/7/71/Seshat.svg/200px-Seshat.svg.png)

"In Egyptian mythology, Seshat (also spelled Safkhet, Sesat, Seshet, Sesheta, and Seshata) was the Ancient Egyptian goddess of wisdom, knowledge, and writing."

Source: [Wikipedia](http://en.wikipedia.org/wiki/Seshat)

### Acknowledgements

Inspired by: https://github.com/strongloop/sls-sample-app-cookbook
Idea by: https://github.com/pgte
Originaly created for: http://percent.io/