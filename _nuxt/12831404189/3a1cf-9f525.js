(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [195, 551], {
        1002: function(e, t, r) {
            "use strict";
            r(965)
        },
        1003: function(e, t, r) {
            var n = r(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".lv-information-banner{align-items:stretch;display:flex;flex-direction:row;overflow:hidden}[dir] .lv-information-banner{background-color:#fff;border-radius:.5rem;box-shadow:0 4px 8px 0 rgba(0,0,0,.04),0 12px 20px 0 rgba(0,0,0,.08)}.lv-information-banner__icon{align-items:center;display:flex}[dir] .lv-information-banner__icon{background-color:#000;padding:1rem}.lv-information-banner__close{align-items:center;display:flex}[dir] .lv-information-banner__close{padding:1.5rem}[dir=ltr] .lv-information-banner__close{border-left:1px solid #e1e1e1}[dir=rtl] .lv-information-banner__close{border-right:1px solid #e1e1e1}.lv-information-banner__close svg{height:1rem;width:1rem}.lv-information-banner__message-wrapper{align-self:center;flex:1 1 auto}[dir] .lv-information-banner__message-wrapper{padding:1rem}.lv-information-banner__message{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}@supports(-webkit-line-clamp:1){.lv-information-banner__message{-webkit-box-orient:vertical;-webkit-line-clamp:3;display:-webkit-box;white-space:normal}@media screen and (min-width:48rem){.lv-information-banner__message{-webkit-line-clamp:2}}.lv-information-banner__message.-has-modal{-webkit-line-clamp:2}@media screen and (min-width:48rem){.lv-information-banner__message.-has-modal{-webkit-line-clamp:1}}}.lv-information-banner__message p{display:inline}.lv-information-banner__read-more{color:inherit;color:#000;font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1rem;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-information-banner__read-more{box-shadow:0 2px 0 -1px currentColor;cursor:pointer;transition:color .3s cubic-bezier(.39,.575,.565,1)}.lv-information-banner__read-more:lang(ko),.lv-information-banner__read-more:lang(zh){font-size:.7875rem}.lv-information-banner__read-more:lang(ja){font-size:.7rem}.lv-information-banner__read-more:lang(ja),.lv-information-banner__read-more:lang(ko),.lv-information-banner__read-more:lang(th),.lv-information-banner__read-more:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-information-banner__read-more:lang(th){word-break:break-word}.lv-information-banner__read-more:lang(vi){line-height:1.3}@media(forced-colors:active){.lv-information-banner__read-more{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-information-banner__read-more{box-shadow:none}}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){.lv-information-banner__read-more:hover{color:rgba(0,0,0,.6)}}.keyboard-is-used .lv-information-banner__read-more:focus{color:rgba(0,0,0,.6)}.lv-information-banner__read-more:disabled{color:rgba(0,0,0,.4)}[dir] .lv-information-banner__read-more:disabled{cursor:auto}", ""]), n.locals = {}, e.exports = n
        },
        1011: function(e, t, r) {
            "use strict";
            r.r(t);
            var n = r(0),
                o = Object(n.a)({}, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("svg", e._g({
                        attrs: {
                            width: "32",
                            height: "32",
                            viewBox: "0 0 32 32",
                            "aria-hidden": "true"
                        }
                    }, e.$listeners), [t("g", {
                        attrs: {
                            fill: "#FFF",
                            "fill-rule": "evenodd"
                        }
                    }, [t("path", {
                        attrs: {
                            d: "M16 31.411C7.502 31.411.589 24.498.589 16S7.502.589 16 .589 31.411 7.502 31.411 16 24.498 31.411 16 31.411M16 0C7.177 0 0 7.177 0 16s7.177 16 16 16 16-7.177 16-16S24.823 0 16 0"
                        }
                    }), t("path", {
                        attrs: {
                            d: "M14.352 20.748h3.863c1.22-.002 1.879-1.044 2.162-1.661l.172-.444h.711l-1.352 2.662h-9.209l.24-.557h.345l.024-.002.145.002h.27c.436-.017.92-.158 1.244-1 .03-.078.063-.15.096-.216l.918-2.421L12 12.38a2.438 2.438 0 01-.126-.26c-.247-.591-.606-.778-.868-.828h-.338v-.626h3.19v.626h-.154l-.029.001c-.27 0-.547.011-.37.428a.79.79 0 01.022.062l1.404 3.351.765-2.017c.09-.32-.057-.427-.203-.459h-.378l.289-.697h3.319l-.288.697h-.522c-.23.06-.536.248-.791.779l-1.393 3.6.704 1.68a.032.032 0 01.01.016c.04.098.097.146.17-.005a.11.11 0 01.015-.026l2.768-6.297c.027-.075.06-.157.1-.248.295-.66.004-.828-.234-.865h-.411v-.626h2.683v.626h-.441c-.177.03-.44.145-.685.513l-3.687 8.388-1.255-.02-.494-1.178-.58 1.504a.18.18 0 01-.009.041c-.054.164.034.207.17.207"
                        }
                    })])])
                }), [], !1, null, null, null).exports,
                l = r(11),
                c = r(41),
                d = {
                    components: {
                        LogoSvg: o,
                        Icon: l.default,
                        Modal: c.default
                    },
                    props: {
                        information: {
                            type: String,
                            required: !0
                        },
                        modalTitle: {
                            type: String,
                            default: null
                        },
                        modalContent: {
                            type: String,
                            default: null
                        },
                        isClosable: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        isModalOpened: !1,
                        isActive: !0
                    }),
                    methods: {
                        openModal() {
                            this.isModalOpened = !0;
                            const e = "contact_us_page" === this.$defaultTrackingData.categoryGa ? "client_service" : this.$defaultTrackingData.categoryGa;
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionGa: "open_top_message",
                                actionId: "top_message",
                                labelGa: this.modalTitle,
                                categoryGa: e
                            }))
                        }
                    }
                },
                h = (r(1002), Object(n.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.information && e.isActive ? t("div", {
                        staticClass: "lv-information-banner"
                    }, [t("div", {
                        staticClass: "lv-information-banner__icon"
                    }, [t("LogoSvg", {
                        attrs: {
                            focusable: "false"
                        }
                    })], 1), e._v(" "), t("div", {
                        staticClass: "lv-information-banner__message-wrapper"
                    }, [t("div", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: e.information,
                            expression: "information"
                        }],
                        staticClass: "lv-information-banner__message body-s",
                        class: {
                            "-has-modal": e.modalTitle && e.modalContent
                        }
                    }), e._v(" "), e.modalTitle && e.modalContent ? t("button", {
                        ref: "buttonReadMore",
                        staticClass: "lv-information-banner__read-more",
                        on: {
                            click: function(t) {
                                return e.openModal()
                            },
                            keydown: function(t) {
                                if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                                e.isModalOpened = !0
                            }
                        }
                    }, [e._v("\n        " + e._s(e.$t("global_read_more")) + "\n      ")]) : e._e()]), e._v(" "), e.isClosable ? t("button", {
                        staticClass: "lv-information-banner__close -light",
                        attrs: {
                            "aria-label": e.$t("svg_close_title")
                        },
                        on: {
                            click: function(t) {
                                e.isActive = !1
                            },
                            keydown: function(t) {
                                if (!t.type.indexOf("key") && e._k(t.keyCode, "enter", 13, t.key, "Enter")) return null;
                                e.isActive = !1
                            }
                        }
                    }, [t("Icon", {
                        attrs: {
                            name: "controls-close"
                        }
                    })], 1) : e._e(), e._v(" "), e.isModalOpened ? t("Modal", {
                        attrs: {
                            "trigger-element": e.$refs.buttonReadMore
                        },
                        on: {
                            closed: function(t) {
                                e.isModalOpened = !1
                            }
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v("\n        " + e._s(e.modalTitle) + "\n      ")]
                            },
                            proxy: !0
                        }, {
                            key: "default",
                            fn: function() {
                                return [t("div", {
                                    directives: [{
                                        name: "safe-html",
                                        rawName: "v-safe-html",
                                        value: e.modalContent,
                                        expression: "modalContent"
                                    }],
                                    staticClass: "lv-information-banner__extra-information"
                                })]
                            },
                            proxy: !0
                        }], null, !1, 1849352876)
                    }) : e._e()], 1) : e._e()])
                }), [], !1, null, null, null));
            t.default = h.exports
        },
        1024: function(e, t, r) {
            var content = r(1121);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(10).default)("46a05b60", content, !0, {
                sourceMap: !1
            })
        },
        1120: function(e, t, r) {
            "use strict";
            r(1024)
        },
        1121: function(e, t, r) {
            var n = r(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".lv-search-bar{display:inline-block;position:relative;width:100%}.lv-search-bar.-focused{position:fixed;top:0;z-index:11}[dir=ltr] .lv-search-bar.-focused{left:0}[dir=rtl] .lv-search-bar.-focused{right:0}.lv-search-bar.-focused .lv-search-bar__wrapper{position:relative;width:100%;z-index:11}[dir] .lv-search-bar.-focused .lv-search-bar__wrapper{background:#fff;padding:1rem}.lv-search-bar.-focused .lv-search-bar__input-container{display:inline-block;width:calc(100% - 2.5rem)}.lv-search-bar.-focused .lv-search-bar__input-container input{width:calc(100% - 2.5rem)}.lv-search-bar__input-container{position:relative}.lv-search-bar__close-icon{align-items:center;display:flex;position:absolute;top:50%}[dir] .lv-search-bar__close-icon{transform:translate3d(0,-50%,0);transition:all .3s cubic-bezier(.455,.03,.515,.955)}[dir=ltr] .lv-search-bar__close-icon{right:0}[dir=rtl] .lv-search-bar__close-icon{left:0}@media screen and (min-width:64rem){[dir=ltr] .lv-search-bar__close-icon{right:1.5rem}[dir=rtl] .lv-search-bar__close-icon{left:1.5rem}}.lv-search-bar__close-icon .lv-icon{height:1rem;width:1rem}.lv-search-bar__results{bottom:0;box-sizing:border-box;overflow:auto;position:fixed;z-index:4}[dir] .lv-search-bar__results{background-color:#fff;border-top:1px solid #e1e1e1;left:0;right:0}[dir=ltr] .lv-search-bar__results{padding:1.5rem 1.5rem 1.5rem 1rem}[dir=rtl] .lv-search-bar__results{padding:1.5rem 1rem 1.5rem 1.5rem}.lv-search-bar__results li b{font-weight:500}@media screen and (min-width:64rem){.lv-search-bar.-block .lv-search-bar__results{bottom:inherit;max-height:12.5rem;position:absolute;width:100%}[dir] .lv-search-bar.-block .lv-search-bar__results{border:1px solid #e1e1e1;padding:1rem}[dir=ltr] .lv-search-bar.-block .lv-search-bar__results{left:0}[dir=rtl] .lv-search-bar.-block .lv-search-bar__results{right:0}[dir] .lv-search-bar.-block .lv-search-bar__results-list li:not(:first-child){margin-top:.5rem}.lv-search-bar:not(.-block) .lv-search-bar__results{box-sizing:border-box}[dir] .lv-search-bar:not(.-block) .lv-search-bar__results{border:none;padding-left:6.4vw;padding-right:6.4vw}}@media screen and (min-width:64rem)and (min-width:48rem){[dir] .lv-search-bar:not(.-block) .lv-search-bar__results{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem)and (min-width:64rem){[dir] .lv-search-bar:not(.-block) .lv-search-bar__results{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:64rem)and (min-width:90rem){[dir] .lv-search-bar:not(.-block) .lv-search-bar__results{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}@media screen and (min-width:64rem){[dir] .lv-search-bar:not(.-block) .lv-search-bar__results-list li:not(:first-child){margin-top:1.5rem}}@media screen and (min-width:64rem)and (min-width:64rem){[dir] .lv-search-bar:not(.-block) .lv-search-bar__results-list li:not(:first-child){margin-top:1rem}}@media screen and (min-width:64rem){[dir] .lv-search-bar:not(.-block) .lv-search-bar__no-results-list,[dir] .lv-search-bar:not(.-block) .lv-search-bar__results-list{padding:0 3rem}}.lv-search-bar__no-results{word-wrap:break-word;display:block}[dir] .lv-search-bar__no-results{margin-bottom:1.5rem}.lv-search-bar__backdrop{z-index:2}[dir] .lv-search-bar__backdrop{background-color:rgba(0,0,0,.4)}", ""]), n.locals = {}, e.exports = n
        },
        1141: function(e, t, r) {
            "use strict";
            r(25), r(56);
            var n = r(124),
                o = r.n(n),
                l = r(149),
                c = r.n(l),
                d = r(29),
                h = r(4),
                _ = r(335),
                m = r(14),
                f = r(336),
                v = r(153),
                k = r(11),
                y = r(17),
                w = r(223),
                C = r(1074);
            var x = {
                    components: {
                        Backdrop: v.default,
                        Icon: k.default,
                        SmartLink: y.default,
                        LinkListCard: C.a,
                        SearchInput: w.default,
                        FocusLock: c.a
                    },
                    props: {
                        isInBlock: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        searchResults: [],
                        keyword: "",
                        isVisible: !1,
                        isFocus: !1,
                        isLoading: !1,
                        searchBarPosition: 0
                    }),
                    computed: {
                        themesList() {
                            return this.$store.state.faq.themesList
                        },
                        isSmall() {
                            return this.$store.getters[m.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("m")
                        },
                        minChar() {
                            return this.$store.getters[h.LOCALE_CONTEXT_IS_IDEOGRAM_LOCALE] ? 2 : 3
                        },
                        politeText() {
                            return this.keyword.length >= this.minChar ? this.searchResults.length ? this.$t("search_faq_x_result".concat(this.searchResults.length > 1 ? "s" : ""), {
                                result_length: this.searchResults.length
                            }) : "".concat(this.$t("search_faq_text_no_result", {
                                keyword: this.keyword
                            })) : ""
                        }
                    },
                    watch: {
                        keyword: o()((async function(e) {
                            e.length >= this.minChar ? (this.isVisible = !0, await this.search(e), this.sendTracking("search")) : this.isVisible = !1
                        }), 500),
                        isVisible(e) {
                            (!this.isInBlock || this.isInBlock && this.isSmall) && this.$store.commit(_.FAQ_TOGGLE_SEARCH_RESULTS_MUTATION, e)
                        }
                    },
                    mounted() {
                        this.onScrollListener = Object(d.a)((() => this.onScroll())), window.addEventListener("scroll", this.onScrollListener), this.onScrollListener()
                    },
                    destroyed() {
                        window.removeEventListener("scroll", this.onScrollListener), this.$store.commit(_.FAQ_TOGGLE_SEARCH_RESULTS_MUTATION, !1)
                    },
                    methods: {
                        resetField() {
                            this.keyword = "", this.searchResults = [], this.isFocus = !1
                        },
                        parsedSearch() {
                            return this.keyword.trim().replace(/ +/g, "|")
                        },
                        highlight(e) {
                            return void 0 !== e && (e = e.replace(new RegExp(this.parsedSearch(), "gi"), (e => "<b>".concat(e, "</b>")))), e
                        },
                        async search(e) {
                            const t = e.trim();
                            if (!this.isVisible) return;
                            this.isLoading = !0;
                            const r = this.localePath("faq"),
                                n = await this.$salesforce.getSearchResults(t).catch((() => {})),
                                {
                                    searchRecords: o = []
                                } = n;
                            if (!o.length) return this.searchResults = [], void(this.isLoading = !1);
                            this.searchResults = Object(f.d)(n, r, this.$i18n), this.isLoading = !1
                        },
                        onScroll() {
                            const e = document.documentElement.scrollTop || document.body.scrollTop;
                            this.getSearchBarPosition(e)
                        },
                        getSearchBarPosition(e) {
                            let t = this.$refs.searchBar.$el.getBoundingClientRect().bottom;
                            return this.searchBarPosition = t + 16, e && (t += e), this.searchBarPosition
                        },
                        isFocused(e) {
                            this.isVisible || (this.isFocus = e, !0 === this.isFocus && this.sendTracking("focus"), this.isSmall && (this.$store.commit(_.FAQ_TOGGLE_SEARCH_RESULTS_MUTATION, e), !0 === this.isFocus && this.$nextTick((() => this.getSearchBarPosition()))), e || this.resetField())
                        },
                        handleTabNavigation(e) {
                            e && !this.isSmall && this.resetField()
                        },
                        sendTracking(e, t) {
                            let r = {
                                categoryGa: "client_services",
                                actionGa: "faq_search",
                                actionType: "faq_questions",
                                faqSearchKeywords: this.keyword
                            };
                            "focus" === e ? r = { ...r,
                                actionId: "faq_internal_search",
                                labelGa: "faq_internal_search"
                            } : "search" === e ? r = { ...r,
                                actionId: 0 === this.searchResults.length ? "faq_0_results" : "predictive_search_results",
                                labelGa: 0 === this.searchResults.length ? "faq_0_results" : "predictive_search_results",
                                faqNumberOfResults: this.searchResults.length
                            } : "theme" === e ? r = { ...r,
                                actionId: "faq_theme_selection",
                                labelGa: "faq_theme_selection",
                                faqNumberOfResults: this.searchResults.length
                            } : "result" === e && (r = { ...r,
                                actionId: "faq_result_selection",
                                labelGa: "faq_result_selection",
                                faqNumberOfResults: this.searchResults.length,
                                contentId: t
                            }), this.$lvTrackingSendEvent(this.$lvTrackingGenerateData(r))
                        }
                    }
                },
                M = (r(1120), r(0)),
                component = Object(M.a)(x, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("FocusLock", {
                        attrs: {
                            disabled: !e.isFocus || !e.isSmall
                        }
                    }, [t("div", {
                        staticClass: "lv-search-bar",
                        class: {
                            "-block": e.isInBlock, "-focused": e.isFocus && e.isSmall
                        }
                    }, [t("div", {
                        staticClass: "lv-search-bar__wrapper"
                    }, [t("SearchInput", {
                        ref: "searchBar",
                        staticClass: "lv-search-bar__input-container",
                        class: {
                            "-dark": e.isInBlock || e.isFocus && e.isSmall
                        },
                        attrs: {
                            id: "searchFaqInput",
                            label: e.$t("alt_search_faq_keyword"),
                            placeholder: e.$t("search_faq_default_text"),
                            title: e.$t("search_faq_default_text")
                        },
                        on: {
                            focus: function(t) {
                                return e.isFocused(!0)
                            },
                            blur: function(t) {
                                return e.isFocused(!1)
                            },
                            keydown: function(t) {
                                return !t.type.indexOf("key") && e._k(t.keyCode, "tab", 9, t.key, "Tab") ? null : t.shiftKey ? t.ctrlKey || t.altKey || t.metaKey ? null : e.resetField.apply(null, arguments) : null
                            }
                        },
                        scopedSlots: e._u([e.isVisible ? {
                            key: "additional-content",
                            fn: function() {
                                return [t("button", {
                                    staticClass: "lv-search-bar__close-icon",
                                    attrs: {
                                        "aria-label": e.$t("search_faq_delete_input")
                                    },
                                    on: {
                                        click: e.resetField
                                    }
                                }, [t("Icon", {
                                    attrs: {
                                        name: "controls-close"
                                    }
                                })], 1)]
                            },
                            proxy: !0
                        } : null], null, !0),
                        model: {
                            value: e.keyword,
                            callback: function(t) {
                                e.keyword = t
                            },
                            expression: "keyword"
                        }
                    })], 1), e._v(" "), t("EscapeHandler", {
                        attrs: {
                            priority: 1
                        },
                        on: {
                            esc: function(t) {
                                e.isVisible = !1
                            }
                        }
                    }), e._v(" "), t("div", {
                        staticClass: "sr-only",
                        attrs: {
                            "aria-live": "polite",
                            "aria-atomic": "true"
                        }
                    }, [e._v(e._s(e.politeText))]), e._v(" "), t("transition", {
                        attrs: {
                            name: "fade"
                        }
                    }, [e.isVisible && e.isFocus ? t("div", {
                        staticClass: "lv-search-bar__results",
                        style: [!e.isInBlock || e.isInBlock && e.isSmall ? {
                            top: "".concat(e.searchBarPosition, "px")
                        } : {}]
                    }, [e.searchResults.length ? t("ul", {
                        staticClass: "lv-list lv-search-bar__results-list"
                    }, e._l(e.searchResults, (function(r, i) {
                        return t("li", {
                            key: i
                        }, [t("SmartLink", {
                            directives: [{
                                name: "safe-html",
                                rawName: "v-safe-html",
                                value: e.highlight(r.label),
                                expression: "highlight(result.label)"
                            }],
                            staticClass: "list-label-s",
                            attrs: {
                                url: r.url
                            },
                            nativeOn: {
                                click: function(t) {
                                    return e.sendTracking("result", r.id)
                                },
                                keydown: function(t) {
                                    return !t.type.indexOf("key") && e._k(t.keyCode, "tab", 9, t.key, "Tab") || t.ctrlKey || t.shiftKey || t.altKey || t.metaKey ? null : e.handleTabNavigation(i === e.searchResults.length - 1)
                                }
                            }
                        })], 1)
                    })), 0) : t("div", {
                        staticClass: "lv-search-bar__no-results-list"
                    }, [e.isLoading ? e._e() : t("span", {
                        staticClass: "lv-search-bar__no-results body-s"
                    }, [e._v("\n            " + e._s(e.$t("search_faq_text_no_result", {
                        keyword: e.keyword
                    })) + "\n          ")]), e._v(" "), t("span", {
                        staticClass: "lv-search-bar__no-results body-m"
                    }, [e._v("\n            " + e._s(e.$t("search_faq_informative_text_no_results")) + "\n          ")]), e._v(" "), t("LinkListCard", {
                        attrs: {
                            items: e.themesList,
                            "layout-type": "horizontal"
                        },
                        on: {
                            clicked: function(t) {
                                return e.sendTracking("theme")
                            }
                        }
                    })], 1)]) : e._e()]), e._v(" "), e.isFocus && e.isSmall ? t("Backdrop", {
                        staticClass: "lv-search-bar__backdrop",
                        on: {
                            close: function(t) {
                                return e.isFocused(!1)
                            }
                        }
                    }) : e._e()], 1)])
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        1376: function(e, t, r) {
            "use strict";
            (function(e) {
                var n = r(41);
                t.a = {
                    components: {
                        Modal: n.default
                    },
                    props: {
                        triggerElement: {
                            type: [e.HTMLButtonElement, e.HTMLDivElement, e.HTMLAnchorElement],
                            default: null
                        },
                        isOpen: {
                            type: Boolean,
                            default: !1
                        },
                        message: {
                            type: Object,
                            default: null
                        }
                    },
                    computed: {
                        isModalOpen() {
                            return this.isOpen && this.message
                        }
                    },
                    methods: {
                        closeModal() {
                            this.$emit("closed")
                        }
                    }
                }
            }).call(this, r(39))
        },
        1599: function(e, t, r) {
            var content = r(2109);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(10).default)("7f146e4d", content, !0, {
                sourceMap: !1
            })
        },
        1602: function(e, t, r) {
            var content = r(2115);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(10).default)("c2dc2d16", content, !0, {
                sourceMap: !1
            })
        },
        2108: function(e, t, r) {
            "use strict";
            r(1599)
        },
        2109: function(e, t, r) {
            var n = r(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".lv-service-group{align-items:stretch;display:flex;flex-flow:column nowrap}[dir] .lv-service-group{background:#fff}@media screen and (min-width:64rem){.lv-service-group{flex-direction:row}}.lv-service-group__section{flex:1 1 0}[dir] .lv-service-group__section:not(:first-child){border-top:1px solid #e1e1e1}@media screen and (min-width:64rem){[dir] .lv-service-group__section:not(:first-child){border-top:0}[dir=ltr] .lv-service-group__section:not(:first-child){border-left:1px solid #e1e1e1}[dir=rtl] .lv-service-group__section:not(:first-child){border-right:1px solid #e1e1e1}}.lv-service-group__section .lv-service-card{height:100%}.lv-service-group__section .lv-service-card__url{align-items:center;display:flex;justify-content:center}", ""]), n.locals = {}, e.exports = n
        },
        2114: function(e, t, r) {
            "use strict";
            r(1602)
        },
        2115: function(e, t, r) {
            var n = r(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, "[dir] .lv-contact-us__dropdown{margin-bottom:1rem}.lv-contact-us__dropdown select{font-weight:500}@media screen and (min-width:64rem){.lv-contact-us__dropdown{max-width:33.333%}}.lv-contact-us__information{width:100%}[dir] .lv-contact-us__information{margin:0 0 2rem}@media screen and (min-width:64rem){.lv-contact-us__information{max-width:66.6666666667%}}.lv-contact-us .lv-link-list-card{display:flex;flex-direction:column}[dir] .lv-contact-us .lv-link-list-card__title{border-bottom:none;padding-bottom:0}.lv-contact-us .lv-link-list-card__button{align-items:center;display:flex;justify-content:center}", ""]), n.locals = {}, e.exports = n
        },
        3621: function(e, t, r) {
            "use strict";
            r.r(t);
            r(82), r(3);
            var n = r(26),
                o = r(335);
            var l = r(336),
                c = r(1072),
                d = {
                    components: {
                        ServiceCard: r(1073).a
                    },
                    props: {
                        sections: {
                            type: Object,
                            required: !0
                        }
                    }
                },
                h = (r(2108), r(0)),
                _ = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "lv-service-group"
                    }, e._l(e.sections.items, (function(section, r) {
                        return t("div", {
                            key: r,
                            staticClass: "lv-service-group__section"
                        }, [t("ServiceCard", {
                            attrs: {
                                section: section,
                                "media-widths": {
                                    m: "third"
                                }
                            },
                            on: {
                                clicked: function(t) {
                                    return e.$emit("clicked", t)
                                }
                            }
                        })], 1)
                    })), 0)
                }), [], !1, null, null, null).exports,
                m = r(1074),
                f = r(17),
                v = r(1141),
                k = r(1376).a,
                y = Object(h.a)(k, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.isModalOpen ? t("Modal", {
                        attrs: {
                            "trigger-element": e.triggerElement,
                            size: "auto"
                        },
                        on: {
                            closed: e.closeModal
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v(" " + e._s(e.message.chatTitle) + " ")]
                            },
                            proxy: !0
                        }, {
                            key: "default",
                            fn: function() {
                                return [t("p", [e._v(e._s(e.message.chatLabel))]), e._v(" "), t("p", [e._v(e._s(e.message.chatDesc))])]
                            },
                            proxy: !0
                        }], null, !1, 1465533411)
                    }) : e._e()
                }), [], !1, null, null, null).exports,
                w = r(3434),
                C = r(281),
                x = r(16),
                M = r(1011),
                T = r(939),
                S = r(156),
                L = r(419),
                O = {
                    components: {
                        EditorialLayout: c.a,
                        ServiceGroup: _,
                        LinkListCard: m.a,
                        SmartLink: f.default,
                        SearchBar: v.a,
                        SelectDropdown: T.default,
                        InformationBanner: M.default,
                        ChatStatusModal: y,
                        CallMeBack: w.default,
                        Modal: () => Promise.resolve().then(r.bind(null, 41))
                    },
                    isPage: !0,
                    tracking: {
                        default: {
                            categoryGa: "contact_us_page"
                        }
                    },
                    setup() {
                        const {
                            isPowerFrontEnabled: e,
                            handlePowerFrontChatEvents: t,
                            powerfrontChatUnavailable: r,
                            powerfrontModalTriggerer: n,
                            availableAssistants: o,
                            openPowerfrontChatUnavailableModal: l,
                            closePowerfrontChatUnavailableModal: c,
                            updateAvailableAssistants: d
                        } = Object(S.a)(), {
                            isCallMeBackModalOpen: h,
                            callMeBackModalTriggerer: _,
                            openCallMeBack: m,
                            closeCallMeBack: f
                        } = Object(L.a)();
                        return {
                            isPowerFrontEnabled: e,
                            handlePowerFrontChatEvents: t,
                            powerfrontChatUnavailable: r,
                            powerfrontModalTriggerer: n,
                            availableAssistants: o,
                            openPowerfrontChatUnavailableModal: l,
                            closePowerfrontChatUnavailableModal: c,
                            updateAvailableAssistants: d,
                            isCallMeBackModalOpen: h,
                            callMeBackModalTriggerer: _,
                            openCallMeBack: m,
                            closeCallMeBack: f
                        }
                    },
                    async asyncData(e) {
                        const {
                            store: t,
                            app: r
                        } = e;
                        let c, d;
                        const h = r.localePath("faq");
                        try {
                            [c, d] = await Promise.all([r.$publicAtg.editorial.getContactUs(), r.$salesforce.getPopularArticles().catch((() => ({}))), t.dispatch(n.PAGE_CONTEXT_UPDATE_ACTION, {
                                currentPage: x.a.ContactUs,
                                utagData: {
                                    pageName: "client_services/contact",
                                    pageType: "client_services"
                                }
                            }), t.dispatch(o.FAQ_LOAD_THEMES_ACTION, {
                                faqUrl: h
                            })])
                        } catch (e) {
                            return r.$pageErrorHandler(new C.a(e, 404))
                        }
                        const {
                            headline: _,
                            description: m,
                            countries: f = [],
                            faqTitle: v,
                            chatWithUs: k,
                            chatWithUsOffline: y
                        } = function() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const {
                                headline: t,
                                description: r,
                                faq: n = {},
                                countryInformation: o = [],
                                seoTitle: l,
                                seoDescription: c,
                                chatWithUs: d,
                                chatWithUsOffline: h
                            } = e, {
                                faqTitle: _
                            } = n, m = [];
                            return o.forEach((e => {
                                const t = e.items.filter((e => "contactus" === e["@type"])).reduce(((e, t) => {
                                        const {
                                            identifier: r
                                        } = t, n = t.actions.map((e => (e.url = e.link, e.type = e.redirectionType, e.id = e["@id"], delete e.link, delete e.redirectionType, delete e["@id"], e)));
                                        return e.push({
                                            title: r,
                                            type: t["@type"],
                                            ctas: n
                                        }), e
                                    }), []),
                                    r = e.items.filter((e => "contactus" !== e["@type"]));
                                let n = r[0]["@type"],
                                    o = 0;
                                if (m.push({
                                        name: e.name,
                                        sections: [{
                                            type: n,
                                            items: []
                                        }]
                                    }), r.forEach((e => {
                                        const t = m[m.length - 1].sections[o].items.length;
                                        let r;
                                        n === e["@type"] && "service" !== n && 4 !== t || (o += 1, n = e["@type"], m[m.length - 1].sections.push({
                                            type: n,
                                            items: []
                                        })), "service" === n && (r = function(e, t) {
                                            const data = {
                                                title: e.identifier,
                                                description: e.description1,
                                                format: e.ratio,
                                                imageAlt: e.imageAlt,
                                                filename: e.imageLink,
                                                type: t
                                            };
                                            return e.actions ? { ...data,
                                                ctas: e.actions.map((e => (e.url = e.link, e.type = e.redirectionType, e.id = e["@id"], delete e.link, delete e.redirectionType, delete e["@id"], e)))
                                            } : { ...data
                                            }
                                        }(e, n)), "channel" === n && (r = function(e, t) {
                                            const data = {
                                                title: e.identifier,
                                                description: e.description1,
                                                description2: e.description2,
                                                type: t
                                            };
                                            return e.actions ? { ...data,
                                                ctas: e.actions.map((e => (e.url = e.link, e.type = e.redirectionType || "internal", e.id = e["@id"], delete e.link, delete e.redirectionType, delete e["@id"], e)))
                                            } : { ...data
                                            }
                                        }(e, n)), m[m.length - 1].sections[o].items.push(r)
                                    })), t.length > 0) {
                                    const e = m[m.length - 1].sections.find((section => "channel" === section.type));
                                    if (e) {
                                        const r = { ...t[0].ctas[0],
                                            title: t[0].title
                                        };
                                        e.items[0] = { ...e.items[0],
                                            ctas: (e.items[0].ctas || []).concat(r)
                                        }
                                    }
                                }
                            })), {
                                headline: t,
                                description: r,
                                faqTitle: _,
                                countries: m,
                                seoTitle: l,
                                seoDescription: c,
                                chatWithUs: d,
                                chatWithUsOffline: h
                            }
                        }(c), w = (f[0] || {}).name, {
                            sections: M
                        } = f.find((e => e.name === w)) || {};
                        return {
                            headline: _,
                            description: m,
                            countries: f,
                            faqTitle: v,
                            popularArticlesList: Object(l.c)(d, h, r.i18n),
                            selectedCountry: w,
                            countrySections: M,
                            chatWithUs: k,
                            chatWithUsOffline: y
                        }
                    },
                    data: () => ({
                        selectedCountry: "",
                        countrySections: [],
                        chatModalOpen: !1,
                        chatStatusMessage: null,
                        chatModalTriggerer: null
                    }),
                    computed: {
                        countriesData() {
                            return this.countries.map((function() {
                                let {
                                    name: label,
                                    name: e
                                } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                return {
                                    label: label,
                                    value: e
                                }
                            }))
                        },
                        isChatModalOpen() {
                            return this.chatModalOpen
                        },
                        statusMessage() {
                            return this.chatStatusMessage
                        },
                        modalTriggerer() {
                            return this.chatModalTriggerer
                        }
                    },
                    watch: {
                        selectedCountry(e) {
                            this.countrySections = this.countries.find((t => t.name === e)).sections
                        }
                    },
                    methods: {
                        openChatModal(e, t) {
                            this.chatModalTriggerer = e, this.chatStatusMessage = t, this.chatModalOpen = !0
                        },
                        isOpen() {
                            const e = new Date,
                                t = new Date(e.toLocaleString("en-US", {
                                    timeZone: "America/Chicago"
                                })),
                                r = [
                                    [10, 21],
                                    [8, 21],
                                    [8, 21],
                                    [8, 21],
                                    [8, 21],
                                    [8, 21],
                                    [9, 21]
                                ][t.getDay()],
                                n = t.getHours();
                            return r && r[0] <= n && r[1] > n
                        },
                        openChat(e) {
                            if (this.isOpen()) {
                                const t = document.querySelector("button.helpButtonEnabled"),
                                    r = document.querySelector("button.helpButton");
                                r ? r.click() : t ? t.click() : this.openChatModal(e, this.chatWithUsOffline)
                            } else this.openChatModal(e, this.chatWithUs)
                        },
                        handleAndTrack(e) {
                            "livechat" === e.id.toLowerCase() && this.openChat(e.target), "callmeback" === e.id.toLowerCase() && this.openCallMeBack(e.target), "proactivechat" === e.id.toLowerCase() && this.handlePowerFrontChat(e), this.sendTrackingBlock(e)
                        },
                        handlePowerFrontChat(e) {
                            this.isPowerFrontEnabled && window.insideFrontInterface ? (this.updateAvailableAssistants(), this.availableAssistants.length ? (window.insideFrontInterface.openChatPane(), this.powerfrontChatUnavailable = !1) : this.openPowerfrontChatUnavailableModal(e.target)) : this.openPowerfrontChatUnavailableModal(e.target)
                        },
                        sendTrackingList(e) {
                            const t = {
                                categoryGa: "client_services",
                                actionGa: "client_services",
                                actionId: "most_popular_faq_theme_".concat(e.position),
                                actionType: "faq_questions",
                                labelGa: e.id,
                                actionPosition: "most_popular_faq_theme_".concat(e.position)
                            };
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData(t))
                        },
                        sendTrackingBlock(e) {
                            const t = {
                                categoryGa: "client_services",
                                actionGa: "client_services",
                                actionId: e.id,
                                labelGa: e.id,
                                actionPosition: "position_".concat(e.position)
                            };
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData(t))
                        }
                    }
                },
                E = O,
                A = (r(2114), Object(h.a)(E, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("EditorialLayout", {
                        scopedSlots: e._u(["" !== e.$t("cs_top_message") ? {
                            key: "header",
                            fn: function() {
                                return [t("InformationBanner", {
                                    staticClass: "lv-contact-us__information",
                                    attrs: {
                                        information: e.$t("cs_top_message"),
                                        "modal-title": e.$t("cs_top_message_extra_title"),
                                        "modal-content": e.$t("cs_top_message_extra_informations")
                                    }
                                })]
                            },
                            proxy: !0
                        } : null, {
                            key: "mainTitle",
                            fn: function() {
                                return [e._v("\n    " + e._s(e.headline) + "\n  ")]
                            },
                            proxy: !0
                        }, {
                            key: "description",
                            fn: function() {
                                return [e._v("\n    " + e._s(e.description) + "\n  ")]
                            },
                            proxy: !0
                        }, {
                            key: "mainContent",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "lv-contact-us"
                                }, [e.countries.length > 1 ? t("SelectDropdown", {
                                    staticClass: "lv-contact-us__dropdown",
                                    attrs: {
                                        options: e.countriesData,
                                        name: "countries"
                                    },
                                    model: {
                                        value: e.selectedCountry,
                                        callback: function(t) {
                                            e.selectedCountry = t
                                        },
                                        expression: "selectedCountry"
                                    }
                                }) : e._e(), e._v(" "), e._l(e.countrySections, (function(r, n) {
                                    return t("ServiceGroup", {
                                        key: n,
                                        staticClass: "lv-editorial__block",
                                        attrs: {
                                            sections: r
                                        },
                                        on: {
                                            clicked: e.handleAndTrack
                                        }
                                    })
                                })), e._v(" "), e.popularArticlesList && e.popularArticlesList.length ? t("LinkListCard", {
                                    attrs: {
                                        items: e.popularArticlesList,
                                        "layout-type": "grid"
                                    },
                                    on: {
                                        clicked: e.sendTrackingList
                                    }
                                }, [t("template", {
                                    slot: "title"
                                }, [t("h2", [e._v(e._s(e.faqTitle))])]), e._v(" "), t("template", {
                                    slot: "search"
                                }, [t("SearchBar", {
                                    attrs: {
                                        "is-in-block": !0
                                    }
                                })], 1), e._v(" "), t("template", {
                                    slot: "button"
                                }, [t("SmartLink", {
                                    staticClass: "lv-link-list-card__button lv-button -secondary",
                                    attrs: {
                                        spa: {
                                            to: e.localePath("faq")
                                        }
                                    }
                                }, [e._v(e._s(e.$t("global_discover_all")))])], 1)], 2) : e._e(), e._v(" "), t("ChatStatusModal", {
                                    attrs: {
                                        "is-open": e.isChatModalOpen,
                                        "trigger-element": e.modalTriggerer,
                                        message: e.statusMessage
                                    },
                                    on: {
                                        closed: function(t) {
                                            e.chatModalOpen = !1
                                        }
                                    }
                                }), e._v(" "), t("CallMeBack", {
                                    attrs: {
                                        "is-open": e.isCallMeBackModalOpen,
                                        "trigger-element": e.callMeBackModalTriggerer
                                    },
                                    on: {
                                        closed: e.closeCallMeBack
                                    }
                                }), e._v(" "), e.powerfrontChatUnavailable ? t("Modal", {
                                    attrs: {
                                        "trigger-element": e.powerfrontModalTriggerer
                                    },
                                    on: {
                                        closed: e.closePowerfrontChatUnavailableModal
                                    },
                                    scopedSlots: e._u([{
                                        key: "title",
                                        fn: function() {
                                            return [e._v("\n          " + e._s(e.$t("proactiveChat_unavailable_popup_title")) + "\n        ")]
                                        },
                                        proxy: !0
                                    }, {
                                        key: "default",
                                        fn: function() {
                                            return [t("p", {
                                                directives: [{
                                                    name: "safe-html",
                                                    rawName: "v-safe-html",
                                                    value: e.$t("proactiveChat_unavailable_popup_description"),
                                                    expression: "$t('proactiveChat_unavailable_popup_description')"
                                                }],
                                                staticClass: "lv-contact-us__chat_unavailable"
                                            })]
                                        },
                                        proxy: !0
                                    }], null, !1, 4164334899)
                                }) : e._e()], 2)]
                            },
                            proxy: !0
                        }], null, !0)
                    })
                }), [], !1, null, null, null));
            t.default = A.exports
        },
        965: function(e, t, r) {
            var content = r(1003);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(10).default)("079975ec", content, !0, {
                sourceMap: !1
            })
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/3a1cf-9f525.js.map