"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9365],{3905:(e,t,a)=>{a.d(t,{Zo:()=>u,kt:()=>m});var r=a(67294);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function s(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function l(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},o=Object.keys(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)a=o[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),c=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):s(s({},t),e)),a},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,o=e.originalType,i=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),p=c(a),m=n,h=p["".concat(i,".").concat(m)]||p[m]||d[m]||o;return a?r.createElement(h,s(s({ref:t},u),{},{components:a})):r.createElement(h,s({ref:t},u))}));function m(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=a.length,s=new Array(o);s[0]=p;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var c=2;c<o;c++)s[c]=a[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,a)}p.displayName="MDXCreateElement"},20038:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=a(87462),n=(a(67294),a(3905));const o={title:"v.0.1.70",slug:"/managed-datahub/release-notes/v_0_1_70",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_1_70.md"},s="v.0.1.70",l={unversionedId:"docs/managed-datahub/release-notes/v_0_1_70",id:"docs/managed-datahub/release-notes/v_0_1_70",title:"v.0.1.70",description:"---",source:"@site/genDocs/docs/managed-datahub/release-notes/v_0_1_70.md",sourceDirName:"docs/managed-datahub/release-notes",slug:"/managed-datahub/release-notes/v_0_1_70",permalink:"/docs/managed-datahub/release-notes/v_0_1_70",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_1_70.md",tags:[],version:"current",frontMatter:{title:"v.0.1.70",slug:"/managed-datahub/release-notes/v_0_1_70",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/managed-datahub/release-notes/v_0_1_70.md"},sidebar:"overviewSidebar",previous:{title:"v.0.1.69",permalink:"/docs/managed-datahub/release-notes/v_0_1_69"}},i={},c=[{value:"Release highlights",id:"release-highlights",level:2}],u={toc:c};function d(e){let{components:t,...a}=e;return(0,n.kt)("wrapper",(0,r.Z)({},u,a,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"v0170"},"v.0.1.70"),(0,n.kt)("hr",null),(0,n.kt)("p",null,"This is a scheduled release which contains all changes from OSS DataHub upto commit ",(0,n.kt)("inlineCode",{parentName:"p"},"70659711a841bcce4bb1e0350027704b3783f6a5"),". In addition to all the features added in OSS DataHub below are Managed DataHub specific release notes."),(0,n.kt)("h2",{id:"release-highlights"},"Release highlights"),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Improvements in Caching implementation to fix search consistency problems"),(0,n.kt)("li",{parentName:"ul"},"We have heard many organisations ask for metrics for the SaaS product. We have made good progress towards this goal which allows us to share Grafana dashboards. We will be testing it selectively. Expect more updates in coming month on this.")))}d.isMDXComponent=!0}}]);