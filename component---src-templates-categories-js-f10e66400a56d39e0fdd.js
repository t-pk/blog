(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});a(136),a(137);var c=a(0),s=a.n(c),r=a(201),l=a(197);t.default=function(e){var t=e.data,a=e.pageContext.category,c=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.categories.includes(a)});return s.a.createElement(r.a,null,s.a.createElement("h1",null,"Chuyên mục ",a),c.map(function(e,t){var a=e.node;return s.a.createElement("div",{key:t},s.a.createElement("h3",null,s.a.createElement(l.a,{to:a.fields.slug},a.frontmatter.title)),s.a.createElement("span",{style:{color:"#BBB"}},"— ",a.frontmatter.date),s.a.createElement("p",null,a.excerpt))}))};var i="3334298382"},196:function(e,t,a){var c;e.exports=(c=a(203))&&c.default||c},197:function(e,t,a){"use strict";a.d(t,"b",function(){return d});var c=a(0),s=a.n(c),r=a(66),l=a.n(r);a.d(t,"a",function(){return l.a});a(196),a(9).default.enqueue;var i=s.a.createContext({});function n(e){var t=e.staticQueryData,a=e.data,c=e.query,r=e.render,l=a?a.data:t[c]&&t[c].data;return s.a.createElement(s.a.Fragment,null,l&&r(l),!l&&s.a.createElement("div",null,"Loading (StaticQuery)"))}var d=function(e){var t=e.data,a=e.query,c=e.render,r=e.children;return s.a.createElement(i.Consumer,null,function(e){return s.a.createElement(n,{data:t,query:a,render:c||r,staticQueryData:e})})}},201:function(e,t,a){"use strict";var c=a(202),s=a(0),r=a.n(s),l=a(197),i=a(330),n=a(261),d=a(328);a(216);i.a.Content;var o=r.a.createElement(n.a,{type:"loading",style:{fontSize:24},spin:!0}),m=function(e){var t,a;function s(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=s).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=s.prototype;return i.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},700)},i.render=function(){this.props.children;return this.state.hidden?r.a.createElement("div",{className:"center-hello"},r.a.createElement(d.a,{indicator:o,tip:"Tai Pham"})):r.a.createElement(l.b,{query:"61684770",render:function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("header",{class:"header-banner"},r.a.createElement("div",{class:"container-width"},r.a.createElement("div",{class:"logo-container"},r.a.createElement("div",{class:"logo"},"GrapesJS")),r.a.createElement("nav",{class:"menu"},r.a.createElement("div",{class:"menu-item"},"BUILDER"),r.a.createElement("div",{class:"menu-item"},"TEMPLATE"),r.a.createElement("div",{class:"menu-item"},"WEB")),r.a.createElement("div",{class:"clearfix"}),r.a.createElement("div",{class:"lead-title"},"Build your templates without coding"),r.a.createElement("div",{class:"sub-lead-title"},"All text blocks could be edited easily with double clicking on it. You can create new text blocks with the command from the left panel"),r.a.createElement("div",{class:"lead-btn"},"Hover me"))),r.a.createElement("section",{class:"flex-sect"},r.a.createElement("div",{class:"container-width"},r.a.createElement("div",{class:"flex-title"},"Flex is the new black"),r.a.createElement("div",{class:"flex-desc"},"With flexbox system you're able to build complex layouts easily and with free responsivity"),r.a.createElement("div",{class:"cards"},r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"card-title"},"Title one"),r.a.createElement("div",{class:"card-sub-title"},"Subtitle one"),r.a.createElement("div",{class:"card-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"))),r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header ch2"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"card-title"},"Title two"),r.a.createElement("div",{class:"card-sub-title"},"Subtitle two"),r.a.createElement("div",{class:"card-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"))),r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header ch3"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"card-title"},"Title three"),r.a.createElement("div",{class:"card-sub-title"},"Subtitle three"),r.a.createElement("div",{class:"card-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"))),r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header ch4"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"card-title"},"Title four"),r.a.createElement("div",{class:"card-sub-title"},"Subtitle four"),r.a.createElement("div",{class:"card-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"))),r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header ch5"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"card-title"},"Title five"),r.a.createElement("div",{class:"card-sub-title"},"Subtitle five"),r.a.createElement("div",{class:"card-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore"))),r.a.createElement("div",{class:"card"},r.a.createElement("div",{class:"card-header ch6"}),r.a.createElement("div",{class:"card-body"},r.a.createElement("div",{class:"card-title"},"Title six"),r.a.createElement("div",{class:"card-sub-title"},"Subtitle six"),r.a.createElement("div",{class:"card-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore")))))),r.a.createElement("section",{class:"am-sect"},r.a.createElement("div",{class:"container-width"},r.a.createElement("div",{class:"am-container"},r.a.createElement("img",{onmousedown:"return false",src:"./img/phone-app.png",class:"img-phone"}),r.a.createElement("div",{class:"am-content"},r.a.createElement("div",{class:"am-pre"},"ASSET MANAGER"),r.a.createElement("div",{class:"am-title"},"Manage your images with Asset Manager"),r.a.createElement("div",{class:"am-desc"},"You can create image blocks with the command from the left panel and edit them with double click"),r.a.createElement("div",{class:"am-post"},"Image uploading is not allowed in this demo"))))),r.a.createElement("section",{class:"blk-sect"},r.a.createElement("div",{class:"container-width"},r.a.createElement("div",{class:"blk-title"},"Blocks"),r.a.createElement("div",{class:"blk-desc"},"Each element in HTML page could be seen as a block. On the left panel you could find different kind of blocks that you can create, move and style"),r.a.createElement("div",{class:"price-cards"},r.a.createElement("div",{class:"price-card-cont"},r.a.createElement("div",{class:"price-card"},r.a.createElement("div",{class:"pc-title"},"Starter"),r.a.createElement("div",{class:"pc-desc"},"Some random list"),r.a.createElement("div",{class:"pc-feature odd-feat"},"+ Starter feature 1"),r.a.createElement("div",{class:"pc-feature"},"+ Starter feature 2"),r.a.createElement("div",{class:"pc-feature odd-feat"},"+ Starter feature 3"),r.a.createElement("div",{class:"pc-feature"},"+ Starter feature 4"),r.a.createElement("div",{class:"pc-amount odd-feat"},"$ 9,90/mo"))),r.a.createElement("div",{class:"price-card-cont"},r.a.createElement("div",{class:"price-card pc-regular"},r.a.createElement("div",{class:"pc-title"},"Regular"),r.a.createElement("div",{class:"pc-desc"},"Some random list"),r.a.createElement("div",{class:"pc-feature odd-feat"},"+ Regular feature 1"),r.a.createElement("div",{class:"pc-feature"},"+ Regular feature 2"),r.a.createElement("div",{class:"pc-feature odd-feat"},"+ Regular feature 3"),r.a.createElement("div",{class:"pc-feature"},"+ Regular feature 4"),r.a.createElement("div",{class:"pc-amount odd-feat"},"$ 19,90/mo"))),r.a.createElement("div",{class:"price-card-cont"},r.a.createElement("div",{class:"price-card pc-enterprise"},r.a.createElement("div",{class:"pc-title"},"Enterprise"),r.a.createElement("div",{class:"pc-desc"},"Some random list"),r.a.createElement("div",{class:"pc-feature odd-feat"},"+ Enterprise feature 1"),r.a.createElement("div",{class:"pc-feature"},"+ Enterprise feature 2"),r.a.createElement("div",{class:"pc-feature odd-feat"},"+ Enterprise feature 3"),r.a.createElement("div",{class:"pc-feature"},"+ Enterprise feature 4"),r.a.createElement("div",{class:"pc-amount odd-feat"},"$ 29,90/mo")))))),r.a.createElement("section",{class:"bdg-sect"},r.a.createElement("div",{class:"container-width"},r.a.createElement("h1",{class:"bdg-title"},"The team"),r.a.createElement("div",{class:"badges"},r.a.createElement("div",{class:"badge"},r.a.createElement("div",{class:"badge-header"}),r.a.createElement("img",{src:"img/team1.jpg",class:"badge-avatar"}),r.a.createElement("div",{class:"badge-body"},r.a.createElement("div",{class:"badge-name"},"Adam Smith"),r.a.createElement("div",{class:"badge-role"},"CEO"),r.a.createElement("div",{class:"badge-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit")),r.a.createElement("div",{class:"badge-foot"},r.a.createElement("span",{class:"badge-link"},"f"),r.a.createElement("span",{class:"badge-link"},"t"),r.a.createElement("span",{class:"badge-link"},"ln"))),r.a.createElement("div",{class:"badge"},r.a.createElement("div",{class:"badge-header"}),r.a.createElement("img",{src:"img/team2.jpg",class:"badge-avatar"}),r.a.createElement("div",{class:"badge-body"},r.a.createElement("div",{class:"badge-name"},"John Black"),r.a.createElement("div",{class:"badge-role"},"Software Engineer"),r.a.createElement("div",{class:"badge-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit")),r.a.createElement("div",{class:"badge-foot"},r.a.createElement("span",{class:"badge-link"},"f"),r.a.createElement("span",{class:"badge-link"},"t"),r.a.createElement("span",{class:"badge-link"},"ln"))),r.a.createElement("div",{class:"badge"},r.a.createElement("div",{class:"badge-header"}),r.a.createElement("img",{src:"img/team3.jpg",class:"badge-avatar"}),r.a.createElement("div",{class:"badge-body"},r.a.createElement("div",{class:"badge-name"},"Jessica White"),r.a.createElement("div",{class:"badge-role"},"Web Designer"),r.a.createElement("div",{class:"badge-desc"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore ipsum dolor sit")),r.a.createElement("div",{class:"badge-foot"},r.a.createElement("span",{class:"badge-link"},"f"),r.a.createElement("span",{class:"badge-link"},"t"),r.a.createElement("span",{class:"badge-link"},"ln")))))),r.a.createElement("footer",{class:"footer-under"},r.a.createElement("div",{class:"container-width"},r.a.createElement("div",{class:"footer-container"},r.a.createElement("div",{class:"foot-lists"},r.a.createElement("div",{class:"foot-list"},r.a.createElement("div",{class:"foot-list-title"},"About us"),r.a.createElement("div",{class:"foot-list-item"},"Contact"),r.a.createElement("div",{class:"foot-list-item"},"Events"),r.a.createElement("div",{class:"foot-list-item"},"Company"),r.a.createElement("div",{class:"foot-list-item"},"Jobs"),r.a.createElement("div",{class:"foot-list-item"},"Blog")),r.a.createElement("div",{class:"foot-list"},r.a.createElement("div",{class:"foot-list-title"},"Services"),r.a.createElement("div",{class:"foot-list-item"},"Education"),r.a.createElement("div",{class:"foot-list-item"},"Partner"),r.a.createElement("div",{class:"foot-list-item"},"Community"),r.a.createElement("div",{class:"foot-list-item"},"Forum"),r.a.createElement("div",{class:"foot-list-item"},"Download"),r.a.createElement("div",{class:"foot-list-item"},"Upgrade")),r.a.createElement("div",{class:"clearfix"})),r.a.createElement("div",{class:"form-sub"},r.a.createElement("div",{class:"foot-form-cont"},r.a.createElement("div",{class:"foot-form-title"},"Subscribe"),r.a.createElement("div",{class:"foot-form-desc"},"Subscribe to our newsletter to receive exclusive offers and the latest news"),r.a.createElement("input",{name:"name",placeholder:"Name",class:"sub-input"}),r.a.createElement("input",{name:"email",placeholder:"Email",class:"sub-input"}),r.a.createElement("button",{type:"button",class:"sub-btn"},"Submit"))))),r.a.createElement("div",{class:"copyright"},r.a.createElement("div",{class:"container-width"},r.a.createElement("div",{class:"made-with"},"made with GrapesJS"),r.a.createElement("div",{class:"foot-social-btns"},"facebook twitter linkedin mail"),r.a.createElement("div",{class:"clearfix"})))))},data:c})},s}(s.PureComponent);t.a=m},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["reactJs"],tags:["reactJs"]}}},{node:{frontmatter:{categories:["javascript","reactJs"],tags:["javascript"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["immutable","javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["immutable","javascript"],tags:["immutable"]}}},{node:{frontmatter:{categories:["momentJs","javascript"],tags:["momentJs"]}}},{node:{frontmatter:{categories:["nodeJS"],tags:["nodeJS"]}}},{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["reactjs","webpack"],tags:["webpack"]}}},{node:{frontmatter:{categories:["reactjs","redux"],tags:["redux"]}}},{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var c=a(0),s=a.n(c),r=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?s.a.createElement(r.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-templates-categories-js-f10e66400a56d39e0fdd.js.map