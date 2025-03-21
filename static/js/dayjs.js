﻿! function(t, n) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = n() : "function" == typeof define && define.amd ? define(n) : t.dayjs = n()
}(this, function() {
    "use strict";

    function i(t, n, e) {
        var i = String(t);
        return !i || i.length >= n ? t : "" + Array(n + 1 - i.length).join(e) + t
    }
    var r = "millisecond",
        h = "second",
        f = "minute",
        c = "hour",
        d = "day",
        $ = "week",
        l = "month",
        u = "quarter",
        m = "year",
        s = /^(\d{4})-?(\d{1,2})-?(\d{0,2})[^0-9]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?.?(\d{1,3})?$/,
        y = /\[([^\]]+)]|Y{2,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,
        t = {
            s: i,
            z: function(t) {
                var n = -t.utcOffset(),
                    e = Math.abs(n),
                    t = Math.floor(e / 60),
                    e = e % 60;
                return (n <= 0 ? "+" : "-") + i(t, 2, "0") + ":" + i(e, 2, "0")
            },
            m: function(t, n) {
                var e = 12 * (n.year() - t.year()) + (n.month() - t.month()),
                    i = t.clone().add(e, l),
                    r = n - i < 0,
                    t = t.clone().add(e + (r ? -1 : 1), l);
                return Number(-(e + (n - i) / (r ? i - t : t - i)) || 0)
            },
            a: function(t) {
                return t < 0 ? Math.ceil(t) || 0 : Math.floor(t)
            },
            p: function(t) {
                return {
                    M: l,
                    y: m,
                    w: $,
                    d: d,
                    D: "date",
                    h: c,
                    m: f,
                    s: h,
                    ms: r,
                    Q: u
                }[t] || String(t || "").toLowerCase().replace(/s$/, "")
            },
            u: function(t) {
                return void 0 === t
            }
        },
        n = {
            name: "en",
            weekdays: "Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),
            months: "January_February_March_April_May_June_July_August_September_October_November_December".split("_")
        },
        o = "en",
        a = {};
    a[o] = n;

    function M(t) {
        return t instanceof p
    }

    function g(t, n, e) {
        var i;
        return t ? ("string" == typeof t ? (a[t] && (i = t), n && (a[t] = n, i = t)) : (n = t.name, a[n] = t, i = n), e || (o = i), i) : o
    }

    function D(t, n, e) {
        return M(t) ? t.clone() : ((n = n ? "string" == typeof n ? {
            format: n,
            pl: e
        } : n : {}).date = t, new p(n))
    }
    var S = t;
    S.l = g, S.i = M, S.w = function(t, n) {
        return D(t, {
            locale: n.$L,
            utc: n.$u,
            $offset: n.$offset
        })
    };
    var p = ((t = e.prototype).parse = function(i) {
        this.$d = function() {
            var t = i.date,
                n = i.utc;
            if (null === t) return new Date(NaN);
            if (S.u(t)) return new Date;
            if (t instanceof Date) return new Date(t);
            if ("string" == typeof t && !/Z$/i.test(t)) {
                var e = t.match(s);
                if (e) return n ? new Date(Date.UTC(e[1], e[2] - 1, e[3] || 1, e[4] || 0, e[5] || 0, e[6] || 0, e[7] || 0)) : new Date(e[1], e[2] - 1, e[3] || 1, e[4] || 0, e[5] || 0, e[6] || 0, e[7] || 0)
            }
            return new Date(t)
        }(), this.init()
    }, t.init = function() {
        var t = this.$d;
        this.$y = t.getFullYear(), this.$M = t.getMonth(), this.$D = t.getDate(), this.$W = t.getDay(), this.$H = t.getHours(), this.$m = t.getMinutes(), this.$s = t.getSeconds(), this.$ms = t.getMilliseconds()
    }, t.$utils = function() {
        return S
    }, t.isValid = function() {
        return !("Invalid Date" === this.$d.toString())
    }, t.isSame = function(t, n) {
        t = D(t);
        return this.startOf(n) <= t && t <= this.endOf(n)
    }, t.isAfter = function(t, n) {
        return D(t) < this.startOf(n)
    }, t.isBefore = function(t, n) {
        return this.endOf(n) < D(t)
    }, t.$g = function(t, n, e) {
        return S.u(t) ? this[n] : this.set(e, t)
    }, t.year = function(t) {
        return this.$g(t, "$y", m)
    }, t.month = function(t) {
        return this.$g(t, "$M", l)
    }, t.day = function(t) {
        return this.$g(t, "$W", d)
    }, t.date = function(t) {
        return this.$g(t, "$D", "date")
    }, t.hour = function(t) {
        return this.$g(t, "$H", c)
    }, t.minute = function(t) {
        return this.$g(t, "$m", f)
    }, t.second = function(t) {
        return this.$g(t, "$s", h)
    }, t.millisecond = function(t) {
        return this.$g(t, "$ms", r)
    }, t.unix = function() {
        return Math.floor(this.valueOf() / 1e3)
    }, t.valueOf = function() {
        return this.$d.getTime()
    }, t.startOf = function(t, n) {
        function e(t, n) {
            return t = S.w(r.$u ? Date.UTC(r.$y, n, t) : new Date(r.$y, n, t), r), s ? t : t.endOf(d)
        }

        function i(t, n) {
            return S.w(r.toDate()[t].apply(r.toDate(), (s ? [0, 0, 0, 0] : [23, 59, 59, 999]).slice(n)), r)
        }
        var r = this,
            s = !!S.u(n) || n,
            u = S.p(t),
            o = this.$W,
            a = this.$M,
            n = this.$D,
            t = "set" + (this.$u ? "UTC" : "");
        switch (u) {
            case m:
                return s ? e(1, 0) : e(31, 11);
            case l:
                return s ? e(1, a) : e(0, a + 1);
            case $:
                u = this.$locale().weekStart || 0, u = (o < u ? o + 7 : o) - u;
                return e(s ? n - u : n + (6 - u), a);
            case d:
            case "date":
                return i(t + "Hours", 0);
            case c:
                return i(t + "Minutes", 1);
            case f:
                return i(t + "Seconds", 2);
            case h:
                return i(t + "Milliseconds", 3);
            default:
                return this.clone()
        }
    }, t.endOf = function(t) {
        return this.startOf(t, !1)
    }, t.$set = function(t, n) {
        var e = S.p(t),
            i = "set" + (this.$u ? "UTC" : ""),
            t = ((t = {})[d] = i + "Date", t.date = i + "Date", t[l] = i + "Month", t[m] = i + "FullYear", t[c] = i + "Hours", t[f] = i + "Minutes", t[h] = i + "Seconds", t[r] = i + "Milliseconds", t[e]),
            n = e === d ? this.$D + (n - this.$W) : n;
        return e === l || e === m ? ((e = this.clone().set("date", 1)).$d[t](n), e.init(), this.$d = e.set("date", Math.min(this.$D, e.daysInMonth())).toDate()) : t && this.$d[t](n), this.init(), this
    }, t.set = function(t, n) {
        return this.clone().$set(t, n)
    }, t.get = function(t) {
        return this[S.p(t)]()
    }, t.add = function(e, t) {
        var i = this;
        e = Number(e);
        var n = S.p(t),
            t = function(t) {
                var n = D(i);
                return S.w(n.date(n.date() + Math.round(t * e)), i)
            };
        if (n === l) return this.set(l, this.$M + e);
        if (n === m) return this.set(m, this.$y + e);
        if (n === d) return t(1);
        if (n === $) return t(7);
        (t = {})[f] = 6e4, t[c] = 36e5, t[h] = 1e3, n = t[n] || 1, n = this.$d.getTime() + e * n;
        return S.w(n, this)
    }, t.subtract = function(t, n) {
        return this.add(-1 * t, n)
    }, t.format = function(t) {
        var r = this;
        if (!this.isValid()) return "Invalid Date";

        function n(t, n, e, i) {
            return t && (t[n] || t(r, s)) || e[n].substr(0, i)
        }

        function e(t) {
            return S.s(o % 12 || 12, t, "0")
        }
        var s = t || "YYYY-MM-DDTHH:mm:ssZ",
            i = S.z(this),
            u = this.$locale(),
            o = this.$H,
            a = this.$m,
            h = this.$M,
            f = u.weekdays,
            c = u.months,
            t = u.meridiem || function(t, n, e) {
                t = t < 12 ? "AM" : "PM";
                return e ? t.toLowerCase() : t
            },
            d = {
                YY: String(this.$y).slice(-2),
                YYYY: this.$y,
                M: h + 1,
                MM: S.s(h + 1, 2, "0"),
                MMM: n(u.monthsShort, h, c, 3),
                MMMM: c[h] || c(this, s),
                D: this.$D,
                DD: S.s(this.$D, 2, "0"),
                d: String(this.$W),
                dd: n(u.weekdaysMin, this.$W, f, 2),
                ddd: n(u.weekdaysShort, this.$W, f, 3),
                dddd: f[this.$W],
                H: String(o),
                HH: S.s(o, 2, "0"),
                h: e(1),
                hh: e(2),
                a: t(o, a, !0),
                A: t(o, a, !1),
                m: String(a),
                mm: S.s(a, 2, "0"),
                s: String(this.$s),
                ss: S.s(this.$s, 2, "0"),
                SSS: S.s(this.$ms, 3, "0"),
                Z: i
            };
        return s.replace(y, function(t, n) {
            return n || d[t] || i.replace(":", "")
        })
    }, t.utcOffset = function() {
        return 15 * -Math.round(this.$d.getTimezoneOffset() / 15)
    }, t.diff = function(t, n, e) {
        var i = S.p(n),
            r = D(t),
            s = 6e4 * (r.utcOffset() - this.utcOffset()),
            n = this - r,
            t = S.m(this, r),
            r = {};
        return r[m] = t / 12, r[l] = t, r[u] = t / 3, r[$] = (n - s) / 6048e5, r[d] = (n - s) / 864e5, r[c] = n / 36e5, r[f] = n / 6e4, r[h] = n / 1e3, t = r[i] || n, e ? t : S.a(t)
    }, t.daysInMonth = function() {
        return this.endOf(l).$D
    }, t.$locale = function() {
        return a[this.$L]
    }, t.locale = function(t, n) {
        if (!t) return this.$L;
        var e = this.clone(),
            n = g(t, n, !0);
        return n && (e.$L = n), e
    }, t.clone = function() {
        return S.w(this.$d, this)
    }, t.toDate = function() {
        return new Date(this.valueOf())
    }, t.toJSON = function() {
        return this.isValid() ? this.toISOString() : null
    }, t.toISOString = function() {
        return this.$d.toISOString()
    }, t.toString = function() {
        return this.$d.toUTCString()
    }, e);

    function e(t) {
        this.$L = this.$L || g(t.locale, null, !0), this.parse(t)
    }
    return D.prototype = p.prototype, D.extend = function(t, n) {
        return t(n, p, D), D
    }, D.locale = g, D.isDayjs = M, D.unix = function(t) {
        return D(1e3 * t)
    }, D.en = a[o], D.Ls = a, D
});