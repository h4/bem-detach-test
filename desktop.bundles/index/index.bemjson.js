module.exports = {
    block : 'page',
    title : 'Title of the page',
    favicon : '/favicon.ico',
    head : [
        { elem : 'meta', attrs : { name : 'description', content : '' } },
        { elem : 'meta', attrs : { name : 'viewport', content : 'width=device-width, initial-scale=1' } },
        { elem : 'css', url : 'index.min.css' }
    ],
    scripts: [{ elem : 'js', url : 'index.min.js' }],
    mods : { theme : 'islands' },
    content : [
        {
            block: 'wrapper',
            js: true,
            content: [
                {
                    block : 'test',
                    js: true,
                    mix: [
                        {
                            block: 'wrapper',
                            elem: 'test'
                        }
                    ],
                    content : [
                        'Test block',
                        {
                            elem: 'handler',
                            content: 'Click me'
                        },
                        {
                            elem: 'release',
                            content: 'Timer called'
                        }
                    ]
                },

                {
                    elem: 'handler',
                    content: 'Click me too'
                }
            ]
        }
    ]
};
