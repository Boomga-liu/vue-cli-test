(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6f89b296"],{"25f0":function(t,e,a){"use strict";var n=a("6eeb"),s=a("825a"),c=a("d039"),o=a("ad6d"),r="toString",i=RegExp.prototype,l=i[r],u=c((function(){return"/a/b"!=l.call({source:"a",flags:"b"})})),d=l.name!=r;(u||d)&&n(RegExp.prototype,r,(function(){var t=s(this),e=String(t.source),a=t.flags,n=String(void 0===a&&t instanceof RegExp&&!("flags"in i)?o.call(t):a);return"/"+e+"/"+n}),{unsafe:!0})},8418:function(t,e,a){"use strict";var n=a("c04e"),s=a("9bf2"),c=a("5c6c");t.exports=function(t,e,a){var o=n(e);o in t?s.f(t,o,c(0,a)):t[o]=a}},"99af":function(t,e,a){"use strict";var n=a("23e7"),s=a("d039"),c=a("e8b5"),o=a("861d"),r=a("7b0b"),i=a("50c4"),l=a("8418"),u=a("65f0"),d=a("1dde"),g=a("b622"),h=a("2d00"),f=g("isConcatSpreadable"),m=9007199254740991,p="Maximum allowed index exceeded",v=h>=51||!s((function(){var t=[];return t[f]=!1,t.concat()[0]!==t})),b=d("concat"),D=function(t){if(!o(t))return!1;var e=t[f];return void 0!==e?!!e:c(t)},w=!v||!b;n({target:"Array",proto:!0,forced:w},{concat:function(t){var e,a,n,s,c,o=r(this),d=u(o,0),g=0;for(e=-1,n=arguments.length;e<n;e++)if(c=-1===e?o:arguments[e],D(c)){if(s=i(c.length),g+s>m)throw TypeError(p);for(a=0;a<s;a++,g++)a in c&&l(d,g,c[a])}else{if(g>=m)throw TypeError(p);l(d,g++,c)}return d.length=g,d}})},b0c0:function(t,e,a){var n=a("83ab"),s=a("9bf2").f,c=Function.prototype,o=c.toString,r=/^\s*function ([^ (]*)/,i="name";n&&!(i in c)&&s(c,i,{configurable:!0,get:function(){try{return o.call(this).match(r)[1]}catch(t){return""}}})},da3a:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container checkout py-5"},[a("loading",{attrs:{active:t.isLoading},on:{"update:active":function(e){t.isLoading=e}}}),t._m(0),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-5 ps-md-0 mb-4 mb-md-0"},[a("p",[t._v("房間名稱："+t._s(t.roomDetail.name))]),a("p",[t._v("訂房日期："+t._s(t.startDate+" ~ "+t.endDate))]),a("p",[t._v(" 訂房金額："+t._s(t._f("currency")(t.totalPrice))+" "),a("span",{staticClass:"text-black-50"},[t._v("(共 "+t._s(t.checkDate.dateRange)+" 晚)")])]),a("p",[t._v("聯絡姓名："+t._s(t.guest.guestName))]),a("p",{staticClass:"mb-0"},[t._v("連絡電話："+t._s(t.guest.guestPhone))])]),a("div",{staticClass:"col-md-5 d-flex align-items-center pe-md-0"},[a("div",{staticClass:"row"},t._l(t.roomDetail.imageUrl,(function(t,e){return a("div",{key:e,staticClass:"col-4"},[a("img",{staticClass:"img-cover img-shadow-sm",attrs:{src:t,alt:"room_image"}})])})),0)])]),t._m(1),a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-5 ps-0"},[a("div",{staticClass:"bg-dark white-outline-bg"},[a("button",{staticClass:"btn btn-dark btn-lg border border-white white-outline",on:{click:t.back}},[t._v("回上一步")])])]),a("div",{staticClass:"col-5 d-flex justify-content-end pe-0"},[a("div",{staticClass:"bg-dark white-outline-bg"},[a("button",{staticClass:"btn btn-dark btn-lg border border-white white-outline",on:{click:t.booking}},[t._v("確認預約")])])])])],1)},s=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center"},[a("div",{staticClass:"col-md-10 ps-md-0 mb-5"},[a("h4",{staticClass:"text-center-custom fs-2"},[t._v("請確認預約資訊")])])])},function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"row justify-content-center my-4"},[a("div",{staticClass:"col-md-10 line"})])}],c=(a("d3b7"),a("25f0"),a("99af"),a("b0c0"),{data:function(){return{isLoading:!1,roomDetail:JSON.parse(sessionStorage.getItem("roomDetail"))||{},checkDate:JSON.parse(sessionStorage.getItem("range"))||{},guest:JSON.parse(sessionStorage.getItem("guestData"))||{},start:"",end:"",year:"",month:"",day:"",dateArray:[]}},methods:{back:function(){this.$router.go(-1)},booking:function(){var t=this;t.isLoading=!0,t.start=new Date(t.checkDate.start),t.end=new Date(t.checkDate.end);while(t.end-t.start>=0)t.year=t.start.getFullYear(),t.month=1===(t.start.getMonth()+1).toString().length?"0"+(t.start.getMonth()+1).toString():t.start.getMonth()+1,t.day=1===t.start.getDate().toString().length?"0"+t.start.getDate():t.start.getDate(),t.dateArray.push("".concat(t.year,"-").concat(t.month,"-").concat(t.day)),t.start.setDate(t.start.getDate()+1);var e="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/rooms"),a="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/room/").concat(t.roomDetail.id),n={Authorization:"Bearer ".concat("xr4Pnle0DHdqboMEG0mooHCpgXqwXSBKtV8pqH4RwhhYc7maueofsDelpSEY"),Accept:"application/json","Content-Type":"application/json"},s={name:t.guest.guestName,tel:t.guest.guestPhone,date:t.dateArray};t.$http.delete(e,{headers:n}).then((function(e){t.$http.post(a,s,{headers:n}).then((function(e){e.data.success&&(t.isLoading=!1,setTimeout((function(){t.$bus.$emit("message:push","您已成功預約".concat(t.roomDetail.name,"囉！"),"success","check")}),400))}))}))},removeBooking:function(){var t="".concat("https://challenge.thef2e.com/api/thef2e2019/stage6","/rooms"),e={Authorization:"Bearer ".concat("xr4Pnle0DHdqboMEG0mooHCpgXqwXSBKtV8pqH4RwhhYc7maueofsDelpSEY")};this.$http.delete(t,{headers:e}).then((function(t){}))}},computed:{startDate:function(){var t=new Date(this.checkDate.start),e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return"".concat(e,"/").concat(a,"/").concat(n)},endDate:function(){var t=new Date(this.checkDate.end),e=t.getFullYear(),a=t.getMonth()+1,n=t.getDate();return"".concat(e,"/").concat(a,"/").concat(n)},totalPrice:function(){var t=new Date(this.checkDate.start),e=new Date(this.checkDate.end),a=t.getDay(),n=e.getDay(),s=this.checkDate.dateRange,c=0,o=0,r=0,i=0;return s<=6?(a>n?c+=1===a||6===a?2:3:0===a&&(c+=2),o=s-c):(r=Math.round((s+1)/7*3),c+=r,0!==a&&n-a>2?c-=2:a<n||a<3&&0===n?c-=1:3===a&&0===n&&(c+=1),o=s-c),i=1500*c+1380*o,i}}}),o=c,r=a("2877"),i=Object(r["a"])(o,n,s,!1,null,null,null);e["default"]=i.exports}}]);
//# sourceMappingURL=chunk-6f89b296.fc40781f.js.map