﻿/*"use strict";
! function(e, o, t, n) {
    e[n] = e[n] || [], e[n].push({
        "gtm.start": (new Date).getTime(),
        event: "gtm.js"
    });
    n = o.getElementsByTagName(t)[0], t = o.createElement(t);
    t.async = !0, t.src = "https://www.googletagmanager.com/gtm.js?id=GTM-KX886VF", n.parentNode.insertBefore(t, n)
}(window, document, "script", "dataLayer");
var qs = new URLSearchParams(window.location.search),
    coAff = Cookies.get("affid"),
    qsAff = qs.get("affid"),
    qsCh = qs.get("ch"),
    affId = qsAff || window.channelConfig && window.channelConfig.aff_id;
(qsAff || qsCh) && coAff !== affId && Cookies.set("affid", affId, {
    expires: 30
});
var user, loginInfo = window.localStorage.getItem("login"),
    crossDomainToken = Cookies.get("".concat(window.project, "-token"));

function checkDownload() {
    var e = new URLSearchParams(window.location.search).get("dlu") || "";
    e && window.setTimeout(function() {
        location.href = e
    }, 1e3)
}!loginInfo || crossDomainToken || (user = JSON.parse(loginInfo)) && user.token && Cookies.set("".concat(window.project, "-token"), user.token, {
    domain: ".".concat(getRootDomain())
}), crossDomainToken && !loginInfo && window.callApi("getUserStatus").then(function(e) {
    0 === e.code && (e = e.data, window.localStorage.setItem("login", JSON.stringify(e)), e && e.token && (document.getElementById("guest-navbar").style.display = "none", document.getElementById("login-navbar").style.display = "flex"))
}).catch(function(e) {
    console.log("ERROR: ", e)
});
var sourceUtm, overwriteCh, channel, qsMedium, utm, query = new URLSearchParams(window.location.search);

function doubleRedirect() {
    $(".double-redirect").click(function() {
        var e = $(this).data("href");
        window.location.href = e
    })
}

function addWechatSupport() {
    /MicroMessenger/gi.test(window.navigator.userAgent) && ($("body").addClass("wechat"), $("#intercom-contact").hide(), $("#chat-toast").hide())
}

function getRootDomain() {
    return window.location.host.split(".").slice(-2).join(".")
}

function uuidv4() {
    return ([1e7] + 1e3 + 4e3 + 8e3 + 1e11).replace(/[018]/g, function(e) {
        return (e ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> e / 4).toString(16)
    })
}

function autoToast() {
    window.callApi("getChatToast", {
        pathname: window.location.pathname
    }).then(function(e) {
        if (0 === e.code && e.data) {
            var e = e.data,
                o = e.toast,
                t = e.modal;
            if (o) {
                var n = o.delay ? o.delay : 1,
                    i = "toast-".concat(o.id),
                    a = Cookies.get(i),
                    c = o.interval ? o.interval / 60 / 24 : 1;
                if (a) return;
                Cookies.set(i, 1, {
                    expires: c
                }), setTimeout(function() {
                    var e = document.createElement("div");
                    e.classList = "chat-toast show", e.innerHTML = '\n            <div class="content">'.concat(o.content, '</div>\n            <div class="chat-btn-group">\n              <div class="chat-intercom btn">').concat(o.confirm && o.confirm.btn, '</div>\n              <div class="chat-close btn">').concat(o.cancel && o.cancel.btn, "</div>\n            </div>\n            "), document.querySelector("body").appendChild(e), $(".chat-intercom").click(function() {
                        $(".chat-toast").remove(), window.Intercom && window.Intercom("showNewMessage")
                    }), $(".chat-close").click(function() {
                        $(".chat-toast").remove()
                    }), $("body")
                }, 1e3 * n)
            }
            if (t && t.img) {
                a = t.delay ? t.delay : 1, i = "modal-".concat(t.id), c = Cookies.get(i), n = t.interval ? t.interval / 60 / 24 : 1;
                if (c) return;
                Cookies.set(i, 1, {
                    expires: n
                }), setTimeout(function() {
                    var e = document.createElement("div");
                    e.classList = "miao-promotion-modal", e.innerHTML = '\n            <div class="ml-promotion-modal-content">\n              <i id="promotion-modal-close" class="remixicon-close-circle-line"></i>\n              <a href="'.concat(t.img.link, '" class="51-banner">\n                ').concat(t.img.web ? '<img class="web-banner" src="'.concat(t.img.web, '" alt="banner">') : '<img class="mobile-banner" src="'.concat(t.img.web, '" alt="mobile-banner">'), "\n              </a>\n            </div>\n          "), document.querySelector("body").appendChild(e), $("#promotion-modal-close").click(function() {
                        $(".miao-promotion-modal").remove()
                    })
                }, 1e3 * a)
            }
        }
    }).catch(function(e) {
        console.log("ERROR: ", e)
    })
}
window.Cookies && (sourceUtm = Cookies.get("s_utm"), overwriteCh = !1, channel = utm = null, query.get("gclid") ? (utm = channel = "google/cpc", overwriteCh = !0) : query.get("fbclid") ? (utm = channel = "facebook/cpc", overwriteCh = !0) : query.get("ch") && (channel = query.get("ch"), overwriteCh = !0), query.get("utm_source") && (qsMedium = query.get("utm_medium"), utm = query.get("utm_source") + (qsMedium ? "/" + query.get("utm_medium") : "")), utm && Cookies.set("utm", utm), overwriteCh && channel && Cookies.set("ch", channel), !sourceUtm && utm && Cookies.set("s_utm", utm, {
    expires: 30
}), Cookies.get("uuid") || Cookies.set("uuid", uuidv4(), {
    expires: 30
})), query.get("token") && (query.delete("token"), window.history.pushState(null, null, window.location.pathname + "?" + query.toString())), $(document).ready(function() {
    addWechatSupport(), checkDownload(), doubleRedirect(), window.feather.replace(), autoToast()
});*/