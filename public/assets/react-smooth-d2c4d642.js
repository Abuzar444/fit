import{r as E,R as pt}from"./react-c08bfecb.js";import{P as c}from"./prop-types-c780010c.js";import{d as bt}from"./fast-equals-a0711cdd.js";function Y(t){var e=arguments.length>1&&arguments[1]!==void 0?arguments[1]:0,n=-1,i=function r(o){n<0&&(n=o),o-n>e?(t(o),n=-1):requestAnimationFrame(r)};requestAnimationFrame(i)}function z(t){"@babel/helpers - typeof";return z=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},z(t)}function vt(t){return St(t)||gt(t)||ht(t)||dt()}function dt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ht(t,e){if(t){if(typeof t=="string")return X(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(t,e)}}function X(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function gt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function St(t){if(Array.isArray(t))return t}function At(){var t={},e=function(){return null},n=!1,i=function r(o){if(!n){if(Array.isArray(o)){if(!o.length)return;var a=o,f=vt(a),u=f[0],l=f.slice(1);if(typeof u=="number"){Y(r.bind(null,l),u);return}r(u),Y(r.bind(null,l));return}z(o)==="object"&&(t=o,e(t)),typeof o=="function"&&o()}};return{stop:function(){n=!0},start:function(o){n=!1,i(o)},subscribe:function(o){return e=o,function(){e=function(){return null}}}}}function C(t){"@babel/helpers - typeof";return C=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},C(t)}function Z(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function T(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?Z(Object(n),!0).forEach(function(i){N(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Z(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function N(t,e,n){return e=Ot(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function Ot(t){var e=jt(t,"string");return C(e)==="symbol"?e:String(e)}function jt(t,e){if(C(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(C(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}var wt=["Webkit","Moz","O","ms"],Pt=["-webkit-","-moz-","-o-","-ms-"],Tt=["transform","transformOrigin","transition"],_t=function(e,n){return[Object.keys(e),Object.keys(n)].reduce(function(i,r){return i.filter(function(o){return r.includes(o)})})},Et=function(e){return e},$t=function(e){return e.replace(/([A-Z])/g,function(n){return"-".concat(n.toLowerCase())})},It=function(e,n){if(Tt.indexOf(e)===-1)return N({},e,Number.isNaN(n)?0:n);var i=e==="transition",r=e.replace(/(\w)/,function(a){return a.toUpperCase()}),o=n;return wt.reduce(function(a,f,u){return i&&(o=n.replace(/(transform|transform-origin)/gim,"".concat(Pt[u],"$1"))),T(T({},a),{},N({},f+r,o))},{})},I=function(e,n){return Object.keys(n).reduce(function(i,r){return T(T({},i),{},N({},r,e(r,n[r])))},{})},Ct=function(e){return Object.keys(e).reduce(function(n,i){return T(T({},n),It(i,n[i]))},e)},G=function(e,n,i){return e.map(function(r){return"".concat($t(r)," ").concat(n,"ms ").concat(i)}).join(",")};function Rt(t,e){return Dt(t)||Bt(t,e)||ot(t,e)||Nt()}function Nt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Bt(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,f=[],u=!0,l=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(i=o.call(n)).done)&&(f.push(i.value),f.length!==e);u=!0);}catch(s){l=!0,r=s}finally{try{if(!u&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return f}}function Dt(t){if(Array.isArray(t))return t}function Ft(t){return Mt(t)||zt(t)||ot(t)||Ut()}function Ut(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ot(t,e){if(t){if(typeof t=="string")return M(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return M(t,e)}}function zt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Mt(t){if(Array.isArray(t))return M(t)}function M(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}var B=1e-4,at=function(e,n){return[0,3*e,3*n-6*e,3*e-3*n+1]},ut=function(e,n){return e.map(function(i,r){return i*Math.pow(n,r)}).reduce(function(i,r){return i+r})},Q=function(e,n){return function(i){var r=at(e,n);return ut(r,i)}},kt=function(e,n){return function(i){var r=at(e,n),o=[].concat(Ft(r.map(function(a,f){return a*f}).slice(1)),[0]);return ut(o,i)}},tt=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=n[0],o=n[1],a=n[2],f=n[3];if(n.length===1)switch(n[0]){case"linear":r=0,o=0,a=1,f=1;break;case"ease":r=.25,o=.1,a=.25,f=1;break;case"ease-in":r=.42,o=0,a=1,f=1;break;case"ease-out":r=.42,o=0,a=.58,f=1;break;case"ease-in-out":r=0,o=0,a=.58,f=1;break;default:{var u=n[0].split("(");if(u[0]==="cubic-bezier"&&u[1].split(")")[0].split(",").length===4){var l=u[1].split(")")[0].split(",").map(function(y){return parseFloat(y)}),s=Rt(l,4);r=s[0],o=s[1],a=s[2],f=s[3]}}}var p=Q(r,a),b=Q(o,f),d=kt(r,a),S=function(m){return m>1?1:m<0?0:m},v=function(m){for(var h=m>1?1:m,A=h,j=0;j<8;++j){var w=p(A)-h,P=d(A);if(Math.abs(w-h)<B||P<B)return b(A);A=S(A-w/P)}return b(A)};return v.isStepper=!1,v},Wt=function(){var e=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},n=e.stiff,i=n===void 0?100:n,r=e.damping,o=r===void 0?8:r,a=e.dt,f=a===void 0?17:a,u=function(s,p,b){var d=-(s-p)*i,S=b*o,v=b+(d-S)*f/1e3,y=b*f/1e3+s;return Math.abs(y-p)<B&&Math.abs(v)<B?[p,0]:[y,v]};return u.isStepper=!0,u.dt=f,u},xt=function(){for(var e=arguments.length,n=new Array(e),i=0;i<e;i++)n[i]=arguments[i];var r=n[0];if(typeof r=="string")switch(r){case"ease":case"ease-in-out":case"ease-out":case"ease-in":case"linear":return tt(r);case"spring":return Wt();default:if(r.split("(")[0]==="cubic-bezier")return tt(r)}return typeof r=="function"?r:null};function R(t){"@babel/helpers - typeof";return R=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},R(t)}function et(t){return Lt(t)||Kt(t)||ft(t)||Jt()}function Jt(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Kt(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function Lt(t){if(Array.isArray(t))return W(t)}function nt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function g(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?nt(Object(n),!0).forEach(function(i){k(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):nt(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function k(t,e,n){return e=qt(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function qt(t){var e=Ht(t,"string");return R(e)==="symbol"?e:String(e)}function Ht(t,e){if(R(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(R(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function Vt(t,e){return Zt(t)||Xt(t,e)||ft(t,e)||Yt()}function Yt(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ft(t,e){if(t){if(typeof t=="string")return W(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return W(t,e)}}function W(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function Xt(t,e){var n=t==null?null:typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(n!=null){var i,r,o,a,f=[],u=!0,l=!1;try{if(o=(n=n.call(t)).next,e===0){if(Object(n)!==n)return;u=!1}else for(;!(u=(i=o.call(n)).done)&&(f.push(i.value),f.length!==e);u=!0);}catch(s){l=!0,r=s}finally{try{if(!u&&n.return!=null&&(a=n.return(),Object(a)!==a))return}finally{if(l)throw r}}return f}}function Zt(t){if(Array.isArray(t))return t}var D=function(e,n,i){return e+(n-e)*i},x=function(e){var n=e.from,i=e.to;return n!==i},Gt=function t(e,n,i){var r=I(function(o,a){if(x(a)){var f=e(a.from,a.to,a.velocity),u=Vt(f,2),l=u[0],s=u[1];return g(g({},a),{},{from:l,velocity:s})}return a},n);return i<1?I(function(o,a){return x(a)?g(g({},a),{},{velocity:D(a.velocity,r[o].velocity,i),from:D(a.from,r[o].from,i)}):a},n):t(e,r,i-1)};const Qt=function(t,e,n,i,r){var o=_t(t,e),a=o.reduce(function(y,m){return g(g({},y),{},k({},m,[t[m],e[m]]))},{}),f=o.reduce(function(y,m){return g(g({},y),{},k({},m,{from:t[m],velocity:0,to:e[m]}))},{}),u=-1,l,s,p=function(){return null},b=function(){return I(function(m,h){return h.from},f)},d=function(){return!Object.values(f).filter(x).length},S=function(m){l||(l=m);var h=m-l,A=h/n.dt;f=Gt(n,f,A),r(g(g(g({},t),e),b())),l=m,d()||(u=requestAnimationFrame(p))},v=function(m){s||(s=m);var h=(m-s)/i,A=I(function(w,P){return D.apply(void 0,et(P).concat([n(h)]))},a);if(r(g(g(g({},t),e),A)),h<1)u=requestAnimationFrame(p);else{var j=I(function(w,P){return D.apply(void 0,et(P).concat([n(1)]))},a);r(g(g(g({},t),e),j))}};return p=n.isStepper?S:v,function(){return requestAnimationFrame(p),function(){cancelAnimationFrame(u)}}};function _(t){"@babel/helpers - typeof";return _=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},_(t)}var te=["children","begin","duration","attributeName","easing","isActive","steps","from","to","canBegin","onAnimationEnd","shouldReAnimate","onAnimationReStart"];function ee(t,e){if(t==null)return{};var n=ne(t,e),i,r;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(r=0;r<o.length;r++)i=o[r],!(e.indexOf(i)>=0)&&Object.prototype.propertyIsEnumerable.call(t,i)&&(n[i]=t[i])}return n}function ne(t,e){if(t==null)return{};var n={},i=Object.keys(t),r,o;for(o=0;o<i.length;o++)r=i[o],!(e.indexOf(r)>=0)&&(n[r]=t[r]);return n}function U(t){return ae(t)||oe(t)||ie(t)||re()}function re(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function ie(t,e){if(t){if(typeof t=="string")return J(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);if(n==="Object"&&t.constructor&&(n=t.constructor.name),n==="Map"||n==="Set")return Array.from(t);if(n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return J(t,e)}}function oe(t){if(typeof Symbol<"u"&&t[Symbol.iterator]!=null||t["@@iterator"]!=null)return Array.from(t)}function ae(t){if(Array.isArray(t))return J(t)}function J(t,e){(e==null||e>t.length)&&(e=t.length);for(var n=0,i=new Array(e);n<e;n++)i[n]=t[n];return i}function rt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter(function(r){return Object.getOwnPropertyDescriptor(t,r).enumerable})),n.push.apply(n,i)}return n}function O(t){for(var e=1;e<arguments.length;e++){var n=arguments[e]!=null?arguments[e]:{};e%2?rt(Object(n),!0).forEach(function(i){$(t,i,n[i])}):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):rt(Object(n)).forEach(function(i){Object.defineProperty(t,i,Object.getOwnPropertyDescriptor(n,i))})}return t}function $(t,e,n){return e=ct(e),e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function ue(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function it(t,e){for(var n=0;n<e.length;n++){var i=e[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(t,ct(i.key),i)}}function fe(t,e,n){return e&&it(t.prototype,e),n&&it(t,n),Object.defineProperty(t,"prototype",{writable:!1}),t}function ct(t){var e=ce(t,"string");return _(e)==="symbol"?e:String(e)}function ce(t,e){if(_(t)!=="object"||t===null)return t;var n=t[Symbol.toPrimitive];if(n!==void 0){var i=n.call(t,e||"default");if(_(i)!=="object")return i;throw new TypeError("@@toPrimitive must return a primitive value.")}return(e==="string"?String:Number)(t)}function le(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&K(t,e)}function K(t,e){return K=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(i,r){return i.__proto__=r,i},K(t,e)}function se(t){var e=ye();return function(){var i=F(t),r;if(e){var o=F(this).constructor;r=Reflect.construct(i,arguments,o)}else r=i.apply(this,arguments);return L(this,r)}}function L(t,e){if(e&&(_(e)==="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return q(t)}function q(t){if(t===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ye(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function F(t){return F=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},F(t)}var H=function(t){le(n,t);var e=se(n);function n(i,r){var o;ue(this,n),o=e.call(this,i,r);var a=o.props,f=a.isActive,u=a.attributeName,l=a.from,s=a.to,p=a.steps,b=a.children,d=a.duration;if(o.handleStyleChange=o.handleStyleChange.bind(q(o)),o.changeStyle=o.changeStyle.bind(q(o)),!f||d<=0)return o.state={style:{}},typeof b=="function"&&(o.state={style:s}),L(o);if(p&&p.length)o.state={style:p[0].style};else if(l){if(typeof b=="function")return o.state={style:l},L(o);o.state={style:u?$({},u,l):l}}else o.state={style:{}};return o}return fe(n,[{key:"componentDidMount",value:function(){var r=this.props,o=r.isActive,a=r.canBegin;this.mounted=!0,!(!o||!a)&&this.runAnimation(this.props)}},{key:"componentDidUpdate",value:function(r){var o=this.props,a=o.isActive,f=o.canBegin,u=o.attributeName,l=o.shouldReAnimate,s=o.to,p=o.from,b=this.state.style;if(f){if(!a){var d={style:u?$({},u,s):s};this.state&&b&&(u&&b[u]!==s||!u&&b!==s)&&this.setState(d);return}if(!(bt(r.to,s)&&r.canBegin&&r.isActive)){var S=!r.canBegin||!r.isActive;this.manager&&this.manager.stop(),this.stopJSAnimation&&this.stopJSAnimation();var v=S||l?p:r.to;if(this.state&&b){var y={style:u?$({},u,v):v};(u&&[u]!==v||!u&&b!==v)&&this.setState(y)}this.runAnimation(O(O({},this.props),{},{from:v,begin:0}))}}}},{key:"componentWillUnmount",value:function(){this.mounted=!1;var r=this.props.onAnimationEnd;this.unSubscribe&&this.unSubscribe(),this.manager&&(this.manager.stop(),this.manager=null),this.stopJSAnimation&&this.stopJSAnimation(),r&&r()}},{key:"handleStyleChange",value:function(r){this.changeStyle(r)}},{key:"changeStyle",value:function(r){this.mounted&&this.setState({style:r})}},{key:"runJSAnimation",value:function(r){var o=this,a=r.from,f=r.to,u=r.duration,l=r.easing,s=r.begin,p=r.onAnimationEnd,b=r.onAnimationStart,d=Qt(a,f,xt(l),u,this.changeStyle),S=function(){o.stopJSAnimation=d()};this.manager.start([b,s,S,u,p])}},{key:"runStepAnimation",value:function(r){var o=this,a=r.steps,f=r.begin,u=r.onAnimationStart,l=a[0],s=l.style,p=l.duration,b=p===void 0?0:p,d=function(v,y,m){if(m===0)return v;var h=y.duration,A=y.easing,j=A===void 0?"ease":A,w=y.style,P=y.properties,lt=y.onAnimationEnd,V=m>0?a[m-1]:y,st=P||Object.keys(w);if(typeof j=="function"||j==="spring")return[].concat(U(v),[o.runJSAnimation.bind(o,{from:V.style,to:w,duration:h,easing:j}),h]);var yt=G(st,h,j),mt=O(O(O({},V.style),w),{},{transition:yt});return[].concat(U(v),[mt,h,lt]).filter(Et)};return this.manager.start([u].concat(U(a.reduce(d,[s,Math.max(b,f)])),[r.onAnimationEnd]))}},{key:"runAnimation",value:function(r){this.manager||(this.manager=At());var o=r.begin,a=r.duration,f=r.attributeName,u=r.to,l=r.easing,s=r.onAnimationStart,p=r.onAnimationEnd,b=r.steps,d=r.children,S=this.manager;if(this.unSubscribe=S.subscribe(this.handleStyleChange),typeof l=="function"||typeof d=="function"||l==="spring"){this.runJSAnimation(r);return}if(b.length>1){this.runStepAnimation(r);return}var v=f?$({},f,u):u,y=G(Object.keys(v),a,l);S.start([s,o,O(O({},v),{},{transition:y}),a,p])}},{key:"render",value:function(){var r=this.props,o=r.children;r.begin;var a=r.duration;r.attributeName,r.easing;var f=r.isActive;r.steps,r.from,r.to,r.canBegin,r.onAnimationEnd,r.shouldReAnimate,r.onAnimationReStart;var u=ee(r,te),l=E.Children.count(o),s=Ct(this.state.style);if(typeof o=="function")return o(s);if(!f||l===0||a<=0)return o;var p=function(d){var S=d.props,v=S.style,y=v===void 0?{}:v,m=S.className,h=E.cloneElement(d,O(O({},u),{},{style:O(O({},y),s),className:m}));return h};return l===1?p(E.Children.only(o)):pt.createElement("div",null,E.Children.map(o,function(b){return p(b)}))}}]),n}(E.PureComponent);H.displayName="Animate";H.defaultProps={begin:0,duration:1e3,from:"",to:"",attributeName:"",easing:"ease",isActive:!0,canBegin:!0,steps:[],onAnimationEnd:function(){},onAnimationStart:function(){}};H.propTypes={from:c.oneOfType([c.object,c.string]),to:c.oneOfType([c.object,c.string]),attributeName:c.string,duration:c.number,begin:c.number,easing:c.oneOfType([c.string,c.func]),steps:c.arrayOf(c.shape({duration:c.number.isRequired,style:c.object.isRequired,easing:c.oneOfType([c.oneOf(["ease","ease-in","ease-out","ease-in-out","linear"]),c.func]),properties:c.arrayOf("string"),onAnimationEnd:c.func})),children:c.oneOfType([c.node,c.func]),isActive:c.bool,canBegin:c.bool,onAnimationEnd:c.func,shouldReAnimate:c.bool,onAnimationStart:c.func,onAnimationReStart:c.func};Number.isFinite===void 0&&(Number.isFinite=function(t){return typeof t=="number"&&isFinite(t)});c.object,c.object,c.object,c.element;c.object,c.object,c.object,c.oneOfType([c.array,c.element]),c.any;export{H as A,Ct as t};
