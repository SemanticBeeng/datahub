"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2013],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>p});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=a.createContext({}),c=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},l=function(e){var t=c(e.components);return a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},h=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),h=c(n),p=i,b=h["".concat(u,".").concat(p)]||h[p]||d[p]||r;return n?a.createElement(b,o(o({ref:t},l),{},{components:n})):a.createElement(b,o({ref:t},l))}));function p(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,o=new Array(r);o[0]=h;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:i,o[1]=s;for(var c=2;c<r;c++)o[c]=n[c];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}h.displayName="MDXCreateElement"},91541:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>o,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>c});var a=n(87462),i=(n(67294),n(3905));const r={title:"Overview",slug:"/authentication",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/README.md"},o="Overview",s={unversionedId:"docs/authentication/README",id:"docs/authentication/README",title:"Overview",description:"Authentication is the process of verifying the identity of a user or service. There are two",source:"@site/genDocs/docs/authentication/README.md",sourceDirName:"docs/authentication",slug:"/authentication",permalink:"/docs/authentication",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/README.md",tags:[],version:"current",frontMatter:{title:"Overview",slug:"/authentication",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authentication/README.md"},sidebar:"overviewSidebar",previous:{title:"Deploying with Kubernetes",permalink:"/docs/deploy/kubernetes"},next:{title:"Concepts & Key Components",permalink:"/docs/authentication/concepts"}},u={},c=[{value:"Authentication in the Frontend",id:"authentication-in-the-frontend",level:3},{value:"Authentication in the Backend (Metadata Service)",id:"authentication-in-the-backend-metadata-service",level:3},{value:"References",id:"references",level:3}],l={toc:c};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"overview"},"Overview"),(0,i.kt)("p",null,"Authentication is the process of verifying the identity of a user or service. There are two\nplaces where Authentication occurs inside DataHub:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},"DataHub frontend service when a user attempts to log in to the DataHub application."),(0,i.kt)("li",{parentName:"ol"},"DataHub backend service when making API requests to DataHub.")),(0,i.kt)("p",null,"In this document, we'll tak a closer look at both. "),(0,i.kt)("h3",{id:"authentication-in-the-frontend"},"Authentication in the Frontend"),(0,i.kt)("p",null,"Authentication of normal users of DataHub takes place in two phases. "),(0,i.kt)("p",null,"At login time, authentication is performed by either DataHub itself (via username / password entry) or a third-party Identity Provider. Once the identity\nof the user has been established, and credentials validated, a persistent session token is generated for the user and stored\nin a browser-side session cookie. "),(0,i.kt)("p",null,"DataHub provides 3 mechanisms for authentication at login time:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Native Authentication")," which uses username and password combinations natively stored and managed by DataHub, with users invited via an invite link."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/guides/sso/configure-oidc-react"},"Single Sign-On with OpenID Connect")," to delegate authentication responsibility to third party systems like Okta or Google/Azure Authentication. This is the recommended approach for production systems."),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/guides/jaas"},"JaaS Authentication")," for simple deployments where authenticated users are part of some known list or invited as a ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/guides/add-users"},"Native DataHub User"),".")),(0,i.kt)("p",null,"In subsequent requests, the session token is used to represent the authenticated identity of the user, and is validated by DataHub's backend service (discussed below).\nEventually, the session token is expired (24 hours by default), at which point the end user is required to log in again."),(0,i.kt)("h3",{id:"authentication-in-the-backend-metadata-service"},"Authentication in the Backend (Metadata Service)"),(0,i.kt)("p",null,"When a user makes a request for Data within DataHub, the request is authenticated by DataHub's Backend (Metadata Service) via a JSON Web Token. This applies to both requests originating from the DataHub application,\nand programmatic calls to DataHub APIs. There are two types of tokens that are important:"),(0,i.kt)("ol",null,(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Session Tokens"),": Generated for users of the DataHub web application. By default, having a duration of 24 hours.\nThese tokens are encoded and stored inside browser-side session cookies."),(0,i.kt)("li",{parentName:"ol"},(0,i.kt)("strong",{parentName:"li"},"Personal Access Tokens"),": These are tokens generated via the DataHub settings panel useful for interacting\nwith DataHub APIs. They can be used to automate processes like enriching documentation, ownership, tags, and more on DataHub. Learn\nmore about Personal Access Tokens ",(0,i.kt)("a",{parentName:"li",href:"/docs/authentication/personal-access-tokens"},"here"),". ")),(0,i.kt)("p",null,"To learn more about DataHub's backend authentication, check out ",(0,i.kt)("a",{parentName:"p",href:"/docs/authentication/introducing-metadata-service-authentication"},"Introducing Metadata Service Authentication"),"."),(0,i.kt)("p",null,"Credentials must be provided as Bearer Tokens inside of the ",(0,i.kt)("strong",{parentName:"p"},"Authorization")," header in any request made to DataHub's API layer. To learn "),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-shell"},"Authorization: Bearer <your-token>\n")),(0,i.kt)("p",null,"Note that in DataHub local quickstarts, Authentication at the backend layer is disabled for convenience. This leaves the backend\nvulnerable to unauthenticated requests and should not be used in production. To enable\nbackend (token-based) authentication, simply set the ",(0,i.kt)("inlineCode",{parentName:"p"},"METADATA_SERVICE_AUTH_ENABLED=true")," environment variable\nfor the datahub-gms container or pod. "),(0,i.kt)("h3",{id:"references"},"References"),(0,i.kt)("p",null,"For a quick video on the topic of users and groups within DataHub, have a look at ",(0,i.kt)("a",{parentName:"p",href:"https://youtu.be/8Osw6p9vDYY"},"DataHub Basics \u2014 Users, Groups, & Authentication 101\n")))}d.isMDXComponent=!0}}]);