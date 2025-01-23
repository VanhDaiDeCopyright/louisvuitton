(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [11], {
        1161: function(e, t, n) {
            "use strict";
            n.d(t, "b", (function() {
                return f
            })), n.d(t, "c", (function() {
                return k
            })), n.d(t, "a", (function() {
                return I
            })), n.d(t, "d", (function() {
                return T
            })), n.d(t, "e", (function() {
                return D
            })), n.d(t, "f", (function() {
                return L
            })), n.d(t, "g", (function() {
                return A
            })), n.d(t, "h", (function() {
                return R
            }));
            n(82), n(3), n(25);
            var r = n(7),
                l = n.n(r),
                o = n(34),
                c = n(24),
                d = n(113),
                m = n(127);
            const h = ["headline", "keywords", "datePublished", "alternativeHeadline", "url", "image", "highEndTemplate"],
                f = {
                    DIPTYQUE: "diptyque",
                    CTA: "cta",
                    SLIDER: "slider",
                    IMAGE: "image",
                    KICKER: "kicker",
                    MOODBOARD: "moodboard",
                    QUOTE: "quote",
                    SHOP: "shop",
                    TEXT: "text",
                    VIDEO: "video",
                    WATCH: "watch",
                    GRID: "grid"
                },
                P = {
                    diptyque: f.DIPTYQUE,
                    WebPage: f.CTA,
                    Collection: f.SLIDER,
                    ImageObject: f.IMAGE,
                    articleKicker: f.KICKER,
                    moodboard: f.MOODBOARD,
                    Quotation: f.QUOTE,
                    ItemList: f.SHOP,
                    CreativeWork: f.TEXT,
                    VideoObject: f.VIDEO,
                    GridGallery: f.GRID
                },
                y = {
                    diptyque: f.DIPTYQUE,
                    articleExploreCampain: f.CTA,
                    articleSlideshow: f.SLIDER,
                    articleImage: f.IMAGE,
                    articleKicker: f.KICKER,
                    moodboard: f.MOODBOARD,
                    articleQuote: f.QUOTE,
                    shopTheSelection: f.SHOP,
                    articleText: f.TEXT,
                    articleVideo: f.VIDEO
                },
                k = [f.VIDEO, f.GRID, f.IMAGE, f.DIPTYQUE, f.KICKER, f.MOODBOARD, f.WATCH, f.SLIDER],
                I = [f.DIPTYQUE, f.KICKER, f.WATCH];
            let E = 0;

            function O(e, t) {
                let n = arguments.length > 2 && void 0 !== arguments[2] && arguments[2];
                if (e = e || [], !t) {
                    const t = {};
                    return e.forEach((img => {
                        if (!img) return;
                        const {
                            version: e,
                            url: n
                        } = img;
                        e && (t[e] = Object(c.f)(n))
                    })), t
                }
                if (t instanceof Array) {
                    const n = {};
                    return t.forEach((t => {
                        const {
                            url: r
                        } = e.find((image => image.version === t)) || {};
                        n[t] = Object(c.f)(r)
                    })), n
                }
                const {
                    url: r
                } = e.find((image => image.version === t)) || {};
                return Object(c.f)(r, n)
            }

            function v() {
                var e;
                return (null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).find((e => {
                    let {
                        url: t
                    } = e;
                    return !!t
                }))) || void 0 === e ? void 0 : e.description) || ""
            }

            function T(e) {
                const article = Object(o.e)(e, h);
                if (e.additionalProperty && e.additionalProperty.forEach((e => {
                        let {
                            name: t,
                            value: n
                        } = e;
                        article[t] = n
                    })), e.hasPart) {
                    if (e.hasPart.map((e => {
                            const t = ((e.additionalProperty || []).find((e => {
                                let {
                                    name: t
                                } = e;
                                return "mode" === t
                            })) || {}).value;
                            return "Collection" === e["@type"] && "grid" === t && (e["@type"] = "GridGallery"), e
                        })), "CreativeWork" === e.hasPart[0]["@type"] || "WebPage" === e.hasPart[0]["@type"] || "GridGallery" === e.hasPart[0]["@type"]) {
                        const t = (e.hasPart || []).map((s => C(s, !1))),
                            n = {};
                        article.hero = n, article.sections = t
                    } else {
                        const [t, ...n] = e.hasPart.map(((s, i) => C(s, 0 === i)));
                        article.hero = t, article.sections = n
                    }
                    article.sections = article.sections.filter((section => null !== section)), article.sections = function() {
                        let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : [];
                        return e.reduce(((e, t, n) => {
                            if (t.type === f.CTA) {
                                const r = {
                                        url: t.url,
                                        label: t.name,
                                        type: "external" !== t.identifier ? "internal" : "external"
                                    },
                                    l = n > 0 ? e[e.length - 1] : null;
                                return l && l.type === f.TEXT && l.ctasOnly ? (e[e.length - 1].ctaList.push(r), e) : [...e, {
                                    type: f.TEXT,
                                    ctasOnly: !0,
                                    props: {
                                        buttonClass: "-secondary"
                                    },
                                    ctaList: [r]
                                }]
                            }
                            return [...e, t]
                        }), [])
                    }(article.sections)
                }
                return article.shareImage = O(e.image, "DI1", !0), article.categoryLabel = e.articleSection, article
            }

            function D(e) {
                const article = { ...e
                };
                return article.filenames = O(article.image, ["DI2"]), article.description = v(article.image), delete article.image, article
            }

            function C(e, t) {
                const section = {
                    type: P[e["@type"]]
                };
                if (section.type === f.IMAGE)
                    if (t) {
                        const {
                            description: t
                        } = e.image[0];
                        section.description = t, section.filenames = O(e.image)
                    } else {
                        if ("" === e.image[0].url) return null;
                        const {
                            url: t,
                            description: n,
                            version: r
                        } = e.image[0];
                        section.filename = Object(c.f)(t), section.description = n, section.format = r
                    }
                else if (section.type === f.SLIDER) t || (E += 1), section.sliderId = "slider_".concat(E), section.mode = (e.additionalProperty.find((e => {
                    let {
                        name: t
                    } = e;
                    return "mode" === t
                })) || {
                    value: "full"
                }).value, section.slides = (e.hasPart || []).map((e => ({
                    video: "VideoObject" === e["@type"] ? e.url : null,
                    image: "ImageObject" === e["@type"] ? Object(c.f)(e.url) : null,
                    caption: e.caption,
                    description: e.description,
                    ratio: e.version.toLowerCase()
                }))).filter((e => {
                    let {
                        image: image,
                        video: video
                    } = e;
                    return image || video
                }));
                else if (section.type === f.GRID) section.items = (e.hasPart || []).map((e => {
                    const data = {
                            video: "VideoObject" === e["@type"] ? e.url : null,
                            image: "ImageObject" === e["@type"] ? Object(c.f)(e.url) : null,
                            caption: e.caption,
                            description: e.descriptionPanel,
                            title: e.titlePanel,
                            skus: (e.itemListElement || []).map((e => Object(m.i)(e.skuInformation))),
                            ratio: e.version.toLowerCase()
                        },
                        t = e.subjectOf[0];
                    return t.url && (data.link = {
                        url: t.url,
                        label: t.name,
                        type: t.identifier.toLowerCase()
                    }), data
                }));
                else if (section.type === f.VIDEO) {
                    if ("" === e.url) return null;
                    section.url = "//".concat(e.url.split("//")[1])
                } else {
                    if (section.type === f.SHOP) {
                        const {
                            name: title,
                            description: t,
                            itemListElement: n,
                            subjectOf: r
                        } = e, l = {
                            skus: (n || []).map((e => Object(m.i)(e.skuInformation))),
                            title: title,
                            description: t,
                            ctaList: r.filter((e => "" !== e.name && "" !== e.url)).map((e => ({
                                identifier: e.identifier.toLowerCase(),
                                url: e.url,
                                label: e.name
                            })))
                        };
                        return { ...section,
                            ...l
                        }
                    }
                    if (section.type === f.MOODBOARD) {
                        const t = ["FirstImage", "SecondImage", "ThirdImage"],
                            {
                                name: title,
                                description: n,
                                additionalProperty: r
                            } = e;
                        return { ...section,
                            title: title,
                            description: n,
                            ctaList: M(r),
                            items: (r.filter((e => {
                                let {
                                    name: n
                                } = e;
                                return t.includes(n)
                            })) || []).map((e => ({
                                image: j(e.value.mobileImage)
                            })))
                        }
                    }
                    if (section.type === f.DIPTYQUE) {
                        var n;
                        const {
                            text: title,
                            description: t,
                            additionalProperty: r
                        } = e;
                        E++;
                        const l = {
                            ExternalDots: "dotsOutside",
                            ReverseOrder: "reverse"
                        };
                        return { ...section,
                            props: {
                                sliderId: "slider_".concat(E),
                                ...Object.assign({}, ...r.filter((e => {
                                    let {
                                        name: t
                                    } = e;
                                    return Object.keys(l).includes(t)
                                })).map((e => ({
                                    [l[e.name]]: e.value
                                }))))
                            },
                            title: title,
                            description: t,
                            items: ((null === (n = r.find((e => {
                                let {
                                    name: t
                                } = e;
                                return "Slides" === t
                            }))) || void 0 === n || null === (n = n.value) || void 0 === n ? void 0 : n.slides) || []).map((e => ({
                                image: {
                                    mobile: j(e.mobileDII),
                                    desktop: j(e.desktopDI3)
                                },
                                ...e.skus && {
                                    products: e.skus.split(",")
                                }
                            }))),
                            ctaList: M(r)
                        }
                    }
                    if (section.type === f.KICKER) {
                        const {
                            text: title,
                            description: t,
                            additionalProperty: n
                        } = e;
                        return { ...section,
                            content: {
                                title: title,
                                description: t,
                                ctaList: M(n)
                            },
                            image: {
                                mobile: j(n.find((e => {
                                    let {
                                        name: t
                                    } = e;
                                    return "mobile" === t
                                })).value),
                                desktop: j(n.find((e => {
                                    let {
                                        name: t
                                    } = e;
                                    return "desktop" === t
                                })).value)
                            }
                        }
                    }
                    if (section.type === f.QUOTE) return { ...section,
                        quote: e.text,
                        author: (e.creator || {}).name
                    };
                    if (section.type === f.TEXT) return { ...section,
                        title: e.name,
                        description: e.text,
                        ctaList: M(e.additionalProperty)
                    };
                    if (section.type === f.CTA && "" === e.url) return null;
                    Object.assign(section, e), delete section["@type"]
                }
                return section
            }

            function L(e) {
                const t = { ...e
                    },
                    n = l()(t, "mainArticle.image", []);
                return t.filenames = O(n, ["DI2", "DI3"]), t.description = v(t.mainArticle.image), t.tags = t.tags || [], t
            }

            function A() {
                let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                    t = arguments.length > 1 && void 0 !== arguments[1] ? arguments[1] : [],
                    n = arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : [];
                const r = (e.image || []).map((img => img.version));
                e.filenames = O(e.image, r), e.description = v(e.image), delete e.image;
                const l = n.map((e => ({ ...e,
                    content: e.content.map((e => D(e)))
                })));
                return t = t.map((t => ({ ...t,
                    content: S(l, t.identifier, e)
                }))), {
                    mainArticle: e,
                    categories: t
                }
            }

            function S(e, t, n) {
                let r = [];
                const l = e.find((e => e.identifier === t));
                return l && (r = l.content || []), "thelatest" === t ? r.filter((article => article.identifier !== n.identifier)) : r
            }

            function j(path) {
                return path.replace(d.a, "")
            }

            function M() {
                var e;
                return ((null === (e = (arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : []).find((e => {
                    let {
                        name: t
                    } = e;
                    return "Ctas" === t
                }))) || void 0 === e || null === (e = e.value) || void 0 === e ? void 0 : e.ctas) || []).map((e => ({
                    label: e.label,
                    url: e.link
                })))
            }

            function R(e) {
                return {
                    sections: (e.content.magazineDailyArticleComponents || []).map((section => function(e) {
                        const section = {
                            type: y[e.componentType]
                        };
                        if (section.type === f.IMAGE) {
                            const image = e.magazineDailyMedias[0],
                                t = Object.values(image.pictures)[0];
                            if ("" === t) return null;
                            section.filename = j(t), section.description = image.alt, section.format = Object.keys(image.pictures)[0]
                        } else if (section.type === f.SLIDER) E += 1, section.sliderId = "slider_".concat(E), section.mode = e.componentMode, section.slides = (e.componentMedias || []).map((e => {
                            const t = (e.skuList || []).length > 0;
                            return {
                                image: j(e.componentMediaPath),
                                ratio: e.ratioFormat.toLowerCase(),
                                ...t && {
                                    products: e.skuList,
                                    modalTitle: e.componentPanelTitle || null,
                                    buttonLabel: (e.ctas || [])[0].CTALabel || null
                                }
                            }
                        })).filter((e => {
                            let {
                                image: image,
                                video: video
                            } = e;
                            return image || video
                        }));
                        else if (section.type === f.VIDEO) {
                            if ("" === e.target) return null;
                            const t = "//".concat(e.target.split("//")[1]);
                            if (e.watchTheFilm && e.mobileVideo && e.desktopVideo) {
                                const n = "//".concat(e.mobileVideo.split("//")[1]),
                                    r = "//".concat(e.desktopVideo.split("//")[1]);
                                return {
                                    type: f.WATCH,
                                    short: {
                                        mobile: n,
                                        desktop: r
                                    },
                                    film: {
                                        mobile: t,
                                        desktop: t
                                    },
                                    cta: {
                                        label: e.ctaWording
                                    }
                                }
                            }
                            section.url = t
                        } else {
                            if (section.type === f.SHOP) {
                                const {
                                    title: title,
                                    subTitle: t,
                                    skuList: n
                                } = e.shopTheSelection;
                                return { ...section,
                                    skus: n,
                                    title: title,
                                    description: t,
                                    ctaList: Object.keys(e.shopTheSelection).filter((e => e.startsWith("cta"))).map((t => {
                                        const {
                                            CTALabel: label,
                                            CTALink: n,
                                            redirectionType: r
                                        } = e.shopTheSelection[t];
                                        return {
                                            label: label,
                                            url: n,
                                            identifier: r
                                        }
                                    }))
                                }
                            }
                            if (section.type === f.MOODBOARD) {
                                const t = ["firstImage", "secondImage", "thirdImage"],
                                    {
                                        title: title,
                                        description: n
                                    } = e;
                                return { ...section,
                                    title: title,
                                    description: n,
                                    ctaList: (e.ctas || []).map((e => ({
                                        label: e.label,
                                        url: e.link
                                    }))),
                                    items: Object.keys(e).filter((e => t.includes(e))).map((t => ({
                                        image: j(e[t].mobileImage)
                                    })))
                                }
                            }
                            if (section.type === f.DIPTYQUE) {
                                const {
                                    title: title,
                                    description: t
                                } = e;
                                let n = (e.slides || []).map((e => ({
                                    image: {
                                        mobile: j(e.mobileDII),
                                        desktop: j(e.desktopDI3)
                                    },
                                    ...e.skus && {
                                        products: e.skus.split(",")
                                    }
                                })));
                                if (0 === n.length) {
                                    const {
                                        mobile: t,
                                        desktop: r,
                                        skus: l
                                    } = e.assetInfo;
                                    n = [{
                                        image: {
                                            mobile: j(t),
                                            desktop: j(r)
                                        },
                                        ...l && {
                                            products: l.split(",")
                                        }
                                    }]
                                }
                                return E++, { ...section,
                                    props: {
                                        sliderId: "slider_".concat(E),
                                        dotsOutside: e.externalDots,
                                        reverse: e.reverseOrder
                                    },
                                    title: title,
                                    description: t,
                                    ctaList: (e.ctas || []).map((e => ({
                                        label: e.label,
                                        url: e.link
                                    }))),
                                    items: n
                                }
                            }
                            if (section.type === f.KICKER) {
                                const {
                                    title: title,
                                    description: t
                                } = e;
                                return { ...section,
                                    content: {
                                        title: title,
                                        description: t,
                                        ctaList: (e.ctas || []).map((e => ({
                                            label: e.label,
                                            url: e.link
                                        })))
                                    },
                                    image: {
                                        mobile: j(e.mobile),
                                        desktop: j(e.desktop)
                                    }
                                }
                            }
                            if (section.type === f.QUOTE) {
                                const {
                                    author: t,
                                    content: n
                                } = e;
                                return { ...section,
                                    quote: n,
                                    author: t
                                }
                            }
                            if (section.type === f.TEXT) return { ...section,
                                title: e.title,
                                description: e.content,
                                ctaList: (e.ctas || []).map((e => ({
                                    label: e.label,
                                    url: e.link
                                })))
                            };
                            if (section.type === f.CTA) {
                                const {
                                    CTALabel: t,
                                    CTALink: n,
                                    redirectionType: r
                                } = e;
                                return n ? { ...section,
                                    name: t,
                                    url: n,
                                    identifier: r
                                } : null
                            }
                        }
                        return section
                    }(section))).filter((section => null !== section))
                }
            }
        },
        978: function(e, t, n) {
            "use strict";
            n.r(t), n.d(t, "GLOBAL_COMPONENTS", (function() {
                return y
            })), n.d(t, "DEFAULT_COMPONENT_NAME", (function() {
                return k
            }));
            n(3);
            var r = n(1),
                l = n(285),
                o = n(282),
                c = n(990),
                d = n(89),
                m = n(8),
                h = n(281),
                f = n(342),
                P = n(75);
            const y = {
                Loader: () => Promise.resolve().then(n.bind(null, 75)),
                SmartLink: () => Promise.resolve().then(n.bind(null, 17)),
                Accordion: () => n.e(143).then(n.bind(null, 957)),
                Tabs: () => Promise.resolve().then(n.bind(null, 329)),
                ExpandablePanel: () => Promise.resolve().then(n.bind(null, 325)),
                Modal: () => Promise.resolve().then(n.bind(null, 41)),
                ContentCard: () => n.e(550).then(n.bind(null, 953)),
                SwatchCard: () => n.e(555).then(n.bind(null, 1045)),
                GridGallery: () => n.e(455).then(n.bind(null, 1171)),
                AppStoreBadge: () => n.e(549).then(n.bind(null, 1043)),
                RemoteComponent: () => Promise.resolve().then(n.bind(null, 978)),
                SwitchButton: () => Promise.resolve().then(n.bind(null, 350)),
                Backdrop: () => Promise.resolve().then(n.bind(null, 153)),
                PaginatedList: () => Promise.resolve().then(n.bind(null, 337)),
                Icon: () => Promise.resolve().then(n.bind(null, 11)),
                SmartPicture: () => Promise.resolve().then(n.bind(null, 109)),
                ResponsivePicture: () => Promise.resolve().then(n.bind(null, 87)),
                VideoLoop: () => n.e(108).then(n.bind(null, 931)),
                VideoPlayer: () => n.e(116).then(n.bind(null, 975)),
                ProductCard: () => Promise.resolve().then(n.bind(null, 106)),
                FeaturedProducts: () => n.e(524).then(n.bind(null, 1012)),
                ProductZoomModal: () => Promise.all([n.e(0), n.e(27)]).then(n.bind(null, 1010)),
                ProductFeatures: () => n.e(446).then(n.bind(null, 1105)),
                ProductDescription: () => n.e(530).then(n.bind(null, 1172)),
                ProductCardPurchaseModal: () => n.e(463).then(n.bind(null, 1173)),
                MiniSlider: () => n.e(28).then(n.bind(null, 985)),
                Slider: () => Promise.all([n.e(0), n.e(141)]).then(n.bind(null, 909)),
                SearchInput: () => Promise.resolve().then(n.bind(null, 223)),
                FormContainer: () => Promise.resolve().then(n.bind(null, 323)),
                EditorialFeaturedProducts: () => n.e(409).then(n.bind(null, 1144)),
                EditorialGridGallery: () => Promise.all([n.e(0), n.e(92)]).then(n.bind(null, 1348)),
                Masthead: () => n.e(406).then(n.bind(null, 1033)),
                MastheadKicker: () => Promise.all([n.e(21), n.e(39), n.e(98)]).then(n.bind(null, 1349)),
                EditorialPush: () => n.e(405).then(n.bind(null, 974)),
                EditorialStickyNav: () => n.e(436).then(n.bind(null, 1350)),
                ShopTheSelection: () => n.e(113).then(n.bind(null, 1170)),
                EditorialWatchVideo: () => n.e(412).then(n.bind(null, 1311)),
                EditorialDiptyque: () => Promise.all([n.e(0), n.e(25)]).then(n.bind(null, 1303)),
                EditorialSlider: () => Promise.all([n.e(0), n.e(97)]).then(n.bind(null, 1071)),
                EditorialQuote: () => n.e(111).then(n.bind(null, 1169)),
                EditorialTextBlock: () => n.e(112).then(n.bind(null, 938)),
                LandingPage: () => Promise.all([n.e(21), n.e(39), n.e(502)]).then(n.bind(null, 1351)),
                EditorialMedia: () => n.e(421).then(n.bind(null, 940)),
                EditorialProductPush: () => n.e(501).then(n.bind(null, 1352)),
                EditorialMoodboard: () => Promise.all([n.e(0), n.e(94)]).then(n.bind(null, 1353)),
                ContentPushList: () => Promise.all([n.e(0), n.e(15), n.e(465)]).then(n.bind(null, 1167)),
                EditorialProductsGrid: () => n.e(410).then(n.bind(null, 1354)),
                EditorialHub: () => Promise.all([n.e(0), n.e(15), n.e(99)]).then(n.bind(null, 1306))
            };
            Object.entries(y).forEach((e => {
                let [t, component] = e;
                return r.default.component(t, component)
            }));
            const k = "vue-component";
            t.default = {
                name: "RemoteComponent",
                inheritAttrs: !1,
                props: {
                    package: {
                        type: String,
                        default: ""
                    },
                    template: {
                        type: String,
                        default: "default"
                    },
                    noBuild: {
                        type: Boolean,
                        default: !1
                    },
                    forceBuild: {
                        type: Boolean,
                        default: !1
                    },
                    ignoreNotFound: {
                        type: Boolean,
                        default: !1
                    },
                    canSetHeaderDisplay: {
                        type: Boolean,
                        default: !1
                    },
                    noSsr: {
                        type: Boolean,
                        default: !1
                    },
                    criticalPushId: {
                        type: String,
                        default: ""
                    }
                },
                data: () => ({
                    is: k,
                    hasError: !1
                }),
                computed: {
                    locale() {
                        return this.$store.state.localeContext.locale
                    },
                    packageData() {
                        return this.$store.state.editorial.packages
                    },
                    packageConfig() {
                        const [, e, t] = this.package.match(/(.*)\/([^/]+)$/) || [];
                        return {
                            packagePath: e,
                            packageId: t
                        }
                    },
                    templateFile() {
                        const e = "".concat(this.template, ".").concat("web", ".js");
                        return this.manifest ? this.manifest[e] : e
                    },
                    baseUrl() {
                        const {
                            packagePath: e,
                            packageId: t
                        } = this.packageConfig, {
                            getBaseURL: n
                        } = this.$aem.getHighEndPackage({
                            packagePath: e,
                            packageId: t
                        });
                        return n()
                    },
                    isLoading() {
                        return !this.hasError && this.is === k && !this.packageData[this.package]
                    }
                },
                async beforeMount() {
                    await this.loadData(), this.loadModule()
                },
                methods: {
                    applyMainComponent(component) {
                        component.baseURL = this.baseUrl, this.is = component
                    },
                    load(code) {
                        window[c.c] = r.default, this.applyMainComponent(code.default)
                    },
                    errorHandler(e) {
                        if (this.ignoreNotFound) return this.$emit("error", e), void(this.hasError = !0);
                        this.$pageErrorHandler(new h.a(e, 404), !1)
                    },
                    async loadModule() {
                        const e = {};
                        Object(m.n)(this) && (e.isOrigin = !0), Object(m.o)(this) && (e.isPreview = !0);
                        let t = "";
                        Object.keys(e).length && (t = "?".concat(Object(d.d)(e)));
                        const {
                            packagePath: n,
                            packageId: r
                        } = this.packageConfig, {
                            getFile: o
                        } = this.$aem.getHighEndPackage({
                            packagePath: n,
                            packageId: r
                        });
                        try {
                            const source = await o(this.templateFile),
                                component = await
                            import ("data:text/javascript;base64,".concat(Object(l.b)("".concat(source, "\n//cachebusting:").concat(Object(f.a)(), "\nexport default component.default"))));
                            this.load(component)
                        } catch (e) {
                            try {
                                const component = await
                                import ("/template/".concat(this.package, "/").concat(this.templateFile).concat(t));
                                this.load(component)
                            } catch (e) {
                                this.errorHandler(e)
                            }
                        }
                    },
                    async loadData() {
                        if (!this.manifest && this.$config.cache_busting_template_enable) {
                            const {
                                packagePath: e,
                                packageId: t
                            } = this.packageConfig, {
                                getFile: n
                            } = this.$aem.getHighEndPackage({
                                packagePath: e,
                                packageId: t
                            });
                            try {
                                this.manifest = await n("manifest.json", !0)
                            } catch (n) {
                                this.$logger.info("No manifest provided", {
                                    category: "template",
                                    packagePath: e,
                                    packageId: t
                                })
                            }
                        }
                        return this.$store.dispatch(o.EDITORIAL_LOAD_PACKAGE_ACTION, {
                            context: this,
                            url: this.package,
                            canSetHeaderDisplay: this.canSetHeaderDisplay
                        })
                    }
                },
                render(e) {
                    const t = { ...this.packageData[this.package]
                    };
                    return this.criticalPushId && t[this.criticalPushId] && (t[this.criticalPushId].props || (t[this.criticalPushId].props = {}), t[this.criticalPushId].props.isCritical = !0), e("div", {
                        class: ["lv-remote-component"],
                        style: {
                            height: "100%"
                        }
                    }, [e("div", {
                        style: this.isLoading ? {
                            opacity: 0
                        } : {}
                    }, [e(this.is, {
                        props: { ...t,
                            ...this.$attrs,
                            data: t
                        },
                        slots: this.$slots,
                        scopedSlots: this.$scopedSlots,
                        on: this.$listeners
                    })]), ...this.isLoading ? [e(P.default)] : []])
                }
            }
        },
        990: function(e, t, n) {
            "use strict";
            n.d(t, "c", (function() {
                return r
            })), n.d(t, "b", (function() {
                return l
            })), n.d(t, "a", (function() {
                return o
            }));
            const r = "LVVue",
                l = "cachebusting",
                o = "lv-devtools-open"
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/a0096-71f11.js.map