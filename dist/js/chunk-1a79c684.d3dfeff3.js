(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-1a79c684"],{"66eb":function(t,e,a){"use strict";var i=a("f968"),o=a.n(i);o.a},b36b:function(t,e,a){"use strict";a.r(e);var i=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"edit-web-article-container"},[a("div",{staticClass:"form-container"},[a("div",{staticClass:"header"},[a("span",[t._v("请选择要添加的的文章类型: ")]),a("el-radio-group",{model:{value:t.radio,callback:function(e){t.radio=e},expression:"radio"}},[a("el-radio-button",{attrs:{label:"前端技术"}}),a("el-radio-button",{attrs:{label:"个人随笔"}})],1)],1),a("el-form",{attrs:{"label-width":"120px",model:t.formLabelAlign}},[a("el-form-item",{attrs:{label:"文章类型",required:""}},[a("el-input",{attrs:{disabled:""},model:{value:t.formLabelAlign.category,callback:function(e){t.$set(t.formLabelAlign,"category",e)},expression:"formLabelAlign.category"}})],1),a("el-form-item",{attrs:{label:"文章标题",required:""}},[a("el-input",{model:{value:t.formLabelAlign.title,callback:function(e){t.$set(t.formLabelAlign,"title",e)},expression:"formLabelAlign.title"}})],1),a("el-form-item",{attrs:{label:"文章内容",required:""}},[a("VueEditor",{staticStyle:{width:"80%"},attrs:{useCustomImageHandler:""},on:{"image-added":t.handleImageAdded},model:{value:t.formLabelAlign.content,callback:function(e){t.$set(t.formLabelAlign,"content",e)},expression:"formLabelAlign.content"}})],1),a("el-form-item",[a("el-button",{attrs:{type:"primary"},on:{click:t.sendWebArticle}},[t._v("发表")]),a("el-button",{attrs:{type:"primary"},on:{click:t.backToWebAdmin}},[t._v("返回管理界面")])],1)],1)],1)])},o=[],l={data:function(){return{radio:"",formLabelAlign:{title:"",content:"",category:""},id:this.$route.params.id}},methods:{getArticle:function(){var t=this;console.log(this.id),this.$axios.get("/api/getblog/"+this.id).then(function(e){t.formLabelAlign=e.data.bloginfo[0]}).catch(function(t){console.log(t)})},sendWebArticle:function(){var t=this;this.$axios.post("/api/updateblog/"+this.id,{title:this.formLabelAlign.title,content:this.formLabelAlign.content,category:this.formLabelAlign.category}).then(function(e){0===e.data.err_code&&(t.$message("发表成功!"),t.$router.go(-1))}).catch(function(t){console.log(t)})},backToWebAdmin:function(){this.$router.go(-1)},handleImageAdded:function(t,e,a,i){var o=new FormData;o.append("file",t),console.log(o),this.$axios({url:"/api/upload",method:"POST",data:o}).then(function(t){var o=t.data.url;e.insertEmbed(a,"image",o),i()}).catch(function(t){console.log(t)})}},created:function(){this.getArticle()},watch:{radio:function(t){this.formLabelAlign.category=t}}},n=l,r=(a("66eb"),a("2877")),c=Object(r["a"])(n,i,o,!1,null,"5ac7fad0",null);e["default"]=c.exports},f968:function(t,e,a){}}]);
//# sourceMappingURL=chunk-1a79c684.d3dfeff3.js.map