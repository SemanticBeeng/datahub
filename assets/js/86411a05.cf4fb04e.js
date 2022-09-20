"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[6207],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,l=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,m=p["".concat(l,".").concat(f)]||p[f]||d[f]||o;return n?r.createElement(m,a(a({ref:t},c),{},{components:n})):r.createElement(m,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,a=new Array(o);a[0]=p;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:i,a[1]=s;for(var u=2;u<o;u++)a[u]=n[u];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},48867:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>u});var r=n(87462),i=(n(67294),n(3905));const o={title:"SQL Profiling",slug:"/metadata-ingestion/docs/dev_guides/sql_profiles",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/sql_profiles.md"},a="SQL Profiling",s={unversionedId:"metadata-ingestion/docs/dev_guides/sql_profiles",id:"metadata-ingestion/docs/dev_guides/sql_profiles",title:"SQL Profiling",description:"SQL Profiling collects table level and column level statistics.",source:"@site/genDocs/metadata-ingestion/docs/dev_guides/sql_profiles.md",sourceDirName:"metadata-ingestion/docs/dev_guides",slug:"/metadata-ingestion/docs/dev_guides/sql_profiles",permalink:"/docs/metadata-ingestion/docs/dev_guides/sql_profiles",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/sql_profiles.md",tags:[],version:"current",frontMatter:{title:"SQL Profiling",slug:"/metadata-ingestion/docs/dev_guides/sql_profiles",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/docs/dev_guides/sql_profiles.md"},sidebar:"overviewSidebar",previous:{title:"Stateful Ingestion",permalink:"/docs/metadata-ingestion/docs/dev_guides/stateful"},next:{title:"Domains",permalink:"/docs/domains"}},l={},u=[{value:"Capabilities",id:"capabilities",level:2},{value:"Supported Sources",id:"supported-sources",level:2},{value:"Questions",id:"questions",level:2}],c={toc:u};function d(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"sql-profiling"},"SQL Profiling"),(0,i.kt)("p",null,"SQL Profiling collects table level and column level statistics.\nThe SQL-based profiler does not run alone, but rather can be enabled for other SQL-based sources.\nEnabling profiling will slow down ingestion runs."),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"Running profiling against many tables or over many rows can run up significant costs.\nWhile we've done our best to limit the expensiveness of the queries the profiler runs, you\nshould be prudent about the set of tables profiling is enabled on or the frequency\nof the profiling runs.")),(0,i.kt)("h2",{id:"capabilities"},"Capabilities"),(0,i.kt)("p",null,"Extracts:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Row and column counts for each table"),(0,i.kt)("li",{parentName:"ul"},"For each column, if applicable:",(0,i.kt)("ul",{parentName:"li"},(0,i.kt)("li",{parentName:"ul"},"null counts and proportions"),(0,i.kt)("li",{parentName:"ul"},"distinct counts and proportions"),(0,i.kt)("li",{parentName:"ul"},"minimum, maximum, mean, median, standard deviation, some quantile values"),(0,i.kt)("li",{parentName:"ul"},"histograms or frequencies of unique values")))),(0,i.kt)("h2",{id:"supported-sources"},"Supported Sources"),(0,i.kt)("p",null,"SQL profiling is supported for all SQL sources. Check the individual source page to verify if it supports profiling."),(0,i.kt)("h2",{id:"questions"},"Questions"),(0,i.kt)("p",null,"If you've got any questions on configuring profiling, feel free to ping us on ",(0,i.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io/"},"our Slack"),"!"))}d.isMDXComponent=!0}}]);