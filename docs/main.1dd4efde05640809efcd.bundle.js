(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{116:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"Static data",code:function code(){return{template:'\n      <div id="share-network-list">\n        <ShareNetwork\n          network="twitter"\n          url="https://news.vuejs.org/issues/180"\n          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."\n          description="This week, I’d like to introduce you to \'Vite\', which means \'Fast\'. It’s a brand new development setup created by Evan You."\n          quote="The hot reload is so fast it\'s near instant. - Evan You"\n          hashtags="vuejs,vite,javascript"\n          twitterUser="youyuxi"\n        >\n          <i class="fab fah fa-lg fa-twitter"></i>\n          <span>Share on Twitter</span>\n        </ShareNetwork>\n      </div>\n      '}},params:{notes:'## Creating a Share Network link with static data\n\n```html\n<template>\n  <ShareNetwork\n      network="twitter"\n      url="https://news.vuejs.org/issues/180"\n      title="Say hi to Vite! A brand new, extremely fast development setup for Vue."\n      description="This week, I’d like to introduce you to \'Vite\', which means \'Fast\'. It’s a brand new development setup created by Evan You."\n      quote="The hot reload is so fast it\\\'s near instant. - Evan You"\n      hashtags="vuejs,vite,javascript"\n      twitterUser="youyuxi"\n    >\n    <i class="fab fah fa-lg fa-twitter"></i>\n    <span>Share on Twitter</span>\n  </ShareNetwork>\n</template>\n\n<script>\nexport default {\n  // Nothing needed here\n}\n<\/script>\n```\n\n[Vue Social Sharing on GitHub](https://github.com/nicolasbeauvais/vue-social-sharing)\n'}}},117:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"Dynamic data",code:function code(){return{template:'\n      <div style="text-align: center;">\n        <p>Change the url to share on Twitter:</p>\n        <input type="text" v-model="url" style="margin-bottom: 20px;padding: 5px;min-width: 230px;text-align: center;">\n\n        <div id="share-network-list">\n          <ShareNetwork\n            network="twitter"\n            :url="url"\n            :title="title"\n            :description="description"\n            :quote="quote"\n            :hashtags="hashtags"\n            :twitterUser="twitterUser"\n          >\n            <i class="fab fah fa-lg fa-twitter"></i>\n            <span>Share on Twitter</span>\n          </ShareNetwork>\n        </div>\n      </div>\n      ',data:function data(){return{url:"https://news.vuejs.org/issues/180",title:"Say hi to Vite! A brand new, extremely fast development setup for Vue.",description:'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',quote:"The hot reload is so fast it's near instant. - Evan You",hashtags:"vuejs,vite,javascript",twitterUser:"youyuxi"}}}},params:{notes:'## Creating a Share Network link with dynamic data\n\n```html\n<template>\n  <div>\n    <input type="text" v-model="url">\n    <ShareNetwork\n        network="twitter"\n        :url="url"\n        :title="title"\n        :description="description"\n        :quote="quote"\n        :hashtags="hashtags"\n        :twitterUser="twitterUser"\n      >\n      <i class="fab fah fa-lg fa-twitter"></i>\n      <span>Share on Twitter</span>\n    </ShareNetwork>\n  </div>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      url: \'https://news.vuejs.org/issues/180\',\n      title: \'Say hi to Vite! A brand new, extremely fast development setup for Vue.\',\n      description: \'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.\',\n      quote: \'The hot reload is so fast it\\\'s near instant. - Evan You\',\n      hashtags: \'vuejs,vite,javascript\',\n      twitterUser: \'youyuxi\'\n    }\n  }\n}\n<\/script>\n```\n\n[Vue Social Sharing on GitHub](https://github.com/nicolasbeauvais/vue-social-sharing)\n'}}},118:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"Custom Share Network",code:function code(){return{template:'      \n      <div id="share-network-list">\n        <ShareNetwork\n          network="fakeblock"\n          url="https://news.vuejs.org/issues/180"\n          title="Say hi to Vite! A brand new, extremely fast development setup for Vue."\n        >\n          <i class="fab fah fa-lg fa-react"></i>\n          <span>Custom Network</span>\n        </ShareNetwork>\n      </div>\n      '}},params:{notes:"## Creating a Share Network link with dynamic data\n\nTo use a custom network you need to define it in the initialisation option of the `VueSocialSharing` plugin.\n\n```javascript\nimport Vue from 'vue'\nimport VueSocialSharing from 'vue-social-sharing'\n\nVue.use(VueSocialSharing, {\n  networks: {\n    fakeblock: {\n      sharer: 'https://fakeblock.com/share?url=@url&title=@title',\n      type: 'popup'\n    }\n  }\n})\n\nnew Vue({\n  el: '#app',\n})\n```\n\nYou can then use your custom network like any other one:\n\n```html\n<template>\n  <ShareNetwork\n    network=\"fakeblock\"\n    url=\"https://news.vuejs.org/issues/180\"\n    title=\"Say hi to Vite! A brand new, extremely fast development setup for Vue.\"\n  >\n    <i class=\"fab fah fa-lg fa-react\"></i>\n    <span>Custom Network</span>\n  </ShareNetwork>\n</template>\n\n<script>\nexport default {\n // Nothing needed here\n}\n<\/script>\n```\n\n[Vue Social Sharing on GitHub](https://github.com/nicolasbeauvais/vue-social-sharing)\n"}}},119:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_exports__.a={name:"Multiple share networks",code:function code(){return{template:'      \n      <div id="share-network-list">\n        <ShareNetwork\n          v-for="network in networks"\n          :network="network.network"\n          :key="network.key"\n          :style="{backgroundColor: network.color}"\n          :url="sharing.url"\n          :title="sharing.title"\n          :description="sharing.description"\n          :quote="sharing.quote"\n          :hashtags="sharing.hashtags"\n          :twitterUser="sharing.twitterUser"\n        >\n          <i :class="\'fab fah fa-lg \' + network.icon"></i>\n          <span>{{ network.name }}</span>\n        </ShareNetwork>\n      </div>\n      ',data:function data(){return{sharing:{url:"https://news.vuejs.org/issues/180",title:"Say hi to Vite! A brand new, extremely fast development setup for Vue.",description:'This week, I’d like to introduce you to "Vite", which means "Fast". It’s a brand new development setup created by Evan You.',quote:"The hot reload is so fast it's near instant. - Evan You",hashtags:"vuejs,vite,javascript",twitterUser:"youyuxi"},networks:[{network:"facebook",name:"Facebook",icon:"fa-facebook-f",color:"#1877f2"},{network:"line",name:"Line",icon:"fa-line",color:"#00c300"},{network:"linkedin",name:"LinkedIn",icon:"fa-linkedin",color:"#007bb5"},{network:"odnoklassniki",name:"Odnoklassniki",icon:"fa-odnoklassniki",color:"#ed812b"},{network:"pinterest",name:"Pinterest",icon:"fa-pinterest",color:"#bd081c"},{network:"reddit",name:"Reddit",icon:"fa-reddit-alien",color:"#ff4500"},{network:"skype",name:"Skype",icon:"fa-skype",color:"#00aff0"},{network:"telegram",name:"Telegram",icon:"fa-telegram-plane",color:"#0088cc"},{network:"twitter",name:"Twitter",icon:"fa-twitter",color:"#1da1f2"},{network:"viber",name:"Viber",icon:"fa-viber",color:"#59267c"},{network:"vk",name:"Vk",icon:"fa-vk",color:"#4a76a8"},{network:"weibo",name:"Weibo",icon:"fa-weibo",color:"#e9152d"},{network:"whatsapp",name:"Whatsapp",icon:"fa-whatsapp",color:"#25d366"},{network:"fakeblock",name:"Custom Network",icon:"fa-vuejs",color:"#41b883"}]}}}},params:{notes:"## Creating multiple Share Network link with dynamic data\n\n```html\n<template>\n  <ShareNetwork\n    v-for=\"network in networks\"\n    :network=\"network.network\"\n    :key=\"network.key\"\n    :style=\"{backgroundColor: network.color}\"\n    :url=\"sharing.url\"\n    :title=\"sharing.title\"\n    :description=\"sharing.description\"\n    :quote=\"sharing.quote\"\n    :hashtags=\"sharing.hashtags\"\n    :twitterUser=\"sharing.twitterUser\"\n  >\n    <i :class=\"'fab fah fa-lg ' + network.icon\"></i>\n    <span>{{ network.name }}</span>\n  </ShareNetwork>\n</template>\n\n<script>\nexport default {\n  data () {\n    return {\n      sharing: {\n        url: 'https://news.vuejs.org/issues/180',\n        title: 'Say hi to Vite! A brand new, extremely fast development setup for Vue.',\n        description: 'This week, I’d like to introduce you to \"Vite\", which means \"Fast\". It’s a brand new development setup created by Evan You.',\n        quote: 'The hot reload is so fast it\\'s near instant. - Evan You',\n        hashtags: 'vuejs,vite,javascript',\n        twitterUser: 'youyuxi'\n      },\n      networks: [\n        { network: 'facebook', name: 'Facebook', icon: 'fa-facebook-f', color: '#1877f2' },\n        { network: 'line', name: 'Line', icon: 'fa-line', color: '#00c300' },\n        { network: 'linkedin', name: 'LinkedIn', icon: 'fa-linkedin', color: '#007bb5' },\n        { network: 'odnoklassniki', name: 'Odnoklassniki', icon: 'fa-odnoklassniki', color: '#ed812b' },\n        { network: 'pinterest', name: 'Pinterest', icon: 'fa-pinterest', color: '#bd081c' },\n        { network: 'reddit', name: 'Reddit', icon: 'fa-reddit-alien', color: '#ff4500' },\n        { network: 'skype', name: 'Skype', icon: 'fa-skype', color: '#00aff0' },\n        { network: 'telegram', name: 'Telegram', icon: 'fa-telegram-plane', color: '#0088cc' },\n        { network: 'twitter', name: 'Twitter', icon: 'fa-twitter', color: '#1da1f2' },\n        { network: 'viber', name: 'Viber', icon: 'fa-viber', color: '#59267c' },\n        { network: 'vk', name: 'Vk', icon: 'fa-vk', color: '#4a76a8' },\n        { network: 'weibo', name: 'Weibo', icon: 'fa-weibo', color: '#e9152d' },\n        { network: 'whatsapp', name: 'Whatsapp', icon: 'fa-whatsapp', color: '#25d366' },\n        { network: 'fakeblock', name: 'Custom Network', icon: 'fa-vuejs', color: '#41b883' }\n      ]\n    }\n  }\n}\n<\/script>\n```\n\n[Vue Social Sharing on GitHub](https://github.com/nicolasbeauvais/vue-social-sharing)\n"}}},276:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__(18),__webpack_require__(105),__webpack_require__(34),__webpack_require__(62),__webpack_require__(166),__webpack_require__(33),__webpack_require__(611),__webpack_require__(612),__webpack_require__(55),__webpack_require__(36);var classCallCheck=__webpack_require__(275),classCallCheck_default=__webpack_require__.n(classCallCheck),defineProperty=__webpack_require__(172),defineProperty_default=__webpack_require__.n(defineProperty),networks=__webpack_require__(83),inBrowser=(__webpack_require__(32),__webpack_require__(169),__webpack_require__(45),__webpack_require__(266),__webpack_require__(613),__webpack_require__(167),"undefined"!=typeof window),$window=inBrowser?window:null;var share_network={name:"ShareNetwork",props:{network:{type:String,required:!0},url:{type:String,required:!0},title:{type:String,required:!0},description:{type:String,default:""},quote:{type:String,default:""},hashtags:{type:String,default:""},twitterUser:{type:String,default:""},media:{type:String,default:""},tag:{type:String,default:"a"}},data:function data(){return{popup:{status:!1,resizable:!0,toolbar:!1,menubar:!1,scrollbars:!1,location:!1,directories:!1,width:626,height:436,top:0,left:0,window:void 0,interval:null}}},mounted:function mounted(){if(inBrowser){var multiScreenLeft=void 0!==$window.screenLeft?$window.screenLeft:$window.screenX,multiScreenTop=void 0!==$window.screenTop?$window.screenTop:$window.screenY,width=$window.innerWidth?$window.innerWidth:document.documentElement.clientWidth?document.documentElement.clientWidth:$window.screenX,height=$window.innerHeight?$window.innerHeight:document.documentElement.clientHeight?document.documentElement.clientHeight:$window.screenY,systemZoom=width/$window.screen.availWidth,left=(width-this.popup.width)/2/systemZoom+multiScreenLeft,top=(height-this.popup.height)/2/systemZoom+multiScreenTop;this.popup.left=left,this.popup.top=top}},computed:{availableNetworks:function availableNetworks(){return this.$SocialSharing?this.$SocialSharing.options.networks:networks},computedNetwork:function computedNetwork(){var networkName=this.network,ua=navigator.userAgent.toLowerCase();return"sms"===networkName&&(-1<ua.indexOf("iphone")||-1<ua.indexOf("ipad"))&&(networkName+="_ios"),this.availableNetworks[networkName]},encodedHashtags:function encodedHashtags(){return"facebook"===this.network&&this.hashtags.length?"%23"+this.hashtags.split(",")[0]:this.hashtags},sharingUrl:function sharingUrl(){var sharer=this.computedNetwork.sharer;return"twitter"===this.network&&(this.hashtags.length||sharer.replace("&hashtags=@hashtags",""),this.twitterUser||sharer.replace("@twitteruser","")),sharer.replace(/@url/g,encodeURIComponent(this.url)).replace(/@title/g,encodeURIComponent(this.title)).replace(/@description/g,encodeURIComponent(this.description)).replace(/@quote/g,encodeURIComponent(this.quote)).replace(/@hashtags/g,this.encodedHashtags).replace(/@media/g,encodeURIComponent(this.media)).replace(/@twitteruser/g,"&via="+encodeURIComponent(this.twitterUser))}},render:function render(createElement){var _this=this;if(!Object.prototype.hasOwnProperty.call(this.availableNetworks,this.network))throw new Error("Network ".concat(this.network," does not exist"));return createElement(this.tag,{class:"share-network-".concat(this.network),on:{click:function click(){return _this["popup"===_this.computedNetwork.type?"share":"touch"]()}}},this.$slots.default)},methods:{share:function share(){this.openSharer(),this.$root.$emit("share_network_open",this.computedNetwork,this.url),this.$emit("open",this.computedNetwork,this.url)},touch:function touch(){window.open(this.sharingUrl,"_self"),this.$root.$emit("share_network_open",this.computedNetwork,this.url),this.$emit("open",this.computedNetwork,this.url)},openSharer:function openSharer(){var _this2=this;this.popup.window&&this.popup.interval&&(clearInterval(this.popup.interval),this.popup.window.close(),this.$root.$emit("share_network_change",this.computedNetwork,this.url),this.$emit("change",this.computedNetwork,this.url)),this.popup.window=$window.open(this.sharingUrl,"sharer","status="+(this.popup.status?"yes":"no")+",height="+this.popup.height+",width="+this.popup.width+",resizable="+(this.popup.resizable?"yes":"no")+",left="+this.popup.left+",top="+this.popup.top+",screenX="+this.popup.left+",screenY="+this.popup.top+",toolbar="+(this.popup.toolbar?"yes":"no")+",menubar="+(this.popup.menubar?"yes":"no")+",scrollbars="+(this.popup.scrollbars?"yes":"no")+",location="+(this.popup.location?"yes":"no")+",directories="+(this.popup.directories?"yes":"no")),this.popup.window.focus(),this.popup.interval=setInterval((function(){_this2.popup.window&&!_this2.popup.window.closed||(clearInterval(_this2.popup.interval),_this2.popup.window=null,_this2.$root.$emit("share_network_close",_this2.computedNetwork,_this2.url),_this2.$emit("close",_this2.computedNetwork,_this2.url))}),500)}}};function ownKeys(object,enumerableOnly){var keys=Object.keys(object);if(Object.getOwnPropertySymbols){var symbols=Object.getOwnPropertySymbols(object);enumerableOnly&&(symbols=symbols.filter((function(sym){return Object.getOwnPropertyDescriptor(object,sym).enumerable}))),keys.push.apply(keys,symbols)}return keys}function _objectSpread(target){for(var source,i=1;i<arguments.length;i++)source=null!=arguments[i]?arguments[i]:{},i%2?ownKeys(Object(source),!0).forEach((function(key){defineProperty_default()(target,key,source[key])})):Object.getOwnPropertyDescriptors?Object.defineProperties(target,Object.getOwnPropertyDescriptors(source)):ownKeys(Object(source)).forEach((function(key){Object.defineProperty(target,key,Object.getOwnPropertyDescriptor(source,key))}));return target}var vue_social_sharing_VueSocialSharing=function VueSocialSharing(){var options=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{};classCallCheck_default()(this,VueSocialSharing),defineProperty_default()(this,"options",{networks:networks}),Object.prototype.hasOwnProperty.call(options,"networks")&&(this.options.networks=_objectSpread(_objectSpread({},networks),options.networks))};vue_social_sharing_VueSocialSharing.install=function(Vue,options){var instance=new vue_social_sharing_VueSocialSharing(options);Vue.component(share_network.name,share_network),Vue.prototype.$SocialSharing=instance};__webpack_exports__.a=vue_social_sharing_VueSocialSharing},277:function(module,exports,__webpack_require__){__webpack_require__(278),__webpack_require__(423),module.exports=__webpack_require__(424)},342:function(module,exports){},424:function(module,__webpack_exports__,__webpack_require__){"use strict";__webpack_require__.r(__webpack_exports__),function(module){__webpack_require__(62);var vue__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__(115),_storybook_vue__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__(171),_src_vue_social_sharing__WEBPACK_IMPORTED_MODULE_3__=__webpack_require__(276),_stories_static_data__WEBPACK_IMPORTED_MODULE_5__=(__webpack_require__(614),__webpack_require__(116)),_stories_dynamic_data__WEBPACK_IMPORTED_MODULE_6__=__webpack_require__(117),_stories_custom_share_network__WEBPACK_IMPORTED_MODULE_7__=__webpack_require__(118),_stories_multiple_share_networks__WEBPACK_IMPORTED_MODULE_8__=__webpack_require__(119);vue__WEBPACK_IMPORTED_MODULE_1__.default.use(_src_vue_social_sharing__WEBPACK_IMPORTED_MODULE_3__.a,{networks:{fakeblock:{sharer:"https://fakeblock.com/share?url=@url&title=@title",type:"popup"}}});var stories=Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_2__.storiesOf)("VueSocialSharing",module);Object(_storybook_vue__WEBPACK_IMPORTED_MODULE_2__.configure)((function loadStories(){stories.add(_stories_static_data__WEBPACK_IMPORTED_MODULE_5__.a.name,_stories_static_data__WEBPACK_IMPORTED_MODULE_5__.a.code,_stories_static_data__WEBPACK_IMPORTED_MODULE_5__.a.params),stories.add(_stories_dynamic_data__WEBPACK_IMPORTED_MODULE_6__.a.name,_stories_dynamic_data__WEBPACK_IMPORTED_MODULE_6__.a.code,_stories_dynamic_data__WEBPACK_IMPORTED_MODULE_6__.a.params),stories.add(_stories_custom_share_network__WEBPACK_IMPORTED_MODULE_7__.a.name,_stories_custom_share_network__WEBPACK_IMPORTED_MODULE_7__.a.code,_stories_custom_share_network__WEBPACK_IMPORTED_MODULE_7__.a.params),stories.add(_stories_multiple_share_networks__WEBPACK_IMPORTED_MODULE_8__.a.name,_stories_multiple_share_networks__WEBPACK_IMPORTED_MODULE_8__.a.code,_stories_multiple_share_networks__WEBPACK_IMPORTED_MODULE_8__.a.params)}),module)}.call(this,__webpack_require__(425)(module))},614:function(module,exports,__webpack_require__){var api=__webpack_require__(615),content=__webpack_require__(616);"string"==typeof(content=content.__esModule?content.default:content)&&(content=[[module.i,content,""]]);var options={insert:"head",singleton:!1};api(content,options);module.exports=content.locals||{}},616:function(module,exports,__webpack_require__){(exports=__webpack_require__(617)(!1)).push([module.i,'body {\n  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";\n}\n\n#share-network-list {\n  display: flex;\n  flex-direction: row;\n  flex-wrap: wrap;\n  justify-content: center;\n  max-width: 1000px;\n  margin: auto;\n}\n\na[class^="share-network-"] {\n  flex: none;\n  color: #FFFFFF;\n  background-color: #333;\n  border-radius: 3px;\n  overflow: hidden;\n  display: flex;\n  flex-direction: row;\n  align-content: center;\n  align-items: center;\n  cursor: pointer;\n  margin: 0 10px 10px 0;\n}\n\na[class^="share-network-"] .fah {\n  background-color: rgba(0, 0, 0, 0.2);\n  padding: 10px;\n  flex: 0 1 auto;\n}\n\na[class^="share-network-"] span {\n  padding: 0 10px;\n  flex: 1 1;\n  font-weight: 500;\n}\n\na.share-network-twitter {\n  background-color: #1da1f2;\n}\n\na.share-network-fakeblock {\n  background-color: #41b883;\n}\n',""]),module.exports=exports},83:function(module){module.exports=JSON.parse('{"email":{"sharer":"mailto:?subject=@title&body=@url%0D%0A@description","type":"direct"},"facebook":{"sharer":"https://www.facebook.com/sharer/sharer.php?u=@url&title=@title&description=@description&quote=@quote&hashtag=@hashtags","type":"popup"},"line":{"sharer":"http://line.me/R/msg/text/?@title%0D%0A@url%0D%0A@description","type":"popup"},"linkedin":{"sharer":"https://www.linkedin.com/shareArticle?mini=true&url=@url&title=@title&summary=@description","type":"popup"},"odnoklassniki":{"sharer":"https://connect.ok.ru/dk?st.cmd=WidgetSharePreview&st.shareUrl=@url&st.comments=@title","type":"popup"},"pinterest":{"sharer":"https://pinterest.com/pin/create/button/?url=@url&media=@media&description=@title","type":"popup"},"reddit":{"sharer":"https://www.reddit.com/submit?url=@url&title=@title","type":"popup"},"skype":{"sharer":"https://web.skype.com/share?url=@title%0D%0A@url%0D%0A@description","type":"popup"},"sms":{"sharer":"sms:?body=@title%0D%0A@url%0D%0A@description","type":"direct"},"sms_ios":{"sharer":"sms:&body=@title%0D%0A@url%0D%0A@description","type":"direct"},"telegram":{"sharer":"https://t.me/share/url?url=@url&text=@title%0D%0A@description","type":"popup"},"twitter":{"sharer":"https://twitter.com/intent/tweet?text=@title&url=@url&hashtags=@hashtags@twitteruser","type":"popup"},"viber":{"sharer":"viber://forward?text=@title%0D%0A@url%0D%0A@description","type":"direct"},"vk":{"sharer":"https://vk.com/share.php?url=@url&title=@title&description=@description&image=@media&noparse=true","type":"popup"},"weibo":{"sharer":"http://service.weibo.com/share/share.php?url=@url&title=@title","type":"popup"},"whatsapp":{"sharer":"https://wa.me/?text=@title%0D%0A@url%0D%0A@description","type":"popup","action":"share/whatsapp/share"}}')}},[[277,1,2]]]);
//# sourceMappingURL=main.1dd4efde05640809efcd.bundle.js.map