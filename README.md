pager-server
============

[![Build Status](https://travis-ci.org/gfestari/pager-server.svg)](https://travis-ci.org/gfestari/pager-server) [![Coverage Status](https://img.shields.io/coveralls/gfestari/pager-server.svg)](https://coveralls.io/r/gfestari/pager-server) [![Dependency Status](https://david-dm.org/gfestari/pager-server.svg?style=flat)](https://david-dm.org/gfestari/pager-server)

A (barebones) API wrapper for pager-client.

This is intended to be used as a companion-app for [pager-client]


## Installation

 1. Clone the repo and `cd` into the folder
 2. `npm install` and go grab a cup of coffee
 3. `npm start` to boot the server
 4. ????
 5. PROFIT

## Configuration

This relies on the `ENDPOINT_URL` env var. Just remeber to:

`export ENDPOINT_URL='https://your.api.url'`

**before** runing the app.

## Overview

This works as a wrapper for the pager API, serving the condensed (non-paginated) list of views available.
Dispatches at the `/visits` endpoint.

[pager-client]: http://www.github.com/gfestari/pager-client
