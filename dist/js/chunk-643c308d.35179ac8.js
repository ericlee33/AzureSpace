(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-643c308d"],{"159a":function(t,e,n){"use strict";var a=n("45ca"),i=n.n(a);i.a},"45ca":function(t,e,n){},5760:function(t,e,n){},"5ede":function(t,e,n){"use strict";n.r(e);var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"bloginfo-container"},[n("div",{staticClass:"back"},[n("el-button",{attrs:{type:"primary",icon:"el-icon-back"},on:{click:t.backToBlogList}},[t._v("返回")])],1),t._l(t.article,function(e){return n("div",{key:e.id,staticClass:"articles"},[n("div",{staticClass:"header"},[n("h3",{staticClass:"title"},[t._v(t._s(e.title))]),n("p",{staticClass:"time"},[t._v("发表时间:"+t._s(t._f("dateFormat")(e.created_time)))]),n("p",{staticClass:"category"},[t._v("文章类型: "+t._s(e.category))])]),n("p",{staticClass:"content",domProps:{innerHTML:t._s(e.content)}})])}),n("blog-info-ct",{attrs:{id:this.id}})],2)},i=[],s=n("9f2c"),c={data:function(){return{article:[],id:this.$route.params.id}},methods:{addArticle:function(){var t=this;this.$axios.get("/api/getblog/"+this.id).then(function(e){t.article=e.data.bloginfo,console.log(t.article)})},backToBlogList:function(){this.$router.go(-1)}},created:function(){this.addArticle()},components:{"blog-info-ct":s["a"]}},o=c,l=(n("dbdf"),n("2877")),r=Object(l["a"])(o,a,i,!1,null,"66c1926a",null);e["default"]=r.exports},"9f2c":function(t,e,n){"use strict";var a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"comment-container"},[n("h3",[t._v("客官,想说些什么~尽管写下吧!")]),n("hr"),n("div",{staticClass:"add-comment"},[n("el-form",{attrs:{"label-width":"120px",model:t.formLabelAlign}},[n("el-form-item",{attrs:{label:"昵称",required:""}},[n("el-input",{model:{value:t.formLabelAlign.nickname,callback:function(e){t.$set(t.formLabelAlign,"nickname",e)},expression:"formLabelAlign.nickname"}})],1),n("el-form-item",{attrs:{label:"想说些什么~",required:""}},[n("el-input",{attrs:{type:"textarea",placeholder:"来都来了,何不留个足迹呢~"},model:{value:t.formLabelAlign.content,callback:function(e){t.$set(t.formLabelAlign,"content",e)},expression:"formLabelAlign.content"}})],1),n("el-form-item",[n("el-button",{attrs:{type:"primary"},on:{click:t.sendMessageBoard}},[t._v("发表")])],1)],1)],1),n("div",{staticClass:"get-comment-container"},[n("h3",[t._v("评论~")]),n("hr"),t._l(t.comments,function(e,a){return n("div",{key:a,staticClass:"getcomment"},[n("div",{staticClass:"header"},[n("span",{staticClass:"floor"},[t._v("第"+t._s(a+1)+"楼")]),n("span",{staticClass:"nickname"},[t._v(t._s(e.nickname))]),n("span",{staticClass:"time"},[t._v(t._s(t._f("dateFormat")(e.created_time)))])]),n("p",{staticClass:"content"},[t._v(t._s(e.content))])])})],2)])},i=[],s={props:["id"],data:function(){return{comments:[],formLabelAlign:{nickname:"",content:""}}},methods:{sendMessageBoard:function(){var t=this;this.$axios.post("/api/comment",{id:this.id,nickname:this.formLabelAlign.nickname,content:this.formLabelAlign.content}).then(function(e){0===e.data.err_code&&(t.formLabelAlign.nickname="",t.formLabelAlign.content="",t.$message("评论成功!"),t.getComment())}).catch(function(t){console.log(t)})},getComment:function(){var t=this;this.$axios.get("/api/comment/"+this.id).then(function(e){t.comments=e.data.comment}).catch(function(t){console.log(t)})}},created:function(){this.getComment()}},c=s,o=(n("159a"),n("2877")),l=Object(o["a"])(c,a,i,!1,null,"5a5433a5",null);e["a"]=l.exports},dbdf:function(t,e,n){"use strict";var a=n("5760"),i=n.n(a);i.a}}]);
//# sourceMappingURL=chunk-643c308d.35179ac8.js.map