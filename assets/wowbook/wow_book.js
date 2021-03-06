/*! jQuery Browser - v0.1.0 - 3/23/2012
 * https://github.com/jquery/jquery-browser
 * Copyright (c) 2012 John Resig; Licensed MIT */
/*
    THIS IS A STRIPPED VERSION OF THE ORIGINAL LIBRARY!
*/
/* Modernizr 2.5.3 (Custom Build) | MIT & BSD
 * Build: http://www.modernizr.com/download/#-csstransforms3d-prefixed-teststyles-testprop-testallprops-prefixes-domprefixes
 */
/*!
 * jQuery hashchange event - v1.3 - 7/21/2010
 * http://benalman.com/projects/jquery-hashchange-plugin/
 * 
 * Copyright (c) 2010 "Cowboy" Ben Alman
 * Dual licensed under the MIT and GPL licenses.
 * http://benalman.com/about/license/
 */
/*! Hammer.JS - v2.0.4 - 2015-10-30
 * http://hammerjs.github.io/
 *
 * Copyright (c) 2015 Jorik Tangelder;
 * Licensed under the  license */
/*
 * @name wowBook
 *
 * @author Marcio Aguiar
 * @version 1.2.5
 * @requires jQuery v1.7.0+
 *
 * Copyright 2010 Marcio Aguiar. All rights reserved.
 *
 * To use this file you must to buy a license at http://codecanyon.net/user/maguiar01/portfolio
 *
 */
