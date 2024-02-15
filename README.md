## About

This repository contains the source code of the statically compiled website
that's available at
[terry.reflectslight.io](https://terry.reflectslight.io).
The website is made in memory of Terry Davis (1969 – 2018),
a talented computer programmer who dedicated a large part
of his life to the creation of
[TempleOS](https://templeos.org).

## Build

Build requirements:

* Ruby v3+
* nodejs v18+
* [tidy-html5](https://github.com/htacg/tidy-html5#readme)

Instructions:

    # Clone repository
    $ git clone https://github.com/0x1eef/terry.reflectslight.io
    $ cd terry.reflectslight.io

    # Install dependencies
    $ bundle install
    $ npm i

    # Build website
    # Run server on http://localhost:3000
    $ rake nanoc:build
    $ rake server

## License

The source code of this repository is released into the public domain.
