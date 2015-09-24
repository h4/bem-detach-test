modules.define('test', ['i-bem__dom'],
    function(provide, BEMDOM) {
        'use strict';

        /**
         * @class Test
         */
        provide(BEMDOM.decl({block: this.name}, /** @lends Test.prototype */ {
            _clickHandler: function() {
                setTimeout(this._release.bind(this), 1000);
            },

            _release: function() {
                this.setMod(this.elem('release'), 'released');
                BEMDOM.detach(this.domElem);
            }
        }, /** @lends Test */ {
            live: function() {
                this.liveBindTo('handler', 'click', function(e) {
                    this._clickHandler(e);
                });
            }
        }));
    });
