"use strict";
(self.webpackChunklol = self.webpackChunklol || []).push([[665], {
    8700: function(e, t, a) {
        var i = a(9439)
          , n = a(2791)
          , s = a(184)
          , r = function(e) {
            var t = e.width
              , a = e.loading
              , r = void 0 !== a && a
              , l = (0,
            n.useState)(!1)
              , d = (0,
            i.Z)(l, 2)
              , c = d[0]
              , o = d[1]
              , h = "tiny" === t || "xsmall" === t || "small" === t;
            return (0,
            n.useEffect)((function() {
                h && "undefined" !== typeof window.nads && "localhost" !== window.location.hostname && (r ? c && o(!1) : c || o(!0))
            }
            ), [c, h, r]),
            (0,
            n.useEffect)((function() {
                c && window.nitroAds.createAd("anchor", {
                    refreshLimit: 10,
                    refreshTime: 90,
                    format: "anchor",
                    anchor: "bottom",
                    anchorPersistClose: !1,
                    mediaQuery: "(min-width: 320px) and (max-width: 767px)"
                })
            }
            ), [c]),
            (0,
            s.jsx)(s.Fragment, {})
        };
        t.Z = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            s.jsx)(r, {
                width: t,
                loading: i
            })
        }
    },
    8454: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var i = a(2791)
          , n = "Billboard_billboard__qjyI0"
          , s = a(184)
          , r = function(e) {
            var t = e.width
              , a = e.loading
              , r = void 0 !== a && a
              , l = "medium" === t || "large" === t || "xlarge" === t;
            return (0,
            i.useEffect)((function() {
                if (!r && "localhost" !== window.location.hostname && "undefined" !== typeof window.nads) {
                    var e = window.nads;
                    l && e.createAd("billboard", {
                        refreshLimit: 10,
                        refreshTime: 30,
                        renderVisibleOnly: !1,
                        refreshVisibleOnly: !0,
                        sizes: [["970", "250"], ["970", "90"], ["728", "90"]]
                    })
                }
            }
            ), [l, r]),
            (0,
            s.jsx)(s.Fragment, {
                children: l && (0,
                s.jsx)("div", {
                    id: "billboard",
                    className: n
                })
            })
        }
          , l = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            s.jsx)(r, {
                width: t,
                loading: i
            })
        }
    },
    6176: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var i = a(2791)
          , n = "HLeaderboard_leaderboard__2fywu"
          , s = a(184)
          , r = function(e) {
            var t = e.width
              , a = e.loading
              , r = void 0 !== a && a
              , l = "medium" === t || "large" === t || "xlarge" === t;
            return (0,
            i.useEffect)((function() {
                r || "localhost" === window.location.hostname || "undefined" === typeof window.nads || l && window.nads.createAd("hleaderboard", {
                    refreshLimit: 10,
                    refreshTime: 30,
                    renderVisibleOnly: !1,
                    refreshVisibleOnly: !0,
                    sizes: [["970", "90"], ["728", "90"]]
                })
            }
            ), [l, r]),
            (0,
            s.jsx)(s.Fragment, {
                children: l && (0,
                s.jsx)("div", {
                    id: "hleaderboard",
                    className: n
                })
            })
        }
          , l = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            s.jsx)(r, {
                width: t,
                loading: i
            })
        }
    },
    9950: function(e, t, a) {
        var i = a(9439)
          , n = a(2791)
          , s = a(184)
          , r = function(e) {
            var t = e.width
              , a = e.loading
              , r = void 0 !== a && a
              , l = (0,
            n.useState)(!1)
              , d = (0,
            i.Z)(l, 2)
              , c = d[0]
              , o = d[1]
              , h = "large" === t || "xlarge" === t || "medium" === t;
            return (0,
            n.useEffect)((function() {
                h && "undefined" !== typeof window.nads && "localhost" !== window.location.hostname && (r ? c && o(!1) : c || o(!0))
            }
            ), [c, h, r]),
            (0,
            n.useEffect)((function() {
                c && window.nads.createAd("nvp", {
                    format: "video-nc",
                    mediaQuery: "(min-width: 1025px), (min-width: 768px) and (max-width: 1024px)",
                    video: {
                        float: "always",
                        mobile: "compact",
                        hidePlaylist: !0
                    }
                })
            }
            ), [c]),
            (0,
            s.jsx)(s.Fragment, {
                children: h && !r && (0,
                s.jsx)("div", {
                    id: "nvp"
                })
            })
        };
        t.Z = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            s.jsx)(r, {
                width: t,
                loading: i
            })
        }
    },
    3028: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return d
            }
        });
        var i = a(9439)
          , n = a(2791)
          , s = "Rect_rect__WBzmC"
          , r = a(184)
          , l = function(e) {
            var t = e.width
              , a = e.loading
              , l = void 0 !== a && a
              , d = (0,
            n.useState)(!1)
              , c = (0,
            i.Z)(d, 2)
              , o = c[0]
              , h = c[1]
              , m = "large" === t || "xlarge" === t || "medium" === t;
            return (0,
            n.useEffect)((function() {
                m && "undefined" !== typeof window.nads && "localhost" !== window.location.hostname && (l ? o && h(!1) : o || h(!0))
            }
            ), [o, m, l]),
            (0,
            n.useEffect)((function() {
                o && window.nads.createAd("rect", {
                    refreshLimit: 10,
                    refreshTime: 60,
                    renderVisibleOnly: !0,
                    refreshVisibleOnly: !0,
                    sizes: [["300", "250"], ["336", "280"]]
                })
            }
            ), [o]),
            (0,
            r.jsx)(r.Fragment, {
                children: m && (0,
                r.jsx)("div", {
                    className: s,
                    children: !l && (0,
                    r.jsx)("div", {
                        id: "rect"
                    })
                })
            })
        }
          , d = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            r.jsx)(l, {
                width: t,
                loading: i
            })
        }
    },
    4910: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return l
            }
        });
        var i = a(2907)
          , n = a(1087)
          , s = "BreadCrumbs_breadcrumb__Nxj61"
          , r = a(184)
          , l = function(e) {
            var t = e.nav
              , a = t.cid
              , l = t.lane
              , d = t.defaultLane
              , c = t.vs
              , o = t.vsLane
              , h = t.defaultVsLane
              , m = t.mode
              , u = t.page
              , p = t.queue
              , x = (0,
            i.yq)(m)
              , _ = m && "ranked" !== m ? t.mode + "/" : ""
              , g = m ? x.title + " " : "";
            if (!a && !p)
                return (0,
                r.jsx)(r.Fragment, {});
            var v = [];
            "champion" === u ? v = [] : "vs" === u ? (l !== d && v.push("lane"),
            o !== h && v.push("vsLane")) : "counters" === u ? v = ["lane"] : "leaderboard" === u && p && (v = ["queue"]);
            var j = [];
            v.forEach((function(e) {
                t[e] !== i.ce[e] && j.push(e.toLowerCase() + "=" + t[e])
            }
            ));
            var f = j.length ? "?" + j.join("&") : "";
            return (0,
            r.jsxs)("ol", {
                className: s,
                vocab: "https://schema.org/",
                typeof: "BreadcrumbList",
                children: [(0,
                r.jsxs)("li", {
                    property: "itemListElement",
                    typeof: "ListItem",
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/tierlist/".concat(_)
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: ["LoL ", g, "Tier List"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "1"
                    })]
                }), !p && (0,
                r.jsxs)("li", {
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/".concat((0,
                            i.Xk)(a), "/").concat(_, "build/"),
                            search: ""
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: [(0,
                            i.sX)(a), " ", g, "Build"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "2"
                    })]
                }), "vs" === t.page && (0,
                r.jsxs)("li", {
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/".concat((0,
                            i.Xk)(a), "/vs/").concat((0,
                            i.Xk)(c), "/build/"),
                            search: f
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: [(0,
                            i.sX)(a), " vs ", (0,
                            i.sX)(c), " Build"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "3"
                    })]
                }), "runesvs" === t.page && (0,
                r.jsxs)("li", {
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/".concat((0,
                            i.Xk)(a), "/vs/").concat((0,
                            i.Xk)(c), "/runes/"),
                            search: f
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: [(0,
                            i.sX)(a), " vs ", (0,
                            i.sX)(c), " Runes"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "3"
                    })]
                }), "leaderboard" === t.page && a > 0 && (0,
                r.jsxs)("li", {
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/".concat((0,
                            i.Xk)(a), "/leaderboard/"),
                            search: ""
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: [(0,
                            i.sX)(a), " Leaderboard"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "3"
                    })]
                }), "leaderboard" === t.page && p && (0,
                r.jsxs)("li", {
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/leaderboard/",
                            search: f
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: ["Challenger Leaderboard ", p.charAt(0).toUpperCase() + p.slice(1), " Queue"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "3"
                    })]
                }), "counters" === t.page && (0,
                r.jsxs)("li", {
                    children: [(0,
                    r.jsx)(n.rU, {
                        to: {
                            pathname: "/lol/".concat((0,
                            i.Xk)(a), "/counters/"),
                            search: f
                        },
                        property: "item",
                        typeof: "WebPage",
                        children: (0,
                        r.jsxs)("span", {
                            property: "name",
                            children: [(0,
                            i.sX)(a), " Counters"]
                        })
                    }), (0,
                    r.jsx)("meta", {
                        property: "position",
                        content: "3"
                    })]
                })]
            })
        }
    },
    4749: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return u
            }
        });
        var i = a(2300)
          , n = a(9321)
          , s = "CircleBig_wrapper__GgAW5"
          , r = "CircleBig_challenger__GBEhP"
          , l = "CircleBig_border__06hJI"
          , d = "CircleBig_lane__OK+vy"
          , c = "CircleBig_laneborder__qlRiS"
          , o = "CircleBig_tier__8AcED"
          , h = "CircleBig_tierborder__N358a"
          , m = a(184)
          , u = function(e) {
            var t = e.cid
              , a = void 0 !== t && t
              , u = e.lane
              , p = e.tier
              , x = e.topList
              , _ = void 0 !== x && x;
            return (0,
            m.jsxs)("div", {
                className: s,
                children: [a > 0 && (0,
                m.jsx)(i.Z, {
                    id: a,
                    type: "champ140c",
                    toolTip: !1
                }), _ && (0,
                m.jsx)("img", {
                    className: r,
                    src: "https://cdn5.lolalytics.com/misc/challenger140.webp",
                    srcSet: "https://cdn5.lolalytics.com/misc/challenger140.webp 140w,\n                   https://cdn5.lolalytics.com/misc/challenger280.webp 280w",
                    width: 140,
                    height: 140,
                    alt: "challenger"
                }), (0,
                m.jsx)("svg", {
                    className: l,
                    children: (0,
                    m.jsx)("circle", {
                        cx: "72",
                        cy: "72",
                        r: "72",
                        stroke: "#333",
                        strokeWidth: "2",
                        fill: "#111"
                    })
                }), u && (0,
                m.jsxs)(m.Fragment, {
                    children: [(0,
                    m.jsx)("div", {
                        className: d,
                        children: (0,
                        m.jsx)(n.Z, {
                            lane: u
                        })
                    }), (0,
                    m.jsx)("svg", {
                        className: c,
                        children: (0,
                        m.jsx)("circle", {
                            cx: "23",
                            cy: "23",
                            r: "23",
                            stroke: "#333",
                            strokeWidth: "1",
                            fill: "#111"
                        })
                    })]
                }), p && (0,
                m.jsxs)(m.Fragment, {
                    children: [(0,
                    m.jsx)("div", {
                        className: o,
                        children: p
                    }), (0,
                    m.jsx)("svg", {
                        className: h,
                        children: (0,
                        m.jsx)("circle", {
                            cx: "23",
                            cy: "23",
                            r: "23",
                            stroke: "#333",
                            strokeWidth: "1",
                            fill: "#111"
                        })
                    })]
                })]
            })
        }
    },
    2392: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return h
            }
        });
        var i = a(1087)
          , n = a(7689)
          , s = a(2907)
          , r = a(4042)
          , l = a(4559)
          , d = a(9445)
          , c = "Error_inner__e+fFr"
          , o = a(184)
          , h = function(e) {
            var t = e.type
              , a = e.nav
              , h = e.width;
            if ("nochamp" === t)
                return (0,
                o.jsxs)("div", {
                    className: c,
                    children: [(0,
                    o.jsx)("br", {}), (0,
                    o.jsx)("br", {}), (0,
                    o.jsx)("br", {}), (0,
                    o.jsxs)("center", {
                        children: [(0,
                        o.jsx)("h3", {
                            children: "Invalid Champion Name!"
                        }), (0,
                        o.jsx)("br", {}), (0,
                        o.jsx)("h3", {
                            children: (0,
                            o.jsx)(i.rU, {
                                to: {
                                    pathname: "/"
                                },
                                children: "Click HERE to Return Home"
                            })
                        })]
                    })]
                });
            if ("loading" === t)
                return (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(d.Z, {
                        nav: a,
                        analysed: 0,
                        averageWR: 0,
                        width: h
                    }), (0,
                    o.jsxs)("div", {
                        className: c,
                        children: [a.cid && (0,
                        o.jsx)(r.Z, {
                            cid: a.cid
                        }), (0,
                        o.jsx)(l.Z, {})]
                    })]
                });
            if ("nodata" === t)
                return (0,
                o.jsxs)(o.Fragment, {
                    children: [(0,
                    o.jsx)(d.Z, {
                        nav: a,
                        analysed: 0,
                        averageWR: 0,
                        width: h
                    }), (0,
                    o.jsxs)("div", {
                        className: c,
                        children: [(0,
                        o.jsx)("br", {}), (0,
                        o.jsx)("br", {}), (0,
                        o.jsx)("br", {}), (0,
                        o.jsxs)("center", {
                            children: [(0,
                            o.jsx)("h3", {
                                children: "No data available for selected parameters!"
                            }), (0,
                            o.jsx)("h3", {
                                children: "Please alter your selection."
                            })]
                        })]
                    })]
                });
            var m = window.location.href.split("/")
              , u = m.pop();
            return u || (u = m.pop()),
            "Top" !== u && "Jungle" !== u && "Middle" !== u && "ADC" !== u && "Support" !== u || (u = m.pop()),
            u = u.toLowerCase().replace(/\s/g, ""),
            s.Xk[u] ? (0,
            o.jsx)(n.Fg, {
                to: {
                    pathname: "/lol/".concat(u, "/"),
                    search: ""
                }
            }) : (0,
            o.jsxs)("div", {
                className: c,
                children: [(0,
                o.jsx)("br", {}), (0,
                o.jsx)("br", {}), (0,
                o.jsxs)("center", {
                    children: [(0,
                    o.jsx)("h3", {
                        children: "404 Page Not Found"
                    }), (0,
                    o.jsx)("br", {}), (0,
                    o.jsx)("h3", {
                        children: (0,
                        o.jsx)(i.rU, {
                            to: {
                                pathname: "/"
                            },
                            children: "Click HERE to Return Home"
                        })
                    })]
                })]
            })
        }
    },
    3901: function(e, t, a) {
        var i = a(2791)
          , n = a(1050)
          , s = a(2907);
        t.Z = function(e) {
            var t = (0,
            i.useContext)(n._);
            return t.translation.champions && t.translation.champions[e] ? t.translation.champions[e] : (0,
            s.sX)(e)
        }
    },
    2040: function(e, t, a) {
        var i = a(2791)
          , n = a(1050);
        t.Z = function(e) {
            var t = (0,
            i.useContext)(n._)
              , a = {};
            return e.forEach((function(e) {
                return a[e[0]] = "undefined" !== typeof t.translation[e[0]] ? t.translation[e[0]] : e[1]
            }
            )),
            a
        }
    },
    5660: function(e, t, a) {
        var i = a(2659)
          , n = a(764)
          , s = a(184);
        t.Z = function(e) {
            var t = e.cid
              , a = e.lane
              , r = void 0 !== a && a
              , l = e.nav;
            return (0,
            s.jsx)(n.Z, {
                cid: t,
                lane: r,
                nav: l,
                children: (0,
                s.jsx)(i.Z, {
                    cid: t
                })
            })
        }
    },
    6424: function(e, t, a) {
        var i = a(2659)
          , n = a(4096)
          , s = a(184);
        t.Z = function(e) {
            var t = e.cid
              , a = e.vs
              , r = e.lane
              , l = e.vsLane
              , d = e.nav;
            return (0,
            s.jsx)(n.Z, {
                cid: t,
                vs: a,
                lane: r,
                vsLane: l,
                nav: d,
                children: (0,
                s.jsx)(i.Z, {
                    cid: a
                })
            })
        }
    },
    5662: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return d
            }
        });
        var i = a(2791)
          , n = a(1087)
          , s = a(2907)
          , r = "ChampMap_wrapper__Fgoyd"
          , l = a(184)
          , d = function(e) {
            var t = e.mode
              , a = e.cid
              , d = void 0 === a ? 0 : a
              , c = (0,
            s.yq)(t);
            return "ranked" !== t && (d = 0),
            (0,
            l.jsxs)("div", {
                className: r,
                children: [(0,
                l.jsxs)("h1", {
                    children: ["LoL Champion ", c.title, " Builds"]
                }), d > 0 && (0,
                l.jsxs)(l.Fragment, {
                    children: [(0,
                    l.jsxs)(n.rU, {
                        to: {
                            pathname: "/lol/".concat((0,
                            s.Xk)(d), "/")
                        },
                        children: [(0,
                        s.sX)(d), " Build"]
                    }), Object.keys(s.r$).map((function(e, t) {
                        return (0,
                        l.jsxs)(i.Fragment, {
                            children: [" \u2022 ", s.r$[e] !== d && (0,
                            l.jsxs)(n.rU, {
                                to: {
                                    pathname: "/lol/".concat((0,
                                    s.Xk)(d), "/vs/").concat(e, "/build/")
                                },
                                children: [(0,
                                s.sX)(d), " vs ", (0,
                                s.sX)(s.r$[e])]
                            })]
                        }, t)
                    }
                    ))]
                }), 0 === d && Object.keys(s.r$).map((function(e, a) {
                    return (0,
                    l.jsxs)(n.rU, {
                        to: {
                            pathname: "/lol/".concat(e, "/").concat("ranked" !== t ? t + "/" : "", "build/")
                        },
                        children: [(0,
                        s.sX)(s.r$[e]), " ", c.title, " Build ", (0,
                        l.jsx)(l.Fragment, {
                            children: " \u2022 "
                        })]
                    }, a)
                }
                ))]
            })
        }
    },
    7126: function(e, t, a) {
        a.d(t, {
            Z: function() {
                return m
            }
        });
        var i = a(764)
          , n = a(4096)
          , s = a(2510)
          , r = a(2907)
          , l = a(3901)
          , d = "TabButtons_buttons__KhL4Y"
          , c = "TabButtons_active__9nzxW"
          , o = "TabButtons_line__e26Dl"
          , h = a(184)
          , m = function(e) {
            var t = e.nav
              , a = e.tab
              , m = e.cid
              , u = e.lane
              , p = (e.width,
            (0,
            l.Z)(m))
              , x = p + " "
              , _ = p + " vs " + (0,
            l.Z)(t.vs) + " ";
            return m < 1 ? (0,
            h.jsx)(h.Fragment, {}) : (0,
            h.jsxs)(h.Fragment, {
                children: [(0,
                h.jsxs)("div", {
                    className: d,
                    children: [(0,
                    h.jsxs)("div", {
                        className: 0 === a ? c : "",
                        children: [!t.vs && (0,
                        h.jsxs)(i.Z, {
                            cid: t.cid,
                            lane: u !== t.defaultLane && u,
                            nav: t,
                            children: [x, (0,
                            h.jsx)(s.Z, {
                                trans: "tabs::main::build",
                                english: "Build"
                            })]
                        }), t.vs > 0 && (0,
                        h.jsxs)(n.Z, {
                            cid: t.cid,
                            vs: t.vs,
                            lane: u !== t.defaultLane && u,
                            vsLane: t.vsLane !== t.defaultVsLane && t.vsLane,
                            nav: t,
                            children: [_, (0,
                            h.jsx)(s.Z, {
                                trans: "tabs::main::build",
                                english: "Build"
                            })]
                        })]
                    }), (0,
                    h.jsx)("div", {
                        className: 1 === a ? c : "",
                        children: (0,
                        h.jsxs)(i.Z, {
                            cid: t.cid,
                            page: "leaderboard",
                            nav: t,
                            children: [x, (0,
                            h.jsx)(s.Z, {
                                trans: "tabs::main::leaderboard",
                                english: "Leaderboard"
                            })]
                        })
                    }), (!t.mode || "ranked" === t.mode) && (0,
                    h.jsx)("div", {
                        className: 2 === a ? c : "",
                        children: (0,
                        h.jsxs)(i.Z, {
                            cid: t.cid,
                            lane: u,
                            page: "counters",
                            nav: t,
                            children: [x, " ", (0,
                            h.jsx)(s.Z, {
                                trans: "tabs::main::counters",
                                english: "Counters"
                            })]
                        })
                    }), (0,
                    h.jsx)("div", {
                        children: (0,
                        h.jsxs)("a", {
                            href: "https://pros.lol/champion/".concat((0,
                            r.Xk)(t.cid), "/probuilds/"),
                            children: [x, " ", (0,
                            h.jsx)(s.Z, {
                                trans: "tabs::main::probuilds",
                                english: "Probuilds"
                            })]
                        })
                    })]
                }), (0,
                h.jsx)("div", {
                    className: o
                })]
            })
        }
    },
    317: function(e, t, a) {
        var i = a(184);
        t.Z = function(e) {
            var t = e.wr
              , a = void 0 === t ? 0 : t
              , n = e.mid
              , s = void 0 === n ? 50 : n
              , r = e.incr
              , l = void 0 === r ? 1 : r
              , d = e.text
              , c = a >= s ? 0 : 1
              , o = Math.min(Math.round(Math.abs(a - s) / l), 4);
            return (0,
            i.jsxs)("div", {
                style: {
                    color: "".concat([["#aaccaf", "#88c585", "#67bb5b", "#46af2e", "#24a300"], ["#d8a6ab", "#d8746b", "#d8746b", "#d85c4b", "#d8442b"]][c][o])
                },
                children: [a, d]
            })
        }
    },
    1070: function(e, t, a) {
        a.r(t),
        a.d(t, {
            default: function() {
                return sn
            }
        });
        var i = a(2791)
          , n = a(2907)
          , s = a(879)
          , r = a(8700)
          , l = a(8454)
          , d = a(4042)
          , c = a(4910)
          , o = a(1897)
          , h = a(4749)
          , m = a(2659)
          , u = a(764)
          , p = a(5660)
          , x = a(6424)
          , _ = a(6111)
          , g = a(9622)
          , v = a(5e3)
          , j = a(6818)
          , f = a(3901)
          , y = a(2040)
          , w = "ChampionDescription_description__tcufB"
          , b = "ChampionDescription_champ__xPJWW"
          , k = "ChampionDescription_mythic__jLEQ+"
          , S = "ChampionDescription_keystone__sZIJ9"
          , N = a(184)
          , Z = function(e) {
            var t = e.width
              , a = e.data
              , i = e.nav
              , s = a.wr
              , r = a.lane
              , l = a.topWin
              , d = a.topElo
              , c = a.counters
              , Z = i.cid
              , C = i.defaultLane
              , L = i.mode
              , F = i.patch
              , R = (0,
            n.yq)(L)
              , B = (0,
            f.Z)(Z)
              , P = "undefined" !== typeof r
              , G = P && "ranked" === L ? r.charAt(0).toUpperCase() + r.slice(1) : ""
              , I = R.title
              , T = (0,
            y.Z)([["heading::buildrunescounters", "Build, Runes & Counters"], ["general::patch", "Patch"], ["general::build", "Build"], ["general::guide", "Guide"], ["general::forpatch", "for Patch"], ["general::vs", "vs"], ["general::versus", "versus"]]);
            document.title = B + (I ? " " + I : "") + " " + T["general::build"] + " - LoLalytics " + B + ("ranked" === L ? " " + G : "") + (I ? " " + I : "") + " " + T["heading::buildrunescounters"] + " " + T["general::guide"];
            var H = B + (I ? " " + I : "") + " " + T["general::build"] + " - LoLalytics has the best " + B + ("ranked" === L ? " " + G : "") + (I ? " " + I : "") + " " + T["heading::buildrunescounters"] + "  " + T["general::guide"] + " " + T["general::forpatch"] + " " + F + ". LoLalytics analyses millions of LoL matches on " + T["general::patch"] + " " + F + " for the best " + B + " LoL guide.";
            return (0,
            o.o)("https://lolalytics.com/lol/" + (0,
            n.Xk)(Z) + "/" + ("ranked" !== L ? L + "/" : "") + "build/" + ("ranked" === L && r !== C ? "?lane=" + r : "")),
            document.getElementsByTagName("meta")[1].content = H,
            (0,
            N.jsxs)("div", {
                className: w,
                children: [("tiny" === t || "xsmall" === t) && (0,
                N.jsxs)("div", {
                    className: b,
                    children: [(0,
                    N.jsx)(h.Z, {
                        cid: Z,
                        lane: r,
                        tier: a.tier
                    }), i.mythic > 0 && (0,
                    N.jsxs)("div", {
                        className: k,
                        children: ["Mythic", (0,
                        N.jsx)(g.Z, {
                            nav: i
                        })]
                    }), i.keystone > 0 && (0,
                    N.jsxs)("div", {
                        className: S,
                        children: ["Keystone", (0,
                        N.jsx)(_.Z, {
                            nav: i
                        })]
                    })]
                }), (0,
                N.jsxs)("h1", {
                    children: [B + (I ? " " + I : ""), " Build"]
                }), (0,
                N.jsxs)("h2", {
                    children: [B, " ", "ranked" === L ? G : I, " ", T["heading::buildrunescounters"]]
                }), P && (0,
                N.jsxs)("p", {
                    children: [(0,
                    N.jsx)(p.Z, {
                        cid: Z,
                        lane: r,
                        nav: i
                    }), R.title ? " " + R.title : "", " ", "ranked" === L && (0,
                    N.jsxs)(N.Fragment, {
                        children: [" ", r]
                    }), " has a ", s, "% win rate in ", (0,
                    N.jsx)(j.Z, {
                        tier: i.tier
                    }), " on Patch ", i.patch, " ", a.rank > 0 && (0,
                    N.jsxs)(N.Fragment, {
                        children: ["coming in at rank ", a.rank, " of ", a.rankTotal, " and graded ", a.tier, " Tier on the ", (0,
                        N.jsx)(v.Z, {
                            nav: i,
                            children: "LoL Tierlist"
                        })]
                    }), ". ", c && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(m.Z, {
                            cid: Z
                        }), " ", "ranked" === L && r, " is a strong counter to", (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), (0,
                        N.jsx)(x.Z, {
                            cid: Z,
                            vs: c.strong[0],
                            lane: r,
                            vsLane: r,
                            nav: i
                        }), ",", (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), (0,
                        N.jsx)(x.Z, {
                            cid: Z,
                            vs: c.strong[1],
                            lane: r,
                            vsLane: r,
                            nav: i
                        }), " &", (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), (0,
                        N.jsx)(x.Z, {
                            cid: Z,
                            vs: c.strong[2],
                            lane: r,
                            vsLane: r,
                            nav: i
                        }), (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), "while ", (0,
                        N.jsx)(m.Z, {
                            cid: Z
                        }), " is countered most by", (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), (0,
                        N.jsx)(x.Z, {
                            cid: Z,
                            vs: c.weak[0],
                            lane: r,
                            vsLane: r,
                            nav: i
                        }), ",", (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), (0,
                        N.jsx)(x.Z, {
                            cid: Z,
                            vs: c.weak[1],
                            lane: r,
                            vsLane: r,
                            nav: i
                        }), " &", (0,
                        N.jsx)(N.Fragment, {
                            children: " "
                        }), (0,
                        N.jsx)(x.Z, {
                            cid: Z,
                            vs: c.weak[2],
                            lane: r,
                            vsLane: r,
                            nav: i
                        }), ". The best ", (0,
                        N.jsx)(m.Z, {
                            cid: Z
                        }), " players have a ", l, "% win rate with an average rank of ", d, " on the ", (0,
                        N.jsxs)(u.Z, {
                            cid: Z,
                            page: "leaderboard",
                            nav: i,
                            children: [(0,
                            N.jsx)(m.Z, {
                                cid: Z
                            }), " Leaderboard"]
                        }), ". "]
                    }), "Below is a detailed breakdown of the ", (0,
                    N.jsx)(m.Z, {
                        cid: Z
                    }), " build, runes & counters."]
                })]
            })
        }
          , C = a(2884)
          , L = a(2510)
          , F = "ChampionStats_stats__26e3l"
          , R = function(e) {
            var t = e.data;
            return (0,
            N.jsxs)("div", {
                className: F,
                children: [(0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsxs)("div", {
                        children: [t.wr.toFixed(2), "%"]
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::winrate",
                        english: "Win Rate"
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsxs)("div", {
                        children: [t.rank, " / ", t.rankTotal]
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::rank",
                        english: "Rank"
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)("div", {
                        children: t.tier
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::tier",
                        english: "Tier"
                    }), (0,
                    N.jsx)(C.Z, {
                        name: "tier"
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsxs)("div", {
                        children: [t.pr.toFixed(2), "%"]
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::pickrate",
                        english: "Pick Rate"
                    })]
                }), t.br > 0 && (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsxs)("div", {
                        children: [t.br.toFixed(2), "%"]
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::banrate",
                        english: "Ban Rate"
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)("div", {
                        children: t.n.toLocaleString()
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::games",
                        english: "Games"
                    })]
                })]
            })
        }
          , B = a(9833)
          , P = {
            circle: "DamageCircle_circle__7JdBY",
            physicaldamage: "DamageCircle_physicaldamage__T-AXH",
            magicdamage: "DamageCircle_magicdamage__QUWMk",
            truedamage: "DamageCircle_truedamage__dpqup",
            physical: "DamageCircle_physical__DcK1m",
            magic: "DamageCircle_magic__3UyQF",
            true: "DamageCircle_true__d+QsF"
        }
          , G = function(e) {
            var t = e.physical
              , a = e.magic
              , n = e.trueDamage
              , s = (0,
            i.useRef)(null)
              , r = (0,
            i.useRef)(null)
              , l = t + a + n
              , d = l ? Math.round(t / l * 100) : 0
              , c = l ? Math.round(a / l * 100) : 0
              , o = l ? Math.round(n / l * 100) : 0
              , h = [d, c, o]
              , m = h.indexOf(Math.max.apply(Math, h));
            return (0,
            i.useEffect)((function() {
                var e = B.Ys(s.current).html("").append("svg").attr("width", 80).attr("height", 80).append("g").attr("transform", "translate(40,40)")
                  , t = [{
                    title: "Physical Damage",
                    value: d,
                    type: "physical",
                    color: "rgb(193,105,104)"
                }, {
                    title: "Magic Damage",
                    value: c,
                    type: "magic",
                    color: "rgb(104,185,214)"
                }, {
                    title: "True Damage",
                    value: o,
                    type: "true",
                    color: "rgb(223,223,223)"
                }]
                  , a = B.Nb1().innerRadius(23).outerRadius(39).padAngle(.05)
                  , i = B.ve8().value((function(e) {
                    return e.value
                }
                ))
                  , n = B.Ys(r.current).style("opacity", 0);
                e.selectAll("path").data(i(t)).enter().append("path").attr("d", a).attr("stroke", (function(e) {
                    return e.data.color
                }
                )).attr("fill-opacity", .5).attr("fill", (function(e) {
                    return e.data.color
                }
                )).on("mouseover", (function(e, t) {
                    n.transition().duration(200).style("opacity", .9),
                    n.html(t.value.toLocaleString() + "% " + t.data.title).attr("class", P[t.data.type]).style("left", e.offsetX + 15 + "px").style("top", e.offsetY - 110 + "px")
                }
                )).on("mouseout", (function() {
                    n.transition().duration(500).style("opacity", 0)
                }
                ))
            }
            ), [d, o, c]),
            (0,
            N.jsxs)("div", {
                className: P.circle,
                children: [(0,
                N.jsx)("div", {
                    ref: s
                }), (0,
                N.jsxs)("div", {
                    className: P[["physicaldamage", "magicdamage", "truedamage"][m]],
                    children: [h[m], "%"]
                }), (0,
                N.jsx)("div", {
                    ref: r
                })]
            })
        }
          , I = a(9950)
          , T = a(3028)
          , H = a(9601)
          , E = {
            skill24: "Skill_skill24__Mr6uc",
            skill30: "Skill_skill30__Xixis",
            skill36: "Skill_skill36__T2i4V",
            skill52: "Skill_skill52__7PwRE",
            loading: "Skill_loading__R4C-H"
        }
          , W = a(2271)
          , X = function(e) {
            var t = e.cid
              , a = e.id
              , s = e.type
              , r = (0,
            i.useContext)(H.a)
              , l = r.skill[t] && r.skill[t][a.toUpperCase()] ? r.skill[t][a.toUpperCase()] : "Loading...";
            return (0,
            N.jsx)(W.ZP, {
                content: (0,
                N.jsx)("div", {
                    className: r.skill[t] && r.skill[t][a.toUpperCase()] ? "" : E.loading,
                    dangerouslySetInnerHTML: {
                        __html: l
                    }
                }),
                onShow: function() {
                    r.skill[t] || r.setShowSkill(t)
                },
                maxWidth: 480,
                children: (0,
                N.jsxs)("div", {
                    className: E[s],
                    children: [(0,
                    N.jsx)("img", {
                        src: "https://cdn5.lolalytics.com/skill34/".concat((0,
                        n.Xk)(t), "_").concat(a, ".webp"),
                        srcSet: "https://cdn5.lolalytics.com/skill34/".concat((0,
                        n.Xk)(t), "_").concat(a, ".webp 34w,\n            https://cdn5.lolalytics.com/skill68/").concat((0,
                        n.Xk)(t), "_").concat(a, ".webp 68w"),
                        alt: (0,
                        n.sX)(t) + " " + a.toUpperCase()
                    }), (0,
                    N.jsx)("div", {
                        children: a.toUpperCase()
                    })]
                })
            })
        }
          , O = "SkillList_wrapper__7H+z7"
          , M = function(e) {
            var t = e.cid;
            return (0,
            N.jsxs)("div", {
                className: O,
                children: [(0,
                N.jsx)(X, {
                    cid: t,
                    id: "p",
                    type: "skill30"
                }), (0,
                N.jsx)(X, {
                    cid: t,
                    id: "q",
                    type: "skill30"
                }), (0,
                N.jsx)(X, {
                    cid: t,
                    id: "w",
                    type: "skill30"
                }), (0,
                N.jsx)(X, {
                    cid: t,
                    id: "e",
                    type: "skill30"
                }), (0,
                N.jsx)(X, {
                    cid: t,
                    id: "r",
                    type: "skill30"
                })]
            })
        }
          , D = {
            header: "ChampionHeader_header__Hd4n7",
            breadcrumbs: "ChampionHeader_breadcrumbs__mWXbM",
            xlarge: "ChampionHeader_xlarge__-v32D",
            large: "ChampionHeader_large__Pk48g",
            medium: "ChampionHeader_medium__m6KJw",
            small: "ChampionHeader_small__A3zD7",
            xsmall: "ChampionHeader_xsmall__j5+4A",
            tiny: "ChampionHeader_tiny__YT3Dr",
            championicons: "ChampionHeader_championicons__58esV",
            skills: "ChampionHeader_skills__grfQw",
            extras: "ChampionHeader_extras__djFf1",
            mythic: "ChampionHeader_mythic__Z39yx",
            keystone: "ChampionHeader_keystone__mptQ8"
        }
          , A = function(e) {
            var t = e.nav
              , a = e.data
              , i = e.width
              , n = e.loading
              , s = e.adReady
              , r = t || !1
              , l = r.cid
              , d = r.lane;
            return r.vs > 0 ? (0,
            N.jsx)(N.Fragment, {}) : (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsxs)("div", {
                    className: D.header,
                    children: [(0,
                    N.jsx)("div", {
                        className: D.breadcrumbs,
                        children: (0,
                        N.jsx)(c.Z, {
                            nav: t
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: D[i],
                        children: ["tiny" !== i && "xsmall" !== i && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)("div", {
                                children: (0,
                                N.jsxs)("div", {
                                    className: D.championicons,
                                    children: [(0,
                                    N.jsxs)("div", {
                                        children: [(0,
                                        N.jsx)(h.Z, {
                                            cid: l,
                                            lane: d,
                                            tier: n ? " " : a.tier
                                        }), (0,
                                        N.jsxs)("div", {
                                            className: D.extras,
                                            children: [(0,
                                            N.jsxs)("div", {
                                                children: [t.mythic > 0 && (0,
                                                N.jsxs)("div", {
                                                    className: D.mythic,
                                                    children: ["Mythic", (0,
                                                    N.jsx)(g.Z, {
                                                        nav: t
                                                    })]
                                                }), t.keystone > 0 && (0,
                                                N.jsxs)("div", {
                                                    className: D.keystone,
                                                    children: ["Keystone", (0,
                                                    N.jsx)(_.Z, {
                                                        nav: t
                                                    })]
                                                })]
                                            }), a.damage && (0,
                                            N.jsx)(G, {
                                                physical: a.damage.physical,
                                                magic: a.damage.magic,
                                                trueDamage: a.damage.true
                                            })]
                                        })]
                                    }), (0,
                                    N.jsxs)("div", {
                                        children: [(0,
                                        N.jsx)("div", {
                                            className: D.skills,
                                            children: (0,
                                            N.jsx)(M, {
                                                cid: l
                                            })
                                        }), (0,
                                        N.jsx)(Z, {
                                            width: i,
                                            data: a,
                                            nav: t
                                        }), !n && (0,
                                        N.jsx)(R, {
                                            data: a
                                        })]
                                    })]
                                })
                            }), (0,
                            N.jsx)(T.Z, {
                                width: i,
                                loading: s
                            })]
                        }), ("tiny" === i || "xsmall" === i) && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsx)(Z, {
                                width: i,
                                data: a,
                                nav: t
                            }), !n && (0,
                            N.jsx)(R, {
                                data: a
                            })]
                        })]
                    })]
                }), "tiny" !== i && "xsmall" !== i && "small" !== i && (0,
                N.jsx)(I.Z, {
                    width: i,
                    loading: n
                })]
            })
        }
          , q = a(5662)
          , U = a(9439)
          , z = function(e) {
            var t = (0,
            i.useState)(!1)
              , a = (0,
            U.Z)(t, 2)
              , n = a[0]
              , s = a[1];
            return (0,
            i.useEffect)((function() {
                var t = new IntersectionObserver((function(e) {
                    var t = (0,
                    U.Z)(e, 1)[0];
                    !n && t.isIntersecting && s(!0)
                }
                ),{
                    rootMargin: "150px"
                });
                return t.observe(e.current),
                function() {
                    t.disconnect()
                }
            }
            ), [e, n]),
            n
        }
          , V = a(1050)
          , Y = function(e, t) {
            var a = (0,
            i.useContext)(V._);
            return "undefined" !== typeof a.translation[e] ? a.translation[e] : t
        }
          , Q = "Depth_depth__bwaCP"
          , K = "Depth_depthtitle__Izw-5"
          , J = "Depth_axistitle__jt5pc"
          , $ = "Depth_depthquadrant__4sM4-"
          , ee = "Depth_depthtip__tGkVH"
          , te = "Depth_depthdot__viM7H"
          , ae = function(e) {
            e.width;
            var t = e.data
              , a = (0,
            i.useRef)(null)
              , n = z(a)
              , s = (0,
            i.useRef)(null)
              , r = Y("graphs::heading::ncrpb", "Normalised Champion Ranked Player Base")
              , l = Y("graphs::heading::breadth", "Breadth (How much a champion is picked)")
              , d = Y("graphs::heading::depth", "Depth (Games per player)")
              , c = Y("graphs::popular", "Popular")
              , o = Y("graphs::unpopular", "Unpopular")
              , h = Y("graphs::niche", "Niche")
              , m = Y("graphs::broad", "Broad")
              , u = (0,
            i.useMemo)((function() {
                return {
                    main: r,
                    x: l,
                    y: d,
                    popular: c,
                    unpopular: o,
                    niche: h,
                    broad: m
                }
            }
            ), [r, l, d, c, o, h, m]);
            return (0,
            i.useEffect)((function() {
                if (n && t) {
                    var e = 30
                      , i = 20
                      , r = 40
                      , l = 45
                      , d = a.current.offsetWidth - l - i
                      , c = 220 - e - r
                      , o = B.p2C().domain([.1, 9.9]).range([0, d])
                      , h = B.p2C().domain([.5, 2]).range([c, 0])
                      , m = [{
                        d: t[2],
                        v: [t[3]]
                    }]
                      , p = B.Ys(a.current).html("").append("svg").attr("width", d + l + i).attr("height", c + e + r).append("g").attr("transform", "translate(" + l + "," + e + ")");
                    p.append("g").attr("transform", "translate(0," + c + ")").call(B.LLu(o).tickFormat((function(e) {
                        return o.tickFormat(7, B.WUZ(".1"))(e)
                    }
                    ))),
                    p.append("g").call(B.y4O(h).ticks(10).tickFormat((function(e) {
                        return h.tickFormat(7, B.WUZ(",.1"))(e)
                    }
                    ))),
                    p.append("text").attr("x", d / 2 - 10).attr("y", 0 - 1 * e / 3).attr("class", K).text(u.main);
                    var x = B.Ys(s.current).style("opacity", 0);
                    p.append("g").attr("transform", "translate(0," + c + ")").call(B.LLu(o).ticks(1).tickSize(-c).tickFormat("")),
                    p.append("g").call(B.y4O(h).ticks(1).tickValues([1]).tickSize(-d).tickFormat("")),
                    p.append("text").attr("class", $).attr("x", d / 4).attr("y", c / 4).style("text-anchor", "middle").text(u.niche),
                    p.append("text").attr("class", $).attr("x", d / 4).attr("y", 3 * c / 4).style("text-anchor", "middle").text(u.unpopular),
                    p.append("text").attr("class", $).attr("x", 3 * d / 4).attr("y", c / 4).style("text-anchor", "middle").text(u.popular),
                    p.append("text").attr("class", $).attr("x", 3 * d / 4).attr("y", 3 * c / 4).style("text-anchor", "middle").text(u.broad),
                    p.append("text").attr("class", J).attr("x", d / 2).attr("y", c + 35).style("text-anchor", "middle").text(u.x),
                    p.append("text").attr("class", J).attr("transform", "rotate(-90)").attr("x", 0 - c / 2).attr("y", 0 - l).attr("dy", "1.2em").style("text-anchor", "middle").text(u.y),
                    p.selectAll(".dot").data(m).enter().append("circle").attr("class", te).attr("cx", (function(e) {
                        return o(e.d)
                    }
                    )).attr("cy", (function(e) {
                        return h(e.v)
                    }
                    )).attr("r", 5).on("mouseover", (function() {
                        B.Ys(this).transition().duration("100").attr("r", 7),
                        x.transition().duration(200).style("opacity", .9),
                        x.html("<h3>Classification: " + t[4].charAt(0).toUpperCase() + t[4].slice(1) + "</h3>Breadth: " + t[2] + " Depth: " + t[3] + "<br />Unique Players: " + t[1].toLocaleString() + "<br />Total Ranked Games: " + t[0].toLocaleString() + "<br/> 7 Days, All Ranks, All Regions").style("left", this.getBoundingClientRect().left - a.current.getBoundingClientRect().left + 6 + "px").style("top", this.getBoundingClientRect().top - a.current.getBoundingClientRect().top - 220 + "px")
                    }
                    )).on("mouseout", (function() {
                        B.Ys(this).transition().duration("100").attr("r", 5),
                        x.transition().duration(500).style("opacity", 0)
                    }
                    ))
                }
            }
            ), [t, u, n]),
            "undefined" === typeof t ? (0,
            N.jsx)(N.Fragment, {}) : (0,
            N.jsxs)("div", {
                className: Q,
                children: [(0,
                N.jsx)("div", {
                    ref: a
                }), (0,
                N.jsx)("div", {
                    ref: s,
                    className: ee
                })]
            })
        }
          , ie = "Objectives_objectives__UCw4H"
          , ne = "Objectives_pick__R0ff7"
          , se = "Objectives_pick2__qBzo4"
          , re = "Objectives_objective__6Ncc0"
          , le = "Objectives_win__NTorh"
          , de = "Objectives_win2__hgN7z"
          , ce = [["blueSide", "Blue Side"], ["redSide", "Red Side"], ["blood1", "First Blood"], ["tower1", "First Tower"], ["inhibitor1", "First Inhibitor"], ["rift1", "First Herald"], ["rift2", "Second Herald"], ["riftDouble", "Both Heralds"], ["baron1", "First Baron"], ["dragon1", "First Drake"], ["eliteDouble", "First Drake & Herald"], ["dragonSoul", "Dragon Soul"], ["airSoul", "Air Soul"], ["chemtechSoul", "Chemtech Soul"], ["earthSoul", "Earth Soul"], ["fireSoul", "Fire Soul"], ["hextechSoul", "Hextech Soul"], ["waterSoul", "Water Soul"]]
          , oe = function(e) {
            var t = e.data;
            return t ? (t.blue && (t.blueSide = {},
            t.blueSide.win = t.blue.win,
            t.redSide = {},
            t.redSide.win = t.blue.lose),
            (0,
            N.jsx)("div", {
                className: ie,
                children: (0,
                N.jsxs)("table", {
                    children: [(0,
                    N.jsxs)("thead", {
                        children: [(0,
                        N.jsxs)("tr", {
                            children: [(0,
                            N.jsx)("th", {
                                className: re,
                                children: "Objective"
                            }), (0,
                            N.jsx)("th", {
                                className: le,
                                colSpan: 2,
                                children: "Secure"
                            }), (0,
                            N.jsx)("th", {
                                className: de,
                                colSpan: 2,
                                children: "Yield"
                            })]
                        }), (0,
                        N.jsxs)("tr", {
                            children: [(0,
                            N.jsx)("th", {}), (0,
                            N.jsx)("th", {
                                className: ne,
                                children: "%"
                            }), (0,
                            N.jsx)("th", {
                                className: le,
                                children: "Win %"
                            }), (0,
                            N.jsx)("th", {
                                className: se,
                                children: "%"
                            }), (0,
                            N.jsx)("th", {
                                className: de,
                                children: "Win %"
                            })]
                        })]
                    }), (0,
                    N.jsx)("tbody", {
                        children: ce.map((function(e, a) {
                            return (0,
                            N.jsx)(i.Fragment, {
                                children: t[e[0]] && (0,
                                N.jsxs)("tr", {
                                    children: [(0,
                                    N.jsx)("td", {
                                        className: re,
                                        children: e[1]
                                    }), t[e[0]].win && (0,
                                    N.jsxs)(N.Fragment, {
                                        children: [(0,
                                        N.jsx)("td", {
                                            className: ne,
                                            children: t[e[0]].win[1].toFixed(2)
                                        }), (0,
                                        N.jsx)("td", {
                                            className: le,
                                            children: t[e[0]].win[0].toFixed(2)
                                        })]
                                    }), t[e[0]].lose && (0,
                                    N.jsxs)(N.Fragment, {
                                        children: [(0,
                                        N.jsx)("td", {
                                            className: se,
                                            children: t[e[0]].lose[1].toFixed(2)
                                        }), (0,
                                        N.jsx)("td", {
                                            className: de,
                                            children: t[e[0]].lose[0].toFixed(2)
                                        })]
                                    })]
                                })
                            }, a)
                        }
                        ))
                    })]
                })
            })) : ""
        }
          , he = "Resources_champstats__NvyKU"
          , me = "Resources_title__OcXI4"
          , ue = function(e) {
            var t = e.cid;
            return (0,
            N.jsxs)("div", {
                className: he,
                children: [(0,
                N.jsxs)("h2", {
                    children: [(0,
                    N.jsx)(m.Z, {
                        cid: t
                    }), " Resources"]
                }), (0,
                N.jsx)("p", {
                    className: me,
                    children: "Pros.lol"
                }), (0,
                N.jsxs)("p", {
                    children: ["Check out the latest ", (0,
                    N.jsxs)("a", {
                        href: "https://pros.lol/champion/".concat((0,
                        n.Xk)(t), "/probuilds/"),
                        target: "_blank",
                        children: [(0,
                        N.jsx)(m.Z, {
                            cid: t
                        }), " Probuilds"]
                    }), " from the worlds top pro players."]
                }), (0,
                N.jsx)("p", {
                    className: me,
                    children: "XDX.gg"
                }), (0,
                N.jsxs)("p", {
                    children: ["Lighting fast summoner profiles can be found at the new dedicated site ", (0,
                    N.jsx)("a", {
                        href: "https://xdx.gg",
                        target: "_blank",
                        children: "XDX.gg"
                    }), "."]
                }), (0,
                N.jsx)("p", {
                    className: me,
                    children: "Mobalytics"
                }), (0,
                N.jsxs)("p", {
                    children: ["Quality alternative ", (0,
                    N.jsxs)("a", {
                        href: "https://app.mobalytics.gg/lol/champions/".concat((0,
                        n.Xk)(t), "/build"),
                        target: "_blank",
                        children: [(0,
                        N.jsx)(m.Z, {
                            cid: t
                        }), " build stats"]
                    }), " and more from our friends at Mobalytics."]
                })]
            })
        }
          , pe = "SideBarAds1_sidebar__VA0r+"
          , xe = function(e) {
            var t = e.loading
              , a = void 0 !== t && t;
            return (0,
            i.useEffect)((function() {
                a || "localhost" === window.location.hostname || "undefined" === typeof window.nads || window.nads.createAd("sidebar1", {
                    refreshLimit: 10,
                    refreshTime: 30,
                    renderVisibleOnly: !0,
                    refreshVisibleOnly: !0,
                    sizes: [[300, 250], [160, 600], [300, 600]]
                })
            }
            ), [a]),
            (0,
            N.jsx)("div", {
                id: "sidebar1",
                className: pe
            })
        }
          , _e = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            N.jsx)(N.Fragment, {
                children: ("xlarge" === t || "large" === t) && (0,
                N.jsx)(xe, {
                    loading: i
                })
            })
        }
          , ge = "SideBarAds2_sidebar__k47jG"
          , ve = function(e) {
            var t = e.loading
              , a = void 0 !== t && t;
            return (0,
            i.useEffect)((function() {
                a || "localhost" === window.location.hostname || "undefined" === typeof window.nads || window.nads.createAd("sidebar2", {
                    refreshLimit: 10,
                    refreshTime: 30,
                    renderVisibleOnly: !0,
                    refreshVisibleOnly: !0,
                    sizes: [[300, 250], [160, 600], [300, 600]]
                })
            }
            ), [a]),
            (0,
            N.jsx)("div", {
                id: "sidebar2",
                className: ge
            })
        }
          , je = function(e) {
            var t = e.width
              , a = e.loading
              , i = void 0 !== a && a;
            return (0,
            N.jsx)(N.Fragment, {
                children: ("xlarge" === t || "large" === t) && (0,
                N.jsx)(ve, {
                    loading: i
                })
            })
        }
          , fe = {
            simplegraph: "SimpleGraph_simplegraph__hbs4L",
            line_wrlchart: "SimpleGraph_line_wrlchart__nsTDc",
            line_wrdistchart: "SimpleGraph_line_wrdistchart__a5z1n",
            graphtip: "SimpleGraph_graphtip__68+qP",
            wrlchart: "SimpleGraph_wrlchart__Gpm6N",
            wrdistchart: "SimpleGraph_wrdistchart__nQDPd",
            dot_wrlchart: "SimpleGraph_dot_wrlchart__rJzim",
            dot_wrdistchart: "SimpleGraph_dot_wrdistchart__Gbt+H",
            tip_wrlchart: "SimpleGraph_tip_wrlchart__o+0-4",
            tip_wrdistchart: "SimpleGraph_tip_wrdistchart__CmmlR",
            title_wrlchart: "SimpleGraph_title_wrlchart__Utdsq",
            title_wrdistchart: "SimpleGraph_title_wrdistchart__v6NYf",
            x: "SimpleGraph_x__i8HTU",
            y: "SimpleGraph_y__qYtOr"
        }
          , ye = function(e) {
            var t = e.type
              , a = e.time
              , n = e.timeWin
              , s = e.width
              , r = (0,
            i.useState)(s)
              , l = (0,
            U.Z)(r, 2)
              , d = l[0]
              , c = l[1]
              , o = (0,
            i.useRef)(null)
              , h = z(o)
              , m = (0,
            i.useRef)(null)
              , u = Y("graphs::heading::wrvslength", "Win Rate vs Game Length")
              , p = Y("graphs::heading::gamelength", "Game Length Distribution")
              , x = (0,
            i.useMemo)((function() {
                return {
                    wrlchart: u,
                    wrdistchart: p
                }
            }
            ), [u, p]);
            return (0,
            i.useEffect)((function() {
                s !== d && c(s)
            }
            ), [s, d]),
            (0,
            i.useEffect)((function() {
                if (h) {
                    var e = 100
                      , i = 0
                      , s = 0
                      , r = 0
                      , l = [];
                    "wrdistchart" === t && Object.keys(a).forEach((function(e) {
                        return r += a[e]
                    }
                    ));
                    for (var d = Object.keys(a).reduce((function(e, t) {
                        return t > e ? t : e
                    }
                    ), 0), c = 1; c <= d; c++)
                        (s = "wrlchart" === t ? n && "undefined" !== typeof n[c] && "undefined" !== typeof a[c] ? n[c] / a[c] * 100 : 0 : a && "undefined" !== typeof a[c] ? (a[c] || 0) / r * 100 : 0) > i && (i = s),
                        s < e && (e = s),
                        l.push({
                            d: c - 1,
                            v: s.toFixed(2)
                        });
                    var u = d - 1;
                    e = Math.floor(e),
                    i = Math.ceil(i);
                    var p = {
                        top: 30,
                        right: 20,
                        bottom: 20,
                        left: 30
                    }
                      , _ = o.current.offsetWidth - p.left - p.right
                      , g = 220 - p.top - p.bottom
                      , v = B.BYU().domain([0, u]).range([0, _])
                      , j = B.BYU().domain([e, i]).range([g, 0])
                      , f = B.jvg().x((function(e, t) {
                        return v(e.d)
                    }
                    )).y((function(e) {
                        return j(e.v)
                    }
                    )).curve(B.FdL)
                      , y = B.Ys(o.current).html("").append("svg").attr("width", _ + p.left + p.right).attr("height", g + p.top + p.bottom).append("g").attr("transform", "translate(" + p.left + "," + p.top + ")")
                      , w = ["0-15", "15-20", "20-25", "25-30", "30-35", "35-40", "40+"];
                    y.append("g").attr("class", fe.x).attr("transform", "translate(0," + g + ")").call(B.LLu(v).tickValues([0, 1, 2, 3, 4, 5, 6]).tickFormat((function(e, t) {
                        return w[t]
                    }
                    )));
                    var b = B.Ys(m.current).style("opacity", 0);
                    y.append("text").attr("x", _ / 2).attr("y", 0 - 1 * p.top / 3).attr("class", fe["title_" + t]).text(x[t]),
                    y.append("g").attr("class", fe.y).call(B.y4O(j).ticks(Math.min(i - e, 10))),
                    y.append("path").datum(l).attr("class", fe["line_" + t]).attr("d", f),
                    y.selectAll("" + fe["dot_" + t]).data(l).enter().append("circle").attr("class", fe["dot_" + t]).attr("cx", (function(e) {
                        return v(e.d)
                    }
                    )).attr("cy", (function(e) {
                        return j(e.v)
                    }
                    )).attr("r", 2).on("mouseover", (function(e, t) {
                        B.Ys(this).transition().duration("100").attr("r", 4),
                        b.transition().duration(200).style("opacity", .9),
                        b.html(w[t.d] + "<br/>" + t.v.toLocaleString()).style("left", this.getBoundingClientRect().left - o.current.getBoundingClientRect().left + 6 + "px").style("top", this.getBoundingClientRect().top - o.current.getBoundingClientRect().top - 220 + "px")
                    }
                    )).on("mouseout", (function() {
                        B.Ys(this).transition().duration("100").attr("r", 2),
                        b.transition().duration(500).style("opacity", 0)
                    }
                    ))
                }
            }
            ), [t, a, n, x, h]),
            (0,
            N.jsxs)("div", {
                className: fe.simplegraph,
                children: [(0,
                N.jsx)("div", {
                    ref: o
                }), (0,
                N.jsx)("div", {
                    ref: m,
                    className: fe["tip_" + t]
                })]
            })
        }
          , we = "Stats_champstats__9o3Fa"
          , be = function(e) {
            var t = e.stats
              , a = e.count
              , i = e.cid;
            return (0,
            N.jsxs)("div", {
                className: we,
                children: [(0,
                N.jsxs)("h2", {
                    children: [(0,
                    N.jsx)(m.Z, {
                        cid: i
                    }), " Stats"]
                }), t.map((function(e, t) {
                    return (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsxs)("div", {
                            children: [e[1], ":"]
                        }), (0,
                        N.jsxs)("div", {
                            children: [(0,
                            N.jsx)("div", {
                                children: e[3].toLocaleString()
                            }), (0,
                            N.jsx)("div", {
                                style: {
                                    width: "".concat(e[4], "%")
                                }
                            })]
                        }), (0,
                        N.jsx)("div", {
                            children: e[5] + " / " + a
                        })]
                    }, t)
                }
                ))]
            })
        }
          , ke = a(5909)
          , Se = a(1349)
          , Ne = "TopList_toplist__THMnD"
          , Ze = function(e) {
            var t = e.top
              , a = e.cid
              , i = e.nav;
            return t ? (0,
            N.jsxs)("div", {
                className: Ne,
                children: [(0,
                N.jsxs)("h2", {
                    children: [(0,
                    N.jsx)(m.Z, {
                        cid: a
                    }), " Leaderboard"]
                }), (0,
                N.jsxs)("table", {
                    children: [(0,
                    N.jsx)("thead", {
                        children: (0,
                        N.jsxs)("tr", {
                            children: [(0,
                            N.jsx)("th", {
                                children: " "
                            }), (0,
                            N.jsx)("th", {
                                children: " "
                            }), (0,
                            N.jsx)("th", {
                                children: "Name"
                            }), (0,
                            N.jsx)("th", {
                                children: "Win"
                            }), (0,
                            N.jsx)("th", {
                                children: "Games"
                            })]
                        })
                    }), (0,
                    N.jsx)("tbody", {
                        children: t.map((function(e, t) {
                            return (0,
                            N.jsxs)("tr", {
                                children: [(0,
                                N.jsx)("td", {
                                    children: e[0]
                                }), (0,
                                N.jsx)("td", {
                                    children: (0,
                                    N.jsx)(ke.Z, {
                                        tier: e[5],
                                        division: e[6]
                                    })
                                }), (0,
                                N.jsx)("td", {
                                    children: (0,
                                    N.jsx)("a", {
                                        href: (0,
                                        o.K)(e[2], e[1]),
                                        children: e[1]
                                    })
                                }), (0,
                                N.jsxs)("td", {
                                    children: [Math.round(e[3]), "%"]
                                }), (0,
                                N.jsx)("td", {
                                    children: e[4]
                                }), (0,
                                N.jsxs)("td", {
                                    children: [(0,
                                    N.jsx)(Se.Z, {
                                        region: e[2]
                                    }), e[2].toUpperCase()]
                                })]
                            }, t)
                        }
                        ))
                    })]
                }), (0,
                N.jsxs)(u.Z, {
                    cid: a,
                    page: "leaderboard",
                    nav: i,
                    children: ["Click For Full ", (0,
                    N.jsx)(m.Z, {
                        cid: a
                    }), " Leaderboard"]
                })]
            }) : ""
        }
          , Ce = "TopStats_topstats__dP0aJ"
          , Le = function(e) {
            var t = e.cid
              , a = e.stats;
            return (0,
            N.jsxs)("div", {
                className: Ce,
                children: [(0,
                N.jsxs)("h2", {
                    children: ["Best on ", (0,
                    N.jsx)(m.Z, {
                        cid: t
                    }), (0,
                    N.jsx)("br", {}), "Last 7 Day Performance"]
                }), (0,
                N.jsxs)("h1", {
                    children: [a.topwin, "% Win Rate"]
                }), (0,
                N.jsxs)("p", {
                    children: ["Analyzing", (0,
                    N.jsxs)("strong", {
                        children: [" ", a.toppick.toLocaleString(), " "]
                    }), "games played by the top", (0,
                    N.jsxs)("strong", {
                        children: [" ", a.topcount, " "]
                    }), (0,
                    N.jsx)(m.Z, {
                        cid: t
                    }), " players worldwide over the last 7 days. The average rank of these top ", (0,
                    N.jsx)(m.Z, {
                        cid: t
                    }), " players was ", (0,
                    N.jsx)("strong", {
                        children: a.topelo
                    }), "."]
                }), (0,
                N.jsxs)("p", {
                    children: ["Taking into account win rate and summoner rank ", (0,
                    N.jsx)(m.Z, {
                        cid: t
                    }), " is ranked ", (0,
                    N.jsx)("strong", {
                        children: a.toprank
                    }), " amongst all champions in the hands of an expert."]
                }), (0,
                N.jsxs)("p", {
                    children: ["Maximum 50 summoners are used per region with a minimum of Diamond IV and 50 games played on ", (0,
                    N.jsx)(m.Z, {
                        cid: t
                    }), " to be eligible."]
                })]
            })
        }
          , Fe = {
            xlarge: "ChampionSideBar_xlarge__6EG0f",
            large: "ChampionSideBar_large__sY-dg",
            triple: "ChampionSideBar_triple__xmhvO",
            double: "ChampionSideBar_double__guKw8"
        }
          , Re = function(e) {
            var t = e.width
              , a = e.nav
              , i = e.cid
              , n = e.path
              , s = e.data;
            return (0,
            N.jsxs)(N.Fragment, {
                children: ["medium" !== t && "small" !== t && "xsmall" !== t && (0,
                N.jsxs)("div", {
                    className: Fe[t],
                    children: [(0,
                    N.jsx)(_e, {
                        width: t
                    }), (0,
                    N.jsx)(oe, {
                        data: s.objective
                    }), (0,
                    N.jsx)(ae, {
                        width: t,
                        data: s.depth
                    }), (0,
                    N.jsx)(ye, {
                        width: t,
                        type: "wrlchart",
                        time: s.time,
                        timeWin: s.timeWin
                    }), (0,
                    N.jsx)(ye, {
                        width: t,
                        type: "wrdistchart",
                        time: s.time,
                        timeWin: s.timeWin
                    }), (0,
                    N.jsx)(je, {
                        width: t
                    }), (0,
                    N.jsx)(Le, {
                        cid: i,
                        stats: s.topStats
                    }), s.top && (0,
                    N.jsx)(Ze, {
                        cid: i,
                        top: s.top.slice(0, 12),
                        path: n,
                        nav: a
                    }), (0,
                    N.jsx)(ue, {
                        cid: i
                    }), (0,
                    N.jsx)(be, {
                        stats: s.stats,
                        cid: i,
                        count: s.statsCount
                    })]
                }), "medium" === t && (0,
                N.jsxs)("div", {
                    className: Fe.triple,
                    children: [(0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(Le, {
                            cid: i,
                            stats: s.topStats
                        }), s.top && (0,
                        N.jsx)(Ze, {
                            cid: i,
                            top: s.top.slice(0, 12),
                            path: n,
                            nav: a
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(ye, {
                            width: t,
                            type: "wrlchart",
                            time: s.time,
                            timeWin: s.timeWin
                        }), (0,
                        N.jsx)(ye, {
                            width: t,
                            type: "wrdistchart",
                            time: s.time,
                            timeWin: s.timeWin
                        }), (0,
                        N.jsx)(ae, {
                            width: t,
                            data: s.depth
                        }), (0,
                        N.jsx)(ue, {
                            cid: i
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(oe, {
                            data: s.objective
                        }), (0,
                        N.jsx)(be, {
                            stats: s.stats,
                            cid: i,
                            count: s.statsCount
                        })]
                    })]
                }), ("small" === t || "xsmall" === t) && (0,
                N.jsxs)("div", {
                    className: Fe.double,
                    children: [(0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(Le, {
                            cid: i,
                            stats: s.topStats
                        }), s.top && (0,
                        N.jsx)(Ze, {
                            cid: i,
                            top: s.top.slice(0, 12),
                            path: n,
                            nav: a
                        }), (0,
                        N.jsx)(oe, {
                            data: s.objective
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(ye, {
                            width: t,
                            type: "wrlchart",
                            time: s.time,
                            timeWin: s.timeWin
                        }), (0,
                        N.jsx)(ye, {
                            width: t,
                            type: "wrdistchart",
                            time: s.time,
                            timeWin: s.timeWin
                        }), (0,
                        N.jsx)(ae, {
                            width: t,
                            data: s.depth
                        }), (0,
                        N.jsx)(ue, {
                            cid: i
                        }), (0,
                        N.jsx)(be, {
                            stats: s.stats,
                            cid: i,
                            count: s.statsCount
                        })]
                    })]
                })]
            })
        }
          , Be = "ChampionVsStats_stats__7sEQ-"
          , Pe = function(e) {
            var t = e.data;
            return (0,
            N.jsxs)("div", {
                className: Be,
                children: [(0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsxs)("div", {
                        children: [t.wr.toFixed(2), "%"]
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::winrate",
                        english: "Win Rate"
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)("div", {
                        children: t.n.toLocaleString()
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "general::games",
                        english: "Games"
                    })]
                })]
            })
        }
          , Ge = "ChampionVsDescription_description__tu42P"
          , Ie = function(e) {
            var t = e.data
              , a = e.nav
              , i = t.wr
              , s = t.delta1
              , r = t.delta2
              , l = a.cid
              , d = a.vs
              , c = a.lane
              , h = a.defaultLane
              , m = a.vsLane
              , u = void 0 === m ? "" : m
              , x = a.defaultVsLane
              , _ = a.patch
              , g = (0,
            f.Z)(l)
              , v = (0,
            f.Z)(d)
              , j = "undefined" !== typeof i
              , w = j ? c.charAt(0).toUpperCase() + c.slice(1) : ""
              , b = j ? u.charAt(0).toUpperCase() + u.slice(1) : ""
              , k = (0,
            y.Z)([["heading::matchupbuildrunes", "Matchup Build & Runes"], ["heading::countermatchupbuildrunes", "Counter Matchup Build & Runes"], ["heading::buildrunes", "Build & Runes"], ["general::build", "Build"], ["general::guide", "Guide"], ["general::patch", "Patch"], ["general::forpatch", "for Patch"], ["general::vs", "vs"], ["general::versus", "versus"]])
              , S = g + " " + k["general::vs"] + " " + v
              , Z = g + " " + w + " " + k["general::vs"] + " " + v + " " + b;
            document.title = S + " " + k["general::build"] + " - LoLalytics " + g + " " + w + " " + k["general::vs"] + " " + v + " " + b + " " + k["heading::buildrunes"] + " " + k["general::guide"];
            var C = S + " " + k["general::build"] + " - LoLalytics has the best " + Z + " " + k["heading::buildrunes"] + "  " + k["general::guide"] + " " + k["general::forpatch"] + " " + _ + ". LoLalytics analyses millions of LoL matches on " + k["general::patch"] + " " + _ + " for the best " + Z + " LoL guide.";
            document.getElementsByTagName("meta")[1].content = C;
            var L = [];
            return c !== h && L.push("lane=" + c),
            u !== x && L.push("vslane=" + u),
            (0,
            o.o)("https://lolalytics.com/lol/" + (0,
            n.Xk)(l) + "/vs/" + (0,
            n.Xk)(d) + "/build/" + (L.length ? "?" + L.join("&") : "")),
            (0,
            N.jsxs)("div", {
                className: Ge,
                children: [(0,
                N.jsxs)("h1", {
                    children: [S, " ", k["general::build"]]
                }), (0,
                N.jsxs)("h2", {
                    children: [Z, " ", k["heading::buildrunes"]]
                }), j && (0,
                N.jsxs)("p", {
                    children: [(0,
                    N.jsx)(p.Z, {
                        cid: l,
                        lane: c,
                        nav: a
                    }), " wins against ", (0,
                    N.jsx)(p.Z, {
                        cid: d,
                        lane: u,
                        nav: a
                    }), " ", i.toFixed(2), "% of the time which is ", Math.abs(s).toFixed(2), "% ", s >= 0 ? "higher" : "lower", " against ", (0,
                    N.jsx)(p.Z, {
                        cid: d,
                        lane: u,
                        nav: a
                    }), " than the average opponent. After normalising both champions win rates ", (0,
                    N.jsx)(p.Z, {
                        cid: l,
                        lane: c,
                        nav: a
                    }), " wins against ", (0,
                    N.jsx)(p.Z, {
                        cid: d,
                        lane: u,
                        nav: a
                    }), " ", Math.abs(r.toFixed(2)), "% ", r.toFixed(2) >= 0 ? "more" : "less", " often than would be expected. Below is a detailed breakdown of the ", (0,
                    N.jsx)(p.Z, {
                        cid: l,
                        lane: c,
                        nav: a
                    }), " build & runes against ", (0,
                    N.jsx)(p.Z, {
                        cid: d,
                        lane: u,
                        nav: a
                    }), "."]
                })]
            })
        }
          , Te = a(4096)
          , He = a(2300)
          , Ee = a(9321)
          , We = "CircleSmall_wrapper__BMhGZ"
          , Xe = "CircleSmall_border__5c6i4"
          , Oe = "CircleSmall_laneborder__nNOnC"
          , Me = "CircleSmall_lane__E2fkf"
          , De = function(e) {
            var t = e.cid
              , a = void 0 !== t && t
              , i = e.lane;
            return (0,
            N.jsxs)("div", {
                className: We,
                children: [a && (0,
                N.jsx)(He.Z, {
                    id: a,
                    type: "champ100c",
                    toolTip: !1
                }), (0,
                N.jsx)("svg", {
                    className: Xe,
                    children: (0,
                    N.jsx)("circle", {
                        cx: "52",
                        cy: "52",
                        r: "52",
                        stroke: "#333",
                        strokeWidth: "2",
                        fill: "#111"
                    })
                }), (0,
                N.jsx)("div", {
                    className: Me,
                    children: (0,
                    N.jsx)(Ee.Z, {
                        lane: i
                    })
                }), (0,
                N.jsx)("svg", {
                    className: Oe,
                    children: (0,
                    N.jsx)("circle", {
                        cx: "23",
                        cy: "23",
                        r: "23",
                        stroke: "#333",
                        strokeWidth: "1",
                        fill: "#111"
                    })
                })]
            })
        }
          , Ae = a(1223)
          , qe = {
            header: "ChampionVsHeader_header__+8SkR",
            breadcrumbs: "ChampionVsHeader_breadcrumbs__+nDeH",
            xlarge: "ChampionVsHeader_xlarge__zIqej",
            large: "ChampionVsHeader_large__VTFiP",
            medium: "ChampionVsHeader_medium__838ag",
            small: "ChampionVsHeader_small__7FDcQ",
            xsmall: "ChampionVsHeader_xsmall__cNODM",
            tiny: "ChampionVsHeader_tiny__JfiTe",
            vsicons: "ChampionVsHeader_vsicons__qq77N",
            vs: "ChampionVsHeader_vs__a84PM"
        }
          , Ue = function(e) {
            var t = e.nav
              , a = e.data
              , i = e.width
              , n = e.loading
              , s = e.adReady
              , r = t || !1
              , l = r.cid
              , d = r.lane
              , o = r.vs
              , h = r.vsLane;
            return o ? (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsxs)("div", {
                    className: qe.header,
                    children: [(0,
                    N.jsx)("div", {
                        className: qe.breadcrumbs,
                        children: (0,
                        N.jsx)(c.Z, {
                            nav: t
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: qe[i],
                        children: ["tiny" !== i && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsxs)("div", {
                                children: [(0,
                                N.jsxs)("div", {
                                    className: qe.vsicons,
                                    children: [(0,
                                    N.jsx)(De, {
                                        cid: l,
                                        lane: d
                                    }), (0,
                                    N.jsxs)("div", {
                                        className: qe.vs,
                                        children: ["vs", (0,
                                        N.jsx)("br", {}), (0,
                                        N.jsx)(Te.Z, {
                                            cid: o,
                                            vs: l,
                                            lane: h,
                                            vsLane: d,
                                            nav: t,
                                            children: (0,
                                            N.jsx)(Ae.Z, {})
                                        })]
                                    }), (0,
                                    N.jsx)(De, {
                                        cid: o,
                                        lane: h
                                    })]
                                }), !n && (0,
                                N.jsx)(Pe, {
                                    data: a
                                })]
                            }), (0,
                            N.jsx)("div", {
                                children: (0,
                                N.jsx)(Ie, {
                                    data: a,
                                    nav: t
                                })
                            }), (0,
                            N.jsx)(T.Z, {
                                width: i,
                                loading: s
                            })]
                        }), "tiny" === i && (0,
                        N.jsxs)(N.Fragment, {
                            children: [(0,
                            N.jsxs)("div", {
                                className: qe.vsicons,
                                children: [(0,
                                N.jsx)(De, {
                                    cid: l,
                                    lane: d
                                }), (0,
                                N.jsxs)("div", {
                                    className: qe.vs,
                                    children: ["vs", (0,
                                    N.jsx)("br", {}), (0,
                                    N.jsx)(Te.Z, {
                                        cid: o,
                                        vs: l,
                                        lane: h,
                                        vsLane: d,
                                        nav: t,
                                        children: (0,
                                        N.jsx)(Ae.Z, {})
                                    })]
                                }), (0,
                                N.jsx)(De, {
                                    cid: o,
                                    lane: h
                                })]
                            }), (0,
                            N.jsx)(Ie, {
                                data: a,
                                nav: t
                            }), !n && (0,
                            N.jsx)(Pe, {
                                data: a
                            })]
                        })]
                    })]
                }), "tiny" !== i && "xsmall" !== i && "small" !== i && (0,
                N.jsx)(I.Z, {
                    width: i,
                    loading: n
                })]
            }) : (0,
            N.jsx)(N.Fragment, {})
        }
          , ze = "ButtonSet_wrapper__33xGK"
          , Ve = "ButtonSet_active__N4h2h"
          , Ye = function(e) {
            var t = e.buttons
              , a = e.active
              , i = e.handleClick
              , n = e.offset
              , s = void 0 === n ? 0 : n;
            return (0,
            N.jsx)("div", {
                className: ze,
                children: t.map((function(e, t) {
                    return (0,
                    N.jsx)("div", {
                        className: t + s === a ? Ve : "",
                        "data-id": t + s,
                        onClick: i,
                        children: e
                    }, t)
                }
                ))
            })
        }
          , Qe = "CounterButtons_set1__bpfm8"
          , Ke = "CounterButtons_set2__tbuVb"
          , Je = "CounterButtons_set__99iaF"
          , $e = function(e) {
            var t = e.width
              , a = e.active
              , i = e.handleClick
              , n = "tiny" === t || "xsmall" === t ? "small" : "big"
              , s = {
                small: {
                    counters: [["Common", "buttons::counters::common"], ["Strong", "buttons::counters::strong"], ["Weak", "buttons::counters::weak"], ["Delta", "general::delta"]],
                    synergy: [["Common", "buttons::synergy::common"], ["Good", "buttons::synergy::good"], ["Bad", "buttons::synergy::bad"], ["Delta", "buttons::synergy::synergy"], ["Normalised Delta", "buttons::synergy::normaliseddelta"]]
                },
                big: {
                    counters: [["Common Matchups", "buttons::counters::commonmatchups"], ["Strong Against", "buttons::counters::strongagainst"], ["Weak Against", "buttons::counters::weakagainst"], ["Delta", "general::delta"]],
                    synergy: [["Common Teammates", "buttons::synergy::commonteammates"], ["Good Synergy", "buttons::synergy::goodsynergy"], ["Bad Synergy", "buttons::synergy::badsynergy"], ["Synergy Delta", "buttons::synergy::synergydelta"], ["Normalised Synergy Delta", "buttons::synergy::normalisedsynergydelta"]]
                }
            };
            return (0,
            N.jsxs)("div", {
                className: Je,
                children: [(0,
                N.jsxs)("div", {
                    className: Qe,
                    children: [(0,
                    N.jsx)("div", {
                        children: "Counters"
                    }), (0,
                    N.jsx)(Ye, {
                        buttons: s[n].counters.map((function(e, t) {
                            return (0,
                            N.jsx)(L.Z, {
                                english: e[0],
                                trans: e[1]
                            })
                        }
                        )),
                        active: a,
                        handleClick: i
                    })]
                }), (0,
                N.jsxs)("div", {
                    className: Ke,
                    children: [(0,
                    N.jsx)("div", {
                        children: "Synergy"
                    }), (0,
                    N.jsx)(Ye, {
                        buttons: s[n].synergy.map((function(e, t) {
                            return (0,
                            N.jsx)(L.Z, {
                                english: e[0],
                                trans: e[1]
                            })
                        }
                        )),
                        offset: 4,
                        active: a,
                        handleClick: i
                    })]
                })]
            })
        }
          , et = a(3094)
          , tt = {
            spell16: "Spell_spell16__OfKoZ",
            spell19: "Spell_spell19__yTdvx",
            spell24: "Spell_spell24__kPmMR",
            spell32br: "Spell_spell32br__jxm+J",
            spell48br: "Spell_spell48br__SjV0k",
            loading: "Spell_loading__dV-hM"
        }
          , at = {
            21: "Barrier",
            13: "Clarity",
            1: "Cleanse",
            3: "Exhaust",
            4: "Flash",
            6: "Ghost",
            7: "Heal",
            14: "Ignite",
            32: "Mark",
            31: "Poro Toss",
            11: "Smite",
            12: "Teleport",
            30: "To the King!",
            54: "Placeholder",
            55: "Placeholder and Attack-Smite"
        }
          , it = function(e) {
            var t = e.id
              , a = e.type
              , n = (0,
            i.useContext)(H.a)
              , s = n.spell && n.spell[t] ? n.spell[t] : "Loading...";
            return (0,
            N.jsx)(W.ZP, {
                content: (0,
                N.jsx)("div", {
                    className: n.spell && n.spell[t] ? "" : tt.loading,
                    dangerouslySetInnerHTML: {
                        __html: s
                    }
                }),
                onShow: function() {
                    n.showSpell || n.setShowSpell(!0)
                },
                children: (0,
                N.jsx)("img", {
                    className: tt[a],
                    src: "https://cdn5.lolalytics.com/spell64/".concat(t, ".webp"),
                    alt: at[t]
                })
            })
        }
          , nt = a(317)
          , st = "Cell_delta__bPet0"
          , rt = "Cell_time__rKQVv"
          , lt = "Cell_delta2__IdDRt"
          , dt = "Cell_pick__EX924"
          , ct = "Cell_games__REnc0"
          , ot = "Cell_noboots__z6tlR"
          , ht = "Cell_cell__383UV"
          , mt = "Cell_spells__jotTr"
          , ut = function(e) {
            var t = e.data
              , a = e.nav
              , i = e.type
              , n = e.vsLane;
            if ("counter" === i) {
                var s = {
                    type: "counter",
                    cid: a.cid,
                    wr: Number(t[1]).toFixed(2),
                    d1: Number(t[4]).toFixed(2),
                    d2: Number(t[5]).toFixed(2)
                };
                return (0,
                N.jsxs)("div", {
                    className: ht,
                    children: [(0,
                    N.jsx)(Te.Z, {
                        cid: a.cid,
                        lane: a.lane,
                        vs: t[0],
                        vsLane: n,
                        nav: a,
                        children: (0,
                        N.jsx)(He.Z, {
                            id: t[0],
                            type: "champ48br",
                            data: s
                        })
                    }), (0,
                    N.jsx)(nt.Z, {
                        wr: Number(t[1]).toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: st,
                        children: t[4]
                    }), (0,
                    N.jsx)("div", {
                        className: lt,
                        children: t[5]
                    }), (0,
                    N.jsx)("div", {
                        className: dt,
                        children: t[2]
                    }), (0,
                    N.jsx)("div", {
                        className: ct,
                        children: t[3]
                    })]
                })
            }
            if ("synergy" === i) {
                var r = {
                    type: "synergy",
                    cid: a.cid,
                    wr: Number(t[1]).toFixed(2),
                    d1: Number(t[4]).toFixed(2)
                };
                return (0,
                N.jsxs)("div", {
                    className: ht,
                    children: [(0,
                    N.jsx)(u.Z, {
                        cid: t[0],
                        lane: n,
                        nav: a,
                        children: (0,
                        N.jsx)(He.Z, {
                            id: t[0],
                            type: "champ48br",
                            data: r
                        })
                    }), (0,
                    N.jsx)(nt.Z, {
                        wr: Number(t[1]).toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: st,
                        children: Number(t[4]).toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: lt,
                        children: t[5].toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: dt,
                        children: t[2]
                    }), (0,
                    N.jsx)("div", {
                        className: ct,
                        children: t[3]
                    })]
                })
            }
            if ("mythic" === i)
                return (0,
                N.jsxs)("div", {
                    className: ht,
                    children: [(0,
                    N.jsx)(u.Z, {
                        cid: a.cid,
                        lane: a.lane,
                        mythic: t[0],
                        nav: a,
                        children: (0,
                        N.jsx)(et.Z, {
                            id: t[0],
                            type: "item48br",
                            tipType: "item"
                        })
                    }), (0,
                    N.jsx)(nt.Z, {
                        wr: Number(t[1]).toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: dt,
                        children: Number(t[2]).toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: ct,
                        children: t[3].toLocaleString()
                    }), (0,
                    N.jsx)("div", {
                        className: rt,
                        children: t[4] && t[4]
                    })]
                });
            var l = [];
            return "spells" === i && (l[0] = Number(t[0].split("_")[0]),
            l[1] = Number(t[0].split("_")[1]),
            6 === l[1] && (l = [l[1], l[0]]),
            4 === l[1] && (l = [l[1], l[0]])),
            (0,
            N.jsxs)("div", {
                className: ht,
                children: ["spell" === i && (0,
                N.jsx)(it, {
                    id: t[0],
                    type: "spell48br",
                    tipType: "spell"
                }), "spells" === i && (0,
                N.jsxs)("div", {
                    className: mt,
                    children: [(0,
                    N.jsx)(it, {
                        id: l[0],
                        type: "spell48br",
                        tipType: "spell"
                    }), (0,
                    N.jsx)(it, {
                        id: l[1],
                        type: "spell48br",
                        tipType: "spell"
                    })]
                }), ("item" === i || "item2" === i || "item3" === i) && 9999 !== t[0] && (0,
                N.jsx)(et.Z, {
                    id: t[0],
                    type: "item48br",
                    tipType: "item"
                }), 9999 === t[0] && (0,
                N.jsxs)("div", {
                    className: ot,
                    children: ["No", (0,
                    N.jsx)("br", {}), "Boots"]
                }), (0,
                N.jsx)(nt.Z, {
                    wr: Number(t[1]).toFixed(2)
                }), (0,
                N.jsx)("div", {
                    className: dt,
                    children: Number(t[2]).toFixed(2)
                }), (0,
                N.jsx)("div", {
                    className: ct,
                    children: t[3].toLocaleString()
                }), (0,
                N.jsx)("div", {
                    className: rt,
                    children: t[4] && t[4]
                })]
            })
        }
          , pt = {
            spell: "PanelHeading_spell__wFB9N",
            spells: "PanelHeading_spells__zH4Bt",
            counter: "PanelHeading_counter__PmHic",
            synergy: "PanelHeading_synergy__fPsmK",
            counterd: "PanelHeading_counterd__RF-cW",
            synergyd: "PanelHeading_synergyd__ZG3io",
            item: "PanelHeading_item__TNGHj",
            item2: "PanelHeading_item2__oouhJ",
            item3: "PanelHeading_item3__SRrh0",
            mythic: "PanelHeading_mythic__XFkAq",
            itemset: "PanelHeading_itemset__VPJfV",
            subtitles: "PanelHeading_subtitles__CUCvh",
            counter_subtitle: "PanelHeading_counter_subtitle__zxBPE",
            synergy_subtitle: "PanelHeading_synergy_subtitle__AzIiJ",
            counterd_subtitle: "PanelHeading_counterd_subtitle__YkZ0v",
            synergyd_subtitle: "PanelHeading_synergyd_subtitle__9424g",
            item_subtitle: "PanelHeading_item_subtitle__Am93F",
            title: "PanelHeading_title__W0+w2",
            win: "PanelHeading_win__djeL1",
            time: "PanelHeading_time__jw5Ga",
            delta: "PanelHeading_delta__J6ggS",
            delta2: "PanelHeading_delta2__63EOm",
            pick: "PanelHeading_pick__9l+u8",
            games: "PanelHeading_games__lpiEl",
            spacer: "PanelHeading_spacer__G99VT"
        }
          , xt = function(e) {
            var t = e.title
              , a = e.title2
              , i = e.type
              , n = e.spacer
              , s = void 0 === n || n;
            return (0,
            N.jsxs)("div", {
                className: pt[i],
                children: [(0,
                N.jsx)("div", {
                    className: pt.title,
                    children: t
                }), a && (0,
                N.jsx)("div", {
                    className: pt[i + "_subtitle"],
                    children: a
                }), (0,
                N.jsxs)("div", {
                    className: pt.subtitles,
                    children: [(0,
                    N.jsx)("div", {
                        className: pt.win,
                        children: (0,
                        N.jsx)(L.Z, {
                            trans: "general::winrate",
                            english: "Win Rate",
                            maxChars: 10
                        })
                    }), "counter" === i && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsxs)("div", {
                            className: pt.delta,
                            children: [(0,
                            N.jsx)(L.Z, {
                                trans: "general::delta",
                                english: "Delta",
                                maxChars: 10
                            }), " 1", (0,
                            N.jsx)(C.Z, {
                                name: "delta1",
                                type: "inline"
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: pt.delta2,
                            children: [(0,
                            N.jsx)(L.Z, {
                                trans: "general::delta",
                                english: "Delta",
                                maxChars: 10
                            }), " 2", (0,
                            N.jsx)(C.Z, {
                                name: "delta2",
                                type: "inline"
                            })]
                        })]
                    }), "synergy" === i && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsxs)("div", {
                            className: pt.delta,
                            children: [(0,
                            N.jsx)(L.Z, {
                                trans: "general::delta",
                                english: "Delta",
                                maxChars: 10
                            }), " 1", (0,
                            N.jsx)(C.Z, {
                                name: "deltasyn",
                                type: "inline"
                            })]
                        }), (0,
                        N.jsxs)("div", {
                            className: pt.delta2,
                            children: [(0,
                            N.jsx)(L.Z, {
                                trans: "general::delta",
                                english: "Delta",
                                maxChars: 10
                            }), " 2", (0,
                            N.jsx)(C.Z, {
                                name: "deltasyn2",
                                type: "inline"
                            })]
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: pt.pick,
                        children: (0,
                        N.jsx)(L.Z, {
                            trans: "general::pickrate",
                            english: "Pick Rate",
                            maxChars: 10
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: pt.games,
                        children: (0,
                        N.jsx)(L.Z, {
                            trans: "general::games",
                            english: "Games",
                            maxChars: 15
                        })
                    }), ("item" === i || "item3" === i || "mythic" === i) && (0,
                    N.jsx)("div", {
                        className: pt.time,
                        children: (0,
                        N.jsx)(L.Z, {
                            trans: "general::time",
                            english: "Time",
                            maxChars: 10
                        })
                    }), s && (0,
                    N.jsx)("div", {
                        className: pt.spacer
                    })]
                })]
            })
        }
          , _t = "Panel_data__dtE8F"
          , gt = function(e) {
            var t = e.data
              , a = void 0 === t ? [] : t
              , n = e.nav
              , s = void 0 !== n && n
              , r = e.type
              , l = e.title
              , d = e.title2
              , c = e.vsLane
              , o = void 0 !== c && c
              , h = e.width
              , m = {
                xlarge: 17,
                large: 12,
                medium: 17,
                small: 17,
                xsmall: 12,
                tiny: 10
            }
              , u = (0,
            i.useState)(!1)
              , p = (0,
            U.Z)(u, 2)
              , x = p[0]
              , _ = p[1]
              , g = (0,
            i.useState)(0)
              , v = (0,
            U.Z)(g, 2)
              , j = v[0]
              , f = v[1]
              , y = (0,
            i.useRef)(null)
              , w = function(e) {
                return y.current.scrollLeft = window.dragX.panelX - e.clientX + window.dragX.mouseX
            }
              , b = function e(t) {
                y.current.style.cursor = "grab",
                document.removeEventListener("mousemove", w),
                document.removeEventListener("mouseup", e)
            };
            if (!a.length)
                return (0,
                N.jsx)("div", {});
            var k = [];
            k = x ? a.slice(Math.max(0, parseInt(6 * j - 9)), parseInt(6 * j + m[h] + 9)) : a.slice(0, m[h] + 1);
            var S = 54 * a.length
              , Z = Math.max(0, 54 * j * 6 - 486);
            return (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(xt, {
                    title: l,
                    title2: d,
                    type: r
                }), (0,
                N.jsx)("div", {
                    ref: y,
                    className: _t,
                    onScroll: function(e) {
                        x || _(!0);
                        var t = parseInt(y.current.scrollLeft / 54 / 6);
                        j !== t && f(t)
                    },
                    onMouseDown: function(e) {
                        x || _(!0),
                        window.dragX = {
                            mouseX: e.clientX,
                            panelX: y.current.scrollLeft
                        },
                        document.addEventListener("mousemove", w),
                        document.addEventListener("mouseup", b),
                        y.current.style.cursor = "grabbing"
                    },
                    children: (0,
                    N.jsx)("div", {
                        style: {
                            width: S,
                            paddingLeft: Z
                        },
                        children: k.length && k.map((function(e, t) {
                            return (0,
                            N.jsx)(ut, {
                                nav: s,
                                data: e,
                                type: r,
                                vsLane: o
                            }, t)
                        }
                        ))
                    })
                })]
            })
        }
          , vt = {
            counters: "CountersPanel_counters__U8zc5"
        }
          , jt = function(e) {
            var t = e.data
              , a = e.width
              , n = e.page
              , s = e.vsLane
              , r = e.nav
              , l = e.pick
              , d = e.winRate
              , c = e.averageWR
              , o = (0,
            i.useRef)(null)
              , h = "undefined" !== typeof t
              , m = z(o) && h
              , u = [];
            if (m) {
                var p = c - 50;
                u = n < 4 ? t.map((function(e) {
                    return [e[0], (e[2] / e[1] * 100).toFixed(2), (e[1] / l * 100).toFixed(2), e[1].toLocaleString(), (e[2] / e[1] * 100 + e[3] - 100).toFixed(2), (e[2] / e[1] * 100 - 100 / (1 + Math.pow(10, Math.log10(100 / d - 1) - Math.log10(100 / e[3] - 1))) - p).toFixed(2)]
                }
                )) : t.map((function(e) {
                    return [e[0], (e[2] / e[1] * 100).toFixed(2), (e[1] / l * 100).toFixed(2), e[1].toLocaleString(), (e[2] / e[1] * 100 - (d + e[3]) / 2).toFixed(2), e[2] / e[1] * 100 - 100 / (1 + Math.pow(10, Math.log10(100 / e[3] - 1) + Math.log10(100 / d - 1))) + p]
                }
                )),
                (n > 0 && n < 4 || n > 4) && (u = u.filter((function(e) {
                    return e[2] >= .5
                }
                ))),
                1 !== n && 5 !== n || u.sort((function(e, t) {
                    return t[1] - e[1]
                }
                )),
                2 !== n && 6 !== n || u.sort((function(e, t) {
                    return e[1] - t[1]
                }
                )),
                3 !== n && 7 !== n || u.sort((function(e, t) {
                    return t[4] - e[4]
                }
                )),
                8 === n && u.sort((function(e, t) {
                    return t[5] - e[5]
                }
                ))
            }
            return (0,
            N.jsx)("div", {
                className: vt[h ? "counters" : ""],
                ref: o,
                children: m && (0,
                N.jsx)(gt, {
                    width: a,
                    nav: r,
                    data: u,
                    type: n < 4 ? "counter" : "synergy",
                    title: (0,
                    N.jsx)(Ee.Z, {
                        lane: s
                    }),
                    title2: n < 4 ? "Counter" : "Synergy",
                    vsLane: s
                })
            })
        }
          , ft = function(e) {
            var t = e.width
              , a = e.team
              , n = e.enemy
              , s = e.nav
              , r = e.pick
              , l = e.winRate
              , d = e.averageWR
              , c = (0,
            i.useState)(0)
              , o = (0,
            U.Z)(c, 2)
              , h = o[0]
              , m = o[1];
            return (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)($e, {
                    width: t,
                    active: h,
                    handleClick: function(e) {
                        return m(parseInt(e.target.getAttribute("data-id")))
                    }
                }), ["top", "jungle", "middle", "bottom", "support"].map((function(e, i) {
                    return (0,
                    N.jsx)(jt, {
                        width: t,
                        nav: s,
                        data: h < 4 ? n[i] : a[i],
                        page: h,
                        winRate: l,
                        averageWR: d,
                        pick: r,
                        vsLane: e
                    }, i)
                }
                ))]
            })
        }
          , yt = a(2392)
          , wt = a(3433)
          , bt = {
            wrapper: "GraphLegend_wrapper__ysFCO",
            legend: "GraphLegend_legend__wkZdh",
            all: "GraphLegend_all__Bw6UT",
            diamond_plus: "GraphLegend_diamond_plus__Qn2z4",
            emerald: "GraphLegend_emerald__jnhAF",
            platinum: "GraphLegend_platinum__6LRmO",
            gold: "GraphLegend_gold__VYKto",
            silver: "GraphLegend_silver__sALA5",
            bronze: "GraphLegend_bronze__JLMlL",
            iron: "GraphLegend_iron__u+d0J",
            today: "GraphLegend_today__vlQJQ",
            smooth: "GraphLegend_smooth__4Q5mB",
            max: "GraphLegend_max__GjMU6",
            fortnight: "GraphLegend_fortnight__T9p9K",
            week: "GraphLegend_week__9BFx9",
            greyfilter: "GraphLegend_greyfilter__LDCTz"
        }
          , kt = function(e) {
            var t = e.tiers
              , a = e.handleClick
              , i = (e.width,
            {
                all: "Overall",
                diamond_plus: "Diamond+",
                emerald: "Emerald",
                platinum: "Platinum",
                gold: "Gold",
                silver: "Silver",
                bronze: "Bronze",
                iron: "Iron",
                max: "Max Days",
                fortnight: "14 Days",
                week: "7 Days",
                today: "Today",
                smooth: "Smooth"
            })
              , n = function(e) {
                return a(e)
            };
            return (0,
            N.jsxs)("div", {
                className: bt.wrapper,
                children: [(0,
                N.jsx)("div", {
                    className: bt.title,
                    children: "LEGEND:"
                }), (0,
                N.jsx)("div", {
                    className: bt.legend,
                    children: Object.keys(i).map((function(e, a) {
                        return (0,
                        N.jsx)("div", {
                            className: t[e] ? bt[e] : bt.greyfilter,
                            "data-id": e,
                            "data-id2": a,
                            onClick: n,
                            children: i[e]
                        }, a)
                    }
                    ))
                })]
            })
        }
          , St = {
            graph: "Graph_graph__qgc3I",
            title_win: "Graph_title_win__jlOCk",
            title_pick: "Graph_title_pick__WUVw8",
            title_games: "Graph_title_games__a97Yi",
            title_ban: "Graph_title_ban__B+V70",
            line_all: "Graph_line_all__KdM4S",
            line_diamond_plus: "Graph_line_diamond_plus__Xvkkv",
            line_emerald: "Graph_line_emerald__Frb2x",
            line_platinum: "Graph_line_platinum__E+RiL",
            line_gold: "Graph_line_gold__HOZ-Y",
            line_silver: "Graph_line_silver__3xQle",
            line_bronze: "Graph_line_bronze__RcKog",
            line_iron: "Graph_line_iron__XEKOZ",
            dot_all: "Graph_dot_all__k8Bjn",
            dot_diamond_plus: "Graph_dot_diamond_plus__lBB74",
            dot_emerald: "Graph_dot_emerald__08tuW",
            dot_platinum: "Graph_dot_platinum__aLTw-",
            dot_gold: "Graph_dot_gold__QGTOj",
            dot_silver: "Graph_dot_silver__FwK3h",
            dot_bronze: "Graph_dot_bronze__FRQfe",
            dot_iron: "Graph_dot_iron__xxSpw",
            tip_all: "Graph_tip_all__RBuOS",
            tip_diamond_plus: "Graph_tip_diamond_plus__kCykP",
            tip_emerald: "Graph_tip_emerald__496fu",
            tip_platinum: "Graph_tip_platinum__YxbzU",
            tip_gold: "Graph_tip_gold__kdK6d",
            tip_silver: "Graph_tip_silver__TNASs",
            tip_bronze: "Graph_tip_bronze__N87nN",
            tip_iron: "Graph_tip_iron__UmB0q",
            x: "Graph_x__-zt4e",
            y: "Graph_y__48Jbj"
        }
          , Nt = function(e) {
            var t = e.graphKey
              , a = e.data
              , n = e.type
              , s = e.visible
              , r = e.cid
              , l = e.width
              , d = (0,
            i.useRef)(null)
              , c = (0,
            i.useRef)(null)
              , o = (0,
            i.useState)([])
              , h = (0,
            U.Z)(o, 2)
              , m = h[0]
              , u = h[1]
              , p = (0,
            i.useState)([])
              , x = (0,
            U.Z)(p, 2)
              , _ = x[0]
              , g = x[1]
              , v = (0,
            i.useState)(l)
              , j = (0,
            U.Z)(v, 2)
              , y = j[0]
              , w = j[1]
              , b = z(d)
              , k = Y("general::winrate", "Win Rate")
              , S = Y("general::pickrate", "Pick Rate")
              , Z = Y("general::gamecount", "Game Count")
              , C = Y("general::banrate", "Ban Rate")
              , L = (0,
            f.Z)(r)
              , F = (0,
            i.useMemo)((function() {
                return {
                    win: k,
                    pick: S,
                    games: Z,
                    ban: C,
                    name: L
                }
            }
            ), [k, S, Z, C, L]);
            return (0,
            i.useEffect)((function() {
                if (b && a && (m.length !== s.length || t !== _ || l !== y)) {
                    u(s),
                    g(t),
                    w(l);
                    var e = d.current.offsetWidth
                      , i = []
                      , r = [];
                    a.forEach((function(e) {
                        return e.forEach((function(e) {
                            i.push(e.v),
                            r.push(e.d)
                        }
                        ))
                    }
                    )),
                    i.sort((function(e, t) {
                        return e - t
                    }
                    ));
                    var o = Math.floor(i[0])
                      , h = Math.ceil(i.pop());
                    r.sort((function(e, t) {
                        return e - t
                    }
                    ));
                    var p = r[0]
                      , x = r.pop()
                      , v = (x - p) / 864e5 >= 20 ? 3 : 2
                      , j = {
                        top: 30,
                        right: 16,
                        bottom: 40,
                        left: 34
                    };
                    "games" === n && (j.left = 45);
                    var f = e - j.left - j.right
                      , k = 290 - j.top - j.bottom
                      , S = B.Xf().domain([p, x]).range([0, f])
                      , N = B.BYU().domain([o, h]).range([k, 0])
                      , Z = B.jvg().x((function(e) {
                        return S(e.d)
                    }
                    )).y((function(e) {
                        return N(e.v)
                    }
                    )).curve(B.FdL)
                      , C = B.Ys(d.current).html("").append("svg").attr("width", f + j.left + j.right).attr("height", k + j.top + j.bottom).append("g").attr("transform", "translate(" + j.left + "," + j.top + ")");
                    C.append("g").attr("class", St.x).attr("transform", "translate(0," + k + ")").call(B.LLu(S).tickFormat(B.i$Z("%d-%b")).ticks(B.rr1.every(v))),
                    C.append("text").attr("x", f / 2).attr("y", 0 - 1 * j.top / 3).attr("class", St["title_" + n]).text(F.name + " " + F[n]),
                    C.selectAll("." + St.x + " text").attr("transform", (function() {
                        return "translate(" + -2 * this.getBBox().height + "," + this.getBBox().height + ")rotate(-45)"
                    }
                    )),
                    C.append("g").attr("class", St.y).call(B.y4O(N));
                    for (var L = B.i$Z("%e %b"), R = B.Ys(c.current).style("opacity", 0), P = function(e) {
                        C.append("path").datum(a[e]).attr("class", St["line_" + s[e]]).attr("d", Z),
                        C.selectAll(".dot" + e).data(a[e]).enter().append("circle").attr("class", St["dot_" + s[e]]).attr("cx", (function(e) {
                            return S(e.d)
                        }
                        )).attr("cy", (function(e) {
                            return N(e.v)
                        }
                        )).attr("r", 2).on("mouseover", (function(t, a) {
                            B.Ys(this).transition().duration("100").attr("r", 4),
                            R.transition().duration(200).style("opacity", .9),
                            R.html(L(a.d) + "<br/>" + a.v.toLocaleString()).attr("class", St["tip_" + s[e]]).style("left", this.getBoundingClientRect().left - d.current.getBoundingClientRect().left - 36 + "px").style("top", this.getBoundingClientRect().top - d.current.getBoundingClientRect().top - 290 + "px")
                        }
                        )).on("mouseout", (function() {
                            B.Ys(this).transition().duration("100").attr("r", 2),
                            R.transition().duration(500).style("opacity", 0)
                        }
                        ))
                    }, G = 0; G < s.length; G++)
                        P(G)
                }
            }
            ), [b, a, n, s, t, m, _, F, l, y]),
            (0,
            N.jsxs)("div", {
                className: St.graph,
                children: [(0,
                N.jsx)("div", {
                    ref: d
                }), (0,
                N.jsx)("div", {
                    ref: c
                })]
            })
        }
          , Zt = {
            xlarge4: "Graphs_xlarge4__zSIat",
            xlarge3: "Graphs_xlarge3__TtNT8",
            large4: "Graphs_large4__bB2Qu",
            large3: "Graphs_large3__EhrYe",
            medium4: "Graphs_medium4__3g9i5",
            medium3: "Graphs_medium3__XzJqf",
            small4: "Graphs_small4__Dsk-X",
            small3: "Graphs_small3__L7TXL",
            xsmall4: "Graphs_xsmall4__jcz9T",
            xsmall3: "Graphs_xsmall3__e78-2",
            tiny4: "Graphs_tiny4__3egyA",
            tiny3: "Graphs_tiny3__fSp3J"
        }
          , Ct = ["iron", "bronze", "silver", "gold", "platinum", "emerald", "diamond_plus", "all"]
          , Lt = function(e) {
            var t = e.data
              , a = e.lane
              , n = e.mode
              , s = e.bans
              , r = e.cid
              , l = e.region
              , d = e.width
              , c = s ? ["win", "pick", "games", "ban"] : ["win", "pick", "games"]
              , o = (0,
            i.useState)({
                all: 0,
                diamond_plus: 1,
                emerald: 1,
                platinum: 1,
                gold: 1,
                silver: 1,
                bronze: 0,
                iron: 0,
                max: 1,
                week: 0,
                fortnight: 0,
                today: 0,
                smooth: 1
            })
              , h = (0,
            U.Z)(o, 2)
              , m = h[0]
              , u = h[1]
              , p = (0,
            i.useState)()
              , x = (0,
            U.Z)(p, 2)
              , _ = x[0]
              , g = x[1]
              , v = n + "_" + r + "_" + a + "_" + l;
            if (!t)
                return (0,
                N.jsx)(N.Fragment, {});
            var j = Ct.filter((function(e) {
                return m[e]
            }
            ))
              , f = B.Z1g("%Y-%m-%d")
              , y = (0,
            wt.Z)(t.dates)
              , w = 0;
            0 === m.today && y.pop(),
            1 === m.week && (w = y.length - 7,
            y = y.slice(-7)),
            1 === m.fortnight && (w = y.length - 14,
            y = y.slice(-14));
            var b = c.map((function(e) {
                return j.filter((function(e) {
                    return m[e]
                }
                )).map((function(a) {
                    return y.map((function(i, n) {
                        var s = f(i);
                        return "win" === e && 1 === m.smooth ? {
                            d: s,
                            v: t.wrs[a][n + w]
                        } : "win" === e ? {
                            d: s,
                            v: t.wr[a][n + w]
                        } : "pick" === e ? {
                            d: s,
                            v: t.pr[a][n + w]
                        } : "games" === e ? {
                            d: s,
                            v: t.n[a][n + w]
                        } : {
                            d: s,
                            v: t.br[a][n + w]
                        }
                    }
                    )).sort((function(e, t) {
                        return e.d - t.d
                    }
                    ))
                }
                ))
            }
            ));
            return (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(kt, {
                    tiers: m,
                    handleClick: function(e) {
                        var t = m
                          , a = e.target.getAttribute("data-id");
                        "max" !== a && "week" !== a && "fortnight" !== a || (t.week = 0,
                        t.max = 0,
                        t.fortnight = 0),
                        t[a] = t[a] ? 0 : 1,
                        u(t),
                        g(JSON.stringify(t))
                    },
                    width: d
                }), y.length > 1 && (0,
                N.jsxs)("div", {
                    className: Zt[d + (s ? "4" : "3")],
                    children: [(0,
                    N.jsx)(Nt, {
                        type: "win",
                        data: b[0],
                        visible: j,
                        graphKey: v + _,
                        bans: s,
                        cid: r,
                        width: d
                    }), (0,
                    N.jsx)(Nt, {
                        type: "pick",
                        data: b[1],
                        visible: j,
                        graphKey: v + _,
                        bans: s,
                        cid: r,
                        width: d
                    }), (0,
                    N.jsx)(Nt, {
                        type: "games",
                        data: b[2],
                        visible: j,
                        graphKey: v + _,
                        bans: s,
                        cid: r,
                        width: d
                    }), s && (0,
                    N.jsx)(Nt, {
                        type: "ban",
                        data: b[3],
                        visible: j,
                        graphKey: v + _,
                        bans: s,
                        cid: r,
                        width: d
                    })]
                })]
            })
        }
          , Ft = a(6176);
        var Rt = function(e, t) {
            if (!t)
                return [];
            var a, i, n, s, r, l, d = {}, c = [];
            if (e <= 4) {
                for (i in t["itemSet" + (e + 1)])
                    c.push([i, t["itemSet" + (e + 1)][i][0], t["itemSet" + (e + 1)][i][1]]);
                c.sort((function(e, t) {
                    return t[1] - e[1]
                }
                ))
            } else if (e >= 13 && e <= 18) {
                for (i in t["itemBootSet" + (e - 12)])
                    c.push([i, t["itemBootSet" + (e - 12)][i][0], t["itemBootSet" + (e - 12)][i][1]]);
                c.sort((function(e, t) {
                    return t[1] - e[1]
                }
                ))
            } else if (e >= 5 && e <= 8 || e >= 19 && e <= 23) {
                for (e <= 8 ? (l = "itemSet",
                n = e - 3,
                r = 5) : (l = "itemBootSet",
                n = e - 17,
                r = 6),
                a = n; a <= r; a++)
                    if ("undefined" !== typeof t[l + a])
                        for (i in t[l + a])
                            "undefined" === typeof d[i.substr(0, 5 * n - 1)] && (d[i.substr(0, 5 * n - 1)] = [0, 0]),
                            d[i.substr(0, 5 * n - 1)][0] += t[l + a][i][0],
                            d[i.substr(0, 5 * n - 1)][1] += t[l + a][i][1];
                for (i in d)
                    c.push([i, d[i][0], d[i][1]]);
                c.sort((function(e, t) {
                    return t[1] - e[1]
                }
                ))
            } else {
                e <= 12 ? (l = "itemSet",
                n = e - 7,
                s = 5) : (l = "itemBootSet",
                n = e - 23,
                s = 6);
                var o = {};
                for (a = s; a >= 2; a--) {
                    var h = l + a;
                    for (i in t[h]) {
                        var m = i.substr(0, 5 * (a - 1) - 1);
                        t[h] && "undefined" !== typeof t[h][i] && ("undefined" === typeof o[m] && (o[m] = 0),
                        o[m] += t[h][i][0])
                    }
                }
                var u = {};
                for (a = n; a >= 1; a--) {
                    var p = l + a;
                    if ("undefined" !== typeof t[p])
                        for (i in t[l + n]) {
                            "undefined" === typeof d[i] && (d[i] = [0, 0]);
                            var x = i.substr(0, 5 * a - 1);
                            if (t[p] && "undefined" !== typeof t[p][x]) {
                                var _ = i.substr(0, 5 * (a + 1) - 1);
                                u[i] = a === n ? 1 : "undefined" !== typeof t[l + (a + 1)][_] ? t[l + (a + 1)][_][0] / o[x] * u[i] : 0,
                                d[i][0] += parseInt(t[p][x][0] * u[i]),
                                d[i][1] += parseInt(t[p][x][1] * u[i])
                            }
                        }
                }
                for (i in d)
                    d[i][0] > 100 && c.push([i, d[i][0], d[i][1]]);
                c.sort((function(e, t) {
                    return t[2] / t[1] - e[2] / e[1]
                }
                ))
            }
            return c
        }
          , Bt = "FilterCell_show__57l+N"
          , Pt = "FilterCell_hide__6Pymg"
          , Gt = function(e) {
            var t = e.data
              , a = e.handleClick
              , i = e.excluded;
            return (0,
            N.jsx)("div", {
                className: i ? Pt : Bt,
                onClick: a,
                children: (0,
                N.jsx)(et.Z, {
                    id: t[0],
                    type: "item32br"
                })
            })
        }
          , It = "Filter_panel__N3Jiz"
          , Tt = "Filter_data__AwLRi"
          , Ht = "Filter_clear__2tEIY"
          , Et = function(e) {
            var t = e.data
              , a = void 0 === t ? [] : t
              , i = e.handleClick
              , n = e.excluded;
            return a.length ? (0,
            N.jsxs)("div", {
                className: It,
                children: [(0,
                N.jsx)("div", {
                    children: n.length > 0 && (0,
                    N.jsx)("div", {
                        className: Ht,
                        onClick: i,
                        "data-id": "clear",
                        children: "X"
                    })
                }), (0,
                N.jsx)("div", {
                    className: Tt,
                    children: a.length && a.map((function(e, t) {
                        return (0,
                        N.jsx)(Gt, {
                            data: e,
                            handleClick: i,
                            excluded: n.indexOf(e[0]) >= 0
                        }, t)
                    }
                    ))
                })]
            }) : (0,
            N.jsx)(N.Fragment, {})
        }
          , Wt = "ItemSetSelector_panel__l6y-U"
          , Xt = "ItemSetSelector_setheadings__9mUvH"
          , Ot = "ItemSetSelector_setheading__9A+0W"
          , Mt = "ItemSetSelector_button__1-9Fr"
          , Dt = "ItemSetSelector_active__wV2Cq"
          , At = function(e) {
            var t = e.buttons
              , a = e.active
              , i = e.handleClick
              , n = e.offset;
            return (0,
            N.jsx)("div", {
                className: Mt,
                children: t.map((function(e, t) {
                    return (0,
                    N.jsx)("div", {
                        className: t + n === a ? Dt : "",
                        "data-id": t + n,
                        onClick: i,
                        children: e
                    }, t + n)
                }
                ))
            })
        }
          , qt = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::one",
            english: "One"
        })
          , Ut = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::pair",
            english: "Pair"
        })
          , zt = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::triple",
            english: "Triple"
        })
          , Vt = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::quad",
            english: "Quad"
        })
          , Yt = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::quin",
            english: "Quin"
        })
          , Qt = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::full",
            english: "Full"
        })
          , Kt = [Ut, zt, Vt, Qt]
          , Jt = [Ut, zt, Vt, Yt, Qt]
          , $t = [[qt, Ut, zt, Vt, Qt], Kt, Kt, [qt, Ut, zt, Vt, Yt, Qt], Jt, Jt]
          , ea = function(e) {
            var t = e.active
              , a = e.handleClick;
            return (0,
            N.jsxs)("div", {
                className: Wt,
                children: [(0,
                N.jsx)("div", {
                    className: Ot,
                    children: "With Boots"
                }), (0,
                N.jsxs)("div", {
                    className: Xt,
                    children: [(0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(L.Z, {
                            trans: "item::exactitemcount",
                            english: "Exact Item Count"
                        }), (0,
                        N.jsx)(C.Z, {
                            name: "exactset"
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(L.Z, {
                            trans: "item::actuallybuiltsets",
                            english: "Actually Built Sets"
                        }), (0,
                        N.jsx)(C.Z, {
                            name: "builtset"
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(L.Z, {
                            trans: "item::extrapolatedsets",
                            english: "Extrapolated Sets"
                        }), (0,
                        N.jsx)(C.Z, {
                            name: "extrapolatedset"
                        })]
                    }), [0, 5, 9, 13, 19, 25].map((function(e, i) {
                        return (0,
                        N.jsx)(At, {
                            buttons: $t[i],
                            active: t,
                            handleClick: a,
                            offset: e
                        }, i)
                    }
                    ))]
                })]
            })
        }
          , ta = {
            types: "ItemSetSelectorCompact_types__ILxvT",
            typebutton: "ItemSetSelectorCompact_typebutton__SzFmq",
            typebuttonactive: "ItemSetSelectorCompact_typebuttonactive__kea22",
            buttons: "ItemSetSelectorCompact_buttons__tj4P0",
            panel: "ItemSetSelectorCompact_panel__r9Stn",
            heading: "ItemSetSelectorCompact_heading__6ryct",
            button: "ItemSetSelectorCompact_button__QyUxi",
            active: "ItemSetSelectorCompact_active__GnPTv"
        }
          , aa = function(e) {
            var t = e.buttons
              , a = e.active
              , i = e.handleClick
              , n = e.offset;
            return (0,
            N.jsx)("div", {
                className: ta.button,
                children: t.map((function(e, t) {
                    return (0,
                    N.jsx)("div", {
                        className: t + n === a ? ta.active : "",
                        "data-id": t + n,
                        onClick: i,
                        children: e
                    }, t + n)
                }
                ))
            })
        }
          , ia = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::one",
            english: "One"
        })
          , na = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::pair",
            english: "Pair"
        })
          , sa = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::triple",
            english: "Triple"
        })
          , ra = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::quad",
            english: "Quad"
        })
          , la = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::quin",
            english: "Quin"
        })
          , da = (0,
        N.jsx)(L.Z, {
            trans: "buttons::itemset::full",
            english: "Full"
        })
          , ca = [na, sa, ra, da]
          , oa = [na, sa, ra, la, da]
          , ha = [[ia, na, sa, ra, da], [ia, na, sa, ra, la, da], ca, oa, ca, oa]
          , ma = [[0, 13], [5, 19], [9, 25]]
          , ua = function(e) {
            var t = e.active
              , a = e.handleClick
              , n = (0,
            i.useState)(1)
              , s = (0,
            U.Z)(n, 2)
              , r = s[0]
              , l = s[1]
              , d = function(e) {
                null !== e.target.getAttribute("data-id") && l(parseInt(e.target.getAttribute("data-id")))
            };
            return (0,
            N.jsxs)("div", {
                className: ta.panel,
                children: [(0,
                N.jsxs)("div", {
                    className: ta.types,
                    children: [(0,
                    N.jsx)("div", {}), (0,
                    N.jsxs)("div", {
                        className: ta["typebutton" + (0 === r ? "active" : "")],
                        onClick: d,
                        "data-id": "0",
                        children: [(0,
                        N.jsx)(L.Z, {
                            trans: "item::exact",
                            english: "Exact"
                        }), (0,
                        N.jsx)(C.Z, {
                            name: "exactset"
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: ta["typebutton" + (1 === r ? "active" : "")],
                        onClick: d,
                        "data-id": "1",
                        children: [(0,
                        N.jsx)(L.Z, {
                            trans: "item::built",
                            english: "Built"
                        }), (0,
                        N.jsx)(C.Z, {
                            name: "builtset"
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: ta["typebutton" + (2 === r ? "active" : "")],
                        onClick: d,
                        "data-id": "2",
                        children: [(0,
                        N.jsx)(L.Z, {
                            trans: "item::extrapolated",
                            english: "Extrapolated"
                        }), (0,
                        N.jsx)(C.Z, {
                            name: "extrapolatedset"
                        })]
                    })]
                }), (0,
                N.jsxs)("div", {
                    className: ta.buttons,
                    children: [(0,
                    N.jsx)("div", {
                        className: ta.heading,
                        children: "With Boots"
                    }), (0,
                    N.jsx)("div", {
                        children: ma[r].map((function(e, i) {
                            return (0,
                            N.jsx)(aa, {
                                buttons: ha[2 * r + i],
                                active: t,
                                handleClick: a,
                                offset: e
                            }, i)
                        }
                        ))
                    })]
                })]
            })
        }
          , pa = {
            wrapper: "CellSet_wrapper__bbETk",
            pick: "CellSet_pick__6I6VT",
            games: "CellSet_games__JgN6l"
        }
          , xa = function(e) {
            var t = e.data
              , a = e.pick
              , i = e.filter
              , n = t[0].toString().split("_").map((function(e) {
                return parseInt(e)
            }
            ))
              , s = n.map((function(e, t) {
                return i.row[t] ? 1 : i.wild.indexOf(e.toString()) > -1 ? 2 : 0
            }
            ));
            return (0,
            N.jsxs)("div", {
                className: pa.wrapper,
                children: [n && n.map((function(e, t) {
                    return (0,
                    N.jsx)(et.Z, {
                        id: e,
                        type: "item48br",
                        active: s[t]
                    }, t)
                }
                )), (0,
                N.jsx)("div", {
                    className: pa.win,
                    children: (0,
                    N.jsx)(nt.Z, {
                        wr: (t[2] / t[1] * 100).toFixed(2)
                    })
                }), (0,
                N.jsx)("div", {
                    className: pa.pick,
                    children: (t[1] / a * 100).toFixed(2)
                }), (0,
                N.jsx)("div", {
                    className: pa.games,
                    children: t[1].toLocaleString()
                })]
            })
        }
          , _a = "PanelSet_panel__Lz4Ud"
          , ga = "PanelSet_data__nAnQM"
          , va = "PanelSet_nodata__FTW3z"
          , ja = function(e) {
            var t = e.width
              , a = e.data
              , n = e.pick
              , s = e.excluded
              , r = {
                xlarge: 17,
                large: 12,
                medium: 17,
                small: 17,
                xsmall: 12,
                tiny: 10
            }
              , l = (0,
            i.useState)(!1)
              , d = (0,
            U.Z)(l, 2)
              , c = d[0]
              , o = d[1]
              , h = (0,
            i.useState)(0)
              , m = (0,
            U.Z)(h, 2)
              , u = m[0]
              , p = m[1]
              , x = (0,
            i.useRef)(null)
              , _ = function(e) {
                return x.current.scrollLeft = window.dragX.panelX - e.clientX + window.dragX.mouseX
            }
              , g = function e(t) {
                x.current.style.cursor = "grab",
                document.removeEventListener("mousemove", _),
                document.removeEventListener("mouseup", e)
            }
              , v = (0,
            i.useState)({
                row: {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0
                },
                wild: []
            })
              , j = (0,
            U.Z)(v, 2)
              , f = j[0]
              , y = j[1];
            if (!a || 0 === a.length)
                return (0,
                N.jsx)("div", {
                    className: va,
                    children: "There is no item set data for the given selection"
                });
            var w = a.filter((function(e) {
                isNaN(e[0]) || (e[0] = e[0].toString());
                for (var t = e[0].split("_"), a = 0, i = 0; i < t.length; i++) {
                    if (s.indexOf(parseInt(t[i])) >= 0)
                        return !1;
                    if (!f.row[i] && f.wild.indexOf(t[i]) > -1 && a++,
                    f.row[i] && f.row[i] !== t[i])
                        return !1
                }
                return !(!f.wild.length || f.wild.length !== a) || !f.wild.length
            }
            ));
            if (!w || 0 === w.length)
                return (0,
                N.jsx)("div", {
                    className: va,
                    children: "There is no item set data for the given selection"
                });
            if (!w)
                return (0,
                N.jsx)("div", {
                    className: va,
                    children: "There is no item set data for the given selection"
                });
            var b = [];
            b = c ? w.slice(Math.max(0, parseInt(6 * u - 9)), parseInt(6 * u + r[t] + 9)) : w.slice(0, r[t] + 1);
            var k = 54 * w.length
              , S = Math.max(0, 54 * u * 6 - 486);
            return (0,
            N.jsxs)("div", {
                className: _a,
                onClick: function(e) {
                    if (e.target.getAttribute("data-id")) {
                        var t = (0,
                        wt.Z)(e.target.parentNode.children).indexOf(e.target)
                          , a = e.target.getAttribute("data-id")
                          , i = f.row
                          , n = f.wild;
                        i[t] ? (n.push(a),
                        i[t] = 0) : -1 !== n.indexOf(a) ? n = n.filter((function(e) {
                            return e !== a
                        }
                        )) : i[t] = a,
                        y({
                            row: i,
                            wild: n
                        }),
                        p(0),
                        x.current.scrollLeft = 0
                    }
                },
                children: [(0,
                N.jsx)(xt, {
                    title: "",
                    type: "item2"
                }), (0,
                N.jsx)("div", {
                    ref: x,
                    className: ga,
                    onScroll: function(e) {
                        c || o(!0);
                        var t = parseInt(x.current.scrollLeft / 54 / 6);
                        u !== t && p(t)
                    },
                    onMouseDown: function(e) {
                        c || o(!0),
                        window.dragX = {
                            mouseX: e.clientX,
                            panelX: x.current.scrollLeft
                        },
                        document.addEventListener("mousemove", _),
                        document.addEventListener("mouseup", g),
                        x.current.style.cursor = "grabbing"
                    },
                    children: (0,
                    N.jsx)("div", {
                        style: {
                            width: k,
                            paddingLeft: S
                        },
                        children: b.map((function(e, t) {
                            return (0,
                            N.jsx)(xa, {
                                data: e,
                                pick: n,
                                filter: f
                            }, t)
                        }
                        ))
                    })
                })]
            })
        }
          , fa = {
            placeholder: "ItemSets_placeholder__QROSH"
        }
          , ya = function(e) {
            var t = e.itemSets
              , a = e.pick
              , n = e.filterData
              , s = e.width
              , r = (0,
            i.useRef)(null)
              , l = z(r)
              , d = (0,
            i.useState)(20)
              , c = (0,
            U.Z)(d, 2)
              , o = c[0]
              , h = c[1]
              , m = (0,
            i.useState)([])
              , u = (0,
            U.Z)(m, 2)
              , p = u[0]
              , x = u[1]
              , _ = function(e) {
                return h(parseInt(e.target.getAttribute("data-id")))
            };
            return t && Object.keys(t).length ? (0,
            N.jsx)("div", {
                ref: r,
                className: fa[l ? "" : "placeholder"],
                children: l && (0,
                N.jsxs)(N.Fragment, {
                    children: [("tiny" === s || "xsmall" === s) && (0,
                    N.jsx)(ua, {
                        active: o,
                        handleClick: _
                    }), "tiny" !== s && "xsmall" !== s && (0,
                    N.jsx)(ea, {
                        active: o,
                        handleClick: _
                    }), (0,
                    N.jsx)(Et, {
                        data: n,
                        handleClick: function(e) {
                            if ("clear" !== e.target.getAttribute("data-id")) {
                                var t = parseInt(e.target.getAttribute("data-id"));
                                p.indexOf(t) >= 0 ? x(p.filter((function(e) {
                                    return e !== t
                                }
                                ))) : x([].concat((0,
                                wt.Z)(p), [t]))
                            } else
                                x([])
                        },
                        excluded: p
                    }), (0,
                    N.jsx)(ja, {
                        width: s,
                        data: Rt(o, t),
                        excluded: p,
                        type: "itemset",
                        title: "Item",
                        title2: "Set",
                        pick: a
                    })]
                })
            }) : (0,
            N.jsx)("div", {
                ref: r
            })
        }
          , wa = function(e) {
            var t = e.active
              , a = e.handleClick;
            return (0,
            N.jsx)(Ye, {
                buttons: [(0,
                N.jsx)(L.Z, {
                    trans: "buttons::runes::overview",
                    english: "Overview"
                }), (0,
                N.jsx)(L.Z, {
                    trans: "buttons::runes::highestwinrunepage",
                    english: "Highest Win Rune Page"
                }), (0,
                N.jsx)(L.Z, {
                    trans: "buttons::runes::mostpickedrunepage",
                    english: "Most Picked Rune Page"
                })],
                active: t,
                handleClick: a
            })
        }
          , ba = a(137)
          , ka = {
            runecell: "RuneCell_runecell__ECN6S",
            runecellgrey: "RuneCell_runecellgrey__meeDh",
            win: "RuneCell_win__UAe8U",
            pick: "RuneCell_pick__ILNes",
            games: "RuneCell_games__vKqJW"
        }
          , Sa = function(e) {
            var t = e.nav
              , a = e.page
              , i = e.summary
              , n = e.data
              , s = e.type
              , r = e.rune
              , l = e.runeRow
              , d = 0 === a
              , c = "";
            "mod" === s ? (1 === a && i && i.win.set.mod[l] === r && (d = !0),
            2 === a && i && i.pick.set.mod[l] === r && (d = !0),
            1 === l && (c = "f")) : (1 === a && i && -1 !== i.win.set[s].indexOf(r) && (d = !0),
            2 === a && i && -1 !== i.pick.set[s].indexOf(r) && (d = !0));
            var o = "sec" === s ? 1 : 0;
            return (0,
            N.jsxs)("div", {
                className: ka[d ? "runecell" : "runecellgrey"],
                children: [(0,
                N.jsx)(ba.Z, {
                    rune: r,
                    size: "pri" !== s || l ? 30 : 33,
                    keyStone: "pri" === s && !l,
                    flex: c,
                    type: "link",
                    nav: t
                }), n.stats[r + c][o][2] > 0 && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(nt.Z, {
                        wr: n.stats[r + c][o][1].toFixed(1)
                    }), (0,
                    N.jsx)("div", {
                        className: ka.pick,
                        children: n.stats[r + c][o][0].toFixed(1)
                    }), (0,
                    N.jsx)("div", {
                        className: ka.games,
                        children: n.stats[r + c][o][2].toLocaleString()
                    })]
                })]
            })
        }
          , Na = "RuneRow_runerow__Ev6rX"
          , Za = function(e) {
            var t = e.nav
              , a = e.page
              , i = e.summary
              , n = e.data
              , s = e.row
              , r = e.type
              , l = e.runeRow;
            return (0,
            N.jsx)("div", {
                className: Na,
                children: s.map((function(e, s) {
                    return (0,
                    N.jsx)(Sa, {
                        rune: e,
                        type: r,
                        runeRow: l,
                        nav: t,
                        page: a,
                        summary: i,
                        data: n
                    }, s)
                }
                ))
            })
        }
          , Ca = "RunePanel_runetype__chPhl"
          , La = function(e) {
            var t = e.nav
              , a = e.page
              , i = e.summary
              , n = e.data
              , s = e.panel
              , r = e.type;
            return (0,
            N.jsx)("div", {
                className: Ca,
                children: s.slice("pri" === r ? 0 : 1, 4).map((function(e, s) {
                    return (0,
                    N.jsx)(Za, {
                        row: e,
                        type: r,
                        runeRow: s,
                        nav: t,
                        page: a,
                        summary: i,
                        data: n
                    }, s)
                }
                ))
            })
        }
          , Fa = "RuneHeading_runeheading__DvP5v"
          , Ra = "RuneHeading_win__N65if"
          , Ba = "RuneHeading_pick__UqgZw"
          , Pa = "RuneHeading_games__scbtu"
          , Ga = function(e) {
            var t = e.n;
            return (0,
            N.jsx)("div", {
                className: Fa,
                children: (0,
                wt.Z)(Array(t).keys()).map((function(e, t) {
                    return (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)("div", {
                            className: Ra,
                            children: (0,
                            N.jsx)(L.Z, {
                                trans: "general::winrate",
                                english: "Win Rate",
                                maxChars: 10
                            })
                        }), (0,
                        N.jsx)("div", {
                            className: Ba,
                            children: (0,
                            N.jsx)(L.Z, {
                                trans: "general::pickrate",
                                english: "Pick Rate",
                                maxChars: 10
                            })
                        }), (0,
                        N.jsx)("div", {
                            className: Pa,
                            children: (0,
                            N.jsx)(L.Z, {
                                trans: "general::games",
                                english: "Games",
                                maxChars: 10
                            })
                        })]
                    }, t)
                }
                ))
            })
        }
          , Ia = "RuneStatPanel_runetype__dXK9G"
          , Ta = function(e) {
            var t = e.nav
              , a = e.page
              , i = e.summary
              , n = e.data
              , s = e.type
              , r = e.panel
              , l = e.runeRow;
            return (0,
            N.jsx)("div", {
                className: Ia,
                children: r.map((function(e, r) {
                    return (0,
                    N.jsx)(Sa, {
                        type: s,
                        rune: e,
                        runeRow: l,
                        nav: t,
                        page: a,
                        summary: i,
                        data: n
                    }, r)
                }
                ))
            })
        }
          , Ha = {
            placeholder: "LargeRunePanel_placeholder__M+uFO",
            wrapper: "LargeRunePanel_wrapper__woyBX",
            runepanel: "LargeRunePanel_runepanel__WFE93",
            statmod: "LargeRunePanel_statmod__LZNbk"
        }
          , Ea = [[[8005, 8008, 8021, 8010], [9101, 9111, 8009], [9104, 9105, 9103], [8014, 8017, 8299]], [[8112, 8124, 8128, 9923], [8126, 8139, 8143], [8136, 8120, 8138], [8135, 8134, 8105, 8106]], [[8214, 8229, 8230], [8224, 8226, 8275], [8210, 8234, 8233], [8237, 8232, 8236]], [[8437, 8439, 8465], [8446, 8463, 8401], [8429, 8444, 8473], [8451, 8453, 8242]], [[8351, 8360, 8369], [8306, 8304, 8313], [8321, 8316, 8345], [8347, 8410, 8352]], [[5008, 5005, 5007], [5008, 5002, 5003], [5001, 5002, 5003]]]
          , Wa = function(e) {
            var t = e.data
              , a = e.summary
              , n = e.nav
              , s = void 0 !== n && n
              , r = (0,
            i.useRef)(null)
              , l = z(r)
              , d = (0,
            i.useState)(0)
              , c = (0,
            U.Z)(d, 2)
              , o = c[0]
              , h = c[1];
            return (0,
            N.jsx)("div", {
                ref: r,
                className: Ha[l ? "" : "placeholder"],
                children: l && t && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        ref: r,
                        children: (0,
                        N.jsx)(wa, {
                            active: o,
                            handleClick: function(e) {
                                return h(parseInt(e.target.getAttribute("data-id")))
                            }
                        })
                    }), (0,
                    N.jsxs)("div", {
                        className: Ha.wrapper,
                        children: [(0,
                        N.jsx)(Ga, {
                            n: 4
                        }), (0,
                        N.jsx)("div", {
                            className: Ha.runepanel,
                            children: Ea.slice(0, 5).map((function(e, i) {
                                return (0,
                                N.jsx)(La, {
                                    panel: e,
                                    type: "pri",
                                    nav: s,
                                    page: o,
                                    summary: a,
                                    data: t
                                }, i)
                            }
                            ))
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: Ha.wrapper,
                        children: [(0,
                        N.jsx)(Ga, {
                            n: 3
                        }), (0,
                        N.jsx)("div", {
                            className: Ha.runepanel,
                            children: Ea.slice(0, 5).map((function(e, i) {
                                return (0,
                                N.jsx)(La, {
                                    panel: e,
                                    type: "sec",
                                    nav: s,
                                    page: o,
                                    summary: a,
                                    data: t
                                }, i)
                            }
                            ))
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: Ha.wrapper,
                        children: [(0,
                        N.jsx)(Ga, {
                            n: 1
                        }), (0,
                        N.jsx)("div", {
                            className: Ha.statmod,
                            children: Ea[5].map((function(e, i) {
                                return (0,
                                N.jsx)(Ta, {
                                    panel: e,
                                    type: "mod",
                                    primary: !1,
                                    runeRow: i,
                                    nav: s,
                                    page: o,
                                    summary: a,
                                    data: t
                                }, i)
                            }
                            ))
                        })]
                    })]
                })
            })
        }
          , Xa = a(4559)
          , Oa = a(9445)
          , Ma = a(7689)
          , Da = {
            panel: "PanelLazy_panel__Cv9KV"
        }
          , Aa = function(e) {
            var t = e.nav
              , a = e.data
              , n = e.width
              , s = e.type
              , r = e.title
              , l = e.title2
              , d = e.height
              , c = void 0 === d ? 0 : d
              , o = (0,
            i.useRef)(null)
              , h = "undefined" !== typeof a
              , m = z(o) && h;
            return (0,
            N.jsx)("div", {
                className: Da[h ? "panel" : ""],
                ref: o,
                style: {
                    minHeight: (h ? c : 0) + "px"
                },
                children: m && (0,
                N.jsx)(gt, {
                    width: n,
                    nav: t,
                    data: a,
                    type: s,
                    title: r,
                    title2: l
                })
            })
        }
          , qa = {
            pick: "CellFilter_pick__ZHeqW",
            games: "CellFilter_games__8q21Q",
            count: "CellFilter_count__LNBAe",
            itemset: "CellFilter_itemset__-Wx1w",
            noitems: "CellFilter_noitems__jKRmH"
        }
          , Ua = function(e) {
            var t = e.data
              , a = e.filter
              , n = e.max
              , s = {}
              , r = t[0].toString().split("_")
              , l = r.filter((function(e, t, a) {
                return a.indexOf(e) === t
            }
            ));
            r.forEach((function(e, t) {
                s[e] || (s[e] = 0),
                s[e]++
            }
            ));
            var d = l.map((function(e, t) {
                return a.row[t] ? 1 : a.wild.indexOf(e.toString()) > -1 ? 2 : 0
            }
            ))
              , c = 52 * (n - l.length);
            return (0,
            N.jsxs)("div", {
                className: qa.itemset,
                children: [(0,
                N.jsx)("div", {
                    styles: qa.items,
                    children: l.map((function(e, t) {
                        return (0,
                        N.jsxs)(i.Fragment, {
                            children: [e && (0,
                            N.jsx)(et.Z, {
                                id: Number(e),
                                type: "item48br",
                                tipType: "item",
                                active: d[t]
                            }), s[e] > 1 && (0,
                            N.jsxs)("div", {
                                className: qa.count,
                                "data-count": "true",
                                children: ["x ", s[e]]
                            }), !e && (0,
                            N.jsxs)("div", {
                                className: qa.noitems,
                                children: ["No", (0,
                                N.jsx)("br", {}), "Items"]
                            })]
                        }, t)
                    }
                    ))
                }), (0,
                N.jsxs)("div", {
                    className: qa.stats,
                    style: {
                        paddingTop: c
                    },
                    children: [(0,
                    N.jsx)(nt.Z, {
                        wr: Number(t[1]).toFixed(2)
                    }), (0,
                    N.jsx)("div", {
                        className: qa.pick,
                        children: t[2]
                    }), (0,
                    N.jsx)("div", {
                        className: qa.games,
                        children: t[3].toLocaleString()
                    })]
                })]
            })
        }
          , za = "PanelFilter_data__WubfC"
          , Va = function(e) {
            for (var t = e.width, a = e.data, n = void 0 === a ? [] : a, s = e.type, r = e.title, l = e.title2, d = {
                xlarge: 17,
                large: 12,
                medium: 17,
                small: 17,
                xsmall: 12,
                tiny: 10
            }, c = (0,
            i.useState)(!1), o = (0,
            U.Z)(c, 2), h = o[0], m = o[1], u = (0,
            i.useState)(0), p = (0,
            U.Z)(u, 2), x = p[0], _ = p[1], g = (0,
            i.useRef)(null), v = function(e) {
                return g.current.scrollLeft = window.dragX.panelX - e.clientX + window.dragX.mouseX
            }, j = function e(t) {
                g.current.style.cursor = "grab",
                document.removeEventListener("mousemove", v),
                document.removeEventListener("mouseup", e)
            }, f = (0,
            i.useState)({
                row: {
                    0: 0,
                    1: 0,
                    2: 0,
                    3: 0,
                    4: 0,
                    5: 0,
                    6: 0,
                    7: 0,
                    8: 0,
                    9: 0,
                    10: 0
                },
                wild: []
            }), y = (0,
            U.Z)(f, 2), w = y[0], b = y[1], k = 0, S = 0; S < Object.keys(w.row).length; S++)
                w.row[S] > 0 && k++;
            var Z = k + w.wild.length ? n.filter((function(e) {
                var t = e[0].toString().split("_").filter((function(e, t, a) {
                    return a.indexOf(e) === t
                }
                ))
                  , a = 0;
                return t.forEach((function(e, i) {
                    if (w.row[i] > 0 && w.row[i] === e && a++,
                    !w.row[i] && w.wild.indexOf(t[i]) > -1 && a++,
                    w.row[i] > 0 && w.row[i] !== e)
                        return !1
                }
                )),
                a === k + w.wild.length
            }
            )) : n
              , C = [];
            C = h ? Z.slice(Math.max(0, parseInt(6 * x - 9)), parseInt(6 * x + d[t] + 9)) : Z.slice(0, d[t] + 1);
            var L = 54 * Z.length;
            if (!Z)
                return (0,
                N.jsx)(N.Fragment, {});
            var F = Math.max(0, 54 * x * 6 - 486)
              , R = C.reduce((function(e, t) {
                return Math.max(e, t[0].toString().split("_").filter((function(e, t, a) {
                    return a.indexOf(e) === t
                }
                )).length)
            }
            ), 0);
            return (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(xt, {
                    title: r,
                    title2: l,
                    type: s
                }), (0,
                N.jsx)("div", {
                    ref: g,
                    className: za,
                    onClick: function(e) {
                        if (e.target.getAttribute("data-id")) {
                            var t = (0,
                            wt.Z)(e.target.parentNode.children).filter((function(e) {
                                return !e.getAttribute("data-count")
                            }
                            )).indexOf(e.target)
                              , a = e.target.getAttribute("data-id")
                              , i = w.row
                              , n = w.wild;
                            i[t] ? (n.push(a),
                            i[t] = 0) : -1 !== n.indexOf(a) ? n = n.filter((function(e) {
                                return e !== a
                            }
                            )) : i[t] = a,
                            b({
                                row: i,
                                wild: n
                            })
                        }
                    },
                    onScroll: function(e) {
                        h || m(!0);
                        var t = parseInt(g.current.scrollLeft / 54 / 6);
                        x !== t && _(t)
                    },
                    onMouseDown: function(e) {
                        h || m(!0),
                        window.dragX = {
                            mouseX: e.clientX,
                            panelX: g.current.scrollLeft
                        },
                        document.addEventListener("mousemove", v),
                        document.addEventListener("mouseup", j),
                        g.current.style.cursor = "grabbing"
                    },
                    children: (0,
                    N.jsx)("div", {
                        style: {
                            width: L,
                            paddingLeft: F
                        },
                        children: C.length > 0 && C.map((function(e, t) {
                            return (0,
                            N.jsx)(Ua, {
                                data: e,
                                filter: w,
                                max: R
                            }, t)
                        }
                        ))
                    })
                })]
            })
        }
          , Ya = {
            toggle: "SetSingle_toggle__CGOrL",
            toggleitemset: "SetSingle_toggleitemset__j2snY",
            toggleitem2: "SetSingle_toggleitem2__IRZlU",
            togglespell: "SetSingle_togglespell__tz7Bh",
            togglespells: "SetSingle_togglespells__hAsTi",
            panel: "SetSingle_panel__8OX7O"
        }
          , Qa = function(e) {
            var t = e.width
              , a = e.height
              , n = e.set
              , s = e.setType
              , r = e.one
              , l = e.oneType
              , d = e.defaultSingle
              , c = void 0 !== d && d
              , o = e.title
              , h = e.filter
              , m = void 0 !== h && h
              , u = (0,
            i.useRef)(null)
              , p = z(u)
              , x = !n;
            n && c && (x = !x);
            var _ = (0,
            i.useState)(x)
              , g = (0,
            U.Z)(_, 2)
              , v = g[0]
              , j = g[1];
            return (0,
            N.jsx)("div", {
                className: Ya.panel,
                ref: u,
                style: {
                    minHeight: (v === c ? a : 0) + "px"
                },
                children: p && (0,
                N.jsxs)(N.Fragment, {
                    children: [!v && !m && n && (0,
                    N.jsx)(gt, {
                        width: t,
                        data: n,
                        type: s,
                        title: o
                    }), !v && m && n && (0,
                    N.jsx)(Va, {
                        width: t,
                        data: n,
                        type: s,
                        title: o
                    }), v && r && (0,
                    N.jsx)(gt, {
                        width: t,
                        data: r,
                        type: l,
                        title: o
                    }), n && (0,
                    N.jsx)("div", {
                        className: Ya["toggle" + (v ? l : s)],
                        onClick: function(e) {
                            return j(!v)
                        },
                        children: v ? "Set" : "Single"
                    })]
                })
            })
        }
          , Ka = a(8709)
          , Ja = function(e) {
            var t = e.width
              , a = e.height
              , n = e.set
              , s = e.setType
              , r = e.one
              , l = e.oneType
              , d = e.defaultSingle
              , c = void 0 !== d && d
              , o = e.title
              , h = e.filter
              , m = void 0 !== h && h
              , u = e.url
              , p = e.saveKey
              , x = (0,
            i.useRef)(null)
              , _ = z(x)
              , g = !n;
            n && c && (g = !g);
            var v = (0,
            i.useState)(g)
              , j = (0,
            U.Z)(v, 2)
              , f = j[0]
              , y = j[1]
              , w = !f && u
              , b = (0,
            Ka.Z)(w, p, 0)
              , k = b ? b.earlySet : n;
            return (0,
            N.jsx)("div", {
                className: Ya.panel,
                ref: x,
                style: {
                    minHeight: (f === c ? a : 0) + "px"
                },
                children: _ && (0,
                N.jsxs)(N.Fragment, {
                    children: [!f && !m && n && (0,
                    N.jsx)(gt, {
                        width: t,
                        data: n,
                        type: s,
                        title: o
                    }), !f && m && n && (0,
                    N.jsx)(Va, {
                        width: t,
                        data: k,
                        type: s,
                        title: o
                    }), f && r && (0,
                    N.jsx)(gt, {
                        width: t,
                        data: r,
                        type: l,
                        title: o
                    }), n && (0,
                    N.jsx)("div", {
                        className: Ya["toggle" + (f ? l : s)],
                        onClick: function(e) {
                            return y(!f)
                        },
                        children: f ? "Set" : "Single"
                    })]
                })
            })
        }
          , $a = {
            heading: "EarlySkills_heading__4porp",
            skills: "EarlySkills_skills__Pj1xL",
            row: "EarlySkills_row__7iUSQ",
            data: "EarlySkills_data__lm8WM",
            level: "EarlySkills_level__Rom6i",
            win: "EarlySkills_win__Lz92F",
            skillsearly: "EarlySkills_skillsearly__OnJQo",
            pickrate: "EarlySkills_pickrate__ZP2n2",
            games: "EarlySkills_games__fxDnS"
        }
          , ei = function(e) {
            var t = e.cid
              , a = e.early
              , n = e.pick6;
            return (0,
            N.jsxs)("div", {
                className: $a.earlytable,
                children: [(0,
                N.jsxs)("div", {
                    className: $a.heading,
                    children: [(0,
                    N.jsx)("div", {
                        className: "level",
                        children: "Lvl"
                    }), a[0].map((function(e, t) {
                        return (0,
                        N.jsxs)(i.Fragment, {
                            children: [(0,
                            N.jsx)("div", {
                                className: $a.winrate,
                                children: (0,
                                N.jsx)(L.Z, {
                                    trans: "general::win",
                                    english: "Win",
                                    maxChars: 6
                                })
                            }), (0,
                            N.jsx)("div", {
                                className: $a.pickrate,
                                children: (0,
                                N.jsx)(L.Z, {
                                    trans: "general::pick",
                                    english: "Pick",
                                    maxChars: 6
                                })
                            })]
                        }, t)
                    }
                    ))]
                }), (0,
                N.jsxs)("div", {
                    className: $a.skills,
                    children: [(0,
                    N.jsx)("div", {}), ["q", "w", "e", "r"].map((function(e, a) {
                        return (0,
                        N.jsx)(X, {
                            cid: t,
                            id: e,
                            type: "skill24",
                            tipType: "skill"
                        }, a)
                    }
                    ))]
                }), (0,
                N.jsx)("div", {
                    className: $a.data,
                    children: a.map((function(e, t) {
                        return (0,
                        N.jsxs)("div", {
                            className: $a.row,
                            children: [(0,
                            N.jsx)("div", {
                                className: $a.level,
                                children: t + 1
                            }), e.map((function(e, t) {
                                return (0,
                                N.jsxs)(i.Fragment, {
                                    children: [(0,
                                    N.jsx)("div", {
                                        className: $a.win,
                                        children: (0,
                                        N.jsx)(nt.Z, {
                                            wr: (e[0] ? e[1] / e[0] * 100 : 0).toFixed(1)
                                        })
                                    }), (0,
                                    N.jsxs)("div", {
                                        children: [(0,
                                        N.jsx)("div", {
                                            className: $a.pickrate,
                                            children: (e[0] / n * 100).toFixed(1)
                                        }), (0,
                                        N.jsx)("div", {
                                            className: $a.games,
                                            children: e[0].toLocaleString()
                                        })]
                                    })]
                                }, t)
                            }
                            ))]
                        }, t)
                    }
                    ))
                })]
            })
        }
          , ti = "AngleRightIcon_icon__ij91x"
          , ai = function() {
            return (0,
            N.jsx)("svg", {
                className: ti,
                viewBox: "0 0 320 1000",
                children: (0,
                N.jsx)("path", {
                    d: "M 306 477 C 306 473 305 469 302 466 L 58 223 C 55 219 51 218 47 218 C 42 218 38 219 35 223 L 9 249 C 5 252 3 256 3 261 C 3 265 5 269 9 273 L 213 477 L 9 683 C 5 686 3 690 3 694 C 3 698 5 702 9 706 L 35 732 C 38 736 42 738 47 738 C 52 738 56 736 58 732 L 302 490 C 305 486 306 482 306 477 Z"
                })
            })
        }
          , ii = {
            skillpriority: "SkillPriority_skillpriority__T8qvg",
            skillorder: "SkillPriority_skillorder__HdaqS",
            skillnext: "SkillPriority_skillnext__k8Pjk"
        }
          , ni = function(e) {
            var t = e.cid
              , a = e.skills
              , n = e.order
              , s = void 0 !== n && n;
            return (0,
            N.jsx)("div", {
                className: ii[s ? "skillpriority" : "skillorder"],
                children: (0,
                wt.Z)(a.toString()).map((function(e, a) {
                    return !0 !== s && (e = ["q", "w", "e", "r"][e - 1]),
                    (0,
                    N.jsxs)(i.Fragment, {
                        children: [(0,
                        N.jsx)(X, {
                            cid: t,
                            id: e.toLowerCase(),
                            type: "skill36",
                            tipType: "skill"
                        }), !0 === s && 2 !== a && (0,
                        N.jsxs)("div", {
                            className: ii.skillnext,
                            children: [" ", (0,
                            N.jsx)(ai, {}), " "]
                        }, "g" + a)]
                    }, a)
                }
                ))
            })
        }
          , si = "SkillRow_row__rogfo"
          , ri = "SkillRow_win__2YieX"
          , li = "SkillRow_pick__5VIdi"
          , di = "SkillRow_games__I7zWb"
          , ci = function(e) {
            var t = e.cid
              , a = e.row
              , i = e.pick
              , n = e.order;
            return a ? (0,
            N.jsxs)("div", {
                className: si,
                children: [(0,
                N.jsx)(ni, {
                    cid: t,
                    skills: a[0].toString(),
                    order: n
                }), (0,
                N.jsx)("div", {
                    className: ri,
                    children: (0,
                    N.jsx)(nt.Z, {
                        wr: (a[1] ? a[2] / a[1] * 100 : 0).toFixed(1)
                    })
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)("div", {
                        className: li,
                        children: (a[1] / i * 100).toFixed(1)
                    }), (0,
                    N.jsx)("div", {
                        className: di,
                        children: a[1].toLocaleString()
                    })]
                })]
            }) : ""
        }
          , oi = {
            heading: "SkillTableHeading_heading__0mlhw",
            win: "SkillTableHeading_win__8QqrH",
            pick: "SkillTableHeading_pick__U0A3K"
        }
          , hi = function(e) {
            var t = e.order;
            return (0,
            N.jsxs)("div", {
                className: oi.heading,
                children: [(0,
                N.jsx)("div", {
                    className: oi.title,
                    children: !0 === t ? (0,
                    N.jsx)(L.Z, {
                        trans: "skill::skillpriority",
                        english: "Skill Priority"
                    }) : (0,
                    N.jsx)(L.Z, {
                        trans: "skill::skillorder",
                        english: "Skill Order"
                    })
                }), (0,
                N.jsx)("div", {
                    className: oi.win,
                    children: (0,
                    N.jsx)(L.Z, {
                        trans: "general::win",
                        english: "Win",
                        maxChars: 6
                    })
                }), (0,
                N.jsx)("div", {
                    className: oi.pick,
                    children: (0,
                    N.jsx)(L.Z, {
                        trans: "general::pick",
                        english: "Pick",
                        maxChars: 6
                    })
                })]
            })
        }
          , mi = "SkillsTable_skillstable__AJ+BG"
          , ui = "SkillsTable_data__poYef"
          , pi = function(e) {
            var t = e.cid
              , a = e.skills
              , i = e.pick
              , n = e.order;
            return (0,
            N.jsxs)("div", {
                className: mi,
                children: [(0,
                N.jsx)(hi, {
                    order: n
                }), (0,
                N.jsx)("div", {
                    className: ui,
                    children: a && a.slice(0, 20).map((function(e, a) {
                        return (0,
                        N.jsx)(ci, {
                            cid: t,
                            row: e,
                            pick: i,
                            order: n
                        }, a)
                    }
                    ))
                })]
            })
        }
          , xi = {
            big: "SkillOverview_big__Lvqpt",
            small: "SkillOverview_small__EkewY"
        }
          , _i = function(e) {
            var t = e.width
              , a = e.cid
              , i = e.early
              , n = e.skills
              , s = e.pick6
              , r = e.pick10;
            return (0,
            N.jsxs)("div", {
                className: xi["tiny" === t || "xsmall" === t ? "small" : "big"],
                children: [(0,
                N.jsx)(pi, {
                    cid: a,
                    skills: n,
                    pick: r,
                    order: !0
                }), (0,
                N.jsx)(ei, {
                    cid: a,
                    early: i,
                    pick6: s
                })]
            })
        }
          , gi = {
            panel: "Skills_panel__Bqv51",
            placeholderbig: "Skills_placeholderbig__fDqtC",
            placeholdersmall: "Skills_placeholdersmall__gIlDk"
        }
          , vi = function(e) {
            var t = e.cid
              , a = e.data
              , n = e.width
              , s = (0,
            i.useRef)(null)
              , r = z(s)
              , l = (0,
            i.useState)(0)
              , d = (0,
            U.Z)(l, 2)
              , c = d[0]
              , o = d[1]
              , h = ["skill6", "skill10", "skill15"]
              , m = (0,
            N.jsx)(L.Z, {
                trans: "buttons::skills::level",
                english: "Level"
            })
              , u = "tiny" === n || "xsmall" === n ? "small" : "big";
            return (0,
            N.jsx)("div", {
                ref: s,
                className: gi[r ? "" : "placeholder" + u],
                children: r && a && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(Ye, {
                        buttons: [(0,
                        N.jsx)(L.Z, {
                            trans: "buttons::skills::overview",
                            english: "Overview"
                        }), (0,
                        N.jsxs)(N.Fragment, {
                            children: [m, " 6+"]
                        }), (0,
                        N.jsxs)(N.Fragment, {
                            children: [m, " 10+"]
                        }), (0,
                        N.jsxs)(N.Fragment, {
                            children: [m, " 15+"]
                        })],
                        active: c,
                        handleClick: function(e) {
                            return o(parseInt(e.target.getAttribute("data-id")))
                        }
                    }), (0,
                    N.jsxs)("div", {
                        className: gi.panel,
                        children: [0 === c && (0,
                        N.jsx)(_i, {
                            width: n,
                            cid: t,
                            early: a.skillEarly,
                            skills: a.skillOrder,
                            pick6: a.skill6Pick,
                            pick10: a.skill10Pick
                        }), c > 0 && (0,
                        N.jsx)(pi, {
                            cid: t,
                            skills: a[h[c - 1]],
                            pick: a[h[c - 1] + "Pick"],
                            order: !1
                        })]
                    })]
                })
            })
        }
          , ji = {
            light: "SkillOrder_light__iZaUW",
            dark: "SkillOrder_dark__B6BBN",
            active: "SkillOrder_active__lZaTn"
        }
          , fi = function(e) {
            var t = e.skills
              , a = e.cid
              , n = e.type
              , s = void 0 === n ? "light" : n;
            return (0,
            N.jsx)("div", {
                className: ji[s],
                children: ["q", "w", "e", "r"].map((function(e, n) {
                    return (0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(X, {
                            cid: a,
                            id: e.toLowerCase(),
                            type: "skill24"
                        }), (0,
                        wt.Z)(t.toString()).map((function(e, t) {
                            return (0,
                            N.jsx)(i.Fragment, {
                                children: "0" !== e && (0,
                                N.jsx)("div", {
                                    className: e === (n + 1).toString() ? ji.active : "",
                                    children: e === (n + 1).toString() ? t + 1 : ""
                                })
                            }, t)
                        }
                        ))]
                    }, n)
                }
                ))
            })
        }
          , yi = "SummaryHeading_heading__fv-5W"
          , wi = function(e) {
            var t = e.heading;
            return (0,
            N.jsxs)("div", {
                className: yi,
                children: [(0,
                N.jsx)(L.Z, {
                    trans: t.trans,
                    english: t.english
                }), t.tip && (0,
                N.jsx)(C.Z, {
                    name: t.tip
                })]
            })
        }
          , bi = {
            wrgames: "SummaryWinRate_wrgames__51k6a",
            games: "SummaryWinRate_games__vkldZ",
            inline: "SummaryWinRate_inline__htoa5",
            block: "SummaryWinRate_block__7hHbM"
        }
          , ki = function(e) {
            var t = e.wr
              , a = e.games
              , i = e.tip
              , n = void 0 !== i && i
              , s = e.inline
              , r = void 0 !== s && s;
            return (0,
            N.jsx)("div", {
                className: bi.wrgames,
                children: (0,
                N.jsxs)("div", {
                    className: bi[r ? "inline" : "block"],
                    children: [(0,
                    N.jsxs)("div", {
                        children: [(0,
                        N.jsx)(nt.Z, {
                            wr: t.toFixed(1),
                            text: (0,
                            N.jsxs)(N.Fragment, {
                                children: ["% ", (0,
                                N.jsx)(L.Z, {
                                    trans: "general::winrate",
                                    english: "Win Rate"
                                })]
                            })
                        }), n && (0,
                        N.jsx)(C.Z, {
                            name: n
                        })]
                    }), (0,
                    N.jsxs)("div", {
                        className: bi.games,
                        children: [a.toLocaleString(), " ", (0,
                        N.jsx)(L.Z, {
                            trans: "general::games",
                            english: "Games"
                        })]
                    })]
                })
            })
        }
          , Si = function(e) {
            var t = e.cid
              , a = e.order;
            return (0,
            N.jsx)("div", {
                children: a.id && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(wi, {
                        heading: {
                            trans: "skill::skillorder",
                            english: "Skill Order",
                            tip: "skillorder"
                        }
                    }), (0,
                    N.jsx)(fi, {
                        skills: a.id,
                        cid: t
                    }), (0,
                    N.jsx)(ki, {
                        wr: a.wr,
                        games: a.n,
                        inline: !0
                    })]
                })
            })
        }
          , Ni = function(e) {
            var t = e.cid
              , a = e.priority;
            return (0,
            N.jsx)("div", {
                children: a.id && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(wi, {
                        heading: {
                            trans: "skill::skillpriority",
                            english: "Skill Priority",
                            tip: "skillpriority"
                        }
                    }), (0,
                    N.jsx)(ni, {
                        cid: t,
                        skills: a.id,
                        order: !0
                    }), (0,
                    N.jsx)(ki, {
                        wr: a.wr,
                        games: a.n,
                        inline: !0
                    })]
                })
            })
        }
          , Zi = {
            mod: "RuneSet_mod__Z2F8m",
            rune: "RuneSet_rune__GvPL6"
        }
          , Ci = function(e) {
            var t = e.rp
              , a = void 0 !== t && t
              , i = e.runePage
              , n = e.active
              , s = e.primary
              , r = [[[8005, 8008, 8021, 8010], [9101, 9111, 8009], [9104, 9105, 9103], [8014, 8017, 8299]], [[8112, 8124, 8128, 9923], [8126, 8139, 8143], [8136, 8120, 8138], [8135, 8134, 8105, 8106]], [[8214, 8229, 8230], [8224, 8226, 8275], [8210, 8234, 8233], [8237, 8232, 8236]], [[8437, 8439, 8465], [8446, 8463, 8401], [8429, 8444, 8473], [8451, 8453, 8242]], [[8351, 8360, 8369], [8306, 8304, 8313], [8321, 8316, 8345], [8347, 8410, 8352]], [[5008, 5005, 5007], [5008, 5002, 5003], [5001, 5002, 5003]]];
            !1 === a && (a = {
                8e3: 0,
                8100: 1,
                8200: 2,
                8300: 4,
                8400: 3,
                statMod: 5
            }[i]);
            var l, d = s || 5 === a ? r[a] : r[a].slice(1, 4);
            return (0,
            N.jsx)("div", {
                className: Zi[5 === a ? "mod" : "rune"],
                children: n.length > 1 && d.map((function(e, t) {
                    return (0,
                    N.jsx)("div", {
                        children: e.map((function(e, i) {
                            return l = 5 === a ? n[t] !== e : -1 === n.indexOf(e),
                            (0,
                            N.jsx)(ba.Z, {
                                rune: e,
                                size: s && !t ? 30 : 24,
                                keyStone: !(!s || t),
                                filter: l,
                                flex: 5 === a && 1 === t ? "f" : ""
                            }, i)
                        }
                        ))
                    }, t)
                }
                ))
            })
        }
          , Li = "SummaryRunes_wrapper__bGht8"
          , Fi = "SummaryRunes_runes1__jgaxC"
          , Ri = "SummaryRunes_runes__iSOdt"
          , Bi = function(e) {
            var t = e.runes;
            return (0,
            N.jsxs)("div", {
                className: Li,
                children: [(0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)(wi, {
                        heading: {
                            trans: "runes::primaryrunes",
                            english: "Primary Runes",
                            tip: ""
                        }
                    }), (0,
                    N.jsx)("div", {
                        className: Fi,
                        children: (0,
                        N.jsx)(Ci, {
                            rp: t.page.pri,
                            active: t.set.pri,
                            primary: !0
                        })
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)(wi, {
                        heading: {
                            trans: "runes::secondary",
                            english: "Secondary",
                            tip: ""
                        }
                    }), (0,
                    N.jsx)("div", {
                        className: Ri,
                        children: (0,
                        N.jsx)(Ci, {
                            rp: t.page.sec,
                            active: t.set.sec,
                            primary: !1
                        })
                    }), (0,
                    N.jsx)(ki, {
                        wr: t.wr,
                        games: t.n,
                        tip: "quickrunes"
                    })]
                }), (0,
                N.jsxs)("div", {
                    children: [(0,
                    N.jsx)(wi, {
                        heading: {
                            trans: "runes::statmods",
                            english: "Stat Mods",
                            tip: ""
                        }
                    }), (0,
                    N.jsx)("div", {
                        className: Ri,
                        children: (0,
                        N.jsx)(Ci, {
                            rp: 5,
                            active: t.set.mod,
                            primary: !1
                        })
                    })]
                })]
            })
        }
          , Pi = "SummaryShowItem_item__MSQwR"
          , Gi = "SummaryShowItem_win__ztc7n"
          , Ii = "SummaryShowItem_pick__g+y91"
          , Ti = function(e) {
            var t = e.item;
            return (0,
            N.jsx)("div", {
                className: Pi,
                children: t && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(et.Z, {
                        id: t.id,
                        type: "item32br",
                        tipType: "item"
                    }), t.n && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)("div", {
                            className: Gi,
                            children: (0,
                            N.jsx)(nt.Z, {
                                wr: t.wr.toFixed(2),
                                text: "%"
                            })
                        }), (0,
                        N.jsx)("div", {
                            className: Ii,
                            children: t.n.toLocaleString()
                        })]
                    }), " "]
                })
            })
        }
          , Hi = "SummaryShowItems_or__6y0H2"
          , Ei = "SummaryShowItems_skillnext__JvL8h"
          , Wi = "SummaryShowItems_items__Gkh9b"
          , Xi = function(e) {
            var t = e.items
              , a = e.core
              , n = void 0 !== a && a;
            return (0,
            N.jsx)("div", {
                className: Wi,
                children: t && t.map((function(e, a) {
                    return (0,
                    N.jsxs)(i.Fragment, {
                        children: [(0,
                        N.jsx)(Ti, {
                            item: e
                        }), a < t.length - 1 && (0,
                        N.jsxs)(N.Fragment, {
                            children: [n && (0,
                            N.jsxs)("div", {
                                className: Ei,
                                children: [" ", (0,
                                N.jsx)(ai, {}), " "]
                            }), !n && (0,
                            N.jsx)("div", {
                                className: Hi,
                                children: " OR "
                            })]
                        })]
                    }, a)
                }
                ))
            })
        }
          , Oi = {
            startitems: "SummaryStarting_startitems__vCkmc",
            starting: "SummaryStarting_starting__oqr6S",
            count: "SummaryStarting_count__RuK6f"
        }
          , Mi = function(e) {
            var t = e.start
              , a = e.startSet
              , i = e.startCount;
            return (0,
            N.jsx)("div", {
                className: Oi.startitems,
                children: t && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)("div", {
                        className: Oi.starting,
                        children: a.length > 0 && a.map((function(e, t) {
                            return (0,
                            N.jsxs)("div", {
                                className: Oi.item,
                                children: [(0,
                                N.jsx)(et.Z, {
                                    id: e,
                                    type: "item32br",
                                    tipType: "item"
                                }), i[e] > 1 && (0,
                                N.jsxs)("div", {
                                    className: Oi.count,
                                    children: ["x ", i[e]]
                                })]
                            }, t)
                        }
                        ))
                    }), (0,
                    N.jsx)(ki, {
                        wr: t.wr,
                        games: t.n,
                        inline: !0
                    })]
                })
            })
        }
          , Di = "SummarySums_sums__yiSE3"
          , Ai = function(e) {
            var t = e.sums;
            return (0,
            N.jsx)("div", {
                children: t && (0,
                N.jsxs)(N.Fragment, {
                    children: [(0,
                    N.jsx)(wi, {
                        heading: {
                            trans: "general::summonerspells",
                            english: "Summoner Spells",
                            tip: ""
                        }
                    }), (0,
                    N.jsxs)("div", {
                        className: Di,
                        children: [(0,
                        N.jsx)(it, {
                            id: t.sum1,
                            type: "spell32br",
                            tipType: "spell"
                        }), (0,
                        N.jsx)(it, {
                            id: t.sum2,
                            type: "spell32br",
                            tipType: "spell"
                        })]
                    }), (0,
                    N.jsx)(ki, {
                        wr: t.wr,
                        games: t.n,
                        inline: !0
                    })]
                })
            })
        }
          , qi = {
            full: "Summary_full__xBJoo",
            small: "Summary_small__Olshh",
            tiny: "Summary_tiny__fI0Fj",
            row1: "Summary_row1__M7vbe",
            row2: "Summary_row2__CEQrP",
            row3: "Summary_row3__mC2YI",
            split: "Summary_split__9yYbb",
            triple: "Summary_triple__QMsXr",
            flex: "Summary_flex__evdy6"
        }
          , Ui = function(e) {
            var t = e.cid
              , a = e.data
              , n = e.pick
              , s = e.width
              , r = (0,
            i.useState)(0)
              , l = (0,
            U.Z)(r, 2)
              , d = l[0]
              , c = l[1]
              , o = [(0,
            N.jsx)(L.Z, {
                trans: "item::startingitems",
                english: "Starting Items"
            }), (0,
            N.jsx)(L.Z, {
                trans: "item::corebuild",
                english: "Core Build"
            }), (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(L.Z, {
                    trans: "item::item",
                    english: "Item"
                }), " 4"]
            }), (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(L.Z, {
                    trans: "item::item",
                    english: "Item"
                }), " 5"]
            }), (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(L.Z, {
                    trans: "item::item",
                    english: "Item"
                }), " 6"]
            })];
            if (n < 100 || !a)
                return (0,
                N.jsx)("div", {
                    className: qi.quick,
                    children: (0,
                    N.jsx)("h2", {
                        children: "Insufficient data available for the selected parameters to provide meaningful quick summary."
                    })
                });
            var h = a.runes[d ? "pick" : "win"]
              , m = a.skillorder[d ? "pick" : "win"]
              , u = a.skillpriority[d ? "pick" : "win"]
              , p = a.items[d ? "pick" : "win"]
              , x = {};
            a.sum ? ((x = a.sum[d ? "pick" : "win"]).sum1 = Number(x.id.split("_")[0]),
            x.sum2 = Number(x.id.split("_")[1])) : (x.sum1 = a.sums[0],
            x.sum2 = a.sums[1]),
            p.start || (o[0] = "");
            var _ = {}
              , g = [];
            p.start && (g = p.start.set.filter((function(e, t, a) {
                return a.indexOf(e) === t
            }
            )),
            p.start.set.forEach((function(e, t) {
                _[e] = (_[e] || 0) + 1
            }
            )));
            var v = [];
            p.core && p.core.n > 0 && (v = [{
                id: p.core.set[0]
            }, {
                id: p.core.set[1],
                wr: p.core.wr,
                n: p.core.n
            }, {
                id: p.core.set[2]
            }]),
            p.item1 && (v = [p.item1, p.item2, p.item3]);
            var j = "full";
            return "small" === s && (j = "small"),
            "xsmall" !== s && "tiny" !== s || (j = "tiny"),
            (0,
            N.jsxs)(N.Fragment, {
                children: [(0,
                N.jsx)(Ye, {
                    active: d,
                    handleClick: function(e) {
                        return c(parseInt(e.target.getAttribute("data-id")))
                    },
                    buttons: [(0,
                    N.jsx)(L.Z, {
                        trans: "buttons::summary::highestwinbuild",
                        english: "Highest Win Build"
                    }), (0,
                    N.jsx)(L.Z, {
                        trans: "buttons::summary::mostcommonbuild",
                        english: "Most Common Build"
                    })]
                }), "full" === j && (0,
                N.jsxs)("div", {
                    className: qi.full,
                    children: [(0,
                    N.jsxs)("div", {
                        className: qi.row1,
                        children: [(0,
                        N.jsxs)("div", {
                            children: [(0,
                            N.jsx)(Ni, {
                                cid: t,
                                priority: u
                            }), (0,
                            N.jsx)(Ai, {
                                sums: x
                            })]
                        }), (0,
                        N.jsx)(Si, {
                            cid: t,
                            order: m
                        }), h.wr && (0,
                        N.jsx)(Bi, {
                            runes: h
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: qi.row2,
                        children: o.map((function(e, t) {
                            return (0,
                            N.jsx)("div", {
                                children: e
                            }, t)
                        }
                        ))
                    }), (0,
                    N.jsxs)("div", {
                        className: qi.row3,
                        children: [(0,
                        N.jsx)(Mi, {
                            start: p.start,
                            startSet: g,
                            startCount: _,
                            page: d
                        }), (0,
                        N.jsx)(Xi, {
                            items: v,
                            core: !0
                        }), [4, 5, 6].map((function(e, t) {
                            return (0,
                            N.jsx)(Xi, {
                                items: p["item" + e]
                            }, t)
                        }
                        ))]
                    })]
                }), "small" === j && (0,
                N.jsxs)("div", {
                    className: qi.small,
                    children: [(0,
                    N.jsxs)("div", {
                        className: qi.split,
                        children: [(0,
                        N.jsxs)("div", {
                            children: [(0,
                            N.jsx)(Ni, {
                                cid: t,
                                priority: u
                            }), (0,
                            N.jsx)(Ai, {
                                sums: x
                            })]
                        }), (0,
                        N.jsx)("div", {
                            children: (0,
                            N.jsx)(Si, {
                                cid: t,
                                order: m
                            })
                        })]
                    }), (0,
                    N.jsx)("div", {
                        children: h.wr && (0,
                        N.jsx)(Bi, {
                            runes: h
                        })
                    }), (0,
                    N.jsx)("div", {
                        className: qi.triple,
                        children: [o[0], o[1], o[2]].map((function(e, t) {
                            return (0,
                            N.jsx)("div", {
                                children: e
                            }, t)
                        }
                        ))
                    }), (0,
                    N.jsxs)("div", {
                        className: qi.triple,
                        children: [(0,
                        N.jsx)(Mi, {
                            start: p.start,
                            startSet: g,
                            startCount: _,
                            page: d
                        }), (0,
                        N.jsx)(Xi, {
                            items: v,
                            core: !0
                        }), (0,
                        N.jsx)(Xi, {
                            items: p.item4
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: qi.split,
                        children: [o[3], o[4]].map((function(e, t) {
                            return (0,
                            N.jsx)("div", {
                                children: e
                            }, t)
                        }
                        ))
                    }), (0,
                    N.jsxs)("div", {
                        className: qi.split,
                        children: [(0,
                        N.jsx)(Xi, {
                            items: p.item5
                        }), (0,
                        N.jsx)(Xi, {
                            items: p.item6
                        })]
                    })]
                }), "tiny" === j && (0,
                N.jsxs)("div", {
                    className: qi.tiny,
                    children: [h.wr && (0,
                    N.jsx)(Bi, {
                        runes: h
                    }), (0,
                    N.jsx)(Si, {
                        cid: t,
                        order: m
                    }), (0,
                    N.jsxs)("div", {
                        className: qi.split,
                        children: [(0,
                        N.jsx)(Ni, {
                            cid: t,
                            priority: u
                        }), (0,
                        N.jsx)(Ai, {
                            sums: x
                        })]
                    }), (0,
                    N.jsx)("div", {
                        children: o[0]
                    }), (0,
                    N.jsx)(Mi, {
                        start: p.start,
                        startSet: g,
                        startCount: _,
                        page: d
                    }), (0,
                    N.jsx)("div", {
                        className: qi.split,
                        children: [o[1], o[2]].map((function(e, t) {
                            return (0,
                            N.jsx)("div", {
                                children: e
                            }, t)
                        }
                        ))
                    }), (0,
                    N.jsxs)("div", {
                        className: qi.split,
                        children: [(0,
                        N.jsx)(Xi, {
                            items: v,
                            core: !0
                        }), (0,
                        N.jsx)(Xi, {
                            items: p.item4
                        })]
                    }), (0,
                    N.jsx)("div", {
                        className: qi.split,
                        children: [o[3], o[4]].map((function(e, t) {
                            return (0,
                            N.jsx)("div", {
                                children: e
                            }, t)
                        }
                        ))
                    }), (0,
                    N.jsxs)("div", {
                        className: qi.split,
                        children: [(0,
                        N.jsx)(Xi, {
                            items: p.item5
                        }), (0,
                        N.jsx)(Xi, {
                            items: p.item6
                        })]
                    })]
                })]
            })
        }
          , zi = a(7126)
          , Vi = a(4165)
          , Yi = a(5861)
          , Qi = a(4942)
          , Ki = function(e, t) {
            var a = (0,
            i.useState)((0,
            Qi.Z)({}, t, !1))
              , n = (0,
            U.Z)(a, 2)
              , s = n[0]
              , r = n[1];
            return (0,
            i.useEffect)((function() {
                var a = !!e;
                e && window.precache && window.precache[e.split("?")[1]] && (a = !1);
                var i = function() {
                    var i = (0,
                    Yi.Z)((0,
                    Vi.Z)().mark((function i() {
                        var n, s;
                        return (0,
                        Vi.Z)().wrap((function(i) {
                            for (; ; )
                                switch (i.prev = i.next) {
                                case 0:
                                    if (i.prev = 0,
                                    !a) {
                                        i.next = 7;
                                        break
                                    }
                                    return i.next = 4,
                                    fetch(e);
                                case 4:
                                    i.t0 = i.sent,
                                    i.next = 8;
                                    break;
                                case 7:
                                    i.t0 = !1;
                                case 8:
                                    if (n = i.t0,
                                    !a || !n) {
                                        i.next = 15;
                                        break
                                    }
                                    return i.next = 12,
                                    n.json();
                                case 12:
                                    i.t1 = i.sent,
                                    i.next = 16;
                                    break;
                                case 15:
                                    i.t1 = !1;
                                case 16:
                                    s = i.t1,
                                    a && r((0,
                                    Qi.Z)({}, t, s)),
                                    i.next = 22;
                                    break;
                                case 20:
                                    i.prev = 20,
                                    i.t2 = i.catch(0);
                                case 22:
                                case "end":
                                    return i.stop()
                                }
                        }
                        ), i, null, [[0, 20]])
                    }
                    )));
                    return function() {
                        return i.apply(this, arguments)
                    }
                }();
                return a && !s[t] && i(),
                function() {
                    return a = !1
                }
            }
            ), [e, t, s]),
            e && window.precache && window.precache[e.split("?")[1]] ? window.precache[e.split("?")[1]] : s[t]
        }
          , Ji = function(e) {
            var t, a = e.cid, i = e.lane, s = e.defaultLane, r = e.vs, l = e.vsLane, d = e.defaultVsLane, c = e.page, o = e.mode, h = e.mythic, m = e.keystone, u = [], p = "ranked" === o ? "" : e.mode + "/";
            "tierlist" === c ? (t = "/lol/tierlist/" + p,
            u = "ranked" === o ? ["lane", "tier", "region", "patch", "view"] : ["tier", "region", "patch", "view"]) : "front" === c ? (t = "/" + p,
            u = ["tier", "patch"]) : "champion" === c ? (t = "/lol/" + (0,
            n.Xk)(a) + "/" + p + "build/",
            u = "ranked" === o && i !== s ? ["lane", "tier", "region", "patch"] : ["tier", "region", "patch"]) : "vs" === c ? (t = "/lol/" + (0,
            n.Xk)(a) + "/vs/" + (0,
            n.Xk)(r) + "/build/",
            i !== s && u.push("lane"),
            l !== d && u.push("vsLane"),
            u.push("tier", "patch")) : "leaderboard" === c ? (t = a ? "/lol/" + (0,
            n.Xk)(a) + "/leaderboard/" : "/lol/leaderboard/",
            u = a ? ["region"] : ["region", "queue"]) : "counters" === c && (t = "/lol/" + (0,
            n.Xk)(a) + "/counters/",
            i !== s && u.push("lane"),
            l !== s && u.push("vsLane"),
            u.push("tier", "patch"));
            var x = [];
            u && u.forEach((function(t) {
                e[t] !== n.ce[t] && x.push(t.toLowerCase() + "=" + e[t])
            }
            )),
            "champion" === c && (0 === h || h > 0) && x.push("mythic=" + h),
            "champion" === c && (0 === m || m > 0) && x.push("keystone=" + m);
            var _ = x.length ? "?" + x.join("&") : ""
              , g = {
                redirect: !1
            };
            return window.location.pathname !== t && (g = {
                redirect: !0,
                pathname: t,
                search: _
            }),
            window.location.search !== _ && (g = {
                redirect: !0,
                pathname: e.baseURL,
                search: _
            }),
            g
        }
          , $i = a(2707)
          , en = a(3100)
          , tn = a(6797)
          , an = {
            statwrapper: "Champion_statwrapper__cWabv",
            xlarge: "Champion_xlarge__0sLI2",
            large: "Champion_large__qWstn",
            medium: "Champion_medium__pD8r9",
            small: "Champion_small__1K1rW",
            xsmall: "Champion_xsmall__CpC2I",
            tiny: "Champion_tiny__OmtXI",
            mythic: "Champion_mythic__xEMp1",
            placeholder: "Champion_placeholder__QP0DU"
        }
          , nn = ["top", "jungle", "middle", "bottom", "support"]
          , sn = function() {
            var e = (0,
            $i.Z)()
              , t = e.url
              , a = e.cid
              , c = e.vs
              , o = e.mode
              , h = e.region
              , m = e.patch
              , u = e.tier
              , p = e.lane
              , x = e.vsLane
              , _ = e.view
              , g = e.mythic
              , v = e.keystone
              , j = (0,
            n.yq)(o)
              , f = (0,
            en.Z)()
              , y = f.size
              , w = !1;
            a > 0 && (w = o + "_" + u + "_" + m + "_" + a + "_" + p + "_" + g + "_" + v,
            c < 1 && (w += "_" + h),
            c > 0 && (w += "_" + c + "_" + x));
            var b = {
                page: c > 0 ? "vs" : "champion",
                baseURL: t,
                cid: a,
                lane: p,
                vs: c,
                vsLane: x,
                mode: o,
                patch: m,
                tier: u,
                region: h,
                view: _,
                mythic: g,
                keystone: v
            }
              , k = !1;
            b.vs > 0 ? k = "https://".concat(n.ce.api, "/mega/?ep=champion&p=d&v=1&patch=").concat(b.patch, "&cid=").concat(b.cid, "&lane=").concat(b.lane, "&tier=").concat(b.tier, "&queue=").concat(j.queue, "&vs=").concat(b.vs, "&vslane=").concat(b.vsLane) : a > 0 && (k = "https://".concat(n.ce.api, "/mega/?ep=champion&p=d&v=1&patch=").concat(b.patch, "&cid=").concat(b.cid, "&lane=").concat(b.lane, "&tier=").concat(b.tier, "&queue=").concat(j.queue, "&region=").concat(b.region)),
            b.mythic > 0 && (k += "&mythic=".concat(b.mythic)),
            b.keystone > 0 && (k += "&keystone=".concat(b.keystone));
            var S = Ki(k, w)
              , Z = !1;
            "undefined" !== typeof S && (b.vs > 0 ? Z = "https://".concat(n.ce.api, "/mega/?ep=champion2&p=d&v=1&patch=").concat(b.patch, "&cid=").concat(b.cid, "&lane=").concat(b.lane, "&tier=").concat(b.tier, "&queue=").concat(j.queue, "&vs=").concat(b.vs, "&vslane=").concat(b.vsLane) : a > 0 && (Z = "https://".concat(n.ce.api, "/mega/?ep=champion2&p=d&v=1&patch=").concat(b.patch, "&cid=").concat(b.cid, "&lane=").concat(b.lane, "&tier=").concat(b.tier, "&queue=").concat(j.queue, "&region=").concat(b.region))),
            b.mythic > 0 && (Z += "&mythic=".concat(b.mythic)),
            b.keystone > 0 && (Z += "&keystone=".concat(b.keystone));
            var C = Ki(Z, w)
              , F = !1;
            b.vs > 0 ? F = "https://".concat(n.ce.api, "/mega/?ep=earlyitem&p=d&v=1&patch=").concat(b.patch, "&cid=").concat(b.cid, "&lane=").concat(b.lane, "&tier=").concat(b.tier, "&queue=").concat(j.queue, "&vs=").concat(b.vs, "&vslane=").concat(b.vsLane) : a > 0 && (F = "https://".concat(n.ce.api, "/mega/?ep=earlyitem&p=d&v=1&patch=").concat(b.patch, "&cid=").concat(b.cid, "&lane=").concat(b.lane, "&tier=").concat(b.tier, "&queue=").concat(j.queue, "&region=").concat(b.region)),
            b.mythic > 0 && (F += "&mythic=".concat(b.mythic)),
            b.keystone > 0 && (F += "&keystone=".concat(b.keystone)),
            S && S.header && (p = b.lane = S.header.lane,
            b.defaultLane = S.header.defaultLane,
            S.header.vslane && (x = b.vsLane = S.header.vslane,
            b.defaultVsLane = S.header.defaultVsLane)),
            (0,
            i.useEffect)((function() {
                S && window.gtag("config", "G-0NSEBC8PLE", {
                    page_path: window.location.pathname
                })
            }
            ), [S]);
            var R = Ji(b);
            if (S && S.header && 0 === S.header.n)
                return (0,
                N.jsx)(yt.Z, {
                    type: "nodata",
                    nav: b,
                    width: y
                });
            if (0 === a)
                return (0,
                N.jsx)(yt.Z, {
                    type: "nochamp",
                    width: y
                });
            var B = !S || R.redirect
              , P = !(S && C)
              , G = 0
              , I = 0
              , T = !1
              , H = 0
              , E = 0
              , W = [];
            B || (G = S.analysed.toLocaleString(),
            I = S.avgWinRate.toFixed(2),
            T = nn.map((function(e) {
                return S.nav.lanes[e]
            }
            )),
            H = S.header.wr,
            E = S.header.n,
            W = S.header);
            var X = (0,
            n.Xk)(a);
            return (0,
            N.jsxs)(N.Fragment, {
                children: [R.redirect && (0,
                N.jsx)(Ma.Fg, {
                    to: {
                        pathname: R.pathname,
                        search: R.search
                    }
                }), (0,
                N.jsx)(Oa.Z, {
                    nav: b,
                    analysed: G,
                    averageWR: I,
                    lanePercent: T,
                    width: y
                }), (0,
                N.jsx)(d.Z, {
                    cid: a,
                    width: y
                }), (0,
                N.jsx)(s.Z, {
                    width: f.ads,
                    loading: P
                }), (0,
                N.jsxs)(tn.Z, {
                    width: y,
                    children: [(0,
                    N.jsx)(A, {
                        nav: b,
                        data: W,
                        path: X,
                        width: y,
                        loading: B,
                        adReady: P
                    }), (0,
                    N.jsx)(Ue, {
                        nav: b,
                        data: W,
                        path: X,
                        width: y,
                        loading: B,
                        adReady: P
                    }), ("tiny" === y || "xsmall" === y || "small" === y) && (0,
                    N.jsx)(r.Z, {
                        width: y,
                        loading: B
                    }), B && (0,
                    N.jsx)(Xa.Z, {}), B && (0,
                    N.jsx)("div", {
                        className: an.placeholder
                    }), !B && (0,
                    N.jsxs)(N.Fragment, {
                        children: [(0,
                        N.jsx)(zi.Z, {
                            width: y,
                            nav: b,
                            tab: 0,
                            cid: a,
                            lane: p
                        }), "none" === f.ads && (0,
                        N.jsx)(Ft.Z, {
                            width: y
                        }), S.summary && (0,
                        N.jsx)(Ui, {
                            cid: a,
                            data: S.summary,
                            width: y
                        }), "none" === f.ads && (0,
                        N.jsx)(l.Z, {
                            width: y
                        }), "none" !== f.ads && (0,
                        N.jsx)(Ft.Z, {
                            width: y
                        }), c < 1 && S && S.graph && (0,
                        N.jsx)(Lt, {
                            data: S.graph,
                            lane: p,
                            bans: j.bans,
                            mode: o,
                            cid: a,
                            region: h,
                            width: y
                        })]
                    }), !B && (0,
                    N.jsxs)("div", {
                        className: an[y],
                        children: [!g && (0,
                        N.jsxs)("div", {
                            className: an.mythic,
                            children: [(0,
                            N.jsx)("div", {
                                children: "NEW"
                            }), "Click Mythic Items Below to Filter Builds"]
                        }), !g && (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            nav: b,
                            data: S.mythicItem,
                            type: "mythic",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::mythic",
                                english: "Mythic",
                                maxChars: 16
                            }),
                            title2: (0,
                            N.jsx)(L.Z, {
                                trans: "item::items",
                                english: "Items",
                                maxChars: 16
                            })
                        }), j.counters && c < 1 && (0,
                        N.jsx)(ft, {
                            enemy: [S.enemy_top, S.enemy_jungle, S.enemy_middle, S.enemy_bottom, S.enemy_support],
                            team: C ? [C.team_top, C.team_jungle, C.team_middle, C.team_bottom, C.team_support] : [],
                            width: y,
                            winRate: H,
                            pick: E,
                            nav: b,
                            averageWR: S.avgWinRate
                        }), S && (0,
                        N.jsx)(Qa, {
                            width: y,
                            height: 165,
                            set: S.spells,
                            one: S.spell,
                            setType: "spells",
                            oneType: "spell",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "general::summonerspells",
                                english: "Summoner Spells",
                                maxChars: 16
                            })
                        }), S && (0,
                        N.jsx)(Qa, {
                            width: y,
                            height: 165,
                            set: S.startSet,
                            one: S.startItem,
                            filter: !0,
                            setType: "itemset",
                            oneType: "item2",
                            title: "Starting Items"
                        }), S.earlyItem && (0,
                        N.jsx)(Ja, {
                            height: 113,
                            width: y,
                            set: C ? C.earlySet : [],
                            url: F,
                            saveKey: w,
                            one: S.earlyItem,
                            defaultSingle: !0,
                            filter: !0,
                            setType: "itemset",
                            oneType: "item2",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "general::earlyitems",
                                english: "Early Items (10min)",
                                maxChars: 20
                            })
                        }), c < 1 && (0,
                        N.jsx)(ya, {
                            width: y,
                            itemSets: C ? C.itemSets : S.itemSets,
                            pick: S.n,
                            filterData: S.popularItem
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.item1,
                            type: "item",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::item",
                                english: "Item",
                                maxChars: 10
                            }),
                            title2: "1"
                        }), 69 !== b.cid && (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            nav: b,
                            data: S.boots,
                            type: "item3",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::boots",
                                english: "Boots",
                                maxChars: 10
                            })
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.item2,
                            type: "item",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::item",
                                english: "Item",
                                maxChars: 10
                            }),
                            title2: "2"
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.item3,
                            type: "item",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::item",
                                english: "Item",
                                maxChars: 10
                            }),
                            title2: "3"
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.item4,
                            type: "item",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::item",
                                english: "Item",
                                maxChars: 10
                            }),
                            title2: "4"
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.item5,
                            type: "item",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::item",
                                english: "Item",
                                maxChars: 10
                            }),
                            title2: "5"
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.popularItem,
                            type: "item3",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::popularitems",
                                english: "Popular Items",
                                maxChars: 16
                            })
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.winningItem,
                            type: "item3",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::winningitems",
                                english: "Winning Items",
                                maxChars: 16
                            })
                        }), (0,
                        N.jsx)(Aa, {
                            width: y,
                            height: 129,
                            data: S.item,
                            type: "item3",
                            title: (0,
                            N.jsx)(L.Z, {
                                trans: "item::all",
                                english: "All",
                                maxChars: 16
                            }),
                            title2: (0,
                            N.jsx)(L.Z, {
                                trans: "item::items",
                                english: "Items",
                                maxChars: 16
                            })
                        }), (0,
                        N.jsx)(vi, {
                            cid: a,
                            data: C ? C.skills : S.skills,
                            width: y
                        }), (0,
                        N.jsxs)("div", {
                            className: an.mythic,
                            children: [(0,
                            N.jsx)("div", {
                                children: "NEW"
                            }), "Click Keystones Below to Filter Builds"]
                        }), (0,
                        N.jsx)(Wa, {
                            data: S.runes,
                            summary: S.summary && S.summary.runes,
                            nav: b
                        })]
                    }), !B && (0,
                    N.jsx)(Re, {
                        width: y,
                        nav: b,
                        cid: a,
                        path: X,
                        data: {
                            objective: S.objective,
                            depth: S.depth,
                            time: S.time,
                            timeWin: S.timeWin,
                            topStats: S.topStats,
                            top: S.top,
                            stats: S.stats,
                            statsCount: S.statsCount
                        }
                    })]
                }), "tiny" === y && (0,
                N.jsx)(tn.Z, {
                    width: y,
                    children: (0,
                    N.jsx)(q.Z, {
                        mode: o,
                        cid: a
                    })
                })]
            })
        }
    }
}]);
//# sourceMappingURL=665.0fd4fbac.chunk.js.map
