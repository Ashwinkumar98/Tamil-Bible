(this.webpackJsonpbible=this.webpackJsonpbible||[]).push([[0],{12:function(e,t,a){e.exports=a.p+"static/media/logo.2e8a320b.png"},30:function(e,t,a){e.exports=a(54)},35:function(e,t,a){},36:function(e,t,a){},37:function(e,t,a){},38:function(e,t,a){},39:function(e,t,a){},43:function(e,t,a){},48:function(e,t,a){},49:function(e,t,a){},50:function(e,t,a){},53:function(e,t,a){},54:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(23),l=a.n(r),i=(a(35),a(9)),c=a(10),o=a(13),u=a(11),m=a(14),p=a(12),h=a.n(p),d=(a(36),function(e){return s.a.createElement("div",{className:"loader"})}),f=(a(37),function(e){return s.a.createElement("div",{className:"error"},s.a.createElement("img",{src:"https://i.pinimg.com/originals/32/3e/3b/323e3b47f07fa1fb0a4b2ecb03b2c965.png"}),s.a.createElement("p",null,"Something went wrong"),s.a.createElement("p",null,"Please Try again after some times"))}),v=(a(38),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).getChapters=function(e,t,n){e.preventDefault();var s={pathname:"/chapter",state:{data:{name:t,no:n}}};a.props.history.push(s)},a.state={HeadingList:null,chapter:null,err:null},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;fetch("https://tamilbible.herokuapp.com/bible/").then((function(t){if(!t.ok)throw new f("Something went wrong . Please try again after some times");t.json().then((function(a){e.setState({HeadingList:a,status:t.status})}))})).catch((function(t){e.setState({err:t})}))}},{key:"render",value:function(){var e=this;return null===this.state.err?s.a.createElement("div",null,s.a.createElement("h2",{className:"heading_1"},"Holy Bible"),null!=this.state.HeadingList?s.a.createElement("div",{className:"box_1"},null!=this.state.HeadingList&&this.state.HeadingList.map((function(t){return s.a.createElement("div",{onClick:function(a){return e.getChapters(a,t.name,t._id)},key:t._id,className:"container"},s.a.createElement("img",{src:h.a}),s.a.createElement("p",null,t.name))}))):s.a.createElement(d,null)):s.a.createElement(f,null)}}]),t}(n.Component)),E=(a(39),a(29)),b=function(e){return s.a.createElement(E.a,{query:"(max-width:45rem)"},(function(t){return t?s.a.createElement("div",{className:"mob_player_background"},s.a.createElement("input",{onChange:function(t){return e.seekmove(t)},id:"sliders",className:"mob_audio_slider",type:"range",min:"0",max:"100",defaultValue:"0",step:"1"}),s.a.createElement("div",{className:"mob_audio_duration"},s.a.createElement("p",null,e.currTime),s.a.createElement("p",null,e.duration)),s.a.createElement("div",{className:"mob_play_back_button"},s.a.createElement("i",{onClick:e.backward,className:"fa fa-step-backward"}),e.isplay?s.a.createElement("i",{onClick:e.playMusic,className:"fa fa-pause"}):s.a.createElement("i",{onClick:e.playMusic,className:"fa fa-play"}),s.a.createElement("i",{onClick:e.forward,className:"fa fa-step-forward"}))):s.a.createElement("div",{className:"player_background"},s.a.createElement("div",{className:"play_back_button"},s.a.createElement("i",{onClick:e.backward,className:"fa fa-step-backward"}),e.isplay?s.a.createElement("i",{onClick:e.playMusic,className:"fa fa-pause"}):s.a.createElement("i",{onClick:e.playMusic,className:"fa fa-play"}),s.a.createElement("i",{onClick:e.forward,className:"fa fa-step-forward"})),s.a.createElement("div",{className:"audio_1"},s.a.createElement("p",null,e.currTime),s.a.createElement("input",{onChange:function(t){return e.seekmove(t)},id:"sliders",className:"audio_slider",type:"range",min:"0",max:"100",defaultValue:"0",step:"1"}),s.a.createElement("p",null,e.duration)),s.a.createElement("div",{className:"volume"},e.Muted?s.a.createElement("i",{onClick:e.muted,className:"fas fa-volume-mute"}):s.a.createElement("i",{onClick:e.muted,className:"fas fa-volume-up"}),s.a.createElement("input",{onMouseMove:function(t){return e.setVolume(t)},type:"range",min:"0",defaultValue:"100",max:"100",step:"1"})))}))},g=a(56),N=(a(43),function(e){return s.a.createElement("div",{className:"modal"},s.a.createElement("div",{className:"pop_buttons"},!0===e.isVerse?s.a.createElement(g.a,{url:e.data.Verse+"\n:-"+e.chapter+e.chapterNo+":"+e.verseNo+"\nhttps://tamilaudiobible.herokuapp.com/"},s.a.createElement("span",{className:"fa fa-share-alt share"})):null,s.a.createElement("span",{onClick:e.close,className:"close"},"\xd7")),s.a.createElement("div",{className:"img_share_container"},s.a.createElement("img",{className:"img_123",src:h.a}),s.a.createElement("p",null,"Holy Bible")),s.a.createElement("div",{className:"shared_verse_12"},!0===e.isVerse?s.a.createElement("p",null,e.data.Verse):s.a.createElement("p",null,"The  purpose of the app is to read bible easily in tamil with audio. Please feel free to email me with any feedback about the website"),!0===e.isVerse?s.a.createElement("p",{className:"chapter_no"},"-: ",e.chapter," ",e.chapterNo,":",e.verseNo):s.a.createElement("p",{className:"chapter_no"},"rpaswin008@gmail.com")))}),k=(a(48),function(e){return s.a.createElement("div",null,null!=e.verse&&null!=e.chapters&&s.a.createElement("div",{className:"verse_2"},s.a.createElement("p",null,"#",e.chapters.title," / \u0b85\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd ",e.index),s.a.createElement("div",{className:"verse_1"},e.verse.Verse.map((function(t,a){return s.a.createElement("div",{id:"modal",key:a,onClick:function(n){return e.getVerse(n,t,a)}},s.a.createElement("p",null,a+1,". ",t.Verse))})))))}),y=(a(49),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).x=new Audio,a.setCurrentTime=function(){var e=Math.floor(a.x.currentTime/60),t=Math.floor(a.x.currentTime-60*e);e<10&&(e="0"+e),t<10&&(t+="0"),a.setState({currentTime:e+":"+t})},a.setDuration=function(){var e=Math.floor(a.x.duration/60),t=Math.floor(a.x.duration-60*e);t<10&&(t+="0"),e<10&&(e="0"+e),a.setState({duration:e+":"+t})},a.switchTrack=function(){var e=a.state.index;++e>a.state.chapters.Chapter.length?a.setData(1,0,1):a.setData(e,a.state.index,e)},a.setData=function(e,t,n){a.setState({verse:a.state.chapters.Chapter[t],index:e,audio:"https://wordproaudio.org/bibles/app/audio/30/".concat(a.state.chap,"/").concat(n,".mp3"),play:!0},(function(){a.x.src=a.state.audio,a.x.load(),a.x.play().then((function(e){a.setDuration(),a.seekingTimeUpdate()})).catch((function(e){console.log(e)}))}))},a.getVerse=function(e){var t=e.target.value,n=++t;a.setData(n,e.target.value,n)},a.forward_play=function(){var e=a.state.index;++e<=a.state.chapters.Chapter.length&&a.setData(e,a.state.index,e)},a.Backward_play=function(){var e=a.state.index,t=--e;e>=1&&a.setData(e,--e,t)},a.muted=function(){a.setState({muted:!a.state.muted},(function(){return a.x.muted=a.state.muted}))},a.toggleMusic=function(){a.setState({play:!a.state.play},(function(){a.state.play?a.x.play():a.x.pause()})),a.setDuration(),a.seekingTimeUpdate()},a.setVolume=function(e){a.x.volume=e.target.value/100},a.seekmove=function(e){var t=a.x.duration*(e.target.value/100);t<a.x.duration&&(a.x.currentTime=t)},a.getData=function(e,t,n){e.preventDefault(),n++,a.setState({shareData:t,verseNo:n})},a.closeModal=function(){a.setState({shareData:null,verseNo:null})},a.seekingTimeUpdate=function(){var e=document.getElementById("sliders");setInterval((function(){e.value=a.x.currentTime*(100/a.x.duration)}),10)},a.state={chapters:null,verse:null,index:null,chap:null,shareData:null,err:null,verseNo:null,duration:"00:00",currentTime:"00:00",play:!1,audio:null,muted:!1,background:"background_1"},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"componentWillMount",value:function(){var e=this;void 0!==this.props.location.state&&void 0!==this.props.location.state?fetch("https://tamilbible.herokuapp.com/bible/"+this.props.location.state.data.name).then((function(t){if(!t.ok)throw new f("Something went wrong . Please try again after some times");t.json().then((function(t){void 0!==t||void 0!==t[0].Chapter?e.setState({chapters:t[0],verse:t[0].Chapter[0],index:1,chap:e.props.location.state.data.no,audio:"http://wordproaudio.org/bibles/app/audio/30/".concat(e.props.location.state.data.no,"/1.mp3")},(function(){return e.x.src=e.state.audio})):e.setState({err:"No data"})}))})).catch((function(t){e.setState({err:t})})):this.setState({err:"No Data Loaded"}),this.interval=setInterval((function(){e.setCurrentTime(),!0===e.x.ended&&e.switchTrack()}),10)}},{key:"componentWillUnmount",value:function(){this.x.pause(),clearInterval(this.interval)}},{key:"render",value:function(){var e=this;return null!==this.state.chapters?s.a.createElement("div",null,s.a.createElement("div",{className:null!==this.state.shareData?this.state.background:null},null!=this.state.chapters&&s.a.createElement("div",{className:"chapter_info"},s.a.createElement("div",{className:"container_2"},s.a.createElement("img",{src:h.a}),s.a.createElement("p",null,this.state.chapters.title)),s.a.createElement("div",{className:"info_1"},s.a.createElement("p",null,this.state.chapters.title),s.a.createElement("p",null,"Release Date : Moses-1400 B.C"),s.a.createElement("p",null,"Number of Chapters : ",this.state.chapters.Chapter.length),s.a.createElement("button",{className:"Play_Button",onClick:function(){return e.toggleMusic()}},this.state.play?s.a.createElement("i",{className:"fa fa-pause-circle"},"Pause"):s.a.createElement("i",{className:"fa fa-play-circle"},"Play")))),null!=this.state.chapters&&s.a.createElement("div",{className:"first_verse"},s.a.createElement("p",{className:"verse_123"},this.state.chapters.Chapter[0].Verse[0].Verse),s.a.createElement("p",{className:"verse_first_no"},":-",this.props.location.state.data.name," 1:1")),null!=this.state.chapters&&s.a.createElement("div",{className:"chapter_1"},s.a.createElement("p",null,"Select the Chapter to Read"),s.a.createElement("select",{onChange:function(t){return e.getVerse(t)},className:"chapter_options"},this.state.chapters.Chapter.map((function(e,t){return s.a.createElement("option",{className:"option",key:t,value:t},"\u0b85\u0ba4\u0bcd\u0ba4\u0bbf\u0baf\u0bbe\u0baf\u0bae\u0bcd ",++t)})))),s.a.createElement(k,{verse:this.state.verse,getVerse:this.getData,chapters:this.state.chapters,index:this.state.index}),null!=this.state.chapters&&s.a.createElement(b,{isplay:this.state.play,Muted:this.state.muted,muted:this.muted,seekmove:this.seekmove,currTime:this.state.currentTime,duration:this.state.duration,setVolume:this.setVolume,playMusic:this.toggleMusic,forward:this.forward_play,backward:this.Backward_play})),s.a.createElement("div",null," ",null!==this.state.shareData?s.a.createElement(N,{close:this.closeModal,data:this.state.shareData,isVerse:!0,chapter:this.props.location.state.data.name,chapterNo:this.state.index,verseNo:this.state.verseNo}):null)):null===this.state.err?s.a.createElement(d,null):s.a.createElement(f,null)}}]),t}(n.Component)),_=a(16),w=(a(50),function(e){return s.a.createElement("div",{className:"Header_background"},s.a.createElement("ul",{className:"nav_link"},s.a.createElement(_.b,{className:"nav_link_items",to:"/contents"},s.a.createElement("li",null,"Home")),s.a.createElement("li",{onClick:e.handlepopup},"About me")))}),x=a(7),C=(a(53),function(e){function t(e){var a;return Object(i.a)(this,t),(a=Object(o.a)(this,Object(u.a)(t).call(this,e))).handlePopUp=function(){a.setState({isopen:!a.state.isopen})},a.state={isopen:!1},a}return Object(m.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return s.a.createElement(_.a,null,s.a.createElement(w,{handlepopup:this.handlePopUp}),s.a.createElement("div",{className:"background"},s.a.createElement(x.a,{from:"/",to:"/contents"}),s.a.createElement(x.d,null,s.a.createElement(x.b,{path:"/contents",component:v}),s.a.createElement(x.b,{path:"/chapter",component:y}))),!0===this.state.isopen?s.a.createElement(N,{close:this.handlePopUp,isVerse:!1}):null)}}]),t}(s.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(s.a.createElement(C,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[30,1,2]]]);
//# sourceMappingURL=main.a6def69b.chunk.js.map