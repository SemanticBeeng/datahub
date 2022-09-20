"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2026],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>d});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),u=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return a.createElement(c.Provider,{value:t},e.children)},l={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),h=u(r),d=n,m=h["".concat(c,".").concat(d)]||h[d]||l[d]||o;return r?a.createElement(m,i(i({ref:t},p),{},{components:r})):a.createElement(m,i({ref:t},p))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,i=new Array(o);i[0]=h;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,i[1]=s;for(var u=2;u<o;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}h.displayName="MDXCreateElement"},72047:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>l,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var a=r(87462),n=(r(67294),r(3905));const o={title:"Overview",slug:"/authorization",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/README.md"},i="Overview",s={unversionedId:"docs/authorization/README",id:"docs/authorization/README",title:"Overview",description:"Authorization specifies what accesses an authenticated user has within a system.",source:"@site/genDocs/docs/authorization/README.md",sourceDirName:"docs/authorization",slug:"/authorization",permalink:"/docs/authorization",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/README.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/authorization",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/README.md"},sidebar:"overviewSidebar",previous:{title:"Personal Access Tokens",permalink:"/docs/authentication/personal-access-tokens"},next:{title:"Authorization using Roles",permalink:"/docs/authorization/roles"}},c={},u=[],p={toc:u};function l(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"overview"},"Overview"),(0,n.kt)("p",null,"Authorization specifies ",(0,n.kt)("em",{parentName:"p"},"what")," accesses an ",(0,n.kt)("em",{parentName:"p"},"authenticated")," user has within a system.\nThis section is all about how DataHub authorizes a given user/service that wants to interact with the system."),(0,n.kt)("admonition",{type:"note"},(0,n.kt)("p",{parentName:"admonition"},"Authorization only makes sense in the context of an ",(0,n.kt)("strong",{parentName:"p"},"Authenticated")," DataHub deployment. To use DataHub's authorization features\nplease first make sure that the system has been configured from an authentication perspective as you intend.")),(0,n.kt)("p",null,"Once the identity of a user or service has been established, DataHub determines what accesses the authenticated request has."),(0,n.kt)("p",null,"This is done by checking what operation a given user/service wants to perform within DataHub & whether it is allowed to do so.\nThe set of operations that are allowed in DataHub are what we call ",(0,n.kt)("strong",{parentName:"p"},"Policies"),"."),(0,n.kt)("p",null,"Policies specify fine-grain access control for ",(0,n.kt)("em",{parentName:"p"},"who")," can do ",(0,n.kt)("em",{parentName:"p"},"what")," to ",(0,n.kt)("em",{parentName:"p"},"which")," resources, for more details on the set of Policies that DataHub provides please see the ",(0,n.kt)("a",{parentName:"p",href:"/docs/authorization/policies"},"Policies Guide"),"."))}l.isMDXComponent=!0}}]);