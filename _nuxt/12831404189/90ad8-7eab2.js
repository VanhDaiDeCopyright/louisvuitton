(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [7], {
        1072: function(t, l, e) {
            "use strict";
            e(82);
            var n = e(1032),
                r = e(946),
                o = e(16),
                d = {
                    components: {
                        TabsNavigation: n.a,
                        BackButton: r.a
                    },
                    props: {
                        reverseOrder: {
                            type: Boolean,
                            default: !1
                        },
                        withBackButton: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        scrollNavWidth: 0,
                        scrollNavValue: 0,
                        scrollNavDiff: 0,
                        scrollNavButtonWidth: 0
                    }),
                    computed: {
                        navigationLinks() {
                            return (this.$store.state.faq.faqNavigation.subSections || []).map((link => ({ ...link,
                                ...this.currentPage === o.a.EmailUs && "ContactUS" === link.identifier && {
                                    hasActiveSubLink: !0
                                },
                                active: link.identifier.toLowerCase() === this.currentPage || link["@type"] === this.currentPage
                            })))
                        },
                        title() {
                            return this.$store.state.faq.faqNavigation.title
                        },
                        contactUsUrl() {
                            return this.localePath("contact-us")
                        },
                        currentPage() {
                            return this.$store.state.pageContext.currentPage
                        }
                    },
                    methods: {
                        trackAction(t) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                categoryGa: "client_services",
                                actionGa: "tab_selection",
                                actionId: "tab_selection",
                                labelGa: t,
                                actionPosition: "tab_section",
                                actionType: "navigation"
                            }))
                        }
                    }
                },
                c = (e(1177), e(0)),
                component = Object(c.a)(d, (function() {
                    var t, l = this,
                        e = l._self._c;
                    return e("div", {
                        staticClass: "lv-editorial",
                        class: {
                            "-reversed": l.reverseOrder
                        }
                    }, [e("portal", {
                        attrs: {
                            to: "header"
                        }
                    }, [e("div", {
                        directives: [{
                            name: "sticky",
                            rawName: "v-sticky",
                            value: {
                                position: 2
                            },
                            expression: "{ position: 2 }"
                        }]
                    }, [e("TabsNavigation", {
                        staticClass: "lv-editorial__nav",
                        attrs: {
                            items: l.navigationLinks,
                            "show-menu": !0,
                            "has-drop-down": !0,
                            "a11y-label": l.$t("global_clientservice"),
                            "default-nav": !0
                        },
                        on: {
                            clicked: l.trackAction
                        }
                    }, [null !== (t = l.title) && void 0 !== t && t.length ? e("template", {
                        slot: "title"
                    }, [l._v(l._s(l.title))]) : l._e(), l._v(" "), e("template", {
                        slot: "dropDownButton"
                    }, [l._v(l._s(l.$t("mylv_menu_title")))])], 2)], 1)]), l._v(" "), l.withBackButton ? e("div", {
                        staticClass: "lv-gutters-small"
                    }, [e("BackButton", {
                        staticClass: "lv-editorial__back-button",
                        attrs: {
                            url: l.contactUsUrl
                        },
                        nativeOn: {
                            click: function(t) {
                                return l.$emit("back-button-clicked")
                            }
                        }
                    })], 1) : l._e(), l._v(" "), e("div", {
                        staticClass: "lv-editorial__container",
                        class: {
                            "-below-back-button": l.withBackButton
                        }
                    }, [l._t("header"), l._v(" "), l.$slots.mainTitle ? e("h1", {
                        staticClass: "lv-editorial__title"
                    }, [l._t("mainTitle")], 2) : l._e(), l._v(" "), l.$slots.description ? e("p", {
                        staticClass: "lv-editorial__description"
                    }, [l._t("description")], 2) : l._e(), l._v(" "), l.$slots.topContent ? e("div", {
                        staticClass: "lv-editorial__container-top"
                    }, [l._t("topContent")], 2) : l._e(), l._v(" "), e("div", {
                        staticClass: "lv-editorial__container-bottom"
                    }, [e("div", {
                        staticClass: "lv-editorial__main",
                        class: l.$slots.secondaryContent ? "" : "-fullwidth"
                    }, [l._t("mainContent")], 2), l._v(" "), l.$slots.secondaryContent ? e("div", {
                        staticClass: "lv-editorial__secondary"
                    }, [l._t("secondaryContent")], 2) : l._e()])], 2)], 1)
                }), [], !1, null, null, null);
            l.a = component.exports
        },
        1073: function(t, l, e) {
            "use strict";
            e(82);
            var n = e(17),
                r = e(107),
                o = e(87),
                d = e(11),
                c = {
                    components: {
                        ResponsivePicture: o.default,
                        SmartLink: n.default,
                        Icon: d.default,
                        LoadingButton: r.default
                    },
                    props: {
                        section: {
                            type: Object,
                            required: !0
                        },
                        mediaWidths: {
                            type: Object,
                            default: () => ({})
                        },
                        isPrimary: {
                            type: Boolean,
                            default: !1
                        },
                        headingTag: {
                            type: String,
                            default: "h2"
                        },
                        isLoading: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        formatClass() {
                            return this.section.filename ? "placeholder-".concat(this.section.format.toLowerCase()) : ""
                        }
                    }
                },
                _ = (e(1179), e(0)),
                component = Object(_.a)(c, (function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "lv-service-card"
                    }, [t.section.filename && "service" === t.section.type ? l("ResponsivePicture", {
                        staticClass: "lv-service-card__image",
                        class: t.formatClass,
                        attrs: {
                            filename: t.section.filename,
                            widths: t.mediaWidths,
                            lazy: !0,
                            alt: t.section.imageAlt
                        }
                    }) : t._e(), t._v(" "), l("div", {
                        staticClass: "lv-service-card__infos"
                    }, [l("div", {
                        staticClass: "lv-service-card__infos-wrapper"
                    }, [l(t.headingTag, {
                        tag: "component",
                        staticClass: "lv-service-card__title"
                    }, [t._v("\n        " + t._s(t.section.title) + "\n      ")]), t._v(" "), t.section.description ? l("div", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: t.section.description,
                            expression: "section.description"
                        }],
                        staticClass: "lv-service-card__description body-s"
                    }) : t._e(), t._v(" "), t.section.description2 ? l("div", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: t.section.description2,
                            expression: "section.description2"
                        }],
                        staticClass: "lv-service-card__description body-s"
                    }) : t._e()], 1), t._v(" "), t.section.ctas ? l("div", {
                        staticClass: "lv-service-card__url-wrap"
                    }, t._l(t.section.ctas, (function(e, n) {
                        return l("div", {
                            key: e.id,
                            staticClass: "lv-service-card__url-container"
                        }, [e.title ? l("p", [t._v("\n          " + t._s(e.title) + "\n        ")]) : t._e(), t._v(" "), t.section.hasLoader ? l("LoadingButton", {
                            staticClass: "lv-service-card__url lv-button -with-icon -fullwidth",
                            class: t.isPrimary ? "-primary" : "-secondary",
                            attrs: {
                                "is-loading": t.isLoading,
                                type: e.type,
                                label: e.label
                            },
                            on: {
                                click: l => t.$emit("clicked", {
                                    id: e.id,
                                    position: n + 1,
                                    target: l.target
                                })
                            }
                        }) : l(e.url ? "SmartLink" : "button", {
                            tag: "component",
                            staticClass: "lv-service-card__url lv-button -with-icon",
                            class: [t.isPrimary ? "-primary" : "-secondary", e.url ? "" : "-fullwidth"],
                            attrs: {
                                url: e.url,
                                type: e.type
                            },
                            on: {
                                click: l => t.$emit("clicked", {
                                    id: e.id,
                                    position: n + 1,
                                    target: l.target
                                })
                            },
                            nativeOn: {
                                click: function(l) {
                                    return (l => t.$emit("clicked", {
                                        id: e.id,
                                        position: n + 1,
                                        target: l.target
                                    })).apply(null, arguments)
                                }
                            }
                        }, [e.image ? l("Icon", {
                            staticClass: "lv-service-card__url-icon",
                            attrs: {
                                name: e.image
                            }
                        }) : t._e(), t._v(" "), l("span", [t._v(t._s(e.label))])], 1)], 1)
                    })), 0) : t._e()])], 1)
                }), [], !1, null, null, null);
            l.a = component.exports
        },
        1074: function(t, l, e) {
            "use strict";
            e(3);
            var n = e(11),
                r = e(17),
                o = {
                    components: {
                        Icon: n.default,
                        SmartLink: r.default,
                        SmartPicture: () => Promise.resolve().then(e.bind(null, 109))
                    },
                    props: {
                        items: {
                            type: Array,
                            default: () => []
                        },
                        layoutType: {
                            type: String,
                            default: null
                        },
                        hasArrow: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        hasIcon() {
                            return this.items.some((t => t.icon))
                        },
                        hasImage() {
                            return this.items.some((t => t.image))
                        }
                    }
                },
                d = (e(2084), e(0)),
                component = Object(d.a)(o, (function() {
                    var t = this,
                        l = t._self._c;
                    return l("div", {
                        staticClass: "lv-link-list-card"
                    }, [t.$slots.title || t.$slots.search ? l("div", {
                        class: {
                            "lv-link-list-card__wrapper": !!t.$slots.search
                        }
                    }, [t.$slots.title ? l("div", {
                        staticClass: "lv-link-list-card__title"
                    }, [t._t("title")], 2) : t._e(), t._v(" "), t.$slots.search ? l("div", {
                        staticClass: "lv-link-list-card__search"
                    }, [t._t("search")], 2) : t._e()]) : t._e(), t._v(" "), l("ul", {
                        staticClass: "lv-link-list-card__items lv-list",
                        class: ["-".concat(t.layoutType), {
                            "-with-icon": t.hasIcon || t.hasImage
                        }, {
                            "-with-arrow": t.hasArrow
                        }]
                    }, t._l(t.items, (function(e, n) {
                        return l("li", {
                            key: e.id
                        }, [l("SmartLink", {
                            staticClass: "lv-link-list-card__link",
                            attrs: {
                                spa: {
                                    to: e.url
                                }
                            },
                            nativeOn: {
                                click: function(l) {
                                    return t.$emit("clicked", {
                                        id: e.label,
                                        position: n + 1
                                    })
                                }
                            }
                        }, [e.image ? l("SmartPicture", {
                            staticClass: "lv-link-list-card__link-icon",
                            attrs: {
                                sources: [{
                                    src: e.image
                                }],
                                lazy: !0,
                                "no-spinner": !0,
                                "aria-hidden": "true"
                            }
                        }) : t._e(), t._v(" "), e.icon && t.hasIcon ? l("Icon", {
                            staticClass: "lv-link-list-card__link-icon",
                            attrs: {
                                name: e.icon
                            }
                        }) : t._e(), t._v("\n        " + t._s(e.label) + "\n        "), t.hasArrow && !t.hasIcon ? l("Icon", {
                            staticClass: "lv-link-list-card__link-arrow -mirrored",
                            attrs: {
                                name: "controls-chevron-right"
                            }
                        }) : t._e()], 1)], 1)
                    })), 0), t._v(" "), t._t("button")], 2)
                }), [], !1, null, null, null);
            l.a = component.exports
        },
        1078: function(t, l, e) {
            var content = e(1178);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(10).default)("6531d598", content, !0, {
                sourceMap: !1
            })
        },
        1079: function(t, l, e) {
            var content = e(1180);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(10).default)("0fe2c1e0", content, !0, {
                sourceMap: !1
            })
        },
        1177: function(t, l, e) {
            "use strict";
            e(1078)
        },
        1178: function(t, l, e) {
            var n = e(9)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir] .lv-editorial{background-color:#f8f8f8}@media screen and (min-width:48rem){.lv-editorial__nav{box-sizing:border-box}[dir] .lv-editorial__nav{padding-left:6.4vw;padding-right:6.4vw}}@media screen and (min-width:48rem)and (min-width:48rem){[dir] .lv-editorial__nav{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:48rem)and (min-width:64rem){[dir] .lv-editorial__nav{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:48rem)and (min-width:90rem){[dir] .lv-editorial__nav{padding-left:3.3333333333vw;padding-right:3.3333333333vw}}@media screen and (min-width:64rem){[dir=ltr] .lv-editorial__nav{padding-right:0}[dir=rtl] .lv-editorial__nav{padding-left:0}}[dir=ltr] .lv-editorial__back-button{margin:1rem 0 0 -1rem}[dir=rtl] .lv-editorial__back-button{margin:1rem -1rem 0 0}.lv-editorial__title{color:inherit;font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:1.75rem}[dir] .lv-editorial__title{margin:0 0 1rem}.lv-editorial__title:lang(ko),.lv-editorial__title:lang(zh){font-size:1.35rem}.lv-editorial__title:lang(ja){font-size:1.2rem}.lv-editorial__title:lang(ja),.lv-editorial__title:lang(ko),.lv-editorial__title:lang(th),.lv-editorial__title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial__title:lang(th){word-break:break-word}.lv-editorial__title:lang(vi){line-height:1.3}@media screen and (min-width:64rem){.lv-editorial__title{color:inherit;font-size:2rem;font-weight:400;letter-spacing:.025rem;line-height:2.5rem}.lv-editorial__title:lang(ja),.lv-editorial__title:lang(ko),.lv-editorial__title:lang(zh){font-size:1.5rem}.lv-editorial__title:lang(ja),.lv-editorial__title:lang(ko),.lv-editorial__title:lang(th),.lv-editorial__title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial__title:lang(th){word-break:break-word}.lv-editorial__title:lang(vi){line-height:1.3}}[dir] .lv-editorial__description{margin:1rem 0 2rem}.lv-editorial__container{box-sizing:border-box}[dir] .lv-editorial__container{padding:2.5rem 6.4vw 5rem}@media screen and (min-width:48rem){[dir] .lv-editorial__container{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-editorial__container{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-editorial__container{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}[dir] .lv-editorial__container-bottom,[dir] .lv-editorial__container-top{margin-top:1.5rem}.lv-editorial.-reversed .lv-editorial__container-bottom{display:flex;flex-direction:column-reverse}@media screen and (min-width:64rem){.lv-editorial__container-bottom{display:flex}[dir] .lv-editorial__container-bottom{margin-top:2rem}}[dir] .lv-editorial__container.-below-back-button{padding-top:0}[dir] .lv-editorial__block:not(:last-child){margin-bottom:1.5rem}@media screen and (min-width:64rem){[dir] .lv-editorial__block:not(:last-child){margin-bottom:2.5rem}}[dir] .lv-editorial__secondary{margin-top:1.5rem}@media screen and (min-width:64rem){[dir] .lv-editorial__secondary{margin-top:0}}[dir] .lv-editorial.-reversed .lv-editorial__secondary{margin-bottom:1.5rem;margin-top:0}@media screen and (min-width:64rem){.lv-editorial__main,.lv-editorial__secondary{display:flex;flex-direction:column}.lv-editorial__main{width:50vw}[dir=ltr] .lv-editorial__main{padding-right:1.5rem}[dir=rtl] .lv-editorial__main{padding-left:1.5rem}.lv-editorial__main.-fullwidth{width:100%}.lv-editorial__secondary{flex:1}[dir] .lv-editorial__secondary{padding-top:0}}", ""]), n.locals = {}, t.exports = n
        },
        1179: function(t, l, e) {
            "use strict";
            e(1079)
        },
        1180: function(t, l, e) {
            var n = e(9)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".lv-service-card{display:flex;flex-direction:column;height:auto}[dir] .lv-service-card{background-color:#fff}@media screen and (min-width:64rem){.lv-service-card{flex-direction:row}}.lv-service-card__infos{display:flex;flex-direction:column;height:auto;justify-content:space-between;word-break:break-word}[dir] .lv-service-card__infos{padding:2rem}@media screen and (min-width:64rem){.lv-service-card__image,.lv-service-card__image+.lv-service-card__infos{flex:0 0 50%;max-width:50%;width:50%}}.lv-service-card__image,.lv-service-card__infos{box-sizing:border-box;max-width:100%;width:100%}.lv-service-card__title{color:inherit;font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}[dir] .lv-service-card__title{margin-bottom:1rem;margin-top:0}.lv-service-card__title:lang(ko),.lv-service-card__title:lang(zh){font-size:1.0125rem}.lv-service-card__title:lang(ja){font-size:.9rem}.lv-service-card__title:lang(ja),.lv-service-card__title:lang(ko),.lv-service-card__title:lang(th),.lv-service-card__title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-service-card__title:lang(th){word-break:break-word}.lv-service-card__title:lang(vi){line-height:1.3}[dir] .lv-service-card__description:not(:last-child){margin-bottom:1rem}[dir] .lv-service-card__description p{margin:0}[dir] .lv-service-card__url-wrap{margin-top:2rem}[dir] .lv-service-card__url-container:not(:last-child){margin-bottom:.5rem}", ""]), n.locals = {}, t.exports = n
        },
        1586: function(t, l, e) {
            var content = e(2085);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, e(10).default)("3a31d634", content, !0, {
                sourceMap: !1
            })
        },
        2084: function(t, l, e) {
            "use strict";
            e(1586)
        },
        2085: function(t, l, e) {
            var n = e(9)((function(i) {
                return i[1]
            }));
            n.push([t.i, '[dir] .lv-link-list-card{background:#fff}.lv-link-list-card__wrapper{display:flex;flex-direction:column}[dir] .lv-link-list-card__wrapper{padding:2rem}[dir] .lv-link-list-card__wrapper .lv-link-list-card__title>*{padding:0}@media screen and (min-width:64rem){.lv-link-list-card__wrapper{align-items:center;flex-direction:row;justify-content:space-between}}[dir] .lv-link-list-card__title{border-bottom:1px solid #e1e1e1}.lv-link-list-card__title>*{color:inherit;font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}[dir] .lv-link-list-card__title>*{margin:0;padding:2rem}.lv-link-list-card__title>:lang(ko),.lv-link-list-card__title>:lang(zh){font-size:1.0125rem}.lv-link-list-card__title>:lang(ja){font-size:.9rem}.lv-link-list-card__title>:lang(ja),.lv-link-list-card__title>:lang(ko),.lv-link-list-card__title>:lang(th),.lv-link-list-card__title>:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__title>:lang(th){word-break:break-word}.lv-link-list-card__title>:lang(vi){line-height:1.3}@media screen and (min-width:68.75rem){.lv-link-list-card__title>*{color:inherit;font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:1.75rem}.lv-link-list-card__title>:lang(ko),.lv-link-list-card__title>:lang(zh){font-size:1.35rem}.lv-link-list-card__title>:lang(ja){font-size:1.2rem}.lv-link-list-card__title>:lang(ja),.lv-link-list-card__title>:lang(ko),.lv-link-list-card__title>:lang(th),.lv-link-list-card__title>:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__title>:lang(th){word-break:break-word}.lv-link-list-card__title>:lang(vi){line-height:1.3}}.lv-link-list-card__search{width:100%}[dir] .lv-link-list-card__search{margin-top:1rem}@media screen and (min-width:64rem){.lv-link-list-card__search{width:21rem}[dir] .lv-link-list-card__search{margin-top:0}}[dir] .lv-link-list-card__items:not(.-with-icon){padding:.5rem 2rem 2rem}[dir] .lv-link-list-card__items:not(.-with-icon) li{margin-top:1.5rem}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link{color:inherit;color:#000;font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link{box-shadow:0 2px 0 -1px currentColor;cursor:pointer;transition:color .3s cubic-bezier(.39,.575,.565,1)}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(ko),.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(zh){font-size:.9rem}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(ja){font-size:.8rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(ko),.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(th),.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(th){word-break:break-word}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:lang(vi){line-height:1.3}@media(forced-colors:active){.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link{box-shadow:none}}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:hover{color:rgba(0,0,0,.6)}}.keyboard-is-used .lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:focus{color:rgba(0,0,0,.6)}.lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:disabled{color:rgba(0,0,0,.4)}[dir] .lv-link-list-card__items:not(.-with-icon) .lv-link-list-card__link:disabled{cursor:auto}[dir] .lv-link-list-card__items:not(.-with-icon).-grid{padding:0 2rem}@media screen and (min-width:64rem){.lv-link-list-card__items:not(.-with-icon).-grid{grid-column-gap:1rem;display:grid;grid-template-columns:repeat(3,1fr)}}.lv-link-list-card__items.-with-arrow,.lv-link-list-card__items.-with-icon{box-sizing:border-box;display:flex;flex-wrap:wrap;overflow:hidden;width:100%}.lv-link-list-card__items.-with-arrow li,.lv-link-list-card__items.-with-icon li{display:flex}.lv-link-list-card__items.-with-icon li{box-sizing:border-box;justify-content:center;width:50%}[dir] .lv-link-list-card__items.-with-icon li{border-top:1px solid #f8f8f8;padding:2rem 1rem;text-align:center}[dir=ltr] .lv-link-list-card__items.-with-icon li{border-left:1px solid #f8f8f8}[dir=rtl] .lv-link-list-card__items.-with-icon li{border-right:1px solid #f8f8f8}[dir] .lv-link-list-card__items.-with-icon li:nth-child(-n+2){border-top:none}@media screen and (min-width:48rem){.lv-link-list-card__items.-with-icon li{width:33.33%}}.lv-link-list-card__items.-with-icon .lv-link-list-card__link{color:inherit;color:#000;font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1rem;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-link-list-card__items.-with-icon .lv-link-list-card__link{box-shadow:0 2px 0 -1px currentColor;box-shadow:none;cursor:pointer;transition:color .3s cubic-bezier(.39,.575,.565,1)}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(ko),.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(zh){font-size:.7875rem}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(ja){font-size:.7rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(ko),.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(th),.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(th){word-break:break-word}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:lang(vi){line-height:1.3}@media(forced-colors:active){.lv-link-list-card__items.-with-icon .lv-link-list-card__link{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-link-list-card__items.-with-icon .lv-link-list-card__link{box-shadow:none}}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){.lv-link-list-card__items.-with-icon .lv-link-list-card__link:hover{color:rgba(0,0,0,.6)}}.keyboard-is-used .lv-link-list-card__items.-with-icon .lv-link-list-card__link:focus{color:rgba(0,0,0,.6)}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:disabled{color:rgba(0,0,0,.4)}[dir] .lv-link-list-card__items.-with-icon .lv-link-list-card__link:disabled{cursor:auto}.lv-link-list-card__items.-with-icon .lv-link-list-card__link:hover{color:inherit}[dir] .lv-link-list-card__items.-with-icon .lv-link-list-card__link:hover{box-shadow:0 1px 0}.lv-link-list-card__items.-with-icon .lv-link-list-card__link-icon{display:block;height:2rem;width:2rem}[dir] .lv-link-list-card__items.-with-icon .lv-link-list-card__link-icon{margin:0 auto .5rem}@media screen and (min-width:48rem){[dir] .lv-link-list-card__items.-with-icon:not(.-compact) li:nth-child(-n+3){border-top:none}.lv-link-list-card__items.-with-icon.-compact li{width:50%}}.lv-link-list-card__items.-with-icon.-horizontal li{justify-content:flex-start;width:100%}[dir] .lv-link-list-card__items.-with-icon.-horizontal li{border:0;margin:0 0 1rem;padding:0}[dir=ltr] .lv-link-list-card__items.-with-icon.-horizontal li{text-align:left}[dir=rtl] .lv-link-list-card__items.-with-icon.-horizontal li{text-align:right}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link{align-items:center;color:inherit;display:flex;font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1rem}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(ko),.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(zh){font-size:.7875rem}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(ja){font-size:.7rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(ko),.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(th),.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(th){word-break:break-word}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:lang(vi){line-height:1.3}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:hover{position:relative}[dir] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:hover{box-shadow:none}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:hover:after{bottom:0;content:"";height:1px;position:absolute;width:calc(100% - 2.5rem)}[dir] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:hover:after{background:#000}[dir=ltr] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:hover:after{right:0}[dir=rtl] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link:hover:after{left:0}.lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link-icon{flex:1 0 auto;height:1.5rem;width:1.5rem}[dir] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link-icon{margin:0}[dir=ltr] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link-icon{padding-right:1rem}[dir=rtl] .lv-link-list-card__items.-with-icon.-horizontal .lv-link-list-card__link-icon{padding-left:1rem}[dir] .lv-link-list-card__items.-with-arrow{padding-bottom:0;padding-top:0}.lv-link-list-card__items.-with-arrow li{align-items:center;width:100%}[dir] .lv-link-list-card__items.-with-arrow li{margin-bottom:0;margin-top:0}[dir] .lv-link-list-card__items.-with-arrow li:not(:last-child){border-bottom:1px solid #e1e1e1}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link{align-items:center;color:inherit;display:flex;font-size:1rem;font-weight:400;justify-content:space-between;letter-spacing:.025rem;line-height:1.25rem;width:100%}[dir] .lv-link-list-card__items.-with-arrow .lv-link-list-card__link{box-shadow:none;padding:1.5rem 0}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(ko),.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(zh){font-size:.9rem}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(ja){font-size:.8rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(ko),.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(th),.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(th){word-break:break-word}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link:lang(vi){line-height:1.3}.lv-link-list-card__items.-with-arrow .lv-link-list-card__link-arrow{flex-shrink:0;height:.75rem;width:.75rem}[dir=ltr] .lv-link-list-card__items.-with-arrow .lv-link-list-card__link-arrow{margin-left:2rem}[dir=rtl] .lv-link-list-card__items.-with-arrow .lv-link-list-card__link-arrow{margin-right:2rem}.lv-link-list-card__button{width:calc(100% - 4rem)}[dir] .lv-link-list-card__button{margin:2.5rem 2rem 2rem}@media screen and (min-width:64rem){.lv-link-list-card__button{min-width:17.5rem;width:auto}}', ""]), n.locals = {}, t.exports = n
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/90ad8-7eab2.js.map