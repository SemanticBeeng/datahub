"use strict";(self.webpackChunkdocs_website=self.webpackChunkdocs_website||[]).push([[1439],{3905:(e,a,t)=>{t.d(a,{Zo:()=>p,kt:()=>d});var n=t(67294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function o(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?o(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function l(e,a){if(null==e)return{};var t,n,r=function(e,a){if(null==e)return{};var t,n,r={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var s=n.createContext({}),u=function(e){var a=n.useContext(s),t=a;return e&&(t="function"==typeof e?e(a):i(i({},a),e)),t},p=function(e){var a=u(e.components);return n.createElement(s.Provider,{value:a},e.children)},c={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var t=e.components,r=e.mdxType,o=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=u(t),d=r,h=m["".concat(s,".").concat(d)]||m[d]||c[d]||o;return t?n.createElement(h,i(i({ref:a},p),{},{components:t})):n.createElement(h,i({ref:a},p))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var o=t.length,i=new Array(o);i[0]=m;var l={};for(var s in a)hasOwnProperty.call(a,s)&&(l[s]=a[s]);l.originalType=e,l.mdxType="string"==typeof e?e:r,i[1]=l;for(var u=2;u<o;u++)i[u]=t[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},78526:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>s,contentTitle:()=>i,default:()=>c,frontMatter:()=>o,metadata:()=>l,toc:()=>u});var n=t(87462),r=(t(67294),t(3905));const o={title:"Configuring Kafka",hide_title:!0,sidebar_label:"Configuring Kafka",slug:"/how/kafka-config",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/kafka-config.md"},i="Configuring Kafka in DataHub",l={unversionedId:"docs/how/kafka-config",id:"docs/how/kafka-config",title:"Configuring Kafka",description:"DataHub requires Kafka to operate. Kafka is used as a durable log that can be used to store inbound",source:"@site/genDocs/docs/how/kafka-config.md",sourceDirName:"docs/how",slug:"/how/kafka-config",permalink:"/docs/how/kafka-config",draft:!1,editUrl:"https://github.com/datahub-project/datahub/blob/master/docs/how/kafka-config.md",tags:[],version:"current",frontMatter:{title:"Configuring Kafka",hide_title:!0,sidebar_label:"Configuring Kafka",slug:"/how/kafka-config",custom_edit_url:"https://github.com/datahub-project/datahub/blob/master/docs/how/kafka-config.md"},sidebar:"overviewSidebar",previous:{title:"Telemetry",permalink:"/docs/deploy/telemetry"},next:{title:"Integrating with Confluent Cloud",permalink:"/docs/deploy/confluent-cloud"}},s={},u=[{value:"Environment Variables",id:"environment-variables",level:2},{value:"Connection Configuration",id:"connection-configuration",level:3},{value:"Example: Connecting using AWS IAM (MSK)",id:"example-connecting-using-aws-iam-msk",level:4},{value:"Topic Configuration",id:"topic-configuration",level:3},{value:"Metadata Service (datahub-gms)",id:"metadata-service-datahub-gms",level:3},{value:"MCE Consumer (datahub-mce-consumer)",id:"mce-consumer-datahub-mce-consumer",level:3},{value:"MAE Consumer (datahub-mae-consumer)",id:"mae-consumer-datahub-mae-consumer",level:3},{value:"DataHub Frontend (datahub-frontend-react)",id:"datahub-frontend-datahub-frontend-react",level:3},{value:"Configuring Consumer Group Id",id:"configuring-consumer-group-id",level:2},{value:"datahub-mce-consumer and datahub-mae-consumer",id:"datahub-mce-consumer-and-datahub-mae-consumer",level:3},{value:"Applying Configurations",id:"applying-configurations",level:2},{value:"Docker",id:"docker",level:3},{value:"Helm",id:"helm",level:3},{value:"Other Components that use Kafka can be configured using environment variables:",id:"other-components-that-use-kafka-can-be-configured-using-environment-variables",level:2},{value:"SASL/GSSAPI properties for kafka-setup and datahub-frontend via environment variables",id:"saslgssapi-properties-for-kafka-setup-and-datahub-frontend-via-environment-variables",level:2},{value:"SASL/GSSAPI properties for schema-registry via environment variables",id:"saslgssapi-properties-for-schema-registry-via-environment-variables",level:2},{value:"SSL",id:"ssl",level:2},{value:"Kafka",id:"kafka",level:3},{value:"Schema Registry",id:"schema-registry",level:3}],p={toc:u};function c(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,n.Z)({},p,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"configuring-kafka-in-datahub"},"Configuring Kafka in DataHub"),(0,r.kt)("p",null,"DataHub requires Kafka to operate. Kafka is used as a durable log that can be used to store inbound\nrequests to update the Metadata Graph (Metadata Change Proposal), or as a change log detailing the updates\nthat have been made to the Metadata Graph (Metadata Change Log). "),(0,r.kt)("h2",{id:"environment-variables"},"Environment Variables"),(0,r.kt)("p",null,"The following environment variables can be used to customize DataHub's connection to Kafka for the following DataHub components,\neach of which requires a connection to Kafka:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"metadata-service")," (datahub-gms container)"),(0,r.kt)("li",{parentName:"ul"},"(Advanced - if standalone consumers are deployed) ",(0,r.kt)("inlineCode",{parentName:"li"},"mce-consumer-job")," (datahub-mce-consumer container)"),(0,r.kt)("li",{parentName:"ul"},"(Advanced - if standalone consumers are deployed) ",(0,r.kt)("inlineCode",{parentName:"li"},"mae-consumer-job")," (datahub-mae-consumer container)"),(0,r.kt)("li",{parentName:"ul"},"(Advanced - if product analytics are enabled) datahub-frontend")),(0,r.kt)("h3",{id:"connection-configuration"},"Connection Configuration"),(0,r.kt)("p",null,"With the exception of ",(0,r.kt)("inlineCode",{parentName:"p"},"KAFKA_BOOTSTRAP_SERVER")," and ",(0,r.kt)("inlineCode",{parentName:"p"},"KAFKA_SCHEMAREGISTRY_URL"),", Kafka is configured via ",(0,r.kt)("a",{parentName:"p",href:"https://spring.io/projects/spring-boot"},"spring-boot"),", specifically with ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/api/org/springframework/boot/autoconfigure/kafka/KafkaProperties.html"},"KafkaProperties"),". See ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#integration-properties"},"Integration Properties")," prefixed with ",(0,r.kt)("inlineCode",{parentName:"p"},"spring.kafka"),". "),(0,r.kt)("p",null,"Below is an example of how SASL/GSSAPI properties can be configured via environment variables:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"export KAFKA_BOOTSTRAP_SERVER=broker:29092\nexport KAFKA_SCHEMAREGISTRY_URL=http://schema-registry:8081\nexport SPRING_KAFKA_PROPERTIES_SASL_KERBEROS_SERVICE_NAME=kafka\nexport SPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_PLAINTEXT\nexport SPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,r.kt)("h4",{id:"example-connecting-using-aws-iam-msk"},"Example: Connecting using AWS IAM (MSK)"),(0,r.kt)("p",null,"Here is another example of how SASL_SSL can be configured for AWS_MSK_IAM when connecting to MSK using IAM via environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SPRING_KAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_SSL\nSPRING_KAFKA_PROPERTIES_SSL_TRUSTSTORE_LOCATION=/tmp/kafka.client.truststore.jks\nSPRING_KAFKA_PROPERTIES_SASL_MECHANISM=AWS_MSK_IAM\nSPRING_KAFKA_PROPERTIES_SASL_JAAS_CONFIG=software.amazon.msk.auth.iam.IAMLoginModule required;\nSPRING_KAFKA_PROPERTIES_SASL_CLIENT_CALLBACK_HANDLER_CLASS=software.amazon.msk.auth.iam.IAMClientCallbackHandler\n")),(0,r.kt)("p",null,"For more information about configuring these variables, check out Spring's ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config"},"Externalized Configuration")," to see how this works.\nAlso see ",(0,r.kt)("a",{parentName:"p",href:"https://docs.confluent.io/current/connect/security.html"},"Kafka Connect Security")," for more ways to connect."),(0,r.kt)("h3",{id:"topic-configuration"},"Topic Configuration"),(0,r.kt)("p",null,"By default, DataHub relies on the a set of Kafka topics to operate. By default, they have the following names:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MetadataChangeProposal_v1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"FailedMetadataChangeProposal_v1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MetadataChangeLog_Versioned_v1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"MetadataChangeLog_Timeseries_v1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"DataHubUsageEvent_v1"),": User behavior tracking event for UI")),(0,r.kt)("ol",{start:6},(0,r.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,r.kt)("strong",{parentName:"li"},"MetadataChangeEvent_v4"),": Metadata change proposal messages"),(0,r.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,r.kt)("strong",{parentName:"li"},"MetadataAuditEvent_v4"),": Metadata change log messages"),(0,r.kt)("li",{parentName:"ol"},"(Deprecated) ",(0,r.kt)("strong",{parentName:"li"},"FailedMetadataChangeEvent_v4"),": Failed to process #1 event")),(0,r.kt)("p",null,"These topics are discussed at more length in ",(0,r.kt)("a",{parentName:"p",href:"/docs/what/mxe"},"Metadata Events"),"."),(0,r.kt)("p",null,"We've included environment variables to customize the name each of these topics, for cases where an organization has naming rules for your topics."),(0,r.kt)("h3",{id:"metadata-service-datahub-gms"},"Metadata Service (datahub-gms)"),(0,r.kt)("p",null,"The following are environment variables you can use to configure topic names used in the Metadata Service container:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted by the ingestion framework."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted when MCPs fail processing."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Versioned Aspects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_TIMESERIES_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Timeseries Aspects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_TIMESERIES_TOPIC_NAME"),": The name of the topic for Platform Events (high-level semantic events)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_USAGE_EVENT_NAME"),": The name of the topic for product analytics events. "),(0,r.kt)("li",{parentName:"ul"},"(Deprecated) ",(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME"),": The name of the metadata change event topic."),(0,r.kt)("li",{parentName:"ul"},"(Deprecated) ",(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME"),": The name of the metadata audit event topic."),(0,r.kt)("li",{parentName:"ul"},"(Deprecated) ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME"),": The name of the failed metadata change event topic.")),(0,r.kt)("h3",{id:"mce-consumer-datahub-mce-consumer"},"MCE Consumer (datahub-mce-consumer)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted by the ingestion framework."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_PROPOSAL_TOPIC_NAME"),": The name of the topic for Metadata Change Proposals emitted when MCPs fail processing."),(0,r.kt)("li",{parentName:"ul"},"(Deprecated) ",(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_EVENT_NAME"),": The name of the deprecated topic that an embedded MCE consumer will consume from."),(0,r.kt)("li",{parentName:"ul"},"(Deprecated) ",(0,r.kt)("inlineCode",{parentName:"li"},"FAILED_METADATA_CHANGE_EVENT_NAME"),": The name of the deprecated topic that failed MCEs will be written to.")),(0,r.kt)("h3",{id:"mae-consumer-datahub-mae-consumer"},"MAE Consumer (datahub-mae-consumer)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Versioned Aspects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_TIMESERIES_TOPIC_NAME"),": The name of the topic for Metadata Change Logs that are produced for Timeseries Aspects."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_CHANGE_LOG_TIMESERIES_TOPIC_NAME"),": The name of the topic for Platform Events (high-level semantic events)."),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_USAGE_EVENT_NAME"),": The name of the topic for product analytics events."),(0,r.kt)("li",{parentName:"ul"},"(Deprecated) ",(0,r.kt)("inlineCode",{parentName:"li"},"METADATA_AUDIT_EVENT_NAME"),": The name of the deprecated metadata audit event topic.")),(0,r.kt)("h3",{id:"datahub-frontend-datahub-frontend-react"},"DataHub Frontend (datahub-frontend-react)"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_TRACKING_TOPIC"),": The name of the topic used for storing DataHub usage events.\nIt should contain the same value as ",(0,r.kt)("inlineCode",{parentName:"li"},"DATAHUB_USAGE_EVENT_NAME")," in the Metadata Service container. ")),(0,r.kt)("p",null,"Please ensure that these environment variables are set consistently throughout your ecosystem. DataHub has a few different applications running which communicate with Kafka (see above)."),(0,r.kt)("h2",{id:"configuring-consumer-group-id"},"Configuring Consumer Group Id"),(0,r.kt)("p",null,"Kafka Consumers in Spring are configured using Kafka listeners. By default, consumer group id is same as listener id."),(0,r.kt)("p",null,"We've included an environment variable to customize the consumer group id, if your company or organization has specific naming rules."),(0,r.kt)("h3",{id:"datahub-mce-consumer-and-datahub-mae-consumer"},"datahub-mce-consumer and datahub-mae-consumer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_CONSUMER_GROUP_ID"),": The name of the kafka consumer's group id.")),(0,r.kt)("h2",{id:"applying-configurations"},"Applying Configurations"),(0,r.kt)("h3",{id:"docker"},"Docker"),(0,r.kt)("p",null,"Simply add the above environment variables to the required ",(0,r.kt)("inlineCode",{parentName:"p"},"docker.env")," files for the containers. These can\nbe found inside the ",(0,r.kt)("inlineCode",{parentName:"p"},"docker")," folder of the repository."),(0,r.kt)("h3",{id:"helm"},"Helm"),(0,r.kt)("p",null,"On Helm, you'll need to configure these environment variables using the ",(0,r.kt)("inlineCode",{parentName:"p"},"extraEnvs")," sections of the specific container's\nconfigurations inside your ",(0,r.kt)("inlineCode",{parentName:"p"},"values.yaml")," file. "),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},'datahub-gms: \n    ...\n    extraEnvs:\n      - name: METADATA_CHANGE_PROPOSAL_TOPIC_NAME\n        value: "CustomMetadataChangeProposal_v1"\n      - name: METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME\n        value: "CustomMetadataChangeLogVersioned_v1"\n      - name: FAILED_METADATA_CHANGE_PROPOSAL_TOPIC_NAME\n        value: "CustomFailedMetadataChangeProposal_v1"\n      - name: KAFKA_CONSUMER_GROUP_ID\n        value: "my-apps-mae-consumer"\n        ....\n        \ndatahub-frontend:\n    ...\n    extraEnvs:\n        - name: DATAHUB_TRACKING_TOPIC\n          value: "MyCustomTrackingEvent"\n      \n# If standalone consumers are enabled\ndatahub-mae-consumer; \n    extraEnvs:\n        - name: METADATA_CHANGE_LOG_VERSIONED_TOPIC_NAME\n          value: "CustomMetadataChangeLogVersioned_v1"\n          ....\n        - name: METADATA_AUDIT_EVENT_NAME\n          value: "MetadataAuditEvent"\ndatahub-mce-consumer; \n    extraEnvs:\n        - name: METADATA_CHANGE_PROPOSAL_TOPIC_NAME\n          value: "CustomMetadataChangeLogVersioned_v1"\n          ....\n        - name: METADATA_CHANGE_EVENT_NAME\n          value: "MetadataChangeEvent"\n        ....\n')),(0,r.kt)("h2",{id:"other-components-that-use-kafka-can-be-configured-using-environment-variables"},"Other Components that use Kafka can be configured using environment variables:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"kafka-setup"),(0,r.kt)("li",{parentName:"ul"},"schema-registry")),(0,r.kt)("h2",{id:"saslgssapi-properties-for-kafka-setup-and-datahub-frontend-via-environment-variables"},"SASL/GSSAPI properties for kafka-setup and datahub-frontend via environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"KAFKA_BOOTSTRAP_SERVER=broker:29092\nKAFKA_SCHEMAREGISTRY_URL=http://schema-registry:8081\nKAFKA_PROPERTIES_SASL_KERBEROS_SERVICE_NAME=kafka\nKAFKA_PROPERTIES_SECURITY_PROTOCOL=SASL_PLAINTEXT\nKAFKA_PROPERTIES_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,r.kt)("h2",{id:"saslgssapi-properties-for-schema-registry-via-environment-variables"},"SASL/GSSAPI properties for schema-registry via environment variables"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"SCHEMA_REGISTRY_KAFKASTORE_BOOTSTRAP_SERVERS=broker:29092\nSCHEMA_REGISTRY_KAFKASTORE_SASL_KERBEROS_SERVICE_NAME=kafka\nSCHEMA_REGISTRY_KAFKASTORE_SECURITY_PROTOCOL=SASL_PLAINTEXT\nSCHEMA_REGISTRY_KAFKASTORE_SASL_JAAS_CONFIG=com.sun.security.auth.module.Krb5LoginModule required principal='principal@REALM' useKeyTab=true storeKey=true keyTab='/keytab';\n")),(0,r.kt)("h2",{id:"ssl"},"SSL"),(0,r.kt)("h3",{id:"kafka"},"Kafka"),(0,r.kt)("p",null,"We are using the Spring Boot framework to start our apps, including setting up Kafka. You can\n",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config-relaxed-binding-from-environment-variables"},"use environment variables to set system properties"),",\nincluding ",(0,r.kt)("a",{parentName:"p",href:"https://docs.spring.io/spring-boot/docs/current/reference/html/appendix-application-properties.html#integration-properties"},"Kafka properties"),".\nFrom there you can set your SSL configuration for Kafka."),(0,r.kt)("h3",{id:"schema-registry"},"Schema Registry"),(0,r.kt)("p",null,"If Schema Registry is configured to use security (SSL), then you also need to set additional values."),(0,r.kt)("p",null,"The ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mce-consumer-job"},"MCE")," and ",(0,r.kt)("a",{parentName:"p",href:"https://github.com/datahub-project/datahub/blob/master/metadata-jobs/mae-consumer-job"},"MAE")," consumers can set\ndefault Spring Kafka environment values, for example:"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SECURITY_PROTOCOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_KEYSTORE_LOCATION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_KEYSTORE_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_TRUSTSTORE_LOCATION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_KAFKA_PROPERTIES_SCHEMA_REGISTRY_SSL_TRUSTSTORE_PASSWORD"))),(0,r.kt)("p",null,(0,r.kt)("a",{parentName:"p",href:"/docs/what/gms"},"GMS")," can set the following environment variables that will be passed as properties when creating the Schema Registry\nClient. "),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SECURITY_PROTOCOL")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_KEYSTORE_LOCATION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_KEYSTORE_PASSWORD")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_TRUSTSTORE_LOCATION")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"KAFKA_SCHEMA_REGISTRY_SSL_TRUSTSTORE_PASSWORD"))),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"Note")," In the logs you might see something like\n",(0,r.kt)("inlineCode",{parentName:"p"},"The configuration 'kafkastore.ssl.truststore.password' was supplied but isn't a known config.")," The configuration is\nnot a configuration required for the producer. These WARN message can be safely ignored. Each of Datahub services are\npassed a full set of configuration but may not require all the configurations that are passed to them. These warn\nmessages indicate that the service was passed a configuration that is not relevant to it and can be safely ignored.")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"Other errors: ",(0,r.kt)("inlineCode",{parentName:"p"},"Failed to start bean 'org.springframework.kafka.config.internalKafkaListenerEndpointRegistry'; nested exception is org.apache.kafka.common.errors.TopicAuthorizationException: Not authorized to access topics: [DataHubUsageEvent_v1]"),". Please check ranger permissions or kafka broker logs.")))}c.isMDXComponent=!0}}]);