(this["webpackJsonpreact-complete-guide"]=this["webpackJsonpreact-complete-guide"]||[]).push([[4],{37:function(e,t,c){"use strict";var n=c(8),s=c(38),o=c.n(s),a=c(1);t.a=function(){return Object(a.jsxs)("div",{className:o.a.noquotes,children:[Object(a.jsx)("p",{children:"No quotes found!"}),Object(a.jsx)(n.b,{className:"btn",to:"/new-quote",children:"Add a Quote"})]})}},38:function(e,t,c){e.exports={noquotes:"NoQuotesFound_noquotes__3DIYb"}},46:function(e,t,c){e.exports={comments:"Comments_comments__iZX-v"}},47:function(e,t,c){e.exports={item:"CommentItem_item__24mbD"}},48:function(e,t,c){e.exports={comments:"CommentsList_comments__valp0"}},49:function(e,t,c){e.exports={form:"NewCommentForm_form__2Te8b",loading:"NewCommentForm_loading__2veC2",control:"NewCommentForm_control__3NVeP",actions:"NewCommentForm_actions__2fwWP"}},50:function(e,t,c){e.exports={quote:"HighlightedQuote_quote__nE9T6"}},54:function(e,t,c){"use strict";c.r(t);var n=c(0),s=c(2),o=c(8),a=c(39),r=c(35),m=c(36),j=c(14),i=c(46),d=c.n(i),u=c(47),l=c.n(u),b=c(1),x=function(e){return Object(b.jsx)("li",{className:l.a.item,children:Object(b.jsx)("p",{children:e.text})})},O=c(48),h=c.n(O),f=function(e){return console.log(e.comments),Object(b.jsx)("ul",{className:h.a.comments,children:e.comments.map((function(e){return Object(b.jsx)(x,{text:e.text},e.id)}))})},p=c(49),N=c.n(p),_=function(e){var t=Object(n.useRef)(),c=Object(r.a)(m.a),s=c.sendRequest,o=c.status,a=c.error,i=e.onAddedComment,d=e.quoteId;Object(n.useEffect)((function(){"completed"!==o||a||i()}),[o,a,i]);var u=function(e){e.preventDefault();var c=t.current.value;s({commentData:c,quoteId:d})};return Object(b.jsxs)("form",{className:N.a.form,onSubmit:u,children:["pending"===o&&Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})}),Object(b.jsxs)("div",{className:N.a.control,onSubmit:u,children:[Object(b.jsx)("label",{htmlFor:"comment",children:"Your Comment"}),Object(b.jsx)("textarea",{id:"comment",rows:"5",ref:t})]}),Object(b.jsx)("div",{className:N.a.actions,children:Object(b.jsx)("button",{className:"btn",children:"Add Comment"})})]})},v=function(){var e=Object(n.useState)(!1),t=Object(a.a)(e,2),c=t[0],o=t[1],i=Object(s.j)().quoteId,u=Object(r.a)(m.c),l=u.sendRequest,x=u.data,O=u.status;u.error;Object(n.useEffect)((function(){l(i)}),[i,l]);var h,p=Object(n.useCallback)((function(){l(i)}),[]);return"pending"===O&&(h=Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})})),"completed"===O&&x&&x.length>0&&(h=Object(b.jsx)(f,{comments:x})),"completed"!==O||x&&0!==x.length||(h=Object(b.jsx)("p",{className:"centered",children:" Not comments were added yet"})),Object(b.jsxs)("section",{className:d.a.comments,children:[Object(b.jsx)("h2",{children:"User Comments"}),!c&&Object(b.jsx)("button",{className:"btn",onClick:function(){o(!0)},children:"Add a Comment"}),c&&Object(b.jsx)(_,{onAddedComment:p,quoteId:i}),h]})},q=c(50),C=c.n(q),g=function(e){return Object(b.jsxs)("figure",{className:C.a.quote,children:[Object(b.jsx)("p",{children:e.text}),Object(b.jsx)("figcaption",{children:e.author})]})};c(37),t.default=function(){var e=Object(s.j)(),t=Object(s.k)(),c=e.quoteId,a=Object(r.a)(m.e,!0),i=a.sendRequest,d=a.status,u=a.data,l=a.error;return Object(n.useEffect)((function(){i(c)}),[i,c]),"pending"===d?Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(j.a,{})}):l?Object(b.jsx)("div",{className:"centered focused",children:Object(b.jsxs)("p",{children:[" ",l]})}):u.text?Object(b.jsxs)(b.Fragment,{children:[Object(b.jsx)(g,{text:u.text,author:u.author}),Object(b.jsx)(s.c,{path:"".concat(t.path),exact:!0,children:Object(b.jsx)("div",{className:"centered",children:Object(b.jsx)(o.b,{className:"btn--flat",to:"".concat(t.url,"/comments")})})}),Object(b.jsx)(s.c,{path:"".concat(t.path,"/comments"),children:Object(b.jsx)(v,{})})]}):Object(b.jsx)("p",{children:"No quote detail founded"})}}}]);
//# sourceMappingURL=4.b2d0d654.chunk.js.map