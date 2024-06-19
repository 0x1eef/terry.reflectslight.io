## About

This repository contains the source code of the statically compiled website
that's available at
[terry.reflectslight.io](https://terry.reflectslight.io).
The website is made in memory of Terry Davis (1969 – 2018),
a talented computer programmer who dedicated a large part
of his life to the creation of
[TempleOS](https://templeos.org).

## Requirements

The following languages and tools have to be
installed to build the website from source:

* Ruby 3.1 (or later)
* NodeJS v18.15 (or later)
* [tidy-html5](https://github.com/htacg/tidy-html5)

## Development

    # Clone repository
    git clone https://github.com/ReflectsLight/terry.reflectslight.io
    cd terry.reflectslight.io

    # List all tasks
    rake -T

    # Build website (dev build)
    rake nanoc:build

    # Build website (production build)
    rake nanoc:build[production]

    # Start web server
    rake server

## Sources

* [Github](https://github.com/0x1eef/terry.reflectslight.io)
* [Gitlab](https://gitlab.com/0x1eef/terry.reflectslight.io)

## License

The source code of this repository is released into the public domain
