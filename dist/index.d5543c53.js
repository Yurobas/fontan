/**
 * Swiper 8.1.4
 * Most modern mobile touch slider and framework with hardware accelerated transitions
 * https://swiperjs.com
 *
 * Copyright 2014-2022 Vladimir Kharlampidi
 *
 * Released under the MIT License
 *
 * Released on: April 24, 2022
 */ !function(e, t) {
    "object" == typeof exports && "undefined" != typeof module ? module.exports = t() : "function" == typeof define && define.amd ? define(t) : (e = "undefined" != typeof globalThis ? globalThis : e || self).Swiper = t();
}(this, function() {
    "use strict";
    function e1(e) {
        return null !== e && "object" == typeof e && "constructor" in e && e.constructor === Object;
    }
    function t1(s, a) {
        void 0 === s && (s = {}), void 0 === a && (a = {}), Object.keys(a).forEach((i)=>{
            void 0 === s[i] ? s[i] = a[i] : e1(a[i]) && e1(s[i]) && Object.keys(a[i]).length > 0 && t1(s[i], a[i]);
        });
    }
    const s1 = {
        body: {},
        addEventListener () {},
        removeEventListener () {},
        activeElement: {
            blur () {},
            nodeName: ""
        },
        querySelector: ()=>null
        ,
        querySelectorAll: ()=>[]
        ,
        getElementById: ()=>null
        ,
        createEvent: ()=>({
                initEvent () {}
            })
        ,
        createElement: ()=>({
                children: [],
                childNodes: [],
                style: {},
                setAttribute () {},
                getElementsByTagName: ()=>[]
            })
        ,
        createElementNS: ()=>({})
        ,
        importNode: ()=>null
        ,
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        }
    };
    function a1() {
        const e = "undefined" != typeof document ? document : {};
        return t1(e, s1), e;
    }
    const i1 = {
        document: s1,
        navigator: {
            userAgent: ""
        },
        location: {
            hash: "",
            host: "",
            hostname: "",
            href: "",
            origin: "",
            pathname: "",
            protocol: "",
            search: ""
        },
        history: {
            replaceState () {},
            pushState () {},
            go () {},
            back () {}
        },
        CustomEvent: function() {
            return this;
        },
        addEventListener () {},
        removeEventListener () {},
        getComputedStyle: ()=>({
                getPropertyValue: ()=>""
            })
        ,
        Image () {},
        Date () {},
        screen: {},
        setTimeout () {},
        clearTimeout () {},
        matchMedia: ()=>({})
        ,
        requestAnimationFrame: (e)=>"undefined" == typeof setTimeout ? (e(), null) : setTimeout(e, 0)
        ,
        cancelAnimationFrame (e) {
            "undefined" != typeof setTimeout && clearTimeout(e);
        }
    };
    function r1() {
        const e = "undefined" != typeof window ? window : {};
        return t1(e, i1), e;
    }
    class n1 extends Array {
        constructor(e2){
            "number" == typeof e2 ? super(e2) : (super(...e2 || []), function(e3) {
                const t = e3.__proto__;
                Object.defineProperty(e3, "__proto__", {
                    get: ()=>t
                    ,
                    set (e) {
                        t.__proto__ = e;
                    }
                });
            }(this));
        }
    }
    function l1(e4) {
        void 0 === e4 && (e4 = []);
        const t = [];
        return e4.forEach((e)=>{
            Array.isArray(e) ? t.push(...l1(e)) : t.push(e);
        }), t;
    }
    function o1(e, t) {
        return Array.prototype.filter.call(e, t);
    }
    function d1(e7, t2) {
        const s3 = r1(), i = a1();
        let l = [];
        if (!t2 && e7 instanceof n1) return e7;
        if (!e7) return new n1(l);
        if ("string" == typeof e7) {
            const s2 = e7.trim();
            if (s2.indexOf("<") >= 0 && s2.indexOf(">") >= 0) {
                let e = "div";
                0 === s2.indexOf("<li") && (e = "ul"), 0 === s2.indexOf("<tr") && (e = "tbody"), 0 !== s2.indexOf("<td") && 0 !== s2.indexOf("<th") || (e = "tr"), 0 === s2.indexOf("<tbody") && (e = "table"), 0 === s2.indexOf("<option") && (e = "select");
                const t = i.createElement(e);
                t.innerHTML = s2;
                for(let e5 = 0; e5 < t.childNodes.length; e5 += 1)l.push(t.childNodes[e5]);
            } else l = function(e, t) {
                if ("string" != typeof e) return [
                    e
                ];
                const s = [], a = t.querySelectorAll(e);
                for(let e6 = 0; e6 < a.length; e6 += 1)s.push(a[e6]);
                return s;
            }(e7.trim(), t2 || i);
        } else if (e7.nodeType || e7 === s3 || e7 === i) l.push(e7);
        else if (Array.isArray(e7)) {
            if (e7 instanceof n1) return e7;
            l = e7;
        }
        return new n1(function(e) {
            const t = [];
            for(let s = 0; s < e.length; s += 1)-1 === t.indexOf(e[s]) && t.push(e[s]);
            return t;
        }(l));
    }
    d1.fn = n1.prototype;
    const c1 = {
        addClass: function() {
            for(var e8 = arguments.length, t = new Array(e8), s = 0; s < e8; s++)t[s] = arguments[s];
            const a = l1(t.map((e)=>e.split(" ")
            ));
            return this.forEach((e)=>{
                e.classList.add(...a);
            }), this;
        },
        removeClass: function() {
            for(var e9 = arguments.length, t = new Array(e9), s = 0; s < e9; s++)t[s] = arguments[s];
            const a = l1(t.map((e)=>e.split(" ")
            ));
            return this.forEach((e)=>{
                e.classList.remove(...a);
            }), this;
        },
        hasClass: function() {
            for(var e10 = arguments.length, t3 = new Array(e10), s = 0; s < e10; s++)t3[s] = arguments[s];
            const a = l1(t3.map((e)=>e.split(" ")
            ));
            return o1(this, (e)=>a.filter((t)=>e.classList.contains(t)
                ).length > 0
            ).length > 0;
        },
        toggleClass: function() {
            for(var e11 = arguments.length, t4 = new Array(e11), s = 0; s < e11; s++)t4[s] = arguments[s];
            const a = l1(t4.map((e)=>e.split(" ")
            ));
            this.forEach((e)=>{
                a.forEach((t)=>{
                    e.classList.toggle(t);
                });
            });
        },
        attr: function(e, t) {
            if (1 === arguments.length && "string" == typeof e) return this[0] ? this[0].getAttribute(e) : void 0;
            for(let s = 0; s < this.length; s += 1)if (2 === arguments.length) this[s].setAttribute(e, t);
            else for(const t5 in e)this[s][t5] = e[t5], this[s].setAttribute(t5, e[t5]);
            return this;
        },
        removeAttr: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].removeAttribute(e);
            return this;
        },
        transform: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].style.transform = e;
            return this;
        },
        transition: function(e) {
            for(let t = 0; t < this.length; t += 1)this[t].style.transitionDuration = "string" != typeof e ? `${e}ms` : e;
            return this;
        },
        on: function() {
            for(var e13 = arguments.length, t6 = new Array(e13), s4 = 0; s4 < e13; s4++)t6[s4] = arguments[s4];
            let [a, i, r, n] = t6;
            function l(e) {
                const t = e.target;
                if (!t) return;
                const s = e.target.dom7EventData || [];
                if (s.indexOf(e) < 0 && s.unshift(e), d1(t).is(i)) r.apply(t, s);
                else {
                    const e = d1(t).parents();
                    for(let t7 = 0; t7 < e.length; t7 += 1)d1(e[t7]).is(i) && r.apply(e[t7], s);
                }
            }
            function o(e) {
                const t = e && e.target && e.target.dom7EventData || [];
                t.indexOf(e) < 0 && t.unshift(e), r.apply(this, t);
            }
            "function" == typeof t6[1] && ([a, r, n] = t6, i = void 0), n || (n = !1);
            const c = a.split(" ");
            let p;
            for(let e12 = 0; e12 < this.length; e12 += 1){
                const t = this[e12];
                if (i) for(p = 0; p < c.length; p += 1){
                    const e = c[p];
                    t.dom7LiveListeners || (t.dom7LiveListeners = {}), t.dom7LiveListeners[e] || (t.dom7LiveListeners[e] = []), t.dom7LiveListeners[e].push({
                        listener: r,
                        proxyListener: l
                    }), t.addEventListener(e, l, n);
                }
                else for(p = 0; p < c.length; p += 1){
                    const e = c[p];
                    t.dom7Listeners || (t.dom7Listeners = {}), t.dom7Listeners[e] || (t.dom7Listeners[e] = []), t.dom7Listeners[e].push({
                        listener: r,
                        proxyListener: o
                    }), t.addEventListener(e, o, n);
                }
            }
            return this;
        },
        off: function() {
            for(var e = arguments.length, t = new Array(e), s = 0; s < e; s++)t[s] = arguments[s];
            let [a, i, r, n] = t;
            "function" == typeof t[1] && ([a, r, n] = t, i = void 0), n || (n = !1);
            const l = a.split(" ");
            for(let e14 = 0; e14 < l.length; e14 += 1){
                const t = l[e14];
                for(let e = 0; e < this.length; e += 1){
                    const s = this[e];
                    let a;
                    if (!i && s.dom7Listeners ? a = s.dom7Listeners[t] : i && s.dom7LiveListeners && (a = s.dom7LiveListeners[t]), a && a.length) for(let e15 = a.length - 1; e15 >= 0; e15 -= 1){
                        const i = a[e15];
                        r && i.listener === r || r && i.listener && i.listener.dom7proxy && i.listener.dom7proxy === r ? (s.removeEventListener(t, i.proxyListener, n), a.splice(e15, 1)) : r || (s.removeEventListener(t, i.proxyListener, n), a.splice(e15, 1));
                    }
                }
            }
            return this;
        },
        trigger: function() {
            const e = r1();
            for(var t = arguments.length, s = new Array(t), a = 0; a < t; a++)s[a] = arguments[a];
            const i = s[0].split(" "), n = s[1];
            for(let t8 = 0; t8 < i.length; t8 += 1){
                const a = i[t8];
                for(let t = 0; t < this.length; t += 1){
                    const i = this[t];
                    if (e.CustomEvent) {
                        const t9 = new e.CustomEvent(a, {
                            detail: n,
                            bubbles: !0,
                            cancelable: !0
                        });
                        i.dom7EventData = s.filter((e, t)=>t > 0
                        ), i.dispatchEvent(t9), i.dom7EventData = [], delete i.dom7EventData;
                    }
                }
            }
            return this;
        },
        transitionEnd: function(e) {
            const t = this;
            return e && t.on("transitionend", function s(a) {
                a.target === this && (e.call(this, a), t.off("transitionend", s));
            }), this;
        },
        outerWidth: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetWidth + parseFloat(e.getPropertyValue("margin-right")) + parseFloat(e.getPropertyValue("margin-left"));
                }
                return this[0].offsetWidth;
            }
            return null;
        },
        outerHeight: function(e) {
            if (this.length > 0) {
                if (e) {
                    const e = this.styles();
                    return this[0].offsetHeight + parseFloat(e.getPropertyValue("margin-top")) + parseFloat(e.getPropertyValue("margin-bottom"));
                }
                return this[0].offsetHeight;
            }
            return null;
        },
        styles: function() {
            const e = r1();
            return this[0] ? e.getComputedStyle(this[0], null) : {};
        },
        offset: function() {
            if (this.length > 0) {
                const e = r1(), t = a1(), s = this[0], i = s.getBoundingClientRect(), n = t.body, l = s.clientTop || n.clientTop || 0, o = s.clientLeft || n.clientLeft || 0, d = s === e ? e.scrollY : s.scrollTop, c = s === e ? e.scrollX : s.scrollLeft;
                return {
                    top: i.top + d - l,
                    left: i.left + c - o
                };
            }
            return null;
        },
        css: function(e, t) {
            const s = r1();
            let a;
            if (1 === arguments.length) {
                if ("string" != typeof e) {
                    for(a = 0; a < this.length; a += 1)for(const t in e)this[a].style[t] = e[t];
                    return this;
                }
                if (this[0]) return s.getComputedStyle(this[0], null).getPropertyValue(e);
            }
            if (2 === arguments.length && "string" == typeof e) {
                for(a = 0; a < this.length; a += 1)this[a].style[e] = t;
                return this;
            }
            return this;
        },
        each: function(e) {
            return e ? (this.forEach((t, s)=>{
                e.apply(t, [
                    t,
                    s
                ]);
            }), this) : this;
        },
        html: function(e) {
            if (void 0 === e) return this[0] ? this[0].innerHTML : null;
            for(let t = 0; t < this.length; t += 1)this[t].innerHTML = e;
            return this;
        },
        text: function(e) {
            if (void 0 === e) return this[0] ? this[0].textContent.trim() : null;
            for(let t = 0; t < this.length; t += 1)this[t].textContent = e;
            return this;
        },
        is: function(e) {
            const t = r1(), s = a1(), i = this[0];
            let l, o;
            if (!i || void 0 === e) return !1;
            if ("string" == typeof e) {
                if (i.matches) return i.matches(e);
                if (i.webkitMatchesSelector) return i.webkitMatchesSelector(e);
                if (i.msMatchesSelector) return i.msMatchesSelector(e);
                for(l = d1(e), o = 0; o < l.length; o += 1)if (l[o] === i) return !0;
                return !1;
            }
            if (e === s) return i === s;
            if (e === t) return i === t;
            if (e.nodeType || e instanceof n1) {
                for(l = e.nodeType ? [
                    e
                ] : e, o = 0; o < l.length; o += 1)if (l[o] === i) return !0;
                return !1;
            }
            return !1;
        },
        index: function() {
            let e, t = this[0];
            if (t) {
                for(e = 0; null !== (t = t.previousSibling);)1 === t.nodeType && (e += 1);
                return e;
            }
        },
        eq: function(e) {
            if (void 0 === e) return this;
            const t = this.length;
            if (e > t - 1) return d1([]);
            if (e < 0) {
                const s = t + e;
                return d1(s < 0 ? [] : [
                    this[s]
                ]);
            }
            return d1([
                this[e]
            ]);
        },
        append: function() {
            let e;
            const t = a1();
            for(let s = 0; s < arguments.length; s += 1){
                e = s < 0 || arguments.length <= s ? void 0 : arguments[s];
                for(let s5 = 0; s5 < this.length; s5 += 1)if ("string" == typeof e) {
                    const a = t.createElement("div");
                    for(a.innerHTML = e; a.firstChild;)this[s5].appendChild(a.firstChild);
                } else if (e instanceof n1) for(let t11 = 0; t11 < e.length; t11 += 1)this[s5].appendChild(e[t11]);
                else this[s5].appendChild(e);
            }
            return this;
        },
        prepend: function(e) {
            const t = a1();
            let s, i;
            for(s = 0; s < this.length; s += 1)if ("string" == typeof e) {
                const a = t.createElement("div");
                for(a.innerHTML = e, i = a.childNodes.length - 1; i >= 0; i -= 1)this[s].insertBefore(a.childNodes[i], this[s].childNodes[0]);
            } else if (e instanceof n1) for(i = 0; i < e.length; i += 1)this[s].insertBefore(e[i], this[s].childNodes[0]);
            else this[s].insertBefore(e, this[s].childNodes[0]);
            return this;
        },
        next: function(e) {
            return this.length > 0 ? e ? this[0].nextElementSibling && d1(this[0].nextElementSibling).is(e) ? d1([
                this[0].nextElementSibling
            ]) : d1([]) : this[0].nextElementSibling ? d1([
                this[0].nextElementSibling
            ]) : d1([]) : d1([]);
        },
        nextAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d1([]);
            for(; s.nextElementSibling;){
                const a = s.nextElementSibling;
                e ? d1(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d1(t);
        },
        prev: function(e) {
            if (this.length > 0) {
                const t = this[0];
                return e ? t.previousElementSibling && d1(t.previousElementSibling).is(e) ? d1([
                    t.previousElementSibling
                ]) : d1([]) : t.previousElementSibling ? d1([
                    t.previousElementSibling
                ]) : d1([]);
            }
            return d1([]);
        },
        prevAll: function(e) {
            const t = [];
            let s = this[0];
            if (!s) return d1([]);
            for(; s.previousElementSibling;){
                const a = s.previousElementSibling;
                e ? d1(a).is(e) && t.push(a) : t.push(a), s = a;
            }
            return d1(t);
        },
        parent: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1)null !== this[s].parentNode && (e ? d1(this[s].parentNode).is(e) && t.push(this[s].parentNode) : t.push(this[s].parentNode));
            return d1(t);
        },
        parents: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                let a = this[s].parentNode;
                for(; a;)e ? d1(a).is(e) && t.push(a) : t.push(a), a = a.parentNode;
            }
            return d1(t);
        },
        closest: function(e) {
            let t = this;
            return void 0 === e ? d1([]) : (t.is(e) || (t = t.parents(e).eq(0)), t);
        },
        find: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                const a = this[s].querySelectorAll(e);
                for(let e16 = 0; e16 < a.length; e16 += 1)t.push(a[e16]);
            }
            return d1(t);
        },
        children: function(e) {
            const t = [];
            for(let s = 0; s < this.length; s += 1){
                const a = this[s].children;
                for(let s6 = 0; s6 < a.length; s6 += 1)e && !d1(a[s6]).is(e) || t.push(a[s6]);
            }
            return d1(t);
        },
        filter: function(e) {
            return d1(o1(this, e));
        },
        remove: function() {
            for(let e = 0; e < this.length; e += 1)this[e].parentNode && this[e].parentNode.removeChild(this[e]);
            return this;
        }
    };
    function p1(e, t) {
        return void 0 === t && (t = 0), setTimeout(e, t);
    }
    function u1() {
        return Date.now();
    }
    function h1(e17, t12) {
        void 0 === t12 && (t12 = "x");
        const s7 = r1();
        let a, i, n;
        const l = function(e) {
            const t = r1();
            let s;
            return t.getComputedStyle && (s = t.getComputedStyle(e, null)), !s && e.currentStyle && (s = e.currentStyle), s || (s = e.style), s;
        }(e17);
        return s7.WebKitCSSMatrix ? (i = l.transform || l.webkitTransform, i.split(",").length > 6 && (i = i.split(", ").map((e)=>e.replace(",", ".")
        ).join(", ")), n = new s7.WebKitCSSMatrix("none" === i ? "" : i)) : (n = l.MozTransform || l.OTransform || l.MsTransform || l.msTransform || l.transform || l.getPropertyValue("transform").replace("translate(", "matrix(1, 0, 0, 1,"), a = n.toString().split(",")), "x" === t12 && (i = s7.WebKitCSSMatrix ? n.m41 : 16 === a.length ? parseFloat(a[12]) : parseFloat(a[4])), "y" === t12 && (i = s7.WebKitCSSMatrix ? n.m42 : 16 === a.length ? parseFloat(a[13]) : parseFloat(a[5])), i || 0;
    }
    function m1(e) {
        return "object" == typeof e && null !== e && e.constructor && "Object" === Object.prototype.toString.call(e).slice(8, -1);
    }
    function f1(e) {
        return "undefined" != typeof window && void 0 !== window.HTMLElement ? e instanceof HTMLElement : e && (1 === e.nodeType || 11 === e.nodeType);
    }
    function g1() {
        const e18 = Object(arguments.length <= 0 ? void 0 : arguments[0]), t = [
            "__proto__",
            "constructor",
            "prototype"
        ];
        for(let s = 1; s < arguments.length; s += 1){
            const a = s < 0 || arguments.length <= s ? void 0 : arguments[s];
            if (null != a && !f1(a)) {
                const s = Object.keys(Object(a)).filter((e)=>t.indexOf(e) < 0
                );
                for(let t13 = 0, i = s.length; t13 < i; t13 += 1){
                    const i = s[t13], r = Object.getOwnPropertyDescriptor(a, i);
                    void 0 !== r && r.enumerable && (m1(e18[i]) && m1(a[i]) ? a[i].__swiper__ ? e18[i] = a[i] : g1(e18[i], a[i]) : !m1(e18[i]) && m1(a[i]) ? (e18[i] = {}, a[i].__swiper__ ? e18[i] = a[i] : g1(e18[i], a[i])) : e18[i] = a[i]);
                }
            }
        }
        return e18;
    }
    function v1(e, t, s) {
        e.style.setProperty(t, s);
    }
    function w1(e19) {
        let { swiper: t15 , targetPosition: s , side: a  } = e19;
        const i = r1(), n = -t15.translate;
        let l, o = null;
        const d = t15.params.speed;
        t15.wrapperEl.style.scrollSnapType = "none", i.cancelAnimationFrame(t15.cssModeFrameID);
        const c2 = s > n ? "next" : "prev", p = (e, t)=>"next" === c2 && e >= t || "prev" === c2 && e <= t
        , u = ()=>{
            l = (new Date).getTime(), null === o && (o = l);
            const e = Math.max(Math.min((l - o) / d, 1), 0), r = 0.5 - Math.cos(e * Math.PI) / 2;
            let c = n + r * (s - n);
            if (p(c, s) && (c = s), t15.wrapperEl.scrollTo({
                [a]: c
            }), p(c, s)) return t15.wrapperEl.style.overflow = "hidden", t15.wrapperEl.style.scrollSnapType = "", setTimeout(()=>{
                t15.wrapperEl.style.overflow = "", t15.wrapperEl.scrollTo({
                    [a]: c
                });
            }), void i.cancelAnimationFrame(t15.cssModeFrameID);
            t15.cssModeFrameID = i.requestAnimationFrame(u);
        };
        u();
    }
    let b1, x1, y1;
    function E1() {
        return b1 || (b1 = function() {
            const e = r1(), t16 = a1();
            return {
                smoothScroll: t16.documentElement && "scrollBehavior" in t16.documentElement.style,
                touch: !!("ontouchstart" in e || e.DocumentTouch && t16 instanceof e.DocumentTouch),
                passiveListener: function() {
                    let t = !1;
                    try {
                        const s = Object.defineProperty({}, "passive", {
                            get () {
                                t = !0;
                            }
                        });
                        e.addEventListener("testPassiveListener", null, s);
                    } catch (e) {}
                    return t;
                }(),
                gestures: "ongesturestart" in e
            };
        }()), b1;
    }
    function T1(e20) {
        return void 0 === e20 && (e20 = {}), x1 || (x1 = function(e) {
            let { userAgent: t  } = void 0 === e ? {} : e;
            const s = E1(), a = r1(), i = a.navigator.platform, n = t || a.navigator.userAgent, l = {
                ios: !1,
                android: !1
            }, o = a.screen.width, d = a.screen.height, c = n.match(/(Android);?[\s\/]+([\d.]+)?/);
            let p = n.match(/(iPad).*OS\s([\d_]+)/);
            const u = n.match(/(iPod)(.*OS\s([\d_]+))?/), h = !p && n.match(/(iPhone\sOS|iOS)\s([\d_]+)/), m = "Win32" === i;
            let f = "MacIntel" === i;
            return !p && f && s.touch && [
                "1024x1366",
                "1366x1024",
                "834x1194",
                "1194x834",
                "834x1112",
                "1112x834",
                "768x1024",
                "1024x768",
                "820x1180",
                "1180x820",
                "810x1080",
                "1080x810"
            ].indexOf(`${o}x${d}`) >= 0 && (p = n.match(/(Version)\/([\d.]+)/), p || (p = [
                0,
                1,
                "13_0_0"
            ]), f = !1), c && !m && (l.os = "android", l.android = !0), (p || h || u) && (l.os = "ios", l.ios = !0), l;
        }(e20)), x1;
    }
    function C1() {
        return y1 || (y1 = function() {
            const e = r1();
            return {
                isSafari: function() {
                    const t = e.navigator.userAgent.toLowerCase();
                    return t.indexOf("safari") >= 0 && t.indexOf("chrome") < 0 && t.indexOf("android") < 0;
                }(),
                isWebView: /(iPhone|iPod|iPad).*AppleWebKit(?!.*Safari)/i.test(e.navigator.userAgent)
            };
        }()), y1;
    }
    Object.keys(c1).forEach((e)=>{
        Object.defineProperty(d1.fn, e, {
            value: c1[e],
            writable: !0
        });
    });
    var $1 = {
        on (e21, t, s) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            const i = s ? "unshift" : "push";
            return e21.split(" ").forEach((e)=>{
                a.eventsListeners[e] || (a.eventsListeners[e] = []), a.eventsListeners[e][i](t);
            }), a;
        },
        once (e, t, s8) {
            const a = this;
            if (!a.eventsListeners || a.destroyed) return a;
            if ("function" != typeof t) return a;
            function i() {
                a.off(e, i), i.__emitterProxy && delete i.__emitterProxy;
                for(var s = arguments.length, r = new Array(s), n = 0; n < s; n++)r[n] = arguments[n];
                t.apply(a, r);
            }
            return i.__emitterProxy = t, a.on(e, i, s8);
        },
        onAny (e, t) {
            const s = this;
            if (!s.eventsListeners || s.destroyed) return s;
            if ("function" != typeof e) return s;
            const a = t ? "unshift" : "push";
            return s.eventsAnyListeners.indexOf(e) < 0 && s.eventsAnyListeners[a](e), s;
        },
        offAny (e) {
            const t = this;
            if (!t.eventsListeners || t.destroyed) return t;
            if (!t.eventsAnyListeners) return t;
            const s = t.eventsAnyListeners.indexOf(e);
            return s >= 0 && t.eventsAnyListeners.splice(s, 1), t;
        },
        off (e22, t) {
            const s = this;
            return !s.eventsListeners || s.destroyed ? s : s.eventsListeners ? (e22.split(" ").forEach((e)=>{
                void 0 === t ? s.eventsListeners[e] = [] : s.eventsListeners[e] && s.eventsListeners[e].forEach((a, i)=>{
                    (a === t || a.__emitterProxy && a.__emitterProxy === t) && s.eventsListeners[e].splice(i, 1);
                });
            }), s) : s;
        },
        emit () {
            const e23 = this;
            if (!e23.eventsListeners || e23.destroyed) return e23;
            if (!e23.eventsListeners) return e23;
            let t17, s, a;
            for(var i = arguments.length, r = new Array(i), n = 0; n < i; n++)r[n] = arguments[n];
            "string" == typeof r[0] || Array.isArray(r[0]) ? (t17 = r[0], s = r.slice(1, r.length), a = e23) : (t17 = r[0].events, s = r[0].data, a = r[0].context || e23), s.unshift(a);
            return (Array.isArray(t17) ? t17 : t17.split(" ")).forEach((t)=>{
                e23.eventsAnyListeners && e23.eventsAnyListeners.length && e23.eventsAnyListeners.forEach((e)=>{
                    e.apply(a, [
                        t,
                        ...s
                    ]);
                }), e23.eventsListeners && e23.eventsListeners[t] && e23.eventsListeners[t].forEach((e)=>{
                    e.apply(a, s);
                });
            }), e23;
        }
    };
    var S1 = {
        updateSize: function() {
            const e = this;
            let t, s;
            const a = e.$el;
            t = void 0 !== e.params.width && null !== e.params.width ? e.params.width : a[0].clientWidth, s = void 0 !== e.params.height && null !== e.params.height ? e.params.height : a[0].clientHeight, 0 === t && e.isHorizontal() || 0 === s && e.isVertical() || (t = t - parseInt(a.css("padding-left") || 0, 10) - parseInt(a.css("padding-right") || 0, 10), s = s - parseInt(a.css("padding-top") || 0, 10) - parseInt(a.css("padding-bottom") || 0, 10), Number.isNaN(t) && (t = 0), Number.isNaN(s) && (s = 0), Object.assign(e, {
                width: t,
                height: s,
                size: e.isHorizontal() ? t : s
            }));
        },
        updateSlides: function() {
            const e24 = this;
            function t18(t) {
                return e24.isHorizontal() ? t : ({
                    width: "height",
                    "margin-top": "margin-left",
                    "margin-bottom ": "margin-right",
                    "margin-left": "margin-top",
                    "margin-right": "margin-bottom",
                    "padding-left": "padding-top",
                    "padding-right": "padding-bottom",
                    marginRight: "marginBottom"
                })[t];
            }
            function s9(e, s) {
                return parseFloat(e.getPropertyValue(t18(s)) || 0);
            }
            const a = e24.params, { $wrapperEl: i , size: r , rtlTranslate: n , wrongRTL: l  } = e24, o = e24.virtual && a.virtual.enabled, d = o ? e24.virtual.slides.length : e24.slides.length, c = i.children(`.${e24.params.slideClass}`), p = o ? e24.virtual.slides.length : c.length;
            let u = [];
            const h = [], m = [];
            let f = a.slidesOffsetBefore;
            "function" == typeof f && (f = a.slidesOffsetBefore.call(e24));
            let g = a.slidesOffsetAfter;
            "function" == typeof g && (g = a.slidesOffsetAfter.call(e24));
            const w = e24.snapGrid.length, b = e24.slidesGrid.length;
            let x = a.spaceBetween, y = -f, E = 0, T = 0;
            if (void 0 === r) return;
            "string" == typeof x && x.indexOf("%") >= 0 && (x = parseFloat(x.replace("%", "")) / 100 * r), e24.virtualSize = -x, n ? c.css({
                marginLeft: "",
                marginBottom: "",
                marginTop: ""
            }) : c.css({
                marginRight: "",
                marginBottom: "",
                marginTop: ""
            }), a.centeredSlides && a.cssMode && (v1(e24.wrapperEl, "--swiper-centered-offset-before", ""), v1(e24.wrapperEl, "--swiper-centered-offset-after", ""));
            const C = a.grid && a.grid.rows > 1 && e24.grid;
            let $;
            C && e24.grid.initSlides(p);
            const S = "auto" === a.slidesPerView && a.breakpoints && Object.keys(a.breakpoints).filter((e)=>void 0 !== a.breakpoints[e].slidesPerView
            ).length > 0;
            for(let i2 = 0; i2 < p; i2 += 1){
                $ = 0;
                const n = c.eq(i2);
                if (C && e24.grid.updateSlide(i2, n, p, t18), "none" !== n.css("display")) {
                    if ("auto" === a.slidesPerView) {
                        S && (c[i2].style[t18("width")] = "");
                        const r = getComputedStyle(n[0]), l = n[0].style.transform, o = n[0].style.webkitTransform;
                        if (l && (n[0].style.transform = "none"), o && (n[0].style.webkitTransform = "none"), a.roundLengths) $ = e24.isHorizontal() ? n.outerWidth(!0) : n.outerHeight(!0);
                        else {
                            const e = s9(r, "width"), t = s9(r, "padding-left"), a = s9(r, "padding-right"), i = s9(r, "margin-left"), l = s9(r, "margin-right"), o = r.getPropertyValue("box-sizing");
                            if (o && "border-box" === o) $ = e + i + l;
                            else {
                                const { clientWidth: s , offsetWidth: r  } = n[0];
                                $ = e + t + a + i + l + (r - s);
                            }
                        }
                        l && (n[0].style.transform = l), o && (n[0].style.webkitTransform = o), a.roundLengths && ($ = Math.floor($));
                    } else $ = (r - (a.slidesPerView - 1) * x) / a.slidesPerView, a.roundLengths && ($ = Math.floor($)), c[i2] && (c[i2].style[t18("width")] = `${$}px`);
                    c[i2] && (c[i2].swiperSlideSize = $), m.push($), a.centeredSlides ? (y = y + $ / 2 + E / 2 + x, 0 === E && 0 !== i2 && (y = y - r / 2 - x), 0 === i2 && (y = y - r / 2 - x), Math.abs(y) < 0.001 && (y = 0), a.roundLengths && (y = Math.floor(y)), T % a.slidesPerGroup == 0 && u.push(y), h.push(y)) : (a.roundLengths && (y = Math.floor(y)), (T - Math.min(e24.params.slidesPerGroupSkip, T)) % e24.params.slidesPerGroup == 0 && u.push(y), h.push(y), y = y + $ + x), e24.virtualSize += $ + x, E = $, T += 1;
                }
            }
            if (e24.virtualSize = Math.max(e24.virtualSize, r) + g, n && l && ("slide" === a.effect || "coverflow" === a.effect) && i.css({
                width: `${e24.virtualSize + a.spaceBetween}px`
            }), a.setWrapperSize && i.css({
                [t18("width")]: `${e24.virtualSize + a.spaceBetween}px`
            }), C && e24.grid.updateWrapperSize($, u, t18), !a.centeredSlides) {
                const t = [];
                for(let s = 0; s < u.length; s += 1){
                    let i = u[s];
                    a.roundLengths && (i = Math.floor(i)), u[s] <= e24.virtualSize - r && t.push(i);
                }
                u = t, Math.floor(e24.virtualSize - r) - Math.floor(u[u.length - 1]) > 1 && u.push(e24.virtualSize - r);
            }
            if (0 === u.length && (u = [
                0
            ]), 0 !== a.spaceBetween) {
                const s = e24.isHorizontal() && n ? "marginLeft" : t18("marginRight");
                c.filter((e, t)=>!a.cssMode || t !== c.length - 1
                ).css({
                    [s]: `${x}px`
                });
            }
            if (a.centeredSlides && a.centeredSlidesBounds) {
                let e25 = 0;
                m.forEach((t)=>{
                    e25 += t + (a.spaceBetween ? a.spaceBetween : 0);
                }), e25 -= a.spaceBetween;
                const t19 = e25 - r;
                u = u.map((e)=>e < 0 ? -f : e > t19 ? t19 + g : e
                );
            }
            if (a.centerInsufficientSlides) {
                let e27 = 0;
                if (m.forEach((t)=>{
                    e27 += t + (a.spaceBetween ? a.spaceBetween : 0);
                }), e27 -= a.spaceBetween, e27 < r) {
                    const t = (r - e27) / 2;
                    u.forEach((e, s)=>{
                        u[s] = e - t;
                    }), h.forEach((e, s)=>{
                        h[s] = e + t;
                    });
                }
            }
            if (Object.assign(e24, {
                slides: c,
                snapGrid: u,
                slidesGrid: h,
                slidesSizesGrid: m
            }), a.centeredSlides && a.cssMode && !a.centeredSlidesBounds) {
                v1(e24.wrapperEl, "--swiper-centered-offset-before", -u[0] + "px"), v1(e24.wrapperEl, "--swiper-centered-offset-after", e24.size / 2 - m[m.length - 1] / 2 + "px");
                const t = -e24.snapGrid[0], s = -e24.slidesGrid[0];
                e24.snapGrid = e24.snapGrid.map((e)=>e + t
                ), e24.slidesGrid = e24.slidesGrid.map((e)=>e + s
                );
            }
            if (p !== d && e24.emit("slidesLengthChange"), u.length !== w && (e24.params.watchOverflow && e24.checkOverflow(), e24.emit("snapGridLengthChange")), h.length !== b && e24.emit("slidesGridLengthChange"), a.watchSlidesProgress && e24.updateSlidesOffset(), !(o || a.cssMode || "slide" !== a.effect && "fade" !== a.effect)) {
                const t = `${a.containerModifierClass}backface-hidden`, s = e24.$el.hasClass(t);
                p <= a.maxBackfaceHiddenSlides ? s || e24.$el.addClass(t) : s && e24.$el.removeClass(t);
            }
        },
        updateAutoHeight: function(e29) {
            const t21 = this, s = [], a = t21.virtual && t21.params.virtual.enabled;
            let i, r = 0;
            "number" == typeof e29 ? t21.setTransition(e29) : !0 === e29 && t21.setTransition(t21.params.speed);
            const n = (e)=>a ? t21.slides.filter((t)=>parseInt(t.getAttribute("data-swiper-slide-index"), 10) === e
                )[0] : t21.slides.eq(e)[0]
            ;
            if ("auto" !== t21.params.slidesPerView && t21.params.slidesPerView > 1) {
                if (t21.params.centeredSlides) t21.visibleSlides.each((e)=>{
                    s.push(e);
                });
                else for(i = 0; i < Math.ceil(t21.params.slidesPerView); i += 1){
                    const e = t21.activeIndex + i;
                    if (e > t21.slides.length && !a) break;
                    s.push(n(e));
                }
            } else s.push(n(t21.activeIndex));
            for(i = 0; i < s.length; i += 1)if (void 0 !== s[i]) {
                const e = s[i].offsetHeight;
                r = e > r ? e : r;
            }
            (r || 0 === r) && t21.$wrapperEl.css("height", `${r}px`);
        },
        updateSlidesOffset: function() {
            const e = this, t = e.slides;
            for(let s = 0; s < t.length; s += 1)t[s].swiperSlideOffset = e.isHorizontal() ? t[s].offsetLeft : t[s].offsetTop;
        },
        updateSlidesProgress: function(e) {
            void 0 === e && (e = this && this.translate || 0);
            const t = this, s = t.params, { slides: a , rtlTranslate: i , snapGrid: r  } = t;
            if (0 === a.length) return;
            void 0 === a[0].swiperSlideOffset && t.updateSlidesOffset();
            let n = -e;
            i && (n = e), a.removeClass(s.slideVisibleClass), t.visibleSlidesIndexes = [], t.visibleSlides = [];
            for(let e30 = 0; e30 < a.length; e30 += 1){
                const l = a[e30];
                let o = l.swiperSlideOffset;
                s.cssMode && s.centeredSlides && (o -= a[0].swiperSlideOffset);
                const d = (n + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), c = (n - r[0] + (s.centeredSlides ? t.minTranslate() : 0) - o) / (l.swiperSlideSize + s.spaceBetween), p = -(n - o), u = p + t.slidesSizesGrid[e30];
                (p >= 0 && p < t.size - 1 || u > 1 && u <= t.size || p <= 0 && u >= t.size) && (t.visibleSlides.push(l), t.visibleSlidesIndexes.push(e30), a.eq(e30).addClass(s.slideVisibleClass)), l.progress = i ? -d : d, l.originalProgress = i ? -c : c;
            }
            t.visibleSlides = d1(t.visibleSlides);
        },
        updateProgress: function(e) {
            const t = this;
            if (void 0 === e) {
                const s = t.rtlTranslate ? -1 : 1;
                e = t && t.translate && t.translate * s || 0;
            }
            const s = t.params, a = t.maxTranslate() - t.minTranslate();
            let { progress: i , isBeginning: r , isEnd: n  } = t;
            const l = r, o = n;
            0 === a ? (i = 0, r = !0, n = !0) : (i = (e - t.minTranslate()) / a, r = i <= 0, n = i >= 1), Object.assign(t, {
                progress: i,
                isBeginning: r,
                isEnd: n
            }), (s.watchSlidesProgress || s.centeredSlides && s.autoHeight) && t.updateSlidesProgress(e), r && !l && t.emit("reachBeginning toEdge"), n && !o && t.emit("reachEnd toEdge"), (l && !r || o && !n) && t.emit("fromEdge"), t.emit("progress", i);
        },
        updateSlidesClasses: function() {
            const e = this, { slides: t , params: s , $wrapperEl: a , activeIndex: i , realIndex: r  } = e, n = e.virtual && s.virtual.enabled;
            let l;
            t.removeClass(`${s.slideActiveClass} ${s.slideNextClass} ${s.slidePrevClass} ${s.slideDuplicateActiveClass} ${s.slideDuplicateNextClass} ${s.slideDuplicatePrevClass}`), l = n ? e.$wrapperEl.find(`.${s.slideClass}[data-swiper-slide-index="${i}"]`) : t.eq(i), l.addClass(s.slideActiveClass), s.loop && (l.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${r}"]`).addClass(s.slideDuplicateActiveClass));
            let o = l.nextAll(`.${s.slideClass}`).eq(0).addClass(s.slideNextClass);
            s.loop && 0 === o.length && (o = t.eq(0), o.addClass(s.slideNextClass));
            let d = l.prevAll(`.${s.slideClass}`).eq(0).addClass(s.slidePrevClass);
            s.loop && 0 === d.length && (d = t.eq(-1), d.addClass(s.slidePrevClass)), s.loop && (o.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${o.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicateNextClass), d.hasClass(s.slideDuplicateClass) ? a.children(`.${s.slideClass}:not(.${s.slideDuplicateClass})[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass) : a.children(`.${s.slideClass}.${s.slideDuplicateClass}[data-swiper-slide-index="${d.attr("data-swiper-slide-index")}"]`).addClass(s.slideDuplicatePrevClass)), e.emitSlidesClasses();
        },
        updateActiveIndex: function(e) {
            const t = this, s = t.rtlTranslate ? t.translate : -t.translate, { slidesGrid: a , snapGrid: i , params: r , activeIndex: n , realIndex: l , snapIndex: o  } = t;
            let d, c = e;
            if (void 0 === c) {
                for(let e = 0; e < a.length; e += 1)void 0 !== a[e + 1] ? s >= a[e] && s < a[e + 1] - (a[e + 1] - a[e]) / 2 ? c = e : s >= a[e] && s < a[e + 1] && (c = e + 1) : s >= a[e] && (c = e);
                r.normalizeSlideIndex && (c < 0 || void 0 === c) && (c = 0);
            }
            if (i.indexOf(s) >= 0) d = i.indexOf(s);
            else {
                const e = Math.min(r.slidesPerGroupSkip, c);
                d = e + Math.floor((c - e) / r.slidesPerGroup);
            }
            if (d >= i.length && (d = i.length - 1), c === n) return void (d !== o && (t.snapIndex = d, t.emit("snapIndexChange")));
            const p = parseInt(t.slides.eq(c).attr("data-swiper-slide-index") || c, 10);
            Object.assign(t, {
                snapIndex: d,
                realIndex: p,
                previousIndex: n,
                activeIndex: c
            }), t.emit("activeIndexChange"), t.emit("snapIndexChange"), l !== p && t.emit("realIndexChange"), (t.initialized || t.params.runCallbacksOnInit) && t.emit("slideChange");
        },
        updateClickedSlide: function(e) {
            const t = this, s = t.params, a = d1(e).closest(`.${s.slideClass}`)[0];
            let i, r = !1;
            if (a) {
                for(let e = 0; e < t.slides.length; e += 1)if (t.slides[e] === a) {
                    r = !0, i = e;
                    break;
                }
            }
            if (!a || !r) return t.clickedSlide = void 0, void (t.clickedIndex = void 0);
            t.clickedSlide = a, t.virtual && t.params.virtual.enabled ? t.clickedIndex = parseInt(d1(a).attr("data-swiper-slide-index"), 10) : t.clickedIndex = i, s.slideToClickedSlide && void 0 !== t.clickedIndex && t.clickedIndex !== t.activeIndex && t.slideToClickedSlide();
        }
    };
    var M1 = {
        getTranslate: function(e) {
            void 0 === e && (e = this.isHorizontal() ? "x" : "y");
            const { params: t , rtlTranslate: s , translate: a , $wrapperEl: i  } = this;
            if (t.virtualTranslate) return s ? -a : a;
            if (t.cssMode) return a;
            let r = h1(i[0], e);
            return s && (r = -r), r || 0;
        },
        setTranslate: function(e, t) {
            const s = this, { rtlTranslate: a , params: i , $wrapperEl: r , wrapperEl: n , progress: l  } = s;
            let o, d = 0, c = 0;
            s.isHorizontal() ? d = a ? -e : e : c = e, i.roundLengths && (d = Math.floor(d), c = Math.floor(c)), i.cssMode ? n[s.isHorizontal() ? "scrollLeft" : "scrollTop"] = s.isHorizontal() ? -d : -c : i.virtualTranslate || r.transform(`translate3d(${d}px, ${c}px, 0px)`), s.previousTranslate = s.translate, s.translate = s.isHorizontal() ? d : c;
            const p = s.maxTranslate() - s.minTranslate();
            o = 0 === p ? 0 : (e - s.minTranslate()) / p, o !== l && s.updateProgress(e), s.emit("setTranslate", s.translate, t);
        },
        minTranslate: function() {
            return -this.snapGrid[0];
        },
        maxTranslate: function() {
            return -this.snapGrid[this.snapGrid.length - 1];
        },
        translateTo: function(e31, t, s, a, i) {
            void 0 === e31 && (e31 = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), void 0 === a && (a = !0);
            const r = this, { params: n , wrapperEl: l  } = r;
            if (r.animating && n.preventInteractionOnTransition) return !1;
            const o = r.minTranslate(), d = r.maxTranslate();
            let c;
            if (c = a && e31 > o ? o : a && e31 < d ? d : e31, r.updateProgress(c), n.cssMode) {
                const e = r.isHorizontal();
                if (0 === t) l[e ? "scrollLeft" : "scrollTop"] = -c;
                else {
                    if (!r.support.smoothScroll) return w1({
                        swiper: r,
                        targetPosition: -c,
                        side: e ? "left" : "top"
                    }), !0;
                    l.scrollTo({
                        [e ? "left" : "top"]: -c,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return 0 === t ? (r.setTransition(0), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionEnd"))) : (r.setTransition(t), r.setTranslate(c), s && (r.emit("beforeTransitionStart", t, i), r.emit("transitionStart")), r.animating || (r.animating = !0, r.onTranslateToWrapperTransitionEnd || (r.onTranslateToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd), r.onTranslateToWrapperTransitionEnd = null, delete r.onTranslateToWrapperTransitionEnd, s && r.emit("transitionEnd"));
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onTranslateToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onTranslateToWrapperTransitionEnd))), !0;
        }
    };
    function P1(e) {
        let { swiper: t , runCallbacks: s , direction: a , step: i  } = e;
        const { activeIndex: r , previousIndex: n  } = t;
        let l = a;
        if (l || (l = r > n ? "next" : r < n ? "prev" : "reset"), t.emit(`transition${i}`), s && r !== n) {
            if ("reset" === l) return void t.emit(`slideResetTransition${i}`);
            t.emit(`slideChangeTransition${i}`), "next" === l ? t.emit(`slideNextTransition${i}`) : t.emit(`slidePrevTransition${i}`);
        }
    }
    var k1 = {
        slideTo: function(e33, t, s, a, i) {
            if (void 0 === e33 && (e33 = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0), "number" != typeof e33 && "string" != typeof e33) throw new Error(`The 'index' argument cannot have type other than 'number' or 'string'. [${typeof e33}] given.`);
            if ("string" == typeof e33) {
                const t = parseInt(e33, 10);
                if (!isFinite(t)) throw new Error(`The passed-in 'index' (string) couldn't be converted to 'number'. [${e33}] given.`);
                e33 = t;
            }
            const r = this;
            let n = e33;
            n < 0 && (n = 0);
            const { params: l , snapGrid: o , slidesGrid: d , previousIndex: c , activeIndex: p , rtlTranslate: u , wrapperEl: h , enabled: m  } = r;
            if (r.animating && l.preventInteractionOnTransition || !m && !a && !i) return !1;
            const f = Math.min(r.params.slidesPerGroupSkip, n);
            let g = f + Math.floor((n - f) / r.params.slidesPerGroup);
            g >= o.length && (g = o.length - 1), (p || l.initialSlide || 0) === (c || 0) && s && r.emit("beforeSlideChangeStart");
            const v = -o[g];
            if (r.updateProgress(v), l.normalizeSlideIndex) for(let e32 = 0; e32 < d.length; e32 += 1){
                const t = -Math.floor(100 * v), s = Math.floor(100 * d[e32]), a = Math.floor(100 * d[e32 + 1]);
                void 0 !== d[e32 + 1] ? t >= s && t < a - (a - s) / 2 ? n = e32 : t >= s && t < a && (n = e32 + 1) : t >= s && (n = e32);
            }
            if (r.initialized && n !== p) {
                if (!r.allowSlideNext && v < r.translate && v < r.minTranslate()) return !1;
                if (!r.allowSlidePrev && v > r.translate && v > r.maxTranslate() && (p || 0) !== n) return !1;
            }
            let b;
            if (b = n > p ? "next" : n < p ? "prev" : "reset", u && -v === r.translate || !u && v === r.translate) return r.updateActiveIndex(n), l.autoHeight && r.updateAutoHeight(), r.updateSlidesClasses(), "slide" !== l.effect && r.setTranslate(v), "reset" !== b && (r.transitionStart(s, b), r.transitionEnd(s, b)), !1;
            if (l.cssMode) {
                const e = r.isHorizontal(), s = u ? v : -v;
                if (0 === t) {
                    const t = r.virtual && r.params.virtual.enabled;
                    t && (r.wrapperEl.style.scrollSnapType = "none", r._immediateVirtual = !0), h[e ? "scrollLeft" : "scrollTop"] = s, t && requestAnimationFrame(()=>{
                        r.wrapperEl.style.scrollSnapType = "", r._swiperImmediateVirtual = !1;
                    });
                } else {
                    if (!r.support.smoothScroll) return w1({
                        swiper: r,
                        targetPosition: s,
                        side: e ? "left" : "top"
                    }), !0;
                    h.scrollTo({
                        [e ? "left" : "top"]: s,
                        behavior: "smooth"
                    });
                }
                return !0;
            }
            return r.setTransition(t), r.setTranslate(v), r.updateActiveIndex(n), r.updateSlidesClasses(), r.emit("beforeTransitionStart", t, a), r.transitionStart(s, b), 0 === t ? r.transitionEnd(s, b) : r.animating || (r.animating = !0, r.onSlideToWrapperTransitionEnd || (r.onSlideToWrapperTransitionEnd = function(e) {
                r && !r.destroyed && e.target === this && (r.$wrapperEl[0].removeEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].removeEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd), r.onSlideToWrapperTransitionEnd = null, delete r.onSlideToWrapperTransitionEnd, r.transitionEnd(s, b));
            }), r.$wrapperEl[0].addEventListener("transitionend", r.onSlideToWrapperTransitionEnd), r.$wrapperEl[0].addEventListener("webkitTransitionEnd", r.onSlideToWrapperTransitionEnd)), !0;
        },
        slideToLoop: function(e, t, s, a) {
            void 0 === e && (e = 0), void 0 === t && (t = this.params.speed), void 0 === s && (s = !0);
            const i = this;
            let r = e;
            return i.params.loop && (r += i.loopedSlides), i.slideTo(r, t, s, a);
        },
        slideNext: function(e, t, s) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0);
            const a = this, { animating: i , enabled: r , params: n  } = a;
            if (!r) return a;
            let l = n.slidesPerGroup;
            "auto" === n.slidesPerView && 1 === n.slidesPerGroup && n.slidesPerGroupAuto && (l = Math.max(a.slidesPerViewDynamic("current", !0), 1));
            const o = a.activeIndex < n.slidesPerGroupSkip ? 1 : l;
            if (n.loop) {
                if (i && n.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
            }
            return n.rewind && a.isEnd ? a.slideTo(0, e, t, s) : a.slideTo(a.activeIndex + o, e, t, s);
        },
        slidePrev: function(e34, t22, s10) {
            void 0 === e34 && (e34 = this.params.speed), void 0 === t22 && (t22 = !0);
            const a = this, { params: i , animating: r , snapGrid: n , slidesGrid: l , rtlTranslate: o , enabled: d  } = a;
            if (!d) return a;
            if (i.loop) {
                if (r && i.loopPreventsSlide) return !1;
                a.loopFix(), a._clientLeft = a.$wrapperEl[0].clientLeft;
            }
            function c(e) {
                return e < 0 ? -Math.floor(Math.abs(e)) : Math.floor(e);
            }
            const p = c(o ? a.translate : -a.translate), u = n.map((e)=>c(e)
            );
            let h = n[u.indexOf(p) - 1];
            if (void 0 === h && i.cssMode) {
                let e;
                n.forEach((t, s)=>{
                    p >= t && (e = s);
                }), void 0 !== e && (h = n[e > 0 ? e - 1 : e]);
            }
            let m = 0;
            if (void 0 !== h && (m = l.indexOf(h), m < 0 && (m = a.activeIndex - 1), "auto" === i.slidesPerView && 1 === i.slidesPerGroup && i.slidesPerGroupAuto && (m = m - a.slidesPerViewDynamic("previous", !0) + 1, m = Math.max(m, 0))), i.rewind && a.isBeginning) {
                const i = a.params.virtual && a.params.virtual.enabled && a.virtual ? a.virtual.slides.length - 1 : a.slides.length - 1;
                return a.slideTo(i, e34, t22, s10);
            }
            return a.slideTo(m, e34, t22, s10);
        },
        slideReset: function(e, t, s) {
            return void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), this.slideTo(this.activeIndex, e, t, s);
        },
        slideToClosest: function(e, t, s, a) {
            void 0 === e && (e = this.params.speed), void 0 === t && (t = !0), void 0 === a && (a = 0.5);
            const i = this;
            let r = i.activeIndex;
            const n = Math.min(i.params.slidesPerGroupSkip, r), l = n + Math.floor((r - n) / i.params.slidesPerGroup), o = i.rtlTranslate ? i.translate : -i.translate;
            if (o >= i.snapGrid[l]) {
                const e = i.snapGrid[l];
                o - e > (i.snapGrid[l + 1] - e) * a && (r += i.params.slidesPerGroup);
            } else {
                const e = i.snapGrid[l - 1];
                o - e <= (i.snapGrid[l] - e) * a && (r -= i.params.slidesPerGroup);
            }
            return r = Math.max(r, 0), r = Math.min(r, i.slidesGrid.length - 1), i.slideTo(r, e, t, s);
        },
        slideToClickedSlide: function() {
            const e = this, { params: t , $wrapperEl: s  } = e, a = "auto" === t.slidesPerView ? e.slidesPerViewDynamic() : t.slidesPerView;
            let i, r = e.clickedIndex;
            if (t.loop) {
                if (e.animating) return;
                i = parseInt(d1(e.clickedSlide).attr("data-swiper-slide-index"), 10), t.centeredSlides ? r < e.loopedSlides - a / 2 || r > e.slides.length - e.loopedSlides + a / 2 ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p1(()=>{
                    e.slideTo(r);
                })) : e.slideTo(r) : r > e.slides.length - a ? (e.loopFix(), r = s.children(`.${t.slideClass}[data-swiper-slide-index="${i}"]:not(.${t.slideDuplicateClass})`).eq(0).index(), p1(()=>{
                    e.slideTo(r);
                })) : e.slideTo(r);
            } else e.slideTo(r);
        }
    };
    var z1 = {
        loopCreate: function() {
            const e = this, t23 = a1(), { params: s11 , $wrapperEl: i  } = e, r = i.children().length > 0 ? d1(i.children()[0].parentNode) : i;
            r.children(`.${s11.slideClass}.${s11.slideDuplicateClass}`).remove();
            let n = r.children(`.${s11.slideClass}`);
            if (s11.loopFillGroupWithBlank) {
                const e = s11.slidesPerGroup - n.length % s11.slidesPerGroup;
                if (e !== s11.slidesPerGroup) {
                    for(let a = 0; a < e; a += 1){
                        const e = d1(t23.createElement("div")).addClass(`${s11.slideClass} ${s11.slideBlankClass}`);
                        r.append(e);
                    }
                    n = r.children(`.${s11.slideClass}`);
                }
            }
            "auto" !== s11.slidesPerView || s11.loopedSlides || (s11.loopedSlides = n.length), e.loopedSlides = Math.ceil(parseFloat(s11.loopedSlides || s11.slidesPerView, 10)), e.loopedSlides += s11.loopAdditionalSlides, e.loopedSlides > n.length && (e.loopedSlides = n.length);
            const l = [], o = [];
            n.each((t, s)=>{
                const a = d1(t);
                s < e.loopedSlides && o.push(t), s < n.length && s >= n.length - e.loopedSlides && l.push(t), a.attr("data-swiper-slide-index", s);
            });
            for(let e35 = 0; e35 < o.length; e35 += 1)r.append(d1(o[e35].cloneNode(!0)).addClass(s11.slideDuplicateClass));
            for(let e36 = l.length - 1; e36 >= 0; e36 -= 1)r.prepend(d1(l[e36].cloneNode(!0)).addClass(s11.slideDuplicateClass));
        },
        loopFix: function() {
            const e = this;
            e.emit("beforeLoopFix");
            const { activeIndex: t , slides: s , loopedSlides: a , allowSlidePrev: i , allowSlideNext: r , snapGrid: n , rtlTranslate: l  } = e;
            let o;
            e.allowSlidePrev = !0, e.allowSlideNext = !0;
            const d = -n[t] - e.getTranslate();
            if (t < a) {
                o = s.length - 3 * a + t, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
            } else if (t >= s.length - a) {
                o = -s.length + t + a, o += a;
                e.slideTo(o, 0, !1, !0) && 0 !== d && e.setTranslate((l ? -e.translate : e.translate) - d);
            }
            e.allowSlidePrev = i, e.allowSlideNext = r, e.emit("loopFix");
        },
        loopDestroy: function() {
            const { $wrapperEl: e , params: t , slides: s  } = this;
            e.children(`.${t.slideClass}.${t.slideDuplicateClass},.${t.slideClass}.${t.slideBlankClass}`).remove(), s.removeAttr("data-swiper-slide-index");
        }
    };
    function O1(e37) {
        const t24 = this, s12 = a1(), i = r1(), n = t24.touchEventsData, { params: l , touches: o , enabled: c  } = t24;
        if (!c) return;
        if (t24.animating && l.preventInteractionOnTransition) return;
        !t24.animating && l.cssMode && l.loop && t24.loopFix();
        let p = e37;
        p.originalEvent && (p = p.originalEvent);
        let h = d1(p.target);
        if ("wrapper" === l.touchEventsTarget && !h.closest(t24.wrapperEl).length) return;
        if (n.isTouchEvent = "touchstart" === p.type, !n.isTouchEvent && "which" in p && 3 === p.which) return;
        if (!n.isTouchEvent && "button" in p && p.button > 0) return;
        if (n.isTouched && n.isMoved) return;
        !!l.noSwipingClass && "" !== l.noSwipingClass && p.target && p.target.shadowRoot && e37.path && e37.path[0] && (h = d1(e37.path[0]));
        const m = l.noSwipingSelector ? l.noSwipingSelector : `.${l.noSwipingClass}`, f = !(!p.target || !p.target.shadowRoot);
        if (l.noSwiping && (f ? function(e, t25) {
            return void 0 === t25 && (t25 = this), function t(s) {
                return s && s !== a1() && s !== r1() ? (s.assignedSlot && (s = s.assignedSlot), s.closest(e) || t(s.getRootNode().host)) : null;
            }(t25);
        }(m, p.target) : h.closest(m)[0])) return void (t24.allowClick = !0);
        if (l.swipeHandler && !h.closest(l.swipeHandler)[0]) return;
        o.currentX = "touchstart" === p.type ? p.targetTouches[0].pageX : p.pageX, o.currentY = "touchstart" === p.type ? p.targetTouches[0].pageY : p.pageY;
        const g = o.currentX, v = o.currentY, w = l.edgeSwipeDetection || l.iOSEdgeSwipeDetection, b = l.edgeSwipeThreshold || l.iOSEdgeSwipeThreshold;
        if (w && (g <= b || g >= i.innerWidth - b)) {
            if ("prevent" !== w) return;
            e37.preventDefault();
        }
        if (Object.assign(n, {
            isTouched: !0,
            isMoved: !1,
            allowTouchCallbacks: !0,
            isScrolling: void 0,
            startMoving: void 0
        }), o.startX = g, o.startY = v, n.touchStartTime = u1(), t24.allowClick = !0, t24.updateSize(), t24.swipeDirection = void 0, l.threshold > 0 && (n.allowThresholdMove = !1), "touchstart" !== p.type) {
            let e = !0;
            h.is(n.focusableElements) && (e = !1, "SELECT" === h[0].nodeName && (n.isTouched = !1)), s12.activeElement && d1(s12.activeElement).is(n.focusableElements) && s12.activeElement !== h[0] && s12.activeElement.blur();
            const a = e && t24.allowTouchMove && l.touchStartPreventDefault;
            !l.touchStartForcePreventDefault && !a || h[0].isContentEditable || p.preventDefault();
        }
        t24.params.freeMode && t24.params.freeMode.enabled && t24.freeMode && t24.animating && !l.cssMode && t24.freeMode.onTouchStart(), t24.emit("touchStart", p);
    }
    function L1(e) {
        const t = a1(), s = this, i = s.touchEventsData, { params: r , touches: n , rtlTranslate: l , enabled: o  } = s;
        if (!o) return;
        let c = e;
        if (c.originalEvent && (c = c.originalEvent), !i.isTouched) return void (i.startMoving && i.isScrolling && s.emit("touchMoveOpposite", c));
        if (i.isTouchEvent && "touchmove" !== c.type) return;
        const p = "touchmove" === c.type && c.targetTouches && (c.targetTouches[0] || c.changedTouches[0]), h = "touchmove" === c.type ? p.pageX : c.pageX, m = "touchmove" === c.type ? p.pageY : c.pageY;
        if (c.preventedByNestedSwiper) return n.startX = h, void (n.startY = m);
        if (!s.allowTouchMove) return d1(c.target).is(i.focusableElements) || (s.allowClick = !1), void (i.isTouched && (Object.assign(n, {
            startX: h,
            startY: m,
            currentX: h,
            currentY: m
        }), i.touchStartTime = u1()));
        if (i.isTouchEvent && r.touchReleaseOnEdges && !r.loop) {
            if (s.isVertical()) {
                if (m < n.startY && s.translate <= s.maxTranslate() || m > n.startY && s.translate >= s.minTranslate()) return i.isTouched = !1, void (i.isMoved = !1);
            } else if (h < n.startX && s.translate <= s.maxTranslate() || h > n.startX && s.translate >= s.minTranslate()) return;
        }
        if (i.isTouchEvent && t.activeElement && c.target === t.activeElement && d1(c.target).is(i.focusableElements)) return i.isMoved = !0, void (s.allowClick = !1);
        if (i.allowTouchCallbacks && s.emit("touchMove", c), c.targetTouches && c.targetTouches.length > 1) return;
        n.currentX = h, n.currentY = m;
        const f = n.currentX - n.startX, g = n.currentY - n.startY;
        if (s.params.threshold && Math.sqrt(f ** 2 + g ** 2) < s.params.threshold) return;
        if (void 0 === i.isScrolling) {
            let e;
            s.isHorizontal() && n.currentY === n.startY || s.isVertical() && n.currentX === n.startX ? i.isScrolling = !1 : f * f + g * g >= 25 && (e = 180 * Math.atan2(Math.abs(g), Math.abs(f)) / Math.PI, i.isScrolling = s.isHorizontal() ? e > r.touchAngle : 90 - e > r.touchAngle);
        }
        if (i.isScrolling && s.emit("touchMoveOpposite", c), void 0 === i.startMoving && (n.currentX === n.startX && n.currentY === n.startY || (i.startMoving = !0)), i.isScrolling) return void (i.isTouched = !1);
        if (!i.startMoving) return;
        s.allowClick = !1, !r.cssMode && c.cancelable && c.preventDefault(), r.touchMoveStopPropagation && !r.nested && c.stopPropagation(), i.isMoved || (r.loop && !r.cssMode && s.loopFix(), i.startTranslate = s.getTranslate(), s.setTransition(0), s.animating && s.$wrapperEl.trigger("webkitTransitionEnd transitionend"), i.allowMomentumBounce = !1, !r.grabCursor || !0 !== s.allowSlideNext && !0 !== s.allowSlidePrev || s.setGrabCursor(!0), s.emit("sliderFirstMove", c)), s.emit("sliderMove", c), i.isMoved = !0;
        let v = s.isHorizontal() ? f : g;
        n.diff = v, v *= r.touchRatio, l && (v = -v), s.swipeDirection = v > 0 ? "prev" : "next", i.currentTranslate = v + i.startTranslate;
        let w = !0, b = r.resistanceRatio;
        if (r.touchReleaseOnEdges && (b = 0), v > 0 && i.currentTranslate > s.minTranslate() ? (w = !1, r.resistance && (i.currentTranslate = s.minTranslate() - 1 + (-s.minTranslate() + i.startTranslate + v) ** b)) : v < 0 && i.currentTranslate < s.maxTranslate() && (w = !1, r.resistance && (i.currentTranslate = s.maxTranslate() + 1 - (s.maxTranslate() - i.startTranslate - v) ** b)), w && (c.preventedByNestedSwiper = !0), !s.allowSlideNext && "next" === s.swipeDirection && i.currentTranslate < i.startTranslate && (i.currentTranslate = i.startTranslate), !s.allowSlidePrev && "prev" === s.swipeDirection && i.currentTranslate > i.startTranslate && (i.currentTranslate = i.startTranslate), s.allowSlidePrev || s.allowSlideNext || (i.currentTranslate = i.startTranslate), r.threshold > 0) {
            if (!(Math.abs(v) > r.threshold || i.allowThresholdMove)) return void (i.currentTranslate = i.startTranslate);
            if (!i.allowThresholdMove) return i.allowThresholdMove = !0, n.startX = n.currentX, n.startY = n.currentY, i.currentTranslate = i.startTranslate, void (n.diff = s.isHorizontal() ? n.currentX - n.startX : n.currentY - n.startY);
        }
        r.followFinger && !r.cssMode && ((r.freeMode && r.freeMode.enabled && s.freeMode || r.watchSlidesProgress) && (s.updateActiveIndex(), s.updateSlidesClasses()), s.params.freeMode && r.freeMode.enabled && s.freeMode && s.freeMode.onTouchMove(), s.updateProgress(i.currentTranslate), s.setTranslate(i.currentTranslate));
    }
    function I1(e) {
        const t = this, s = t.touchEventsData, { params: a , touches: i , rtlTranslate: r , slidesGrid: n , enabled: l  } = t;
        if (!l) return;
        let o = e;
        if (o.originalEvent && (o = o.originalEvent), s.allowTouchCallbacks && t.emit("touchEnd", o), s.allowTouchCallbacks = !1, !s.isTouched) return s.isMoved && a.grabCursor && t.setGrabCursor(!1), s.isMoved = !1, void (s.startMoving = !1);
        a.grabCursor && s.isMoved && s.isTouched && (!0 === t.allowSlideNext || !0 === t.allowSlidePrev) && t.setGrabCursor(!1);
        const d = u1(), c = d - s.touchStartTime;
        if (t.allowClick) {
            const e = o.path || o.composedPath && o.composedPath();
            t.updateClickedSlide(e && e[0] || o.target), t.emit("tap click", o), c < 300 && d - s.lastClickTime < 300 && t.emit("doubleTap doubleClick", o);
        }
        if (s.lastClickTime = u1(), p1(()=>{
            t.destroyed || (t.allowClick = !0);
        }), !s.isTouched || !s.isMoved || !t.swipeDirection || 0 === i.diff || s.currentTranslate === s.startTranslate) return s.isTouched = !1, s.isMoved = !1, void (s.startMoving = !1);
        let h;
        if (s.isTouched = !1, s.isMoved = !1, s.startMoving = !1, h = a.followFinger ? r ? t.translate : -t.translate : -s.currentTranslate, a.cssMode) return;
        if (t.params.freeMode && a.freeMode.enabled) return void t.freeMode.onTouchEnd({
            currentPos: h
        });
        let m = 0, f = t.slidesSizesGrid[0];
        for(let e38 = 0; e38 < n.length; e38 += e38 < a.slidesPerGroupSkip ? 1 : a.slidesPerGroup){
            const t = e38 < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
            void 0 !== n[e38 + t] ? h >= n[e38] && h < n[e38 + t] && (m = e38, f = n[e38 + t] - n[e38]) : h >= n[e38] && (m = e38, f = n[n.length - 1] - n[n.length - 2]);
        }
        let g = null, v = null;
        a.rewind && (t.isBeginning ? v = t.params.virtual && t.params.virtual.enabled && t.virtual ? t.virtual.slides.length - 1 : t.slides.length - 1 : t.isEnd && (g = 0));
        const w = (h - n[m]) / f, b = m < a.slidesPerGroupSkip - 1 ? 1 : a.slidesPerGroup;
        if (c > a.longSwipesMs) {
            if (!a.longSwipes) return void t.slideTo(t.activeIndex);
            "next" === t.swipeDirection && (w >= a.longSwipesRatio ? t.slideTo(a.rewind && t.isEnd ? g : m + b) : t.slideTo(m)), "prev" === t.swipeDirection && (w > 1 - a.longSwipesRatio ? t.slideTo(m + b) : null !== v && w < 0 && Math.abs(w) > a.longSwipesRatio ? t.slideTo(v) : t.slideTo(m));
        } else {
            if (!a.shortSwipes) return void t.slideTo(t.activeIndex);
            t.navigation && (o.target === t.navigation.nextEl || o.target === t.navigation.prevEl) ? o.target === t.navigation.nextEl ? t.slideTo(m + b) : t.slideTo(m) : ("next" === t.swipeDirection && t.slideTo(null !== g ? g : m + b), "prev" === t.swipeDirection && t.slideTo(null !== v ? v : m));
        }
    }
    function A() {
        const e = this, { params: t , el: s  } = e;
        if (s && 0 === s.offsetWidth) return;
        t.breakpoints && e.setBreakpoint();
        const { allowSlideNext: a , allowSlidePrev: i , snapGrid: r  } = e;
        e.allowSlideNext = !0, e.allowSlidePrev = !0, e.updateSize(), e.updateSlides(), e.updateSlidesClasses(), ("auto" === t.slidesPerView || t.slidesPerView > 1) && e.isEnd && !e.isBeginning && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), e.autoplay && e.autoplay.running && e.autoplay.paused && e.autoplay.run(), e.allowSlidePrev = i, e.allowSlideNext = a, e.params.watchOverflow && r !== e.snapGrid && e.checkOverflow();
    }
    function D(e) {
        const t = this;
        t.enabled && (t.allowClick || (t.params.preventClicks && e.preventDefault(), t.params.preventClicksPropagation && t.animating && (e.stopPropagation(), e.stopImmediatePropagation())));
    }
    function G() {
        const e = this, { wrapperEl: t , rtlTranslate: s , enabled: a  } = e;
        if (!a) return;
        let i;
        e.previousTranslate = e.translate, e.isHorizontal() ? e.translate = -t.scrollLeft : e.translate = -t.scrollTop, 0 === e.translate && (e.translate = 0), e.updateActiveIndex(), e.updateSlidesClasses();
        const r = e.maxTranslate() - e.minTranslate();
        i = 0 === r ? 0 : (e.translate - e.minTranslate()) / r, i !== e.progress && e.updateProgress(s ? -e.translate : e.translate), e.emit("setTranslate", e.translate, !1);
    }
    let B = !1;
    function N() {}
    const H = (e, t)=>{
        const s = a1(), { params: i , touchEvents: r , el: n , wrapperEl: l , device: o , support: d  } = e, c = !!i.nested, p = "on" === t ? "addEventListener" : "removeEventListener", u = t;
        if (d.touch) {
            const t = !("touchstart" !== r.start || !d.passiveListener || !i.passiveListeners) && {
                passive: !0,
                capture: !1
            };
            n[p](r.start, e.onTouchStart, t), n[p](r.move, e.onTouchMove, d.passiveListener ? {
                passive: !1,
                capture: c
            } : c), n[p](r.end, e.onTouchEnd, t), r.cancel && n[p](r.cancel, e.onTouchEnd, t);
        } else n[p](r.start, e.onTouchStart, !1), s[p](r.move, e.onTouchMove, c), s[p](r.end, e.onTouchEnd, !1);
        (i.preventClicks || i.preventClicksPropagation) && n[p]("click", e.onClick, !0), i.cssMode && l[p]("scroll", e.onScroll), i.updateOnWindowResize ? e[u](o.ios || o.android ? "resize orientationchange observerUpdate" : "resize observerUpdate", A, !0) : e[u]("observerUpdate", A, !0);
    };
    var X = {
        attachEvents: function() {
            const e = this, t = a1(), { params: s , support: i  } = e;
            e.onTouchStart = O1.bind(e), e.onTouchMove = L1.bind(e), e.onTouchEnd = I1.bind(e), s.cssMode && (e.onScroll = G.bind(e)), e.onClick = D.bind(e), i.touch && !B && (t.addEventListener("touchstart", N), B = !0), H(e, "on");
        },
        detachEvents: function() {
            H(this, "off");
        }
    };
    const Y = (e, t)=>e.grid && t.grid && t.grid.rows > 1
    ;
    var R = {
        addClasses: function() {
            const e39 = this, { classNames: t26 , params: s13 , rtl: a2 , $el: i , device: r , support: n  } = e39, l = function(e40, t) {
                const s = [];
                return e40.forEach((e)=>{
                    "object" == typeof e ? Object.keys(e).forEach((a)=>{
                        e[a] && s.push(t + a);
                    }) : "string" == typeof e && s.push(t + e);
                }), s;
            }([
                "initialized",
                s13.direction,
                {
                    "pointer-events": !n.touch
                },
                {
                    "free-mode": e39.params.freeMode && s13.freeMode.enabled
                },
                {
                    autoheight: s13.autoHeight
                },
                {
                    rtl: a2
                },
                {
                    grid: s13.grid && s13.grid.rows > 1
                },
                {
                    "grid-column": s13.grid && s13.grid.rows > 1 && "column" === s13.grid.fill
                },
                {
                    android: r.android
                },
                {
                    ios: r.ios
                },
                {
                    "css-mode": s13.cssMode
                },
                {
                    centered: s13.cssMode && s13.centeredSlides
                },
                {
                    "watch-progress": s13.watchSlidesProgress
                }
            ], s13.containerModifierClass);
            t26.push(...l), i.addClass([
                ...t26
            ].join(" ")), e39.emitContainerClasses();
        },
        removeClasses: function() {
            const { $el: e , classNames: t  } = this;
            e.removeClass(t.join(" ")), this.emitContainerClasses();
        }
    };
    var W = {
        init: !0,
        direction: "horizontal",
        touchEventsTarget: "wrapper",
        initialSlide: 0,
        speed: 300,
        cssMode: !1,
        updateOnWindowResize: !0,
        resizeObserver: !0,
        nested: !1,
        createElements: !1,
        enabled: !0,
        focusableElements: "input, select, option, textarea, button, video, label",
        width: null,
        height: null,
        preventInteractionOnTransition: !1,
        userAgent: null,
        url: null,
        edgeSwipeDetection: !1,
        edgeSwipeThreshold: 20,
        autoHeight: !1,
        setWrapperSize: !1,
        virtualTranslate: !1,
        effect: "slide",
        breakpoints: void 0,
        breakpointsBase: "window",
        spaceBetween: 0,
        slidesPerView: 1,
        slidesPerGroup: 1,
        slidesPerGroupSkip: 0,
        slidesPerGroupAuto: !1,
        centeredSlides: !1,
        centeredSlidesBounds: !1,
        slidesOffsetBefore: 0,
        slidesOffsetAfter: 0,
        normalizeSlideIndex: !0,
        centerInsufficientSlides: !1,
        watchOverflow: !0,
        roundLengths: !1,
        touchRatio: 1,
        touchAngle: 45,
        simulateTouch: !0,
        shortSwipes: !0,
        longSwipes: !0,
        longSwipesRatio: 0.5,
        longSwipesMs: 300,
        followFinger: !0,
        allowTouchMove: !0,
        threshold: 0,
        touchMoveStopPropagation: !1,
        touchStartPreventDefault: !0,
        touchStartForcePreventDefault: !1,
        touchReleaseOnEdges: !1,
        uniqueNavElements: !0,
        resistance: !0,
        resistanceRatio: 0.85,
        watchSlidesProgress: !1,
        grabCursor: !1,
        preventClicks: !0,
        preventClicksPropagation: !0,
        slideToClickedSlide: !1,
        preloadImages: !0,
        updateOnImagesReady: !0,
        loop: !1,
        loopAdditionalSlides: 0,
        loopedSlides: null,
        loopFillGroupWithBlank: !1,
        loopPreventsSlide: !0,
        rewind: !1,
        allowSlidePrev: !0,
        allowSlideNext: !0,
        swipeHandler: null,
        noSwiping: !0,
        noSwipingClass: "swiper-no-swiping",
        noSwipingSelector: null,
        passiveListeners: !0,
        maxBackfaceHiddenSlides: 10,
        containerModifierClass: "swiper-",
        slideClass: "swiper-slide",
        slideBlankClass: "swiper-slide-invisible-blank",
        slideActiveClass: "swiper-slide-active",
        slideDuplicateActiveClass: "swiper-slide-duplicate-active",
        slideVisibleClass: "swiper-slide-visible",
        slideDuplicateClass: "swiper-slide-duplicate",
        slideNextClass: "swiper-slide-next",
        slideDuplicateNextClass: "swiper-slide-duplicate-next",
        slidePrevClass: "swiper-slide-prev",
        slideDuplicatePrevClass: "swiper-slide-duplicate-prev",
        wrapperClass: "swiper-wrapper",
        runCallbacksOnInit: !0,
        _emitClasses: !1
    };
    function j(e, t) {
        return function(s) {
            void 0 === s && (s = {});
            const a = Object.keys(s)[0], i = s[a];
            "object" == typeof i && null !== i ? ([
                "navigation",
                "pagination",
                "scrollbar"
            ].indexOf(a) >= 0 && !0 === e[a] && (e[a] = {
                auto: !0
            }), a in e && "enabled" in i ? (!0 === e[a] && (e[a] = {
                enabled: !0
            }), "object" != typeof e[a] || "enabled" in e[a] || (e[a].enabled = !0), e[a] || (e[a] = {
                enabled: !1
            }), g1(t, s)) : g1(t, s)) : g1(t, s);
        };
    }
    const _ = {
        eventsEmitter: $1,
        update: S1,
        translate: M1,
        transition: {
            setTransition: function(e, t) {
                const s = this;
                s.params.cssMode || s.$wrapperEl.transition(e), s.emit("setTransition", e, t);
            },
            transitionStart: function(e, t) {
                void 0 === e && (e = !0);
                const s = this, { params: a  } = s;
                a.cssMode || (a.autoHeight && s.updateAutoHeight(), P1({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "Start"
                }));
            },
            transitionEnd: function(e, t) {
                void 0 === e && (e = !0);
                const s = this, { params: a  } = s;
                s.animating = !1, a.cssMode || (s.setTransition(0), P1({
                    swiper: s,
                    runCallbacks: e,
                    direction: t,
                    step: "End"
                }));
            }
        },
        slide: k1,
        loop: z1,
        grabCursor: {
            setGrabCursor: function(e) {
                const t = this;
                if (t.support.touch || !t.params.simulateTouch || t.params.watchOverflow && t.isLocked || t.params.cssMode) return;
                const s = "container" === t.params.touchEventsTarget ? t.el : t.wrapperEl;
                s.style.cursor = "move", s.style.cursor = e ? "grabbing" : "grab";
            },
            unsetGrabCursor: function() {
                const e = this;
                e.support.touch || e.params.watchOverflow && e.isLocked || e.params.cssMode || (e["container" === e.params.touchEventsTarget ? "el" : "wrapperEl"].style.cursor = "");
            }
        },
        events: X,
        breakpoints: {
            setBreakpoint: function() {
                const e = this, { activeIndex: t , initialized: s , loopedSlides: a = 0 , params: i , $el: r  } = e, n = i.breakpoints;
                if (!n || n && 0 === Object.keys(n).length) return;
                const l = e.getBreakpoint(n, e.params.breakpointsBase, e.el);
                if (!l || e.currentBreakpoint === l) return;
                const o = (l in n ? n[l] : void 0) || e.originalParams, d = Y(e, i), c = Y(e, o), p = i.enabled;
                d && !c ? (r.removeClass(`${i.containerModifierClass}grid ${i.containerModifierClass}grid-column`), e.emitContainerClasses()) : !d && c && (r.addClass(`${i.containerModifierClass}grid`), (o.grid.fill && "column" === o.grid.fill || !o.grid.fill && "column" === i.grid.fill) && r.addClass(`${i.containerModifierClass}grid-column`), e.emitContainerClasses());
                const u = o.direction && o.direction !== i.direction, h = i.loop && (o.slidesPerView !== i.slidesPerView || u);
                u && s && e.changeDirection(), g1(e.params, o);
                const m = e.params.enabled;
                Object.assign(e, {
                    allowTouchMove: e.params.allowTouchMove,
                    allowSlideNext: e.params.allowSlideNext,
                    allowSlidePrev: e.params.allowSlidePrev
                }), p && !m ? e.disable() : !p && m && e.enable(), e.currentBreakpoint = l, e.emit("_beforeBreakpoint", o), h && s && (e.loopDestroy(), e.loopCreate(), e.updateSlides(), e.slideTo(t - a + e.loopedSlides, 0, !1)), e.emit("breakpoint", o);
            },
            getBreakpoint: function(e42, t27, s) {
                if (void 0 === t27 && (t27 = "window"), !e42 || "container" === t27 && !s) return;
                let a = !1;
                const i = r1(), n = "window" === t27 ? i.innerHeight : s.clientHeight, l = Object.keys(e42).map((e)=>{
                    if ("string" == typeof e && 0 === e.indexOf("@")) {
                        const t = parseFloat(e.substr(1));
                        return {
                            value: n * t,
                            point: e
                        };
                    }
                    return {
                        value: e,
                        point: e
                    };
                });
                l.sort((e, t)=>parseInt(e.value, 10) - parseInt(t.value, 10)
                );
                for(let e41 = 0; e41 < l.length; e41 += 1){
                    const { point: r , value: n  } = l[e41];
                    "window" === t27 ? i.matchMedia(`(min-width: ${n}px)`).matches && (a = r) : n <= s.clientWidth && (a = r);
                }
                return a || "max";
            }
        },
        checkOverflow: {
            checkOverflow: function() {
                const e = this, { isLocked: t , params: s  } = e, { slidesOffsetBefore: a  } = s;
                if (a) {
                    const t = e.slides.length - 1, s = e.slidesGrid[t] + e.slidesSizesGrid[t] + 2 * a;
                    e.isLocked = e.size > s;
                } else e.isLocked = 1 === e.snapGrid.length;
                !0 === s.allowSlideNext && (e.allowSlideNext = !e.isLocked), !0 === s.allowSlidePrev && (e.allowSlidePrev = !e.isLocked), t && t !== e.isLocked && (e.isEnd = !1), t !== e.isLocked && e.emit(e.isLocked ? "lock" : "unlock");
            }
        },
        classes: R,
        images: {
            loadImage: function(e, t, s, a, i, n) {
                const l = r1();
                let o;
                function c() {
                    n && n();
                }
                d1(e).parent("picture")[0] || e.complete && i ? c() : t ? (o = new l.Image, o.onload = c, o.onerror = c, a && (o.sizes = a), s && (o.srcset = s), t && (o.src = t)) : c();
            },
            preloadImages: function() {
                const e = this;
                function t() {
                    null != e && e && !e.destroyed && (void 0 !== e.imagesLoaded && (e.imagesLoaded += 1), e.imagesLoaded === e.imagesToLoad.length && (e.params.updateOnImagesReady && e.update(), e.emit("imagesReady")));
                }
                e.imagesToLoad = e.$el.find("img");
                for(let s = 0; s < e.imagesToLoad.length; s += 1){
                    const a = e.imagesToLoad[s];
                    e.loadImage(a, a.currentSrc || a.getAttribute("src"), a.srcset || a.getAttribute("srcset"), a.sizes || a.getAttribute("sizes"), !0, t);
                }
            }
        }
    }, q = {};
    class V {
        constructor(){
            let e43, t28;
            for(var s14 = arguments.length, a3 = new Array(s14), i = 0; i < s14; i++)a3[i] = arguments[i];
            if (1 === a3.length && a3[0].constructor && "Object" === Object.prototype.toString.call(a3[0]).slice(8, -1) ? t28 = a3[0] : [e43, t28] = a3, t28 || (t28 = {}), t28 = g1({}, t28), e43 && !t28.el && (t28.el = e43), t28.el && d1(t28.el).length > 1) {
                const e = [];
                return d1(t28.el).each((s)=>{
                    const a = g1({}, t28, {
                        el: s
                    });
                    e.push(new V(a));
                }), e;
            }
            const r = this;
            r.__swiper__ = !0, r.support = E1(), r.device = T1({
                userAgent: t28.userAgent
            }), r.browser = C1(), r.eventsListeners = {}, r.eventsAnyListeners = [], r.modules = [
                ...r.__modules__
            ], t28.modules && Array.isArray(t28.modules) && r.modules.push(...t28.modules);
            const n = {};
            r.modules.forEach((e)=>{
                e({
                    swiper: r,
                    extendParams: j(t28, n),
                    on: r.on.bind(r),
                    once: r.once.bind(r),
                    off: r.off.bind(r),
                    emit: r.emit.bind(r)
                });
            });
            const l = g1({}, W, n);
            return r.params = g1({}, l, q, t28), r.originalParams = g1({}, r.params), r.passedParams = g1({}, t28), r.params && r.params.on && Object.keys(r.params.on).forEach((e)=>{
                r.on(e, r.params.on[e]);
            }), r.params && r.params.onAny && r.onAny(r.params.onAny), r.$ = d1, Object.assign(r, {
                enabled: r.params.enabled,
                el: e43,
                classNames: [],
                slides: d1(),
                slidesGrid: [],
                snapGrid: [],
                slidesSizesGrid: [],
                isHorizontal: ()=>"horizontal" === r.params.direction
                ,
                isVertical: ()=>"vertical" === r.params.direction
                ,
                activeIndex: 0,
                realIndex: 0,
                isBeginning: !0,
                isEnd: !1,
                translate: 0,
                previousTranslate: 0,
                progress: 0,
                velocity: 0,
                animating: !1,
                allowSlideNext: r.params.allowSlideNext,
                allowSlidePrev: r.params.allowSlidePrev,
                touchEvents: function() {
                    const e = [
                        "touchstart",
                        "touchmove",
                        "touchend",
                        "touchcancel"
                    ], t = [
                        "pointerdown",
                        "pointermove",
                        "pointerup"
                    ];
                    return r.touchEventsTouch = {
                        start: e[0],
                        move: e[1],
                        end: e[2],
                        cancel: e[3]
                    }, r.touchEventsDesktop = {
                        start: t[0],
                        move: t[1],
                        end: t[2]
                    }, r.support.touch || !r.params.simulateTouch ? r.touchEventsTouch : r.touchEventsDesktop;
                }(),
                touchEventsData: {
                    isTouched: void 0,
                    isMoved: void 0,
                    allowTouchCallbacks: void 0,
                    touchStartTime: void 0,
                    isScrolling: void 0,
                    currentTranslate: void 0,
                    startTranslate: void 0,
                    allowThresholdMove: void 0,
                    focusableElements: r.params.focusableElements,
                    lastClickTime: u1(),
                    clickTimeout: void 0,
                    velocities: [],
                    allowMomentumBounce: void 0,
                    isTouchEvent: void 0,
                    startMoving: void 0
                },
                allowClick: !0,
                allowTouchMove: r.params.allowTouchMove,
                touches: {
                    startX: 0,
                    startY: 0,
                    currentX: 0,
                    currentY: 0,
                    diff: 0
                },
                imagesToLoad: [],
                imagesLoaded: 0
            }), r.emit("_swiper"), r.params.init && r.init(), r;
        }
        enable() {
            const e = this;
            e.enabled || (e.enabled = !0, e.params.grabCursor && e.setGrabCursor(), e.emit("enable"));
        }
        disable() {
            const e = this;
            e.enabled && (e.enabled = !1, e.params.grabCursor && e.unsetGrabCursor(), e.emit("disable"));
        }
        setProgress(e, t) {
            const s = this;
            e = Math.min(Math.max(e, 0), 1);
            const a = s.minTranslate(), i = (s.maxTranslate() - a) * e + a;
            s.translateTo(i, void 0 === t ? 0 : t), s.updateActiveIndex(), s.updateSlidesClasses();
        }
        emitContainerClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t29 = e.el.className.split(" ").filter((t)=>0 === t.indexOf("swiper") || 0 === t.indexOf(e.params.containerModifierClass)
            );
            e.emit("_containerClasses", t29.join(" "));
        }
        getSlideClasses(e44) {
            const t = this;
            return t.destroyed ? "" : e44.className.split(" ").filter((e)=>0 === e.indexOf("swiper-slide") || 0 === e.indexOf(t.params.slideClass)
            ).join(" ");
        }
        emitSlidesClasses() {
            const e = this;
            if (!e.params._emitClasses || !e.el) return;
            const t = [];
            e.slides.each((s)=>{
                const a = e.getSlideClasses(s);
                t.push({
                    slideEl: s,
                    classNames: a
                }), e.emit("_slideClass", s, a);
            }), e.emit("_slideClasses", t);
        }
        slidesPerViewDynamic(e, t) {
            void 0 === e && (e = "current"), void 0 === t && (t = !1);
            const { params: s , slides: a , slidesGrid: i , slidesSizesGrid: r , size: n , activeIndex: l  } = this;
            let o = 1;
            if (s.centeredSlides) {
                let e, t = a[l].swiperSlideSize;
                for(let s = l + 1; s < a.length; s += 1)a[s] && !e && (t += a[s].swiperSlideSize, o += 1, t > n && (e = !0));
                for(let s15 = l - 1; s15 >= 0; s15 -= 1)a[s15] && !e && (t += a[s15].swiperSlideSize, o += 1, t > n && (e = !0));
            } else if ("current" === e) for(let e45 = l + 1; e45 < a.length; e45 += 1)(t ? i[e45] + r[e45] - i[l] < n : i[e45] - i[l] < n) && (o += 1);
            else for(let e46 = l - 1; e46 >= 0; e46 -= 1)i[l] - i[e46] < n && (o += 1);
            return o;
        }
        update() {
            const e = this;
            if (!e || e.destroyed) return;
            const { snapGrid: t30 , params: s16  } = e;
            function a() {
                const t = e.rtlTranslate ? -1 * e.translate : e.translate, s = Math.min(Math.max(t, e.maxTranslate()), e.minTranslate());
                e.setTranslate(s), e.updateActiveIndex(), e.updateSlidesClasses();
            }
            let i;
            s16.breakpoints && e.setBreakpoint(), e.updateSize(), e.updateSlides(), e.updateProgress(), e.updateSlidesClasses(), e.params.freeMode && e.params.freeMode.enabled ? (a(), e.params.autoHeight && e.updateAutoHeight()) : (i = ("auto" === e.params.slidesPerView || e.params.slidesPerView > 1) && e.isEnd && !e.params.centeredSlides ? e.slideTo(e.slides.length - 1, 0, !1, !0) : e.slideTo(e.activeIndex, 0, !1, !0), i || a()), s16.watchOverflow && t30 !== e.snapGrid && e.checkOverflow(), e.emit("update");
        }
        changeDirection(e, t31) {
            void 0 === t31 && (t31 = !0);
            const s = this, a = s.params.direction;
            return e || (e = "horizontal" === a ? "vertical" : "horizontal"), e === a || "horizontal" !== e && "vertical" !== e || (s.$el.removeClass(`${s.params.containerModifierClass}${a}`).addClass(`${s.params.containerModifierClass}${e}`), s.emitContainerClasses(), s.params.direction = e, s.slides.each((t)=>{
                "vertical" === e ? t.style.width = "" : t.style.height = "";
            }), s.emit("changeDirection"), t31 && s.update()), s;
        }
        mount(e47) {
            const t32 = this;
            if (t32.mounted) return !0;
            const s = d1(e47 || t32.params.el);
            if (!(e47 = s[0])) return !1;
            e47.swiper = t32;
            const i = ()=>`.${(t32.params.wrapperClass || "").trim().split(" ").join(".")}`
            ;
            let r = (()=>{
                if (e47 && e47.shadowRoot && e47.shadowRoot.querySelector) {
                    const t = d1(e47.shadowRoot.querySelector(i()));
                    return t.children = (e)=>s.children(e)
                    , t;
                }
                return s.children(i());
            })();
            if (0 === r.length && t32.params.createElements) {
                const e48 = a1().createElement("div");
                r = d1(e48), e48.className = t32.params.wrapperClass, s.append(e48), s.children(`.${t32.params.slideClass}`).each((e)=>{
                    r.append(e);
                });
            }
            return Object.assign(t32, {
                $el: s,
                el: e47,
                $wrapperEl: r,
                wrapperEl: r[0],
                mounted: !0,
                rtl: "rtl" === e47.dir.toLowerCase() || "rtl" === s.css("direction"),
                rtlTranslate: "horizontal" === t32.params.direction && ("rtl" === e47.dir.toLowerCase() || "rtl" === s.css("direction")),
                wrongRTL: "-webkit-box" === r.css("display")
            }), !0;
        }
        init(e) {
            const t = this;
            if (t.initialized) return t;
            return !1 === t.mount(e) || (t.emit("beforeInit"), t.params.breakpoints && t.setBreakpoint(), t.addClasses(), t.params.loop && t.loopCreate(), t.updateSize(), t.updateSlides(), t.params.watchOverflow && t.checkOverflow(), t.params.grabCursor && t.enabled && t.setGrabCursor(), t.params.preloadImages && t.preloadImages(), t.params.loop ? t.slideTo(t.params.initialSlide + t.loopedSlides, 0, t.params.runCallbacksOnInit, !1, !0) : t.slideTo(t.params.initialSlide, 0, t.params.runCallbacksOnInit, !1, !0), t.attachEvents(), t.initialized = !0, t.emit("init"), t.emit("afterInit")), t;
        }
        destroy(e50, t33) {
            void 0 === e50 && (e50 = !0), void 0 === t33 && (t33 = !0);
            const s = this, { params: a , $el: i , $wrapperEl: r , slides: n  } = s;
            return void 0 === s.params || s.destroyed || (s.emit("beforeDestroy"), s.initialized = !1, s.detachEvents(), a.loop && s.loopDestroy(), t33 && (s.removeClasses(), i.removeAttr("style"), r.removeAttr("style"), n && n.length && n.removeClass([
                a.slideVisibleClass,
                a.slideActiveClass,
                a.slideNextClass,
                a.slidePrevClass
            ].join(" ")).removeAttr("style").removeAttr("data-swiper-slide-index")), s.emit("destroy"), Object.keys(s.eventsListeners).forEach((e)=>{
                s.off(e);
            }), !1 !== e50 && (s.$el[0].swiper = null, function(e51) {
                const t = e51;
                Object.keys(t).forEach((e)=>{
                    try {
                        t[e] = null;
                    } catch (e52) {}
                    try {
                        delete t[e];
                    } catch (e53) {}
                });
            }(s)), s.destroyed = !0), null;
        }
        static extendDefaults(e) {
            g1(q, e);
        }
        static get extendedDefaults() {
            return q;
        }
        static get defaults() {
            return W;
        }
        static installModule(e) {
            V.prototype.__modules__ || (V.prototype.__modules__ = []);
            const t = V.prototype.__modules__;
            "function" == typeof e && t.indexOf(e) < 0 && t.push(e);
        }
        static use(e54) {
            return Array.isArray(e54) ? (e54.forEach((e)=>V.installModule(e)
            ), V) : (V.installModule(e54), V);
        }
    }
    function F(e, t, s, i) {
        const r = a1();
        return e.params.createElements && Object.keys(i).forEach((a)=>{
            if (!s[a] && !0 === s.auto) {
                let n = e.$el.children(`.${i[a]}`)[0];
                n || (n = r.createElement("div"), n.className = i[a], e.$el.append(n)), s[a] = n, t[a] = n;
            }
        }), s;
    }
    function U(e) {
        return void 0 === e && (e = ""), `.${e.trim().replace(/([\.:!\/])/g, "\\$1").replace(/ /g, ".")}`;
    }
    function K(e) {
        const t = this, { $wrapperEl: s , params: a  } = t;
        if (a.loop && t.loopDestroy(), "object" == typeof e && "length" in e) for(let t34 = 0; t34 < e.length; t34 += 1)e[t34] && s.append(e[t34]);
        else s.append(e);
        a.loop && t.loopCreate(), a.observer || t.update();
    }
    function Z(e) {
        const t = this, { params: s , $wrapperEl: a , activeIndex: i  } = t;
        s.loop && t.loopDestroy();
        let r = i + 1;
        if ("object" == typeof e && "length" in e) {
            for(let t = 0; t < e.length; t += 1)e[t] && a.prepend(e[t]);
            r = i + e.length;
        } else a.prepend(e);
        s.loop && t.loopCreate(), s.observer || t.update(), t.slideTo(r, 0, !1);
    }
    function J(e, t) {
        const s = this, { $wrapperEl: a , params: i , activeIndex: r  } = s;
        let n = r;
        i.loop && (n -= s.loopedSlides, s.loopDestroy(), s.slides = a.children(`.${i.slideClass}`));
        const l = s.slides.length;
        if (e <= 0) return void s.prependSlide(t);
        if (e >= l) return void s.appendSlide(t);
        let o = n > e ? n + 1 : n;
        const d = [];
        for(let t35 = l - 1; t35 >= e; t35 -= 1){
            const e = s.slides.eq(t35);
            e.remove(), d.unshift(e);
        }
        if ("object" == typeof t && "length" in t) {
            for(let e56 = 0; e56 < t.length; e56 += 1)t[e56] && a.append(t[e56]);
            o = n > e ? n + t.length : n;
        } else a.append(t);
        for(let e55 = 0; e55 < d.length; e55 += 1)a.append(d[e55]);
        i.loop && s.loopCreate(), i.observer || s.update(), i.loop ? s.slideTo(o + s.loopedSlides, 0, !1) : s.slideTo(o, 0, !1);
    }
    function Q(e) {
        const t = this, { params: s , $wrapperEl: a , activeIndex: i  } = t;
        let r = i;
        s.loop && (r -= t.loopedSlides, t.loopDestroy(), t.slides = a.children(`.${s.slideClass}`));
        let n, l = r;
        if ("object" == typeof e && "length" in e) {
            for(let s = 0; s < e.length; s += 1)n = e[s], t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1);
            l = Math.max(l, 0);
        } else n = e, t.slides[n] && t.slides.eq(n).remove(), n < l && (l -= 1), l = Math.max(l, 0);
        s.loop && t.loopCreate(), s.observer || t.update(), s.loop ? t.slideTo(l + t.loopedSlides, 0, !1) : t.slideTo(l, 0, !1);
    }
    function ee() {
        const e = this, t = [];
        for(let s = 0; s < e.slides.length; s += 1)t.push(s);
        e.removeSlide(t);
    }
    function te(e57) {
        const { effect: t , swiper: s , on: a4 , setTranslate: i , setTransition: r , overwriteParams: n , perspective: l , recreateShadows: o , getEffectParams: d  } = e57;
        let c;
        a4("beforeInit", ()=>{
            if (s.params.effect !== t) return;
            s.classNames.push(`${s.params.containerModifierClass}${t}`), l && l() && s.classNames.push(`${s.params.containerModifierClass}3d`);
            const e = n ? n() : {};
            Object.assign(s.params, e), Object.assign(s.originalParams, e);
        }), a4("setTranslate", ()=>{
            s.params.effect === t && i();
        }), a4("setTransition", (e, a)=>{
            s.params.effect === t && r(a);
        }), a4("transitionEnd", ()=>{
            if (s.params.effect === t && o) {
                if (!d || !d().slideShadows) return;
                s.slides.each((e)=>{
                    s.$(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").remove();
                }), o();
            }
        }), a4("virtualUpdate", ()=>{
            s.params.effect === t && (s.slides.length || (c = !0), requestAnimationFrame(()=>{
                c && s.slides && s.slides.length && (i(), c = !1);
            }));
        });
    }
    function se(e, t) {
        return e.transformEl ? t.find(e.transformEl).css({
            "backface-visibility": "hidden",
            "-webkit-backface-visibility": "hidden"
        }) : t;
    }
    function ae(e59) {
        let { swiper: t , duration: s , transformEl: a , allSlides: i  } = e59;
        const { slides: r , activeIndex: n , $wrapperEl: l  } = t;
        if (t.params.virtualTranslate && 0 !== s) {
            let e58, s = !1;
            e58 = i ? a ? r.find(a) : r : a ? r.eq(n).find(a) : r.eq(n), e58.transitionEnd(()=>{
                if (s) return;
                if (!t || t.destroyed) return;
                s = !0, t.animating = !1;
                const e = [
                    "webkitTransitionEnd",
                    "transitionend"
                ];
                for(let t36 = 0; t36 < e.length; t36 += 1)l.trigger(e[t36]);
            });
        }
    }
    function ie(e, t, s) {
        const a = "swiper-slide-shadow" + (s ? `-${s}` : ""), i = e.transformEl ? t.find(e.transformEl) : t;
        let r = i.children(`.${a}`);
        return r.length || (r = d1(`<div class="swiper-slide-shadow${s ? `-${s}` : ""}"></div>`), i.append(r)), r;
    }
    Object.keys(_).forEach((e)=>{
        Object.keys(_[e]).forEach((t)=>{
            V.prototype[t] = _[e][t];
        });
    }), V.use([
        function(e60) {
            let { swiper: t , on: s17 , emit: a5  } = e60;
            const i3 = r1();
            let n2 = null, l = null;
            const o = ()=>{
                t && !t.destroyed && t.initialized && (a5("beforeResize"), a5("resize"));
            }, d = ()=>{
                t && !t.destroyed && t.initialized && a5("orientationchange");
            };
            s17("init", ()=>{
                t.params.resizeObserver && void 0 !== i3.ResizeObserver ? t && !t.destroyed && t.initialized && (n2 = new ResizeObserver((e61)=>{
                    l = i3.requestAnimationFrame(()=>{
                        const { width: s18 , height: a6  } = t;
                        let i = s18, r = a6;
                        e61.forEach((e)=>{
                            let { contentBoxSize: s , contentRect: a , target: n  } = e;
                            n && n !== t.el || (i = a ? a.width : (s[0] || s).inlineSize, r = a ? a.height : (s[0] || s).blockSize);
                        }), i === s18 && r === a6 || o();
                    });
                }), n2.observe(t.el)) : (i3.addEventListener("resize", o), i3.addEventListener("orientationchange", d));
            }), s17("destroy", ()=>{
                l && i3.cancelAnimationFrame(l), n2 && n2.unobserve && t.el && (n2.unobserve(t.el), n2 = null), i3.removeEventListener("resize", o), i3.removeEventListener("orientationchange", d);
            });
        },
        function(e62) {
            let { swiper: t37 , extendParams: s19 , on: a , emit: i  } = e62;
            const n = [], l = r1(), o = function(e63, t38) {
                void 0 === t38 && (t38 = {});
                const s = new (l.MutationObserver || l.WebkitMutationObserver)((e)=>{
                    if (1 === e.length) return void i("observerUpdate", e[0]);
                    const t = function() {
                        i("observerUpdate", e[0]);
                    };
                    l.requestAnimationFrame ? l.requestAnimationFrame(t) : l.setTimeout(t, 0);
                });
                s.observe(e63, {
                    attributes: void 0 === t38.attributes || t38.attributes,
                    childList: void 0 === t38.childList || t38.childList,
                    characterData: void 0 === t38.characterData || t38.characterData
                }), n.push(s);
            };
            s19({
                observer: !1,
                observeParents: !1,
                observeSlideChildren: !1
            }), a("init", ()=>{
                if (t37.params.observer) {
                    if (t37.params.observeParents) {
                        const e = t37.$el.parents();
                        for(let t = 0; t < e.length; t += 1)o(e[t]);
                    }
                    o(t37.$el[0], {
                        childList: t37.params.observeSlideChildren
                    }), o(t37.$wrapperEl[0], {
                        attributes: !1
                    });
                }
            }), a("destroy", ()=>{
                n.forEach((e)=>{
                    e.disconnect();
                }), n.splice(0, n.length);
            });
        }
    ]);
    const re = [
        function(e64) {
            let t39, { swiper: s20 , extendParams: a7 , on: i4 , emit: r2  } = e64;
            function n(e, t) {
                const a = s20.params.virtual;
                if (a.cache && s20.virtual.cache[t]) return s20.virtual.cache[t];
                const i = a.renderSlide ? d1(a.renderSlide.call(s20, e, t)) : d1(`<div class="${s20.params.slideClass}" data-swiper-slide-index="${t}">${e}</div>`);
                return i.attr("data-swiper-slide-index") || i.attr("data-swiper-slide-index", t), a.cache && (s20.virtual.cache[t] = i), i;
            }
            function l2(e66) {
                const { slidesPerView: t41 , slidesPerGroup: a , centeredSlides: i  } = s20.params, { addSlidesBefore: l , addSlidesAfter: o  } = s20.params.virtual, { from: d , to: c , slides: p , slidesGrid: u , offset: h  } = s20.virtual;
                s20.params.cssMode || s20.updateActiveIndex();
                const m = s20.activeIndex || 0;
                let f, g, v;
                f = s20.rtlTranslate ? "right" : s20.isHorizontal() ? "left" : "top", i ? (g = Math.floor(t41 / 2) + a + o, v = Math.floor(t41 / 2) + a + l) : (g = t41 + (a - 1) + o, v = a + l);
                const w = Math.max((m || 0) - v, 0), b = Math.min((m || 0) + g, p.length - 1), x = (s20.slidesGrid[w] || 0) - (s20.slidesGrid[0] || 0);
                function y() {
                    s20.updateSlides(), s20.updateProgress(), s20.updateSlidesClasses(), s20.lazy && s20.params.lazy.enabled && s20.lazy.load(), r2("virtualUpdate");
                }
                if (Object.assign(s20.virtual, {
                    from: w,
                    to: b,
                    offset: x,
                    slidesGrid: s20.slidesGrid
                }), d === w && c === b && !e66) return s20.slidesGrid !== u && x !== h && s20.slides.css(f, `${x}px`), s20.updateProgress(), void r2("virtualUpdate");
                if (s20.params.virtual.renderExternal) return s20.params.virtual.renderExternal.call(s20, {
                    offset: x,
                    from: w,
                    to: b,
                    slides: function() {
                        const e = [];
                        for(let t = w; t <= b; t += 1)e.push(p[t]);
                        return e;
                    }()
                }), void (s20.params.virtual.renderExternalUpdate ? y() : r2("virtualUpdate"));
                const E = [], T = [];
                if (e66) s20.$wrapperEl.find(`.${s20.params.slideClass}`).remove();
                else for(let e65 = d; e65 <= c; e65 += 1)(e65 < w || e65 > b) && s20.$wrapperEl.find(`.${s20.params.slideClass}[data-swiper-slide-index="${e65}"]`).remove();
                for(let t40 = 0; t40 < p.length; t40 += 1)t40 >= w && t40 <= b && (void 0 === c || e66 ? T.push(t40) : (t40 > c && T.push(t40), t40 < d && E.push(t40)));
                T.forEach((e)=>{
                    s20.$wrapperEl.append(n(p[e], e));
                }), E.sort((e, t)=>t - e
                ).forEach((e)=>{
                    s20.$wrapperEl.prepend(n(p[e], e));
                }), s20.$wrapperEl.children(".swiper-slide").css(f, `${x}px`), y();
            }
            a7({
                virtual: {
                    enabled: !1,
                    slides: [],
                    cache: !0,
                    renderSlide: null,
                    renderExternal: null,
                    renderExternalUpdate: !0,
                    addSlidesBefore: 0,
                    addSlidesAfter: 0
                }
            }), s20.virtual = {
                cache: {},
                from: void 0,
                to: void 0,
                slides: [],
                offset: 0,
                slidesGrid: []
            }, i4("beforeInit", ()=>{
                s20.params.virtual.enabled && (s20.virtual.slides = s20.params.virtual.slides, s20.classNames.push(`${s20.params.containerModifierClass}virtual`), s20.params.watchSlidesProgress = !0, s20.originalParams.watchSlidesProgress = !0, s20.params.initialSlide || l2());
            }), i4("setTranslate", ()=>{
                s20.params.virtual.enabled && (s20.params.cssMode && !s20._immediateVirtual ? (clearTimeout(t39), t39 = setTimeout(()=>{
                    l2();
                }, 100)) : l2());
            }), i4("init update resize", ()=>{
                s20.params.virtual.enabled && s20.params.cssMode && v1(s20.wrapperEl, "--swiper-virtual-size", `${s20.virtualSize}px`);
            }), Object.assign(s20.virtual, {
                appendSlide: function(e) {
                    if ("object" == typeof e && "length" in e) for(let t = 0; t < e.length; t += 1)e[t] && s20.virtual.slides.push(e[t]);
                    else s20.virtual.slides.push(e);
                    l2(!0);
                },
                prependSlide: function(e) {
                    const t = s20.activeIndex;
                    let a8 = t + 1, i = 1;
                    if (Array.isArray(e)) {
                        for(let t42 = 0; t42 < e.length; t42 += 1)e[t42] && s20.virtual.slides.unshift(e[t42]);
                        a8 = t + e.length, i = e.length;
                    } else s20.virtual.slides.unshift(e);
                    if (s20.params.virtual.cache) {
                        const e = s20.virtual.cache, t = {};
                        Object.keys(e).forEach((s)=>{
                            const a = e[s], r = a.attr("data-swiper-slide-index");
                            r && a.attr("data-swiper-slide-index", parseInt(r, 10) + i), t[parseInt(s, 10) + i] = a;
                        }), s20.virtual.cache = t;
                    }
                    l2(!0), s20.slideTo(a8, 0);
                },
                removeSlide: function(e) {
                    if (null == e) return;
                    let t = s20.activeIndex;
                    if (Array.isArray(e)) for(let a = e.length - 1; a >= 0; a -= 1)s20.virtual.slides.splice(e[a], 1), s20.params.virtual.cache && delete s20.virtual.cache[e[a]], e[a] < t && (t -= 1), t = Math.max(t, 0);
                    else s20.virtual.slides.splice(e, 1), s20.params.virtual.cache && delete s20.virtual.cache[e], e < t && (t -= 1), t = Math.max(t, 0);
                    l2(!0), s20.slideTo(t, 0);
                },
                removeAllSlides: function() {
                    s20.virtual.slides = [], s20.params.virtual.cache && (s20.virtual.cache = {}), l2(!0), s20.slideTo(0, 0);
                },
                update: l2
            });
        },
        function(e67) {
            let { swiper: t , extendParams: s21 , on: i5 , emit: n3  } = e67;
            const l3 = a1(), o = r1();
            function c3(e) {
                if (!t.enabled) return;
                const { rtlTranslate: s  } = t;
                let a = e;
                a.originalEvent && (a = a.originalEvent);
                const i = a.keyCode || a.charCode, r = t.params.keyboard.pageUpDown, d = r && 33 === i, c = r && 34 === i, p = 37 === i, u = 39 === i, h = 38 === i, m = 40 === i;
                if (!t.allowSlideNext && (t.isHorizontal() && u || t.isVertical() && m || c)) return !1;
                if (!t.allowSlidePrev && (t.isHorizontal() && p || t.isVertical() && h || d)) return !1;
                if (!(a.shiftKey || a.altKey || a.ctrlKey || a.metaKey || l3.activeElement && l3.activeElement.nodeName && ("input" === l3.activeElement.nodeName.toLowerCase() || "textarea" === l3.activeElement.nodeName.toLowerCase()))) {
                    if (t.params.keyboard.onlyInViewport && (d || c || p || u || h || m)) {
                        let e = !1;
                        if (t.$el.parents(`.${t.params.slideClass}`).length > 0 && 0 === t.$el.parents(`.${t.params.slideActiveClass}`).length) return;
                        const a = t.$el, i = a[0].clientWidth, r = a[0].clientHeight, n = o.innerWidth, l = o.innerHeight, d = t.$el.offset();
                        s && (d.left -= t.$el[0].scrollLeft);
                        const c = [
                            [
                                d.left,
                                d.top
                            ],
                            [
                                d.left + i,
                                d.top
                            ],
                            [
                                d.left,
                                d.top + r
                            ],
                            [
                                d.left + i,
                                d.top + r
                            ]
                        ];
                        for(let t43 = 0; t43 < c.length; t43 += 1){
                            const s = c[t43];
                            if (s[0] >= 0 && s[0] <= n && s[1] >= 0 && s[1] <= l) {
                                if (0 === s[0] && 0 === s[1]) continue;
                                e = !0;
                            }
                        }
                        if (!e) return;
                    }
                    t.isHorizontal() ? ((d || c || p || u) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), ((c || u) && !s || (d || p) && s) && t.slideNext(), ((d || p) && !s || (c || u) && s) && t.slidePrev()) : ((d || c || h || m) && (a.preventDefault ? a.preventDefault() : a.returnValue = !1), (c || m) && t.slideNext(), (d || h) && t.slidePrev()), n3("keyPress", i);
                }
            }
            function p2() {
                t.keyboard.enabled || (d1(l3).on("keydown", c3), t.keyboard.enabled = !0);
            }
            function u2() {
                t.keyboard.enabled && (d1(l3).off("keydown", c3), t.keyboard.enabled = !1);
            }
            t.keyboard = {
                enabled: !1
            }, s21({
                keyboard: {
                    enabled: !1,
                    onlyInViewport: !0,
                    pageUpDown: !0
                }
            }), i5("init", ()=>{
                t.params.keyboard.enabled && p2();
            }), i5("destroy", ()=>{
                t.keyboard.enabled && u2();
            }), Object.assign(t.keyboard, {
                enable: p2,
                disable: u2
            });
        },
        function(e68) {
            let { swiper: t46 , extendParams: s22 , on: a9 , emit: i6  } = e68;
            const n4 = r1();
            let l;
            s22({
                mousewheel: {
                    enabled: !1,
                    releaseOnEdges: !1,
                    invert: !1,
                    forceToAxis: !1,
                    sensitivity: 1,
                    eventsTarget: "container",
                    thresholdDelta: null,
                    thresholdTime: null
                }
            }), t46.mousewheel = {
                enabled: !1
            };
            let o, c4 = u1();
            const h = [];
            function m2() {
                t46.enabled && (t46.mouseEntered = !0);
            }
            function f2() {
                t46.enabled && (t46.mouseEntered = !1);
            }
            function g(e) {
                return !(t46.params.mousewheel.thresholdDelta && e.delta < t46.params.mousewheel.thresholdDelta) && !(t46.params.mousewheel.thresholdTime && u1() - c4 < t46.params.mousewheel.thresholdTime) && (e.delta >= 6 && u1() - c4 < 60 || (e.direction < 0 ? t46.isEnd && !t46.params.loop || t46.animating || (t46.slideNext(), i6("scroll", e.raw)) : t46.isBeginning && !t46.params.loop || t46.animating || (t46.slidePrev(), i6("scroll", e.raw)), c4 = (new n4.Date).getTime(), !1));
            }
            function v2(e69) {
                let s23 = e69, a10 = !0;
                if (!t46.enabled) return;
                const r = t46.params.mousewheel;
                t46.params.cssMode && s23.preventDefault();
                let n = t46.$el;
                if ("container" !== t46.params.mousewheel.eventsTarget && (n = d1(t46.params.mousewheel.eventsTarget)), !t46.mouseEntered && !n[0].contains(s23.target) && !r.releaseOnEdges) return !0;
                s23.originalEvent && (s23 = s23.originalEvent);
                let c = 0;
                const m = t46.rtlTranslate ? -1 : 1, f = function(e) {
                    let t = 0, s = 0, a = 0, i = 0;
                    return "detail" in e && (s = e.detail), "wheelDelta" in e && (s = -e.wheelDelta / 120), "wheelDeltaY" in e && (s = -e.wheelDeltaY / 120), "wheelDeltaX" in e && (t = -e.wheelDeltaX / 120), "axis" in e && e.axis === e.HORIZONTAL_AXIS && (t = s, s = 0), a = 10 * t, i = 10 * s, "deltaY" in e && (i = e.deltaY), "deltaX" in e && (a = e.deltaX), e.shiftKey && !a && (a = i, i = 0), (a || i) && e.deltaMode && (1 === e.deltaMode ? (a *= 40, i *= 40) : (a *= 800, i *= 800)), a && !t && (t = a < 1 ? -1 : 1), i && !s && (s = i < 1 ? -1 : 1), {
                        spinX: t,
                        spinY: s,
                        pixelX: a,
                        pixelY: i
                    };
                }(s23);
                if (r.forceToAxis) {
                    if (t46.isHorizontal()) {
                        if (!(Math.abs(f.pixelX) > Math.abs(f.pixelY))) return !0;
                        c = -f.pixelX * m;
                    } else {
                        if (!(Math.abs(f.pixelY) > Math.abs(f.pixelX))) return !0;
                        c = -f.pixelY;
                    }
                } else c = Math.abs(f.pixelX) > Math.abs(f.pixelY) ? -f.pixelX * m : -f.pixelY;
                if (0 === c) return !0;
                r.invert && (c = -c);
                let v = t46.getTranslate() + c * r.sensitivity;
                if (v >= t46.minTranslate() && (v = t46.minTranslate()), v <= t46.maxTranslate() && (v = t46.maxTranslate()), a10 = !!t46.params.loop || !(v === t46.minTranslate() || v === t46.maxTranslate()), a10 && t46.params.nested && s23.stopPropagation(), t46.params.freeMode && t46.params.freeMode.enabled) {
                    const e = {
                        time: u1(),
                        delta: Math.abs(c),
                        direction: Math.sign(c)
                    }, a = o && e.time < o.time + 500 && e.delta <= o.delta && e.direction === o.direction;
                    if (!a) {
                        o = void 0, t46.params.loop && t46.loopFix();
                        let n = t46.getTranslate() + c * r.sensitivity;
                        const d = t46.isBeginning, u = t46.isEnd;
                        if (n >= t46.minTranslate() && (n = t46.minTranslate()), n <= t46.maxTranslate() && (n = t46.maxTranslate()), t46.setTransition(0), t46.setTranslate(n), t46.updateProgress(), t46.updateActiveIndex(), t46.updateSlidesClasses(), (!d && t46.isBeginning || !u && t46.isEnd) && t46.updateSlidesClasses(), t46.params.freeMode.sticky) {
                            clearTimeout(l), l = void 0, h.length >= 15 && h.shift();
                            const s = h.length ? h[h.length - 1] : void 0, a = h[0];
                            if (h.push(e), s && (e.delta > s.delta || e.direction !== s.direction)) h.splice(0);
                            else if (h.length >= 15 && e.time - a.time < 500 && a.delta - e.delta >= 1 && e.delta <= 6) {
                                const s = c > 0 ? 0.8 : 0.2;
                                o = e, h.splice(0), l = p1(()=>{
                                    t46.slideToClosest(t46.params.speed, !0, void 0, s);
                                }, 0);
                            }
                            l || (l = p1(()=>{
                                o = e, h.splice(0), t46.slideToClosest(t46.params.speed, !0, void 0, 0.5);
                            }, 500));
                        }
                        if (a || i6("scroll", s23), t46.params.autoplay && t46.params.autoplayDisableOnInteraction && t46.autoplay.stop(), n === t46.minTranslate() || n === t46.maxTranslate()) return !0;
                    }
                } else {
                    const s24 = {
                        time: u1(),
                        delta: Math.abs(c),
                        direction: Math.sign(c),
                        raw: e69
                    };
                    h.length >= 2 && h.shift();
                    const a = h.length ? h[h.length - 1] : void 0;
                    if (h.push(s24), a ? (s24.direction !== a.direction || s24.delta > a.delta || s24.time > a.time + 150) && g(s24) : g(s24), function(e) {
                        const s = t46.params.mousewheel;
                        if (e.direction < 0) {
                            if (t46.isEnd && !t46.params.loop && s.releaseOnEdges) return !0;
                        } else if (t46.isBeginning && !t46.params.loop && s.releaseOnEdges) return !0;
                        return !1;
                    }(s24)) return !0;
                }
                return s23.preventDefault ? s23.preventDefault() : s23.returnValue = !1, !1;
            }
            function w(e) {
                let s = t46.$el;
                "container" !== t46.params.mousewheel.eventsTarget && (s = d1(t46.params.mousewheel.eventsTarget)), s[e]("mouseenter", m2), s[e]("mouseleave", f2), s[e]("wheel", v2);
            }
            function b() {
                return t46.params.cssMode ? (t46.wrapperEl.removeEventListener("wheel", v2), !0) : !t46.mousewheel.enabled && (w("on"), t46.mousewheel.enabled = !0, !0);
            }
            function x() {
                return t46.params.cssMode ? (t46.wrapperEl.addEventListener(event, v2), !0) : !!t46.mousewheel.enabled && (w("off"), t46.mousewheel.enabled = !1, !0);
            }
            a9("init", ()=>{
                !t46.params.mousewheel.enabled && t46.params.cssMode && x(), t46.params.mousewheel.enabled && b();
            }), a9("destroy", ()=>{
                t46.params.cssMode && b(), t46.mousewheel.enabled && x();
            }), Object.assign(t46.mousewheel, {
                enable: b,
                disable: x
            });
        },
        function(e70) {
            let { swiper: t , extendParams: s26 , on: a11 , emit: i  } = e70;
            function r3(e) {
                let s;
                return e && (s = d1(e), t.params.uniqueNavElements && "string" == typeof e && s.length > 1 && 1 === t.$el.find(e).length && (s = t.$el.find(e))), s;
            }
            function n5(e, s) {
                const a = t.params.navigation;
                e && e.length > 0 && (e[s ? "addClass" : "removeClass"](a.disabledClass), e[0] && "BUTTON" === e[0].tagName && (e[0].disabled = s), t.params.watchOverflow && t.enabled && e[t.isLocked ? "addClass" : "removeClass"](a.lockClass));
            }
            function l() {
                if (t.params.loop) return;
                const { $nextEl: e , $prevEl: s  } = t.navigation;
                n5(s, t.isBeginning && !t.params.rewind), n5(e, t.isEnd && !t.params.rewind);
            }
            function o(e) {
                e.preventDefault(), (!t.isBeginning || t.params.loop || t.params.rewind) && t.slidePrev();
            }
            function c(e) {
                e.preventDefault(), (!t.isEnd || t.params.loop || t.params.rewind) && t.slideNext();
            }
            function p() {
                const e = t.params.navigation;
                if (t.params.navigation = F(t, t.originalParams.navigation, t.params.navigation, {
                    nextEl: "swiper-button-next",
                    prevEl: "swiper-button-prev"
                }), !e.nextEl && !e.prevEl) return;
                const s = r3(e.nextEl), a = r3(e.prevEl);
                s && s.length > 0 && s.on("click", c), a && a.length > 0 && a.on("click", o), Object.assign(t.navigation, {
                    $nextEl: s,
                    nextEl: s && s[0],
                    $prevEl: a,
                    prevEl: a && a[0]
                }), t.enabled || (s && s.addClass(e.lockClass), a && a.addClass(e.lockClass));
            }
            function u() {
                const { $nextEl: e , $prevEl: s  } = t.navigation;
                e && e.length && (e.off("click", c), e.removeClass(t.params.navigation.disabledClass)), s && s.length && (s.off("click", o), s.removeClass(t.params.navigation.disabledClass));
            }
            s26({
                navigation: {
                    nextEl: null,
                    prevEl: null,
                    hideOnClick: !1,
                    disabledClass: "swiper-button-disabled",
                    hiddenClass: "swiper-button-hidden",
                    lockClass: "swiper-button-lock"
                }
            }), t.navigation = {
                nextEl: null,
                $nextEl: null,
                prevEl: null,
                $prevEl: null
            }, a11("init", ()=>{
                p(), l();
            }), a11("toEdge fromEdge lock unlock", ()=>{
                l();
            }), a11("destroy", ()=>{
                u();
            }), a11("enable disable", ()=>{
                const { $nextEl: e , $prevEl: s  } = t.navigation;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass), s && s[t.enabled ? "removeClass" : "addClass"](t.params.navigation.lockClass);
            }), a11("click", (e, s)=>{
                const { $nextEl: a , $prevEl: r  } = t.navigation, n = s.target;
                if (t.params.navigation.hideOnClick && !d1(n).is(r) && !d1(n).is(a)) {
                    if (t.pagination && t.params.pagination && t.params.pagination.clickable && (t.pagination.el === n || t.pagination.el.contains(n))) return;
                    let e;
                    a ? e = a.hasClass(t.params.navigation.hiddenClass) : r && (e = r.hasClass(t.params.navigation.hiddenClass)), i(!0 === e ? "navigationShow" : "navigationHide"), a && a.toggleClass(t.params.navigation.hiddenClass), r && r.toggleClass(t.params.navigation.hiddenClass);
                }
            }), Object.assign(t.navigation, {
                update: l,
                init: p,
                destroy: u
            });
        },
        function(e71) {
            let { swiper: t47 , extendParams: s27 , on: a12 , emit: i7  } = e71;
            const r4 = "swiper-pagination";
            let n6;
            s27({
                pagination: {
                    el: null,
                    bulletElement: "span",
                    clickable: !1,
                    hideOnClick: !1,
                    renderBullet: null,
                    renderProgressbar: null,
                    renderFraction: null,
                    renderCustom: null,
                    progressbarOpposite: !1,
                    type: "bullets",
                    dynamicBullets: !1,
                    dynamicMainBullets: 1,
                    formatFractionCurrent: (e)=>e
                    ,
                    formatFractionTotal: (e)=>e
                    ,
                    bulletClass: `${r4}-bullet`,
                    bulletActiveClass: `${r4}-bullet-active`,
                    modifierClass: `${r4}-`,
                    currentClass: `${r4}-current`,
                    totalClass: `${r4}-total`,
                    hiddenClass: `${r4}-hidden`,
                    progressbarFillClass: `${r4}-progressbar-fill`,
                    progressbarOppositeClass: `${r4}-progressbar-opposite`,
                    clickableClass: `${r4}-clickable`,
                    lockClass: `${r4}-lock`,
                    horizontalClass: `${r4}-horizontal`,
                    verticalClass: `${r4}-vertical`
                }
            }), t47.pagination = {
                el: null,
                $el: null,
                bullets: []
            };
            let l4 = 0;
            function o2() {
                return !t47.params.pagination.el || !t47.pagination.el || !t47.pagination.$el || 0 === t47.pagination.$el.length;
            }
            function c(e, s) {
                const { bulletActiveClass: a  } = t47.params.pagination;
                e[s]().addClass(`${a}-${s}`)[s]().addClass(`${a}-${s}-${s}`);
            }
            function p3() {
                const e72 = t47.rtl, s = t47.params.pagination;
                if (o2()) return;
                const a14 = t47.virtual && t47.params.virtual.enabled ? t47.virtual.slides.length : t47.slides.length, r = t47.pagination.$el;
                let p;
                const u = t47.params.loop ? Math.ceil((a14 - 2 * t47.loopedSlides) / t47.params.slidesPerGroup) : t47.snapGrid.length;
                if (t47.params.loop ? (p = Math.ceil((t47.activeIndex - t47.loopedSlides) / t47.params.slidesPerGroup), p > a14 - 1 - 2 * t47.loopedSlides && (p -= a14 - 2 * t47.loopedSlides), p > u - 1 && (p -= u), p < 0 && "bullets" !== t47.params.paginationType && (p = u + p)) : p = void 0 !== t47.snapIndex ? t47.snapIndex : t47.activeIndex || 0, "bullets" === s.type && t47.pagination.bullets && t47.pagination.bullets.length > 0) {
                    const a13 = t47.pagination.bullets;
                    let i, o, u;
                    if (s.dynamicBullets && (n6 = a13.eq(0)[t47.isHorizontal() ? "outerWidth" : "outerHeight"](!0), r.css(t47.isHorizontal() ? "width" : "height", n6 * (s.dynamicMainBullets + 4) + "px"), s.dynamicMainBullets > 1 && void 0 !== t47.previousIndex && (l4 += p - (t47.previousIndex - t47.loopedSlides || 0), l4 > s.dynamicMainBullets - 1 ? l4 = s.dynamicMainBullets - 1 : l4 < 0 && (l4 = 0)), i = Math.max(p - l4, 0), o = i + (Math.min(a13.length, s.dynamicMainBullets) - 1), u = (o + i) / 2), a13.removeClass([
                        "",
                        "-next",
                        "-next-next",
                        "-prev",
                        "-prev-prev",
                        "-main"
                    ].map((e)=>`${s.bulletActiveClass}${e}`
                    ).join(" ")), r.length > 1) a13.each((e)=>{
                        const t = d1(e), a = t.index();
                        a === p && t.addClass(s.bulletActiveClass), s.dynamicBullets && (a >= i && a <= o && t.addClass(`${s.bulletActiveClass}-main`), a === i && c(t, "prev"), a === o && c(t, "next"));
                    });
                    else {
                        const e = a13.eq(p), r = e.index();
                        if (e.addClass(s.bulletActiveClass), s.dynamicBullets) {
                            const e = a13.eq(i), n = a13.eq(o);
                            for(let e73 = i; e73 <= o; e73 += 1)a13.eq(e73).addClass(`${s.bulletActiveClass}-main`);
                            if (t47.params.loop) {
                                if (r >= a13.length) {
                                    for(let e = s.dynamicMainBullets; e >= 0; e -= 1)a13.eq(a13.length - e).addClass(`${s.bulletActiveClass}-main`);
                                    a13.eq(a13.length - s.dynamicMainBullets - 1).addClass(`${s.bulletActiveClass}-prev`);
                                } else c(e, "prev"), c(n, "next");
                            } else c(e, "prev"), c(n, "next");
                        }
                    }
                    if (s.dynamicBullets) {
                        const i = Math.min(a13.length, s.dynamicMainBullets + 4), r = (n6 * i - n6) / 2 - u * n6, l = e72 ? "right" : "left";
                        a13.css(t47.isHorizontal() ? l : "top", `${r}px`);
                    }
                }
                if ("fraction" === s.type && (r.find(U(s.currentClass)).text(s.formatFractionCurrent(p + 1)), r.find(U(s.totalClass)).text(s.formatFractionTotal(u))), "progressbar" === s.type) {
                    let e;
                    e = s.progressbarOpposite ? t47.isHorizontal() ? "vertical" : "horizontal" : t47.isHorizontal() ? "horizontal" : "vertical";
                    const a = (p + 1) / u;
                    let i = 1, n = 1;
                    "horizontal" === e ? i = a : n = a, r.find(U(s.progressbarFillClass)).transform(`translate3d(0,0,0) scaleX(${i}) scaleY(${n})`).transition(t47.params.speed);
                }
                "custom" === s.type && s.renderCustom ? (r.html(s.renderCustom(t47, p + 1, u)), i7("paginationRender", r[0])) : i7("paginationUpdate", r[0]), t47.params.watchOverflow && t47.enabled && r[t47.isLocked ? "addClass" : "removeClass"](s.lockClass);
            }
            function u3() {
                const e = t47.params.pagination;
                if (o2()) return;
                const s = t47.virtual && t47.params.virtual.enabled ? t47.virtual.slides.length : t47.slides.length, a = t47.pagination.$el;
                let r = "";
                if ("bullets" === e.type) {
                    let i = t47.params.loop ? Math.ceil((s - 2 * t47.loopedSlides) / t47.params.slidesPerGroup) : t47.snapGrid.length;
                    t47.params.freeMode && t47.params.freeMode.enabled && !t47.params.loop && i > s && (i = s);
                    for(let s28 = 0; s28 < i; s28 += 1)e.renderBullet ? r += e.renderBullet.call(t47, s28, e.bulletClass) : r += `<${e.bulletElement} class="${e.bulletClass}"></${e.bulletElement}>`;
                    a.html(r), t47.pagination.bullets = a.find(U(e.bulletClass));
                }
                "fraction" === e.type && (r = e.renderFraction ? e.renderFraction.call(t47, e.currentClass, e.totalClass) : `<span class="${e.currentClass}"></span> / <span class="${e.totalClass}"></span>`, a.html(r)), "progressbar" === e.type && (r = e.renderProgressbar ? e.renderProgressbar.call(t47, e.progressbarFillClass) : `<span class="${e.progressbarFillClass}"></span>`, a.html(r)), "custom" !== e.type && i7("paginationRender", t47.pagination.$el[0]);
            }
            function h() {
                t47.params.pagination = F(t47, t47.originalParams.pagination, t47.params.pagination, {
                    el: "swiper-pagination"
                });
                const e74 = t47.params.pagination;
                if (!e74.el) return;
                let s29 = d1(e74.el);
                0 !== s29.length && (t47.params.uniqueNavElements && "string" == typeof e74.el && s29.length > 1 && (s29 = t47.$el.find(e74.el), s29.length > 1 && (s29 = s29.filter((e)=>d1(e).parents(".swiper")[0] === t47.el
                ))), "bullets" === e74.type && e74.clickable && s29.addClass(e74.clickableClass), s29.addClass(e74.modifierClass + e74.type), s29.addClass(t47.isHorizontal() ? e74.horizontalClass : e74.verticalClass), "bullets" === e74.type && e74.dynamicBullets && (s29.addClass(`${e74.modifierClass}${e74.type}-dynamic`), l4 = 0, e74.dynamicMainBullets < 1 && (e74.dynamicMainBullets = 1)), "progressbar" === e74.type && e74.progressbarOpposite && s29.addClass(e74.progressbarOppositeClass), e74.clickable && s29.on("click", U(e74.bulletClass), function(e) {
                    e.preventDefault();
                    let s = d1(this).index() * t47.params.slidesPerGroup;
                    t47.params.loop && (s += t47.loopedSlides), t47.slideTo(s);
                }), Object.assign(t47.pagination, {
                    $el: s29,
                    el: s29[0]
                }), t47.enabled || s29.addClass(e74.lockClass));
            }
            function m() {
                const e = t47.params.pagination;
                if (o2()) return;
                const s = t47.pagination.$el;
                s.removeClass(e.hiddenClass), s.removeClass(e.modifierClass + e.type), s.removeClass(t47.isHorizontal() ? e.horizontalClass : e.verticalClass), t47.pagination.bullets && t47.pagination.bullets.removeClass && t47.pagination.bullets.removeClass(e.bulletActiveClass), e.clickable && s.off("click", U(e.bulletClass));
            }
            a12("init", ()=>{
                h(), u3(), p3();
            }), a12("activeIndexChange", ()=>{
                (t47.params.loop || void 0 === t47.snapIndex) && p3();
            }), a12("snapIndexChange", ()=>{
                t47.params.loop || p3();
            }), a12("slidesLengthChange", ()=>{
                t47.params.loop && (u3(), p3());
            }), a12("snapGridLengthChange", ()=>{
                t47.params.loop || (u3(), p3());
            }), a12("destroy", ()=>{
                m();
            }), a12("enable disable", ()=>{
                const { $el: e  } = t47.pagination;
                e && e[t47.enabled ? "removeClass" : "addClass"](t47.params.pagination.lockClass);
            }), a12("lock unlock", ()=>{
                p3();
            }), a12("click", (e, s)=>{
                const a = s.target, { $el: r  } = t47.pagination;
                if (t47.params.pagination.el && t47.params.pagination.hideOnClick && r.length > 0 && !d1(a).hasClass(t47.params.pagination.bulletClass)) {
                    if (t47.navigation && (t47.navigation.nextEl && a === t47.navigation.nextEl || t47.navigation.prevEl && a === t47.navigation.prevEl)) return;
                    const e = r.hasClass(t47.params.pagination.hiddenClass);
                    i7(!0 === e ? "paginationShow" : "paginationHide"), r.toggleClass(t47.params.pagination.hiddenClass);
                }
            }), Object.assign(t47.pagination, {
                render: u3,
                update: p3,
                init: h,
                destroy: m
            });
        },
        function(e75) {
            let { swiper: t , extendParams: s30 , on: i8 , emit: r5  } = e75;
            const n7 = a1();
            let l5, o3, c5, u, h = !1, m = null, f = null;
            function g() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const { scrollbar: e , rtlTranslate: s , progress: a  } = t, { $dragEl: i , $el: r  } = e, n = t.params.scrollbar;
                let l = o3, d = (c5 - o3) * a;
                s ? (d = -d, d > 0 ? (l = o3 - d, d = 0) : -d + o3 > c5 && (l = c5 + d)) : d < 0 ? (l = o3 + d, d = 0) : d + o3 > c5 && (l = c5 - d), t.isHorizontal() ? (i.transform(`translate3d(${d}px, 0, 0)`), i[0].style.width = `${l}px`) : (i.transform(`translate3d(0px, ${d}px, 0)`), i[0].style.height = `${l}px`), n.hide && (clearTimeout(m), r[0].style.opacity = 1, m = setTimeout(()=>{
                    r[0].style.opacity = 0, r.transition(400);
                }, 1000));
            }
            function v() {
                if (!t.params.scrollbar.el || !t.scrollbar.el) return;
                const { scrollbar: e  } = t, { $dragEl: s , $el: a  } = e;
                s[0].style.width = "", s[0].style.height = "", c5 = t.isHorizontal() ? a[0].offsetWidth : a[0].offsetHeight, u = t.size / (t.virtualSize + t.params.slidesOffsetBefore - (t.params.centeredSlides ? t.snapGrid[0] : 0)), o3 = "auto" === t.params.scrollbar.dragSize ? c5 * u : parseInt(t.params.scrollbar.dragSize, 10), t.isHorizontal() ? s[0].style.width = `${o3}px` : s[0].style.height = `${o3}px`, a[0].style.display = u >= 1 ? "none" : "", t.params.scrollbar.hide && (a[0].style.opacity = 0), t.params.watchOverflow && t.enabled && e.$el[t.isLocked ? "addClass" : "removeClass"](t.params.scrollbar.lockClass);
            }
            function w(e) {
                return t.isHorizontal() ? "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientX : e.clientX : "touchstart" === e.type || "touchmove" === e.type ? e.targetTouches[0].clientY : e.clientY;
            }
            function b(e) {
                const { scrollbar: s , rtlTranslate: a  } = t, { $el: i  } = s;
                let r;
                r = (w(e) - i.offset()[t.isHorizontal() ? "left" : "top"] - (null !== l5 ? l5 : o3 / 2)) / (c5 - o3), r = Math.max(Math.min(r, 1), 0), a && (r = 1 - r);
                const n = t.minTranslate() + (t.maxTranslate() - t.minTranslate()) * r;
                t.updateProgress(n), t.setTranslate(n), t.updateActiveIndex(), t.updateSlidesClasses();
            }
            function x(e) {
                const s = t.params.scrollbar, { scrollbar: a , $wrapperEl: i  } = t, { $el: n , $dragEl: o  } = a;
                h = !0, l5 = e.target === o[0] || e.target === o ? w(e) - e.target.getBoundingClientRect()[t.isHorizontal() ? "left" : "top"] : null, e.preventDefault(), e.stopPropagation(), i.transition(100), o.transition(100), b(e), clearTimeout(f), n.transition(0), s.hide && n.css("opacity", 1), t.params.cssMode && t.$wrapperEl.css("scroll-snap-type", "none"), r5("scrollbarDragStart", e);
            }
            function y(e) {
                const { scrollbar: s , $wrapperEl: a  } = t, { $el: i , $dragEl: n  } = s;
                h && (e.preventDefault ? e.preventDefault() : e.returnValue = !1, b(e), a.transition(0), i.transition(0), n.transition(0), r5("scrollbarDragMove", e));
            }
            function E(e) {
                const s = t.params.scrollbar, { scrollbar: a , $wrapperEl: i  } = t, { $el: n  } = a;
                h && (h = !1, t.params.cssMode && (t.$wrapperEl.css("scroll-snap-type", ""), i.transition("")), s.hide && (clearTimeout(f), f = p1(()=>{
                    n.css("opacity", 0), n.transition(400);
                }, 1000)), r5("scrollbarDragEnd", e), s.snapOnRelease && t.slideToClosest());
            }
            function T(e) {
                const { scrollbar: s , touchEventsTouch: a , touchEventsDesktop: i , params: r , support: l  } = t, o = s.$el[0], d = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !1,
                    capture: !1
                }, c = !(!l.passiveListener || !r.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                if (!o) return;
                const p = "on" === e ? "addEventListener" : "removeEventListener";
                l.touch ? (o[p](a.start, x, d), o[p](a.move, y, d), o[p](a.end, E, c)) : (o[p](i.start, x, d), n7[p](i.move, y, d), n7[p](i.end, E, c));
            }
            function C() {
                const { scrollbar: e , $el: s  } = t;
                t.params.scrollbar = F(t, t.originalParams.scrollbar, t.params.scrollbar, {
                    el: "swiper-scrollbar"
                });
                const a = t.params.scrollbar;
                if (!a.el) return;
                let i = d1(a.el);
                t.params.uniqueNavElements && "string" == typeof a.el && i.length > 1 && 1 === s.find(a.el).length && (i = s.find(a.el));
                let r = i.find(`.${t.params.scrollbar.dragClass}`);
                0 === r.length && (r = d1(`<div class="${t.params.scrollbar.dragClass}"></div>`), i.append(r)), Object.assign(e, {
                    $el: i,
                    el: i[0],
                    $dragEl: r,
                    dragEl: r[0]
                }), a.draggable && t.params.scrollbar.el && T("on"), i && i[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
            }
            function $() {
                t.params.scrollbar.el && T("off");
            }
            s30({
                scrollbar: {
                    el: null,
                    dragSize: "auto",
                    hide: !1,
                    draggable: !1,
                    snapOnRelease: !0,
                    lockClass: "swiper-scrollbar-lock",
                    dragClass: "swiper-scrollbar-drag"
                }
            }), t.scrollbar = {
                el: null,
                dragEl: null,
                $el: null,
                $dragEl: null
            }, i8("init", ()=>{
                C(), v(), g();
            }), i8("update resize observerUpdate lock unlock", ()=>{
                v();
            }), i8("setTranslate", ()=>{
                g();
            }), i8("setTransition", (e76, s)=>{
                !function(e) {
                    t.params.scrollbar.el && t.scrollbar.el && t.scrollbar.$dragEl.transition(e);
                }(s);
            }), i8("enable disable", ()=>{
                const { $el: e  } = t.scrollbar;
                e && e[t.enabled ? "removeClass" : "addClass"](t.params.scrollbar.lockClass);
            }), i8("destroy", ()=>{
                $();
            }), Object.assign(t.scrollbar, {
                updateSize: v,
                setTranslate: g,
                init: C,
                destroy: $
            });
        },
        function(e77) {
            let { swiper: t48 , extendParams: s31 , on: a15  } = e77;
            s31({
                parallax: {
                    enabled: !1
                }
            });
            const i9 = (e, s)=>{
                const { rtl: a  } = t48, i = d1(e), r = a ? -1 : 1, n = i.attr("data-swiper-parallax") || "0";
                let l = i.attr("data-swiper-parallax-x"), o = i.attr("data-swiper-parallax-y");
                const c = i.attr("data-swiper-parallax-scale"), p = i.attr("data-swiper-parallax-opacity");
                if (l || o ? (l = l || "0", o = o || "0") : t48.isHorizontal() ? (l = n, o = "0") : (o = n, l = "0"), l = l.indexOf("%") >= 0 ? parseInt(l, 10) * s * r + "%" : l * s * r + "px", o = o.indexOf("%") >= 0 ? parseInt(o, 10) * s + "%" : o * s + "px", null != p) {
                    const e = p - (p - 1) * (1 - Math.abs(s));
                    i[0].style.opacity = e;
                }
                if (null == c) i.transform(`translate3d(${l}, ${o}, 0px)`);
                else {
                    const e = c - (c - 1) * (1 - Math.abs(s));
                    i.transform(`translate3d(${l}, ${o}, 0px) scale(${e})`);
                }
            }, r6 = ()=>{
                const { $el: e78 , slides: s32 , progress: a , snapGrid: r  } = t48;
                e78.children("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                    i9(e, a);
                }), s32.each((e79, s)=>{
                    let n = e79.progress;
                    t48.params.slidesPerGroup > 1 && "auto" !== t48.params.slidesPerView && (n += Math.ceil(s / 2) - a * (r.length - 1)), n = Math.min(Math.max(n, -1), 1), d1(e79).find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((e)=>{
                        i9(e, n);
                    });
                });
            };
            a15("beforeInit", ()=>{
                t48.params.parallax.enabled && (t48.params.watchSlidesProgress = !0, t48.originalParams.watchSlidesProgress = !0);
            }), a15("init", ()=>{
                t48.params.parallax.enabled && r6();
            }), a15("setTranslate", ()=>{
                t48.params.parallax.enabled && r6();
            }), a15("setTransition", (e80, s33)=>{
                t48.params.parallax.enabled && function(e) {
                    void 0 === e && (e = t48.params.speed);
                    const { $el: s34  } = t48;
                    s34.find("[data-swiper-parallax], [data-swiper-parallax-x], [data-swiper-parallax-y], [data-swiper-parallax-opacity], [data-swiper-parallax-scale]").each((t)=>{
                        const s = d1(t);
                        let a = parseInt(s.attr("data-swiper-parallax-duration"), 10) || e;
                        0 === e && (a = 0), s.transition(a);
                    });
                }(s33);
            });
        },
        function(e81) {
            let { swiper: t49 , extendParams: s35 , on: a16 , emit: i10  } = e81;
            const n8 = r1();
            s35({
                zoom: {
                    enabled: !1,
                    maxRatio: 3,
                    minRatio: 1,
                    toggle: !0,
                    containerClass: "swiper-zoom-container",
                    zoomedSlideClass: "swiper-slide-zoomed"
                }
            }), t49.zoom = {
                enabled: !1
            };
            let l6, o4, c6, p = 1, u4 = !1;
            const m = {
                $slideEl: void 0,
                slideWidth: void 0,
                slideHeight: void 0,
                $imageEl: void 0,
                $imageWrapEl: void 0,
                maxRatio: 3
            }, f = {
                isTouched: void 0,
                isMoved: void 0,
                currentX: void 0,
                currentY: void 0,
                minX: void 0,
                minY: void 0,
                maxX: void 0,
                maxY: void 0,
                width: void 0,
                height: void 0,
                startX: void 0,
                startY: void 0,
                touchesStart: {},
                touchesCurrent: {}
            }, g2 = {
                x: void 0,
                y: void 0,
                prevPositionX: void 0,
                prevPositionY: void 0,
                prevTime: void 0
            };
            let v3 = 1;
            function w2(e) {
                if (e.targetTouches.length < 2) return 1;
                const t = e.targetTouches[0].pageX, s = e.targetTouches[0].pageY, a = e.targetTouches[1].pageX, i = e.targetTouches[1].pageY;
                return Math.sqrt((a - t) ** 2 + (i - s) ** 2);
            }
            function b2(e) {
                const s = t49.support, a = t49.params.zoom;
                if (o4 = !1, c6 = !1, !s.gestures) {
                    if ("touchstart" !== e.type || "touchstart" === e.type && e.targetTouches.length < 2) return;
                    o4 = !0, m.scaleStart = w2(e);
                }
                m.$slideEl && m.$slideEl.length || (m.$slideEl = d1(e.target).closest(`.${t49.params.slideClass}`), 0 === m.$slideEl.length && (m.$slideEl = t49.slides.eq(t49.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`), m.maxRatio = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, 0 !== m.$imageWrapEl.length) ? (m.$imageEl && m.$imageEl.transition(0), u4 = !0) : m.$imageEl = void 0;
            }
            function x2(e) {
                const s = t49.support, a = t49.params.zoom, i = t49.zoom;
                if (!s.gestures) {
                    if ("touchmove" !== e.type || "touchmove" === e.type && e.targetTouches.length < 2) return;
                    c6 = !0, m.scaleMove = w2(e);
                }
                m.$imageEl && 0 !== m.$imageEl.length ? (s.gestures ? i.scale = e.scale * p : i.scale = m.scaleMove / m.scaleStart * p, i.scale > m.maxRatio && (i.scale = m.maxRatio - 1 + (i.scale - m.maxRatio + 1) ** 0.5), i.scale < a.minRatio && (i.scale = a.minRatio + 1 - (a.minRatio - i.scale + 1) ** 0.5), m.$imageEl.transform(`translate3d(0,0,0) scale(${i.scale})`)) : "gesturechange" === e.type && b2(e);
            }
            function y2(e) {
                const s = t49.device, a = t49.support, i = t49.params.zoom, r = t49.zoom;
                if (!a.gestures) {
                    if (!o4 || !c6) return;
                    if ("touchend" !== e.type || "touchend" === e.type && e.changedTouches.length < 2 && !s.android) return;
                    o4 = !1, c6 = !1;
                }
                m.$imageEl && 0 !== m.$imageEl.length && (r.scale = Math.max(Math.min(r.scale, m.maxRatio), i.minRatio), m.$imageEl.transition(t49.params.speed).transform(`translate3d(0,0,0) scale(${r.scale})`), p = r.scale, u4 = !1, 1 === r.scale && (m.$slideEl = void 0));
            }
            function E2(e) {
                const s = t49.zoom;
                if (!m.$imageEl || 0 === m.$imageEl.length) return;
                if (t49.allowClick = !1, !f.isTouched || !m.$slideEl) return;
                f.isMoved || (f.width = m.$imageEl[0].offsetWidth, f.height = m.$imageEl[0].offsetHeight, f.startX = h1(m.$imageWrapEl[0], "x") || 0, f.startY = h1(m.$imageWrapEl[0], "y") || 0, m.slideWidth = m.$slideEl[0].offsetWidth, m.slideHeight = m.$slideEl[0].offsetHeight, m.$imageWrapEl.transition(0));
                const a = f.width * s.scale, i = f.height * s.scale;
                if (!(a < m.slideWidth && i < m.slideHeight)) {
                    if (f.minX = Math.min(m.slideWidth / 2 - a / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - i / 2, 0), f.maxY = -f.minY, f.touchesCurrent.x = "touchmove" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesCurrent.y = "touchmove" === e.type ? e.targetTouches[0].pageY : e.pageY, !f.isMoved && !u4) {
                        if (t49.isHorizontal() && (Math.floor(f.minX) === Math.floor(f.startX) && f.touchesCurrent.x < f.touchesStart.x || Math.floor(f.maxX) === Math.floor(f.startX) && f.touchesCurrent.x > f.touchesStart.x)) return void (f.isTouched = !1);
                        if (!t49.isHorizontal() && (Math.floor(f.minY) === Math.floor(f.startY) && f.touchesCurrent.y < f.touchesStart.y || Math.floor(f.maxY) === Math.floor(f.startY) && f.touchesCurrent.y > f.touchesStart.y)) return void (f.isTouched = !1);
                    }
                    e.cancelable && e.preventDefault(), e.stopPropagation(), f.isMoved = !0, f.currentX = f.touchesCurrent.x - f.touchesStart.x + f.startX, f.currentY = f.touchesCurrent.y - f.touchesStart.y + f.startY, f.currentX < f.minX && (f.currentX = f.minX + 1 - (f.minX - f.currentX + 1) ** 0.8), f.currentX > f.maxX && (f.currentX = f.maxX - 1 + (f.currentX - f.maxX + 1) ** 0.8), f.currentY < f.minY && (f.currentY = f.minY + 1 - (f.minY - f.currentY + 1) ** 0.8), f.currentY > f.maxY && (f.currentY = f.maxY - 1 + (f.currentY - f.maxY + 1) ** 0.8), g2.prevPositionX || (g2.prevPositionX = f.touchesCurrent.x), g2.prevPositionY || (g2.prevPositionY = f.touchesCurrent.y), g2.prevTime || (g2.prevTime = Date.now()), g2.x = (f.touchesCurrent.x - g2.prevPositionX) / (Date.now() - g2.prevTime) / 2, g2.y = (f.touchesCurrent.y - g2.prevPositionY) / (Date.now() - g2.prevTime) / 2, Math.abs(f.touchesCurrent.x - g2.prevPositionX) < 2 && (g2.x = 0), Math.abs(f.touchesCurrent.y - g2.prevPositionY) < 2 && (g2.y = 0), g2.prevPositionX = f.touchesCurrent.x, g2.prevPositionY = f.touchesCurrent.y, g2.prevTime = Date.now(), m.$imageWrapEl.transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
                }
            }
            function T2() {
                const e = t49.zoom;
                m.$slideEl && t49.previousIndex !== t49.activeIndex && (m.$imageEl && m.$imageEl.transform("translate3d(0,0,0) scale(1)"), m.$imageWrapEl && m.$imageWrapEl.transform("translate3d(0,0,0)"), e.scale = 1, p = 1, m.$slideEl = void 0, m.$imageEl = void 0, m.$imageWrapEl = void 0);
            }
            function C2(e) {
                const s = t49.zoom, a = t49.params.zoom;
                if (m.$slideEl || (e && e.target && (m.$slideEl = d1(e.target).closest(`.${t49.params.slideClass}`)), m.$slideEl || (t49.params.virtual && t49.params.virtual.enabled && t49.virtual ? m.$slideEl = t49.$wrapperEl.children(`.${t49.params.slideActiveClass}`) : m.$slideEl = t49.slides.eq(t49.activeIndex)), m.$imageEl = m.$slideEl.find(`.${a.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${a.containerClass}`)), !m.$imageEl || 0 === m.$imageEl.length || !m.$imageWrapEl || 0 === m.$imageWrapEl.length) return;
                let i, r, l, o, c, u, h, g, v, w, b, x, y, E, T, C, $, S;
                t49.params.cssMode && (t49.wrapperEl.style.overflow = "hidden", t49.wrapperEl.style.touchAction = "none"), m.$slideEl.addClass(`${a.zoomedSlideClass}`), void 0 === f.touchesStart.x && e ? (i = "touchend" === e.type ? e.changedTouches[0].pageX : e.pageX, r = "touchend" === e.type ? e.changedTouches[0].pageY : e.pageY) : (i = f.touchesStart.x, r = f.touchesStart.y), s.scale = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, p = m.$imageWrapEl.attr("data-swiper-zoom") || a.maxRatio, e ? ($ = m.$slideEl[0].offsetWidth, S = m.$slideEl[0].offsetHeight, l = m.$slideEl.offset().left + n8.scrollX, o = m.$slideEl.offset().top + n8.scrollY, c = l + $ / 2 - i, u = o + S / 2 - r, v = m.$imageEl[0].offsetWidth, w = m.$imageEl[0].offsetHeight, b = v * s.scale, x = w * s.scale, y = Math.min($ / 2 - b / 2, 0), E = Math.min(S / 2 - x / 2, 0), T = -y, C = -E, h = c * s.scale, g = u * s.scale, h < y && (h = y), h > T && (h = T), g < E && (g = E), g > C && (g = C)) : (h = 0, g = 0), m.$imageWrapEl.transition(300).transform(`translate3d(${h}px, ${g}px,0)`), m.$imageEl.transition(300).transform(`translate3d(0,0,0) scale(${s.scale})`);
            }
            function $2() {
                const e = t49.zoom, s = t49.params.zoom;
                m.$slideEl || (t49.params.virtual && t49.params.virtual.enabled && t49.virtual ? m.$slideEl = t49.$wrapperEl.children(`.${t49.params.slideActiveClass}`) : m.$slideEl = t49.slides.eq(t49.activeIndex), m.$imageEl = m.$slideEl.find(`.${s.containerClass}`).eq(0).find("picture, img, svg, canvas, .swiper-zoom-target").eq(0), m.$imageWrapEl = m.$imageEl.parent(`.${s.containerClass}`)), m.$imageEl && 0 !== m.$imageEl.length && m.$imageWrapEl && 0 !== m.$imageWrapEl.length && (t49.params.cssMode && (t49.wrapperEl.style.overflow = "", t49.wrapperEl.style.touchAction = ""), e.scale = 1, p = 1, m.$imageWrapEl.transition(300).transform("translate3d(0,0,0)"), m.$imageEl.transition(300).transform("translate3d(0,0,0) scale(1)"), m.$slideEl.removeClass(`${s.zoomedSlideClass}`), m.$slideEl = void 0);
            }
            function S2(e) {
                const s = t49.zoom;
                s.scale && 1 !== s.scale ? $2() : C2(e);
            }
            function M() {
                const e = t49.support;
                return {
                    passiveListener: !("touchstart" !== t49.touchEvents.start || !e.passiveListener || !t49.params.passiveListeners) && {
                        passive: !0,
                        capture: !1
                    },
                    activeListenerWithCapture: !e.passiveListener || {
                        passive: !1,
                        capture: !0
                    }
                };
            }
            function P() {
                return `.${t49.params.slideClass}`;
            }
            function k(e) {
                const { passiveListener: s  } = M(), a = P();
                t49.$wrapperEl[e]("gesturestart", a, b2, s), t49.$wrapperEl[e]("gesturechange", a, x2, s), t49.$wrapperEl[e]("gestureend", a, y2, s);
            }
            function z() {
                l6 || (l6 = !0, k("on"));
            }
            function O() {
                l6 && (l6 = !1, k("off"));
            }
            function L() {
                const e = t49.zoom;
                if (e.enabled) return;
                e.enabled = !0;
                const s = t49.support, { passiveListener: a , activeListenerWithCapture: i  } = M(), r = P();
                s.gestures ? (t49.$wrapperEl.on(t49.touchEvents.start, z, a), t49.$wrapperEl.on(t49.touchEvents.end, O, a)) : "touchstart" === t49.touchEvents.start && (t49.$wrapperEl.on(t49.touchEvents.start, r, b2, a), t49.$wrapperEl.on(t49.touchEvents.move, r, x2, i), t49.$wrapperEl.on(t49.touchEvents.end, r, y2, a), t49.touchEvents.cancel && t49.$wrapperEl.on(t49.touchEvents.cancel, r, y2, a)), t49.$wrapperEl.on(t49.touchEvents.move, `.${t49.params.zoom.containerClass}`, E2, i);
            }
            function I() {
                const e = t49.zoom;
                if (!e.enabled) return;
                const s = t49.support;
                e.enabled = !1;
                const { passiveListener: a , activeListenerWithCapture: i  } = M(), r = P();
                s.gestures ? (t49.$wrapperEl.off(t49.touchEvents.start, z, a), t49.$wrapperEl.off(t49.touchEvents.end, O, a)) : "touchstart" === t49.touchEvents.start && (t49.$wrapperEl.off(t49.touchEvents.start, r, b2, a), t49.$wrapperEl.off(t49.touchEvents.move, r, x2, i), t49.$wrapperEl.off(t49.touchEvents.end, r, y2, a), t49.touchEvents.cancel && t49.$wrapperEl.off(t49.touchEvents.cancel, r, y2, a)), t49.$wrapperEl.off(t49.touchEvents.move, `.${t49.params.zoom.containerClass}`, E2, i);
            }
            Object.defineProperty(t49.zoom, "scale", {
                get: ()=>v3
                ,
                set (e) {
                    if (v3 !== e) {
                        const t = m.$imageEl ? m.$imageEl[0] : void 0, s = m.$slideEl ? m.$slideEl[0] : void 0;
                        i10("zoomChange", e, t, s);
                    }
                    v3 = e;
                }
            }), a16("init", ()=>{
                t49.params.zoom.enabled && L();
            }), a16("destroy", ()=>{
                I();
            }), a16("touchStart", (e82, s36)=>{
                t49.zoom.enabled && function(e) {
                    const s = t49.device;
                    m.$imageEl && 0 !== m.$imageEl.length && (f.isTouched || (s.android && e.cancelable && e.preventDefault(), f.isTouched = !0, f.touchesStart.x = "touchstart" === e.type ? e.targetTouches[0].pageX : e.pageX, f.touchesStart.y = "touchstart" === e.type ? e.targetTouches[0].pageY : e.pageY));
                }(s36);
            }), a16("touchEnd", (e83, s37)=>{
                t49.zoom.enabled && function() {
                    const e = t49.zoom;
                    if (!m.$imageEl || 0 === m.$imageEl.length) return;
                    if (!f.isTouched || !f.isMoved) return f.isTouched = !1, void (f.isMoved = !1);
                    f.isTouched = !1, f.isMoved = !1;
                    let s = 300, a = 300;
                    const i = g2.x * s, r = f.currentX + i, n = g2.y * a, l = f.currentY + n;
                    0 !== g2.x && (s = Math.abs((r - f.currentX) / g2.x)), 0 !== g2.y && (a = Math.abs((l - f.currentY) / g2.y));
                    const o = Math.max(s, a);
                    f.currentX = r, f.currentY = l;
                    const d = f.width * e.scale, c = f.height * e.scale;
                    f.minX = Math.min(m.slideWidth / 2 - d / 2, 0), f.maxX = -f.minX, f.minY = Math.min(m.slideHeight / 2 - c / 2, 0), f.maxY = -f.minY, f.currentX = Math.max(Math.min(f.currentX, f.maxX), f.minX), f.currentY = Math.max(Math.min(f.currentY, f.maxY), f.minY), m.$imageWrapEl.transition(o).transform(`translate3d(${f.currentX}px, ${f.currentY}px,0)`);
                }();
            }), a16("doubleTap", (e, s)=>{
                !t49.animating && t49.params.zoom.enabled && t49.zoom.enabled && t49.params.zoom.toggle && S2(s);
            }), a16("transitionEnd", ()=>{
                t49.zoom.enabled && t49.params.zoom.enabled && T2();
            }), a16("slideChange", ()=>{
                t49.zoom.enabled && t49.params.zoom.enabled && t49.params.cssMode && T2();
            }), Object.assign(t49.zoom, {
                enable: L,
                disable: I,
                in: C2,
                out: $2,
                toggle: S2
            });
        },
        function(e84) {
            let { swiper: t50 , extendParams: s38 , on: a17 , emit: i11  } = e84;
            s38({
                lazy: {
                    checkInView: !1,
                    enabled: !1,
                    loadPrevNext: !1,
                    loadPrevNextAmount: 1,
                    loadOnTransitionStart: !1,
                    scrollingElement: "",
                    elementClass: "swiper-lazy",
                    loadingClass: "swiper-lazy-loading",
                    loadedClass: "swiper-lazy-loaded",
                    preloaderClass: "swiper-lazy-preloader"
                }
            }), t50.lazy = {};
            let n9 = !1, l7 = !1;
            function o5(e85, s) {
                void 0 === s && (s = !0);
                const a = t50.params.lazy;
                if (void 0 === e85) return;
                if (0 === t50.slides.length) return;
                const r = t50.virtual && t50.params.virtual.enabled ? t50.$wrapperEl.children(`.${t50.params.slideClass}[data-swiper-slide-index="${e85}"]`) : t50.slides.eq(e85), n10 = r.find(`.${a.elementClass}:not(.${a.loadedClass}):not(.${a.loadingClass})`);
                !r.hasClass(a.elementClass) || r.hasClass(a.loadedClass) || r.hasClass(a.loadingClass) || n10.push(r[0]), 0 !== n10.length && n10.each((e86)=>{
                    const n = d1(e86);
                    n.addClass(a.loadingClass);
                    const l = n.attr("data-background"), c = n.attr("data-src"), p = n.attr("data-srcset"), u = n.attr("data-sizes"), h = n.parent("picture");
                    t50.loadImage(n[0], c || l, p, u, !1, ()=>{
                        if (null != t50 && t50 && (!t50 || t50.params) && !t50.destroyed) {
                            if (l ? (n.css("background-image", `url("${l}")`), n.removeAttr("data-background")) : (p && (n.attr("srcset", p), n.removeAttr("data-srcset")), u && (n.attr("sizes", u), n.removeAttr("data-sizes")), h.length && h.children("source").each((e)=>{
                                const t = d1(e);
                                t.attr("data-srcset") && (t.attr("srcset", t.attr("data-srcset")), t.removeAttr("data-srcset"));
                            }), c && (n.attr("src", c), n.removeAttr("data-src"))), n.addClass(a.loadedClass).removeClass(a.loadingClass), r.find(`.${a.preloaderClass}`).remove(), t50.params.loop && s) {
                                const e = r.attr("data-swiper-slide-index");
                                if (r.hasClass(t50.params.slideDuplicateClass)) o5(t50.$wrapperEl.children(`[data-swiper-slide-index="${e}"]:not(.${t50.params.slideDuplicateClass})`).index(), !1);
                                else o5(t50.$wrapperEl.children(`.${t50.params.slideDuplicateClass}[data-swiper-slide-index="${e}"]`).index(), !1);
                            }
                            i11("lazyImageReady", r[0], n[0]), t50.params.autoHeight && t50.updateAutoHeight();
                        }
                    }), i11("lazyImageLoad", r[0], n[0]);
                });
            }
            function c7() {
                const { $wrapperEl: e88 , params: s , slides: a , activeIndex: i  } = t50, r = t50.virtual && s.virtual.enabled, n = s.lazy;
                let c = s.slidesPerView;
                function p(t) {
                    if (r) {
                        if (e88.children(`.${s.slideClass}[data-swiper-slide-index="${t}"]`).length) return !0;
                    } else if (a[t]) return !0;
                    return !1;
                }
                function u(e) {
                    return r ? d1(e).attr("data-swiper-slide-index") : d1(e).index();
                }
                if ("auto" === c && (c = 0), l7 || (l7 = !0), t50.params.watchSlidesProgress) e88.children(`.${s.slideVisibleClass}`).each((e)=>{
                    o5(r ? d1(e).attr("data-swiper-slide-index") : d1(e).index());
                });
                else if (c > 1) for(let e87 = i; e87 < i + c; e87 += 1)p(e87) && o5(e87);
                else o5(i);
                if (n.loadPrevNext) {
                    if (c > 1 || n.loadPrevNextAmount && n.loadPrevNextAmount > 1) {
                        const e = n.loadPrevNextAmount, t = c, s = Math.min(i + t + Math.max(e, t), a.length), r = Math.max(i - Math.max(t, e), 0);
                        for(let e89 = i + c; e89 < s; e89 += 1)p(e89) && o5(e89);
                        for(let e90 = r; e90 < i; e90 += 1)p(e90) && o5(e90);
                    } else {
                        const t = e88.children(`.${s.slideNextClass}`);
                        t.length > 0 && o5(u(t));
                        const a = e88.children(`.${s.slidePrevClass}`);
                        a.length > 0 && o5(u(a));
                    }
                }
            }
            function p4() {
                const e = r1();
                if (!t50 || t50.destroyed) return;
                const s = t50.params.lazy.scrollingElement ? d1(t50.params.lazy.scrollingElement) : d1(e), a = s[0] === e, i = a ? e.innerWidth : s[0].offsetWidth, l = a ? e.innerHeight : s[0].offsetHeight, o = t50.$el.offset(), { rtlTranslate: u  } = t50;
                let h = !1;
                u && (o.left -= t50.$el[0].scrollLeft);
                const m = [
                    [
                        o.left,
                        o.top
                    ],
                    [
                        o.left + t50.width,
                        o.top
                    ],
                    [
                        o.left,
                        o.top + t50.height
                    ],
                    [
                        o.left + t50.width,
                        o.top + t50.height
                    ]
                ];
                for(let e91 = 0; e91 < m.length; e91 += 1){
                    const t = m[e91];
                    if (t[0] >= 0 && t[0] <= i && t[1] >= 0 && t[1] <= l) {
                        if (0 === t[0] && 0 === t[1]) continue;
                        h = !0;
                    }
                }
                const f = !("touchstart" !== t50.touchEvents.start || !t50.support.passiveListener || !t50.params.passiveListeners) && {
                    passive: !0,
                    capture: !1
                };
                h ? (c7(), s.off("scroll", p4, f)) : n9 || (n9 = !0, s.on("scroll", p4, f));
            }
            a17("beforeInit", ()=>{
                t50.params.lazy.enabled && t50.params.preloadImages && (t50.params.preloadImages = !1);
            }), a17("init", ()=>{
                t50.params.lazy.enabled && (t50.params.lazy.checkInView ? p4() : c7());
            }), a17("scroll", ()=>{
                t50.params.freeMode && t50.params.freeMode.enabled && !t50.params.freeMode.sticky && c7();
            }), a17("scrollbarDragMove resize _freeModeNoMomentumRelease", ()=>{
                t50.params.lazy.enabled && (t50.params.lazy.checkInView ? p4() : c7());
            }), a17("transitionStart", ()=>{
                t50.params.lazy.enabled && (t50.params.lazy.loadOnTransitionStart || !t50.params.lazy.loadOnTransitionStart && !l7) && (t50.params.lazy.checkInView ? p4() : c7());
            }), a17("transitionEnd", ()=>{
                t50.params.lazy.enabled && !t50.params.lazy.loadOnTransitionStart && (t50.params.lazy.checkInView ? p4() : c7());
            }), a17("slideChange", ()=>{
                const { lazy: e , cssMode: s , watchSlidesProgress: a , touchReleaseOnEdges: i , resistanceRatio: r  } = t50.params;
                e.enabled && (s || a && (i || 0 === r)) && c7();
            }), Object.assign(t50.lazy, {
                load: c7,
                loadInSlide: o5
            });
        },
        function(e92) {
            let { swiper: t51 , extendParams: s39 , on: a18  } = e92;
            function i12(e93, t52) {
                const s40 = function() {
                    let e, t, s;
                    return (a, i)=>{
                        for(t = -1, e = a.length; e - t > 1;)s = e + t >> 1, a[s] <= i ? t = s : e = s;
                        return e;
                    };
                }();
                let a19, i13;
                return this.x = e93, this.y = t52, this.lastIndex = e93.length - 1, this.interpolate = function(e) {
                    return e ? (i13 = s40(this.x, e), a19 = i13 - 1, (e - this.x[a19]) * (this.y[i13] - this.y[a19]) / (this.x[i13] - this.x[a19]) + this.y[a19]) : 0;
                }, this;
            }
            function r7() {
                t51.controller.control && t51.controller.spline && (t51.controller.spline = void 0, delete t51.controller.spline);
            }
            s39({
                controller: {
                    control: void 0,
                    inverse: !1,
                    by: "slide"
                }
            }), t51.controller = {
                control: void 0
            }, a18("beforeInit", ()=>{
                t51.controller.control = t51.params.controller.control;
            }), a18("update", ()=>{
                r7();
            }), a18("resize", ()=>{
                r7();
            }), a18("observerUpdate", ()=>{
                r7();
            }), a18("setTranslate", (e, s, a)=>{
                t51.controller.control && t51.controller.setTranslate(s, a);
            }), a18("setTransition", (e, s, a)=>{
                t51.controller.control && t51.controller.setTransition(s, a);
            }), Object.assign(t51.controller, {
                setTranslate: function(e95, s41) {
                    const a = t51.controller.control;
                    let r, n;
                    const l = t51.constructor;
                    function o(e96) {
                        const s = t51.rtlTranslate ? -t51.translate : t51.translate;
                        "slide" === t51.params.controller.by && (!function(e) {
                            t51.controller.spline || (t51.controller.spline = t51.params.loop ? new i12(t51.slidesGrid, e.slidesGrid) : new i12(t51.snapGrid, e.snapGrid));
                        }(e96), n = -t51.controller.spline.interpolate(-s)), n && "container" !== t51.params.controller.by || (r = (e96.maxTranslate() - e96.minTranslate()) / (t51.maxTranslate() - t51.minTranslate()), n = (s - t51.minTranslate()) * r + e96.minTranslate()), t51.params.controller.inverse && (n = e96.maxTranslate() - n), e96.updateProgress(n), e96.setTranslate(n, t51), e96.updateActiveIndex(), e96.updateSlidesClasses();
                    }
                    if (Array.isArray(a)) for(let e94 = 0; e94 < a.length; e94 += 1)a[e94] !== s41 && a[e94] instanceof l && o(a[e94]);
                    else a instanceof l && s41 !== a && o(a);
                },
                setTransition: function(e, s42) {
                    const a = t51.constructor, i = t51.controller.control;
                    let r;
                    function n(s) {
                        s.setTransition(e, t51), 0 !== e && (s.transitionStart(), s.params.autoHeight && p1(()=>{
                            s.updateAutoHeight();
                        }), s.$wrapperEl.transitionEnd(()=>{
                            i && (s.params.loop && "slide" === t51.params.controller.by && s.loopFix(), s.transitionEnd());
                        }));
                    }
                    if (Array.isArray(i)) for(r = 0; r < i.length; r += 1)i[r] !== s42 && i[r] instanceof a && n(i[r]);
                    else i instanceof a && s42 !== i && n(i);
                }
            });
        },
        function(e97) {
            let { swiper: t53 , extendParams: s43 , on: a20  } = e97;
            s43({
                a11y: {
                    enabled: !0,
                    notificationClass: "swiper-notification",
                    prevSlideMessage: "Previous slide",
                    nextSlideMessage: "Next slide",
                    firstSlideMessage: "This is the first slide",
                    lastSlideMessage: "This is the last slide",
                    paginationBulletMessage: "Go to slide {{index}}",
                    slideLabelMessage: "{{index}} / {{slidesLength}}",
                    containerMessage: null,
                    containerRoleDescriptionMessage: null,
                    itemRoleDescriptionMessage: null,
                    slideRole: "group",
                    id: null
                }
            });
            let i14 = null;
            function r8(e) {
                const t = i14;
                0 !== t.length && (t.html(""), t.html(e));
            }
            function n11(e) {
                e.attr("tabIndex", "0");
            }
            function l8(e) {
                e.attr("tabIndex", "-1");
            }
            function o(e, t) {
                e.attr("role", t);
            }
            function c(e, t) {
                e.attr("aria-roledescription", t);
            }
            function p(e, t) {
                e.attr("aria-label", t);
            }
            function u5(e) {
                e.attr("aria-disabled", !0);
            }
            function h2(e) {
                e.attr("aria-disabled", !1);
            }
            function m(e) {
                if (13 !== e.keyCode && 32 !== e.keyCode) return;
                const s = t53.params.a11y, a = d1(e.target);
                t53.navigation && t53.navigation.$nextEl && a.is(t53.navigation.$nextEl) && (t53.isEnd && !t53.params.loop || t53.slideNext(), t53.isEnd ? r8(s.lastSlideMessage) : r8(s.nextSlideMessage)), t53.navigation && t53.navigation.$prevEl && a.is(t53.navigation.$prevEl) && (t53.isBeginning && !t53.params.loop || t53.slidePrev(), t53.isBeginning ? r8(s.firstSlideMessage) : r8(s.prevSlideMessage)), t53.pagination && a.is(U(t53.params.pagination.bulletClass)) && a[0].click();
            }
            function f3() {
                return t53.pagination && t53.pagination.bullets && t53.pagination.bullets.length;
            }
            function g() {
                return f3() && t53.params.pagination.clickable;
            }
            const v = (e98, t54, s)=>{
                n11(e98), "BUTTON" !== e98[0].tagName && (o(e98, "button"), e98.on("keydown", m)), p(e98, s), function(e, t) {
                    e.attr("aria-controls", t);
                }(e98, t54);
            }, w = (e)=>{
                const s = e.target.closest(`.${t53.params.slideClass}`);
                if (!s || !t53.slides.includes(s)) return;
                const a = t53.slides.indexOf(s) === t53.activeIndex, i = t53.params.watchSlidesProgress && t53.visibleSlides && t53.visibleSlides.includes(s);
                a || i || t53.slideTo(t53.slides.indexOf(s), 0);
            };
            function b3() {
                const e99 = t53.params.a11y;
                t53.$el.append(i14);
                const s44 = t53.$el;
                e99.containerRoleDescriptionMessage && c(s44, e99.containerRoleDescriptionMessage), e99.containerMessage && p(s44, e99.containerMessage);
                const a21 = t53.$wrapperEl, r9 = e99.id || a21.attr("id") || `swiper-wrapper-${n = 16, void 0 === n && (n = 16), "x".repeat(n).replace(/x/g, ()=>Math.round(16 * Math.random()).toString(16)
                )}`;
                var n;
                const l = t53.params.autoplay && t53.params.autoplay.enabled ? "off" : "polite";
                var u;
                u = r9, a21.attr("id", u), function(e, t) {
                    e.attr("aria-live", t);
                }(a21, l), e99.itemRoleDescriptionMessage && c(d1(t53.slides), e99.itemRoleDescriptionMessage), o(d1(t53.slides), e99.slideRole);
                const h = t53.params.loop ? t53.slides.filter((e)=>!e.classList.contains(t53.params.slideDuplicateClass)
                ).length : t53.slides.length;
                let f, b;
                t53.slides.each((s, a)=>{
                    const i = d1(s), r = t53.params.loop ? parseInt(i.attr("data-swiper-slide-index"), 10) : a;
                    p(i, e99.slideLabelMessage.replace(/\{\{index\}\}/, r + 1).replace(/\{\{slidesLength\}\}/, h));
                }), t53.navigation && t53.navigation.$nextEl && (f = t53.navigation.$nextEl), t53.navigation && t53.navigation.$prevEl && (b = t53.navigation.$prevEl), f && f.length && v(f, r9, e99.nextSlideMessage), b && b.length && v(b, r9, e99.prevSlideMessage), g() && t53.pagination.$el.on("keydown", U(t53.params.pagination.bulletClass), m), t53.$el.on("focus", w, !0);
            }
            a20("beforeInit", ()=>{
                i14 = d1(`<span class="${t53.params.a11y.notificationClass}" aria-live="assertive" aria-atomic="true"></span>`);
            }), a20("afterInit", ()=>{
                t53.params.a11y.enabled && b3();
            }), a20("fromEdge toEdge afterInit lock unlock", ()=>{
                t53.params.a11y.enabled && function() {
                    if (t53.params.loop || t53.params.rewind || !t53.navigation) return;
                    const { $nextEl: e , $prevEl: s  } = t53.navigation;
                    s && s.length > 0 && (t53.isBeginning ? (u5(s), l8(s)) : (h2(s), n11(s))), e && e.length > 0 && (t53.isEnd ? (u5(e), l8(e)) : (h2(e), n11(e)));
                }();
            }), a20("paginationUpdate", ()=>{
                t53.params.a11y.enabled && function() {
                    const e = t53.params.a11y;
                    f3() && t53.pagination.bullets.each((s)=>{
                        const a = d1(s);
                        t53.params.pagination.clickable && (n11(a), t53.params.pagination.renderBullet || (o(a, "button"), p(a, e.paginationBulletMessage.replace(/\{\{index\}\}/, a.index() + 1)))), a.is(`.${t53.params.pagination.bulletActiveClass}`) ? a.attr("aria-current", "true") : a.removeAttr("aria-current");
                    });
                }();
            }), a20("destroy", ()=>{
                t53.params.a11y.enabled && function() {
                    let e, s;
                    i14 && i14.length > 0 && i14.remove(), t53.navigation && t53.navigation.$nextEl && (e = t53.navigation.$nextEl), t53.navigation && t53.navigation.$prevEl && (s = t53.navigation.$prevEl), e && e.off("keydown", m), s && s.off("keydown", m), g() && t53.pagination.$el.off("keydown", U(t53.params.pagination.bulletClass), m), t53.$el.off("focus", w, !0);
                }();
            });
        },
        function(e100) {
            let { swiper: t55 , extendParams: s45 , on: a22  } = e100;
            s45({
                history: {
                    enabled: !1,
                    root: "",
                    replaceState: !1,
                    key: "slides"
                }
            });
            let i15 = !1, n12 = {};
            const l = (e)=>e.toString().replace(/\s+/g, "-").replace(/[^\w-]+/g, "").replace(/--+/g, "-").replace(/^-+/, "").replace(/-+$/, "")
            , o6 = (e101)=>{
                const t = r1();
                let s;
                s = e101 ? new URL(e101) : t.location;
                const a = s.pathname.slice(1).split("/").filter((e)=>"" !== e
                ), i = a.length;
                return {
                    key: a[i - 2],
                    value: a[i - 1]
                };
            }, d2 = (e, s)=>{
                const a = r1();
                if (!i15 || !t55.params.history.enabled) return;
                let n;
                n = t55.params.url ? new URL(t55.params.url) : a.location;
                const o = t55.slides.eq(s);
                let d = l(o.attr("data-history"));
                if (t55.params.history.root.length > 0) {
                    let s = t55.params.history.root;
                    "/" === s[s.length - 1] && (s = s.slice(0, s.length - 1)), d = `${s}/${e}/${d}`;
                } else n.pathname.includes(e) || (d = `${e}/${d}`);
                const c = a.history.state;
                c && c.value === d || (t55.params.history.replaceState ? a.history.replaceState({
                    value: d
                }, null, d) : a.history.pushState({
                    value: d
                }, null, d));
            }, c8 = (e, s, a)=>{
                if (s) for(let i = 0, r = t55.slides.length; i < r; i += 1){
                    const r = t55.slides.eq(i);
                    if (l(r.attr("data-history")) === s && !r.hasClass(t55.params.slideDuplicateClass)) {
                        const s = r.index();
                        t55.slideTo(s, e, a);
                    }
                }
                else t55.slideTo(0, e, a);
            }, p = ()=>{
                n12 = o6(t55.params.url), c8(t55.params.speed, t55.paths.value, !1);
            };
            a22("init", ()=>{
                t55.params.history.enabled && (()=>{
                    const e = r1();
                    if (t55.params.history) {
                        if (!e.history || !e.history.pushState) return t55.params.history.enabled = !1, void (t55.params.hashNavigation.enabled = !0);
                        i15 = !0, n12 = o6(t55.params.url), (n12.key || n12.value) && (c8(0, n12.value, t55.params.runCallbacksOnInit), t55.params.history.replaceState || e.addEventListener("popstate", p));
                    }
                })();
            }), a22("destroy", ()=>{
                t55.params.history.enabled && (()=>{
                    const e = r1();
                    t55.params.history.replaceState || e.removeEventListener("popstate", p);
                })();
            }), a22("transitionEnd _freeModeNoMomentumRelease", ()=>{
                i15 && d2(t55.params.history.key, t55.activeIndex);
            }), a22("slideChange", ()=>{
                i15 && t55.params.cssMode && d2(t55.params.history.key, t55.activeIndex);
            });
        },
        function(e102) {
            let { swiper: t , extendParams: s46 , emit: i16 , on: n  } = e102, l = !1;
            const o = a1(), c = r1();
            s46({
                hashNavigation: {
                    enabled: !1,
                    replaceState: !1,
                    watchState: !1
                }
            });
            const p = ()=>{
                i16("hashChange");
                const e = o.location.hash.replace("#", "");
                if (e !== t.slides.eq(t.activeIndex).attr("data-hash")) {
                    const s = t.$wrapperEl.children(`.${t.params.slideClass}[data-hash="${e}"]`).index();
                    if (void 0 === s) return;
                    t.slideTo(s);
                }
            }, u = ()=>{
                if (l && t.params.hashNavigation.enabled) {
                    if (t.params.hashNavigation.replaceState && c.history && c.history.replaceState) c.history.replaceState(null, null, `#${t.slides.eq(t.activeIndex).attr("data-hash")}` || ""), i16("hashSet");
                    else {
                        const e = t.slides.eq(t.activeIndex), s = e.attr("data-hash") || e.attr("data-history");
                        o.location.hash = s || "", i16("hashSet");
                    }
                }
            };
            n("init", ()=>{
                t.params.hashNavigation.enabled && (()=>{
                    if (!t.params.hashNavigation.enabled || t.params.history && t.params.history.enabled) return;
                    l = !0;
                    const e = o.location.hash.replace("#", "");
                    if (e) {
                        const s = 0;
                        for(let a = 0, i = t.slides.length; a < i; a += 1){
                            const i = t.slides.eq(a);
                            if ((i.attr("data-hash") || i.attr("data-history")) === e && !i.hasClass(t.params.slideDuplicateClass)) {
                                const e = i.index();
                                t.slideTo(e, s, t.params.runCallbacksOnInit, !0);
                            }
                        }
                    }
                    t.params.hashNavigation.watchState && d1(c).on("hashchange", p);
                })();
            }), n("destroy", ()=>{
                t.params.hashNavigation.enabled && t.params.hashNavigation.watchState && d1(c).off("hashchange", p);
            }), n("transitionEnd _freeModeNoMomentumRelease", ()=>{
                l && u();
            }), n("slideChange", ()=>{
                l && t.params.cssMode && u();
            });
        },
        function(e103) {
            let t56, { swiper: s , extendParams: i , on: r , emit: n  } = e103;
            function l() {
                const e104 = s.slides.eq(s.activeIndex);
                let a = s.params.autoplay.delay;
                e104.attr("data-swiper-autoplay") && (a = e104.attr("data-swiper-autoplay") || s.params.autoplay.delay), clearTimeout(t56), t56 = p1(()=>{
                    let e;
                    s.params.autoplay.reverseDirection ? s.params.loop ? (s.loopFix(), e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.isBeginning ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(s.slides.length - 1, s.params.speed, !0, !0), n("autoplay")) : (e = s.slidePrev(s.params.speed, !0, !0), n("autoplay")) : s.params.loop ? (s.loopFix(), e = s.slideNext(s.params.speed, !0, !0), n("autoplay")) : s.isEnd ? s.params.autoplay.stopOnLastSlide ? d() : (e = s.slideTo(0, s.params.speed, !0, !0), n("autoplay")) : (e = s.slideNext(s.params.speed, !0, !0), n("autoplay")), (s.params.cssMode && s.autoplay.running || !1 === e) && l();
                }, a);
            }
            function o() {
                return void 0 === t56 && !s.autoplay.running && (s.autoplay.running = !0, n("autoplayStart"), l(), !0);
            }
            function d() {
                return !!s.autoplay.running && void 0 !== t56 && (t56 && (clearTimeout(t56), t56 = void 0), s.autoplay.running = !1, n("autoplayStop"), !0);
            }
            function c(e105) {
                s.autoplay.running && (s.autoplay.paused || (t56 && clearTimeout(t56), s.autoplay.paused = !0, 0 !== e105 && s.params.autoplay.waitForTransition ? [
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((e)=>{
                    s.$wrapperEl[0].addEventListener(e, h);
                }) : (s.autoplay.paused = !1, l())));
            }
            function u() {
                const e = a1();
                "hidden" === e.visibilityState && s.autoplay.running && c(), "visible" === e.visibilityState && s.autoplay.paused && (l(), s.autoplay.paused = !1);
            }
            function h(e106) {
                s && !s.destroyed && s.$wrapperEl && e106.target === s.$wrapperEl[0] && ([
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((e)=>{
                    s.$wrapperEl[0].removeEventListener(e, h);
                }), s.autoplay.paused = !1, s.autoplay.running ? l() : d());
            }
            function m() {
                s.params.autoplay.disableOnInteraction ? d() : (n("autoplayPause"), c()), [
                    "transitionend",
                    "webkitTransitionEnd"
                ].forEach((e)=>{
                    s.$wrapperEl[0].removeEventListener(e, h);
                });
            }
            function f() {
                s.params.autoplay.disableOnInteraction || (s.autoplay.paused = !1, n("autoplayResume"), l());
            }
            s.autoplay = {
                running: !1,
                paused: !1
            }, i({
                autoplay: {
                    enabled: !1,
                    delay: 3000,
                    waitForTransition: !0,
                    disableOnInteraction: !0,
                    stopOnLastSlide: !1,
                    reverseDirection: !1,
                    pauseOnMouseEnter: !1
                }
            }), r("init", ()=>{
                if (s.params.autoplay.enabled) {
                    o();
                    a1().addEventListener("visibilitychange", u), s.params.autoplay.pauseOnMouseEnter && (s.$el.on("mouseenter", m), s.$el.on("mouseleave", f));
                }
            }), r("beforeTransitionStart", (e, t, a)=>{
                s.autoplay.running && (a || !s.params.autoplay.disableOnInteraction ? s.autoplay.pause(t) : d());
            }), r("sliderFirstMove", ()=>{
                s.autoplay.running && (s.params.autoplay.disableOnInteraction ? d() : c());
            }), r("touchEnd", ()=>{
                s.params.cssMode && s.autoplay.paused && !s.params.autoplay.disableOnInteraction && l();
            }), r("destroy", ()=>{
                s.$el.off("mouseenter", m), s.$el.off("mouseleave", f), s.autoplay.running && d();
                a1().removeEventListener("visibilitychange", u);
            }), Object.assign(s.autoplay, {
                pause: c,
                run: l,
                start: o,
                stop: d
            });
        },
        function(e107) {
            let { swiper: t , extendParams: s47 , on: a23  } = e107;
            s47({
                thumbs: {
                    swiper: null,
                    multipleActiveThumbs: !0,
                    autoScrollOffset: 0,
                    slideThumbActiveClass: "swiper-slide-thumb-active",
                    thumbsContainerClass: "swiper-thumbs"
                }
            });
            let i17 = !1, r10 = !1;
            function n13() {
                const e = t.thumbs.swiper;
                if (!e || e.destroyed) return;
                const s = e.clickedIndex, a = e.clickedSlide;
                if (a && d1(a).hasClass(t.params.thumbs.slideThumbActiveClass)) return;
                if (null == s) return;
                let i;
                if (i = e.params.loop ? parseInt(d1(e.clickedSlide).attr("data-swiper-slide-index"), 10) : s, t.params.loop) {
                    let e = t.activeIndex;
                    t.slides.eq(e).hasClass(t.params.slideDuplicateClass) && (t.loopFix(), t._clientLeft = t.$wrapperEl[0].clientLeft, e = t.activeIndex);
                    const s = t.slides.eq(e).prevAll(`[data-swiper-slide-index="${i}"]`).eq(0).index(), a = t.slides.eq(e).nextAll(`[data-swiper-slide-index="${i}"]`).eq(0).index();
                    i = void 0 === s ? a : void 0 === a ? s : a - e < e - s ? a : s;
                }
                t.slideTo(i);
            }
            function l9() {
                const { thumbs: e  } = t.params;
                if (i17) return !1;
                i17 = !0;
                const s = t.constructor;
                if (e.swiper instanceof s) t.thumbs.swiper = e.swiper, Object.assign(t.thumbs.swiper.originalParams, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                }), Object.assign(t.thumbs.swiper.params, {
                    watchSlidesProgress: !0,
                    slideToClickedSlide: !1
                });
                else if (m1(e.swiper)) {
                    const a = Object.assign({}, e.swiper);
                    Object.assign(a, {
                        watchSlidesProgress: !0,
                        slideToClickedSlide: !1
                    }), t.thumbs.swiper = new s(a), r10 = !0;
                }
                return t.thumbs.swiper.$el.addClass(t.params.thumbs.thumbsContainerClass), t.thumbs.swiper.on("tap", n13), !0;
            }
            function o7(e) {
                const s = t.thumbs.swiper;
                if (!s || s.destroyed) return;
                const a = "auto" === s.params.slidesPerView ? s.slidesPerViewDynamic() : s.params.slidesPerView, i = t.params.thumbs.autoScrollOffset, r = i && !s.params.loop;
                if (t.realIndex !== s.realIndex || r) {
                    let n, l, o = s.activeIndex;
                    if (s.params.loop) {
                        s.slides.eq(o).hasClass(s.params.slideDuplicateClass) && (s.loopFix(), s._clientLeft = s.$wrapperEl[0].clientLeft, o = s.activeIndex);
                        const e = s.slides.eq(o).prevAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index(), a = s.slides.eq(o).nextAll(`[data-swiper-slide-index="${t.realIndex}"]`).eq(0).index();
                        n = void 0 === e ? a : void 0 === a ? e : a - o == o - e ? s.params.slidesPerGroup > 1 ? a : o : a - o < o - e ? a : e, l = t.activeIndex > t.previousIndex ? "next" : "prev";
                    } else n = t.realIndex, l = n > t.previousIndex ? "next" : "prev";
                    r && (n += "next" === l ? i : -1 * i), s.visibleSlidesIndexes && s.visibleSlidesIndexes.indexOf(n) < 0 && (s.params.centeredSlides ? n = n > o ? n - Math.floor(a / 2) + 1 : n + Math.floor(a / 2) - 1 : n > o && s.params.slidesPerGroup, s.slideTo(n, e ? 0 : void 0));
                }
                let n = 1;
                const l = t.params.thumbs.slideThumbActiveClass;
                if (t.params.slidesPerView > 1 && !t.params.centeredSlides && (n = t.params.slidesPerView), t.params.thumbs.multipleActiveThumbs || (n = 1), n = Math.floor(n), s.slides.removeClass(l), s.params.loop || s.params.virtual && s.params.virtual.enabled) for(let e108 = 0; e108 < n; e108 += 1)s.$wrapperEl.children(`[data-swiper-slide-index="${t.realIndex + e108}"]`).addClass(l);
                else for(let e109 = 0; e109 < n; e109 += 1)s.slides.eq(t.realIndex + e109).addClass(l);
            }
            t.thumbs = {
                swiper: null
            }, a23("beforeInit", ()=>{
                const { thumbs: e  } = t.params;
                e && e.swiper && (l9(), o7(!0));
            }), a23("slideChange update resize observerUpdate", ()=>{
                o7();
            }), a23("setTransition", (e, s)=>{
                const a = t.thumbs.swiper;
                a && !a.destroyed && a.setTransition(s);
            }), a23("beforeDestroy", ()=>{
                const e = t.thumbs.swiper;
                e && !e.destroyed && r10 && e.destroy();
            }), Object.assign(t.thumbs, {
                init: l9,
                update: o7
            });
        },
        function(e110) {
            let { swiper: t57 , extendParams: s48 , emit: a24 , once: i18  } = e110;
            s48({
                freeMode: {
                    enabled: !1,
                    momentum: !0,
                    momentumRatio: 1,
                    momentumBounce: !0,
                    momentumBounceRatio: 1,
                    momentumVelocityRatio: 1,
                    sticky: !1,
                    minimumVelocity: 0.02
                }
            }), Object.assign(t57, {
                freeMode: {
                    onTouchStart: function() {
                        const e = t57.getTranslate();
                        t57.setTranslate(e), t57.setTransition(0), t57.touchEventsData.velocities.length = 0, t57.freeMode.onTouchEnd({
                            currentPos: t57.rtl ? t57.translate : -t57.translate
                        });
                    },
                    onTouchMove: function() {
                        const { touchEventsData: e , touches: s  } = t57;
                        0 === e.velocities.length && e.velocities.push({
                            position: s[t57.isHorizontal() ? "startX" : "startY"],
                            time: e.touchStartTime
                        }), e.velocities.push({
                            position: s[t57.isHorizontal() ? "currentX" : "currentY"],
                            time: u1()
                        });
                    },
                    onTouchEnd: function(e) {
                        let { currentPos: s  } = e;
                        const { params: r , $wrapperEl: n , rtlTranslate: l , snapGrid: o , touchEventsData: d  } = t57, c = u1() - d.touchStartTime;
                        if (s < -t57.minTranslate()) t57.slideTo(t57.activeIndex);
                        else if (s > -t57.maxTranslate()) t57.slides.length < o.length ? t57.slideTo(o.length - 1) : t57.slideTo(t57.slides.length - 1);
                        else {
                            if (r.freeMode.momentum) {
                                if (d.velocities.length > 1) {
                                    const e = d.velocities.pop(), s = d.velocities.pop(), a = e.position - s.position, i = e.time - s.time;
                                    t57.velocity = a / i, t57.velocity /= 2, Math.abs(t57.velocity) < r.freeMode.minimumVelocity && (t57.velocity = 0), (i > 150 || u1() - e.time > 300) && (t57.velocity = 0);
                                } else t57.velocity = 0;
                                t57.velocity *= r.freeMode.momentumVelocityRatio, d.velocities.length = 0;
                                let e = 1000 * r.freeMode.momentumRatio;
                                const s = t57.velocity * e;
                                let c = t57.translate + s;
                                l && (c = -c);
                                let p, h = !1;
                                const m = 20 * Math.abs(t57.velocity) * r.freeMode.momentumBounceRatio;
                                let f;
                                if (c < t57.maxTranslate()) r.freeMode.momentumBounce ? (c + t57.maxTranslate() < -m && (c = t57.maxTranslate() - m), p = t57.maxTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t57.maxTranslate(), r.loop && r.centeredSlides && (f = !0);
                                else if (c > t57.minTranslate()) r.freeMode.momentumBounce ? (c - t57.minTranslate() > m && (c = t57.minTranslate() + m), p = t57.minTranslate(), h = !0, d.allowMomentumBounce = !0) : c = t57.minTranslate(), r.loop && r.centeredSlides && (f = !0);
                                else if (r.freeMode.sticky) {
                                    let e;
                                    for(let t = 0; t < o.length; t += 1)if (o[t] > -c) {
                                        e = t;
                                        break;
                                    }
                                    c = Math.abs(o[e] - c) < Math.abs(o[e - 1] - c) || "next" === t57.swipeDirection ? o[e] : o[e - 1], c = -c;
                                }
                                if (f && i18("transitionEnd", ()=>{
                                    t57.loopFix();
                                }), 0 !== t57.velocity) {
                                    if (e = l ? Math.abs((-c - t57.translate) / t57.velocity) : Math.abs((c - t57.translate) / t57.velocity), r.freeMode.sticky) {
                                        const s = Math.abs((l ? -c : c) - t57.translate), a = t57.slidesSizesGrid[t57.activeIndex];
                                        e = s < a ? r.speed : s < 2 * a ? 1.5 * r.speed : 2.5 * r.speed;
                                    }
                                } else if (r.freeMode.sticky) return void t57.slideToClosest();
                                r.freeMode.momentumBounce && h ? (t57.updateProgress(p), t57.setTransition(e), t57.setTranslate(c), t57.transitionStart(!0, t57.swipeDirection), t57.animating = !0, n.transitionEnd(()=>{
                                    t57 && !t57.destroyed && d.allowMomentumBounce && (a24("momentumBounce"), t57.setTransition(r.speed), setTimeout(()=>{
                                        t57.setTranslate(p), n.transitionEnd(()=>{
                                            t57 && !t57.destroyed && t57.transitionEnd();
                                        });
                                    }, 0));
                                })) : t57.velocity ? (a24("_freeModeNoMomentumRelease"), t57.updateProgress(c), t57.setTransition(e), t57.setTranslate(c), t57.transitionStart(!0, t57.swipeDirection), t57.animating || (t57.animating = !0, n.transitionEnd(()=>{
                                    t57 && !t57.destroyed && t57.transitionEnd();
                                }))) : t57.updateProgress(c), t57.updateActiveIndex(), t57.updateSlidesClasses();
                            } else {
                                if (r.freeMode.sticky) return void t57.slideToClosest();
                                r.freeMode && a24("_freeModeNoMomentumRelease");
                            }
                            (!r.freeMode.momentum || c >= r.longSwipesMs) && (t57.updateProgress(), t57.updateActiveIndex(), t57.updateSlidesClasses());
                        }
                    }
                }
            });
        },
        function(e111) {
            let t58, s49, a25, { swiper: i19 , extendParams: r11  } = e111;
            r11({
                grid: {
                    rows: 1,
                    fill: "column"
                }
            }), i19.grid = {
                initSlides: (e)=>{
                    const { slidesPerView: r  } = i19.params, { rows: n , fill: l  } = i19.params.grid;
                    s49 = t58 / n, a25 = Math.floor(e / n), t58 = Math.floor(e / n) === e / n ? e : Math.ceil(e / n) * n, "auto" !== r && "row" === l && (t58 = Math.max(t58, r * n));
                },
                updateSlide: (e, r, n, l)=>{
                    const { slidesPerGroup: o , spaceBetween: d  } = i19.params, { rows: c , fill: p  } = i19.params.grid;
                    let u, h, m;
                    if ("row" === p && o > 1) {
                        const s = Math.floor(e / (o * c)), a = e - c * o * s, i = 0 === s ? o : Math.min(Math.ceil((n - s * c * o) / c), o);
                        m = Math.floor(a / i), h = a - m * i + s * o, u = h + m * t58 / c, r.css({
                            "-webkit-order": u,
                            order: u
                        });
                    } else "column" === p ? (h = Math.floor(e / c), m = e - h * c, (h > a25 || h === a25 && m === c - 1) && (m += 1, m >= c && (m = 0, h += 1))) : (m = Math.floor(e / s49), h = e - m * s49);
                    r.css(l("margin-top"), 0 !== m ? d && `${d}px` : "");
                },
                updateWrapperSize: (e, s, a)=>{
                    const { spaceBetween: r , centeredSlides: n , roundLengths: l  } = i19.params, { rows: o  } = i19.params.grid;
                    if (i19.virtualSize = (e + r) * t58, i19.virtualSize = Math.ceil(i19.virtualSize / o) - r, i19.$wrapperEl.css({
                        [a("width")]: `${i19.virtualSize + r}px`
                    }), n) {
                        s.splice(0, s.length);
                        const e = [];
                        for(let t = 0; t < s.length; t += 1){
                            let a = s[t];
                            l && (a = Math.floor(a)), s[t] < i19.virtualSize + s[0] && e.push(a);
                        }
                        s.push(...e);
                    }
                }
            };
        },
        function(e) {
            let { swiper: t  } = e;
            Object.assign(t, {
                appendSlide: K.bind(t),
                prependSlide: Z.bind(t),
                addSlide: J.bind(t),
                removeSlide: Q.bind(t),
                removeAllSlides: ee.bind(t)
            });
        },
        function(e112) {
            let { swiper: t , extendParams: s50 , on: a26  } = e112;
            s50({
                fadeEffect: {
                    crossFade: !1,
                    transformEl: null
                }
            }), te({
                effect: "fade",
                swiper: t,
                on: a26,
                setTranslate: ()=>{
                    const { slides: e  } = t, s = t.params.fadeEffect;
                    for(let a = 0; a < e.length; a += 1){
                        const e = t.slides.eq(a);
                        let i = -e[0].swiperSlideOffset;
                        t.params.virtualTranslate || (i -= t.translate);
                        let r = 0;
                        t.isHorizontal() || (r = i, i = 0);
                        const n = t.params.fadeEffect.crossFade ? Math.max(1 - Math.abs(e[0].progress), 0) : 1 + Math.min(Math.max(e[0].progress, -1), 0);
                        se(s, e).css({
                            opacity: n
                        }).transform(`translate3d(${i}px, ${r}px, 0px)`);
                    }
                },
                setTransition: (e)=>{
                    const { transformEl: s  } = t.params.fadeEffect;
                    (s ? t.slides.find(s) : t.slides).transition(e), ae({
                        swiper: t,
                        duration: e,
                        transformEl: s,
                        allSlides: !0
                    });
                },
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        },
        function(e113) {
            let { swiper: t59 , extendParams: s51 , on: a27  } = e113;
            s51({
                cubeEffect: {
                    slideShadows: !0,
                    shadow: !0,
                    shadowOffset: 20,
                    shadowScale: 0.94
                }
            });
            const i20 = (e, t, s)=>{
                let a = s ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), i = s ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === a.length && (a = d1(`<div class="swiper-slide-shadow-${s ? "left" : "top"}"></div>`), e.append(a)), 0 === i.length && (i = d1(`<div class="swiper-slide-shadow-${s ? "right" : "bottom"}"></div>`), e.append(i)), a.length && (a[0].style.opacity = Math.max(-t, 0)), i.length && (i[0].style.opacity = Math.max(t, 0));
            };
            te({
                effect: "cube",
                swiper: t59,
                on: a27,
                setTranslate: ()=>{
                    const { $el: e , $wrapperEl: s , slides: a , width: r , height: n , rtlTranslate: l , size: o , browser: c  } = t59, p = t59.params.cubeEffect, u = t59.isHorizontal(), h = t59.virtual && t59.params.virtual.enabled;
                    let m, f = 0;
                    p.shadow && (u ? (m = s.find(".swiper-cube-shadow"), 0 === m.length && (m = d1('<div class="swiper-cube-shadow"></div>'), s.append(m)), m.css({
                        height: `${r}px`
                    })) : (m = e.find(".swiper-cube-shadow"), 0 === m.length && (m = d1('<div class="swiper-cube-shadow"></div>'), e.append(m))));
                    for(let e114 = 0; e114 < a.length; e114 += 1){
                        const t = a.eq(e114);
                        let s = e114;
                        h && (s = parseInt(t.attr("data-swiper-slide-index"), 10));
                        let r = 90 * s, n = Math.floor(r / 360);
                        l && (r = -r, n = Math.floor(-r / 360));
                        const d = Math.max(Math.min(t[0].progress, 1), -1);
                        let c = 0, m = 0, g = 0;
                        s % 4 == 0 ? (c = 4 * -n * o, g = 0) : (s - 1) % 4 == 0 ? (c = 0, g = 4 * -n * o) : (s - 2) % 4 == 0 ? (c = o + 4 * n * o, g = o) : (s - 3) % 4 == 0 && (c = -o, g = 3 * o + 4 * o * n), l && (c = -c), u || (m = c, c = 0);
                        const v = `rotateX(${u ? 0 : -r}deg) rotateY(${u ? r : 0}deg) translate3d(${c}px, ${m}px, ${g}px)`;
                        d <= 1 && d > -1 && (f = 90 * s + 90 * d, l && (f = 90 * -s - 90 * d)), t.transform(v), p.slideShadows && i20(t, d, u);
                    }
                    if (s.css({
                        "-webkit-transform-origin": `50% 50% -${o / 2}px`,
                        "transform-origin": `50% 50% -${o / 2}px`
                    }), p.shadow) {
                        if (u) m.transform(`translate3d(0px, ${r / 2 + p.shadowOffset}px, ${-r / 2}px) rotateX(90deg) rotateZ(0deg) scale(${p.shadowScale})`);
                        else {
                            const e = Math.abs(f) - 90 * Math.floor(Math.abs(f) / 90), t = 1.5 - (Math.sin(2 * e * Math.PI / 360) / 2 + Math.cos(2 * e * Math.PI / 360) / 2), s = p.shadowScale, a = p.shadowScale / t, i = p.shadowOffset;
                            m.transform(`scale3d(${s}, 1, ${a}) translate3d(0px, ${n / 2 + i}px, ${-n / 2 / a}px) rotateX(-90deg)`);
                        }
                    }
                    const g = c.isSafari || c.isWebView ? -o / 2 : 0;
                    s.transform(`translate3d(0px,0,${g}px) rotateX(${t59.isHorizontal() ? 0 : f}deg) rotateY(${t59.isHorizontal() ? -f : 0}deg)`), s[0].style.setProperty("--swiper-cube-translate-z", `${g}px`);
                },
                setTransition: (e)=>{
                    const { $el: s , slides: a  } = t59;
                    a.transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), t59.params.cubeEffect.shadow && !t59.isHorizontal() && s.find(".swiper-cube-shadow").transition(e);
                },
                recreateShadows: ()=>{
                    const e = t59.isHorizontal();
                    t59.slides.each((t)=>{
                        const s = Math.max(Math.min(t.progress, 1), -1);
                        i20(d1(t), s, e);
                    });
                },
                getEffectParams: ()=>t59.params.cubeEffect
                ,
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        resistanceRatio: 0,
                        spaceBetween: 0,
                        centeredSlides: !1,
                        virtualTranslate: !0
                    })
            });
        },
        function(e115) {
            let { swiper: t , extendParams: s52 , on: a28  } = e115;
            s52({
                flipEffect: {
                    slideShadows: !0,
                    limitRotation: !0,
                    transformEl: null
                }
            });
            const i21 = (e, s, a)=>{
                let i = t.isHorizontal() ? e.find(".swiper-slide-shadow-left") : e.find(".swiper-slide-shadow-top"), r = t.isHorizontal() ? e.find(".swiper-slide-shadow-right") : e.find(".swiper-slide-shadow-bottom");
                0 === i.length && (i = ie(a, e, t.isHorizontal() ? "left" : "top")), 0 === r.length && (r = ie(a, e, t.isHorizontal() ? "right" : "bottom")), i.length && (i[0].style.opacity = Math.max(-s, 0)), r.length && (r[0].style.opacity = Math.max(s, 0));
            };
            te({
                effect: "flip",
                swiper: t,
                on: a28,
                setTranslate: ()=>{
                    const { slides: e , rtlTranslate: s  } = t, a = t.params.flipEffect;
                    for(let r = 0; r < e.length; r += 1){
                        const n = e.eq(r);
                        let l = n[0].progress;
                        t.params.flipEffect.limitRotation && (l = Math.max(Math.min(n[0].progress, 1), -1));
                        const o = n[0].swiperSlideOffset;
                        let d = -180 * l, c = 0, p = t.params.cssMode ? -o - t.translate : -o, u = 0;
                        t.isHorizontal() ? s && (d = -d) : (u = p, p = 0, c = -d, d = 0), n[0].style.zIndex = -Math.abs(Math.round(l)) + e.length, a.slideShadows && i21(n, l, a);
                        const h = `translate3d(${p}px, ${u}px, 0px) rotateX(${c}deg) rotateY(${d}deg)`;
                        se(a, n).transform(h);
                    }
                },
                setTransition: (e)=>{
                    const { transformEl: s  } = t.params.flipEffect;
                    (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e), ae({
                        swiper: t,
                        duration: e,
                        transformEl: s
                    });
                },
                recreateShadows: ()=>{
                    const e = t.params.flipEffect;
                    t.slides.each((s)=>{
                        const a = d1(s);
                        let r = a[0].progress;
                        t.params.flipEffect.limitRotation && (r = Math.max(Math.min(s.progress, 1), -1)), i21(a, r, e);
                    });
                },
                getEffectParams: ()=>t.params.flipEffect
                ,
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        slidesPerView: 1,
                        slidesPerGroup: 1,
                        watchSlidesProgress: !0,
                        spaceBetween: 0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        },
        function(e117) {
            let { swiper: t61 , extendParams: s53 , on: a29  } = e117;
            s53({
                coverflowEffect: {
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    scale: 1,
                    modifier: 1,
                    slideShadows: !0,
                    transformEl: null
                }
            }), te({
                effect: "coverflow",
                swiper: t61,
                on: a29,
                setTranslate: ()=>{
                    const { width: e , height: s , slides: a , slidesSizesGrid: i  } = t61, r = t61.params.coverflowEffect, n = t61.isHorizontal(), l = t61.translate, o = n ? e / 2 - l : s / 2 - l, d = n ? r.rotate : -r.rotate, c = r.depth;
                    for(let e116 = 0, t60 = a.length; e116 < t60; e116 += 1){
                        const t = a.eq(e116), s = i[e116], l = (o - t[0].swiperSlideOffset - s / 2) / s, p = "function" == typeof r.modifier ? r.modifier(l) : l * r.modifier;
                        let u = n ? d * p : 0, h = n ? 0 : d * p, m = -c * Math.abs(p), f = r.stretch;
                        "string" == typeof f && -1 !== f.indexOf("%") && (f = parseFloat(r.stretch) / 100 * s);
                        let g = n ? 0 : f * p, v = n ? f * p : 0, w = 1 - (1 - r.scale) * Math.abs(p);
                        Math.abs(v) < 0.001 && (v = 0), Math.abs(g) < 0.001 && (g = 0), Math.abs(m) < 0.001 && (m = 0), Math.abs(u) < 0.001 && (u = 0), Math.abs(h) < 0.001 && (h = 0), Math.abs(w) < 0.001 && (w = 0);
                        const b = `translate3d(${v}px,${g}px,${m}px)  rotateX(${h}deg) rotateY(${u}deg) scale(${w})`;
                        if (se(r, t).transform(b), t[0].style.zIndex = 1 - Math.abs(Math.round(p)), r.slideShadows) {
                            let e = n ? t.find(".swiper-slide-shadow-left") : t.find(".swiper-slide-shadow-top"), s = n ? t.find(".swiper-slide-shadow-right") : t.find(".swiper-slide-shadow-bottom");
                            0 === e.length && (e = ie(r, t, n ? "left" : "top")), 0 === s.length && (s = ie(r, t, n ? "right" : "bottom")), e.length && (e[0].style.opacity = p > 0 ? p : 0), s.length && (s[0].style.opacity = -p > 0 ? -p : 0);
                        }
                    }
                },
                setTransition: (e)=>{
                    const { transformEl: s  } = t61.params.coverflowEffect;
                    (s ? t61.slides.find(s) : t61.slides).transition(e).find(".swiper-slide-shadow-top, .swiper-slide-shadow-right, .swiper-slide-shadow-bottom, .swiper-slide-shadow-left").transition(e);
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0
                    })
            });
        },
        function(e118) {
            let { swiper: t62 , extendParams: s55 , on: a30  } = e118;
            s55({
                creativeEffect: {
                    transformEl: null,
                    limitProgress: 1,
                    shadowPerProgress: !1,
                    progressMultiplier: 1,
                    perspective: !0,
                    prev: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    },
                    next: {
                        translate: [
                            0,
                            0,
                            0
                        ],
                        rotate: [
                            0,
                            0,
                            0
                        ],
                        opacity: 1,
                        scale: 1
                    }
                }
            });
            const i = (e)=>"string" == typeof e ? e : `${e}px`
            ;
            te({
                effect: "creative",
                swiper: t62,
                on: a30,
                setTranslate: ()=>{
                    const { slides: e119 , $wrapperEl: s , slidesSizesGrid: a  } = t62, r = t62.params.creativeEffect, { progressMultiplier: n  } = r, l = t62.params.centeredSlides;
                    if (l) {
                        const e = a[0] / 2 - t62.params.slidesOffsetBefore || 0;
                        s.transform(`translateX(calc(50% - ${e}px))`);
                    }
                    for(let s54 = 0; s54 < e119.length; s54 += 1){
                        const a = e119.eq(s54), o = a[0].progress, d = Math.min(Math.max(a[0].progress, -r.limitProgress), r.limitProgress);
                        let c = d;
                        l || (c = Math.min(Math.max(a[0].originalProgress, -r.limitProgress), r.limitProgress));
                        const p = a[0].swiperSlideOffset, u = [
                            t62.params.cssMode ? -p - t62.translate : -p,
                            0,
                            0
                        ], h = [
                            0,
                            0,
                            0
                        ];
                        let m = !1;
                        t62.isHorizontal() || (u[1] = u[0], u[0] = 0);
                        let f = {
                            translate: [
                                0,
                                0,
                                0
                            ],
                            rotate: [
                                0,
                                0,
                                0
                            ],
                            scale: 1,
                            opacity: 1
                        };
                        d < 0 ? (f = r.next, m = !0) : d > 0 && (f = r.prev, m = !0), u.forEach((e, t)=>{
                            u[t] = `calc(${e}px + (${i(f.translate[t])} * ${Math.abs(d * n)}))`;
                        }), h.forEach((e, t)=>{
                            h[t] = f.rotate[t] * Math.abs(d * n);
                        }), a[0].style.zIndex = -Math.abs(Math.round(o)) + e119.length;
                        const g = u.join(", "), v = `rotateX(${h[0]}deg) rotateY(${h[1]}deg) rotateZ(${h[2]}deg)`, w = c < 0 ? `scale(${1 + (1 - f.scale) * c * n})` : `scale(${1 - (1 - f.scale) * c * n})`, b = c < 0 ? 1 + (1 - f.opacity) * c * n : 1 - (1 - f.opacity) * c * n, x = `translate3d(${g}) ${v} ${w}`;
                        if (m && f.shadow || !m) {
                            let e = a.children(".swiper-slide-shadow");
                            if (0 === e.length && f.shadow && (e = ie(r, a)), e.length) {
                                const t = r.shadowPerProgress ? d * (1 / r.limitProgress) : d;
                                e[0].style.opacity = Math.min(Math.max(Math.abs(t), 0), 1);
                            }
                        }
                        const y = se(r, a);
                        y.transform(x).css({
                            opacity: b
                        }), f.origin && y.css("transform-origin", f.origin);
                    }
                },
                setTransition: (e)=>{
                    const { transformEl: s  } = t62.params.creativeEffect;
                    (s ? t62.slides.find(s) : t62.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                        swiper: t62,
                        duration: e,
                        transformEl: s,
                        allSlides: !0
                    });
                },
                perspective: ()=>t62.params.creativeEffect.perspective
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t62.params.cssMode
                    })
            });
        },
        function(e120) {
            let { swiper: t , extendParams: s56 , on: a31  } = e120;
            s56({
                cardsEffect: {
                    slideShadows: !0,
                    transformEl: null,
                    rotate: !0
                }
            }), te({
                effect: "cards",
                swiper: t,
                on: a31,
                setTranslate: ()=>{
                    const { slides: e , activeIndex: s  } = t, a = t.params.cardsEffect, { startTranslate: i , isTouched: r  } = t.touchEventsData, n = t.translate;
                    for(let l = 0; l < e.length; l += 1){
                        const o = e.eq(l), d = o[0].progress, c = Math.min(Math.max(d, -4), 4);
                        let p = o[0].swiperSlideOffset;
                        t.params.centeredSlides && !t.params.cssMode && t.$wrapperEl.transform(`translateX(${t.minTranslate()}px)`), t.params.centeredSlides && t.params.cssMode && (p -= e[0].swiperSlideOffset);
                        let u = t.params.cssMode ? -p - t.translate : -p, h = 0;
                        const m = -100 * Math.abs(c);
                        let f = 1, g = -2 * c, v = 8 - 0.75 * Math.abs(c);
                        const w = t.virtual && t.params.virtual.enabled ? t.virtual.from + l : l, b = (w === s || w === s - 1) && c > 0 && c < 1 && (r || t.params.cssMode) && n < i, x = (w === s || w === s + 1) && c < 0 && c > -1 && (r || t.params.cssMode) && n > i;
                        if (b || x) {
                            const e = (1 - Math.abs((Math.abs(c) - 0.5) / 0.5)) ** 0.5;
                            g += -28 * c * e, f += -0.5 * e, v += 96 * e, h = -25 * e * Math.abs(c) + "%";
                        }
                        if (u = c < 0 ? `calc(${u}px + (${v * Math.abs(c)}%))` : c > 0 ? `calc(${u}px + (-${v * Math.abs(c)}%))` : `${u}px`, !t.isHorizontal()) {
                            const e = h;
                            h = u, u = e;
                        }
                        const y = c < 0 ? "" + (1 + (1 - f) * c) : "" + (1 - (1 - f) * c), E = `\n        translate3d(${u}, ${h}, ${m}px)\n        rotateZ(${a.rotate ? g : 0}deg)\n        scale(${y})\n      `;
                        if (a.slideShadows) {
                            let e = o.find(".swiper-slide-shadow");
                            0 === e.length && (e = ie(a, o)), e.length && (e[0].style.opacity = Math.min(Math.max((Math.abs(c) - 0.5) / 0.5, 0), 1));
                        }
                        o[0].style.zIndex = -Math.abs(Math.round(d)) + e.length;
                        se(a, o).transform(E);
                    }
                },
                setTransition: (e)=>{
                    const { transformEl: s  } = t.params.cardsEffect;
                    (s ? t.slides.find(s) : t.slides).transition(e).find(".swiper-slide-shadow").transition(e), ae({
                        swiper: t,
                        duration: e,
                        transformEl: s
                    });
                },
                perspective: ()=>!0
                ,
                overwriteParams: ()=>({
                        watchSlidesProgress: !0,
                        virtualTranslate: !t.params.cssMode
                    })
            });
        }
    ];
    return V.use(re), V;
}); //# sourceMappingURL=swiper-bundle.min.js.map

//# sourceMappingURL=index.d5543c53.js.map
