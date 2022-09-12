(function(){"use strict";var t={6847:function(t,e,r){r(4147);var o=r(6369),a=r(5996),n=r(9425),l=function(){var t=this,e=t._self._c;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},s=[],i=r(1001),u={},c=(0,i.Z)(u,l,s,!1,null,null,null),p=c.exports,d=r(2631),b=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("compound-interest-calculator-form")],1)},f=[],m=r(2900),v=r(452),h=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("b-container",{staticClass:"mt-2"},[e("h2",{staticClass:"mt-4 text-left"},[t._v("Calculadora de Juros Compostos")]),e("h6",{staticClass:"text-left mb-4"},[t._v(" Os juros compostos crescem de forma exponencial, pois sua base de cálculo é sempre em cima do montante anterior. Faça esse cálculo financeiro de forma simples utilizando nossa calculadora! ")]),e("b-jumbotron",{staticClass:"bg-light pl-3 pr-3 pt-4 pb-4",attrs:{"border-variant":"gray"}},[e("h5",{staticClass:"mb-0 text-left text-primary font-weight-bolder"},[t._v(" Simulador de Juros Compostos ")]),e("div",[e("b-row",[e("b-col",{staticClass:"col-12 col-lg-6"},[e("b-form",[e("b-form-group",{staticClass:"text-left mt-4",attrs:{label:"Valor inicial","label-for":"initial-value"}},[e("b-input-group",{attrs:{prepend:"R$"}},[e("currency-input",{attrs:{id:"initial-value",placeHolder:"1.000,00"},model:{value:t.input.initialContribution,callback:function(e){t.$set(t.input,"initialContribution",t._n(e))},expression:"input.initialContribution"}})],1)],1)],1)],1),e("b-col",{staticClass:"col-12 col-lg-6"},[e("b-form",[e("b-form-group",{staticClass:"text-left mt-4",attrs:{label:"Valor mensal","label-for":"monthly-value"}},[e("b-input-group",{attrs:{prepend:"R$"}},[e("currency-input",{attrs:{id:"monthly-value",placeHolder:"1.000,00"},model:{value:t.input.monthlyValue,callback:function(e){t.$set(t.input,"monthlyValue",t._n(e))},expression:"input.monthlyValue"}})],1)],1)],1)],1),e("b-col",{staticClass:"col-12 col-lg-6"},[e("b-form",[e("b-form-group",{staticClass:"text-left mt-4",attrs:{label:"Taxa de Juros","label-for":"interest-rate"}},[e("b-input-group",{attrs:{prepend:"%"}},[e("currency-input",{attrs:{id:"interest-rate",placeHolder:"12,00"},model:{value:t.input.interestPercentage,callback:function(e){t.$set(t.input,"interestPercentage",t._n(e))},expression:"input.interestPercentage"}}),e("b-input-group-append",[e("b-form-select",{attrs:{options:t.interestRateOptions},model:{value:t.input.interestType,callback:function(e){t.$set(t.input,"interestType",t._n(e))},expression:"input.interestType"}})],1)],1)],1)],1)],1),e("b-col",{staticClass:"col-12 col-lg-6"},[e("b-form",[e("b-form-group",{staticClass:"text-left mt-4",attrs:{label:"Período","label-for":"period"}},[e("b-input-group",[e("b-form-input",{staticClass:"mb-2 mb-sm-0 font-weight-bold",attrs:{id:"period",placeholder:"1",type:"number"},model:{value:t.input.period,callback:function(e){t.$set(t.input,"period",t._n(e))},expression:"input.period"}}),e("b-input-group-append",[e("b-form-select",{attrs:{options:t.periodOptions},model:{value:t.input.periodType,callback:function(e){t.$set(t.input,"periodType",e)},expression:"input.periodType"}})],1)],1)],1)],1)],1)],1),e("b-row",{staticClass:"mt-3",attrs:{"align-h":"between"}},[e("b-col",{attrs:{cols:"auto"}},[e("b-button",{staticClass:"pr-5 pl-5",attrs:{size:"lg",pill:"",variant:"primary"},on:{click:t.calculate}},[t._v(" Calcular ")])],1),e("b-col",{attrs:{cols:"auto"}},[e("button",{staticClass:"btn btn-link js-btn-reset-form"},[t._v("Limpar")])])],1)],1)]),t.calculated?e("compound-interest-calculator-result",{attrs:{output:t.output}}):t._e()],1)],1)},g=[],y=r(2482),_=r(2303);const C={CalculatorServices:Symbol("CalculatorServices")};var x=C,w=function(){var t=this,e=t._self._c;t._self._setupProxy;return e("div",[e("b-jumbotron",{staticClass:"bg-light pl-3 pr-3 pt-4 pb-4",attrs:{"border-variant":"gray"}},[e("h5",{staticClass:"mb-4 text-left text-primary font-weight-bolder"},[t._v("Resultado")]),e("b-row",[e("b-col",{staticClass:"col-12 col-lg-4 text-center"},[e("div",{staticClass:"border rounded bg-white p-3"},[e("p",{staticClass:"text-muted"},[t._v("Valor total final")]),e("div",{staticClass:"h4 mb-0 font-weight-bold text-truncate text-muted"},[t._v(" "+t._s(t._f("currency")(t.output.finalTotalValue))+" ")])])]),e("b-col",{staticClass:"col-12 col-lg-4 text-center"},[e("div",{staticClass:"border rounded bg-white p-3"},[e("p",{staticClass:"text-muted"},[t._v("Valor total investido")]),e("div",{staticClass:"h4 mb-0 font-weight-bold text-truncate text-primary"},[t._v(" "+t._s(t._f("currency")(t.output.totalAmountInvested))+" ")])])]),e("b-col",{staticClass:"col-12 col-lg-4 text-center"},[e("div",{staticClass:"border rounded bg-white p-3"},[e("p",{staticClass:"text-muted"},[t._v("Total em juros")]),e("div",{staticClass:"h4 mb-0 font-weight-bold text-truncate text-success"},[t._v(" "+t._s(t._f("currency")(t.output.totalInInterest))+" ")])])])],1),e("b-row",{staticClass:"mt-4"},[e("b-col",[e("b-card",{attrs:{"no-body":""}},[e("b-tabs",{staticClass:"tab-style",attrs:{pills:"",justified:"",card:""}},[e("b-tab",{staticClass:"p-0",attrs:{title:"Tabela",active:""}},[e("div",{staticClass:"tab-content"},[e("table",{staticClass:"table table-bordered table-hover text-center"},[e("thead",[e("tr",[e("th",[t._v("Mês")]),e("th",[t._v("Juros")]),e("th",[t._v("Total Investido")]),e("th",[t._v("Total de Juros")]),e("th",[t._v("Total acumulado")])])]),e("tbody",t._l(t.output.details,(function(r,o){return e("tr",{key:o},[e("td",[t._v(" "+t._s(r.initialContribution?"Valor Inicial":r.month)+" ")]),e("td",[t._v(t._s(t._f("currency")(r.interest)))]),e("td",[t._v(t._s(t._f("currency")(r.totalInvested)))]),e("td",[t._v(t._s(t._f("currency")(r.totalInterest)))]),e("td",[t._v(t._s(t._f("currency")(r.accumulatedTotal)))])])})),0)])])]),e("b-tab",{attrs:{title:"Gráfico"}})],1)],1)],1)],1)],1)],1)},T=[];let O=class extends v.w3{constructor(...t){super(...t),(0,y.Z)(this,"output",void 0)}};(0,m.gn)([(0,v.fI)()],O.prototype,"output",void 0),O=(0,m.gn)([v.wA],O);var S=O,P=S,Z=(0,i.Z)(P,w,T,!1,null,"415d3936",null),j=Z.exports,k=function(){var t=this,e=t._self._c;return e("b-form-input",{ref:"inputRef",staticClass:"font-weight-bold",attrs:{id:t.id,placeholder:t.placeHolder,type:"text"}})},I=[],R=r(516),V={name:"CurrencyInput",props:{placeHolder:String,id:String},setup(){const t={hideNegligibleDecimalDigitsOnFocus:!1,autoDecimalDigits:!0,hideGroupingSeparatorOnFocus:!1,locale:"pt-BR",precision:{min:2,max:2},currency:"BRL",currencyDisplay:"hidden"},{inputRef:e}=(0,R.Er)(t);return{inputRef:e}}},$=V,A=(0,i.Z)($,k,I,!1,null,null,null),D=A.exports;let F=class extends v.w3{constructor(...t){super(...t),(0,y.Z)(this,"calculatorService",void 0),(0,y.Z)(this,"calculated",!1),(0,y.Z)(this,"output",{}),(0,y.Z)(this,"input",{initialContribution:null,monthlyValue:null,interestPercentage:null,interestType:1,period:1,periodType:1}),(0,y.Z)(this,"interestRateOptions",[{value:1,text:"Anual"},{value:2,text:"Mensal"}]),(0,y.Z)(this,"periodOptions",[{value:1,text:"ano(s)"},{value:2,text:"mes(es)"}])}async calculate(){try{let t=await this.calculatorService.calculateCompoundInterest(this.input);this.output=t,this.calculated=!0}catch(t){alert(t)}}};(0,m.gn)([(0,_.inject)(x.CalculatorServices)],F.prototype,"calculatorService",void 0),F=(0,m.gn)([(0,v.wA)({components:{"compound-interest-calculator-result":j,"currency-input":D}})],F);var H=F,J=H,M=(0,i.Z)(J,h,g,!1,null,null,null),B=M.exports;let G=class extends v.w3{};G=(0,m.gn)([(0,v.wA)({components:{"compound-interest-calculator-form":B,"compound-interest-calculator-result":j}})],G);var L=G,z=L,E=(0,i.Z)(z,b,f,!1,null,null,null),N=E.exports;o["default"].use(d.ZP);const X=[{path:"/",name:"home",component:N}],q=new d.ZP({mode:"history",base:"/deployment-test/",routes:X});var K=q,Q=r(3822);o["default"].use(Q.ZP);var U=new Q.ZP.Store({state:{},getters:{},mutations:{},actions:{},modules:{}}),W=r(6265),Y=r.n(W);let tt=class{constructor(){(0,y.Z)(this,"axios",Y()),(0,y.Z)(this,"basePath","https://matheusprdg-calculator.herokuapp.com")}async calculateCompoundInterest(t){const e=await this.axios.get(`${this.basePath}/api/compoundInterest/calculate`,{params:t});return e.data}};tt=(0,m.gn)([(0,_.injectable)()],tt);class et{static with(t=(0,_.getContainer)()){t.bind(x.CalculatorServices).to(tt).inSingletonScope()}}const rt=new Intl.NumberFormat("pt-BR",{style:"currency",currency:"BRL"});function ot(t){return void 0===t?t:rt.format(t)}function at(){o["default"].filter("currency",ot)}r(7024);et["with"](),o["default"].config.productionTip=!1,o["default"].use(a.XG7),o["default"].use(n.A7),at(),new o["default"]({router:K,store:U,render:t=>t(p)}).$mount("#app")}},e={};function r(o){var a=e[o];if(void 0!==a)return a.exports;var n=e[o]={exports:{}};return t[o].call(n.exports,n,n.exports,r),n.exports}r.m=t,function(){var t=[];r.O=function(e,o,a,n){if(!o){var l=1/0;for(c=0;c<t.length;c++){o=t[c][0],a=t[c][1],n=t[c][2];for(var s=!0,i=0;i<o.length;i++)(!1&n||l>=n)&&Object.keys(r.O).every((function(t){return r.O[t](o[i])}))?o.splice(i--,1):(s=!1,n<l&&(l=n));if(s){t.splice(c--,1);var u=a();void 0!==u&&(e=u)}}return e}n=n||0;for(var c=t.length;c>0&&t[c-1][2]>n;c--)t[c]=t[c-1];t[c]=[o,a,n]}}(),function(){r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,{a:e}),e}}(),function(){r.d=function(t,e){for(var o in e)r.o(e,o)&&!r.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:e[o]})}}(),function(){r.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(t){if("object"===typeof window)return window}}()}(),function(){r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)}}(),function(){r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})}}(),function(){var t={143:0};r.O.j=function(e){return 0===t[e]};var e=function(e,o){var a,n,l=o[0],s=o[1],i=o[2],u=0;if(l.some((function(e){return 0!==t[e]}))){for(a in s)r.o(s,a)&&(r.m[a]=s[a]);if(i)var c=i(r)}for(e&&e(o);u<l.length;u++)n=l[u],r.o(t,n)&&t[n]&&t[n][0](),t[n]=0;return r.O(c)},o=self["webpackChunkcompoundinterestcalculatorapp"]=self["webpackChunkcompoundinterestcalculatorapp"]||[];o.forEach(e.bind(null,0)),o.push=e.bind(null,o.push.bind(o))}();var o=r.O(void 0,[998],(function(){return r(6847)}));o=r.O(o)})();
//# sourceMappingURL=app.6d6bd4a0.js.map