(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{194:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return s});a(136),a(137);var r=a(0),n=a.n(r),o=a(201),c=a(197);t.default=function(e){var t=e.data,a=e.pageContext.tag,r=t.allMarkdownRemark.edges.filter(function(e){return e.node.frontmatter.tags.includes(a)});return n.a.createElement(o.a,null,n.a.createElement("h1",null,"Thẻ ",a),r.map(function(e,t){var a=e.node;return n.a.createElement("div",{key:t},n.a.createElement("h3",null,n.a.createElement(c.a,{to:a.fields.slug},a.frontmatter.title)),n.a.createElement("span",{style:{color:"#BBB"}},"— ",a.frontmatter.date),n.a.createElement("p",null,a.excerpt))}))};var s="3075037192"},196:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},197:function(e,t,a){"use strict";a.d(t,"b",function(){return u});var r=a(0),n=a.n(r),o=a(66),c=a.n(o);a.d(t,"a",function(){return c.a});a(196),a(9).default.enqueue;var s=n.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,r=e.query,o=e.render,c=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,c&&o(c),!c&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var u=function(e){var t=e.data,a=e.query,r=e.render,o=e.children;return n.a.createElement(s.Consumer,null,function(e){return n.a.createElement(i,{data:t,query:a,render:r||o,staticQueryData:e})})}},201:function(e,t,a){"use strict";var r=a(202),n=a(0),o=a.n(n),c=a(197),s=a(332),i=a(263),u=a(330);a(216),a(217),a(218);var l=s.a.Header,d=s.a.Content,m=s.a.Sider,g=o.a.createElement(i.a,{type:"loading",style:{fontSize:24},spin:!0}),f=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},700)},i.render=function(){var e=this.props.children;return this.state.hidden?o.a.createElement("div",{className:"center-hello"},o.a.createElement(u.a,{indicator:g,tip:"Tai Pham"})):o.a.createElement(c.b,{query:"61684770",render:function(t){return o.a.createElement(s.a,{style:{fontSize:20,background:"rgb(181, 2, 93)"}},o.a.createElement(l,{style:{background:"none"}},o.a.createElement("div",{className:"logo"})),o.a.createElement(s.a,null,o.a.createElement(m,{className:"sider-cus"}),o.a.createElement(s.a,{style:{padding:"10px 0 40px 0"}},o.a.createElement(d,{className:"content-cus"},e)),o.a.createElement(m,{className:"sider-cus"})))},data:r})},n}(n.PureComponent);t.a=f},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["reactjs","webpack"],tags:["webpack"]}}},{node:{frontmatter:{categories:["reactjs","redux"],tags:["redux"]}}},{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),o=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(o.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-templates-tags-js-cd19dadb2283b41d93b7.js.map