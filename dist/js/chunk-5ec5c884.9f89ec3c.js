(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-5ec5c884"],{"3f6d":function(t,e,n){"use strict";var s=n("db3c"),a=n.n(s);a.a},c005:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"home"},[n("div",{staticClass:"demo-image__lazy news-container"},t._l(t.newsinfo,function(e){return n("a",{key:e.app_id,attrs:{href:e.vurl}},[n("el-image",{staticClass:"img",attrs:{src:e.bimg,lazy:""}}),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"info"},[t._v(t._s(e.intro))])])],1)}),0)])},a=[],i={data:function(){return{newsinfo:[]}},created:function(){this.getNewsList()},methods:{getNewsList:function(){var t=this;this.$axios.get("/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0").then(function(e){t.newsinfo=e.data.data}).catch(function(t){console.log(err)})}},computed:{},components:{}},c=i,o=(n("3f6d"),n("2877")),r=Object(o["a"])(c,s,a,!1,null,"4beabc62",null);e["default"]=r.exports},db3c:function(t,e,n){}}]);
//# sourceMappingURL=chunk-5ec5c884.9f89ec3c.js.map