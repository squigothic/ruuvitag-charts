(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{241:function(e,t,n){},243:function(e,t,n){"use strict";n.r(t);var a=n(1),r=n.n(a),s=n(66),i=n.n(s),u=n(67),o=n(68),m=n(73),l=n(69),c=n(74),p=n(70),d=n.n(p);n(98).config();var f="http://localhost:3001/measurements",h=function(){return console.log("Tehd\xe4\xe4n pyynt\xf6 osoitteeseen ".concat(f)),d.a.get(f)},b=n(71),y=function(e){var t=e.measurements,n=t.map(function(e){return e.temperature}),a=t.map(function(e){return e.relativehumidity}),s={labels:t.map(function(e){return new Date(1e3*e.timestamp)}).map(function(e){return e.getHours()+":"+("0"+e.getMinutes()).slice(-2)}),datasets:[{label:"L\xe4mp\xf6tila",yAxisID:"tempAxis",borderColor:"rgb(255, 99, 132)",fill:!1,data:n},{label:"Ilmankosteus",yAxisID:"humAxis",borderColor:"rgb(45, 94, 132",fill:!1,data:a}]};return r.a.createElement("div",{className:"chartContainer"},r.a.createElement(b.a,{data:s,options:{title:{display:!0,text:"L\xe4mp\xf6tila ja suhteellinen ilmankosteus"},scales:{yAxes:[{type:"linear",position:"left",id:"tempAxis"},{type:"linear",position:"right",id:"humAxis"}]}}}))},v=function(e){function t(e){var n;return Object(u.a)(this,t),(n=Object(m.a)(this,Object(l.a)(t).call(this,e))).getGroupedBy=function(e,t){var n={},a=[];return e.forEach(function(e){e[t]in n||(n[e[t]]=[],a.push(n[e[t]])),n[e[t]].push(e)}),a},n.state={measurements1:[],measurements2:[]},n}return Object(c.a)(t,e),Object(o.a)(t,[{key:"componentDidMount",value:function(){var e=this;h().then(function(t){var n=e.getGroupedBy(t.data,"tagname");e.setState({measurements1:n[0],measurements2:n[1]})})}},{key:"render",value:function(){return r.a.createElement("div",null,r.a.createElement("h1",{className:"titleCentered"},"Ruuvifrontend"),r.a.createElement(y,{measurements:this.state.measurements1}),r.a.createElement(y,{measurements:this.state.measurements2}))}}]),t}(r.a.Component);n(241);i.a.render(r.a.createElement(v,null),document.getElementById("root"))},75:function(e,t,n){e.exports=n(243)}},[[75,2,1]]]);
//# sourceMappingURL=main.70a53b55.chunk.js.map