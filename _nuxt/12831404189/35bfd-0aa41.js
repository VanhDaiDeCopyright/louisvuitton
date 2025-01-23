(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [1], {
        1032: function(t, n, r) {
            "use strict";
            var l = r(151),
                o = r(11),
                e = r(17),
                v = r(29),
                d = {
                    components: {
                        SmartLink: e.default,
                        Icon: o.default
                    },
                    props: {
                        items: {
                            type: Array,
                            default: null
                        },
                        isDropDownActive: {
                            type: Boolean,
                            default: !1
                        },
                        defaultNav: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        scrollNavButtonWidth: 0,
                        scrollNavWidth: 0,
                        scrollNavValue: 0,
                        scrollNavDiff: 0
                    }),
                    computed: {
                        isRTL() {
                            return "rtl" === this.$store.state.localeContext.localeDirection
                        },
                        hasLeftNavArrow() {
                            return Math.abs(this.scrollNavValue)
                        },
                        hasRightNavArrow() {
                            return Math.abs(this.scrollNavValue) < this.scrollNavWidth - 8
                        }
                    },
                    mounted() {
                        this.initScrollNav()
                    },
                    destroyed() {
                        window.removeEventListener("resize", this.onResizeListener)
                    },
                    methods: {
                        initScrollNav() {
                            this.isDropDownActive && !this.defaultNav || (this.onResizeListener = Object(v.a)((() => {
                                if (!this.$refs.tablist) return this.scrollNavWidth = 0, void(this.scrollNavDiff = 0);
                                this.scrollNavWidth = this.$refs.tablist.scrollWidth - this.$refs.tablist.clientWidth, this.scrollNavButtonWidth = 2 * this.$refs.tabNavRightArrow.clientWidth, this.scrollNavDiff = this.$refs.tablist.clientWidth
                            })), this.onResizeListener(), window.addEventListener("resize", this.onResizeListener))
                        },
                        onScrollTablist() {
                            this.isDropDownActive && !this.defaultNav || Object(v.a)((() => {
                                this.$emit("scrollNavValue", this.$refs.tablist.scrollLeft), this.scrollNavValue = this.$refs.tablist.scrollLeft
                            }))()
                        },
                        moveScrollTablist() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left";
                            this.isRTL && (t = "left" === t ? "right" : "left");
                            const n = "left" === t ? this.scrollNavValue - this.scrollNavDiff + this.scrollNavButtonWidth : this.scrollNavValue + this.scrollNavDiff - this.scrollNavButtonWidth;
                            this.$lvSmoothScroll({
                                container: this.$refs.tablist,
                                horizontal: !0,
                                value: n
                            })
                        }
                    }
                },
                _ = d,
                c = (r(2080), r(0)),
                component = Object(c.a)(_, (function() {
                    var t = this,
                        n = t._self._c;
                    return n("nav", {
                        attrs: {
                            role: "navigation"
                        }
                    }, [t.items && t.items.length ? n("ul", {
                        ref: "tablist",
                        staticClass: "lv-list",
                        class: {
                            "-has-left-arrow": t.hasLeftNavArrow, "-has-right-arrow": t.hasRightNavArrow, "-has-arrows": t.hasLeftNavArrow || t.hasRightNavArrow, "lv-tabs-navigation__tab-list": !t.isDropDownActive || t.defaultNav
                        },
                        on: {
                            "&scroll": function(n) {
                                return t.onScrollTablist.apply(null, arguments)
                            }
                        }
                    }, [t._l(t.items, (function(r, l) {
                        return n("li", {
                            key: l,
                            staticClass: "lv-tabs-navigation__tab list-label-s"
                        }, [r.active ? n("span", {
                            staticClass: "lv-tabs-navigation__url",
                            attrs: {
                                "aria-current": "page"
                            }
                        }, [t._v(t._s(r.labelKey) + " "), t.isDropDownActive ? n("Icon", {
                            attrs: {
                                name: "controls-check"
                            }
                        }) : t._e()], 1) : n("SmartLink", {
                            staticClass: "lv-tabs-navigation__url",
                            attrs: {
                                url: r.url,
                                type: "internal",
                                "aria-current": r.hasActiveSubLink && !0
                            },
                            nativeOn: {
                                click: function(n) {
                                    return t.$emit("clicked", r.identifier)
                                }
                            }
                        }, [t._v("\n        " + t._s(r.labelKey) + "\n        "), t.isDropDownActive && r.hasActiveSubLink ? n("Icon", {
                            attrs: {
                                name: "controls-check"
                            }
                        }) : t._e()], 1)], 1)
                    })), t._v(" "), t.$slots.additionalActions ? n("li", {
                        staticClass: "lv-tabs-navigation__tab list-label-s"
                    }, [t._t("additionalActions")], 2) : t._e()], 2) : t._e(), t._v(" "), n("button", {
                        ref: "tabNavLeftArrow",
                        staticClass: "lv-tabs-navigation__arrow-button -left",
                        class: {
                            "-visible": t.hasLeftNavArrow
                        },
                        attrs: {
                            "aria-label": t.$t("alt_previous"),
                            "aria-controls": "mylv-header-nav",
                            "aria-hidden": !t.hasLeftNavArrow,
                            tabindex: t.hasLeftNavArrow ? "0" : "-1"
                        },
                        on: {
                            click: function(n) {
                                return t.moveScrollTablist("left")
                            }
                        }
                    }, [n("Icon", {
                        attrs: {
                            name: "controls-chevron-left"
                        }
                    })], 1), t._v(" "), n("button", {
                        ref: "tabNavRightArrow",
                        staticClass: "lv-tabs-navigation__arrow-button -right",
                        class: {
                            "-visible": t.hasRightNavArrow
                        },
                        attrs: {
                            "aria-label": t.$t("alt_next"),
                            "aria-controls": "mylv-header-nav",
                            "aria-hidden": !t.hasRightNavArrow,
                            tabindex: t.hasRightNavArrow ? "0" : "-1"
                        },
                        on: {
                            click: function(n) {
                                return t.moveScrollTablist("right")
                            }
                        }
                    }, [n("Icon", {
                        attrs: {
                            name: "controls-chevron-right"
                        }
                    })], 1)])
                }), [], !1, null, null, null),
                h = component.exports,
                f = r(14),
                w = r(5),
                m = {
                    components: {
                        Icon: o.default,
                        TransitionExpand: l.default,
                        TabsNavigationList: h
                    },
                    props: {
                        items: {
                            type: Array,
                            default: null
                        },
                        hasDropDown: {
                            type: Boolean,
                            default: !1
                        },
                        showMenu: {
                            type: Boolean,
                            default: !1
                        },
                        defaultNav: {
                            type: Boolean,
                            default: !1
                        },
                        a11yLabel: {
                            type: String,
                            default: null
                        }
                    },
                    data: () => ({
                        scrollNavWidth: 0,
                        scrollNavValue: 0,
                        isDropdownListOpened: !1
                    }),
                    computed: {
                        hasLeftNavArrow() {
                            return this.scrollNavValue > 0
                        },
                        hasRightNavArrow() {
                            return this.scrollNavValue < this.scrollNavWidth
                        },
                        isSmall() {
                            return this.$store.getters[f.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                        },
                        isDropDownActive() {
                            return this.isSmall && this.hasDropDown
                        },
                        isMylvContext() {
                            return this.$router.currentRoute.fullPath.includes("mylv")
                        },
                        labelMenu() {
                            return this.isMylvContext ? "MyLV" : "Menu"
                        }
                    },
                    mounted() {
                        this.$root.$on("close-modal", this.closeDropdown)
                    },
                    destroyed() {
                        this.closeDropdown(), window.removeEventListener("resize", this.onResizeListener)
                    },
                    methods: {
                        onScrollTablist(t) {
                            this.scrollNavValue = t
                        },
                        moveScrollTablist() {
                            const t = "left" === (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : "left") ? 0 : this.scrollNavWidth;
                            this.$lvSmoothScroll({
                                container: this.$refs.tablist.$el,
                                horizontal: !0,
                                value: t
                            })
                        },
                        closeDropdown() {
                            this.isDropdownListOpened = !1, this.$store.commit(w.SET_IS_STICKY_NAVIGATION_MENU_OPEN, !1)
                        },
                        toggleDropdownList() {
                            this.isDropdownListOpened || this.$lvStickyRefresh(), this.isDropdownListOpened = !this.isDropdownListOpened, this.$store.commit(w.SET_IS_STICKY_NAVIGATION_MENU_OPEN, this.isDropdownListOpened)
                        },
                        setScrollNavWidth(t) {
                            this.scrollNavWidth = t
                        }
                    }
                },
                x = m,
                N = (r(2082), Object(c.a)(x, (function() {
                    var t = this,
                        n = t._self._c;
                    return n("div", {
                        staticClass: "lv-tabs-navigation",
                        class: {
                            "-has-dropdown": t.isDropDownActive
                        }
                    }, [n("div", {
                        staticClass: "lv-tabs-navigation__title"
                    }, [n("p", {
                        staticClass: "heading-s"
                    }, [t._t("title")], 2), t._v(" "), t.showMenu && t.isDropDownActive ? n("nav", {
                        staticClass: "lv-nav",
                        attrs: {
                            role: "navigation",
                            "aria-label": t.labelMenu
                        }
                    }, [n("button", {
                        staticClass: "lv-tabs-navigation__toggler list-label-m",
                        class: {
                            "-opened": t.isDropdownListOpened
                        },
                        attrs: {
                            "aria-expanded": t.isDropdownListOpened ? "true" : "false"
                        },
                        on: {
                            click: t.toggleDropdownList
                        }
                    }, [t._t("dropDownButton"), t._v(" "), n("Icon", {
                        attrs: {
                            name: "controls-chevron-down"
                        }
                    })], 2)]) : t._e()]), t._v(" "), t.showMenu ? [t.isDropDownActive ? n("div", {
                        attrs: {
                            disabled: !t.isDropdownListOpened
                        }
                    }, [t.isDropDownActive ? n("TransitionExpand", {
                        attrs: {
                            disabled: !t.isDropdownListOpened
                        }
                    }, [t.isDropdownListOpened ? n("div", {
                        staticClass: "lv-tabs-navigation__container"
                    }, [n("TabsNavigationList", {
                        ref: "tablist",
                        attrs: {
                            items: t.items,
                            "is-drop-down-active": t.isDropDownActive,
                            "aria-label": t.a11yLabel
                        },
                        on: {
                            "scroll-nav-value": t.scrollNavValue,
                            "scroll-nav-width": t.setScrollNavWidth
                        }
                    }, [n("template", {
                        slot: "additionalActions"
                    }, [t._t("additionalActions")], 2)], 2)], 1) : t._e()]) : t._e()], 1) : n("div", {
                        staticClass: "lv-tabs-navigation__nav",
                        class: {
                            "-no-title": !t.$slots.title
                        }
                    }, [n("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.hasLeftNavArrow,
                            expression: "hasLeftNavArrow"
                        }],
                        ref: "tabNavLeftArrow",
                        staticClass: "lv-tabs-navigation__button -left",
                        class: {
                            "-visible": t.hasLeftNavArrow
                        },
                        attrs: {
                            "aria-label": t.$t("alt_previous"),
                            tabindex: t.hasLeftNavArrow ? "0" : "-1"
                        },
                        on: {
                            click: function(n) {
                                return t.moveScrollTablist("left")
                            }
                        }
                    }, [n("Icon", {
                        staticClass: "-mirrored",
                        attrs: {
                            name: "controls-chevron-left"
                        }
                    })], 1), t._v(" "), n("TabsNavigationList", {
                        ref: "tablist",
                        attrs: {
                            items: t.items,
                            "is-drop-down-active": t.isDropDownActive,
                            "default-nav": t.defaultNav,
                            "aria-label": t.a11yLabel
                        },
                        on: {
                            "scroll-nav-value": t.onScrollTablist,
                            "scroll-nav-width": t.setScrollNavWidth
                        }
                    }), t._v(" "), n("button", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.hasRightNavArrow,
                            expression: "hasRightNavArrow"
                        }],
                        ref: "tabNavRightArrow",
                        staticClass: "lv-tabs-navigation__button -right",
                        class: {
                            "-visible": t.hasRightNavArrow
                        },
                        attrs: {
                            "aria-label": t.$t("alt_next"),
                            tabindex: t.hasRightNavArrow ? "0" : "-1"
                        },
                        on: {
                            click: function(n) {
                                return t.moveScrollTablist("right")
                            }
                        }
                    }, [n("Icon", {
                        staticClass: "-mirrored",
                        attrs: {
                            name: "controls-chevron-right"
                        }
                    })], 1)], 1)] : t._e()], 2)
                }), [], !1, null, null, null));
            n.a = N.exports
        },
        1584: function(t, n, r) {
            var content = r(2081);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("4506458b", content, !0, {
                sourceMap: !1
            })
        },
        1585: function(t, n, r) {
            var content = r(2083);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("d8e8392e", content, !0, {
                sourceMap: !1
            })
        },
        2080: function(t, n, r) {
            "use strict";
            r(1584)
        },
        2081: function(t, n, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".-left.lv-tabs-navigation__arrow-button,.-right.lv-tabs-navigation__arrow-button{height:100%;opacity:0;position:absolute;top:0;visibility:hidden;width:5.5rem}[dir] .-left.lv-tabs-navigation__arrow-button,[dir] .-right.lv-tabs-navigation__arrow-button{transition:visibility .3s cubic-bezier(.39,.575,.565,1),opacity .3s cubic-bezier(.39,.575,.565,1)}.-left.-visible.lv-tabs-navigation__arrow-button,.-right.-visible.lv-tabs-navigation__arrow-button{opacity:1;visibility:visible}[dir=ltr] .-left.lv-tabs-navigation__arrow-button{background:linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0));left:0}[dir=rtl] .-left.lv-tabs-navigation__arrow-button{background:linear-gradient(270deg,#fff 30%,hsla(0,0%,100%,0));right:0}[dir=ltr] .-left.lv-tabs-navigation__arrow-button .lv-icon{margin-left:1.5rem}[dir=rtl] .-left.lv-tabs-navigation__arrow-button .lv-icon{margin-right:1.5rem}[dir=ltr] .-right.lv-tabs-navigation__arrow-button{background:linear-gradient(270deg,#fff 30%,hsla(0,0%,100%,0));right:0;text-align:right}[dir=rtl] .-right.lv-tabs-navigation__arrow-button{background:linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0));left:0;text-align:left}[dir=ltr] .-right.lv-tabs-navigation__arrow-button .lv-icon{margin-right:1.5rem}[dir=rtl] .-right.lv-tabs-navigation__arrow-button .lv-icon{margin-left:1.5rem}.lv-tabs-navigation__arrow-button .lv-icon{height:.75rem;width:.75rem}html[dir][dir=rtl] .lv-tabs-navigation__arrow-button .lv-icon{transform:scaleX(-1)}.lv-tabs-navigation__arrow-button{display:none}[dir] .lv-tabs-navigation__arrow-button{padding:0 0 .75rem}@media screen and (min-width:48rem){.lv-tabs-navigation__arrow-button{display:block}}@media screen and (min-width:68.75rem){.lv-tabs-navigation__arrow-button{height:5rem}[dir] .lv-tabs-navigation__arrow-button{padding:0 2.5rem}}.lv-tabs-navigation__arrow-button.-left{top:-.25rem}[dir=ltr] .lv-tabs-navigation__arrow-button.-left{text-align:left}[dir=rtl] .lv-tabs-navigation__arrow-button.-left{text-align:right}@media screen and (min-width:68.75rem){.lv-tabs-navigation__arrow-button.-left{top:0}[dir=ltr] .lv-tabs-navigation__arrow-button.-left{left:-1rem}[dir=rtl] .lv-tabs-navigation__arrow-button.-left{right:-1rem}}.lv-tabs-navigation__arrow-button.-right{top:-.25rem}[dir=ltr] .lv-tabs-navigation__arrow-button.-right{text-align:right}[dir=rtl] .lv-tabs-navigation__arrow-button.-right{text-align:left}@media screen and (min-width:68.75rem){.lv-tabs-navigation__arrow-button.-right{top:0}}", ""]), l.locals = {}, t.exports = l
        },
        2082: function(t, n, r) {
            "use strict";
            r(1585)
        },
        2083: function(t, n, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-tabs-navigation__tab-list{display:flex;overflow-x:auto;width:100%}.lv-tabs-navigation__tab-list>*{flex-grow:1}.lv-tabs-navigation__tab-list a,.lv-tabs-navigation__tab-list button{--focus-outline-offset:-3px}.lv-tabs-navigation__title{align-items:center;box-sizing:border-box;display:inline-flex;flex:1 0 auto;height:4.5rem;width:100%}[dir] .lv-tabs-navigation__title{border-bottom:1px solid #e1e1e1;padding:1rem 1.5rem}[dir=ltr] .lv-tabs-navigation__title{padding-left:6.4vw}[dir=rtl] .lv-tabs-navigation__title{padding-right:6.4vw}@media screen and (min-width:48rem){[dir=ltr] .lv-tabs-navigation__title{padding-left:3.125vw}[dir=rtl] .lv-tabs-navigation__title{padding-right:3.125vw}}@media screen and (min-width:64rem){[dir=ltr] .lv-tabs-navigation__title{padding-left:3.125vw}[dir=rtl] .lv-tabs-navigation__title{padding-right:3.125vw}}@media screen and (min-width:90rem){[dir=ltr] .lv-tabs-navigation__title{padding-left:3.3333333333vw}[dir=rtl] .lv-tabs-navigation__title{padding-right:3.3333333333vw}}.lv-tabs-navigation__title:first-child:last-child{flex-shrink:1}@media screen and (min-width:64rem){.lv-tabs-navigation__title{width:auto}[dir] .lv-tabs-navigation__title{border-bottom:none}.lv-tabs-navigation__title+.lv-list{width:auto}}.lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){box-sizing:border-box;flex:1;justify-self:start}[dir=ltr] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){border-left:0;padding-left:6.4vw}[dir=rtl] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){border-right:0;padding-right:6.4vw}@media screen and (min-width:48rem){[dir=ltr] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding-left:3.125vw}[dir=rtl] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding-right:3.125vw}}@media screen and (min-width:64rem){[dir=ltr] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding-left:3.125vw}[dir=rtl] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding-right:3.125vw}}@media screen and (min-width:90rem){[dir=ltr] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding-left:3.3333333333vw}[dir=rtl] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding-right:3.3333333333vw}}@media screen and (min-width:64rem){.lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){flex:0 1 auto}[dir] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){padding:1rem 1.5rem}[dir=ltr] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){border-left:1px solid #e1e1e1}[dir=rtl] .lv-tabs-navigation__title+div:not(.lv-tabs__nav):not(.lv-tabs-navigation__nav)>button:not(:last-child){border-right:1px solid #e1e1e1}}.lv-tabs-navigation__url{align-content:center;align-items:center;color:inherit;display:inline-flex;font-size:.875rem;font-weight:400;justify-content:flex-start;letter-spacing:.025rem;line-height:1rem}[dir] .lv-tabs-navigation__url{padding:1rem 1.5rem}.lv-tabs-navigation__url:lang(ko),.lv-tabs-navigation__url:lang(zh){font-size:.7875rem}.lv-tabs-navigation__url:lang(ja){font-size:.7rem}.lv-tabs-navigation__url:lang(ja),.lv-tabs-navigation__url:lang(ko),.lv-tabs-navigation__url:lang(th),.lv-tabs-navigation__url:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-tabs-navigation__url:lang(th){word-break:break-word}.lv-tabs-navigation__url:lang(vi){line-height:1.3}.lv-tabs-navigation__url{justify-content:center}[dir] .lv-tabs-navigation__url{cursor:pointer;transition:box-shadow .3s cubic-bezier(.39,.575,.565,1)}.lv-tabs-navigation__url:not(:disabled):active,.lv-tabs-navigation__url:not(:disabled):hover{color:#000}[dir] .lv-tabs-navigation__url:not(:disabled):active,[dir] .lv-tabs-navigation__url:not(:disabled):hover{box-shadow:inset 0 -1px 0 0 #000}@media(forced-colors:active){[dir] .lv-tabs-navigation__url:not(:disabled):active,[dir] .lv-tabs-navigation__url:not(:disabled):hover{border-bottom:1px solid #000;box-shadow:none}}.nuxt-link-active.lv-tabs-navigation__url,[aria-current=page].lv-tabs-navigation__url,[aria-current=true].lv-tabs-navigation__url,[aria-expanded=true].lv-tabs-navigation__url,[aria-selected=true].lv-tabs-navigation__url{color:#000}[dir] .nuxt-link-active.lv-tabs-navigation__url,[dir] [aria-current=page].lv-tabs-navigation__url,[dir] [aria-current=true].lv-tabs-navigation__url,[dir] [aria-expanded=true].lv-tabs-navigation__url,[dir] [aria-selected=true].lv-tabs-navigation__url{box-shadow:inset 0 -2px 0 0 #000}@media(forced-colors:active){[dir] .nuxt-link-active.lv-tabs-navigation__url,[dir] [aria-current=page].lv-tabs-navigation__url,[dir] [aria-current=true].lv-tabs-navigation__url,[dir] [aria-expanded=true].lv-tabs-navigation__url,[dir] [aria-selected=true].lv-tabs-navigation__url{border-bottom:2px solid #000;box-shadow:none}}[dir] .nuxt-link-active.lv-tabs-navigation__url:active,[dir] .nuxt-link-active.lv-tabs-navigation__url:focus,[dir] .nuxt-link-active.lv-tabs-navigation__url:hover,[dir] [aria-current=page].lv-tabs-navigation__url:active,[dir] [aria-current=page].lv-tabs-navigation__url:focus,[dir] [aria-current=page].lv-tabs-navigation__url:hover,[dir] [aria-current=true].lv-tabs-navigation__url:active,[dir] [aria-current=true].lv-tabs-navigation__url:focus,[dir] [aria-current=true].lv-tabs-navigation__url:hover,[dir] [aria-expanded=true].lv-tabs-navigation__url:active,[dir] [aria-expanded=true].lv-tabs-navigation__url:focus,[dir] [aria-expanded=true].lv-tabs-navigation__url:hover,[dir] [aria-selected=true].lv-tabs-navigation__url:active,[dir] [aria-selected=true].lv-tabs-navigation__url:focus,[dir] [aria-selected=true].lv-tabs-navigation__url:hover{box-shadow:inset 0 -2px 0 0 #000}@media(forced-colors:active){[dir] .nuxt-link-active.lv-tabs-navigation__url:active,[dir] .nuxt-link-active.lv-tabs-navigation__url:focus,[dir] .nuxt-link-active.lv-tabs-navigation__url:hover,[dir] [aria-current=page].lv-tabs-navigation__url:active,[dir] [aria-current=page].lv-tabs-navigation__url:focus,[dir] [aria-current=page].lv-tabs-navigation__url:hover,[dir] [aria-current=true].lv-tabs-navigation__url:active,[dir] [aria-current=true].lv-tabs-navigation__url:focus,[dir] [aria-current=true].lv-tabs-navigation__url:hover,[dir] [aria-expanded=true].lv-tabs-navigation__url:active,[dir] [aria-expanded=true].lv-tabs-navigation__url:focus,[dir] [aria-expanded=true].lv-tabs-navigation__url:hover,[dir] [aria-selected=true].lv-tabs-navigation__url:active,[dir] [aria-selected=true].lv-tabs-navigation__url:focus,[dir] [aria-selected=true].lv-tabs-navigation__url:hover{border-bottom:2px solid #000;box-shadow:none}}.lv-tabs-navigation__url .lv-icon{flex:0 0 1rem;height:1rem;width:1rem}[dir=ltr] .lv-tabs-navigation__url .lv-icon{margin-right:.5rem}[dir=rtl] .lv-tabs-navigation__url .lv-icon{margin-left:.5rem}.lv-tabs-navigation__url:disabled,[aria-disabled=true].lv-tabs-navigation__url{color:rgba(0,0,0,.4)}[dir] .lv-tabs-navigation__url:disabled,[dir] [aria-disabled=true].lv-tabs-navigation__url{cursor:not-allowed}.lv-tabs-navigation__url:disabled+.lv-icon,[aria-disabled=true].lv-tabs-navigation__url+.lv-icon{opacity:.4}.-left.lv-tabs-navigation__button,.-right.lv-tabs-navigation__button{height:100%;opacity:0;position:absolute;top:0;visibility:hidden;width:5.5rem}[dir] .-left.lv-tabs-navigation__button,[dir] .-right.lv-tabs-navigation__button{transition:visibility .3s cubic-bezier(.39,.575,.565,1),opacity .3s cubic-bezier(.39,.575,.565,1)}.-left.-visible.lv-tabs-navigation__button,.-right.-visible.lv-tabs-navigation__button{opacity:1;visibility:visible}[dir=ltr] .-left.lv-tabs-navigation__button{background:linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0));left:0}[dir=rtl] .-left.lv-tabs-navigation__button{background:linear-gradient(270deg,#fff 30%,hsla(0,0%,100%,0));right:0}[dir=ltr] .-left.lv-tabs-navigation__button .lv-icon{margin-left:1.5rem}[dir=rtl] .-left.lv-tabs-navigation__button .lv-icon{margin-right:1.5rem}[dir=ltr] .-right.lv-tabs-navigation__button{background:linear-gradient(270deg,#fff 30%,hsla(0,0%,100%,0));right:0;text-align:right}[dir=rtl] .-right.lv-tabs-navigation__button{background:linear-gradient(90deg,#fff 30%,hsla(0,0%,100%,0));left:0;text-align:left}[dir=ltr] .-right.lv-tabs-navigation__button .lv-icon{margin-right:1.5rem}[dir=rtl] .-right.lv-tabs-navigation__button .lv-icon{margin-left:1.5rem}.lv-tabs-navigation__button .lv-icon{height:.75rem;width:.75rem}html[dir][dir=rtl] .lv-tabs-navigation__button .lv-icon{transform:scaleX(-1)}.lv-tabs-navigation{display:flex;flex-flow:column nowrap}[dir] .lv-tabs-navigation{background:#fff}@media screen and (min-width:68.75rem){.lv-tabs-navigation{align-items:center;flex-direction:row;justify-content:space-between}[dir] .lv-tabs-navigation{box-shadow:inset 0 -1px 0 #e1e1e1}}[dir] .lv-tabs-navigation__title{border-bottom:0;padding:0}[dir=ltr] .lv-tabs-navigation__title{margin-right:2.5rem}[dir=rtl] .lv-tabs-navigation__title{margin-left:2.5rem}.lv-tabs-navigation__nav{overflow:hidden;position:relative}[dir] .lv-tabs-navigation__nav.-no-title{padding-top:1rem}@media screen and (min-width:68.75rem){[dir] .lv-tabs-navigation__nav.-no-title{padding-top:0}[dir=ltr] .lv-tabs-navigation__nav{margin-left:auto}[dir=rtl] .lv-tabs-navigation__nav{margin-right:auto}}.lv-tabs-navigation__tab-list{-webkit-overflow-scrolling:touch;align-items:center;scroll-snap-type:x mandatory;width:auto}.lv-tabs-navigation__tab-list::-webkit-scrollbar{-webkit-appearance:none;height:0}.lv-tabs-navigation__tab{flex:0 0 auto;scroll-snap-align:start}[dir] .lv-tabs-navigation__tab{margin:0 .75rem}[dir=ltr] .lv-tabs-navigation__tab:first-child{margin-left:0}[dir=rtl] .lv-tabs-navigation__tab:first-child{margin-right:0}.lv-tabs-navigation__tab:last-child{scroll-snap-align:end}[dir=ltr] .lv-tabs-navigation__tab:last-child{margin-right:0}[dir=rtl] .lv-tabs-navigation__tab:last-child{margin-left:0}@media screen and (min-width:68.75rem){[dir] .lv-tabs-navigation__tab{margin:0}[dir=ltr] .lv-tabs-navigation__tab{border-left:1px solid #e1e1e1}[dir=ltr] .lv-tabs-navigation__tab:last-child:not(:first-child),[dir=rtl] .lv-tabs-navigation__tab{border-right:1px solid #e1e1e1}[dir=rtl] .lv-tabs-navigation__tab:last-child:not(:first-child){border-left:1px solid #e1e1e1}}.lv-tabs-navigation__url{height:auto;white-space:nowrap}[dir] .lv-tabs-navigation__url{padding:0 0 .75rem}@media screen and (min-width:68.75rem){.lv-tabs-navigation__url{height:5rem}[dir] .lv-tabs-navigation__url{padding:0 2.5rem}}.lv-tabs-navigation__button.-left,.lv-tabs-navigation__button.-right{top:-.25rem;z-index:1}[dir=ltr] .lv-tabs-navigation__button.-left{left:-1rem}[dir=ltr] .lv-tabs-navigation__button.-right,[dir=rtl] .lv-tabs-navigation__button.-left{right:-1rem}[dir=rtl] .lv-tabs-navigation__button.-right{left:-1rem}[dir=ltr] .lv-tabs-navigation__toggler{margin-left:auto}[dir=rtl] .lv-tabs-navigation__toggler{margin-right:auto}.lv-tabs-navigation__toggler .lv-icon{height:.75rem;width:.75rem}[dir] .lv-tabs-navigation__toggler .lv-icon{transition:transform .3s cubic-bezier(.645,.045,.355,1)}[dir=ltr] .lv-tabs-navigation__toggler.-opened .lv-icon{transform:rotate(180deg)}[dir=rtl] .lv-tabs-navigation__toggler.-opened .lv-icon{transform:rotate(-180deg)}.lv-tabs-navigation.-has-dropdown{position:relative;z-index:5}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container,[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title{background:#fff}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container .nuxt-link-active,[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title .nuxt-link-active{box-shadow:none}.lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title{box-sizing:border-box;display:flex;justify-content:space-between}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title{padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__title{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__nav{background:#fff}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__tab{margin:0}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__tab:not(:last-child){border-bottom:1px solid #e1e1e1}.lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{box-sizing:border-box;position:absolute;width:100%;z-index:5}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{background-color:#fff;border-top:1px solid #e1e1e1;box-shadow:0 4px 8px 0 rgba(0,0,0,.04),0 12px 20px 0 rgba(0,0,0,.08);padding-left:6.4vw;padding-right:6.4vw}[dir=ltr] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{left:0}[dir=rtl] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{right:0}@media screen and (min-width:48rem){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:90rem){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__container{padding-left:3.3333333333vw;padding-right:3.3333333333vw}}.lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url{justify-content:normal;width:100%}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url{padding:1rem 0}[dir=ltr] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url .lv-icon{margin-left:auto}[dir=rtl] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url .lv-icon{margin-right:auto}[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url:hover,[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url[aria-current=true]{box-shadow:none}@media(forced-colors:active){[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url:hover,[dir] .lv-tabs-navigation.-has-dropdown .lv-tabs-navigation__url[aria-current=true]{border-bottom:none}}", ""]), l.locals = {}, t.exports = l
        },
        946: function(t, n, r) {
            "use strict";
            var l = r(8),
                o = {
                    components: {
                        Icon: r(11).default
                    },
                    props: {
                        url: {
                            type: [String, Object],
                            default: null
                        },
                        linkOnly: {
                            type: Boolean,
                            default: !1
                        },
                        isChevron: {
                            type: Boolean,
                            default: !1
                        },
                        isCustomAction: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        lastRoutePath() {
                            return this.$store.state.lastRoutePath
                        },
                        iconName() {
                            return this.isChevron ? "controls-chevron-left-center" : "controls-back"
                        },
                        isLink() {
                            return !!this.url && "string" == typeof this.url
                        },
                        backUrl() {
                            const t = "object" == typeof this.url && null !== this.url;
                            return t && !("path" in this.url) ? this.localePath(this.url) : Object(l.i)(t ? this.url.path : this.url, {
                                locale: this.$store.state.localeContext.locale,
                                dispatchLocale: this.$store.state.localeContext.dispatchLocale
                            })
                        }
                    },
                    methods: {
                        goBack() {
                            return this.lastRoutePath && !this.linkOnly ? this.$router.back() : Object(l.l)(document.referrer) && !this.linkOnly ? window.history.go(-1) : this.$router.push({
                                path: this.backUrl
                            })
                        }
                    }
                },
                e = r(0),
                component = Object(e.a)(o, (function() {
                    var t = this,
                        n = t._self._c;
                    return n(t.isLink ? "a" : "button", {
                        directives: [{
                            name: "safe-href",
                            rawName: "v-safe-href",
                            value: t.isLink ? t.backUrl : null,
                            expression: "isLink ? backUrl : null"
                        }],
                        tag: "component",
                        staticClass: "lv-back-button lv-button -only-icon",
                        attrs: {
                            "aria-label": t.$t("global_back_button")
                        },
                        on: {
                            click: function(n) {
                                n.preventDefault(), t.isCustomAction ? t.$emit("go-back") : t.goBack()
                            }
                        }
                    }, [n("Icon", {
                        staticClass: "-mirrored",
                        attrs: {
                            name: t.iconName
                        }
                    })], 1)
                }), [], !1, null, null, null);
            n.a = component.exports
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/35bfd-0aa41.js.map