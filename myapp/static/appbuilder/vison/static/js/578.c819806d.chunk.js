"use strict";(self.webpackChunkvite_ml_platform=self.webpackChunkvite_ml_platform||[]).push([[578],{9578:function(e,t,o){o.r(t),o.d(t,{default:function(){return x}});var r=o(36222),n=o(18489),l=o(50678),s=o(72791),a=o(23695),i=o(64564),c=o(66106),f=o(30914),p=o(20135),u=o(58105),d=o(64469),v=o(38243),m=o(87309),g=o(31776),h=o(79271),y=o(80184),b={padding:"8px 0",display:"flex",alignItems:"center"};function x(){var e=(0,h.k6)(),t=(0,s.useState)({model_serv_name:"",model_serv_desc:"",owner_rtxs:"",target:"",timeout:""}),o=(0,l.Z)(t,2),x=o[0],Z=o[1],w=(0,s.useState)({selector_name:[],namesapce:[],region:[]}),j=(0,l.Z)(w,2),C=j[0],O=j[1],_=(0,s.useState)([{label:"",value:""}]),N=(0,l.Z)(_,2),P=N[0],S=N[1],E=(0,s.useState)({scene_id:"",title:"",model_serv_id:""}),k=(0,l.Z)(E,2),T=k[0],R=k[1],A=(0,s.useState)([{label:"",value:""}]),I=(0,l.Z)(A,2),V=I[0],D=I[1],L=(0,s.useState)([{label:"",value:""}]),H=(0,l.Z)(L,2),B=H[0],M=H[1];function Y(e){return function(t){Z("timeout"===e?(0,n.Z)((0,n.Z)({},x),{},(0,r.Z)({},e,t)):(0,n.Z)((0,n.Z)({},x),{},(0,r.Z)({},e,t.target.value)))}}var K=function(e){return function(t){O((0,n.Z)((0,n.Z)({},C),{},(0,r.Z)({},e,t)))}};(0,s.useEffect)((function(){g.Z.featureKVDataDisplayPostQuest({class:"NAMESAPCE,REGION,ROUTERSELECT"}).then((function(e){if(0===e.retcode){console.log(e.result.data,"1111");var t=e.result.data.NAMESAPCE,o=e.result.data.REGION,r=e.result.data.ROUTERSELECT;S(t),M(o),D(r),a.ZP.success("\u67e5\u8be2\u6210\u529f")}else e.retmsg&&a.ZP.error("\u5931\u8d25\u539f\u56e0: ".concat(e.retmsg))}));var t={};e.location.state?(t=e.location.state,console.log(t,"setFromRow_value111111111"),sessionStorage.setItem("featureConfigurationKeyID",JSON.stringify(t)),R(t),Z(t),O(t)):(t=JSON.parse(sessionStorage.getItem("featureConfigurationKeyID")||""),console.log(t,"888"),R(t),Z(t),O(t))}),[]);return(0,y.jsx)("div",{className:"SceneRegistrationClass",children:(0,y.jsxs)("div",{className:"bodyClass",children:[(0,y.jsx)("div",{className:"SceneHeader",children:"\u6ce8\u518c\u6a21\u578b\u670d\u52a1"}),(0,y.jsxs)("div",{className:"site-card-border-less-wrapper",children:[(0,y.jsx)(i.Z,{title:"\u57fa\u672c\u4fe1\u606f",bordered:!1,children:(0,y.jsxs)(c.Z,{gutter:16,children:[(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"26%"},children:"\u670d\u52a1\u82f1\u6587\u540d"}),(0,y.jsx)(p.Z,{placeholder:"\u8bf7\u8f93\u5165\u670d\u52a1\u82f1\u6587\u540d",style:{width:200},value:x.model_serv_name,onChange:Y("model_serv_name")})]})}),(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"26%"},children:"\u670d\u52a1\u4e2d\u6587\u540d"}),(0,y.jsx)(p.Z,{placeholder:"\u8bf7\u8f93\u5165\u670d\u52a1\u4e2d\u6587\u540d",style:{width:200},value:x.model_serv_desc,onChange:Y("model_serv_desc")})]})}),(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"26%"},children:"\u8d23\u4efb\u4eba"}),(0,y.jsx)(p.Z,{placeholder:"\u8bf7\u8f93\u5165\u8d23\u4efb\u4eba",style:{width:200},value:x.owner_rtxs,onChange:Y("owner_rtxs")})]})})]})}),(0,y.jsx)(i.Z,{title:"\u7ed1\u5b9a\u8def\u7531\u4fe1\u606f",bordered:!1,children:(0,y.jsxs)(c.Z,{gutter:16,children:[(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"26%"},children:"\u8def\u7531\u9009\u62e9\u5668"}),(0,y.jsx)(u.Z,{placeholder:"\u8bf7\u9009\u62e9\u8def\u7531\u9009\u62e9\u5668",value:C.selector_name,onChange:K("selector_name"),style:{width:"200px"},children:V.map((function(e){return(0,y.jsx)(u.Z.Option,{value:e.value,children:e.label},e.value)}))})]})}),(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"30%"},children:"\u547d\u540d\u7a7a\u95f4"}),(0,y.jsx)(u.Z,{placeholder:"\u8bf7\u9009\u62e9\u547d\u540d\u7a7a\u95f4",value:C.namesapce,onChange:K("namesapce"),style:{width:"200px"},children:P.map((function(e){return(0,y.jsx)(u.Z.Option,{value:e.value,children:e.label},e.value)}))})]})}),(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"26%"},children:"\u5730\u533a"}),(0,y.jsx)(u.Z,{placeholder:"\u8bf7\u9009\u62e9\u5730\u533a",value:C.region,onChange:K("region"),style:{width:"200px"},children:B.map((function(e){return(0,y.jsx)(u.Z.Option,{value:e.value,children:e.label},e.label)}))})]})}),(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)(d.Z,{title:"\u5317\u6781\u661f\u670d\u52a1\u5730\u5740",color:"blue",children:(0,y.jsx)("span",{style:{width:"30%",color:"skyblue"},children:"\u6a21\u578b\u670d\u52a1\u5730\u5740"})}),(0,y.jsx)(d.Z,{title:x.target,color:"yellow",children:(0,y.jsx)(p.Z,{placeholder:"\u8bf7\u8f93\u5165\u76ee\u6807\u5b57\u6bb5",style:{width:200},value:x.target,onChange:Y("target")})})]})}),(0,y.jsx)(f.Z,{className:"gutter-row",span:12,children:(0,y.jsxs)("div",{style:b,children:[(0,y.jsx)("span",{style:{width:"26%"},children:"\u670d\u52a1\u8d85\u65f6"}),(0,y.jsx)(v.Z,{value:x.timeout,onChange:Y("timeout"),addonAfter:"ms",placeholder:"\u8bf7\u8f93\u5165\u670d\u52a1\u8d85\u65f6",style:{width:200}})]})})]})}),(0,y.jsxs)("div",{className:"preservationClass",children:[(0,y.jsx)(m.Z,{style:{backgroundColor:"rgba(255, 87, 51, 1)",width:" 140px",height:"40px",marginRight:"10px"},onClick:function(){return e.go(-1)},type:"primary",children:"\u8fd4\u56de"}),(0,y.jsx)(m.Z,{style:{backgroundColor:"rgba(255, 87, 51, 1)",width:" 140px",height:"40px"},type:"primary",onClick:function(){var t=(0,n.Z)((0,n.Z)({},x),{},{scene_id:T.scene_id}),o=Object.assign(t,C);if("\u66f4\u6539\u6a21\u578b\u670d\u52a1"===T.title){var r=(0,n.Z)((0,n.Z)({},x),{},{scene_id:T.scene_id,selector_name:C.selector_name,namesapce:C.namesapce,region:C.region,model_serv_id:T.model_serv_id});g.Z.featureRegisterModelServRouterPostQuest(r).then((function(t){0===t.retcode?(a.ZP.success("\u6ce8\u518c\u6a21\u578b\u670d\u52a1\u6210\u529f"),e.push("/HeterogeneousPlatform/Nationalkaraoke/SceneModelInformation")):t.retmsg&&a.ZP.error("\u5931\u8d25\u539f\u56e0: ".concat(t.retmsg))}))}else g.Z.featureRegisterModelServRouterPostQuest(o).then((function(t){0===t.retcode?(a.ZP.success("\u6ce8\u518c\u6a21\u578b\u670d\u52a1\u6210\u529f"),e.push("/HeterogeneousPlatform/Nationalkaraoke/RegisterModelInformation")):t.retmsg&&a.ZP.error("\u5931\u8d25\u539f\u56e0: ".concat(t.retmsg))}))},children:"\u66f4\u6539\u6a21\u578b\u670d\u52a1"===T.title?"\u4fee\u6539":"\u4fdd\u5b58"})]})]})]})})}},54466:function(e,t,o){o.d(t,{E:function(){return n},Y:function(){return l}});var r=o(79393),n=(0,r.b)("success","processing","error","default","warning"),l=(0,r.b)("pink","red","yellow","orange","cyan","green","blue","purple","geekblue","magenta","volcano","gold","lime")},64469:function(e,t,o){o.d(t,{Z:function(){return T}});var r=o(4942),n=o(29439),l=o(87462),s=o(72791),a=o(71002),i=o(1413),c=o(45987),f=o(40034),p={adjustX:1,adjustY:1},u=[0,0],d={left:{points:["cr","cl"],overflow:p,offset:[-4,0],targetOffset:u},right:{points:["cl","cr"],overflow:p,offset:[4,0],targetOffset:u},top:{points:["bc","tc"],overflow:p,offset:[0,-4],targetOffset:u},bottom:{points:["tc","bc"],overflow:p,offset:[0,4],targetOffset:u},topLeft:{points:["bl","tl"],overflow:p,offset:[0,-4],targetOffset:u},leftTop:{points:["tr","tl"],overflow:p,offset:[-4,0],targetOffset:u},topRight:{points:["br","tr"],overflow:p,offset:[0,-4],targetOffset:u},rightTop:{points:["tl","tr"],overflow:p,offset:[4,0],targetOffset:u},bottomRight:{points:["tr","br"],overflow:p,offset:[0,4],targetOffset:u},rightBottom:{points:["bl","br"],overflow:p,offset:[4,0],targetOffset:u},bottomLeft:{points:["tl","bl"],overflow:p,offset:[0,4],targetOffset:u},leftBottom:{points:["br","bl"],overflow:p,offset:[-4,0],targetOffset:u}},v=function(e){var t=e.overlay,o=e.prefixCls,r=e.id,n=e.overlayInnerStyle;return s.createElement("div",{className:"".concat(o,"-inner"),id:r,role:"tooltip",style:n},"function"===typeof t?t():t)},m=function(e,t){var o=e.overlayClassName,r=e.trigger,n=void 0===r?["hover"]:r,p=e.mouseEnterDelay,u=void 0===p?0:p,m=e.mouseLeaveDelay,g=void 0===m?.1:m,h=e.overlayStyle,y=e.prefixCls,b=void 0===y?"rc-tooltip":y,x=e.children,Z=e.onVisibleChange,w=e.afterVisibleChange,j=e.transitionName,C=e.animation,O=e.motion,_=e.placement,N=void 0===_?"right":_,P=e.align,S=void 0===P?{}:P,E=e.destroyTooltipOnHide,k=void 0!==E&&E,T=e.defaultVisible,R=e.getTooltipContainer,A=e.overlayInnerStyle,I=(0,c.Z)(e,["overlayClassName","trigger","mouseEnterDelay","mouseLeaveDelay","overlayStyle","prefixCls","children","onVisibleChange","afterVisibleChange","transitionName","animation","motion","placement","align","destroyTooltipOnHide","defaultVisible","getTooltipContainer","overlayInnerStyle"]),V=(0,s.useRef)(null);(0,s.useImperativeHandle)(t,(function(){return V.current}));var D=(0,i.Z)({},I);"visible"in e&&(D.popupVisible=e.visible);var L=!1,H=!1;if("boolean"===typeof k)L=k;else if(k&&"object"===(0,a.Z)(k)){var B=k.keepParent;L=!0===B,H=!1===B}return s.createElement(f.Z,(0,l.Z)({popupClassName:o,prefixCls:b,popup:function(){var t=e.arrowContent,o=void 0===t?null:t,r=e.overlay,n=e.id;return[s.createElement("div",{className:"".concat(b,"-arrow"),key:"arrow"},o),s.createElement(v,{key:"content",prefixCls:b,id:n,overlay:r,overlayInnerStyle:A})]},action:n,builtinPlacements:d,popupPlacement:N,ref:V,popupAlign:S,getPopupContainer:R,onPopupVisibleChange:Z,afterPopupVisibleChange:w,popupTransitionName:j,popupAnimation:C,popupMotion:O,defaultPopupVisible:T,destroyPopupOnHide:L,autoDestroy:H,mouseLeaveDelay:g,popupStyle:h,mouseEnterDelay:u},D),x)},g=(0,s.forwardRef)(m),h=o(75179),y=o(81694),b=o.n(y),x={adjustX:1,adjustY:1},Z={adjustX:0,adjustY:0},w=[0,0];function j(e){return"boolean"===typeof e?e?x:Z:(0,l.Z)((0,l.Z)({},Z),e)}var C=o(61113),O=o(24886),_=o(54466),N=o(29464),P=function(e,t){var o={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(o[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var n=0;for(r=Object.getOwnPropertySymbols(e);n<r.length;n++)t.indexOf(r[n])<0&&Object.prototype.propertyIsEnumerable.call(e,r[n])&&(o[r[n]]=e[r[n]])}return o},S=new RegExp("^(".concat(_.Y.join("|"),")(-inverse)?$"));function E(e,t){var o=e.type;if((!0===o.__ANT_BUTTON||!0===o.__ANT_SWITCH||!0===o.__ANT_CHECKBOX||"button"===e.type)&&e.props.disabled){var r=function(e,t){var o={},r=(0,l.Z)({},e);return t.forEach((function(t){e&&t in e&&(o[t]=e[t],delete r[t])})),{picked:o,omitted:r}}(e.props.style,["position","left","right","top","bottom","float","display","zIndex"]),n=r.picked,a=r.omitted,i=(0,l.Z)((0,l.Z)({display:"inline-block"},n),{cursor:"not-allowed",width:e.props.block?"100%":null}),c=(0,l.Z)((0,l.Z)({},a),{pointerEvents:"none"}),f=(0,C.Tm)(e,{style:c,className:null});return s.createElement("span",{style:i,className:b()(e.props.className,"".concat(t,"-disabled-compatible-wrapper"))},f)}return e}var k=s.forwardRef((function(e,t){var o,a=s.useContext(O.E_),i=a.getPopupContainer,c=a.getPrefixCls,f=a.direction,p=(0,h.Z)(!1,{value:e.visible,defaultValue:e.defaultVisible}),u=(0,n.Z)(p,2),v=u[0],m=u[1],y=function(){var t=e.title,o=e.overlay;return!t&&!o&&0!==t},x=function(){var t=e.builtinPlacements,o=e.arrowPointAtCenter,r=e.autoAdjustOverflow;return t||function(e){var t=e.arrowWidth,o=void 0===t?4:t,r=e.horizontalArrowShift,n=void 0===r?16:r,s=e.verticalArrowShift,a=void 0===s?8:s,i=e.autoAdjustOverflow,c={left:{points:["cr","cl"],offset:[-4,0]},right:{points:["cl","cr"],offset:[4,0]},top:{points:["bc","tc"],offset:[0,-4]},bottom:{points:["tc","bc"],offset:[0,4]},topLeft:{points:["bl","tc"],offset:[-(n+o),-4]},leftTop:{points:["tr","cl"],offset:[-4,-(a+o)]},topRight:{points:["br","tc"],offset:[n+o,-4]},rightTop:{points:["tl","cr"],offset:[4,-(a+o)]},bottomRight:{points:["tr","bc"],offset:[n+o,4]},rightBottom:{points:["bl","cr"],offset:[4,a+o]},bottomLeft:{points:["tl","bc"],offset:[-(n+o),4]},leftBottom:{points:["br","cl"],offset:[-4,a+o]}};return Object.keys(c).forEach((function(t){c[t]=e.arrowPointAtCenter?(0,l.Z)((0,l.Z)({},c[t]),{overflow:j(i),targetOffset:w}):(0,l.Z)((0,l.Z)({},d[t]),{overflow:j(i)}),c[t].ignoreShake=!0})),c}({arrowPointAtCenter:o,autoAdjustOverflow:r})},Z=e.getPopupContainer,_=P(e,["getPopupContainer"]),k=e.prefixCls,T=e.openClassName,R=e.getTooltipContainer,A=e.overlayClassName,I=e.color,V=e.overlayInnerStyle,D=e.children,L=c("tooltip",k),H=c(),B=v;!("visible"in e)&&y()&&(B=!1);var M,Y=E((0,C.l$)(D)?D:s.createElement("span",null,D),L),K=Y.props,X=b()(K.className,(0,r.Z)({},T||"".concat(L,"-open"),!0)),z=b()(A,(o={},(0,r.Z)(o,"".concat(L,"-rtl"),"rtl"===f),(0,r.Z)(o,"".concat(L,"-").concat(I),I&&S.test(I)),o)),Q=V;return I&&!S.test(I)&&(Q=(0,l.Z)((0,l.Z)({},V),{background:I}),M={background:I}),s.createElement(g,(0,l.Z)({},_,{prefixCls:L,overlayClassName:z,getTooltipContainer:Z||R||i,ref:t,builtinPlacements:x(),overlay:function(){var t=e.title,o=e.overlay;return 0===t?t:o||t||""}(),visible:B,onVisibleChange:function(t){var o;m(!y()&&t),y()||null===(o=e.onVisibleChange)||void 0===o||o.call(e,t)},onPopupAlign:function(e,t){var o=x(),r=Object.keys(o).filter((function(e){return o[e].points[0]===t.points[0]&&o[e].points[1]===t.points[1]}))[0];if(r){var n=e.getBoundingClientRect(),l={top:"50%",left:"50%"};r.indexOf("top")>=0||r.indexOf("Bottom")>=0?l.top="".concat(n.height-t.offset[1],"px"):(r.indexOf("Top")>=0||r.indexOf("bottom")>=0)&&(l.top="".concat(-t.offset[1],"px")),r.indexOf("left")>=0||r.indexOf("Right")>=0?l.left="".concat(n.width-t.offset[0],"px"):(r.indexOf("right")>=0||r.indexOf("Left")>=0)&&(l.left="".concat(-t.offset[0],"px")),e.style.transformOrigin="".concat(l.left," ").concat(l.top)}},overlayInnerStyle:Q,arrowContent:s.createElement("span",{className:"".concat(L,"-arrow-content"),style:M}),motion:{motionName:(0,N.m)(H,"zoom-big-fast",e.transitionName),motionDeadline:1e3}}),B?(0,C.Tm)(Y,{className:X}):Y)}));k.displayName="Tooltip",k.defaultProps={placement:"top",mouseEnterDelay:.1,mouseLeaveDelay:.1,arrowPointAtCenter:!1,autoAdjustOverflow:!0};var T=k}}]);