export default (plugins = [], userOptions) => (input) => {
    return function postcss(log) {
        const Postcss = require('postcss');

        return Promise.all(
            input.map(file => {
                const options = {
                    ...userOptions,
                    from: file.path,
                    to: file.path
                };

                if (options.map) {
                    options.map = {
                        inline: false,
                        ...options.map
                    };
                }

                if (file.map !== null) {
                    options.map = {
                        ...options.map,
                        prev: file.map
                    };
                }

                return Postcss(plugins).process(file.data, options).then(result => {
                    log(file.path);

                    result.warnings().forEach(msg => {
                        log(msg.toString());
                    });

                    return {
                        path: file.path,
                        data: result.css,
                        map: result.map || null
                    };
                });
            })
        );
    };
};
