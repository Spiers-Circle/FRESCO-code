(function (e, t) {
    if (typeof exports === "object" && typeof module === "object") {
        module.exports = t();
    } else if (typeof define === "function" && define.amd) {
        define([], t);
    } else if (typeof exports === "object") {
        exports.zCarousel = t();
    } else {
        e.zCarousel = t();
    }
})(window, function () {
    return (n = {}, e.m = t = [
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            n(1);
            var r = n(6);
            t.default = r.zCarousel;
        },
        function (e, t, n) {
            var r = n(2);
            "string" == typeof r && (r = [[e.i, r, ""]]);
            n(4)(r, { hmr: !0, transform: void 0, insertInto: void 0 });
            r.locals && (e.exports = r.locals);
        },
        function (e, t, n) {
            e.exports = n(3)(!1);
            e.push([e.i, '.z-carousel-wrapper .z-carousel > ul { margin: 0; padding: 0; list-style: none; }', '']);
        },
        function (e, t, n) {
            // Add necessary changes for jQuery 3.x compatibility here
        },
        function (e, t, n) {
            var r, i, o, a = {},
                s = (r = function () {
                    return window && document && document.all && !window.atob;
                }, function () {
                    return void 0 === i && (i = r.apply(this, arguments)), i;
                });
            // Rest of the logic
        },
        function (e, t) {
            e.exports = function (e) {
                var t = "undefined" != typeof window && window.location;
                if (!t) throw new Error("fixUrls requires window.location");
                if (!e || "string" != typeof e) return e;
                var n = t.protocol + "//" + t.host,
                    r = n + t.pathname.replace(/\/[^\/]*$/, "/");
                return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi, function (e, t) {
                    var i, o = t.trim().replace(/^"(.*)"$/, function (e, t) {
                        return t;
                    }).replace(/^'(.*)'$/, function (e, t) {
                        return t;
                    });
                    return /^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(o) ? e : (i = 0 === o.indexOf("//") ? o : 0 === o.indexOf("/") ? n + o : r + o.replace(/^\.\//, ""), "url(" + JSON.stringify(i) + ")");
                });
            };
        },
        function (e, t, n) {
            "use strict";
            Object.defineProperty(t, "__esModule", { value: !0 });
            function r(e, t) {
                for (var n = 0; n < t.length; n++) {
                    var r = t[n];
                    r.enumerable = r.enumerable || !1;
                    r.configurable = !0;
                    "value" in r && (r.writable = !0);
                    Object.defineProperty(e, r.key, r);
                }
            }
            function i(e) {
                !(function (e, t) {
                    if (!(e instanceof i)) throw new TypeError("Cannot call a class as a function");
                })(this);
                this.jQueryCarousel = e;
                this.items = null;
                this.paginators = null;
                this.currentIndex = 0;
                this.timer = null;
            }
            t.zCarousel = (function (e, t, n) {
                t && r(e.prototype, t);
                n && r(e, n);
            })(i, [{
                key: "registerCarousel",
                value: function () {
                    this.loadDatas();
                    var e = this.loadItems();
                    this.initItems(e, 0);
                    if (1 === this.jQueryCarousel.data("pagination")) this.addPagination();
                    e && 1 < e.length && this.registerCarouselTimer();
                }
            },
            {
                key: "registerCarouselTimer",
                value: function () {
                    setTimeout(function (e) {
                        e.deregisterCarouselTimer();
                        e.timer = setInterval(e.showNextItem, e.interval, e);
                    }, this.delay, this);
                }
            },
            {
                key: "deregisterCarouselTimer",
                value: function () {
                    if (this.timer !== null) {
                        clearInterval(this.timer);
                        this.timer = null;
                    }
                }
            },
            {
                key: "showNextItem",
                value: function (e) {
                    var t = e.currentIndex + 1;
                    if (t >= e.items.length) t = 0;
                    e.showHideItems(e.items, t);
                }
            },
            {
                key: "initItems",
                value: function (e, t) {
                    if (e) {
                        var n = this;
                        this.currentIndex = t;
                        e.each(function (e) {
                            if (e !== t) n.hideItem(e, $(this));
                            else n.showItem(e, $(this));
                        });
                    }
                }
            },
            {
                key: "hideItem",
                value: function (e, t) {
                    if (t) {
                        t.css("display", "none");
                        var n = this.getPaginatorAtIndex(e);
                        n && n.removeClass("selected");
                    }
                }
            },
            {
                key: "showItem",
                value: function (e, t) {
                    if (t) {
                        this.enterAnimation ? (t.css("opacity", "0"), t.css("display", ""), t.addClass("animated"), t.addClass(this.enterAnimation)) : t.fadeIn(this.animateSpeed);
                        var n = this.getPaginatorAtIndex(e);
                        n && n.addClass("selected");
                    }
                }
            },
            {
                key: "getPaginatorAtIndex",
                value: function (e) {
                    return this.paginators ? $(this.paginators.get(e)) : null;
                }
            }], i);
        }
    ], e.c = n, e.d = function (t, n, r) {
        e.o(t, n) || Object.defineProperty(t, n, { enumerable: !0, get: r });
    }, e.r = function (e) {
        if (typeof Symbol !== "undefined" && Symbol.toStringTag) Object.defineProperty(e, Symbol.toStringTag, { value: "Module" });
        Object.defineProperty(e, "__esModule", { value: !0 });
    }, e.t = function (t, n) {
        if (1 & n && (t = e(t)), 8 & n) return t;
        if (4 & n && "object" == typeof t && t && t.__esModule) return t;
        var r = Object.create(null);
        if (e.r(r), Object.defineProperty(r, "default", { enumerable: !0, value: t }), 2 & n && "string" != typeof t) for (var i in t) e.d(r, i, function (e) { return t[e]; }.bind(null, i));
        return r;
    }, e.n = function (t) {
        var n = t && t.__esModule ? function () { return t.default; } : function () { return t; };
        return e.d(n, "a", n), n;
    }, e.o = function (e, t) {
        return Object.prototype.hasOwnProperty.call(e, t);
    }, e.p = "", e(e.s = 0)).default;

    // Initialize the carousels after the document is ready
    $(document).ready(function () {
        i.registerCarousels();
    });
});
