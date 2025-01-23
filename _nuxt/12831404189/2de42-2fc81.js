(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [556], {
        1764: function(t, n, c) {
            var content = c(2432);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [t.i, content, ""]
            ]), content.locals && (t.exports = content.locals);
            (0, c(10).default)("08b3d3f6", content, !0, {
                sourceMap: !1
            })
        },
        2431: function(t, n, c) {
            "use strict";
            c(1764)
        },
        2432: function(t, n, c) {
            var e = c(9)((function(i) {
                return i[1]
            }));
            e.push([t.i, ".lv-switch-accessibility{width:100%}", ""]), e.locals = {}, t.exports = e
        },
        3788: function(t, n, c) {
            "use strict";
            c.r(n);
            var e = c(5),
                o = {
                    components: {
                        SwitchButton: c(350).default
                    },
                    props: {
                        label: {
                            type: String,
                            required: !0
                        }
                    },
                    computed: {
                        hasEnhancedContrast: {
                            get: function() {
                                return this.$store.state.enhancedContrast
                            },
                            set: function(t) {
                                this.$store.commit(e.SET_ENHANCED_CONTRAST_MODE, t), this.trackToggle(t)
                            }
                        }
                    },
                    methods: {
                        trackToggle(t) {
                            const n = t ? "tick" : "untick";
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                actionType: "accessibility",
                                actionPosition: "mega_menu",
                                actionGa: "accessibility_enhanced_contrast",
                                labelGa: "".concat(n, "_checkbox"),
                                actionId: "cta_enhanced_constrast_".concat(n)
                            }))
                        }
                    }
                },
                l = (c(2431), c(0)),
                component = Object(l.a)(o, (function() {
                    var t = this;
                    return (0, t._self._c)("SwitchButton", {
                        staticClass: "lv-switch-accessibility",
                        attrs: {
                            label: t.label
                        },
                        model: {
                            value: t.hasEnhancedContrast,
                            callback: function(n) {
                                t.hasEnhancedContrast = n
                            },
                            expression: "hasEnhancedContrast"
                        }
                    })
                }), [], !1, null, null, null);
            n.default = component.exports
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/2de42-2fc81.js.map