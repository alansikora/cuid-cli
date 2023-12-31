# cuid-cli ![Node.js CI](https://github.com/alansikora/cuid-cli/workflows/Node.js%20CI/badge.svg) ![CodeQL](https://github.com/alansikora/cuid-cli/workflows/CodeQL/badge.svg)

> Command line interface for [cuid](https://github.com/ericelliott/cuid)


## Install

```
$ npm install --global @alansikora/cuid-cli
```

If you don't want to install the package globally, you can use npx instead

```
$ npx @alansikora/cuid-cli
```


## Usage

```
$ cuid --help

  Usage
    $ cuid [--length X] [number]
    $ echo [number] | cuid [--length X]

  Options
    -s, --length Set length

  Examples
    $ cuid
    ciyefyc630000x0y7mhd8o67n

    $ cuid 4
    ciyefyc630000x0y7mhd8o67n
    ciyefyc650001x0y7f9rqtegv
    ciyefyc650002x0y7e9826mhe
    ciyefyc650003x0y7az4v96ec

    $ cuid --length 7
    1m0z7cm

    $ cuid 4 --length 7
    1m0z7cm
    1n1z7om
    1o2z7ud
    1o3z73h

    $ echo '4' | cuid --length 7
    1m0z7cm
    1n1z7om
    1o2z7ud
    1o3z73h
```


## Related

*   [cuid2](https://github.com/paralleldrive/cuid2) - API for this module
*   [cuid-cli](https://github.com/haroun/cuid-cli) - Based on the work by @haroun


## License

MIT © [Alan Sikora](https://github.com/alansikora)
