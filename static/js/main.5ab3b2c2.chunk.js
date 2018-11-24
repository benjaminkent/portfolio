(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{15:function(e){e.exports=[{language:"React.js",imageURL:"./images/react.png",class:"react"},{language:"Ruby",imageURL:"./images/ruby.png",class:"ruby"},{language:"Rails",imageURL:"./images/rails.png",class:"rails"},{language:"PostgreSQL",imageURL:"./images/postgresql-logo.png",class:"postgresql"},{language:"JavaScript",imageURL:"./images/javascript.png",class:"javascript"},{language:"Sass",imageURL:"./images/sass.png",class:"sass"},{language:"HTML5",imageURL:"./images/html.png",class:"html"},{language:"CSS3",imageURL:"./images/css.png",class:"css"}]},16:function(e){e.exports=[{title:"shopping",imageURL:"./images/shopping.png",sourceURL:"http://tubss-shopping-benjaminjehl.surge.sh/",description:"Shopping Site Template",language:"React.js, Bulma"},{title:"photo gallery",imageURL:"./images/photo-gallery.png",sourceURL:"http://myfavoritethings-benjaminjehl.surge.sh/",description:"Photo Gallery",language:"React.js, Bulma"},{title:"weather",imageURL:"./images/weather.png",sourceURL:"http://weather-benjaminjehl.surge.sh/",description:"Check Your Weather!",language:"JavaScript, HTML5, CSS3"},{title:"black jack",imageURL:"./images/blackjack.png",sourceURL:"http://blackjack-benjaminjehl.surge.sh/",description:"BlackJack Game",language:"JavaScript, HTML5, CSS3"},{title:"roshambo",imageURL:"./images/roshambo.png",sourceURL:"http://roshambo-benjaminjehl.surge.sh/",description:"Rock, Paper, Scissors!",language:"JavaScript, HTML5, CSS3"}]},18:function(e,a,t){e.exports=t(29)},23:function(e,a,t){},29:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(14),c=t.n(r),i=(t(23),t(2)),s=t(3),o=t(5),m=t(4),u=t(6),h=t(32),g=t(33),p=t(30),b=t(25),d=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"headshot-container"},l.a.createElement("img",{className:"headshot",src:"/images/square.jpg",alt:"headshot"}),l.a.createElement("h1",{className:"headshot-title"},"Merry Christmas!"),l.a.createElement("div",{className:"headshot-aboutme"},"My name is Benjamin Kent Jehl and I am a Full Stack Web Developer.",l.a.createElement("div",{className:"view-work-button-section"},l.a.createElement("button",{className:"view-work-button first"},l.a.createElement(b.a,{to:"/portfolio",title:"View my Work!",className:"about-me-links"},"View my Portfolio")," "),l.a.createElement("button",{className:"view-work-button second"},l.a.createElement(b.a,{to:"/resume",title:"View my R\xe9sum\xe9!",className:"about-me-links"},"View my Resume"))))))}}]),a}(n.Component),f=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",null,l.a.createElement("div",{className:"about-me"},l.a.createElement("h1",{className:"about-me-header"},"About Me"),l.a.createElement("div",{className:"underline"}),l.a.createElement("p",{className:"about-text"},"Located in the Tampa Bay Area and a former Financial Advisor, I have recently followed my love of the tech industry and learned the skills that enable me to write full stack web applications. I am passionate about designing and building the technologies that will shape the future. When I'm not coding, I enjoy playing guitar, sports, cooking, traveling... and learning how to be a better Web Developer!"),l.a.createElement("h1",{className:"about-me-header"},"Tech Philosophy"),l.a.createElement("div",{className:"underline"}),l.a.createElement("p",{className:"about-text-next"},"This website was designed, coded and styled completely from scratch by myself using React.js and Sass. With most of my projects, I like to write all of the code myself from scratch, however I am familiar with and have implemented CSS frameworks like bootstrap and Bulma to create websites as well. I am extremely excited about where the tech industry is heading and look forward to the many challenges and breakthroughs that lie before us."),l.a.createElement("h1",{className:"about-me-header"},"Contact Me"),l.a.createElement("div",{className:"underline"}),l.a.createElement("p",{className:"about-text-next"},"Please reach out to learn if I would make a good fit for your team at:"," ",l.a.createElement("a",{className:"about-contact",href:"tel://17276199736"},"+1(727)619-9736")," ","or",l.a.createElement("a",{className:"about-contact",href:"mailto:benjamin.k.jehl@gmail.com"}," ","benjamin.k.jehl@gmail.com"),"."),l.a.createElement("ul",{className:"social-media"},l.a.createElement("li",null,l.a.createElement("a",{href:"https://github.com/benjaminkent?tab=repositories",target:"_blank",rel:"noopener noreferrer",title:"GitHub Repo"},l.a.createElement("img",{src:"./images/github.png",className:"social-icon",alt:"github logo"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.linkedin.com/in/benjaminkentjehl",target:"_blank",rel:"noopener noreferrer",title:"Transport to my LinkedIn page"},l.a.createElement("img",{src:"./images/linkedin.png",className:"social-icon",alt:"linkedin logo"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://www.instagram.com/benjaminkent7/",target:"_blank",rel:"noopener noreferrer",title:"See all of my awesome photography skills.."},l.a.createElement("img",{src:"./images/instagram.png",className:"social-icon",alt:"instagram logo"}))),l.a.createElement("li",null,l.a.createElement("a",{href:"https://twitter.com/BenjaminJehl",target:"_blank",rel:"noopener noreferrer",title:"Tweet Tweet"},l.a.createElement("img",{src:"./images/twitter.png",className:"social-icon",alt:"twitter logo"})))))))}}]),a}(n.Component),E=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l))))._toggle=function(){t.props.selectLanguage(t.props.index)},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("li",{className:"lang-image",onClick:this._toggle,style:{backgroundImage:"url(".concat(this.props.image,")")}},l.a.createElement("div",{className:"".concat(this.props.class," lang-description ").concat(this.props.selectedClass)},l.a.createElement("p",null,this.props.language))))}}]),a}(n.Component),k=t(15),j=function(e){function a(e){var t;return Object(i.a)(this,a),(t=Object(o.a)(this,Object(m.a)(a).call(this,e))).selectLanguage=function(e){t.setState({currentlySelectedLanguageIndex:e}),t.timeout&&clearTimeout(t.timeout),t.timeout=setTimeout(function(){t.setState({currentlySelectedLanguageIndex:null})},2e3)},t.timeout=null,t.state={currentlySelectedLanguageIndex:null},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){var e=this;return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"skills-section"},l.a.createElement("p",{className:"skills"},l.a.createElement("strong",null,"My current tool-set includes:")),l.a.createElement("ul",{className:"language-container"},k.map(function(a,t){return l.a.createElement(E,{key:t,index:t,language:a.language,image:a.imageURL,class:a.class,selectLanguage:e.selectLanguage,selectedClass:t===e.state.currentlySelectedLanguageIndex?"back":"front"})}))))}}]),a}(n.Component),y=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"componentDidMount",value:function(){window.scrollTo(0,0)}},{key:"render",value:function(){return null}}]),a}(n.Component),N=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(d,null),l.a.createElement(f,null),l.a.createElement(j,null))}}]),a}(n.Component),v=t(16),w=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",null,l.a.createElement("h1",{className:"portfolio-head"},"Check out some of the apps I've created!"),l.a.createElement("h2",{className:"repo"},l.a.createElement("a",{href:"https://github.com/benjaminkent?tab=repositories",className:"repositories",target:"_blank",rel:"noopener noreferrer"},"See my code on"," ",l.a.createElement("img",{src:"./images/github-full.png",className:"my-repo",alt:"github logo"}))),l.a.createElement("main",{className:"portfolio-main"},l.a.createElement("ul",{className:"portfolio-items"},v.map(function(e,a){return l.a.createElement("a",{key:a,href:e.sourceURL,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("li",{style:{backgroundImage:"url(".concat(e.imageURL,")")},className:"portfolio-image"},l.a.createElement("div",{className:"portfolio-description"},l.a.createElement("p",null,e.description),l.a.createElement("p",null,e.language))))})))))}}]),a}(n.Component),O=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement(w,null))}}]),a}(n.Component),L=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("section",{className:"resume-section"},l.a.createElement("main",{className:"resume-container"},l.a.createElement("h3",{className:"pdf-header"},l.a.createElement("a",{title:"Fancy Resume. Click it, Read it, Love it!",className:"pdf",href:"https://drive.google.com/file/d/1-kMnhBe3kxPYqZBlv2m7nV8JVZrp-1nO/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Click here to view PDF"),l.a.createElement("a",{title:"Not as fancy black and white resume",className:"pdf",href:"https://drive.google.com/file/d/1fbpsAILQxphFHYmen9ktSLO47GlPipiL/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},"Click here for printer friendly PDF.")),l.a.createElement("a",{title:"Hire me!",href:"https://drive.google.com/file/d/1-kMnhBe3kxPYqZBlv2m7nV8JVZrp-1nO/view?usp=sharing",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{className:"resume",src:"./images/color-resume.png",alt:"resume"})))))}}]),a}(n.Component),C=t(31),R=function(e){function a(){var e,t;Object(i.a)(this,a);for(var n=arguments.length,l=new Array(n),r=0;r<n;r++)l[r]=arguments[r];return(t=Object(o.a)(this,(e=Object(m.a)(a)).call.apply(e,[this].concat(l)))).state={class:"hide"},t._openMenu=function(){t.setState({class:"open"})},t._hideMenu=function(){t.setState({class:"hide"})},t}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("header",{className:"header"},l.a.createElement("nav",{className:"big-nav"},l.a.createElement("li",null,l.a.createElement(C.a,{onClick:this._hideMenu,to:"/"},l.a.createElement("img",{className:"logo",src:"./images/christmasfied-logo.png",alt:"logo"}))),l.a.createElement("div",{className:"big-header-links"},l.a.createElement("li",{onClick:this._hideMenu,className:"big-header"},l.a.createElement(C.a,{className:"link",title:"Take Me Home!",exact:!0,to:"/"},"Home")),l.a.createElement("li",{className:"big-header"},l.a.createElement(C.a,{className:"link",title:"Check out my Portfolio",to:"/portfolio"},"Portfolio")),l.a.createElement("li",{className:"big-header"},l.a.createElement(C.a,{className:"link",title:"View my Resume",to:"/resume"},"R\xe9sum\xe9")),l.a.createElement("li",{className:"big-header"},l.a.createElement("a",{className:"link",title:"Blog Time!",href:"https://medium.com/@benjaminjehl",target:"_blank",rel:"noopener noreferrer"},"Blog"))),l.a.createElement("li",{onClick:this._openMenu,className:"hamburger"},l.a.createElement("div",null),l.a.createElement("div",null),l.a.createElement("div",null)))),l.a.createElement("section",{className:"".concat(this.state.class," menu")},l.a.createElement("p",{onClick:this._hideMenu,className:"menu-x"},"X"),l.a.createElement("nav",null,l.a.createElement("ul",null,l.a.createElement(C.a,{onClick:this._hideMenu,className:"link",exact:!0,to:"/"},l.a.createElement("li",null,"Home")),l.a.createElement(C.a,{onClick:this._hideMenu,className:"link",to:"/portfolio"},l.a.createElement("li",null,"Portfolio")),l.a.createElement(C.a,{onClick:this._hideMenu,className:"link",to:"/resume"},l.a.createElement("li",null,"R\xe9sum\xe9")),l.a.createElement("a",{onClick:this._hideMenu,className:"link",href:"https://medium.com/@benjaminjehl",target:"_blank",rel:"noopener noreferrer"},l.a.createElement("li",null,"Blog")),l.a.createElement("a",{onClick:this._hideMenu,className:"link contact",href:"tel://17276199736"},l.a.createElement("li",{className:"menu-contact"},"+1 (727) 619-9736")),l.a.createElement("a",{onClick:this._hideMenu,className:"link contact",href:"mailto:benjamin.k.jehl@gmail.com"},l.a.createElement("li",{className:"menu-contact"},"benjamin.k.jehl@gmail.com"))))))}}]),a}(n.Component),S=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(l.a.Fragment,null,l.a.createElement("section",{className:"footer"},l.a.createElement("footer",null,l.a.createElement("p",null,"Made with ",l.a.createElement("i",{className:"fas fa-heart"})," in St Petersburg, FL."),l.a.createElement("p",null,"2018 Benjamin Kent Jehl,"," ",l.a.createElement("a",{href:"http://benjaminkent.io/"},"benjaminkent.io")))))}}]),a}(n.Component),M=function(e){function a(){return Object(i.a)(this,a),Object(o.a)(this,Object(m.a)(a).apply(this,arguments))}return Object(u.a)(a,e),Object(s.a)(a,[{key:"render",value:function(){return l.a.createElement(h.a,null,l.a.createElement("div",{className:"main"},l.a.createElement(R,null),l.a.createElement(g.a,null,l.a.createElement(p.a,{exact:!0,path:"/",component:N}),l.a.createElement(p.a,{path:"/portfolio",component:O}),l.a.createElement(p.a,{path:"/resume",component:L})),l.a.createElement(S,null)))}}]),a}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));c.a.render(l.a.createElement(M,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[18,2,1]]]);
//# sourceMappingURL=main.5ab3b2c2.chunk.js.map