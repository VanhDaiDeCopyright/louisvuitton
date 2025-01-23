/*! For license information please see ../LICENSES */
(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [215, 108, 112, 116, 141, 406, 421, 465, 503], {
        1004: function(t, e, r) {
            "use strict";
            r(967)
        },
        1005: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-video-player{height:100%;position:relative;width:100%}[dir] .lv-video-player{margin-left:auto;margin-right:auto}.lv-video-player :focus{outline:5px auto -webkit-focus-ring-color}@-moz-document url-prefix(""){.lv-video-player :focus{outline:1px dotted #818181}}.lv-video-player__container{height:100%}.lv-video-player__container .flow-skin-lv4{height:100%!important}.lv-video-player__container .freecaster-player{position:relative;z-index:2}.fp-controls{direction:ltr}', ""]), l.locals = {}, t.exports = l
        },
        1033: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = r(940),
                n = r(938),
                o = {
                    components: {
                        EditorialMedia: l.default,
                        EditorialTextBlock: n.default
                    },
                    props: {
                        data: {
                            type: Object,
                            default: () => ({})
                        },
                        hasSound: {
                            type: Boolean,
                            default: !0
                        },
                        light: {
                            type: Boolean,
                            default: !1
                        },
                        markupTitle: {
                            type: String,
                            default: "h1"
                        },
                        textPosition: {
                            type: String,
                            default: "bottom"
                        },
                        mediaPosition: {
                            type: String,
                            default: "top"
                        },
                        hasScrollInfo: {
                            type: Boolean,
                            default: !1
                        },
                        ratioMobile: {
                            type: String,
                            default: "portrait"
                        },
                        playPausePortal: {
                            type: String,
                            default: null
                        },
                        isCritical: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        mediaRatio() {
                            return {
                                mobile: this.ratioMobile,
                                desktop: "landscape"
                            }
                        },
                        hasFullscreenGradient() {
                            return "center" === this.textPosition
                        }
                    }
                },
                d = (r(1058), r(0)),
                component = Object(d.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("section", {
                        staticClass: "lv-masthead",
                        class: [{
                            "-contrast": t.light
                        }]
                    }, [e("EditorialMedia", t._g({
                        staticClass: "lv-masthead__media",
                        attrs: {
                            data: { ...t.data,
                                ratio: t.mediaRatio
                            },
                            "has-sound": t.hasSound,
                            "play-pause-portal": t.playPausePortal,
                            contrast: t.light,
                            "is-critical": t.isCritical,
                            "is-hero": "",
                            gradient: !t.hasFullscreenGradient || "full",
                            "media-position": t.mediaPosition
                        }
                    }, t.$listeners)), t._v(" "), e("header", {
                        staticClass: "lv-masthead__header",
                        class: ["-".concat(t.textPosition), {
                            "-has-scroll-info": t.hasScrollInfo
                        }]
                    }, [t.$slots.header ? [t._t("header")] : e("EditorialTextBlock", t._g({
                        staticClass: "lv-masthead__text",
                        attrs: {
                            data: t.data,
                            "markup-title": t.markupTitle,
                            "title-class-mobile": "lv-masthead__title heading-m",
                            "title-class-desktop": "lv-masthead__title heading-l",
                            contrast: !t.light
                        }
                    }, t.$listeners))], 2), t._v(" "), e("footer", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: t.hasScrollInfo,
                            expression: "hasScrollInfo"
                        }],
                        staticClass: "lv-masthead__footer"
                    }, [e("span", {
                        staticClass: "list-label-s"
                    }, [t._v(t._s(t.data.scroll || t.$t("global_discover")))]), t._v(" "), e("div", {
                        staticClass: "lv-masthead__line"
                    })])], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        1058: function(t, e, r) {
            "use strict";
            r(993)
        },
        1059: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-masthead{overflow:hidden;position:relative}.lv-masthead:not(.-contrast){color:#fff}[dir] .lv-masthead:not(.-contrast) .lv-masthead__line{background-color:hsla(0,0%,100%,.2)}.lv-masthead .lv-masthead__text{max-width:100%}.lv-masthead__header{align-items:center;box-sizing:border-box;position:absolute;width:100%;z-index:2}[dir] .lv-masthead__header{margin:0 auto;padding-left:6.4vw;padding-right:6.4vw;text-align:center}[dir=ltr] .lv-masthead__header{left:0}[dir=rtl] .lv-masthead__header{right:0}@media screen and (min-width:48rem){[dir] .lv-masthead__header{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-masthead__header{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:90rem){[dir] .lv-masthead__header{padding-left:3.3333333333vw;padding-right:3.3333333333vw}}.lv-masthead__header.-bottom{bottom:2rem;top:auto}@media screen and (min-width:48rem){.lv-masthead__header.-bottom{bottom:3rem}}.lv-masthead__header.-bottom.-has-scroll-info{bottom:4rem}@media screen and (min-width:48rem){.lv-masthead__header.-bottom.-has-scroll-info{bottom:5rem}}.lv-masthead__header.-center{bottom:inherit;top:50%}[dir] .lv-masthead__header.-center{transform:translateY(-50%)}.lv-masthead__footer{align-items:center;bottom:0;display:flex;flex-direction:column;pointer-events:none;position:absolute;z-index:2}[dir] .lv-masthead__footer{margin:1rem auto 0;text-align:center}[dir=ltr] .lv-masthead__footer{left:50%;transform:translateX(-50%)}[dir=rtl] .lv-masthead__footer{right:50%;transform:translateX(50%)}.lv-masthead__line{display:block;height:1.375rem;position:relative;width:1px;z-index:3}[dir] .lv-masthead__line{background-color:rgba(0,0,0,.2);margin:.5rem auto 0}.lv-masthead__line:after{content:"";display:block;height:100%;position:absolute;top:0;width:1px}[dir] .lv-masthead__line:after{animation:line .6s ease-in-out .6s infinite alternate;background-color:currentColor;transform-origin:center top}@keyframes line{0%{transform:scaleY(.25)}to{transform:scaleY(.75) translateY(25%)}}', ""]), l.locals = {}, t.exports = l
        },
        1092: function(t, e, r) {
            var content = r(1225);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("0b73862f", content, !0, {
                sourceMap: !1
            })
        },
        1224: function(t, e, r) {
            "use strict";
            r(1092)
        },
        1225: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-magazine-articles-grid{display:flex;flex-wrap:wrap}@media screen and (min-width:48rem){[dir] .lv-magazine-articles-grid{margin-left:-.75rem;margin-right:-.75rem}}.lv-magazine-articles-grid__item{box-sizing:border-box;position:relative;width:100%}[dir] .lv-magazine-articles-grid__item{margin-bottom:1.5rem}@media screen and (min-width:48rem){.lv-magazine-articles-grid__item{flex-basis:auto;width:33.3333333333%}[dir] .lv-magazine-articles-grid__item{margin-bottom:1.5rem;padding:0 .75rem}.lv-magazine-articles-grid.-grid2 .lv-magazine-articles-grid__item{flex-basis:auto;width:50%}}[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7),[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8){margin-top:calc(6.4vw + 1rem)}@media screen and (min-width:48rem){.lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7),.lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8){flex-basis:auto;width:calc(50% - 1.5rem)}[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7),[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8){margin:calc(2rem + 3.125vw) .75rem 5rem;padding:0}[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):last-of-type,[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):nth-last-of-type(2),[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8):last-of-type,[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8):nth-last-of-type(2){margin-bottom:1.5rem}}@media screen and (min-width:64rem){[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7),[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8){margin-top:calc(2rem + 4.6875vw)}}@media screen and (min-width:90rem){[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7),[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8){margin-top:6.21875rem}}.lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{content:"";height:87.2vw;position:absolute;top:-6.4vw;width:100vw;z-index:-1}[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{background:#f8f8f8}[dir=ltr] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{left:-6.4vw}[dir=rtl] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{right:-6.4vw}@media screen and (min-width:48rem){.lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{height:calc(46.875vw - .75rem);top:-3.125vw}[dir=ltr] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{left:-3.125vw}[dir=rtl] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{right:-3.125vw}}@media screen and (min-width:64rem){.lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{height:calc(45.3125vw - .75rem);top:-4.6875vw}[dir=ltr] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{left:-4.6875vw}[dir=rtl] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{right:-4.6875vw}}@media screen and (min-width:90rem){.lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{height:calc(-8.33333vw + 44.25rem);top:-4.21875rem}[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{margin:0}[dir=ltr] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{left:calc(-58.33333vw - -45rem)}[dir=rtl] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+7):before{right:calc(-58.33333vw - -45rem)}}[dir] .lv-magazine-articles-grid.-grid8 .lv-magazine-articles-grid__item:nth-child(8n+8){margin-bottom:2.5rem}[dir] .lv-magazine-articles-grid+.lv-paginated-list__button-wrap{margin-bottom:5rem}@media screen and (min-width:48rem){[dir] .lv-magazine-articles-grid+.lv-paginated-list__button-wrap{margin-top:1rem}}.lv-magazine-articles-grid+.lv-paginated-list__button-wrap .lv-button{width:100%}@media screen and (min-width:48rem){.lv-magazine-articles-grid+.lv-paginated-list__button-wrap .lv-button{min-width:15rem;width:auto}}', ""]), l.locals = {}, t.exports = l
        },
        1239: function(t, e, r) {
            var content = r(1427);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("3ca542a8", content, !0, {
                sourceMap: !1
            })
        },
        1308: function(t, e, r) {
            "use strict";
            var l = r(349),
                n = r(87),
                o = r(337);
            const d = {
                    xs: "half",
                    l: "third"
                },
                c = {
                    xs: "full",
                    l: "half"
                };
            var m = {
                    components: {
                        MagazineArticle: l.a,
                        ResponsivePicture: n.default,
                        PaginatedList: o.default
                    },
                    inheritAttrs: !1,
                    props: {
                        articles: {
                            type: Array,
                            required: !0
                        },
                        gridSize: {
                            type: Number,
                            required: !0
                        },
                        isTagDisplayed: {
                            type: Boolean,
                            default: !0
                        },
                        styleVariant: {
                            type: String,
                            default: ""
                        },
                        nameTag: {
                            type: String,
                            default: "h2"
                        },
                        isPaginated: {
                            type: Boolean,
                            default: !1
                        },
                        loadMoreLabel: {
                            type: String,
                            default: ""
                        }
                    },
                    computed: {
                        picturesWidthsByIndex() {
                            switch (this.gridSize) {
                                case 8:
                                    return [d, d, d, d, d, d, c, c];
                                case 3:
                                    return [d, d, d];
                                case 2:
                                    return [c, c];
                                default:
                                    return []
                            }
                        },
                        gridClass() {
                            return "-grid".concat(this.gridSize)
                        },
                        articleAttributes() {
                            return (this.articles || []).map(((article, t) => ({
                                article: article,
                                "is-tag-displayed": this.isTagDisplayed,
                                "name-tag": this.nameTag,
                                "style-variant": 8 === this.gridSize && t % 8 < 6 ? "xs-horizontal" : null
                            })))
                        }
                    },
                    methods: {
                        onArticleClicked(article, t) {
                            this.$emit("article-clicked", {
                                article: article,
                                index: t
                            })
                        }
                    }
                },
                h = (r(1224), r(0)),
                component = Object(h.a)(m, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.isPaginated ? e("PaginatedList", t._g(t._b({
                        attrs: {
                            items: t.articles,
                            "has-old-back-to-top": !0,
                            "list-class": "".concat(t.gridClass, " lv-magazine-articles-grid"),
                            "item-class": "lv-magazine-articles-grid__item",
                            "button-class": "lv-button -secondary"
                        },
                        scopedSlots: t._u([{
                            key: "item",
                            fn: function(r) {
                                let {
                                    item: l,
                                    index: n
                                } = r;
                                return [e("MagazineArticle", t._b({
                                    nativeOn: {
                                        click: function(e) {
                                            return t.onArticleClicked(l, n)
                                        }
                                    }
                                }, "MagazineArticle", t.articleAttributes[n], !1), [e("ResponsivePicture", {
                                    staticClass: "placeholder-square",
                                    attrs: {
                                        filename: (l.filenames || {}).DI2,
                                        lazy: !0,
                                        widths: t.picturesWidthsByIndex[n % t.gridSize],
                                        alt: ""
                                    }
                                })], 1)]
                            }
                        }, {
                            key: "button",
                            fn: function() {
                                return [t._v("\n    " + t._s(t.loadMoreLabel) + "\n  ")]
                            },
                            proxy: !0
                        }], null, !1, 882975703)
                    }, "PaginatedList", t.$attrs, !1), t.$listeners)) : e("ul", {
                        staticClass: "lv-magazine-articles-grid lv-list",
                        class: t.gridClass
                    }, t._l(t.articles, (function(r, l) {
                        return e("li", {
                            key: r.id,
                            staticClass: "lv-magazine-articles-grid__item"
                        }, [e("MagazineArticle", t._b({
                            nativeOn: {
                                click: function(e) {
                                    return t.onArticleClicked(r, l)
                                }
                            }
                        }, "MagazineArticle", t.articleAttributes[l], !1), [e("ResponsivePicture", {
                            staticClass: "placeholder-square",
                            attrs: {
                                filename: (r.filenames || {}).DI2,
                                lazy: !0,
                                widths: t.picturesWidthsByIndex[l % t.gridSize],
                                alt: ""
                            }
                        })], 1)], 1)
                    })), 0)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        1402: function(t, e, r) {
            "use strict";
            var l = r(26);
            e.a = {
                methods: {
                    async resetSharingDatas() {
                        await this.$store.dispatch(l.PAGE_CONTEXT_RESET_SHARING_METAS_ACTION)
                    }
                },
                destroyed() {
                    this.resetSharingDatas()
                }
            }
        },
        1426: function(t, e, r) {
            "use strict";
            r(1239)
        },
        1427: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-daily-article-wrapper{display:flex;flex-wrap:wrap;justify-content:center}.lv-daily-article-wrapper__section{position:relative;width:100%}[dir] .lv-daily-article-wrapper__section{padding-bottom:2.5rem}@media screen and (min-width:48rem){[dir] .lv-daily-article-wrapper__section{padding-bottom:5rem}}[dir] .lv-daily-article-wrapper__section.-compact:last-child{padding-bottom:0}[dir] .lv-daily-article-wrapper__section.-compact+.lv-daily-article-wrapper__section.-compact{margin-top:-2.5rem}@media screen and (min-width:48rem){[dir] .lv-daily-article-wrapper__section.-compact+.lv-daily-article-wrapper__section.-compact{margin-top:-5rem}}.lv-daily-article-wrapper__section.-type-cta{width:auto}[dir] .lv-daily-article-wrapper__section.-type-cta{margin-bottom:2rem;padding:0 1rem}[dir] .lv-daily-article-wrapper__section.-type-cta+.lv-daily-article-wrapper__section:not(.-type-cta){margin-bottom:.5rem}@media screen and (min-width:48rem){[dir] .lv-daily-article-wrapper__section.-type-cta+.lv-daily-article-wrapper__section:not(.-type-cta){margin-bottom:3rem}}.lv-daily-article-wrapper__link{width:100%}[dir] .lv-daily-article-wrapper__link{text-align:center}.lv-daily-article-wrapper__link.lv-smart-link{width:100%}@media screen and (min-width:48rem){.lv-daily-article-wrapper__link.lv-smart-link{width:auto}}.lv-daily-article-wrapper .lv-editorial-slider.-fullwidth .lv-editorial-slider__details{box-sizing:border-box}[dir] .lv-daily-article-wrapper .lv-editorial-slider.-fullwidth .lv-editorial-slider__details{padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-daily-article-wrapper .lv-editorial-slider.-fullwidth .lv-editorial-slider__details{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-daily-article-wrapper .lv-editorial-slider.-fullwidth .lv-editorial-slider__details{padding-left:4.6875vw;padding-right:4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-daily-article-wrapper .lv-editorial-slider.-fullwidth .lv-editorial-slider__details{padding-left:8.3333333333vw;padding-right:8.3333333333vw}}", ""]), l.locals = {}, t.exports = l
        },
        1559: function(t, e, r) {
            "use strict";
            r(3), r(82);
            var l = r(87),
                n = r(975),
                o = r(258),
                d = r(1161),
                c = r(8),
                m = {
                    components: {
                        ResponsivePicture: l.default,
                        VideoPlayer: n.default,
                        LazyHydrate: o.a,
                        EditorialQuote: () => r.e(111).then(r.bind(null, 1169)),
                        ShopTheSelection: () => r.e(113).then(r.bind(null, 1170)),
                        EditorialGridGallery: () => Promise.all([r.e(0), r.e(92)]).then(r.bind(null, 1348)),
                        EditorialSlider: () => Promise.all([r.e(0), r.e(97)]).then(r.bind(null, 1071)),
                        EditorialTextBlock: () => r.e(112).then(r.bind(null, 938)),
                        EditorialDiptyque: () => Promise.all([r.e(0), r.e(25)]).then(r.bind(null, 1303)),
                        EditorialWatchVideo: () => r.e(427).then(r.bind(null, 1311)),
                        EditorialMoodboard: () => Promise.all([r.e(0), r.e(94)]).then(r.bind(null, 1353)),
                        MastheadKicker: () => Promise.all([r.e(21), r.e(39), r.e(98)]).then(r.bind(null, 1349))
                    },
                    props: {
                        data: {
                            type: Object,
                            default: () => ({})
                        }
                    },
                    computed: {
                        sections() {
                            return (this.data.sections || []).map((section => ({ ...section,
                                isFullwidth: d.c.includes(section.type),
                                isCompact: d.a.includes(section.type)
                            })))
                        }
                    },
                    created() {
                        this.DAILY_MODULES = d.b
                    },
                    methods: {
                        getImageTracking(section) {
                            return this.$lvTrackingGenerateData({
                                actionId: "image_".concat(section.filename),
                                actionGa: "image_click",
                                labelGa: section.filename,
                                actionType: "image_click"
                            })
                        },
                        sendArticleSectionTextTrackingData(t) {
                            "A" === t.target.tagName && this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionId: "text_".concat(t.target.innerText),
                                actionGa: "text_click",
                                labelGa: t.target.innerText,
                                actionType: "text_click"
                            }))
                        },
                        sendSliderNavigationTrackingData(t, e) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionId: "slider_interaction",
                                actionGa: "slider_interaction_".concat(t),
                                actionType: "slider_".concat(t),
                                labelGa: e
                            }))
                        },
                        sendTrackingGrid(t) {
                            const data = {};
                            t.position && (data.labelGa = "image_".concat(t.position)), t.identifier && (data.labelGa = t.identifier), this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionPosition: "magazine_grid",
                                actionGa: t.name,
                                actionId: t.name,
                                ...data
                            }))
                        },
                        trackLinkClicked() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                            const e = Object(c.k)(t.url) || (t.url || "").startsWith("/") ? "internal" : "external";
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionGa: "CTA_click",
                                contentId: t.url,
                                actionPosition: "cta_editorial_text_block_top",
                                labelGa: "".concat(e, "_redirection"),
                                actionId: "cta_click_".concat(e, "_redirection"),
                                ...t.trackingData
                            }))
                        },
                        trackPlayPauseClick(t, e) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                l = arguments.length > 3 ? arguments[3] : void 0;
                            const n = "video_".concat(t ? "play" : "pause");
                            this.trackVideoAction(n, e, r, l)
                        },
                        trackSoundClick(t, e) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                l = arguments.length > 3 ? arguments[3] : void 0;
                            const n = "video_sound_".concat(t ? "on" : "off");
                            this.trackVideoAction(n, e, r, l)
                        },
                        trackVideoAction(t, e) {
                            let r = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {},
                                l = arguments.length > 3 ? arguments[3] : void 0;
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                categoryGa: "video",
                                labelGa: r.title,
                                actionId: t,
                                actionGa: t,
                                contentId: e,
                                actionPosition: "push_".concat(l + 1)
                            }))
                        }
                    }
                },
                h = m,
                v = (r(1426), r(0)),
                component = Object(v.a)(h, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-daily-article-wrapper"
                    }, t._l(t.sections, (function(section, r) {
                        return e("div", {
                            key: r,
                            staticClass: "lv-daily-article-wrapper__section",
                            class: ["-type-".concat(section.type), {
                                "-compact": section.isCompact,
                                "lv-gutters": !section.isFullwidth
                            }]
                        }, [section.type === t.DAILY_MODULES.TEXT ? e("EditorialTextBlock", t._b({
                            attrs: {
                                data: section,
                                "markup-title": "h2",
                                "center-text": !!section.ctasOnly,
                                wide: ""
                            },
                            on: {
                                "text-clicked": t.sendArticleSectionTextTrackingData,
                                "link-clicked": t.trackLinkClicked
                            }
                        }, "EditorialTextBlock", section.props, !1)) : section.type === t.DAILY_MODULES.QUOTE ? e("EditorialQuote", {
                            attrs: {
                                data: section
                            }
                        }) : section.type === t.DAILY_MODULES.VIDEO ? e("VideoPlayer", {
                            staticClass: "lv-daily-article-wrapper__video",
                            attrs: {
                                src: section.url,
                                options: {
                                    autoplay: !0,
                                    loop: !0
                                }
                            }
                        }) : section.type === t.DAILY_MODULES.GRID ? e("EditorialGridGallery", {
                            attrs: {
                                data: {
                                    items: section.items
                                }
                            },
                            on: {
                                "product-clicked": function(e) {
                                    return t.sendTrackingGrid({ ...e,
                                        name: "magazine_grid_product_selection"
                                    })
                                },
                                "modal-close": function(e) {
                                    return t.sendTrackingGrid({
                                        name: "magazine_grid_close"
                                    })
                                },
                                "modal-open": function(e) {
                                    return t.sendTrackingGrid({ ...e,
                                        name: "magazine_grid_open"
                                    })
                                },
                                "link-clicked": function(e) {
                                    return t.sendTrackingGrid({
                                        name: "magazine_grid_collection_selection"
                                    })
                                },
                                "play-pause-clicked": function(e) {
                                    return t.trackPlayPauseClick(...arguments, t.data.hero, r)
                                },
                                "sound-clicked": function(e) {
                                    return t.trackSoundClick(...arguments, t.data.hero, r)
                                }
                            }
                        }) : section.type === t.DAILY_MODULES.SLIDER ? e("LazyHydrate", {
                            attrs: {
                                "when-idle": ""
                            }
                        }, [e("EditorialSlider", {
                            attrs: {
                                id: section.sliderId,
                                data: {
                                    items: section.slides
                                },
                                pagination: "",
                                loop: "",
                                fullwidth: "full" === section.mode
                            },
                            on: {
                                "slider-navigation": function(e) {
                                    return t.sendSliderNavigationTrackingData(e, section.sliderId)
                                }
                            }
                        })], 1) : section.type === t.DAILY_MODULES.IMAGE ? e("ResponsivePicture", {
                            directives: [{
                                name: "tracking",
                                rawName: "v-tracking",
                                value: t.getImageTracking(section),
                                expression: "getImageTracking(section)"
                            }],
                            staticClass: "lv-daily-article-wrapper__visual",
                            class: "placeholder-".concat(section.format.toLowerCase()),
                            attrs: {
                                filename: section.filename,
                                lazy: !0,
                                alt: section.description
                            }
                        }) : section.type === t.DAILY_MODULES.SHOP ? e("ShopTheSelection", {
                            attrs: {
                                data: section
                            }
                        }) : section.type === t.DAILY_MODULES.DIPTYQUE ? e("EditorialDiptyque", t._b({
                            attrs: {
                                data: section
                            },
                            on: {
                                "link-clicked": t.trackLinkClicked,
                                "play-pause-clicked": function(e) {
                                    return t.trackPlayPauseClick(...arguments, t.data.hero, r)
                                },
                                "sound-clicked": function(e) {
                                    return t.trackSoundClick(...arguments, t.data.hero, r)
                                }
                            }
                        }, "EditorialDiptyque", section.props, !1)) : section.type === t.DAILY_MODULES.KICKER ? e("MastheadKicker", {
                            attrs: {
                                data: section,
                                "has-scroll-info": !1
                            },
                            on: {
                                "link-clicked": t.trackLinkClicked,
                                "play-pause-clicked": function(e) {
                                    return t.trackPlayPauseClick(...arguments, t.data.hero, r)
                                },
                                "sound-clicked": function(e) {
                                    return t.trackSoundClick(...arguments, t.data.hero, r)
                                }
                            }
                        }) : section.type === t.DAILY_MODULES.MOODBOARD ? e("EditorialMoodboard", {
                            attrs: {
                                data: section
                            },
                            on: {
                                "link-clicked": t.trackLinkClicked,
                                "play-pause-clicked": function(e) {
                                    return t.trackPlayPauseClick(...arguments, t.data.hero, r)
                                },
                                "sound-clicked": function(e) {
                                    return t.trackSoundClick(...arguments, t.data.hero, r)
                                }
                            }
                        }) : section.type === t.DAILY_MODULES.WATCH ? e("EditorialWatchVideo", {
                            attrs: {
                                data: section
                            },
                            on: {
                                "link-clicked": t.trackLinkClicked,
                                "play-pause-clicked": function(e) {
                                    return t.trackPlayPauseClick(...arguments, t.data.hero, r)
                                },
                                "sound-clicked": function(e) {
                                    return t.trackSoundClick(...arguments, t.data.hero, r)
                                }
                            }
                        }) : t._e()], 1)
                    })), 0)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        1725: function(t, e, r) {
            var content = r(2358);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("b79a27f6", content, !0, {
                sourceMap: !1
            })
        },
        1726: function(t, e, r) {
            t.exports = function() {
                "use strict";
                var t = Object.prototype.toString,
                    e = Array.isArray || function(object) {
                        return "[object Array]" === t.call(object)
                    };

                function r(object) {
                    return "function" == typeof object
                }

                function l(t) {
                    return e(t) ? "array" : typeof t
                }

                function n(t) {
                    return t.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g, "\\$&")
                }

                function o(t, e) {
                    return null != t && "object" == typeof t && e in t
                }

                function d(t, e) {
                    return null != t && "object" != typeof t && t.hasOwnProperty && t.hasOwnProperty(e)
                }
                var c = RegExp.prototype.test;

                function m(t, e) {
                    return c.call(t, e)
                }
                var h = /\S/;

                function v(t) {
                    return !m(h, t)
                }
                var _ = {
                    "&": "&amp;",
                    "<": "&lt;",
                    ">": "&gt;",
                    '"': "&quot;",
                    "'": "&#39;",
                    "/": "&#x2F;",
                    "`": "&#x60;",
                    "=": "&#x3D;"
                };

                function f(t) {
                    return String(t).replace(/[&<>"'`=\/]/g, (function(s) {
                        return _[s]
                    }))
                }
                var k = /\s*/,
                    y = /\s+/,
                    x = /\s*=/,
                    w = /\s*\}/,
                    z = /#|\^|\/|>|\{|&|=|!/;

                function C(template, t) {
                    if (!template) return [];
                    var r, l, o, d = !1,
                        c = [],
                        m = [],
                        h = [],
                        _ = !1,
                        f = !1,
                        C = "",
                        D = 0;

                    function T() {
                        if (_ && !f)
                            for (; h.length;) delete m[h.pop()];
                        else h = [];
                        _ = !1, f = !1
                    }

                    function I(t) {
                        if ("string" == typeof t && (t = t.split(y, 2)), !e(t) || 2 !== t.length) throw new Error("Invalid tags: " + t);
                        r = new RegExp(n(t[0]) + "\\s*"), l = new RegExp("\\s*" + n(t[1])), o = new RegExp("\\s*" + n("}" + t[1]))
                    }
                    I(t || E.tags);
                    for (var O, A, M, j, $, R, V = new L(template); !V.eos();) {
                        if (O = V.pos, M = V.scanUntil(r))
                            for (var i = 0, B = M.length; i < B; ++i) v(j = M.charAt(i)) ? (h.push(m.length), C += j) : (f = !0, d = !0, C += " "), m.push(["text", j, O, O + 1]), O += 1, "\n" === j && (T(), C = "", D = 0, d = !1);
                        if (!V.scan(r)) break;
                        if (_ = !0, A = V.scan(z) || "name", V.scan(k), "=" === A ? (M = V.scanUntil(x), V.scan(x), V.scanUntil(l)) : "{" === A ? (M = V.scanUntil(o), V.scan(w), V.scanUntil(l), A = "&") : M = V.scanUntil(l), !V.scan(l)) throw new Error("Unclosed tag at " + V.pos);
                        if ($ = ">" == A ? [A, M, O, V.pos, C, D, d] : [A, M, O, V.pos], D++, m.push($), "#" === A || "^" === A) c.push($);
                        else if ("/" === A) {
                            if (!(R = c.pop())) throw new Error('Unopened section "' + M + '" at ' + O);
                            if (R[1] !== M) throw new Error('Unclosed section "' + R[1] + '" at ' + O)
                        } else "name" === A || "{" === A || "&" === A ? f = !0 : "=" === A && I(M)
                    }
                    if (T(), R = c.pop()) throw new Error('Unclosed section "' + R[1] + '" at ' + V.pos);
                    return P(S(m))
                }

                function S(t) {
                    for (var e, r, l = [], i = 0, n = t.length; i < n; ++i)(e = t[i]) && ("text" === e[0] && r && "text" === r[0] ? (r[1] += e[1], r[3] = e[3]) : (l.push(e), r = e));
                    return l
                }

                function P(t) {
                    for (var e, r = [], l = r, n = [], i = 0, o = t.length; i < o; ++i) switch ((e = t[i])[0]) {
                        case "#":
                        case "^":
                            l.push(e), n.push(e), l = e[4] = [];
                            break;
                        case "/":
                            n.pop()[5] = e[2], l = n.length > 0 ? n[n.length - 1][4] : r;
                            break;
                        default:
                            l.push(e)
                    }
                    return r
                }

                function L(t) {
                    this.string = t, this.tail = t, this.pos = 0
                }

                function D(view, t) {
                    this.view = view, this.cache = {
                        ".": this.view
                    }, this.parent = t
                }

                function T() {
                    this.templateCache = {
                        _cache: {},
                        set: function(t, e) {
                            this._cache[t] = e
                        },
                        get: function(t) {
                            return this._cache[t]
                        },
                        clear: function() {
                            this._cache = {}
                        }
                    }
                }
                L.prototype.eos = function() {
                    return "" === this.tail
                }, L.prototype.scan = function(t) {
                    var e = this.tail.match(t);
                    if (!e || 0 !== e.index) return "";
                    var r = e[0];
                    return this.tail = this.tail.substring(r.length), this.pos += r.length, r
                }, L.prototype.scanUntil = function(t) {
                    var e, r = this.tail.search(t);
                    switch (r) {
                        case -1:
                            e = this.tail, this.tail = "";
                            break;
                        case 0:
                            e = "";
                            break;
                        default:
                            e = this.tail.substring(0, r), this.tail = this.tail.substring(r)
                    }
                    return this.pos += e.length, e
                }, D.prototype.push = function(view) {
                    return new D(view, this)
                }, D.prototype.lookup = function(t) {
                    var e, l = this.cache;
                    if (l.hasOwnProperty(t)) e = l[t];
                    else {
                        for (var n, c, m, h = this, v = !1; h;) {
                            if (t.indexOf(".") > 0)
                                for (n = h.view, c = t.split("."), m = 0; null != n && m < c.length;) m === c.length - 1 && (v = o(n, c[m]) || d(n, c[m])), n = n[c[m++]];
                            else n = h.view[t], v = o(h.view, t);
                            if (v) {
                                e = n;
                                break
                            }
                            h = h.parent
                        }
                        l[t] = e
                    }
                    return r(e) && (e = e.call(this.view)), e
                }, T.prototype.clearCache = function() {
                    void 0 !== this.templateCache && this.templateCache.clear()
                }, T.prototype.parse = function(template, t) {
                    var e = this.templateCache,
                        r = template + ":" + (t || E.tags).join(":"),
                        l = void 0 !== e,
                        n = l ? e.get(r) : void 0;
                    return null == n && (n = C(template, t), l && e.set(r, n)), n
                }, T.prototype.render = function(template, view, t, e) {
                    var r = this.getConfigTags(e),
                        l = this.parse(template, r),
                        n = view instanceof D ? view : new D(view, void 0);
                    return this.renderTokens(l, n, t, template, e)
                }, T.prototype.renderTokens = function(t, e, r, l, n) {
                    for (var o, symbol, d, c = "", i = 0, m = t.length; i < m; ++i) d = void 0, "#" === (symbol = (o = t[i])[0]) ? d = this.renderSection(o, e, r, l, n) : "^" === symbol ? d = this.renderInverted(o, e, r, l, n) : ">" === symbol ? d = this.renderPartial(o, e, r, n) : "&" === symbol ? d = this.unescapedValue(o, e) : "name" === symbol ? d = this.escapedValue(o, e, n) : "text" === symbol && (d = this.rawValue(o)), void 0 !== d && (c += d);
                    return c
                }, T.prototype.renderSection = function(t, l, n, o, d) {
                    var c = this,
                        m = "",
                        h = l.lookup(t[1]);

                    function v(template) {
                        return c.render(template, l, n, d)
                    }
                    if (h) {
                        if (e(h))
                            for (var _ = 0, f = h.length; _ < f; ++_) m += this.renderTokens(t[4], l.push(h[_]), n, o, d);
                        else if ("object" == typeof h || "string" == typeof h || "number" == typeof h) m += this.renderTokens(t[4], l.push(h), n, o, d);
                        else if (r(h)) {
                            if ("string" != typeof o) throw new Error("Cannot use higher-order sections without the original template");
                            null != (h = h.call(l.view, o.slice(t[3], t[5]), v)) && (m += h)
                        } else m += this.renderTokens(t[4], l, n, o, d);
                        return m
                    }
                }, T.prototype.renderInverted = function(t, r, l, n, o) {
                    var d = r.lookup(t[1]);
                    if (!d || e(d) && 0 === d.length) return this.renderTokens(t[4], r, l, n, o)
                }, T.prototype.indentPartial = function(t, e, r) {
                    for (var l = e.replace(/[^ \t]/g, ""), n = t.split("\n"), i = 0; i < n.length; i++) n[i].length && (i > 0 || !r) && (n[i] = l + n[i]);
                    return n.join("\n")
                }, T.prototype.renderPartial = function(t, e, l, n) {
                    if (l) {
                        var o = this.getConfigTags(n),
                            d = r(l) ? l(t[1]) : l[t[1]];
                        if (null != d) {
                            var c = t[6],
                                m = t[5],
                                h = t[4],
                                v = d;
                            0 == m && h && (v = this.indentPartial(d, h, c));
                            var _ = this.parse(v, o);
                            return this.renderTokens(_, e, l, v, n)
                        }
                    }
                }, T.prototype.unescapedValue = function(t, e) {
                    var r = e.lookup(t[1]);
                    if (null != r) return r
                }, T.prototype.escapedValue = function(t, e, r) {
                    var l = this.getConfigEscape(r) || E.escape,
                        n = e.lookup(t[1]);
                    if (null != n) return "number" == typeof n && l === E.escape ? String(n) : l(n)
                }, T.prototype.rawValue = function(t) {
                    return t[1]
                }, T.prototype.getConfigTags = function(t) {
                    return e(t) ? t : t && "object" == typeof t ? t.tags : void 0
                }, T.prototype.getConfigEscape = function(t) {
                    return t && "object" == typeof t && !e(t) ? t.escape : void 0
                };
                var E = {
                        name: "mustache.js",
                        version: "4.2.0",
                        tags: ["{{", "}}"],
                        clearCache: void 0,
                        escape: void 0,
                        parse: void 0,
                        render: void 0,
                        Scanner: void 0,
                        Context: void 0,
                        Writer: void 0,
                        set templateCache(t) {
                            I.templateCache = t
                        },
                        get templateCache() {
                            return I.templateCache
                        }
                    },
                    I = new T;
                return E.clearCache = function() {
                    return I.clearCache()
                }, E.parse = function(template, t) {
                    return I.parse(template, t)
                }, E.render = function(template, view, t, e) {
                    if ("string" != typeof template) throw new TypeError('Invalid template! Template should be a "string" but "' + l(template) + '" was given as the first argument for mustache#render(template, view, partials)');
                    return I.render(template, view, t, e)
                }, E.escape = f, E.Scanner = L, E.Context = D, E.Writer = T, E
            }()
        },
        1727: function(t, e, r) {
            var content = r(2360);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("cef8ab0c", content, !0, {
                sourceMap: !1
            })
        },
        2357: function(t, e, r) {
            "use strict";
            r(1725)
        },
        2358: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-magazine-navigation-banner__inner-wrapper{display:flex;min-height:3.5rem;width:100%;z-index:3}[dir] .lv-magazine-navigation-banner__inner-wrapper{background-color:#fff;border-bottom:1px solid #e1e1e1}@media screen and (min-width:48rem){.lv-magazine-navigation-banner__inner-wrapper{min-height:5rem}}.lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{position:relative;width:3.25rem}[dir] .lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{border-radius:0;padding:0}[dir=ltr] .lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{margin-left:-6.4vw}[dir=rtl] .lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{margin-right:-6.4vw}@media screen and (min-width:48rem){.lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{height:5rem;width:5rem}[dir=ltr] .lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{margin-left:-2rem}[dir=rtl] .lv-magazine-navigation-banner .lv-magazine-navigation-banner__back-btn{margin-right:-2rem}}.lv-magazine-navigation-banner__content{display:flex;flex-direction:column;flex-grow:1;justify-content:center;overflow:hidden}[dir] .lv-magazine-navigation-banner__content{padding:.5rem 0}.lv-magazine-navigation-banner__category,.lv-magazine-navigation-banner__title{color:#000}[dir] .lv-magazine-navigation-banner__category,[dir] .lv-magazine-navigation-banner__title{margin:0}.lv-magazine-navigation-banner__category{font-weight:500}.lv-magazine-navigation-banner__title{overflow:hidden;text-overflow:ellipsis;white-space:nowrap}.lv-magazine-navigation-banner__progress-bar{-webkit-appearance:none;-moz-appearance:none;appearance:none;bottom:-.0625rem;color:#000;content:"";height:.125rem;position:absolute;width:100%}[dir] .lv-magazine-navigation-banner__progress-bar{background-color:transparent;border:none}[dir=ltr] .lv-magazine-navigation-banner__progress-bar{left:0}[dir=rtl] .lv-magazine-navigation-banner__progress-bar{right:0}[dir] .lv-magazine-navigation-banner__progress-bar::-webkit-progress-bar{background-color:transparent}[dir] .lv-magazine-navigation-banner__progress-bar::-webkit-progress-value{background-color:#000}[dir] .lv-magazine-navigation-banner__progress-bar::-moz-progress-bar{background-color:#000}', ""]), l.locals = {}, t.exports = l
        },
        2359: function(t, e, r) {
            "use strict";
            r(1727)
        },
        2360: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-magazine-article-container .lv-editorial-media.-hero{--buffer:calc(6vh + 4rem)}@media screen and (min-width:48rem){.lv-magazine-article-container .lv-editorial-media.-hero{--buffer:5rem}}[dir] .lv-magazine-article-container__headline{margin-top:2.5rem}@media screen and (min-width:68.75rem){[dir] .lv-magazine-article-container__headline{margin-top:5rem}}[dir] .lv-magazine-article-container__headline>*{margin:0 auto}@media screen and (min-width:48rem){.lv-magazine-article-container__headline>*{max-width:66.66vw}[dir] .lv-magazine-article-container__headline>*{text-align:center}}@media screen and (min-width:48rem)and (min-width:68.75rem){.lv-magazine-article-container__headline>*{max-width:60%}}[dir] .lv-magazine-article-container__content{margin-top:2.5rem}@media screen and (min-width:48rem){[dir] .lv-magazine-article-container__content{margin-top:5rem}}[dir] .lv-magazine-article-container__content-header{margin-top:2rem}@media screen and (min-width:64rem){.lv-magazine-article-container__content-header{max-width:90rem}[dir] .lv-magazine-article-container__content-header{margin:3rem auto 0}}.lv-magazine-article-container__content-inner{width:100%}[dir] .lv-magazine-article-container__content-inner{margin-bottom:2rem}@media screen and (min-width:48rem){.lv-magazine-article-container__content-inner{max-width:66.66vw}[dir] .lv-magazine-article-container__content-inner{margin:0 auto;text-align:center}}@media screen and (min-width:68.75rem){.lv-magazine-article-container__content-inner{max-width:60%}}.lv-magazine-article-container__content-title{color:inherit;font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:1.75rem}[dir] .lv-magazine-article-container__content-title{margin-bottom:2rem;margin-top:0}[dir=ltr] .lv-magazine-article-container__content-title{text-align:left}[dir=rtl] .lv-magazine-article-container__content-title{text-align:right}.lv-magazine-article-container__content-title:lang(ko),.lv-magazine-article-container__content-title:lang(zh){font-size:1.35rem}.lv-magazine-article-container__content-title:lang(ja){font-size:1.2rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-magazine-article-container__content-title:lang(ko),.lv-magazine-article-container__content-title:lang(th),.lv-magazine-article-container__content-title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-magazine-article-container__content-title:lang(th){word-break:break-word}.lv-magazine-article-container__content-title:lang(vi){line-height:1.3}@media screen and (min-width:64rem){[dir] .lv-magazine-article-container__content-title{text-align:center}}.lv-magazine-article-container__content-hero{box-sizing:border-box;position:relative}[dir] .lv-magazine-article-container__content-hero{margin-left:-6.4vw;margin-right:-6.4vw}@media screen and (min-width:48rem){[dir] .lv-magazine-article-container__content-hero{margin-left:-3.125vw;margin-right:-3.125vw}}@media screen and (min-width:64rem){[dir] .lv-magazine-article-container__content-hero{margin-left:-4.6875vw;margin-right:-4.6875vw}}@media screen and (min-width:90rem){[dir] .lv-magazine-article-container__content-hero{margin-left:-8.3333333333vw;margin-right:-8.3333333333vw}}@media screen and (min-width:64rem){[dir] .lv-magazine-article-container__content-hero{margin-left:0;margin-right:0}}.lv-magazine-article-container__content-hero .lv-smart-picture{display:block;overflow:hidden;position:relative}.lv-magazine-article-container__content-hero .lv-smart-picture:before{content:"";display:block;width:100%}[dir] .lv-magazine-article-container__content-hero .lv-smart-picture:before{padding-top:100%}.lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized){position:absolute;top:0;width:100%}[dir] .lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized){left:0;right:0}.lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized).-v-align{top:50%}[dir] .lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized).-v-align{transform:translateY(-50%)}@media screen and (min-width:48rem){.lv-magazine-article-container__content-hero .lv-smart-picture{display:block;overflow:hidden;position:relative}.lv-magazine-article-container__content-hero .lv-smart-picture:before{content:"";display:block;width:100%}[dir] .lv-magazine-article-container__content-hero .lv-smart-picture:before{padding-top:56.27462%}.lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized){position:absolute;top:0;width:100%}[dir] .lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized){left:0;right:0}.lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized).-v-align{top:50%}[dir] .lv-magazine-article-container__content-hero .lv-smart-picture>:not(button):not(.lv-loader):not(.lv-nosized).-v-align{transform:translateY(-50%)}}.lv-magazine-article-container__content-hero .-video .fcplayer,.lv-magazine-article-container__content-hero .-video .freecaster-player{max-width:calc(177.77778vh - 9.77778rem);width:100%}[dir] .lv-magazine-article-container__content-hero .-video .fcplayer,[dir] .lv-magazine-article-container__content-hero .-video .freecaster-player{margin:0 auto}[dir] .lv-magazine-article-container__content-intro{margin:0}.lv-magazine-article-container__latest-section{max-width:90rem}[dir] .lv-magazine-article-container__latest-section{margin:5rem auto 3.5rem}.lv-magazine-article-container__more{position:relative}[dir] .lv-magazine-article-container__more{margin:0 0 1.5rem}.lv-magazine-article-container__more:lang(ko):after{height:.24375rem;width:.24375rem}@media screen and (min-width:48rem){.lv-magazine-article-container__more:lang(ko):after{height:.325rem;width:.325rem}}.lv-magazine-article-container__more:lang(zh):after{height:.24375rem;width:.24375rem}@media screen and (min-width:48rem){.lv-magazine-article-container__more:lang(zh):after{height:.325rem;width:.325rem}}.lv-magazine-article-container__more:lang(ja):after{height:.1875rem;width:.1875rem}@media screen and (min-width:48rem){.lv-magazine-article-container__more:lang(ja):after{height:.25rem;width:.25rem}}.lv-magazine-article-container__more:lang(ru):after{height:.31875rem;width:.31875rem}@media screen and (min-width:48rem){.lv-magazine-article-container__more:lang(ru):after{height:.425rem;width:.425rem}[dir] .lv-magazine-article-container__more{text-align:center}}@media screen and (min-width:64rem){[dir] .lv-magazine-article-container__more{margin:0 0 2.5rem}}.lv-magazine-article-container__more:lang(ja):after,.lv-magazine-article-container__more:lang(ko):after,.lv-magazine-article-container__more:lang(zh-Hans-CN):after{display:none}.lv-magazine-article-container__more:lang(ru):after{bottom:.5rem}@media screen and (min-width:48rem){.lv-magazine-article-container__more:lang(ru):after{bottom:.75rem}}', ""]), l.locals = {}, t.exports = l
        },
        3631: function(t, e, r) {
            "use strict";
            r.r(e);
            r(3), r(97), r(83);
            var l = r(26),
                n = r(14),
                o = r(29),
                d = {
                    tracking: {
                        default: {
                            actionPosition: "article_banner"
                        }
                    },
                    components: {
                        BackButton: r(946).a
                    },
                    props: {
                        categoryLabel: {
                            type: String,
                            required: !0
                        },
                        categoryChunk: {
                            type: String,
                            required: !0
                        },
                        tag: {
                            type: String,
                            default: "",
                            required: !1
                        },
                        title: {
                            type: String,
                            required: !0
                        }
                    },
                    data: () => ({
                        scrollPosition: 0,
                        scrollPositionMax: 100
                    }),
                    computed: {
                        categoryRoute() {
                            return {
                                name: "magazine-main-virtual-category-tag",
                                params: {
                                    category: this.categoryChunk
                                }
                            }
                        },
                        readingProgress() {
                            return Math.max(100 * this.scrollPosition / this.scrollPositionMax, 0)
                        },
                        backButtonTracking() {
                            return this.$lvTrackingGenerateData({
                                actionId: "article_back",
                                actionGa: "navigation_back"
                            })
                        }
                    },
                    mounted() {
                        this.onScrollListener = Object(o.a)((() => this.updateScrollPosition())), this.onResizeListener = Object(o.a)((() => this.updateScrollPositionMax())), window.addEventListener("scroll", this.onScrollListener), window.addEventListener("resize", this.onResizeListener), this.onScrollListener(), this.onResizeListener()
                    },
                    destroyed() {
                        window.removeEventListener("scroll", this.onScrollListener), window.removeEventListener("resize", this.onResizeListener)
                    },
                    methods: {
                        updateScrollPosition() {
                            this.scrollPosition = document.documentElement.scrollTop || document.body.scrollTop
                        },
                        updateScrollPositionMax() {
                            this.scrollPositionMax = document.body.offsetHeight - window.innerHeight
                        }
                    }
                },
                c = (r(2357), r(0)),
                m = Object(c.a)(d, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-magazine-navigation-banner"
                    }, [e("div", {
                        staticClass: "lv-magazine-navigation-banner__inner-wrapper lv-gutters-small"
                    }, [e("BackButton", {
                        directives: [{
                            name: "tracking",
                            rawName: "v-tracking",
                            value: t.backButtonTracking,
                            expression: "backButtonTracking"
                        }],
                        staticClass: "lv-magazine-navigation-banner__back-btn",
                        attrs: {
                            url: t.categoryRoute,
                            "link-only": !0
                        }
                    }), t._v(" "), e("div", {
                        staticClass: "lv-magazine-navigation-banner__content"
                    }, [e("p", {
                        staticClass: "lv-magazine-navigation-banner__category overline"
                    }, [t._v("\n        " + t._s(t.categoryLabel)), t.tag ? e("span", [t._v(" - " + t._s(t.tag))]) : t._e()]), t._v(" "), e("p", {
                        staticClass: "lv-magazine-navigation-banner__title heading-xs"
                    }, [t._v("\n        " + t._s(t.title) + "\n      ")])]), t._v(" "), e("progress", {
                        staticClass: "lv-magazine-navigation-banner__progress-bar",
                        attrs: {
                            max: "100"
                        },
                        domProps: {
                            value: t.readingProgress
                        }
                    })], 1)])
                }), [], !1, null, null, null).exports,
                h = r(1308),
                v = r(1033),
                _ = r(1559),
                f = r(978),
                k = r(1161),
                y = (r(25), r(1726)),
                x = r.n(y),
                w = r(404);
            const z = '\n<article{{{attributes}}}{{#filter}} data-filter="{{.}}"{{/filter}}{{#filterId}} data-filter-id="{{.}}"{{/filterId}} data-hydrated>\n{{^packshot}}\n  {{^nopackshot}}\n    <figure>\n    {{#images}}\n    <picture is="lv-picture">\n      <source data-ratio="square" data-src="{{{.}}}" />\n    </picture>\n    {{/images}}\n    </figure>\n  {{/nopackshot}}\n  <div>\n  <span>{{{name}}}</span>\n  {{#commerce}}\n  <span>{{price}}</span>\n  {{/commerce}}\n  {{^horizontal}}\n  </div>\n  {{/horizontal}}\n  {{#url}}\n  {{^commerce}}\n    <a href="{{{url}}}">{{common.global_more_details}}</a>\n  {{/commerce}}\n  {{#commerce}}\n  {{^cta}}\n    <a href="{{{url}}}">{{common.global_shop}}</a>\n  {{/cta}}\n  {{#cta}}\n    <a href="{{{url}}}">{{cta}}</a>\n  {{/cta}}\n  {{/commerce}}\n  {{/url}}\n  {{#horizontal}}\n  </div>\n  {{/horizontal}}\n{{/packshot}}\n{{#packshot}}\n  <figure>\n    <picture is="lv-picture">\n      <source data-ratio="square" data-src="{{{images.0}}}" />\n    </picture>\n    <figcaption>\n      <span>{{{name}}}</span>\n      {{#commerce}}\n      <span>{{price}}</span>\n      {{/commerce}}\n    </figcaption>\n  </figure>\n{{/packshot}}\n</article>',
                C = /<article[^>]+is="lv-product"[^>]+>(.*?)<\/article>/gi,
                S = /<article([^>]+)>/i,
                P = /data-sku="([^"]+)"/i,
                L = 'data-([^\\s=]+)(="([^"]*)")?';
            var D = r(76);
            async function T(article, t) {
                let content = "",
                    e = "",
                    r = "";
                try {
                    const {
                        locale: l,
                        localeAem: n
                    } = t.store.state.localeContext, o = t.app.i18n.messages[l];
                    let d = "";
                    try {
                        d = new URL(article.isBasedOn).pathname
                    } catch (t) {
                        d = article.isBasedOn
                    }
                    const c = t.app.$aem.getPackage(d),
                        [m, h, template, v, _] = await Promise.all([c.getLocalized(n), c.getGlobal(), c.getTemplate(), c.getStyles(), c.getScripts()]),
                        f = Object(w.a)(h, m),
                        k = Object(D.p)(Date.parse(article.datePublished), {
                            locale: l
                        }),
                        y = article.additionalProperty.find((t => "categoryChunk" === t.name)),
                        T = y ? "../".concat(y.value) : null,
                        E = article.additionalProperty.find((t => "tagChunk" === t.name)),
                        I = y && E ? "../".concat(y.value, "/").concat(E.value) : null;
                    content = x.a.render((template || "").replace(/<!doctype html>/i, ""), {
                        common: o,
                        story: { ...f,
                            ...article,
                            datePublished: k,
                            articleSectionLink: T,
                            articleTagLink: I
                        }
                    }), content = await async function(content, t) {
                        const {
                            locale: e
                        } = t.store.state.localeContext, r = t.app.i18n.messages[e];
                        let html = content;
                        const l = (html.match(C) || []).reduce(((map, t) => Object.assign(map, {
                                [t.match(P)[1]]: t
                            })), {}),
                            data = (await t.app.$domain.catalog.getSkuList({
                                skus: Object.keys(l)
                            })).map((t => {
                                const e = {
                                    sku: t.identifier,
                                    name: t.name,
                                    url: t.url
                                };
                                if (t.image && (e.images = (Array.isArray(t.image) ? t.image : [t.image]).filter((img => !img.playerType)).map((img => img.contentUrl.replace(/\s/g, "%20"))).slice(0, 2)), t.offers && (e.commerce = {
                                        price: t.offers.price
                                    }), t.category && t.category.length >= 2) {
                                    const r = t.category.length - 2;
                                    e.filterId = t.category[r].identifier, e.filter = t.category[r].name
                                }
                                return e
                            })).reduce(((map, t) => Object.assign(map, {
                                [t.sku]: t
                            })), {}),
                            n = Object.keys(data);
                        return Object.keys(l).forEach((t => {
                            let e = "";
                            if (n.includes(t)) {
                                const n = l[t],
                                    o = n.match(new RegExp(L, "g")).reduce(((t, e) => {
                                        const r = e.match(new RegExp(L, "i"));
                                        return Object.assign(t, {
                                            [r[1]]: r[3] || !0
                                        })
                                    }), {}),
                                    d = n.match(S)[1];
                                e = x.a.render(z, { ...o,
                                    ...data[t],
                                    attributes: d,
                                    common: r
                                })
                            }
                            html = html.replace(new RegExp(l[t], "g"), (() => e))
                        })), html
                    }(content, t), e = v, r = _
                } catch (e) {
                    const {
                        url: r,
                        identifier: l,
                        isBasedOn: n
                    } = article;
                    t.app.$logger.error(e, {
                        category: "story",
                        url: r,
                        article: {
                            identifier: l,
                            isBasedOn: n
                        }
                    })
                }
                return {
                    content: content,
                    styles: e,
                    scripts: r
                }
            }
            var E = r(281),
                I = r(16),
                O = r(1402),
                A = r(113),
                M = {
                    tracking: {
                        default: {
                            categoryGa: "magazine",
                            actionType: "action_suggested"
                        }
                    },
                    isPage: !0,
                    components: {
                        MagazineNavigationBanner: m,
                        MagazineArticlesGrid: h.a,
                        Masthead: v.default,
                        DailyArticleWrapper: _.a,
                        RemoteComponent: f.default,
                        MagazineStory: () => r.e(510).then(r.bind(null, 3715)),
                        EditorialSlider: () => Promise.all([r.e(0), r.e(435)]).then(r.bind(null, 1071))
                    },
                    mixins: [O.a],
                    async asyncData(t) {
                        const {
                            app: e,
                            store: r,
                            params: n,
                            error: o,
                            route: d
                        } = t, c = await e.$publicAtg.magazine.getArticle({
                            articleChunk: n.article
                        }).catch((() => null));
                        if (!c) return o({
                            statusCode: 404
                        });
                        const {
                            isBasedOn: m,
                            highEndTemplate: h
                        } = c, v = !!m, article = Object(k.d)(c);
                        let _, f, y;
                        if (v) {
                            const {
                                pathname: l
                            } = new URL(m);
                            y = "".concat(Object(A.d)(t)).concat(l);
                            try {
                                h ? f = Object(A.e)(l) : _ = await T(c, {
                                    app: e,
                                    store: r
                                })
                            } catch (t) {
                                return e.$pageErrorHandler(new E.a(t, 404))
                            }
                        }
                        if (await Promise.all([r.dispatch(l.PAGE_CONTEXT_UPDATE_ACTION, {
                                currentPage: I.a.MagazineDailyArticle,
                                remotePackageURL: f,
                                params: {
                                    contentId: n.article
                                },
                                utagData: {
                                    pageName: "magazine/".concat(article.categoryId, "/").concat(n.article),
                                    pageType: v ? "news_story" : "news_article",
                                    contentId: n.article,
                                    contentType: v ? "story" : "article"
                                }
                            }), r.dispatch(l.PAGE_CONTEXT_UPDATE_SHARING_METAS_ACTION, {
                                title: article.headline,
                                description: article.alternativeHeadline,
                                url: article.url,
                                image: article.shareImage
                            }), r.dispatch(l.PAGE_CONTEXT_LOAD_SEO_LINKS_ACTION, {
                                seourl: d.path
                            })]), v) return {
                            baseURL: y,
                            story: _,
                            articleData: c,
                            highEndTemplate: h,
                            packageURL: f
                        };
                        const {
                            content: x = []
                        } = await e.$publicAtg.magazine.getReadMoreArticles({
                            articleChunk: n.article,
                            howMany: 3
                        }).catch((() => ({})));
                        return {
                            article: article,
                            moreArticles: x.map(k.e),
                            articleData: c
                        }
                    },
                    data: () => ({
                        packageURL: null,
                        story: null,
                        heroSliderId: "heroSlider"
                    }),
                    head() {
                        const t = {
                            innerHTML: JSON.stringify(this.jsonLdData),
                            type: "application/ld+json"
                        };
                        return this.story ? {
                            meta: [{
                                content: this.baseURL,
                                name: "story-package"
                            }],
                            style: [{
                                cssText: this.story.styles,
                                hid: "story-css"
                            }],
                            script: [{
                                innerHTML: this.story.scripts,
                                type: "text/javascript",
                                hid: "story-js",
                                body: !0,
                                async: !0
                            }, t],
                            __dangerouslyDisableSanitizersByTagID: {
                                "story-css": ["cssText"]
                            }
                        } : {
                            script: [t]
                        }
                    },
                    computed: {
                        masthead() {
                            const {
                                article: {
                                    headline: t,
                                    hero: {
                                        type: e,
                                        filenames: r,
                                        url: l
                                    }
                                }
                            } = this;
                            return [k.b.IMAGE, k.b.VIDEO].includes(e) ? {
                                title: t,
                                subtitle: null,
                                ...e === k.b.IMAGE && {
                                    image: {
                                        mobile: (r || {}).DI2,
                                        desktop: (r || {}).DI3
                                    }
                                },
                                ...e === k.b.VIDEO && {
                                    video: {
                                        mobile: l,
                                        desktop: l
                                    }
                                }
                            } : null
                        },
                        isSmall() {
                            return this.$store.getters[n.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                        },
                        dateConverted() {
                            return Date.parse(this.article.datePublished)
                        },
                        sliderOptions() {
                            return {
                                customLoop: !0,
                                autoplay: !1,
                                ..."full" === this.article.hero.mode ? {
                                    slidesPerView: "auto",
                                    spaceBetween: 24,
                                    centeredSlides: !0
                                } : {}
                            }
                        },
                        sliderClass() {
                            return "-".concat(this.article.hero.mode)
                        },
                        ratio() {
                            return "-".concat(this.article.hero.ratio)
                        },
                        jsonLdData() {
                            const data = { ...this.articleData
                            };
                            return delete data.additionalProperty, data.isBasedOn ? delete data.isBasedOn : delete data.hasPart, data
                        },
                        categoryRoute() {
                            return {
                                name: "magazine-main-virtual-category-tag",
                                params: {
                                    category: this.article.categoryChunk
                                }
                            }
                        },
                        tagRoute() {
                            return {
                                name: "magazine-main-virtual-category-tag",
                                params: {
                                    category: this.article.categoryChunk,
                                    tag: this.article.tagChunk
                                }
                            }
                        }
                    },
                    methods: {
                        onArticleClicked(t) {
                            let {
                                article: article,
                                index: e
                            } = t;
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionId: "article_selection_".concat(e + 1),
                                contentId: article.identifier,
                                actionGa: "push_category",
                                labelGa: "read_more_article",
                                actionPosition: "push_".concat(e + 1),
                                actionType: "article_suggested",
                                contentType: this.article.categoryLabel
                            }))
                        },
                        sendSliderNavigationTrackingData(t, e) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionId: "slider_interaction",
                                actionGa: "slider_interaction_".concat(t),
                                actionType: "slider_".concat(t),
                                labelGa: e
                            }))
                        }
                    }
                },
                j = (r(2359), Object(c.a)(M, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.story ? e("StaticContent", [e("MagazineStory", {
                        attrs: {
                            story: t.story
                        }
                    })], 1) : t.packageURL ? e("div", {
                        staticClass: "lv-fullheight"
                    }, [e("RemoteComponent", {
                        attrs: {
                            package: t.packageURL,
                            "can-set-header-display": ""
                        }
                    })], 1) : e("div", {
                        staticClass: "lv-magazine-article-container"
                    }, [t.article ? e("MagazineNavigationBanner", {
                        directives: [{
                            name: "sticky",
                            rawName: "v-sticky",
                            value: {
                                position: 2
                            },
                            expression: "{ position: 2 }"
                        }],
                        attrs: {
                            "category-label": t.article.categoryLabel,
                            "category-chunk": t.article.categoryChunk,
                            tag: t.article.keywords,
                            title: t.article.headline
                        }
                    }) : t._e(), t._v(" "), t.masthead ? e("Masthead", {
                        attrs: {
                            data: t.masthead,
                            "is-critical": ""
                        }
                    }) : e("header", {
                        staticClass: "lv-magazine-article-container__content-header lv-gutters"
                    }, [e("div", {
                        staticClass: "lv-magazine-article-container__content-inner"
                    }, [e("h1", {
                        staticClass: "lv-magazine-article-container__content-title"
                    }, [t._v("\n        " + t._s(t.article.headline) + "\n      ")]), t._v(" "), t.article.alternativeHeadline ? e("p", {
                        staticClass: "lv-magazine-article-container__content-intro body-l"
                    }, [t._v("\n        " + t._s(t.article.alternativeHeadline) + "\n      ")]) : t._e()]), t._v(" "), t.article.hero ? e("div", {
                        staticClass: "lv-magazine-article-container__content-hero"
                    }, ["Collection" === t.article.hero.type ? e("EditorialSlider", {
                        attrs: {
                            id: t.heroSliderId,
                            data: {
                                items: t.article.hero.slides
                            },
                            pagination: "",
                            loop: ""
                        },
                        on: {
                            "slider-navigation": function(e) {
                                return t.sendSliderNavigationTrackingData(e, t.section.sliderId)
                            }
                        }
                    }) : t._e()], 1) : t._e()]), t._v(" "), t.article.alternativeHeadline ? e("div", {
                        staticClass: "lv-magazine-article-container__headline lv-gutters"
                    }, [e("p", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: t.article.alternativeHeadline,
                            expression: "article.alternativeHeadline"
                        }],
                        staticClass: "heading-l"
                    })]) : t._e(), t._v(" "), e("article", {
                        staticClass: "lv-magazine-article-container__content"
                    }, [e("DailyArticleWrapper", {
                        attrs: {
                            data: t.article
                        }
                    })], 1), t._v(" "), t.moreArticles.length > 0 ? e("section", {
                        staticClass: "lv-magazine-article-container__latest-section lv-gutters"
                    }, ["" !== t.$t("global_read_more") ? e("h2", {
                        staticClass: "lv-magazine-article-container__more heading-m"
                    }, [t._v("\n      " + t._s(t.$t("global_read_more")) + "\n    ")]) : t._e(), t._v(" "), e("MagazineArticlesGrid", {
                        staticClass: "lv-magazine-article-container__grid",
                        attrs: {
                            articles: t.moreArticles,
                            "is-tag-displayed": !0,
                            "grid-size": 3,
                            "name-tag": "p"
                        },
                        on: {
                            "article-clicked": t.onArticleClicked
                        }
                    })], 1) : t._e()], 1)
                }), [], !1, null, null, null));
            e.default = j.exports
        },
        929: function(t, e, r) {
            var content = r(935);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("51ae5d06", content, !0, {
                sourceMap: !1
            })
        },
        931: function(t, e, r) {
            "use strict";
            r.r(e), r.d(e, "DELAY", (function() {
                return h
            }));
            r(3), r(56);
            var l = r(5),
                n = r(29),
                o = r(932),
                d = r(326),
                c = r(87),
                m = r(11);
            const h = 1e3,
                v = [],
                _ = ["swf", "avi", "flv", "mpg", "rm", "mov", "wav", "asf", "3gp", "mkv", "rmvb", "mp4"],
                f = () => {
                    v.length && (v[0].video.play(), v[0].started = 1, window.setTimeout((() => {
                        v.splice(0, 1), v.length > 0 && f()
                    }), h))
                };
            var k = {
                    components: {
                        PlayPauseButton: d.a,
                        ResponsivePicture: c.default,
                        Icon: m.default
                    },
                    mixins: [o.a],
                    props: {
                        isCritical: {
                            type: Boolean,
                            default: !1
                        },
                        criticalConfig: {
                            type: Object,
                            default: () => ({
                                type: "embed"
                            })
                        },
                        url: {
                            type: String,
                            required: !0
                        },
                        fit: {
                            type: String,
                            default: "cover"
                        },
                        checkRatio: {
                            type: Boolean,
                            default: !1
                        },
                        still: {
                            type: Boolean,
                            default: !1
                        },
                        playPausePortal: {
                            type: String,
                            default: null
                        },
                        hasSound: {
                            type: Boolean,
                            default: !1
                        },
                        altImg: {
                            type: String,
                            default: ""
                        },
                        contrast: {
                            type: Boolean,
                            default: !1
                        },
                        widths: {
                            type: Object,
                            default: void 0
                        }
                    },
                    data: () => ({
                        videoData: {},
                        options: {
                            src: "",
                            muted: !0,
                            loop: !0,
                            autoplay: !1,
                            preload: !1,
                            tabindex: "-1",
                            "aria-hidden": !0
                        },
                        isVideoLoaded: !1,
                        isDataLoaded: !1,
                        fitStyle: null,
                        triggerLoad: !1,
                        isVisible: !1
                    }),
                    async fetch() {},
                    computed: {
                        isCriticalEnabled() {
                            return this.isFreecasterVideo && this.isCritical
                        },
                        isPlaying() {
                            return !this.isAnimationPrevented && this.isVisible && this.isVideoLoaded
                        },
                        currentVideoSrc() {
                            return this.options.src
                        },
                        isMuted() {
                            return this.options.muted
                        },
                        animationUnmutedId() {
                            return this.$store.state.animationUnmutedId
                        },
                        isFreecasterVideo() {
                            const t = this.url.split(/[#?]/)[0].split(".").pop().trim();
                            return !_.includes(t)
                        },
                        hasEnhancedContrast() {
                            return this.$store.state.enhancedContrast
                        },
                        enhancedContrastClasses() {
                            return !!this.hasEnhancedContrast && "-primary ".concat(this.contrast ? "-light" : "-dark")
                        },
                        isMediaQueryInit() {
                            return this.$store.state.isMediaQueryInit
                        }
                    },
                    watch: {
                        animationUnmutedId(t) {
                            this.options.muted = t !== this.url
                        },
                        url() {
                            this.loadVideo()
                        },
                        isMediaQueryInit(t) {
                            t && !this.isVideoLoaded && this.loadVideo()
                        },
                        isPlaying(t) {
                            const e = v.findIndex((q => q.video === this.$refs.video));
                            var video;
                            t && -1 === e ? (video = this.$refs.video).currentTime > 0 ? video.play() : (v.push({
                                video: video,
                                started: 0
                            }), 1 === v.length ? window.requestAnimationFrame(f) : v.sort(((a, b) => a.started !== b.started ? b.started - a.started : 2 & a.video.compareDocumentPosition(b.video) ? 1 : -1))) : t || (e > -1 && v.splice(e, 1), this.$refs.video.pause())
                        },
                        currentVideoSrc(t, e) {
                            var r;
                            e && t !== e && (this.isVideoLoaded = !1, null === (r = this.$refs.video) || void 0 === r || r.addEventListener("loadedmetadata", this.setIsVideoLoaded))
                        }
                    },
                    mounted() {
                        this.isMediaQueryInit && this.loadVideo()
                    },
                    methods: {
                        async loadVideo() {
                            this.isVideoLoaded = !1;
                            try {
                                const data = await this.getVideoData(this.url);
                                this.isCriticalEnabled ? (this.videoData.sources = data.sources, this.videoData.posters || (this.videoData.posters = data.posters)) : this.videoData = data
                            } catch (t) {} finally {
                                this.isDataLoaded = !0, this.isCriticalEnabled && !this.triggerLoad && (await this.$nextTick(), this.setSourceAndListener())
                            }
                        },
                        getVideoData(t) {
                            return this.isFreecasterVideo ? this.$videoApi.getVideo(t) : Promise.resolve({
                                posters: {},
                                sources: [{
                                    media: "screen",
                                    size: "xs",
                                    src: t
                                }]
                            })
                        },
                        getVideoSrc() {
                            const source = (this.videoData.sources || []).filter((t => window.matchMedia(t.media).matches)).pop();
                            this.options.src = source ? source.src : ""
                        },
                        changeVisibility(t) {
                            this.isVisible = t, this.isVisible && this.isDataLoaded && !this.triggerLoad && !this.isCriticalEnabled && this.setSourceAndListener()
                        },
                        setSourceAndListener() {
                            var t;
                            this.getVideoSrc(), this.triggerLoad = !0, null === (t = this.$refs.video) || void 0 === t || t.addEventListener("loadedmetadata", this.setIsVideoLoaded)
                        },
                        setIsVideoLoaded() {
                            this.isVideoLoaded = !0, this.resizeListener = Object(n.a)(this.onResize), this.resizeListener(), window.addEventListener("resize", this.resizeListener), this.$refs.video.removeEventListener("loadedmetadata", this.setIsVideoLoaded), this.isFreecasterVideo || this.$emit("loaded", this.$refs.video)
                        },
                        onResize() {
                            this.getVideoSrc()
                        },
                        togglePlayPause() {
                            this.$store.commit(l.TOGGLE_ANIMATION_PREVENTION), this.animationUnmutedId && this.$store.commit(l.SET_ANIMATION_UNMUTED_ID, this.url), this.$emit("play-pause-clicked", this.isPlaying, this.url)
                        },
                        onSoundClick() {
                            this.options.muted = !this.options.muted;
                            const t = this.options.muted ? null : this.url;
                            this.$store.commit(l.SET_ANIMATION_UNMUTED_ID, t), this.$emit("sound-clicked", !this.options.muted, this.url)
                        }
                    }
                },
                y = (r(934), r(0)),
                component = Object(y.a)(k, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.isDataLoaded ? e("div", {
                        directives: [{
                            name: "on-visibility",
                            rawName: "v-on-visibility",
                            value: t.changeVisibility,
                            expression: "changeVisibility"
                        }],
                        staticClass: "lv-video-loop",
                        class: {
                            "is-loaded": t.isVideoLoaded, "-contrast": t.contrast
                        }
                    }, [t.videoData.posters ? e("ResponsivePicture", t._g({
                        attrs: {
                            fit: t.fit,
                            filenames: t.videoData.posters,
                            lazy: !t.isCriticalEnabled,
                            "is-critical": t.isCriticalEnabled,
                            alt: t.altImg,
                            "check-ratio": t.checkRatio,
                            widths: t.widths
                        }
                    }, t.$listeners)) : t._e(), t._v(" "), e("video", t._b({
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.still,
                            expression: "!still"
                        }],
                        ref: "video",
                        staticClass: "lv-video-loop__video",
                        class: {
                            "-contain": "contain" === t.fit, "-auto-size": !t.isFreecasterVideo
                        },
                        style: t.fitStyle || {},
                        attrs: {
                            playsinline: ""
                        }
                    }, "video", t.options, !1)), t._v(" "), e(t.playPausePortal ? "portal" : "div", {
                        tag: "component",
                        staticClass: "overlay",
                        attrs: {
                            to: t.playPausePortal ? t.playPausePortal : null
                        }
                    }, [e("PlayPauseButton", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.still,
                            expression: "!still"
                        }],
                        staticClass: "lv-video-loop__play-pause -size-s",
                        class: t.enhancedContrastClasses,
                        attrs: {
                            "initial-status": !t.isAnimationPrevented,
                            "aria-label": t.$t("global_stop_all_animations"),
                            "aria-pressed": t.isAnimationPrevented ? "true" : "false"
                        },
                        on: {
                            play: t.togglePlayPause
                        }
                    }), t._v(" "), t.hasSound ? e("button", {
                        staticClass: "lv-video-loop__sound-button lv-button -only-icon -size-s",
                        class: t.enhancedContrastClasses,
                        attrs: {
                            "aria-label": t.$t("global_sound_button"),
                            "aria-pressed": t.isMuted ? "false" : "true"
                        },
                        on: {
                            click: function(e) {
                                return e.stopPropagation(), e.preventDefault(), t.onSoundClick.apply(null, arguments)
                            }
                        }
                    }, [e("Icon", {
                        attrs: {
                            name: t.isMuted ? "controls-volume-off-filled" : "controls-volume-on-filled"
                        }
                    })], 1) : t._e()], 1)], 1) : t._e()
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        932: function(t, e, r) {
            "use strict";
            e.a = {
                mounted() {
                    let {
                        $parent: t
                    } = this, e = !1;
                    for (; t && !e;) {
                        e = "lv-modal-target" === t.$attrs.id;
                        const {
                            $parent: p
                        } = t;
                        t = p
                    }
                    this.isInModal = e
                },
                data: () => ({
                    isInModal: !1
                }),
                computed: {
                    isAnimationPrevented() {
                        return this.$store.state.isAnimationPrevented || this.isModalOpen && !this.isInModal
                    },
                    isModalOpen() {
                        return this.$store.state.isModalOpen
                    }
                }
            }
        },
        934: function(t, e, r) {
            "use strict";
            r(929)
        },
        935: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-video-loop{color:#fff;height:100%;position:relative}.lv-video-loop__video{bottom:0;height:100%;-o-object-fit:cover;object-fit:cover;opacity:0;position:absolute;top:0;width:100%}[dir] .lv-video-loop__video{left:0;right:0;transition:opacity .3s cubic-bezier(.39,.575,.565,1)}.lv-video-loop__video.-contain{-o-object-fit:contain;object-fit:contain}.lv-video-loop__video.-auto-size{height:auto;max-height:100%;max-width:100%;position:static;width:auto}.lv-video-loop .overlay{bottom:0;height:100%;position:absolute;top:0;width:100%}[dir] .lv-video-loop .overlay{left:0;right:0}.lv-video-loop__play-pause{bottom:0;opacity:0;position:absolute}[dir=ltr] .lv-video-loop__play-pause{left:0;right:auto}[dir=rtl] .lv-video-loop__play-pause{left:auto;right:0}.lv-video-loop.is-loaded .lv-video-loop__play-pause,.lv-video-loop.is-loaded .lv-video-loop__video{opacity:1}.lv-video-loop__sound-button{bottom:0;opacity:1;position:absolute;z-index:2}[dir] .lv-video-loop__sound-button{margin:.5rem;transform:translateY(2px)}[dir=ltr] .lv-video-loop__sound-button{right:0}[dir=rtl] .lv-video-loop__sound-button{left:0}@media screen and (min-width:48rem){[dir] .lv-video-loop__sound-button{margin:1rem}}.lv-video-loop__sound-button .lv-icon{height:1rem!important;width:1rem!important}.lv-video-loop.-contrast{color:#000}", ""]), l.locals = {}, t.exports = l
        },
        936: function(t, e, r) {
            var content = r(951);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("452be619", content, !0, {
                sourceMap: !1
            })
        },
        937: function(t, e, r) {
            var content = r(955);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("31484720", content, !0, {
                sourceMap: !1
            })
        },
        938: function(t, e, r) {
            "use strict";
            r.r(e);
            r(82);
            var l = {
                    components: {
                        SmartLink: r(17).default
                    },
                    inheritAttrs: !1,
                    props: {
                        data: {
                            type: Object,
                            default: () => ({})
                        },
                        markupTitle: {
                            type: String,
                            default: "h3"
                        },
                        centerText: {
                            type: [String, Boolean],
                            default: "desktop"
                        },
                        wide: {
                            type: Boolean,
                            default: !1
                        },
                        buttonClass: {
                            type: String,
                            default: null
                        },
                        buttonFullwidth: {
                            type: Boolean,
                            default: !1
                        },
                        titleClassDesktop: {
                            type: String,
                            default: "heading-m"
                        },
                        titleClassMobile: {
                            type: String,
                            default: "heading-m"
                        },
                        textClassDesktop: {
                            type: String,
                            default: "body-m"
                        },
                        textClassMobile: {
                            type: String,
                            default: "body-m"
                        },
                        allowSafeHtmlImg: {
                            type: Boolean,
                            default: !0
                        },
                        hasOppositeCtas: {
                            type: Boolean,
                            default: !1
                        },
                        contrast: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        hasHTML() {
                            return /<\/?[a-z][\s\S]*>/i.test(this.data.description)
                        },
                        ctas() {
                            var t = this;
                            const e = this.data.ctaList && this.data.ctaList.length ? this.data.ctaList : [this.data.cta],
                                r = e.length ? e.filter((function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return t && t.url && t.label
                                })) : [];
                            return r.map((function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                const l = (arguments.length > 1 ? arguments[1] : void 0) === r.length - 1 ? "-primary" : "-secondary";
                                return { ...e,
                                    class: t.hasOppositeCtas ? "".concat(l).concat(t.contrast ? " -light" : "") : t.buttonClass || e.class
                                }
                            }))
                        }
                    }
                },
                n = l,
                o = (r(950), r(0)),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-editorial-text-block",
                        class: {
                            "-wide": t.wide, "-center": !0 === t.centerText, "-center-mobile": "mobile" === t.centerText, "-center-desktop": "desktop" === t.centerText, "-button-fullwidth": t.buttonFullwidth
                        }
                    }, [t.data.pretitle ? e("span", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: t.data.pretitle,
                            expression: "data.pretitle"
                        }],
                        staticClass: "lv-editorial-text-block__pretitle overline"
                    }) : t._e(), t._v(" "), t.data.title ? e(t.markupTitle, {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: t.data.title,
                            expression: "data.title"
                        }],
                        tag: "component",
                        staticClass: "lv-editorial-text-block__title",
                        class: "".concat(t.titleClassMobile, " ").concat(t.titleClassDesktop, "-desktop")
                    }) : t._e(), t._v(" "), t.data.description ? e("div", {
                        staticClass: "lv-editorial-text-block__description",
                        class: "".concat(t.textClassMobile, " ").concat(t.textClassDesktop, "-desktop")
                    }, [t.hasHTML ? e("div", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: {
                                additionalTags: t.allowSafeHtmlImg && ["img"],
                                html: t.data.description
                            },
                            expression: "{ additionalTags: allowSafeHtmlImg && ['img'], html: data.description }"
                        }],
                        on: {
                            click: function(e) {
                                return t.$emit("text-clicked", e)
                            }
                        }
                    }) : e("p", [t._v(t._s(t.data.description))])]) : t._e(), t._v(" "), t.ctas.length ? e("div", {
                        staticClass: "lv-editorial-text-block__ctas",
                        class: {
                            "-styled": t.buttonClass || t.hasOppositeCtas || t.ctas.some((t => t.class))
                        }
                    }, t._l(t.ctas, (function(r, l) {
                        return e("div", {
                            key: l
                        }, [e("SmartLink", {
                            class: r.class ? "lv-button ".concat(r.class) : "-default",
                            attrs: {
                                url: r.url,
                                type: r.type || r.identifier,
                                "no-spa": r.noSpa
                            },
                            nativeOn: {
                                click: function(e) {
                                    return t.$emit("link-clicked", r)
                                }
                            }
                        }, [t._v("\n        " + t._s(r.label) + "\n      ")])], 1)
                    })), 0) : t._e(), t._v(" "), t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        940: function(t, e, r) {
            "use strict";
            r.r(e);
            r(3);
            var l = r(931),
                n = r(87),
                o = r(945),
                d = r(14),
                c = {
                    components: {
                        VideoLoop: l.default,
                        VideoPlayer: () => r.e(116).then(r.bind(null, 975)),
                        ResponsivePicture: n.default,
                        EditorialFeaturedProducts: () => r.e(434).then(r.bind(null, 1144))
                    },
                    mixins: [o.a],
                    inheritAttrs: !1,
                    props: {
                        data: {
                            type: Object,
                            default: () => ({})
                        },
                        widths: {
                            type: Object,
                            default: () => ({
                                xs: "full"
                            })
                        },
                        load: {
                            type: Boolean,
                            default: !1
                        },
                        lazy: {
                            type: Boolean,
                            default: !0
                        },
                        defaultRatio: {
                            type: String,
                            default: "portrait"
                        },
                        playerOptions: {
                            type: Object,
                            default: () => ({
                                muted: !0,
                                autoplay: !1
                            })
                        },
                        hasSound: {
                            type: Boolean,
                            default: !0
                        },
                        captionAlign: {
                            type: String,
                            default: "left"
                        },
                        captionClass: {
                            type: String,
                            default: "body-s"
                        },
                        hasCaptionGutters: {
                            type: [String, Boolean],
                            default: !1
                        },
                        contrast: {
                            type: Boolean,
                            default: !1
                        },
                        isCritical: {
                            type: Boolean,
                            default: !1
                        },
                        criticalConfig: {
                            type: Object,
                            default: null
                        },
                        playPausePortal: {
                            type: String,
                            default: null
                        },
                        gradient: {
                            type: [String, Boolean],
                            default: !1
                        },
                        isHero: {
                            type: Boolean,
                            default: !1
                        },
                        mediaPosition: {
                            type: String,
                            default: "top"
                        }
                    },
                    computed: {
                        isSmall() {
                            return this.$store.getters[d.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                        },
                        hasVideoPlayer() {
                            return this.itemData.video && this.itemData.player
                        },
                        hasCaptionGuttersClass() {
                            return !0 === this.hasCaptionGutters || "mobile" === this.hasCaptionGutters && this.isSmall || "desktop" === this.hasCaptionGutters && !this.isSmall
                        }
                    }
                },
                m = (r(954), r(0)),
                component = Object(m.a)(c, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        staticClass: "lv-editorial-media",
                        class: [t.itemData.image ? null : "".concat(t.itemRatioClass), "-media-position-".concat(t.mediaPosition), {
                            "-gradient-half": !0 === t.gradient,
                            "-gradient-full": "full" === t.gradient,
                            "-contrast": t.contrast,
                            "-hero": t.isHero
                        }]
                    }, [(t.itemData.products || []).length ? e("EditorialFeaturedProducts", t._g({
                        attrs: {
                            data: t.itemData,
                            "button-label": t.itemData.buttonLabel,
                            "media-widths": t.widths,
                            "default-ratio": t.defaultRatio,
                            contrast: t.contrast,
                            "is-critical": t.isCritical
                        }
                    }, t.$listeners)) : t.hasVideoPlayer ? e("VideoPlayer", t._g({
                        attrs: {
                            src: t.itemData.video,
                            options: t.playerOptions
                        }
                    }, t.$listeners)) : t.itemData.video ? e("VideoLoop", t._g({
                        attrs: {
                            url: t.itemData.video,
                            "has-sound": t.hasSound,
                            contrast: t.contrast,
                            "is-critical": t.isCritical,
                            widths: t.widths,
                            "critical-config": {
                                type: "responsive",
                                portrait: (t.data.video || {}).mobile,
                                landscape: (t.data.video || {}).desktop
                            },
                            "play-pause-portal": t.playPausePortal
                        }
                    }, t.$listeners)) : t.itemData.image ? e("div", [e("ResponsivePicture", t._g(t._b({
                        class: "".concat(t.itemRatioClass),
                        attrs: {
                            load: t.load,
                            lazy: t.lazy,
                            widths: t.widths,
                            filenames: t.itemData.image,
                            "is-critical": t.isCritical
                        }
                    }, "ResponsivePicture", t.itemData.attrs, !1), t.$listeners)), t._v(" "), t.itemData.imageCaption ? e("div", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: t.itemData.imageCaption,
                            expression: "itemData.imageCaption"
                        }],
                        class: ["lv-editorial-media__caption", t.captionClass, "-".concat(t.captionAlign), {
                            "-has-gutters": t.hasCaptionGuttersClass
                        }]
                    }) : t._e()], 1) : t._e()], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        945: function(t, e, r) {
            "use strict";
            r(328), r(3);
            var l = r(14);
            e.a = {
                props: {
                    data: {
                        type: Object,
                        default: () => ({})
                    }
                },
                computed: {
                    safeDisplay() {
                        return this.data.safeDisplay
                    },
                    isSmall() {
                        return this.$store.getters[l.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                    },
                    itemData() {
                        return { ...this.data,
                            ...this.getItemData(this.data)
                        }
                    },
                    itemRatioClass() {
                        const t = "lv-editorial-media__placeholder";
                        return "object" == typeof this.data.ratio ? "".concat(t, " placeholder-").concat(this.data.ratio.mobile || this.defaultRatio, " placeholder-").concat(this.data.ratio.desktop || this.defaultRatio, "-desktop") : "".concat(t, " placeholder-").concat(this.data.ratio || this.defaultRatio)
                    }
                },
                methods: {
                    getItemData(t) {
                        return ["image", "video", "ratio"].reduce(((e, p) => Object.assign(e, {
                            [p]: this.getResponsiveProp(t, p)
                        })), {})
                    },
                    getResponsiveProp(t, e) {
                        if (t && t[e] && "image" === e && Object.keys(t[e]).length) {
                            if (Object.keys(t[e]).includes("xs")) return t[e];
                            const r = "string" == typeof t[e] ? t[e] : t[e][this.safeDisplay ? "mobileSafeDisplay" : "mobile"],
                                l = "string" == typeof t[e] ? null : t[e][this.safeDisplay ? "desktopSafeDisplay" : "desktop"];
                            return {
                                xs: r,
                                ...l && {
                                    m: l
                                }
                            }
                        }
                        return t && t[e] && "object" == typeof t[e] ? this.isSmall ? t[e][this.safeDisplay ? "mobileSafeDisplay" : "mobile"] : t[e][this.safeDisplay ? "desktopSafeDisplay" : "desktop"] : t[e]
                    },
                    addBaseUrl() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object.fromEntries(Object.entries(t).map((t => {
                            let [e, r] = t;
                            return [e, "".concat(this.$baseURL || "").concat(r)]
                        })))
                    }
                }
            }
        },
        946: function(t, e, r) {
            "use strict";
            var l = r(8),
                n = {
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
                o = r(0),
                component = Object(o.a)(n, (function() {
                    var t = this,
                        e = t._self._c;
                    return e(t.isLink ? "a" : "button", {
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
                            click: function(e) {
                                e.preventDefault(), t.isCustomAction ? t.$emit("go-back") : t.goBack()
                            }
                        }
                    }, [e("Icon", {
                        staticClass: "-mirrored",
                        attrs: {
                            name: t.iconName
                        }
                    })], 1)
                }), [], !1, null, null, null);
            e.a = component.exports
        },
        950: function(t, e, r) {
            "use strict";
            r(936)
        },
        951: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, ".lv-editorial-text-block{max-width:32.5rem}@media screen and (min-width:48rem){.lv-editorial-text-block .heading-xxl-desktop{font-size:4rem;font-weight:400;letter-spacing:.025rem;line-height:4rem}.lv-editorial-text-block .heading-xxl-desktop.-light{color:#fff}.lv-editorial-text-block .heading-xxl-desktop.-dark{color:#000}.lv-editorial-text-block .heading-xxl-desktop:lang(ko),.lv-editorial-text-block .heading-xxl-desktop:lang(zh){font-size:2.6rem}.lv-editorial-text-block .heading-xxl-desktop:lang(ja){font-size:2rem}.lv-editorial-text-block .heading-xxl-desktop:lang(ru){font-size:3.4rem}.lv-editorial-text-block .heading-xxl-desktop:lang(ja),.lv-editorial-text-block .heading-xxl-desktop:lang(ko),.lv-editorial-text-block .heading-xxl-desktop:lang(th),.lv-editorial-text-block .heading-xxl-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xxl-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-xxl-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-xl-desktop{font-size:3rem;font-weight:400;letter-spacing:.025rem;line-height:3.5rem}.lv-editorial-text-block .heading-xl-desktop.-light{color:#fff}.lv-editorial-text-block .heading-xl-desktop.-dark{color:#000}.lv-editorial-text-block .heading-xl-desktop:lang(ko),.lv-editorial-text-block .heading-xl-desktop:lang(zh){font-size:1.95rem}.lv-editorial-text-block .heading-xl-desktop:lang(ja){font-size:1.5rem}.lv-editorial-text-block .heading-xl-desktop:lang(ru){font-size:2.55rem}.lv-editorial-text-block .heading-xl-desktop:lang(ja),.lv-editorial-text-block .heading-xl-desktop:lang(ko),.lv-editorial-text-block .heading-xl-desktop:lang(th),.lv-editorial-text-block .heading-xl-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xl-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-xl-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-l-desktop{font-size:2rem;font-weight:400;letter-spacing:.025rem;line-height:2.5rem}.lv-editorial-text-block .heading-l-desktop.-light{color:#fff}.lv-editorial-text-block .heading-l-desktop.-dark{color:#000}.lv-editorial-text-block .heading-l-desktop:lang(ja),.lv-editorial-text-block .heading-l-desktop:lang(ko),.lv-editorial-text-block .heading-l-desktop:lang(zh){font-size:1.5rem}.lv-editorial-text-block .heading-l-desktop:lang(ja),.lv-editorial-text-block .heading-l-desktop:lang(ko),.lv-editorial-text-block .heading-l-desktop:lang(th),.lv-editorial-text-block .heading-l-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-l-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-l-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-m-desktop{font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:1.75rem}.lv-editorial-text-block .heading-m-desktop.-light{color:#fff}.lv-editorial-text-block .heading-m-desktop.-dark{color:#000}.lv-editorial-text-block .heading-m-desktop:lang(ko),.lv-editorial-text-block .heading-m-desktop:lang(zh){font-size:1.35rem}.lv-editorial-text-block .heading-m-desktop:lang(ja){font-size:1.2rem}.lv-editorial-text-block .heading-m-desktop:lang(ja),.lv-editorial-text-block .heading-m-desktop:lang(ko),.lv-editorial-text-block .heading-m-desktop:lang(th),.lv-editorial-text-block .heading-m-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-m-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-m-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-s-desktop{font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-editorial-text-block .heading-s-desktop.-light{color:#fff}.lv-editorial-text-block .heading-s-desktop.-dark{color:#000}.lv-editorial-text-block .heading-s-desktop:lang(ko),.lv-editorial-text-block .heading-s-desktop:lang(zh){font-size:1.0125rem}.lv-editorial-text-block .heading-s-desktop:lang(ja){font-size:.9rem}.lv-editorial-text-block .heading-s-desktop:lang(ja),.lv-editorial-text-block .heading-s-desktop:lang(ko),.lv-editorial-text-block .heading-s-desktop:lang(th),.lv-editorial-text-block .heading-s-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-s-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-s-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-xs-desktop{font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-editorial-text-block .heading-xs-desktop.-light{color:#fff}.lv-editorial-text-block .heading-xs-desktop.-dark{color:#000}.lv-editorial-text-block .heading-xs-desktop:lang(ko),.lv-editorial-text-block .heading-xs-desktop:lang(zh){font-size:.9rem}.lv-editorial-text-block .heading-xs-desktop:lang(ja){font-size:.8rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xs-desktop:lang(ko),.lv-editorial-text-block .heading-xs-desktop:lang(th),.lv-editorial-text-block .heading-xs-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xs-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-xs-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .list-label-m-desktop{font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-editorial-text-block .list-label-m-desktop.-light{color:#fff}.lv-editorial-text-block .list-label-m-desktop.-dark{color:#000}.lv-editorial-text-block .list-label-m-desktop:lang(ko),.lv-editorial-text-block .list-label-m-desktop:lang(zh){font-size:.9rem}.lv-editorial-text-block .list-label-m-desktop:lang(ja){font-size:.8rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-m-desktop:lang(ko),.lv-editorial-text-block .list-label-m-desktop:lang(th),.lv-editorial-text-block .list-label-m-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-m-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .list-label-m-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .list-label-s-desktop{font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1rem}.lv-editorial-text-block .list-label-s-desktop.-light{color:#fff}.lv-editorial-text-block .list-label-s-desktop.-dark{color:#000}.lv-editorial-text-block .list-label-s-desktop:lang(ko),.lv-editorial-text-block .list-label-s-desktop:lang(zh){font-size:.7875rem}.lv-editorial-text-block .list-label-s-desktop:lang(ja){font-size:.7rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-s-desktop:lang(ko),.lv-editorial-text-block .list-label-s-desktop:lang(th),.lv-editorial-text-block .list-label-s-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-s-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .list-label-s-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .body-l-desktop{font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:2rem}.lv-editorial-text-block .body-l-desktop.-light{color:#fff}.lv-editorial-text-block .body-l-desktop.-dark{color:#000}.lv-editorial-text-block .body-l-desktop:lang(ko),.lv-editorial-text-block .body-l-desktop:lang(zh){font-size:1.35rem}.lv-editorial-text-block .body-l-desktop:lang(ja){font-size:1.2rem}.lv-editorial-text-block .body-l-desktop:lang(ja),.lv-editorial-text-block .body-l-desktop:lang(ko),.lv-editorial-text-block .body-l-desktop:lang(th),.lv-editorial-text-block .body-l-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .body-l-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .body-l-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .body-m-desktop{font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-editorial-text-block .body-m-desktop.-light{color:#fff}.lv-editorial-text-block .body-m-desktop.-dark{color:#000}.lv-editorial-text-block .body-m-desktop:lang(ko),.lv-editorial-text-block .body-m-desktop:lang(zh){font-size:.9rem}.lv-editorial-text-block .body-m-desktop:lang(ja){font-size:.8rem}.lv-editorial-text-block .body-m-desktop:lang(ja),.lv-editorial-text-block .body-m-desktop:lang(ko),.lv-editorial-text-block .body-m-desktop:lang(th),.lv-editorial-text-block .body-m-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .body-m-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .body-m-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .body-s-desktop{font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-editorial-text-block .body-s-desktop.-light{color:#fff}.lv-editorial-text-block .body-s-desktop.-dark{color:#000}.lv-editorial-text-block .body-s-desktop:lang(ko),.lv-editorial-text-block .body-s-desktop:lang(zh){font-size:.7875rem}.lv-editorial-text-block .body-s-desktop:lang(ja){font-size:.7rem}.lv-editorial-text-block .body-s-desktop:lang(ja),.lv-editorial-text-block .body-s-desktop:lang(ko),.lv-editorial-text-block .body-s-desktop:lang(th),.lv-editorial-text-block .body-s-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .body-s-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .body-s-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .overline-desktop{font-size:.625rem;font-weight:400;letter-spacing:.0625rem;line-height:1rem;text-transform:uppercase}.lv-editorial-text-block .overline-desktop.-light{color:#fff}.lv-editorial-text-block .overline-desktop.-dark{color:#000}.lv-editorial-text-block .overline-desktop:lang(ar),.lv-editorial-text-block .overline-desktop:lang(zh){font-size:.6875rem}.lv-editorial-text-block .overline-desktop:lang(ja),.lv-editorial-text-block .overline-desktop:lang(ko),.lv-editorial-text-block .overline-desktop:lang(th),.lv-editorial-text-block .overline-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .overline-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .overline-desktop:lang(vi){line-height:1.3}}.lv-editorial-text-block__pretitle{display:block}[dir] .lv-editorial-text-block__pretitle{margin:0 0 .5rem}.lv-editorial-text-block__title{word-wrap:break-word}[dir] .lv-editorial-text-block__title{margin:0 0 1rem}[dir] .lv-editorial-text-block__description,[dir] .lv-editorial-text-block__description p:first-child{margin-top:0}[dir] .lv-editorial-text-block__description *,[dir] .lv-editorial-text-block__description:last-child{margin-bottom:0}[dir] .lv-editorial-text-block__description p~p{margin:1.5rem 0 0}.lv-editorial-text-block__ctas{display:flex;flex-wrap:wrap;gap:1rem}[dir] .lv-editorial-text-block__ctas{padding-top:2rem}[dir] .lv-editorial-text-block__ctas:only-child,[dir] .lv-editorial-text-block__title+.lv-editorial-text-block__ctas{padding-top:0}[dir] .lv-editorial-text-block__title+.lv-editorial-text-block__ctas.-styled{padding-top:1rem}@media screen and (min-width:48rem){.lv-editorial-text-block.-wide{max-width:66.66vw}[dir] .lv-editorial-text-block.-wide{margin-left:auto;margin-right:auto}[dir] .lv-editorial-text-block.-wide .lv-editorial-text-block__title{text-align:center}}@media screen and (min-width:68.75rem){.lv-editorial-text-block.-wide{max-width:60%}}[dir] .lv-editorial-text-block.-center,[dir] .lv-editorial-text-block.-center-mobile{margin-left:auto;margin-right:auto;text-align:center}.lv-editorial-text-block.-center .lv-editorial-text-block__ctas,.lv-editorial-text-block.-center-mobile .lv-editorial-text-block__ctas{justify-content:center}@media screen and (min-width:48rem){[dir=ltr] .lv-editorial-text-block.-center-mobile{text-align:left}[dir=rtl] .lv-editorial-text-block.-center-mobile{text-align:right}.lv-editorial-text-block.-center-mobile .lv-editorial-text-block__ctas{justify-content:flex-start}[dir] .lv-editorial-text-block.-center-desktop{margin-left:auto;margin-right:auto;text-align:center}.lv-editorial-text-block.-center-desktop .lv-editorial-text-block__ctas{justify-content:center}}.lv-editorial-text-block.-button-fullwidth .lv-editorial-text-block__ctas .lv-button{min-width:100%}@media screen and (min-width:48rem){.lv-editorial-text-block.-button-fullwidth .lv-editorial-text-block__ctas .lv-button{min-width:15rem}}.lv-editorial-text-block__ctas .lv-smart-link.-default,.lv-editorial-text-block__description a{color:#000;color:currentColor;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-editorial-text-block__ctas .lv-smart-link.-default,[dir] .lv-editorial-text-block__description a{box-shadow:0 2px 0 -1px currentColor;cursor:pointer;transition:color .3s cubic-bezier(.39,.575,.565,1)}@media(forced-colors:active){.lv-editorial-text-block__ctas .lv-smart-link.-default,.lv-editorial-text-block__description a{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-editorial-text-block__ctas .lv-smart-link.-default,[dir] .lv-editorial-text-block__description a{box-shadow:none}}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){.lv-editorial-text-block__ctas .lv-smart-link.-default:hover,.lv-editorial-text-block__description a:hover{color:rgba(0,0,0,.6)}}.keyboard-is-used .lv-editorial-text-block__ctas .lv-smart-link.-default:focus,.keyboard-is-used .lv-editorial-text-block__description a:focus{color:rgba(0,0,0,.6)}.lv-editorial-text-block__ctas .lv-smart-link.-default:disabled,.lv-editorial-text-block__description a:disabled{color:rgba(0,0,0,.4)}[dir] .lv-editorial-text-block__ctas .lv-smart-link.-default:disabled,[dir] .lv-editorial-text-block__description a:disabled{cursor:auto}.keyboard-is-used .lv-editorial-text-block__ctas .lv-smart-link.-default:focus,.keyboard-is-used .lv-editorial-text-block__description a:focus,.lv-editorial-text-block__ctas .lv-smart-link.-default:hover,.lv-editorial-text-block__description a:hover{color:currentColor}", ""]), l.locals = {}, t.exports = l
        },
        954: function(t, e, r) {
            "use strict";
            r(937)
        },
        955: function(t, e, r) {
            var l = r(9)((function(i) {
                return i[1]
            }));
            l.push([t.i, '.lv-editorial-media{--gradient-color:0,0,0;--gradient-opacity:0.5;--gradient-opacity-full:0.3;--gradient-height:50%}.-enhanced-contrast .lv-editorial-media{--gradient-opacity:0.9;--gradient-opacity-full:0.7;--gradient-height:100%}.lv-editorial-media.-hero{--buffer:6vh}.-header-is-immersive .lv-editorial-media.-hero{--header-height:0px}.lv-editorial-media.-hero,.lv-editorial-media.-hero .lv-editorial-media__placeholder{max-height:calc(100vh - var(--buffer) - var(--header-height) - var(--banner-height));max-height:calc(var(--vh, 1vh)*100 - var(--buffer) - var(--header-height) - var(--banner-height));overflow:hidden}[dir] .lv-editorial-media__caption{margin-top:1rem}[dir] .lv-editorial-media__caption.-center{text-align:center}[dir=ltr] .lv-editorial-media__caption.-right{text-align:right}[dir=rtl] .lv-editorial-media__caption.-right{text-align:left}.lv-editorial-media__caption.-has-gutters{box-sizing:border-box}[dir] .lv-editorial-media__caption.-has-gutters{padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-editorial-media__caption.-has-gutters{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-editorial-media__caption.-has-gutters{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:90rem){[dir] .lv-editorial-media__caption.-has-gutters{padding-left:3.3333333333vw;padding-right:3.3333333333vw}}.lv-editorial-media.-gradient-full:after,.lv-editorial-media.-gradient-half:after{bottom:0;content:"";display:block;position:absolute}[dir] .lv-editorial-media.-gradient-full:after,[dir] .lv-editorial-media.-gradient-half:after{left:0;right:0}.lv-editorial-media.-gradient-full:after{top:0}[dir] .lv-editorial-media.-gradient-full:after{background:rgba(var(--gradient-color),var(--gradient-opacity-full))}.lv-editorial-media.-gradient-half:after{height:var(--gradient-height)}[dir] .lv-editorial-media.-gradient-half:after{background:linear-gradient(rgba(var(--gradient-color),0),rgba(var(--gradient-color),var(--gradient-opacity)))}.lv-editorial-media.-contrast{--gradient-color:255,255,255}.lv-editorial-media.-media-position-top img,.lv-editorial-media.-media-position-top video{-o-object-position:top;object-position:top}.lv-editorial-media.-media-position-bottom img,.lv-editorial-media.-media-position-bottom video{-o-object-position:bottom;object-position:bottom}.lv-editorial-media .lv-featured-products__button{z-index:2}', ""]), l.locals = {}, t.exports = l
        },
        967: function(t, e, r) {
            var content = r(1005);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("1189c83a", content, !0, {
                sourceMap: !1
            })
        },
        975: function(t, e, r) {
            "use strict";
            r.r(e);
            var l = r(75),
                n = r(148),
                o = {
                    components: {
                        Loader: l.default
                    },
                    props: {
                        src: {
                            type: String,
                            required: !0
                        },
                        options: {
                            type: Object,
                            default: () => ({})
                        },
                        uniqueId: {
                            type: [Number, String],
                            default: void 0
                        },
                        isActive: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: () => ({
                        player: null,
                        isVisible: !1,
                        pausedProgrammatically: !1,
                        componentUid: Object(n.a)()
                    }),
                    computed: {
                        isPaused() {
                            if (this.player) return this.player.isPaused
                        },
                        triggerPause() {
                            return !!this.player && (!this.isVisible || !this.isActive)
                        },
                        triggerPlay() {
                            return !!this.player && (!this.triggerPause && this.pausedProgrammatically && (this.options.autoplay || this.player.getCurrentTime() > 0))
                        }
                    },
                    watch: {
                        src() {
                            this.player && this.player.remove(), this.initPlayerInstance()
                        },
                        isPaused(t, e) {
                            void 0 !== e && this.$emit("pause-changed", t)
                        },
                        triggerPlay(t) {
                            t && (this.pausedProgrammatically = !1, this.player.play())
                        },
                        triggerPause(t) {
                            t && (this.player.isPaused ? this.player.pausedByUser = !0 : (this.pausedProgrammatically = !0, this.player.pause()))
                        },
                        isVisible: {
                            immediate: !0,
                            handler(t) {
                                t && !this.player && this.initPlayerInstance()
                            }
                        }
                    },
                    beforeDestroy() {
                        this.player && this.player.remove()
                    },
                    methods: {
                        initPlayerInstance() {
                            const t = this.$refs.videoContainer;
                            this.$lvRetrievePlayerInstance.bind(this)({
                                container: t,
                                src: this.src,
                                params: this.options,
                                uniqueId: this.uniqueId || this.componentUid
                            }).then((p => {
                                this.player = p, this.options.autoplay && this.player.setMute(this.options.muted || !0), document.documentElement.style.setProperty("--outline", "none")
                            }))
                        },
                        changeVisibility(t) {
                            this.isVisible = t
                        }
                    }
                },
                d = (r(1004), r(0)),
                component = Object(d.a)(o, (function() {
                    var t = this,
                        e = t._self._c;
                    return e("div", {
                        directives: [{
                            name: "on-visibility",
                            rawName: "v-on-visibility",
                            value: t.changeVisibility,
                            expression: "changeVisibility"
                        }],
                        staticClass: "lv-video-player"
                    }, [e("Loader", {
                        directives: [{
                            name: "show",
                            rawName: "v-show",
                            value: !t.player,
                            expression: "!player"
                        }]
                    }), t._v(" "), e("div", {
                        ref: "videoContainer",
                        staticClass: "lv-video-player__container"
                    })], 1)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        993: function(t, e, r) {
            var content = r(1059);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, r(10).default)("4a00c96c", content, !0, {
                sourceMap: !1
            })
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/ae8da-bc6e9.js.map