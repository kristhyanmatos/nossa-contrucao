(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{301:function(n,t,e){var content=e(306);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[n.i,content,""]]),content.locals&&(n.exports=content.locals);(0,e(60).default)("01cd6cd2",content,!0,{sourceMap:!1})},305:function(n,t,e){"use strict";e(301)},306:function(n,t,e){var r=e(59)(!1);r.push([n.i,".card_index{margin-top:150px;width:70vw;display:flex;flex-direction:column;align-items:center}",""]),n.exports=r},313:function(n,t,e){"use strict";e.r(t);var r=e(25),o=(e(75),e(2),e(61),e(7).default.extend({name:"MaisDemorada",data:function(){return{fields:["codigo","nome","inicio","fim","duracao"],dados:[]}},mounted:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.buscaDadosApi();case 2:n.ordenaMaiorMenorTempoConstrucao(),n.adicionaTempoDuracao();case 4:case"end":return t.stop()}}),t)})))()},methods:{buscaDadosApi:function(){var n=this;return Object(r.a)(regeneratorRuntime.mark((function t(){return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,n.$api.get("/nossas-construcoes").then((function(t){n.dados=t.data})).catch((function(n){return console.log(n)}));case 2:case"end":return t.stop()}}),t)})))()},ordenaMaiorMenorTempoConstrucao:function(){this.dados.sort((function(a,b){var n=a.inicio.substring(2,0),t=a.inicio.substring(5,3),e=a.inicio.substring(10,6),data=e+"-"+t+"-"+n,r=new Date(data);n=a.fim.substring(2,0),t=a.fim.substring(5,3),data=(e=a.fim.substring(10,6))+"-"+t+"-"+n;var o=new Date(data).getTime()-r.getTime();n=b.inicio.substring(2,0),t=b.inicio.substring(5,3),data=(e=b.inicio.substring(10,6))+"-"+t+"-"+n;var c=new Date(data);return n=b.fim.substring(2,0),t=b.fim.substring(5,3),data=(e=b.fim.substring(10,6))+"-"+t+"-"+n,new Date(data).getTime()-c.getTime()-o}))},adicionaTempoDuracao:function(){var n=this;this.dados.forEach((function(element){var t=element.inicio.substring(2,0),e=element.inicio.substring(5,3),r=element.inicio.substring(10,6),data=r+"-"+e+"-"+t,o=new Date(data);t=element.fim.substring(2,0),e=element.fim.substring(5,3),data=(r=element.fim.substring(10,6))+"-"+e+"-"+t;var c=new Date(data).getTime()-o.getTime(),d=n.parseMillisecondsIntoReadableTime(c);element.duracao=d}))},formataDataNorteAmericana:function(data){var n=data.inicio.substring(2,0),t=data.inicio.substring(5,3);return data.inicio.substring(10,6)+"-"+t+"-"+n},parseMillisecondsIntoReadableTime:function(n){var t=n/36e5,e=Math.floor(t),r=e>9?e:"0"+e,o=60*(t-e),c=Math.floor(o),d=c>9?c:"0"+c,f=60*(o-c),m=Math.floor(f);return r+"h:"+d+"m:"+(m>9?m:"0"+m)+"s"}}})),c=(e(305),e(46)),component=Object(c.a)(o,(function(){var n=this,t=n.$createElement,e=n._self._c||t;return e("div",{staticClass:"card_index"},[e("p",{attrs:{id:"construcao_todos_texto"}},[n._v("\n    10 construções com maiores tempos de duração.\n  ")]),n._v(" "),e("b-table",{attrs:{striped:"",hover:"",items:n.dados.slice(0,10),fields:n.fields}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);