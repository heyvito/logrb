(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[527],{4873:function(e,n,t){"use strict";t.d(n,{r:function(){return c}});var i=t(6062),r=t(1664),o=(t(7294),t(5893)),c=function(e){var n=e.href,t=e.children;return(0,o.jsx)(i.Xd,{className:"linked-container",children:(0,o.jsx)(r.default,{href:n,children:t})})}},8690:function(e,n,t){"use strict";t.d(n,{n:function(){return g}});var i=t(2809),r=t(7333),o=(t(7294),t(6062)),c=t(4873),s=t(5465),l=t(5893);function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}var h=function(e){return e?"kwarg"===e||"kwoptarg"===e?(0,l.jsx)(r.HK,{}):0===e.indexOf("opt")?(0,l.jsx)(r.hd,{}):void 0:""},d=function(e,n){if(null!==n&&void 0!==n)switch(n){case"sym":case"bool":return(0,l.jsx)(r.mN,{children:e?"true":"false"});case"nil":return(0,l.jsx)(r.mN,{children:"nil"});case"int":return(0,l.jsx)(r.Mr,{children:e});case"str":return(0,l.jsx)(r.Ld,{children:e});case"send":return function(e){var n=e.target.map((function(e){return"self"===e?(0,l.jsx)(r.mN,{children:"self"}):[(0,l.jsx)(r.vR,{children:e},"0"),"::"]})).flat(1/0);return n.length>1&&n.pop(),(0,l.jsxs)(r.Pg,{children:[n,n.length>0&&".",e.name]})}(e);default:return(0,l.jsx)(r.C_,{children:e})}},u=function(e){return"kwrestarg"===e?(0,l.jsx)(r.kr,{double:!0}):"restarg"===e?(0,l.jsx)(r.kr,{}):void 0},p=function(e){var n=e.type,t=e.name,i=e.value,o=e.value_type;return(0,l.jsxs)(r.hA,{children:[u(n),t,h(n),d(i,o)]})},g=function(e){var n=e.visibility,t=e.type,h=e.name,d=e.href,u=e.args,g=e.doc,f=e.decoration,m=(0,l.jsxs)(o.W2,{children:[(0,l.jsx)(r.IH,{children:h}),u&&(0,l.jsx)(r.$I,{empty:0===u.length,children:u.map((function(e){return(0,l.jsx)(p,function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){(0,i.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},e),e.name)}))})]});return(0,l.jsxs)(o.W2,{children:[f&&(0,l.jsx)(s.J,{className:"decoration",name:f,size:12,title:"inherited"===f?"Inherited":"Override"}),t&&(0,l.jsx)(o.d6,{children:t}),d?(0,l.jsx)(c.r,{href:d,children:m}):m,n&&("public"!==n.toLowerCase()?(0,l.jsx)(r.__,{children:n}):g&&g.doc_visibility_annotation&&"public"!==g.doc_visibility_annotation&&(0,l.jsx)(r.__,{children:g.doc_visibility_annotation}))]})}},3777:function(e,n,t){"use strict";t.r(n),t.d(n,{__N_SSG:function(){return Pe},default:function(){return Oe}});var i=t(1508),r=t(7294),o=t(9008),c=t(1197),s=t(2809),l=t(4265),a=t(9541),h=t(5465),d=t(9163),u=t(992),p=d.ZP.div.withConfig({displayName:"checkbox__Container",componentId:"sc-1drb3jx-0"})(["display:flex;align-items:center;cursor:pointer;svg{margin-right:8px;}"]),g=d.ZP.span.withConfig({displayName:"checkbox__Label",componentId:"sc-1drb3jx-1"})(["",";color:#FFFFFF;"],(0,u.d)({weight:500})),f=t(5893),m=function(e){var n=e.label,t=e.checked,i=void 0!==t&&t,r=e.onChange,o=void 0===r?function(){}:r;return(0,f.jsxs)(p,{onClick:function(){return o(!i)},children:[(0,f.jsx)(h.J,{name:i?"checkboxOn":"checkboxOff"}),(0,f.jsx)(g,{children:n})]})},x=t(4659);function j(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function b(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?j(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):j(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var y,v=function(e){var n,t=e.type,o=e.name,c=e.definitions,d=e.filters,u=void 0===d?{}:d,p=e.onChangeFilter,g=void 0===p?function(){}:p,j=(0,i.Z)(c);if(c.length>1){var y=j.pop();n=j.map((function(e,n){return(0,f.jsxs)(x.bt,{children:[(0,f.jsx)(a.r,{href:e.href,kind:"dashed",text:e.name}),", "]},n)})).concat((0,f.jsxs)(x.bt,{children:["and ",(0,f.jsx)(a.r,{href:y.href,kind:"dashed",text:y.name})," "]}))}else if(1===c.length){var v=c[0];n=(0,f.jsxs)(x.bt,{children:[(0,f.jsx)(a.r,{href:v.href,kind:"dashed",text:v.name})," "]})}var _=(0,r.useState)(!0),w=_[0],C=_[1],P=(0,r.useState)(b({hideInternal:!1,hidePrivate:!1,hideAttributes:!1,showInherited:!0,showExtended:!0,showIncluded:!0},u)),O=P[0],I=P[1],k=function(e){return function(n){I((function(t){return b(b({},t),{},(0,s.Z)({},e,n))}))}};return(0,r.useEffect)((function(){g(O)}),[O]),(0,f.jsxs)(x.XY,{children:[(0,f.jsxs)(x.wT,{children:[(0,f.jsx)(x.Dy,{children:t}),(0,f.jsx)(x.Sq,{children:o}),n&&(0,f.jsxs)(x.eP,{children:["Defined in ",n]}),(0,f.jsxs)(x.$1,{collapsed:w,onClick:function(){return C((function(e){return!e}))},children:[(0,f.jsx)(h.J,{name:"chevron"})," ",(0,f.jsx)("span",{children:w?"Show More":"Show Less"})]}),(0,f.jsxs)(x.cN,{collapsed:w,children:[(0,f.jsxs)(x.sg,{children:[(0,f.jsx)(m,{checked:O.hideInternal,onChange:k("hideInternal"),label:"Hide internal members"}),(0,f.jsx)(m,{checked:O.hidePrivate,onChange:k("hidePrivate"),label:"Hide private members"})]}),(0,f.jsxs)(x.sg,{children:[(0,f.jsx)(m,{checked:O.hideAttributes,onChange:k("hideAttributes"),label:"Hide attributes"}),(0,f.jsx)(m,{checked:O.showInherited,onChange:k("showInherited"),label:"Show inherited members"})]}),(0,f.jsxs)(x.sg,{children:[(0,f.jsx)(m,{checked:O.showExtended,onChange:k("showExtended"),label:"Show extended members"}),(0,f.jsx)(m,{checked:O.showIncluded,onChange:k("showIncluded"),label:"Show included members"})]})]})]}),(0,f.jsx)(x.z$,{children:(0,f.jsx)(l._,{})})]})},_=t(1664),w=t(1616),C=t(9995),P=d.ZP.div.withConfig({displayName:"breadcrumb__Base",componentId:"sc-9ukz8r-0"})(["padding-left:17px;padding-right:40px;background-color:#161617;height:57px;display:flex;align-items:center;overflow-x:scroll;overflow-y:hidden;"]),O=d.ZP.div.withConfig({displayName:"breadcrumb__BaseLink",componentId:"sc-9ukz8r-1"})(["cursor:pointer;display:flex;align-items:center;"]),I=["title","titleId"];function k(){return(k=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e}).apply(this,arguments)}function Z(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},o=Object.keys(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)t=o[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}function N(e,n){var t=e.title,i=e.titleId,o=Z(e,I);return r.createElement("svg",k({width:31,height:59,xmlns:"http://www.w3.org/2000/svg",ref:n,"aria-labelledby":i},o),t?r.createElement("title",{id:i},t):null,y||(y=r.createElement("path",{d:"M1 1l28 29L1 58",stroke:"#1C1C1E",strokeWidth:2,fill:"none",fillRule:"evenodd"})))}var F=r.forwardRef(N),S=(t.p,function(e){var n=e.href,t=e.children;return(0,f.jsx)(_.default,{href:n,children:(0,f.jsx)(O,{children:t})})}),A=function(){return(0,f.jsx)("div",{children:(0,f.jsx)(F,{})})},E=function(e){var n=e.projectName,t=e.items;return(0,f.jsxs)(P,{children:[(0,f.jsxs)(S,{href:"/",children:[(0,f.jsx)(h.J,{name:"home",size:"15"}),(0,f.jsx)(C.Z,{left:10,right:8,children:(0,f.jsx)(w.x,{children:n})})]}),[{name:"Components",parents:[]}].concat((0,i.Z)(t)).map((function(e,n){return(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(A,{}),(0,f.jsx)(S,{href:["/components"].concat((0,i.Z)(e.parents),[0===n?"":e.name]).join("/"),children:(0,f.jsx)(C.Z,{left:10,right:8,children:(0,f.jsx)(w.x,{children:e.name})})})]})}))]})},D=t(6609),M=d.ZP.div.withConfig({displayName:"documentation__MainContainer",componentId:"sc-15fimst-0"})(["margin:44px 46px;display:flex;flex-direction:row;column-gap:38px;"]),B=d.ZP.div.withConfig({displayName:"documentation__Left",componentId:"sc-15fimst-1"})(["flex:1;"]),z=d.ZP.div.withConfig({displayName:"documentation__Right",componentId:"sc-15fimst-2"})(["padding-right:54px;.linked-container{margin-bottom:5px;display:inline-block;}a{color:#FFF;",";text-decoration:none;}"],u.d),L=d.ZP.span.withConfig({displayName:"documentation__BaseText",componentId:"sc-15fimst-3"})(["",";color:#FFFFFF;"],u.d),H=d.ZP.div.withConfig({displayName:"documentation__BaseHeading",componentId:"sc-15fimst-4"})(["",";color:#FFFFFF;padding-bottom:12px;"],(0,u.d)({size:24})),T=d.ZP.div.withConfig({displayName:"documentation__BaseLinkColumn",componentId:"sc-15fimst-5"})(["display:flex;flex-direction:column;row-gap:8px;padding-left:12px;"]),J=d.ZP.div.withConfig({displayName:"documentation__BaseHorizontalContainer",componentId:"sc-15fimst-6"})(["display:flex;column-gap:50px;"]),R=d.ZP.div.withConfig({displayName:"documentation__BaseHTMLContent",componentId:"sc-15fimst-7"})(["",";color:#FFFFFF;margin-bottom:","px;display:",";p code{",";font-size:95%;padding:3px 4px;background-color:#29292B;border-radius:3px;}",";"],u.d,(function(e){return e.noMargin?0:12}),(function(e){return e.inline?"inline":"block"}),u.Z,D.X),X=d.ZP.div.withConfig({displayName:"documentation__Faded",componentId:"sc-15fimst-8"})(["",";color:#707070;margin-top:5px;"],u.d),W=d.ZP.span.withConfig({displayName:"documentation__Mono",componentId:"sc-15fimst-9"})(["",";color:#FFFFFF;"],u.Z),$=d.ZP.div.withConfig({displayName:"documentation__AttributeContainer",componentId:"sc-15fimst-10"})(["margin-bottom:12px;.decoration{display:inline-block;margin-right:8px;margin-left:-18px;}"]),q=d.ZP.div.withConfig({displayName:"documentation__SectionContainer",componentId:"sc-15fimst-11"})(["margin:25px 0 0;"]),U=d.ZP.div.withConfig({displayName:"documentation__ToggleWrapper",componentId:"sc-15fimst-12"})(["text-align:right;margin:13px 0 22px 0;"]),K=d.ZP.span.withConfig({displayName:"documentation__SourceLink",componentId:"sc-15fimst-13"})(["",";border-bottom:white 1px dotted;cursor:pointer;color:#FFF;"],(0,u.d)({weight:500})),Y=d.ZP.div.withConfig({displayName:"documentation__SourceCode",componentId:"sc-15fimst-14"})(["display:",";"],(function(e){return e.expanded?"block":"none"})),G=d.ZP.div.withConfig({displayName:"documentation__FieldList",componentId:"sc-15fimst-15"})(["h3{",";color:#A7A7A7;letter-spacing:0.79px;text-transform:uppercase;margin-top:24px;}table{margin-bottom:24px;}td{padding-top:5px;}.field-name{",";color:white;text-align:right;vertical-align:top;padding-right:20px;}"],(0,u.d)({weight:500,size:11}),u.Z),Q=function(e){switch(e.type){case"class":return"#FFAB42";case"module":return"#579AD1";default:return"white"}},V=d.ZP.span.withConfig({displayName:"documentation__BaseReference",componentId:"sc-15fimst-16"})(["",";color:",";border-bottom:1px dashed ",";cursor:pointer;"],(0,u.Z)({weight:300,size:15}),Q,Q),ee=d.ZP.div.withConfig({displayName:"documentation__BaseUnresolved",componentId:"sc-15fimst-17"})(["border:1px dotted #D8D8D8;border-radius:10px 3px 3px 10px;display:inline-flex;color:white;justify-content:center;align-content:center;align-items:center;.icon{margin-left:2px;margin-right:2px;}span{",";}"],(0,u.Z)({size:15})),ne=d.ZP.div.withConfig({displayName:"documentation__FromBlock",componentId:"sc-15fimst-18"})(["",";font-size:80%;color:white;a{font-size:inherit;}"],u.d),te=d.ZP.span.withConfig({displayName:"documentation__Symbol",componentId:"sc-15fimst-19"})(["",";color:#CF91C9;"],u.Z),ie=t(7333),re=t(8690);function oe(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);n&&(i=i.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,i)}return t}function ce(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?oe(Object(t),!0).forEach((function(n){(0,s.Z)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):oe(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}var se=function(e){var n=e.children;return(0,f.jsx)(L,{children:n})},le=function(e){var n=e.children;return(0,f.jsx)(H,{children:n})},ae=function(e){var n=e.children;return(0,f.jsx)(T,{children:n})},he=function(e){var n=e.children;return(0,f.jsx)(J,{children:n})},de=function(e){var n=e.obj;return(0,f.jsxs)(ee,{title:"Docrb could not resolve this reference. It may be from an external library or dynamically-generated method.",children:[(0,f.jsx)(h.J,{className:"icon",name:"questionmark",size:15})," ",(0,f.jsx)("span",{children:n.contents})]})},ue=function(e){var n=e.name,t=e.list;return t&&t.length>0&&(0,f.jsxs)("div",{children:[(0,f.jsx)(le,{children:n}),(0,f.jsx)(ae,{children:t.map((function(e){var n=e.path;return n||(n=(0,c.Y4)(e)),(0,f.jsx)("div",{children:(0,f.jsx)(a.r,{href:["/components"].concat((0,i.Z)(n)).join("/"),text:e.name})},e.name)}))})]})},pe=function(e){var n=e.item,t=e.id,i=n.inherits?[n.inherits]:[];return(0,f.jsx)(q,{id:t,children:(0,f.jsxs)(he,{children:[(0,f.jsx)(ue,{name:"Inherits",list:i}),(0,f.jsx)(ue,{name:"Extends",list:n.extends}),(0,f.jsx)(ue,{name:"Includes",list:n.includes}),(0,f.jsx)(ue,{name:"Child Modules",list:n.modules}),(0,f.jsx)(ue,{name:"Child Classes",list:n.classes})]})})},ge=function(e){var n=e.html,t=e.noMargin,i=e.inline;return(0,f.jsx)(R,{dangerouslySetInnerHTML:{__html:n},noMargin:t,inline:i})},fe=function(e){var n=e.item,t=e.label,i=e.decoration;return(0,f.jsxs)($,{children:[i&&(0,f.jsx)(h.J,{className:"decoration",name:i,size:12,title:"inherited"===i?"Inherited":"Override"}),(0,f.jsx)(W,{children:n.name}),(0,f.jsx)(ie.__,{children:t}),n.doc?(0,f.jsx)(ge,{html:n.doc}):(0,f.jsx)(X,{children:"(No documentation available)"})]})},me=function(e){var n=e.list,t=e.id;return n&&0!==n.length?(0,f.jsxs)(q,{id:t,children:[(0,f.jsx)(le,{children:"Attributes"}),n.map((function(e){return(0,f.jsx)(fe,{label:e.visibility,item:e,decoration:e.decoration},e.name)}))]}):null},xe=function(e){var n,t=e.source,i=(0,r.useState)(!1),o=i[0],s=i[1],l=t.start_at,h=t.end_at;return n=l===h?"line ".concat(l):"lines ".concat(l," to ").concat(h),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(U,{children:(0,f.jsx)(K,{onClick:function(){return s((function(e){return!e}))},children:o?"Hide Source":"Show Source"})}),(0,f.jsxs)(Y,{expanded:o,children:[(0,f.jsx)(ge,{html:t.markdown_source,noMargin:!0}),(0,f.jsxs)(ne,{children:["Defined in ",(0,f.jsx)(a.r,{href:(0,c.yv)(t),text:"".concat((0,c.Po)(t),", ").concat(n)})]})]})]})},je=function(e){var n=e.title,t=e.list,i=e.id;return t&&t.length>0&&(0,f.jsxs)(q,{id:i,children:[(0,f.jsx)(le,{children:n}),t.sort((function(e,n){return e.name.localeCompare(n.name)})).map((function(e){return(0,f.jsxs)(C.Z,{id:e.name,bottom:23,children:[(0,f.jsx)(re.n,ce(ce({},e),{},{type:null})),(0,f.jsx)(C.Z,{top:5,children:(0,f.jsx)(_e,{doc:e.doc})}),(0,f.jsx)(C.Z,{top:13,children:(0,f.jsx)(xe,{source:e.defined_by})})]},e.name)}))]})},be=function(e){var n=e.list;return(0,f.jsxs)(G,{children:[(0,f.jsx)("h3",{children:"Arguments"}),(0,f.jsx)("table",{children:Object.keys(n).map((function(e){return{name:e,contents:n[e]}})).map((function(e){return(0,f.jsxs)("tr",{children:[(0,f.jsx)("td",{className:"field-name",children:e.name}),(0,f.jsx)("td",{className:"field-contents",children:(0,f.jsx)(ve,{list:e.contents.contents})})]},e.name)}))})]})},ye=function(e){if(!e.ref_path)return(0,f.jsx)(de,{obj:e});var n=[];if("method"===e.ref_type){var t=(0,i.Z)(e.ref_path),r=t.pop(),o=t.pop();n=[].concat((0,i.Z)(t),["".concat(o,"#").concat(r)])}else n=["/components"].concat((0,i.Z)(e.ref_path)).join("/");return(0,f.jsx)(_.default,{href:n.join("/"),children:(0,f.jsx)(V,{type:e.ref_type,children:e.contents})})},ve=function(e){var n=e.list;n.map||(n=[{type:"html",contents:n}]);var t=function(e){switch(e.type){case"span":return(0,f.jsx)(ge,{noMargin:!0,inline:!0,html:e.contents});case"ref":return(0,f.jsx)(ye,ce({},e));case"html":return(0,f.jsx)(ge,{html:e.contents});case"sym_ref":return(0,f.jsx)(te,{children:e.contents});default:return(0,f.jsxs)("div",{children:["Unknown textblock item ",e.type," ",JSON.stringify(e,void 0,4)]})}};return(0,f.jsx)("p",{children:n.map((function(e,n){return(0,f.jsx)("span",{children:t(e)},n)}))})},_e=function(e){var n=e.doc,t=e.noMargin,i=e.id;return n?(n.contents.sort||(n={contents:[n]}),(0,f.jsx)("div",{id:i,children:n&&n.contents.map((function(e){switch(e.type){case"text_block":return(0,f.jsx)(ve,{list:e.contents});case"code_example":return(0,f.jsx)(ge,{noMargin:t,html:e.contents});case"field_block":return(0,f.jsx)(be,{list:e.contents});default:return(0,f.jsxs)(se,{children:["!Unexpected item ",e.type]})}}))})):(0,f.jsx)(X,{children:"(No documentation available)"})},we=t(4873),Ce=function(e,n){var t=[];n.hideInternal&&t.push(function(e){return function(n){return!n.doc||!n.doc.doc_visibility_annotation||e(n)}}((function(e){return"internal"!==e.doc.doc_visibility_annotation.toLowerCase()}))),n.hidePrivate&&t.push((function(e){return"private"!==e.visibility})),n.showInherited||t.push((function(e){return"inheritance"!==e.origin})),n.showExtended||t.push((function(e){return"extension"!==e.origin})),n.showIncluded||t.push((function(e){return"inclusion"!==e.origin})),n.hideAttributes&&t.push((function(e){return"Attribute"!==e.type}));for(var r=(0,i.Z)(e),o=0,c=t;o<c.length;o++){var s=c[o];r=r.filter(s)}return r},Pe=!0,Oe=function(e){var n=e.item,t=e.path,i=[],s=t.map((function(e){var n={name:e,parents:[].concat(i)};return i.push(e),n}));n=c.e5.findPath(t);var l=(0,r.useState)({}),a=l[0],h=l[1],d=(0,r.useState)(n.defs||[]),u=d[0],p=d[1],g=(0,r.useState)(n.sdefs||[]),m=g[0],x=g[1],j=(0,r.useState)(n.attributes||[]),b=j[0],y=j[1],_=!!n.doc,w=n.inherits||n.extends&&n.extends.length>0||n.includes&&n.includes.length>0||n.modules&&n.modules.length>0||n.classes&&n.classes.length>0,C=b.length>0,P=m.length>0,O=u.length>0;return(0,r.useEffect)((function(){p(Ce(n.defs||[],a)),x(Ce(n.sdefs||[],a)),y(Ce(n.attributes||[],a))}),[a,n.attributes,n.defs,n.sdefs]),(0,f.jsxs)(f.Fragment,{children:[(0,f.jsx)(o.default,{children:(0,f.jsxs)("title",{children:[n.name," - ",c.op.name," - Docrb"]})}),(0,f.jsx)(v,{type:n.type,name:n.name,definitions:(0,c.su)(n),onChangeFilter:function(e){return h(e)}}),(0,f.jsx)(E,{projectName:c.op.name,items:s}),(0,f.jsxs)(M,{children:[(0,f.jsxs)(B,{children:[_&&(0,f.jsx)(_e,{id:"class-documentation",doc:n.doc}),w&&(0,f.jsx)(pe,{id:"class-details",item:n}),C&&(0,f.jsx)(me,{id:"attributes",list:b}),P&&(0,f.jsx)(je,{id:"class-methods",title:"Class Methods",list:m}),O&&(0,f.jsx)(je,{id:"instance-methods",title:"Instance Methods",list:u})]}),(0,f.jsxs)(z,{children:[(0,f.jsx)(le,{children:"In this Page"}),_&&(0,f.jsx)("div",{children:(0,f.jsx)(we.r,{href:"#class-documentation",children:"Class Documentation"})}),w&&(0,f.jsx)("div",{children:(0,f.jsx)(we.r,{href:"#class-details",children:"Inheritance"})}),C&&(0,f.jsx)("div",{children:(0,f.jsx)(we.r,{href:"#attributes",children:"Attributes"})}),P&&(0,f.jsx)("div",{children:(0,f.jsx)(we.r,{href:"#class-methods",children:"Class Methods"})}),O&&(0,f.jsx)("div",{children:(0,f.jsx)(we.r,{href:"#instance-methods",children:"Instance Methods"})})]})]})]})}},6062:function(e,n,t){"use strict";t.d(n,{Xd:function(){return o},W2:function(){return c},d6:function(){return s}});var i=t(9163),r=t(992),o=i.ZP.div.withConfig({displayName:"common__Linked",componentId:"sc-ohzv6-0"})(["border-bottom:dashed 1px white;padding-bottom:3px;cursor:pointer;"]),c=i.ZP.span.withConfig({displayName:"common__Container",componentId:"sc-ohzv6-1"})(["display:flex;align-items:center;.decoration{margin-right:8px;margin-left:-20px;}"]),s=i.ZP.span.withConfig({displayName:"common__TypeDef",componentId:"sc-ohzv6-2"})(["",";color:#808080;margin-right:11px;text-transform:capitalize;"],(0,r.Z)({weight:500}))},6609:function(e,n,t){"use strict";t.d(n,{X:function(){return o},j:function(){return c}});var i=t(9163),r=t(992),o=(0,i.iv)(["code,pre{",";}.highlight .hll{background-color:#424242}div.highlight{background-color:#242426;padding:8px;margin-bottom:24px;border-radius:3px;overflow:scroll;line-height:20px;}.highlight{color:hsl(219,28%,88%);}.highlight .c{color:hsl(221,12%,69%)}.highlight .err{color:#d54e53}.highlight .k{color:hsl(300,30%,68%)}.highlight .l{color:#e78c45}.highlight .n{color:white}.highlight .o{color:hsl(13,93%,66%)}.highlight .p{color:hsl(180,36%,54%)}.highlight .cm{color:#969896}.highlight .cp{color:#969896}.highlight .c1{color:#969896}.highlight .cs{color:#969896}.highlight .gd{color:#d54e53}.highlight .ge{font-style:italic}.highlight .gh{color:#eaeaea;font-weight:bold}.highlight .gi{color:#b9ca4a}.highlight .gp{color:#969896;font-weight:bold}.highlight .gs{font-weight:bold}.highlight .gu{color:#70c0b1;font-weight:bold}.highlight .kc{color:hsl(300,30%,68%)}.highlight .kd{color:hsl(357,79%,65%)}.highlight .kn{color:#70c0b1}.highlight .kp{color:#c397d8}.highlight .kr{color:hsl(300,30%,68%)}.highlight .kt{color:#e7c547}.highlight .ld{color:#b9ca4a}.highlight .m{color:hsl(32,93%,66%)}.highlight .s{color:hsl(114,31%,68%)}.highlight .na{color:hsl(357,79%,65%)}.highlight .nb{color:#eaeaea}.highlight .nc{color:hsl(300,30%,68%)}.highlight .no{color:hsl(32,93%,66%)}.highlight .nd{color:#70c0b1}.highlight .ni{color:hsl(32,93%,66%)}.highlight .ne{color:#d54e53}.highlight .nf{color:hsl(180,36%,54%)}.highlight .nl{color:hsl(32,93%,66%)}.highlight .nn{color:#e7c547}.highlight .nx{color:#7aa6da}.highlight .py{color:hsl(32,93%,66%)}.highlight .nt{color:#70c0b1}.highlight .nv{color:hsl(357,79%,65%)}.highlight .ow{color:#70c0b1}.highlight .w{color:#eaeaea}.highlight .mf{color:hsl(32,93%,66%)}.highlight .mh{color:hsl(32,93%,66%)}.highlight .mi{color:hsl(32,93%,66%)}.highlight .mo{color:hsl(32,93%,66%)}.highlight .sb{color:hsl(114,31%,68%)}.highlight .sc{color:hsl(114,31%,68%)}.highlight .sd{color:hsl(114,31%,68%)}.highlight .s2{color:hsl(114,31%,68%)}.highlight .se{color:hsl(114,31%,68%)}.highlight .sh{color:hsl(114,31%,68%)}.highlight .si{color:hsl(0,0%,100%)}.highlight .sx{color:#b9ca4a}.highlight .sr{color:#b9ca4a}.highlight .s1{color:#b9ca4a}.highlight .ss{color:#b9ca4a}.highlight .bp{color:#eaeaea}.highlight .vc{color:hsl(357,79%,65%)}.highlight .vg{color:hsl(357,79%,65%)}.highlight .vi{color:hsl(357,79%,65%)}.highlight .il{color:#e78c45}"],(0,r.Z)({size:15})),c=i.ZP.div.withConfig({displayName:"markdown__MarkdownStyle",componentId:"sc-1dj301j-0"})(["",";color:#fff;background-color:#1C1C1E;padding:12px 24px;h1{border-bottom:1px solid #373e47;padding-bottom:8px;}h1,h2,h3,h4,h5{margin:12px 0;}p code{background-color:#242426;font-size:80%;padding:3px 4px;border-radius:3px;}p{margin-bottom:8px;line-height:22px;}p + h1,p + h2,p + h3,p + h4,p + h5{margin-top:24px;}a{color:#fff;border-bottom:dashed 1px white;text-decoration:none;}",";"],r.d,o)},7333:function(e,n,t){"use strict";t.d(n,{IH:function(){return o},$I:function(){return c},hA:function(){return s},mN:function(){return a},Ld:function(){return h},Mr:function(){return d},hd:function(){return u},C_:function(){return p},HK:function(){return g},kr:function(){return f},__:function(){return m},vR:function(){return x},Pg:function(){return j}});var i=t(9163),r=t(992),o=i.ZP.span.withConfig({displayName:"method__MethodName",componentId:"sc-y0c8ia-0"})(["",";color:#39B6B5;"],r.Z),c=i.ZP.span.withConfig({displayName:"method__ArgumentsContainer",componentId:"sc-y0c8ia-1"})(["",";color:#39B6B5;display:flex;",""],r.Z,(function(e){return!e.empty&&"\n    :before {\n      content: '(';\n    }\n\n    :after {\n      content: ')';\n    }\n  "})),s=i.ZP.span.withConfig({displayName:"method__Argument",componentId:"sc-y0c8ia-2"})(["color:#FFAB42;:not(:first-of-type){margin-left:8px;}:not(:last-of-type){:after{content:',';color:#A5ACBA;}}"]),l=(0,i.iv)(["margin-left:8px;"]),a=i.ZP.span.withConfig({displayName:"method__Symbol",componentId:"sc-y0c8ia-3"})(["",";color:#CF91C9;"],l),h=i.ZP.span.withConfig({displayName:"method__String",componentId:"sc-y0c8ia-4"})(["",";color:#8CC98F;:before,:after{content:'\"'; color: #39B6B5; }"],l),d=i.ZP.span.withConfig({displayName:"method__Number",componentId:"sc-y0c8ia-5"})(["",";"],l),u=i.ZP.span.withConfig({displayName:"method__Equal",componentId:"sc-y0c8ia-6"})(["",';color:#FF724C;:after{content:"=";}'],l),p=i.ZP.span.withConfig({displayName:"method__Plain",componentId:"sc-y0c8ia-7"})(["",";color:#FFF;"],l),g=i.ZP.span.withConfig({displayName:"method__Colon",componentId:"sc-y0c8ia-8"})(["color:#A5ACBA;:after{content:':';}"]),f=i.ZP.span.withConfig({displayName:"method__Rest",componentId:"sc-y0c8ia-9"})(['color:#A5ACBA;:after{content:"','";}'],(function(e){return e.double?"**":"*"})),m=i.ZP.span.withConfig({displayName:"method__Label",componentId:"sc-y0c8ia-10"})(["background-color:#29292B;border-radius:3px;padding:3px 6px;",";color:#A7A7A7;letter-spacing:0.79px;text-align:center;text-transform:uppercase;margin-left:8px;"],(0,r.d)({weight:500,size:11})),x=i.ZP.span.withConfig({displayName:"method__ClassOrModule",componentId:"sc-y0c8ia-11"})(["color:#579AD1;"]),j=i.ZP.span.withConfig({displayName:"method__MethodCallArgument",componentId:"sc-y0c8ia-12"})(["margin-left:8px;> span{margin-left:0;}color:white;"])},2370:function(e,n,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/components/[...all]",function(){return t(3777)}])}},function(e){e.O(0,[182,774,888,179],(function(){return n=2370,e(e.s=n);var n}));var n=e.O();_N_E=n}]);