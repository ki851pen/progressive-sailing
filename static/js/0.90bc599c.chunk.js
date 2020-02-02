(this["webpackJsonpprogressive-sailing"]=this["webpackJsonpprogressive-sailing"]||[]).push([[0],Array(109).concat([function(r,n){var e=Object.prototype.toString,a=RegExp("^"+String(e).replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/toString| for [^\]]+/g,".*?")+"$");r.exports=a},,function(r,n,e){var a=e(112);r.exports=function(r){return!(!r||!a[typeof r])}},function(r,n){r.exports={boolean:!1,function:!0,object:!0,number:!1,string:!1,undefined:!1}},function(r,n,e){var a=e(119),t=e(109),o={configurable:!1,enumerable:!1,value:null,writable:!1},i=function(){try{var r={},n=t.test(n=Object.defineProperty)&&n,e=n(r,r,r)&&n}catch(a){}return e}(),l=i?function(r,n){o.value=n,i(r,"__bindData__",o)}:a;r.exports=l},,function(r,n,e){var a,t,o=e(116),i=e(123),l={length:e(132),area:e(133),mass:e(134),volume:e(135),each:e(136),temperature:e(137),time:e(138),digital:e(139),partsPer:e(140),speed:e(141),pace:e(142),pressure:e(143),current:e(144),voltage:e(145),power:e(146),reactivePower:e(147),apparentPower:e(148),energy:e(149),reactiveEnergy:e(150),volumeFlowRate:e(151),illuminance:e(152),frequency:e(153),angle:e(154)};(t=function(r,n){this.val=n?r/n:r}).prototype.from=function(r){if(this.destination)throw new Error(".from must be called before .to");return this.origin=this.getUnit(r),this.origin||this.throwUnsupportedUnitError(r),this},t.prototype.to=function(r){if(!this.origin)throw new Error(".to must be called after .from");var n,e;if(this.destination=this.getUnit(r),this.destination||this.throwUnsupportedUnitError(r),this.origin.abbr===this.destination.abbr)return this.val;if(this.destination.measure!=this.origin.measure)throw new Error("Cannot convert incompatible measures of "+this.destination.measure+" and "+this.origin.measure);return n=this.val*this.origin.unit.to_anchor,this.origin.unit.anchor_shift&&(n-=this.origin.unit.anchor_shift),this.origin.system!=this.destination.system&&("function"===typeof(e=l[this.origin.measure]._anchors[this.origin.system].transform)?n=e(n):n*=l[this.origin.measure]._anchors[this.origin.system].ratio),this.destination.unit.anchor_shift&&(n+=this.destination.unit.anchor_shift),n/this.destination.unit.to_anchor},t.prototype.toBest=function(r){if(!this.origin)throw new Error(".toBest must be called after .from");var n;r=Object.assign({exclude:[],cutOffNumber:1},r);return i(this.possibilities(),function(e){var a=this.describe(e);if(-1===r.exclude.indexOf(e)&&a.system===this.origin.system){var t=this.to(e);(!n||t>=r.cutOffNumber&&t<n.val)&&(n={val:t,unit:e,singular:a.singular,plural:a.plural})}}.bind(this)),n},t.prototype.getUnit=function(r){var n;return i(l,(function(e,a){if(i(e,(function(e,t){return"_anchors"!=t&&(i(e,(function(e,o){if(o==r)return n={abbr:r,measure:a,system:t,unit:e},!1})),!n&&void 0)})),n)return!1})),n};var u=function(r){return{abbr:r.abbr,measure:r.measure,system:r.system,singular:r.unit.name.singular,plural:r.unit.name.plural}};t.prototype.describe=function(r){var n=t.prototype.getUnit(r),e=null;try{e=u(n)}catch(a){this.throwUnsupportedUnitError(r)}return e},t.prototype.list=function(r){var n=[];return i(l,(function(e,a){r&&r!==a||i(e,(function(r,e){if("_anchors"==e)return!1;i(r,(function(r,t){n=n.concat(u({abbr:t,measure:a,system:e,unit:r}))}))}))})),n},t.prototype.throwUnsupportedUnitError=function(r){var n=[];throw i(l,(function(r,e){i(r,(function(r,e){if("_anchors"==e)return!1;n=n.concat(o(r))}))})),new Error("Unsupported unit "+r+", use one of: "+n.join(", "))},t.prototype.possibilities=function(r){var n=[];return this.origin||r?(r=r||this.origin.measure,i(l[r],(function(r,e){if("_anchors"==e)return!1;n=n.concat(o(r))}))):i(o(l),(function(r){i(l[r],(function(r,e){if("_anchors"==e)return!1;n=n.concat(o(r))}))})),n},t.prototype.measures=function(){return o(l)},a=function(r){return new t(r)},r.exports=a},function(r,n,e){var a=e(111),t=e(109),o=e(122),i=t.test(i=Object.keys)&&i,l=i?function(r){return a(r)?i(r):[]}:o;r.exports=l},function(r,n,e){var a=e(124),t=e(129),o=e(113),i=e(130),l=/^\s*function[ \n\r\t]+\w/,u=/\bthis\b/,s=Function.prototype.toString;r.exports=function(r,n,e){if("function"!=typeof r)return t;if("undefined"==typeof n||!("prototype"in r))return r;var c=r.__bindData__;if("undefined"==typeof c&&(i.funcNames&&(c=!r.name),!(c=c||!i.funcDecomp))){var p=s.call(r);i.funcNames||(c=!l.test(p)),c||(c=u.test(p),o(r,c))}if(!1===c||!0!==c&&1&c[1])return r;switch(e){case 1:return function(e){return r.call(n,e)};case 2:return function(e,a){return r.call(n,e,a)};case 3:return function(e,a,t){return r.call(n,e,a,t)};case 4:return function(e,a,t,o){return r.call(n,e,a,t,o)}}return a(r,n)}},function(r,n,e){(function(n){var a=e(111),t=(e(119),e(109).test(t=Object.create)&&t);function o(r,n){return a(r)?t(r):{}}t||(o=function(){function r(){}return function(e){if(a(e)){r.prototype=e;var t=new r;r.prototype=null}return t||n.Object()}}()),r.exports=o}).call(this,e(55))},function(r,n){r.exports=function(){}},function(r,n){r.exports=function(r,n,e){n||(n=0),"undefined"==typeof e&&(e=r?r.length:0);for(var a=-1,t=e-n||0,o=Array(t<0?0:t);++a<t;)o[a]=r[n+a];return o}},,function(r,n,e){var a=e(112),t=Object.prototype.hasOwnProperty;r.exports=function(r){var n,e=r,o=[];if(!e)return o;if(!a[typeof r])return o;for(n in e)t.call(e,n)&&o.push(n);return o}},function(r,n,e){var a=e(117),t=e(131);r.exports=function(r,n,e){var o=-1,i=r?r.length:0;if(n=n&&"undefined"==typeof e?n:a(n,e,3),"number"==typeof i)for(;++o<i&&!1!==n(r[o],o,r););else t(r,n);return r}},function(r,n,e){var a=e(125),t=(e(109),e(120));r.exports=function(r,n){return arguments.length>2?a(r,17,t(arguments,2),null,n):a(r,1,null,null,n)}},function(r,n,e){var a=e(126),t=e(127),o=e(128),i=[].push;r.exports=function r(n,e,l,u,s,c){var p=1&e,m=4&e,h=16&e,g=32&e;if(!(2&e)&&!o(n))throw new TypeError;h&&!l.length&&(e&=-17,h=l=!1),g&&!u.length&&(e&=-33,g=u=!1);var _=n&&n.__bindData__;return _&&!0!==_?(_=_.slice(),!p||1&_[1]||(_[4]=s),!p&&1&_[1]&&(e|=8),!m||4&_[1]||(_[5]=c),h&&i.apply(_[2]||(_[2]=[]),l),g&&i.apply(_[3]||(_[3]=[]),u),_[1]|=e,r.apply(null,_)):(1==e||17===e?a:t)([n,e,l,u,s,c])}},function(r,n,e){var a=e(118),t=e(111),o=e(113),i=[].push;r.exports=function(r){var n=r[0],e=r[2],l=r[4];function u(){if(e){var r=e.slice();i.apply(r,arguments)}if(this instanceof u){var o=a(n.prototype),s=n.apply(o,r||arguments);return t(s)?s:o}return n.apply(l,r||arguments)}return o(u,r),u}},function(r,n,e){var a=e(118),t=e(111),o=e(113),i=e(120),l=[].push;r.exports=function r(n){var e=n[0],u=n[1],s=n[2],c=n[3],p=n[4],m=n[5],h=1&u,g=2&u,_=4&u,f=8&u,d=e;function v(){var n=h?p:this;if(s){var o=s.slice();l.apply(o,arguments)}if((c||_)&&(o||(o=i(arguments)),c&&l.apply(o,c),_&&o.length<m))return u|=16,r([e,f?u:-4&u,o,null,p,m]);if(o||(o=arguments),g&&(e=n[d]),this instanceof v){n=a(e.prototype);var b=e.apply(n,o);return t(b)?b:n}return e.apply(n,o)}return o(v,n),v}},function(r,n){r.exports=function(r){return"function"==typeof r}},function(r,n){r.exports=function(r){return r}},function(r,n,e){(function(n){var a=e(109),t={};t.funcDecomp=!a.test(n.WinRTError)&&/\bthis\b/.test((function(){return this})),t.funcNames="string"==typeof Function.name,r.exports=t}).call(this,e(55))},function(r,n,e){var a=e(117),t=e(116),o=e(112);r.exports=function(r,n,e){var i,l=r,u=l;if(!l)return u;if(!o[typeof l])return u;n=n&&"undefined"==typeof e?n:a(n,e,3);for(var s=-1,c=o[typeof l]&&t(l),p=c?c.length:0;++s<p;)if(!1===n(l[i=c[s]],i,r))return u;return u}},function(r,n){var e,a;e={mm:{name:{singular:"Millimeter",plural:"Millimeters"},to_anchor:.001},cm:{name:{singular:"Centimeter",plural:"Centimeters"},to_anchor:.01},m:{name:{singular:"Meter",plural:"Meters"},to_anchor:1},km:{name:{singular:"Kilometer",plural:"Kilometers"},to_anchor:1e3}},a={in:{name:{singular:"Inch",plural:"Inches"},to_anchor:1/12},yd:{name:{singular:"Yard",plural:"Yards"},to_anchor:3},"ft-us":{name:{singular:"US Survey Foot",plural:"US Survey Feet"},to_anchor:1.000002},ft:{name:{singular:"Foot",plural:"Feet"},to_anchor:1},mi:{name:{singular:"Mile",plural:"Miles"},to_anchor:5280}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"m",ratio:3.28084},imperial:{unit:"ft",ratio:1/3.28084}}}},function(r,n){var e,a;e={mm2:{name:{singular:"Square Millimeter",plural:"Square Millimeters"},to_anchor:1e-6},cm2:{name:{singular:"Centimeter",plural:"Centimeters"},to_anchor:1e-4},m2:{name:{singular:"Square Meter",plural:"Square Meters"},to_anchor:1},ha:{name:{singular:"Hectare",plural:"Hectares"},to_anchor:1e4},km2:{name:{singular:"Square Kilometer",plural:"Square Kilometers"},to_anchor:1e6}},a={in2:{name:{singular:"Square Inch",plural:"Square Inches"},to_anchor:1/144},yd2:{name:{singular:"Square Yard",plural:"Square Yards"},to_anchor:9},ft2:{name:{singular:"Square Foot",plural:"Square Feet"},to_anchor:1},ac:{name:{singular:"Acre",plural:"Acres"},to_anchor:43560},mi2:{name:{singular:"Square Mile",plural:"Square Miles"},to_anchor:27878400}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"m2",ratio:10.7639},imperial:{unit:"ft2",ratio:1/10.7639}}}},function(r,n){var e,a;e={mcg:{name:{singular:"Microgram",plural:"Micrograms"},to_anchor:1e-6},mg:{name:{singular:"Milligram",plural:"Milligrams"},to_anchor:.001},g:{name:{singular:"Gram",plural:"Grams"},to_anchor:1},kg:{name:{singular:"Kilogram",plural:"Kilograms"},to_anchor:1e3},mt:{name:{singular:"Metric Tonne",plural:"Metric Tonnes"},to_anchor:1e6}},a={oz:{name:{singular:"Ounce",plural:"Ounces"},to_anchor:1/16},lb:{name:{singular:"Pound",plural:"Pounds"},to_anchor:1},t:{name:{singular:"Ton",plural:"Tons"},to_anchor:2e3}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"g",ratio:1/453.592},imperial:{unit:"lb",ratio:453.592}}}},function(r,n){var e,a;e={mm3:{name:{singular:"Cubic Millimeter",plural:"Cubic Millimeters"},to_anchor:1e-6},cm3:{name:{singular:"Cubic Centimeter",plural:"Cubic Centimeters"},to_anchor:.001},ml:{name:{singular:"Millilitre",plural:"Millilitres"},to_anchor:.001},cl:{name:{singular:"Centilitre",plural:"Centilitres"},to_anchor:.01},dl:{name:{singular:"Decilitre",plural:"Decilitres"},to_anchor:.1},l:{name:{singular:"Litre",plural:"Litres"},to_anchor:1},kl:{name:{singular:"Kilolitre",plural:"Kilolitres"},to_anchor:1e3},m3:{name:{singular:"Cubic meter",plural:"Cubic meters"},to_anchor:1e3},km3:{name:{singular:"Cubic kilometer",plural:"Cubic kilometers"},to_anchor:1e12},krm:{name:{singular:"Matsked",plural:"Matskedar"},to_anchor:.001},tsk:{name:{singular:"Tesked",plural:"Teskedar"},to_anchor:.005},msk:{name:{singular:"Matsked",plural:"Matskedar"},to_anchor:.015},kkp:{name:{singular:"Kaffekopp",plural:"Kaffekoppar"},to_anchor:.15},glas:{name:{singular:"Glas",plural:"Glas"},to_anchor:.2},kanna:{name:{singular:"Kanna",plural:"Kannor"},to_anchor:2.617}},a={tsp:{name:{singular:"Teaspoon",plural:"Teaspoons"},to_anchor:1/6},Tbs:{name:{singular:"Tablespoon",plural:"Tablespoons"},to_anchor:.5},in3:{name:{singular:"Cubic inch",plural:"Cubic inches"},to_anchor:.55411},"fl-oz":{name:{singular:"Fluid Ounce",plural:"Fluid Ounces"},to_anchor:1},cup:{name:{singular:"Cup",plural:"Cups"},to_anchor:8},pnt:{name:{singular:"Pint",plural:"Pints"},to_anchor:16},qt:{name:{singular:"Quart",plural:"Quarts"},to_anchor:32},gal:{name:{singular:"Gallon",plural:"Gallons"},to_anchor:128},ft3:{name:{singular:"Cubic foot",plural:"Cubic feet"},to_anchor:957.506},yd3:{name:{singular:"Cubic yard",plural:"Cubic yards"},to_anchor:25852.7}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"l",ratio:33.8140226},imperial:{unit:"fl-oz",ratio:1/33.8140226}}}},function(r,n){var e;e={ea:{name:{singular:"Each",plural:"Each"},to_anchor:1},dz:{name:{singular:"Dozen",plural:"Dozens"},to_anchor:12}},r.exports={metric:e,imperial:{},_anchors:{metric:{unit:"ea",ratio:1}}}},function(r,n){var e,a;e={C:{name:{singular:"degree Celsius",plural:"degrees Celsius"},to_anchor:1,anchor_shift:0},K:{name:{singular:"degree Kelvin",plural:"degrees Kelvin"},to_anchor:1,anchor_shift:273.15}},a={F:{name:{singular:"degree Fahrenheit",plural:"degrees Fahrenheit"},to_anchor:1},R:{name:{singular:"degree Rankine",plural:"degrees Rankine"},to_anchor:1,anchor_shift:459.67}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"C",transform:function(r){return r/(5/9)+32}},imperial:{unit:"F",transform:function(r){return 5/9*(r-32)}}}}},function(r,n){var e;e={ns:{name:{singular:"Nanosecond",plural:"Nanoseconds"},to_anchor:1e-9},mu:{name:{singular:"Microsecond",plural:"Microseconds"},to_anchor:1e-6},ms:{name:{singular:"Millisecond",plural:"Milliseconds"},to_anchor:.001},s:{name:{singular:"Second",plural:"Seconds"},to_anchor:1},min:{name:{singular:"Minute",plural:"Minutes"},to_anchor:60},h:{name:{singular:"Hour",plural:"Hours"},to_anchor:3600},d:{name:{singular:"Day",plural:"Days"},to_anchor:86400},week:{name:{singular:"Week",plural:"Weeks"},to_anchor:604800},month:{name:{singular:"Month",plural:"Months"},to_anchor:2629800},year:{name:{singular:"Year",plural:"Years"},to_anchor:31557600}},r.exports={metric:e,_anchors:{metric:{unit:"s",ratio:1}}}},function(r,n){var e,a;e={b:{name:{singular:"Bit",plural:"Bits"},to_anchor:1},Kb:{name:{singular:"Kilobit",plural:"Kilobits"},to_anchor:1024},Mb:{name:{singular:"Megabit",plural:"Megabits"},to_anchor:1048576},Gb:{name:{singular:"Gigabit",plural:"Gigabits"},to_anchor:1073741824},Tb:{name:{singular:"Terabit",plural:"Terabits"},to_anchor:1099511627776}},a={B:{name:{singular:"Byte",plural:"Bytes"},to_anchor:1},KB:{name:{singular:"Kilobyte",plural:"Kilobytes"},to_anchor:1024},MB:{name:{singular:"Megabyte",plural:"Megabytes"},to_anchor:1048576},GB:{name:{singular:"Gigabyte",plural:"Gigabytes"},to_anchor:1073741824},TB:{name:{singular:"Terabyte",plural:"Terabytes"},to_anchor:1099511627776}},r.exports={bits:e,bytes:a,_anchors:{bits:{unit:"b",ratio:1/8},bytes:{unit:"B",ratio:8}}}},function(r,n){var e;e={ppm:{name:{singular:"Part-per Million",plural:"Parts-per Million"},to_anchor:1},ppb:{name:{singular:"Part-per Billion",plural:"Parts-per Billion"},to_anchor:.001},ppt:{name:{singular:"Part-per Trillion",plural:"Parts-per Trillion"},to_anchor:1e-6},ppq:{name:{singular:"Part-per Quadrillion",plural:"Parts-per Quadrillion"},to_anchor:1e-9}},r.exports={metric:e,imperial:{},_anchors:{metric:{unit:"ppm",ratio:1e-6}}}},function(r,n){var e,a;e={"m/s":{name:{singular:"Metre per second",plural:"Metres per second"},to_anchor:3.6},"km/h":{name:{singular:"Kilometre per hour",plural:"Kilometres per hour"},to_anchor:1}},a={"m/h":{name:{singular:"Mile per hour",plural:"Miles per hour"},to_anchor:1},knot:{name:{singular:"Knot",plural:"Knots"},to_anchor:1.150779},"ft/s":{name:{singular:"Foot per second",plural:"Feet per second"},to_anchor:.681818}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"km/h",ratio:1/1.609344},imperial:{unit:"m/h",ratio:1.609344}}}},function(r,n){var e,a;e={"min/km":{name:{singular:"Minute per kilometre",plural:"Minutes per kilometre"},to_anchor:.06},"s/m":{name:{singular:"Second per metre",plural:"Seconds per metre"},to_anchor:1}},a={"min/mi":{name:{singular:"Minute per mile",plural:"Minutes per mile"},to_anchor:.0113636},"s/ft":{name:{singular:"Second per foot",plural:"Seconds per foot"},to_anchor:1}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"s/m",ratio:.3048},imperial:{unit:"s/ft",ratio:1/.3048}}}},function(r,n){var e,a;e={Pa:{name:{singular:"pascal",plural:"pascals"},to_anchor:.001},kPa:{name:{singular:"kilopascal",plural:"kilopascals"},to_anchor:1},MPa:{name:{singular:"megapascal",plural:"megapascals"},to_anchor:1e3},hPa:{name:{singular:"hectopascal",plural:"hectopascals"},to_anchor:.1},bar:{name:{singular:"bar",plural:"bar"},to_anchor:100},torr:{name:{singular:"torr",plural:"torr"},to_anchor:101325/76e4}},a={psi:{name:{singular:"pound per square inch",plural:"pounds per square inch"},to_anchor:.001},ksi:{name:{singular:"kilopound per square inch",plural:"kilopound per square inch"},to_anchor:1}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"kPa",ratio:.00014503768078},imperial:{unit:"psi",ratio:6894.76000045014}}}},function(r,n){var e;e={A:{name:{singular:"Ampere",plural:"Amperes"},to_anchor:1},mA:{name:{singular:"Milliampere",plural:"Milliamperes"},to_anchor:.001},kA:{name:{singular:"Kiloampere",plural:"Kiloamperes"},to_anchor:1e3}},r.exports={metric:e,_anchors:{metric:{unit:"A",ratio:1}}}},function(r,n){var e;e={V:{name:{singular:"Volt",plural:"Volts"},to_anchor:1},mV:{name:{singular:"Millivolt",plural:"Millivolts"},to_anchor:.001},kV:{name:{singular:"Kilovolt",plural:"Kilovolts"},to_anchor:1e3}},r.exports={metric:e,_anchors:{metric:{unit:"V",ratio:1}}}},function(r,n){var e;e={W:{name:{singular:"Watt",plural:"Watts"},to_anchor:1},mW:{name:{singular:"Milliwatt",plural:"Milliwatts"},to_anchor:.001},kW:{name:{singular:"Kilowatt",plural:"Kilowatts"},to_anchor:1e3},MW:{name:{singular:"Megawatt",plural:"Megawatts"},to_anchor:1e6},GW:{name:{singular:"Gigawatt",plural:"Gigawatts"},to_anchor:1e9}},r.exports={metric:e,_anchors:{metric:{unit:"W",ratio:1}}}},function(r,n){var e;e={VAR:{name:{singular:"Volt-Ampere Reactive",plural:"Volt-Amperes Reactive"},to_anchor:1},mVAR:{name:{singular:"Millivolt-Ampere Reactive",plural:"Millivolt-Amperes Reactive"},to_anchor:.001},kVAR:{name:{singular:"Kilovolt-Ampere Reactive",plural:"Kilovolt-Amperes Reactive"},to_anchor:1e3},MVAR:{name:{singular:"Megavolt-Ampere Reactive",plural:"Megavolt-Amperes Reactive"},to_anchor:1e6},GVAR:{name:{singular:"Gigavolt-Ampere Reactive",plural:"Gigavolt-Amperes Reactive"},to_anchor:1e9}},r.exports={metric:e,_anchors:{metric:{unit:"VAR",ratio:1}}}},function(r,n){var e;e={VA:{name:{singular:"Volt-Ampere",plural:"Volt-Amperes"},to_anchor:1},mVA:{name:{singular:"Millivolt-Ampere",plural:"Millivolt-Amperes"},to_anchor:.001},kVA:{name:{singular:"Kilovolt-Ampere",plural:"Kilovolt-Amperes"},to_anchor:1e3},MVA:{name:{singular:"Megavolt-Ampere",plural:"Megavolt-Amperes"},to_anchor:1e6},GVA:{name:{singular:"Gigavolt-Ampere",plural:"Gigavolt-Amperes"},to_anchor:1e9}},r.exports={metric:e,_anchors:{metric:{unit:"VA",ratio:1}}}},function(r,n){var e;e={Wh:{name:{singular:"Watt-hour",plural:"Watt-hours"},to_anchor:3600},mWh:{name:{singular:"Milliwatt-hour",plural:"Milliwatt-hours"},to_anchor:3.6},kWh:{name:{singular:"Kilowatt-hour",plural:"Kilowatt-hours"},to_anchor:36e5},MWh:{name:{singular:"Megawatt-hour",plural:"Megawatt-hours"},to_anchor:36e8},GWh:{name:{singular:"Gigawatt-hour",plural:"Gigawatt-hours"},to_anchor:36e11},J:{name:{singular:"Joule",plural:"Joules"},to_anchor:1},kJ:{name:{singular:"Kilojoule",plural:"Kilojoules"},to_anchor:1e3}},r.exports={metric:e,_anchors:{metric:{unit:"J",ratio:1}}}},function(r,n){var e;e={VARh:{name:{singular:"Volt-Ampere Reactive Hour",plural:"Volt-Amperes Reactive Hour"},to_anchor:1},mVARh:{name:{singular:"Millivolt-Ampere Reactive Hour",plural:"Millivolt-Amperes Reactive Hour"},to_anchor:.001},kVARh:{name:{singular:"Kilovolt-Ampere Reactive Hour",plural:"Kilovolt-Amperes Reactive Hour"},to_anchor:1e3},MVARh:{name:{singular:"Megavolt-Ampere Reactive Hour",plural:"Megavolt-Amperes Reactive Hour"},to_anchor:1e6},GVARh:{name:{singular:"Gigavolt-Ampere Reactive Hour",plural:"Gigavolt-Amperes Reactive Hour"},to_anchor:1e9}},r.exports={metric:e,_anchors:{metric:{unit:"VARh",ratio:1}}}},function(r,n){var e,a;e={"mm3/s":{name:{singular:"Cubic Millimeter per second",plural:"Cubic Millimeters per second"},to_anchor:1e-6},"cm3/s":{name:{singular:"Cubic Centimeter per second",plural:"Cubic Centimeters per second"},to_anchor:.001},"ml/s":{name:{singular:"Millilitre per second",plural:"Millilitres per second"},to_anchor:.001},"cl/s":{name:{singular:"Centilitre per second",plural:"Centilitres per second"},to_anchor:.01},"dl/s":{name:{singular:"Decilitre per second",plural:"Decilitres per second"},to_anchor:.1},"l/s":{name:{singular:"Litre per second",plural:"Litres per second"},to_anchor:1},"l/min":{name:{singular:"Litre per minute",plural:"Litres per minute"},to_anchor:1/60},"l/h":{name:{singular:"Litre per hour",plural:"Litres per hour"},to_anchor:1/3600},"kl/s":{name:{singular:"Kilolitre per second",plural:"Kilolitres per second"},to_anchor:1e3},"kl/min":{name:{singular:"Kilolitre per minute",plural:"Kilolitres per minute"},to_anchor:50/3},"kl/h":{name:{singular:"Kilolitre per hour",plural:"Kilolitres per hour"},to_anchor:5/18},"m3/s":{name:{singular:"Cubic meter per second",plural:"Cubic meters per second"},to_anchor:1e3},"m3/min":{name:{singular:"Cubic meter per minute",plural:"Cubic meters per minute"},to_anchor:50/3},"m3/h":{name:{singular:"Cubic meter per hour",plural:"Cubic meters per hour"},to_anchor:5/18},"km3/s":{name:{singular:"Cubic kilometer per second",plural:"Cubic kilometers per second"},to_anchor:1e12}},a={"tsp/s":{name:{singular:"Teaspoon per second",plural:"Teaspoons per second"},to_anchor:1/6},"Tbs/s":{name:{singular:"Tablespoon per second",plural:"Tablespoons per second"},to_anchor:.5},"in3/s":{name:{singular:"Cubic inch per second",plural:"Cubic inches per second"},to_anchor:.55411},"in3/min":{name:{singular:"Cubic inch per minute",plural:"Cubic inches per minute"},to_anchor:.55411/60},"in3/h":{name:{singular:"Cubic inch per hour",plural:"Cubic inches per hour"},to_anchor:.55411/3600},"fl-oz/s":{name:{singular:"Fluid Ounce per second",plural:"Fluid Ounces per second"},to_anchor:1},"fl-oz/min":{name:{singular:"Fluid Ounce per minute",plural:"Fluid Ounces per minute"},to_anchor:1/60},"fl-oz/h":{name:{singular:"Fluid Ounce per hour",plural:"Fluid Ounces per hour"},to_anchor:1/3600},"cup/s":{name:{singular:"Cup per second",plural:"Cups per second"},to_anchor:8},"pnt/s":{name:{singular:"Pint per second",plural:"Pints per second"},to_anchor:16},"pnt/min":{name:{singular:"Pint per minute",plural:"Pints per minute"},to_anchor:4/15},"pnt/h":{name:{singular:"Pint per hour",plural:"Pints per hour"},to_anchor:1/225},"qt/s":{name:{singular:"Quart per second",plural:"Quarts per second"},to_anchor:32},"gal/s":{name:{singular:"Gallon per second",plural:"Gallons per second"},to_anchor:128},"gal/min":{name:{singular:"Gallon per minute",plural:"Gallons per minute"},to_anchor:32/15},"gal/h":{name:{singular:"Gallon per hour",plural:"Gallons per hour"},to_anchor:8/225},"ft3/s":{name:{singular:"Cubic foot per second",plural:"Cubic feet per second"},to_anchor:957.506},"ft3/min":{name:{singular:"Cubic foot per minute",plural:"Cubic feet per minute"},to_anchor:957.506/60},"ft3/h":{name:{singular:"Cubic foot per hour",plural:"Cubic feet per hour"},to_anchor:957.506/3600},"yd3/s":{name:{singular:"Cubic yard per second",plural:"Cubic yards per second"},to_anchor:25852.7},"yd3/min":{name:{singular:"Cubic yard per minute",plural:"Cubic yards per minute"},to_anchor:25852.7/60},"yd3/h":{name:{singular:"Cubic yard per hour",plural:"Cubic yards per hour"},to_anchor:25852.7/3600}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"l/s",ratio:33.8140227},imperial:{unit:"fl-oz/s",ratio:1/33.8140227}}}},function(r,n){var e,a;e={lx:{name:{singular:"Lux",plural:"Lux"},to_anchor:1}},a={"ft-cd":{name:{singular:"Foot-candle",plural:"Foot-candles"},to_anchor:1}},r.exports={metric:e,imperial:a,_anchors:{metric:{unit:"lx",ratio:1/10.76391},imperial:{unit:"ft-cd",ratio:10.76391}}}},function(r,n){var e;e={mHz:{name:{singular:"millihertz",plural:"millihertz"},to_anchor:.001},Hz:{name:{singular:"hertz",plural:"hertz"},to_anchor:1},kHz:{name:{singular:"kilohertz",plural:"kilohertz"},to_anchor:1e3},MHz:{name:{singular:"megahertz",plural:"megahertz"},to_anchor:1e6},GHz:{name:{singular:"gigahertz",plural:"gigahertz"},to_anchor:1e9},THz:{name:{singular:"terahertz",plural:"terahertz"},to_anchor:1e12},rpm:{name:{singular:"rotation per minute",plural:"rotations per minute"},to_anchor:1/60},"deg/s":{name:{singular:"degree per second",plural:"degrees per second"},to_anchor:1/360},"rad/s":{name:{singular:"radian per second",plural:"radians per second"},to_anchor:1/(2*Math.PI)}},r.exports={metric:e,_anchors:{frequency:{unit:"hz",ratio:1}}}},function(r,n){var e;e={rad:{name:{singular:"radian",plural:"radians"},to_anchor:180/Math.PI},deg:{name:{singular:"degree",plural:"degrees"},to_anchor:1},grad:{name:{singular:"gradian",plural:"gradians"},to_anchor:.9},arcmin:{name:{singular:"arcminute",plural:"arcminutes"},to_anchor:1/60},arcsec:{name:{singular:"arcsecond",plural:"arcseconds"},to_anchor:1/3600}},r.exports={metric:e,_anchors:{metric:{unit:"deg",ratio:1}}}}])]);
//# sourceMappingURL=0.90bc599c.chunk.js.map