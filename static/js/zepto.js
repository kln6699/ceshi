﻿! function(t, e) {
    "function" == typeof define && define.amd ? define(function() {
        return e(t)
    }) : e(t)
}(this, function(O) {
    var u, a, c, r, s, n, i, o, l, f, h, p, e, d, m, v, g, y, x, b, t, E, j, T, w, S, C, N, P, A, D, L, E = (o = (i = []).concat, l = i.filter, f = i.slice, h = O.document, p = {}, e = {}, d = {
        "column-count": 1,
        columns: 1,
        "font-weight": 1,
        "line-height": 1,
        opacity: 1,
        "z-index": 1,
        zoom: 1
    }, m = /^\s*<(\w+|!)[^>]*>/, v = /^<(\w+)\s*\/?>(?:<\/\1>|)$/, g = /<(?!area|br|col|embed|hr|img|input|link|meta|param)(([\w:]+)[^>]*)\/>/gi, y = /^(?:body|html)$/i, x = /([A-Z])/g, b = ["val", "css", "html", "text", "data", "width", "height", "offset"], t = h.createElement("table"), E = h.createElement("tr"), j = {
        tr: h.createElement("tbody"),
        tbody: t,
        thead: t,
        tfoot: t,
        td: E,
        th: E,
        "*": h.createElement("div")
    }, T = /complete|loaded|interactive/, w = /^[\w-]*$/, C = (S = {}).toString, N = {}, P = h.createElement("div"), A = {
        tabindex: "tabIndex",
        readonly: "readOnly",
        for: "htmlFor",
        class: "className",
        maxlength: "maxLength",
        cellspacing: "cellSpacing",
        cellpadding: "cellPadding",
        rowspan: "rowSpan",
        colspan: "colSpan",
        usemap: "useMap",
        frameborder: "frameBorder",
        contenteditable: "contentEditable"
    }, D = Array.isArray || function(t) {
        return t instanceof Array
    }, N.matches = function(t, e) {
        if (!e || !t || 1 !== t.nodeType) return !1;
        var n = t.matches || t.webkitMatchesSelector || t.mozMatchesSelector || t.oMatchesSelector || t.matchesSelector;
        if (n) return n.call(t, e);
        var r = t.parentNode,
            n = !r;
        return n && (r = P).appendChild(t), e = ~N.qsa(r, e).indexOf(t), n && P.removeChild(t), e
    }, s = function(t) {
        return t.replace(/-+(.)?/g, function(t, e) {
            return e ? e.toUpperCase() : ""
        })
    }, n = function(n) {
        return l.call(n, function(t, e) {
            return n.indexOf(t) == e
        })
    }, N.fragment = function(t, e, n) {
        var r, i, o;
        return v.test(t) && (r = c(h.createElement(RegExp.$1))), r || (t.replace && (t = t.replace(g, "<$1></$2>")), e === u && (e = m.test(t) && RegExp.$1), e in j || (e = "*"), (o = j[e]).innerHTML = "" + t, r = c.each(f.call(o.childNodes), function() {
            o.removeChild(this)
        })), Z(n) && (i = c(r), c.each(n, function(t, e) {
            -1 < b.indexOf(t) ? i[t](e) : i.attr(t, e)
        })), r
    }, N.Z = function(t, e) {
        return new _(t, e)
    }, N.isZ = function(t) {
        return t instanceof N.Z
    }, N.init = function(t, e) {
        var n, r;
        if (!t) return N.Z();
        if ("string" == typeof t)
            if ("<" == (t = t.trim())[0] && m.test(t)) n = N.fragment(t, RegExp.$1, e), t = null;
            else {
                if (e !== u) return c(e).find(t);
                n = N.qsa(h, t)
            }
        else {
            if (F(t)) return c(h).ready(t);
            if (N.isZ(t)) return t;
            if (D(t)) r = t, n = l.call(r, function(t) {
                return null != t
            });
            else if (R(t)) n = [t], t = null;
            else if (m.test(t)) n = N.fragment(t.trim(), RegExp.$1, e), t = null;
            else {
                if (e !== u) return c(e).find(t);
                n = N.qsa(h, t)
            }
        }
        return N.Z(n, t)
    }, (c = function(t, e) {
        return N.init(t, e)
    }).extend = function(e) {
        var n, t = f.call(arguments, 1);
        return "boolean" == typeof e && (n = e, e = t.shift()), t.forEach(function(t) {
            ! function t(e, n, r) {
                for (a in n) r && (Z(n[a]) || D(n[a])) ? (Z(n[a]) && !Z(e[a]) && (e[a] = {}), D(n[a]) && !D(e[a]) && (e[a] = []), t(e[a], n[a], r)) : n[a] !== u && (e[a] = n[a])
            }(e, t, n)
        }), e
    }, N.qsa = function(t, e) {
        var n, r = "#" == e[0],
            i = !r && "." == e[0],
            o = r || i ? e.slice(1) : e,
            a = w.test(o);
        return t.getElementById && a && r ? (n = t.getElementById(o)) ? [n] : [] : 1 !== t.nodeType && 9 !== t.nodeType && 11 !== t.nodeType ? [] : f.call(a && !r && t.getElementsByClassName ? i ? t.getElementsByClassName(o) : t.getElementsByTagName(e) : t.querySelectorAll(e))
    }, c.contains = h.documentElement.contains ? function(t, e) {
        return t !== e && t.contains(e)
    } : function(t, e) {
        for (; e = e && e.parentNode;)
            if (e === t) return !0;
        return !1
    }, c.type = $, c.isFunction = F, c.isWindow = k, c.isArray = D, c.isPlainObject = Z, c.isEmptyObject = function(t) {
        for (var e in t) return !1;
        return !0
    }, c.isNumeric = function(t) {
        var e = Number(t),
            n = typeof t;
        return null != t && "boolean" != n && ("string" != n || t.length) && !isNaN(e) && isFinite(e) || !1
    }, c.inArray = function(t, e, n) {
        return i.indexOf.call(e, t, n)
    }, c.camelCase = s, c.trim = function(t) {
        return null == t ? "" : String.prototype.trim.call(t)
    }, c.uuid = 0, c.support = {}, c.expr = {}, c.noop = function() {}, c.map = function(t, e) {
        var n, r, i, o, a = [];
        if (z(t))
            for (r = 0; r < t.length; r++) null != (n = e(t[r], r)) && a.push(n);
        else
            for (i in t) null != (n = e(t[i], i)) && a.push(n);
        return 0 < (o = a).length ? c.fn.concat.apply([], o) : o
    }, c.each = function(t, e) {
        var n, r;
        if (z(t)) {
            for (n = 0; n < t.length; n++)
                if (!1 === e.call(t[n], n, t[n])) return t
        } else
            for (r in t)
                if (!1 === e.call(t[r], r, t[r])) return t;
        return t
    }, c.grep = function(t, e) {
        return l.call(t, e)
    }, O.JSON && (c.parseJSON = JSON.parse), c.each("Boolean Number String Function Array Date RegExp Object Error".split(" "), function(t, e) {
        S["[object " + e + "]"] = e.toLowerCase()
    }), c.fn = {
        constructor: N.Z,
        length: 0,
        forEach: i.forEach,
        reduce: i.reduce,
        push: i.push,
        sort: i.sort,
        splice: i.splice,
        indexOf: i.indexOf,
        concat: function() {
            for (var t, e = [], n = 0; n < arguments.length; n++) t = arguments[n], e[n] = N.isZ(t) ? t.toArray() : t;
            return o.apply(N.isZ(this) ? this.toArray() : this, e)
        },
        map: function(n) {
            return c(c.map(this, function(t, e) {
                return n.call(t, e, t)
            }))
        },
        slice: function() {
            return c(f.apply(this, arguments))
        },
        ready: function(t) {
            return T.test(h.readyState) && h.body ? t(c) : h.addEventListener("DOMContentLoaded", function() {
                t(c)
            }, !1), this
        },
        get: function(t) {
            return t === u ? f.call(this) : this[0 <= t ? t : t + this.length]
        },
        toArray: function() {
            return this.get()
        },
        size: function() {
            return this.length
        },
        remove: function() {
            return this.each(function() {
                null != this.parentNode && this.parentNode.removeChild(this)
            })
        },
        each: function(n) {
            return i.every.call(this, function(t, e) {
                return !1 !== n.call(t, e, t)
            }), this
        },
        filter: function(e) {
            return F(e) ? this.not(this.not(e)) : c(l.call(this, function(t) {
                return N.matches(t, e)
            }))
        },
        add: function(t, e) {
            return c(n(this.concat(c(t, e))))
        },
        is: function(t) {
            return 0 < this.length && N.matches(this[0], t)
        },
        not: function(e) {
            var n, r = [];
            return F(e) && e.call !== u ? this.each(function(t) {
                e.call(this, t) || r.push(this)
            }) : (n = "string" == typeof e ? this.filter(e) : z(e) && F(e.item) ? f.call(e) : c(e), this.forEach(function(t) {
                n.indexOf(t) < 0 && r.push(t)
            })), c(r)
        },
        has: function(t) {
            return this.filter(function() {
                return R(t) ? c.contains(this, t) : c(this).find(t).size()
            })
        },
        eq: function(t) {
            return -1 === t ? this.slice(t) : this.slice(t, +t + 1)
        },
        first: function() {
            var t = this[0];
            return t && !R(t) ? t : c(t)
        },
        last: function() {
            var t = this[this.length - 1];
            return t && !R(t) ? t : c(t)
        },
        find: function(t) {
            var n = this,
                e = t ? "object" == typeof t ? c(t).filter(function() {
                    var e = this;
                    return i.some.call(n, function(t) {
                        return c.contains(t, e)
                    })
                }) : 1 == this.length ? c(N.qsa(this[0], t)) : this.map(function() {
                    return N.qsa(this, t)
                }) : c();
            return e
        },
        closest: function(n, r) {
            var i = [],
                o = "object" == typeof n && c(n);
            return this.each(function(t, e) {
                for (; e && !(o ? 0 <= o.indexOf(e) : N.matches(e, n));) e = e !== r && !M(e) && e.parentNode;
                e && i.indexOf(e) < 0 && i.push(e)
            }), c(i)
        },
        parents: function(t) {
            for (var e = [], n = this; 0 < n.length;) n = c.map(n, function(t) {
                if ((t = t.parentNode) && !M(t) && e.indexOf(t) < 0) return e.push(t), t
            });
            return B(e, t)
        },
        parent: function(t) {
            return B(n(this.pluck("parentNode")), t)
        },
        children: function(t) {
            return B(this.map(function() {
                return V(this)
            }), t)
        },
        contents: function() {
            return this.map(function() {
                return this.contentDocument || f.call(this.childNodes)
            })
        },
        siblings: function(t) {
            return B(this.map(function(t, e) {
                return l.call(V(e.parentNode), function(t) {
                    return t !== e
                })
            }), t)
        },
        empty: function() {
            return this.each(function() {
                this.innerHTML = ""
            })
        },
        pluck: function(e) {
            return c.map(this, function(t) {
                return t[e]
            })
        },
        show: function() {
            return this.each(function() {
                var t, e, n;
                "none" == this.style.display && (this.style.display = ""), "none" == getComputedStyle(this, "").getPropertyValue("display") && (this.style.display = (t = this.nodeName, p[t] || (e = h.createElement(t), h.body.appendChild(e), n = getComputedStyle(e, "").getPropertyValue("display"), e.parentNode.removeChild(e), "none" == n && (n = "block"), p[t] = n), p[t]))
            })
        },
        replaceWith: function(t) {
            return this.before(t).remove()
        },
        wrap: function(e) {
            var n, r, i = F(e);
            return this[0] && !i && (n = c(e).get(0), r = n.parentNode || 1 < this.length), this.each(function(t) {
                c(this).wrapAll(i ? e.call(this, t) : r ? n.cloneNode(!0) : n)
            })
        },
        wrapAll: function(t) {
            if (this[0]) {
                var e;
                for (c(this[0]).before(t = c(t));
                    (e = t.children()).length;) t = e.first();
                c(t).append(this)
            }
            return this
        },
        wrapInner: function(r) {
            var i = F(r);
            return this.each(function(t) {
                var e = c(this),
                    n = e.contents(),
                    t = i ? r.call(this, t) : r;
                n.length ? n.wrapAll(t) : e.append(t)
            })
        },
        unwrap: function() {
            return this.parent().each(function() {
                c(this).replaceWith(c(this).children())
            }), this
        },
        clone: function() {
            return this.map(function() {
                return this.cloneNode(!0)
            })
        },
        hide: function() {
            return this.css("display", "none")
        },
        toggle: function(e) {
            return this.each(function() {
                var t = c(this);
                (e === u ? "none" == t.css("display") : e) ? t.show(): t.hide()
            })
        },
        prev: function(t) {
            return c(this.pluck("previousElementSibling")).filter(t || "*")
        },
        next: function(t) {
            return c(this.pluck("nextElementSibling")).filter(t || "*")
        },
        html: function(n) {
            return 0 in arguments ? this.each(function(t) {
                var e = this.innerHTML;
                c(this).empty().append(U(this, n, t, e))
            }) : 0 in this ? this[0].innerHTML : null
        },
        text: function(e) {
            return 0 in arguments ? this.each(function(t) {
                t = U(this, e, t, this.textContent);
                this.textContent = null == t ? "" : "" + t
            }) : 0 in this ? this.pluck("textContent").join("") : null
        },
        attr: function(e, n) {
            var t;
            return "string" != typeof e || 1 in arguments ? this.each(function(t) {
                if (1 === this.nodeType)
                    if (R(e))
                        for (a in e) X(this, a, e[a]);
                    else X(this, e, U(this, n, t, this.getAttribute(e)))
            }) : 0 in this && 1 == this[0].nodeType && null != (t = this[0].getAttribute(e)) ? t : u
        },
        removeAttr: function(t) {
            return this.each(function() {
                1 === this.nodeType && t.split(" ").forEach(function(t) {
                    X(this, t)
                }, this)
            })
        },
        prop: function(e, n) {
            return e = A[e] || e, 1 in arguments ? this.each(function(t) {
                this[e] = U(this, n, t, this[e])
            }) : this[0] && this[0][e]
        },
        removeProp: function(t) {
            return t = A[t] || t, this.each(function() {
                delete this[t]
            })
        },
        data: function(t, e) {
            t = "data-" + t.replace(x, "-$1").toLowerCase(), t = 1 in arguments ? this.attr(t, e) : this.attr(t);
            return null !== t ? W(t) : u
        },
        val: function(e) {
            return 0 in arguments ? (null == e && (e = ""), this.each(function(t) {
                this.value = U(this, e, t, this.value)
            })) : this[0] && (this[0].multiple ? c(this[0]).find("option").filter(function() {
                return this.selected
            }).pluck("value") : this[0].value)
        },
        offset: function(r) {
            if (r) return this.each(function(t) {
                var e = c(this),
                    n = U(this, r, t, e.offset()),
                    t = e.offsetParent().offset(),
                    t = {
                        top: n.top - t.top,
                        left: n.left - t.left
                    };
                "static" == e.css("position") && (t.position = "relative"), e.css(t)
            });
            if (!this.length) return null;
            if (h.documentElement !== this[0] && !c.contains(h.documentElement, this[0])) return {
                top: 0,
                left: 0
            };
            var t = this[0].getBoundingClientRect();
            return {
                left: t.left + O.pageXOffset,
                top: t.top + O.pageYOffset,
                width: Math.round(t.width),
                height: Math.round(t.height)
            }
        },
        css: function(t, e) {
            if (arguments.length < 2) {
                var n = this[0];
                if ("string" == typeof t) {
                    if (!n) return;
                    return n.style[s(t)] || getComputedStyle(n, "").getPropertyValue(t)
                }
                if (D(t)) {
                    if (!n) return;
                    var r = {},
                        i = getComputedStyle(n, "");
                    return c.each(t, function(t, e) {
                        r[e] = n.style[s(e)] || i.getPropertyValue(e)
                    }), r
                }
            }
            var o = "";
            if ("string" == $(t)) e || 0 === e ? o = q(t) + ":" + I(t, e) : this.each(function() {
                this.style.removeProperty(q(t))
            });
            else
                for (a in t) t[a] || 0 === t[a] ? o += q(a) + ":" + I(a, t[a]) + ";" : this.each(function() {
                    this.style.removeProperty(q(a))
                });
            return this.each(function() {
                this.style.cssText += ";" + o
            })
        },
        index: function(t) {
            return t ? this.indexOf(c(t)[0]) : this.parent().children().indexOf(this[0])
        },
        hasClass: function(t) {
            return !!t && i.some.call(this, function(t) {
                return this.test(J(t))
            }, H(t))
        },
        addClass: function(n) {
            return n ? this.each(function(t) {
                var e;
                "className" in this && (r = [], e = J(this), U(this, n, t, e).split(/\s+/g).forEach(function(t) {
                    c(this).hasClass(t) || r.push(t)
                }, this), r.length && J(this, e + (e ? " " : "") + r.join(" ")))
            }) : this
        },
        removeClass: function(e) {
            return this.each(function(t) {
                if ("className" in this) {
                    if (e === u) return J(this, "");
                    r = J(this), U(this, e, t, r).split(/\s+/g).forEach(function(t) {
                        r = r.replace(H(t), " ")
                    }), J(this, r.trim())
                }
            })
        },
        toggleClass: function(n, r) {
            return n ? this.each(function(t) {
                var e = c(this);
                U(this, n, t, J(this)).split(/\s+/g).forEach(function(t) {
                    (r === u ? !e.hasClass(t) : r) ? e.addClass(t): e.removeClass(t)
                })
            }) : this
        },
        scrollTop: function(t) {
            if (this.length) {
                var e = "scrollTop" in this[0];
                return t === u ? e ? this[0].scrollTop : this[0].pageYOffset : this.each(e ? function() {
                    this.scrollTop = t
                } : function() {
                    this.scrollTo(this.scrollX, t)
                })
            }
        },
        scrollLeft: function(t) {
            if (this.length) {
                var e = "scrollLeft" in this[0];
                return t === u ? e ? this[0].scrollLeft : this[0].pageXOffset : this.each(e ? function() {
                    this.scrollLeft = t
                } : function() {
                    this.scrollTo(t, this.scrollY)
                })
            }
        },
        position: function() {
            if (this.length) {
                var t = this[0],
                    e = this.offsetParent(),
                    n = this.offset(),
                    r = y.test(e[0].nodeName) ? {
                        top: 0,
                        left: 0
                    } : e.offset();
                return n.top -= parseFloat(c(t).css("margin-top")) || 0, n.left -= parseFloat(c(t).css("margin-left")) || 0, r.top += parseFloat(c(e[0]).css("border-top-width")) || 0, r.left += parseFloat(c(e[0]).css("border-left-width")) || 0, {
                    top: n.top - r.top,
                    left: n.left - r.left
                }
            }
        },
        offsetParent: function() {
            return this.map(function() {
                for (var t = this.offsetParent || h.body; t && !y.test(t.nodeName) && "static" == c(t).css("position");) t = t.offsetParent;
                return t
            })
        }
    }, c.fn.detach = c.fn.remove, ["width", "height"].forEach(function(r) {
        var i = r.replace(/./, function(t) {
            return t[0].toUpperCase()
        });
        c.fn[r] = function(e) {
            var t, n = this[0];
            return e === u ? k(n) ? n["inner" + i] : M(n) ? n.documentElement["scroll" + i] : (t = this.offset()) && t[r] : this.each(function(t) {
                (n = c(this)).css(r, U(this, e, t, n[r]()))
            })
        }
    }), ["after", "prepend", "before", "append"].forEach(function(e, a) {
        var s = a % 2;
        c.fn[e] = function() {
            var n, r, i = c.map(arguments, function(t) {
                    var e = [];
                    return "array" == (n = $(t)) ? (t.forEach(function(t) {
                        return t.nodeType !== u ? e.push(t) : c.zepto.isZ(t) ? e = e.concat(t.get()) : void(e = e.concat(N.fragment(t)))
                    }), e) : "object" == n || null == t ? t : N.fragment(t)
                }),
                o = 1 < this.length;
            return i.length < 1 ? this : this.each(function(t, e) {
                r = s ? e : e.parentNode, e = 0 == a ? e.nextSibling : 1 == a ? e.firstChild : 2 == a ? e : null;
                var n = c.contains(h.documentElement, r);
                i.forEach(function(t) {
                    if (o) t = t.cloneNode(!0);
                    else if (!r) return c(t).remove();
                    r.insertBefore(t, e), n && function t(e, n) {
                        n(e);
                        for (var r = 0, i = e.childNodes.length; r < i; r++) t(e.childNodes[r], n)
                    }(t, function(t) {
                        var e;
                        null == t.nodeName || "SCRIPT" !== t.nodeName.toUpperCase() || t.type && "text/javascript" !== t.type || t.src || (e = t.ownerDocument ? t.ownerDocument.defaultView : O).eval.call(e, t.innerHTML)
                    })
                })
            })
        }, c.fn[s ? e + "To" : "insert" + (a ? "Before" : "After")] = function(t) {
            return c(t)[e](this), this
        }
    }), N.Z.prototype = _.prototype = c.fn, N.uniq = n, N.deserializeValue = W, c.zepto = N, c);

    function $(t) {
        return null == t ? String(t) : S[C.call(t)] || "object"
    }

    function F(t) {
        return "function" == $(t)
    }

    function k(t) {
        return null != t && t == t.window
    }

    function M(t) {
        return null != t && t.nodeType == t.DOCUMENT_NODE
    }

    function R(t) {
        return "object" == $(t)
    }

    function Z(t) {
        return R(t) && !k(t) && Object.getPrototypeOf(t) == Object.prototype
    }

    function z(t) {
        var e = !!t && "length" in t && t.length,
            n = c.type(t);
        return "function" != n && !k(t) && ("array" == n || 0 === e || "number" == typeof e && 0 < e && e - 1 in t)
    }

    function q(t) {
        return t.replace(/::/g, "/").replace(/([A-Z]+)([A-Z][a-z])/g, "$1_$2").replace(/([a-z\d])([A-Z])/g, "$1_$2").replace(/_/g, "-").toLowerCase()
    }

    function H(t) {
        return t in e ? e[t] : e[t] = new RegExp("(^|\\s)" + t + "(\\s|$)")
    }

    function I(t, e) {
        return "number" != typeof e || d[q(t)] ? e : e + "px"
    }

    function V(t) {
        return "children" in t ? f.call(t.children) : c.map(t.childNodes, function(t) {
            if (1 == t.nodeType) return t
        })
    }

    function _(t, e) {
        for (var n = t ? t.length : 0, r = 0; r < n; r++) this[r] = t[r];
        this.length = n, this.selector = e || ""
    }

    function B(t, e) {
        return null == e ? c(t) : c(t).filter(e)
    }

    function U(t, e, n, r) {
        return F(e) ? e.call(t, n, r) : e
    }

    function X(t, e, n) {
        null == n ? t.removeAttribute(e) : t.setAttribute(e, n)
    }

    function J(t, e) {
        var n = t.className || "",
            r = n && n.baseVal !== u;
        if (e === u) return r ? n.baseVal : n;
        r ? n.baseVal = e : t.className = e
    }

    function W(e) {
        try {
            return e ? "true" == e || "false" != e && ("null" == e ? null : +e + "" == e ? +e : /^[\[\{]/.test(e) ? c.parseJSON(e) : e) : e
        } catch (t) {
            return e
        }
    }
    return O.Zepto = E, void 0 === O.$ && (O.$ = E),
        function(l) {
            function c(t) {
                return "string" == typeof t
            }
            var f, e = 1,
                h = Array.prototype.slice,
                p = l.isFunction,
                d = {},
                o = {},
                n = "onfocusin" in O,
                r = {
                    focus: "focusin",
                    blur: "focusout"
                },
                m = {
                    mouseenter: "mouseover",
                    mouseleave: "mouseout"
                };

            function v(t) {
                return t._zid || (t._zid = e++)
            }

            function a(t, e, n, r) {
                var i, o;
                return (e = g(e)).ns && (o = e.ns, i = new RegExp("(?:^| )" + o.replace(" ", " .* ?") + "(?: |$)")), (d[v(t)] || []).filter(function(t) {
                    return t && (!e.e || t.e == e.e) && (!e.ns || i.test(t.ns)) && (!n || v(t.fn) === v(n)) && (!r || t.sel == r)
                })
            }

            function g(t) {
                t = ("" + t).split(".");
                return {
                    e: t[0],
                    ns: t.slice(1).sort().join(" ")
                }
            }

            function y(t, e) {
                return t.del && !n && t.e in r || !!e
            }

            function x(t) {
                return m[t] || n && r[t] || t
            }

            function b(r, t, i, o, a, s, u) {
                var e = v(r),
                    c = d[e] || (d[e] = []);
                t.split(/\s/).forEach(function(t) {
                    if ("ready" == t) return l(document).ready(i);
                    var e = g(t);
                    e.fn = i, e.sel = a, e.e in m && (i = function(t) {
                        t = t.relatedTarget;
                        if (!t || t !== this && !l.contains(this, t)) return e.fn.apply(this, arguments)
                    });
                    var n = (e.del = s) || i;
                    e.proxy = function(t) {
                        if (!(t = T(t)).isImmediatePropagationStopped()) {
                            t.data = o;
                            var e = n.apply(r, t._args == f ? [t] : [t].concat(t._args));
                            return !1 === e && (t.preventDefault(), t.stopPropagation()), e
                        }
                    }, e.i = c.length, c.push(e), "addEventListener" in r && r.addEventListener(x(e.e), e.proxy, y(e, u))
                })
            }

            function E(e, t, n, r, i) {
                var o = v(e);
                (t || "").split(/\s/).forEach(function(t) {
                    a(e, t, n, r).forEach(function(t) {
                        delete d[o][t.i], "removeEventListener" in e && e.removeEventListener(x(t.e), t.proxy, y(t, i))
                    })
                })
            }
            o.click = o.mousedown = o.mouseup = o.mousemove = "MouseEvents", l.event = {
                add: b,
                remove: E
            }, l.proxy = function(t, e) {
                var n = 2 in arguments && h.call(arguments, 2);
                if (p(t)) {
                    function r() {
                        return t.apply(e, n ? n.concat(h.call(arguments)) : arguments)
                    }
                    return r._zid = v(t), r
                }
                if (c(e)) return n ? (n.unshift(t[e], t), l.proxy.apply(null, n)) : l.proxy(t[e], t);
                throw new TypeError("expected function")
            }, l.fn.bind = function(t, e, n) {
                return this.on(t, e, n)
            }, l.fn.unbind = function(t, e) {
                return this.off(t, e)
            }, l.fn.one = function(t, e, n, r) {
                return this.on(t, e, n, r, 1)
            };
            var s = function() {
                    return !0
                },
                j = function() {
                    return !1
                },
                i = /^([A-Z]|returnValue$|layer[XY]$|webkitMovement[XY]$)/,
                t = {
                    preventDefault: "isDefaultPrevented",
                    stopImmediatePropagation: "isImmediatePropagationStopped",
                    stopPropagation: "isPropagationStopped"
                };

            function T(r, i) {
                return !i && r.isDefaultPrevented || (i = i || r, l.each(t, function(t, e) {
                    var n = i[t];
                    r[t] = function() {
                        return this[e] = s, n && n.apply(i, arguments)
                    }, r[e] = j
                }), r.timeStamp || (r.timeStamp = Date.now()), (i.defaultPrevented !== f ? i.defaultPrevented : "returnValue" in i ? !1 === i.returnValue : i.getPreventDefault && i.getPreventDefault()) && (r.isDefaultPrevented = s)), r
            }

            function w(t) {
                var e, n = {
                    originalEvent: t
                };
                for (e in t) i.test(e) || t[e] === f || (n[e] = t[e]);
                return T(n, t)
            }
            l.fn.delegate = function(t, e, n) {
                return this.on(e, t, n)
            }, l.fn.undelegate = function(t, e, n) {
                return this.off(e, t, n)
            }, l.fn.live = function(t, e) {
                return l(document.body).delegate(this.selector, t, e), this
            }, l.fn.die = function(t, e) {
                return l(document.body).undelegate(this.selector, t, e), this
            }, l.fn.on = function(e, r, i, o, a) {
                var s, u, n = this;
                return e && !c(e) ? (l.each(e, function(t, e) {
                    n.on(t, r, i, e, a)
                }), n) : (c(r) || p(o) || !1 === o || (o = i, i = r, r = f), o !== f && !1 !== i || (o = i, i = f), !1 === o && (o = j), n.each(function(t, n) {
                    a && (s = function(t) {
                        return E(n, t.type, o), o.apply(this, arguments)
                    }), r && (u = function(t) {
                        var e = l(t.target).closest(r, n).get(0);
                        if (e && e !== n) return t = l.extend(w(t), {
                            currentTarget: e,
                            liveFired: n
                        }), (s || o).apply(e, [t].concat(h.call(arguments, 1)))
                    }), b(n, e, o, i, r, u || s)
                }))
            }, l.fn.off = function(t, n, e) {
                var r = this;
                return t && !c(t) ? (l.each(t, function(t, e) {
                    r.off(t, n, e)
                }), r) : (c(n) || p(e) || !1 === e || (e = n, n = f), !1 === e && (e = j), r.each(function() {
                    E(this, t, e, n)
                }))
            }, l.fn.trigger = function(t, e) {
                return (t = c(t) || l.isPlainObject(t) ? l.Event(t) : T(t))._args = e, this.each(function() {
                    t.type in r && "function" == typeof this[t.type] ? this[t.type]() : "dispatchEvent" in this ? this.dispatchEvent(t) : l(this).triggerHandler(t, e)
                })
            }, l.fn.triggerHandler = function(n, r) {
                var i, o;
                return this.each(function(t, e) {
                    (i = w(c(n) ? l.Event(n) : n))._args = r, i.target = e, l.each(a(e, n.type || n), function(t, e) {
                        if (o = e.proxy(i), i.isImmediatePropagationStopped()) return !1
                    })
                }), o
            }, "focusin focusout focus blur load resize scroll unload click dblclick mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave change select keydown keypress keyup error".split(" ").forEach(function(e) {
                l.fn[e] = function(t) {
                    return 0 in arguments ? this.bind(e, t) : this.trigger(e)
                }
            }), l.Event = function(t, e) {
                c(t) || (t = (e = t).type);
                var n = document.createEvent(o[t] || "Events"),
                    r = !0;
                if (e)
                    for (var i in e) "bubbles" == i ? r = !!e[i] : n[i] = e[i];
                return n.initEvent(t, r, !0), T(n)
            }
        }(E),
        function(h) {
            var p, d, l = +new Date,
                m = O.document,
                s = /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
                v = /^(?:text|application)\/javascript/i,
                g = /^(?:text|application)\/xml/i,
                y = "application/json",
                x = "text/html",
                b = /^\s*$/,
                E = m.createElement("a");

            function j(t, e, n, r) {
                if (t.global) return e = e || m, n = n, r = r, n = h.Event(n), h(e).trigger(n, r), !n.isDefaultPrevented()
            }

            function T(t, e) {
                var n = e.context;
                if (!1 === e.beforeSend.call(n, t, e) || !1 === j(e, n, "ajaxBeforeSend", [t, e])) return !1;
                j(e, n, "ajaxSend", [t, e])
            }

            function w(t, e, n, r) {
                var i = n.context,
                    o = "success";
                n.success.call(i, t, o, e), r && r.resolveWith(i, [t, o, e]), j(n, i, "ajaxSuccess", [e, n, t]), a(o, e, n)
            }

            function S(t, e, n, r, i) {
                var o = r.context;
                r.error.call(o, n, e, t), i && i.rejectWith(o, [n, e, t]), j(r, o, "ajaxError", [n, r, t || e]), a(e, n, r)
            }

            function a(t, e, n) {
                var r = n.context;
                n.complete.call(r, e, t), j(n, r, "ajaxComplete", [e, n]), (n = n).global && !--h.active && j(n, null, "ajaxStop")
            }

            function C() {}

            function N(t, e) {
                return "" == e ? t : (t + "&" + e).replace(/[&?]{1,2}/, "?")
            }

            function u(t, e, n, r) {
                return h.isFunction(e) && (r = n, n = e, e = void 0), h.isFunction(n) || (r = n, n = void 0), {
                    url: t,
                    data: e,
                    success: n,
                    dataType: r
                }
            }
            E.href = O.location.href, h.active = 0, h.ajaxJSONP = function(n, r) {
                if (!("type" in n)) return h.ajax(n);

                function t(t) {
                    h(s).triggerHandler("error", t || "abort")
                }
                var i, o, e = n.jsonpCallback,
                    a = (h.isFunction(e) ? e() : e) || "Zepto" + l++,
                    s = m.createElement("script"),
                    u = O[a],
                    c = {
                        abort: t
                    };
                return r && r.promise(c), h(s).on("load error", function(t, e) {
                    clearTimeout(o), h(s).off().remove(), "error" != t.type && i ? w(i[0], c, n, r) : S(null, e || "error", c, n, r), O[a] = u, i && h.isFunction(u) && u(i[0]), u = i = void 0
                }), !1 === T(c, n) ? t("abort") : (O[a] = function() {
                    i = arguments
                }, s.src = n.url.replace(/\?(.+)=\?/, "?$1=" + a), m.head.appendChild(s), 0 < n.timeout && (o = setTimeout(function() {
                    t("timeout")
                }, n.timeout))), c
            }, h.ajaxSettings = {
                type: "GET",
                beforeSend: C,
                success: C,
                error: C,
                complete: C,
                context: null,
                global: !0,
                xhr: function() {
                    return new O.XMLHttpRequest
                },
                accepts: {
                    script: "text/javascript, application/javascript, application/x-javascript",
                    json: y,
                    xml: "application/xml, text/xml",
                    html: x,
                    text: "text/plain"
                },
                crossDomain: !1,
                timeout: 0,
                processData: !0,
                cache: !0,
                dataFilter: C
            }, h.ajax = function(t) {
                var e, r = h.extend({}, t || {}),
                    i = h.Deferred && h.Deferred();
                for (p in h.ajaxSettings) void 0 === r[p] && (r[p] = h.ajaxSettings[p]);
                (e = r).global && 0 == h.active++ && j(e, null, "ajaxStart"), r.crossDomain || ((n = m.createElement("a")).href = r.url, n.href = n.href, r.crossDomain = E.protocol + "//" + E.host != n.protocol + "//" + n.host), r.url || (r.url = O.location.toString()), -1 < (n = r.url.indexOf("#")) && (r.url = r.url.slice(0, n)), (n = r).processData && n.data && "string" != h.type(n.data) && (n.data = h.param(n.data, n.traditional)), !n.data || n.type && "GET" != n.type.toUpperCase() && "jsonp" != n.dataType || (n.url = N(n.url, n.data), n.data = void 0);
                var o = r.dataType,
                    n = /\?.+=\?/.test(r.url);
                if (n && (o = "jsonp"), !1 !== r.cache && (t && !0 === t.cache || "script" != o && "jsonp" != o) || (r.url = N(r.url, "_=" + Date.now())), "jsonp" == o) return n || (r.url = N(r.url, r.jsonp ? r.jsonp + "=?" : !1 === r.jsonp ? "" : "callback=?")), h.ajaxJSONP(r, i);

                function a(t, e) {
                    u[t.toLowerCase()] = [t, e]
                }
                var s, n = r.accepts[o],
                    u = {},
                    c = /^([\w-]+:)\/\//.test(r.url) ? RegExp.$1 : O.location.protocol,
                    l = r.xhr(),
                    f = l.setRequestHeader;
                if (i && i.promise(l), r.crossDomain || a("X-Requested-With", "XMLHttpRequest"), a("Accept", n || "*/*"), (n = r.mimeType || n) && (-1 < n.indexOf(",") && (n = n.split(",", 2)[0]), l.overrideMimeType && l.overrideMimeType(n)), (r.contentType || !1 !== r.contentType && r.data && "GET" != r.type.toUpperCase()) && a("Content-Type", r.contentType || "application/x-www-form-urlencoded"), r.headers)
                    for (d in r.headers) a(d, r.headers[d]);
                if (l.setRequestHeader = a, !(l.onreadystatechange = function() {
                        if (4 == l.readyState) {
                            l.onreadystatechange = C, clearTimeout(s);
                            var t, e = !1;
                            if (200 <= l.status && l.status < 300 || 304 == l.status || 0 == l.status && "file:" == c) {
                                if (o = o || ((n = (n = r.mimeType || l.getResponseHeader("content-type")) && n.split(";", 2)[0]) && (n == x ? "html" : n == y ? "json" : v.test(n) ? "script" : g.test(n) && "xml") || "text"), "arraybuffer" == l.responseType || "blob" == l.responseType) t = l.response;
                                else {
                                    t = l.responseText;
                                    try {
                                        t = function(t, e, n) {
                                            if (n.dataFilter == C) return t;
                                            var r = n.context;
                                            return n.dataFilter.call(r, t, e)
                                        }(t, o, r), "script" == o ? (0, eval)(t) : "xml" == o ? t = l.responseXML : "json" == o && (t = b.test(t) ? null : h.parseJSON(t))
                                    } catch (t) {
                                        e = t
                                    }
                                    if (e) return S(e, "parsererror", l, r, i)
                                }
                                w(t, l, r, i)
                            } else S(l.statusText || null, l.status ? "error" : "abort", l, r, i)
                        }
                        var n
                    }) === T(l, r)) return l.abort(), S(null, "abort", l, r, i), l;
                n = !("async" in r) || r.async;
                if (l.open(r.type, r.url, n, r.username, r.password), r.xhrFields)
                    for (d in r.xhrFields) l[d] = r.xhrFields[d];
                for (d in u) f.apply(l, u[d]);
                return 0 < r.timeout && (s = setTimeout(function() {
                    l.onreadystatechange = C, l.abort(), S(null, "timeout", l, r, i)
                }, r.timeout)), l.send(r.data ? r.data : null), l
            }, h.get = function() {
                return h.ajax(u.apply(null, arguments))
            }, h.post = function() {
                var t = u.apply(null, arguments);
                return t.type = "POST", h.ajax(t)
            }, h.getJSON = function() {
                var t = u.apply(null, arguments);
                return t.dataType = "json", h.ajax(t)
            }, h.fn.load = function(t, e, n) {
                if (!this.length) return this;
                var r, i = this,
                    o = t.split(/\s/),
                    n = u(t, e, n),
                    a = n.success;
                return 1 < o.length && (n.url = o[0], r = o[1]), n.success = function(t) {
                    i.html(r ? h("<div>").html(t.replace(s, "")).find(r) : t), a && a.apply(i, arguments)
                }, h.ajax(n), this
            };
            var r = encodeURIComponent;
            h.param = function(t, e) {
                var n = [];
                return n.add = function(t, e) {
                        h.isFunction(e) && (e = e()), null == e && (e = ""), this.push(r(t) + "=" + r(e))
                    },
                    function n(r, t, i, o) {
                        var a, s = h.isArray(t),
                            u = h.isPlainObject(t);
                        h.each(t, function(t, e) {
                            a = h.type(e), o && (t = i ? o : o + "[" + (u || "object" == a || "array" == a ? t : "") + "]"), !o && s ? r.add(e.name, e.value) : "array" == a || !i && "object" == a ? n(r, e, i, t) : r.add(t, e)
                        })
                    }(n, t, e), n.join("&").replace(/%20/g, "+")
            }
        }(E), (L = E).fn.serializeArray = function() {
            var n, r, e = [],
                i = function(t) {
                    if (t.forEach) return t.forEach(i);
                    e.push({
                        name: n,
                        value: t
                    })
                };
            return this[0] && L.each(this[0].elements, function(t, e) {
                r = e.type, (n = e.name) && "fieldset" != e.nodeName.toLowerCase() && !e.disabled && "submit" != r && "reset" != r && "button" != r && "file" != r && ("radio" != r && "checkbox" != r || e.checked) && i(L(e).val())
            }), e
        }, L.fn.serialize = function() {
            var e = [];
            return this.serializeArray().forEach(function(t) {
                e.push(encodeURIComponent(t.name) + "=" + encodeURIComponent(t.value))
            }), e.join("&")
        }, L.fn.submit = function(t) {
            return 0 in arguments ? this.bind("submit", t) : this.length && (t = L.Event("submit"), this.eq(0).trigger(t), t.isDefaultPrevented() || this.get(0).submit()), this
        },
        function() {
            try {
                getComputedStyle(void 0)
            } catch (t) {
                var n = getComputedStyle;
                O.getComputedStyle = function(t, e) {
                    try {
                        return n(t, e)
                    } catch (t) {
                        return null
                    }
                }
            }
        }(), E
});