(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{358:function(t,e,r){},359:function(t,e,r){},363:function(t,e,r){"use strict";r(358)},364:function(t,e,r){"use strict";r(359)},366:function(t,e,r){"use strict";var n=r(357),i={name:"PostDetails",props:{author:{type:String,required:!0},posted:{type:String,required:!0},updated:{required:!0},numberOfCommits:{required:!0}},methods:{formatDate:n.b}},s=(r(363),r(17)),o=Object(s.a)(i,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"post-details"},[r("span",{staticClass:"author"},[t._v(" By: "+t._s(t.author)+" ")]),t._v(" "),r("div",{staticClass:"posted-updated-wrapper"},[r("span",{staticClass:"posted-wrapper"},[r("span",{staticClass:"bullet"},[t._v("•")]),r("span",{staticClass:"posted"},[t._v("Posted: "+t._s(t.formatDate(t.posted)))])]),t._v(" "),t.numberOfCommits>1?r("span",{staticClass:"updated-wrapper"},[r("span",{staticClass:"bullet"},[t._v("•")]),r("span",{staticClass:"updated"},[t._v("Updated: "+t._s(t.formatDate(t.updated)))])]):t._e()])])}),[],!1,null,"652ba438",null);e.a=o.exports},367:function(t,e,r){"use strict";var n={name:"PaginationButtons",props:{prevButton:{type:Boolean,required:!1,default:!1}}},i=(r(364),r(17)),s=Object(i.a)(n,(function(){var t=this.$createElement,e=this._self._c||t;return this.prevButton?e("div",[e("vp-icon",{staticClass:"left-arrow",attrs:{name:"leftArrow"}}),this._v("Назад\n")],1):e("div",[this._v("\n  Далее"),e("vp-icon",{staticClass:"right-arrow",attrs:{name:"rightArrow"}})],1)}),[],!1,null,"58d73e2a",null);e.a=s.exports},384:function(t,e,r){},385:function(t,e,r){},386:function(t,e,r){},423:function(t,e,r){"use strict";r(384)},424:function(t,e,r){"use strict";r(385)},425:function(t,e,r){var n=r(207),i=r(118),s=r(426),o=r(430);t.exports=function(t,e){if(null==t)return{};var r=n(o(t),(function(t){return[t]}));return e=i(e),s(t,r,(function(t,r){return e(t,r[0])}))}},426:function(t,e,r){var n=r(122),i=r(427),s=r(111);t.exports=function(t,e,r){for(var o=-1,a=e.length,u={};++o<a;){var p=e[o],c=n(t,p);r(c,p)&&i(u,s(p,t),c)}return u}},427:function(t,e,r){var n=r(428),i=r(111),s=r(120),o=r(46),a=r(64);t.exports=function(t,e,r,u){if(!o(t))return t;for(var p=-1,c=(e=i(e,t)).length,l=c-1,d=t;null!=d&&++p<c;){var f=a(e[p]),v=r;if("__proto__"===f||"constructor"===f||"prototype"===f)return t;if(p!=l){var m=d[f];void 0===(v=u?u(m,f,d):void 0)&&(v=o(m)?m:s(e[p+1])?[]:{})}n(d,f,v),d=d[f]}return t}},428:function(t,e,r){var n=r(429),i=r(119),s=Object.prototype.hasOwnProperty;t.exports=function(t,e,r){var o=t[e];s.call(t,e)&&i(o,r)&&(void 0!==r||e in t)||n(t,e,r)}},429:function(t,e,r){var n=r(208);t.exports=function(t,e,r){"__proto__"==e&&n?n(t,e,{configurable:!0,enumerable:!0,value:r,writable:!0}):t[e]=r}},430:function(t,e,r){var n=r(201),i=r(431),s=r(432);t.exports=function(t){return n(t,s,i)}},431:function(t,e,r){var n=r(117),i=r(213),s=r(202),o=r(203),a=Object.getOwnPropertySymbols?function(t){for(var e=[];t;)n(e,s(t)),t=i(t);return e}:o;t.exports=a},432:function(t,e,r){var n=r(204),i=r(433),s=r(121);t.exports=function(t){return s(t)?n(t,!0):i(t)}},433:function(t,e,r){var n=r(46),i=r(205),s=r(434),o=Object.prototype.hasOwnProperty;t.exports=function(t){if(!n(t))return s(t);var e=i(t),r=[];for(var a in t)("constructor"!=a||!e&&o.call(t,a))&&r.push(a);return r}},434:function(t,e){t.exports=function(t){var e=[];if(null!=t)for(var r in Object(t))e.push(r);return e}},435:function(t,e,r){"use strict";r(386)},451:function(t,e,r){"use strict";r.r(e);var n=r(365),i=r(366),s={name:"EmbeddedVideo",props:{videoURL:{type:String,default:"",required:!1}}},o=(r(423),r(17)),a=Object(o.a)(s,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"video-wrapper"},[e("iframe",{attrs:{width:"560",height:"315",src:this.videoURL,title:"YouTube video player",frameborder:"0",allow:"accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture",allowfullscreen:""}})])}),[],!1,null,"aeeee8d2",null).exports,u={name:"Pagination",components:{PaginationButtons:r(367).a},props:{pageKey:{type:String,default:"",required:!0},topic:{type:String,default:"",required:!0}},data:function(){return{prevLink:"",nextLink:""}},mounted:function(){var t={};"undefined"!=typeof window&&(t="false"===sessionStorage.getItem("allPosts")?this.$postPagination[this.topic][this.pageKey]:this.$postPagination.allPosts[this.pageKey],this.prevLink=t.prevLink,this.nextLink=t.nextLink)}},p=(r(424),Object(o.a)(u,(function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"pagination"},[e("div",[this.prevLink?e("router-link",{attrs:{to:this.prevLink}},[e("PaginationButtons",{attrs:{prevButton:!0}})],1):this._e()],1),this._v(" "),e("div",[this.nextLink?e("router-link",{attrs:{to:this.nextLink}},[e("PaginationButtons")],1):this._e()],1)])}),[],!1,null,"22f8aaae",null).exports),c=(r(211),r(85)),l=r.n(c),d=r(425),f=r.n(d),v={props:{title:{type:[String,Function],required:!1},issueId:{type:[String,Number],required:!1},options:{type:Object,required:!1},shortname:{type:String,required:!1},identifier:{type:String,required:!1},url:{type:String,required:!1},remote_auth_s3:{type:String,required:!1},api_key:{type:String,required:!1},sso_config:{type:Object,required:!1},language:{type:String,required:!1}},computed:{propsWithoutEmptyProperties:function(){return f()(this.$props,l.a)},commentProps:function(){return Object.assign({},this.propsWithoutEmptyProperties,this.$frontmatter.comment)},vssueProps:function(){return Object.assign({title:this.$page.title},this.commentProps)},disqusProps:function(){return Object.assign({identifier:this.$page.key},this.commentProps)}}},m=Object(o.a)(v,(function(){var t=this.$createElement,e=this._self._c||t;return"vssue"===this.$service.comment.service?e("Vssue",this._b({},"Vssue",this.vssueProps,!1)):"disqus"===this.$service.comment.service?e("Disqus",this._b({},"Disqus",this.disqusProps,!1)):this._e()}),[],!1,null,null,null).exports,h={name:"Post",components:{Layout:n.default,PostDetails:i.a,EmbeddedVideo:a,PostPagination:p,Comment:m}},y=(r(435),Object(o.a)(h,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("Layout",{scopedSlots:t._u([{key:"post-details",fn:function(){return[r("div",{staticClass:"wrapper post-details-in-post"},[r("PostDetails",{key:t.$route.name,attrs:{pageKey:t.$page.key,author:t.$frontmatter.author,posted:t.$frontmatter.date,updated:t.$page.lastUpdated,numberOfCommits:t.$page.numberOfCommits}})],1)]},proxy:!0},{key:"embedded-video",fn:function(){return[t.$frontmatter.videoURL?r("div",{staticClass:"wrapper embedded-video"},[r("EmbeddedVideo",{key:t.$route.name,attrs:{pageKey:t.$page.key,videoURL:t.$frontmatter.videoURL}})],1):t._e()]},proxy:!0},{key:"post-pagination",fn:function(){return[r("PostPagination",{key:t.$route.name,attrs:{pageKey:t.$page.key,topic:t.$frontmatter.topic}})]},proxy:!0},{key:"post-comments",fn:function(){return[r("div",{staticClass:"comments-wrapper"},[r("Comment",{key:t.$route.name})],1)]},proxy:!0}])})}),[],!1,null,null,null));e.default=y.exports}}]);