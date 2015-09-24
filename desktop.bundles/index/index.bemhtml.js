(function(global) {
var buildBemXjst = function(exports, __bem_xjst_libs__){

var $$mode = "", $$block = "", $$elem = "", $$elemMods = null, $$mods = null, $$once = false, $$wrap = false;

var __$ref = {};

function apply(ctx) {
    ctx = ctx || this;
    $$wrap = undefined;
    $$once = undefined;
    $$mods = ctx["mods"];
    $$elemMods = ctx["elemMods"];
    $$elem = ctx["elem"];
    $$block = ctx["block"];
    $$mode = ctx["_mode"];
    try {
        return applyc(ctx, __$ref);
    } catch (e) {
        e.xjstContext = ctx;
        throw e;
    }
}

exports.apply = apply;

function applyc(__$ctx, __$ref) {
    var __$t = $$mode;
    if (__$t === "attrs") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return {
                    rel: "shortcut icon",
                    href: __$ctx.ctx.url
                };
            } else if (__$t === "js") {
                var __$r = __$b2(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return {
                        rel: "stylesheet",
                        href: __$ctx.ctx.url
                    };
                }
            }
        }
        return undefined;
    } else if (__$t === "tag") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return "link";
            } else if (__$t === "link") {
                return "link";
            } else if (__$t === "meta") {
                return "meta";
            } else if (__$t === "head") {
                return "head";
            }
            if (!$$elem) {
                return "body";
            }
            var __$t = $$elem;
            if (__$t === "js") {
                return "script";
            } else if (__$t === "css") {
                if (__$ctx.ctx.url) {
                    return "link";
                }
                return "style";
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return "script";
            }
        }
        return undefined;
    } else if (__$t === "bem") {
        var __$t = $$block;
        if (__$t === "page") {
            var __$t = $$elem;
            if (__$t === "favicon") {
                return false;
            } else if (__$t === "link") {
                return false;
            } else if (__$t === "meta") {
                return false;
            } else if (__$t === "head") {
                return false;
            } else if (__$t === "js") {
                return false;
            } else if (__$t === "css") {
                return false;
            }
        } else if (__$t === "ua") {
            if (!$$elem) {
                return false;
            }
        }
        return undefined;
    } else if (__$t === "content") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && (__$ctx.__$a0 & 1) === 0) {
                return [ function __$lb__$0() {
                    var __$r__$1;
                    var __$l0__$2 = __$ctx.__$a0;
                    __$ctx.__$a0 = __$ctx.__$a0 | 1;
                    __$r__$1 = applyc(__$ctx, __$ref);
                    __$ctx.__$a0 = __$l0__$2;
                    return __$r__$1;
                }(), __$ctx.ctx.scripts ];
            }
        } else if (__$t === "ua") {
            var __$t = !$$elem;
            if (__$t) {
                if ((__$ctx.__$a0 & 4) === 0) {
                    return [ function __$lb__$14() {
                        var __$r__$15;
                        var __$l0__$16 = __$ctx.__$a0;
                        __$ctx.__$a0 = __$ctx.__$a0 | 4;
                        __$r__$15 = applyc(__$ctx, __$ref);
                        __$ctx.__$a0 = __$l0__$16;
                        return __$r__$15;
                    }(), "(function(d,n){", "d.documentElement.className+=", '" ua_svg_"+(d[n]&&d[n]("http://www.w3.org/2000/svg","svg").createSVGRect?"yes":"no");', '})(document,"createElementNS");' ];
                }
                return [ "(function(e,c){", 'e[c]=e[c].replace(/(ua_js_)no/g,"$1yes");', '})(document.documentElement,"className");' ];
            }
        }
        return __$ctx.ctx.content;
    } else if (__$t === "default") {
        var __$t = $$block;
        if (__$t === "page") {
            if (!$$elem && !__$ctx._pageInit && (__$ctx.__$a0 & 2) === 0) {
                var __$r = __$b27(__$ctx, __$ref);
                if (__$r !== __$ref) return __$r;
            }
            var __$t = $$elem;
            if (__$t === "css") {
                var __$t = __$ctx.ctx.hasOwnProperty("ie");
                if (__$t) {
                    if (__$ctx.ctx.ie === true && (__$ctx.__$a0 & 8) === 0) {
                        var __$r = __$b28(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                    if ((__$ctx.__$a0 & 16) === 0) {
                        var __$r = __$b29(__$ctx, __$ref);
                        if (__$r !== __$ref) return __$r;
                    }
                }
            }
        }
        var __$r = __$b30(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    } else if (__$t === "js") {
        return undefined;
    } else if (__$t === "mix") {
        return undefined;
    } else if (__$t === "cls") {
        return undefined;
    } else if (__$t === "") {
        if (__$ctx.ctx && __$ctx.ctx._vow && (__$ctx.__$a0 & 32) === 0) {
            var __$r = __$b34(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isSimple(__$ctx.ctx)) {
            var __$r = __$b35(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (!__$ctx.ctx) {
            var __$r = __$b36(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        if (__$ctx.isArray(__$ctx.ctx)) {
            var __$r = __$b37(__$ctx, __$ref);
            if (__$r !== __$ref) return __$r;
        }
        var __$r = __$b38(__$ctx, __$ref);
        if (__$r !== __$ref) return __$r;
    }
    throw new Error("Match failed, no templates found");
}

[ function(exports, context) {
    var undef, BEM_ = {}, toString = Object.prototype.toString, slice = Array.prototype.slice, isArray = Array.isArray || function(obj) {
        return toString.call(obj) === "[object Array]";
    }, SHORT_TAGS = {
        area: 1,
        base: 1,
        br: 1,
        col: 1,
        command: 1,
        embed: 1,
        hr: 1,
        img: 1,
        input: 1,
        keygen: 1,
        link: 1,
        meta: 1,
        param: 1,
        source: 1,
        wbr: 1
    }, resetApplyNext = context.resetApplyNext || function() {};
    (function(BEM, undefined) {
        var MOD_DELIM = "_", ELEM_DELIM = "__", NAME_PATTERN = "[a-zA-Z0-9-]+";
        function buildModPostfix(modName, modVal) {
            var res = MOD_DELIM + modName;
            if (modVal !== true) res += MOD_DELIM + modVal;
            return res;
        }
        function buildBlockClass(name, modName, modVal) {
            var res = name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        function buildElemClass(block, name, modName, modVal) {
            var res = buildBlockClass(block) + ELEM_DELIM + name;
            if (modVal) res += buildModPostfix(modName, modVal);
            return res;
        }
        BEM.INTERNAL = {
            NAME_PATTERN: NAME_PATTERN,
            MOD_DELIM: MOD_DELIM,
            ELEM_DELIM: ELEM_DELIM,
            buildModPostfix: buildModPostfix,
            buildClass: function(block, elem, modName, modVal) {
                var typeOfModName = typeof modName;
                if (typeOfModName === "string" || typeOfModName === "boolean") {
                    var typeOfModVal = typeof modVal;
                    if (typeOfModVal !== "string" && typeOfModVal !== "boolean") {
                        modVal = modName;
                        modName = elem;
                        elem = undef;
                    }
                } else if (typeOfModName !== "undefined") {
                    modName = undef;
                } else if (elem && typeof elem !== "string") {
                    elem = undef;
                }
                if (!(elem || modName)) {
                    return block;
                }
                return elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal);
            },
            buildModsClasses: function(block, elem, mods) {
                var res = "";
                if (mods) {
                    var modName;
                    for (modName in mods) {
                        if (!mods.hasOwnProperty(modName)) continue;
                        var modVal = mods[modName];
                        if (!modVal && modVal !== 0) continue;
                        typeof modVal !== "boolean" && (modVal += "");
                        res += " " + (elem ? buildElemClass(block, elem, modName, modVal) : buildBlockClass(block, modName, modVal));
                    }
                }
                return res;
            },
            buildClasses: function(block, elem, mods) {
                var res = "";
                res += elem ? buildElemClass(block, elem) : buildBlockClass(block);
                res += this.buildModsClasses(block, elem, mods);
                return res;
            }
        };
    })(BEM_);
    context.BEMContext = BEMContext;
    function BEMContext(context, apply_) {
        this.ctx = typeof context === "undefined" ? "" : context;
        this.apply = apply_;
        this._str = "";
        var _this = this;
        this._buf = {
            push: function() {
                var chunks = slice.call(arguments).join("");
                _this._str += chunks;
            },
            join: function() {
                return this._str;
            }
        };
        this._ = this;
        this._start = true;
        this._mode = "";
        this._listLength = 0;
        this._notNewList = false;
        this.position = 0;
        this.block = undef;
        this.elem = undef;
        this.mods = undef;
        this.elemMods = undef;
        this._resetApplyNext = resetApplyNext;
    }
    BEMContext.prototype.isArray = isArray;
    BEMContext.prototype.isSimple = function isSimple(obj) {
        if (!obj || obj === true) return true;
        var t = typeof obj;
        return t === "string" || t === "number";
    };
    BEMContext.prototype.isShortTag = function isShortTag(t) {
        return SHORT_TAGS.hasOwnProperty(t);
    };
    BEMContext.prototype.extend = function extend(o1, o2) {
        if (!o1 || !o2) return o1 || o2;
        var res = {}, n;
        for (n in o1) o1.hasOwnProperty(n) && (res[n] = o1[n]);
        for (n in o2) o2.hasOwnProperty(n) && (res[n] = o2[n]);
        return res;
    };
    var cnt = 0, id = +new Date(), expando = "__" + id, get = function() {
        return "uniq" + id + ++cnt;
    };
    BEMContext.prototype.identify = function(obj, onlyGet) {
        if (!obj) return get();
        if (onlyGet || obj[expando]) {
            return obj[expando];
        } else {
            return obj[expando] = get();
        }
    };
    BEMContext.prototype.xmlEscape = function xmlEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");
    };
    BEMContext.prototype.attrEscape = function attrEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/"/g, "&quot;");
    };
    BEMContext.prototype.jsAttrEscape = function jsAttrEscape(str) {
        return (str + "").replace(/&/g, "&amp;").replace(/'/g, "&#39;");
    };
    BEMContext.prototype.BEM = BEM_;
    BEMContext.prototype.isFirst = function isFirst() {
        return this.position === 1;
    };
    BEMContext.prototype.isLast = function isLast() {
        return this.position === this._listLength;
    };
    BEMContext.prototype.generateId = function generateId() {
        return this.identify(this.ctx);
    };
    var oldApply = exports.apply;
    exports.apply = BEMContext.apply = function BEMContext_apply(context) {
        var ctx = new BEMContext(context || this, oldApply);
        ctx.apply();
        return ctx._str;
    };
    BEMContext.prototype.reapply = BEMContext.apply;
}, function(exports, context) {
    var BEMContext = exports.BEMContext || context.BEMContext;
    if (!BEMContext) {
        throw Error("Seems like you have no base templates from i-bem.bemhtml");
    }
    BEMContext.prototype.require = function(lib) {
        return __bem_xjst_libs__[lib];
    };
} ].forEach(function(fn) {
    fn(exports, this);
}, {
    recordExtensions: function(ctx) {
        ctx["__$a0"] = 0;
        ctx["_pageInit"] = undefined;
        ctx["_mode"] = undefined;
        ctx["ctx"] = undefined;
        ctx["_str"] = undefined;
        ctx["block"] = undefined;
        ctx["elem"] = undefined;
        ctx["_notNewList"] = undefined;
        ctx["position"] = undefined;
        ctx["_listLength"] = undefined;
        ctx["_currBlock"] = undefined;
        ctx["mods"] = undefined;
        ctx["elemMods"] = undefined;
    },
    resetApplyNext: function(ctx) {
        ctx["__$a0"] = 0;
    }
});

function __$b2(__$ctx, __$ref) {
    var attrs__$17 = {};
    if (__$ctx.ctx.url) {
        attrs__$17.src = __$ctx.ctx.url;
    } else if (__$ctx._nonceCsp) {
        attrs__$17.nonce = __$ctx._nonceCsp;
    }
    return attrs__$17;
}

function __$b27(__$ctx, __$ref) {
    var ctx__$3 = __$ctx.ctx;
    __$ctx._nonceCsp = ctx__$3.nonce;
    var __$r__$5;
    var __$l0__$6 = __$ctx._pageInit;
    __$ctx._pageInit = true;
    var __$r__$8;
    var __$l1__$9 = $$mode;
    $$mode = "";
    var __$l2__$10 = __$ctx.ctx;
    __$ctx.ctx = [ ctx__$3.doctype || "<!DOCTYPE html>", {
        tag: "html",
        cls: "ua_js_no",
        content: [ {
            elem: "head",
            content: [ {
                tag: "meta",
                attrs: {
                    charset: "utf-8"
                }
            }, ctx__$3.uaCompatible === false ? "" : {
                tag: "meta",
                attrs: {
                    "http-equiv": "X-UA-Compatible",
                    content: ctx__$3.uaCompatible || "IE=edge"
                }
            }, {
                tag: "title",
                content: ctx__$3.title
            }, {
                block: "ua",
                attrs: {
                    nonce: ctx__$3.nonce
                }
            }, ctx__$3.head, ctx__$3.styles, ctx__$3.favicon ? {
                elem: "favicon",
                url: ctx__$3.favicon
            } : "" ]
        }, ctx__$3 ]
    } ];
    var __$r__$12;
    var __$l3__$13 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 2;
    __$r__$12 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l3__$13;
    __$r__$8 = __$r__$12;
    $$mode = __$l1__$9;
    __$ctx.ctx = __$l2__$10;
    __$r__$5 = __$r__$8;
    __$ctx._pageInit = __$l0__$6;
    return __$r__$5;
}

function __$b28(__$ctx, __$ref) {
    var url__$18 = __$ctx.ctx.url;
    var __$r__$20;
    var __$l0__$21 = $$mode;
    $$mode = "";
    var __$l1__$22 = __$ctx.ctx;
    __$ctx.ctx = [ 6, 7, 8, 9 ].map(function(v) {
        return {
            elem: "css",
            url: url__$18 + ".ie" + v + ".css",
            ie: "IE " + v
        };
    });
    var __$r__$24;
    var __$l2__$25 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 8;
    __$r__$24 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$25;
    __$r__$20 = __$r__$24;
    $$mode = __$l0__$21;
    __$ctx.ctx = __$l1__$22;
    return __$r__$20;
}

function __$b29(__$ctx, __$ref) {
    var ie__$26 = __$ctx.ctx.ie, hideRule__$27 = !ie__$26 ? [ "gt IE 9", "<!-->", "<!--" ] : ie__$26 === "!IE" ? [ ie__$26, "<!-->", "<!--" ] : [ ie__$26, "", "" ];
    var __$r__$29;
    var __$l0__$30 = $$mode;
    $$mode = "";
    var __$l1__$31 = __$ctx.ctx;
    __$ctx.ctx = [ "<!--[if " + hideRule__$27[0] + "]>" + hideRule__$27[1], __$ctx.ctx, hideRule__$27[2] + "<![endif]-->" ];
    var __$r__$33;
    var __$l2__$34 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 16;
    __$r__$33 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$34;
    __$r__$29 = __$r__$33;
    $$mode = __$l0__$30;
    __$ctx.ctx = __$l1__$31;
    return __$r__$29;
}

function __$b30(__$ctx, __$ref) {
    var BEM_INTERNAL__$35 = __$ctx.BEM.INTERNAL, ctx__$36 = __$ctx.ctx, isBEM__$37, tag__$38, res__$39;
    var __$r__$41;
    var __$l0__$42 = __$ctx._str;
    __$ctx._str = "";
    var vBlock__$43 = $$block;
    var __$r__$45;
    var __$l1__$46 = $$mode;
    $$mode = "tag";
    __$r__$45 = applyc(__$ctx, __$ref);
    $$mode = __$l1__$46;
    tag__$38 = __$r__$45;
    typeof tag__$38 !== "undefined" || (tag__$38 = ctx__$36.tag);
    typeof tag__$38 !== "undefined" || (tag__$38 = "div");
    if (tag__$38) {
        var jsParams__$47, js__$48;
        if (vBlock__$43 && ctx__$36.js !== false) {
            var __$r__$49;
            var __$l2__$50 = $$mode;
            $$mode = "js";
            __$r__$49 = applyc(__$ctx, __$ref);
            $$mode = __$l2__$50;
            js__$48 = __$r__$49;
            js__$48 = js__$48 ? __$ctx.extend(ctx__$36.js, js__$48 === true ? {} : js__$48) : ctx__$36.js === true ? {} : ctx__$36.js;
            js__$48 && ((jsParams__$47 = {})[BEM_INTERNAL__$35.buildClass(vBlock__$43, ctx__$36.elem)] = js__$48);
        }
        __$ctx._str += "<" + tag__$38;
        var __$r__$51;
        var __$l3__$52 = $$mode;
        $$mode = "bem";
        __$r__$51 = applyc(__$ctx, __$ref);
        $$mode = __$l3__$52;
        isBEM__$37 = __$r__$51;
        typeof isBEM__$37 !== "undefined" || (isBEM__$37 = typeof ctx__$36.bem !== "undefined" ? ctx__$36.bem : ctx__$36.block || ctx__$36.elem);
        var __$r__$54;
        var __$l4__$55 = $$mode;
        $$mode = "cls";
        __$r__$54 = applyc(__$ctx, __$ref);
        $$mode = __$l4__$55;
        var cls__$53 = __$r__$54;
        cls__$53 || (cls__$53 = ctx__$36.cls);
        var addJSInitClass__$56 = ctx__$36.block && jsParams__$47 && !ctx__$36.elem;
        if (isBEM__$37 || cls__$53) {
            __$ctx._str += ' class="';
            if (isBEM__$37) {
                __$ctx._str += BEM_INTERNAL__$35.buildClasses(vBlock__$43, ctx__$36.elem, ctx__$36.elemMods || ctx__$36.mods);
                var __$r__$58;
                var __$l5__$59 = $$mode;
                $$mode = "mix";
                __$r__$58 = applyc(__$ctx, __$ref);
                $$mode = __$l5__$59;
                var mix__$57 = __$r__$58;
                ctx__$36.mix && (mix__$57 = mix__$57 ? [].concat(mix__$57, ctx__$36.mix) : ctx__$36.mix);
                if (mix__$57) {
                    var visited__$60 = {}, visitedKey__$61 = function(block, elem) {
                        return (block || "") + "__" + (elem || "");
                    };
                    visited__$60[visitedKey__$61(vBlock__$43, $$elem)] = true;
                    __$ctx.isArray(mix__$57) || (mix__$57 = [ mix__$57 ]);
                    for (var i__$62 = 0; i__$62 < mix__$57.length; i__$62++) {
                        var mixItem__$63 = mix__$57[i__$62];
                        typeof mixItem__$63 === "string" && (mixItem__$63 = {
                            block: mixItem__$63
                        });
                        var hasItem__$64 = mixItem__$63.block && (vBlock__$43 !== ctx__$36.block || mixItem__$63.block !== vBlock__$43) || mixItem__$63.elem, mixBlock__$65 = mixItem__$63.block || mixItem__$63._block || $$block, mixElem__$66 = mixItem__$63.elem || mixItem__$63._elem || $$elem;
                        hasItem__$64 && (__$ctx._str += " ");
                        __$ctx._str += BEM_INTERNAL__$35[hasItem__$64 ? "buildClasses" : "buildModsClasses"](mixBlock__$65, mixItem__$63.elem || mixItem__$63._elem || (mixItem__$63.block ? undefined : $$elem), mixItem__$63.elemMods || mixItem__$63.mods);
                        if (mixItem__$63.js) {
                            (jsParams__$47 || (jsParams__$47 = {}))[BEM_INTERNAL__$35.buildClass(mixBlock__$65, mixItem__$63.elem)] = mixItem__$63.js === true ? {} : mixItem__$63.js;
                            addJSInitClass__$56 || (addJSInitClass__$56 = mixBlock__$65 && !mixItem__$63.elem);
                        }
                        if (hasItem__$64 && !visited__$60[visitedKey__$61(mixBlock__$65, mixElem__$66)]) {
                            visited__$60[visitedKey__$61(mixBlock__$65, mixElem__$66)] = true;
                            var __$r__$68;
                            var __$l6__$69 = $$mode;
                            $$mode = "mix";
                            var __$l7__$70 = $$block;
                            $$block = mixBlock__$65;
                            var __$l8__$71 = $$elem;
                            $$elem = mixElem__$66;
                            __$r__$68 = applyc(__$ctx, __$ref);
                            $$mode = __$l6__$69;
                            $$block = __$l7__$70;
                            $$elem = __$l8__$71;
                            var nestedMix__$67 = __$r__$68;
                            if (nestedMix__$67) {
                                Array.isArray(nestedMix__$67) || (nestedMix__$67 = [ nestedMix__$67 ]);
                                for (var j__$72 = 0; j__$72 < nestedMix__$67.length; j__$72++) {
                                    var nestedItem__$73 = nestedMix__$67[j__$72];
                                    if (!nestedItem__$73.block && !nestedItem__$73.elem || !visited__$60[visitedKey__$61(nestedItem__$73.block, nestedItem__$73.elem)]) {
                                        nestedItem__$73._block = mixBlock__$65;
                                        nestedItem__$73._elem = mixElem__$66;
                                        mix__$57.splice(i__$62 + 1, 0, nestedItem__$73);
                                    }
                                }
                            }
                        }
                    }
                }
            }
            cls__$53 && (__$ctx._str += isBEM__$37 ? " " + cls__$53 : cls__$53);
            __$ctx._str += addJSInitClass__$56 ? ' i-bem"' : '"';
        }
        if (isBEM__$37 && jsParams__$47) {
            __$ctx._str += " data-bem='" + __$ctx.jsAttrEscape(JSON.stringify(jsParams__$47)) + "'";
        }
        var __$r__$75;
        var __$l9__$76 = $$mode;
        $$mode = "attrs";
        __$r__$75 = applyc(__$ctx, __$ref);
        $$mode = __$l9__$76;
        var attrs__$74 = __$r__$75;
        attrs__$74 = __$ctx.extend(attrs__$74, ctx__$36.attrs);
        if (attrs__$74) {
            var name__$77, attr__$78;
            for (name__$77 in attrs__$74) {
                attr__$78 = attrs__$74[name__$77];
                if (typeof attr__$78 === "undefined") continue;
                __$ctx._str += " " + name__$77 + '="' + __$ctx.attrEscape(__$ctx.isSimple(attr__$78) ? attr__$78 : __$ctx.reapply(attr__$78)) + '"';
            }
        }
    }
    if (__$ctx.isShortTag(tag__$38)) {
        __$ctx._str += "/>";
    } else {
        tag__$38 && (__$ctx._str += ">");
        var __$r__$80;
        var __$l10__$81 = $$mode;
        $$mode = "content";
        __$r__$80 = applyc(__$ctx, __$ref);
        $$mode = __$l10__$81;
        var content__$79 = __$r__$80;
        if (content__$79 || content__$79 === 0) {
            __$ctx._resetApplyNext(__$wrapThis(__$ctx));
            isBEM__$37 = vBlock__$43 || $$elem;
            var __$r__$82;
            var __$l11__$83 = $$mode;
            $$mode = "";
            var __$l12__$84 = __$ctx._notNewList;
            __$ctx._notNewList = false;
            var __$l13__$85 = __$ctx.position;
            __$ctx.position = isBEM__$37 ? 1 : __$ctx.position;
            var __$l14__$86 = __$ctx._listLength;
            __$ctx._listLength = isBEM__$37 ? 1 : __$ctx._listLength;
            var __$l15__$87 = __$ctx.ctx;
            __$ctx.ctx = content__$79;
            __$r__$82 = applyc(__$ctx, __$ref);
            $$mode = __$l11__$83;
            __$ctx._notNewList = __$l12__$84;
            __$ctx.position = __$l13__$85;
            __$ctx._listLength = __$l14__$86;
            __$ctx.ctx = __$l15__$87;
        }
        tag__$38 && (__$ctx._str += "</" + tag__$38 + ">");
    }
    res__$39 = __$ctx._str;
    __$r__$41 = undefined;
    __$ctx._str = __$l0__$42;
    __$ctx._buf.push(res__$39);
    return;
}

function __$b34(__$ctx, __$ref) {
    var __$r__$89;
    var __$l0__$90 = $$mode;
    $$mode = "";
    var __$l1__$91 = __$ctx.ctx;
    __$ctx.ctx = __$ctx.ctx._value;
    var __$r__$93;
    var __$l2__$94 = __$ctx.__$a0;
    __$ctx.__$a0 = __$ctx.__$a0 | 32;
    __$r__$93 = applyc(__$ctx, __$ref);
    __$ctx.__$a0 = __$l2__$94;
    __$r__$89 = __$r__$93;
    $$mode = __$l0__$90;
    __$ctx.ctx = __$l1__$91;
    return;
}

function __$b35(__$ctx, __$ref) {
    __$ctx._listLength--;
    var ctx__$95 = __$ctx.ctx;
    if (ctx__$95 && ctx__$95 !== true || ctx__$95 === 0) {
        __$ctx._str += ctx__$95 + "";
    }
    return;
}

function __$b36(__$ctx, __$ref) {
    __$ctx._listLength--;
    return;
}

function __$b37(__$ctx, __$ref) {
    var ctx__$96 = __$ctx.ctx, len__$97 = ctx__$96.length, i__$98 = 0, prevPos__$99 = __$ctx.position, prevNotNewList__$100 = __$ctx._notNewList;
    if (prevNotNewList__$100) {
        __$ctx._listLength += len__$97 - 1;
    } else {
        __$ctx.position = 0;
        __$ctx._listLength = len__$97;
    }
    __$ctx._notNewList = true;
    while (i__$98 < len__$97) (function __$lb__$101() {
        var __$r__$102;
        var __$l0__$103 = __$ctx.ctx;
        __$ctx.ctx = ctx__$96[i__$98++];
        __$r__$102 = applyc(__$ctx, __$ref);
        __$ctx.ctx = __$l0__$103;
        return __$r__$102;
    })();
    prevNotNewList__$100 || (__$ctx.position = prevPos__$99);
    return;
}

function __$b38(__$ctx, __$ref) {
    __$ctx.ctx || (__$ctx.ctx = {});
    var vBlock__$104 = __$ctx.ctx.block, vElem__$105 = __$ctx.ctx.elem, block__$106 = __$ctx._currBlock || $$block;
    var __$r__$108;
    var __$l0__$109 = $$mode;
    $$mode = "default";
    var __$l1__$110 = $$block;
    $$block = vBlock__$104 || (vElem__$105 ? block__$106 : undefined);
    var __$l2__$111 = __$ctx._currBlock;
    __$ctx._currBlock = vBlock__$104 || vElem__$105 ? undefined : block__$106;
    var __$l3__$112 = $$elem;
    $$elem = vElem__$105;
    var __$l4__$113 = $$mods;
    $$mods = vBlock__$104 ? __$ctx.ctx.mods || (__$ctx.ctx.mods = {}) : $$mods;
    var __$l5__$114 = $$elemMods;
    $$elemMods = __$ctx.ctx.elemMods || {};
    $$block || $$elem ? __$ctx.position = (__$ctx.position || 0) + 1 : __$ctx._listLength--;
    applyc(__$ctx, __$ref);
    __$r__$108 = undefined;
    $$mode = __$l0__$109;
    $$block = __$l1__$110;
    __$ctx._currBlock = __$l2__$111;
    $$elem = __$l3__$112;
    $$mods = __$l4__$113;
    $$elemMods = __$l5__$114;
    return;
}

function __$wrapThis(ctx) {
    ctx._mode = $$mode;
    ctx.block = $$block;
    ctx.elem = $$elem;
    ctx.elemMods = $$elemMods;
    ctx.mods = $$mods;
    return ctx;
}


    return exports;
};

var defineAsGlobal = true;
if(typeof module === "object" && typeof module.exports === "object") {
    exports["BEMHTML"] = buildBemXjst({}, {});
    defineAsGlobal = false;
}
if(typeof modules === "object") {
    modules.define("BEMHTML", [], function(provide) {
        provide(buildBemXjst({}, {}));
    });
    defineAsGlobal = false;
}
if(defineAsGlobal) {
    global["BEMHTML"] = buildBemXjst({}, {});
}
})(this);