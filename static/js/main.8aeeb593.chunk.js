(this.webpackJsonpreact_clock=this.webpackJsonpreact_clock||[]).push([[0],{13:function(t,e,c){},14:function(t,e,c){"use strict";c.r(e);var n=c(7),o=c.n(n),a=c(2),i=c(3),l=c(5),s=c(4),r=c(1),d=c(0),u=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={today:new Date},t.timerIdforClock=0,t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.timerIdforClock=window.setInterval((function(){t.setState({today:new Date}),window.console.info(t.state.today.toUTCString().slice(-12,-4))}),1e3)}},{key:"componentDidUpdate",value:function(t){var e=this.props.clockName;t.clockName!==e&&window.console.debug("Renamed from ".concat(t.clockName," to ").concat(e))}},{key:"componentWillUnmount",value:function(){clearInterval(this.timerIdforClock)}},{key:"render",value:function(){var t=this.state.today;return Object(d.jsxs)("div",{className:"Clock",children:[Object(d.jsx)("strong",{className:"Clock__name",children:this.props.clockName})," time is ",Object(d.jsx)("span",{className:"Clock__time",children:t.toUTCString().slice(-12,-4)})]})}}]),c}(r.Component);c(13);function k(){var t=Date.now().toString().slice(-4);return"Clock-".concat(t)}var m=function(t){Object(l.a)(c,t);var e=Object(s.a)(c);function c(){var t;Object(a.a)(this,c);for(var n=arguments.length,o=new Array(n),i=0;i<n;i++)o[i]=arguments[i];return(t=e.call.apply(e,[this].concat(o))).state={hasClock:!0,clockName:"Clock-0"},t.clockId=0,t.clockVisible=function(){t.setState({hasClock:!0})},t.clockHidden=function(e){e.preventDefault(),t.setState({hasClock:!1})},t}return Object(i.a)(c,[{key:"componentDidMount",value:function(){var t=this;this.clockId=window.setInterval((function(){t.setState({clockName:k()})}),3300),document.addEventListener("click",this.clockVisible),document.addEventListener("contextmenu",this.clockHidden)}},{key:"componentWillUnmount",value:function(){clearInterval(this.clockId),document.removeEventListener("click",this.clockVisible),document.removeEventListener("click",this.clockHidden)}},{key:"render",value:function(){return Object(d.jsxs)("div",{className:"App",children:[Object(d.jsx)("h1",{children:"React clock"}),this.state.hasClock&&Object(d.jsx)(u,{clockName:this.state.clockName})]})}}]),c}(r.Component);o.a.render(Object(d.jsx)(m,{}),document.getElementById("root"))}},[[14,1,2]]]);
//# sourceMappingURL=main.8aeeb593.chunk.js.map