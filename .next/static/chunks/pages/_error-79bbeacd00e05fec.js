(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[820],{89894:function(e,t,n){"use strict";var r=n(33227),o=n(88361),l=n(85971),a=n(52715),i=n(91193);Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var u=n(92648).Z,c=u(n(67294)),s=u(n(16505)),d={400:"Bad Request",404:"This page could not be found",405:"Method Not Allowed",500:"Internal Server Error"};function f(e){var t=e.res,n=e.err;return{statusCode:t&&t.statusCode?t.statusCode:n?n.statusCode:404}}var p={error:{fontFamily:'-apple-system, BlinkMacSystemFont, Roboto, "Segoe UI", "Fira Sans", Avenir, "Helvetica Neue", "Lucida Grande", sans-serif',height:"100vh",textAlign:"center",display:"flex",flexDirection:"column",alignItems:"center",justifyContent:"center"},desc:{display:"inline-block",textAlign:"left",lineHeight:"49px",height:"49px",verticalAlign:"middle"},h1:{display:"inline-block",margin:0,marginRight:"20px",padding:"0 23px 0 0",fontSize:"24px",fontWeight:500,verticalAlign:"top",lineHeight:"49px"},h2:{fontSize:"14px",fontWeight:"normal",lineHeight:"49px",margin:0,padding:0}},h=function(e){l(u,e);var t,n=(t=function(){if("undefined"==typeof Reflect||!Reflect.construct||Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch(e){return!1}}(),function(){var e,n=i(u);if(t){var r=i(this).constructor;e=Reflect.construct(n,arguments,r)}else e=n.apply(this,arguments);return a(this,e)});function u(){return r(this,u),n.apply(this,arguments)}return o(u,[{key:"render",value:function(){var e=this.props,t=e.statusCode,n=e.withDarkMode,r=this.props.title||d[t]||"An unexpected error has occurred";return c.default.createElement("div",{style:p.error},c.default.createElement(s.default,null,c.default.createElement("title",null,t?"".concat(t,": ").concat(r):"Application error: a client-side exception has occurred")),c.default.createElement("div",null,c.default.createElement("style",{dangerouslySetInnerHTML:{__html:"\n                body { margin: 0; color: #000; background: #fff; }\n                .next-error-h1 {\n                  border-right: 1px solid rgba(0, 0, 0, .3);\n                }\n\n                ".concat(void 0===n||n?"@media (prefers-color-scheme: dark) {\n                  body { color: #fff; background: #000; }\n                  .next-error-h1 {\n                    border-right: 1px solid rgba(255, 255, 255, .3);\n                  }\n                }":"")}}),t?c.default.createElement("h1",{className:"next-error-h1",style:p.h1},t):null,c.default.createElement("div",{style:p.desc},c.default.createElement("h2",{style:p.h2},this.props.title||t?r:c.default.createElement(c.default.Fragment,null,"Application error: a client-side exception has occurred (see the browser console for more information)"),"."))))}}]),u}(c.default.Component);h.displayName="ErrorPage",h.getInitialProps=f,h.origGetInitialProps=f,t.default=h,("function"==typeof t.default||"object"==typeof t.default&&null!==t.default)&&void 0===t.default.__esModule&&(Object.defineProperty(t.default,"__esModule",{value:!0}),Object.assign(t.default,t),e.exports=t.default)},26724:function(e,t,n){"use strict";n.r(t);var r=n(12918),o=n.n(r),l=n(85893);t.default=function(e){var t=e.statusCode;return(0,l.jsx)(o(),{statusCode:t})}},5353:function(e,t,n){(window.__NEXT_P=window.__NEXT_P||[]).push(["/_error",function(){return n(26724)}])},12918:function(e,t,n){e.exports=n(89894)}},function(e){e.O(0,[774,888,179],function(){return e(e.s=5353)}),_N_E=e.O()}]);