(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{195:function(e,t,a){"use strict";a.r(t),a.d(t,"query",function(){return i});var r=a(0),n=a.n(r),c=a(331),o=a(201),s=a(197);a(326);t.default=function(e){var t=e.data;return n.a.createElement(o.a,null,n.a.createElement("h1",{style:{fontSize:"2em"}},"New Post"),t.allMarkdownRemark.edges.map(function(e,t){var a=e.node;return n.a.createElement("div",{key:t},n.a.createElement("h3",null,n.a.createElement(s.a,{to:a.fields.slug},a.frontmatter.title)),n.a.createElement("div",{style:{display:"grid"}},n.a.createElement("span",{style:{color:"#BBB",fontSize:"14px",textAlign:"right"}}," Created date: ",a.frontmatter.date),n.a.createElement("div",{className:"tag-cus"},a.frontmatter.tags.map(function(e,t){return n.a.createElement(c.a,{color:"magenta"}," ",e)}))),n.a.createElement("p",null,a.excerpt))}))};var i="3075037192"},196:function(e,t,a){var r;e.exports=(r=a(203))&&r.default||r},197:function(e,t,a){"use strict";a.d(t,"b",function(){return l});var r=a(0),n=a.n(r),c=a(66),o=a.n(c);a.d(t,"a",function(){return o.a});a(196),a(9).default.enqueue;var s=n.a.createContext({});function i(e){var t=e.staticQueryData,a=e.data,r=e.query,c=e.render,o=a?a.data:t[r]&&t[r].data;return n.a.createElement(n.a.Fragment,null,o&&c(o),!o&&n.a.createElement("div",null,"Loading (StaticQuery)"))}var l=function(e){var t=e.data,a=e.query,r=e.render,c=e.children;return n.a.createElement(s.Consumer,null,function(e){return n.a.createElement(i,{data:t,query:a,render:r||c,staticQueryData:e})})}},201:function(e,t,a){"use strict";var r=a(202),n=a(0),c=a.n(n),o=a(197),s=a(332),i=a(263),l=a(330);a(216),a(217),a(218);var u=s.a.Header,d=s.a.Content,m=s.a.Sider,g=c.a.createElement(i.a,{type:"loading",style:{fontSize:24},spin:!0}),f=function(e){var t,a;function n(t){var a;return(a=e.call(this,t)||this).state={hidden:!0},a}a=e,(t=n).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a;var i=n.prototype;return i.componentDidMount=function(){var e=this;setTimeout(function(){e.setState({hidden:!1})},700)},i.render=function(){var e=this.props.children;return this.state.hidden?c.a.createElement("div",{className:"center-hello"},c.a.createElement(l.a,{indicator:g,tip:"Tai Pham"})):c.a.createElement(o.b,{query:"61684770",render:function(t){return c.a.createElement(s.a,{style:{fontSize:20,background:"rgb(181, 2, 93)"}},c.a.createElement(u,{style:{background:"none"}},c.a.createElement("div",{className:"logo"})),c.a.createElement(s.a,null,c.a.createElement(m,{className:"sider-cus"}),c.a.createElement(s.a,{style:{padding:"10px 0 40px 0"}},c.a.createElement(d,{className:"content-cus"},e)),c.a.createElement(m,{className:"sider-cus"})))},data:r})},n}(n.PureComponent);t.a=f},202:function(e){e.exports={data:{site:{siteMetadata:{title:"Gatsby Blog Tutorial Demo"}},topics:{edges:[{node:{frontmatter:{categories:["reactjs","webpack"],tags:["webpack"]}}},{node:{frontmatter:{categories:["reactjs","redux"],tags:["redux"]}}},{node:{frontmatter:{categories:["reactjs"],tags:["reactjs"]}}},{node:{frontmatter:{categories:["javascript"],tags:["javascript"]}}},{node:{frontmatter:{categories:["sequelize"],tags:["back end","node js","sequelize"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting"]}}},{node:{frontmatter:{categories:["cat2"],tags:["egg","wiki"]}}},{node:{frontmatter:{categories:["cat1"],tags:["greeting","egg"]}}}]}}}},203:function(e,t,a){"use strict";a.r(t);a(23);var r=a(0),n=a.n(r),c=a(95);t.default=function(e){var t=e.location,a=e.pageResources;return a?n.a.createElement(c.a,Object.assign({location:t,pageResources:a},a.json)):null}}}]);
//# sourceMappingURL=component---src-pages-index-js-f0486afe4a23781854c1.js.map