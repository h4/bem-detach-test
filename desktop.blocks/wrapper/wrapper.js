modules.define('wrapper', ['i-bem__dom', 'jquery'],
    function(provide, BEMDOM, $) {
        'use strict';

        /**
         * @class Wrapper
         */
        provide(BEMDOM.decl({block: this.name}, /** @lends Wrapper.prototype */ {
            _clickHandler: function() {
                BEMDOM.detach(this.elem('test'));
            }
        }, /** @lends Wrapper */ {
            live: function() {
                this.liveBindTo('handler', 'click', function() {
                    this._clickHandler();
                });
            }
        }));
    });
