exports.id = 293;
exports.ids = [293];
exports.modules = {

/***/ 5183
(module) {

module.exports={siteTitle:'Juan Carlos Manzanares Serrano',// <title>
siteUrl:'https://Juancams.github.io/',manifestName:'Juancams',manifestShortName:'Landing',// max 12 characters
manifestStartUrl:'/',manifestBackgroundColor:'#663399',manifestThemeColor:'#663399',manifestDisplay:'standalone',manifestIcon:'src/assets/images/avatar.png',pathPrefix:``,// This path is subpath of your hosting https://domain/portfolio
authorName:'Juan Carlos Manzanares Serrano',heading:'Robotics Researcher',// social
socialLinks:[{icon:'fa-github',name:'Github',url:'https://github.com/Juancams'},{icon:'fa-twitter',name:'Twitter',url:'https://twitter.com/Juancams98'},{icon:'fa-linkedin',name:'Linkedin',url:'https://www.linkedin.com/in/juancams/'},{icon:'fa-youtube',name:'Youtube',url:'https://www.youtube.com/@juancams98'},{icon:'fa-graduation-cap',name:'Google Scholar',url:'https://scholar.google.com/citations?user=S22aHGEAAAAJ&hl=es'},{icon:'fa-envelope-o',name:'Email',url:'mailto:jc.manzanares.serrano@gmail.com'}]};

/***/ },

/***/ 4679
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(4667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_helmet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(9125);
/* harmony import */ var gatsby__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5237);
class Layout extends react__WEBPACK_IMPORTED_MODULE_0__.Component{constructor(props){super(props);this.state={isPreloaded:true};}componentDidMount(){this.timeoutId=setTimeout(()=>{this.setState({isPreloaded:false});},100);}componentWillUnmount(){if(this.timeoutId){clearTimeout(this.timeoutId);}}render(){const{children}=this.props;const{isPreloaded}=this.state;return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(gatsby__WEBPACK_IMPORTED_MODULE_3__.StaticQuery,{query:"3649515864",render:data=>/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement((react__WEBPACK_IMPORTED_MODULE_0___default().Fragment),null,/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement(react_helmet__WEBPACK_IMPORTED_MODULE_2__["default"],{title:data.site.siteMetadata.title,meta:[{name:'description',content:'Eventually'},{name:'keywords',content:'site, web'}]},/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("html",{lang:"en"})),/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_0___default().createElement("div",{className:isPreloaded?'main-body is-preload':'main-body'},children))});}}Layout.propTypes={children:(prop_types__WEBPACK_IMPORTED_MODULE_1___default().node).isRequired};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Layout);

/***/ },

/***/ 8852
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   A: () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1196);
/* harmony import */ var smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4667);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5556);
/* harmony import */ var prop_types__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(prop_types__WEBPACK_IMPORTED_MODULE_2__);
const Element=props=>{return props.children;};class Scroll extends (react__WEBPACK_IMPORTED_MODULE_1___default().Component){constructor(){super();this.handleClick=this.handleClick.bind(this);}componentDidMount(){smoothscroll_polyfill__WEBPACK_IMPORTED_MODULE_0___default().polyfill();}handleClick(e){e.preventDefault();let elem=0;let scroll=true;const{type,element,offset,timeout}=this.props;if(type&&element){switch(type){case'class':elem=document.getElementsByClassName(element)[0];scroll=elem?true:false;break;case'id':elem=document.getElementById(element);scroll=elem?true:false;break;default:}}scroll?this.scrollTo(elem,offset,timeout):console.log(`Element not found: ${element}`);// eslint-disable-line
}scrollTo(element,offSet=0,timeout=null){const elemPos=element?element.getBoundingClientRect().top+window.pageYOffset:0;if(timeout){setTimeout(()=>{window.scroll({top:elemPos+offSet,left:0,behavior:'smooth'});},timeout);}else{window.scroll({top:elemPos+offSet,left:0,behavior:'smooth'});}}render(){return/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement(Element,null,typeof this.props.children==='object'?(/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().cloneElement(this.props.children,{onClick:this.handleClick})):/*#__PURE__*/react__WEBPACK_IMPORTED_MODULE_1___default().createElement("span",{onClick:this.handleClick},this.props.children));}}Scroll.propTypes={type:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),element:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().string),offset:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),timeout:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().number),children:(prop_types__WEBPACK_IMPORTED_MODULE_2___default().node).isRequired};/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (Scroll);

/***/ },

/***/ 6150
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  A: () => (/* binding */ SideBar)
});

// EXTERNAL MODULE: external "/home/juanca/Documents/Juancams.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(4667);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
;// ./src/components/SideBar/Footer.js
function Footer({socialLinks=[]}){return/*#__PURE__*/index_js_default().createElement("div",{className:"bottom"},/*#__PURE__*/index_js_default().createElement("ul",{className:"icons"},socialLinks.map(social=>{const{icon,name,url}=social;return/*#__PURE__*/index_js_default().createElement("li",{key:url},/*#__PURE__*/index_js_default().createElement("a",{href:url,className:`icon ${icon}`},/*#__PURE__*/index_js_default().createElement("span",{className:"label"},name)));})));}
// EXTERNAL MODULE: ./.cache/gatsby-browser-entry.js + 6 modules
var gatsby_browser_entry = __webpack_require__(5237);
;// ./src/components/SideBar/Header.js
function Header_Footer({title,heading,avatar}){return/*#__PURE__*/index_js_default().createElement("div",{id:"logo"},/*#__PURE__*/index_js_default().createElement(gatsby_browser_entry.Link,{to:"/"},/*#__PURE__*/index_js_default().createElement("span",{className:"image",style:{display:'block',marginBottom:'15px'}},/*#__PURE__*/index_js_default().createElement("img",{src:avatar,alt:"",style:{width:'120px',height:'120px',borderRadius:'50%',objectFit:'cover'}})),/*#__PURE__*/index_js_default().createElement("h1",{id:"title"},title),/*#__PURE__*/index_js_default().createElement("p",null,heading)));}
// EXTERNAL MODULE: ./node_modules/react-scrollspy/lib/scrollspy.js
var scrollspy = __webpack_require__(9145);
// EXTERNAL MODULE: ./src/components/Scroll.js
var Scroll = __webpack_require__(8852);
;// ./src/assets/images/pato.gif
/* harmony default export */ const pato = ("/static/pato-6e7dfdd455e6cd14107f56810b19eb1b.gif");
;// ./src/components/SideBar/Nav.js
// 1. Asegúrate de importar tu GIF aquí (ajusta la ruta si es necesario)
function Nav({sections=[]}){return/*#__PURE__*/index_js_default().createElement("nav",{id:"nav"},/*#__PURE__*/index_js_default().createElement("ul",null,/*#__PURE__*/index_js_default().createElement(scrollspy/* default */.A,{items:sections.map(s=>s.id),currentClassName:"active",offset:-300},sections.map(s=>{return/*#__PURE__*/index_js_default().createElement("li",{key:s.id},/*#__PURE__*/index_js_default().createElement(Scroll/* default */.A,{type:"id",element:s.id},/*#__PURE__*/index_js_default().createElement("a",{href:`#${s.id}`,id:"top-link"},/*#__PURE__*/index_js_default().createElement("span",{className:`icon ${s.icon}`},s.name))));})),/*#__PURE__*/index_js_default().createElement("li",{style:{textAlign:'center',marginTop:'30px',paddingBottom:'20px',listStyle:'none'}},/*#__PURE__*/index_js_default().createElement("img",{src:pato,alt:"Shin Chan",style:{width:'150px',// Ajusta el tamaño a tu gusto
height:'auto',display:'inline-block'}}))));}
;// ./src/components/SideBar/TopNav.js
function TopNav({title,onMenuClick=()=>{}}){return/*#__PURE__*/index_js_default().createElement("div",{id:"headerToggle"},/*#__PURE__*/index_js_default().createElement("a",{href:"/#",className:"toggle",onClick:e=>{e.preventDefault();onMenuClick();}},' '));}
// EXTERNAL MODULE: ./config.js
var config = __webpack_require__(5183);
var config_default = /*#__PURE__*/__webpack_require__.n(config);
;// ./src/assets/images/avatar.png
/* harmony default export */ const avatar = ("/static/avatar-df4ed975a61b0527c84d3725f1e76bb0.png");
;// ./src/components/SideBar/index.js
function SideBar({sections=[]}){const{0:headerOpen,1:toggleHeader}=(0,index_js_.useState)(false);return/*#__PURE__*/index_js_default().createElement("div",{className:`${headerOpen?'header-visible':' '}`},/*#__PURE__*/index_js_default().createElement(TopNav,{title:(config_default()).authorName,onMenuClick:()=>toggleHeader(!headerOpen)}),/*#__PURE__*/index_js_default().createElement("div",{id:"header"},/*#__PURE__*/index_js_default().createElement("div",{className:"top"},/*#__PURE__*/index_js_default().createElement(Header_Footer,{avatar:avatar,title:/*#__PURE__*/index_js_default().createElement("h1",null,"Juan Carlos",/*#__PURE__*/index_js_default().createElement("br",null),"Manzanares",/*#__PURE__*/index_js_default().createElement("br",null),"Serrano"),heading:(config_default()).heading}),/*#__PURE__*/index_js_default().createElement(Nav,{sections:sections})),/*#__PURE__*/index_js_default().createElement(Footer,{socialLinks:(config_default()).socialLinks})));}

