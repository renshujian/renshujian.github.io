(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{O0dG:function(e,t,n){"use strict";n.r(t);var r=n("q1tI"),o=n.n(r),a=(n("Z2Ku"),n("L9s1"),n("cHd8")),c=n.n(a),u=n("h4Zl"),s=n.n(u),i={ZH_CN:"zh-cn",EN_US:"en-us",JA_JP:"ja-jp"};Object.defineProperty(i,"default",{value:i.ZH_CN});var l=n("uYSz"),p=o.a.createContext(i.default);p.displayName="LangContext";n("f3/d");var d=n("d3yt"),m=n("dn5J"),y=n.n(m),f=n("qKvR");function b(e){var t=e.name,n=e.date,r=e.text;return Object(f.c)(d.c,{className:y.a.root},Object(f.c)(d.g,{icon:"badge",iconSize:d.g.SIZE_LARGE}),Object(f.c)("span",{className:y.a.name},t),Object(f.c)("span",null,n),r&&Object(f.c)(d.k,{ellipsize:!0},r))}function v(e){var t=e.data,n=Object(r.useContext)(p);return Object(f.c)(d.c,null,t.map((function(e){var t=e.name,r=e.date,o=e.details;return Object(f.c)(b,{key:t[n],name:t[n],date:new Date(r).toLocaleDateString(n),text:null==o?void 0:o[n]})})))}var g=n("u5xM"),h=n.n(g);function j(e){var t=e.name,n=e.value;return Object(f.c)("div",null,Object(f.c)("div",{className:h.a.label},t,": ",n),Object(f.c)(d.h,{animate:!1,intent:"success",stripes:!1,value:n/1e4}))}var O=n("3D5I"),k=n.n(O);function x(e){var t=e.data,n=Object(r.useContext)(p);return Object(f.c)(d.c,{className:k.a.root},t.map((function(e){var t=e.name,r=e.value;return Object(f.c)(j,{key:t[n],name:t[n],value:r})})))}var _=n("5mLj"),S=n.n(_);function P(e){var t=e.src,n=e.level,r=n.level,o=n.exp;return Object(f.c)(d.c,{className:S.a.root,elevation:1},Object(f.c)("img",{src:t,alt:"avatar"}),Object(f.c)("br",null),"LEVEL: ",r,Object(f.c)(d.h,{animate:!1,intent:"success",stripes:!1,value:o}))}var D=n("A2+M"),M=n("sZpT"),w=n.n(M);function C(e){var t=e.pages,n=t.length,o=Object(r.useState)(0),a=o[0],c=o[1],u=0===a,s=a===n-1;return Object(f.c)(d.c,null,Object(f.c)("div",{className:w.a.header},Object(f.c)(d.a,{disabled:u,icon:"chevron-left",onClick:function(){return c(a-1)},minimal:!0}),Object(f.c)("span",{className:w.a.title},t[a].frontmatter.title||a+1),Object(f.c)(d.a,{disabled:s,icon:"chevron-right",onClick:function(){return c(a+1)},minimal:!0})),Object(f.c)(d.e,null),Object(f.c)(D.MDXRenderer,null,t[a].body))}n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V");function X(e){var t=e.options,n=e.selectedValue,r=e.onChange,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,["options","selectedValue","onChange"]);function a(e){e.currentTarget.value!==n&&r(e.currentTarget.value)}return Object(f.c)(d.b,o,t.map((function(e){var t=e.value,r=e.label;return Object(f.c)(d.a,{key:t,value:t,text:r||t,active:n===t,onClick:a})})))}var L=n("F20+"),z=n.n(L);function K(e){var t=e.icon,n=e.name,r=e.progress,o=e.text;return Object(f.c)(d.j,{className:z.a.root,large:!0,minimal:!0,round:!0},Object(f.c)(d.g,{icon:t}),Object(f.c)("span",null,n),Object(f.c)(d.i,{value:r,intent:"success",size:d.i.SIZE_SMALL}),o&&Object(f.c)(d.k,{ellipsize:!0},o))}var N=n("k9Wj"),E=n.n(N);function T(e){var t=e.data,n=Object(r.useContext)(p);return Object(f.c)(d.c,{className:E.a.root},t.map((function(e){var t=e.name,r=e.icon,o=e.progress,a=e.details;return Object(f.c)(K,{key:t[n],icon:r,name:t[n],progress:o,text:null==a?void 0:a[n]})})))}var W,I,J=function(){function e(t){t=new Date(t);var n=new Date,r={year:n.getFullYear(),month:n.getMonth()+1,day:n.getDate()},o=t.getFullYear(),a=t.getMonth()+1,c=t.getDate();r.day<c&&(r.month-=1,r.day+=e.daysInMonth(r.month)),r.month<a&&(r.year-=1,r.month+=12),this.level=r.year-o,this.exp=(r.month-a)/12}return e.daysInMonth=function(e){switch(e){case 1:case 3:case 5:case 7:case 8:case 10:case 12:return 31;case 4:case 6:case 9:case 11:return 30;case 2:return 28;default:return NaN}},e}();function A(e,t){return{attributes:e.jobs[t].attributes,skills:e.skills.filter((function(n){return n.scopes.includes(e.jobs[t].scope)}))}}function F(e){var t=e.attributes,n=e.skills;return Object(f.c)(o.a.Fragment,null,Object(f.c)(x,{data:t}),Object(f.c)(T,{data:n}))}function Z(){var e=l.data,t=Object(r.useContext)(p),n=e.allFile.nodes.map((function(e){return e.childMdx})).filter((function(e){return e.frontmatter.lang===t}));return Object(f.c)(C,{pages:n})}var q="status",B="profile",U="skills",H="achievements",V="job1",R="job2",G="job3",Y=[{value:i.ZH_CN,label:"中文"},{value:i.EN_US,label:"English"},{value:i.JA_JP,label:"日本語"}],Q=((W={})[i.ZH_CN]=[{value:q,label:"基本属性"},{value:V,label:"职：软件工程师"},{value:R,label:"职：魔法使"},{value:G,label:"职：炼金术士"},{value:B,label:"人物档案"},{value:U,label:"持有技能"},{value:H,label:"成就一览"}],W[i.EN_US]=[{value:q,label:"STATUS"},{value:V,label:"JOB: SE"},{value:R,label:"JOB: OTAKU"},{value:G,label:"JOB: CHEMIST"},{value:B,label:"PROFILE"},{value:U,label:"SKILLS"},{value:H,label:"ACHIEVEMENTS"}],W[i.JA_JP]=[{value:q,label:"ステータス"},{value:V,label:"ジョブ・ソフトウェアエンジニア"},{value:R,label:"ジョブ・オタク"},{value:G,label:"ジョブ・化学者"},{value:B,label:"プロファイル"},{value:U,label:"スキル"},{value:H,label:"アチーブメント"}],W),$=((I={avatar:{src:s.a,level:new J(c.a.birth)}})[q]={attributes:c.a.attributes,skills:c.a.skills.filter((function(e){return e.scopes.includes("common")}))},I[V]=A(c.a,0),I[R]=A(c.a,1),I[G]=A(c.a,2),I);function ee(e){var t=e.panel;switch(t){case q:case V:case R:case G:return Object(f.c)(F,$[t]);case B:return Object(f.c)(Z,null);case U:return Object(f.c)(T,{data:c.a.skills});case H:return Object(f.c)(v,{data:c.a.achievements});default:return Object(f.c)("strong",null,"Under Construction")}}var te=n("i+iz"),ne=n.n(te),re=n("RXBc"),oe=n("Wbzz");function ae(){var e=Object(r.useState)(i.default),t=e[0],n=e[1],o=Object(r.useState)(Q[t][0].value),a=o[0],c=o[1];return Object(f.c)(p.Provider,{value:t},Object(f.c)(re.default,null),Object(f.c)(d.d,{className:ne.a.dialog,isOpen:!0,onClose:function(){return Object(oe.b)("/")}},Object(f.c)("nav",{className:ne.a.nav},Object(f.c)(P,$.avatar),Object(f.c)(d.e,null),Object(f.c)(X,{options:Y,selectedValue:t,onChange:n,fill:!0}),Object(f.c)(d.e,null),Object(f.c)(X,{className:ne.a.menu,options:Q[t],selectedValue:a,onChange:c,fill:!0,vertical:!0})),Object(f.c)("main",{className:ne.a.main},Object(f.c)(ee,{panel:a}))))}n.d(t,"default",(function(){return ae}))},cHd8:function(e,t){e.exports={birth:"1985-08-10T00:00:00.000Z",attributes:[{name:{"zh-cn":"力量","en-us":"STR"},value:2e3},{name:{"zh-cn":"耐力","en-us":"VIT"},value:3e3},{name:{"zh-cn":"智力","en-us":"INT"},value:5e3},{name:{"zh-cn":"意志","en-us":"SPI"},value:5e3},{name:{"zh-cn":"敏捷","en-us":"AGI"},value:1e3},{name:{"zh-cn":"幸运","en-us":"LUC"},value:9999}],jobs:[{name:{"zh-cn":"软件工程师","en-us":"Software Engineer"},scope:"software",attributes:[{name:{"zh-cn":"计算机体系结构","en-us":"Computer Architecture"},value:5},{name:{"zh-cn":"操作系统","en-us":"Operating System"},value:100},{name:{"zh-cn":"编程语言","en-us":"Programming Language"},value:500},{name:{"zh-cn":"算法与数据结构","en-us":"Algorithms & Data Structures"},value:100},{name:{"zh-cn":"软件设计","en-us":"Software Design"},value:500},{name:{"zh-cn":"软件工程","en-us":"Software Engineering"},value:500}]},{name:{"zh-cn":"阿宅","en-us":"OTAKU"},scope:"otaku",attributes:[]},{name:{"zh-cn":"化学家","en-us":"Chemist"},scope:"chemistry",attributes:[]}],skills:[{name:{"zh-cn":"英语","en-us":"English"},scopes:["common","language"],icon:"chat",progress:.4},{name:{"zh-cn":"日语","en-us":"Japanese"},scopes:["common","language"],icon:"chat",progress:.4},{name:{"zh-cn":"JavaScript","en-us":"JavaScript"},scopes:["software","programming language"],icon:null,progress:.6},{name:{"zh-cn":"Node.js","en-us":"Node.js"},scopes:["software","runtime"],icon:null,progress:.4},{name:{"zh-cn":"C#","en-us":"C#"},scopes:["software","programming language"],icon:null,progress:.2},{name:{"zh-cn":".NET","en-us":".NET"},scopes:["software","runtime"],icon:null,progress:.1},{name:{"zh-cn":"Java","en-us":"Java"},scopes:["software","programming language"],icon:null,progress:.2},{name:{"zh-cn":"DevOps","en-us":"DevOps"},scopes:["software","methodology"],icon:null,progress:.3},{name:{"zh-cn":"Kubernetes","en-us":"Kubernetes"},scopes:["software","platform"],icon:null,progress:.4}],achievements:[{name:{"zh-cn":"计算机技术与软件专业技术资格 中级 软件设计师","en-us":"Software Designer, Qualification of Computer and Software Professional"},date:"2017-05-20T00:00:00.000Z"},{name:{"zh-cn":"会计从业资格证书","en-us":"Certificate of Accounting Profession"},date:"2017-02-14T00:00:00.000Z"},{name:{"zh-cn":"日本语能力测试1级","en-us":"Japanese-Language Proficiency Test Level 1","ja-jp":"日本語能力試験1級"},date:"2009-08-28T00:00:00.000Z"},{name:{"zh-cn":"北京化工大学应用化学理学学士","en-us":"Bachelor, Applied Chemistry, BUCT"},date:"2008-07-02T00:00:00.000Z"},{name:{"zh-cn":"大学英语四级考试","en-us":"CET4"},date:"2006-06-01T00:00:00.000Z"}]}},h4Zl:function(e,t,n){e.exports=n.p+"static/avatar-d5ecb203402b3237188a0f7b39ef96c2.jpg"},uYSz:function(e){e.exports=JSON.parse('{"data":{"allFile":{"nodes":[{"id":"e842c0ad-6b2f-5400-b9ea-127cc5f8c765","childMdx":{"id":"b6486d86-f64c-51ae-b2aa-bc09ef6ca123","body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"lang\\": \\"en-us\\",\\n  \\"page\\": 1,\\n  \\"title\\": \\"EP1\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"blockquote\\", null, mdx(\\"p\\", {\\n    parentName: \\"blockquote\\"\\n  }, \\"Our battle has just begun!\\")));\\n}\\n;\\nMDXContent.isMDXComponent = true;","frontmatter":{"lang":"en-us","page":1,"title":"EP1"}}},{"id":"a8635c77-c07e-5b88-afc9-d5400efcb25d","childMdx":{"id":"2ab2c39a-77e8-5fb5-8188-5a14b77bd0e5","body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"lang\\": \\"ja-jp\\",\\n  \\"page\\": 1,\\n  \\"title\\": \\"其ノ壱\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"blockquote\\", null, mdx(\\"p\\", {\\n    parentName: \\"blockquote\\"\\n  }, \\"\\\\u4FFA\\\\u305F\\\\u3061\\\\u306E\\\\u6226\\\\u3044\\\\u306F\\\\u3053\\\\u308C\\\\u304B\\\\u3089\\\\u3060\\\\uFF01\\")));\\n}\\n;\\nMDXContent.isMDXComponent = true;","frontmatter":{"lang":"ja-jp","page":1,"title":"其ノ壱"}}},{"id":"a2b694cf-8c34-58a7-ab32-bdc6a787eb90","childMdx":{"id":"c536adb4-5596-54ab-90ef-b40f1e7bc7c8","body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"lang\\": \\"zh-cn\\",\\n  \\"page\\": 1,\\n  \\"title\\": \\"我是谁？\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }), mdx(\\"blockquote\\", null, mdx(\\"p\\", {\\n    parentName: \\"blockquote\\"\\n  }, \\"\\\\u6211\\\\u4EEC\\\\u7684\\\\u6218\\\\u6597\\\\u624D\\\\u521A\\\\u521A\\\\u5F00\\\\u59CB\\\\uFF01\\")));\\n}\\n;\\nMDXContent.isMDXComponent = true;","frontmatter":{"lang":"zh-cn","page":1,"title":"我是谁？"}}},{"id":"b67faf59-caee-5761-893c-cc26af98ee17","childMdx":{"id":"971e7780-8184-59bf-a557-3d00965f2a49","body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"lang\\": \\"en-us\\",\\n  \\"page\\": 2\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }));\\n}\\n;\\nMDXContent.isMDXComponent = true;","frontmatter":{"lang":"en-us","page":2,"title":""}}},{"id":"3e86a41b-4389-567c-a8e0-5fe703961ea5","childMdx":{"id":"e526c311-d38f-5e34-ae0f-9713b6f2c836","body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"lang\\": \\"ja-jp\\",\\n  \\"page\\": 2\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }));\\n}\\n;\\nMDXContent.isMDXComponent = true;","frontmatter":{"lang":"ja-jp","page":2,"title":""}}},{"id":"9c70d1ee-7b8e-5b62-8904-d97046723c6f","childMdx":{"id":"f473749f-b56a-50d1-a17e-559a05af3167","body":"function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }\\n\\nfunction _objectWithoutProperties(source, excluded) { if (source == null) return {}; var target = _objectWithoutPropertiesLoose(source, excluded); var key, i; if (Object.getOwnPropertySymbols) { var sourceSymbolKeys = Object.getOwnPropertySymbols(source); for (i = 0; i < sourceSymbolKeys.length; i++) { key = sourceSymbolKeys[i]; if (excluded.indexOf(key) >= 0) continue; if (!Object.prototype.propertyIsEnumerable.call(source, key)) continue; target[key] = source[key]; } } return target; }\\n\\nfunction _objectWithoutPropertiesLoose(source, excluded) { if (source == null) return {}; var target = {}; var sourceKeys = Object.keys(source); var key, i; for (i = 0; i < sourceKeys.length; i++) { key = sourceKeys[i]; if (excluded.indexOf(key) >= 0) continue; target[key] = source[key]; } return target; }\\n\\n/* @jsx mdx */\\nvar _frontmatter = {\\n  \\"lang\\": \\"zh-cn\\",\\n  \\"page\\": 2,\\n  \\"title\\": \\"我从哪里来？\\"\\n};\\n\\nvar makeShortcode = function makeShortcode(name) {\\n  return function MDXDefaultShortcode(props) {\\n    console.warn(\\"Component \\" + name + \\" was not imported, exported, or provided by MDXProvider as global scope\\");\\n    return mdx(\\"div\\", props);\\n  };\\n};\\n\\nvar layoutProps = {\\n  _frontmatter: _frontmatter\\n};\\nvar MDXLayout = \\"wrapper\\";\\nreturn function MDXContent(_ref) {\\n  var components = _ref.components,\\n      props = _objectWithoutProperties(_ref, [\\"components\\"]);\\n\\n  return mdx(MDXLayout, _extends({}, layoutProps, props, {\\n    components: components,\\n    mdxType: \\"MDXLayout\\"\\n  }));\\n}\\n;\\nMDXContent.isMDXComponent = true;","frontmatter":{"lang":"zh-cn","page":2,"title":"我从哪里来？"}}}]}}}')}}]);
//# sourceMappingURL=component---src-pages-about-index-js-d76ebb733ec7b43a86ac.js.map