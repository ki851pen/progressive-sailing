(this["webpackJsonpprogressive-sailing"]=this["webpackJsonpprogressive-sailing"]||[]).push([[4],{110:function(e,t,n){"use strict";n.d(t,"f",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"c",(function(){return r})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return c})),n.d(t,"e",(function(){return d}));var i=n(115),a=n.n(i),o=function(e,t){return"24-hour"===t?new Date(e).toLocaleTimeString("de-DE"):new Date(e).toLocaleTimeString("en-US")},s=function(e,t){return"dd/mm/yy"===t?new Date(e).toLocaleDateString("de-DE"):new Date(e).toLocaleDateString("en-US")},r=function(e,t){return"m"!==t?a()(e).from("m").to("ft-us"):e},l=function(e,t){return"deg"===t?e*(180/Math.PI):e},c=function(e,t){return"m/s"!==t?a()(e).from("m/s").to(t):e},d=function(e,t){return"K"!==t?a()(e).from("K").to(t):e}},121:function(e,t,n){},155:function(e,t,n){},158:function(e,t,n){"use strict";n.r(t);var i=n(38),a=n(39),o=n(41),s=n(40),r=n(15),l=n(42),c=n(0),d=n.n(c),g=n(31),u=n(26),m=(n(121),n(16)),h=n(27),p=n(110);function v(){var e=Object(u.a)(["\n  margin: 10px;\n  box-shadow: ",';\n  transition: 0.3s;\n  border-radius: 10px;\n  display: grid;\n  grid-gap: 5px;\n  grid-template-areas:\n    "time time title title title"\n    "type-icon d1 d2 d3 d4";\n  grid-template-rows: 1fr 4fr;\n  grid-template-columns: 1fr 1fr 1fr 1fr 1fr;\n  padding: 5px;\n']);return v=function(){return e},e}var f=h.a.div(v(),(function(e){return e.id===e.selected?" inset 0 4px 8px 0 rgba(0,0,0,0.2)":"0 4px 8px 0 rgba(0,0,0,0.2)"}));function E(e){var t=Object(p.f)(e.logEntry.content.navigation.datetime.value,e.settings.timeFormat);return d.a.createElement("div",{onClick:e.customClickEvent},d.a.createElement(f,{selected:e.selected,id:e.logEntry.id},d.a.createElement("div",{className:"time"},e.logEntry.content.navigation.datetime?t:"No time available"),d.a.createElement("div",{className:"title"},e.logEntry.content.logType),d.a.createElement("div",{className:"type-icon"},Object(m.b)(e.logEntry.content.logType,"60px","60px")),d.a.createElement("div",{className:"d1"},d.a.createElement(m.a.Position,{longitude:e.logEntry.content.navigation.position.value.longitude,latitude:e.logEntry.content.navigation.position.value.latitude,width:"60px",height:"60px"})),d.a.createElement("div",{className:"d2"},d.a.createElement(m.a.CourseOverGround,{width:"60px",height:"60px",courseOverGround:Object(p.a)(e.logEntry.content.navigation.courseOverGroundTrue.value,e.settings.angle)})),d.a.createElement("div",{className:"d3"},d.a.createElement(m.a.SpeedThroughWater,{width:"60px",height:"60px",speedThroughWater:Object(p.d)(e.logEntry.content.navigation.speedThroughWater.value,e.settings.speed)})),d.a.createElement("div",{className:"d4"},d.a.createElement(m.a.Current,{width:"60px",height:"60px",drift:Object(p.a)(e.logEntry.content.environment.current.value.drift,e.settings.angle),setTrue:Object(p.a)(e.logEntry.content.environment.current.value.setTrue,e.settings.angle)}))))}n(155);var b=n(32),y=n(43),L=n(36),w=Object(c.lazy)((function(){return n.e(6).then(n.bind(null,156))})),O=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(o.a)(this,Object(s.a)(t).call(this,e))).handleWindowSizeChange=function(){n.setState({width:window.innerWidth})},n.state={width:window.innerWidth,selectedLog:null,logs:null},n.selectLog=n.selectLog.bind(Object(r.a)(n)),n.selectPath=n.selectPath.bind(Object(r.a)(n)),n}return Object(l.a)(t,e),Object(a.a)(t,[{key:"selectPath",value:function(e){this.setState({selectedPath:e}),this.props.selectPath(e)}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleWindowSizeChange)}},{key:"componentDidMount",value:function(){window.addEventListener("resize",this.handleWindowSizeChange)}},{key:"selectLog",value:function(e){this.setState({selectedLog:e}),this.props.selectLog(e.id,e.content)}},{key:"render",value:function(){return this.state.width<=500?d.a.createElement(x,{settings:this.props.settings,logs:this.props.logs,selectLog:this.selectLog,selectPath:this.selectPath}):d.a.createElement(j,{settings:this.props.settings,logs:this.props.logs,selectedLog:this.state.selectedLog,selectLog:this.selectLog})}}]),t}(d.a.Component);t.default=Object(b.b)((function(e){return{logs:Object(y.b)(e),selectedLog:Object(y.c)(e),settings:Object(y.e)(e)}}),{selectLog:L.c,selectPath:L.d})(O);function j(e){var t=this;return d.a.createElement("div",{className:"logs-view"},d.a.createElement("div",{className:"log-list"},e.logs&&e.logs.length?e.logs.slice(0).reverse().map((function(n,i){return d.a.createElement(E,{key:n.id,logEntry:n,customClickEvent:e.selectLog.bind(t,n),settings:e.settings,selected:e.selectedLog?e.selectedLog.id:null})})):"No Logs yet!"),!e.selectedLog&&d.a.createElement("div",null,"Select Log"),e.selectedLog&&d.a.createElement(w,null))}function x(e){return d.a.createElement("div",{className:"log-list App-content"},e.logs&&e.logs.length?e.logs.slice(0).reverse().map((function(t,n){return d.a.createElement(g.b,{key:"log-".concat(t.id),to:{pathname:"/logs/details"},onClick:function(){e.selectLog(t),e.selectPath("/logs/details")}},d.a.createElement(E,{logEntry:t,settings:e.settings}))})):"No Logs yet!")}}}]);
//# sourceMappingURL=4.148de225.chunk.js.map