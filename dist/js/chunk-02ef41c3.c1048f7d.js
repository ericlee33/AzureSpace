(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-02ef41c3"],{8507:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"news-container"},[n("h2",[t._v("下面是新闻快播~")]),n("div",{staticClass:"demo-image__lazy news-container"},t._l(t.newsinfo,function(e){return n("a",{key:e.app_id,attrs:{href:e.vurl,target:"_blank"}},[n("el-image",{staticClass:"img",attrs:{src:e.bimg,lazy:""}}),n("div",{staticClass:"content"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"info"},[t._v(t._s(e.intro))])])],1)}),0)])},a=[],i={data:function(){return{newsinfo:[]}},created:function(){this.getNewsList()},methods:{getNewsList:function(){var t=this;this.$axios.get("/irs/rcd?cid=56&ext=games&token=c786875b8e04da17b24ea5e332745e0f&num=20&expIds=20190106A13PFT%7C20190108A04MLS&page=0").then(function(e){t.newsinfo=e.data.data}).catch(function(t){console.log(err)})}},computed:{},components:{}},c=i,o=(n("b31d"),n("2877")),r=Object(o["a"])(c,s,a,!1,null,"0e8cafee",null);e["default"]=r.exports},b31d:function(t,e,n){"use strict";var s=n("c22e"),a=n.n(s);a.a},c22e:function(t,e,n){}}]);
//# sourceMappingURL=chunk-02ef41c3.c1048f7d.js.map