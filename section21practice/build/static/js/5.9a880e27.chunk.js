(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[5],{37:function(e,t,c){"use strict";var s=c(8),n=c(38),i=c.n(n),r=c(1);t.a=function(){return Object(r.jsxs)("div",{className:i.a.noquotes,children:[Object(r.jsx)("p",{children:"No quotes found!"}),Object(r.jsx)(s.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})}},38:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},51:function(e,t,c){e.exports={item:"QuoteItem_item__2dOvb"}},52:function(e,t,c){e.exports={list:"QuoteList_list__3pzcl",sorting:"QuoteList_sorting__rL6H1"}},56:function(e,t,c){"use strict";c.r(t);var s=c(0),n=c(37),i=c(2),r=c(8),o=c(51),a=c.n(o),u=c(1),d=function(e){return Object(u.jsxs)("li",{className:a.a.item,children:[Object(u.jsxs)("figure",{children:[Object(u.jsx)("blockquote",{children:Object(u.jsx)("p",{children:e.text})}),Object(u.jsx)("figcaption",{children:e.author})]}),Object(u.jsx)(r.b,{className:"btn",to:"/quotes/".concat(e.id),children:"View Fullscreen"})]})},j=c(52),l=c.n(j),b=function(e){var t,c,n=Object(i.h)(),r=Object(i.i)(),o=(Object(i.k)(),"asc"===new URLSearchParams(r.search).get("sort")),a=(t=e.quotes,c=o,t.sort((function(e,t){return c?e.id>t.id?1:-1:e.id<t.id?1:-1})));return Object(u.jsxs)(s.Fragment,{children:[Object(u.jsx)("div",{className:l.a.sorting,children:Object(u.jsxs)("button",{onClick:function(){n.push({pathname:r.pathname,search:"sort=".concat(o?"desc":"asc")})},children:["Sort ",o?"Descending":"Ascending"]})}),Object(u.jsx)("ul",{className:l.a.list,children:a.map((function(e){return Object(u.jsx)(d,{id:e.id,author:e.author,text:e.text},e.id)}))})]})},h=c(14),x=c(35),O=c(36);t.default=function(){var e=Object(x.a)(O.d,!0),t=e.sendRequest,c=e.status,i=e.data,r=e.error;return Object(s.useEffect)((function(){t()}),[t]),"pending"===c?Object(u.jsx)("div",{className:"centered",children:Object(u.jsx)(h.a,{})}):r?Object(u.jsx)("div",{className:"centered focused",children:Object(u.jsxs)("p",{children:[" ",r]})}):"completed"!==c||i&&0!==i.length?Object(u.jsx)(u.Fragment,{children:Object(u.jsx)(b,{quotes:i})}):Object(u.jsx)(n.a,{})}}}]);
//# sourceMappingURL=5.9a880e27.chunk.js.map