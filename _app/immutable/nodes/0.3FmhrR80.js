import{s as h,c as p,u as g,g as w,d as S,o as v}from"../chunks/scheduler.mUZSWlMr.js";import{S as $,i as b,g as y,h as D,j,f,k as C,a as M,d as T,t as z}from"../chunks/index.7CdyzNN3.js";import{a as A,d as _,b as m,g as O,s as P,c as R}from"../chunks/store.EUhdhzdk.js";const k=!0,B=Object.freeze(Object.defineProperty({__proto__:null,prerender:k},Symbol.toStringTag,{value:"Module"}));function q(n){let o,s;const r=n[1].default,a=p(r,n,n[0],null);return{c(){o=y("div"),a&&a.c(),this.h()},l(e){o=D(e,"DIV",{class:!0});var t=j(o);a&&a.l(t),t.forEach(f),this.h()},h(){C(o,"class","mainContainer svelte-jz17td")},m(e,t){M(e,o,t),a&&a.m(o,null),s=!0},p(e,[t]){a&&a.p&&(!s||t&1)&&g(a,r,e,e[0],s?S(r,e[0],t,null):w(e[0]),null)},i(e){s||(T(a,e),s=!0)},o(e){z(a,e),s=!1},d(e){e&&f(o),a&&a.d(e)}}}function E(n,o,s){let{$$slots:r={},$$scope:a}=o;const e=["/","product"];return v(()=>{console.log("Mounting"),A.onAuthStateChanged(async t=>{const l=window.location.pathname;if(!t&&!e.includes(l)){window.location.href="/";return}if(t&&l==="/"){window.location.href="/dashboard";return}if(!t)return;let i;const u=_(m,"users",t.uid),c=await O(u);c.exists()?(console.log("user exists"),i=c.data()):(console.log("creating new user"),_(m,"users",t.uid),i={email:t.email,todos:[]},await P(u,i,{merge:!0})),R.update(d=>({...d,user:t,data:i,loading:!1}))})}),n.$$set=t=>{"$$scope"in t&&s(0,a=t.$$scope)},[a,r]}class F extends ${constructor(o){super(),b(this,o,E,q,h,{})}}export{F as component,B as universal};