/***/ },

/***/ 8518
(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

"use strict";
// ESM COMPAT FLAG
__webpack_require__.r(__webpack_exports__);

// EXPORTS
__webpack_require__.d(__webpack_exports__, {
  "default": () => (/* binding */ pages)
});

// EXTERNAL MODULE: external "/home/juanca/Documents/Juancams.github.io/node_modules/react/index.js"
var index_js_ = __webpack_require__(4667);
var index_js_default = /*#__PURE__*/__webpack_require__.n(index_js_);
// EXTERNAL MODULE: ./src/components/Layout.js
var Layout = __webpack_require__(4679);
;// ./src/components/PageFooter.js
function PageFooter(){return/*#__PURE__*/index_js_default().createElement("div",{id:"footer"},/*#__PURE__*/index_js_default().createElement("ul",{className:"copyright"},/*#__PURE__*/index_js_default().createElement("li",null,"\xA9 ",new Date().getFullYear()," Juan Carlos Manzanares Serrano. All rights reserved.")));}
// EXTERNAL MODULE: ./src/components/SideBar/index.js + 6 modules
var SideBar = __webpack_require__(6150);
;// ./src/assets/images/pic01.jpeg
/* harmony default export */ const pic01 = ("/static/pic01-1d22d8cfedbb216d2499c85c08f7752f.jpeg");
;// ./src/assets/images/pic02.png
/* harmony default export */ const pic02 = ("/static/pic02-607ab911600c6683a979eb9109498c65.png");
;// ./src/assets/images/pic03.jpg
/* harmony default export */ const pic03 = ("/static/pic03-d646a1378cd9346f3d9dd4527b17cab4.jpg");
;// ./src/assets/images/pic04.jpg
/* harmony default export */ const pic04 = ("/static/pic04-659fa150b32b84a71bb6f3e0353c4829.jpg");
;// ./src/assets/images/pic05.png
/* harmony default export */ const pic05 = ("/static/pic05-f35b1e3cd8391cd384143876e816339e.png");
;// ./src/assets/images/shinchan.gif
/* harmony default export */ const shinchan = ("/static/shinchan-7543ff9737301675cb3f08aa6fb62b43.gif");
;// ./src/assets/images/kururu.gif
/* harmony default export */ const kururu = ("/static/kururu-05ef588e54a079682e6d9830546c45b0.gif");
// EXTERNAL MODULE: ./src/components/Scroll.js
var Scroll = __webpack_require__(8852);
;// ./src/pages/index.js
const sections=[{id:'top',name:'Intro',icon:'fa-home'},{id:'portfolio',name:'Portfolio',icon:'fa-th'},{id:'experience',name:'Experience',icon:'fa-briefcase'},{id:'papers',name:'Papers',icon:'fa-file'},{id:'achievements',name:'Achievements',icon:'fa-trophy'},{id:'contact',name:'Contact',icon:'fa-envelope'}];const IndexPage=()=>/*#__PURE__*/index_js_default().createElement(Layout/* default */.A,null,/*#__PURE__*/index_js_default().createElement(SideBar/* default */.A,{sections:sections}),/*#__PURE__*/index_js_default().createElement("div",{id:"main"},/*#__PURE__*/index_js_default().createElement("section",{id:"top",className:"one dark cover"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",{className:"alt"},"Hi! I'm ",/*#__PURE__*/index_js_default().createElement("strong",null,"Juan Carlos Manzanares Serrano"),/*#__PURE__*/index_js_default().createElement("br",null),"Robotics Researcher"),/*#__PURE__*/index_js_default().createElement("p",null,"Coffee with milk is like coffee but with milk ")))),/*#__PURE__*/index_js_default().createElement("section",{id:"portfolio",className:"two"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Portfolio")),/*#__PURE__*/index_js_default().createElement("p",null,"A showcase of my latest work in robotics and software engineering, featuring mobile bases, quadruped robots, advanced simulation environments, ROS 2 utilities, and Continuous Integration (CI) workflows."),/*#__PURE__*/index_js_default().createElement("div",{className:"row"},/*#__PURE__*/index_js_default().createElement("div",{className:"col-4 col-12-mobile"},/*#__PURE__*/index_js_default().createElement("article",{className:"item"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Tiago-Harmonic",className:"image fit"},/*#__PURE__*/index_js_default().createElement("img",{src:pic01,alt:""})),/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold'}},"Tiago Harmonic"),/*#__PURE__*/index_js_default().createElement("p",null,"A Gazebo Harmonic simulation wrapper for the Tiago robot."))),/*#__PURE__*/index_js_default().createElement("article",{className:"item"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Juancams/rviz_publisher",className:"image fit"},/*#__PURE__*/index_js_default().createElement("img",{src:pic02,alt:""})),/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold'}},"RViz Publisher"),/*#__PURE__*/index_js_default().createElement("p",null,"Tool to generate rviz plugins using a yaml file.")))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-4 col-12-mobile"},/*#__PURE__*/index_js_default().createElement("article",{className:"item"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Unitree-Go2-Robot",className:"image fit"},/*#__PURE__*/index_js_default().createElement("img",{src:pic03,alt:""})),/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold'}},"Unitree Go 2"),/*#__PURE__*/index_js_default().createElement("p",null,"Go 2 wrapper to provide ROS 2 users a simple API to use the robot."))),/*#__PURE__*/index_js_default().createElement("br",null),/*#__PURE__*/index_js_default().createElement("article",{className:"item"},/*#__PURE__*/index_js_default().createElement("img",{src:shinchan,alt:""}))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-4 col-12-mobile"},/*#__PURE__*/index_js_default().createElement("article",{className:"item"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Juancams/kobuki_ros",className:"image fit"},/*#__PURE__*/index_js_default().createElement("img",{src:pic04,alt:""})),/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold'}},"Kobuki ROS 2"),/*#__PURE__*/index_js_default().createElement("p",null,"Updated ROS 2 drivers for the Kobuki mobile base in jazzy/rolling distributions."))),/*#__PURE__*/index_js_default().createElement("article",{className:"item"},/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/marketplace/actions/date-last-ci",className:"image fit"},/*#__PURE__*/index_js_default().createElement("img",{src:pic05,alt:""})),/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold'}},"Date Last CI"),/*#__PURE__*/index_js_default().createElement("p",null,"A GitHub Action that automates the generation and display of dynamic Shields.io badges showing the last successful CI build date."))))))),/*#__PURE__*/index_js_default().createElement("section",{id:"experience",className:"three"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Work Experience")),/*#__PURE__*/index_js_default().createElement("p",null,"My professional journey in robotics research, software development, and automation."),/*#__PURE__*/index_js_default().createElement("div",{style:{textAlign:'left',marginTop:'40px',paddingLeft:'20px',maxWidth:'800px',margin:'40px auto 0 auto'}},/*#__PURE__*/index_js_default().createElement("div",{style:{position:'relative',borderLeft:'3px solid #ccc',paddingLeft:'30px',paddingBottom:'40px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{position:'absolute',left:'-11px',top:'0',width:'19px',height:'19px',borderRadius:'50%',backgroundColor:'#fff',border:'3px solid #888'}}),/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 5px 0',fontSize:'1.3em'}},"Robotics Software Engineer"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',color:'#555',fontWeight:'bold'}},"Monodon (Navantia), Madrid"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'0.9em',fontStyle:'italic',color:'#888'}},"03/2026 - Present")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.95em'}},"Development of software for naval platforms.")),/*#__PURE__*/index_js_default().createElement("div",{style:{position:'relative',borderLeft:'3px solid #ccc',paddingLeft:'30px',paddingBottom:'40px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{position:'absolute',left:'-11px',top:'0',width:'19px',height:'19px',borderRadius:'50%',backgroundColor:'#fff',border:'3px solid #888'}}),/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 5px 0',fontSize:'1.3em'}},"Technical Support Staff"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',color:'#555',fontWeight:'bold'}},"Universidad Rey Juan Carlos, Fuenlabrada"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'0.9em',fontStyle:'italic',color:'#888'}},"12/2024 - 11/2025")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.95em'}},"Technical support for robots in the CoreSense project and participation in RoboCup.")),/*#__PURE__*/index_js_default().createElement("div",{style:{position:'relative',borderLeft:'3px solid #ccc',paddingLeft:'30px',paddingBottom:'40px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{position:'absolute',left:'-11px',top:'0',width:'19px',height:'19px',borderRadius:'50%',backgroundColor:'#fff',border:'3px solid #888'}}),/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 5px 0',fontSize:'1.3em'}},"Specialist Technical Staff"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',color:'#555',fontWeight:'bold'}},"Universidad Rey Juan Carlos, Fuenlabrada"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'0.9em',fontStyle:'italic',color:'#888'}},"03/2024 - 11/2024")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.95em'}},"Integration of robotic, optical and lighting elements from the Laboratory of Guidance, Navigastion and Control of Spacecraft in Co-orbital Flight into a ROS 2-based simulator.")),/*#__PURE__*/index_js_default().createElement("div",{style:{position:'relative',borderLeft:'3px solid #ccc',paddingLeft:'30px',paddingBottom:'40px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{position:'absolute',left:'-11px',top:'0',width:'19px',height:'19px',borderRadius:'50%',backgroundColor:'#fff',border:'3px solid #888'}}),/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 5px 0',fontSize:'1.3em'}},"Technical Support Staff"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',color:'#555',fontWeight:'bold'}},"Universidad Rey Juan Carlos, Fuenlabrada"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'0.9em',fontStyle:'italic',color:'#888'}},"10/2022 - 02/2024")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.95em'}},"Technical support for robots in the CoreSense project and participation in RoboCup.")),/*#__PURE__*/index_js_default().createElement("div",{style:{position:'relative',borderLeft:'3px solid #ccc',paddingLeft:'30px',paddingBottom:'40px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{position:'absolute',left:'-11px',top:'0',width:'19px',height:'19px',borderRadius:'50%',backgroundColor:'#fff',border:'3px solid #888'}}),/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 5px 0',fontSize:'1.3em'}},"University Intership"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',color:'#555',fontWeight:'bold'}},"Startiun. SL, Madrid"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'0.9em',fontStyle:'italic',color:'#888'}},"01/2022 - 09/2022")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.95em'}},"Development of a node recovery system for the ROS 2 framework and a robots with manipulator arm using MoveIt 2.")),/*#__PURE__*/index_js_default().createElement("div",{style:{position:'relative',borderLeft:'3px solid transparent',paddingLeft:'30px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{position:'absolute',left:'-11px',top:'0',width:'19px',height:'19px',borderRadius:'50%',backgroundColor:'#fff',border:'3px solid #888'}}),/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 5px 0',fontSize:'1.3em'}},"Senior Technician Intership"),/*#__PURE__*/index_js_default().createElement("div",{style:{display:'flex',justifyContent:'space-between',flexWrap:'wrap',marginBottom:'10px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',color:'#555',fontWeight:'bold'}},"Repsol, Puertollano"),/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'0.9em',fontStyle:'italic',color:'#888'}},"04/2028 - 08/2018")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.95em'}},"Assistant in maintenance and repairs of different plants, mainly the sulfur plant."))))),/*#__PURE__*/index_js_default().createElement("section",{id:"papers",className:"four"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Papers & Publications")),/*#__PURE__*/index_js_default().createElement("p",null,"A selection of my recent academic publications, preprints, and research contributions in the field of robotics."),/*#__PURE__*/index_js_default().createElement("div",{style:{textAlign:'left',marginTop:'30px'}},/*#__PURE__*/index_js_default().createElement("article",{style:{marginBottom:'25px',paddingBottom:'20px',borderBottom:'solid 1px rgba(0, 0, 0, 0.1)'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 10px 0',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.sciencedirect.com/science/article/abs/pii/S0921889025000454",target:"_blank",rel:"noopener noreferrer",style:{color:'inherit'}},"Towards a robotic intrusion prevention system: Combining security and safety in cognitive social robots")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:'0 0 5px 0',fontSize:'0.9em'}},"F Mart\xEDn, E Soriano-Salvador, JM Guerrero, GG Muzquiz, JC Manzanares, et al."),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.85em',fontStyle:'italic',color:'#888'}},"Robotics and Autonomous Systems 190, 104959 \u2014 2025")),/*#__PURE__*/index_js_default().createElement("article",{style:{marginBottom:'25px',paddingBottom:'20px',borderBottom:'solid 1px rgba(0, 0, 0, 0.1)'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 10px 0',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://ui.adsabs.harvard.edu/abs/2025arXiv250700882A/abstract",target:"_blank",rel:"noopener noreferrer",style:{color:'inherit'}},"I Move Therefore I Learn: Experience-Based Traversability in Outdoor Robotics")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:'0 0 5px 0',fontSize:'0.9em'}},"M\xC1 de Miguel, J Beltr\xE1n, JS Cely, F Mart\xEDn, JC Manzanares, A Garc\xEDa"),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.85em',fontStyle:'italic',color:'#888'}},"arXiv preprint arXiv:2507.00882 \u2014 2025")),/*#__PURE__*/index_js_default().createElement("article",{style:{marginBottom:'25px',paddingBottom:'20px',borderBottom:'solid 1px rgba(0, 0, 0, 0.1)'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 10px 0',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://repositorio.upct.es/entities/publication/ab6e06bb-eec1-4778-8774-b81a943f24a8",target:"_blank",rel:"noopener noreferrer",style:{color:'inherit'}},"EasyNav Simple Stack: a minimum set of plugins for a reliable navigation")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:'0 0 5px 0',fontSize:'0.9em'}},"F Mart\xEDn Rico, FM Moreno Olivo, C Manzanares Serrano, et al."),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.85em',fontStyle:'italic',color:'#888'}},"Universidad Polit\xE9cnica de Cartagena \u2014 2025")),/*#__PURE__*/index_js_default().createElement("article",{style:{marginBottom:'25px',paddingBottom:'20px',borderBottom:'solid 1px rgba(0, 0, 0, 0.1)'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 10px 0',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5350912",target:"_blank",rel:"noopener noreferrer",style:{color:'inherit'}},"Llm-Assisted Plan Execution for Robots in Dynamic Environments")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:'0 0 5px 0',fontSize:'0.9em'}},"JD Pe\xF1a-Narvaez, JC Manzanares, FM Moreno, R P\xE9rez-Rodr\xEDguez, et al."),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.85em',fontStyle:'italic',color:'#888'}},"SSRN 5350912 \u2014 2024/2025")),/*#__PURE__*/index_js_default().createElement("article",{style:{marginBottom:'25px',paddingBottom:'20px',borderBottom:'solid 1px rgba(0, 0, 0, 0.1)'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 10px 0',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://arxiv.org/abs/2406.17379",target:"_blank",rel:"noopener noreferrer",style:{color:'inherit'}},"Constructing behavior trees from temporal plans for robotic applications")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:'0 0 5px 0',fontSize:'0.9em'}},"J Zapf, M Roveri, F Martin, JC Manzanares"),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.85em',fontStyle:'italic',color:'#888'}},"arXiv preprint arXiv:2406.17379 \u2014 2024")),/*#__PURE__*/index_js_default().createElement("article",{style:{marginBottom:'25px'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',margin:'0 0 10px 0',fontSize:'1.2em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://documat.unirioja.es/servlet/articulo?codigo=9704409",target:"_blank",rel:"noopener noreferrer",style:{color:'inherit'}},"Impact of Real time on Active Perception Systems applied to Social Robotics")),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:'0 0 5px 0',fontSize:'0.9em'}},"AA Garc\xEDa, JD Pe\xF1a Narv\xE1ez, R P\xE9rez Rodr\xEDguez, JC Manzanares, et al."),/*#__PURE__*/index_js_default().createElement("p",{style:{margin:0,fontSize:'0.85em',fontStyle:'italic',color:'#888'}},"Universidad de Alicante \u2014 2024"))))),/*#__PURE__*/index_js_default().createElement("section",{id:"achievements",className:"five"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Achievements & Community")),/*#__PURE__*/index_js_default().createElement("p",null,"A summary of my active involvement in the robotics community, international competitions, and other notable research projects."),/*#__PURE__*/index_js_default().createElement("div",{className:"row",style:{textAlign:'left',marginTop:'30px'}},/*#__PURE__*/index_js_default().createElement("div",{className:"col-6 col-12-mobile",style:{marginBottom:'20px'}},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',borderBottom:'2px solid rgba(0,0,0,0.1)',paddingBottom:'10px',marginBottom:'20px',fontSize:'1.2em'}},"\uD83C\uDFC6 Competitions & Community"),/*#__PURE__*/index_js_default().createElement("ul",{style:{listStyleType:'none',paddingLeft:0,margin:0}},/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',marginRight:'8px'}},"\uD83C\uDF99\uFE0F"),/*#__PURE__*/index_js_default().createElement("strong",null,"Talk:")," ROSCon Sevilla 2024",' ',"(",/*#__PURE__*/index_js_default().createElement("a",{href:"https://vimeo.com/showcase/11453818?video=1029493394",target:"_blank",rel:"noopener noreferrer"},"Video")," &",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/CoreSenseEU/coresense_instrumentation",target:"_blank",rel:"noopener noreferrer"},"Code"),")"),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',marginRight:'8px'}},"\uD83D\uDCC5"),/*#__PURE__*/index_js_default().createElement("strong",null,"Organizer:"),' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://roscon.org.es/roscon2023/",target:"_blank",rel:"noopener noreferrer"},"ROSCon Madrid 2023")," &",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://en.urjc.es/todas-las-noticias-de-actualidad/6686-robotics-day-un-dia-para-celebrar-el-presente-pasado-y-futuro-de-la-robotica",target:"_blank",rel:"noopener noreferrer"},"Robotics Day URJC")),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',marginRight:'8px'}},"\uD83C\uDFC5"),/*#__PURE__*/index_js_default().createElement("strong",null,"Competitor: RoboCup (Portugal 2022, @Home 2023, @Home 2024) & SciRoc 2019 ("),' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://gentlebots.gsyc.urjc.es/",target:"_blank",rel:"noopener noreferrer"},"Gentlebots")," &",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.urjc.es/todas-las-noticias-de-actualidad/7352-la-urjc-ganadora-de-la-european-robocup-2022",target:"_blank",rel:"noopener noreferrer"},"Nocom-pila"),")"),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{fontSize:'1.1em',marginRight:'8px'}},"\uD83E\uDD1D"),/*#__PURE__*/index_js_default().createElement("strong",null,"Co-founder & Member:")," ",/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/RoboTech-URJC",target:"_blank",rel:"noopener noreferrer"},"Robotech Association")))),/*#__PURE__*/index_js_default().createElement("div",{className:"col-6 col-12-mobile"},/*#__PURE__*/index_js_default().createElement("h3",{style:{fontWeight:'bold',borderBottom:'2px solid rgba(0,0,0,0.1)',paddingBottom:'10px',marginBottom:'20px',fontSize:'1.2em'}},"\uD83D\uDD2C Research & Open Source"),/*#__PURE__*/index_js_default().createElement("ul",{style:{listStyleType:'none',paddingLeft:0,margin:0}},/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px',paddingLeft:'25px',textIndent:'-25px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{color:'#888',marginRight:'8px'}},"\u25B8"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://coresense.eu/",target:"_blank",rel:"noopener noreferrer"},"European Project CoreSense")),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px',paddingLeft:'25px',textIndent:'-25px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{color:'#888',marginRight:'8px'}},"\u25B8"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/IntelligentRoboticsLabs/GNC_orbital",target:"_blank",rel:"noopener noreferrer"},"Laboratory of Guidance, Navigation and Control of Spacecraft in Co-orbital Flight")),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px',paddingLeft:'25px',textIndent:'-25px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{color:'#888',marginRight:'8px'}},"\u25B8"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://dmarce-project.github.io/",target:"_blank",rel:"noopener noreferrer"},"DMarce Project")),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px',paddingLeft:'25px',textIndent:'-25px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{color:'#888',marginRight:'8px'}},"\u25B8"),/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/MOCAP4ROS2-Project",target:"_blank",rel:"noopener noreferrer"},"Mocap Optitrack integration in ROS 2")),/*#__PURE__*/index_js_default().createElement("li",{style:{marginBottom:'12px',paddingLeft:'25px',textIndent:'-25px'}},/*#__PURE__*/index_js_default().createElement("span",{style:{color:'#888',marginRight:'8px'}},"\u25B8"),"Development for",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Unitree-Go2-Robot",target:"_blank",rel:"noopener noreferrer"},"Unitree Go2 URJC"),",",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/EasyNavigation",target:"_blank",rel:"noopener noreferrer"},"EasyNavigation"),",",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Juancams/kobuki_ros",target:"_blank",rel:"noopener noreferrer"},"Kobuki")," &",' ',/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Tiago-Harmonic",target:"_blank",rel:"noopener noreferrer"},"Tiago"))))))),/*#__PURE__*/index_js_default().createElement("section",{id:"contact",className:"six"},/*#__PURE__*/index_js_default().createElement("div",{className:"container"},/*#__PURE__*/index_js_default().createElement("header",null,/*#__PURE__*/index_js_default().createElement("h2",null,"Get in Touch")),/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:'40px'}},/*#__PURE__*/index_js_default().createElement("img",{src:kururu,alt:"Contact Decoration",style:{width:'500px',height:'auto',opacity:'0.9'}})),/*#__PURE__*/index_js_default().createElement("p",null,"Whether you have a question, a proposal for a project, or just want to talk about robotics, ROS 2, or open source, my inbox is always open!"),/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:'40px',textAlign:'center'}},/*#__PURE__*/index_js_default().createElement("a",{href:"mailto:jc.manzanares.serrano@gmail.com",className:"button primary",style:{padding:'15px 40px',fontSize:'1.2em',borderRadius:'5px'}},"Say Hello ",/*#__PURE__*/index_js_default().createElement("span",{style:{marginLeft:'10px'}},"\uD83D\uDC4B")),/*#__PURE__*/index_js_default().createElement("div",{style:{marginTop:'30px',fontSize:'1.5em'}},/*#__PURE__*/index_js_default().createElement("a",{href:"https://www.linkedin.com/in/juancams/",target:"_blank",rel:"noopener noreferrer",style:{margin:'0 15px',color:'inherit'}},/*#__PURE__*/index_js_default().createElement("span",{className:"icon brands fa-linkedin"})),/*#__PURE__*/index_js_default().createElement("a",{href:"https://github.com/Juancams",target:"_blank",rel:"noopener noreferrer",style:{margin:'0 15px',color:'inherit'}},/*#__PURE__*/index_js_default().createElement("span",{className:"icon brands fa-github"})),/*#__PURE__*/index_js_default().createElement("a",{href:"https://twitter.com/Juancams98",target:"_blank",rel:"noopener noreferrer",style:{margin:'0 15px',color:'inherit'}},/*#__PURE__*/index_js_default().createElement("span",{className:"icon brands fa-twitter"}))))))),/*#__PURE__*/index_js_default().createElement(PageFooter,null));/* harmony default export */ const pages = (IndexPage);

/***/ },

/***/ 9145
(__unused_webpack_module, exports, __webpack_require__) {

"use strict";
var __webpack_unused_export__;


var _interopRequireDefault = __webpack_require__(4994);

__webpack_unused_export__ = ({
  value: true
});
exports.A = void 0;

var _extends2 = _interopRequireDefault(__webpack_require__(4634));

var _defineProperty2 = _interopRequireDefault(__webpack_require__(3693));

var _toConsumableArray2 = _interopRequireDefault(__webpack_require__(1132));

var _classCallCheck2 = _interopRequireDefault(__webpack_require__(7383));

var _possibleConstructorReturn2 = _interopRequireDefault(__webpack_require__(8452));

var _getPrototypeOf2 = _interopRequireDefault(__webpack_require__(3072));

var _assertThisInitialized2 = _interopRequireDefault(__webpack_require__(2475));

var _createClass2 = _interopRequireDefault(__webpack_require__(4579));

var _inherits2 = _interopRequireDefault(__webpack_require__(9511));

var _propTypes = _interopRequireDefault(__webpack_require__(5556));

var _react = _interopRequireDefault(__webpack_require__(4667));

var _classnames = _interopRequireDefault(__webpack_require__(6942));

var _throttle = _interopRequireDefault(__webpack_require__(2762));

function isEqualArray(a, b) {
  return a.length === b.length && a.every(function (item, index) {
    return item === b[index];
  });
}

var Scrollspy =
/*#__PURE__*/
function (_React$Component) {
  (0, _inherits2.default)(Scrollspy, _React$Component);
  (0, _createClass2.default)(Scrollspy, null, [{
    key: "propTypes",
    get: function get() {
      return {
        items: _propTypes.default.arrayOf(_propTypes.default.string).isRequired,
        currentClassName: _propTypes.default.string.isRequired,
        scrolledPastClassName: _propTypes.default.string,
        style: _propTypes.default.object,
        componentTag: _propTypes.default.oneOfType([_propTypes.default.string, _propTypes.default.elementType]),
        offset: _propTypes.default.number,
        rootEl: _propTypes.default.string,
        onUpdate: _propTypes.default.func
      };
    }
  }, {
    key: "defaultProps",
    get: function get() {
      return {
        items: [],
        currentClassName: '',
        style: {},
        componentTag: 'ul',
        offset: 0,
        onUpdate: function onUpdate() {}
      };
    }
  }]);

  function Scrollspy(props) {
    var _this;

    (0, _classCallCheck2.default)(this, Scrollspy);
    _this = (0, _possibleConstructorReturn2.default)(this, (0, _getPrototypeOf2.default)(Scrollspy).call(this, props));
    _this.state = {
      targetItems: [],
      inViewState: [],
      isScrolledPast: [] // manually bind as ES6 does not apply this
      // auto binding as React.createClass does

    };
    _this._handleSpy = _this._handleSpy.bind((0, _assertThisInitialized2.default)(_this));
    return _this;
  }

  (0, _createClass2.default)(Scrollspy, [{
    key: "_initSpyTarget",
    value: function _initSpyTarget(items) {
      var targetItems = items.map(function (item) {
        return document.getElementById(item);
      });
      return targetItems;
    } // https://github.com/makotot/react-scrollspy/pull/45

  }, {
    key: "_fillArray",
    value: function _fillArray(array, val) {
      var newArray = [];

      for (var i = 0, max = array.length; i < max; i++) {
        newArray[i] = val;
      }

      return newArray;
    }
  }, {
    key: "_isScrolled",
    value: function _isScrolled() {
      return this._getScrollDimension().scrollTop > 0;
    }
  }, {
    key: "_getScrollDimension",
    value: function _getScrollDimension() {
      var doc = document;
      var rootEl = this.props.rootEl;
      var scrollTop = rootEl ? doc.querySelector(rootEl).scrollTop : doc.documentElement.scrollTop || doc.body.parentNode.scrollTop || doc.body.scrollTop;
      var scrollHeight = rootEl ? doc.querySelector(rootEl).scrollHeight : doc.documentElement.scrollHeight || doc.body.parentNode.scrollHeight || doc.body.scrollHeight;
      return {
        scrollTop: scrollTop,
        scrollHeight: scrollHeight
      };
    }
  }, {
    key: "_getElemsViewState",
    value: function _getElemsViewState(targets) {
      var elemsInView = [];
      var elemsOutView = [];
      var viewStatusList = [];
      var targetItems = targets ? targets : this.state.targetItems;
      var hasInViewAlready = false;

      for (var i = 0, max = targetItems.length; i < max; i++) {
        var currentContent = targetItems[i];
        var isInView = hasInViewAlready ? false : this._isInView(currentContent);

        if (isInView) {
          hasInViewAlready = true;
          elemsInView.push(currentContent);
        } else {
          elemsOutView.push(currentContent);
        }

        var isLastItem = i === max - 1;

        var isScrolled = this._isScrolled(); // https://github.com/makotot/react-scrollspy/pull/26#issue-167413769


        var isLastShortItemAtBottom = this._isAtBottom() && this._isInView(currentContent) && !isInView && isLastItem && isScrolled;

        if (isLastShortItemAtBottom) {
          elemsOutView.pop();
          elemsOutView.push.apply(elemsOutView, (0, _toConsumableArray2.default)(elemsInView));
          elemsInView = [currentContent];
          viewStatusList = this._fillArray(viewStatusList, false);
          isInView = true;
        }

        viewStatusList.push(isInView);
      }

      return {
        inView: elemsInView,
        outView: elemsOutView,
        viewStatusList: viewStatusList,
        scrolledPast: this.props.scrolledPastClassName && this._getScrolledPast(viewStatusList)
      };
    }
  }, {
    key: "_isInView",
    value: function _isInView(el) {
      if (!el) {
        return false;
      }

      var _this$props = this.props,
          rootEl = _this$props.rootEl,
          offset = _this$props.offset;
      var rootRect;

      if (rootEl) {
        rootRect = document.querySelector(rootEl).getBoundingClientRect();
      }

      var rect = el.getBoundingClientRect();
      var winH = rootEl ? rootRect.height : window.innerHeight;

      var _this$_getScrollDimen = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen.scrollTop;

      var scrollBottom = scrollTop + winH;
      var elTop = rootEl ? rect.top + scrollTop - rootRect.top + offset : rect.top + scrollTop + offset;
      var elBottom = elTop + el.offsetHeight;
      return elTop < scrollBottom && elBottom > scrollTop;
    }
  }, {
    key: "_isAtBottom",
    value: function _isAtBottom() {
      var rootEl = this.props.rootEl;

      var _this$_getScrollDimen2 = this._getScrollDimension(),
          scrollTop = _this$_getScrollDimen2.scrollTop,
          scrollHeight = _this$_getScrollDimen2.scrollHeight;

      var winH = rootEl ? document.querySelector(rootEl).getBoundingClientRect().height : window.innerHeight;
      var scrolledToBottom = scrollTop + winH >= scrollHeight;
      return scrolledToBottom;
    }
  }, {
    key: "_getScrolledPast",
    value: function _getScrolledPast(viewStatusList) {
      if (!viewStatusList.some(function (item) {
        return item;
      })) {
        return viewStatusList;
      }

      var hasFoundInView = false;
      var scrolledPastItems = viewStatusList.map(function (item) {
        if (item && !hasFoundInView) {
          hasFoundInView = true;
          return false;
        }

        return !hasFoundInView;
      });
      return scrolledPastItems;
    }
  }, {
    key: "_spy",
    value: function _spy(targets) {
      var _this2 = this;

      var elemensViewState = this._getElemsViewState(targets);

      var currentStatuses = this.state.inViewState;
      this.setState({
        inViewState: elemensViewState.viewStatusList,
        isScrolledPast: elemensViewState.scrolledPast
      }, function () {
        _this2._update(currentStatuses);
      });
    }
  }, {
    key: "_update",
    value: function _update(prevStatuses) {
      if (isEqualArray(this.state.inViewState, prevStatuses)) {
        return;
      }

      this.props.onUpdate(this.state.targetItems[this.state.inViewState.indexOf(true)]);
    }
  }, {
    key: "_handleSpy",
    value: function _handleSpy() {
      (0, _throttle.default)(this._spy(), 100);
    }
  }, {
    key: "_initFromProps",
    value: function _initFromProps() {
      var targetItems = this._initSpyTarget(this.props.items);

      this.setState({
        targetItems: targetItems
      });

      this._spy(targetItems);
    }
  }, {
    key: "offEvent",
    value: function offEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.removeEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "onEvent",
    value: function onEvent() {
      var el = this.props.rootEl ? document.querySelector(this.props.rootEl) : window;
      el.addEventListener('scroll', this._handleSpy);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._initFromProps();

      this.onEvent();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.offEvent();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps() {
      this._initFromProps();
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      var Tag = this.props.componentTag;
      var _this$props2 = this.props,
          children = _this$props2.children,
          className = _this$props2.className,
          scrolledPastClassName = _this$props2.scrolledPastClassName,
          style = _this$props2.style;
      var counter = 0;

      var items = _react.default.Children.map(children, function (child, idx) {
        var _classNames;

        if (!child) {
          return null;
        }

        var ChildTag = child.type;
        var isScrolledPast = scrolledPastClassName && _this3.state.isScrolledPast[idx];
        var childClass = (0, _classnames.default)((_classNames = {}, (0, _defineProperty2.default)(_classNames, "".concat(child.props.className), child.props.className), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.currentClassName), _this3.state.inViewState[idx]), (0, _defineProperty2.default)(_classNames, "".concat(_this3.props.scrolledPastClassName), isScrolledPast), _classNames));
        return _react.default.createElement(ChildTag, (0, _extends2.default)({}, child.props, {
          className: childClass,
          key: counter++
        }), child.props.children);
      });

      var itemClass = (0, _classnames.default)((0, _defineProperty2.default)({}, "".concat(className), className));
      return _react.default.createElement(Tag, {
        className: itemClass,
        style: style
      }, items);
    }
  }]);
  return Scrollspy;
}(_react.default.Component);

exports.A = Scrollspy;

/***/ },

