"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[5143],{3905:(e,t,a)=>{a.d(t,{Zo:()=>p,kt:()=>m});var n=a(67294);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function o(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?o(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)a=o[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var d=n.createContext({}),s=function(e){var t=n.useContext(d),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},p=function(e){var t=s(e.components);return n.createElement(d.Provider,{value:t},e.children)},c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,o=e.originalType,d=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=s(a),m=r,h=u["".concat(d,".").concat(m)]||u[m]||c[m]||o;return a?n.createElement(h,l(l({ref:t},p),{},{components:a})):n.createElement(h,l({ref:t},p))}));function m(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=a.length,l=new Array(o);l[0]=u;var i={};for(var d in t)hasOwnProperty.call(t,d)&&(i[d]=t[d]);i.originalType=e,i.mdxType="string"==typeof e?e:r,l[1]=i;for(var s=2;s<o;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},64516:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>c,frontMatter:()=>o,metadata:()=>i,toc:()=>s});var n=a(87462),r=(a(67294),a(3905));const o={title:"Local Development",sidebar_label:"Local Development",slug:"/developers",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/developers.md"},l="DataHub Developer's Guide",i={unversionedId:"docs/developers",id:"docs/developers",title:"Local Development",description:"Pre-requirements",source:"@site/genDocs/docs/developers.md",sourceDirName:"docs",slug:"/developers",permalink:"/docs/developers",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/developers.md",tags:[],version:"current",frontMatter:{title:"Local Development",sidebar_label:"Local Development",slug:"/developers",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/developers.md"},sidebar:"overviewSidebar",previous:{title:"GlobalSettings",permalink:"/docs/generated/metamodel/entities/globalsettings"},next:{title:"Using Docker Images During Development",permalink:"/docs/docker/development"}},d={},s=[{value:"Pre-requirements",id:"pre-requirements",level:2},{value:"Building the Project",id:"building-the-project",level:2},{value:"Deploying local versions",id:"deploying-local-versions",level:2},{value:"IDE Support",id:"ide-support",level:2},{value:"Common Build Issues",id:"common-build-issues",level:2},{value:"Getting <code>Unsupported class file major version 57</code>",id:"getting-unsupported-class-file-major-version-57",level:3},{value:"Getting <code>cannot find symbol</code> error for <code>javax.annotation.Generated</code>",id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated",level:3},{value:"<code>:metadata-models:generateDataTemplate</code> task fails with <code>java.nio.file.InvalidPathException: Illegal char &lt;:&gt; at index XX</code> or <code>Caused by: java.lang.IllegalArgumentException: &#39;other&#39; has different root</code> error",id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error",level:3},{value:"Various errors related to <code>generateDataTemplate</code> or other <code>generate</code> tasks",id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks",level:3},{value:"<code>Execution failed for task &#39;:metadata-service:restli-servlet-impl:checkRestModel&#39;</code>",id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel",level:3},{value:"<code>java.io.IOException: No space left on device</code>",id:"javaioioexception-no-space-left-on-device",level:3},{value:"<code>Build failed</code> for task <code>./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint</code>",id:"build-failed-for-task-gradlew-datahub-frontenddist--x-yarntest--x-yarnlint",level:3}],p={toc:s};function c(e){let{components:t,...a}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,a,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"datahub-developers-guide"},"DataHub Developer's Guide"),(0,r.kt)("h2",{id:"pre-requirements"},"Pre-requirements"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://openjdk.org/projects/jdk/11/"},"Java 11 SDK"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://www.docker.com/"},"Docker"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/"},"Docker Compose"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"Docker engine with at least 8GB of memory to run tests."),(0,r.kt)("admonition",{parentName:"li",type:"note"},(0,r.kt)("p",{parentName:"admonition"},"Do not try to use a JDK newer than JDK 11. The build process does not work with newer JDKs currently.")))),(0,r.kt)("h2",{id:"building-the-project"},"Building the Project"),(0,r.kt)("p",null,"Fork and clone the repository if haven't done so already"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"git clone https://github.com/{username}/datahub.git\n")),(0,r.kt)("p",null,"Change into the repository's root directory"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd datahub\n")),(0,r.kt)("p",null,"Use ",(0,r.kt)("a",{parentName:"p",href:"https://docs.gradle.org/current/userguide/gradle_wrapper.html"},"gradle wrapper")," to build the project"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew build\n")),(0,r.kt)("p",null,"Note that the above will also run run tests and a number of validations which makes the process considerably slower."),(0,r.kt)("p",null,"We suggest partially compiling DataHub according to your needs:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build Datahub's backend GMS (Generalized metadata service):")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:war:build\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build Datahub's frontend:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build DataHub's command line tool:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew :metadata-ingestion:installDev\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Build DataHub's documentation:")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew :docs-website:yarnLintFix :docs-website:build -x :metadata-ingestion:runPreFlightScript\n# To preview the documentation\n./gradlew :docs-website:serve\n")),(0,r.kt)("h2",{id:"deploying-local-versions"},"Deploying local versions"),(0,r.kt)("p",null,"Run just once to have the local ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub")," cli tool installed in your $PATH"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"cd smoke-test/\npython3 -m venv venv\nsource venv/bin/activate\npip install --upgrade pip wheel setuptools\npip install -r requirements.txt\ncd ../\n")),(0,r.kt)("p",null,"Once you have compiled & packaged the project or appropriate module you can deploy the entire system via docker-compose by running:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"datahub docker quickstart --build-locally\n")),(0,r.kt)("p",null,"Replace whatever container you want in the existing deployment.\nI.e, replacing datahub's backend (GMS):"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(cd docker && COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -p datahub -f docker-compose-without-neo4j.yml -f docker-compose-without-neo4j.override.yml -f docker-compose.dev.yml up -d --no-deps --force-recreate datahub-gms)\n")),(0,r.kt)("p",null,"Running the local version of the frontend"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(cd docker && COMPOSE_DOCKER_CLI_BUILD=1 DOCKER_BUILDKIT=1 docker-compose -p datahub -f docker-compose-without-neo4j.yml -f docker-compose-without-neo4j.override.yml -f docker-compose.dev.yml up -d --no-deps --force-recreate datahub-frontend-react)\n")),(0,r.kt)("h2",{id:"ide-support"},"IDE Support"),(0,r.kt)("p",null,"The recommended IDE for DataHub development is ",(0,r.kt)("a",{parentName:"p",href:"https://www.jetbrains.com/idea/"},"IntelliJ IDEA"),".\nYou can run the following command to generate or update the IntelliJ project file"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew idea\n")),(0,r.kt)("p",null,"Open ",(0,r.kt)("inlineCode",{parentName:"p"},"datahub.ipr")," in IntelliJ to start developing!"),(0,r.kt)("p",null,"For consistency please import and auto format the code using ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/gradle/idea/LinkedIn%20Style.xml"},"LinkedIn IntelliJ Java style"),"."),(0,r.kt)("h2",{id:"common-build-issues"},"Common Build Issues"),(0,r.kt)("h3",{id:"getting-unsupported-class-file-major-version-57"},"Getting ",(0,r.kt)("inlineCode",{parentName:"h3"},"Unsupported class file major version 57")),(0,r.kt)("p",null,"You're probably using a Java version that's too new for gradle. Run the following command to check your Java version"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"java --version\n")),(0,r.kt)("p",null,"While it may be possible to build and run DataHub using newer versions of Java, we currently only support ",(0,r.kt)("a",{parentName:"p",href:"https://openjdk.org/projects/jdk/11/"},"Java 11")," (aka Java 11)."),(0,r.kt)("h3",{id:"getting-cannot-find-symbol-error-for-javaxannotationgenerated"},"Getting ",(0,r.kt)("inlineCode",{parentName:"h3"},"cannot find symbol")," error for ",(0,r.kt)("inlineCode",{parentName:"h3"},"javax.annotation.Generated")),(0,r.kt)("p",null,"Similar to the previous issue, please use Java 1.8 to build the project.\nYou can install multiple version of Java on a single machine and switch between them using the ",(0,r.kt)("inlineCode",{parentName:"p"},"JAVA_HOME")," environment variable. See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.oracle.com/cd/E21454_01/html/821-2531/inst_jdk_javahome_t.html"},"this document")," for more details."),(0,r.kt)("h3",{id:"metadata-modelsgeneratedatatemplate-task-fails-with-javaniofileinvalidpathexception-illegal-char--at-index-xx-or-caused-by-javalangillegalargumentexception-other-has-different-root-error"},(0,r.kt)("inlineCode",{parentName:"h3"},":metadata-models:generateDataTemplate")," task fails with ",(0,r.kt)("inlineCode",{parentName:"h3"},"java.nio.file.InvalidPathException: Illegal char <:> at index XX")," or ",(0,r.kt)("inlineCode",{parentName:"h3"},"Caused by: java.lang.IllegalArgumentException: 'other' has different root")," error"),(0,r.kt)("p",null,"This is a ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/linkedin/rest.li/issues/287"},"known issue")," when building the project on Windows due a bug in the Pegasus plugin. Please build on a Mac or Linux instead. "),(0,r.kt)("h3",{id:"various-errors-related-to-generatedatatemplate-or-other-generate-tasks"},"Various errors related to ",(0,r.kt)("inlineCode",{parentName:"h3"},"generateDataTemplate")," or other ",(0,r.kt)("inlineCode",{parentName:"h3"},"generate")," tasks"),(0,r.kt)("p",null,"As we generate quite a few files from the models, it is possible that old generated files may conflict with new model changes. When this happens, a simple ",(0,r.kt)("inlineCode",{parentName:"p"},"./gradlew clean")," should reosolve the issue. "),(0,r.kt)("h3",{id:"execution-failed-for-task-metadata-servicerestli-servlet-implcheckrestmodel"},(0,r.kt)("inlineCode",{parentName:"h3"},"Execution failed for task ':metadata-service:restli-servlet-impl:checkRestModel'")),(0,r.kt)("p",null,"This generally means that an ",(0,r.kt)("a",{parentName:"p",href:"https://linkedin.github.io/rest.li/modeling/compatibility_check"},"incompatible change")," was introduced to the rest.li API in GMS. You'll need to rebuild the snapshots/IDL by running the following command once"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"./gradlew :metadata-service:restli-servlet-impl:build -Prest.model.compatibility=ignore\n")),(0,r.kt)("h3",{id:"javaioioexception-no-space-left-on-device"},(0,r.kt)("inlineCode",{parentName:"h3"},"java.io.IOException: No space left on device")),(0,r.kt)("p",null,"This means you're running out of space on your disk to build. Please free up some space or try a different disk."),(0,r.kt)("h3",{id:"build-failed-for-task-gradlew-datahub-frontenddist--x-yarntest--x-yarnlint"},(0,r.kt)("inlineCode",{parentName:"h3"},"Build failed")," for task ",(0,r.kt)("inlineCode",{parentName:"h3"},"./gradlew :datahub-frontend:dist -x yarnTest -x yarnLint")),(0,r.kt)("p",null,"This could mean that you need to update your ",(0,r.kt)("a",{parentName:"p",href:"https://yarnpkg.com/getting-started/install"},"Yarn")," version"))}c.isMDXComponent=!0}}]);