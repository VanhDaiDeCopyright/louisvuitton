(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [106], {
        1232: function(e, t, r) {
            var content = r(1418);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(10).default)("9690ac9e", content, !0, {
                sourceMap: !1
            })
        },
        1417: function(e, t, r) {
            "use strict";
            r(1232)
        },
        1418: function(e, t, r) {
            var n = r(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".lv-newsletter-form__form #mobileNo-field{display:none;visibility:hidden}[dir] .lv-newsletter-form__success-block{background-color:#fff}[dir] .lv-newsletter-form__success-block-text{margin-bottom:2.5rem}.lv-newsletter-form__success-block-text:focus{outline:0}.keyboard-is-used .lv-newsletter-form__success-block-text:focus{outline:2px solid;outline-offset:var(--focus-outline-offset)}.lv-newsletter-form__success-block-buttons{display:flex;flex-wrap:wrap;gap:1rem;justify-content:flex-end}[dir] .lv-newsletter-form__success-block-buttons{padding:2.5rem 0}.lv-newsletter-form__success-block-buttons .lv-button{width:100%}@media screen and (min-width:48rem){.lv-newsletter-form__success-block-buttons .lv-button{width:auto}}[dir] .lv-newsletter-form.-is-mylv .lv-newsletter-form__form .lv-form-container__fields{padding:1.5rem 2rem}[dir] .lv-newsletter-form.-is-mylv .lv-newsletter-form__success-block{padding:3rem}", ""]), n.locals = {}, e.exports = n
        },
        1557: function(e, t, r) {
            "use strict";
            r(3);
            var n = r(91),
                o = r(16),
                l = r(5),
                c = r(4),
                d = r(146),
                m = r(323),
                _ = r(17),
                h = r(77),
                f = r(347),
                v = {
                    components: {
                        FormContainer: m.default,
                        SmartLink: _.default,
                        LegalNoticeSection: () => r.e(6).then(r.bind(null, 1346))
                    },
                    props: {
                        schema: {
                            type: Object,
                            default: () => ({})
                        },
                        type: {
                            type: String,
                            default: "subscribe"
                        },
                        context: {
                            type: String,
                            default: "footer"
                        },
                        isOpenQubitModal: {
                            type: Boolean,
                            default: !1
                        }
                    },
                    data: () => ({
                        isPending: !1,
                        clientData: [],
                        isSubscribeSuccessful: !1,
                        isUnsubscribeSuccessful: !1,
                        serviceErrors: {},
                        errorMessage: null,
                        registrationUrl: "",
                        informations: {
                            categoryGa: "form_newsletter",
                            actionPosition: "bottom_page"
                        }
                    }),
                    computed: {
                        hasForm() {
                            return !this.isSubscribeSuccessful && !this.isUnsubscribeSuccessful
                        },
                        isMyLVContext() {
                            return "mylv" === this.context
                        },
                        isFooterContext() {
                            return "footer" === this.context
                        },
                        homepageUrl() {
                            return this.$store.getters[l.GET_SEO_URL](o.e.Homepage)
                        },
                        isTwist() {
                            return this.$store.getters[c.LOCALE_CONTEXT_IS_TWIST]
                        },
                        formattedClientName() {
                            return this.clientData.length > 0 ? "".concat(this.clientData[0].firstName, " ").concat(this.clientData[0].lastName) : ""
                        }
                    },
                    mounted() {
                        this.isTwist || (this.registrationUrl = this.$store.getters[l.GET_SEO_URL](o.e.Registration))
                    },
                    methods: {
                        async handleNewsletterSubmission() {
                            this.resetSubmissionFlags(), this.isPending = !0;
                            const e = this.$refs.newsletterForm.model;
                            if (this.isTwist && this.setEmailTracking(e.email), "subscribe" === this.type)
                                if (this.isOpenQubitModal ? this.sendEventTracking({
                                        actionGa: "qubit_popup_subscribe_intention",
                                        actionId: "qubit_popup_subscribe_intention",
                                        ...this.informations
                                    }) : this.sendEventTracking({
                                        actionGa: "subscribe_intention",
                                        actionId: "subscribe_intention",
                                        ...this.informations
                                    }), e.email === e.emailConfirmation) try {
                                    if (Object.assign(e, {
                                            status: "active"
                                        }), await this.$domain.account.guestNewsletterSubscription(e), this.sendEventTracking({
                                            actionGa: "subscription_success",
                                            actionId: "newsletter_subscription_succeeded",
                                            categoryGa: this.informations.categoryGa
                                        }), this.clientData.push(e), this.isPending = !1, this.isSubscribeSuccessful = !0, this.$emit("update:isSubscribeSuccessful", this.isSubscribeSuccessful), this.isTwist && !this.isFooterContext) {
                                        const e = "".concat(window.location.origin).concat(this.$route.fullPath);
                                        this.registrationUrl = await Object(h.a)(this, e, n.a.Registration)
                                    }
                                    await this.$nextTick(), this.$refs.successText.focus(), this.isFooterContext || window.scrollTo(0, 0)
                                } catch (e) {
                                    this.handleErrors(e), this.sendEventTracking({
                                        actionGa: "subscription_failure",
                                        actionId: "newsletter_subscription_failed",
                                        categoryGa: this.informations.categoryGa
                                    })
                                } else this.handleErrors({
                                    emailConfirmation: this.$t("lib_error_email_confirmation")
                                }, !0), this.sendEventTracking({
                                    actionGa: "subscription_failure",
                                    actionId: "newsletter_subscription_failed",
                                    categoryGa: this.informations.categoryGa
                                });
                            if ("unsubscribe" === this.type) try {
                                await this.$domain.account.guestNewsletterUnsubscription(e.emailUnsubscribe), this.sendEventTracking({
                                    actionGa: "unsubscribe",
                                    actionId: "unsubscribe",
                                    ...this.informations
                                }), this.isPending = !1, this.isUnsubscribeSuccessful = !0, this.$emit("update:isUnsubscribeSuccessful", this.isUnsubscribeSuccessful)
                            } catch (e) {
                                this.handleErrors(e), this.sendEventTracking({
                                    actionGa: "unsubscription_failure",
                                    actionId: "newsletter_unsubscription_failed",
                                    categoryGa: this.informations.categoryGa
                                })
                            }
                        },
                        resetSubmissionFlags() {
                            this.isUnsubscribeSuccessful = !1, this.isSubscribeSuccessful = !1
                        },
                        handleErrors() {
                            let e = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {},
                                t = arguments.length > 1 ? arguments[1] : void 0;
                            this.serviceErrors = t ? e : Object(d.f)(e.serviceErrors), this.errorMessage = t ? null : this.$t("global_error_message") || e.message, this.isPending = !1
                        },
                        sendEventTracking(e) {
                            this.$lvTrackingSendEvent(this.$lvTrackingGenerateData(e))
                        },
                        trackingAccountCreation() {
                            return this.$lvTrackingGenerateData({
                                categoryGa: "form_newsletter",
                                actionGa: "create_my_account"
                            })
                        },
                        trackingBackToHome() {
                            return this.$lvTrackingGenerateData({
                                categoryGa: "form_newsletter",
                                actionGa: "back_to_home"
                            })
                        },
                        setEmailTracking(e) {
                            this.sendEventTracking({
                                mkey: Object(f.a)(e),
                                actionGa: "mkey_submitted",
                                actionId: "mkey_submitted",
                                categoryGa: "mkey_submitted"
                            })
                        }
                    }
                },
                w = v,
                k = (r(1417), r(0)),
                component = Object(k.a)(w, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "lv-newsletter-form",
                        class: {
                            "-is-mylv": e.isMyLVContext
                        }
                    }, [e.hasForm ? t("section", [e.isFooterContext ? t("p", [e._v(e._s(e.$t("mylv_newsletter_registration_title")))]) : e._e(), e._v(" "), t("FormContainer", {
                        ref: "newsletterForm",
                        staticClass: "lv-newsletter-form__form",
                        attrs: {
                            id: "newsletter-form",
                            "form-schema": e.schema,
                            "service-errors": e.serviceErrors,
                            "error-message": e.errorMessage,
                            "is-pending": e.isPending
                        },
                        on: {
                            submit: e.handleNewsletterSubmission
                        }
                    })], 1) : e._e(), e._v(" "), e.isSubscribeSuccessful ? t("section", [t("div", {
                        staticClass: "lv-newsletter-form__success-block"
                    }, [t("p", {
                        ref: "successText",
                        staticClass: "lv-newsletter-form__success-block-text body-l",
                        attrs: {
                            tabindex: "0"
                        }
                    }, [e._v("\n        " + e._s(e.formattedClientName) + " "), t("br"), e._v("\n        " + e._s(e.$t("mylv_newsletter_registration_confirmation"))), t("br"), t("br"), e._v("\n        " + e._s(e.$t("global_thanksmessage")) + "\n      ")]), e._v(" "), e.isMyLVContext ? t("span", {
                        staticClass: "body-s"
                    }, [e._v(e._s(e.$t("mylv_newsletter_subscription_success_message_desc")))]) : e._e()]), e._v(" "), e.isMyLVContext ? t("div", {
                        staticClass: "lv-newsletter-form__success-block-buttons"
                    }, [t("SmartLink", {
                        directives: [{
                            name: "tracking",
                            rawName: "v-tracking",
                            value: e.trackingBackToHome(),
                            expression: "trackingBackToHome()"
                        }],
                        staticClass: "lv-newsletter-form__button-back-home lv-button -secondary",
                        attrs: {
                            url: e.homepageUrl
                        }
                    }, [e._v("\n        " + e._s(e.$t("global_go_to_homepage")) + "\n      ")]), e._v(" "), t("SmartLink", {
                        directives: [{
                            name: "tracking",
                            rawName: "v-tracking",
                            value: e.trackingAccountCreation(),
                            expression: "trackingAccountCreation()"
                        }],
                        staticClass: "lv-newsletter-form__button-registration lv-button -primary",
                        attrs: {
                            url: e.registrationUrl
                        }
                    }, [e._v("\n        " + e._s(e.$t("global_create_mylv_account")) + "\n      ")])], 1) : e._e()]) : e._e(), e._v(" "), e.isUnsubscribeSuccessful ? t("section", [t("p", [e._v(e._s(e.$t("mylv_newsletter_unsubscription_confirmation")))]), e._v(" "), t("SmartLink", {
                        directives: [{
                            name: "tracking",
                            rawName: "v-tracking",
                            value: e.trackingBackToHome(),
                            expression: "trackingBackToHome()"
                        }],
                        staticClass: "lv-newsletter-form__button-back-home lv-button -primary",
                        attrs: {
                            url: e.homepageUrl
                        }
                    }, [e._v("\n      " + e._s(e.$t("global_go_to_homepage")) + "\n    ")])], 1) : e._e(), e._v(" "), t("LegalNoticeSection")], 1)
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        1780: function(e, t, r) {
            var content = r(2464);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, r(10).default)("459cece3", content, !0, {
                sourceMap: !1
            })
        },
        2463: function(e, t, r) {
            "use strict";
            r(1780)
        },
        2464: function(e, t, r) {
            var n = r(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, "[dir=ltr] .lv-newsletter-side-panel.lv-modal.-sidepanel .lv-modal__title{padding-left:6.4vw}[dir=rtl] .lv-newsletter-side-panel.lv-modal.-sidepanel .lv-modal__title{padding-right:6.4vw}[dir] .lv-newsletter-side-panel.lv-modal.-sidepanel .lv-modal__content{padding-left:6.4vw;padding-right:6.4vw}", ""]), n.locals = {}, e.exports = n
        },
        920: function(e, t, r) {
            "use strict";
            r.r(t);
            r(3);
            var n = r(38),
                o = r(88),
                l = r(41),
                c = r(1557),
                d = {
                    components: {
                        Modal: l.default,
                        NewsletterForm: c.a,
                        KisaContainer: () => r.e(10).then(r.bind(null, 3656))
                    },
                    props: {
                        modalId: {
                            type: String,
                            default: "newslettersubscription"
                        }
                    },
                    data: () => ({
                        modalTrigger: null,
                        isModalOpen: !1,
                        isKisaConfirmed: !1,
                        kisaErrorMessage: null,
                        isPending: !1,
                        isOpenQubitModal: !1
                    }),
                    computed: {
                        isUserLogged() {
                            return this.$store.state.userContext.userIsLogged
                        },
                        currentPage() {
                            return this.$store.state.pageContext.currentPage
                        },
                        currentType() {
                            return this.$store.state.pageContext.utagData.pageType
                        },
                        hasKisaPreferences() {
                            return this.$store.getters[n.USER_CONTEXT_HAS_KISA_PREFERENCES]
                        },
                        hasSchema() {
                            return this.schemaSubscribe && !!this.schemaSubscribe.properties
                        },
                        schemaSubscribe() {
                            return this.$store.getters[o.MYLV_GET_SCHEMAS]("newsletter", "newsletter_subscribe")
                        }
                    },
                    watch: {
                        isModalOpen(e) {
                            e && this.loadNewsletterSchema()
                        }
                    },
                    mounted() {
                        this.userIsLogged || this.registerModal(), this.exposeQubitMethods()
                    },
                    destroyed() {
                        this.$lvModalUnregister({
                            modalId: this.modalId
                        })
                    },
                    methods: {
                        exposeQubitMethods() {
                            window.LV = window.LV || {}, window.LV.openNewsletterPanel = e => {
                                let {
                                    isTrackingPopUp: t = !1
                                } = e;
                                this.isModalOpen = !0, this.isOpenQubitModal = t
                            }
                        },
                        async loadNewsletterSchema() {
                            try {
                                await this.$store.dispatch(o.MYLV_GET_SCHEMAS_ACTION, "newsletter")
                            } catch (e) {
                                this.$logger.error("Newsletter Side Panel - Loading form schemas", e)
                            }
                        },
                        registerModal() {
                            this.$lvModalRegister({
                                modalId: this.modalId,
                                links: [this.modalId],
                                callback: this.handleModal
                            })
                        },
                        handleModal(e, t) {
                            this.isUserLogged ? this.$router.push(this.localePath("mylv-profile")) : (this.modalTrigger = e, this.$emit("modal-triggered", t), this.isModalOpen = !0, this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                pageName: this.currentPage,
                                pageType: this.currentType,
                                categoryGa: "form_newsletter",
                                actionGa: "popin_newsletter_form",
                                actionId: "popin_newsletter_form",
                                position: "popin_newsletter",
                                actionType: "popin"
                            })))
                        },
                        closeModal() {
                            this.$emit("close-modal"), this.isModalOpen = !1, this.isOpenQubitModal && this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                categoryGa: "form_newsletter",
                                actionGa: "qubit_close_newsletter_modal",
                                actionId: "qubit_close_newsletter_modal",
                                actionType: "close"
                            })), this.isOpenQubitModal = !1
                        },
                        async submitKisa(data) {
                            this.isPending = !0;
                            try {
                                await this.$domain.account.updateKisa(data), this.isKisaConfirmed = !0
                            } catch ({
                                error: e
                            }) {
                                this.kisaErrorMessage = e || this.$t("global_error_message")
                            }
                            this.isPending = !1
                        }
                    }
                },
                m = (r(2463), r(0)),
                component = Object(m.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.isModalOpen ? t("Modal", {
                        attrs: {
                            "trigger-element": e.modalTrigger,
                            type: e.$modalTypes.SIDE_PANEL,
                            "modal-class": "lv-newsletter-side-panel"
                        },
                        on: {
                            closed: e.closeModal
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v(e._s(e.$t("footer_newsletter")))]
                            },
                            proxy: !0
                        }, {
                            key: "default",
                            fn: function() {
                                return [e.hasKisaPreferences && !e.isKisaConfirmed ? t("KisaContainer", {
                                    attrs: {
                                        "is-pending": e.isPending,
                                        "error-message": e.kisaErrorMessage
                                    },
                                    on: {
                                        submit: e.submitKisa,
                                        cancel: e.closeModal
                                    }
                                }) : e.hasSchema ? t("NewsletterForm", {
                                    attrs: {
                                        schema: e.schemaSubscribe,
                                        "is-open-qubit-modal": e.isOpenQubitModal
                                    },
                                    on: {
                                        "close-modal": e.closeModal
                                    }
                                }) : e._e()]
                            },
                            proxy: !0
                        }], null, !1, 910469826)
                    }) : e._e()
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/54550-95cb0.js.map