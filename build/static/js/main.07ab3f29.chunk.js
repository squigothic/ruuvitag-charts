(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{238:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(66),i=n.n(s),u=n(67),o=n(68),l=n(73),m=n(69),c=n(74),p=n(70),d=n.n(p),f=function(){return d.a.get("http://localhost:3001/measurements")},h=n(71),b=function(e){var t=e.measurements,n=t.map(function(e){return e.temperature}),a=t.map(function(e){return e.relativehumidity}),s=t.map(function(e){return new Date(1e3*e.timestamp)}).map(function(e){return e.getHours()+":"+("0"+e.getMinutes()).slice(-2)});console.log(s),console.log("l\xe4mp\xf6tilat: ",n);var i={labels:s,datasets:[{label:"L\xe4mp\xf6tila",yAxisID:"tempAxis",borderColor:"rgb(255, 99, 132)",fill:!1,data:n},{label:"Ilmankosteus",yAxisID:"humAxis",borderColor:"rgb(45, 94, 132",fill:!1,data:a}]};return r.a.createElement("div",null,r.a.createElement(h.a,{data:i,options:{title:{display:!0,text:"L\xe4mp\xf6tila ja suhteellinen ilmankosteus"},scales:{yAxes:[{type:"linear",position:"left",id:"tempAxis"},{type:"linear",position:"right",id:"humAxis"}]}}}))},g=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(l.a)(this,Object(m.a)(t).call(this,e))).getGroupedBy=function(e,t){var n={},a=[];return console.log(t),e.forEach(function(e){e[t]in n||(n[e[t]]=[],a.push(n[e[t]])),n[e[t]].push(e)}),a},n.state={measurements1:[],measurements2:[]},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;f().then(function(t){var n=e.getGroupedBy(t.data,"tagname");e.setState({measurements1:n[0],measurements2:n[1]})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Ruuvifrontend"),r.a.createElement(b,{measurements:this.state.measurements1}),r.a.createElement(b,{measurements:this.state.measurements2}))}}]),t}(r.a.Component);i.a.render(r.a.createElement(g,null),document.getElementById("root"))},75:function(e,t,n){e.exports=n(238)}},[[75,2,1]]]);
//# sourceMappingURL=main.07ab3f29.chunk.js.map