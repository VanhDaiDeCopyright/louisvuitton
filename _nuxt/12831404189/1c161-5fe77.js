(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [100, 796], {
        1086: function(e, t, l) {
            var content = l(1201);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, l(10).default)("205252da", content, !0, {
                sourceMap: !1
            })
        },
        1200: function(e, t, l) {
            "use strict";
            l(1086)
        },
        1201: function(e, t, l) {
            var n = l(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, '.lv-calendar .vc-container{font-family:"Louis Vuitton Web","Louis Vuitton Web Fallback","Helvetica Neue","Helvetica",Arial,sans-serif}[dir] .lv-calendar .vc-container{border:none}[dir] .lv-calendar .vc-container .vc-header{padding:.5rem 1rem 0}.lv-calendar .vc-container .vc-title{color:#000;font-size:1.125rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-calendar .vc-container .vc-title:lang(ko),.lv-calendar .vc-container .vc-title:lang(zh){font-size:1.0125rem}.lv-calendar .vc-container .vc-title:lang(ja){font-size:.9rem}.lv-calendar .vc-container .vc-title:lang(ja),.lv-calendar .vc-container .vc-title:lang(ko),.lv-calendar .vc-container .vc-title:lang(th),.lv-calendar .vc-container .vc-title:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-calendar .vc-container .vc-title:lang(th){word-break:break-word}.lv-calendar .vc-container .vc-title:lang(vi){line-height:1.3}[dir] .lv-calendar .vc-container .vc-weeks{padding:.5rem 0}.lv-calendar .vc-container .vc-weekday{color:inherit;color:#767676;font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-calendar .vc-container .vc-weekday:lang(ko),.lv-calendar .vc-container .vc-weekday:lang(zh){font-size:.9rem}.lv-calendar .vc-container .vc-weekday:lang(ja){font-size:.8rem}.lv-calendar .vc-container .vc-weekday:lang(ja),.lv-calendar .vc-container .vc-weekday:lang(ko),.lv-calendar .vc-container .vc-weekday:lang(th),.lv-calendar .vc-container .vc-weekday:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-calendar .vc-container .vc-weekday:lang(th){word-break:break-word}.lv-calendar .vc-container .vc-weekday:lang(vi){line-height:1.3}.lv-calendar .vc-container .vc-day-content{color:#000;font-size:1rem;font-weight:400;letter-spacing:.025rem;line-height:1.5rem}.lv-calendar .vc-container .vc-day-content:lang(ko),.lv-calendar .vc-container .vc-day-content:lang(zh){font-size:.9rem}.lv-calendar .vc-container .vc-day-content:lang(ja){font-size:.8rem}.lv-calendar .vc-container .vc-day-content:lang(ja),.lv-calendar .vc-container .vc-day-content:lang(ko),.lv-calendar .vc-container .vc-day-content:lang(th),.lv-calendar .vc-container .vc-day-content:lang(zh){font-style:normal;letter-spacing:0;line-height:normal}.lv-calendar .vc-container .vc-day-content:lang(th){word-break:break-word}.lv-calendar .vc-container .vc-day-content:lang(vi){line-height:1.3}[dir] .lv-calendar .vc-container .vc-day-content:hover{background-color:#efefef}.lv-calendar .vc-container .vc-day-content:focus{font-weight:400}[dir] .lv-calendar .vc-container .vc-day-content:focus{background-color:#efefef}.lv-calendar .vc-container .vc-day-content[aria-disabled=true]{color:#b4b4b4}[dir] .lv-calendar .vc-container .vc-day-content[aria-disabled=true]{cursor:auto}[dir] .lv-calendar .vc-container .vc-day-content[aria-disabled=true]:focus,[dir] .lv-calendar .vc-container .vc-day-content[aria-disabled=true]:hover{background:none}.lv-calendar .vc-container .lv-calendar__selected-date{color:#fff}[dir] .lv-calendar .vc-container .lv-calendar__selected-date{background-color:#000}.lv-calendar .vc-container .lv-calendar__selected-date:focus,.lv-calendar .vc-container .lv-calendar__selected-date:hover{color:#fff}[dir] .lv-calendar .vc-container .lv-calendar__selected-date:focus,[dir] .lv-calendar .vc-container .lv-calendar__selected-date:hover{background-color:#000}.lv-calendar.-locked .vc-arrow{display:none}.lv-calendar.-locked .vc-title{pointer-events:none}[dir] .lv-calendar.-locked .vc-title{cursor:pointer}.lv-calendar__select{max-height:0;overflow:hidden}.lv-calendar__select:focus,.lv-calendar__select:focus-within{max-height:none}.lv-calendar .vc-day-content-wrapper{align-items:center;display:flex;justify-content:center;min-height:2rem}', ""]), n.locals = {}, e.exports = n
        },
        1316: function(e, t, l) {
            "use strict";
            l(3);
            var n = l(76),
                c = l(939),
                o = l(4),
                r = l(2),
                d = {
                    components: {
                        DatePicker: () => l.e(791).then(l.t.bind(null, 3606, 7)),
                        SelectDropdown: c.default
                    },
                    props: {
                        value: {
                            type: Date,
                            default: null
                        },
                        isRequired: {
                            type: Boolean,
                            default: !1
                        },
                        daysOffset: {
                            type: Number,
                            default: 0
                        },
                        minDate: {
                            type: Date,
                            default: null
                        },
                        maxDate: {
                            type: Date,
                            default: null
                        },
                        disabledDates: {
                            type: Array,
                            default: () => []
                        },
                        hasAvailableDates: {
                            type: Boolean,
                            default: !0
                        },
                        lockMonthView: {
                            type: Boolean,
                            default: !1
                        },
                        accessibilityValue: {
                            type: Object,
                            default: null
                        },
                        accessibilityOptions: {
                            type: Array,
                            default: () => [],
                            validator: e => e instanceof Array && e.every((e => "label" in e))
                        },
                        labelText: {
                            type: String,
                            default: null
                        }
                    },
                    data: () => ({
                        isReady: !1,
                        observer: null,
                        attrs: [{
                            key: "today",
                            dates: new Date
                        }],
                        selectAttribute: {
                            highlight: {
                                class: "lv-calendar__selected-date",
                                contentClass: "lv-calendar__selected-date"
                            }
                        }
                    }),
                    computed: {
                        selectedDate: {
                            get() {
                                return this.value
                            },
                            set(e) {
                                return this.$emit("input", e)
                            }
                        },
                        selectedAccessibilityValue: {
                            get() {
                                const e = this.localAccessibilityOptions.find((option => {
                                    var e;
                                    return option.label === (null === (e = this.accessibilityValue) || void 0 === e ? void 0 : e.label)
                                }));
                                return null == e ? void 0 : e.label
                            },
                            set(e) {
                                const t = this.accessibilityOptions.find((option => option.label === e));
                                return this.$emit("input-select", t)
                            }
                        },
                        isHongKong() {
                            return this.$store.state.localeContext.locale === r.a.HONGKONG
                        },
                        isTaiwan() {
                            return this.$store.getters[o.LOCALE_CONTEXT_IS_TAIWAN]
                        },
                        locale() {
                            let e = {
                                id: this.$store.state.localeContext.localeAemLang,
                                offset: 0
                            };
                            return (this.isTaiwan || this.isHongKong) && (e = {
                                firstDayOfWeek: 1,
                                id: "cmn",
                                offset: 1
                            }), e
                        },
                        startDate() {
                            return this.minDate || new Date
                        },
                        endDate() {
                            if (this.maxDate) return this.maxDate;
                            return Object(n.i)(this.minDate || new Date)
                        },
                        isTwoMonths() {
                            return !Object(n.d)(this.startDate, this.endDate)
                        },
                        firstDayVisible() {
                            if (!this.minDate) return null;
                            const e = Object(n.g)(this.startDate),
                                t = Object(n.l)(this.startDate, -this.daysOffset);
                            return t < e ? e : t
                        },
                        firstDayHidden() {
                            if (!this.firstDayVisible) return null;
                            const e = Object(n.h)(this.firstDayVisible, this.$store.state.localeContext);
                            return Object(n.c)(e, this.firstDayVisible) ? null : new Date(e - this.locale.offset)
                        },
                        lastDayVisible() {
                            if (!this.maxDate) return null;
                            if (0 === this.daysOffset) return this.endDate; {
                                const e = Object(n.i)(this.endDate),
                                    t = Object(n.l)(this.endDate, this.daysOffset);
                                return t > e ? e : t
                            }
                        },
                        localAccessibilityOptions() {
                            return this.accessibilityOptions.length ? this.accessibilityOptions.map((option => ({
                                label: option.label,
                                value: option.label
                            }))) : []
                        }
                    },
                    mounted() {
                        this.$watch((e => [e.isReady, e.daysOffset, e.startDate, e.endDate, e.disabledDates]), (() => this.trimCalendar()), {
                            immediate: !0,
                            deep: !0
                        }), this.waitForDaysElement().then((() => {
                            this.isReady = !0, this.observer.disconnect()
                        }))
                    },
                    unmounted() {
                        this.observer && this.observer.disconnect()
                    },
                    methods: {
                        isDateSelected(e) {
                            return Object(n.c)(this.selectedDate, e)
                        },
                        isPresentDay(e) {
                            return Object(n.n)(e, this.$store.state.localeContext) === Object(n.n)(new Date, this.$store.state.localeContext)
                        },
                        waitForDaysElement() {
                            const e = ".vc-day";
                            return new Promise((t => {
                                if (this.$el.querySelector(e)) return t(this.$el.querySelector(e));
                                this.observer = new MutationObserver((() => {
                                    this.$el.querySelector(e) && (t(this.$el.querySelector(e)), this.observer.disconnect())
                                })), this.observer.observe(this.$el, {
                                    childList: !0,
                                    subtree: !0
                                })
                            }))
                        },
                        trimCalendar() {
                            if (!this.isReady) return;
                            this.$el.querySelectorAll(".vc-day").forEach((e => {
                                e.style.visibility = "", e.style.display = "";
                                const t = [...e.classList].find((e => e.startsWith("id-"))),
                                    l = Object(n.k)(t.substring(3));
                                let c = !1,
                                    o = !1;
                                if (this.firstDayHidden) {
                                    const t = Object(n.l)(this.firstDayVisible, -1);
                                    if (c = Object(n.a)(this.firstDayHidden, t, l), c) return void(e.style.visibility = "hidden")
                                }
                                this.firstDayVisible && this.lastDayVisible && (o = Object(n.a)(this.firstDayVisible, this.lastDayVisible, l)), this.firstDayVisible && !this.lastDayVisible && (o = l >= this.firstDayVisible), !this.firstDayVisible && this.lastDayVisible && (o = l <= this.lastDayVisible), this.firstDayVisible || this.lastDayVisible || (o = !0), o || (e.style.display = "none")
                            }))
                        }
                    }
                },
                h = (l(1200), l(0)),
                component = Object(h.a)(d, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "lv-calendar",
                        class: [{
                            "-locked": e.lockMonthView
                        }]
                    }, [t("label", {
                        staticClass: "sr-only",
                        attrs: {
                            for: "select-date-dropdown"
                        }
                    }, [e._v("\n    " + e._s(e.labelText || e.$t("appointment_book_placeholder_date")) + "\n  ")]), e._v(" "), e.accessibilityOptions.length ? t("SelectDropdown", {
                        staticClass: "lv-calendar__select",
                        attrs: {
                            id: "select-date-dropdown",
                            name: "select-date-dropdown",
                            "aria-label": e.labelText || e.$t("appointment_book_placeholder_date"),
                            required: e.isRequired,
                            options: e.localAccessibilityOptions
                        },
                        model: {
                            value: e.selectedAccessibilityValue,
                            callback: function(t) {
                                e.selectedAccessibilityValue = t
                            },
                            expression: "selectedAccessibilityValue"
                        }
                    }) : e._e(), e._v(" "), t("client-only", [t("DatePicker", {
                        ref: "datePicker",
                        attrs: {
                            "is-expanded": "",
                            mode: "date",
                            "aria-hidden": "true",
                            "min-date": e.minDate,
                            "max-date": e.maxDate,
                            attributes: e.attrs,
                            "is-required": e.isRequired,
                            rows: e.isTwoMonths ? 2 : 1,
                            "disabled-dates": e.disabledDates,
                            "select-attribute": e.selectAttribute,
                            locale: { ...e.locale,
                                masks: {
                                    weekdays: "WWW"
                                }
                            }
                        },
                        scopedSlots: e._u([{
                            key: "day-content",
                            fn: function(l) {
                                let {
                                    day: n,
                                    dayEvents: c,
                                    dayProps: o
                                } = l;
                                return [t("div", {
                                    staticClass: "vc-day-content-wrapper"
                                }, [t("button", e._g(e._b({
                                    staticClass: "vc-day-content vc-focusable",
                                    class: {
                                        "is-disabled": !!n.isDisabled || !e.hasAvailableDates, "lv-calendar__present-day": !!n.isDisabled && e.isPresentDay(n.date), "lv-calendar__selected-date": e.isDateSelected(n.date)
                                    },
                                    attrs: {
                                        tabindex: "-1",
                                        disabled: !!n.isDisabled || !e.hasAvailableDates
                                    }
                                }, "button", o, !1), c), [e._v("\n            " + e._s(n.day) + "\n          ")])])]
                            }
                        }]),
                        model: {
                            value: e.selectedDate,
                            callback: function(t) {
                                e.selectedDate = t
                            },
                            expression: "selectedDate"
                        }
                    })], 1)], 1)
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        1377: function(e, t, l) {
            "use strict";
            (function(e) {
                l(3);
                var n = l(1),
                    c = l(75),
                    o = l(41),
                    r = l(323),
                    d = l(3429),
                    h = l(88),
                    v = l(76);
                const m = "phoneNumberCountry",
                    f = "phoneNumber",
                    _ = n.default.observable({
                        [m]: "",
                        [f]: ""
                    }),
                    y = "error",
                    k = "success",
                    D = "calendar",
                    S = "form";
                t.a = {
                    components: {
                        Loader: c.default,
                        Modal: o.default,
                        FormContainer: r.default,
                        CallMeBackCalendar: d.a
                    },
                    props: {
                        isOpen: {
                            type: Boolean,
                            default: !1
                        },
                        triggerElement: {
                            type: [e.HTMLButtonElement, e.HTMLDivElement, e.HTMLAnchorElement],
                            default: null
                        },
                        hasBackdrop: {
                            type: Boolean,
                            default: !0
                        }
                    },
                    data: () => ({
                        isLoading: !0,
                        hasCallMeBackError: !1,
                        isCallMeBackFormValid: !1,
                        state: _,
                        callMeBackToken: "",
                        queueID: "",
                        skillIds: [],
                        priority: "",
                        isHandleFormClickCalled: !1,
                        schedules: [],
                        hasSelectedSlot: !1,
                        slotSelected: {}
                    }),
                    computed: {
                        locale() {
                            return this.$store.state.localeContext.locale
                        },
                        callMeBackSchema() {
                            return this.$store.getters[h.MYLV_GET_SCHEMAS]("callMeBack", "call_me_back")
                        },
                        contentCondition() {
                            return this.hasCallMeBackError ? y : this.isCallMeBackFormValid ? k : this.hasSelectedSlot ? S : D
                        },
                        isSubmitButtonDisabled() {
                            var e;
                            return !this.state[m] || (null === (e = this.state[f]) || void 0 === e ? void 0 : e.length) < this.callMeBackSchema.properties.phone.properties.phoneNumber.minLength
                        },
                        currentPhonePrefix() {
                            const e = this.callMeBackSchema.properties.phone.properties[m],
                                {
                                    enum: t = [],
                                    enumName: l = []
                                } = e;
                            return l[t.indexOf(this.state[m])] || ""
                        },
                        readableSlot() {
                            const e = new Date(this.slotSelected),
                                t = new Date(e.getTime() + 18e5),
                                l = Object(v.r)(e, {
                                    locale: this.locale,
                                    timeZone: this.schedules.timeZone,
                                    hourFormat: "2-digit",
                                    minuteFormat: "2-digit"
                                }),
                                n = Object(v.r)(t, {
                                    locale: this.locale,
                                    timeZone: this.schedules.timeZone,
                                    hourFormat: "2-digit",
                                    minuteFormat: "2-digit"
                                }),
                                c = Object(v.o)(e, {
                                    locale: this.locale
                                }, {
                                    year: void 0,
                                    month: "long",
                                    day: "numeric"
                                });
                            return "".concat(c, ", ").concat(l, " - ").concat(n)
                        }
                    },
                    watch: {
                        isOpen: {
                            immediate: !0,
                            handler(e) {
                                this.resetData(), e && this.loadData()
                            }
                        }
                    },
                    async beforeMount() {
                        await this.$store.dispatch(h.MYLV_GET_SCHEMAS_ACTION, "callMeBack")
                    },
                    methods: {
                        async loadData() {
                            await this.scheduleCallMeBack(this.$store.state.localeContext.countryCodeIso3)
                        },
                        async scheduleCallMeBack(e) {
                            this.state[m] = this.$store.state.localeContext.countryCode;
                            try {
                                this.schedules = await this.$domain.account.getAvailabilitySchedule(e), this.queueID = this.schedules.QueueID, this.skillIds = this.schedules.Skill ? [this.schedules.Skill] : [], this.priority = this.schedules.Priority, this.handleTracking("opened")
                            } catch (e) {
                                this.hasCallMeBackError = !0, this.handleTracking("failed"), this.$logger.error("CallMeBack - Loading token", e)
                            } finally {
                                this.isLoading = !1
                            }
                        },
                        handleSlotSelected(slot) {
                            this.slotSelected = slot, this.hasSelectedSlot = !0, this.handleTracking("choose_slot")
                        },
                        async onSubmit() {
                            this.handleTracking("submit");
                            try {
                                const e = this.state[f],
                                    t = e.startsWith("0") ? e.slice(1) : e,
                                    l = "".concat(this.currentPhonePrefix).concat(t),
                                    n = this.slotSelected;
                                await this.$domain.account.requestCallBack({
                                    routingData: {
                                        queueId: this.queueID,
                                        skillIds: this.skillIds,
                                        priority: this.priority
                                    },
                                    callbackNumbers: [l],
                                    callerId: l,
                                    callbackScheduledTime: n
                                }), this.isCallMeBackFormValid = !0, this.handleTracking("success")
                            } catch (e) {
                                this.hasCallMeBackError = !0, this.handleTracking("failed"), this.$logger.error("CallMeBack - Submit", e)
                            }
                        },
                        closeModal() {
                            this.isCallMeBackFormValid && this.$emit("form-success"), this.$emit("closed"), this.resetData(), this.handleTracking("close")
                        },
                        resetData() {
                            this.state[f] = "", this.queueID = "", this.hasSelectedSlot = !1, this.isCallMeBackFormValid = !1, this.isLoading = !0
                        },
                        handleFormUpdate(e) {
                            let {
                                model: t
                            } = e;
                            Object.entries(_).forEach((e => {
                                let [l, n] = e;
                                if (n !== t[l] && (_[l] = t[l], l === m && this.handleTracking("selected_phone_code"), l === f)) {
                                    const form = this.$refs.form,
                                        e = null == form ? void 0 : form.$el.querySelector('[name="'.concat(f, '"]'));
                                    form && e && this.$lvValidateUpdateErrors(e, form)
                                }
                            }))
                        },
                        handleFormClick(e) {
                            var t;
                            !this.isHandleFormClickCalled && null !== (t = e.target.getAttribute("id")) && void 0 !== t && t.includes(m) && (this.handleTracking("clicked_phone_code"), this.isHandleFormClickCalled = !0)
                        },
                        handleTracking(e) {
                            this.trackAction(this.getTrackingDataset()[e])
                        },
                        trackAction(e) {
                            let {
                                actionGa: t,
                                actionId: l,
                                actionPosition: n,
                                labelGa: c
                            } = e;
                            l && this.$lvTrackingSendEvent(this.$lvTrackingGenerateData({
                                categoryGa: "client_services",
                                actionGa: t,
                                actionId: l,
                                actionPosition: n,
                                labelGa: c
                            }))
                        },
                        getTrackingDataset() {
                            return {
                                opened: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "flow_call_us_open_date_pop_in",
                                    actionId: "request_callback_step_1"
                                },
                                choose_slot: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "flow_call_us_choose_date",
                                    actionId: "request_callback_step_1"
                                },
                                clicked_phone_code: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "area_phone_code",
                                    actionId: "area_phone_code"
                                },
                                selected_phone_code: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "area_phone_code",
                                    actionId: this.currentPhonePrefix,
                                    labelGa: this.currentPhonePrefix
                                },
                                submit: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "request_callback_step_2",
                                    actionId: "request_callback_step_2"
                                },
                                success: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "request_callback_succeeded",
                                    actionId: "request_callback_succeeded"
                                },
                                failed: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "request_callback_failed",
                                    actionId: "request_callback_failed"
                                },
                                close: {
                                    actionPosition: "panel_scheduled_callback",
                                    actionGa: "callback_popin_closed",
                                    actionId: "callback_popin_closed"
                                }
                            }
                        }
                    }
                }
            }).call(this, l(39))
        },
        1600: function(e, t, l) {
            var content = l(2111);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, l(10).default)("58bf0620", content, !0, {
                sourceMap: !1
            })
        },
        1601: function(e, t, l) {
            var content = l(2113);
            content.__esModule && (content = content.default), "string" == typeof content && (content = [
                [e.i, content, ""]
            ]), content.locals && (e.exports = content.locals);
            (0, l(10).default)("a7fb6bd0", content, !0, {
                sourceMap: !1
            })
        },
        2110: function(e, t, l) {
            "use strict";
            l(1600)
        },
        2111: function(e, t, l) {
            var n = l(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, "[dir] .lv-call-me-back__slots{padding:1.5rem 0}", ""]), n.locals = {}, e.exports = n
        },
        2112: function(e, t, l) {
            "use strict";
            l(1601)
        },
        2113: function(e, t, l) {
            var n = l(9)((function(i) {
                return i[1]
            }));
            n.push([e.i, ".lv-call-me-back-modal{min-height:4rem}.lv-call-me-back-modal .lv-form-container__action{flex:1}", ""]), n.locals = {}, e.exports = n
        },
        3429: function(e, t, l) {
            "use strict";
            var n = l(76),
                c = l(1316),
                o = l(939);
            var r = {
                    components: {
                        Calendar: c.a,
                        SelectDropdown: o.default
                    },
                    props: {
                        schedules: {
                            type: Array,
                            required: !0
                        }
                    },
                    data: () => ({
                        selectedDate: null,
                        selectedSlot: null,
                        isSlotSelected: !1
                    }),
                    computed: {
                        locale() {
                            return this.$store.state.localeContext.locale
                        },
                        minDate: () => Object(n.j)(new Date),
                        maxDate() {
                            return new Date(this.minDate.getTime() + Object(n.f)(10))
                        },
                        availableDates() {
                            return this.schedules.map((slot => ({
                                start: Object(n.j)(slot.start),
                                end: Object(n.j)(slot.end)
                            })))
                        },
                        firstAvailableDate() {
                            return this.availableDates && this.availableDates.length > 0 ? Object(n.j)(this.availableDates[0].start) : null
                        },
                        disabledDates() {
                            const e = Object(n.j)(new Date);
                            return Array.from({
                                length: 11
                            }, ((t, i) => new Date(e.getTime() + Object(n.f)(i)))).filter((e => !this.isDateWithin10Days(e) || !this.availableDates.some((t => Object(n.c)(e, t.start)))))
                        },
                        selectedAccessibilityValue() {
                            return this.accessibilityOptions.find((option => {
                                var e;
                                return Object(n.c)(null == option || null === (e = option.value) || void 0 === e ? void 0 : e.date, this.selectedDate)
                            })) || null
                        },
                        accessibilityOptions() {
                            return this.availableDates.map((e => {
                                const t = Object(n.j)(e.start);
                                return {
                                    label: Object(n.o)(t, {
                                        locale: this.locale
                                    }),
                                    value: {
                                        date: t
                                    }
                                }
                            }))
                        },
                        availableSlots() {
                            if (!this.selectedDate || !this.schedules.length) return [];
                            const e = this.schedules.find((e => {
                                const t = Object(n.j)(e.start);
                                return Object(n.c)(t, this.selectedDate)
                            }));
                            return e ? e.slots.map((slot => ({
                                label: slot.label,
                                value: slot.value
                            }))) : []
                        },
                        formattedSelectedDate() {
                            return Object(n.o)(this.selectedDate, {
                                locale: this.locale
                            }, {
                                year: void 0,
                                month: "long",
                                day: "numeric"
                            })
                        }
                    },
                    watch: {
                        schedules: {
                            immediate: !0,
                            handler(e) {
                                e && e.length > 0 && this.firstAvailableDate && this.selectDate(this.firstAvailableDate)
                            }
                        }
                    },
                    mounted() {
                        this.firstAvailableDate && this.selectDate(this.firstAvailableDate)
                    },
                    methods: {
                        selectDate(e) {
                            this.selectedDate = e, this.$emit("selected-date", e)
                        },
                        selectAccessibilityValue(option) {
                            var e, t;
                            null != option && null !== (e = option.value) && void 0 !== e && e.date && (this.selectDate(null === (t = option.value) || void 0 === t ? void 0 : t.date), this.accessibilityValue = option)
                        },
                        isDateWithin10Days: e => e <= (new Date).getTime() + 864e6,
                        submit() {
                            this.selectedSlot && (this.isSlotSelected = !0, this.$emit("slot-selected", this.selectedSlot))
                        }
                    }
                },
                d = (l(2110), l(0)),
                component = Object(d.a)(r, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", [e.isSlotSelected ? e._e() : [t("p", {
                        directives: [{
                            name: "safe-html",
                            rawName: "v-safe-html",
                            value: e.$t("appointment_book_calendar_title"),
                            expression: "$t('appointment_book_calendar_title')"
                        }]
                    }), e._v(" "), t("Calendar", {
                        attrs: {
                            "is-required": "",
                            "lock-month-view": "",
                            "days-offset": 7,
                            "min-date": e.minDate,
                            "max-date": e.maxDate,
                            value: e.selectedDate,
                            "disabled-dates": e.disabledDates,
                            "has-available-dates": !!e.schedules.length,
                            "accessibility-options": e.accessibilityOptions,
                            "accessibility-value": e.selectedAccessibilityValue
                        },
                        on: {
                            input: e.selectDate,
                            "input-select": e.selectAccessibilityValue
                        }
                    }), e._v(" "), e.availableSlots ? t("div", {
                        staticClass: "lv-call-me-back__slots"
                    }, [e.selectedDate ? t("p", [e._v(e._s(e.$t("global_select_date_time")) + " : " + e._s(e.formattedSelectedDate))]) : e._e(), e._v(" "), t("SelectDropdown", {
                        attrs: {
                            id: "call-me-back-calendar",
                            options: e.availableSlots,
                            name: "call-me-back-calendar",
                            placeholder: e.$t("global_select_date_time")
                        },
                        model: {
                            value: e.selectedSlot,
                            callback: function(t) {
                                e.selectedSlot = t
                            },
                            expression: "selectedSlot"
                        }
                    })], 1) : e._e(), e._v(" "), t("button", {
                        staticClass: "lv-button -primary -fullwidth lv-call-me-back__button-continue",
                        attrs: {
                            disabled: !e.selectedSlot
                        },
                        on: {
                            click: function(t) {
                                return e.submit(e.selectedSlot)
                            }
                        }
                    }, [e._v("\n      " + e._s(e.$t("global_select")) + "\n    ")])]], 2)
                }), [], !1, null, null, null);
            t.a = component.exports
        },
        3434: function(e, t, l) {
            "use strict";
            l.r(t);
            var n = l(1377).a,
                c = (l(2112), l(0)),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return e.isOpen ? t("Modal", {
                        attrs: {
                            type: e.$modalTypes.SIDE_PANEL,
                            "trigger-element": e.triggerElement,
                            "has-backdrop": e.hasBackdrop,
                            "force-close-icon": e.isCallMeBackFormValid
                        },
                        on: {
                            closed: e.closeModal
                        },
                        scopedSlots: e._u([{
                            key: "title",
                            fn: function() {
                                return [e._v(e._s(e.$t("callback_popin_title")))]
                            },
                            proxy: !0
                        }, {
                            key: "default",
                            fn: function() {
                                return [t("div", {
                                    staticClass: "lv-call-me-back-modal"
                                }, [e.isLoading ? t("Loader") : ["calendar" === e.contentCondition ? t("CallMeBackCalendar", {
                                    attrs: {
                                        schedules: e.schedules.openSchedules || []
                                    },
                                    on: {
                                        "slot-selected": e.handleSlotSelected
                                    }
                                }) : e._e(), e._v(" "), "success" === e.contentCondition ? t("div", [t("h2", [e._v(e._s(e.$t("callback_popin_success_subtitle")))]), e._v(" "), e.slotSelected ? t("p", {
                                    directives: [{
                                        name: "safe-html",
                                        rawName: "v-safe-html",
                                        value: e.$t("callback_popin_success_description_scheduled", {
                                            selected_slot: e.readableSlot
                                        }),
                                        expression: "\n              $t('callback_popin_success_description_scheduled', { selected_slot: readableSlot })\n            "
                                    }]
                                }) : e._e()]) : e._e(), e._v(" "), "error" === e.contentCondition ? t("div", [t("h2", [e._v(e._s(e.$t("callback_popin_error_subtitle")))]), e._v(" "), t("p", {
                                    directives: [{
                                        name: "safe-html",
                                        rawName: "v-safe-html",
                                        value: e.$t("callback_popin_error_description"),
                                        expression: "$t('callback_popin_error_description')"
                                    }]
                                })]) : e._e(), e._v(" "), "form" === e.contentCondition || "calendar" === e.contentCondition && e.hasSelectedSlot ? t("div", [t("p", {
                                    directives: [{
                                        name: "safe-html",
                                        rawName: "v-safe-html",
                                        value: e.$t("callback_popin_description"),
                                        expression: "$t('callback_popin_description')"
                                    }]
                                }), e._v(" "), t("FormContainer", {
                                    ref: "form",
                                    staticClass: "lv-call-me-back-modal__form",
                                    attrs: {
                                        id: "call-me-back-form",
                                        name: "form-call-me-back",
                                        "pre-populated": { ...e.state
                                        },
                                        "form-schema": e.callMeBackSchema,
                                        "submit-button-label": e.$t("callback_popin_CTA"),
                                        "is-submit-button-disabled": e.isSubmitButtonDisabled
                                    },
                                    on: {
                                        updated: e.handleFormUpdate,
                                        submit: function(t) {
                                            return e.onSubmit(t)
                                        }
                                    },
                                    nativeOn: {
                                        click: function(t) {
                                            return e.handleFormClick.apply(null, arguments)
                                        }
                                    }
                                })], 1) : e._e()]], 2)]
                            },
                            proxy: !0
                        }], null, !1, 3672371661)
                    }) : e._e()
                }), [], !1, null, null, null);
            t.default = component.exports
        },
        939: function(e, t, l) {
            "use strict";
            l.r(t);
            var n = {
                    components: {
                        Icon: l(11).default
                    },
                    props: {
                        value: {
                            type: [String, Number, Object],
                            default: ""
                        },
                        id: {
                            type: String,
                            default: null
                        },
                        name: {
                            type: String,
                            default: ""
                        },
                        title: {
                            type: String,
                            default: null
                        },
                        required: {
                            type: Boolean,
                            default: !1
                        },
                        describedBy: {
                            type: String,
                            default: null
                        },
                        ariaLabel: {
                            type: String,
                            default: null
                        },
                        options: {
                            type: Array,
                            default: () => []
                        },
                        placeholder: {
                            type: String,
                            default: ""
                        },
                        disabled: {
                            type: Boolean,
                            default: !1
                        },
                        dataCsMask: {
                            type: Boolean,
                            default: !1
                        },
                        autocomplete: {
                            type: String,
                            default: null
                        }
                    },
                    computed: {
                        selectedValue: {
                            get() {
                                const e = this.options.find((option => (null == option ? void 0 : option.value) === this.value));
                                return (null == e ? void 0 : e.value) || ""
                            },
                            set(e) {
                                this.$emit("input", e)
                            }
                        },
                        placeholderValue() {
                            return this.placeholder || this.$t("global_select")
                        }
                    }
                },
                c = l(0),
                component = Object(c.a)(n, (function() {
                    var e = this,
                        t = e._self._c;
                    return t("div", {
                        staticClass: "lv-select-dropdown lv-select"
                    }, [t("Icon", {
                        attrs: {
                            name: "controls-chevron-down"
                        }
                    }), e._v(" "), t("select", {
                        directives: [{
                            name: "model",
                            rawName: "v-model",
                            value: e.selectedValue,
                            expression: "selectedValue"
                        }, {
                            name: "validate",
                            rawName: "v-validate"
                        }],
                        attrs: {
                            id: e.id,
                            name: e.name,
                            required: e.required,
                            "aria-describedby": e.describedBy,
                            "aria-label": e.ariaLabel,
                            disabled: e.disabled,
                            "data-cs-mask": e.dataCsMask,
                            title: e.title,
                            autocomplete: e.autocomplete
                        },
                        on: {
                            click: function(t) {
                                return e.$emit("open")
                            },
                            change: function(t) {
                                var l = Array.prototype.filter.call(t.target.options, (function(e) {
                                    return e.selected
                                })).map((function(e) {
                                    return "_value" in e ? e._value : e.value
                                }));
                                e.selectedValue = t.target.multiple ? l : l[0]
                            }
                        }
                    }, [e.value ? e._e() : t("option", {
                        attrs: {
                            value: "",
                            disabled: e.required
                        }
                    }, [e._v("\n      " + e._s(e.placeholderValue) + "\n    ")]), e._v(" "), e._l(e.options, (function(option) {
                        return t("option", {
                            key: option.id || option.value,
                            attrs: {
                                lang: option.lang
                            },
                            domProps: {
                                value: option.value
                            }
                        }, [e._v("\n      " + e._s(option.label) + "\n    ")])
                    }))], 2)], 1)
                }), [], !1, null, null, null);
            t.default = component.exports
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/1c161-5fe77.js.map