!function (e, t) {
    "object" == typeof exports && "object" == typeof module
        ? module.exports = t(require("react"))
        : "function" == typeof define && define.amd
            ? define(["react"], t)
            : "object" == typeof exports
                ? exports["react-deck"] = t(require("react"))
                : e["react-deck"] = t(e.React)
}(this, function (e) {
    return function (e) {
        function t(r) {
            if (n[r]) 
                return n[r].exports;
            var a = n[r] = {
                i: r,
                l: !1,
                exports: {}
            };
            return e[r].call(a.exports, a, a.exports, t),
            a.l = !0,
            a.exports
        }
        var n = {};
        return t.m = e,
        t.c = n,
        t.d = function (e, n, r) {
            t.o(e, n) || Object.defineProperty(e, n, {
                configurable: !1,
                enumerable: !0,
                get: r
            })
        },
        t.n = function (e) {
            var n = e && e.__esModule
                ? function () {
                    return e.default
                }
                : function () {
                    return e
                };
            return t.d(n, "a", n),
            n
        },
        t.o = function (e, t) {
            return Object
                .prototype
                .hasOwnProperty
                .call(e, t)
        },
        t.p = "",
        t(t.s = 10)
    }([
        function (t, n) {
            t.exports = e
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                var t = {};
                for (var n in e) 
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = "number" == typeof e[n]
                        ? e[n]
                        : e[n].val);
                return t
            }
            t.__esModule = !0,
            t.default = r,
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                var t = {};
                for (var n in e) 
                    Object.prototype.hasOwnProperty.call(e, n) && (t[n] = 0);
                return t
            }
            t.__esModule = !0,
            t.default = r,
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r(e, t, n, r, o, i, u) {
                var l = -o * (t - r),
                    s = -i * n,
                    c = l + s,
                    f = n + c * e,
                    p = t + f * e;
                return Math.abs(f) < u && Math.abs(p - r) < u
                    ? (a[0] = r, a[1] = 0, a)
                    : (a[0] = p, a[1] = f, a)
            }
            t.__esModule = !0,
            t.default = r;
            var a = [0, 0];
            e.exports = t.default
        },
        function (e, t, n) {
            (function (t) {
                (function () {
                    var n,
                        r,
                        a;
                    "undefined" != typeof performance && null !== performance && performance.now
                        ? e.exports = function () {
                            return performance.now()
                        }
                        : void 0 !== t && null !== t && t.hrtime
                            ? (e.exports = function () {
                                return (n() - a) / 1e6
                            },
                            r = t.hrtime,
                            n = function () {
                                var e;
                                return e = r(),
                                1e9 * e[0] + e[1]
                            },
                            a = n())
                            : Date.now
                                ? (e.exports = function () {
                                    return Date.now() - a
                                },
                                a = Date.now())
                                : (e.exports = function () {
                                    return (new Date).getTime() - a
                                },
                                a = (new Date).getTime())
                }).call(this)
            }).call(t, n(8))
        },
        function (e, t, n) {
            (function (t) {
                for (var r = n(16), a = "undefined" == typeof window
                    ? t
                    : window, o = [
                    "moz", "webkit"
                ], i = "AnimationFrame", u = a["request" + i], l = a["cancel" + i] || a["cancelRequest" + i], s = 0; !u && s < o.length; s++) 
                    u = a[o[s] + "Request" + i],
                    l = a[o[s] + "Cancel" + i] || a[o[s] + "CancelRequest" + i];
                if (!u || !l) {
                    var c = 0,
                        f = 0,
                        p = [];
                    u = function (e) {
                        if (0 === p.length) {
                            var t = r(),
                                n = Math.max(0, 1e3 / 60 - (t - c));
                            c = n + t,
                            setTimeout(function () {
                                var e = p.slice(0);
                                p.length = 0;
                                for (var t = 0; t < e.length; t++) 
                                    if (!e[t].cancelled) 
                                        try {
                                            e[t].callback(c)
                                        } catch (e) {
                                            setTimeout(function () {
                                                throw e
                                            }, 0)
                                        }
                                    }, Math.round(n))
                        }
                        return p.push({
                            handle: ++f,
                            callback: e,
                            cancelled: !1
                        }),
                        f
                    },
                    l = function (e) {
                        for (var t = 0; t < p.length; t++) 
                            p[t].handle === e && (p[t].cancelled = !0)
                    }
                }
                e.exports = function (e) {
                    return u.call(a, e)
                },
                e.exports.cancel = function () {
                    l.apply(a, arguments)
                },
                e.exports.polyfill = function (e) {
                    e || (e = a),
                    e.requestAnimationFrame = u,
                    e.cancelAnimationFrame = l
                }
            }).call(t, n(15))
        },
        function (e, t, n) {
            "use strict";
            function r(e, t, n) {
                for (var r in t) 
                    if (Object.prototype.hasOwnProperty.call(t, r)) {
                        if (0 !== n[r]) 
                            return !1;
                        var a = "number" == typeof t[r]
                            ? t[r]
                            : t[r].val;
                        if (e[r] !== a) 
                            return !1
                    }
                return !0
            }
            t.__esModule = !0,
            t.default = r,
            e.exports = t.default
        },
        function (e, t, n) {
            e.exports = n(17)()
        },
        function (e, t) {
            function n() {
                throw new Error("setTimeout has not been defined")
            }
            function r() {
                throw new Error("clearTimeout has not been defined")
            }
            function a(e) {
                if (c === setTimeout) 
                    return setTimeout(e, 0);
                if ((c === n || !c) && setTimeout) 
                    return c = setTimeout,
                    setTimeout(e, 0);
                try {
                    return c(e, 0)
                } catch (t) {
                    try {
                        return c.call(null, e, 0)
                    } catch (t) {
                        return c.call(this, e, 0)
                    }
                }
            }
            function o(e) {
                if (f === clearTimeout) 
                    return clearTimeout(e);
                if ((f === r || !f) && clearTimeout) 
                    return f = clearTimeout,
                    clearTimeout(e);
                try {
                    return f(e)
                } catch (t) {
                    try {
                        return f.call(null, e)
                    } catch (t) {
                        return f.call(this, e)
                    }
                }
            }
            function i() {
                m && d && (m = !1, d.length
                    ? y = d.concat(y)
                    : h = -1, y.length && u())
            }
            function u() {
                if (!m) {
                    var e = a(i);
                    m = !0;
                    for (var t = y.length; t;) {
                        for (d = y, y = []; ++h < t;) 
                            d && d[h].run();
                        h = -1,
                        t = y.length
                    }
                    d = null,
                    m = !1,
                    o(e)
                }
            }
            function l(e, t) {
                this.fun = e,
                this.array = t
            }
            function s() {}
            var c,
                f,
                p = e.exports = {};
            !function () {
                try {
                    c = "function" == typeof setTimeout
                        ? setTimeout
                        : n
                } catch (e) {
                    c = n
                }
                try {
                    f = "function" == typeof clearTimeout
                        ? clearTimeout
                        : r
                } catch (e) {
                    f = r
                }
            }();
            var d,
                y = [],
                m = !1,
                h = -1;
            p.nextTick = function (e) {
                var t = new Array(arguments.length - 1);
                if (arguments.length > 1) 
                    for (var n = 1; n < arguments.length; n++) 
                        t[n - 1] = arguments[n];
            y.push(new l(e, t)),
                1 !== y.length || m || a(u)
            },
            l.prototype.run = function () {
                this
                    .fun
                    .apply(null, this.array)
            },
            p.title = "browser",
            p.browser = !0,
            p.env = {},
            p.argv = [],
            p.version = "",
            p.versions = {},
            p.on = s,
            p.addListener = s,
            p.once = s,
            p.off = s,
            p.removeListener = s,
            p.removeAllListeners = s,
            p.emit = s,
            p.prependListener = s,
            p.prependOnceListener = s,
            p.listeners = function (e) {
                return []
            },
            p.binding = function (e) {
                throw new Error("process.binding is not supported")
            },
            p.cwd = function () {
                return "/"
            },
            p.chdir = function (e) {
                throw new Error("process.chdir is not supported")
            },
            p.umask = function () {
                return 0
            }
        },
        function (e, t, n) {
            "use strict";
            t.__esModule = !0,
            t.default = {
                noWobble: {
                    stiffness: 170,
                    damping: 26
                },
                gentle: {
                    stiffness: 120,
                    damping: 14
                },
                wobbly: {
                    stiffness: 180,
                    damping: 12
                },
                stiff: {
                    stiffness: 210,
                    damping: 20
                }
            },
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule
                    ? e
                    : {
                        default: e
                    }
            }
            function a(e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                if (!e) 
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t
                    ? e
                    : t
            }
            function i(e, t) {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                }(),
                l = n(0),
                s = r(l);
            n(11);
            var c = n(12),
                f = r(c),
                p = function (e) {
                    return {x: .1 *e, y: .1 *e, z: e}
                },
                d = [
                    "d", "c", "h", "s"
                ],
                y = [
                    "A",
                    "2",
                    "3",
                    "4",
                    "5",
                    "6",
                    "7",
                    "8",
                    "9",
                    "10",
                    "J",
                    "Q",
                    "K"
                ],
                m = function () {
                    return y.map(function (e) {
                        return d.map(function (t) {
                            return {rank: e, suit: t}
                        })
                    })
                        .reduce(function (e, t) {
                            return e.concat(t)
                        })
                },
                h = function (e) {
                    function t(e) {
                        a(this, t);
                        var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.state = {
                            board: [],
                            deck: []
                        },
                        n
                    }
                    return i(t, e),
                    u(t, [
                        {
                            key: "componentWillReceiveProps",
                            value: function (e) {
                                e.board && this.setState({board: e.board})
                            }
                        }, {
                            key: "render",
                            value: function () {
                                var e = this.state.board,
                                    t = this.props,
                                    n = t.size,
                                    r = t.flipOnHover,
                                    a = t.boardYoffset,
                                    o = t.boardXoffset;
                                return s
                                    .default
                                    .createElement("div", null, m().map(function (t, i) {
                                        return s
                                            .default
                                            .createElement(f.default, {
                                                index: i,
                                                key: t.rank + t.suit,
                                                board: e,
                                                card: t,
                                                faceDown: !0,
                                                size: n,
                                                boardXoffset: o,
                                                boardYoffset: a,
                                                mapXYZ: p,
                                                flipOnHover: r
                                            })
                                    }))
                            }
                        }
                    ]),
                    t
                }(l.PureComponent);
            h.defaultProps = {
                size: 200,
                boardXoffset: 475,
                boardYoffset: 300,
                flipOnHover: !0
            },
            t.default = h
        },
        function (e, t) {},
        function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule
                    ? e
                    : {
                        default: e
                    }
            }
            function a(e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                if (!e) 
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t
                    ? e
                    : t
            }
            function i(e, t) {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var u = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                }(),
                l = n(0),
                s = r(l),
                c = n(13);
            n(26);
            var f = n(27),
                p = r(f),
                d = function (e, t, n, r, a, o) {
                    return function () {
                        return {
                            x: a +r*t.indexOf(e),
                            y: o,
                            z: 0
                        }
                    }
                },
                y = function (e, t, n, r, a) {
                    return {
                        WebkitTransform: "translate3d(" + e + "px, " + t + "px, 0)",
                        transform: "translate3d(" + e + "px, " + t + "px, 0)  rotate(0deg)",
                        position: "absolute",
                        width: n + "px",
                        height: r + "px",
                        zIndex: "" + a
                    }
                },
                m = {
                    stiffness: 340,
                    damping: 88,
                    precision: 1e-4
                },
                h = function (e, t) {
                    return {
                        x: (0, c.spring)(e, m),
                        y: (0, c.spring)(t, m)
                    }
                },
                v = function (e) {
                    function t(e) {
                        a(this, t);
                        var n = o(this, (t.__proto__ || Object.getPrototypeOf(t)).call(this, e));
                        return n.state = {
                            rotationY: 0,
                            boardCard: !1,
                            zIndex: 1
                        },
                        n.flipCard = n
                            .flipCard
                            .bind(n),
                        n
                    }
                    return i(t, e),
                    u(t, [
                        {
                            key: "componentWillReceiveProps",
                            value: function (e) {
                                var t = this,
                                    n = e.board,
                                    r = this.props.board,
                                    a = this.props.card.rank + this.props.card.suit;
                                if (this.isNewBoardCard(r, n, a)) {
                                    var o = 1 / (1 + n.indexOf(a)) / 10 + 1;
                                    setTimeout(function () {
                                        return t.flipCard()
                                    }, 500 * o)
                                }
                                0 === n.length && r.includes(a) && this.flipCard()
                            }
                        }, {
                            key: "componentWillUpdate",
                            value: function (e) {
                                var t = e.board,
                                    n = e.card,
                                    r = (e.index, n.rank + n.suit),
                                    a = t.indexOf(r);
                                this.setState({
                                    boardCard: -1 !== a,
                                    zIndex: -1 === a
                                        ? 1
                                        : a + 1
                                })
                            }
                        }, {
                            key: "shouldComponentUpdate",
                            value: function (e, t) {
                                var n = e.board,
                                    r = this.props.board,
                                    a = this.props.card.rank + this.props.card.suit,
                                    o = this.isNewBoardCard(r, n, a);
                                return e.size !== this.props.size || (t.rotationY !== this.state.rotationY || !!(o || 0 === n.length && r.includes(a)))
                            }
                        }, {
                            key: "isNewBoardCard",
                            value: function (e, t, n) {
                                var r = t.length - e.length,
                                    a = t.length - r;
                                return t.indexOf(n) >= a
                            }
                        }, {
                            key: "flipCard",
                            value: function () {
                                var e = this.state.rotationY,
                                    t = 0 === e
                                        ? 180
                                        : 0;
                                this.setState({rotationY: t})
                            }
                        }, {
                            key: "render",
                            value: function () {
                                var e = this,
                                    t = this.props,
                                    n = t.index,
                                    r = t.size,
                                    a = t.card,
                                    o = t.boardXoffset,
                                    i = t.boardYoffset,
                                    u = t.flipOnHover,
                                    l = t.board,
                                    f = this.props,
                                    m = f.mapXYZ,
                                    v = f.doubleBacked,
                                    b = .75 * r,
                                    g = r,
                                    w = a.rank + a.suit;
                                !0 === l.includes(w) && (m = d(w, l, 0, r, o, i));
                                var O = this.state,
                                    S = O.rotationY,
                                    T = O.boardCard,
                                    _ = O.zIndex,
                                    P = (y(n, n, b, g), m(n, a)),
                                    I = P.x,
                                    k = P.y,
                                    x = h(I, k);
                                return T && (v = !1),
                                s
                                    .default
                                    .createElement("div", {
                                        onMouseEnter: u
                                            ? function () {
                                                return l.includes(w)
                                                    ? e.flipCard()
                                                    : null
                                            }
                                            : null,
                                        onMouseLeave: u
                                            ? function () {
                                                return l.includes(w)
                                                    ? e.flipCard()
                                                    : null
                                            }
                                            : null
                                    }, s.default.createElement(c.Motion, {
                                        defaultStyle: {
                                            x: 1800,
                                            y: 1e3
                                        },
                                        style: x
                                    }, function (t) {
                                        var a = t.x,
                                            o = t.y;
                                        return s
                                            .default
                                            .createElement("div", {
                                                style: y(a, o, b, g, _),
                                                className: "container"
                                            }, s.default.createElement(p.default, {
                                                size: r,
                                                index: n,
                                                card: w.toUpperCase(),
                                                faceDown: e.props.faceDown,
                                                doubleBacked: v,
                                                rotationY: S
                                            }))
                                    }))
                            }
                        }
                    ]),
                    t
                }(l.Component);
            t.default = v
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule
                    ? e.default
                    : e
            }
            t.__esModule = !0;
            var a = n(14);
            t.Motion = r(a);
            var o = n(21);
            t.StaggeredMotion = r(o);
            var i = n(22);
            t.TransitionMotion = r(i);
            var u = n(24);
            t.spring = r(u);
            var l = n(9);
            t.presets = r(l);
            var s = n(1);
            t.stripStyle = r(s);
            var c = n(25);
            t.reorderKeys = r(c)
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule
                    ? e
                    : {
                        default: e
                    }
            }
            function a(e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : e.__proto__ = t)
            }
            t.__esModule = !0;
            var i = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) 
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                u = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                }(),
                l = n(2),
                s = r(l),
                c = n(1),
                f = r(c),
                p = n(3),
                d = r(p),
                y = n(4),
                m = r(y),
                h = n(5),
                v = r(h),
                b = n(6),
                g = r(b),
                w = n(0),
                O = r(w),
                S = n(7),
                T = r(S),
                _ = 1e3 / 60,
                P = function (e) {
                    function t(n) {
                        var r = this;
                        a(this, t),
                        e.call(this, n),
                        this.wasAnimating = !1,
                        this.animationID = null,
                        this.prevTime = 0,
                        this.accumulatedTime = 0,
                        this.unreadPropStyle = null,
                        this.clearUnreadPropStyle = function (e) {
                            var t = !1,
                                n = r.state,
                                a = n.currentStyle,
                                o = n.currentVelocity,
                                u = n.lastIdealStyle,
                                l = n.lastIdealVelocity;
                            for (var s in e) 
                                if (Object.prototype.hasOwnProperty.call(e, s)) {
                                    var c = e[s];
                                    "number" == typeof c && (t || (t = !0, a = i({}, a), o = i({}, o), u = i({}, u), l = i({}, l)), a[s] = c, o[s] = 0, u[s] = c, l[s] = 0)
                                }
                            t && r.setState({currentStyle: a, currentVelocity: o, lastIdealStyle: u, lastIdealVelocity: l})
                        },
                        this.startAnimationIfNecessary = function () {
                            r.animationID = v.default(function (e) {
                                var t = r.props.style;
                                if (g.default(r.state.currentStyle, t, r.state.currentVelocity)) 
                                    return r.wasAnimating && r.props.onRest && r.props.onRest(),
                                    r.animationID = null,
                                    r.wasAnimating = !1,
                                    void(r.accumulatedTime = 0);
                                r.wasAnimating = !0;
                                var n = e || m.default(),
                                    a = n - r.prevTime;
                                if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + a, r.accumulatedTime > 10 * _ && (r.accumulatedTime = 0), 0 === r.accumulatedTime) 
                                    return r.animationID = null,
                                    void r.startAnimationIfNecessary();
                                var o = (r.accumulatedTime - Math.floor(r.accumulatedTime / _) * _) / _,
                                    i = Math.floor(r.accumulatedTime / _),
                                    u = {},
                                    l = {},
                                    s = {},
                                    c = {};
                                for (var f in t) 
                                    if (Object.prototype.hasOwnProperty.call(t, f)) {
                                        var p = t[f];
                                        if ("number" == typeof p) 
                                            s[f] = p,
                                            c[f] = 0,
                                            u[f] = p,
                                            l[f] = 0;
                                        else {
                                            for (var y = r.state.lastIdealStyle[f], h = r.state.lastIdealVelocity[f], v = 0; v < i; v++) {
                                                var b = d.default(_ / 1e3, y, h, p.val, p.stiffness, p.damping, p.precision);
                                                y = b[0],
                                                h = b[1]
                                            }
                                            var w = d.default(_ / 1e3, y, h, p.val, p.stiffness, p.damping, p.precision),
                                                O = w[0],
                                                S = w[1];
                                            s[f] = y + (O - y) * o,
                                            c[f] = h + (S - h) * o,
                                            u[f] = y,
                                            l[f] = h
                                        }
                                    }
                                r.animationID = null,
                                r.accumulatedTime -= i * _,
                                r.setState({currentStyle: s, currentVelocity: c, lastIdealStyle: u, lastIdealVelocity: l}),
                                r.unreadPropStyle = null,
                                r.startAnimationIfNecessary()
                            })
                        },
                        this.state = this.defaultState()
                    }
                    return o(t, e),
                    u(t, null, [
                        {
                            key: "propTypes",
                            value: {
                                defaultStyle: T
                                    .default
                                    .objectOf(T.default.number),
                                style: T
                                    .default
                                    .objectOf(T.default.oneOfType([T.default.number, T.default.object]))
                                    .isRequired,
                                children: T.default.func.isRequired,
                                onRest: T.default.func
                            },
                            enumerable: !0
                        }
                    ]),
                    t.prototype.defaultState = function () {
                        var e = this.props,
                            t = e.defaultStyle,
                            n = e.style,
                            r = t || f.default(n),
                            a = s.default(r);
                        return {currentStyle: r, currentVelocity: a, lastIdealStyle: r, lastIdealVelocity: a}
                    },
                    t.prototype.componentDidMount = function () {
                        this.prevTime = m.default(),
                        this.startAnimationIfNecessary()
                    },
                    t.prototype.componentWillReceiveProps = function (e) {
                        null != this.unreadPropStyle && this.clearUnreadPropStyle(this.unreadPropStyle),
                        this.unreadPropStyle = e.style,
                        null == this.animationID && (this.prevTime = m.default(), this.startAnimationIfNecessary())
                    },
                    t.prototype.componentWillUnmount = function () {
                        null != this.animationID && (v.default.cancel(this.animationID), this.animationID = null)
                    },
                    t.prototype.render = function () {
                        var e = this
                            .props
                            .children(this.state.currentStyle);
                        return e && O
                            .default
                            .Children
                            .only(e)
                    },
                    t
                }(O.default.Component);
            t.default = P,
            e.exports = t.default
        },
        function (e, t) {
            var n;
            n = function () {
                return this
            }();
            try {
                n = n || Function("return this")() || (0, eval)("this")
            } catch (e) {
                "object" == typeof window && (n = window)
            }
            e.exports = n
        },
        function (e, t, n) {
            (function (t) {
                (function () {
                    var n,
                        r,
                        a,
                        o,
                        i,
                        u;
                    "undefined" != typeof performance && null !== performance && performance.now
                        ? e.exports = function () {
                            return performance.now()
                        }
                        : void 0 !== t && null !== t && t.hrtime
                            ? (e.exports = function () {
                                return (n() - i) / 1e6
                            },
                            r = t.hrtime,
                            n = function () {
                                var e;
                                return e = r(),
                                1e9 * e[0] + e[1]
                            },
                            o = n(),
                            u = 1e9 * t.uptime(),
                            i = o - u)
                            : Date.now
                                ? (e.exports = function () {
                                    return Date.now() - a
                                },
                                a = Date.now())
                                : (e.exports = function () {
                                    return (new Date).getTime() - a
                                },
                                a = (new Date).getTime())
                }).call(this)
            }).call(t, n(8))
        },
        function (e, t, n) {
            "use strict";
            var r = n(18),
                a = n(19),
                o = n(20);
            e.exports = function () {
                function e(e, t, n, r, i, u) {
                    u !== o && a(!1, "Calling PropTypes validators directly is not supported by the `prop-types` packa" +
                            "ge. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-c" +
                            "heck-prop-types")
                }
                function t() {
                    return e
                }
                e.isRequired = e;
                var n = {
                    array: e,
                    bool: e,
                    func: e,
                    number: e,
                    object: e,
                    string: e,
                    symbol: e,
                    any: e,
                    arrayOf: t,
                    element: e,
                    instanceOf: t,
                    node: e,
                    objectOf: t,
                    oneOf: t,
                    oneOfType: t,
                    shape: t,
                    exact: t
                };
                return n.checkPropTypes = r,
                n.PropTypes = n,
                n
            }
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                return function () {
                    return e
                }
            }
            var a = function () {};
            a.thatReturns = r,
            a.thatReturnsFalse = r(!1),
            a.thatReturnsTrue = r(!0),
            a.thatReturnsNull = r(null),
            a.thatReturnsThis = function () {
                return this
            },
            a.thatReturnsArgument = function (e) {
                return e
            },
            e.exports = a
        },
        function (e, t, n) {
            "use strict";
            function r(e, t, n, r, o, i, u, l) {
                if (a(t), !e) {
                    var s;
                    if (void 0 === t) 
                        s = new Error("Minified exception occurred; use the non-minified dev environment for the full e" +
                                "rror message and additional helpful warnings.");
                    else {
                        var c = [
                                n,
                                r,
                                o,
                                i,
                                u,
                                l
                            ],
                            f = 0;
                        s = new Error(t.replace(/%s/g, function () {
                            return c[f++]
                        })),
                        s.name = "Invariant Violation"
                    }
                    throw s.framesToPop = 1,
                    s
                }
            }
            var a = function (e) {};
            e.exports = r
        },
        function (e, t, n) {
            "use strict";
            e.exports = "SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule
                    ? e
                    : {
                        default: e
                    }
            }
            function a(e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : e.__proto__ = t)
            }
            function i(e, t, n) {
                for (var r = 0; r < e.length; r++) 
                    if (!w.default(e[r], t[r], n[r])) 
                        return !1;
            return !0
            }
            t.__esModule = !0;
            var u = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) 
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                l = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                }(),
                s = n(2),
                c = r(s),
                f = n(1),
                p = r(f),
                d = n(3),
                y = r(d),
                m = n(4),
                h = r(m),
                v = n(5),
                b = r(v),
                g = n(6),
                w = r(g),
                O = n(0),
                S = r(O),
                T = n(7),
                _ = r(T),
                P = 1e3 / 60,
                I = function (e) {
                    function t(n) {
                        var r = this;
                        a(this, t),
                        e.call(this, n),
                        this.animationID = null,
                        this.prevTime = 0,
                        this.accumulatedTime = 0,
                        this.unreadPropStyles = null,
                        this.clearUnreadPropStyle = function (e) {
                            for (var t = r.state, n = t.currentStyles, a = t.currentVelocities, o = t.lastIdealStyles, i = t.lastIdealVelocities, l = !1, s = 0; s < e.length; s++) {
                                var c = e[s],
                                    f = !1;
                                for (var p in c) 
                                    if (Object.prototype.hasOwnProperty.call(c, p)) {
                                        var d = c[p];
                                        "number" == typeof d && (f || (f = !0, l = !0, n[s] = u({}, n[s]), a[s] = u({}, a[s]), o[s] = u({}, o[s]), i[s] = u({}, i[s])), n[s][p] = d,
                                        a[s][p] = 0,
                                        o[s][p] = d,
                                        i[s][p] = 0)
                                    }
                                }
                            l && r.setState({currentStyles: n, currentVelocities: a, lastIdealStyles: o, lastIdealVelocities: i})
                        },
                        this.startAnimationIfNecessary = function () {
                            r.animationID = b.default(function (e) {
                                var t = r
                                    .props
                                    .styles(r.state.lastIdealStyles);
                                if (i(r.state.currentStyles, t, r.state.currentVelocities)) 
                                    return r.animationID = null,
                                    void(r.accumulatedTime = 0);
                                var n = e || h.default(),
                                    a = n - r.prevTime;
                                if (r.prevTime = n, r.accumulatedTime = r.accumulatedTime + a, r.accumulatedTime > 10 * P && (r.accumulatedTime = 0), 0 === r.accumulatedTime) 
                                    return r.animationID = null,
                                    void r.startAnimationIfNecessary();
                                for (var o = (r.accumulatedTime - Math.floor(r.accumulatedTime / P) * P) / P, u = Math.floor(r.accumulatedTime / P), l = [], s = [], c = [], f = [], p = 0; p < t.length; p++) {
                                    var d = t[p],
                                        m = {},
                                        v = {},
                                        b = {},
                                        g = {};
                                    for (var w in d) 
                                        if (Object.prototype.hasOwnProperty.call(d, w)) {
                                            var O = d[w];
                                            if ("number" == typeof O) 
                                                m[w] = O,
                                                v[w] = 0,
                                                b[w] = O,
                                                g[w] = 0;
                                            else {
                                                for (var S = r.state.lastIdealStyles[p][w], T = r.state.lastIdealVelocities[p][w], _ = 0; _ < u; _++) {
                                                    var I = y.default(P / 1e3, S, T, O.val, O.stiffness, O.damping, O.precision);
                                                    S = I[0],
                                                    T = I[1]
                                                }
                                                var k = y.default(P / 1e3, S, T, O.val, O.stiffness, O.damping, O.precision),
                                                    x = k[0],
                                                    j = k[1];
                                                m[w] = S + (x - S) * o,
                                                v[w] = T + (j - T) * o,
                                                b[w] = S,
                                                g[w] = T
                                            }
                                        }
                                    c[p] = m,
                                    f[p] = v,
                                    l[p] = b,
                                    s[p] = g
                                }
                                r.animationID = null,
                                r.accumulatedTime -= u * P,
                                r.setState({currentStyles: c, currentVelocities: f, lastIdealStyles: l, lastIdealVelocities: s}),
                                r.unreadPropStyles = null,
                                r.startAnimationIfNecessary()
                            })
                        },
                        this.state = this.defaultState()
                    }
                    return o(t, e),
                    l(t, null, [
                        {
                            key: "propTypes",
                            value: {
                                defaultStyles: _
                                    .default
                                    .arrayOf(_.default.objectOf(_.default.number)),
                                styles: _.default.func.isRequired,
                                children: _.default.func.isRequired
                            },
                            enumerable: !0
                        }
                    ]),
                    t.prototype.defaultState = function () {
                        var e = this.props,
                            t = e.defaultStyles,
                            n = e.styles,
                            r = t || n().map(p.default),
                            a = r.map(function (e) {
                                return c.default(e)
                            });
                        return {currentStyles: r, currentVelocities: a, lastIdealStyles: r, lastIdealVelocities: a}
                    },
                    t.prototype.componentDidMount = function () {
                        this.prevTime = h.default(),
                        this.startAnimationIfNecessary()
                    },
                    t.prototype.componentWillReceiveProps = function (e) {
                        null != this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles),
                        this.unreadPropStyles = e.styles(this.state.lastIdealStyles),
                        null == this.animationID && (this.prevTime = h.default(), this.startAnimationIfNecessary())
                    },
                    t.prototype.componentWillUnmount = function () {
                        null != this.animationID && (b.default.cancel(this.animationID), this.animationID = null)
                    },
                    t.prototype.render = function () {
                        var e = this
                            .props
                            .children(this.state.currentStyles);
                        return e && S
                            .default
                            .Children
                            .only(e)
                    },
                    t
                }(S.default.Component);
            t.default = I,
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r(e) {
                return e && e.__esModule
                    ? e
                    : {
                        default: e
                    }
            }
            function a(e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
            function o(e, t) {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : e.__proto__ = t)
            }
            function i(e, t, n) {
                var r = t;
                return null == r
                    ? e.map(function (e, t) {
                        return {key: e.key, data: e.data, style: n[t]}
                    })
                    : e.map(function (e, t) {
                        for (var a = 0; a < r.length; a++) 
                            if (r[a].key === e.key) 
                                return {key: r[a].key, data: r[a].data, style: n[t]};
                    return {key: e.key, data: e.data, style: n[t]}
                    })
            }
            function u(e, t, n, r) {
                if (r.length !== t.length) 
                    return !1;
                for (var a = 0; a < r.length; a++) 
                    if (r[a].key !== t[a].key) 
                        return !1;
            for (var a = 0; a < r.length; a++) 
                    if (!_.default(e[a], t[a].style, n[a])) 
                        return !1;
            return !0
            }
            function l(e, t, n, r, a, o, i, u, l) {
                for (var s = b.default(r, a, function (e, r) {
                    var a = t(r);
                    return null == a
                        ? (n({key: r.key, data: r.data}), null)
                        : _.default(o[e], a, i[e])
                            ? (n({key: r.key, data: r.data}), null)
                            : {
                                key: r.key,
                                data: r.data,
                                style: a
                            }
                }), c = [], f = [], d = [], y = [], m = 0; m < s.length; m++) {
                    for (var h = s[m], v = null, g = 0; g < r.length; g++) 
                        if (r[g].key === h.key) {
                            v = g;
                            break
                        }
                    if (null == v) {
                        var w = e(h);
                        c[m] = w,
                        d[m] = w;
                        var O = p.default(h.style);
                        f[m] = O,
                        y[m] = O
                    } else 
                        c[m] = o[v],
                        d[m] = u[v],
                        f[m] = i[v],
                        y[m] = l[v]
                }
                return [s, c, f, d, y]
            }
            t.__esModule = !0;
            var s = Object.assign || function (e) {
                    for (var t = 1; t < arguments.length; t++) {
                        var n = arguments[t];
                        for (var r in n) 
                            Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                    }
                    return e
                },
                c = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                }(),
                f = n(2),
                p = r(f),
                d = n(1),
                y = r(d),
                m = n(3),
                h = r(m),
                v = n(23),
                b = r(v),
                g = n(4),
                w = r(g),
                O = n(5),
                S = r(O),
                T = n(6),
                _ = r(T),
                P = n(0),
                I = r(P),
                k = n(7),
                x = r(k),
                j = 1e3 / 60,
                D = function (e) {
                    function t(n) {
                        var r = this;
                        a(this, t),
                        e.call(this, n),
                        this.unmounting = !1,
                        this.animationID = null,
                        this.prevTime = 0,
                        this.accumulatedTime = 0,
                        this.unreadPropStyles = null,
                        this.clearUnreadPropStyle = function (e) {
                            for (var t = l(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, e, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), n = t[0], a = t[1], o = t[2], i = t[3], u = t[4], c = 0; c < e.length; c++) {
                                var f = e[c].style,
                                    p = !1;
                                for (var d in f) 
                                    if (Object.prototype.hasOwnProperty.call(f, d)) {
                                        var y = f[d];
                                        "number" == typeof y && (p || (p = !0, a[c] = s({}, a[c]), o[c] = s({}, o[c]), i[c] = s({}, i[c]), u[c] = s({}, u[c]), n[c] = {
                                            key: n[c].key,
                                            data: n[c].data,
                                            style: s({}, n[c].style)
                                        }), a[c][d] = y,
                                        o[c][d] = 0,
                                        i[c][d] = y,
                                        u[c][d] = 0,
                                        n[c].style[d] = y)
                                    }
                                }
                            r.setState({currentStyles: a, currentVelocities: o, mergedPropsStyles: n, lastIdealStyles: i, lastIdealVelocities: u})
                        },
                        this.startAnimationIfNecessary = function () {
                            r.unmounting || (r.animationID = S.default(function (e) {
                                if (!r.unmounting) {
                                    var t = r.props.styles,
                                        n = "function" == typeof t
                                            ? t(i(r.state.mergedPropsStyles, r.unreadPropStyles, r.state.lastIdealStyles))
                                            : t;
                                    if (u(r.state.currentStyles, n, r.state.currentVelocities, r.state.mergedPropsStyles)) 
                                        return r.animationID = null,
                                        void(r.accumulatedTime = 0);
                                    var a = e || w.default(),
                                        o = a - r.prevTime;
                                    if (r.prevTime = a, r.accumulatedTime = r.accumulatedTime + o, r.accumulatedTime > 10 * j && (r.accumulatedTime = 0), 0 === r.accumulatedTime) 
                                        return r.animationID = null,
                                        void r.startAnimationIfNecessary();
                                    for (var s = (r.accumulatedTime - Math.floor(r.accumulatedTime / j) * j) / j, c = Math.floor(r.accumulatedTime / j), f = l(r.props.willEnter, r.props.willLeave, r.props.didLeave, r.state.mergedPropsStyles, n, r.state.currentStyles, r.state.currentVelocities, r.state.lastIdealStyles, r.state.lastIdealVelocities), p = f[0], d = f[1], y = f[2], m = f[3], v = f[4], b = 0; b < p.length; b++) {
                                        var g = p[b].style,
                                            O = {},
                                            S = {},
                                            T = {},
                                            _ = {};
                                        for (var P in g) 
                                            if (Object.prototype.hasOwnProperty.call(g, P)) {
                                                var I = g[P];
                                                if ("number" == typeof I) 
                                                    O[P] = I,
                                                    S[P] = 0,
                                                    T[P] = I,
                                                    _[P] = 0;
                                                else {
                                                    for (var k = m[b][P], x = v[b][P], D = 0; D < c; D++) {
                                                        var M = h.default(j / 1e3, k, x, I.val, I.stiffness, I.damping, I.precision);
                                                        k = M[0],
                                                        x = M[1]
                                                    }
                                                    var E = h.default(j / 1e3, k, x, I.val, I.stiffness, I.damping, I.precision),
                                                        R = E[0],
                                                        C = E[1];
                                                    O[P] = k + (R - k) * s,
                                                    S[P] = x + (C - x) * s,
                                                    T[P] = k,
                                                    _[P] = x
                                                }
                                            }
                                        m[b] = T,
                                        v[b] = _,
                                        d[b] = O,
                                        y[b] = S
                                    }
                                    r.animationID = null,
                                    r.accumulatedTime -= c * j,
                                    r.setState({currentStyles: d, currentVelocities: y, lastIdealStyles: m, lastIdealVelocities: v, mergedPropsStyles: p}),
                                    r.unreadPropStyles = null,
                                    r.startAnimationIfNecessary()
                                }
                            }))
                        },
                        this.state = this.defaultState()
                    }
                    return o(t, e),
                    c(t, null, [
                        {
                            key: "propTypes",
                            value: {
                                defaultStyles: x
                                    .default
                                    .arrayOf(x.default.shape({
                                        key: x.default.string.isRequired,
                                        data: x.default.any,
                                        style: x
                                            .default
                                            .objectOf(x.default.number)
                                            .isRequired
                                    })),
                                styles: x
                                    .default
                                    .oneOfType([
                                        x.default.func,
                                        x
                                            .default
                                            .arrayOf(x.default.shape({
                                                key: x.default.string.isRequired,
                                                data: x.default.any,
                                                style: x
                                                    .default
                                                    .objectOf(x.default.oneOfType([x.default.number, x.default.object]))
                                                    .isRequired
                                            }))
                                    ])
                                    .isRequired,
                                children: x.default.func.isRequired,
                                willEnter: x.default.func,
                                willLeave: x.default.func,
                                didLeave: x.default.func
                            },
                            enumerable: !0
                        }, {
                            key: "defaultProps",
                            value: {
                                willEnter: function (e) {
                                    return y.default(e.style)
                                },
                                willLeave: function () {
                                    return null
                                },
                                didLeave: function () {}
                            },
                            enumerable: !0
                        }
                    ]),
                    t.prototype.defaultState = function () {
                        var e = this.props,
                            t = e.defaultStyles,
                            n = e.styles,
                            r = e.willEnter,
                            a = e.willLeave,
                            o = e.didLeave,
                            i = "function" == typeof n
                                ? n(t)
                                : n,
                            u = void 0;
                        u = null == t
                            ? i
                            : t.map(function (e) {
                                for (var t = 0; t < i.length; t++) 
                                    if (i[t].key === e.key) 
                                        return i[t];
                            return e
                            });
                        var s = null == t
                                ? i.map(function (e) {
                                    return y.default(e.style)
                                })
                                : t.map(function (e) {
                                    return y.default(e.style)
                                }),
                            c = null == t
                                ? i.map(function (e) {
                                    return p.default(e.style)
                                })
                                : t.map(function (e) {
                                    return p.default(e.style)
                                }),
                            f = l(r, a, o, u, i, s, c, s, c),
                            d = f[0];
                        return {currentStyles: f[1], currentVelocities: f[2], lastIdealStyles: f[3], lastIdealVelocities: f[4], mergedPropsStyles: d}
                    },
                    t.prototype.componentDidMount = function () {
                        this.prevTime = w.default(),
                        this.startAnimationIfNecessary()
                    },
                    t.prototype.componentWillReceiveProps = function (e) {
                        this.unreadPropStyles && this.clearUnreadPropStyle(this.unreadPropStyles);
                        var t = e.styles;
                        this.unreadPropStyles = "function" == typeof t
                            ? t(i(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.lastIdealStyles))
                            : t,
                        null == this.animationID && (this.prevTime = w.default(), this.startAnimationIfNecessary())
                    },
                    t.prototype.componentWillUnmount = function () {
                        this.unmounting = !0,
                        null != this.animationID && (S.default.cancel(this.animationID), this.animationID = null)
                    },
                    t.prototype.render = function () {
                        var e = i(this.state.mergedPropsStyles, this.unreadPropStyles, this.state.currentStyles),
                            t = this
                                .props
                                .children(e);
                        return t && I
                            .default
                            .Children
                            .only(t)
                    },
                    t
                }(I.default.Component);
            t.default = D,
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r(e, t, n) {
                for (var r = {}, a = 0; a < e.length; a++) 
                    r[e[a].key] = a;
                for (var o = {}, a = 0; a < t.length; a++) 
                    o[t[a].key] = a;
                for (var i = [], a = 0; a < t.length; a++) 
                    i[a] = t[a];
                for (var a = 0; a < e.length; a++) 
                    if (!Object.prototype.hasOwnProperty.call(o, e[a].key)) {
                        var u = n(a, e[a]);
                        null != u && i.push(u)
                    }
                return i.sort(function (e, n) {
                    var a = o[e.key],
                        i = o[n.key],
                        u = r[e.key],
                        l = r[n.key];
                    if (null != a && null != i) 
                        return o[e.key] - o[n.key];
                    if (null != u && null != l) 
                        return r[e.key] - r[n.key];
                    if (null != a) {
                        for (var s = 0; s < t.length; s++) {
                            var c = t[s].key;
                            if (Object.prototype.hasOwnProperty.call(r, c)) {
                                if (a < o[c] && l > r[c]) 
                                    return -1;
                                if (a > o[c] && l < r[c]) 
                                    return 1
                            }
                        }
                        return 1
                    }
                    for (var s = 0; s < t.length; s++) {
                        var c = t[s].key;
                        if (Object.prototype.hasOwnProperty.call(r, c)) {
                            if (i < o[c] && u > r[c]) 
                                return 1;
                            if (i > o[c] && u < r[c]) 
                                return -1
                        }
                    }
                    return -1
                })
            }
            t.__esModule = !0,
            t.default = r,
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r(e, t) {
                return a({}, u, t, {val: e})
            }
            t.__esModule = !0;
            var a = Object.assign || function (e) {
                for (var t = 1; t < arguments.length; t++) {
                    var n = arguments[t];
                    for (var r in n) 
                        Object.prototype.hasOwnProperty.call(n, r) && (e[r] = n[r])
                }
                return e
            };
            t.default = r;
            var o = n(9),
                i = function (e) {
                    return e && e.__esModule
                        ? e
                        : {
                            default: e
                        }
                }(o),
                u = a({}, i.default.noWobble, {precision: .01});
            e.exports = t.default
        },
        function (e, t, n) {
            "use strict";
            function r() {}
            t.__esModule = !0,
            t.default = r;
            e.exports = t.default
        },
        function (e, t) {},
        function (e, t, n) {
            "use strict";
            function r(e, t) {
                if (!(e instanceof t)) 
                    throw new TypeError("Cannot call a class as a function")
            }
            function a(e, t) {
                if (!e) 
                    throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
                return !t || "object" != typeof t && "function" != typeof t
                    ? e
                    : t
            }
            function o(e, t) {
                if ("function" != typeof t && null !== t) 
                    throw new TypeError("Super expression must either be null or a function, not " + typeof t);
                e.prototype = Object.create(t && t.prototype, {
                    constructor: {
                        value: e,
                        enumerable: !1,
                        writable: !0,
                        configurable: !0
                    }
                }),
                t && (Object.setPrototypeOf
                    ? Object.setPrototypeOf(e, t)
                    : e.__proto__ = t)
            }
            Object.defineProperty(t, "__esModule", {
                value: !0
            });
            var i = function () {
                    function e(e, t) {
                        for (var n = 0; n < t.length; n++) {
                            var r = t[n];
                            r.enumerable = r.enumerable || !1,
                            r.configurable = !0,
                            "value" in r && (r.writable = !0),
                            Object.defineProperty(e, r.key, r)
                        }
                    }
                    return function (t, n, r) {
                        return n && e(t.prototype, n),
                        r && e(t, r),
                        t
                    }
                }(),
                u = n(0),
                l = function (e) {
                    return e && e.__esModule
                        ? e
                        : {
                            default: e
                        }
                }(u),
                s = function (e) {
                    function t() {
                        return r(this, t),
                        a(this, (t.__proto__ || Object.getPrototypeOf(t)).apply(this, arguments))
                    }
                    return o(t, e),
                    i(t, [
                        {
                            key: "shouldComponentUpdate",
                            value: function (e) {
                                return e.rotationY !== this.props.rotationY || e.size !== this.props.size
                            }
                        }, {
                            key: "render",
                            value: function () {
                                var e = this.props,
                                    t = (e.index, e.card),
                                    n = (e.size, e.faceDown),
                                    r = e.rotationY;
                                return l
                                    .default
                                    .createElement("div", {
                                        id: "card",
                                        style: {
                                            transform: "rotateY(" + r + "deg)"
                                        }
                                    }, l.default.createElement("img", {
                                        className: !0 === n
                                            ? "front"
                                            : "back",
                                        src: "./cards/back.svg",
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        }
                                    }), l.default.createElement("img", {
                                        className: !0 === n
                                            ? "back"
                                            : "front",
                                        src: "./cards/" + t + ".svg",
                                        style: {
                                            width: "100%",
                                            height: "100%"
                                        }
                                    }))
                            }
                        }
                    ]),
                    t
                }(u.PureComponent);
            t.default = s
        }
    ])
});