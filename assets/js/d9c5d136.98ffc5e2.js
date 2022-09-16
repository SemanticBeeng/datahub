"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[9895],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,g=c["".concat(o,".").concat(m)]||c[m]||d[m]||l;return n?r.createElement(g,i(i({ref:t},p),{},{components:n})):r.createElement(g,i({ref:t},p))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=c;var s={};for(var o in t)hasOwnProperty.call(t,o)&&(s[o]=t[o]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},98448:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},37358:function(e,t,n){n.d(t,{Z:function(){return c}});var r=n(87462),a=n(67294),l=n(51048),i=n(22713);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},o=n(12613),u=n(86010),p="tabItem_1uMI";function d(e){var t,n,r,l=e.lazy,i=e.block,d=e.defaultValue,c=e.values,m=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),h=null!=c?c:f.map((function(e){var t=e.props;return{value:t.value,label:t.label}})),b=(0,o.lx)(h,(function(e,t){return e.value===t.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var k=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==k&&!h.some((function(e){return e.value===k})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+k+'" but none of its children has the corresponding value. Available values are: '+h.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var v=s(),N=v.tabGroupChoices,y=v.setTabGroupChoices,w=(0,a.useState)(k),C=w[0],O=w[1],S=[],_=(0,o.o5)().blockElementScrollPositionUntilNextRender;if(null!=m){var T=N[m];null!=T&&T!==C&&h.some((function(e){return e.value===T}))&&O(T)}var j=function(e){var t=e.currentTarget,n=S.indexOf(t),r=h[n].value;r!==C&&(_(t),O(r),null!=m&&y(m,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=S.indexOf(e.currentTarget)+1;n=S[r]||S[0];break;case"ArrowLeft":var a=S.indexOf(e.currentTarget)-1;n=S[a]||S[S.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,u.Z)("tabs",{"tabs--block":i},g)},h.map((function(e){var t=e.value,n=e.label;return a.createElement("li",{role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,className:(0,u.Z)("tabs__item",p,{"tabs__item--active":C===t}),key:t,ref:function(e){return S.push(e)},onKeyDown:E,onFocus:j,onClick:j},null!=n?n:t)}))),l?(0,a.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function c(e){var t=(0,l.Z)();return a.createElement(d,(0,r.Z)({key:String(t)},e))}},22713:function(e,t,n){var r=(0,n(67294).createContext)(void 0);t.Z=r},67892:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return u},contentTitle:function(){return p},metadata:function(){return d},toc:function(){return c},default:function(){return g}});var r=n(87462),a=n(63366),l=(n(67294),n(3905)),i=n(37358),s=n(98448),o=["components"],u={title:"Superset",slug:"/generated/ingestion/sources/superset",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md"},p="Superset",d={unversionedId:"docs/generated/ingestion/sources/superset",id:"docs/generated/ingestion/sources/superset",isDocsHomePage:!1,title:"Superset",description:"Module superset",source:"@site/genDocs/docs/generated/ingestion/sources/superset.md",sourceDirName:"docs/generated/ingestion/sources",slug:"/generated/ingestion/sources/superset",permalink:"/docs/generated/ingestion/sources/superset",editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md",tags:[],version:"current",frontMatter:{title:"Superset",slug:"/generated/ingestion/sources/superset",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/generated/ingestion/sources/superset.md"},sidebar:"overviewSidebar",previous:{title:"Other SQLAlchemy databases",permalink:"/docs/generated/ingestion/sources/sqlalchemy"},next:{title:"Tableau",permalink:"/docs/generated/ingestion/sources/tableau"}},c=[{value:"Module <code>superset</code>",id:"module-superset",children:[{value:"CLI based Ingestion",id:"cli-based-ingestion",children:[{value:"Install the Plugin",id:"install-the-plugin",children:[],level:4}],level:3},{value:"Starter Recipe",id:"starter-recipe",children:[],level:3},{value:"Config Details",id:"config-details",children:[],level:3},{value:"Code Coordinates",id:"code-coordinates",children:[],level:3}],level:2},{value:"Questions",id:"questions",children:[],level:2}],m={toc:c};function g(e){var t=e.components,n=(0,a.Z)(e,o);return(0,l.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h1",{id:"superset"},"Superset"),(0,l.kt)("h2",{id:"module-superset"},"Module ",(0,l.kt)("inlineCode",{parentName:"h2"},"superset")),(0,l.kt)("p",null,(0,l.kt)("img",{parentName:"p",src:"https://img.shields.io/badge/support%20status-certified-brightgreen",alt:"Certified"})),(0,l.kt)("p",null,"This plugin extracts the following:"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Charts, dashboards, and associated metadata")),(0,l.kt)("p",null,"See documentation for superset's /security/login at ",(0,l.kt)("a",{parentName:"p",href:"https://superset.apache.org/docs/rest-api"},"https://superset.apache.org/docs/rest-api")," for more details on superset's login api."),(0,l.kt)("h3",{id:"cli-based-ingestion"},"CLI based Ingestion"),(0,l.kt)("h4",{id:"install-the-plugin"},"Install the Plugin"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"pip install 'acryl-datahub[superset]'\n")),(0,l.kt)("h3",{id:"starter-recipe"},"Starter Recipe"),(0,l.kt)("p",null,"Check out the following recipe to get started with ingestion! See ",(0,l.kt)("a",{parentName:"p",href:"#config-details"},"below")," for full configuration options."),(0,l.kt)("p",null,"For general pointers on writing and running a recipe, see our ",(0,l.kt)("a",{parentName:"p",href:"/docs/metadata-ingestion#recipes"},"main recipe guide"),"."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yaml"},"source:\n  type: superset\n  config:\n    # Coordinates\n    connect_uri: http://localhost:8088\n\n    # Credentials\n    username: user\n    password: pass\n    provider: ldap\n\nsink:\n  # sink configs\n")),(0,l.kt)("h3",{id:"config-details"},"Config Details"),(0,l.kt)(i.Z,{mdxType:"Tabs"},(0,l.kt)(s.Z,{value:"options",label:"Options",default:!0,mdxType:"TabItem"},(0,l.kt)("p",null,"Note that a ",(0,l.kt)("inlineCode",{parentName:"p"},".")," is used to denote nested fields in the YAML recipe."),(0,l.kt)("details",{open:!0},(0,l.kt)("summary",null,"View All Configuration Options"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",{parentName:"tr",align:null},"Field"),(0,l.kt)("th",{parentName:"tr",align:null},"Required"),(0,l.kt)("th",{parentName:"tr",align:null},"Type"),(0,l.kt)("th",{parentName:"tr",align:null},"Description"),(0,l.kt)("th",{parentName:"tr",align:null},"Default"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"connect_uri"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Superset host URL."),(0,l.kt)("td",{parentName:"tr",align:null},"localhost:8088")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"display_uri"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"optional URL to use in links (if ",(0,l.kt)("inlineCode",{parentName:"td"},"connect_uri")," is only for ingestion)"),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"username"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Superset username."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"password"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Superset password."),(0,l.kt)("td",{parentName:"tr",align:null},"None")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"provider"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Superset provider."),(0,l.kt)("td",{parentName:"tr",align:null},"db")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"options"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"{}")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"env"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"string"),(0,l.kt)("td",{parentName:"tr",align:null},"Environment to use in namespace when constructing URNs"),(0,l.kt)("td",{parentName:"tr",align:null},"PROD")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",{parentName:"tr",align:null},"database_alias"),(0,l.kt)("td",{parentName:"tr",align:null}),(0,l.kt)("td",{parentName:"tr",align:null},"Dict","[str,string]"),(0,l.kt)("td",{parentName:"tr",align:null},"Can be used to change mapping for database names in superset to what you have in datahub"),(0,l.kt)("td",{parentName:"tr",align:null},"{}")))))),(0,l.kt)(s.Z,{value:"schema",label:"Schema",mdxType:"TabItem"},(0,l.kt)("p",null,"The ",(0,l.kt)("a",{parentName:"p",href:"https://json-schema.org/"},"JSONSchema")," for this configuration is inlined below."),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},'{\n  "title": "SupersetConfig",\n  "type": "object",\n  "properties": {\n    "connect_uri": {\n      "title": "Connect Uri",\n      "description": "Superset host URL.",\n      "default": "localhost:8088",\n      "type": "string"\n    },\n    "display_uri": {\n      "title": "Display Uri",\n      "description": "optional URL to use in links (if `connect_uri` is only for ingestion)",\n      "type": "string"\n    },\n    "username": {\n      "title": "Username",\n      "description": "Superset username.",\n      "type": "string"\n    },\n    "password": {\n      "title": "Password",\n      "description": "Superset password.",\n      "type": "string"\n    },\n    "provider": {\n      "title": "Provider",\n      "description": "Superset provider.",\n      "default": "db",\n      "type": "string"\n    },\n    "options": {\n      "title": "Options",\n      "default": {},\n      "type": "object"\n    },\n    "env": {\n      "title": "Env",\n      "description": "Environment to use in namespace when constructing URNs",\n      "default": "PROD",\n      "type": "string"\n    },\n    "database_alias": {\n      "title": "Database Alias",\n      "description": "Can be used to change mapping for database names in superset to what you have in datahub",\n      "default": {},\n      "type": "object",\n      "additionalProperties": {\n        "type": "string"\n      }\n    }\n  },\n  "additionalProperties": false\n}\n')))),(0,l.kt)("p",null,"If you were using ",(0,l.kt)("inlineCode",{parentName:"p"},"database_alias")," in one of your other ingestions to rename your databases to something else based on business needs you can rename them in superset also"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-yml"},"source:\n  type: superset\n  config:\n    # Coordinates\n    connect_uri: http://localhost:8088\n\n    # Credentials\n    username: user\n    password: pass\n    provider: ldap\n    database_alias:\n      example_name_1: business_name_1\n      example_name_2: business_name_2\n\nsink:\n  # sink configs\n")),(0,l.kt)("h3",{id:"code-coordinates"},"Code Coordinates"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Class Name: ",(0,l.kt)("inlineCode",{parentName:"li"},"datahub.ingestion.source.superset.SupersetSource")),(0,l.kt)("li",{parentName:"ul"},"Browse on ",(0,l.kt)("a",{parentName:"li",href:"https://github.com/datahub-project/datahub/blob/master/metadata-ingestion/src/datahub/ingestion/source/superset.py"},"GitHub"))),(0,l.kt)("h2",{id:"questions"},"Questions"),(0,l.kt)("p",null,"If you've got any questions on configuring ingestion for Superset, feel free to ping us on ",(0,l.kt)("a",{parentName:"p",href:"https://slack.datahubproject.io"},"our Slack")))}g.isMDXComponent=!0}}]);