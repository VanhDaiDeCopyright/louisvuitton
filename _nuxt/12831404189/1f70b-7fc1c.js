(window.LVWebpackJsonp = window.LVWebpackJsonp || []).push([
    [138], {
        1934: function(t, e, n) {
            "use strict";
            n.r(e), n.d(e, "default", (function() {
                return r
            }));
            var c = n(38),
                o = n(333);

            function r(t) {
                const {
                    client: e
                } = t.app.$sfcc, n = t.store.state.localeContext.dispatchLocale;
                return {
                    getUserContext: async function() {
                        let {
                            storedUser: o,
                            commit: r
                        } = arguments.length > 0 && void 0 !== arguments[0] ? arguments[0] : {};
                        const {
                            userIsLogged: l
                        } = await async function() {
                            const n = {
                                    method: "get",
                                    url: "/".concat(t.$env.getRealm(), "/lvcom-tkn-handlr-eapi/v1/context")
                                },
                                {
                                    data: data
                                } = await e.request(n);
                            return data
                        }();
                        let d = o || {},
                            m = {};
                        r(c.USER_CONTEXT_UPDATE_MUTATION, {
                            userIsLogged: l
                        }, {
                            root: !0
                        }), l ? m = await async function() {
                            const n = {
                                    method: "get",
                                    url: "/".concat(t.$env.getRealm(), "/lvcom-tkn-handlr-eapi/v1/userinfo")
                                },
                                {
                                    data: data
                                } = await e.request(n);
                            return data
                        }() : o || (d = await async function(c) {
                            const o = c ? "?usid=".concat(c) : "",
                                r = {
                                    method: "get",
                                    url: "/".concat(t.$env.getRealm(), "/lvcom-tkn-handlr-eapi/v1/").concat(n, "/guest").concat(o)
                                },
                                {
                                    data: data
                                } = await e.request(r);
                            return data
                        }());
                        return { ...m,
                            ...null !== d && {
                                loginData: d
                            },
                            userIsLogged: l
                        }
                    },
                    getAccountType: async function(t) {
                        let {
                            email: n,
                            businessContext: c
                        } = t;
                        const r = {
                                method: "get",
                                url: "/eco-eu/lvcom-clt-acount-eapi/v1/accounts/".concat(n, "/accountType"),
                                ...c ? {
                                    headers: {
                                        [o.c]: c
                                    }
                                } : {}
                            },
                            {
                                data: data
                            } = await e.request(r);
                        return data
                    }
                }
            }
        }
    }
]);
//# sourceMappingURL=_nuxt/12831404189/1f70b-7fc1c.js.map