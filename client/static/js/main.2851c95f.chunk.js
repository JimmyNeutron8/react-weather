(window["webpackJsonpweather-react"]=window["webpackJsonpweather-react"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={"clear-day":a(15),"clear-night":a(16),cloudy:a(17),"partly-cloudy-day":a(18),"partly-cloudy-night":a(19),rain:a(20),sleet:a(21),snow:a(22),wind:a(23)}},,,function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){e.exports=a.p+"static/media/clear-day.02f11d1f.svg"},function(e,t,a){e.exports=a.p+"static/media/clear-night.3e4be6c9.svg"},function(e,t,a){e.exports=a.p+"static/media/cloudy.5ef472e5.svg"},function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-day.eee4f601.svg"},function(e,t,a){e.exports=a.p+"static/media/partly-cloudy-night.96cc1826.svg"},function(e,t,a){e.exports=a.p+"static/media/rain.1006b328.svg"},function(e,t,a){e.exports=a.p+"static/media/sleet.055defa0.svg"},function(e,t,a){e.exports=a.p+"static/media/snow.e583d545.svg"},function(e,t,a){e.exports=a.p+"static/media/wind.78a95530.svg"},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(3),i=a.n(c),l=a(4),s=a(5),o=a(8),u=a(6),m=a(1),h=a(9),p=function(e){return r.a.createElement("div",null,r.a.createElement("h1",{className:"main-heading"},"React Weather"),r.a.createElement("input",{className:"button primary",type:"button",value:"USE CURRENT LOCATION",onClick:e.onClickGeolocate}),r.a.createElement("input",{className:"button",type:"button",value:"USE CITY NAME",onClick:e.onClickCity}))},d=function(e){return r.a.createElement("div",null,r.a.createElement("h1",null,"City Name"),r.a.createElement("form",{onSubmit:e.onSubmit},r.a.createElement("input",{type:"text",placeholder:"Start typing city...",onChange:e.onChange}),r.a.createElement("input",{class:"button primary",type:"submit",value:"GO"})))},y=function(e){var t=["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],a=e.weather.forecast.map(function(e){return r.a.createElement("div",{className:"forecast-list-item"},r.a.createElement("p",null,t[e.day]),r.a.createElement("img",{src:e.icon,alt:e.icon}),r.a.createElement("p",{className:"low-temp"},e.low),r.a.createElement("p",{className:"high-temp"},e.high))});return r.a.createElement("div",null,r.a.createElement("h1",null,"Today"),r.a.createElement("img",{className:"current-icon",src:e.weather.forecast[0].icon,alt:e.weather.forecast[0].icon}),r.a.createElement("div",{className:"current-temps-container"},r.a.createElement("p",{className:"low-temp"},e.weather.forecast[0].low),r.a.createElement("p",{className:"current-temp"},e.weather.currentTemp),r.a.createElement("p",{className:"high-temp"},e.weather.forecast[0].high)),r.a.createElement("div",{className:"forecast-container"},a))},f=function(){return r.a.createElement("footer",null,r.a.createElement("a",{href:"https://darksky.net/poweredby/"},"Powered by Dark Sky"),r.a.createElement("div",null,"Icons made by ",r.a.createElement("a",{href:"https://www.flaticon.com/authors/freepik",title:"Freepik"},"Freepik")," from ",r.a.createElement("a",{href:"https://www.flaticon.com/",title:"Flaticon"},"www.flaticon.com")," is licensed by ",r.a.createElement("a",{href:"http://creativecommons.org/licenses/by/3.0/",title:"Creative Commons BY 3.0",target:"_blank",rel:"noopener noreferrer"},"CC 3.0 BY")))},w=function(){return r.a.createElement("div",{className:"loader-container"},r.a.createElement("div",{className:"loader"}))},E=a(7),g=a.n(E);function v(e,t,a){var n=new XMLHttpRequest;n.onreadystatechange=function(){if(4===n.readyState&&200===n.status){var e=function(e){for(var t={success:!0,currentTemp:Math.round(e.currently.temperature),forecast:[]},a=0;a<e.daily.data.length;a++){var n=e.daily.data[a],r=new Date;r.setTime(1e3*n.time);var c=r.getDay(),i={icon:g.a[n.icon],low:Math.round(n.temperatureLow),high:Math.round(n.temperatureHigh),day:c};t.forecast.push(i)}return t}(JSON.parse(n.responseText));t(e)}},a?n.open("GET","/api/weather/coords/"+JSON.stringify(e),!0):n.open("GET","/api/weather/address/"+e,!0),n.send(null)}var C=function(e){function t(e){var a;return Object(l.a)(this,t),a=Object(o.a)(this,Object(u.a)(t).call(this,e)),navigator.geolocation?a.state={phase:"input-screen"}:a.state={phase:"city-screen"},a.handleClickGeolocate=a.handleClickGeolocate.bind(Object(m.a)(a)),a.handleClickCity=a.handleClickCity.bind(Object(m.a)(a)),a.handleCitySubmit=a.handleCitySubmit.bind(Object(m.a)(a)),a.handleCityChange=a.handleCityChange.bind(Object(m.a)(a)),a}return Object(h.a)(t,e),Object(s.a)(t,[{key:"handleClickGeolocate",value:function(){var e=this;this.setState({phase:"loading-screen"}),navigator.geolocation.getCurrentPosition(function(t){v({lat:t.coords.latitude,long:t.coords.longitude},function(t){t.success&&e.setState({weatherData:t,phase:"weather-screen"})},!0)})}},{key:"handleClickCity",value:function(){this.setState({phase:"city-screen"})}},{key:"handleCityChange",value:function(e){this.setState({cityName:e.target.value})}},{key:"handleCitySubmit",value:function(e){var t=this;e.preventDefault(),this.setState({phase:"loading-screen"}),v(this.state.cityName,function(e){e.success&&t.setState({weatherData:e,phase:"weather-screen"})},!1)}},{key:"render",value:function(){return"input-screen"===this.state.phase?r.a.createElement("div",{className:"weather-app"},r.a.createElement(p,{onClickGeolocate:this.handleClickGeolocate,onClickCity:this.handleClickCity}),r.a.createElement(f,null)):"city-screen"===this.state.phase?r.a.createElement("div",{className:"weather-app"},r.a.createElement(d,{onChange:this.handleCityChange,onSubmit:this.handleCitySubmit}),r.a.createElement(f,null)):"weather-screen"===this.state.phase?r.a.createElement("div",{className:"weather-app"},r.a.createElement(y,{weather:this.state.weatherData}),r.a.createElement(f,null)):r.a.createElement(w,null)}}]),t}(r.a.Component);a(24);i.a.render(r.a.createElement(C,null),document.querySelector("#root"))}],[[10,1,2]]]);
//# sourceMappingURL=main.2851c95f.chunk.js.map