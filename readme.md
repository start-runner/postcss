# start-postcss

[![npm](https://img.shields.io/npm/v/start-postcss.svg?style=flat-square)](https://www.npmjs.com/package/start-postcss)
[![linux build](https://img.shields.io/travis/start-runner/postcss/master.svg?label=linux&style=flat-square)](https://travis-ci.org/start-runner/postcss)
[![windows build](https://img.shields.io/appveyor/ci/start-runner/postcss/master.svg?label=windows&style=flat-square)](https://ci.appveyor.com/project/start-runner/postcss)
[![coverage](https://img.shields.io/codecov/c/github/start-runner/postcss/master.svg?style=flat-square)](https://codecov.io/github/start-runner/postcss)
[![deps](https://img.shields.io/gemnasium/start-runner/postcss.svg?style=flat-square)](https://gemnasium.com/start-runner/postcss)

[PostCSS](http://postcss.org/) task for [Start](https://github.com/start-runner/start).

## Install

```
npm i -S start-postcss
```

## Usage

```js
import start from 'start';
import reporter from 'start-pretty-reporter';
import files from 'start-files';
import clean from 'start-clean';
import read from 'start-read';
import less from 'start-less';
import postcss from 'start-postcss';
import rename from 'start-rename';
import write from 'start-write';

import autoprefixer from 'autoprefixer';

export function build() {
    return start(reporter())(
        files('build/'),
        clean(),
        files('lib/**/*.less'),
        read(),
        less({ sourceMap: true }),
        postcss([ autoprefixer ], { map: true }),
        rename(file => file.replace(/\.less$/, '.css')),
        write('build/')
    );
}
```

This task relies on `[{ path, data, map }]` input and provides the same, see [documentation](https://github.com/start-runner/start#readme) for details.

## Arguments

`postcss(plugins, options)`

* `plugins` – [PostCSS plugins](https://github.com/postcss/postcss#plugins), `[]` by default
* `options` – [PostCSS options](https://github.com/postcss/postcss#options)
