## About

[terry.reflectslight.io](https://terry.reflectslight.io)
is a [nanoc website](https://nanoc.app) created
in memory of Terry Davis (1969 – 2018). The website also
serves as an example of how to use nanoc with webpack via
[0x1eef/nanoc-webpack.rb](https://github.com/0x1eef/nanoc-webpack.rb).

## Requirements

The following languages and tools have to be
installed to build the website from source:

* Ruby 3.1 (or later)
* NodeJS v18.15 (or later)
* [tidy-html5](https://github.com/htacg/tidy-html5)

## Development

    # Clone
    git clone https://github.com/ReflectsLight/terry.reflectslight.io
    cd terry.reflectslight.io

    # Setup build environment
    bin/setup

    # List tasks
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
