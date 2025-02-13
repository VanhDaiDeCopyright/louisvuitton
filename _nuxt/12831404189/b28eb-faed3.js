(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [147, 143], {
        1162: function(t, e, o) {
            "use strict";
            o.d(e, "a", (function() {
                return n
            })), o.d(e, "c", (function() {
                return c
            })), o.d(e, "b", (function() {
                return d
            })), o.d(e, "d", (function() {
                return f
            }));
            o(25);
            var l = o(7),
                r = o.n(l);
            const n = "follow_us",
                c = "sitemap",
                d = "seoLinks";

            function f(t, e, o) {
                return { ...m(t),
                    ...h(e),
                    ...k(o)
                }
            }

            function _(t) {
                return t.map((t => {
                    let e = t.iconId;
                    return e = "allcountry/Apps/instagram.png" === t.iconId ? "social-instagram" : "google" === t.iconId ? "social-googleplus" : "social-".concat(t.iconId), { ...t,
                        icon: e
                    }
                }))
            }

            function m(t) {
                var e;
                const o = {
                    additionalText: "",
                    folders: [],
                    categories: [],
                    legalSection: []
                };
                o.legalSection = r()(t, "legalSection", []).map(v), o.legalSection.filter((t => {
                    let {
                        type: e
                    } = t;
                    return "folder" === e
                })).forEach((section => o.folders.push(section)));
                const l = r()(t, "folders", []);
                o.icons = _((null === (e = l.find((t => {
                    let {
                        idElem: e
                    } = t;
                    return "follow_us" === e
                }))) || void 0 === e ? void 0 : e.content) || []);
                const n = r()(t, "categories", []);
                return o.categories = n.map((t => {
                    const content = t.content.map(v);
                    return n.indexOf(t) === n.length - 1 && (l.forEach((t => {
                        const e = v(t);
                        o.folders.push(e), content.push(e)
                    })), content.push(o.folders)), { ...t,
                        content: content
                    }
                })), o
            }

            function v(t) {
                return "follow_us" === t.idElem && (t.content = _(t.content)), { ...t,
                    id: t.idElem,
                    type: t.typeElem
                }
            }

            function h(t) {
                return {
                    additionalSections: r()(t, "content.sections", []).map((section => ({
                        index: Number((section["@id"] || "").replace("section", "")),
                        value: section.details
                    }))).filter((section => Boolean(section.value))).sort(((a, b) => a.index < b.index ? -1 : 1)).map((section => section.value))
                }
            }

            function k(t) {
                return {
                    sitemap: {
                        url: r()(t, "siteMapUrl", ""),
                        links: r()(t, "footerLinks", []).map((link => ({
                            label: link.label,
                            url: link.url,
                            type: "internal"
                        })))
                    }
                }
            }
        },
        1568: function(t, e, o) {
            "use strict";
            var l = o(16),
                r = o(17),
                n = o(373),
                c = o(5),
                d = o(4),
                f = {
                    tracking: {
                        default: {
                            actionPosition: "footer_legal"
                        }
                    },
                    components: {
                        SmartLink: r.default,
                        Flag: n.a
                    },
                    computed: {
                        isShop() {
                            return this.$store.getters[d.LOCALE_CONTEXT_IS_SHOP]
                        },
                        shipToTitle() {
                            const label = "".concat(this.$store.state.localeContext.countryFlagLabel, " - ").concat(this.$i18n.t("Change_location"));
                            return this.isShop ? "".concat(this.$i18n.t("Ship_to"), " ").concat(label) : label
                        },
                        shipTo() {
                            return {
                                label: this.$store.state.localeContext.countryFlagLabel,
                                icon: this.$store.state.localeContext.countryFlag,
                                url: this.$store.getters[c.GET_SEO_URL](l.e.Dispatch)
                            }
                        },
                        trackingDataShipTo() {
                            return this.$lvTrackingGenerateData({
                                actionType: "country_flag",
                                actionId: "change_country_flag",
                                actionGa: "change_country_flag"
                            })
                        }
                    }
                },
                _ = o(0),
                component = Object(_.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("SmartLink", {
                        directives: [{
                            name: "tracking",
                            rawName: "v-tracking",
                            value: t.trackingDataShipTo,
                            expression: "trackingDataShipTo"
                        }],
                        staticClass: "ship-to lv-link",
                        attrs: {
                            url: t.shipTo.url,
                            type: "internal",
                            "aria-label": t.shipToTitle,
                            "no-spa": "",
                            title: t.shipToTitle
                        }
                    }, [t.isShop ? e("span", [t._v(t._s(t.$t("Ship_to")))]) : t._e(), t._v(" "), t.shipTo.icon ? e("Flag", {
                        attrs: {
                            flag: t.shipTo.icon
                        }
                    }) : t._e(), t._v(" "), e("span", {
                        staticClass: "-text-is-underline country-label"
                    }, [t._v(t._s(t.shipTo.label))])], 1)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        1749: function(t, e, o) {
            var content = o(2402);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("24e97653", content, !0, {
                sourceMap: !1
            })
        },
        1750: function(t, e, o) {
            var content = o(2404);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("cd81de06", content, !0, {
                sourceMap: !1
            })
        },
        1751: function(t, e, o) {
            var content = o(2406);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("5e61de30", content, !0, {
                sourceMap: !1
            })
        },
        1752: function(t, e, o) {
            var content = o(2408);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("d9e5755e", content, !0, {
                sourceMap: !1
            })
        },
        1753: function(t, e, o) {
            var content = o(2410);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("475a4a56", content, !0, {
                sourceMap: !1
            })
        },
        1754: function(t, e, o) {
            var content = o(2412);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("41f59429", content, !0, {
                sourceMap: !1
            })
        },
        1755: function(t, e, o) {
            var content = o(2414);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("4a9afee3", content, !0, {
                sourceMap: !1
            })
        },
        1756: function(t, e, o) {
            var content = o(2416);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("6f86b2ed", content, !0, {
                sourceMap: !1
            })
        },
        1757: function(t, e, o) {
            var content = o(2418);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, o(10).default)("033dd90c", content, !0, {
                sourceMap: !1
            })
        },
        2401: function(t, e, o) {
            "use strict";
            o(1749)
        },
        2402: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-footer-breadcrumb{display:flex;flex-direction:column;justify-content:center}[dir] .lv-footer-breadcrumb{padding-bottom:2rem;padding-top:2rem}@media screen and (min-width:64rem){.lv-footer-breadcrumb{align-items:flex-start;flex-direction:row;justify-content:space-between}[dir] .lv-footer-breadcrumb{border-bottom:1px solid #e1e1e1}[dir] .lv-footer-breadcrumb.-is-empty{border-bottom:0;padding:0}}.lv-footer-breadcrumb__logo{flex:1;width:9.625rem}[dir] .lv-footer-breadcrumb__logo{margin:0 auto}@media screen and (min-width:64rem){.lv-footer-breadcrumb__logo{display:none}}[dir] .lv-footer-breadcrumb__list{margin-top:1.5rem;text-align:center}@media screen and (min-width:64rem){[dir] .lv-footer-breadcrumb__list{margin-top:0}[dir=ltr] .lv-footer-breadcrumb__list{text-align:left}[dir=rtl] .lv-footer-breadcrumb__list{text-align:right}}.lv-footer-breadcrumb__list .lv-smart-link{color:#000;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-footer-breadcrumb__list .lv-smart-link{box-shadow:0 2px 0 -1px currentColor;cursor:pointer;transition:color .3s cubic-bezier(.39,.575,.565,1)}@media(forced-colors:active){.lv-footer-breadcrumb__list .lv-smart-link{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-footer-breadcrumb__list .lv-smart-link{box-shadow:none}}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){.lv-footer-breadcrumb__list .lv-smart-link:hover{color:rgba(0,0,0,.6)}}.keyboard-is-used .lv-footer-breadcrumb__list .lv-smart-link:focus{color:rgba(0,0,0,.6)}.lv-footer-breadcrumb__list .lv-smart-link:disabled{color:rgba(0,0,0,.4)}[dir] .lv-footer-breadcrumb__list .lv-smart-link:disabled{cursor:auto}.lv-footer-breadcrumb__item{display:inline}.lv-footer-breadcrumb__item:not(:last-child):after{content:"-"}[dir] .lv-footer-breadcrumb__item:not(:last-child):after{margin:0 .5rem}.lv-footer-breadcrumb__action-button{display:none}@media screen and (min-width:64rem){.lv-footer-breadcrumb__action-button{display:inline-block;flex-shrink:0}[dir=ltr] .lv-footer-breadcrumb__action-button{margin-left:1.5rem}[dir=rtl] .lv-footer-breadcrumb__action-button{margin-right:1.5rem}}', ""]), l.locals = {}, t.exports = l
        },
        2403: function(t, e, o) {
            "use strict";
            o(1750)
        },
        2404: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-footer-cta{align-items:center;display:flex;justify-content:space-between}[dir] .lv-footer-cta{box-shadow:inset 0 0 0 1px currentColor;padding:.875rem 1rem}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){[dir] .lv-footer-cta:hover{box-shadow:inset 0 0 0 2px currentColor}}.lv-footer-cta .lv-icon{height:.75rem;width:.75rem}", ""]), l.locals = {}, t.exports = l
        },
        2405: function(t, e, o) {
            "use strict";
            o(1751)
        },
        2406: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-footer-social-links{display:flex;flex-wrap:wrap;justify-content:center}[dir] .lv-footer-social-links{padding-top:1rem}@media screen and (min-width:64rem){[dir] .lv-footer-social-links{padding:1rem 0}}.lv-footer-social-links__item{align-items:center;display:flex;justify-content:center}[dir] .lv-footer-social-links__item{padding:.5rem}.lv-footer-social-links__item .lv-smart-link{color:inherit;height:2rem;width:2rem}[dir] .lv-footer-social-links__item .lv-smart-link{text-align:center}.lv-footer-social-links__item .lv-smart-link .lv-icon{fill:currentColor;height:2rem;width:2rem}", ""]), l.locals = {}, t.exports = l
        },
        2407: function(t, e, o) {
            "use strict";
            o(1752)
        },
        2408: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, "[dir] .lv-footer-categories-detail__item{margin:.5rem 1rem 1.5rem}@media screen and (min-width:64rem){[dir] .lv-footer-categories-detail__item{margin:0 0 1rem}[dir] .lv-footer-categories-detail__item:last-child{margin-bottom:0}}.lv-footer-categories-detail__link{color:inherit;width:100%}.lv-footer-categories-detail__link-icon{display:inline-block;height:.75rem;width:.75rem}[dir=ltr] .lv-footer-categories-detail__link-icon{margin-right:.125rem}[dir=rtl] .lv-footer-categories-detail__link-icon{margin-left:.125rem}.lv-footer-categories-detail__text a,.lv-footer-categories-detail__text button{color:inherit;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-footer-categories-detail__text a,[dir] .lv-footer-categories-detail__text button{box-shadow:0 2px 0 -1px currentColor}@media(forced-colors:active){.lv-footer-categories-detail__text a,.lv-footer-categories-detail__text button{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-footer-categories-detail__text a,[dir] .lv-footer-categories-detail__text button{box-shadow:none}}[dir] .lv-footer-categories-detail__newsletter-desc{margin:0 0 1.5rem}", ""]), l.locals = {}, t.exports = l
        },
        2409: function(t, e, o) {
            "use strict";
            o(1753)
        },
        2410: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, "[dir] .lv-footer-categories{border-bottom:1px solid #e1e1e1}@media screen and (min-width:64rem){.lv-footer-categories{display:flex;flex-direction:row}[dir] .lv-footer-categories{padding-bottom:2.5rem;padding-top:2.5rem}}.lv-footer-categories .lv-expandable-panel>button{width:100%}@media screen and (min-width:64rem){.lv-footer-categories__category{flex:1}[dir=ltr] .lv-footer-categories__category:not(:last-child){padding-right:2rem}[dir=rtl] .lv-footer-categories__category:not(:last-child){padding-left:2rem}}.lv-footer-categories__title{align-items:center;color:inherit;display:flex;font-size:1rem;font-weight:400;justify-content:space-between;letter-spacing:.025rem;line-height:1.25rem}[dir] .lv-footer-categories__title{border-top:1px solid #e1e1e1;padding:1rem 0}.lv-footer-categories__title:lang(ko),.lv-footer-categories__title:lang(zh){font-size:.9rem}.lv-footer-categories__title:lang(ja){font-size:.8rem}.lv-footer-categories__title:lang(ja),.lv-footer-categories__title:lang(ko),.lv-footer-categories__title:lang(th),.lv-footer-categories__title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-footer-categories__title:lang(th){word-break:break-word}.lv-footer-categories__title:lang(vi){line-height:1.3}@media screen and (min-width:64rem){.lv-footer-categories__title{color:inherit;font-size:.625rem;font-weight:400;letter-spacing:.0625rem;line-height:1rem;text-transform:uppercase}[dir] .lv-footer-categories__title{border:none;padding:0 0 1.5rem}.lv-footer-categories__title:lang(ar),.lv-footer-categories__title:lang(zh){font-size:.6875rem}.lv-footer-categories__title:lang(ja),.lv-footer-categories__title:lang(ko),.lv-footer-categories__title:lang(th),.lv-footer-categories__title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-footer-categories__title:lang(th){word-break:break-word}.lv-footer-categories__title:lang(vi){line-height:1.3}}.lv-footer-categories__title .lv-icon{height:.75rem;width:.75rem}[dir] .lv-footer-categories__content{padding-bottom:1rem}@media screen and (min-width:64rem){[dir] .lv-footer-categories__content{padding:0}}[dir] .lv-footer.-contrast .lv-footer-categories,[dir] .lv-footer.-contrast .lv-footer-categories .lv-expandable-panel:last-child,[dir] .lv-footer.-contrast .lv-footer-categories .lv-footer-categories__title{border-color:hsla(0,0%,100%,.2)}", ""]), l.locals = {}, t.exports = l
        },
        2411: function(t, e, o) {
            "use strict";
            o(1754)
        },
        2412: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, "[dir] .lv-footer-closable-panel{border-bottom:1px solid #e1e1e1}.lv-footer-closable-panel__header{position:relative}[dir] .lv-footer-closable-panel__header{padding-top:2rem}.lv-footer-closable-panel__header .-only-icon{position:absolute;top:1.25rem}[dir=ltr] .lv-footer-closable-panel__header .-only-icon{right:-.5rem}[dir=rtl] .lv-footer-closable-panel__header .-only-icon{left:-.5rem}[dir] .lv-footer-closable-panel__title{margin:0;padding:0 3rem;text-align:center}.lv-footer-closable-panel.-is-on-top{bottom:100%;overflow:hidden;position:absolute;z-index:2}[dir] .lv-footer-closable-panel.-is-on-top{border:none;left:0;right:0}[dir] .lv-footer-closable-panel .lv-icon-link-list{padding:2.5rem 1.5rem 0}", ""]), l.locals = {}, t.exports = l
        },
        2413: function(t, e, o) {
            "use strict";
            o(1755)
        },
        2414: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, "[dir] .lv-footer-folder-links{padding:1rem 0 2.5rem;text-align:center}.lv-footer-folder-links__item{display:inline-block;width:100%}[dir] .lv-footer-folder-links__item{margin:.5rem 0}", ""]), l.locals = {}, t.exports = l
        },
        2415: function(t, e, o) {
            "use strict";
            o(1756)
        },
        2416: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, "[dir] .lv-footer-legal{padding-bottom:1.5rem;padding-top:1.5rem}.lv-footer-legal__main{align-items:center;display:flex;flex-direction:column;justify-content:center}@media screen and (min-width:64rem){.lv-footer-legal__main{flex-direction:row-reverse;justify-content:space-between}}.lv-footer-legal__list{align-items:center;color:inherit;display:flex;flex-wrap:wrap;font-size:1rem;font-weight:400;justify-content:center;letter-spacing:.025rem;line-height:1.25rem;width:100%}[dir] .lv-footer-legal__list{padding:.25rem 0;text-align:center}.lv-footer-legal__list:lang(ko),.lv-footer-legal__list:lang(zh){font-size:.9rem}.lv-footer-legal__list:lang(ja){font-size:.8rem}.lv-footer-legal__list:lang(ja),.lv-footer-legal__list:lang(ko),.lv-footer-legal__list:lang(th),.lv-footer-legal__list:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-footer-legal__list:lang(th){word-break:break-word}.lv-footer-legal__list:lang(vi){line-height:1.3}@media screen and (min-width:64rem){.lv-footer-legal__list{color:inherit;font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1rem;width:auto}[dir] .lv-footer-legal__list{padding:.5rem 0}.lv-footer-legal__list:lang(ko),.lv-footer-legal__list:lang(zh){font-size:.7875rem}.lv-footer-legal__list:lang(ja){font-size:.7rem}.lv-footer-legal__list:lang(ja),.lv-footer-legal__list:lang(ko),.lv-footer-legal__list:lang(th),.lv-footer-legal__list:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-footer-legal__list:lang(th){word-break:break-word}.lv-footer-legal__list:lang(vi){line-height:1.3}}.lv-footer-legal__item{color:currentColor;max-width:100%}[dir] .lv-footer-legal__item{margin:.5rem 0;padding:0 .5rem}@media screen and (min-width:64rem){[dir] .lv-footer-legal__item{margin:0;padding:1rem}}.lv-footer-legal__item .lv-icon{height:.75rem;width:.75rem}[dir=ltr] .lv-footer-legal__item .lv-icon{margin-right:.125rem}[dir=rtl] .lv-footer-legal__item .lv-icon{margin-left:.125rem}[dir] .lv-footer-legal__item.-shipto .lv-flag{margin:0 .25rem}.lv-footer-legal__consumers-rights-uae .lv-icon{height:2rem;width:2rem}@media screen and (min-width:64rem){[dir=ltr] .lv-footer-legal__list:first-child .lv-footer-legal__item:last-child{padding-right:0}[dir=rtl] .lv-footer-legal__list:first-child .lv-footer-legal__item:last-child{padding-left:0}}.lv-footer-legal__list:last-child{align-items:center;flex-flow:column nowrap}@media screen and (min-width:64rem){.lv-footer-legal__list:last-child{flex-direction:row}[dir=ltr] .lv-footer-legal__list:last-child .lv-footer-legal__item{text-align:right}[dir=rtl] .lv-footer-legal__list:last-child .lv-footer-legal__item{text-align:left}[dir=ltr] .lv-footer-legal__list:last-child .lv-footer-legal__item:first-child{padding-left:0}[dir=rtl] .lv-footer-legal__list:last-child .lv-footer-legal__item:first-child{padding-right:0}}.lv-footer-legal__additional-sections{display:flex;flex-direction:column}[dir] .lv-footer-legal__additional-sections{padding:1.5rem 0}@media screen and (min-width:64rem){.lv-footer-legal__additional-sections{flex-direction:row}[dir] .lv-footer-legal__additional-sections{padding-top:0}}.lv-footer-legal__additional-section{flex:1 1 0;font-size:.75rem;opacity:.6}@media screen and (min-width:64rem){[dir] .lv-footer-legal__additional-section{padding:0 1rem}[dir=ltr] .lv-footer-legal__additional-section:first-child{padding-left:0}[dir=ltr] .lv-footer-legal__additional-section:last-child,[dir=rtl] .lv-footer-legal__additional-section:first-child{padding-right:0}[dir=rtl] .lv-footer-legal__additional-section:last-child{padding-left:0}}.lv-footer-legal__logo{display:none;width:9.625rem}[dir] .lv-footer-legal__logo{margin:auto;padding:1.625rem 0}@media screen and (min-width:64rem){.lv-footer-legal__logo{display:flex}}.lv-footer-legal__logo .lv-smart-link{color:currentColor}", ""]), l.locals = {}, t.exports = l
        },
        2417: function(t, e, o) {
            "use strict";
            o(1757)
        },
        2418: function(t, e, o) {
            var l = o(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-footer{position:relative}[dir] .lv-footer{border-top:1px solid #e1e1e1}@media screen and (min-width:48rem){.lv-footer__panel-columns{-moz-column-count:3;column-count:3;-moz-column-gap:1rem;column-gap:1rem}}[dir] .lv-footer,[dir] .lv-footer .lv-footer-closable-panel{background-color:#fff}.lv-footer.-contrast{color:#fff}[dir] .lv-footer.-contrast{background-color:#000}[dir] .lv-footer.-contrast,[dir] .lv-footer.-contrast .lv-footer-closable-panel,[dir] .lv-footer.-contrast .lv-footer-closable-panel__header,[dir] .lv-footer.-contrast .lv-footer-legal__categories{border-color:hsla(0,0%,100%,.2)}[dir] .lv-footer.-contrast .lv-footer-closable-panel{background-color:#000}", ""]), l.locals = {}, t.exports = l
        },
        3610: function(t, e, o) {
            "use strict";
            o.r(e);
            o(3);
            var footer = o(112),
                l = o(1162),
                r = o(14),
                n = o(16),
                c = o(241),
                d = o(17),
                f = o(5),
                _ = {
                    components: {
                        Logo: c.a,
                        SmartLink: d.default
                    },
                    props: {
                        links: {
                            type: Array,
                            default: () => []
                        }
                    },
                    computed: {
                        breadcrumb() {
                            const t = {
                                    position: 1,
                                    "@type": "ListItem",
                                    item: {
                                        name: this.$t("global_louis_vuitton"),
                                        "@id": this.$store.getters[f.GET_SEO_URL](n.e.Homepage)
                                    }
                                },
                                e = this.$store.state.pageContext.breadcrumb.itemListElement || [];
                            return [...!this.isSmall && e.length ? [t] : [], ...e.map((t => ({ ...t,
                                position: this.isSmall ? t.position : t.position + 1
                            })))]
                        },
                        breadcrumbList() {
                            const t = { ...this.$store.state.pageContext.breadcrumb
                            };
                            return t.itemListElement = this.breadcrumb, t
                        },
                        openedPanel() {
                            return this.$store.state.footer.ui.panelContent
                        },
                        isSeoLinksOpen() {
                            return this.openedPanel === l.b
                        },
                        seoLinks() {
                            return this.$store.state.pageContext.seoLinks
                        },
                        isSmall() {
                            return this.$store.getters[r.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("m")
                        },
                        isEmpty() {
                            return 0 === (this.seoLinks.items || []).length && 0 === (this.breadcrumb || []).length
                        }
                    },
                    watch: {
                        openedPanel(t, e) {
                            t || e !== l.b || this.$nextTick((() => {
                                this.$refs.button.focus()
                            }))
                        }
                    },
                    methods: {
                        openSeoLinksPanel() {
                            this.$emit("action-click", {
                                id: l.b
                            })
                        },
                        getTrackingData(t) {
                            return this.$lvTrackingGenerateData({
                                actionGa: "breadcrumb_navigation",
                                labelGa: t.item.name
                            })
                        }
                    }
                },
                m = (o(2401), o(0)),
                component = Object(m.a)(_, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-footer-breadcrumb lv-gutters",
                        class: {
                            "-is-empty": t.isEmpty
                        }
                    }, [t.isSmall ? e("Logo", {
                        staticClass: "lv-footer-breadcrumb__logo"
                    }) : t._e(), t._v(" "), (t.breadcrumb || []).length ? e("nav", {
                        attrs: {
                            "aria-label": t.$t("global_breadcrumb"),
                            role: "navigation"
                        }
                    }, [e("ul", {
                        staticClass: "lv-footer-breadcrumb__list lv-list"
                    }, t._l(t.breadcrumb, (function(o, l) {
                        return e("li", {
                            key: o.position,
                            staticClass: "lv-footer-breadcrumb__item"
                        }, [o.item["@id"] ? e("SmartLink", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingData(o),
                                expression: "getTrackingData(item)"
                            }],
                            attrs: {
                                url: o.item["@id"],
                                type: "internal",
                                "aria-current": l === t.breadcrumb.length - 1 ? "page" : null
                            }
                        }, [t._v(t._s(o.item.name))]) : [t._v(t._s(o.item.name))]], 2)
                    })), 0), t._v(" "), e("script", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: JSON.stringify(t.breadcrumbList),
                            expression: "JSON.stringify(breadcrumbList)"
                        }],
                        tag: "component",
                        attrs: {
                            type: "application/ld+json"
                        }
                    })], 1) : t._e(), t._v(" "), (t.seoLinks.items || []).length ? e("button", {
                        ref: "button",
                        staticClass: "lv-footer-breadcrumb__action-button",
                        attrs: {
                            "aria-expanded": t.isSeoLinksOpen ? "true" : "false"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), t.openSeoLinksPanel.apply(null, arguments)
                            }
                        }
                    }, [t._v("\n    " + t._s(t.seoLinks.title) + "\n  ")]) : t._e()], 1)
                }), [], !1, null, null, null),
                v = component.exports,
                h = o(957),
                k = o(11),
                x = (o(82), {
                    components: {
                        SmartLink: d.default,
                        Icon: k.default
                    },
                    props: {
                        input: {
                            type: Object,
                            default: () => ({})
                        }
                    }
                }),
                y = (o(2403), Object(m.a)(x, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("SmartLink", {
                        staticClass: "lv-footer-cta lv-button -fullwidth list-label-s",
                        attrs: {
                            url: t.input.url,
                            type: t.input.redirection,
                            "aria-label": t.input.labelAlt
                        }
                    }, [t._v("\n  " + t._s(t.input.label) + "\n  "), e("Icon", {
                        staticClass: "-mirrored",
                        attrs: {
                            name: "controls-chevron-right"
                        }
                    })], 1)
                }), [], !1, null, null, null).exports),
                S = {
                    tracking: {
                        default: {
                            actionGa: "network_layer"
                        }
                    },
                    components: {
                        Icon: k.default,
                        SmartLink: d.default
                    },
                    computed: {
                        socialLinks() {
                            return this.$store.state.footer.icons || []
                        }
                    },
                    methods: {
                        getTrackingData(link) {
                            return this.$lvTrackingGenerateData({
                                actionId: "social_network_selection",
                                event: "follow",
                                channelId: link.label,
                                shareChannelId: link.label,
                                outboundLink: link.url,
                                labelGa: link.label
                            })
                        }
                    }
                },
                C = (o(2405), Object(m.a)(S, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("ul", {
                        staticClass: "lv-footer-social-links lv-list"
                    }, t._l(t.socialLinks, (function(link, o) {
                        return e("li", {
                            key: o,
                            staticClass: "lv-footer-social-links__item"
                        }, [e("SmartLink", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingData(link),
                                expression: "getTrackingData(link)"
                            }],
                            attrs: {
                                "aria-label": "".concat(t.$t("alt_social_network_follow"), " ").concat(link.label, " (").concat(t.$t("title_new_window"), ")"),
                                url: link.url,
                                type: link.redirection,
                                "not-crawlable": !0
                            }
                        }, [e("Icon", {
                            attrs: {
                                name: link.icon
                            }
                        })], 1)], 1)
                    })), 0)
                }), [], !1, null, null, null).exports),
                w = o(270),
                T = {
                    components: {
                        SmartLink: d.default,
                        FooterCta: y,
                        FooterSocialLinks: C
                    },
                    mixins: [w.a],
                    props: {
                        data: {
                            type: Array,
                            default: () => []
                        },
                        hasSocialLinks: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        isSmall() {
                            return this.$store.getters[r.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("m") && this.$store.state.isMediaQueryInit
                        },
                        openedPanel() {
                            return this.$store.state.footer.ui.panelContent
                        }
                    },
                    mounted() {
                        const {
                            detailText: t
                        } = this.$refs;
                        t && t[0].addEventListener("click", (t => {
                            this.trackCtaAction(t.target.innerHTML)
                        }))
                    },
                    methods: {
                        onFolderClick(t) {
                            this.$lvTrackingSendEvent(this.getTrackingData(t)), this.$emit("action-click", {
                                id: t.id,
                                ..."folder" === t.type && {
                                    linkButton: this.$refs["button_".concat(t.id)]
                                }
                            })
                        },
                        getTrackingData(t) {
                            let {
                                type: e,
                                redirection: o,
                                label: label,
                                id: l
                            } = t, r = l;
                            return "folder" === e ? r = this.openedPanel === l ? "".concat(r, "_layer_hidden") : "".concat(r, "_layer_displayed") : "external" !== o && r || (r = label), this.$lvTrackingGenerateData({
                                actionId: r,
                                actionGa: r,
                                actionType: "navigation",
                                actionPosition: "footer_category"
                            })
                        },
                        trackCtaAction(label) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionGa: label,
                                actionId: label,
                                actionType: "navigation",
                                actionPosition: "footer"
                            }))
                        }
                    }
                },
                L = (o(2407), Object(m.a)(T, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-footer-categories-detail"
                    }, [t.data.length ? e("ul", {
                        staticClass: "lv-list"
                    }, t._l(t.data, (function(o, l) {
                        return e("li", {
                            key: l,
                            staticClass: "lv-footer-categories-detail__item"
                        }, ["link" === o.type ? e("SmartLink", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingData(o),
                                expression: "getTrackingData(item)"
                            }],
                            staticClass: "lv-footer-categories-detail__link list-label-s",
                            attrs: {
                                type: o.redirection,
                                url: o.url
                            }
                        }, [o.icon ? e("img", {
                            staticClass: "lv-footer-categories-detail__link-icon",
                            attrs: {
                                src: o.icon,
                                alt: ""
                            }
                        }) : t._e(), t._v("\n        " + t._s(o.label) + "\n      ")]) : "cta" === o.type ? e("div", [e("p", {
                            staticClass: "lv-footer-categories-detail__newsletter-desc body-s"
                        }, [t._v("\n          " + t._s(o.description) + "\n        ")]), t._v(" "), e("FooterCta", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingData(o),
                                expression: "getTrackingData(item)"
                            }],
                            attrs: {
                                input: o
                            }
                        })], 1) : "scriptLink" === o.type && "" !== o.script ? e("button", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingData(o),
                                expression: "getTrackingData(item)"
                            }],
                            staticClass: "lv-footer-categories-detail__link list-label-s",
                            attrs: {
                                onclick: o.script
                            }
                        }, [t._v("\n        " + t._s(o.label) + "\n      ")]) : "folder" === o.type && t.isSmall && "follow_us" === o.id ? e("div", {
                            staticClass: "lv-footer-categories-detail__link list-label-s"
                        }, [e("FooterSocialLinks")], 1) : "folder" === o.type ? e("button", {
                            ref: "button_".concat(o.id),
                            refInFor: !0,
                            staticClass: "lv-footer-categories-detail__link list-label-s",
                            attrs: {
                                "aria-expanded": o.id === t.openedPanel ? "true" : "false"
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.onFolderClick(o)
                                }
                            }
                        }, [t._v("\n        " + t._s(o.label) + "\n      ")]) : e("div", 0 === l ? {
                            directives: [{
                                name: "safe-html",
                                rawName: "v-safe-html",
                                value: t.transformText(o.label),
                                expression: "transformText(item.label)"
                            }],
                            ref: "detailText",
                            refInFor: !0,
                            staticClass: "lv-footer-categories-detail__text body-s"
                        } : {
                            directives: [{
                                name: "safe-html",
                                rawName: "v-safe-html",
                                value: o.label,
                                expression: "item.label"
                            }],
                            ref: "detailText",
                            refInFor: !0,
                            staticClass: "lv-footer-categories-detail__text body-s"
                        })], 1)
                    })), 0) : t._e()])
                }), [], !1, null, null, null).exports),
                I = {
                    components: {
                        Accordion: h.default,
                        Icon: k.default,
                        FooterCategoriesDetail: L,
                        NewsletterSidePanel: () => o.e(106).then(o.bind(null, 920))
                    },
                    data: () => ({
                        footerList: []
                    }),
                    computed: {
                        currentPage() {
                            return this.$store.state.pageContext.currentPage
                        },
                        isSmall() {
                            return this.$store.getters[r.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("m") && this.$store.state.isMediaQueryInit
                        },
                        categories() {
                            return this.$store.state.footer.categories
                        }
                    },
                    watch: {
                        currentPage() {
                            this.footerList = []
                        }
                    },
                    methods: {
                        onButtonClick(section) {
                            const t = section.id ? section.id : null;
                            this.$emit("action-click", {
                                id: t
                            })
                        },
                        handleScroll(t) {
                            if (!this.isSmall) return;
                            const e = this.$el.querySelectorAll(".lv-expandable-panel")[t];
                            this.$lvSmoothScroll({
                                element: e
                            })
                        }
                    }
                },
                $ = (o(2409), Object(m.a)(I, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-footer-categories lv-gutters"
                    }, [t.isSmall ? [e("Accordion", {
                        attrs: {
                            items: t.categories,
                            exclusive: ""
                        },
                        on: {
                            "after-enter": t.handleScroll
                        },
                        scopedSlots: t._u([{
                            key: "button",
                            fn: function(o) {
                                let {
                                    item: l,
                                    isExpanded: r
                                } = o;
                                return [e("span", {
                                    staticClass: "lv-footer-categories__title"
                                }, [t._v("\n          " + t._s(l.title) + "\n          "), e("Icon", {
                                    staticClass: "lv-icon",
                                    attrs: {
                                        name: r ? "controls-lessinfos" : "controls-moreinfos"
                                    }
                                })], 1)]
                            }
                        }, {
                            key: "content",
                            fn: function(t) {
                                let {
                                    item: o
                                } = t;
                                return [e("FooterCategoriesDetail", {
                                    attrs: {
                                        data: o.content
                                    }
                                })]
                            }
                        }], null, !1, 488415752),
                        model: {
                            value: t.footerList,
                            callback: function(e) {
                                t.footerList = e
                            },
                            expression: "footerList"
                        }
                    })] : t._l(t.categories, (function(o, l) {
                        return e("section", {
                            key: l,
                            staticClass: "lv-footer-categories__category",
                            attrs: {
                                "aria-labelledby": "footerCategoryTitle_".concat(l)
                            }
                        }, [e("div", {
                            staticClass: "lv-footer-categories__title",
                            attrs: {
                                id: "footerCategoryTitle_".concat(l)
                            }
                        }, [t._v("\n        " + t._s(o.title) + "\n      ")]), t._v(" "), e("FooterCategoriesDetail", {
                            attrs: {
                                data: o.content
                            },
                            on: {
                                "action-click": function(e) {
                                    return t.$emit("action-click", e)
                                }
                            }
                        })], 1)
                    })), t._v(" "), e("NewsletterSidePanel")], 2)
                }), [], !1, null, null, null).exports),
                E = o(151),
                O = o(346),
                D = o(149),
                A = o.n(D),
                N = {
                    components: {
                        Icon: k.default,
                        GlobalEvents: O.a,
                        FocusLock: A.a
                    },
                    props: {
                        title: {
                            type: String,
                            default: null
                        },
                        id: {
                            type: String,
                            default: null
                        },
                        isOpened: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    watch: {
                        isOpened(t) {
                            t && this.$nextTick((() => {
                                this.$refs.close.focus()
                            }))
                        }
                    },
                    methods: {
                        close(t) {
                            this.isOpened && (this.$emit("close"), this.track(), t.preventDefault())
                        },
                        track() {
                            const t = "".concat(this.id, "_layer_hidden");
                            this.$lvTrackingSendEvent({ ...this.$lvTrackingGenerateData({
                                    actionPosition: "follow_us" === this.id ? "footer_category" : "footer_legal",
                                    actionId: t,
                                    actionGa: t
                                })
                            })
                        }
                    }
                },
                P = (o(2411), Object(m.a)(N, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("FocusLock", {
                        directives: [{
                            name: "click-outside",
                            rawName: "v-click-outside",
                            value: t.isOpened && t.close,
                            expression: "isOpened && close"
                        }],
                        staticClass: "lv-footer-closable-panel lv-gutters",
                        attrs: {
                            disabled: !t.isOpened
                        }
                    }, [e("section", {
                        attrs: {
                            "aria-labelledby": t.title && "footerClosablePanelTitle_".concat(t.id)
                        }
                    }, [e("div", {
                        staticClass: "lv-footer-closable-panel__header"
                    }, [t.title ? e("div", {
                        staticClass: "lv-footer-closable-panel__title heading-s",
                        attrs: {
                            id: "footerClosablePanelTitle_".concat(t.id)
                        }
                    }, [t._v("\n        " + t._s(t.title) + "\n      ")]) : t._e(), t._v(" "), e("button", {
                        ref: "close",
                        staticClass: "lv-button -only-icon",
                        attrs: {
                            "aria-label": t.$t("svg_close_title")
                        },
                        on: {
                            click: t.close
                        }
                    }, [e("Icon", {
                        attrs: {
                            name: "controls-close"
                        }
                    })], 1)]), t._v(" "), t._t("default"), t._v(" "), e("EscapeHandler", {
                        attrs: {
                            priority: 1
                        },
                        on: {
                            esc: t.close
                        }
                    })], 2)])
                }), [], !1, null, null, null).exports),
                F = {
                    components: {
                        SmartLink: d.default
                    },
                    props: {
                        links: {
                            type: Array,
                            default: () => []
                        },
                        id: {
                            type: String,
                            default: null
                        }
                    },
                    methods: {
                        getTrackingData(link) {
                            let t = link.label;
                            return t = this.id === l.b ? "you_may_also_be_interested_in_".concat(t) : "".concat(this.id, "_selected_").concat(t), this.$lvTrackingGenerateData({
                                actionPosition: "footer_legal",
                                actionId: t,
                                actionGa: t
                            })
                        }
                    }
                },
                M = (o(2413), Object(m.a)(F, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("ul", {
                        staticClass: "lv-footer-folder-links lv-list"
                    }, t._l(t.links, (function(link, o) {
                        return e("li", {
                            key: o,
                            staticClass: "lv-footer-folder-links__item"
                        }, [e("SmartLink", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingData(link),
                                expression: "getTrackingData(link)"
                            }],
                            staticClass: "lv-link list-label-s",
                            attrs: {
                                label: link.label,
                                type: link.type,
                                url: link.url,
                                "no-spa": ""
                            }
                        })], 1)
                    })), 0)
                }), [], !1, null, null, null).exports),
                j = (o(25), o(4)),
                z = o(109),
                G = o(538),
                R = o(1568),
                H = o(52),
                V = o(8),
                U = o(990),
                B = {
                    tracking: {
                        default: {
                            actionPosition: "footer_legal"
                        }
                    },
                    components: {
                        SmartLink: d.default,
                        ServiceSwitch: G.a,
                        SmartPicture: z.default,
                        Logo: c.a,
                        ShipTo: R.a
                    },
                    computed: {
                        hasDevtools() {
                            return !Object(V.n)() && this.$config.lv_devtool
                        },
                        sections() {
                            return [{
                                type: "folder",
                                label: this.$i18n.t("footer_sitemap"),
                                id: l.c
                            }, ...this.$store.state.footer.legalSection.filter((t => {
                                let {
                                    type: e
                                } = t;
                                return ["link", "folder", "scriptLink"].includes(e)
                            })) || []]
                        },
                        isMiddleEast() {
                            return this.$store.getters[j.LOCALE_CONTEXT_IS_MIDDLE_EAST]
                        },
                        isExchangeOrder() {
                            return this.$store.state.cart.isExchangeOrder
                        },
                        consumerRights() {
                            const {
                                locale: t,
                                invoiceCountryCode: e
                            } = this.$store.state.localeContext, o = Object(H.e)(this, "Logo_Consumer_Rights_UAE.png"), l = t.includes("eng") ? "https://consumerrights.ae/en/Pages/default.aspx" : "https://consumerrights.ae/ar/Pages/default.aspx";
                            return {
                                isAue: this.isMiddleEast && "AE" === e,
                                url: l,
                                sources: [{
                                    size: "2rem",
                                    src: o
                                }]
                            }
                        },
                        additionalSections() {
                            return this.$store.state.footer.legalSection.filter((t => "text" === t.type)).map((t => t.label.replace(/(<a[^>]*href="[^"]*"[^>]*)>/gi, '$1 class="lv-link">'))) || []
                        },
                        hasAdditionalSections() {
                            return this.$store.getters[j.LOCALE_CONTEXT_IS_KOREA] || this.$store.getters[j.LOCALE_CONTEXT_IS_CHINA] || this.$store.getters[j.LOCALE_CONTEXT_IS_BRAZIL]
                        },
                        hasServiceSwitch() {
                            return this.$store.getters[j.LOCALE_CONTEXT_IS_MIDDLE_EAST] || this.$store.getters[j.LOCALE_CONTEXT_IS_HONGKONG] || this.$store.getters[j.LOCALE_CONTEXT_IS_INDONESIA]
                        },
                        trackingDataAue() {
                            return this.$lvTrackingGenerateData({
                                actionId: "consummer_rights_me",
                                actionGa: "consummer_rights_me"
                            })
                        },
                        openedPanel() {
                            return this.$store.state.footer.ui.panelContent
                        },
                        isSmall() {
                            return this.$store.getters[r.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("m")
                        }
                    },
                    methods: {
                        onButtonClick(section) {
                            this.sendTracking(section), this.$emit("action-click", {
                                id: section.id,
                                ..."folder" === section.type && {
                                    linkButton: this.$refs["button_".concat(section.id)]
                                }
                            })
                        },
                        getTrackingDataSection(section) {
                            const {
                                type: t,
                                redirection: e,
                                label: label,
                                id: o
                            } = section;
                            let l = o;
                            return "folder" === t ? l = this.openedPanel === o ? "".concat(l, "_layer_hidden") : "".concat(l, "_layer_displayed") : "external" === e && (l = label), this.$lvTrackingGenerateData({
                                actionId: l,
                                actionGa: l
                            })
                        },
                        sendTracking(section) {
                            this.$lvTrackingSendEvent(this.getTrackingDataSection(section))
                        },
                        onDevtoolsClick() {
                            this.$root.$emit(U.a)
                        }
                    }
                },
                Q = (o(2415), Object(m.a)(B, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-footer-legal lv-gutters"
                    }, [e("div", {
                        staticClass: "lv-footer-legal__main"
                    }, [e("ul", {
                        staticClass: "lv-footer-legal__list lv-list"
                    }, [t._l(t.sections, (function(section) {
                        return e("li", {
                            key: section.label,
                            staticClass: "lv-footer-legal__item"
                        }, ["button" === section.type || "folder" === section.type ? e("button", {
                            ref: "button_" + section.id,
                            refInFor: !0,
                            attrs: {
                                "aria-expanded": section.id === t.openedPanel ? "true" : "false"
                            },
                            on: {
                                click: function(e) {
                                    return e.stopPropagation(), t.onButtonClick(section)
                                }
                            }
                        }, [t._v("\n          " + t._s(section.label) + "\n        ")]) : "scriptLink" === section.type && "" !== section.script ? e("button", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingDataSection(section),
                                expression: "getTrackingDataSection(section)"
                            }],
                            staticClass: "lv-link",
                            attrs: {
                                onclick: section.script
                            }
                        }, [t._v("\n          " + t._s(section.label) + "\n        ")]) : e("SmartLink", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getTrackingDataSection(section),
                                expression: "getTrackingDataSection(section)"
                            }],
                            staticClass: "lv-link",
                            attrs: {
                                url: section.url,
                                type: section.redirection || "internal"
                            }
                        }, [section.icon ? e("img", {
                            staticClass: "lv-icon",
                            attrs: {
                                src: section.icon,
                                alt: ""
                            }
                        }) : t._e(), t._v("\n          " + t._s(section.label) + "\n        ")])], 1)
                    })), t._v(" "), t.consumerRights.isAue ? e("li", {
                        staticClass: "lv-footer-legal__item lv-footer-legal__consumers-rights-uae"
                    }, [e("SmartLink", {
                        directives: [{
                            name: "tracking",
                            rawName: "v-tracking",
                            value: t.trackingDataAue,
                            expression: "trackingDataAue"
                        }],
                        staticClass: "lv-link",
                        attrs: {
                            url: t.consumerRights.url,
                            "aria-label": t.$t("alt_label_logo_consumer_rights_uae"),
                            type: "external",
                            rel: "nofollow"
                        }
                    }, [e("SmartPicture", {
                        staticClass: "lv-icon",
                        attrs: {
                            alt: t.$t("alt_label_logo_consumer_rights_uae"),
                            lazy: !0,
                            sources: t.consumerRights.sources
                        }
                    })], 1)], 1) : t._e(), t._v(" "), e("client-only", [t.hasDevtools ? e("li", {
                        staticClass: "lv-footer-legal__item"
                    }, [e("button", {
                        on: {
                            click: function(e) {
                                return t.onDevtoolsClick()
                            }
                        }
                    }, [t._v("Devtool")])]) : t._e()])], 2), t._v(" "), e("ul", {
                        staticClass: "lv-footer-legal__list lv-list"
                    }, [e("li", {
                        staticClass: "lv-footer-legal__item -shipto"
                    }, [t.isExchangeOrder ? t._e() : e("ShipTo")], 1), t._v(" "), t.hasServiceSwitch ? e("li", {
                        staticClass: "lv-footer-legal__item"
                    }, [e("ServiceSwitch", {
                        attrs: {
                            "layout-type": "footer"
                        }
                    })], 1) : t._e()])]), t._v(" "), t.additionalSections.length ? e("div", {
                        staticClass: "lv-footer-legal__additional-sections"
                    }, t._l(t.additionalSections, (function(t) {
                        return e("div", {
                            directives: [{
                                name: "safe-html",
                                rawName: "v-safe-html",
                                value: t,
                                expression: "additional"
                            }],
                            key: t.label,
                            staticClass: "lv-footer-legal__additional-section"
                        })
                    })), 0) : t._e(), t._v(" "), t.isSmall ? t._e() : e("div", {
                        staticClass: "lv-footer-legal__logo"
                    }, [e("Logo")], 1)])
                }), [], !1, null, null, null).exports),
                X = {
                    tracking: {
                        default: {
                            actionType: "navigation",
                            actionPosition: "footer",
                            categoryGa: "footer"
                        }
                    },
                    components: {
                        FooterBreadcrumb: v,
                        FooterCategories: $,
                        TransitionExpand: E.default,
                        FooterFolderLinks: M,
                        FooterClosablePanel: P,
                        FooterSocialLinks: C,
                        FooterLegal: Q
                    },
                    data: () => ({
                        SITEMAP_ID: l.c,
                        FOLLOW_US_ID: l.a,
                        SEO_LINKS_PANEL_ID: l.b,
                        focusItem: null
                    }),
                    computed: {
                        panelContent() {
                            return this.$store.state.footer.ui.panelContent || null
                        },
                        panels() {
                            return (this.$store.state.footer.folders || []).concat(this.sitemapPanel).concat(this.seoLinksPanel)
                        },
                        isSmall() {
                            return this.$store.getters[r.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("m")
                        },
                        sitemapPanel() {
                            const {
                                links: t,
                                url: e
                            } = this.$store.state.footer.sitemap, content = null != e && e.length ? [{
                                label: this.$i18n.t("footer_sitemap"),
                                url: e,
                                type: "internal"
                            }, ...t] : t;
                            return {
                                id: l.c,
                                label: this.$i18n.t("footer_sitemap"),
                                type: "folder",
                                class: "lv-footer__panel-columns",
                                content: content
                            }
                        },
                        seoLinksPanel() {
                            const {
                                seoLinks: t
                            } = this.$store.state.pageContext;
                            return {
                                id: l.b,
                                label: t.title,
                                type: "folder",
                                content: t.items
                            }
                        },
                        hasContrast() {
                            return this.$store.state.footer.ui.display.contrast
                        }
                    },
                    methods: {
                        async closePanel() {
                            this.$store.commit(footer.FOOTER_SET_PANEL_CONTENT_MUTATION, null), await this.$nextTick(), this.focusItem && this.focusItem.focus(), this.focusItem = null
                        },
                        onNavigationAction(t) {
                            let {
                                id: e,
                                linkButton: o = null
                            } = t;
                            const l = this.panelContent === e ? null : e;
                            this.$store.commit(footer.FOOTER_SET_PANEL_CONTENT_MUTATION, l), o && (this.focusItem = o[0])
                        },
                        scrollToPanel(t) {
                            const {
                                $el: e
                            } = (this.$refs[t].length ? this.$refs[t][0] : this.$refs[t]) || {};
                            e && (this.isSmall ? this.$nextTick((() => {
                                const {
                                    clientHeight: t
                                } = e, o = this.$lvStickyGetTotalHeight(), {
                                    clientHeight: l,
                                    offsetTop: r
                                } = this.$el;
                                t < window.innerHeight - l || this.$lvSmoothScroll({
                                    value: () => r - t - o
                                })
                            })) : this.$lvSmoothScroll({
                                element: e,
                                duration: 300
                            }))
                        }
                    }
                },
                W = (o(2417), Object(m.a)(X, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("footer", {
                        staticClass: "lv-footer",
                        class: {
                            "-contrast": t.hasContrast
                        },
                        attrs: {
                            role: "contentinfo"
                        }
                    }, [e("FooterBreadcrumb", {
                        on: {
                            "action-click": t.onNavigationAction
                        }
                    }), t._v(" "), e("FooterCategories", {
                        on: {
                            "action-click": t.onNavigationAction
                        }
                    }), t._v(" "), t._l(t.panels, (function(o) {
                        return e("TransitionExpand", t._g({
                            key: o.id
                        }, { ...!t.isSmall && {
                                enter: () => {
                                    t.scrollToPanel(o.id)
                                }
                            },
                            ...t.isSmall && {
                                "after-enter": () => {
                                    t.scrollToPanel(o.id)
                                }
                            }
                        }), [e("FooterClosablePanel", {
                            directives: [{
                                name: "show",
                                rawName: "v-show",
                                value: o.id === t.panelContent,
                                expression: "panel.id === panelContent"
                            }],
                            ref: o.id,
                            refInFor: !0,
                            class: {
                                "-is-on-top": t.isSmall
                            },
                            attrs: {
                                id: o.id,
                                "is-opened": t.panelContent === o.id,
                                title: o.label
                            },
                            on: {
                                close: t.closePanel
                            }
                        }, [o.id === t.FOLLOW_US_ID ? e("FooterSocialLinks") : e("FooterFolderLinks", {
                            class: o.class,
                            attrs: {
                                id: o.id,
                                links: o.content
                            }
                        })], 1)], 1)
                    })), t._v(" "), e("FooterLegal", {
                        on: {
                            "action-click": t.onNavigationAction
                        }
                    })], 2)
                }), [], !1, null, null, null));
            e.default = W.exports
        },
        957: function(t, e, o) {
            "use strict";
            o.r(e);
            o(3);
            var l = o(51),
                r = o.n(l),
                n = o(325);
            let c = 0;
            var d = {
                    components: {
                        ExpandablePanel: n.default
                    },
                    props: {
                        items: {
                            type: Array,
                            required: !0
                        },
                        exclusive: {
                            type: Boolean,
                            default: !1
                        },
                        collapsible: {
                            type: Boolean,
                            default: !0
                        },
                        value: {
                            type: Array,
                            default: void 0
                        },
                        noDefer: {
                            type: Boolean,
                            default: !1
                        },
                        maxHeight: {
                            type: Number,
                            default: null
                        },
                        hasItemsWithNoExpandableContent: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => (c += 1, {
                        uid: c,
                        defaultId: null,
                        internalValue: [],
                        maxItemHeight: 0
                    }),
                    computed: {
                        externalOrIntervalValue() {
                            return void 0 === this.value ? this.internalValue : this.value
                        },
                        expandedItems() {
                            var t = this;
                            return this.items.map((function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return e.identifier ? t.externalOrIntervalValue.some((t => t.identifier === e.identifier)) : t.externalOrIntervalValue.includes(e)
                            }))
                        },
                        componentId() {
                            return this.$attrs.id || this.defaultId
                        },
                        isExpandDisabled() {
                            return 1 === this.externalOrIntervalValue.length && !this.collapsible
                        }
                    },
                    watch: {
                        collapsible: {
                            immediate: !0,
                            handler() {
                                !this.collapsible && this.externalOrIntervalValue.length <= 0 && this.changeValue([this.items[0]])
                            }
                        },
                        maxHeight: {
                            immediate: !0,
                            handler(t) {
                                t && this.$nextTick((() => {
                                    const t = this.items.map(((t, e) => this.$refs["panel-".concat(e)][0].$el)).reduce(((t, e) => t + e.getBoundingClientRect().height), 0);
                                    this.maxItemHeight = this.maxHeight - t
                                }))
                            }
                        },
                        items() {
                            this.internalValue = []
                        }
                    },
                    mounted() {
                        this.defaultId = this.$el.id
                    },
                    methods: {
                        hasNoExpandableContent(t) {
                            if (!this.hasItemsWithNoExpandableContent) return !1;
                            const {
                                section: section = {}
                            } = t;
                            return !Array.isArray(section)
                        },
                        changeValue(t) {
                            this.$emit("input", t), this.internalValue = t
                        },
                        toggleItem(t, e) {
                            if (this.expandedItems[e]) {
                                if (!this.collapsible && 1 === this.externalOrIntervalValue.length) return;
                                this.changeValue(this.externalOrIntervalValue.filter((e => !r()(e, t))))
                            } else this.exclusive ? this.changeValue([t]) : this.changeValue([...this.externalOrIntervalValue, t])
                        },
                        onKeyboardNavigation(t, e) {
                            let o, l = e - 1,
                                r = e + 1;
                            switch (t) {
                                case "end":
                                    o = "panel-".concat(this.expandedItems.length - 1);
                                    break;
                                case "up":
                                    l < 0 && (l = 0), o = "panel-".concat(l);
                                    break;
                                case "down":
                                    r > this.expandedItems.length - 1 && (r = this.expandedItems.length - 1), o = "panel-".concat(r);
                                    break;
                                default:
                                    o = "panel-0"
                            }
                            this.$refs[o][0].setFocus()
                        }
                    }
                },
                f = d,
                _ = o(0),
                component = Object(_.a)(f, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.items && t.items.length ? e("div", {
                        staticClass: "lv-accordion",
                        attrs: {
                            id: "accordion".concat(t.uid)
                        }
                    }, [t._l(t.items, (function(o, l) {
                        return [t.hasNoExpandableContent(o) ? t._t("button", null, {
                            item: o,
                            index: l
                        }) : e("ExpandablePanel", {
                            key: "".concat(t.componentId, "-").concat(l),
                            ref: "panel-".concat(l),
                            refInFor: !0,
                            attrs: {
                                "content-id": "".concat(t.componentId, "-").concat(l),
                                value: t.expandedItems[l],
                                "max-height": t.maxItemHeight,
                                "no-defer": o.noDefer || t.noDefer,
                                disabled: t.isExpandDisabled && t.expandedItems[l]
                            },
                            on: {
                                input: function(e) {
                                    return t.toggleItem(o, l)
                                },
                                "keyboard-navigation": function(e) {
                                    return t.onKeyboardNavigation(e, l)
                                },
                                "after-enter": function(e) {
                                    return t.$emit("after-enter", l)
                                },
                                "after-leave": function(e) {
                                    return t.$emit("after-leave", l)
                                },
                                "button-clicked": function(e) {
                                    return t.$emit("accordion-clicked", {
                                        item: o,
                                        isExpanded: t.expandedItems[l]
                                    })
                                }
                            },
                            scopedSlots: t._u([{
                                key: "button",
                                fn: function() {
                                    return [t._t("button", null, {
                                        item: o,
                                        isExpanded: t.expandedItems[l],
                                        index: l
                                    })]
                                },
                                proxy: !0
                            }, {
                                key: "content",
                                fn: function() {
                                    return [t._t("content", null, {
                                        item: o,
                                        isExpanded: t.expandedItems[l],
                                        index: l
                                    })]
                                },
                                proxy: !0
                            }, {
                                key: "extra",
                                fn: function() {
                                    return [t._t("extra", null, {
                                        item: o,
                                        isExpanded: t.expandedItems[l],
                                        index: l
                                    })]
                                },
                                proxy: !0
                            }], null, !0)
                        })]
                    }))], 2) : t._e()
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        990: function(t, e, o) {
            "use strict";
            o.d(e, "c", (function() {
                return l
            })), o.d(e, "b", (function() {
                return r
            })), o.d(e, "a", (function() {
                return n
            }));
            const l = "LVVue",
                r = "cachebusting",
                n = "lv-devtools-open"
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/b28eb-faed3.js.map