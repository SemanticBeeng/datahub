"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9238],{3905:(e,t,r)=>{r.d(t,{Zo:()=>l,kt:()=>g});var o=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,o)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,o,n=function(e,t){if(null==e)return{};var r,o,n={},i=Object.keys(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)r=i[o],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=o.createContext({}),p=function(e){var t=o.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},l=function(e){var t=p(e.components);return o.createElement(u.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},d=o.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,u=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=p(r),g=n,h=d["".concat(u,".").concat(g)]||d[g]||c[g]||i;return r?o.createElement(h,a(a({ref:t},l),{},{components:r})):o.createElement(h,a({ref:t},l))}));function g(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,a=new Array(i);a[0]=d;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s.mdxType="string"==typeof e?e:n,a[1]=s;for(var p=2;p<i;p++)a[p]=r[p];return o.createElement.apply(null,a)}return o.createElement.apply(null,r)}d.displayName="MDXCreateElement"},87667:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>c,frontMatter:()=>i,metadata:()=>s,toc:()=>p});var o=r(87462),n=(r(67294),r(3905));const i={title:"Authorization using Groups",slug:"/authorization/groups",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/groups.md"},a="Authorization using Groups",s={unversionedId:"docs/authorization/groups",id:"docs/authorization/groups",title:"Authorization using Groups",description:"Introduction",source:"@site/genDocs/docs/authorization/groups.md",sourceDirName:"docs/authorization",slug:"/authorization/groups",permalink:"/docs/authorization/groups",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/groups.md",tags:[],version:"current",frontMatter:{title:"Authorization using Groups",slug:"/authorization/groups",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/authorization/groups.md"},sidebar:"overviewSidebar",previous:{title:"Policies Guide",permalink:"/docs/authorization/policies"},next:{title:"Removing Metadata from DataHub",permalink:"/docs/how/delete-metadata"}},u={},p=[{value:"Introduction",id:"introduction",level:2},{value:"Why do we need groups for authorization?",id:"why-do-we-need-groups-for-authorization",level:2},{value:"Easily Applying Access Privileges",id:"easily-applying-access-privileges",level:3},{value:"Syncing with Existing Enterprise Groups (via IdP)",id:"syncing-with-existing-enterprise-groups-via-idp",level:3},{value:"Custom Groups",id:"custom-groups",level:2},{value:"Feedback / Questions / Concerns",id:"feedback--questions--concerns",level:2}],l={toc:p};function c(e){let{components:t,...r}=e;return(0,n.kt)("wrapper",(0,o.Z)({},l,r,{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",{id:"authorization-using-groups"},"Authorization using Groups"),(0,n.kt)("h2",{id:"introduction"},"Introduction"),(0,n.kt)("p",null,"DataHub provides the ability to use ",(0,n.kt)("strong",{parentName:"p"},"Groups")," to manage policies."),(0,n.kt)("h2",{id:"why-do-we-need-groups-for-authorization"},"Why do we need groups for authorization?"),(0,n.kt)("h3",{id:"easily-applying-access-privileges"},"Easily Applying Access Privileges"),(0,n.kt)("p",null,"Groups are useful for managing user privileges in DataHub. If you want a set of Admin users,\nor you want to define a set of users that are only able to view metadata assets but not make changes to them, you could\ncreate groups for each of these use cases and apply the appropriate policies at the group-level rather than the\nuser-level."),(0,n.kt)("h3",{id:"syncing-with-existing-enterprise-groups-via-idp"},"Syncing with Existing Enterprise Groups (via IdP)"),(0,n.kt)("p",null,"If you work with an Identity Provider like Okta or Azure AD, it's likely you already have groups defined there. DataHub\nallows you to import the groups you have from OIDC for ",(0,n.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/okta"},"Okta")," and\n",(0,n.kt)("a",{parentName:"p",href:"/docs/generated/ingestion/sources/azure-ad"},"Azure AD")," using the DataHub ingestion framework."),(0,n.kt)("p",null,"If you routinely ingest groups from these providers, you will also be able to keep groups synced. New groups will\nbe created in DataHub, stale groups will be deleted, and group membership will be updated!"),(0,n.kt)("h2",{id:"custom-groups"},"Custom Groups"),(0,n.kt)("p",null,"DataHub admins can create custom groups by going to the ",(0,n.kt)("strong",{parentName:"p"},"Settings > Users & Groups > Groups > Create Group"),".\nMembers can be added to Groups via the Group profile page."),(0,n.kt)("h2",{id:"feedback--questions--concerns"},"Feedback / Questions / Concerns"),(0,n.kt)("p",null,"We want to hear from you! For any inquiries, including Feedback, Questions, or Concerns, reach out on Slack!"))}c.isMDXComponent=!0}}]);