/***/ 2762
(__unused_webpack_module, exports) {

"use strict";


Object.defineProperty(exports, "__esModule", ({
  value: true
}));
exports["default"] = void 0;

var throttle = function throttle(fn) {
  var threshold = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 100;
  var last;
  var timer;
  return function () {
    var now = +new Date();
    var timePassed = !!last && now < last + threshold;

    if (timePassed) {
      clearTimeout(timer);
      timer = setTimeout(function () {
        last = now;
        fn();
      }, threshold);
    } else {
      last = now;
      fn();
    }
  };
};

var _default = throttle;
exports["default"] = _default;

/***/ },

/***/ 1196
(module) {

/* smoothscroll v0.4.4 - 2019 - Dustan Kasten, Jeremias Menichelli - MIT License */
(function () {
  'use strict';

  // polyfill
  function polyfill() {
    // aliases
    var w = window;
    var d = document;

    // return if scroll behavior is supported and polyfill is not forced
    if (
      'scrollBehavior' in d.documentElement.style &&
      w.__forceSmoothScrollPolyfill__ !== true
    ) {
      return;
    }

    // globals
    var Element = w.HTMLElement || w.Element;
    var SCROLL_TIME = 468;

    // object gathering original scroll methods
    var original = {
      scroll: w.scroll || w.scrollTo,
      scrollBy: w.scrollBy,
      elementScroll: Element.prototype.scroll || scrollElement,
      scrollIntoView: Element.prototype.scrollIntoView
    };

    // define timing method
    var now =
      w.performance && w.performance.now
        ? w.performance.now.bind(w.performance)
        : Date.now;

    /**
     * indicates if a the current browser is made by Microsoft
     * @method isMicrosoftBrowser
     * @param {String} userAgent
     * @returns {Boolean}
     */
    function isMicrosoftBrowser(userAgent) {
      var userAgentPatterns = ['MSIE ', 'Trident/', 'Edge/'];

      return new RegExp(userAgentPatterns.join('|')).test(userAgent);
    }

    /*
     * IE has rounding bug rounding down clientHeight and clientWidth and
     * rounding up scrollHeight and scrollWidth causing false positives
     * on hasScrollableSpace
     */
    var ROUNDING_TOLERANCE = isMicrosoftBrowser(w.navigator.userAgent) ? 1 : 0;

    /**
     * changes scroll position inside an element
     * @method scrollElement
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function scrollElement(x, y) {
      this.scrollLeft = x;
      this.scrollTop = y;
    }

    /**
     * returns result of applying ease math function to a number
     * @method ease
     * @param {Number} k
     * @returns {Number}
     */
    function ease(k) {
      return 0.5 * (1 - Math.cos(Math.PI * k));
    }

    /**
     * indicates if a smooth behavior should be applied
     * @method shouldBailOut
     * @param {Number|Object} firstArg
     * @returns {Boolean}
     */
    function shouldBailOut(firstArg) {
      if (
        firstArg === null ||
        typeof firstArg !== 'object' ||
        firstArg.behavior === undefined ||
        firstArg.behavior === 'auto' ||
        firstArg.behavior === 'instant'
      ) {
        // first argument is not an object/null
        // or behavior is auto, instant or undefined
        return true;
      }

      if (typeof firstArg === 'object' && firstArg.behavior === 'smooth') {
        // first argument is an object and behavior is smooth
        return false;
      }

      // throw error when behavior is not supported
      throw new TypeError(
        'behavior member of ScrollOptions ' +
          firstArg.behavior +
          ' is not a valid value for enumeration ScrollBehavior.'
      );
    }

    /**
     * indicates if an element has scrollable space in the provided axis
     * @method hasScrollableSpace
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function hasScrollableSpace(el, axis) {
      if (axis === 'Y') {
        return el.clientHeight + ROUNDING_TOLERANCE < el.scrollHeight;
      }

      if (axis === 'X') {
        return el.clientWidth + ROUNDING_TOLERANCE < el.scrollWidth;
      }
    }

    /**
     * indicates if an element has a scrollable overflow property in the axis
     * @method canOverflow
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function canOverflow(el, axis) {
      var overflowValue = w.getComputedStyle(el, null)['overflow' + axis];

      return overflowValue === 'auto' || overflowValue === 'scroll';
    }

    /**
     * indicates if an element can be scrolled in either axis
     * @method isScrollable
     * @param {Node} el
     * @param {String} axis
     * @returns {Boolean}
     */
    function isScrollable(el) {
      var isScrollableY = hasScrollableSpace(el, 'Y') && canOverflow(el, 'Y');
      var isScrollableX = hasScrollableSpace(el, 'X') && canOverflow(el, 'X');

      return isScrollableY || isScrollableX;
    }

    /**
     * finds scrollable parent of an element
     * @method findScrollableParent
     * @param {Node} el
     * @returns {Node} el
     */
    function findScrollableParent(el) {
      while (el !== d.body && isScrollable(el) === false) {
        el = el.parentNode || el.host;
      }

      return el;
    }

    /**
     * self invoked function that, given a context, steps through scrolling
     * @method step
     * @param {Object} context
     * @returns {undefined}
     */
    function step(context) {
      var time = now();
      var value;
      var currentX;
      var currentY;
      var elapsed = (time - context.startTime) / SCROLL_TIME;

      // avoid elapsed times higher than one
      elapsed = elapsed > 1 ? 1 : elapsed;

      // apply easing to elapsed time
      value = ease(elapsed);

      currentX = context.startX + (context.x - context.startX) * value;
      currentY = context.startY + (context.y - context.startY) * value;

      context.method.call(context.scrollable, currentX, currentY);

      // scroll more if we have not reached our destination
      if (currentX !== context.x || currentY !== context.y) {
        w.requestAnimationFrame(step.bind(w, context));
      }
    }

    /**
     * scrolls window or element with a smooth behavior
     * @method smoothScroll
     * @param {Object|Node} el
     * @param {Number} x
     * @param {Number} y
     * @returns {undefined}
     */
    function smoothScroll(el, x, y) {
      var scrollable;
      var startX;
      var startY;
      var method;
      var startTime = now();

      // define scroll context
      if (el === d.body) {
        scrollable = w;
        startX = w.scrollX || w.pageXOffset;
        startY = w.scrollY || w.pageYOffset;
        method = original.scroll;
      } else {
        scrollable = el;
        startX = el.scrollLeft;
        startY = el.scrollTop;
        method = scrollElement;
      }

      // scroll looping over a frame
      step({
        scrollable: scrollable,
        method: method,
        startTime: startTime,
        startX: startX,
        startY: startY,
        x: x,
        y: y
      });
    }

    // ORIGINAL METHODS OVERRIDES
    // w.scroll and w.scrollTo
    w.scroll = w.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scroll.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object'
              ? arguments[0]
              : w.scrollX || w.pageXOffset,
          // use top prop, second argument if present or fallback to scrollY
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined
              ? arguments[1]
              : w.scrollY || w.pageYOffset
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        arguments[0].left !== undefined
          ? ~~arguments[0].left
          : w.scrollX || w.pageXOffset,
        arguments[0].top !== undefined
          ? ~~arguments[0].top
          : w.scrollY || w.pageYOffset
      );
    };

    // w.scrollBy
    w.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0])) {
        original.scrollBy.call(
          w,
          arguments[0].left !== undefined
            ? arguments[0].left
            : typeof arguments[0] !== 'object' ? arguments[0] : 0,
          arguments[0].top !== undefined
            ? arguments[0].top
            : arguments[1] !== undefined ? arguments[1] : 0
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        w,
        d.body,
        ~~arguments[0].left + (w.scrollX || w.pageXOffset),
        ~~arguments[0].top + (w.scrollY || w.pageYOffset)
      );
    };

    // Element.prototype.scroll and Element.prototype.scrollTo
    Element.prototype.scroll = Element.prototype.scrollTo = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        // if one number is passed, throw error to match Firefox implementation
        if (typeof arguments[0] === 'number' && arguments[1] === undefined) {
          throw new SyntaxError('Value could not be converted');
        }

        original.elementScroll.call(
          this,
          // use left prop, first number argument or fallback to scrollLeft
          arguments[0].left !== undefined
            ? ~~arguments[0].left
            : typeof arguments[0] !== 'object' ? ~~arguments[0] : this.scrollLeft,
          // use top prop, second argument or fallback to scrollTop
          arguments[0].top !== undefined
            ? ~~arguments[0].top
            : arguments[1] !== undefined ? ~~arguments[1] : this.scrollTop
        );

        return;
      }

      var left = arguments[0].left;
      var top = arguments[0].top;

      // LET THE SMOOTHNESS BEGIN!
      smoothScroll.call(
        this,
        this,
        typeof left === 'undefined' ? this.scrollLeft : ~~left,
        typeof top === 'undefined' ? this.scrollTop : ~~top
      );
    };

    // Element.prototype.scrollBy
    Element.prototype.scrollBy = function() {
      // avoid action when no arguments are passed
      if (arguments[0] === undefined) {
        return;
      }

      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.elementScroll.call(
          this,
          arguments[0].left !== undefined
            ? ~~arguments[0].left + this.scrollLeft
            : ~~arguments[0] + this.scrollLeft,
          arguments[0].top !== undefined
            ? ~~arguments[0].top + this.scrollTop
            : ~~arguments[1] + this.scrollTop
        );

        return;
      }

      this.scroll({
        left: ~~arguments[0].left + this.scrollLeft,
        top: ~~arguments[0].top + this.scrollTop,
        behavior: arguments[0].behavior
      });
    };

    // Element.prototype.scrollIntoView
    Element.prototype.scrollIntoView = function() {
      // avoid smooth behavior if not required
      if (shouldBailOut(arguments[0]) === true) {
        original.scrollIntoView.call(
          this,
          arguments[0] === undefined ? true : arguments[0]
        );

        return;
      }

      // LET THE SMOOTHNESS BEGIN!
      var scrollableParent = findScrollableParent(this);
      var parentRects = scrollableParent.getBoundingClientRect();
      var clientRects = this.getBoundingClientRect();

      if (scrollableParent !== d.body) {
        // reveal element inside parent
        smoothScroll.call(
          this,
          scrollableParent,
          scrollableParent.scrollLeft + clientRects.left - parentRects.left,
          scrollableParent.scrollTop + clientRects.top - parentRects.top
        );

        // reveal parent in viewport unless is fixed
        if (w.getComputedStyle(scrollableParent).position !== 'fixed') {
          w.scrollBy({
            left: parentRects.left,
            top: parentRects.top,
            behavior: 'smooth'
          });
        }
      } else {
        // reveal element in viewport
        w.scrollBy({
          left: clientRects.left,
          top: clientRects.top,
          behavior: 'smooth'
        });
      }
    };
  }

  if (true) {
    // commonjs
    module.exports = { polyfill: polyfill };
  } else // removed by dead control flow
{}

}());


