(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [213], {
        1382: function(e, t, n) {
            "use strict";
            n.d(t, "a", (function() {
                return l
            })), n.d(t, "b", (function() {
                return h
            }));
            n(82), n(3), n(25);
            var o = n(242),
                r = n(8);
            const c = ["ctaList", "skus", "items"];

            function l(e) {
                return { ...e,
                    componentList: d(e.componentList),
                    highEnd: !!e.highEndFlag
                }
            }

            function d() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                if (!e.length) return [];
                return e.map(((e, t) => {
                    let {
                        title: title,
                        label: n,
                        description: r = "",
                        DIIAsset: c = "",
                        DI3Asset: l = "",
                        gridItems: d = [],
                        serviceItems: h = [],
                        links: k = []
                    } = e;
                    return {
                        title: title,
                        pretitle: n,
                        description: r,
                        ctaList: k.map((e => {
                            let {
                                label: label,
                                url: t,
                                redirectionType: n
                            } = e;
                            return {
                                label: label,
                                url: t,
                                type: n
                            }
                        })),
                        ...(c || l) && {
                            ratio: {
                                mobile: "portrait",
                                desktop: "landscape"
                            },
                            [Object(o.c)(l) ? "video" : "image"]: {
                                mobile: c,
                                desktop: l
                            }
                        },
                        ...0 === t && {
                            props: {
                                mediaPosition: "center"
                            }
                        },
                        ...m(d),
                        ...v(h)
                    }
                })).filter((component => Object.keys(component).some((e => {
                    var t;
                    return component.isHighEnd || c.includes(e) && (null === (t = component[e]) || void 0 === t ? void 0 : t.length) > 0
                }))))
            }

            function h(e, t) {
                const n = Object.entries(t || {});
                if (n.length) {
                    const t = n.reduce(((e, t) => {
                        let [n, o] = t;
                        if (n.includes("home") && n.includes("push")) {
                            const t = parseFloat(n.split("-").pop() || "");
                            e.push({ ...o,
                                isHighEnd: !0,
                                index: t,
                                props: {
                                    name: n.split("/").pop()
                                }
                            })
                        }
                        return e
                    }), []);
                    t.length && t.forEach((t => {
                        Number.isInteger(t.index) && e.splice(t.index, 0, t)
                    }))
                }
                return e
            }

            function m(e) {
                return e.reduce(((e, t) => (Object(r.r)(t.linkOrSku) || t.linkOrSku.startsWith("/") ? e.items.push(function(e) {
                    const {
                        DIIAsset: t = "",
                        redirectionType: n,
                        title: title,
                        linkOrSku: o
                    } = e, c = Object(r.u)(o).path;
                    return {
                        image: t,
                        ratio: "portrait",
                        ctaList: [{
                            label: title,
                            url: o,
                            type: n,
                            analyticValue: c ? c.replace(/^.*\/\/[^/]+\/[^/]+\//, "") : void 0
                        }]
                    }
                }(t)) : 6 === t.linkOrSku.length && e.skus.push({
                    identifier: t.linkOrSku,
                    ...t.DIIAsset && {
                        customMedia: t.DIIAsset
                    },
                    ...t.recipeId && {
                        kitID: t.recipeId
                    }
                }), e)), {
                    skus: [],
                    items: []
                })
            }

            function v(e) {
                if (0 === e.length) return {};
                const t = e.reduce(((e, t) => {
                    const {
                        serviceTitle: n,
                        secondRedirectionType: r,
                        mainLabel: c,
                        mainLink: l,
                        mainRedirectionType: d,
                        DIIAsset: h,
                        secondLabel: m,
                        secondLink: v,
                        analyticsValueMain: k,
                        analyticsValueSecond: f
                    } = t;
                    return e.items.push({
                        title: n,
                        ratio: "portrait",
                        [Object(o.c)(h) ? "video" : "image"]: h,
                        ctaList: [{
                            label: c,
                            url: l,
                            type: d,
                            analyticValue: k
                        }, {
                            label: m,
                            url: v,
                            type: r,
                            analyticValue: f
                        }]
                    }), e
                }), {
                    isService: !0,
                    items: [],
                    props: {
                        hasSlider: {
                            mobile: !1,
                            desktop: !1
                        },
                        forceEven: !1
                    }
                });
                return t.props.hasSlider = {
                    desktop: t.items.length > 3,
                    mobile: t.items.length > 1
                }, t
            }
        },
        1611: function(e, t, n) {
            var content = n(2133);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, n(10).default)("45082fc0", content, !0, {
                sourceMap: !1
            })
        },
        2132: function(e, t, n) {
            "use strict";
            n(1611)
        },
        2133: function(e, t, n) {
            var o = n(9)((function(i) {
                return i[1]
            }));
            o.push([e.i, "[dir] .lv-homepage .lv-editorial-hub{padding-bottom:5rem}[dir] .lv-homepage .lv-editorial-hub.-has-ctas{padding-bottom:8rem}[dir] .lv-homepage .lv-editorial-hub.-hero.-compact{padding-bottom:3rem}[dir] .lv-homepage .lv-editorial-hub:first-of-type:not(.-hero){padding-top:2.5rem}@media screen and (min-width:48rem){[dir] .lv-homepage .lv-editorial-hub:first-of-type:not(.-hero){padding-top:3rem}}", ""]), o.locals = {}, e.exports = o
        },
        3668: function(e, t, n) {
            "use strict";
            n.r(t);
            n(3);
            var o = n(30),
                r = n(16),
                c = n(5),
                l = n(26),
                d = n(14),
                h = n(974),
                m = n(1167),
                v = n(1306),
                k = n(4),
                f = n(20),
                E = n(37),
                y = n(281),
                _ = n(1382),
                L = {
                    tracking: {
                        default: {
                            categoryGa: "homepage"
                        }
                    },
                    isPage: !0,
                    components: {
                        HighEnd: () => n.e(125).then(n.bind(null, 1746)),
                        EditorialHub: v.default,
                        EditorialPush: h.default,
                        ContentPushList: m.default
                    },
                    async asyncData(e) {
                        let {
                            app: t,
                            store: n
                        } = e;
                        const o = Object(f.d)(E.a.GetHomepage);
                        let c = {};
                        try {
                            c = await t.$domain.editorial.getHomepage()
                        } catch (e) {
                            return Object(f.c)(E.b.GetHomepage, e, o), t.$pageErrorHandler(new y.a(e, 404))
                        }
                        var d;
                        (await n.dispatch(l.PAGE_CONTEXT_UPDATE_ACTION, {
                            currentPage: r.a.Home,
                            hasHighEnd: c.highEnd,
                            utagData: {
                                pageName: "homepagelv",
                                pageType: "homepage"
                            }
                        }), Object(f.f)(o), c.highEnd) && (c.componentList = Object(_.b)(c.componentList, null == n || null === (d = n.state) || void 0 === d ? void 0 : d.pageContext.highEnd));
                        return {
                            homepage: c
                        }
                    },
                    data: () => ({
                        homepage: {},
                        customActionOnClick: null
                    }),
                    head() {
                        const script = [{
                            type: "application/ld+json",
                            json: this.jsonLdSocial
                        }];
                        return this.isChina || script.push({
                            type: "application/ld+json",
                            json: this.jsonLdSearchBox
                        }), {
                            title: this.homepage.seoTitle,
                            meta: [{
                                hid: "description",
                                name: "description",
                                content: this.homepage.seoDescription
                            }],
                            script: script
                        }
                    },
                    computed: { ...Object(o.c)({
                            isChina: k.LOCALE_CONTEXT_IS_CHINA
                        }),
                        isSmall() {
                            return this.$store.getters[d.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                        },
                        jsonLdSearchBox() {
                            return {
                                "@context": "https://schema.org",
                                "@type": "WebSite",
                                name: "Louis Vuitton",
                                url: this.$store.getters[c.GET_SEO_URL](r.e.Homepage),
                                potentialAction: {
                                    "@type": "SearchAction",
                                    target: "".concat(this.$store.getters[c.GET_SEO_URL](r.e.Search), "/{search_term_string}"),
                                    "query-input": "required name=search_term_string"
                                }
                            }
                        },
                        jsonLdSocial() {
                            return {
                                "@context": "https://schema.org",
                                "@type": "Organization",
                                name: "Louis Vuitton",
                                logo: "https://www.louisvuitton.com/images/is/image/lv/brand-logo-louis-vuitton-logo",
                                url: this.$store.getters[c.GET_SEO_URL](r.e.Homepage),
                                sameAs: this.$store.state.footer.icons.map((e => e.url))
                            }
                        }
                    },
                    methods: {
                        trackPushLinkClick(e, t, n) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionId: t.title,
                                actionGa: "push_hp",
                                actionType: "push_hp",
                                labelGa: n + 1,
                                actionPosition: "push_".concat(n + 1),
                                contentType: e.redirectionType,
                                contentId: e.url
                            }))
                        },
                        trackPushVideoAction(e, t, n) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                categoryGa: "video",
                                labelGa: t.title,
                                actionId: e,
                                actionGa: e,
                                actionPosition: "push_".concat(n + 1),
                                contentId: (t.video[this.isSmall ? "mobile" : "desktop"] || "").split("/").pop(),
                                contentType: "animation"
                            }))
                        }
                    }
                },
                I = (n(2132), n(0)),
                component = Object(I.a)(L, (function() {
                    var e = this,
                        t = e._self._c;
                    return t(e.homepage.highEnd ? "HighEnd" : "div", {
                        tag: "component",
                        staticClass: "lv-homepage",
                        attrs: {
                            homepage: e.homepage.highEnd ? e.homepage : null
                        }
                    }, e._l(e.homepage.componentList, (function(component, n) {
                        return t(component.isHighEnd ? "HighEnd" : "EditorialHub", e._b({
                            key: n,
                            tag: "component",
                            attrs: {
                                "is-hero": 0 === n,
                                "button-class": "-secondary",
                                data: component.isHighEnd ? null : component,
                                "analytic-value": "".concat(n + 1),
                                "can-set-header-display": component.isHighEnd ? 0 === n : null
                            },
                            on: {
                                "link-clicked": t => e.trackPushLinkClick(t, component, n),
                                "play-pause-clicked": t => e.trackPushVideoAction("video_".concat(t ? "play" : "pause"), e.push, n),
                                "sound-clicked": t => e.trackPushVideoAction("video_sound_".concat(t ? "on" : "off"), e.push, n)
                            }
                        }, "component", component.props || {}, !1))
                    })), 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/5e8ee-9b30e.js.map