(function(e) {
    if (!e.browser) {
        var p;
        p = navigator.userAgent || "";
        e.uaMatch = function(e) {
            e = e.toLowerCase();
            e = /(edge)[ \/]([\w.]+)/.exec(e) || /(chrome)[ \/]([\w.]+)/.exec(e) || /(webkit)[ \/]([\w.]+)/.exec(e) || /(opera)(?:.*version)?[ \/]([\w.]+)/.exec(e) || /(msie) ([\w.]+)/.exec(e) || 0 > e.indexOf("compatible") && /(mozilla)(?:.*? rv:([\w.]+))?/.exec(e) || [];
            return {
                browser: e[1] || "",
                version: e[2] || "0"
            }
        };
        p = e.uaMatch(p);
        e.browser = {};
        p.browser && (e.browser[p.browser] = !0, e.browser.version = p.version);
        e.browser.webkit && (e.browser.safari = !0)
    }
})(jQuery);
jQuery.easing.jswing = jQuery.easing.swing;
jQuery.extend(jQuery.easing, {
    easeOutCubic: function(e, p, v, t, n) {
        return t * ((p = p / n - 1) * p * p + 1) + v
    },
    easeOutExpo: function(e, p, v, t, n) {
        return p == n ? v + t : t * (-Math.pow(2, -10 * p / n) + 1) + v
    }
});
window.Modernizr = function(e, p, v) {
    function t(a, b) {
        for (var c in a)
            if (A[a[c]] !== v) return "pfx" == b ? a[c] : !0;
        return !1
    }

    function n(a, b, c) {
        var d = a.charAt(0).toUpperCase() + a.substr(1),
            g = (a + " " + z.join(d + " ") + d).split(" ");
        if ("string" === typeof b || "undefined" === typeof b) b = t(g, b);
        else a: {
            g = (a + " " + B.join(d + " ") + d).split(" "), a = g;
            for (var e in a)
                if (d = b[a[e]], d !== v) {
                    b = !1 === c ? a[e] : "function" === typeof d ? d.bind(c || b) : d;
                    break a
                }
            b = !1
        }
        return b
    }
    var m = {},
        q = p.documentElement,
        k = p.createElement("modernizr"),
        A = k.style;
    e = " -webkit- -moz- -o- -ms- ".split(" ");
    var z = ["Webkit", "Moz", "O", "ms"],
        B = ["webkit", "moz", "o", "ms"],
        k = {},
        D = [],
        a = D.slice,
        b, c = function(a, b, c, d) {
            var g, e, f, m = p.createElement("div"),
                n = p.body,
                k = n ? n : p.createElement("body");
            if (parseInt(c, 10))
                for (; c--;) f = p.createElement("div"), f.id = d ? d[c] : "modernizr" + (c + 1), m.appendChild(f);
            return g = ["&#173;<style>", a, "</style>"].join(""), m.id = "modernizr", (n ? m : k).innerHTML += g, k.appendChild(m), n || (k.style.background = "", q.appendChild(k)), e = b(m, a), n ? m.parentNode.removeChild(m) : k.parentNode.removeChild(k), !!e
        },
        d = {}.hasOwnProperty,
        g;
    "undefined" === typeof d || "undefined" === typeof d.call ? g = function(a, b) {
        return b in a && "undefined" === typeof a.constructor.prototype[b]
    } : g = function(a, b) {
        return d.call(a, b)
    };
    Function.prototype.bind || (Function.prototype.bind = function(b) {
        var c = this;
        if ("function" != typeof c) throw new TypeError;
        var d = a.call(arguments, 1),
            g = function() {
                if (this instanceof g) {
                    var e = function() {};
                    e.prototype = c.prototype;
                    var e = new e,
                        f = c.apply(e, d.concat(a.call(arguments)));
                    return Object(f) === f ? f : e
                }
                return c.apply(b, d.concat(a.call(arguments)))
            };
        return g
    });
    (function(a, b) {
        var d = a.join(""),
            g = b.length;
        c(d, function(a, b) {
            for (var c = a.childNodes, d = {}; g--;) d[c[g].id] = c[g];
            m.csstransforms3d = 9 === (d.csstransforms3d && d.csstransforms3d.offsetLeft) && 3 === d.csstransforms3d.offsetHeight
        }, g, b)
    })([, ["@media (", e.join("transform-3d),("), "modernizr){#csstransforms3d{left:9px;position:absolute;height:3px;}}"].join("")], [, "csstransforms3d"]);
    k.csstransforms3d = function() {
        var a = !!n("perspective");
        return a && "webkitPerspective" in q.style && (a = m.csstransforms3d), a
    };
    for (var f in k) g(k, f) && (b = f.toLowerCase(), m[b] = k[f](), D.push((m[b] ? "" : "no-") + b));
    A.cssText = "";
    return k = null, m._version = "2.5.3", m._prefixes = e, m._domPrefixes = B, m._cssomPrefixes = z, m.testProp = function(a) {
        return t([a])
    }, m.testAllProps = n, m.testStyles = c, m.prefixed = function(a, b, c) {
        return b ? n(a, b, c) : n(a, "pfx")
    }, m
}(this, this.document);
(function(e, p, v) {
    function t(e) {
        e = e || location.href;
        return "#" + e.replace(/^[^#]*#?(.*)$/, "$1")
    }
    "$:nomunge";
    var n = document,
        m, q = e.event.special,
        k = n.documentMode,
        A = "onhashchange" in p && (k === v || 7 < k);
    e.fn.hashchange = function(e) {
        return e ? this.bind("hashchange", e) : this.trigger("hashchange")
    };
    e.fn.hashchange.delay = 50;
    q.hashchange = e.extend(q.hashchange, {
        setup: function() {
            if (A) return !1;
            e(m.start)
        },
        teardown: function() {
            if (A) return !1;
            e(m.stop)
        }
    });
    m = function() {
        function m() {
            var b = t(),
                f = d(a);
            b !== a ? (c(a = b, f), e(p).trigger("hashchange")) :
                f !== a && (location.href = location.href.replace(/#.*/, "") + f);
            q = setTimeout(m, e.fn.hashchange.delay)
        }
        var k = {},
            q, a = t(),
            b = function(a) {
                return a
            },
            c = b,
            d = b;
        k.start = function() {
            q || m()
        };
        k.stop = function() {
            q && clearTimeout(q);
            q = v
        };
        e.browser.msie && !A && function() {
            var a, f;
            k.start = function() {
                a || (f = (f = e.fn.hashchange.src) && f + t(), a = e('<iframe tabindex="-1" title="empty"/>').hide().one("load", function() {
                    f || c(t());
                    m()
                }).attr("src", f || "javascript:0").insertAfter("body")[0].contentWindow, n.onpropertychange = function() {
                    try {
                        "title" ===
                        event.propertyName && (a.document.title = n.title)
                    } catch (b) {}
                })
            };
            k.stop = b;
            d = function() {
                return t(a.location.href)
            };
            c = function(b, c) {
                var d = a.document,
                    f = e.fn.hashchange.domain;
                b !== c && (d.title = n.title, d.open(), f && d.write('<script>document.domain="' + f + '"\x3c/script>'), d.close(), a.location.hash = b)
            }
        }();
        return k
    }()
})(jQuery, this);
try {
    (function(e, p, v, t) {
        function n(a, b, c) {
            return setTimeout(B(a, c), b)
        }

        function m(a, b, c) {
            return Array.isArray(a) ? (q(a, c[b], c), !0) : !1
        }

        function q(a, b, c) {
            var d;
            if (a)
                if (a.forEach) a.forEach(b, c);
                else if (a.length !== t)
                for (d = 0; d < a.length;) b.call(c, a[d], d, a), d++;
            else
                for (d in a) a.hasOwnProperty(d) && b.call(c, a[d], d, a)
        }

        function k(a, b, c) {
            for (var d = Object.keys(b), e = 0; e < d.length;) {
                if (!c || c && a[d[e]] === t) a[d[e]] = b[d[e]];
                e++
            }
            return a
        }

        function A(a, b) {
            return k(a, b, !0)
        }

        function z(a, b, c) {
            b = b.prototype;
            var d;
            d = a.prototype =
                Object.create(b);
            d.constructor = a;
            d._super = b;
            c && k(d, c)
        }

        function B(a, b) {
            return function() {
                return a.apply(b, arguments)
            }
        }

        function D(a, b) {
            return "function" == typeof a ? a.apply(b ? b[0] || t : t, b) : a
        }

        function a(a, b, c) {
            q(d(b), function(b) {
                a.addEventListener(b, c, !1)
            })
        }

        function b(a, b, c) {
            q(d(b), function(b) {
                a.removeEventListener(b, c, !1)
            })
        }

        function c(a, b) {
            for (; a;) {
                if (a == b) return !0;
                a = a.parentNode
            }
            return !1
        }

        function d(a) {
            return a.trim().split(/\s+/g)
        }

        function g(a, b, c) {
            if (a.indexOf && !c) return a.indexOf(b);
            for (var d = 0; d < a.length;) {
                if (c &&
                    a[d][c] == b || !c && a[d] === b) return d;
                d++
            }
            return -1
        }

        function f(a) {
            return Array.prototype.slice.call(a, 0)
        }

        function h(a, b, c) {
            for (var d = [], e = [], f = 0; f < a.length;) {
                var h = b ? a[f][b] : a[f];
                0 > g(e, h) && d.push(a[f]);
                e[f] = h;
                f++
            }
            c && (d = b ? d.sort(function(a, c) {
                return a[b] > c[b]
            }) : d.sort());
            return d
        }

        function l(a, b) {
            for (var c, d = b[0].toUpperCase() + b.slice(1), e = 0; e < ca.length;) {
                c = (c = ca[e]) ? c + d : b;
                if (c in a) return c;
                e++
            }
            return t
        }

        function w(a) {
            a = a.ownerDocument || a;
            return a.defaultView || a.parentWindow || e
        }

        function r(a, b) {
            var c = this;
            this.manager = a;
            this.callback = b;
            this.element = a.element;
            this.target = a.options.inputTarget;
            this.domHandler = function(b) {
                D(a.options.enable, [a]) && c.handler(b)
            };
            this.init()
        }

        function u(a) {
            var b = a.options.inputClass;
            return new(b ? b : oa ? P : pa ? J : da ? Q : K)(a, na)
        }

        function na(a, b, d) {
            var e, g, f = d.pointers.length,
                h = d.changedPointers.length;
            e = b & 1 && 0 === f - h;
            d.isFirst = !!e;
            d.isFinal = !!(b & 12 && 0 === f - h);
            e && (a.session = {});
            d.eventType = b;
            b = a.session;
            f = d.pointers;
            h = f.length;
            b.firstInput || (b.firstInput = Z(d));
            1 < h && !b.firstMultiple ?
                b.firstMultiple = Z(d) : 1 === h && (b.firstMultiple = !1);
            e = b.firstInput;
            g = (h = b.firstMultiple) ? h.center : e.center;
            var l = d.center = aa(f);
            d.timeStamp = R();
            d.deltaTime = d.timeStamp - e.timeStamp;
            d.angle = S(g, l);
            d.distance = I(g, l);
            e = d.center;
            g = b.offsetDelta || {};
            var l = b.prevDelta || {},
                r = b.prevInput || {};
            if (1 === d.eventType || 4 === r.eventType) l = b.prevDelta = {
                x: r.deltaX || 0,
                y: r.deltaY || 0
            }, g = b.offsetDelta = {
                x: e.x,
                y: e.y
            };
            d.deltaX = l.x + (e.x - g.x);
            d.deltaY = l.y + (e.y - g.y);
            d.offsetDirection = ba(d.deltaX, d.deltaY);
            g = d.deltaTime;
            e = d.deltaX /
                g || 0;
            g = d.deltaY / g || 0;
            d.overallVelocityX = e;
            d.overallVelocityY = g;
            d.overallVelocity = G(e) > G(g) ? e : g;
            h ? (e = h.pointers, e = I(f[0], f[1], L) / I(e[0], e[1], L)) : e = 1;
            d.scale = e;
            h ? (h = h.pointers, f = S(f[1], f[0], L) + S(h[1], h[0], L)) : f = 0;
            d.rotation = f;
            d.maxPointers = b.prevInput ? d.pointers.length > b.prevInput.maxPointers ? d.pointers.length : b.prevInput.maxPointers : d.pointers.length;
            g = b.lastInterval || d;
            f = d.timeStamp - g.timeStamp;
            8 != d.eventType && (25 < f || g.velocity === t) ? (e = d.deltaX - g.deltaX, g = d.deltaY - g.deltaY, l = e / f || 0, r = g / f || 0, f = l, h =
                r, l = G(l) > G(r) ? l : r, e = ba(e, g), b.lastInterval = d) : (l = g.velocity, f = g.velocityX, h = g.velocityY, e = g.direction);
            d.velocity = l;
            d.velocityX = f;
            d.velocityY = h;
            d.direction = e;
            b = a.element;
            c(d.srcEvent.target, b) && (b = d.srcEvent.target);
            d.target = b;
            a.emit("hammer.input", d);
            a.recognize(d);
            a.session.prevInput = d
        }

        function Z(a) {
            for (var b = [], c = 0; c < a.pointers.length;) b[c] = {
                clientX: H(a.pointers[c].clientX),
                clientY: H(a.pointers[c].clientY)
            }, c++;
            return {
                timeStamp: R(),
                pointers: b,
                center: aa(b),
                deltaX: a.deltaX,
                deltaY: a.deltaY
            }
        }

        function aa(a) {
            var b =
                a.length;
            if (1 === b) return {
                x: H(a[0].clientX),
                y: H(a[0].clientY)
            };
            for (var c = 0, d = 0, e = 0; e < b;) c += a[e].clientX, d += a[e].clientY, e++;
            return {
                x: H(c / b),
                y: H(d / b)
            }
        }

        function ba(a, b) {
            return a === b ? 1 : G(a) >= G(b) ? 0 > a ? 2 : 4 : 0 > b ? 8 : 16
        }

        function I(a, b, c) {
            c || (c = ea);
            var d = b[c[0]] - a[c[0]];
            a = b[c[1]] - a[c[1]];
            return Math.sqrt(d * d + a * a)
        }

        function S(a, b, c) {
            c || (c = ea);
            return 180 * Math.atan2(b[c[1]] - a[c[1]], b[c[0]] - a[c[0]]) / Math.PI
        }

        function K() {
            this.evEl = qa;
            this.evWin = ra;
            this.allow = !0;
            this.pressed = !1;
            r.apply(this, arguments)
        }

        function P() {
            this.evEl =
                fa;
            this.evWin = ga;
            r.apply(this, arguments);
            this.store = this.manager.session.pointerEvents = []
        }

        function ha() {
            this.evTarget = "touchstart";
            this.evWin = "touchstart touchmove touchend touchcancel";
            this.started = !1;
            r.apply(this, arguments)
        }

        function J() {
            this.evTarget = sa;
            this.targetIds = {};
            r.apply(this, arguments)
        }

        function ta(a, b) {
            var d = f(a.touches),
                e = this.targetIds;
            if (b & 3 && 1 === d.length) return e[d[0].identifier] = !0, [d, d];
            var g, l = f(a.changedTouches),
                r = [],
                w = this.target;
            g = d.filter(function(a) {
                return c(a.target, w)
            });
            if (1 ===
                b)
                for (d = 0; d < g.length;) e[g[d].identifier] = !0, d++;
            for (d = 0; d < l.length;) e[l[d].identifier] && r.push(l[d]), b & 12 && delete e[l[d].identifier], d++;
            if (r.length) return [h(g.concat(r), "identifier", !0), r]
        }

        function Q() {
            r.apply(this, arguments);
            var a = B(this.handler, this);
            this.touch = new J(this.manager, a);
            this.mouse = new K(this.manager, a)
        }

        function T(a, b) {
            this.manager = a;
            this.set(b)
        }

        function ua(a) {
            if (-1 < a.indexOf("none")) return "none";
            var b = -1 < a.indexOf("pan-x"),
                c = -1 < a.indexOf("pan-y");
            return b && c ? "none" : b || c ? b ? "pan-x" :
                "pan-y" : -1 < a.indexOf("manipulation") ? "manipulation" : "auto"
        }

        function E(a) {
            a = k({}, a || {});
            this.id = va++;
            this.manager = null;
            this.options = A(a, this.defaults);
            a = this.options.enable;
            this.options.enable = a === t ? !0 : a;
            this.state = 1;
            this.simultaneous = {};
            this.requireFail = []
        }

        function ia(a) {
            return a & 16 ? "cancel" : a & 8 ? "end" : a & 4 ? "move" : a & 2 ? "start" : ""
        }

        function ja(a) {
            return 16 == a ? "down" : 8 == a ? "up" : 2 == a ? "left" : 4 == a ? "right" : ""
        }

        function M(a, b) {
            var c = b.manager;
            return c ? c.get(a) : a
        }

        function C() {
            E.apply(this, arguments)
        }

        function N() {
            C.apply(this,
                arguments);
            this.pY = this.pX = null
        }

        function U() {
            C.apply(this, arguments)
        }

        function V() {
            E.apply(this, arguments);
            this._input = this._timer = null
        }

        function W() {
            C.apply(this, arguments)
        }

        function X() {
            C.apply(this, arguments)
        }

        function O() {
            E.apply(this, arguments);
            this.pCenter = this.pTime = !1;
            this._input = this._timer = null;
            this.count = 0
        }

        function F(a, b) {
            b = b || {};
            var c = b.recognizers;
            b.recognizers = c === t ? F.defaults.preset : c;
            return new Y(a, b)
        }

        function Y(a, b) {
            b = b || {};
            this.options = A(b, F.defaults);
            this.options.inputTarget = this.options.inputTarget ||
                a;
            this.handlers = {};
            this.session = {};
            this.recognizers = [];
            this.element = a;
            this.input = u(this);
            this.touchAction = new T(this, this.options.touchAction);
            ka(this, !0);
            q(b.recognizers, function(a) {
                var b = this.add(new a[0](a[1]));
                a[2] && b.recognizeWith(a[2]);
                a[3] && b.requireFailure(a[3])
            }, this)
        }

        function ka(a, b) {
            var c = a.element;
            c.style && q(a.options.cssProps, function(a, d) {
                c.style[l(c.style, d)] = b ? a : ""
            })
        }

        function wa(a, b) {
            var c = p.createEvent("Event");
            c.initEvent(a, !0, !0);
            c.gesture = b;
            b.target.dispatchEvent(c)
        }
        var ca = " webkit moz MS ms o".split(" "),
            xa = p.createElement("div"),
            H = Math.round,
            G = Math.abs,
            R = Date.now,
            va = 1,
            ya = /mobile|tablet|ip(ad|hone|od)|android/i,
            da = "ontouchstart" in e,
            oa = l(e, "PointerEvent") !== t,
            pa = da && ya.test(navigator.userAgent),
            ea = ["x", "y"],
            L = ["clientX", "clientY"];
        r.prototype = {
            handler: function() {},
            init: function() {
                this.evEl && a(this.element, this.evEl, this.domHandler);
                this.evTarget && a(this.target, this.evTarget, this.domHandler);
                this.evWin && a(w(this.element), this.evWin, this.domHandler)
            },
            destroy: function() {
                this.evEl && b(this.element, this.evEl,
                    this.domHandler);
                this.evTarget && b(this.target, this.evTarget, this.domHandler);
                this.evWin && b(w(this.element), this.evWin, this.domHandler)
            }
        };
        var za = {
                mousedown: 1,
                mousemove: 2,
                mouseup: 4
            },
            qa = "mousedown",
            ra = "mousemove mouseup";
        z(K, r, {
            handler: function(a) {
                var b = za[a.type];
                b & 1 && 0 === a.button && (this.pressed = !0);
                b & 2 && 1 !== a.which && (b = 4);
                this.pressed && this.allow && (b & 4 && (this.pressed = !1), this.callback(this.manager, b, {
                    pointers: [a],
                    changedPointers: [a],
                    pointerType: "mouse",
                    srcEvent: a
                }))
            }
        });
        var Aa = {
                pointerdown: 1,
                pointermove: 2,
                pointerup: 4,
                pointercancel: 8,
                pointerout: 8
            },
            Ba = {
                2: "touch",
                3: "pen",
                4: "mouse",
                5: "kinect"
            },
            fa = "pointerdown",
            ga = "pointermove pointerup pointercancel";
        e.MSPointerEvent && (fa = "MSPointerDown", ga = "MSPointerMove MSPointerUp MSPointerCancel");
        z(P, r, {
            handler: function(a) {
                var b = this.store,
                    c = !1,
                    d = a.type.toLowerCase().replace("ms", ""),
                    d = Aa[d],
                    e = Ba[a.pointerType] || a.pointerType,
                    f = "touch" == e,
                    h = g(b, a.pointerId, "pointerId");
                d & 1 && (0 === a.button || f) ? 0 > h && (b.push(a), h = b.length - 1) : d & 12 && (c = !0);
                0 > h || (b[h] = a, this.callback(this.manager,
                    d, {
                        pointers: b,
                        changedPointers: [a],
                        pointerType: e,
                        srcEvent: a
                    }), c && b.splice(h, 1))
            }
        });
        var Ca = {
            touchstart: 1,
            touchmove: 2,
            touchend: 4,
            touchcancel: 8
        };
        z(ha, r, {
            handler: function(a) {
                var b = Ca[a.type];
                1 === b && (this.started = !0);
                if (this.started) {
                    var c;
                    c = f(a.touches);
                    var d = f(a.changedTouches);
                    b & 12 && (c = h(c.concat(d), "identifier", !0));
                    c = [c, d];
                    b & 12 && 0 === c[0].length - c[1].length && (this.started = !1);
                    this.callback(this.manager, b, {
                        pointers: c[0],
                        changedPointers: c[1],
                        pointerType: "touch",
                        srcEvent: a
                    })
                }
            }
        });
        var Da = {
                touchstart: 1,
                touchmove: 2,
                touchend: 4,
                touchcancel: 8
            },
            sa = "touchstart touchmove touchend touchcancel";
        z(J, r, {
            handler: function(a) {
                var b = Da[a.type],
                    c = ta.call(this, a, b);
                c && this.callback(this.manager, b, {
                    pointers: c[0],
                    changedPointers: c[1],
                    pointerType: "touch",
                    srcEvent: a
                })
            }
        });
        z(Q, r, {
            handler: function(a, b, c) {
                var d = "mouse" == c.pointerType;
                if ("touch" == c.pointerType) this.mouse.allow = !1;
                else if (d && !this.mouse.allow) return;
                b & 12 && (this.mouse.allow = !0);
                this.callback(a, b, c)
            },
            destroy: function() {
                this.touch.destroy();
                this.mouse.destroy()
            }
        });
        var la =
            l(xa.style, "touchAction"),
            ma = la !== t;
        T.prototype = {
            set: function(a) {
                "compute" == a && (a = this.compute());
                ma && this.manager.element.style && (this.manager.element.style[la] = a);
                this.actions = a.toLowerCase().trim()
            },
            update: function() {
                this.set(this.manager.options.touchAction)
            },
            compute: function() {
                var a = [];
                q(this.manager.recognizers, function(b) {
                    D(b.options.enable, [b]) && (a = a.concat(b.getTouchAction()))
                });
                return ua(a.join(" "))
            },
            preventDefaults: function(a) {
                if (!ma) {
                    var b = a.srcEvent,
                        c = a.offsetDirection;
                    if (this.manager.session.prevented) b.preventDefault();
                    else {
                        var d = this.actions,
                            e = -1 < d.indexOf("none"),
                            g = -1 < d.indexOf("pan-y"),
                            d = -1 < d.indexOf("pan-x");
                        if (e) {
                            var f = 2 > a.distance,
                                h = 250 > a.deltaTime;
                            if (1 === a.pointers.length && f && h) return
                        }
                        if (!d || !g)
                            if (e || g && c & 6 || d && c & 24) return this.preventSrc(b)
                    }
                }
            },
            preventSrc: function(a) {
                this.manager.session.prevented = !0;
                a.preventDefault()
            }
        };
        E.prototype = {
            defaults: {},
            set: function(a) {
                k(this.options, a);
                this.manager && this.manager.touchAction.update();
                return this
            },
            recognizeWith: function(a) {
                if (m(a, "recognizeWith", this)) return this;
                var b = this.simultaneous;
                a = M(a, this);
                b[a.id] || (b[a.id] = a, a.recognizeWith(this));
                return this
            },
            dropRecognizeWith: function(a) {
                if (m(a, "dropRecognizeWith", this)) return this;
                a = M(a, this);
                delete this.simultaneous[a.id];
                return this
            },
            requireFailure: function(a) {
                if (m(a, "requireFailure", this)) return this;
                var b = this.requireFail;
                a = M(a, this); - 1 === g(b, a) && (b.push(a), a.requireFailure(this));
                return this
            },
            dropRequireFailure: function(a) {
                if (m(a, "dropRequireFailure", this)) return this;
                a = M(a, this);
                a = g(this.requireFail, a); - 1 < a && this.requireFail.splice(a, 1);
                return this
            },
            hasRequireFailures: function() {
                return 0 < this.requireFail.length
            },
            canRecognizeWith: function(a) {
                return !!this.simultaneous[a.id]
            },
            emit: function(a) {
                function b(d) {
                    c.manager.emit(d, a)
                }
                var c = this,
                    d = this.state;
                8 > d && b(c.options.event + ia(d));
                b(c.options.event);
                a.additionalEvent && b(a.additionalEvent);
                8 <= d && b(c.options.event + ia(d))
            },
            tryEmit: function(a) {
                if (this.canEmit()) return this.emit(a);
                this.state = 32
            },
            canEmit: function() {
                for (var a = 0; a < this.requireFail.length;) {
                    if (!(this.requireFail[a].state &
                            33)) return !1;
                    a++
                }
                return !0
            },
            recognize: function(a) {
                a = k({}, a);
                D(this.options.enable, [this, a]) ? (this.state & 56 && (this.state = 1), this.state = this.process(a), this.state & 30 && this.tryEmit(a)) : (this.reset(), this.state = 32)
            },
            process: function(a) {},
            getTouchAction: function() {},
            reset: function() {}
        };
        z(C, E, {
            defaults: {
                pointers: 1
            },
            attrTest: function(a) {
                var b = this.options.pointers;
                return 0 === b || a.pointers.length === b
            },
            process: function(a) {
                var b = this.state,
                    c = a.eventType,
                    d = b & 6;
                a = this.attrTest(a);
                return d && (c & 8 || !a) ? b | 16 : d || a ?
                    c & 4 ? b | 8 : b & 2 ? b | 4 : 2 : 32
            }
        });
        z(N, C, {
            defaults: {
                event: "pan",
                threshold: 10,
                pointers: 1,
                direction: 30
            },
            getTouchAction: function() {
                var a = this.options.direction,
                    b = [];
                a & 6 && b.push("pan-y");
                a & 24 && b.push("pan-x");
                return b
            },
            directionTest: function(a) {
                var b = this.options,
                    c = !0,
                    d = a.distance,
                    e = a.direction,
                    g = a.deltaX,
                    f = a.deltaY;
                e & b.direction || (b.direction & 6 ? (e = 0 === g ? 1 : 0 > g ? 2 : 4, c = g != this.pX, d = Math.abs(a.deltaX)) : (e = 0 === f ? 1 : 0 > f ? 8 : 16, c = f != this.pY, d = Math.abs(a.deltaY)));
                a.direction = e;
                return c && d > b.threshold && e & b.direction
            },
            attrTest: function(a) {
                return C.prototype.attrTest.call(this,
                    a) && (this.state & 2 || !(this.state & 2) && this.directionTest(a))
            },
            emit: function(a) {
                this.pX = a.deltaX;
                this.pY = a.deltaY;
                var b = ja(a.direction);
                b && (a.additionalEvent = this.options.event + b);
                this._super.emit.call(this, a)
            }
        });
        z(U, C, {
            defaults: {
                event: "pinch",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.scale - 1) > this.options.threshold || this.state & 2)
            },
            emit: function(a) {
                1 !== a.scale && (a.additionalEvent = this.options.event + (1 >
                    a.scale ? "in" : "out"));
                this._super.emit.call(this, a)
            }
        });
        z(V, E, {
            defaults: {
                event: "press",
                pointers: 1,
                time: 500,
                threshold: 5
            },
            getTouchAction: function() {
                return ["auto"]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    e = a.deltaTime > b.time;
                this._input = a;
                if (!d || !c || a.eventType & 12 && !e) this.reset();
                else if (a.eventType & 1) this.reset(), this._timer = n(function() {
                    this.state = 8;
                    this.tryEmit()
                }, b.time, this);
                else if (a.eventType & 4) return 8;
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function(a) {
                8 === this.state && (a && a.eventType & 4 ? this.manager.emit(this.options.event + "up", a) : (this._input.timeStamp = R(), this.manager.emit(this.options.event, this._input)))
            }
        });
        z(W, C, {
            defaults: {
                event: "rotate",
                threshold: 0,
                pointers: 2
            },
            getTouchAction: function() {
                return ["none"]
            },
            attrTest: function(a) {
                return this._super.attrTest.call(this, a) && (Math.abs(a.rotation) > this.options.threshold || this.state & 2)
            }
        });
        z(X, C, {
            defaults: {
                event: "swipe",
                threshold: 10,
                velocity: .65,
                direction: 30,
                pointers: 1
            },
            getTouchAction: function() {
                return N.prototype.getTouchAction.call(this)
            },
            attrTest: function(a) {
                var b = this.options.direction,
                    c;
                b & 30 ? c = a.overallVelocity : b & 6 ? c = a.overallVelocityX : b & 24 && (c = a.overallVelocityY);
                return this._super.attrTest.call(this, a) && b & a.offsetDirection && a.distance > this.options.threshold && a.maxPointers == this.options.pointers && G(c) > this.options.velocity && a.eventType & 4
            },
            emit: function(a) {
                var b = ja(a.offsetDirection);
                b && this.manager.emit(this.options.event + b, a);
                this.manager.emit(this.options.event, a)
            }
        });
        z(O, E, {
            defaults: {
                event: "tap",
                pointers: 1,
                taps: 1,
                interval: 300,
                time: 250,
                threshold: 2,
                posThreshold: 10
            },
            getTouchAction: function() {
                return ["manipulation"]
            },
            process: function(a) {
                var b = this.options,
                    c = a.pointers.length === b.pointers,
                    d = a.distance < b.threshold,
                    e = a.deltaTime < b.time;
                this.reset();
                if (a.eventType & 1 && 0 === this.count) return this.failTimeout();
                if (d && e && c) {
                    if (4 != a.eventType) return this.failTimeout();
                    c = this.pTime ? a.timeStamp - this.pTime < b.interval : !0;
                    d = !this.pCenter || I(this.pCenter, a.center) < b.posThreshold;
                    this.pTime = a.timeStamp;
                    this.pCenter = a.center;
                    this.count = d && c ?
                        this.count + 1 : 1;
                    this._input = a;
                    if (0 === this.count % b.taps) return this.hasRequireFailures() ? (this._timer = n(function() {
                        this.state = 8;
                        this.tryEmit()
                    }, b.interval, this), 2) : 8
                }
                return 32
            },
            failTimeout: function() {
                this._timer = n(function() {
                    this.state = 32
                }, this.options.interval, this);
                return 32
            },
            reset: function() {
                clearTimeout(this._timer)
            },
            emit: function() {
                8 == this.state && (this._input.tapCount = this.count, this.manager.emit(this.options.event, this._input))
            }
        });
        F.VERSION = "2.0.4";
        F.defaults = {
            domEvents: !1,
            touchAction: "compute",
            enable: !0,
            inputTarget: null,
            inputClass: null,
            preset: [
                [W, {
                    enable: !1
                }],
                [U, {
                        enable: !1
                    },
                    ["rotate"]
                ],
                [X, {
                    direction: 6
                }],
                [N, {
                        direction: 6
                    },
                    ["swipe"]
                ],
                [O],
                [O, {
                        event: "doubletap",
                        taps: 2
                    },
                    ["tap"]
                ],
                [V]
            ],
            cssProps: {
                userSelect: "none",
                touchSelect: "none",
                touchCallout: "none",
                contentZooming: "none",
                userDrag: "none",
                tapHighlightColor: "rgba(0,0,0,0)"
            }
        };
        Y.prototype = {
            set: function(a) {
                k(this.options, a);
                a.touchAction && this.touchAction.update();
                a.inputTarget && (this.input.destroy(), this.input.target = a.inputTarget, this.input.init());
                return this
            },
            stop: function(a) {
                this.session.stopped = a ? 2 : 1
            },
            recognize: function(a) {
                var b = this.session;
                if (!b.stopped) {
                    this.touchAction.preventDefaults(a);
                    var c, d = this.recognizers,
                        e = b.curRecognizer;
                    if (!e || e && e.state & 8) e = b.curRecognizer = null;
                    for (var g = 0; g < d.length;) c = d[g], 2 === b.stopped || e && c != e && !c.canRecognizeWith(e) ? c.reset() : c.recognize(a), !e && c.state & 14 && (e = b.curRecognizer = c), g++
                }
            },
            get: function(a) {
                if (a instanceof E) return a;
                for (var b = this.recognizers, c = 0; c < b.length; c++)
                    if (b[c].options.event == a) return b[c];
                return null
            },
            add: function(a) {
                if (m(a, "add", this)) return this;
                var b = this.get(a.options.event);
                b && this.remove(b);
                this.recognizers.push(a);
                a.manager = this;
                this.touchAction.update();
                return a
            },
            remove: function(a) {
                if (m(a, "remove", this)) return this;
                var b = this.recognizers;
                a = this.get(a);
                b.splice(g(b, a), 1);
                this.touchAction.update();
                return this
            },
            on: function(a, b) {
                var c = this.handlers;
                q(d(a), function(a) {
                    c[a] = c[a] || [];
                    c[a].push(b)
                });
                return this
            },
            off: function(a, b) {
                var c = this.handlers;
                q(d(a), function(a) {
                    b ? c[a].splice(g(c[a],
                        b), 1) : delete c[a]
                });
                return this
            },
            emit: function(a, b) {
                this.options.domEvents && wa(a, b);
                var c = this.handlers[a] && this.handlers[a].slice();
                if (c && c.length) {
                    b.type = a;
                    b.preventDefault = function() {
                        b.srcEvent.preventDefault()
                    };
                    for (var d = 0; d < c.length;) c[d](b), d++
                }
            },
            destroy: function() {
                this.element && ka(this, !1);
                this.handlers = {};
                this.session = {};
                this.input.destroy();
                this.element = null
            }
        };
        k(F, {
            INPUT_START: 1,
            INPUT_MOVE: 2,
            INPUT_END: 4,
            INPUT_CANCEL: 8,
            STATE_POSSIBLE: 1,
            STATE_BEGAN: 2,
            STATE_CHANGED: 4,
            STATE_ENDED: 8,
            STATE_RECOGNIZED: 8,
            STATE_CANCELLED: 16,
            STATE_FAILED: 32,
            DIRECTION_NONE: 1,
            DIRECTION_LEFT: 2,
            DIRECTION_RIGHT: 4,
            DIRECTION_UP: 8,
            DIRECTION_DOWN: 16,
            DIRECTION_HORIZONTAL: 6,
            DIRECTION_VERTICAL: 24,
            DIRECTION_ALL: 30,
            Manager: Y,
            Input: r,
            TouchAction: T,
            TouchInput: J,
            MouseInput: K,
            PointerEventInput: P,
            TouchMouseInput: Q,
            SingleTouchInput: ha,
            Recognizer: E,
            AttrRecognizer: C,
            Tap: O,
            Pan: N,
            Swipe: X,
            Pinch: U,
            Rotate: W,
            Press: V,
            on: a,
            off: b,
            each: q,
            merge: A,
            extend: k,
            inherit: z,
            bindFn: B,
            prefixed: l
        });
        "function" == typeof define && define.amd ? define(function() {
                return F
            }) :
            "undefined" != typeof module && module.exports ? module.exports = F : e[v] = F
    })(window, document, "Hammer")
} catch (e) {
    console && console.log && console.log(e)
}
(function(e) {
    function p(a, b) {
        a = e(a);
        var c = this;
        this.elem = a;
        this.id = a.attr("id");
        this.pages = [];
        this.opts = b;
        this.currentPage = null;
        this.pageWidth = b.width / 2;
        this.pageHeight = b.height;
        this.startPage = b.startPage;
        this.onShowPage = b.onShowPage;
        this.slideShow = b.slideShow;
        this.slideShowDelay = b.slideShowDelay;
        this.pauseOnHover = b.pauseOnHover;
        this.turnPageDuration = b.turnPageDuration;
        this.foldGradient = b.foldGradient;
        this.foldGradientThreshold = b.foldGradientThreshold;
        this.shadows = b.shadows;
        this.shadowThreshold = b.shadowThreshold;
        this.clipBoundaries = b.clipBoundaries;
        this.zoomLevel = 1;
        this.zoomMax = Math.max(b.zoomMax, 1);
        this.zoomMin = b.zoomMin;
        this.zoomBoundingBox = b.zoomBoundingBox;
        this.zoomStep = b.zoomStep;
        this.onZoom = b.onZoom;
        this.mouseWheel = b.mouseWheel;
        this.flipSound = b.flipSound;
        this.centeredWhenClosed = b.centeredWhenClosed;
        this.sectionDefinition = b.sections;
        this.rtl = !!b.rtl;
        this.closable = b.closable;
        e.wowBook.support.filters = "filters" in a[0];
        this.opts.toolbarContainerPosition && (this.opts.toolbarPosition = this.opts.toolbarContainerPosition);
        this.opts.toolbarLightboxPosition && (this.opts.toolbarPosition = this.opts.toolbarLightboxPosition);
        (this._isMobile = e.wowBook.utils.isMobile()) && this.mobileSetup();
        a.addClass("wowbook");
        "static" === a.css("position") && a.css("position", "relative");
        var d = a.children();
        if (d.length < b.pageCount) {
            for (var g = b.pageCount - d.length; g--;) a.append("<div />");
            d = a.children()
        }
        g = this.pagesContainer = this.origin = e("<div class='wowbook-origin'></div>").css({
            position: "absolute"
        }).appendTo(a);
        c.bookShadow = e("<div class='wowbook-book-shadow'></div>").appendTo(a).css({
            top: 0,
            position: "absolute",
            display: "none",
            zIndex: 0
        });
        this._controls = {};
        this.controllify(this.opts.controls);
        this.insertPages(d, !0);
        g.append("<div class='wowbook-shadow-clipper'><div class='wowbook-shadow-container'><div class='wowbook-shadow-internal'></div></div></div>");
        c.shadowContainer = e(".wowbook-shadow-container", g);
        c.internalShadow = e(".wowbook-shadow-internal", g);
        c.shadowClipper = e(".wowbook-shadow-clipper", g).css({
            display: "none"
        });
        c.foldShadow = e("<div class='wowbook-shadow-fold'></div>").appendTo(c.shadowContainer);
        c.foldGradientContainer = e("<div class='wowbook-fold-gradient-container'></div>").appendTo(c.shadowContainer);
        c.foldGradientElem = e("<div class='wowbook-fold-gradient'></div>").appendTo(c.foldGradientContainer);
        c.hardPageDropShadow = e("<div class='wowbook-hard-page-dropshadow'></div>").css({
            display: "none"
        }).appendTo(g);
        !e.support.opacity && e.wowBook.support.filters && e.wowBook.applyAlphaImageLoader(["wowbook-fold-gradient", "wowbook-fold-gradient-flipped", "wowbook-shadow-fold", "wowbook-shadow-fold-flipped"]);
        c.shadowContainer.css("position", "relative");
        this.leftHandle = e("<div class='wowbook-handle wowbook-left'></div>").data("corner", "l").appendTo(g);
        this.rightHandle = e("<div class='wowbook-handle wowbook-right'></div>").data("corner", "r").appendTo(g);
        Modernizr.csstransforms3d && (d = e("<div>").css("transform", "perspective(1px)"), this.perspectiveUnit = "none" != d.css("transform") ? "px" : "", d = null);
        e.browser.msie && e(".wowbook-handle", a).css({
            backgroundColor: "#fff",
            opacity: "0.01"
        });
        e(".wowbook-handle", g).bind("mousedown.wowbook",
            function(a) {
                return c.pageEdgeDragStart(a)
            });
        b.curl && e(".wowbook-handle", g).hover(function(a) {
            c.curlTimer || (c.curlTimer = setTimeout(function() {
                var b = a.target == c.leftHandle[0] ? c.leftPage() : c.rightPage();
                if (b) {
                    var d = b.offset();
                    c.curl(b, a.pageY - d.top > c.pageHeight * c.currentScale * c._cssZoom / 2)
                }
            }, 120))
        }, function() {
            c.curlTimer = clearTimeout(c.curlTimer);
            c.uncurl()
        });
        var f, h;
        e(".wowbook-handle", g).on("mousedown.wowbook", function() {
            f = e.now();
            h = e(this).data("corner")
        }).on("mouseup.wowbook", function() {
            var a = e(this).data("corner");
            if (!((new Date).getTime() - f > c.opts.handleClickDuration || a != h)) {
                c._cantStopAnimation || c.stopAnimation(!1);
                if ("r" === a) c[c.rtl ? "back" : "advance"]();
                if ("l" === a) c[c.rtl ? "advance" : "back"]();
                h = ""
            }
        });
        var l = !1;
        a.hover(function(a) {
            c.pauseOnHover && (l = c.slideShowTimer, c.stopSlideShow(!0))
        }, function() {
            c.pauseOnHover && l && c.startSlideShow()
        });
        this.clipBoundaries && (this.origin.wrap("<div class='wowbook-clipper'><div class='wowbook-inner-clipper'></div></div>"), e(".wowbook-inner-clipper", a).css({
            position: "absolute",
            width: "100%",
            overflow: "hidden"
        }), this.clipper = e(".wowbook-clipper", a).css({
            position: "absolute",
            left: 0,
            top: 0,
            width: "100%",
            overflow: "hidden",
            zIndex: 1
        }));
        a.wrapInner("<div class='wowbook-zoomwindow'><div class='wowbook-zoomcontent'></div></div>");
        this.zoomWindow = e(".wowbook-zoomwindow", a);
        this.zoomContent = e(".wowbook-zoomcontent", a);
        e.browser.ie8mode && this.zoomContent.wrapInner("<div class='IE8-zoom-helper'style='position:relative'></div>");
        this.zoomWindow.css({
            position: "absolute",
            top: 0
        });
        this.zoomContent.css({
            position: "absolute",
            left: 0,
            top: 0
        });
        this.zoomSetup();
        this.setDimensions(2 * b.coverWidth || b.width, b.coverHeight || b.height);
        this.opts.container && this.createContainer();
        this.singlePage(b.singlePage);
        b.responsiveSinglePage && this.responsiveSinglePage();
        b.scaleToFit && (this.scaleToFit(), this.responsive());
        this.fillToc();
        g = b.useTranslate3d;
        Modernizr.csstransforms3d && g && (e.wowBook.useTranslate3d = 1 == g || "mobile" == g && e.wowBook.utils.isMobile());
        b.useScale3d = b.useScale3d && Modernizr.csstransforms3d;
        if (b.deepLinking && this.getLocationHash()) {
            var w;
            try {
                w = c.selectorToPage("#" + this.getLocationHash())
            } catch (r) {}
            void 0 === w && (w = c.locationHashToPage());
            "number" === typeof w && (c.startPage = w, b.moveToViewPort && !t(c.elem) && c.elem[0].scrollIntoView())
        }
        this.flipSound && (this.audio = this.createAudioPlayer());
        this.opts.keyboardNavigation && (w = e.wowBook.defaults.keyboardNavigation, this.rtl && this.opts.keyboardNavigation == w && (this.opts.keyboardNavigation = {
            back: w.advance,
            advance: w.back
        }), e(document).on("keydown.wowbook", function(a) {
            e(a.target).filter("input, textarea, select").length ||
                c.holdedPage || (a.which === c.opts.keyboardNavigation.back && c.back(), a.which === c.opts.keyboardNavigation.advance && c.advance())
        }));
        e(window).on("hashchange.wowbook", function() {
            var a = window.location.hash;
            if (a === c.locationHashSetTo) c.locationHashSetTo = void 0;
            else {
                var d = (a = "" === a && !c.locationEndsInHash()) ? c.startPage : c.locationHashToPage();
                "number" === typeof d && (c.gotoPage(d, !a), a || !b.moveToViewPort || t(c.elem) || c.elem[0].scrollIntoView())
            }
        });
        b.forceBasicPage && (this.foldPage = this.holdHardpage = this.foldPageBasic);
        e.wowBook.support.transform || (this.foldPage = this.foldPageBasic, e.wowBook.support.filters || (this.holdHardpage = this.foldPageBasic));
        this.mouseWheel && ("zoom" == c.mouseWheel && a.bind("mousemove.wowbook mouseenter.wowbook", function(a) {
            c._mousemoveEvent = a
        }), a.mousewheel(function(a, b) {
            if (c.mouseWheel) {
                if ("zoom" === c.mouseWheel) {
                    var d = c.elem.offset(),
                        e = c._mousemoveEvent,
                        g = e.pageX - d.left,
                        d = e.pageY - d.top;
                    0 < b && c.zoomIn({
                        x: g,
                        y: d
                    });
                    0 > b && c.zoomOut({
                        x: g,
                        y: d
                    })
                } else 0 < b && c.advance(), 0 > b && c.back();
                return !1
            }
        }));
        this.opts.touchEnabled &&
            this.touchSupport();
        b.toc && this.createToc();
        this.opts.thumbnails && this.createThumbnails();
        this.setupFullscreen();
        this.showPage(this.startPage, !1);
        1 != this.opts.zoomLevel && this.zoom(this.opts.zoomLevel, {
            duration: 0
        });
        this.opts.pdf && this.setPDF(this.opts.pdf);
        this.opts.lightbox && this.lightbox(this.opts.lightbox);
        this.toolbars = [];
        this.opts.toolbar && (this.createToolbar(this.opts.toolbar), this.opts.responsiveToolbar && (this.opts.lightbox || this.opts.container) && this.setupResponsiveToolbar());
        this.setStyle(this.opts.styles ||
            this.opts.style);
        this.opts.navControls && this.createNavigationControls();
        this.showPage(this.startPage, !1);
        this.opts.container && (this.updateContainer(), b.scaleToFit && this.scaleToFit(), b.responsiveSinglePage && this.responsiveSinglePage());
        this.callRAFCallback = function() {
            c.rafCallback()
        };
        window.raf(this.callRAFCallback);
        b.slideShow && this.startSlideShow()
    }

    function v(a, b) {
        var c = Math.cos(b),
            d = Math.sin(b);
        return {
            x: c * a.x - d * a.y,
            y: d * a.x + c * a.y
        }
    }

    function t(a) {
        var b = e(window).height(),
            c = a.offset(),
            d = e(window).scrollTop();
        return c.top > d && c.top + a.height() < d + b
    }

    function n(a, b, c) {
        var d, g, f, h;
        d = g = 0;
        if (!e.wowBook.support.boxSizing) {
            var l;
            d = "none" == a.css("borderTopStyle") ? 0 : q[l = a.css("borderTopWidth")] || parseFloat(l);
            g = "none" == a.css("borderRightStyle") ? 0 : q[l = a.css("borderRightWidth")] || parseFloat(l);
            f = "none" == a.css("borderBottomStyle") ? 0 : q[l = a.css("borderBottomWidth")] || parseFloat(l);
            h = "none" == a.css("borderLeftStyle") ? 0 : q[l = a.css("borderLeftWidth")] || parseFloat(l);
            g = parseFloat(a.css("paddingLeft")) + parseFloat(a.css("paddingRight")) +
                h + g;
            d = parseFloat(a.css("paddingTop")) + parseFloat(a.css("paddingBottom")) + d + f
        }
        a.css("width", b - g);
        a.css("height", c - d)
    }
    e.wowBook = function(a) {
        return e(a).data("wowBook")
    };
    e.wowBook.version = "1.2.5";
    e.wowBook.support = {};
    e.fn.wowBook = function(a) {
        if ("string" === typeof a) {
            var b = Array.prototype.slice.call(arguments, 1);
            if ("options" === a || "prop" === a) {
                var c = e.wowBook(this[0]),
                    d = b[0];
                return 1 < b.length ? c[d] = b[1] : c[d]
            }
            return this.each(function() {
                var c = e.wowBook(this);
                c[a].apply(c, b)
            })
        }
        var g = e.extend({}, e.wowBook.defaults,
            a);
        return this.each(function() {
            if (e.wowBook(this)) console.log("Error: the following element cannot be used twice by wowBook plugin: ", this);
            else {
                var a = new p(this, g);
                e(this).data("wowBook", a)
            }
        })
    };
    p.prototype = {
        destroy: function() {
            this.callRAFCallback = e.noop;
            this.curlTimer = clearTimeout(this.curlTimer);
            e("*").add(document).add(window).off(".wowbook");
            this.destroyThumbnails();
            this.destroyToc();
            this.destroyToolbars();
            this.destroyLightbox();
            this.destroyContainer();
            this.stopSlideShow();
            this.stopAnimation(!1);
            this.elem.empty().removeData().off()
        },
        mobileSetup: function() {
            this.opts.hardPageShadow = !1
        },
        setDimensions: function(a, b) {
            this.zoomed && this.zoomReset(0);
            this.currentScale = 1;
            var c = this.elem,
                d = this.pageWidth;
            c.css({
                height: b,
                width: a
            });
            var g = c.height();
            this.pageWidth = c.width() / 2;
            this.pageHeight = g;
            this._originalHeight || (this._originalHeight = this.pageHeight);
            this._originalWidth || (this._originalWidth = 2 * this.pageWidth);
            var f = this.origin.css({
                width: "100%",
                height: g
            });
            if (d && this.centeredWhenClosed) {
                var h = parseFloat(f.css("left"),
                    10);
                f.css("left", h / (d / this.pageWidth))
            }
            this.bookShadow.css({
                width: a,
                height: b
            });
            this.setPagesDimension();
            this.positionBookShadow();
            this.shadowClipper.css({
                width: c.width(),
                height: g
            });
            this.hardPageDropShadow.css({
                width: this.pageWidth,
                height: this.pageHeight
            });
            this.opts.handleWidth && e(".wowbook-handle", f).css("width", this.opts.handleWidth);
            this.rightHandle.css("left", a - this.rightHandle.width());
            this.clipBoundaries && (d = Math.ceil(Math.sqrt(this.pageWidth * this.pageWidth + this.pageHeight * this.pageHeight)),
                d = [this.pageHeight - d, c.width(), d, 0], this.origin.css("top", -d[0]), e(".wowbook-inner-clipper", c).css({
                    width: "100%",
                    height: d[2] - d[0],
                    top: d[0]
                }), this.clipper.css({
                    width: "100%",
                    height: g
                }));
            this.zoomWindow.css({
                width: 2 * this.pageWidth,
                height: g
            });
            this.zoomContent.css({
                width: 2 * this.pageWidth,
                height: g
            });
            this.corners = {
                tl: [0, 0],
                bl: [0, this.pageHeight],
                tr: [this.pageWidth, 0],
                br: [this.pageWidth, this.pageHeight],
                l: [0, 0],
                r: [this.pageWidth, 0]
            };
            this.pdf && this.pdfResetPages();
            this.thumbnails && this.updateThumbnails()
        },
        setPagesDimension: function() {
            for (var a, b, c, d = 0, g = this.pages.length; d < g; d++) page = this.pages[d], b = page.isCover ? this.pageWidth : this.opts.pageWidth || this.pageWidth, c = page.isCover ? this.pageHeight : this.opts.pageHeight || this.pageHeight, page.pageWidth = b, page.pageHeight = c, page.css({
                width: b,
                height: c,
                left: page.onLeft ? 0 : this.pageWidth
            }), a = e(".wowbook-page-content", page), n(a, b, c), this.setPageCorners(page);
            this.opts.gutterShadow && e(".wowbook-gutter-shadow", this.elem).css("height", c)
        },
        setPageCorners: function(a) {
            var b =
                0 + a.pageWidth,
                c = 0 + a.pageHeight;
            a.corners = {
                tl: [0, 0],
                bl: [0, c],
                tr: [b, 0],
                br: [b, c],
                l: [0, 0],
                r: [b, 0]
            }
        },
        setPagePosition: function(a) {
            a.left = a.onLeft ? this.pageWidth - a.pageWidth : this.pageWidth;
            a.top = Math.floor((this.pageHeight - a.pageHeight) / 2);
            a.css({
                left: a.left,
                top: a.top
            })
        },
        scale: function(a) {
            if (e.wowBook.support.transform) {
                this.zoomed && this.zoom(1, 0, {
                    offset: {
                        dx: 0,
                        dy: 0
                    }
                });
                this.currentScale = a;
                var b = this.zoomContent;
                this.opts.zoomUsingTransform ? b.css({
                    transform: "scale(" + a + ")",
                    transformOrigin: "0 0"
                }) : (b.css("zoom",
                    a), this._cssZoom = a * this.zoomLevel);
                this.elem.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                this.zoomWindow.css({
                    height: this._originalHeight * a,
                    width: this._originalWidth * a
                });
                this.resizeHandles();
                if (this.opts.onResize) this.opts.onResize(this)
            }
        },
        scaleToFit: function(a, b) {
            var c = a;
            if (!e.isNumeric(a)) {
                var d = e(a || this.opts.scaleToFit);
                if (!d.length) throw "jQuery selector passed to wowbook.resize did not matched in any DOM element.";
                c = d.width();
                b = d.height()
            }
            this.opts.maxWidth && c > this.opts.maxWidth &&
                (c = this.opts.maxWidth);
            this.opts.maxHeight && b > this.opts.maxHeight && (b = this.opts.maxHeight);
            this._singlePage && (c *= 2);
            d = this._originalWidth / this._originalHeight;
            b * d <= c || (b = c / d);
            this.scale(b / this._originalHeight)
        },
        resize: function(a, b) {
            this.setDimensions(a, b);
            if (this.opts.onResize) this.opts.onResize(this)
        },
        responsive: function() {
            var a = this;
            e(window).on("resize.wowbook", function() {
                a.responsiveUpdater()
            })
        },
        responsiveUpdater: function() {
            this.opts.container && this.updateContainer();
            this.responsiveSinglePage();
            !0 !== this.opts.container || this.opts.containerHeight ? this.scaleToFit() : (this.scaleToFit(this.containerBook.width(), 1E4), this.containerBook.css("height", "auto"), this.updateContainer());
            this.lightboxOn && this.centerLightbox()
        },
        responsiveSinglePage: function(a) {
            if (a = void 0 != a ? a : this.opts.responsiveSinglePage) e.isFunction(a) || (a = function(a) {
                if (!this._isMobile) return !1;
                a = e(a.opts.scaleToFit);
                var c = a.width();
                return a.height() > c
            }), this.singlePage(this.opts.singlePage || a.call(this, this))
        },
        resizeHandles: function() {
            if (this.opts.responsiveHandleWidth) {
                var a =
                    this.opts.responsiveHandleWidth / this.currentScale;
                e(".wowbook-handle").width(a);
                this.rightHandle.css("left", 2 * this.pageWidth - a)
            }
        },
        insertPages: function(a, b) {
            for (var c = 0, d = a.length; c < d; c++) this.insertPage(a[c], !0);
            this.updateBook(b)
        },
        insertPage: function(a, b) {
            if (this.isDoublePage(a)) this.insertDoublePage(a, b);
            else {
                a = e(a).addClass("wowbook-page-content");
                var c = e("<div class='wowbook-page'></div>").css({
                    width: this.pageWidth,
                    height: this.pageHeight,
                    display: "none",
                    position: "absolute"
                }).appendTo(this.pagesContainer).append(a);
                e.wowBook.support.boxSizing && a.css(e.wowBook.support.boxSizing, "border-box");
                n(a, this.pageWidth, this.pageHeight);
                c.hardPageSetByUser = a.hasClass("wowbook-hardpage");
                this.opts.gutterShadow && this.upsertGutterShadowInPage(c);
                this.pages.push(c);
                b || this.updateBook();
                return c
            }
        },
        insertDoublePage: function(a, b) {
            if (!this._insertingDoublePage) {
                this._insertingDoublePage = !0;
                var c = e(a),
                    d = c.clone().insertAfter(c),
                    g = c.add(d);
                c.css("left", 0);
                d.css("right", "100%");
                g.css({
                    width: "200%",
                    height: "100%",
                    position: "relative"
                });
                g.css(e.wowBook.support.boxSizing + "", "border-box").wrap("<div class='wowbook-double-page'></div>");
                c.parent().data("src", c.data("src"));
                d.parent().data("src", d.data("src"));
                c.parent().data("image", c.data("image"));
                d.parent().data("image", d.data("image"));
                var g = this.insertPage(c.parent(), !0),
                    f = this.insertPage(d.parent(), !0);
                g && (g.otherHalf = f);
                f && (f.otherHalf = g);
                e.wowBook.support.boxSizing || (n(c, 2 * this.pageWidth, this.pageHeight), n(d, 2 * this.pageWidth, this.pageHeight));
                b || this.updateBook();
                this._insertingDoublePage = !1
            }
        },
        isDoublePage: function(a) {
            a = e(a);
            return a.data("double") || a.is(this.opts.doublePages)
        },
        replaceNumberHolder: function(a, b) {
            if (void 0 == a) return a;
            b += "";
            return a.replace(/\{\{([^}]+)\}\}/g, function(a, d) {
                if (b.length < d.length) {
                    var e = d.replace(/./g, "0");
                    return (e + b).slice(-e.length)
                }
                return b
            })
        },
        loadPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && !a.loaded && !a.loading && (a.src || a.image || a.cached || this.pdfDoc)) {
                if (a.cached) return this.finishPageLoading(a, a.cache);
                a.loading = !0;
                var b = this;
                if (a.src) a.otherHalf &&
                    a.otherHalf.loading || e.get(a.src, function(c) {
                        b.finishPageLoading(a, c);
                        a.otherHalf && b.finishPageLoading(a.otherHalf, c)
                    });
                else if (a.image) {
                    var c = new Image;
                    c.onload = function() {
                        b.finishPageLoading(a, this)
                    };
                    e(c).addClass("wowbook-lazy");
                    c.src = a.image
                } else this.pdfDoc && b.pdfLoadPage(a.pageIndex)
            }
        },
        finishPageLoading: function(a, b) {
            a.loading = !1;
            a.loaded = !0;
            var c = !a.cached;
            a.cached = !1;
            a.removeClass("wowbook-loading");
            var d = a.find(".wowbook-page-content");
            c && (a.image || a.src) && this.isDoublePage(d.children().first()) &&
                (d = d.children().first());
            d.append(b);
            this.upsertNumberInPage(a);
            this.opts.gutterShadow && this.upsertGutterShadowInPage(a);
            if (this.opts.onLoadPage) this.opts.onLoadPage(this, a, a.pageIndex);
            this.updateThumbnail(a.pageIndex)
        },
        unloadPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a && a.loaded && !this.isPageToKeep(a) && (a.cache = a.find(".wowbook-page-content").html(), a.find(".wowbook-page-content").empty(), a.cached = !0, a.loaded = !1, this.pdfDoc && (a.cache = void 0, a.cached = !1), this.opts.onUnloadPage)) this.opts.onUnloadPage(this,
                a, a.pageIndex)
        },
        isPageToKeep: function(a) {
            if (!this.opts.pagesToKeep) return !1;
            var b = a.find(".wowbook-page-content");
            return a.keep || b.data("keep") || b.is(this.opts.pagesToKeep)
        },
        selectPagesToUnload: function(a) {
            void 0 == a && (a = this.currentPage);
            var b = [],
                c = this.leftPageIndex(a);
            a = this.rightPageIndex(a);
            for (var d = this.pageBelow(c), e = this.pageBelow(a), f = this.backPage(c), h = this.backPage(a), f = f && f.pageIndex, h = h && h.pageIndex, l = 0, w = this.pages.length; l < w; l++) {
                var r = this.pages[l];
                r.loaded && l != c && l != a && l != d && l != e &&
                    l != f && l != h && !this.isPageToKeep(r) && b.push(l)
            }
            return b
        },
        loadedPages: function() {
            for (var a = [], b = 0, c = this.pages.length; b < c; b++) this.pages[b].loaded && a.push(b);
            return a
        },
        unloadUnusedPages: function(a) {
            var b = this.loadedPages();
            if (!(b.length <= this.opts.pagesInMemory)) {
                b = b.length - this.opts.pagesInMemory;
                a = this.selectPagesToUnload(a);
                for (var c = 0; c < b; c++) this.unloadPage(a[c])
            }
        },
        removePages: function(a, b) {
            arguments.length || (a = 0, b = -1);
            this.holdedPage && this.releasePage(this.holdedPage);
            var c = this.pages;
            b = (b || a) +
                1 || c.length;
            var d = c.slice(a, b),
                e = c.slice(b);
            c.length = 0 > a ? c.length + a : a;
            c.push.apply(c, e);
            for (var e = 0, f = d.length; e < f; e++) d[e].remove();
            this.updateBook();
            return c.length
        },
        updateBook: function(a) {
            this.doPageNumbering();
            this.findPagesType();
            this.positionBookShadow();
            var b = this.rtl && this.closable || !this.rtl && !this.closable,
                c = this.opts.pageWidth || this.opts.pageHeight,
                d;
            this.differentPageSizes = c;
            for (var g = 0, f = this.pages.length - 1; g <= f; g++) {
                d = this.pages[g].toggleClass("wowbook-left", b).toggleClass("wowbook-right", !b).data({
                    pageIndex: g,
                    holded: !1
                });
                d.pageIndex = g;
                d.cover = !1;
                d.insideCover = !1;
                d.isCover = c && (0 == g || g == f || this.closable && 1 == g || g == f - 1 && !this.otherPage(f));
                var h = e(".wowbook-page-content", d);
                d.src = this.replaceNumberHolder(h.data("src") || this.opts.srcs, g);
                d.image = this.replaceNumberHolder(h.data("image") || this.opts.images, g);
                1 != d.loaded && (d.loaded = !d.src && !d.image && !d.cached);
                d.loaded || d.addClass("wowbook-loading");
                d.onLeft = b;
                d.onRight = !b;
                b = !b;
                d.thickness = this.opts.pageThickness;
                c && (d.thickness = d.isCover ?
                    this.opts.pageThickness : "1px")
            }
            this.setCovers();
            this.setPagesDimension();
            this.findSections();
            this._controls && this._controls.pagecount && this._controls.pagecount.text(this.pages.length);
            a || this.showPage(this.currentPage)
        },
        setCovers: function() {
            function a(a) {
                if (0 == a || a == b) {
                    var d = c.pages[a];
                    if (d) {
                        var e = c.backPage(a);
                        c.otherPage(a) ? e || (d.cover = !1, d.insideCover = !0) : (d.cover = !0, d.insideCover = !1, e && !e.cover && (e.insideCover = !0))
                    }
                }
            }
            var b = this.pages.length - 1,
                c = this;
            a(0);
            a(b);
            c.insideCoverLeft = null;
            c.insideCoverRight =
                null;
            for (var d = 0, e = this.pages.length - 1; d <= e; d++) c.pages[d].insideCover && (c.pages[d].onLeft ? c.insideCoverLeft = c.pages[d] : c.insideCoverRight = c.pages[d])
        },
        singlePage: function(a) {
            if (void 0 !== a) {
                (this._singlePage = !!a) ? this.clipBoundaries && (this.clipBoundaries = !1, this._restoreClipBoundaries = !0, this.clipper.css("overflow", "visible"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible")): this._restoreClipBoundaries && (this._restoreClipBoundaries = !1, this.clipBoundaries = !0, this.clipper.css("overflow",
                    "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible"));
                a = 0;
                var b = this.pageWidth;
                if (this._singlePage) a = this.pageIsOnTheRight(this.currentPage) ? -b : 0;
                else if (this.centeredWhenClosed) {
                    a = !!this.leftPage(this.currentPage);
                    var c = this.rightPage(this.currentPage);
                    a = a && c ? 0 : a ? b / 2 : -b / 2
                }
                this.origin.css("left", a);
                this.positionBookShadow()
            }
            return this._singlePage
        },
        doPageNumbering: function() {
            var a = this.opts;
            if (a.pageNumbers && this.pages.length) {
                var b = a.numberedPages,
                    a = this.pages.length -
                    1,
                    c = this.pageIsOnTheLeft(a);
                "all" == b && (b = [0, -1]);
                b || (b = this.closable ? [2, c ? -3 : -2] : [0, -1]);
                var d = b[0],
                    b = b[1];
                0 > d && (d = a + d + 1);
                0 > d && (d = 0);
                d > this.pages.length - 1 && (d = a);
                0 > b && (b = a + b + 1);
                0 > b && (b = 0);
                b > this.pages.length - 1 && (b = a);
                for (var g = this.opts.firstPageNumber, c = 0; c < a; c++) delete this.pages[c].number;
                for (c = 0; c < d; c++) e(".wowbook-page-number", this.pages[c]).remove();
                for (c = b + 1; c < a; c++) e(".wowbook-page-number", this.pages[c]).remove();
                for (c = d; c <= b; c++) this.pages[c].number = g, a = e(".wowbook-page-number", this.pages[c]),
                    a.length || (a = e(".wowbook-page-content", this.pages[c]), a = e('<div class="wowbook-page-number"></div>').appendTo(a)), a.html(g++)
            }
        },
        upsertNumberInPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            if (a.number || 0 === a.number) {
                var b = e(".wowbook-page-number", a);
                b.length || (content = e(".wowbook-page-content", a), b = e('<div class="wowbook-page-number"></div>').appendTo(content));
                b.html(a.number)
            }
        },
        upsertGutterShadowInPage: function(a) {
            "number" === typeof a && (a = this.pages[a]);
            a.find(".wowbook-gutter-shadow").length ||
                (a = a.find(".wowbook-page-content"), e("<div class='wowbook-gutter-shadow'>").css("height", this.pageHeight).appendTo(a))
        },
        findPagesType: function() {
            var a = this.opts,
                b = {},
                c, d, e;
            e = a.hardPages || [];
            var f = !0 === e;
            if (!f)
                for (a.hardcovers && (e.push(0, -1), this.closable && e.push(1), this.otherPage(this.pages.length - 1) || e.push(-2)), a = 0, d = e.length; a < d; a++) c = e[a], 0 > c && (c = this.pages.length + c), 0 <= c && c < this.pages.length && (b[c] = !0);
            for (a = this.pages.length; a--;) e = f || b[a] || this.pages[a].hardPageSetByUser, this.pages[a].toggleClass("wowbook-hardpage",
                e).isHardPage = e
        },
        showPage: function(a, b) {
            0 > a && (a = 0);
            a > this.pages.length - 1 && (a = this.pages.length - 1);
            var c = this.leftPageIndex(a),
                d = this.rightPageIndex(a),
                g = this.pageBelow(c),
                f = this.pageBelow(d),
                h = this.pageWidth,
                l = this.pages.length - 1,
                w, r;
            this.loadPage(c);
            this.loadPage(d);
            this.loadPage(g);
            this.loadPage(f);
            this.loadPage(this.backPage(c));
            this.loadPage(this.backPage(d));
            this.opts.pagesInMemory && this.unloadUnusedPages(a);
            for (var u = 0; u <= l; u++) w = this.pages[u].onLeft != this.rtl ? u : l - u, r = u === g || u === c || u === d || u ===
                f ? "block" : "none", this.pages[u].data("zIndex", w).css({
                    display: r,
                    left: this.pages[u].onLeft ? 0 : h,
                    top: 0,
                    zIndex: w
                }), this.setPagePosition(this.pages[u]);
            this.differentPageSizes && (null !== g && this.insideCoverLeft.css("display", "block"), null !== f && this.insideCoverRight.css("display", "block"));
            g = 0 == a || !this.closable && 1 == a;
            l = a == l || a == this.otherPage(l);
            this.leftHandle.toggleClass("wowbook-disabled", !this.backPage(c));
            this.rightHandle.toggleClass("wowbook-disabled", !this.backPage(d));
            this.toggleControl("back", g);
            this.toggleControl("next", l);
            this.toggleControl("first", g);
            this.toggleControl("last", l);
            this.toggleControl("left", this.rtl ? l : g);
            this.toggleControl("right", this.rtl ? g : l);
            (l = this.onShowPage) && e.isFunction(l) && !this.isOnPage(a) && (this.currentPage = a, l(this, this.pages[a], a), (g = this.otherPage(a)) && l(this, this.pages[g], g));
            this.currentPage = a;
            this._controls.currentpage && (l = this.currentPage + 1, this.singlePage() || (l = [], e.isNumeric(c) && l.push(c + 1), e.isNumeric(d) && l.push(d + 1), l = l.join("-")), this._controls.currentpage.text(l).val(l));
            this._sliding || (c = this._singlePage && this.pageIsOnTheRight(a) ? -h : 0, this.origin.css("left", c), this.origin.css("transform", ""));
            this.centeredWhenClosed && !this._singlePage && (c = !!this.leftPage(a), d = this.rightPage(a), this.origin.css("left", c && d ? 0 : c ? h / 2 : -h / 2));
            this.positionBookShadow();
            !1 !== b && this.opts.updateBrowserURL && this.locationHashToPage() != a && (this.locationHashSetTo = window.location.hash = this.pageToLocationHash(a));
            this.showThumbnail()
        },
        slideX: function(a, b) {
            var c = parseFloat(this.origin.css("left")),
                d = a - c;
            this.origin.css("left", 0);
            var g = this;
            this._move = 0;
            this._sliding = !0;
            e(this).animate({
                _move: 1
            }, {
                duration: this.opts.turnPageDuration,
                easing: "linear",
                complete: function() {
                    this._sliding = !1;
                    this.origin.css("transform", "");
                    this.origin.css("left", a);
                    this.positionBookShadow();
                    e.isFunction(b) && b()
                },
                step: function(a, b) {
                    g.translate(this.origin, c + a * d);
                    this.positionBookShadow()
                }
            })
        },
        holdPage: function(a, b, c, d, e) {
            "number" === typeof a && (a = this.pages[a]);
            if (a) {
                var f = a.pageIndex,
                    h = this.pages.length - 1,
                    l = !this.otherPage(h);
                if (!d) d = this.pageIsOnTheLeft(f) ? "l" : "r";
                else if (!this.corners[d] || (this.pageIsOnTheLeft(f) ? /r/ : /l/).test(d)) return;
                void 0 === e && (e = this.backPage(f));
                if (e) {
                    var w = e.pageIndex;
                    a.data("holded_info", [b, c, d]);
                    if (!this._singlePage && this.centeredWhenClosed && (0 === f || 0 === w || l && (w === h || f === h))) {
                        var r = 0,
                            u, m = !this.rtl,
                            k = this.pageWidth,
                            n, q, p, t, v, z, A, B;
                        if (m ? 0 === f : f === h && l) n = -k / 2, q = -k / 4, p = 0, t = -k / 2, v = -k, z = q, A = v, B = b;
                        if (m ? f === h && l : 0 === f) n = k, q = 3 * k / 2, p = k / 2, t = 0, v = k, z = 2 * k, A = b, B = z;
                        if (m ? 0 === w : w === h && l) n = k / 2, q = f === (m ? h : 0) ?
                            k : 3 * k / 2, p = f === (m ? h : 0) ? k / 2 : 0, t = -k / 2, v = n, z = 2 * k, A = b, B = z;
                        if (m ? w === h && l : 0 === w) n = f === (m ? 0 : h) ? 0 : -k / 2, q = k / 2, p = k / 2, t = f === (m ? 0 : h) ? -k / 2 : 0, v = -k, z = q, A = v, B = b;
                        b < n && (r = p, u = A);
                        b > q && (r = t, u = B);
                        b >= n && b <= q && (b = (b - n) / (q - n), r = p + b * (t - p), u = v + b * (z - v));
                        b = u;
                        this.origin.css("left", r);
                        this.positionBookShadow()
                    }
                    this.zoomed || "basic" == this.pageType(a) || "basic" == this.pageType(e) ? this.foldPageBasic(a, b, c, d, e) : a.isHardPage || e.isHardPage ? this.holdHardpage(a, b, c, d, e) : this.foldPage(a, b, c, d, e);
                    if (!a.data("holded") && (a.addClass("wowbook-page-holded"),
                            e.addClass("wowbook-page-holded"), a.data("holded", !0), this.holdedPage = a, this.holdedPageBack = e, this.shadows && this.shadowClipper.css("display", "block"), this.clipBoundaries && this.clipper.css("overflow", "visible"), this.positionBookShadow(), this.opts.onHoldPage)) this.opts.onHoldPage(this, f, a, e)
                }
            }
        },
        foldPage: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip = this.foldPageStart(a, b, c, d, e));
            this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.foldPageStyles(this._currentFlip))
        },
        foldPageStart: function(a, b, c, d, e) {
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === e && (e = this.backPage(f.pageIndex));
            if (e && e.length) {
                f.back = e;
                f.pageContent = a.children().first();
                f.backContent = e.children().first();
                var h = f.page.pageWidth,
                    l = f.page.pageHeight;
                d || (d = "tl");
                if ("l" == d || "r" == d) {
                    var w = {
                        x: "l" == d ? 0 : h,
                        y: c
                    };
                    a.data("grabPoint", w);
                    f.grabPoint = w;
                    d = (c >= w.y ? "t" :
                        "b") + d
                }
                f.page.data("holdedAt", {
                    x: b,
                    y: c
                });
                f.x = b;
                f.y = c;
                f.page.data("holdedCorner", d);
                f.corner = d;
                f.pageDiagonal = Math.sqrt(h * h + l * l);
                b = Math.ceil(f.pageDiagonal);
                b = "rect(-" + b + "px " + b + "px " + b + "px 0px)";
                f.page.css("clip", b);
                f.pageLeft = parseFloat(a.css("left"));
                e.css({
                    left: f.pageLeft + "px",
                    zIndex: 1E5,
                    clip: b
                });
                f.shadowHeight = 2 * Math.ceil(f.pageDiagonal);
                f.shadowTop = -(f.shadowHeight - l) / 2;
                this.shadowClipper.css({
                    top: f.page.top,
                    left: a.onLeft ? a.left : e.left,
                    width: 2 * h,
                    height: l
                });
                this.internalShadow.css({
                    display: "block",
                    height: f.shadowHeight
                });
                f.foldShadowWidth = this.foldShadow.width();
                this.foldShadow.css({
                    display: "block",
                    height: f.shadowHeight
                });
                this.foldGradientContainer.appendTo(f.backContent);
                f.foldGradientWidth = this.foldGradientElem.width();
                f.foldGradientHeight = 2 * Math.ceil(f.pageDiagonal);
                this.foldGradientElem.css("height", f.foldGradientHeight);
                this.foldGradientContainer.css({
                    position: "absolute",
                    width: f.foldGradientWidth,
                    height: f.foldGradientHeight,
                    top: 0,
                    left: 0,
                    display: "none"
                });
                f.foldGradientVisible = !1;
                return f
            }
        },
        foldPageStyles: function(a) {
            var b = a.page.pageWidth,
                c = a.page.pageHeight,
                d = b / 2,
                g = c / 2,
                f = e.wowBook.utils.translate,
                h = a.x,
                l = a.y,
                w = a.back,
                r = a.corner || "tl";
            if ("l" == r || "r" == r) {
                var u = a.page.data("grabPoint");
                u || (u = {
                    x: "l" == r ? 0 : b,
                    y: l
                }, page.data("grabPoint", u));
                r = (l >= u.y ? "t" : "b") + (this.pageIsOnTheLeft(a.pageIndex) ? "l" : "r");
                a.corner = r;
                a.page.data("holdedCorner", r);
                var k = h - u.x,
                    m = l - u.y,
                    k = Math.atan2(m, k),
                    u = {
                        x: 0,
                        y: (l >= u.y ? 0 : c) - u.y
                    },
                    u = v(u, 2 * k),
                    h = u.x + h,
                    l = u.y + l
            }
            a.page.data("holdedAt", {
                x: h,
                y: l
            });
            a.page.data("holdedCorner",
                r);
            var u = a.page.corners[r],
                r = b - u[0],
                n = u[1],
                k = h - r,
                m = l - n,
                q = Math.sqrt(k * k + m * m);
            q > b && (h = r + b * k / q, l = n + b * m / q);
            var n = c - n,
                k = h - r,
                m = l - n,
                q = Math.sqrt(k * k + m * m),
                p = a.pageDiagonal;
            q > p && (h = r + p * k / q, l = n + p * m / q);
            r = u[0];
            u = u[1];
            u == l && (l = u + .001);
            k = h - r;
            m = l - u;
            q = Math.sqrt(k * k + m * m);
            h = q / 2;
            k = Math.atan2(m, k);
            m = Math.tan(k);
            l = k;
            k = 180 * k / Math.PI;
            n = {
                x: r - d,
                y: g - u
            };
            p = v(n, l);
            q = p.x + h + d + .5;
            a.pageContent.css("transform", f(-q, 0) + " rotate(" + (-k).toFixed(7) + "deg)");
            a.page.css("transform", f((Math.cos(l) * q).toFixed(5), (Math.sin(l) * q).toFixed(5)) +
                " rotate(" + k.toFixed(7) + "deg)");
            p = this.calculateOpacity(h, b, this.shadowThreshold, 50);
            if (this.shadows && 0 < p) {
                var t = a.shadowTop;
                this.internalShadow.css({
                    transform: f(q + (a.page.onRight ? a.page.pageWidth : 0), t) + " rotate(" + k + "deg)",
                    transformOrigin: d - q + "px " + (g + (a.shadowHeight - c) / 2) + "px"
                });
                q -= a.foldShadowWidth;
                this.foldShadow.css({
                    transform: f(q + (a.page.onRight ? a.page.pageWidth : 0), t) + " rotate(" + k + "deg)",
                    transformOrigin: d - q + "px " + (g + (a.shadowHeight - c) / 2) + "px"
                });
                this.shadowContainer.css({
                    opacity: p,
                    display: "block"
                })
            } else this.shadowContainer.css("display",
                "none");
            w.show();
            n.x = -n.x;
            p = v(n, -l);
            q = p.x - h + d - 1;
            c = {
                x: p.x - h,
                y: p.y + h * m
            };
            w = {
                x: p.x - h,
                y: p.y - h / (0 == m ? 1E-4 : m)
            };
            c = v(c, -l);
            w = v(w, -l);
            w = -(w.x + d);
            c = -(c.y - g);
            a.backContent.css("transform", f(-q, 0) + " rotate(" + k + "deg)");
            a.back.css("transform", f((r + w + Math.cos(l) * q).toFixed(5), (u - c + Math.sin(l) * q).toFixed(5)) + " rotate(" + k + "deg)");
            p = this.calculateOpacity(2 * h, 2 * b, this.foldGradientThreshold, 50);
            this.foldGradient && 0 < p ? (this.foldGradientContainer.css({
                opacity: p,
                display: "block",
                transform: f(b - r - a.foldGradientWidth / 2, u - a.foldGradientHeight /
                    2) + " rotate(" + -k + "deg)"
            }), this.foldGradientElem.css("transform", f(-h + a.foldGradientWidth / 2, 0)), a.foldGradientVisible || (this.foldGradientContainer.css("display", "block"), a.foldGradientVisible = !0)) : a.foldGradientVisible && (this.foldGradientContainer.css("display", "none"), a.foldGradientVisible = !1)
        },
        holdHardpage: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip = this.flipHardPageStart(a, b, c, d, e));
            this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.flipHardPageStyles(this._currentFlip))
        },
        flipHardPageStart: function(a, b, c, d, g) {
            this.clipBoundaries && this.clipper.children(".wowbook-inner-clipper").css("overflow", "visible");
            !this.border3D && this.opts.pageThickness && this.opts.use3d && Modernizr.csstransforms3d && (this.border3D = e('<div class="wowbook-3d-border">'), this.border3D.css("background", this.opts.pageEdgeColor));
            this.opts.hardPageShadow && !this.hardPageShadow && (this.hardPageShadow = e('<div class="wowbook-hard-page-shadow">'));
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === g && (g = this.backPage(f.pageIndex));
            if (g && g.length) {
                f.back = g;
                var h = a.pageWidth;
                d || (d = "tl");
                a.data("holdedAt", {
                    x: b,
                    y: c
                });
                a.data("holdedCorner", d);
                a.css("zIndex", 1E5);
                g.css("zIndex", 1E5);
                this.opts.use3d && Modernizr.csstransforms3d && (a.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"), g.css(Modernizr.prefixed("perspectiveOrigin"), "0 50%"));
                b = a.onLeft ? h : 0;
                a.css("transformOrigin", b + "px 50%");
                g.css("transformOrigin",
                    h - b + "px 50%");
                this.border3D && this.border3D.css("width", a.thickness);
                this.shadows && this.hardPageDropShadow.css({
                    display: "block",
                    width: a.pageWidth,
                    height: a.pageHeight,
                    top: a.top
                });
                return f
            }
        },
        flipHardPageStyles: function(a) {
            var b = a.page,
                c = a.back,
                d = a.x,
                g = a.y,
                f = this.pageIsOnTheRight(a.pageIndex),
                h = this.pageWidth,
                l = this.pageHeight;
            (a = a.corner) || (a = "tl");
            b.data("holdedAt", {
                x: d,
                y: g
            });
            b.data("holdedCorner", a);
            g = f ? h - d : d;
            a = f ? 0 : h;
            var k;
            0 > g && (g = 0);
            g = (k = g < h) ? b : c;
            (k ? c : b).css("display", "none");
            f = f != k;
            a = d - a;
            a > h && (a =
                h);
            a < -h && (a = -h);
            var r = -Math.sqrt(1600 * (1 - a * a / ((h + 15) * (h + 15))));
            k = Math.abs(a / h);
            r = 1 == k ? 0 : Math.atan2(r, a);
            if (this.opts.use3d && Modernizr.csstransforms3d) {
                var m;
                m = f ? -this._calculateAngleFromX(-a, h) : this._calculateAngleFromX(a, h);
                if (this.animating) {
                    var n = this._animationData;
                    if (this.curledPage || n.curled) n.curled = !0, n.angle || (r = {
                            from: m,
                            to: 0
                        }, n.angle = r, m = a + n.dx, r.to = f ? -this._calculateAngleFromX(-m, h) : this._calculateAngleFromX(m, h), Math.abs(a) == h && (r.from = 0), Math.abs(m) == h && (r.to = 0), r.delta = r.to - r.from), m =
                        n.angle.from - n.angle.delta * (n.from.x - d) / n.dx
                }
                g.append(this.border3D);
                this.hardPageShadow && (g.append(this.hardPageShadow), this.hardPageShadow.css("opacity", 1 - k));
                g.css({
                    transform: "perspective(" + this.opts.perspective + this.perspectiveUnit + ") rotate3d(0, 1, 0, " + m + "deg)",
                    display: "block"
                })
            } else g.css({
                transform: "skewY(" + r + "rad) scaleX(" + k + ")",
                display: "block"
            });
            !e.wowBook.support.transform && e.wowBook.support.filters && (g.css("filter", "progid:DXImageTransform.Microsoft.Matrix(" + ("M11=" + k + ", M12=0, M21=" +
                Math.tan(r) * k + ", M22=1") + ", sizingMethod='auto expand')"), g.css({
                marginTop: l - g.height(),
                marginLeft: f ? h - g.width() : 0
            }));
            this.shadows && this.hardPageDropShadow.css({
                left: f ? b.onLeft ? b.left : c.left : h,
                opacity: Math.abs(a) < h / 2 ? 0 : (Math.abs(a) - h / 2) / h * .8
            })
        },
        _calculateAngleFromX: function(a, b, c) {
            var d = 2 * b / 3;
            if (a > d) {
                var e = this._calculateAngleFromX(d, b, c);
                return e + (a - d) / (b - d) * (0 - e)
            }
            c = c || this.opts.perspective;
            d = 180 / Math.PI;
            e = b * b;
            c *= c;
            var f = a * a;
            a = Math.acos((b * c * a - Math.sqrt(e * e * c * f + e * e * f * f - e * c * f * f)) / (e * c + e * f));
            return -a *
                d
        },
        foldPageBasic: function(a, b, c, d, e) {
            this._currentFlip || (this._currentFlip = this.foldPageBasicStart(a, b, c, d, e));
            this._currentFlip && this._currentFlip.page == a && (this._currentFlip.x = b, this._currentFlip.y = c, this._currentFlip.page.data("holdedAt", {
                x: b,
                y: c
            }), this._currentFlip.corner = d, this.foldPageBasicStyles(this._currentFlip))
        },
        foldPageBasicStart: function(a, b, c, d, e) {
            var f = {};
            "number" === typeof a && (a = this.pages[a]);
            f.book = this;
            f.page = a;
            f.pageIndex = a.data("pageIndex");
            void 0 === e && (e = this.backPage(f.pageIndex));
            if (e && e.length) {
                f.back = e;
                var h = a.pageHeight;
                d || (d = "tl");
                a.data("holdedAt", {
                    x: b,
                    y: c
                });
                a.data("holdedCorner", d);
                e.css("zIndex", 1E5);
                a.data("foldPageBasic", !0);
                f.foldGradientWidth = this.foldGradientElem.width();
                f.foldShadowWidth = this.foldShadow.width();
                this.internalShadow.css("display", "none");
                this.foldShadow.css({
                    display: "none",
                    height: h,
                    transform: "",
                    top: a.top
                }).toggleClass("wowbook-shadow-fold-flipped", a.onRight);
                this.shadowContainer.css("display", "block");
                b = e.children().first();
                this.foldGradientContainer.appendTo(b).css({
                    width: f.foldGradientWidth,
                    height: h,
                    top: 0,
                    transform: "",
                    zIndex: 1E9
                });
                this.foldGradientElem.css({
                    left: 0,
                    height: h
                }).toggleClass("wowbook-fold-gradient-flipped", a.onRight);
                return f
            }
        },
        foldPageBasicStyles: function(a) {
            var b = a.page,
                c = a.back;
            x = a.x;
            y = a.y;
            var d = b.pageWidth,
                e = b.pageHeight,
                f = a.corner;
            f || (f = "tl");
            b.data("holdedAt", {
                x: x,
                y: y
            });
            b.data("holdedCorner", f);
            var h = (f = this.pageIsOnTheLeft(a.pageIndex)) ? x : d - x;
            0 > h && (h = 0);
            h > 2 * d && (h = 2 * d);
            var l = h / 2,
                k;
            f ? (k = "rect(-1000px " + d + "px " + e + "px " + l + "px)", e = "rect(-1000px " + d + "px " + e + "px " + (d - l) +
                "px)", h = b.left + (h - d)) : (k = "rect(-1000px " + (d - l) + "px " + e + "px -1000px)", e = "rect(-1000px " + l + "px " + e + "px -1000px)", h = c.left + (d - h + d));
            b.css("clip", k);
            c.css({
                clip: e,
                left: h,
                display: "block"
            });
            k = this.calculateOpacity(2 * l, 2 * d, this.shadowThreshold, 50);
            this.shadows && 0 < k ? (b = f ? b.left + l - a.foldShadowWidth : c.left + d - l + d, this.shadowContainer.css("opacity", k), this.foldShadow.css({
                left: b,
                display: "block"
            })) : this.foldShadow.css("display", "none");
            k = this.calculateOpacity(2 * l, 2 * d, this.foldGradientThreshold, 50);
            this.foldGradient &&
                0 < k ? (b = f ? d - l : l - a.foldGradientWidth, this.foldGradientContainer.css({
                    opacity: k,
                    left: b,
                    display: "block"
                })) : this.foldGradientContainer.css("display", "none")
        },
        stopAnimation: function(a) {
            arguments.length || (a = !0);
            e(this).stop(!0, a);
            this.animating = !1;
            this.currentFlip && (this.currentFlip.finished = !0)
        },
        flip: function(a, b, c, d) {
            d || (d = e.isPlainObject(a) ? a : {});
            d.from || (d.from = []);
            d.to || (d.to = []);
            var g = this;
            if (!g.animating) {
                g.animating = !0;
                c || (c = d.page || g.holdedPage);
                var f = c.data("holded_info");
                c.data("holdedAt");
                var h =
                    d.corner || c.data("holdedCorner"),
                    l = e.easing[d.easing] || d.easing || function(a) {
                        return 1 == a ? 1 : -Math.pow(2, -10 * a) + 1
                    };
                a = {
                    page: c,
                    back: d.back || g.holdedPageBack || g.backPage(c.pageIndex),
                    initialX: void 0 != d.from[0] ? d.from[0] : f[0],
                    initialY: void 0 != d.from[1] ? d.from[1] : f[1],
                    finalX: void 0 != d.to[0] ? d.to[0] : a,
                    finalY: void 0 != d.to[1] ? d.to[1] : b,
                    corner: h || f[2],
                    duration: d.duration,
                    complete: function() {
                        g.animating = !1;
                        e.isFunction(d.complete) && d.complete()
                    },
                    easing: l,
                    arc: d.arc,
                    dragging: d.dragging,
                    start: e.now(),
                    finished: !1
                };
                a.deltaX = a.finalX - a.initialX;
                a.deltaY = a.finalY - a.initialY;
                this._animationData = {
                    from: {
                        x: a.initialX,
                        y: a.initialY
                    },
                    to: {
                        x: a.finalX,
                        y: a.finalY
                    },
                    dx: a.deltaX
                };
                void 0 == a.duration && (a.duration = this.turnPageDuration * Math.abs(a.deltaX) / (2 * this.pageWidth));
                a.duration < this.opts.turnPageDurationMin && (a.duration = this.opts.turnPageDurationMin);
                !c.isHardPage && .4 < a.duration / this.turnPageDuration && this.playFlipSound();
                this.currentFlip = a
            }
        },
        rafCallback: function() {
            window.raf(this.callRAFCallback);
            this._zoomUpdateOnRAF();
            if (this.currentFlip && !this.currentFlip.finished) {
                var a = this.currentFlip,
                    b = (e.now() - a.start) / a.duration;
                1 <= b && (b = 1);
                a.x = a.initialX + a.deltaX * a.easing(b, a.duration * b, 0, 1, a.duration);
                a.y = a.initialY + a.deltaY * a.easing(b, a.duration * b, 0, 1, a.duration);
                a.arc && (a.y -= (.5 - Math.abs(.5 - a.easing(b, a.duration * b, 0, 1))) * this.pageHeight / 10);
                a.dragging && (a.x = a.initialX + .2 * a.deltaX, a.y = a.initialY + .2 * a.deltaY, a.initialX = a.x, a.initialY = a.y, a.deltaX = a.finalX - a.initialX, a.deltaY = a.finalY - a.initialY, 1 > a.deltaX && 1 > a.deltaY &&
                    1 == b);
                this.holdPage(a.page, a.x, a.y, a.corner, a.back);
                1 == b && (a.finished = !0, a.complete && a.complete())
            }
        },
        releasePages: function() {
            for (var a = 0, b = this.pages.length; a < b; a++) this.pages[a].data("holded") && this.releasePage(a)
        },
        releasePage: function(a, b, c, d) {
            "number" === typeof a && (a = this.pages[a]);
            var e = this,
                f = a.data("holdedAt"),
                h = a.data("holdedCorner");
            if (b && f) this.flip({
                from: [f.x, f.y],
                to: a.corners[h],
                page: a,
                easing: "linear",
                duration: 1E4,
                duration: d,
                complete: function() {
                    e.releasePage(a)
                }
            });
            else if (b = a.data("pageIndex"),
                void 0 === c && (c = this.holdedPageBack || this.backPage(b)), this.holdedPageBack = this.holdedPage = null, a.data({
                    holded_info: null,
                    holdedAt: null,
                    holdedCorner: null,
                    grabPoint: !1,
                    foldPageBasic: null,
                    holded: !1
                }), this.clipBoundaries && !this.zoomed && (this.clipper.css("overflow", "hidden"), this.clipper.children(".wowbook-inner-clipper").css("overflow", "hidden")), this.shadowClipper.css("display", "none"), this.internalShadow.parent().hide(), this.foldGradientContainer.hide(), this.hardPageDropShadow.hide(), this.resetPage(a),
                c && c.length && (this.resetPage(c), c.hide()), this.foldShadow.removeClass("wowbook-shadow-fold-flipped").css({
                    transform: "",
                    left: ""
                }), this.foldGradientElem.removeClass("wowbook-fold-gradient-flipped").css("transform", ""), this.foldGradientContainer.css("transform", "").appendTo(this.pagesContainer), this.positionBookShadow(), this.opts.onReleasePage) this.opts.onReleasePage(this, b, a, c)
        },
        resetPage: function(a) {
            this._currentFlip = void 0;
            a.removeClass("wowbook-page-holded");
            this.resetCSS || (this.resetCSS = {
                transform: "",
                transformOrigin: "",
                clip: "auto",
                marginLeft: 0,
                marginTop: 0,
                filter: ""
            });
            var b = a.pageWidth,
                c = a.pageHeight;
            a.css(this.resetCSS).css({
                zIndex: a.data("zIndex"),
                width: b,
                height: c,
                left: a.onLeft ? 0 : this.pageWidth
            });
            this.setPagePosition(a);
            e.browser.msie && 9 > e.browser.version && a.attr("style", a.attr("style").replace(/clip\: [^;]+;/i, ""));
            a = e(".wowbook-page-content", a);
            a.css(this.resetCSS);
            n(a, b, c);
            this.hardPageShadow && this.hardPageShadow.hide()
        },
        gotoPage: function(a, b) {
            var c, d;
            if (!this.animating) {
                "string" === typeof a &&
                    "#" == a.charAt(0) && (a = this.selectorToPage(a));
                0 > a && (a = 0);
                a > this.pages.length - 1 && (a = this.pages.length - 1);
                if (this._singlePage) {
                    if (a == this.currentPage) return
                } else if (this.isOnPage(a)) return;
                if (!this.elem.is(":visible")) return this.showPage(a, b), a;
                this._cantStopAnimation = !0;
                var e = a < this.currentPage;
                c = this.rtl ? a > this.currentPage : e;
                var f = this,
                    h = c ? f.leftPage() : f.rightPage();
                if (h) {
                    this.uncurl(!0);
                    var l, k;
                    c ? (l = this.leftPage(a), k = this.rightPage(a)) : (l = this.rightPage(a), k = this.leftPage(a));
                    if (this.closable &&
                        this.differentPageSizes && h.isCover != k.isCover && h.pageIndex !== a) {
                        if (0 == h.pageIndex || 0 == k.pageIndex) this.showPage(1, !1);
                        else {
                            var m = this.pages.length - 1;
                            this.otherPage(m) || h.pageIndex != m && k.pageIndex != m || this.showPage(this.backPage(m).pageIndex, !1)
                        }
                        this.gotoPage(k.pageIndex)
                    } else {
                        var n = k && k.is(":visible");
                        if (e)
                            for (e = h.pageIndex - 1; 0 <= e; e--) this.pages[e].css("display", "none");
                        else
                            for (e = h.pageIndex + 1, d = this.pages.length; e < d; e++) this.pages[e].css("display", "none");
                        l && (l.css("display", "block"), l.onLeft ? this.insideCoverLeft.css("display",
                            "block") : this.insideCoverRight.css("display", "block"));
                        n && k.css("display", "block");
                        var q = a;
                        l = h.data("holdedAt");
                        n = h.data("holdedAt");
                        e = h.data("holdedCorner") || (c ? "tl" : "tr");
                        c ? (n = n || {
                            x: 0,
                            y: 0
                        }, c = 2 * f.pageWidth, d = "bl" != e ? 0 : h.pageHeight) : (n = n || {
                            x: h.pageWidth,
                            y: 0
                        }, c = -h.pageWidth, d = "br" != e ? 0 : h.pageHeight);
                        var p = "linear";
                        if (this.centeredWhenClosed && !this._singlePage && (h.isHardPage || k.isHardPage)) {
                            var m = this.pages.length - 1,
                                t = !this.rtl,
                                p = "easeOutCubic";
                            this.pageIsOnTheRight(this.currentPage) && !this.otherPage(this.currentPage) &&
                                (c += this.pageWidth / 2, a != (t ? m : 0) || this.otherPage(a) || (c += this.pageWidth / 2));
                            this.pageIsOnTheLeft(this.currentPage) && !this.otherPage(this.currentPage) && (c -= this.pageWidth / 2, a != (t ? 0 : m) || this.otherPage(a) || (c -= this.pageWidth / 2))
                        }
                        if (this._singlePage) {
                            if (this.isOnPage(a)) return this.animating = !0, this.slideX(this.pageIsOnTheLeft(a) ? 0 : -this.pageWidth, function() {
                                f._cantStopAnimation = !1;
                                f.animating = !1;
                                f.showPage(q, b)
                            }), a;
                            this.slideX(this.pageIsOnTheLeft(a) ? 0 : -this.pageWidth, function() {
                                f.showPage(q, b)
                            })
                        }
                        f.flip({
                            from: [n.x,
                                n.y
                            ],
                            to: [c, d],
                            easing: p,
                            arc: !l,
                            page: h,
                            back: k,
                            corner: e,
                            complete: function() {
                                f._cantStopAnimation = !1;
                                f.releasePage(h, !1);
                                f.showPage(q, b)
                            }
                        });
                        return a
                    }
                }
            }
        },
        gotoDirection: function(a, b) {
            void 0 == b && (b = this.currentPage);
            "left" == a && (a = -1);
            "right" == a && (a = 1);
            var c = a * (this._singlePage ? 1 : 2);
            this.rtl && (c = -c);
            return this.gotoPage(b + c)
        },
        gotoLeft: function(a) {
            return this.gotoDirection("left", a)
        },
        gotoRight: function(a) {
            return this.gotoDirection("right", a)
        },
        back: function() {
            return this.gotoPage(this.currentPage - (this._singlePage ?
                1 : 2))
        },
        advance: function() {
            return this.gotoPage(this.currentPage + (this._singlePage ? 1 : 2))
        },
        leftPage: function(a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.leftPageIndex(a)] || null
        },
        leftPageIndex: function(a) {
            if (null != a) {
                this.pageIsOnTheRight(a) && (a += this.rtl ? 1 : -1);
                if (0 > a || a > this.pages.length - 1) a = null;
                return a
            }
        },
        rightPage: function(a) {
            void 0 === a && (a = this.currentPage);
            return this.pages[this.rightPageIndex(a)] || null
        },
        rightPageIndex: function(a) {
            if (null != a) {
                this.pageIsOnTheLeft(a) && (a += this.rtl ?
                    -1 : 1);
                if (0 > a || a > this.pages.length - 1) a = null;
                return a
            }
        },
        pageIsOnTheRight: function(a) {
            return !this.pageIsOnTheLeft(a)
        },
        pageIsOnTheLeft: function(a) {
            a = !(a % 2);
            this.closable && (a = !a);
            this.rtl && (a = !a);
            return a
        },
        otherPage: function(a) {
            var b = this.pageIsOnTheLeft(a) ? 1 : -1;
            this.rtl && (b = -b);
            a += b;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        isOnPage: function(a) {
            return "number" === typeof a && (a === this.currentPage || a === this.otherPage(this.currentPage))
        },
        backPage: function(a) {
            if (!this.pages[a]) return null;
            var b = a % 2 ? 1 : -1;
            a += this.closable ? -b : b;
            return this.pages[a]
        },
        pageBelow: function(a) {
            a = parseInt(a, 10);
            if (a != a) return null;
            a += this.pageIsOnTheLeft(a) != this.rtl ? -2 : 2;
            if (0 > a || a > this.pages.length - 1) a = null;
            return a
        },
        pageType: function(a) {
            a = "number" === typeof a ? this.pages[a] : a;
            return a.isHardPage ? "hard" : a.find(".wowbook-page-content.wowbook-basic-page").length ? "basic" : "soft"
        },
        calculateOpacity: function(a, b, c, d) {
            if (a <= c || a >= b - c) return 0;
            if (a >= d && a <= b - d) return 1;
            a > d && (a = b - a);
            return (a - c) / (d - c)
        },
        startSlideShow: function() {
            this.slideShowRunning = !0;
            this.advanceAfterTimeout(this.slideShowDelay);
            this.toggleControl("slideshow", !0)
        },
        advanceAfterTimeout: function(a) {
            var b = this;
            this.slideShowTimer = setTimeout(function() {
                if (b.animating || b.holdedPage) b.advanceAfterTimeout(100);
                else {
                    var a = b.isOnPage(b.pages.length - 1);
                    b.opts.slideShowLoop && a ? b.gotoPage(0) : b.advance();
                    b.opts.slideShowLoop || !a ? b.advanceAfterTimeout(b.slideShowDelay + b.turnPageDuration) : b.stopSlideShow()
                }
            }, a)
        },
        stopSlideShow: function(a) {
            clearTimeout(this.slideShowTimer);
            this.slideShowTimer =
                void 0;
            this.slideShowRunning = !1;
            a || this.toggleControl("slideshow", !1)
        },
        toggleSlideShow: function() {
            this.slideShowRunning ? this.stopSlideShow() : this.startSlideShow()
        },
        findSections: function(a) {
            a && (this.sectionDefinition = a);
            var b = this.sectionDefinition;
            a = [];
            var c;
            "string" === typeof b && (c = b, b = [], e(c, this.elem).each(function(a, c) {
                b.push(["#" + c.id, e(c).html()])
            }));
            if (e.isArray(b)) {
                for (var d = 0, g = b.length; d < g; d++) {
                    c = b[d];
                    if ("string" === typeof c) try {
                        c = [c, e(c, this.elem).html()]
                    } catch (f) {
                        continue
                    }
                    try {
                        c[2] = this.selectorToPage(c[0])
                    } catch (f) {
                        continue
                    }
                    void 0 !==
                        c[2] && a.push({
                            id: c[0],
                            title: c[1],
                            page: c[2]
                        })
                }
                a = a.sort(function(a, b) {
                    return a.page - b.page
                })
            }
            return this.sections = a
        },
        pageToSection: function(a) {
            for (var b = this.sections, c, d = 0, e = b.length; d < e && !(b[d].page > a); d++) c = b[d];
            return c
        },
        currentSection: function() {
            return this.pageToSection(this.currentPage)
        },
        fillToc: function(a, b) {
            var c = e(a || this.opts.toc),
                d, g, f = "";
            if (0 !== c.length) {
                d = this.sections;
                "undefined" === typeof b && (b = this.opts.tocTemplate);
                b || (f = c.is("UL, OL") ? "<li>" : "<div>", b = '<a href="${link}">${section}</a>');
                for (var h = 0, l = d.length; h < l; h++) g = d[h], g = b.replace(/\$\{link\}/g, "#" + this.id + "/" + g.id.substr(1)).replace(/\$\{section\}/g, g.title).replace(/\$\{page\}/g, g.page), e(g).appendTo(c).wrap(f)
            }
        },
        createToc: function(a) {
            a = this.opts.toc || a || [];
            var b = this.tocContainer = e("<div class='wowbook-toc' style='display:none'>").prependTo(e(this.opts.tocParent || "body"));
            b.append("<h1>" + this.opts.tocHeader + "<button class='wowbook-close'>&#10005;</button></h1>");
            this.controllify({
                toc: b.find(".wowbook-close")
            });
            b = e("<ul class='wowbook-toc-items'>").appendTo(b);
            this.createTocItemList(a, b);
            b.on("click", ".wowbook-toc-item-toggle", function() {
                e(this).parent().toggleClass("wowbook-collapsed")
            });
            this.setStyle(this.opts.styles || this.opts.style)
        },
        createTocItemList: function(a, b) {
            for (var c = this, d, g, f = 0, h = a.length; f < h; f++) {
                d = a[f];
                g = this.createTocItem(d[0], d[1]).appendTo(b);
                if (d[3]) g.find("a").on("click", {
                    dest: d[3]
                }, function(a) {
                    a.preventDefault();
                    c.pdfNavigateTo(a.data.dest)
                });
                d[2] && d[2].length && (g.addClass("wowbook-collapsed"), e("<span class='wowbook-toc-item-toggle'></span>").prependTo(g),
                    g = e("<ul class='wowbook-toc-items'>").appendTo(g), this.createTocItemList(d[2], g))
            }
        },
        createTocItem: function(a, b) {
            var c = this.opts.tocItemTemplate || '<li class="wowbook-toc-item"><a href="${link}">${title}<span class="page">${page}</span></a></li>',
                d = "";
            e.isNumeric(b) && (d = b, b = this.pageToLocationHash(b));
            c = c.replace(/\$\{link\}/g, b).replace(/\$\{title\}/g, a).replace(/\$\{page\}/g, d);
            return e(c)
        },
        destroyToc: function() {
            this.tocContainer && this.tocContainer.remove();
            this.tocContainer = null
        },
        showToc: function(a) {
            this.tocContainer &&
                this.tocContainer.length || this.createToc();
            this.tocContainer.fadeIn(a)
        },
        hideToc: function(a) {
            this.tocContainer.fadeOut(a)
        },
        toggleToc: function(a) {
            e(this.tocContainer).is(":visible") ? this.hideToc(a) : this.showToc(a)
        },
        locationHashToPage: function(a, b) {
            void 0 === a && (a = window.location.hash);
            if (a == "#" + this.id + "/") return 0;
            a = a.slice(1).split("/");
            if (a[0] === this.id) {
                if (1 === a.length) return 0;
                var c = parseInt(a[1]);
                if (!isNaN(c)) return Math.max(c - 1, 0);
                c = this.selectorToPage("#" + a[1]);
                if (void 0 === c) return 0;
                isNaN(a[2]) ||
                    (c += Math.max(parseInt(a[2]) - 1, 0));
                return +c
            }
        },
        pageToLocationHash: function(a) {
            var b = "",
                c = a + 1;
            if (a = this.pageToSection(a)) b += "/" + a.id.replace("#", ""), c -= a.page;
            1 < c && (b += "/" + c);
            return "#" + this.id + (b || "/")
        },
        selectorToPage: function(a) {
            a = e(a, this.elem).closest(".wowbook-page");
            if (a.length) return +a.data("pageIndex")
        },
        getLocationHash: function() {
            return window.location.hash.slice(1)
        },
        locationEndsInHash: function(a) {
            void 0 === a && (a = window.location.href);
            return a.lastIndexOf("#") == a.length - 1
        },
        zoomSetup: function() {
            this._zoomOffset = {
                dx: 0,
                dy: 0
            };
            this._cssZoom = this._cssZoom || 1;
            this.zoomLevel = 1;
            this.detectBestZoomMethod();
            this.zoomTouchSupport();
            this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
            this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
            this.toggleControl("zoomReset", 1 == this.zoomLevel);
            if (this.opts.doubleClickToZoom) {
                var a = this;
                this.elem.on("dblclick", function(b) {
                    var c = a.elem.offset(),
                        d = b.pageX - c.left;
                    b = b.pageY - c.top;
                    a.zoomed ? a.zoomReset() : a.zoomIn(1, {
                        x: d,
                        y: b
                    })
                })
            }
        },
        _zoomUpdateOnRAF: function() {
            if (this._zoomDataRAF) {
                var a =
                    e.extend({}, this._zoomDataRAF.options),
                    b = this._zoomDataRAF.options.offset;
                if (b) {
                    var c = this._zoomOffset,
                        d = b.dx - c.dx,
                        g = b.dy - c.dy;
                    a.offset = {
                        dx: c.dx + .2 * d,
                        dy: c.dy + .2 * g
                    }
                }
                c = this._zoomDataRAF.level || this.zoomLevel;
                c != this.zoomLevel && (c = this.zoomLevel + .2 * (c - this.zoomLevel));
                a.transform = !0;
                this._zoom(c, a);
                b && 1 > Math.abs(d) && 1 > Math.abs(g) && 1 > Math.abs(this.zoomLevel - c) && (this._zoomDataRAF.callback && this._zoomDataRAF.callback.call(this), this._zoomDataRAF = null)
            }
        },
        _zoom: function(a, b) {
            b || (b = {});
            var c = void 0 != b.x ?
                b.x : this.pageWidth * this.currentScale,
                d = b.y || 0;
            this._zoomOffset = b.offset || this.zoomFocusOffset(a, c, d);
            this.zoomLevel = a;
            var c = b.transform || this.opts.zoomUsingTransform,
                g = a * this.currentScale,
                d = e.browser.ie7 ? 1 : c ? this._cssZoom : g,
                f = this.zoomWindow,
                h = this.zoomContent,
                l = e(this.zoomBoundingBox),
                k = l.outerWidth(),
                m = l.outerHeight(),
                n = f.offset();
            f.position();
            l = l[0] !== window ? l.offset() : {
                left: l.scrollLeft(),
                top: l.scrollTop()
            };
            f.css({
                width: k,
                height: m
            });
            k = l.left - n.left;
            n = l.top - n.top;
            k && (k += parseFloat(f.css("marginLeft")),
                f.css("marginLeft", k), h.marginLeft = k);
            n && (n += parseFloat(f.css("marginTop")), f.css("marginTop", n), h.marginTop = n);
            f = "";
            n = this._zoomOffset.dx / d;
            k = this._zoomOffset.dy / d;
            e.wowBook.support.transform && (n || k) ? f = e.wowBook.utils.translate(n, k) : h.css({
                left: n,
                top: k
            });
            c ? (g /= d, f += this.opts.useScale3d ? "scale3d(" + g + "," + g + ",1)" : "scale(" + g + ")") : (this._cssZoom = g, h.css("zoom", g), h.css("marginLeft", -h.marginLeft / d), h.css("marginTop", -h.marginTop / d));
            e.wowBook.support.transform && h.css("transform", f);
            1 !== this.zoomLevel ?
                this.zoomed || (h.css("marginLeft", -h.marginLeft / d), h.css("marginTop", -h.marginTop / d), c && h.css("transformOrigin", "0 0"), this.elem.find("img").each(function() {
                    var a = e(this);
                    a.data("wowbook-draggable-before-zoom", a.attr("draggable"));
                    a.attr("draggable", !1)
                })) : this.zoomFinished();
            this.zoomed = 1 !== a;
            h.toggleClass("wowbook-draggable", this.zoomed);
            this.toggleControl("zoomIn", this.zoomLevel == this.zoomMax);
            this.toggleControl("zoomOut", this.zoomLevel == this.zoomMin);
            this.toggleControl("zoomReset", 1 == this.zoomLevel)
        },
        zoom: function(a, b, c) {
            this.uncurl(!0);
            for (var d = 0, g = this.pages.length; d < g; d++)
                if (this.pages[d].data("holdedAt")) return;
            e.isPlainObject(b) && (c = b, b = c.duration);
            c || (c = {});
            if (a <= this.zoomMin && !c.resetting) return this.zoomReset(b, c);
            a > this.zoomMax && (a = this.zoomMax);
            if (a !== this.zoomLevel || c.force)
                if (void 0 == b && (b = this.opts.zoomDuration), 0 == b) {
                    if (this._zoom(a, c), c.callback && c.callback.apply(this), this.onZoom) this.onZoom(this)
                } else {
                    d = !this.opts.zoomUsingTransform && e.wowBook.support.transform;
                    this._zoomAnimating &&
                        (e(this).stop(), d && this.zoomContent.css("transform", ""));
                    this._zoomAnimating = this.zoomLevel;
                    var f = this,
                        g = c.x,
                        h = c.y || 0;
                    void 0 == g && (g = (this._singlePage ? this.pageWidth / 2 : this.pageWidth) * this.currentScale);
                    var l = {
                            x: g,
                            y: h,
                            offset: {
                                dx: 0,
                                dy: 0
                            }
                        },
                        k = e.extend({
                            dx: 0,
                            dy: 0
                        }, this._zoomOffset),
                        g = c.offset || this.zoomFocusOffset(a, g, h),
                        m = g.dx - k.dx,
                        n = g.dy - k.dy;
                    d && (l.transform = !0, this._isMobile && (this.leftPage() && this.leftPage().css("-webkit-transform", "translateZ(0)"), this.rightPage() && this.rightPage().css("-webkit-transform",
                        "translateZ(0)")));
                    e(this).animate({
                        _zoomAnimating: a
                    }, {
                        duration: b,
                        easing: c.easing || this.opts.zoomEasing,
                        complete: function() {
                            f._zoomAnimating = !1;
                            f._zoom(a);
                            c.callback && c.callback.apply(this);
                            if (f.onZoom) f.onZoom(f)
                        },
                        step: function(a, b) {
                            l.offset.dx = k.dx + m * b.pos;
                            l.offset.dy = k.dy + n * b.pos;
                            f._zoom(a, l)
                        }
                    })
                }
        },
        zoomFinished: function() {
            this.zoomWindow.css({
                overflow: "visible",
                width: this.zoomContent.width() * this.currentScale,
                height: this.zoomContent.height() * this.currentScale,
                marginLeft: 0,
                marginTop: 0
            });
            this.zoomContent.css({
                left: 0,
                top: 0,
                marginLeft: 0,
                marginTop: 0
            });
            this._zoomOffset = {
                dx: 0,
                dy: 0
            };
            this.elem.find("img").each(function() {
                var a = e(this);
                void 0 == a.data("wowbook-draggable-before-zoom") ? a.removeAttr("draggable") : a.attr("draggable", a.data("wowbook-draggable-before-zoom"))
            })
        },
        zoomReset: function(a, b) {
            e.isPlainObject(a) && (b = a, a = b.duration);
            b || (b = {});
            this._zoomDataRAF = null;
            b.offset = {
                dx: 0,
                dy: 0
            };
            b.resetting = !0;
            b.force = !0;
            b.callback = function() {
                this.zoomContent.css({
                    left: 0,
                    top: 0
                });
                this.zoomed = !1
            };
            this.zoom(1, a, b)
        },
        zoomIn: function(a,
            b) {
            e.isPlainObject(a) && (b = a, a = void 0);
            this.zoom(this.zoomLevel + (a || this.zoomStep), b)
        },
        zoomOut: function(a, b) {
            e.isPlainObject(a) && (b = a, a = void 0);
            this.zoom(this.zoomLevel - (a || this.zoomStep), b)
        },
        zoomFocusOffset: function(a, b, c, d, g) {
            d || (d = this._zoomOffset || {
                dx: 0,
                dy: 0
            });
            d = e.extend({
                dx: 0,
                dy: 0
            }, d);
            var f = d.dx || 0,
                h = d.dy || 0;
            g = a / (g || this.zoomLevel);
            b -= f;
            c -= h;
            a = b * g;
            g *= c;
            d.dx = f - (a - b);
            d.dy = h - (g - c);
            return {
                dx: f - (a - b),
                dy: h - (g - c)
            }
        },
        zoomTouchSupport: function() {
            if (this.opts.touchEnabled) {
                if (e.browser.ie8mode || e.browser.ie7) return this.zoomDragSupportForIE();
                var a = this,
                    b, c, d;
                a._hammer = new Hammer(a.zoomContent[0], a.opts.touch);
                var g = a._hammer;
                g.on("panstart pinchstart", function(b) {
                    a.zoomContent.addClass("wowbook-dragging")
                });
                g.on("hammer.input", function(b) {
                    if (a.zoomContent.hasClass("wowbook-draggable") && (e(b.target).is("img") && "mousedown" == b.srcEvent.type && b.preventDefault(), b.isFinal && a.zoomContent.hasClass("wowbook-dragging"))) {
                        c = d = null;
                        a.zoomContent.removeClass("wowbook-dragging");
                        b = a.zoomLevel;
                        var g = a._zoomDataRAF,
                            l = g ? g.level : b;
                        l < a.zoomMin || l == a.zoomMin &&
                            (a._zoomOffset.dx || a._zoomOffset.dy) ? g ? g.callback = function() {
                                a.zoomReset()
                            } : a.zoomReset() : a._zoom(b, {
                                force: !0,
                                offset: a._zoomOffset
                            })
                    }
                });
                g.on("panstart panmove", function(b) {
                    a.zoomed && (b.preventDefault(), d = null, c || (c = {
                        offset: e.extend({}, a._zoomOffset),
                        pageX: b.center.x,
                        pageY: b.center.y
                    }), a._zoomDataRAF = {
                        level: a.zoomLevel,
                        options: {
                            force: !0,
                            offset: {
                                dx: c.offset.dx + (b.center.x - c.pageX),
                                dy: c.offset.dy + (b.center.y - c.pageY)
                            }
                        }
                    })
                });
                g.on("pinchmove pinchstart", function(g) {
                    g.preventDefault();
                    c = null;
                    var h = g.center.x,
                        l = g.center.y;
                    if (!d) {
                        if (a.currentFlip && !a.currentFlip.finished) return;
                        b = a.elem.offset();
                        d = {
                            level: a.zoomLevel,
                            pageX: h,
                            pageY: l,
                            x: h - b.left,
                            y: l - b.top,
                            offset: e.extend({}, a._zoomOffset),
                            useTransform: a.opts.zoomUsingTransform
                        }
                    }
                    g = d.level * g.scale;
                    g > a.zoomMax && (g = a.zoomMax);
                    var k = a.zoomFocusOffset(g, d.x, d.y, d.offset, d.level);
                    k.dx += h - d.pageX;
                    k.dy += l - d.pageY;
                    a._zoomDataRAF = {
                        level: g,
                        options: {
                            force: !0,
                            offset: k
                        }
                    }
                });
                a.opts.pinchToZoom && (g.get("pinch").set({
                    enable: !0
                }), g.get("pinch").recognizeWith("pan"))
            }
        },
        zoomDragSupportForIE: function() {
            var a =
                this,
                b, c = function(c) {
                    a._zoomDataRAF = {
                        level: a.zoomLevel,
                        options: {
                            force: !0,
                            offset: {
                                dx: b.offset.dx + (c.pageX - b.pageX),
                                dy: b.offset.dy + (c.pageY - b.pageY)
                            }
                        }
                    };
                    return !1
                },
                d = function(b) {
                    b = a.zoomLevel;
                    (b < a.zoomMin || b == a.zoomMin && (a._zoomOffset.dx || a._zoomOffset.dy)) && a.zoomReset();
                    e(document).unbind("mousemove.wowbook", c);
                    e(document).unbind("mouseup.wowbook", d)
                };
            a.zoomContent.bind("mousedown.wowbook", function(g) {
                if (a.zoomed) return b = {
                    offset: e.extend({}, a._zoomOffset),
                    pageX: g.pageX,
                    pageY: g.pageY
                }, e(document).bind("mousemove.wowbook",
                    c).bind("mouseup.wowbook", d), !1
            })
        },
        detectBestZoomMethod: function(a, b, c) {
            if (void 0 != this.opts.zoomUsingTransform) return this.opts.zoomUsingTransform ? "transform" : "zoom";
            void 0 === a && (a = e.wowBook.support.transform);
            void 0 === c && (c = e.browser.ie8mode);
            a = e.browser.chrome || e.browser.webkit || e.browser.safari || e.browser.opera || c || !a;
            this.opts.zoomUsingTransform = !a;
            return a ? "zoom" : "transform"
        },
        setupFullscreen: function() {
            if (z) {
                var a = this,
                    b, c = "fullscreenerror mozfullscreenerror webkitfullscreenerror MSFullscreenError ";
                b = "fullscreenchange mozfullscreenchange webkitfullscreenchange MSFullscreenChange ".replace(/ /g, ".wowbook ");
                c = c.replace(/ /g, ".wowbook ");
                this._fullscreenChangeHandler = function() {
                    var b = !!D();
                    e(a.opts.fullscreenElement).toggleClass("fullscreen wowbook-fullscreen-fix", b);
                    a.elem.toggleClass("fullscreen", b);
                    a.toggleControl("fullscreen", b)
                };
                e(document).on(b, this._fullscreenChangeHandler);
                this._fullscreenErrorHandler = function() {
                    var b;
                    a.opts.onFullscreenError && (b = a.opts.onFullscreenError.apply(this, arguments));
                    !1 !== b && ("string" == typeof b ? alert(b) : a.opts.onFullscreenErrorMessage && alert(a.opts.onFullscreenErrorMessage))
                };
                e(document).on(c, this._fullscreenErrorHandler)
            } else e("html").addClass("no-fullscreen")
        },
        enterFullscreen: function(a) {
            a = e(a || this.opts.fullscreenElement)[0];
            z.call(a || A)
        },
        exitFullscreen: function() {
            B.call(k)
        },
        toggleFullscreen: function() {
            D() ? this.exitFullscreen() : this.enterFullscreen()
        },
        positionBookShadow: function() {
            var a = this.pages.length,
                b = !(!this.opts.bookShadow || !a || 3 > a && this.holdedPage);
            this.bookShadow.toggle(b);
            if (b) {
                var b = this.pageWidth,
                    c = this.holdedPageBack,
                    d = !!c && c.onRight && c.pageIndex == (this.rtl ? a - 1 : 0),
                    c = !!c && c.onLeft && c.pageIndex == (this.rtl ? 0 : a - 1),
                    a = !this.leftPage() || d,
                    c = !this.rightPage() || c,
                    d = a != c;
                if (a && c) this.bookShadow.hide();
                else {
                    var c = this.opts.zoomUsingTransform ? this.currentScale * this.zoomLevel : 1,
                        e = this.elem.is(":visible") ? this.pagesContainer.position().left : parseFloat(this.pagesContainer.css("left")) || 0;
                    this.translate(this.bookShadow, (a ? b : 0) + e / c, 0);
                    this.bookShadow.css({
                        width: d ?
                            b : 2 * b
                    })
                }
            }
        },
        playFlipSound: function() {
            if (this.flipSound) {
                var a = this.opts.onPlayFlipSound;
                // e.isFunction(a) && !1 === a(this) || (this.audio || (this.audio = this.createAudioPlayer()), this.audio && this.audio.play && this.audio.play())
            }
        },
        toggleFlipSound: function(a) {
            arguments.length || (a = !this.flipSound);
            this.flipSound = a;
            this.toggleControl("flipSound", !a)
        },
        createAudioPlayer: function(a, b) {
            a || (a = this.opts.flipSoundPath);
            b || (b = this.opts.flipSoundFile);
            for (var c = [], d = 0, g = b.length; d < g; d++) c.push('<source src="' + a + b[d] + '">');
            return e("<audio preload>" + c.join("") + "</audio>")[0]
        },
        _untouch: function(a) {
            return a.originalEvent.touches && a.originalEvent.touches[0] || a
        },
        touchSupport: function() {
            var a = this;
            a.elem.bind("touchstart.wowbook", function(b) {
                var c = b.originalEvent.touches;
                1 < c.length || (a._touchStarted = {
                    x: c[0].pageX,
                    y: c[0].pageY,
                    timestamp: b.originalEvent.timeStamp,
                    inHandle: e(b.target).hasClass("wowbook-handle")
                }, a._touchStarted.inHandle && a.pageEdgeDragStart(a._untouch(b)))
            });
            e(document).on("touchmove.wowbook", function(b) {
                if (a._touchStarted) {
                    var c =
                        b.originalEvent.touches;
                    a._touchEnded = {
                        x: c[0].pageX,
                        y: c[0].pageY,
                        timestamp: b.originalEvent.timeStamp
                    };
                    if (a._touchStarted.inHandle) return a.pageEdgeDrag(a._untouch(b));
                    a.opts.allowDragBrowserPageZoom && 1 != document.documentElement.clientWidth / window.innerWidth || b.preventDefault()
                }
            });
            e(document).on("touchend.wowbook touchcancel.wowbook", function(b) {
                if (a._touchStarted) {
                    !a._touchEnded && e(b.target).hasClass("wowbook-handle") && (b = e(b.target).data("corner"), "r" === b && a.advance(), "l" === b && a.back());
                    var c = a._touchStarted,
                        d = a._touchEnded || a._touchStarted;
                    a._touchStarted = null;
                    a._touchEnded = null;
                    if (!a.zoomed) {
                        if (c.inHandle) return a.pageEdgeDragStop({
                            pageX: d.x
                        }), !1;
                        b = d.x - c.x;
                        var g = d.y - c.y,
                            c = d.timestamp - c.timestamp;
                        if (!(20 > Math.abs(b) || 200 < c) && Math.abs(b) > Math.abs(g)) return 0 > b ? a.advance() : a.back(), !1
                    }
                }
            })
        },
        pageEdgeDragStart: function(a) {
            if (!this.zoomed) {
                if (this.animating && !this.curledPage || !e(a.target).hasClass("wowbook-handle")) return !1;
                var b = this,
                    c = b.origin.offset();
                this.opts.zoomUsingTransform || (c.left *= this.currentScale);
                b.elem.addClass("wowbook-unselectable");
                b.mouseDownAtLeft = (a.pageX - c.left) / this.currentScale < b.pageWidth;
                b.pageGrabbed = b.mouseDownAtLeft ? b.leftPage() : b.rightPage();
                if (!b.pageGrabbed) return !1;
                this.uncurl(!0);
                b.pageGrabbedOffset = b.pageGrabbed.offset();
                b._dragging = !0;
                this.opts.zoomUsingTransform && (b.pageGrabbedOffset.left /= this.currentScale, b.pageGrabbedOffset.top /= this.currentScale);
                c = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
                a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
                this.stopAnimation(!1);
                var d = b.mouseDownAtLeft ? "l" : "r";
                this.holdPage(this.pageGrabbed, c, a);
                this.flip(c, a, this.pageGrabbed, {
                    corner: d
                });
                e(document).bind("mousemove.wowbook", function(a) {
                    return b.pageEdgeDrag(a)
                }).bind("mouseup.wowbook", function(a) {
                    return b.pageEdgeDragStop(a)
                });
                return !1
            }
        },
        pageEdgeDrag: function(a) {
            if (!this._dragging) return !1;
            var b = a.pageX / this.currentScale - this.pageGrabbedOffset.left;
            a = a.pageY / this.currentScale - this.pageGrabbedOffset.top;
            var c = this.mouseDownAtLeft ? "l" : "r";
            this.stopAnimation(!1);
            this.flip(b,
                a, this.pageGrabbed, {
                    corner: c,
                    dragging: !0
                });
            return !1
        },
        pageEdgeDragStop: function(a) {
            if (!this._dragging) return !1;
            var b = this.origin.offset();
            this.opts.zoomUsingTransform || (b.left *= this.currentScale);
            var c = (a.pageX - b.left) / this.currentScale;
            a = (a.pageX - b.left) / this.currentScale < this.pageWidth;
            this.elem.removeClass("wowbook-unselectable");
            this._cantStopAnimation || this.stopAnimation(!1);
            this._singlePage ? this.pageGrabbed.onLeft ? c > this.pageWidth / 2 ? this.pageGrabbed.pageIndex == this.currentPage ? this.rtl ? this.advance() :
                this.back() : (c = this.pageGrabbed.pageIndex + (this.rtl ? 1 : -1), this.gotoPage(c)) : this.releasePage(this.pageGrabbed, !0) : c < this.pageWidth + this.pageWidth / 2 ? this.pageGrabbed.pageIndex == this.currentPage ? this.rtl ? this.back() : this.advance() : (c = this.pageGrabbed.pageIndex + (this.rtl ? -1 : 1), this.gotoPage(c)) : this.releasePage(this.pageGrabbed, !0) : this.mouseDownAtLeft && !a ? this.rtl ? this.advance() : this.back() : !this.mouseDownAtLeft && a ? this.rtl ? this.back() : this.advance() : this.releasePage(this.pageGrabbed, !0);
            this._dragging = !1;
            e(document).unbind("mousemove.wowbook mouseup.wowbook")
        },
        curl: function(a, b) {
            if (!(this.curledPage || this.holdedPage || this.zoomed)) {
                void 0 == a && (a = this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
                if (a && !a.isCurled) {
                    a.isCurled = !0;
                    this.curledPage = a;
                    var c = this.pageIsOnTheLeft(a.pageIndex),
                        d = c ? 0 : this.pageWidth,
                        e = b ? this.pageHeight - 1 : 2;
                    this.flip({
                        from: [d, e],
                        to: [d + this.opts.curlSize * (c ? 1 : -1), e + this.opts.curlSize * (b ? -1 : 1)],
                        corner: (b ? "b" : "t") + (c ? "l" : "r"),
                        page: a,
                        duration: 400
                    })
                }
            }
        },
        uncurl: function(a, b) {
            if (this.curledPage) {
                1 == a && (b = !0, a = void 0);
                void 0 == a && (a = this.curledPage || this.currentPage);
                if ("number" == typeof a || "string" == typeof a) a = this.pages[+a];
                a.isCurled && (this.stopAnimation(!1), this.releasePage(a, !b, void 0, 400), a.isCurled = !1, this.curledPage = null)
            }
        },
        initThumbnails: function() {
            var a = this.opts;
            this.thumbnails = [];
            var b = this.thumbnailsContainer = e("<div class='wowbook-thumbnails'>").append("<div class='wowbook-wrapper'><a class='wowbook-back wowbook-button wowbook-control wowbook-control-back'/><div class='wowbook-clipper'><ul></ul></div><a class='wowbook-next wowbook-button wowbook-control wowbook-control-next' /></div>").css("display",
                "none").css("transform", "translateZ(0)").appendTo(e(a.thumbnailsParent));
            this.thumbnailsList = b.find("ul");
            this.thumbnailsClipper = b.find(".wowbook-clipper");
            a.thumbnailsContainerWidth && b.width(a.thumbnailsContainerWidth);
            a.thumbnailsContainerHeight && b.height(a.thumbnailsContainerHeight);
            var c = a.thumbnailsPosition;
            if ("left" == c || "right" == c) a.thumbnailsVertical = !0, "right" == c && b.css({
                position: "absolute",
                left: "auto",
                right: "0px"
            });
            if ("top" == c || "bottom" == c) a.thumbnailsVertical = !1, "bottom" == c && b.css({
                position: "absolute",
                top: "auto",
                bottom: "0px"
            });
            b.addClass(a.thumbnailsVertical ? "wowbook-vertical" : "wowbook-horizontal");
            b.toggleClass("wowbook-closable", this.closable);
            var d = this,
                g = a.thumbnailsVertical ? "height" : "width";
            this.thumbnailsBackButton = b.find(".wowbook-back.wowbook-button").click(function() {
                d._moveThumbnailsList(d.thumbnailsClipper[g]())
            });
            this.thumbnailsNextButton = b.find(".wowbook-next.wowbook-button").click(function() {
                d._moveThumbnailsList(-d.thumbnailsClipper[g]())
            });
            this.thumbnailsClipper.css("transform",
                "translateZ(0)");
            0 == this.scrollBarWidth() && this.thumbnailsClipper.css("overflow", "auto")
        },
        destroyThumbnails: function() {
            this.thumbnailsContainer && this.thumbnailsContainer.remove();
            this.thumbnails = this._thumbnailsPos = this.thumbnailsContainer = null
        },
        scrollBarWidth: function() {
            var a = e("<div style='display: inline-block;position: absolute;left:-1000px;'>Hi!</div>").appendTo("body"),
                b = a.width();
            a.css("overflow", "scroll");
            var c = a.width();
            a.remove();
            return c - b
        },
        createThumbnails: function() {
            this.thumbnails ||
                this.initThumbnails();
            var a, b = this.thumbnailConfig();
            this.thumbnails = [];
            for (var c = 0, d = this.pages.length; c < d; c++) a = this.createThumbnail(c, b), this.thumbnailsList.append(a), this.thumbnails.push(a);
            if (this.rtl)
                for (a = this.thumbnailsList.children(), a.eq(0).addClass("wowbook-right").removeClass("wowbook-left"), c = 1, d = a.length; c < d; c += 2) a.eq(c).insertAfter(a.eq(c + 1));
            c = this.thumbnailsContainer;
            c.width() || c.width(2 * b.width);
            this.setStyle(this.opts.styles || this.opts.style)
        },
        thumbnailConfig: function() {
            var a = {},
                b = e('<div class="wowbook-thumbnail" style="display:none;position:absolute;line-height:0px;font-size:0px;">').prependTo(this.thumbnailsContainer),
                c = this.opts.thumbnailHeight || (2 >= b.height() ? 0 : b.height()),
                d = this.opts.thumbnailWidth || b.width(),
                g = d / this.pageWidth || c / this.pageHeight || this.opts.thumbnailScale;
            b.remove();
            this.thumbnailScale = g;
            a.width = d || Math.floor(this.pageWidth * g);
            a.height = c || Math.floor(this.pageHeight * g);
            a.cloneCSS = {
                display: "block",
                left: 0,
                top: 0,
                position: "relative",
                transformOrigin: "0 0"
            };
            e.wowBook.support.transform ? a.cloneCSS.transform = "scale(" + g + ")" : a.cloneCSS.zoom = g;
            this.differentPageSizes && (b = this.opts.pageWidth ? g * this.pageWidth / this.opts.pageWidth : this.opts.pageHeight ? g * this.pageHeight / this.opts.pageHeight : this.opts.thumbnailScale, a.scaleInternalPage = e.wowBook.support.transform ? {
                transform: "scale(" + b + ")"
            } : {
                zoom: b
            });
            return a
        },
        createThumbnail: function(a, b) {
            var c = this.pages[a];
            if (c) {
                b || (b = this.thumbnailConfig());
                var d = e('<li class="wowbook-thumbnail"><div class="wowbook-overlay">').addClass(this.pageIsOnTheLeft(a) ?
                    "wowbook-left" : "wowbook-right").css({
                    width: b.width,
                    height: b.height
                });
                if (this.opts.thumbnailsSprite) d.css("background", "url(" + this.opts.thumbnailsSprite + ") no-repeat 0px -" + a * b.height + "px");
                else {
                    var g = c.clone();
                    g.hasClass("wowbook-page-holded") && (this.resetPage(g), g.find(".wowbook-fold-gradient-container").remove());
                    g.css(b.cloneCSS);
                    b.scaleInternalPage && !c.isCover && g.css(b.scaleInternalPage);
                    d.prepend(g)
                }
                var f = this;
                d.click(function() {
                    f.gotoPage(a);
                    f.hideThumbnails()
                });
                return d
            }
        },
        updateThumbnail: function(a,
            b) {
            if (this.thumbnails) {
                var c = this.thumbnails[a];
                if (c) {
                    var d = this.createThumbnail(a, b);
                    d && (c.width(d.width()), c.height(d.height()), this.opts.thumbnailsSprite || (this.pdfDoc ? this.pdfRenderThumbnail(a, c, b) : c.children(":not(.wowbook-overlay)").replaceWith(d.children(":not(.wowbook-overlay)"))), c.width(d.width()), c.height(d.height()))
                }
            }
        },
        updateThumbnails: function() {
            if (this.thumbnails) {
                for (var a = this.thumbnailConfig(), b = 0, c = this.pages.length; b < c; b++) this.updateThumbnail(b, a);
                b = this.thumbnailsContainer;
                b.width() ||
                    b.width(2 * a.width);
                this.thumbnailsContainer.toggleClass("wowbook-closable", this.closable)
            } else this.createThumbnails()
        },
        _moveThumbnailsList: function(a, b) {
            var c = this.thumbnailsList.position()[this.opts.thumbnailsVertical ? "top" : "left"];
            this._setThumbnailsListPosition(c + a, b)
        },
        _setThumbnailsListPosition: function(a, b) {
            var c = this.opts.thumbnailsVertical,
                d = c ? "height" : "width",
                g = this.thumbnailsClipper[d](),
                d = -this.thumbnailsList[d]() + g;
            a < d && (a = d);
            0 < a && (a = 0);
            this.thumbnailsBackButton.toggleClass("wowbook-disabled",
                0 == a || 0 < d);
            this.thumbnailsNextButton.toggleClass("wowbook-disabled", a == d || 0 < d);
            void 0 == b && (b = e.extend({}, this.opts.thumbnailsAnimOptions));
            var f = this;
            e.isNumeric(b) && (b = {
                duration: b
            });
            b.step = c ? function(a) {
                f.thumbnailsClipper.scrollTop(a)
            } : function(a) {
                f.thumbnailsClipper.scrollLeft(a)
            };
            b.complete = function() {
                f.pdfDoc && f.updateVisibleThumbnails()
            };
            this._tb = this.thumbnailsClipper[c ? "scrollTop" : "scrollLeft"]();
            e(this).stop();
            e(this).animate({
                _tb: -a
            }, b)
        },
        updateVisibleThumbnails: function() {
            var a = this.opts.thumbnailsVertical,
                b = a ? "top" : "left",
                c = a ? "height" : "width";
            if (!this._thumbnailsPos)
                for (this._thumbnailsPos = [], a = 0; a < this.thumbnails.length; a++) this._thumbnailsPos[a] = this.thumbnails[a].position()[b];
            for (var d = this._thumbnailsPos, b = -this.thumbnailsList.position()[b], c = b + this.thumbnailsClipper[c](), e, f, a = 0; a < this.thumbnails.length; a++) void 0 == e && d[a] > b && (e = a), void 0 == f && d[a] > c && (f = a);
            e || (e = 0);
            f || (f = this.thumbnails.length - 1);
            this.pdfCancelRenderThumbnail(0, e);
            this.pdfCancelRenderThumbnail(f, this.thumbnails.length);
            for (a =
                e - 2; a <= f; a++) this.updateThumbnail(a)
        },
        showThumbnail: function(a, b) {
            if (this.thumbnails && this.thumbnailsContainer.is(":visible")) {
                void 0 == a && (a = this.currentPage);
                0 < a && this.pageIsOnTheRight(a) && a--;
                var c = this.opts.thumbnailsVertical,
                    d = c ? "top" : "left",
                    e = c ? "height" : "width",
                    f = this.thumbnails[a],
                    h = this.thumbnailsClipper,
                    c = h[e]() / 2 - f[e]() / (c ? 2 : 1),
                    d = f.offset()[d] - h.offset()[d];
                this._moveThumbnailsList(c - d, b)
            }
        },
        showThumbnails: function(a) {
            this.thumbnails && this.thumbnails.length || this.createThumbnails();
            this.thumbnailsContainer.fadeIn(void 0 !=
                a ? a : this.opts.thumbnailsAnimOptions);
            this.showThumbnail(void 0, 0)
        },
        hideThumbnails: function(a) {
            this.thumbnailsContainer.fadeOut(void 0 != a ? a : this.opts.thumbnailsAnimOptions)
        },
        toggleThumbnails: function(a) {
            e(this.thumbnailsContainer).is(":visible") ? this.hideThumbnails(a) : this.showThumbnails(a)
        },
        setPDF: function(a) {
            this.pdf = a;
            this.pdfRenderQueue = [];
            this.pdfPageRendering = !1;
            this.elem.addClass("wowbook-pdf");
            this.removePages();
            null == this.opts.pagesInMemory && (this.opts.pagesInMemory = 6);
            var b = this;
            this.pdfCSS_UNITS =
                96 / 72;
            b.opts.pdfTextSelectable && this.zoomContent.css("-webkit-user-select", "text");
            PDFJS.getDocument(a).then(function(a) {
                    b.pdfDoc = a;
                    b.currentPage = b.startPage;
                    a.getPage(1).then(function(d) {
                        for (var e = 0; e < a.numPages; e++) b.insertPage("<div>", !0);
                        b.pdfBuildLinkService();
                        b.opts.toc || b.pdfOutline();
                        b.updateBook();
                        d = d.getViewport(1 * b.pdfCSS_UNITS * b.opts.pdfScale);
                        b.pdfHeight = d.height;
                        b.pdfWidth = d.width;
                        b._originalHeight = null;
                        b._originalWidth = null;
                        b.setDimensions(2 * b.pdfWidth, b.pdfHeight)
                    })
                }, b.opts.onPDFLoadError ||
                function(a) {
                    e(b.pages[0] || b.elem).html(a.message);
                    console && console.log && console.log(a)
                })
        },
        pdfBuildLinkService: function() {
            var a = this;
            this.pdfLinkService = {
                navigateTo: function() {
                    a.pdfNavigateTo.apply(a, arguments)
                },
                getDestinationHash: function(a) {
                    return this.getAnchorUrl("")
                },
                getAnchorUrl: function(a) {
                    return a
                }
            };
            return this._pdfLinkService
        },
        pdfResetPages: function() {
            this.updateBook();
            for (var a = 0; a < this.pages.length; a++) this.unloadPage(this.pages[a]);
            this.showPage(this.currentPage);
            this.opts.scaleToFit &&
                this.scaleToFit();
            this.positionBookShadow()
        },
        pdfLoadPage: function(a, b) {
            var c = e("<canvas>");
            this.opts.pdfProgressiveRender && c.appendTo(this.pages[a].find(".wowbook-page-content"));
            this.pdfRenderPage(a, c[0], this.finishPageLoading)
        },
        pdfRenderPage: function(a, b, c, d, g) {
            if (this.pdfPageRendering) this.pdfQueueRenderPage(a, b, c, d, g);
            else {
                this.pdfPageRendering = !0;
                var f = this;
                this.pdfDoc.getPage(a + 1).then(function(h) {
                    d || (d = f.pdfFindScaleToFit());
                    var l = h.getViewport(d * f.pdfCSS_UNITS * f.opts.pdfScale);
                    b.height = l.height;
                    b.width = l.width;
                    var k = {
                        canvasContext: b.getContext("2d"),
                        viewport: l
                    };
                    h.render(k).then(function() {
                        var d = f.pages[a];
                        c.call(f, f.pages[a], b);
                        "thumb" != g && (d.find(".wowbook-pdf-annotations").length || e('<div class="wowbook-pdf-annotations">').appendTo(d.find(".wowbook-page-content")), d = d.find(".wowbook-pdf-annotations"), f.pdfAnnotations(h, l, b, d), f.opts.pdfTextSelectable && f.pdfTextLayer(h, a, l));
                        f.pdfPageRendering = !1;
                        f.pdfDequeueRenderPage()
                    }, function() {})
                })
            }
        },
        pdfAnnotations: function(a, b, c, d) {
            var e = this;
            a.getAnnotations().then(function(c) {
                b =
                    b.clone({
                        dontFlip: !0
                    });
                PDFJS.AnnotationLayer.render({
                    viewport: b,
                    div: d[0],
                    annotations: c,
                    page: a,
                    linkService: e.pdfLinkService
                })
            })
        },
        pdfTextLayer: function(a, b, c, d) {
            if (!d) {
                var g = this.pages[b];
                d = g.find(".wowbook-pdf-text");
                d.length || (d = e('<div class="wowbook-pdf-text">').appendTo(g.find(".wowbook-page-content")))
            }
            var f = new PDFJS.TextLayerBuilder({
                textLayerDiv: d[0],
                pageIndex: b,
                viewport: c
            });
            a.getTextContent({
                normalizeWhitespace: !0
            }).then(function(a) {
                f.setTextContent(a);
                f.render(PDFJS.TextLayerBuilder.TEXT_LAYER_RENDER_DELAY)
            })
        },
        pdfNavigateTo: function(a) {
            var b = this;
            b.pagesRefMap || (b.pagesRefMap = {});
            var c = function(a) {
                var e = a instanceof Object ? b.pagesRefMap[a.num + " " + a.gen + " R"] : a + 1;
                e ? b.gotoPage(e - 1) : b.pdfDoc.getPageIndex(a).then(function(e) {
                    b.pagesRefMap[a.num + " " + a.gen + " R"] = e + 1;
                    c(a)
                })
            };
            ("string" == typeof a ? this.pdfDoc.getDestination(a) : Promise.resolve(a)).then(function(a) {
                a instanceof Array && c(a[0])
            })
        },
        pdfRenderThumbnail: function(a, b, c) {
            this.thumbnailsContainer.addClass("wowbook-pdf");
            if ((c = this.pages[a]) && !c.loading && !b.pdf &&
                !b.rendering) {
                b.rendering = !0;
                var d = b.find("canvas");
                d.length || (d = e("<canvas>").appendTo(b.find(".wowbook-page-content")));
                this.opts.pdfProgressiveRender || d.css("display", "none");
                b.find(".wowbook-page").css({
                    width: b.width(),
                    height: b.height(),
                    zoom: 1,
                    transform: "scale(1)"
                });
                this.pdfRenderPage(a, d[0], function(a, c) {
                    d.css("display", "block");
                    b.rendering = !1;
                    b.pdf = !0
                }, this.thumbnailScale * this.opts.pdfScale, "thumb")
            }
        },
        pdfCancelRenderThumbnail: function(a, b) {
            for (var c = this.pdfRenderQueue, d = 0; d < c.length;) {
                var e =
                    c[d][0];
                e >= a && e <= b && "thumb" == c[d][4] ? (this.thumbnails[e].rendering = !1, c.splice(d, 1)) : d++
            }
        },
        pdfQueueRenderPage: function(a, b, c, d, e) {
            this.pdfRenderQueue.push([].slice.call(arguments))
        },
        pdfDequeueRenderPage: function() {
            var a = this.pdfRenderQueue.shift();
            a && this.pdfRenderPage.apply(this, a)
        },
        pdfFindScaleToFit: function() {
            var a = this.pageWidth,
                b = this.pageHeight,
                c = this.pdfWidth / this.pdfHeight;
            b * c > a && (b = a / c);
            return b / this.pdfHeight
        },
        pdfOutline: function() {
            var a = this;
            this.pdfDoc.getOutline().then(function(b) {
                function c(a) {
                    for (var b = [], e = 0, h = a.length; e < h; e++) {
                        var l = [];
                        l[0] = PDFJS.removeNullCharacters(a[e].title);
                        l[1] = a[e].url;
                        a[e].items && a[e].items.length && (l[2] = c(a[e].items));
                        l[3] = a[e].dest;
                        b.push(l)
                    }
                    return b
                }
                b && (a.opts.toc = c(b))
            })
        },
        createContainer: function(a) {
            a = this.container = e("<div class='wowbook-container'>");
            var b = this.opts,
                c = e.wowBook.defaults;
            a.prependTo(this.elem.parent());
            this.containerBook = e("<div class='wowbook-book-container'>").appendTo(a).append(this.elem);
            this.containerToolbar = e("<div class='wowbook-toolbar-container'>").appendTo(a);
            b.containerWidth && a.css("width", b.containerWidth);
            b.containerHeight && a.css("height", b.containerHeight);
            b.containerBackground && a.css("background", b.containerBackground);
            b.containerPadding && this.containerBook.css("padding", b.containerPadding);
            b.thumbnailsParent == c.thumbnailsParent && (b.thumbnailsParent = a);
            b.tocParent == c.tocParent && (b.tocParent = a);
            b.fullscreenElement == c.fullscreenElement && (b.fullscreenElement = a);
            b.scaleToFit || (b.scaleToFit = this.containerBook);
            "window" != b.container && b.container != window ||
                a.addClass("wowbook-container-full");
            b.toolbar && (b.toolbarParent == c.toolbarParent && (b.toolbarParent = this.containerToolbar), this._isMobile && (b.toolbarPosition = "bottom"));
            this._isMobile && a.addClass("wowbook-mobile")
        },
        destroyContainer: function() {
            this.container && (this.container.replaceWith(this.elem), this.container = void 0)
        },
        updateContainer: function() {
            var a = this.opts,
                b = 0;
            this.opts.responsiveToolbar && this.updateResponsiveToolbar();
            a.toolbarParent == this.containerToolbar && ("top" == a.toolbarPosition ? this.containerToolbar.insertBefore(this.containerBook) :
                this.containerToolbar.insertAfter(this.containerBook), b = e(this.toolbars[0]).outerHeight(!0));
            b = this.container.height() - b;
            this.containerBook.outerHeight(b);
            if (!a.conteinerHeight) {
                this.elem.css("top", this.elem.css("top"));
                var c = this;
                setTimeout(function() {
                    c.elem.css("top", "")
                }, 0)
            }
            e.wowBook.support.transform || this.elem.css("top", "auto");
            this.mobileToolbar && this.updateMobileToolbar()
        },
        lightbox: function(a) {
            this._lightboxElem = e("<div class='wowbook-lightbox'>").appendTo("body").addClass(this.opts.lightboxClass);
            this._lightboxBookContainer = e("<div class='wowbook-container'>").appendTo(this._lightboxElem);
            this._lightboxOverlay = this.opts.lightboxOverlay ? e("<div class='wowbook-lightbox-overlay'>").appendTo("body") : e();
            this.opts.thumbnailsParent = this._lightboxElem;
            this.opts.tocParent = this._lightboxElem;
            this.opts.fullscreenElement = this._lightboxElem;
            this.opts.lightboxResponsive && (this.opts.scaleToFit = this._lightboxBookContainer, this.responsive());
            this._isMobile && this._lightboxElem.addClass("wowbook-mobile");
            this.opts.lightboxBackground &&
                this._lightboxElem.css("background", this.opts.lightboxBackground);
            this.opts.lightboxColor && this._lightboxElem.css("backgroundColor", this.opts.lightboxColor);
            this.opts.lightboxOverlayColor && this._lightboxOverlay.css("backgroundColor", this.opts.lightboxOverlayColor);
            this._lightboxElem.css({
                width: this.opts.lightboxWidth,
                height: this.opts.lightboxHeight
            });
            this.elem.appendTo(this._lightboxBookContainer);
            this.opts.toolbar && (this.opts.toolbarParent = this._lightboxElem, this._isMobile && (this.opts.toolbarPosition =
                "bottom"));
            var b = this;
            e(a).on("click.wowbook", function() {
                b.showLightbox()
            });
            e("<button class='wowbook-close'>\u2715</button>").appendTo(this._lightboxElem).on("click.wowbook", function() {
                b.hideLightbox()
            });
            e(document).on("keydown.wowbook.lightbox", function(a) {
                b.lightboxOn && (e(a.target).filter("input, textarea, select").length || 27 === a.which && b.hideLightbox())
            })
        },
        destroyLightbox: function(a) {
            this.lightboxOn && this.hideLightbox();
            e(this._lightboxElem).remove();
            e(this._lightboxOverlay).remove()
        },
        showLightbox: function() {
            this.thumbnailsContainer &&
                this.thumbnailsContainer.parent()[0] != this._lightboxElem && this.thumbnailsContainer.appendTo(this._lightboxElem);
            this.elem.parent()[0] != this._lightboxBookContainer && this.elem.appendTo(this._lightboxBookContainer);
            this.tocContainer && this.tocContainer.parent()[0] != this._lightboxElem && this.tocContainer.appendTo(this._lightboxElem);
            this.lightboxOn = !0;
            e("body").addClass("wowbook-lightbox-on");
            this._lightboxElem.fadeIn();
            this.centerLightbox();
            this._lightboxOverlay.fadeIn();
            this.positionBookShadow();
            this.opts.responsiveToolbar &&
                this.updateResponsiveToolbar();
            if (this.opts.toolbarParent == this._lightboxElem) {
                var a = e(this.toolbars[0]).outerHeight(!0),
                    b = "top" == this.opts.toolbarPosition ? "top" : "bottom";
                this._lightboxBookContainer.css(b, a);
                e(this.toolbars[0]).css(b, 0)
            }
            this.opts.lightboxResponsive && this.responsiveUpdater();
            this.mobileToolbar && this.updateMobileToolbar();
            this.opts.onShowLightbox && this.opts.onShowLightbox.call(this, this.pages[this.currentPage], this.currentPage)
        },
        hideLightbox: function() {
            this.lightboxOn = !1;
            this._lightboxElem.fadeOut();
            this._lightboxOverlay.fadeOut();
            e("body").removeClass("wowbook-lightbox-on");
            this.opts.onHideLightbox && this.opts.onHideLightbox.call(this, this.pages[this.currentPage], this.currentPage)
        },
        centerLightbox: function() {
            var a = e(window).width(),
                b = e(window).height();
            this._lightboxElem.css("left", (a - this._lightboxElem.outerWidth()) / 2);
            this._lightboxElem.css("top", (b - this._lightboxElem.outerHeight()) / 2)
        },
        setStyle: function(a) {
            "string" == typeof a && (this._customCSSClass = a);
            e.isPlainObject(a) && (this._customCSSClass ||
                (this._customCSSClass = this.generateCSSClassName()), a = this.generateCSSClass(a, this._customCSSClass), e("body").append("<style>" + a + "</style>"));
            a = this._customCSSClass;
            e(this.toolbars).addClass(a).find(".wowbook-controls").addClass(a).find(".wowbook-share-buttons").addClass(a);
            e(this.tocContainer).addClass(a);
            e(this.thumbnailsContainer).addClass(a);
            e(this.thumbnailsContainer).find(".wowbook-control").addClass(a);
            e(this.elem).find(".wowbook-page-number").addClass(a);
            e(this._lightboxElem).find(".wowbook-close").addClass(a);
            e(this._navControls).addClass(a)
        },
        generateCSSClassName: function() {
            e.wowBook.utils._cssClassCounter = (e.wowBook.utils._cssClassCounter || 0) + 1;
            return "wowbook-cs-" + e.wowBook.utils._cssClassCounter
        },
        generateCSSClass: function(a, b) {
            function c(a, b) {
                var c = [];
                c.push(a + " {");
                for (var d in b) c.push("\t" + d + " : " + b[d] + " !important;");
                c.push("}");
                c = c.join("\n");
                g.push(c);
                return c
            }

            function d(a, b, d) {
                a[b] && (c(d, a[b]), delete a[b])
            }
            if (!a || !b) return "";
            a = e.extend({}, a);
            var g = [];
            a.hover && c("." + b + " .wowbook-close:hover", {
                color: a.hover.color
            });
            d(a, "hover", "." + b + " a:hover, ." + b + ".wowbook-control:hover");
            d(a, "active", "." + b + " a:active, ." + b + ".wowbook-control:active");
            d(a, "disabled", "." + b + " a.wowbook-disabled, ." + b + ".wowbook-control.wowbook-disabled");
            a.separator && (a.separator = a.separator.split(","), c("." + b + " a", {
                "border-color": a.separator[0],
                "box-shadow": "0 1px 0 " + (a.separator[1] || "transparent") + " inset"
            }), delete a.separator);
            c("." + b + ".wowbook-page-number", {
                background: "transparent"
            });
            a.pageNumber && (c("." + b + ".wowbook-page-number", {
                    color: a.pageNumber
                }),
                delete a.pageNumber);
            c("." + b, a);
            return g.join("\n")
        },
        controllify: function(a) {
            var b = this;
            e(a.zoomIn || a.zoomin).on("click.wowbook", function() {
                b.zoomIn({});
                return !1
            });
            e(a.zoomOut || a.zoomout).on("click.wowbook", function() {
                b.zoomOut({});
                return !1
            });
            e(a.zoomReset || a.zoomreset).on("click.wowbook", function() {
                b.zoomReset({});
                return !1
            });
            e(a.left).on("click.wowbook", function() {
                b.gotoLeft();
                return !1
            });
            e(a.right).on("click.wowbook", function() {
                b.gotoRight();
                return !1
            });
            e(a.next).on("click.wowbook", function() {
                b.advance();
                return !1
            });
            e(a.back).on("click.wowbook", function() {
                b.back();
                return !1
            });
            e(a.first).on("click.wowbook", function() {
                b.gotoPage(0);
                return !1
            });
            e(a.last).on("click.wowbook", function() {
                b.gotoPage(b.pages.length - 1);
                return !1
            });
            e(a.slideShow || a.slideshow).on("click.wowbook", function() {
                b.toggleSlideShow();
                return !1
            });
            e(a.flipSound || a.flipsound).on("click.wowbook", function() {
                b.toggleFlipSound();
                return !1
            });
            e(a.thumbnails).on("click.wowbook", function() {
                b.toggleThumbnails();
                return !1
            });
            e(a.fullscreen).on("click.wowbook",
                function() {
                    b.toggleFullscreen();
                    return !1
                });
            e(a.toc).on("click.wowbook", function() {
                b.toggleToc();
                return !1
            });
            e(a.fullscreen).length && !z && e(a.fullscreen).hide();
            var c = this.opts.downloadURL || this.opts.downloadurl || this.opts.downloadUrl || this.opts.pdf;
            c && e(a.download).attr("href", c).attr("download", c);
            e(a.share).length && this.createShareControl(e(a.share));
            for (var c = "zoomIn zoomOut zoomReset left right next back first last slideShow flipSound thumbnails fullscreen toc currentPage pageCount".split(" "),
                    d, g = 0, f = c.length; g < f; g++) d = c[g].toLowerCase(), this._controls[d] = e(this._controls[d]).add(a[c[g]] || a[d])
        },
        toggleControl: function(a, b) {
            (a = this._controls[a.toLowerCase()]) && e(a).toggleClass("wowbook-disabled", b)
        },
        createNavigationControls: function(a) {
            if (!this._isMobile || !this.opts.responsiveNavControls)
                if (a || (a = this.opts.navControls), "parent" === a && (a = this.elem.parent()), !0 === a && (a = this.containerBook || this._lightboxBookContainer), a) {
                    "string" == typeof a && (a = e(a));
                    var b = e("<button class='wowbook-nav wowbook-nav-left wowbook-disabled'><i></i></button>").appendTo(a);
                    a = e("<button class='wowbook-nav wowbook-nav-right wowbook-disabled'><i></i></button>").appendTo(a);
                    this.controllify({
                        left: b,
                        right: a
                    });
                    this._navControls = e(b).add(a);
                    this.opts.toolbarIcons && this._navControls.addClass("wowbook-" + this.opts.toolbarIcons)
                }
        },
        shareControlButtons: {
            twitter: ['<a href="http://twitter.com/share" target="_blank"><i class="fa-twitter"></i></a>', {
                text: "text",
                via: "via",
                url: "url"
            }],
            googleplus: ['<a href="https://plus.google.com/share" target="_blank" ><i class="fa-google-plus"></i></a>', {
                url: "url"
            }],
            facebook: ['<a href="http://www.facebook.com/sharer/sharer.php" target="_blank" ><i class="fa-facebook"></i></a>', {
                u: "url"
            }],
            stumbleupon: ['<a href="http://www.stumbleupon.com/submit" target="_blank"><i class="fa fa-stumbleupon"></i></a>', {
                url: "url",
                title: "title"
            }],
            reddit: ['<a href="http://reddit.com/submit" target="_blank"><i class="fa fa-reddit"></i></a>', {
                url: "url",
                title: "title"
            }],
            linkedin: ['<a href="http://www.linkedin.com/shareArticle" target="_blank"><i class="fa fa-linkedin"></i></a>', {
                url: "url",
                title: "title",
                summary: "summary",
                source: "source_url"
            }]
        },
        createShareControl: function(a, b) {
            b || (b = this.opts);
            for (var c = e.extend({}, this.shareControlButtons, b.shareButtons), d, g = b.share.split(/\s*,\s*|\s+/), f = e("<div class='wowbook-share-buttons wowbook-hidden'>"), h = 0, k = g.length; h < k; h++)(d = c[g[h]]) && e(d[0]).appendTo(f).addClass("wowbook-control wowbook-share-button").data("params", d[1]);
            var c = e(a).addClass("wowbook-control-share").append(f),
                m = this;
            c.on("click", function(a) {
                m.toggleShareButtons(a.target)
            });
            c.on("click", ".wowbook-share-button", function() {
                var a = m.opts.shareButtonCallback;
                if (!e.isFunction(a) || !1 !== a(m, this)) {
                    var a = e.extend({}, e(this).data("params")),
                        b = e.extend(e.wowBook.defaults.shareParams, m.opts.shareParams);
                    "_current_" == b.url && (b.url = window.location.href);
                    var c;
                    for (paramName in a) c = a[paramName], void 0 != b[c] ? a[paramName] = b[c] : delete a[paramName];
                    this.search = e.param(a);
                    window.open(this.href, "_blank");
                    m.toggleShareButtons(this);
                    return !1
                }
            })
        },
        toggleShareButtons: function(a) {
            a = e(a).closest(".wowbook-control-share");
            a = a.find(".wowbook-share-buttons");
            a.hasClass("wowbook-hidden") ? (a.css("opacity", 0).removeClass("wowbook-hidden"), t(a) || a.toggleClass("wowbook-up"), a.css("opacity", 1)) : a.addClass("wowbook-hidden")
        },
        toolbarControls: {
            _default: "<a href='#'><i></i></a>",
            regresa: "<a title='Regresar a los boletines' href='/boletin'><i></i></a>",
            first: "<a title='Página inicial'><i></i></a>",
            back: "<a title='Regresar página'><i></i></a>",
            next: "<a title='Siguiente página'><i></i></a>",
            last: "<a title='Página final'><i></i></a>",
            zoomin: "<a title='Acercar'><i></i></a>",
            zoomout: "<a title='Alejar'><i></i></a>",
            slideshow: "<a title='start slideshow'><i></i></a>",
            flipsound: "<a title='flip sound on/off'><i></i></a>",
            fullscreen: "<a title='Pantalla completa'><i></i></a>",
            thumbnails: "<a title='thumbnails on/off'><i></i></a>",
            toc: "<a title='table of contents on/off'><i></i></a>",
            download: "<a title='download'><i></i></a>",
            share: "<a title='share'><i></i></a>"
        },
        createToolbar: function(a, b) {
            if (a && (b = e(b || this.opts.toolbarParent || this.elem.parent())) && b.length) {
                var c = e('<div class="wowbook-toolbar">'),
                    d = e('<div class="wowbook-controls">').appendTo(c);
                this.opts.toolbarIcons && c.addClass("wowbook-" + this.opts.toolbarIcons);
                a = a.split(/\s*,\s*/);
                for (var g = {}, f, h = 0; h < a.length; h += 1) f = this.createToolbarControl(a[h]), g[a[h]] = f, d.append(f);
                this.opts.removeStickyHoverStyle && (c.on("touchstart", ".wowbook-control", function() {
                    e(this).removeClass("remove-sticky-hover-style")
                }), c.on("touchend", ".wowbook-control", function() {
                    e(".remove-sticky-hover-style").removeClass("remove-sticky-hover-style");
                    e(this).addClass("remove-sticky-hover-style")
                }));
                b.prepend(c);
                this.controllify(g);
                this.toolbars.push(c[0]);
                this.setStyle(this.opts.styles || this.opts.style);
                return c
            }
        },
        destroyToolbars: function() {
            this.toolbars && e(this.toolbars).remove();
            this.toolbars = null
        },
        createToolbarControl: function(a) {
            this._avoidLoopControl || (this._avoidLoopControl = {});
            var b = a;
            if (e.isPlainObject(a)) {
                var c = a;
                a = e(this.toolbarControls._default);
                for (prop in c)
                    if (jQuery.isFunction(a[prop])) a[prop](c[prop]);
                    else a.attr(prop, c[prop])
            }
            if ("string" == typeof a)
                if ("<" == a.charAt(0)) a = e(a);
                else {
                    a = this.toolbarControls[a] || this.toolbarControls._default;
                    if (this._avoidLoopControl[a]) return "Error CreateToolbarControl in loop";
                    this._avoidLoopControl[a] = 1;
                    a = this.createToolbarControl(a);
                    this._avoidLoopControl[a] = 0;
                    a = e(a).addClass("wowbook-control-" + b)
                }
            a.addClass("wowbook-control");
            return a
        },
        setupMobileToolbar: function() {
            this.opts.toolbarPosition = "bottom";
            this.mobileToolbar = e(this.toolbars[0]);
            this.mobileToolbar.find(".wowbook-controls").css({
                position: "absolute",
                left: 0
            });
            this.createMobileToolbarToggle();
            this.slideDownMobileToolbar(0);
            this.updateMobileToolbar()
        },
        toolbarIsExpandable: function(a) {
            return 1.1 * a.height() < a.find(".wowbook-controls").height()
        },
        updateMobileToolbar: function() {
            this.mobileToolbarToggle.toggleClass("wowbook-collapsed", !this._mobileToolbarExpanded);
            this.mobileToolbarToggle.toggle(this.toolbarIsExpandable(this.mobileToolbar))
        },
        createMobileToolbarToggle: function() {
            this.mobileToolbarToggle = e("<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>").prependTo(this.mobileToolbar.find(".wowbook-controls"));
            var a = this;
            this.mobileToolbarToggle.on("click",
                function() {
                    a.toogleMobileToolbar()
                });
            e(window).on("resize.wowbook", function() {
                a.mobileToolbarToggle && a.mobileToolbar && a.updateMobileToolbar()
            })
        },
        slideUpMobileToolbar: function(a) {
            var b = this.mobileToolbar.find(".wowbook-controls"),
                c = this.mobileToolbar.children().height() - this.mobileToolbar.height();
            b.css({
                bottom: -c
            }).animate({
                bottom: 0
            }, a);
            this._mobileToolbarExpanded = !0;
            this.updateMobileToolbar()
        },
        slideDownMobileToolbar: function(a) {
            var b = this.mobileToolbar.find(".wowbook-controls"),
                c = this.mobileToolbar.children().height() -
                this.mobileToolbar.height();
            b.animate({
                bottom: -c
            }, {
                duration: a,
                complete: function() {
                    e(this).css("bottom", "")
                }
            });
            this._mobileToolbarExpanded = !1;
            this.updateMobileToolbar()
        },
        toogleMobileToolbar: function() {
            this._mobileToolbarExpanded ? this.slideDownMobileToolbar() : this.slideUpMobileToolbar()
        },
        setupResponsiveToolbar: function() {
            this.responsiveToolbar = e(this.toolbars[0]);
            this.createResponsiveToolbarToggle();
            this.updateResponsiveToolbar()
        },
        makeToolbarExpandable: function(a) {
            this._responsiveToolbarExpandable ||
                (this._responsiveToolbarExpandable = !0, this._originalToolbarPosition || (this._originalToolbarPosition = this.opts.toolbarPosition), this.opts.toolbarPosition = "bottom", this.responsiveToolbar.find(".wowbook-controls").css({
                    position: "absolute",
                    left: 0
                }), this.container && "hidden" != this.container.css("overflow") && (this.container.data("originalOverflow", this.container.css("overflow")), this.container.css("overflow", "hidden")), this.slideDownResponsiveToolbar(0))
        },
        unmakeToolbarExpandable: function() {
            this._responsiveToolbarExpandable &&
                (this._responsiveToolbarExpandable = !1, this._originalToolbarPosition && (this.opts.toolbarPosition = this._originalToolbarPosition), this.responsiveToolbar.find(".wowbook-controls").css({
                    bottom: "",
                    position: "",
                    left: ""
                }), this.container && this.container.data("originalOverflow") && (this.container.css("overflow", this.container.data("originalOverflow")), this.container.data("originalOverflow", "")))
        },
        updateResponsiveToolbar: function() {
            if (this.responsiveToolbar) {
                var a = this.toolbarIsExpandable(this.responsiveToolbar);
                a ? this.makeToolbarExpandable() : this.unmakeToolbarExpandable();
                this.responsiveToolbar.toggleClass("wowbook-collapsable", a);
                this.responsiveToolbarToggle.toggleClass("wowbook-collapsed", !this._responsiveToolbarExpanded);
                this.responsiveToolbarToggle.toggle(a)
            }
        },
        createResponsiveToolbarToggle: function() {
            this.responsiveToolbarToggle = e("<a class='wowbook-control wowbook-control-toggle-toolbar'><i></i></a>").prependTo(this.responsiveToolbar.find(".wowbook-controls"));
            var a = this;
            this.responsiveToolbarToggle.on("click",
                function() {
                    a.toogleResponsiveToolbar()
                });
            e(window).on("resize.wowbook", function() {
                a.responsiveToolbarToggle && a.responsiveToolbar && a.updateResponsiveToolbar()
            })
        },
        slideUpResponsiveToolbar: function(a) {
            var b = this.responsiveToolbar.find(".wowbook-controls"),
                c = this.responsiveToolbar.children().height() - this.responsiveToolbar.height();
            b.css({
                bottom: -c
            }).animate({
                bottom: 0
            }, a);
            this._responsiveToolbarExpanded = !0;
            this.updateResponsiveToolbar()
        },
        slideDownResponsiveToolbar: function(a) {
            var b = this.responsiveToolbar.find(".wowbook-controls"),
                c = this.responsiveToolbar.children().height() - this.responsiveToolbar.height();
            b.animate({
                bottom: -c
            }, {
                duration: a,
                complete: function() {
                    e(this).css("bottom", "")
                }
            });
            this._responsiveToolbarExpanded = !1;
            this.updateResponsiveToolbar()
        },
        toogleResponsiveToolbar: function() {
            this._responsiveToolbarExpanded ? this.slideDownResponsiveToolbar() : this.slideUpResponsiveToolbar()
        },
        translate: function(a, b, c, d) {
            e.wowBook.support.transform && !1 !== d ? a.css("transform", e.wowBook.useTranslate3d ? "translate3d(" + (b || 0) + "px, " + (c || 0) +
                "px, 0px)" : "translate(" + (b || 0) + "px, " + (c || 0) + "px) ") : (void 0 !== b && a.css({
                left: b
            }), void 0 !== c && a.css({
                top: c
            }))
        }
    };
    e.wowBook.defaults = {
        width: 500,
        height: 300,
        pageWidth: void 0,
        pageHeight: void 0,
        coverWidth: void 0,
        coverHeight: void 0,
        startPage: 0,
        hardcovers: !1,
        hardPages: !1,
        closable: !0,
        centeredWhenClosed: !1,
        doublePages: ".double",
        container: !1,
        containerWidth: void 0,
        containerHeight: void 0,
        containerPadding: void 0,
        containerBackground: void 0,
        toolbarContainerPosition: "",
        rtl: !1,
        responsive: !1,
        scaleToFit: "",
        maxWidth: void 0,
        maxHeight: void 0,
        onResize: null,
        responsiveHandleWidth: void 0,
        singlePage: !1,
        responsiveSinglePage: !0,
        fullscreenElement: document.documentElement,
        onFullscreenError: null,
        onFullscreenErrorMessage: "Cannot enter fullscreen mode.",
        use3d: !0,
        perspective: 2E3,
        useTranslate3d: "mobile",
        useScale3d: !0,
        pageThickness: 0,
        pageEdgeColor: null,
        hardPageShadow: !0,
        style: null,
        bookShadow: !0,
        gutterShadow: !0,
        shadowThreshold: 20,
        shadows: !0,
        foldGradient: !0,
        foldGradientThreshold: 20,
        pageNumbers: !0,
        firstPageNumber: 1,
        numberedPages: !1,
        deepLinking: !0,
        updateBrowserURL: !0,
        moveToViewPort: !1,
        curl: !0,
        curlSize: 40,
        slideShow: !1,
        slideShowDelay: 1E3,
        slideShowLoop: !1,
        pauseOnHover: !0,
        touchEnabled: !0,
        mouseWheel: !1,
        handleWidth: !1,
        handleClickDuration: 300,
        turnPageDuration: 1E3,
        turnPageDurationMin: 300,
        forceBasicPage: !1,
        sections: ".wowbook-section",
        pdf: null,
        pdfScale: 1,
        pdfProgressiveRender: !1,
        pdfTextSelectable: !1,
        onPDFLoadError: null,
        zoomLevel: 1,
        zoomMax: 2,
        zoomMin: 1,
        zoomBoundingBox: window,
        zoomStep: .25,
        zoomDuration: 200,
        zoomEasing: "linear",
        onZoom: null,
        pinchToZoom: !0,
        doubleClickToZoom: !1,
        allowDragBrowserPageZoom: !1,
        flipSound: !0,
        flipSoundFile: ["page-flip.mp3", "page-flip.ogg"],
        flipSoundPath: "./assets/wowbook/sound/",
        onPlayFlipSound: null,
        keyboardNavigation: {
            back: 37,
            advance: 39
        },
        clipBoundaries: !0,
        onShowPage: null,
        onHoldPage: null,
        onReleasePage: null,
        pagesInMemory: null,
        pagesToKeep: null,
        onLoadPage: null,
        onUnloadPage: null,
        lightbox: null,
        lightboxColor: null,
        lightboxOverlay: !1,
        lightboxOverlayColor: null,
        lightboxWidth: "100%",
        lightboxHeight: "100%",
        lightboxResponsive: !0,
        onShowLightbox: void 0,
        onHideLightbox: void 0,
        toc: void 0,
        tocParent: "body",
        tocHeader: "Índice",
        tocItemTemplate: void 0,
        toolbarLightboxPosition: "",
        controls: {},
        navControls: !1,
        responsiveNavControls: !0,
        downloadURL: null,
        toolbar: !1,
        toolbarParent: "body",
        toolbarIcons: "fontawesome",
        responsiveToolbar: !0,
        toolbarPosition: "bottom",
        removeStickyHoverStyle: !0,
        share: "twitter, googleplus, facebook, stumbleupon, reddit, linkedin",
        shareParams: {
            url: "_current_",
            text: void 0,
            via: void 0,
            title: void 0,
            summary: void 0,
            source_url: void 0
        },
        thumbnails: !1,
        thumbnailsParent: "body",
        thumbnailScale: .2,
        thumbnailWidth: null,
        thumbnailHeight: null,
        thumbnailsPosition: null,
        thumbnailsVertical: !0,
        thumbnailsContainerWidth: null,
        thumbnailsContainerHeight: null,
        thumbnailsSprite: null,
        thumbnailsAnimOptions: {}
    };
    "undefined" != typeof QUnit && (e.wowBook.wowBook = p);
    window.raf = function() {
        return window.requestAnimationFrame || window.webkitRequestAnimationFrame || window.mozRequestAnimationFrame || function(a) {
            window.setTimeout(a, 1E3 / 60)
        }
    }();
    e.browser.ie8mode = e.browser.msie && 8 == document.documentMode;
    e.browser.ie7 =
        e.browser.msie && (7 == e.browser.version || 7 == document.documentMode);
    var m = e.browser.msie && 9 > e.browser.version ? 1 : 0,
        q = {
            thin: 2 - m,
            medium: 4 - m,
            thick: 6 - m
        },
        k = window.document,
        A = k.documentElement,
        z = A.requestFullscreen || A.mozRequestFullScreen || A.msRequestFullscreen || A.webkitRequestFullscreen || A.webkitRequestFullScreen,
        B = k.exitFullscreen || k.mozCancelFullScreen || k.msExitFullscreen || k.webkitExitFullscreen || k.webkitCancelFullScreen,
        D = function() {
            return k.fullscreenElement || k.mozFullScreenElement || k.msFullscreenElement ||
                k.webkitFullscreenElement || k.webkitCurrentFullScreenElement
        };
    e.wowBook.utils = {
        translate: function(a, b, c) {
            return e.wowBook.useTranslate3d ? "translate3d(" + a + "px, " + b + "px, " + (c || 0) + "px) " : "translate(" + a + "px, " + b + "px) "
        },
        isMobile: function() {
            return 480 >= e(window).width() || 480 >= e(window).height()
        }
    }
})(jQuery);
(function(e) {
    function p(n) {
        var m = n || window.event,
            q = [].slice.call(arguments, 1),
            k = 0,
            p = 0,
            t = 0;
        n = e.event.fix(m);
        n.type = "mousewheel";
        m.wheelDelta && (k = m.wheelDelta / 120);
        m.detail && (k = -m.detail / 3);
        t = k;
        void 0 !== m.axis && m.axis === m.HORIZONTAL_AXIS && (t = 0, p = -1 * k);
        void 0 !== m.wheelDeltaY && (t = m.wheelDeltaY / 120);
        void 0 !== m.wheelDeltaX && (p = -1 * m.wheelDeltaX / 120);
        q.unshift(n, k, p, t);
        return (e.event.dispatch || e.event.handle).apply(this, q)
    }
    var v = ["DOMMouseScroll", "mousewheel"];
    if (e.event.fixHooks)
        for (var t = v.length; t;) e.event.fixHooks[v[--t]] =
            e.event.mouseHooks;
    e.event.special.mousewheel = {
        setup: function() {
            if (this.addEventListener)
                for (var e = v.length; e;) this.addEventListener(v[--e], p, !1);
            else this.onmousewheel = p
        },
        teardown: function() {
            if (this.removeEventListener)
                for (var e = v.length; e;) this.removeEventListener(v[--e], p, !1);
            else this.onmousewheel = null
        }
    };
    e.fn.extend({
        mousewheel: function(e) {
            return e ? this.bind("mousewheel", e) : this.trigger("mousewheel")
        },
        unmousewheel: function(e) {
            return this.unbind("mousewheel", e)
        }
    })
})(jQuery);
(function(e) {
    function p(n) {
        if (n in v.style) return e.wowBook.support[n] = n;
        for (var m = t.length, q, k = n.charAt(0).toUpperCase() + n.substr(1); m--;)
            if (q = t[m] + k, q in v.style) return e.wowBook.support[n] = q
    }
    if (e.cssHooks) {
        var v = document.createElement("div"),
            t = ["O", "ms", "Webkit", "Moz"];
        p("transform");
        p("transformOrigin");
        p("boxSizing");
        p("zoom");
        e.wowBook.support.boxSizing && 8 > document.documentMode && (e.wowBook.support.boxSizing = !1);
        v = null;
        e.each(["transform", "transformOrigin"], function(n, m) {
            e.wowBook.support[m] &&
                e.wowBook.support[m] !== m && !e.cssHooks[m] && (e.cssHooks[m] = {
                    get: function(n, k, p) {
                        return e.css(n, e.wowBook.support[m])
                    },
                    set: function(n, k) {
                        n.style[e.wowBook.support[m]] = k
                    }
                })
        });
        e.wowBook.applyAlphaImageLoader = function(n) {
            var m, q, k, p, t = "",
                v = e("<div style='display:none'></div>").appendTo("body");
            q = 0;
            for (k = n.length; q < k; q++)
                if (p = n[q], v.addClass(p), m = v.css("background-image").match(/^url\("(.*)"\)$/)) t += "." + p + "{background:none; filter : progid:DXImageTransform.Microsoft.AlphaImageLoader(src='" + m[1] + "', sizingMethod='scale'); } ",
                    v.removeClass(p);
            e("body").append("<style>" + t + "</style>")
        }
    } else alert("jQuery 1.4.3+ is needed for this plugin to work")
})(jQuery);