/***/ },

/***/ 79
(module) {

function _arrayLikeToArray(r, a) {
  (null == a || a > r.length) && (a = r.length);
  for (var e = 0, n = Array(a); e < a; e++) n[e] = r[e];
  return n;
}
module.exports = _arrayLikeToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 5901
(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(79);
function _arrayWithoutHoles(r) {
  if (Array.isArray(r)) return arrayLikeToArray(r);
}
module.exports = _arrayWithoutHoles, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 7383
(module) {

function _classCallCheck(a, n) {
  if (!(a instanceof n)) throw new TypeError("Cannot call a class as a function");
}
module.exports = _classCallCheck, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 4579
(module, __unused_webpack_exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(7736);
function _defineProperties(e, r) {
  for (var t = 0; t < r.length; t++) {
    var o = r[t];
    o.enumerable = o.enumerable || !1, o.configurable = !0, "value" in o && (o.writable = !0), Object.defineProperty(e, toPropertyKey(o.key), o);
  }
}
function _createClass(e, r, t) {
  return r && _defineProperties(e.prototype, r), t && _defineProperties(e, t), Object.defineProperty(e, "prototype", {
    writable: !1
  }), e;
}
module.exports = _createClass, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 3693
(module, __unused_webpack_exports, __webpack_require__) {

var toPropertyKey = __webpack_require__(7736);
function _defineProperty(e, r, t) {
  return (r = toPropertyKey(r)) in e ? Object.defineProperty(e, r, {
    value: t,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[r] = t, e;
}
module.exports = _defineProperty, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 4634
(module) {

function _extends() {
  return module.exports = _extends = Object.assign ? Object.assign.bind() : function (n) {
    for (var e = 1; e < arguments.length; e++) {
      var t = arguments[e];
      for (var r in t) ({}).hasOwnProperty.call(t, r) && (n[r] = t[r]);
    }
    return n;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _extends.apply(null, arguments);
}
module.exports = _extends, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 3072
(module) {

function _getPrototypeOf(t) {
  return module.exports = _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf.bind() : function (t) {
    return t.__proto__ || Object.getPrototypeOf(t);
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _getPrototypeOf(t);
}
module.exports = _getPrototypeOf, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 9511
(module, __unused_webpack_exports, __webpack_require__) {

var setPrototypeOf = __webpack_require__(5636);
function _inherits(t, e) {
  if ("function" != typeof e && null !== e) throw new TypeError("Super expression must either be null or a function");
  t.prototype = Object.create(e && e.prototype, {
    constructor: {
      value: t,
      writable: !0,
      configurable: !0
    }
  }), Object.defineProperty(t, "prototype", {
    writable: !1
  }), e && setPrototypeOf(t, e);
}
module.exports = _inherits, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 9291
(module) {

function _iterableToArray(r) {
  if ("undefined" != typeof Symbol && null != r[Symbol.iterator] || null != r["@@iterator"]) return Array.from(r);
}
module.exports = _iterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 1869
(module) {

function _nonIterableSpread() {
  throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.");
}
module.exports = _nonIterableSpread, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 8452
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(3738)["default"]);
var assertThisInitialized = __webpack_require__(2475);
function _possibleConstructorReturn(t, e) {
  if (e && ("object" == _typeof(e) || "function" == typeof e)) return e;
  if (void 0 !== e) throw new TypeError("Derived constructors may only return object or undefined");
  return assertThisInitialized(t);
}
module.exports = _possibleConstructorReturn, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 1132
(module, __unused_webpack_exports, __webpack_require__) {

var arrayWithoutHoles = __webpack_require__(5901);
var iterableToArray = __webpack_require__(9291);
var unsupportedIterableToArray = __webpack_require__(7122);
var nonIterableSpread = __webpack_require__(1869);
function _toConsumableArray(r) {
  return arrayWithoutHoles(r) || iterableToArray(r) || unsupportedIterableToArray(r) || nonIterableSpread();
}
module.exports = _toConsumableArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 9045
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(3738)["default"]);
function toPrimitive(t, r) {
  if ("object" != _typeof(t) || !t) return t;
  var e = t[Symbol.toPrimitive];
  if (void 0 !== e) {
    var i = e.call(t, r || "default");
    if ("object" != _typeof(i)) return i;
    throw new TypeError("@@toPrimitive must return a primitive value.");
  }
  return ("string" === r ? String : Number)(t);
}
module.exports = toPrimitive, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 7736
(module, __unused_webpack_exports, __webpack_require__) {

var _typeof = (__webpack_require__(3738)["default"]);
var toPrimitive = __webpack_require__(9045);
function toPropertyKey(t) {
  var i = toPrimitive(t, "string");
  return "symbol" == _typeof(i) ? i : i + "";
}
module.exports = toPropertyKey, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 3738
(module) {

function _typeof(o) {
  "@babel/helpers - typeof";

  return module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (o) {
    return typeof o;
  } : function (o) {
    return o && "function" == typeof Symbol && o.constructor === Symbol && o !== Symbol.prototype ? "symbol" : typeof o;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports, _typeof(o);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 7122
(module, __unused_webpack_exports, __webpack_require__) {

var arrayLikeToArray = __webpack_require__(79);
function _unsupportedIterableToArray(r, a) {
  if (r) {
    if ("string" == typeof r) return arrayLikeToArray(r, a);
    var t = {}.toString.call(r).slice(8, -1);
    return "Object" === t && r.constructor && (t = r.constructor.name), "Map" === t || "Set" === t ? Array.from(r) : "Arguments" === t || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t) ? arrayLikeToArray(r, a) : void 0;
  }
}
module.exports = _unsupportedIterableToArray, module.exports.__esModule = true, module.exports["default"] = module.exports;

/***/ },

/***/ 6942
(module, exports) {

var __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/
/* global define */

(function () {
	'use strict';

	var hasOwn = {}.hasOwnProperty;

	function classNames () {
		var classes = '';

		for (var i = 0; i < arguments.length; i++) {
			var arg = arguments[i];
			if (arg) {
				classes = appendClass(classes, parseValue(arg));
			}
		}

		return classes;
	}

	function parseValue (arg) {
		if (typeof arg === 'string' || typeof arg === 'number') {
			return arg;
		}

		if (typeof arg !== 'object') {
			return '';
		}

		if (Array.isArray(arg)) {
			return classNames.apply(null, arg);
		}

		if (arg.toString !== Object.prototype.toString && !arg.toString.toString().includes('[native code]')) {
			return arg.toString();
		}

		var classes = '';

		for (var key in arg) {
			if (hasOwn.call(arg, key) && arg[key]) {
				classes = appendClass(classes, key);
			}
		}

		return classes;
	}

	function appendClass (value, newClass) {
		if (!newClass) {
			return value;
		}
	
		if (value) {
			return value + ' ' + newClass;
		}
	
		return value + newClass;
	}

	if ( true && module.exports) {
		classNames.default = classNames;
		module.exports = classNames;
	} else if (true) {
		// register as 'classnames', consistent with npm package name
		!(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = (function () {
			return classNames;
		}).apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__),
		__WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	} else // removed by dead control flow
{}
}());


/***/ }

};
;
//# sourceMappingURL=component---src-pages-index-js.js.map