"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[2055],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>f});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),u=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=u(e.components);return a.createElement(s.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},p=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),p=u(n),f=i,g=p["".concat(s,".").concat(f)]||p[f]||c[f]||o;return n?a.createElement(g,r(r({ref:t},d),{},{components:n})):a.createElement(g,r({ref:t},d))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,r=new Array(o);r[0]=p;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:i,r[1]=l;for(var u=2;u<o;u++)r[u]=n[u];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}p.displayName="MDXCreateElement"},94734:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var a=n(87462),i=(n(67294),n(3905));const o={title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/snowflake/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/overview.md"},r="Snowflake Ingestion Guide: Overview",l={unversionedId:"docs/quick-ingestion-guides/snowflake/overview",id:"docs/quick-ingestion-guides/snowflake/overview",title:"Overview",description:"What You Will Get Out of This Guide",source:"@site/genDocs/docs/quick-ingestion-guides/snowflake/overview.md",sourceDirName:"docs/quick-ingestion-guides/snowflake",slug:"/quick-ingestion-guides/snowflake/overview",permalink:"/docs/quick-ingestion-guides/snowflake/overview",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/overview.md",tags:[],version:"current",frontMatter:{title:"Overview",sidebar_label:"Overview",slug:"/quick-ingestion-guides/snowflake/overview",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/quick-ingestion-guides/snowflake/overview.md"},sidebar:"overviewSidebar",previous:{title:"Configuration",permalink:"/docs/quick-ingestion-guides/bigquery/configuration"},next:{title:"Setup",permalink:"/docs/quick-ingestion-guides/snowflake/setup"}},s={},u=[{value:"What You Will Get Out of This Guide",id:"what-you-will-get-out-of-this-guide",level:2},{value:"Caveats",id:"caveats",level:3},{value:"Next Steps",id:"next-steps",level:2},{value:"Advanced Guides and Reference",id:"advanced-guides-and-reference",level:2}],d={toc:u};function c(e){let{components:t,...n}=e;return(0,i.kt)("wrapper",(0,a.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"snowflake-ingestion-guide-overview"},"Snowflake Ingestion Guide: Overview"),(0,i.kt)("h2",{id:"what-you-will-get-out-of-this-guide"},"What You Will Get Out of This Guide"),(0,i.kt)("p",null,"This guide will help you set up the Snowflake connector to begin ingesting metadata into DataHub."),(0,i.kt)("p",null,"Upon completing this guide, you will have a recurring ingestion pipeline that will extract metadata from Snowflake and load it into DataHub. This will include to following Snowflake asset types:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Databases"),(0,i.kt)("li",{parentName:"ul"},"Schemas"),(0,i.kt)("li",{parentName:"ul"},"Tables"),(0,i.kt)("li",{parentName:"ul"},"External Tables"),(0,i.kt)("li",{parentName:"ul"},"Views"),(0,i.kt)("li",{parentName:"ul"},"Materialized Views")),(0,i.kt)("p",null,"The pipeline will also extract:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Usage statistics")," to help you understand recent query activity (available if using Snowflake Enterprise edition or above)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table- and Column-level lineage")," to automatically define interdependencies between datasets and columns (available if using Snowflake Enterprise edition or above)"),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("strong",{parentName:"li"},"Table-level profile statistics")," to help you understand the shape of the data")),(0,i.kt)("admonition",{type:"caution"},(0,i.kt)("p",{parentName:"admonition"},"You will NOT have extracted Stages, Snowpipes, Streams, Tasks, Procedures from Snowflake, as the connector does not support ingesting these assets yet.")),(0,i.kt)("h3",{id:"caveats"},"Caveats"),(0,i.kt)("p",null,"By default, DataHub only profiles datasets that have changed in the past 1 day. This can be changed in the YAML editor by setting the value of ",(0,i.kt)("inlineCode",{parentName:"p"},"profile_if_updated_since_days")," to something greater than 1."),(0,i.kt)("p",null,"Additionally, DataHub only extracts usage and lineage information based on operations performed in the last 1 day. This can be changed by setting a custom value for ",(0,i.kt)("inlineCode",{parentName:"p"},"start_time")," and ",(0,i.kt)("inlineCode",{parentName:"p"},"end_time")," in the YAML editor."),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"To learn more about setting these advanced values, check out the ",(0,i.kt)("a",{parentName:"em",href:"/docs/generated/ingestion/sources/snowflake/#module-snowflake"},"Snowflake Ingestion Source"),".")),(0,i.kt)("h2",{id:"next-steps"},"Next Steps"),(0,i.kt)("p",null,"If that all sounds like what you're looking for, navigate to the ",(0,i.kt)("a",{parentName:"p",href:"/docs/quick-ingestion-guides/snowflake/setup"},"next page"),", where we'll talk about prerequisites."),(0,i.kt)("h2",{id:"advanced-guides-and-reference"},"Advanced Guides and Reference"),(0,i.kt)("p",null,"If you want to ingest metadata from Snowflake using the DataHub CLI, check out the following resources:"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"Learn about CLI Ingestion in the ",(0,i.kt)("a",{parentName:"li",href:"/docs/metadata-ingestion"},"Introduction to Metadata Ingestion")),(0,i.kt)("li",{parentName:"ul"},(0,i.kt)("a",{parentName:"li",href:"/docs/generated/ingestion/sources/snowflake/#module-snowflake"},"Snowflake Ingestion Source"))),(0,i.kt)("p",null,(0,i.kt)("em",{parentName:"p"},"Need more help? Join the conversation in ",(0,i.kt)("a",{parentName:"em",href:"http://slack.datahubproject.io"},"Slack"),"!")))}c.isMDXComponent=!0}}]);