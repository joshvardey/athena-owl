webpackJsonp([1],{0:function(t,e,s){t.exports=s("NHnr")},"4d8S":function(t,e){},"6bUW":function(t,e){},B3Pz:function(t,e){},BOFi:function(t,e,s){t.exports=s.p+"img/athena-logo.199bb88c.jpg"},CIbF:function(t,e){t.exports=["politics","science","religion","culture"]},GVvK:function(t,e){},NHnr:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("/5sW"),i=s("MMSg"),n=s.n(i),r=(s("doPI"),s("6bUW"),s("mtWM")),o=s.n(r),l=o.a.create({baseURL:"/api"}),c=function(t){throw console.error(t.response.data),t.response.data},u={signup:function(t){var e=new FormData;return Object.keys(t).forEach(function(s){return e.append(s,t[s])}),l.post("/signup",e,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){return t.data}).catch(c)},login:function(t,e){return l.post("/login",{username:t,password:e}).then(function(t){var e=t.data;return localStorage.setItem("user",JSON.stringify(e)),o.a.defaults.headers.common["Authorization"]="Bearer "+e.token,e}).catch(c)},getSecret:function(){return l.get("/secret").then(function(t){return t.data}).catch(c)},getThreads:function(){return l.get("/threads").then(function(t){return t.data}).catch(c)},postThread:function(t){return l.post("/threads",t).then(function(t){return t.data}).catch(c)},getOneThread:function(t){return l.get("/threads/"+t).then(function(t){return t.data}).catch(c)},postDab:function(t,e){return l.post("/threads/"+t+"/dabs",e).then(function(t){return t.data}).catch(c)},postVote:function(t){return l.post("/vote/"+t.dabId,t).then(function(t){return t.data}).catch(c)},userProfile:function(t){return l.get("/profile/"+t).then(function(t){return t.data}).catch(c)},logout:function(){delete o.a.defaults.headers.common["Authorization"],localStorage.removeItem("user")},loadUser:function(){var t=localStorage.getItem("user");if(!t)return!1;var e=JSON.parse(t);return!!e.token&&(o.a.defaults.headers.common["Authorization"]="Bearer "+e.token,e)}},d={data:function(){return{isActive:!1}},methods:{logout:function(){u.logout(),this.$root.user=null,this.$router.push("/login")}}},v=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("nav",{staticClass:"navbar is-transparent"},[a("div",{staticClass:"navbar-brand"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/"}},[a("img",{attrs:{src:s("g6iV"),alt:"littleOwl",width:"25",height:"25"}})]),t._v(" "),a("div",{staticClass:"navbar-burger burger",class:{"is-active":t.isActive},on:{click:function(e){t.isActive=!t.isActive}}},[a("span"),t._v(" "),a("span"),t._v(" "),a("span")])],1),t._v(" "),a("div",{staticClass:"navbar-menu",class:{"is-active":t.isActive}},[a("div",{staticClass:"navbar-start"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/about"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n        About\n      ")]),t._v(" "),a("router-link",{staticClass:"navbar-item",attrs:{to:"/all-threads"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n        See all\n      ")])],1),t._v(" "),a("div",{staticClass:"navbar-end"},[a("div",{staticClass:"navbar-item"},[t.$root.user?a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/profile"}},[t._v("My profile")])],1),t._v(" "),a("p",{staticClass:"control"},[a("a",{staticClass:"navbar-item",on:{click:t.logout}},[t._v("\n              Logout\n            ")])])]):a("div",{staticClass:"field is-grouped"},[a("p",{staticClass:"control"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/login"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n              Login\n            ")])],1),t._v(" "),a("p",{staticClass:"control"},[a("router-link",{staticClass:"navbar-item",attrs:{to:"/signup"},nativeOn:{click:function(e){t.isActive=!1}}},[t._v("\n              Signup\n            ")])],1)])])])])])},p=[],h=s("XyMi"),f=!1,m=null,_=null,b=null,g=Object(h["a"])(d,v,p,f,m,_,b),C=g.exports,k={components:{NavBar:C},created:function(){var t=u.loadUser();t&&(this.$root.user=t)}},w=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{attrs:{id:"app"}},[s("NavBar"),t._v(" "),s("section",{staticClass:"section"},[s("router-view")],1),t._v(" "),t._m(0)],1)},x=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("footer",{staticClass:"footer"},[s("div",{staticClass:"container"},[s("div",{staticClass:"content has-text-centered"},[s("p",[s("strong",[t._v("Athena")]),t._v(" by Josh (c) 2018")])])])])}];function y(t){s("B3Pz")}var $=!1,E=y,D=null,O=null,A=Object(h["a"])(k,w,x,$,E,D,O),T=A.exports,S=s("/ocq"),j=s("CIbF"),U=s.n(j),I={data:function(){return{threadTitle:"",threadDescription:"",filteredTags:U.a,isSelectOnly:!1,tags:[],allowNew:!1}},methods:{getFilteredTags:function(t){this.filteredTags=U.a.filter(function(e){return e.toString().toLowerCase().indexOf(t.toLowerCase())>=0})},postThread:function(){var t=this;this.error=null,u.postThread({title:this.threadTitle,description:this.threadDescription,tags:this.tags}).then(function(e){t.$router.push("/thread/"+e._id)}).catch(function(e){t.error=e})}}},P=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t._m(0),t._v(" "),s("div",{staticClass:"section-body"},[s("form",{on:{submit:function(e){e.preventDefault(),t.postThread(e)}}},[s("section",{staticClass:"section-body"},[s("b-field",[s("b-input",{attrs:{placeholder:"Start a conversation",size:"is-large",icon:"feather"},model:{value:t.threadTitle,callback:function(e){t.threadTitle=e},expression:"threadTitle"}})],1),t._v(" "),s("b-field",{attrs:{label:"Description"}},[s("b-input",{attrs:{maxlength:"200",type:"textarea"},model:{value:t.threadDescription,callback:function(e){t.threadDescription=e},expression:"threadDescription"}})],1),t._v(" "),s("b-field",{attrs:{label:"Enter some tags"}},[s("b-taginput",{attrs:{type:"is-dark",data:t.filteredTags,autocomplete:"",allowNew:t.allowNew,field:"tags",icon:"label",placeholder:"Add a tag",rounded:""},on:{typing:t.getFilteredTags},model:{value:t.tags,callback:function(e){t.tags=e},expression:"tags"}})],1),t._v(" "),s("input",{staticClass:"button",attrs:{type:"submit",value:"Submit"}})],1)])])])},V=[function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",[a("p",{staticStyle:{"text-align":"center"}},[a("img",{attrs:{src:s("BOFi"),alt:"logo",width:"600",height:"400"}})])])}],N=!1,B=null,L=null,q=null,z=Object(h["a"])(I,P,V,N,B,L,q),F=z.exports,M=function(){var t=this,e=t.$createElement;t._self._c;return t._m(0)},J=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("h1",[t._v("This is an about page")])])}],W=null,H=!1,G=null,K=null,R=null,X=Object(h["a"])(W,M,J,H,G,K,R),Q=X.exports,Y=(s("EuXz"),{data:function(){return{name:"",username:"",password:"",files:[],error:null}},methods:{signup:function(){var t=this;this.error=null,u.signup({name:this.name,username:this.username,password:this.password,picture:this.files[0]}).then(function(){t.$router.push("/login")}).catch(function(e){t.error=e})}},computed:{usernameError:function(){return this.error?"UserExistsError"===this.error.name?this.error.message:void 0:null}}}),Z=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("form",{on:{submit:function(e){e.preventDefault(),t.signup(e)}}},[s("b-field",{attrs:{label:"Name"}},[s("b-input",{model:{value:t.name,callback:function(e){t.name=e},expression:"name"}})],1),t._v(" "),s("b-field",{attrs:{label:"Username",type:t.usernameError&&"is-danger",message:t.usernameError}},[s("b-input",{attrs:{maxlength:"30",required:"",icon:"account"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("b-field",[s("b-upload",{model:{value:t.files,callback:function(e){t.files=e},expression:"files"}},[s("a",{staticClass:"button is-primary"},[s("b-icon",{attrs:{icon:"upload"}}),t._v(" "),s("span",[t._v("Click to upload")])],1)]),t._v(" "),t.files&&t.files.length?s("div",[s("span",{staticClass:"file-name"},[t._v("\n                      "+t._s(t.files[0].name)+"\n                      ")])]):t._e()],1),t._v(" "),s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{type:"password",required:"",icon:"lock","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("button",{staticClass:"button is-primary"},[t._v("Signup")])],1)])},tt=[],et=!1,st=null,at=null,it=null,nt=Object(h["a"])(Y,Z,tt,et,st,at,it),rt=nt.exports,ot={data:function(){return{username:"",password:"",error:null}},methods:{login:function(){var t=this;this.error=null,u.login(this.username,this.password).then(function(e){t.$root.user=e,t.$router.push("/")}).catch(function(e){t.error=e})}}},lt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[t.error?s("b-notification",{attrs:{type:"is-danger","has-icon":""}},[t._v("\n    "+t._s(t.error.error)+"\n  ")]):t._e(),t._v(" "),s("form",{on:{submit:function(e){e.preventDefault(),t.login(e)}}},[s("b-field",{attrs:{label:"Username"}},[s("b-input",{attrs:{maxlength:"30",required:"",icon:"account"},model:{value:t.username,callback:function(e){t.username=e},expression:"username"}})],1),t._v(" "),s("b-field",{attrs:{label:"Password"}},[s("b-input",{attrs:{type:"password",required:"",icon:"lock","password-reveal":""},model:{value:t.password,callback:function(e){t.password=e},expression:"password"}})],1),t._v(" "),s("button",{staticClass:"button is-primary"},[t._v("Login")])],1)],1)},ct=[],ut=!1,dt=null,vt=null,pt=null,ht=Object(h["a"])(ot,lt,ct,ut,dt,vt,pt),ft=ht.exports,mt={data:function(){return{profile:null}},created:function(){var t=this;u.userProfile(this.$route.params.id).then(function(e){t.profile=e,console.log(e)}).catch(function(e){t.error=e})},computed:{upVoteCounter:function(){return this.profile.dabs.reduce(function(t,e){return t+e.votes.filter(function(t){return t.opinion}).length},0)},downVoteCounter:function(){return this.profile.dabs.reduce(function(t,e){return t+e.votes.filter(function(t){return!t.opinion}).length},0)}}},_t=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.$root.user.picture}})])]),t._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.profile.username))]),t._v(" "),s("small",[t._v(t._s(t.profile.name))]),t._v(" "),s("nav",{staticClass:"level"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Threads")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.profile.threads.length))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Dabs")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.profile.dabs.length))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Upvotes")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.upVoteCounter))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Downvotes")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.downVoteCounter))])])])])])])])])]),t._v(" "),s("p",{staticClass:"content"},[s("pre",[t._v(t._s(t.profile))])])])},bt=[],gt=!1,Ct=null,kt=null,wt=null,xt=Object(h["a"])(mt,_t,bt,gt,Ct,kt,wt),yt=xt.exports,$t={props:{dab:Object}},Et=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timeline is-centered"},[t._m(0),t._v(" "),t._t("default"),t._v(" "),t._m(1)],2)},Dt=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"timeline-header"},[s("span",{staticClass:"tag is-medium is-primary"},[t._v("Latest")])])},function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("header",{staticClass:"timeline-header"},[s("span",{staticClass:"tag is-medium is-primary"})])}];function Ot(t){s("GVvK")}var At=!1,Tt=Ot,St=null,jt=null,Ut=Object(h["a"])($t,Et,Dt,At,Tt,St,jt),It=Ut.exports,Pt={data:function(){return{disabled:!1,enoughVotes:!0,votesUp:[],votesDown:[]}},props:{dab:Object},created:function(){var t=this;this.dab.votes&&this.dab.votes.forEach(function(e){for(votes in e)!0===vote.opinion?t.votesUp.push(vote):t.votesDown.push(vote)})},methods:{emitUpvote:function(){this.$emit("voted",{dabId:this.dab._id,opinion:!0})},emitDownvote:function(){this.$emit("voted",{dabId:this.dab._id,opinion:!1})},handleClickUp:function(){this.emitUpvote(),this.disabler()},handleClickDown:function(){this.emitDownvote(),this.disabler()},disabler:function(){this.disabled=!0},postViewer:function(){this.votesUp<5&&this.votesDown>30&&(this.enoughVotes=!1)},profileHandler:function(){this.$emit("profile",{userPic:this.dab.creator})}}},Vt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"timeline-item is-warning",class:{"timeline-is-left":t.dab.opinion}},[s("div",{staticClass:"timeline-marker is-warning is-image is-32x32"},[s("router-link",{attrs:{to:"/profile/"+t.dab.creator}},[s("img",{attrs:{src:t.dab.creatorPic}})])],1),t._v(" "),s("div",{staticClass:"timeline-content"},[s("p",{staticClass:"heading"},[t._v(t._s(t.dab.title))]),t._v(" "),s("p",[t._v(t._s(t.dab.description))]),t._v(" "),s("p",[s("button",{staticClass:"button is-focussed is-small is-primary",attrs:{disabled:t.disabled},on:{click:function(e){e.preventDefault(),t.handleClickUp(e)}}},[s("b-icon",{attrs:{icon:"arrow-up-bold-circle-outline"}})],1),s("span",{staticClass:"tag is-warning"},[t._v(t._s(t.votesUp.length))]),s("button",{staticClass:"button is-focussed is-small is-dark",attrs:{disabled:t.disabled},on:{click:function(e){e.preventDefault(),t.handleClickDown(e)}}},[s("b-icon",{attrs:{icon:"arrow-down-bold-circle-outline"}})],1),s("span",{staticClass:"tag is-warning"},[t._v(t._s(t.votesDown.length))])]),t._v(" "),s("a",{attrs:{target:"_blank",href:t.dab.link}},[t._v("Source link: "+t._s(t.dab.sourceName))])])])},Nt=[],Bt=!1,Lt=null,qt=null,zt=null,Ft=Object(h["a"])(Pt,Vt,Nt,Bt,Lt,qt,zt),Mt=Ft.exports,Jt={data:function(){return{link:"",isActive:!0}},methods:{emitAgree:function(){this.$emit("dab-is-created",{link:this.link,opinion:!0}),this.link="",this.isActive=!1},emitDisagree:function(){this.$emit("dab-is-created",{link:this.link,opinion:!1}),this.link="",this.isActive=!1}}},Wt=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("b-tooltip",{class:{always:t.isActive},attrs:{label:"Enter a url to continue the debate"}},[s("div",{staticClass:"container"},[s("b-field",{attrs:{grouped:"","group-multiline":"",position:"is-centered"}},[s("p",{staticClass:"control"},[s("b-tooltip",{attrs:{label:"Post to agree",position:"is-left"}},[s("button",{staticClass:"button is-warning",on:{click:function(e){e.preventDefault(),t.emitAgree(e)}}},[s("span"),t._v(" "),s("b-icon",{attrs:{icon:"thumb-up-outline"}}),t._v(" "),s("span")],1)])],1),t._v(" "),s("b-input",{attrs:{type:"url",icon:"owl"},model:{value:t.link,callback:function(e){t.link=e},expression:"link"}}),t._v(" "),s("p",{staticClass:"control"},[s("b-tooltip",{attrs:{label:"Post to disagree",position:"is-right"}},[s("button",{staticClass:"button is-dark",on:{click:function(e){e.preventDefault(),t.emitDisagree(e)}}},[s("span"),t._v(" "),s("b-icon",{attrs:{icon:"thumb-down-outline"}}),t._v(" "),s("span")],1)])],1)],1)],1)])],1)},Ht=[],Gt=!1,Kt=null,Rt=null,Xt=null,Qt=Object(h["a"])(Jt,Wt,Ht,Gt,Kt,Rt,Xt),Yt=Qt.exports,Zt={data:function(){return{thread:{},dabErr:null,voteErr:null}},created:function(){var t=this;u.getOneThread(this.$route.params.id).then(function(e){t.thread=e})},components:{Timeline:It,DabInput:Yt,Dab:Mt},computed:{reversedDabs:function(){if(this.thread.dabs)return this.thread.dabs.reverse()}},methods:{dabInput:function(t){var e=this;this.dabErr=null,u.postDab(this.thread._id,t).then(function(t){return e.thread.dabs.unshift(t)}).catch(function(t){e.dabErr=t})},voteAction:function(t){var e=this;this.voteErr=null,u.postVote(t).catch(function(t){e.voteErr=t,console.log(t)})}}},te=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[s("section",{staticClass:"hero"},[s("div",{staticClass:"hero-body"},[s("h1",{staticClass:"title",staticStyle:{"text-align":"center"}},[t._v("\n        "+t._s(t.thread.title)+"\n      ")]),t._v(" "),s("br"),t._v(" "),s("h2",{staticClass:"subtitle",staticStyle:{"text-align":"center"}},[t._v("\n        "+t._s(t.thread.description)+"\n      ")]),t._v(" "),s("b-field",{attrs:{grouped:"",position:"is-centered"}},[s("b-taglist",t._l(t.thread.tags,function(e){return s("b-tag",{key:e,staticStyle:{"text-align":"center"},attrs:{grouped:"",rounded:"",type:"is-twitter"}},[t._v(t._s(e))])}))],1)],1)]),t._v(" "),s("h1",{staticClass:"title"}),t._v(" "),s("DabInput",{on:{"dab-is-created":t.dabInput}}),t._v(" "),s("br"),t._v(" "),t.thread?s("Timeline",t._l(t.reversedDabs,function(e){return s("Dab",{key:e._id,attrs:{dab:e},on:{voted:t.voteAction}})})):t._e()],1)},ee=[];function se(t){s("4d8S")}var ae=!1,ie=se,ne=null,re=null,oe=Object(h["a"])(Zt,te,ee,ae,ie,ne,re),le=oe.exports,ce={props:["body","title"]},ue=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"modal-card",staticStyle:{width:"auto"}},[s("header",{staticClass:"modal-card-head"},[s("p",{staticClass:"modal-card-title"},[t._v(t._s(t.title))])]),t._v(" "),s("section",{staticClass:"modal-card-body"},[t._v("\n      "+t._s(t.body)+"\n      "),s("b-checkbox",[t._v("Remember me")])],1),t._v(" "),s("footer",{staticClass:"modal-card-foot"},[s("button",{staticClass:"button",attrs:{type:"button"},on:{click:t.$parent.close}},[t._v("Close")])])])])},de=[],ve=!1,pe=null,he=null,fe=null,me=Object(h["a"])(ce,ue,de,ve,pe,he,fe),_e=(me.exports,{props:{thread:Object}}),be=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"card is-flex"},[s("div",{staticClass:"card-content"},[s("div",{staticClass:"media"},[s("div",{staticClass:"media-content"},[s("p",{staticClass:"title is-center"},[s("router-link",{attrs:{to:"/thread/"+t.thread._id}},[t._v(t._s(t.thread.title))])],1)])]),t._v(" "),s("div",{staticClass:"content"},[s("br"),t._v(" "),s("time",{attrs:{datetime:t.thread.timestamp}},[t._v(t._s(t.thread.timestamp))])])])])},ge=[],Ce=!1,ke=null,we=null,xe=null,ye=Object(h["a"])(_e,be,ge,Ce,ke,we,xe),$e=ye.exports,Ee={data:function(){return{threads:{}}},components:{Debate:$e},created:function(){var t=this;u.getThreads().then(function(e){t.threads=e}),u.userProfile(this.$route.params.id).then(function(e){t.profile=e,console.log(e)}).catch(function(e){t.error=e})}},De=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"tile is-ancestor"},[s("div",{staticClass:"tile is-parent is-vertical"},t._l(t.threads,function(t){return s("Debate",{key:t._id,staticClass:"tile is-child",attrs:{thread:t}})}))])])},Oe=[],Ae=!1,Te=null,Se=null,je=null,Ue=Object(h["a"])(Ee,De,Oe,Ae,Te,Se,je),Ie=Ue.exports,Pe={data:function(){return{secret:null}},created:function(){var t=this;u.getSecret().then(function(e){t.secret=e,console.log(e)})}},Ve=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("section",[s("div",{staticClass:"box"},[s("article",{staticClass:"media"},[s("div",{staticClass:"media-left"},[s("figure",{staticClass:"image is-64x64"},[s("img",{attrs:{src:t.$root.user.picture}})])]),t._v(" "),s("div",{staticClass:"media-content"},[s("div",{staticClass:"content"},[s("p",[s("strong",[t._v(t._s(t.secret.username))]),t._v(" "),s("small",[t._v(t._s(t.secret.name))]),t._v(" "),s("nav",{staticClass:"level"},[s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Threads")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.secret.threads))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Dabs")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.secret.dabs))])])]),t._v(" "),s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Upvotes")]),t._v(" "),s("p",{staticClass:"title"},[t._v(t._s(t.secret.votes))])])]),t._v(" "),t._m(0)])])])])])]),t._v(" "),s("p",{staticClass:"content"},[s("pre",[t._v(t._s(t.secret))])])])},Ne=[function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"level-item has-text-centered"},[s("div",[s("p",{staticClass:"heading"},[t._v("Likes")]),t._v(" "),s("p",{staticClass:"title"},[t._v("789")])])])}],Be=!1,Le=null,qe=null,ze=null,Fe=Object(h["a"])(Pe,Ve,Ne,Be,Le,qe,ze),Me=Fe.exports;a["a"].use(S["a"]);var Je=new S["a"]({mode:"history",routes:[{path:"/",name:"home",component:F},{path:"/about",name:"about",component:Q},{path:"/signup",component:rt},{path:"/login",component:ft},{path:"/profile",component:Me,meta:{requiresAuth:!0}},{path:"/profile/:id",component:yt},{path:"/thread/:id",component:le},{path:"/all-threads",component:Ie}]});a["a"].use(n.a),a["a"].config.productionTip=!1,Je.beforeEach(function(t,e,s){t.meta.requiresAuth&&!We.user?s("/login"):s()});var We=new a["a"]({router:Je,data:{user:null},render:function(t){return t(T)}}).$mount("#app")},doPI:function(t,e){},g6iV:function(t,e,s){t.exports=s.p+"img/athena-badge.45fc10e5.jpg"}},[0]);
//# sourceMappingURL=app.2ac97815.js.map