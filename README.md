# Fibonacci cached into a file
cli fibonacci that caches values in an interesting way

Usage: `node index.js [number]`

For example: `node index.js 10` outputs `55` since it is the 11th number in the fibonacci sequence (it is zero indexed)

The first line of code in the `index.js` is
```
const cache = [0,1]
```
And the program saves cached values by directly changing this line of code (It is important that this line is the first in the file)

So for example if you ran `node index.js 10`

then the first line line of `index.js` will look like this
```
const cache = [0,1,1,2,3,5,8,13,21,34,55]
```

I know it's kind of dumb and it's not useful, but it's something I wanted to try to make and it turned out to be quite an easy task
