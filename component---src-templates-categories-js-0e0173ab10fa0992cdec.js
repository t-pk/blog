(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{193:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});a(135),a(136);var n=a(0),r=a.n(n),o=a(201),c=a(197);t.default=function(e){var t=e.data,a=e.pageContext.category,n=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.categories.includes(a)});return r.a.createElement(o.a,null,r.a.createElement("h1",null,"Chuyên mục ",a),n.map(function(e,t){var a=e.node;return r.a.createElement("div",{key:t},r.a.createElement("h3",null,r.a.createElement(c.a,{to:a.fields.slug},a.frontmatter.title),r.a.createElement("span",{style:{color:"#BBB"}},"— ",a.frontmatter.date)),r.a.createElement("p",null,a.excerpt))}))};var i="3334298382"},196:function(e,t,a){var n;e.exports=(n=a(203))&&n.default||n},197:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var n=a(0),r=a.n(n),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(196),a(9).default.enqueue;var i=r.a.createContext({});function u(e){var t=e.staticQueryData,a=e.data,n=e.query,o=e.render,c=a?a.data:t[n]&&t[n].data;return r.a.createElement(r.a.Fragment,null,c&&o(c),!c&&r.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,n=e.render,o=e.children;return r.a.createElement(i.Consumer,null,function(e){return r.a.createElement(u,{data:t,query:a,render:n||o,staticQueryData:e})})}},201:function(e,t,a){"use strict";var n=a(202),r=a(0),o=a.n(r),c=(a(214),a(215),a(197)),i=a(323),u=a(324);var l=i.a.Header,d=i.a.Content,s=i.a.Sider,f=function(e){var t,a;function r(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var f=r.prototype;return f.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},100)},f.render=function(){var e=this.props.children;return this.state.hidden?o.a.createElement("div",{className:"center-hello"},o.a.createElement(u.a,{tip:"loading..."})):o.a.createElement(c.b,{query:"61684770",render:function(t){return o.a.createElement(i.a,{style:{fontSize:20,backgroundImage:"linear-gradient(to top, #a18cd1 0%, #fbc2eb 100%)"}},o.a.createElement(l,{style:{background:"none"}},o.a.createElement("div",{className:"logo"})),o.a.createElement(i.a,null,o.a.createElement(s,{width:300,style:{background:"#fff",margin:10,borderRadius:10}}),o.a.createElement(i.a,{style:{padding:"10px 0 10px 0",borderRadius:10}},o.a.createElement(d,{style:{background:"#fff",padding:60,margin:0,minHeight:"100vh",boxShadow:"rgba(176, 168, 168, 0.75) 0px 0px -1px -1px",borderRadius:10}},e)),o.a.createElement(s,{width:300,style:{background:"#fff",margin:10,borderRadius:10}})))},data:n})},r}(o.a.Component);t.a=f},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var n=a(0),r=a.n(n),o=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?r.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-templates-categories-js-0e0173ab10fa0992cdec.js.map