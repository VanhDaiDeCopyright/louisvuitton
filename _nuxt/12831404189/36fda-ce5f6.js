(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [5], {
        1168: function(t, e, l) {
            "use strict";
            var n = {
                    props: {
                        headerList: {
                            type: Array,
                            default: () => []
                        },
                        hasError: {
                            type: Boolean,
                            default: !1
                        }
                    }
                },
                r = (l(2282), l(0)),
                component = Object(r.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-mylv-card"
                    }, [t.hasError ? [e("p", {
                        staticClass: "error-msg"
                    }, [t._v(t._s(t.$t("lib_error_errtechnical")))])] : [t.headerList.length ? e("ul", {
                        staticClass: "lv-mylv-card__header lv-list"
                    }, [e("li", {
                        attrs: {
                            "data-cs-mask": ""
                        }
                    }, [e("h3", {
                        staticClass: "heading-s -text-is-uppercase lv-mylv-card__header-title"
                    }, [t.headerList[0].labelBefore ? e("strong", [t._v(t._s(t.$t(t.headerList[0].labelBefore)))]) : t._e(), t._v(" "), t.headerList[0].label ? e("span", [t._v(t._s(t.$t(t.headerList[0].label)))]) : t._e(), t._v(" "), t.headerList[0].value ? [t._v(t._s(t.headerList[0].value))] : t._e(), t._v(" "), t.headerList[0].labelAfter ? [t._v(t._s(t.$t(t.headerList[0].labelAfter)))] : t._e()], 2)]), t._v(" "), t._l(t.headerList.slice(1), (function(l, n) {
                        return e("li", {
                            key: "headerList_".concat(n)
                        }, [l.labelBefore ? e("strong", [t._v(t._s(t.$t(l.labelBefore)))]) : t._e(), t._v(" "), l.label ? e("span", [t._v(t._s(t.$t(l.label)))]) : t._e(), t._v(" "), l.value ? [t._v(t._s(l.value))] : t._e(), t._v(" "), l.labelAfter ? [t._v(t._s(t.$t(l.labelAfter)))] : t._e()], 2)
                    })), t._v(" "), t.$slots.additionalActions ? e("li", {
                        staticClass: "lv-mylv-card__top-action"
                    }, [t._t("additionalActions")], 2) : t._e()], 2) : t._e(), t._v(" "), e("div", {
                        staticClass: "lv-mylv-card__content"
                    }, [t._t("content")], 2), t._v(" "), t.$slots.footer ? e("div", {
                        staticClass: "lv-mylv-card__footer"
                    }, [t._t("footer")], 2) : t._e()]], 2)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        1688: function(t, e, l) {
            var content = l(2283);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, l(10).default)("167a39de", content, !0, {
                sourceMap: !1
            })
        },
        2282: function(t, e, l) {
            "use strict";
            l(1688)
        },
        2283: function(t, e, l) {
            var n = l(9)((function(i) {
                return i[1]
            }));
            n.push([t.i, "[dir] .lv-mylv-card{background-color:#fff}[dir] .lv-mylv-card__footer{border-top:1px solid #e1e1e1;padding:1rem}@media screen and (min-width:64rem){[dir] .lv-mylv-card__footer{padding:2rem}}.lv-mylv-card__header{display:flex;flex-direction:column}[dir] .lv-mylv-card__header{border-bottom:1px solid #e1e1e1;padding:1rem}@media screen and (min-width:64rem){.lv-mylv-card__header{align-items:center;flex-direction:row}[dir] .lv-mylv-card__header{padding:0 2rem}[dir] .lv-mylv-card__header>li{padding:1rem 1.5rem}[dir=ltr] .lv-mylv-card__header>li{border-right:1px solid #e1e1e1}[dir=rtl] .lv-mylv-card__header>li{border-left:1px solid #e1e1e1}}[dir=ltr] .lv-mylv-card__header>li:first-child{padding-left:0}[dir=rtl] .lv-mylv-card__header>li:first-child{padding-right:0}.lv-mylv-card__header>li:not(:first-child){color:inherit;font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-mylv-card__header>li:not(:first-child):lang(ko),.lv-mylv-card__header>li:not(:first-child):lang(zh){font-size:.9rem}.lv-mylv-card__header>li:not(:first-child):lang(ja){font-size:.8rem}.lv-mylv-card__header>li:not(:first-child):lang(ja),.lv-mylv-card__header>li:not(:first-child):lang(ko),.lv-mylv-card__header>li:not(:first-child):lang(th),.lv-mylv-card__header>li:not(:first-child):lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-mylv-card__header>li:not(:first-child):lang(th){word-break:break-word}.lv-mylv-card__header>li:not(:first-child):lang(vi){line-height:1.3}[dir] .lv-mylv-card__header>li:not(:last-child){padding-bottom:1rem}.lv-mylv-card__header .lv-mylv-card__top-action{align-items:center;display:flex;justify-content:center}[dir] .lv-mylv-card__header .lv-mylv-card__top-action{border-top:1px solid #e1e1e1;padding-top:1.5rem}@media screen and (min-width:64rem){[dir] .lv-mylv-card__header .lv-mylv-card__top-action{border-top:none}[dir=ltr] .lv-mylv-card__header .lv-mylv-card__top-action{border-left:1px solid #e1e1e1;border-right:none;margin-left:auto;padding:1rem 0 1rem 1.5rem}[dir=rtl] .lv-mylv-card__header .lv-mylv-card__top-action{border-left:none;border-right:1px solid #e1e1e1;margin-right:auto;padding:1rem 1.5rem 1rem 0}}[dir] .lv-mylv-card__header-title{margin:0}[dir] .lv-mylv-card .error-msg{margin:0;text-align:center}", ""]), n.locals = {}, t.exports = n
        },
        956: function(t, e, l) {
            "use strict";
            e.a = {
                watch: {
                    isLogged: {
                        immediate: !0,
                        handler(t) {
                            this.isLoading = !0, void 0 !== t && (!1 !== t ? this.loadLoggedData() : this.isLoading = !1)
                        }
                    }
                }
            }
        },
        960: function(t, e, l) {
            var content = l(981);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, l(10).default)("733c8298", content, !0, {
                sourceMap: !1
            })
        },
        961: function(t, e, l) {
            var content = l(983);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, l(10).default)("66e5dc02", content, !0, {
                sourceMap: !1
            })
        },
        963: function(t, e, l) {
            "use strict";
            var n = l(30),
                r = l(16),
                o = l(32),
                d = l(77),
                c = l(968),
                v = l(14),
                _ = l(5),
                m = l(38),
                h = l(4),
                y = l(1032),
                f = l(17),
                w = l(11),
                k = l(75),
                L = l(341),
                $ = l(340),
                x = l(338),
                C = {
                    components: {
                        LoginForm: $.default,
                        CreateAccount: x.a
                    }
                },
                O = (l(980), l(0)),
                T = Object(O.a)(C, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-login-layout"
                    }, [e("div", {
                        staticClass: "lv-login-layout__header"
                    }, [e("h1", {
                        staticClass: "heading-l"
                    }, [t._v(t._s(t.$t("mylv_account_identification")))])]), t._v(" "), e("div", {
                        staticClass: "lv-login-layout__wrapper"
                    }, [e("div", {
                        staticClass: "lv-login-layout__sign-in"
                    }, [e("LoginForm", {
                        attrs: {
                            "action-position": "mylv"
                        }
                    })], 1), t._v(" "), e("div", {
                        staticClass: "lv-login-layout__create-account"
                    }, [e("CreateAccount", {
                        attrs: {
                            context: "page",
                            "show-description": !0
                        }
                    })], 1)])])
                }), [], !1, null, null, null).exports,
                E = l(946);
            const B = function(t, e) {
                return t.$config.is_OOB ? t.$store.state.configuration["".concat(e, "Oob")] : t.$store.state.configuration[e]
            };
            var S = {
                    components: {
                        TabsNavigation: y.a,
                        SmartLink: f.default,
                        Icon: w.default,
                        Loader: k.default,
                        BackToTop: L.a,
                        LoginLayout: T,
                        BackButton: E.a
                    },
                    mixins: [c.a],
                    props: {
                        isLoading: {
                            type: Boolean,
                            default: !1
                        },
                        bypassLogin: {
                            type: Boolean,
                            default: !1
                        },
                        hideHeader: {
                            type: Boolean,
                            default: !1
                        },
                        isCompact: {
                            type: Boolean,
                            default: !1
                        },
                        isFullScreen: {
                            type: Boolean,
                            default: !1
                        },
                        hasBackButton: {
                            type: Boolean,
                            default: !1
                        },
                        hasWhiteBackground: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data() {
                        return {
                            navigationLinks: [{
                                labelKey: this.$t("mylv_menu_overview_title"),
                                identifier: "overview",
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Overview),
                                showItem: B(this, "activateOverview")
                            }, {
                                labelKey: this.$t("mylv_my_profile_navigation_title"),
                                identifier: "profile",
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Profile)
                            }, {
                                labelKey: this.$t("mylv_order_history_navigation_title"),
                                identifier: "orders",
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Orders),
                                showItem: B(this, "activateMyOrders")
                            }, {
                                labelKey: this.$t("mylv_menu_collectibles_title"),
                                identifier: "wallet",
                                url: this.localePath("mylv-wallet"),
                                showItem: this.$store.state.configuration.enableCollectibles && !!this.$config.wallet_connect_project_id
                            }, {
                                labelKey: this.$t("myLV_certificates_page_title"),
                                identifier: "mylv_certificates",
                                url: this.localePath("mylv-certificates"),
                                notMigrated: !1,
                                showItem: this.$config.is_OOB ? this.$store.state.configuration.activateMyCertificatesOob : this.$store.state.configuration.enableMyCertificates
                            }, {
                                labelKey: this.$t("appointment_mylv_title"),
                                identifier: "appointment",
                                subLinkIdentifier: ["booking-appointments", "mylv-modify-appointment"],
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Appointments),
                                showItem: B(this, "activateAppointments")
                            }, {
                                labelKey: this.$t("recommendation_navigation_title"),
                                identifier: "recommendation",
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Recommendations),
                                showItem: B(this, "activateMyRecommendations")
                            }, {
                                labelKey: this.$t("mylv_my_wishlist_navigation_title"),
                                identifier: "wishlist",
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Wishlist),
                                showItem: !this.$config.is_OOB || this.$store.state.configuration.activateMyWishlistOob
                            }, {
                                labelKey: this.$t("myLV_repairs_page_title"),
                                identifier: "careservice",
                                url: this.$store.getters[_.GET_SEO_URL](r.e.Repairs),
                                showItem: this.$config.is_OOB ? this.$store.state.configuration.activateMyCareServicesOob : this.$store.state.configuration.activateSFMyRepairs
                            }]
                        }
                    },
                    computed: {
                        isEnableLoginPanel() {
                            const {
                                locale: t
                            } = this.$store.state.localeContext;
                            return Object(o.a)(this.$config.is_enable_login_panel, "loginPanel", t)
                        },
                        containerClass() {
                            return {
                                "-compact": this.isCompact,
                                "-full-screen": this.isFullScreen,
                                "-back-button": this.hasBackButton
                            }
                        },
                        ...Object(n.c)({
                            isTwist: h.LOCALE_CONTEXT_IS_TWIST
                        }),
                        myOverviewUrl() {
                            return this.$store.getters[_.GET_SEO_URL](r.e.Overview)
                        },
                        links() {
                            return (this.navigationLinks || []).filter((link => ((link.identifier === this.currentPage || Array.isArray(link.subLinkIdentifier) && link.subLinkIdentifier.includes(this.currentPage)) && (link.active = !0), "logout" !== link.identifier || this.isSmall ? !1 === link.showItem ? null : link : null)))
                        },
                        isSmall() {
                            return this.$store.getters[v.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                        },
                        isPending() {
                            return this.isLoading || this.activationPending
                        },
                        isLogged() {
                            return this.$store.state.userContext.userIsLogged
                        },
                        showLoginSection() {
                            return !1 === this.isLogged && !this.isLoading && !this.bypassLogin
                        },
                        isWishlistPage() {
                            return this.$store.state.pageContext.currentPage === r.a.Wishlist
                        },
                        currentPage() {
                            return this.$store.state.pageContext.currentPage
                        }
                    },
                    watch: {
                        showLoginSection: {
                            immediate: !0,
                            async handler(t) {
                                const e = window.location.href;
                                if (t && this.isTwist && !this.isEnableLoginPanel) {
                                    const t = await Object(d.a)(this, e);
                                    window.location.assign(t)
                                }
                            }
                        }
                    },
                    methods: {
                        trackAction(t) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                categoryGa: "client_services",
                                actionGa: "tab_selection",
                                actionId: "tab_selection",
                                actionPosition: "tab_section",
                                actionType: "navigation",
                                labelGa: t
                            }))
                        },
                        async logout() {
                            await this.$router.push({
                                path: this.localePath("homepage"),
                                query: {
                                    logout: !0
                                }
                            }), await this.$store.dispatch(m.USER_CONTEXT_LOGOUT_ACTION)
                        }
                    }
                },
                A = (l(982), Object(O.a)(S, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-mylv-layout",
                        class: {
                            "-is-loading": t.isLoading, "-full-screen": t.isFullScreen, "-white-background": t.hasWhiteBackground
                        }
                    }, [t.isPending ? e("Loader", {
                        staticClass: "lv-mylv-layout__loader"
                    }) : !t.showLoginSection || t.isTwist && !t.isEnableLoginPanel ? t.showLoginSection ? t._e() : [e("portal", {
                        attrs: {
                            to: "header"
                        }
                    }, [e("div", {
                        directives: [{
                            name: "sticky",
                            rawName: "v-sticky",
                            value: {
                                position: 2,
                                disabled: t.hideHeader
                            },
                            expression: "{ position: 2, disabled: hideHeader }"
                        }]
                    }, [t.hideHeader ? t._e() : e("TabsNavigation", {
                        staticClass: "lv-mylv-layout__nav",
                        attrs: {
                            "has-drop-down": !0,
                            "show-menu": t.isLogged,
                            "a11y-label": t.$t("alt_mylv"),
                            items: t.links
                        },
                        on: {
                            clicked: t.trackAction
                        }
                    }, [e("template", {
                        slot: "title"
                    }, [e("SmartLink", {
                        attrs: {
                            url: t.myOverviewUrl
                        }
                    }, [e("span", {
                        staticClass: "sr-only"
                    }, [t._v(t._s(t.$t("alt_mylv")))]), t._v(" "), e("Icon", {
                        staticClass: "lv-mylv-layout__nav-icon",
                        attrs: {
                            name: "navigation-my-lv"
                        }
                    })], 1)], 1), t._v(" "), e("template", {
                        slot: "dropDownButton"
                    }, [t._v(t._s(t.$t("mylv_menu_title")))]), t._v(" "), e("template", {
                        slot: "additionalActions"
                    }, [t.isSmall ? e("button", {
                        staticClass: "lv-tabs-navigation__url",
                        on: {
                            click: t.logout
                        }
                    }, [t._v("\n              " + t._s(t.$t("global_logout")) + "\n            ")]) : t._e()])], 2)], 1)]), t._v(" "), t.hasBackButton ? e("div", {
                        staticClass: "lv-gutters-small"
                    }, [e("BackButton", {
                        staticClass: "lv-mylv-layout__back-button",
                        attrs: {
                            "is-custom-action": !0
                        },
                        nativeOn: {
                            click: function(e) {
                                return (e => t.$emit("go-back", e)).apply(null, arguments)
                            }
                        }
                    })], 1) : t._e(), t._v(" "), e("div", {
                        staticClass: "lv-mylv-layout__container",
                        class: t.containerClass
                    }, [t._t("pagePreTitle"), t._v(" "), t.$slots.pageTitle ? e("h1", {
                        staticClass: "lv-mylv-layout__page-title heading-l"
                    }, [t._t("pageTitle")], 2) : t._e(), t._v(" "), t.$slots.pageDescription ? e("p", {
                        staticClass: "body-m"
                    }, [t._t("pageDescription")], 2) : t._e(), t._v(" "), e("div", {
                        staticClass: "lv-mylv-layout__content"
                    }, [t._t("pageContent")], 2), t._v(" "), e("BackToTop")], 2)] : e("LoginLayout")], 2)
                }), [], !1, null, null, null));
            e.a = A.exports
        },
        968: function(t, e, l) {
            "use strict";
            l(25);
            var n = l(38);
            e.a = {
                data: () => ({
                    activationPending: !1,
                    activationErrMessage: !1
                }),
                computed: {
                    isLogged() {
                        return this.$store.state.userContext.userIsLogged
                    },
                    accessToken() {
                        return this.$route.query.access_token
                    }
                },
                methods: {
                    async loginOnActivation() {
                        if (!this.isLogged && this.accessToken && this.accessToken.length) {
                            this.activationPending = !0, this.activationErrMessage = !1;
                            try {
                                await this.$privateAtg.account.loginOnActivation({
                                    accessToken: this.accessToken
                                }), await this.$store.dispatch(n.USER_CONTEXT_LOAD_ACTION, !0), this.$router.replace({
                                    access_token: null
                                })
                            } catch (t) {
                                this.$logger.error(t), this.activationErrMessage = !0
                            } finally {
                                this.activationPending = !1
                            }
                        }
                    }
                },
                async beforeMount() {
                    await this.loginOnActivation()
                }
            }
        },
        980: function(t, e, l) {
            "use strict";
            l(960)
        },
        981: function(t, e, l) {
            var n = l(9)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".lv-login-layout{display:flex;flex-direction:column;height:100%;overflow:hidden}[dir] .lv-login-layout{background-color:#fff}.lv-login-layout__wrapper{display:flex;flex-direction:column}@media screen and (min-width:48rem){.lv-login-layout__wrapper{flex-direction:row}}[dir=ltr] .lv-login-layout__mandatory-field{text-align:right}[dir=rtl] .lv-login-layout__mandatory-field{text-align:left}[dir] .lv-login-layout__sign-in{padding-bottom:2.5rem}@media screen and (min-width:48rem){[dir] .lv-login-layout__sign-in{padding-bottom:0}}.lv-login-layout__header{display:none}[dir] .lv-login-layout__header{padding-bottom:2rem}@media screen and (min-width:48rem){.lv-login-layout__header{display:block}[dir] .lv-login-layout__header{padding-bottom:0}}[dir] .lv-login-layout__header h1{border-bottom:1px solid #e1e1e1;margin:3rem 0 .5rem;padding-bottom:1.5rem}.lv-login-layout h2{color:inherit;font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}[dir] .lv-login-layout h2{border-bottom:1px solid #e1e1e1;margin:0 0 1.5rem;padding-bottom:1.5rem}.lv-login-layout h2:lang(ko),.lv-login-layout h2:lang(zh){font-size:1.0125rem}.lv-login-layout h2:lang(ja){font-size:.9rem}.lv-login-layout h2:lang(ja),.lv-login-layout h2:lang(ko),.lv-login-layout h2:lang(th),.lv-login-layout h2:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-login-layout h2:lang(th){word-break:break-word}.lv-login-layout h2:lang(vi){line-height:1.3}@media screen and (min-width:48rem){[dir] .lv-login-layout h2{border:none;margin:2rem 0;padding:0}}[dir] .lv-login-layout__sign-in h2{margin-top:2.5rem}@media screen and (min-width:48rem){[dir] .lv-login-layout__sign-in h2{margin-top:2rem}}[dir] .lv-login-layout__header,[dir] .lv-login-layout__sign-in{background-color:#f8f8f8}[dir=ltr] .lv-login-layout__header,[dir=ltr] .lv-login-layout__sign-in{border-right:1px solid #e1e1e1}[dir=rtl] .lv-login-layout__header,[dir=rtl] .lv-login-layout__sign-in{border-left:1px solid #e1e1e1}@media screen and (min-width:48rem){[dir] .lv-login-layout__create-account,[dir] .lv-login-layout__sign-in{padding-bottom:5rem}}.lv-login-layout__create-account,.lv-login-layout__header,.lv-login-layout__sign-in{box-sizing:border-box}[dir] .lv-login-layout__create-account,[dir] .lv-login-layout__header,[dir] .lv-login-layout__sign-in{padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-login-layout__create-account,[dir] .lv-login-layout__header,[dir] .lv-login-layout__sign-in{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-login-layout__create-account,[dir] .lv-login-layout__header,[dir] .lv-login-layout__sign-in{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-login-layout__create-account,[dir] .lv-login-layout__header,[dir] .lv-login-layout__sign-in{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}@media screen and (min-width:48rem){.lv-login-layout__create-account,.lv-login-layout__header,.lv-login-layout__sign-in{width:50%}}.lv-login-layout .lv-create-account__description{box-sizing:border-box}[dir] .lv-login-layout .lv-create-account__description{background-color:#fff;margin-left:-6.4vw;margin-right:-6.4vw;padding-bottom:1.5rem;padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-login-layout .lv-create-account__description{margin-left:-3.125vw;margin-right:-3.125vw}}@media screen and (min-width:64rem){[dir] .lv-login-layout .lv-create-account__description{margin-left:-4.6875vw;margin-right:-4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-login-layout .lv-create-account__description{margin-left:-8.3333333333vw;margin-right:-8.3333333333vw}}@media screen and (min-width:48rem){[dir] .lv-login-layout .lv-create-account__description{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-login-layout .lv-create-account__description{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-login-layout .lv-create-account__description{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}[dir] .lv-login-layout .lv-create-account__button{margin-bottom:1.5rem;margin-top:0}[dir] .lv-login-layout .lv-create-account__description-title{margin:0 0 1.5rem}.lv-login-layout .lv-create-account__header{box-sizing:border-box}[dir] .lv-login-layout .lv-create-account__header{background:#f8f8f8;margin-left:-6.4vw;margin-right:-6.4vw;padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-login-layout .lv-create-account__header{margin-left:-3.125vw;margin-right:-3.125vw}}@media screen and (min-width:64rem){[dir] .lv-login-layout .lv-create-account__header{margin-left:-4.6875vw;margin-right:-4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-login-layout .lv-create-account__header{margin-left:-8.3333333333vw;margin-right:-8.3333333333vw}}@media screen and (min-width:48rem){[dir] .lv-login-layout .lv-create-account__header{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-login-layout .lv-create-account__header{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-login-layout .lv-create-account__header{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}@media screen and (min-width:48rem){[dir] .lv-login-layout .lv-create-account__header{background:#fff;margin-bottom:1.5rem}}.lv-login-layout .lv-create-account__header h2{color:inherit;font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}[dir] .lv-login-layout .lv-create-account__header h2{margin-bottom:1.5rem}.lv-login-layout .lv-create-account__header h2:lang(ko),.lv-login-layout .lv-create-account__header h2:lang(zh){font-size:1.0125rem}.lv-login-layout .lv-create-account__header h2:lang(ja){font-size:.9rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-login-layout .lv-create-account__header h2:lang(ko),.lv-login-layout .lv-create-account__header h2:lang(th),.lv-login-layout .lv-create-account__header h2:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-login-layout .lv-create-account__header h2:lang(th){word-break:break-word}.lv-login-layout .lv-create-account__header h2:lang(vi){line-height:1.3}[dir] .lv-login-layout .lv-create-account__header p{background-color:#fff;padding:1.5rem}@media screen and (min-width:48rem){[dir] .lv-login-layout .lv-create-account__header p{padding:0}}[dir] .lv-login-layout .lv-login-form__container{background-color:#fff;padding:1.5rem}[dir] .lv-login-layout .lv-login-form__form{padding-bottom:0}@media screen and (min-width:48rem){.lv-login-layout .lv-create-account__button,.lv-login-layout .lv-login-form__button{min-width:15rem;width:auto}[dir=ltr] .lv-login-layout .lv-create-account__button,[dir=ltr] .lv-login-layout .lv-login-form__button{margin-left:auto}[dir=rtl] .lv-login-layout .lv-create-account__button,[dir=rtl] .lv-login-layout .lv-login-form__button{margin-right:auto}}[dir] .lv-login-layout .lv-login-form__confirmation,[dir] .lv-login-layout .lv-login-form__intro{margin-top:2rem}", ""]), n.locals = {}, t.exports = n
        },
        982: function(t, e, l) {
            "use strict";
            l(961)
        },
        983: function(t, e, l) {
            var n = l(9)((function(i) {
                return i[1]
            }));
            n.push([t.i, ".lv-mylv-layout{display:flex;flex-direction:column;position:relative;width:100%}[dir] .lv-mylv-layout{background-color:#f8f8f8}.lv-mylv-layout:has(.-compact){display:block}.lv-mylv-layout.-is-loading{min-height:100vh}[dir] .lv-mylv-layout.-white-background{background-color:#fff}.lv-mylv-layout__nav-icon{height:2rem;width:2rem}@media screen and (min-width:68.75rem){.lv-mylv-layout__nav-icon{height:2.5rem;width:2.5rem}}[dir] .lv-mylv-layout__page-title{margin:0 0 1.5rem}[dir=ltr] .lv-mylv-layout__back-button{margin:1rem 0 0 -1rem}[dir=rtl] .lv-mylv-layout__back-button{margin:1rem -1rem 0 0}[dir] .lv-mylv-layout__nav{border-bottom:1px solid #e1e1e1}@media screen and (min-width:48rem){.lv-mylv-layout__nav{box-sizing:border-box}[dir=ltr] .lv-mylv-layout__nav{padding-left:6.4vw}[dir=rtl] .lv-mylv-layout__nav{padding-right:6.4vw}}@media screen and (min-width:48rem)and (min-width:48rem){[dir=ltr] .lv-mylv-layout__nav{padding-left:3.125vw}[dir=rtl] .lv-mylv-layout__nav{padding-right:3.125vw}}@media screen and (min-width:48rem)and (min-width:64rem){[dir=ltr] .lv-mylv-layout__nav{padding-left:3.125vw}[dir=rtl] .lv-mylv-layout__nav{padding-right:3.125vw}}@media screen and (min-width:48rem)and (min-width:90rem){[dir=ltr] .lv-mylv-layout__nav{padding-left:3.3333333333vw}[dir=rtl] .lv-mylv-layout__nav{padding-right:3.3333333333vw}}@media screen and (min-width:68.75rem){[dir] .lv-mylv-layout__nav{border-bottom:none}}.lv-mylv-layout__container:not(.-full-screen){box-sizing:border-box;height:100%;position:relative}[dir] .lv-mylv-layout__container:not(.-full-screen){padding:1.5rem 6.4vw 5rem}@media screen and (min-width:48rem){[dir] .lv-mylv-layout__container:not(.-full-screen){padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-mylv-layout__container:not(.-full-screen){padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-mylv-layout__container:not(.-full-screen){padding-left:8.3333333333vw;padding-right:8.3333333333vw}}@media screen and (min-width:48rem){[dir] .lv-mylv-layout__container:not(.-full-screen){padding-top:3rem}}@media screen and (min-width:64rem){.lv-mylv-layout__container:not(.-full-screen).-compact{max-width:45rem}[dir] .lv-mylv-layout__container:not(.-full-screen).-compact{margin:0 auto;padding-left:0;padding-right:0}}[dir] .lv-mylv-layout__container.-back-button{padding-top:0}", ""]), n.locals = {}, t.exports = n
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/36fda-ce5f6.js.map