(window.webpackJsonp=window.webpackJsonp||[]).push([[18,8,10,11,13,14,16],{305:function(t,e,n){var content=n(309);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("4033183c",content,!0,{sourceMap:!1})},306:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("5c636339",content,!0,{sourceMap:!1})},308:function(t,e,n){"use strict";n(305)},309:function(t,e,n){var r=n(22)(!1);r.push([t.i,".img-container[data-v-058cbe72]{display:block;position:relative;width:100%}.img-container.round[data-v-058cbe72]{border-radius:.375rem;overflow:hidden}.img-wrapper[data-v-058cbe72]{position:relative;overflow:hidden}.img[data-v-058cbe72]{display:block;position:absolute;top:0;right:0;bottom:0;left:0;height:auto;width:auto}img[data-v-058cbe72]{height:100%;width:100%;-o-object-fit:cover;object-fit:cover;background-position:50%}",""]),t.exports=r},310:function(t,e,n){"use strict";n(306)},311:function(t,e,n){var r=n(22)(!1);r.push([t.i,"h1[data-v-f3d2d82a]{font-size:1.25rem;line-height:1.75rem}@media (min-width:768px){h1[data-v-f3d2d82a]{font-size:1.5rem;line-height:2rem}}h2[data-v-f3d2d82a]{font-size:1.125rem;line-height:1.75rem}@media (min-width:768px){h2[data-v-f3d2d82a]{font-size:1.25rem;line-height:1.75rem}}h3[data-v-f3d2d82a]{font-size:1rem;line-height:1.5rem}@media (min-width:768px){h3[data-v-f3d2d82a]{font-size:1.125rem;line-height:1.75rem}}h4[data-v-f3d2d82a]{font-size:.875rem;line-height:1.25rem}@media (min-width:768px){h4[data-v-f3d2d82a]{font-size:1rem;line-height:1.5rem}}",""]),t.exports=r},312:function(t,e,n){"use strict";n.r(e);var r={props:{src:{type:String,default:null,required:!0},alt:{type:String,default:""},paddingTop:{type:String,default:"75%"},round:{type:Boolean,default:!0}}},o=(n(308),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:["img-container",{round:t.round}]},[n("div",{staticClass:"img-wrapper",style:{paddingTop:t.paddingTop}},[n("span",{staticClass:"img"},[n("img",{attrs:{src:t.src,alt:t.alt}})])])])}),[],!1,null,"058cbe72",null);e.default=component.exports},313:function(t,e,n){"use strict";n.r(e);var r={props:{as:{type:String,default:"h1"}}},o=(n(310),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;return(t._self._c||e)(t.as,{tag:"component",staticClass:"font-bold"},[t._t("default")],2)}),[],!1,null,"f3d2d82a",null);e.default=component.exports},317:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("93462d1e",content,!0,{sourceMap:!1})},318:function(t,e,n){"use strict";n.r(e);var r="peterkimzz",o={props:{title:{type:String,default:"기술과 예술을 담은 블로그"},titleTemplate:{type:String,default:r},titleTemplateVisible:{type:Boolean,default:!0},description:{type:String,default:""},thumbnail:{type:String,default:""}},head:function(){return{htmlAttrs:{lang:this.seoLang,dir:"ltr"},title:this.seoTitle,meta:[{hid:"description",name:"description",content:this.seoDescription},{hid:"keywords",name:"keywords",content:"개발자 peterkimzz의 개발과 예술, 그리고 일상을 정리하는 공간입니다."},{hid:"author",name:"author",content:r},{property:"og:type",content:"website"},{property:"og:url",content:this.seoURL},{property:"og:title",content:this.seoTitle},{property:"og:image",content:this.seoImage},{property:"og:description",content:this.seoDescription},{property:"og:site_name",content:r},{property:"og:locale",content:this.seoLang},{name:"twitter:card",content:"summary_large_image"},{name:"twitter:site",content:"@peterkimzz"},{name:"twitter:creator",content:"@peterkimzz"},{name:"twitter:title",content:this.seoTitle},{name:"twitter:description",content:this.seoDescription},{name:"twitter:image",content:this.seoImage}],link:[{rel:"canonical",href:this.seoURL},{rel:"icon",href:this.seoFavicon},{rel:"shortcut icon",href:this.seoFavicon},{rel:"apple-touch-icon",href:this.seoFavicon}]}},computed:{seoTitle:function(){return this.titleTemplateVisible?"".concat(this.title," - ").concat(this.titleTemplate):this.title},seoDescription:function(){return this.description?this.$cheerio.load(this.description).text().substring(0,150):"개발자 peterkimzz의 개발과 예술, 그리고 일상을 정리하는 공간입니다."},seoURL:function(){return"https://www.peterkimzz.com"+this.$route.path},seoLang:function(){return"ko"},seoImage:function(){return this.thumbnail||"https://www.peterkimzz.com/thumbnail.png"},seoFavicon:function(){return"https://www.peterkimzz.com/favicon.png"}}},l=n(2),component=Object(l.a)(o,(function(){var t=this,e=t.$createElement;t._self._c;return t._e()}),[],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";n(317)},324:function(t,e,n){var r=n(22)(!1);r.push([t.i,".link[data-v-1e9a8ed0]{line-height:1.375}.link[data-v-1e9a8ed0]:hover{text-decoration:underline}.label[data-v-1e9a8ed0]{font-weight:600;--tw-text-opacity:1;color:rgba(115,115,115,var(--tw-text-opacity));margin-bottom:.125rem}",""]),t.exports=r},326:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(23).default)("829057b2",content,!0,{sourceMap:!1})},328:function(t,e,n){"use strict";n.r(e);var r={props:{prev:{type:Object,default:function(){return null}},next:{type:Object,default:function(){return null}}}},o=(n(323),n(2)),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"flex justify-between text-xs md:text-sm font-medium"},[t.prev?n("div",{staticClass:"flex-1 mr-0.5"},[t._m(0),t._v(" "),n("vue-link",{staticClass:"link",attrs:{as:"a",href:"/"+t.prev.slug}},[t._v("\n      "+t._s(t.prev.title)+"\n    ")])],1):t._e(),t._v(" "),t.next?n("div",{staticClass:"flex-1 ml-0.5 text-right"},[t._m(1),t._v(" "),n("vue-link",{staticClass:"link",staticStyle:{"word-break":"keep-all"},attrs:{as:"a",href:"/"+t.next.slug}},[t._v("\n      "+t._s(t.next.title)+"\n    ")])],1):t._e()])}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"label"},[n("span",{staticClass:"align-middle"},[t._v("이전 글")])])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"label"},[n("span",{staticClass:"align-middle"},[t._v("다음 글")])])}],!1,null,"1e9a8ed0",null);e.default=component.exports;installComponents(component,{VueLink:n(116).default})},329:function(t,e,n){"use strict";n.r(e);var r={methods:{InsertScript:function(){var script=document.createElement("script");script.type="application/javascript",script.src="https://utteranc.es/client.js",script.crossOrigin="anonymous",script.async=!0,script.setAttribute("repo","peterkimzz/blog"),script.setAttribute("issue-term","title"),script.setAttribute("theme","github-light"),this.$el.appendChild(script)}}},o=n(2),component=Object(o.a)(r,(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this.$createElement,e=this._self._c||t;return e("div",[e("script",{attrs:{type:"application/javascript",src:"https://utteranc.es/client.js",repo:"peterkimzz/blog","issue-term":"title",label:"Comment",theme:"github-dark",crossorigin:"anonymous",async:""}})])}],!1,null,null,null);e.default=component.exports},330:function(t,e,n){"use strict";n.r(e);var r=n(2),component=Object(r.a)({},(function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)}),[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"text-xs md:text-sm shadow-sm text-gray-400 font-medium bg-gray-900 rounded-lg p-4"},[n("div",{staticClass:"flex"},[n("div",{staticClass:"mr-2"},[t._v("☕")]),t._v(" "),n("div",[n("p",[t._v("\n        제 포스팅이 도움이 되셨다면, 아래 버튼을 눌러\n        "),n("b",{staticClass:"text-gray-100"},[t._v("커피 한 잔")]),t._v("을 후원해주세요! 더 좋은 글을\n        발행하는데 큰 도움이 됩니다.\n      ")]),t._v(" "),n("a",{staticClass:"inline-block mt-4 bg-gray-300 shadow-sm overflow-hidden rounded-lg",attrs:{href:"https://ko-fi.com/U7U22YFKV",target:"_blank"}},[n("img",{staticClass:"w-36",attrs:{src:"/ko-fi.png",alt:"Buy Me a Coffee at ko-fi.com"}})])])])])}],!1,null,null,null);e.default=component.exports},333:function(t,e,n){"use strict";n(326)},334:function(t,e,n){var r=n(22)(!1);r.push([t.i,"[data-v-9db386b6] .nuxt-content>*{margin-top:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content>*{margin-top:2rem}}[data-v-9db386b6] .nuxt-content>em{font-weight:600}[data-v-9db386b6] .nuxt-content a{--tw-text-opacity:1;color:rgba(163,163,163,var(--tw-text-opacity))}[data-v-9db386b6] .nuxt-content p{font-size:.875rem;line-height:1.25rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content p{font-size:1rem;line-height:1.5rem}}[data-v-9db386b6] .nuxt-content p{line-height:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content p{line-height:1.75rem}}[data-v-9db386b6] .nuxt-content p>strong{--tw-text-opacity:1;color:rgba(255,255,255,var(--tw-text-opacity))}[data-v-9db386b6] .nuxt-content p code{line-height:.75rem;font-family:-apple-system,BlinkMacSystemFont,Segoe UI,Roboto,Helvetica Neue,Arial,sans-serif,Apple Color Emoji,Segoe UI Emoji;--tw-bg-opacity:1;background-color:rgba(64,64,64,var(--tw-bg-opacity));border-radius:.375rem;padding:.125rem .375rem;--tw-text-opacity:1;color:rgba(245,245,245,var(--tw-text-opacity));font-size:.875rem;line-height:1.25rem}[data-v-9db386b6] .nuxt-content a{text-decoration:underline}[data-v-9db386b6] .nuxt-content img{margin-left:auto;margin-right:auto}[data-v-9db386b6] .nuxt-content ol,[data-v-9db386b6] .nuxt-content ul{font-size:.875rem;line-height:1.25rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content ol,[data-v-9db386b6] .nuxt-content ul{font-size:1rem;line-height:1.5rem}}[data-v-9db386b6] .nuxt-content ol,[data-v-9db386b6] .nuxt-content ul{line-height:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content ol,[data-v-9db386b6] .nuxt-content ul{line-height:1.75rem}}[data-v-9db386b6] .nuxt-content ol,[data-v-9db386b6] .nuxt-content ul{padding-left:1.25rem}[data-v-9db386b6] .nuxt-content ul li{list-style-type:disc}[data-v-9db386b6] .nuxt-content ol li{list-style-type:decimal}[data-v-9db386b6] .nuxt-content blockquote{padding:1rem;margin-bottom:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content blockquote{margin-bottom:2rem}}[data-v-9db386b6] .nuxt-content blockquote{--tw-bg-opacity:1;background-color:rgba(23,23,23,var(--tw-bg-opacity));border-top-right-radius:.375rem;border-bottom-right-radius:.375rem;--tw-border-opacity:1;border-color:rgba(64,64,64,var(--tw-border-opacity));border-left-width:4px;font-size:.875rem;line-height:1.25rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content blockquote{font-size:1rem;line-height:1.5rem}}[data-v-9db386b6] .nuxt-content blockquote{line-height:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content blockquote{line-height:1.75rem}}[data-v-9db386b6] .nuxt-content blockquote p{margin:0!important}[data-v-9db386b6] .nuxt-content h1{font-weight:700}[data-v-9db386b6] .nuxt-content h2{font-weight:700;font-size:1.5rem;line-height:2rem}[data-v-9db386b6] .nuxt-content h3{font-weight:700;font-size:1.25rem;line-height:1.75rem}[data-v-9db386b6] .nuxt-content-highlight{position:relative;font-size:.75rem;line-height:1rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content-highlight{font-size:.875rem;line-height:1.25rem}}[data-v-9db386b6] .nuxt-content-highlight{line-height:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content-highlight{line-height:1.75rem}}[data-v-9db386b6] .nuxt-content-highlight .filename{font-weight:300;font-size:.875rem;line-height:1.25rem;margin-top:.25rem;margin-right:.625rem;position:absolute;right:0;--tw-text-opacity:1;color:rgba(163,163,163,var(--tw-text-opacity));z-index:10;pointer-events:none}[data-v-9db386b6] .nuxt-content-highlight .line-numbers{margin-bottom:1.5rem}@media (min-width:768px){[data-v-9db386b6] .nuxt-content-highlight .line-numbers{margin-bottom:2rem}}[data-v-9db386b6] .nuxt-content-highlight .line-numbers{border-radius:.375rem}",""]),t.exports=r},348:function(t,e,n){"use strict";n.r(e);var r=n(10),o=n(4),l=(n(38),{layout:"article",asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,article,l,c,d,m;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("articles",o.slug).fetch();case 3:return article=e.sent,e.next=6,n("articles").only(["title","slug"]).sortBy("createdAt","asc").surround(o.slug).fetch();case 6:return l=e.sent,c=Object(r.a)(l,2),d=c[0],m=c[1],e.abrupt("return",{article:article,prev:d,next:m});case 11:case"end":return e.stop()}}),e)})))()},methods:{formatDate:function(t){return new Date(t).toLocaleDateString("ko",{year:"numeric",month:"long",day:"numeric"})}},mounted:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("articles");case 2:n=e.sent,console.log(n);case 4:case"end":return e.stop()}}),e)})))()}}),c=(n(333),n(2)),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("main",{staticClass:"pb-10"},[n("vue-s-e-o",{attrs:{title:t.article.title,description:t.article.description,thumbnail:t.article.thumbnail}}),t._v(" "),n("div",{staticClass:"-mx-6 md:mx-0"},[n("vue-image",{staticClass:"rounded-none md:rounded-md",attrs:{src:t.article.thumbnail,alt:t.article.alt,"padding-top":"50%"}})],1),t._v(" "),n("article",[n("div",{staticClass:"my-3"},[n("vue-heading",[t._v(t._s(t.article.title))]),t._v(" "),n("p",{staticClass:"text-gray-500 mt-1.5 text-xs"},[t._v("\n        "+t._s(t.formatDate(t.article.updated))+"에 마지막으로 수정됨.\n      ")])],1),t._v(" "),n("nuxt-content",{attrs:{document:t.article}}),t._v(" "),n("vue-divider",{staticClass:"my-10"}),t._v(" "),n("vue-prev-next",{staticClass:"mb-14",attrs:{prev:t.prev,next:t.next}}),t._v(" "),n("vue-divider",{staticClass:"my-10"}),t._v(" "),n("client-only",[n("vue-comment")],1),t._v(" "),n("vue-divider",{staticClass:"my-10"}),t._v(" "),n("vue-sponsor-button")],1)],1)}),[],!1,null,"9db386b6",null);e.default=component.exports;installComponents(component,{VueSEO:n(318).default,VueImage:n(312).default,VueHeading:n(313).default,VueDivider:n(195).default,VuePrevNext:n(328).default,VueComment:n(329).default,VueSponsorButton:n(330).default})}}]);