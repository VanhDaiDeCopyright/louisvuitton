(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [15, 112], {
        1167: function(t, e, l) {
            "use strict";
            l.r(e);
            l(82);
            var o = l(940),
                r = l(938),
                d = l(909),
                n = l(14),
                c = {
                    components: {
                        EditorialMedia: o.default,
                        EditorialTextBlock: r.default,
                        Slider: d.default
                    },
                    inheritAttrs: !1,
                    props: {
                        id: {
                            type: String,
                            default: "content-push-slider"
                        },
                        data: {
                            type: Array,
                            default: () => []
                        },
                        analyticValue: {
                            type: String,
                            default: void 0
                        },
                        centerText: {
                            type: [Boolean, String],
                            default: !1
                        },
                        buttonClass: {
                            type: String,
                            default: null
                        },
                        hasSlider: {
                            type: Object,
                            default: () => ({
                                mobile: !1,
                                desktop: !1
                            })
                        },
                        sliderOptions: {
                            type: Object,
                            default: () => ({
                                slidesPerView: "auto",
                                centeredSlides: !0,
                                autoHeight: !0,
                                outsideNavigation: !0
                            })
                        },
                        isCritical: {
                            type: Boolean,
                            defaul: !1
                        },
                        forceEven: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    computed: {
                        isSmall() {
                            return this.$store.getters[n.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s") && this.$store.state.isMediaQueryInit
                        },
                        dataComputed() {
                            if (!this.forceEven) return this.data;
                            return this.data.slice(0, 2 * Math.floor(this.data.length / 2))
                        },
                        sliderOptionsComputed() {
                            return { ...this.sliderOptions,
                                centeredSlides: this.isSmall
                            }
                        },
                        hasSliderComputed() {
                            return this.isSmall && this.hasSlider.mobile || this.hasSlider.desktop && !this.isSmall
                        }
                    },
                    methods: {
                        trackLinkClicked() {
                            let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                e = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : {},
                                l = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : 0;
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionId: t.title,
                                actionGa: /^.+_push_\d+$/.test(this.analyticValue) ? this.analyticValue.split("_push_")[0] : this.analyticValue,
                                labelGa: e.analyticValue || this.analyticValue,
                                actionPosition: "".concat(this.analyticValue, "_index_").concat(l + 1),
                                contentId: e.url,
                                contentType: e.redirectionType
                            }))
                        }
                    }
                },
                h = c,
                k = (l(2128), l(0)),
                component = Object(k.a)(h, (function() {
                    var t = this,
                        e = t._self._c;
                    return t.hasSliderComputed ? e("Slider", t._g({
                        staticClass: "lv-content-push-list -slider",
                        attrs: {
                            id: t.id,
                            items: t.dataComputed,
                            "has-mobile-dots": !0,
                            options: t.sliderOptionsComputed,
                            "item-class": "lv-content-push-list__slider-item",
                            "aria-live": "polite"
                        },
                        scopedSlots: t._u([{
                            key: "default",
                            fn: function(l) {
                                let {
                                    item: o,
                                    index: r,
                                    load: d,
                                    isOnViewport: n
                                } = l;
                                return [e("EditorialMedia", {
                                    staticClass: "lv-content-push-list__media",
                                    attrs: {
                                        load: d && n,
                                        "is-critical": t.isCritical && 0 === r,
                                        alt: o.altImage,
                                        data: o
                                    }
                                }), t._v(" "), e("EditorialTextBlock", t._b({
                                    staticClass: "lv-content-push-list__content",
                                    class: {
                                        "-no-text": !o.title && !o.description
                                    },
                                    attrs: {
                                        data: o,
                                        "center-text": t.centerText,
                                        "title-class-mobile": "heading-s",
                                        "title-class-desktop": "heading-s",
                                        "button-class": t.buttonClass
                                    },
                                    on: {
                                        "link-clicked": e => t.trackLinkClicked(o, e, r)
                                    }
                                }, "EditorialTextBlock", t.$attrs, !1))]
                            }
                        }], null, !1, 4089395200)
                    }, t.$listeners)) : e("ul", {
                        staticClass: "lv-content-push-list lv-list",
                        class: {
                            "-force-even": t.forceEven, "-single": 1 === t.data.length
                        }
                    }, t._l(t.dataComputed, (function(l, o) {
                        return e("li", {
                            key: o,
                            staticClass: "lv-content-push-list__item"
                        }, [e("EditorialMedia", {
                            staticClass: "lv-content-push-list__media",
                            attrs: {
                                lazy: "",
                                alt: l.altImage,
                                widths: t.forceEven ? {
                                    xs: "half",
                                    m: "quarter"
                                } : {
                                    xs: "full",
                                    m: "".concat(100 / t.data.length, "vw")
                                },
                                data: l,
                                "is-critical": t.isCritical
                            }
                        }), t._v(" "), e("EditorialTextBlock", t._b({
                            staticClass: "lv-content-push-list__content",
                            class: {
                                "-no-text": !l.title && !l.description
                            },
                            attrs: {
                                data: l,
                                "center-text": t.centerText,
                                "title-class-mobile": "heading-s",
                                "title-class-desktop": "heading-s",
                                "button-class": t.buttonClass
                            },
                            on: {
                                "link-clicked": e => t.trackLinkClicked(l, e, o)
                            }
                        }, "EditorialTextBlock", t.$attrs, !1))], 1)
                    })), 0)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        1609: function(t, e, l) {
            var content = l(2129);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, l(10).default)("36d80845", content, !0, {
                sourceMap: !1
            })
        },
        2128: function(t, e, l) {
            "use strict";
            l(1609)
        },
        2129: function(t, e, l) {
            var o = l(9)((function(i) {
                return i[1]
            }));
            o.push([t.i, '.lv-content-push-list{display:flex;flex-direction:column;gap:1rem}@media screen and (min-width:48rem){.lv-content-push-list{flex:1 1 0;flex-direction:row;justify-content:center}}.lv-content-push-list__item{width:100%}@media screen and (min-width:48rem){.lv-content-push-list__item{width:33.3333333333%}}.lv-content-push-list__content{max-width:none}[dir] .lv-content-push-list__content{margin-top:1rem}[dir] .lv-content-push-list__content.-no-text{margin:.75rem 0 .5rem}@media screen and (min-width:48rem){[dir] .lv-content-push-list__content.-no-text{margin:1rem 0 .75rem}}[dir] .lv-content-push-list__content.-no-text .lv-smart-link.-default{box-shadow:none}.lv-content-push-list.-force-even{-moz-column-gap:0;column-gap:0;display:flex;flex-flow:row wrap}[dir] .lv-content-push-list.-force-even{margin:0 -.5rem}.lv-content-push-list.-force-even .lv-content-push-list__item{box-sizing:border-box;width:50%}[dir] .lv-content-push-list.-force-even .lv-content-push-list__item{padding:0 .5rem}@media screen and (min-width:48rem){.lv-content-push-list.-force-even .lv-content-push-list__item{width:25%}}.lv-content-push-list.-slider .lv-content-push-list__slider-item{box-sizing:border-box;width:86.9565217391%}[dir] .lv-content-push-list.-slider .lv-content-push-list__slider-item{padding:0 .5rem}@media screen and (min-width:48rem){.lv-content-push-list.-slider .lv-content-push-list__slider-item{width:33.3333333333%}}.lv-content-push-list.-slider .lv-content-push-list__slider-item,.lv-content-push-list.-slider .lv-content-push-list__slider-item .lv-editorial-text-block__ctas div:not(:first-child) .lv-smart-link,.lv-content-push-list__item,.lv-content-push-list__item .lv-editorial-text-block__ctas div:not(:first-child) .lv-smart-link{position:relative}.lv-content-push-list.-slider .lv-content-push-list__slider-item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:after,.lv-content-push-list__item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:after{content:"";height:100%;position:absolute;top:0;width:100%}[dir=ltr] .lv-content-push-list.-slider .lv-content-push-list__slider-item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:after,[dir=ltr] .lv-content-push-list__item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:after{left:0}[dir=rtl] .lv-content-push-list.-slider .lv-content-push-list__slider-item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:after,[dir=rtl] .lv-content-push-list__item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:after{right:0}.keyboard-is-used .lv-content-push-list.-slider .lv-content-push-list__slider-item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:focus,.keyboard-is-used .lv-content-push-list__item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:focus{outline:0}[dir] .keyboard-is-used .lv-content-push-list.-slider .lv-content-push-list__slider-item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:focus:after,[dir] .keyboard-is-used .lv-content-push-list__item .lv-editorial-text-block__ctas div:first-child .lv-smart-link:focus:after{box-shadow:inset 0 0 0 2px #000}', ""]), o.locals = {}, t.exports = o
        },
        936: function(t, e, l) {
            var content = l(951);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, l(10).default)("452be619", content, !0, {
                sourceMap: !1
            })
        },
        937: function(t, e, l) {
            var content = l(955);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, l(10).default)("31484720", content, !0, {
                sourceMap: !1
            })
        },
        938: function(t, e, l) {
            "use strict";
            l.r(e);
            l(82);
            var o = {
                    components: {
                        SmartLink: l(17).default
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
                                l = e.length ? e.filter((function() {
                                    let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                    return t && t.url && t.label
                                })) : [];
                            return l.map((function() {
                                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                                const o = (arguments.length > 1 ? arguments[1] : void 0) === l.length - 1 ? "-primary" : "-secondary";
                                return { ...e,
                                    class: t.hasOppositeCtas ? "".concat(o).concat(t.contrast ? " -light" : "") : t.buttonClass || e.class
                                }
                            }))
                        }
                    }
                },
                r = o,
                d = (l(950), l(0)),
                component = Object(d.a)(r, (function() {
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
                    }, t._l(t.ctas, (function(l, o) {
                        return e("div", {
                            key: o
                        }, [e("SmartLink", {
                            class: l.class ? "lv-button ".concat(l.class) : "-default",
                            attrs: {
                                url: l.url,
                                type: l.type || l.identifier,
                                "no-spa": l.noSpa
                            },
                            nativeOn: {
                                click: function(e) {
                                    return t.$emit("link-clicked", l)
                                }
                            }
                        }, [t._v("\n        " + t._s(l.label) + "\n      ")])], 1)
                    })), 0) : t._e(), t._v(" "), t._t("default")], 2)
                }), [], !1, null, null, null);
            e.default = component.exports
        },
        940: function(t, e, l) {
            "use strict";
            l.r(e);
            l(3);
            var o = l(931),
                r = l(87),
                d = l(945),
                n = l(14),
                c = {
                    components: {
                        VideoLoop: o.default,
                        VideoPlayer: () => l.e(116).then(l.bind(null, 975)),
                        ResponsivePicture: r.default,
                        EditorialFeaturedProducts: () => l.e(434).then(l.bind(null, 1144))
                    },
                    mixins: [d.a],
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
                            return this.$store.getters[n.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
                        },
                        hasVideoPlayer() {
                            return this.itemData.video && this.itemData.player
                        },
                        hasCaptionGuttersClass() {
                            return !0 === this.hasCaptionGutters || "mobile" === this.hasCaptionGutters && this.isSmall || "desktop" === this.hasCaptionGutters && !this.isSmall
                        }
                    }
                },
                h = (l(954), l(0)),
                component = Object(h.a)(c, (function() {
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
        945: function(t, e, l) {
            "use strict";
            l(328), l(3);
            var o = l(14);
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
                        return this.$store.getters[o.MEDIA_QUERIES_IS_EQUAL_OR_SMALLER_THAN]("s")
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
                            const l = "string" == typeof t[e] ? t[e] : t[e][this.safeDisplay ? "mobileSafeDisplay" : "mobile"],
                                o = "string" == typeof t[e] ? null : t[e][this.safeDisplay ? "desktopSafeDisplay" : "desktop"];
                            return {
                                xs: l,
                                ...o && {
                                    m: o
                                }
                            }
                        }
                        return t && t[e] && "object" == typeof t[e] ? this.isSmall ? t[e][this.safeDisplay ? "mobileSafeDisplay" : "mobile"] : t[e][this.safeDisplay ? "desktopSafeDisplay" : "desktop"] : t[e]
                    },
                    addBaseUrl() {
                        let t = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        return Object.fromEntries(Object.entries(t).map((t => {
                            let [e, l] = t;
                            return [e, "".concat(this.$baseURL || "").concat(l)]
                        })))
                    }
                }
            }
        },
        950: function(t, e, l) {
            "use strict";
            l(936)
        },
        951: function(t, e, l) {
            var o = l(9)((function(i) {
                return i[1]
            }));
            o.push([t.i, ".lv-editorial-text-block{max-width:32.5rem}@media screen and (min-width:48rem){.lv-editorial-text-block .heading-xxl-desktop{font-size:4rem;font-weight:400;letter-spacing:.025rem;line-height:4rem}.lv-editorial-text-block .heading-xxl-desktop.-light{color:#fff}.lv-editorial-text-block .heading-xxl-desktop.-dark{color:#000}.lv-editorial-text-block .heading-xxl-desktop:lang(ko),.lv-editorial-text-block .heading-xxl-desktop:lang(zh){font-size:2.6rem}.lv-editorial-text-block .heading-xxl-desktop:lang(ja){font-size:2rem}.lv-editorial-text-block .heading-xxl-desktop:lang(ru){font-size:3.4rem}.lv-editorial-text-block .heading-xxl-desktop:lang(ja),.lv-editorial-text-block .heading-xxl-desktop:lang(ko),.lv-editorial-text-block .heading-xxl-desktop:lang(th),.lv-editorial-text-block .heading-xxl-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xxl-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-xxl-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-xl-desktop{font-size:3rem;font-weight:400;letter-spacing:.025rem;line-height:3.5rem}.lv-editorial-text-block .heading-xl-desktop.-light{color:#fff}.lv-editorial-text-block .heading-xl-desktop.-dark{color:#000}.lv-editorial-text-block .heading-xl-desktop:lang(ko),.lv-editorial-text-block .heading-xl-desktop:lang(zh){font-size:1.95rem}.lv-editorial-text-block .heading-xl-desktop:lang(ja){font-size:1.5rem}.lv-editorial-text-block .heading-xl-desktop:lang(ru){font-size:2.55rem}.lv-editorial-text-block .heading-xl-desktop:lang(ja),.lv-editorial-text-block .heading-xl-desktop:lang(ko),.lv-editorial-text-block .heading-xl-desktop:lang(th),.lv-editorial-text-block .heading-xl-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xl-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-xl-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-l-desktop{font-size:2rem;font-weight:400;letter-spacing:.025rem;line-height:2.5rem}.lv-editorial-text-block .heading-l-desktop.-light{color:#fff}.lv-editorial-text-block .heading-l-desktop.-dark{color:#000}.lv-editorial-text-block .heading-l-desktop:lang(ja),.lv-editorial-text-block .heading-l-desktop:lang(ko),.lv-editorial-text-block .heading-l-desktop:lang(zh){font-size:1.5rem}.lv-editorial-text-block .heading-l-desktop:lang(ja),.lv-editorial-text-block .heading-l-desktop:lang(ko),.lv-editorial-text-block .heading-l-desktop:lang(th),.lv-editorial-text-block .heading-l-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-l-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-l-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-m-desktop{font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:1.75rem}.lv-editorial-text-block .heading-m-desktop.-light{color:#fff}.lv-editorial-text-block .heading-m-desktop.-dark{color:#000}.lv-editorial-text-block .heading-m-desktop:lang(ko),.lv-editorial-text-block .heading-m-desktop:lang(zh){font-size:1.35rem}.lv-editorial-text-block .heading-m-desktop:lang(ja){font-size:1.2rem}.lv-editorial-text-block .heading-m-desktop:lang(ja),.lv-editorial-text-block .heading-m-desktop:lang(ko),.lv-editorial-text-block .heading-m-desktop:lang(th),.lv-editorial-text-block .heading-m-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-m-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-m-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-s-desktop{font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-editorial-text-block .heading-s-desktop.-light{color:#fff}.lv-editorial-text-block .heading-s-desktop.-dark{color:#000}.lv-editorial-text-block .heading-s-desktop:lang(ko),.lv-editorial-text-block .heading-s-desktop:lang(zh){font-size:1.0125rem}.lv-editorial-text-block .heading-s-desktop:lang(ja){font-size:.9rem}.lv-editorial-text-block .heading-s-desktop:lang(ja),.lv-editorial-text-block .heading-s-desktop:lang(ko),.lv-editorial-text-block .heading-s-desktop:lang(th),.lv-editorial-text-block .heading-s-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-s-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-s-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .heading-xs-desktop{font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-editorial-text-block .heading-xs-desktop.-light{color:#fff}.lv-editorial-text-block .heading-xs-desktop.-dark{color:#000}.lv-editorial-text-block .heading-xs-desktop:lang(ko),.lv-editorial-text-block .heading-xs-desktop:lang(zh){font-size:.9rem}.lv-editorial-text-block .heading-xs-desktop:lang(ja){font-size:.8rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xs-desktop:lang(ko),.lv-editorial-text-block .heading-xs-desktop:lang(th),.lv-editorial-text-block .heading-xs-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .heading-xs-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .heading-xs-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .list-label-m-desktop{font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-editorial-text-block .list-label-m-desktop.-light{color:#fff}.lv-editorial-text-block .list-label-m-desktop.-dark{color:#000}.lv-editorial-text-block .list-label-m-desktop:lang(ko),.lv-editorial-text-block .list-label-m-desktop:lang(zh){font-size:.9rem}.lv-editorial-text-block .list-label-m-desktop:lang(ja){font-size:.8rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-m-desktop:lang(ko),.lv-editorial-text-block .list-label-m-desktop:lang(th),.lv-editorial-text-block .list-label-m-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-m-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .list-label-m-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .list-label-s-desktop{font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1rem}.lv-editorial-text-block .list-label-s-desktop.-light{color:#fff}.lv-editorial-text-block .list-label-s-desktop.-dark{color:#000}.lv-editorial-text-block .list-label-s-desktop:lang(ko),.lv-editorial-text-block .list-label-s-desktop:lang(zh){font-size:.7875rem}.lv-editorial-text-block .list-label-s-desktop:lang(ja){font-size:.7rem;font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-s-desktop:lang(ko),.lv-editorial-text-block .list-label-s-desktop:lang(th),.lv-editorial-text-block .list-label-s-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .list-label-s-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .list-label-s-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .body-l-desktop{font-size:1.5rem;font-weight:400;letter-spacing:.025rem;line-height:2rem}.lv-editorial-text-block .body-l-desktop.-light{color:#fff}.lv-editorial-text-block .body-l-desktop.-dark{color:#000}.lv-editorial-text-block .body-l-desktop:lang(ko),.lv-editorial-text-block .body-l-desktop:lang(zh){font-size:1.35rem}.lv-editorial-text-block .body-l-desktop:lang(ja){font-size:1.2rem}.lv-editorial-text-block .body-l-desktop:lang(ja),.lv-editorial-text-block .body-l-desktop:lang(ko),.lv-editorial-text-block .body-l-desktop:lang(th),.lv-editorial-text-block .body-l-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .body-l-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .body-l-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .body-m-desktop{font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-editorial-text-block .body-m-desktop.-light{color:#fff}.lv-editorial-text-block .body-m-desktop.-dark{color:#000}.lv-editorial-text-block .body-m-desktop:lang(ko),.lv-editorial-text-block .body-m-desktop:lang(zh){font-size:.9rem}.lv-editorial-text-block .body-m-desktop:lang(ja){font-size:.8rem}.lv-editorial-text-block .body-m-desktop:lang(ja),.lv-editorial-text-block .body-m-desktop:lang(ko),.lv-editorial-text-block .body-m-desktop:lang(th),.lv-editorial-text-block .body-m-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .body-m-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .body-m-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .body-s-desktop{font-size:.875rem;font-weight:400;letter-spacing:.025rem;line-height:1.25rem}.lv-editorial-text-block .body-s-desktop.-light{color:#fff}.lv-editorial-text-block .body-s-desktop.-dark{color:#000}.lv-editorial-text-block .body-s-desktop:lang(ko),.lv-editorial-text-block .body-s-desktop:lang(zh){font-size:.7875rem}.lv-editorial-text-block .body-s-desktop:lang(ja){font-size:.7rem}.lv-editorial-text-block .body-s-desktop:lang(ja),.lv-editorial-text-block .body-s-desktop:lang(ko),.lv-editorial-text-block .body-s-desktop:lang(th),.lv-editorial-text-block .body-s-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .body-s-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .body-s-desktop:lang(vi){line-height:1.3}.lv-editorial-text-block .overline-desktop{font-size:.625rem;font-weight:400;letter-spacing:.0625rem;line-height:1rem;text-transform:uppercase}.lv-editorial-text-block .overline-desktop.-light{color:#fff}.lv-editorial-text-block .overline-desktop.-dark{color:#000}.lv-editorial-text-block .overline-desktop:lang(ar),.lv-editorial-text-block .overline-desktop:lang(zh){font-size:.6875rem}.lv-editorial-text-block .overline-desktop:lang(ja),.lv-editorial-text-block .overline-desktop:lang(ko),.lv-editorial-text-block .overline-desktop:lang(th),.lv-editorial-text-block .overline-desktop:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-editorial-text-block .overline-desktop:lang(th){word-break:break-word}.lv-editorial-text-block .overline-desktop:lang(vi){line-height:1.3}}.lv-editorial-text-block__pretitle{display:block}[dir] .lv-editorial-text-block__pretitle{margin:0 0 .5rem}.lv-editorial-text-block__title{word-wrap:break-word}[dir] .lv-editorial-text-block__title{margin:0 0 1rem}[dir] .lv-editorial-text-block__description,[dir] .lv-editorial-text-block__description p:first-child{margin-top:0}[dir] .lv-editorial-text-block__description *,[dir] .lv-editorial-text-block__description:last-child{margin-bottom:0}[dir] .lv-editorial-text-block__description p~p{margin:1.5rem 0 0}.lv-editorial-text-block__ctas{display:flex;flex-wrap:wrap;gap:1rem}[dir] .lv-editorial-text-block__ctas{padding-top:2rem}[dir] .lv-editorial-text-block__ctas:only-child,[dir] .lv-editorial-text-block__title+.lv-editorial-text-block__ctas{padding-top:0}[dir] .lv-editorial-text-block__title+.lv-editorial-text-block__ctas.-styled{padding-top:1rem}@media screen and (min-width:48rem){.lv-editorial-text-block.-wide{max-width:66.66vw}[dir] .lv-editorial-text-block.-wide{margin-left:auto;margin-right:auto}[dir] .lv-editorial-text-block.-wide .lv-editorial-text-block__title{text-align:center}}@media screen and (min-width:68.75rem){.lv-editorial-text-block.-wide{max-width:60%}}[dir] .lv-editorial-text-block.-center,[dir] .lv-editorial-text-block.-center-mobile{margin-left:auto;margin-right:auto;text-align:center}.lv-editorial-text-block.-center .lv-editorial-text-block__ctas,.lv-editorial-text-block.-center-mobile .lv-editorial-text-block__ctas{justify-content:center}@media screen and (min-width:48rem){[dir=ltr] .lv-editorial-text-block.-center-mobile{text-align:left}[dir=rtl] .lv-editorial-text-block.-center-mobile{text-align:right}.lv-editorial-text-block.-center-mobile .lv-editorial-text-block__ctas{justify-content:flex-start}[dir] .lv-editorial-text-block.-center-desktop{margin-left:auto;margin-right:auto;text-align:center}.lv-editorial-text-block.-center-desktop .lv-editorial-text-block__ctas{justify-content:center}}.lv-editorial-text-block.-button-fullwidth .lv-editorial-text-block__ctas .lv-button{min-width:100%}@media screen and (min-width:48rem){.lv-editorial-text-block.-button-fullwidth .lv-editorial-text-block__ctas .lv-button{min-width:15rem}}.lv-editorial-text-block__ctas .lv-smart-link.-default,.lv-editorial-text-block__description a{color:#000;color:currentColor;-webkit-text-decoration:none;text-decoration:none}[dir] .lv-editorial-text-block__ctas .lv-smart-link.-default,[dir] .lv-editorial-text-block__description a{box-shadow:0 2px 0 -1px currentColor;cursor:pointer;transition:color .3s cubic-bezier(.39,.575,.565,1)}@media(forced-colors:active){.lv-editorial-text-block__ctas .lv-smart-link.-default,.lv-editorial-text-block__description a{-webkit-text-decoration:underline;text-decoration:underline}[dir] .lv-editorial-text-block__ctas .lv-smart-link.-default,[dir] .lv-editorial-text-block__description a{box-shadow:none}}@media(-moz-touch-enabled:0),(-webkit-hover:hover),(hover:hover)and (pointer:fine){.lv-editorial-text-block__ctas .lv-smart-link.-default:hover,.lv-editorial-text-block__description a:hover{color:rgba(0,0,0,.6)}}.keyboard-is-used .lv-editorial-text-block__ctas .lv-smart-link.-default:focus,.keyboard-is-used .lv-editorial-text-block__description a:focus{color:rgba(0,0,0,.6)}.lv-editorial-text-block__ctas .lv-smart-link.-default:disabled,.lv-editorial-text-block__description a:disabled{color:rgba(0,0,0,.4)}[dir] .lv-editorial-text-block__ctas .lv-smart-link.-default:disabled,[dir] .lv-editorial-text-block__description a:disabled{cursor:auto}.keyboard-is-used .lv-editorial-text-block__ctas .lv-smart-link.-default:focus,.keyboard-is-used .lv-editorial-text-block__description a:focus,.lv-editorial-text-block__ctas .lv-smart-link.-default:hover,.lv-editorial-text-block__description a:hover{color:currentColor}", ""]), o.locals = {}, t.exports = o
        },
        954: function(t, e, l) {
            "use strict";
            l(937)
        },
        955: function(t, e, l) {
            var o = l(9)((function(i) {
                return i[1]
            }));
            o.push([t.i, '.lv-editorial-media{--gradient-color:0,0,0;--gradient-opacity:0.5;--gradient-opacity-full:0.3;--gradient-height:50%}.-enhanced-contrast .lv-editorial-media{--gradient-opacity:0.9;--gradient-opacity-full:0.7;--gradient-height:100%}.lv-editorial-media.-hero{--buffer:6vh}.-header-is-immersive .lv-editorial-media.-hero{--header-height:0px}.lv-editorial-media.-hero,.lv-editorial-media.-hero .lv-editorial-media__placeholder{max-height:calc(100vh - var(--buffer) - var(--header-height) - var(--banner-height));max-height:calc(var(--vh, 1vh)*100 - var(--buffer) - var(--header-height) - var(--banner-height));overflow:hidden}[dir] .lv-editorial-media__caption{margin-top:1rem}[dir] .lv-editorial-media__caption.-center{text-align:center}[dir=ltr] .lv-editorial-media__caption.-right{text-align:right}[dir=rtl] .lv-editorial-media__caption.-right{text-align:left}.lv-editorial-media__caption.-has-gutters{box-sizing:border-box}[dir] .lv-editorial-media__caption.-has-gutters{padding-left:6.4vw;padding-right:6.4vw}@media screen and (min-width:48rem){[dir] .lv-editorial-media__caption.-has-gutters{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:64rem){[dir] .lv-editorial-media__caption.-has-gutters{padding-left:3.125vw;padding-right:3.125vw}}@media screen and (min-width:90rem){[dir] .lv-editorial-media__caption.-has-gutters{padding-left:3.3333333333vw;padding-right:3.3333333333vw}}.lv-editorial-media.-gradient-full:after,.lv-editorial-media.-gradient-half:after{bottom:0;content:"";display:block;position:absolute}[dir] .lv-editorial-media.-gradient-full:after,[dir] .lv-editorial-media.-gradient-half:after{left:0;right:0}.lv-editorial-media.-gradient-full:after{top:0}[dir] .lv-editorial-media.-gradient-full:after{background:rgba(var(--gradient-color),var(--gradient-opacity-full))}.lv-editorial-media.-gradient-half:after{height:var(--gradient-height)}[dir] .lv-editorial-media.-gradient-half:after{background:linear-gradient(rgba(var(--gradient-color),0),rgba(var(--gradient-color),var(--gradient-opacity)))}.lv-editorial-media.-contrast{--gradient-color:255,255,255}.lv-editorial-media.-media-position-top img,.lv-editorial-media.-media-position-top video{-o-object-position:top;object-position:top}.lv-editorial-media.-media-position-bottom img,.lv-editorial-media.-media-position-bottom video{-o-object-position:bottom;object-position:bottom}.lv-editorial-media .lv-featured-products__button{z-index:2}', ""]), o.locals = {}, t.exports = o
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/c0a70-402ea.js.map