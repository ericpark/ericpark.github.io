(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{156:function(A,e,a){"use strict";a.r(e);a(34),a(173);var t=a(175),i=a(0),n=a.n(i),s=a(157),r=a(159),c=a(161),d=function(A){return n.a.createElement("article",{className:"post-card "+(A.count%3==0&&"post-card-large")+" "+A.postClass+" "+(A.node.frontmatter.thumbnail?"with-image":"no-image"),style:A.node.frontmatter.thumbnail&&{backgroundImage:"url("+A.node.frontmatter.thumbnail.childImageSharp.fluid.src+")"}},n.a.createElement(s.a,{to:A.node.fields.slug,className:"post-card-link"},n.a.createElement("div",{className:"post-card-content"},n.a.createElement("h2",{className:"post-card-title"},A.node.frontmatter.title||A.node.fields.slug))))},o=a(176),l=a(163),E=a.n(l),g=a(7),m=a.n(g),B=a(177),h=function(A){var e=A.items,a=A.color;return n.a.createElement("span",{style:{"& span":{animation:p+" 5s easeIn infinite 5s",opacity:0}}},e.map(function(A){return n.a.createElement("span",{key:A,css:{color:a}},A)}))},p=Object(B.a)({"0%":{opacity:0},"6%":{opacity:0},"21%":{opacity:1},"69%":{opacity:1},"84%":{opacity:0},"90%":{opacity:0},"100%":{opacity:0}}),f=a(33),u=a.n(f),Q=function(A){function e(){for(var e,a=arguments.length,t=new Array(a),i=0;i<a;i++)t[i]=arguments[i];return(e=A.call.apply(A,[this].concat(t))||this).state={shouldAnimate:!0,item:0,size:{}},e.sliderContainer=n.a.createRef(),e.intervalId=null,e.decrementItem=function(){e._clearInterval(),e.setState({item:(e.state.item+e.props.items.length-1)%e.props.items.length})},e.incrementItemAndClearInterval=function(){e._clearInterval(),e.incrementItem()},e.incrementItem=function(){e.setState(function(A){return{item:(A.item+1)%e.props.items.length}})},e}m()(e,A);var a=e.prototype;return a._clearInterval=function(){this.intervalId&&(clearInterval(this.intervalId),this.intervalId=null)},a.componentDidMount=function(){var A=this,e=this.shouldAnimate();e&&requestAnimationFrame(function(){A.intervalId=setInterval(A.incrementItem,5e3),A.setState({shouldAnimate:e,size:A.getDimensions()})})},a.componentWillUnmount=function(){clearInterval(this.intervalId)},a.componentDidUpdate=function(A,e){var a=this;e.shouldAnimate&&e.item!==this.state.item&&requestAnimationFrame(function(){a.setState({size:a.getDimensions()})})},a.getDimensions=function(){return null===this.sliderContainer.current?{width:"auto",height:"auto"}:this.sliderContainer.current.getBoundingClientRect()},a.shouldAnimate=function(){var A=window.matchMedia("(prefers-reduced-motion)");return!A||!A.matches},a.render=function(){var A=this.state.shouldAnimate,e=this.props.items[this.state.item],a=e.text,t=e.workName,i=A&&this.intervalId;return n.a.createElement("div",{style:{padding:"5rem 0rem",margin:"1rem 1rem",position:"relative"}},n.a.createElement("div",{"aria-live":this.intervalId?"off":"polite","aria-atomic":"true","aria-relevant":"all"},n.a.createElement("p",{style:{fontSize:"1.25rem",fontFamily:'"Futura PT", -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',textAlign:"left",marginBottom:0}},n.a.createElement("span",{style:{display:"inline-block",transition:A?"width 150ms easeIn":"none",width:this.state.size.width||"auto"}},n.a.createElement("span",{style:{fontWeight:600,whiteSpace:"nowrap",display:"inline-block"},id:"headline-slider",ref:this.sliderContainer},i?n.a.createElement(h,{items:[a]}):n.a.createElement(n.a.Fragment,null,a)))),n.a.createElement("p",{style:{color:"black",margin:0,fontSize:"1.25rem",textAlign:"left"}},n.a.createElement(u.a,{to:"/experience/"+t},"#HowIGotHere"))))},e}(i.Component);var b="2760998521",j=function(){return n.a.createElement(s.b,{query:b,render:function(A){return n.a.createElement(Q,{items:[{text:"survived summer in a dry cleaner",workName:""},{text:"campaigned for local grass root politicians",workName:""},{text:"served the underserved community of D.C.",workName:""},{text:"waited tables in a fried chicken restaurant",workName:""},{text:"worked every job in food service ffrom host to manager",workName:""},{text:"tried to start a start up ",workName:""},{text:"interned in a circuit court",workName:""},{text:"volunteered in a hospital",workName:""},{text:"graduated with a masters degree",workName:""},{text:"published in a medical journal",workName:""},{text:"helped in a neurolab",workName:""}]})},data:o})},w=(a(148),a(149),function(A,e){var a=A.data,t=a.site.siteMetadata.title,i=a.allMarkdownRemark.edges,s=0;return n.a.createElement(r.a,{location:e,title:t},n.a.createElement(c.a,{title:"All posts",keywords:["blog","gatsby","javascript","react"]}),n.a.createElement("div",{className:"page-head-background"},n.a.createElement("figure",{className:"kg-card kg-image-card kg-width-wide"},n.a.createElement(E.a,{fluid:a.smallPic.childImageSharp.fluid,className:"kg-image",fadeIn:"true",durationFadeIn:"500ms"}))),n.a.createElement("div",{className:"page-head-background-yellow"},n.a.createElement("figure",{className:"kg-card kg-image-card kg-width-wide"},n.a.createElement(E.a,{fluid:a.smallPicYellow.childImageSharp.fluid,className:"kg-image",fadeIn:"true",durationFadeIn:"100ms"}))),n.a.createElement("div",{className:"page-head-background-red"},n.a.createElement("figure",{className:"kg-card kg-image-card kg-width-wide"},n.a.createElement(E.a,{fluid:a.smallPic.childImageSharp.fluid,className:"kg-image",fadeIn:"true",durationFadeIn:"0ms"}))),a.site.siteMetadata.description&&n.a.createElement("header",{className:"page-head"},n.a.createElement("h2",{className:"page-head-title"},a.site.siteMetadata.description),n.a.createElement("p",null,"system architect, CSSA @ ",n.a.createElement("a",{href:"https://www.pega.com/"},"pega")),n.a.createElement(E.a,{fixed:a.logo.childImageSharp.fixed,className:"kg-image"})),n.a.createElement(j,null),n.a.createElement("div",{className:"post-feed"},i.map(function(A){var e=A.node;return s++,n.a.createElement(d,{key:e.fields.slug,count:s,node:e,postClass:"post"})})))});e.default=function(A){return n.a.createElement(s.b,{query:"2808687912",render:function(e){return n.a.createElement(w,Object.assign({location:A.location,props:!0,data:e},A))},data:t})}},157:function(A,e,a){"use strict";a.d(e,"b",function(){return o});var t=a(0),i=a.n(t),n=a(4),s=a.n(n),r=a(33),c=a.n(r);a.d(e,"a",function(){return c.a});a(158);var d=i.a.createContext({}),o=function(A){return i.a.createElement(d.Consumer,null,function(e){return A.data||e[A.query]&&e[A.query].data?(A.render||A.children)(A.data?A.data.data:e[A.query].data):i.a.createElement("div",null,"Loading (StaticQuery)")})};o.propTypes={data:s.a.object,query:s.a.string.isRequired,render:s.a.func,children:s.a.func}},158:function(A,e,a){var t;A.exports=(t=a(160))&&t.default||t},159:function(A,e,a){"use strict";var t=a(7),i=a.n(t),n=a(0),s=a.n(n),r=a(157),c=function(A){function e(){return A.apply(this,arguments)||this}return i()(e,A),e.prototype.render=function(){var A=this.props,e=(A.location,A.title),a=A.children;return s.a.createElement("div",{className:"site-wrapper"},s.a.createElement("header",{className:"site-head"},s.a.createElement("div",{className:"site-head-container"},s.a.createElement(r.a,{className:"nav-burger",to:"/"},s.a.createElement("div",{className:"hamburger hamburger--collapse","aria-label":"Menu",role:"button","aria-controls":"navigation"},s.a.createElement("div",{className:"hamburger-box"},s.a.createElement("div",{className:"hamburger-inner"})))),s.a.createElement("nav",{id:"swup",class:"site-head-left"},s.a.createElement("ul",{className:"nav",role:"menu"},s.a.createElement("li",{className:"nav-home nav-current",role:"menuitem"},s.a.createElement(r.a,{to:"/"},"Home")),s.a.createElement("li",{className:"nav-about",role:"menuitem"},s.a.createElement(r.a,{to:"/about"},"About")),s.a.createElement("li",{className:"nav-elements",role:"menuitem"},s.a.createElement(r.a,{to:"/elements"},"Contact")))),s.a.createElement("div",{className:"site-head-center"},s.a.createElement(r.a,{className:"site-head-logo",to:"/"},e)),s.a.createElement("div",{className:"site-head-right"},s.a.createElement("div",{className:"social-links"},s.a.createElement("a",{href:"https://www.github.com/ericpark",title:"Github",target:"_blank",rel:"noopener noreferrer"},"Github"),s.a.createElement("a",{href:"https://linkedin.com/in/ericspark",title:"Linkedin",target:"_blank",rel:"noopener noreferrer"},"Linkedin"),s.a.createElement(r.a,{to:"/rss.xml",title:"Email",target:"_blank",rel:"noopener noreferrer"},"RSS"))))),s.a.createElement("main",{id:"site-main",className:"site-main"},s.a.createElement("div",{id:"swup",className:"transition-fade"},a)),s.a.createElement("footer",{className:"site-foot"},"© ",(new Date).getFullYear()," ",s.a.createElement(r.a,{to:"/"},e)," ","— Built with"," ",s.a.createElement("a",{href:"https://gatsbyjs.org",target:"_blank",rel:"noopener noreferrer"},"Gatsby")))},e}(s.a.Component);e.a=c},160:function(A,e,a){"use strict";a.r(e);a(34);var t=a(0),i=a.n(t),n=a(4),s=a.n(n),r=a(55),c=a(2),d=function(A){var e=A.location,a=c.default.getResourcesForPathnameSync(e.pathname);return a?i.a.createElement(r.a,Object.assign({location:e,pageResources:a},a.json)):null};d.propTypes={location:s.a.shape({pathname:s.a.string.isRequired}).isRequired},e.default=d},161:function(A,e,a){"use strict";var t=a(162),i=a(0),n=a.n(i),s=a(4),r=a.n(s),c=a(164),d=a.n(c);function o(A){var e=A.description,a=A.lang,i=A.meta,s=A.keywords,r=A.title,c=t.data.site,o=e||c.siteMetadata.description;return n.a.createElement(d.a,{htmlAttributes:{lang:a},title:r,titleTemplate:"%s | "+c.siteMetadata.title,meta:[{name:"description",content:o},{property:"og:title",content:r},{property:"og:description",content:o},{property:"og:type",content:"website"},{name:"twitter:card",content:"summary"},{name:"twitter:creator",content:c.siteMetadata.author},{name:"twitter:title",content:r},{name:"twitter:description",content:o}].concat(s.length>0?{name:"keywords",content:s.join(", ")}:[]).concat(i)})}o.defaultProps={lang:"en",meta:[],keywords:[],description:""},o.propTypes={description:r.a.string,lang:r.a.string,meta:r.a.arrayOf(r.a.object),keywords:r.a.arrayOf(r.a.string),title:r.a.string.isRequired},e.a=o},162:function(A){A.exports={data:{site:{siteMetadata:{title:"Eric S Park",description:"hi i'm eric",author:"Eric Park"}}}}},175:function(A){A.exports={data:{site:{siteMetadata:{title:"Eric S Park",description:"hi i'm eric"}},smallPic:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAAvxDzwAAAACXBIWXMAAC4jAAAuIwF4pT92AAACzUlEQVQ4y2NgwAG25GWA6e2FWXxrsjJUQexj8yayACnG/+v6GEgG+8tyGP7//w9mn+iri788v1cGTUkkEIsjC7w6fhDToO8vXsHZ1xd0MoLoS/OqRV7tXj5978IZSUCuZHOYm8+i8sz/M4rTDUDyG3pbWO+vW8awt7ASYdDPp4/A9MvtKxj+fvjA8OrsaTD/wfpZTCD6/7eLIjPqilr4hSTfeJsb/F9ZlfnPysQqCqv3vt+/C2e/uHYJQ/722umMMLaUpMwmDTWd/zIyyh8UFZRXXdywbNKHkwfizi6cKXuosoEJrgkUXs9vXoezv754zfD+1g0wvyQvlREkVp6RwCorI39BQV7lv5KiWj44rOf0SpxfNlX90sIZuqe6+zjhLnx37TzEy2ePMvx8/oTx36uXjM/PnmV4eOkw3FIjPYNqPR39/8pK6p8tzO1lcMbot/t3GO4d3A5mn9ywk+HDtVMM2ydXMvx7fRrmYgE3R4dEHU31o7KyYrtUlZT/62oZ9oPlfqxnmFqRx3ht8SzGUz39qAZnRobA2WrK6oyz+xuYQex3t3bazZ/UvBrI5ALxFeUkI9VV1f7oaRu0gvgaqmqMurrGSC68d4fh/uFdYLazlQ2Y1lDTZtBQUcbwjYm+EdgSGSkRA001jesmxpaiIL6ujj4k4h5cucJwaX0vmH3//Akw7WjvCjegOl0PzrY20WQUEOJmeLHvPwMTKwMwgmS26GjqgHORloYWI4rNR9dOQeFXlJUxmJkagxXtXN7IcOXAHLB4sA/EsoUTCpm9XF02S0oqgr0hL6fMCE8iJzfOArOfXLvMcHbvOjD70rFdjFtXLQCzN6+YB3G5syfDixtnwOy/z+4wv7p5tvviwbXg3HLv4lGIgUc2zofk3XVzGU5sXsh4Zc8yMP/i/mUMf59fgFj66jKK69fNqgLTpmoMbDNb48VA7Pk9mWAxALhfFULfOlscAAAAAElFTkSuQmCC",aspectRatio:1.3841176470588235,src:"/static/4d6cb7c77d9e40999d90dc146b7853f1/41d74/headerbg.png",srcSet:"/static/4d6cb7c77d9e40999d90dc146b7853f1/fa754/headerbg.png 340w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/1bf7a/headerbg.png 680w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/41d74/headerbg.png 1360w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/5bd11/headerbg.png 2040w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/bb981/headerbg.png 2353w",sizes:"(max-width: 1360px) 100vw, 1360px"}}},smallPicYellow:{childImageSharp:{fluid:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAOCAYAAAFYwwxmAAAACXBIWXMAAAPoAAAD6AG1e1JrAAAB90lEQVQ4y2NgYGBoEBDkaAfRDFCiCoirYRy4aCWySL1srsKNCd2hJ1EEQbSDndoMZMEaIK6AmVMPxXWqTVrf1VRF+2CCDXUT/a/qd+r+hatkZGQEm8nCwtQIZcPNhFlWu2hixGkGQYaeaStD/kOdiKoQqhOES8x6jP/zyHCD7KxD9mE9EkbYwMLQxKPEPQnDRJBuNU3RSayszE0wPpJmJKuBWFqKtysl3WaDmbvcUl0TqelsbHBNqFZD3Vlo2GX4XzFH+Upljvs6ZibGRrhCJI/UqUYr7tVu1f0J9UQ11BC4G+qZmRkbowKN5wM90SrqKrxGJV7pEHp0NqA5AcyXz1O8CTWxASNmkfkLJiUdhUYuhonYcF1igvF6NRURUOCXMELdzGjLvYZBmLkbFJNo6vEaVs8ECZkaDQXRrpQSm4OSNapfvSea/J+9MuSfopfsWmgaroIaXM+AxRv1WMIBmFwYGlhYmZqUKtSea7br/pcKkt4OFC+TlxfsMTKQmWxlrjiNh5utBVsgYrhSVV60QzNQcYNOpeYjhUL5O7qdOv9VU1SOQ10GTiAgC/F5Gd3FoKitBXuLiQEUBKXcWlzTdeq0XnOIcnShhSNK1NYTCAJE2mFhbHSsNr7JIc81ESkpoCRZsNOJDVNQ7DOxMjSLS/N0QzMLWB4Awp3Aedr1cQ8AAAAASUVORK5CYII=",aspectRatio:1.3841176470588235,src:"/static/4d6cb7c77d9e40999d90dc146b7853f1/71c2a/headerbg.png",srcSet:"/static/4d6cb7c77d9e40999d90dc146b7853f1/fd5fa/headerbg.png 340w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/640d5/headerbg.png 680w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/71c2a/headerbg.png 1360w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/3dea7/headerbg.png 2040w,\n/static/4d6cb7c77d9e40999d90dc146b7853f1/244ba/headerbg.png 2353w",sizes:"(max-width: 1360px) 100vw, 1360px"}}},logo:{childImageSharp:{fixed:{base64:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAgCAYAAAASYli2AAAACXBIWXMAAC4jAAAuIwF4pT92AAACyklEQVRIx5WWXWiOYRjH3+d9nndrPiYtJklZxInQUjig1A5FypyMcqh85ITUTiSJKcnaWlES42Q5wg5wQhklI6VY+SgfKSKaNZ+/a/vf69rT+7zPu6d+Xdf99b/v+7q/nkIh9cVxHOwM+JgkyVe4g38eexLbge3GXoNFVpd0VMj6KJwQxW+B46RPwwP8f46zYQDWJlMsFGJjl78NXsFPiZ3zbSqOzovR+xJ4JpEr0EV6FBpVr5gp6sQiiTXiv5PYVpU9hv4gFsJTVjAUYCM1uGFipJuVXibxfUonLtaZowxTbVHjTle2R3kbU9MtjmuPfZHvIXKVrqvxBie4EE7YdgozgmLZUcVh7OPpaTAM38lusI6w9dhZ0Awr/AgtJHCJ9EXsfC9sI5wLexW7EewgPJF9Cn0m6tqs0kxuwxm4a5mbbTvAWxX+leAvbDusgwVQ5xYwLNwA/gsXtuGCpmdCV2G7xQ1GlF+fCo/NIkmNboc62W9pc1bjLE817FflVlWuCVvDCR6xjrXdZsMPuDVpcaBW/iYJPgwCNCxpiwRBi1u3/OcK09KxpRcT20eVeiTaN7G/Js/iJVwIYn6LlT16NhqEulT5Nf4u7BpYD8dgVGX3KWvSLOKKovK32H1o9yL1v8AQ/gf4A21u5eO86yvywtSvIz1HZa3wrcyRzb4kXAdx+kYmfQDehNi6+Gffjf4m0bk1v6S8DtKDFW+avE/CYWq9cC/3Caj0qWHYAbZIN8MxrFow9WAVXWxt712WXwr5ZRelUjwlUKuntTOrTrUjXAzzdAR/Y0/BdPzdfgFzR+Ye/gEaPIIanZDD9jbDULrzvIUIz8JaGxnstNsceu2tps5Kf4NXuzix7EF4j8hn3S5Hc09KuRi6VUz0B2FT/gQN4ZhWvR/dKQmjPCTBHvfITX1zu3ekSdNtcxfz1AR9A4Rm2h1oD5efbvj+A8vzjg40DWvqAAAAAElFTkSuQmCC",width:80,height:128,src:"/static/8db48511082e7d29cfc793f0702bed10/d0708/logo.png",srcSet:"/static/8db48511082e7d29cfc793f0702bed10/d0708/logo.png 1x,\n/static/8db48511082e7d29cfc793f0702bed10/47865/logo.png 1.5x,\n/static/8db48511082e7d29cfc793f0702bed10/a6eef/logo.png 2x,\n/static/8db48511082e7d29cfc793f0702bed10/df2a7/logo.png 3x"}}},allMarkdownRemark:{edges:[{node:{excerpt:"A wallpaper series using shapes and light by Jean-Marc DenisI used a poly reduction on the mesh as a proxy to be able to create my studio…",fields:{slug:"/darkness/"},frontmatter:{date:"May 08, 2019",title:"Darkness",description:"Darkness cannot drive out darkness; only light can do that. Hate cannot drive out hate; only love can do that.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeHcCoP/xAAWEAEBAQAAAAAAAAAAAAAAAAABMSD/2gAIAQEAAQUCqzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AkZP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hSg4ItUo5pClb6xn/2gAMAwEAAgADAAAAEKAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFhof/aAAgBAQABPxAUGFC5UYSFb7+mi9O5SivusKM4Vu7R+b//2Q==",aspectRatio:1.7777777777777777,src:"/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg",srcSet:"/static/54a16e112c74520e2310f2802be25209/467b3/bbbb.jpg 340w,\n/static/54a16e112c74520e2310f2802be25209/e1ddd/bbbb.jpg 680w,\n/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg 1360w,\n/static/54a16e112c74520e2310f2802be25209/883ab/bbbb.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Picasso had his pink period and his blue period. I am in my blonde period right now.When I first started wearing pink, it wasn’t nothing I…",fields:{slug:"/dont-stop/"},frontmatter:{date:"May 07, 2019",title:"Don't stop",description:"Pink is my favourite colour. I used to say my favourite colour was black to be cool, but it is pink - all shades of pink. If I have an accessory, it is probably pink.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAAAAwEBAAAAAAAAAAAAAAAAAAECBAX/xAAWAQEBAQAAAAAAAAAAAAAAAAAAAQL/2gAMAwEAAhADEAAAAew4zTewQTFisQf/xAAaEAACAgMAAAAAAAAAAAAAAAABAgARECAh/9oACAEBAAEFAsk0Fdrh7AgGv//EABURAQEAAAAAAAAAAAAAAAAAABEg/9oACAEDAQE/ASP/xAAUEQEAAAAAAAAAAAAAAAAAAAAg/9oACAECAQE/AR//xAAYEAACAwAAAAAAAAAAAAAAAAABESAwQf/aAAgBAQAGPwKA10f/xAAbEAEAAgIDAAAAAAAAAAAAAAABABARISBBUf/aAAgBAQABPyG8wxGw8DqgDDGxA1x//9oADAMBAAIAAwAAABCc4P7/xAAYEQEBAAMAAAAAAAAAAAAAAAAAEQEhYf/aAAgBAwEBPxDFbRxH/8QAFREBAQAAAAAAAAAAAAAAAAAAESD/2gAIAQIBAT8QY//EABwQAAMAAgMBAAAAAAAAAAAAAAABESFBEFGBof/aAAgBAQABPxDlL2Y7L/tXLLfn0o1rqYpuaRRQpRMp/9k=",aspectRatio:.6666666666666666,src:"/static/a78d9447ce5aed7fce7d879819489687/10fb1/ian-dooley-298769-unsplash.jpg",srcSet:"/static/a78d9447ce5aed7fce7d879819489687/467b3/ian-dooley-298769-unsplash.jpg 340w,\n/static/a78d9447ce5aed7fce7d879819489687/e1ddd/ian-dooley-298769-unsplash.jpg 680w,\n/static/a78d9447ce5aed7fce7d879819489687/10fb1/ian-dooley-298769-unsplash.jpg 1360w,\n/static/a78d9447ce5aed7fce7d879819489687/883ab/ian-dooley-298769-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/its-all-blue/"},frontmatter:{date:"May 06, 2019",title:"It's all blue",description:"What if everything you knew was turned to blue?",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAANABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAgABBP/EABYBAQEBAAAAAAAAAAAAAAAAAAEEBf/aAAwDAQACEAMQAAAB51hszzKX/8QAFxAAAwEAAAAAAAAAAAAAAAAAABARIf/aAAgBAQABBQImKL//xAAVEQEBAAAAAAAAAAAAAAAAAAABEP/aAAgBAwEBPwEn/8QAFREBAQAAAAAAAAAAAAAAAAAAARD/2gAIAQIBAT8BZ//EABYQAQEBAAAAAAAAAAAAAAAAABEAIP/aAAgBAQAGPwKXP//EABkQAAMAAwAAAAAAAAAAAAAAAAEQEQAhQf/aAAgBAQABPyHCA1LZHA4v/9oADAMBAAIAAwAAABAXD//EABYRAQEBAAAAAAAAAAAAAAAAAAERAP/aAAgBAwEBPxBBaa7/xAAWEQEBAQAAAAAAAAAAAAAAAAABERD/2gAIAQIBAT8QCyMz/8QAGhABAQEAAwEAAAAAAAAAAAAAAQARITFBgf/aAAgBAQABPxALZvoMnNmwpQC+z3f/2Q==",aspectRatio:1.5003750937734435,src:"/static/69bca3d44a5cf8f939baf81ce1df2d11/10fb1/cody-davis-253928-unsplash.jpg",srcSet:"/static/69bca3d44a5cf8f939baf81ce1df2d11/467b3/cody-davis-253928-unsplash.jpg 340w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/e1ddd/cody-davis-253928-unsplash.jpg 680w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/10fb1/cody-davis-253928-unsplash.jpg 1360w,\n/static/69bca3d44a5cf8f939baf81ce1df2d11/883ab/cody-davis-253928-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/clean-lines/"},frontmatter:{date:"May 05, 2019",title:"Clean lines",description:"Let your hair down and paint the town red",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAeABQDASIAAhEBAxEB/8QAGAABAQADAAAAAAAAAAAAAAAABAABAgX/xAAXAQEAAwAAAAAAAAAAAAAAAAADAQIF/9oADAMBAAIQAxAAAAHBliDRLUg90KzmxrStH//EABsQAAMBAQADAAAAAAAAAAAAAAABAhIDERMh/9oACAEBAAEFAmihs61ifOlX19JVz68jNFMbP//EABcRAAMBAAAAAAAAAAAAAAAAAAABERD/2gAIAQMBAT8BKxKZ/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQIBAT8BI//EABoQAAICAwAAAAAAAAAAAAAAAAAREDEgIqH/2gAIAQEABj8Clm3CkIvH/8QAHBAAAwADAAMAAAAAAAAAAAAAAAERITFBEFGR/9oACAEBAAE/IRWIyGhVtxDSza50bSRPSLn9FltCKj8PIf/aAAwDAQACAAMAAAAQfy4z/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxDdFJ04TRS//8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARMf/aAAgBAgEBPxAPYteWN//EABwQAQACAwEBAQAAAAAAAAAAAAEAESExQWFRcf/aAAgBAQABPxDDqGywLwNAAOriB2F9vHn7LLyrhFip0Gx+wbAuVgqDeCIkamNef//Z",aspectRatio:.6666666666666666,src:"/static/9a5b90562a8c29097cffdb45cece34df/10fb1/matthew-hamilton-351641-unsplash.jpg",srcSet:"/static/9a5b90562a8c29097cffdb45cece34df/467b3/matthew-hamilton-351641-unsplash.jpg 340w,\n/static/9a5b90562a8c29097cffdb45cece34df/e1ddd/matthew-hamilton-351641-unsplash.jpg 680w,\n/static/9a5b90562a8c29097cffdb45cece34df/10fb1/matthew-hamilton-351641-unsplash.jpg 1360w,\n/static/9a5b90562a8c29097cffdb45cece34df/883ab/matthew-hamilton-351641-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/all-spikes/"},frontmatter:{date:"May 04, 2019",title:"All spikes",description:"A cactus doesn't live in the desert because it likes the desert; it lives there because the desert hasn't killed it yet.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAQBA//EABcBAQEBAQAAAAAAAAAAAAAAAAECBAX/2gAMAwEAAhADEAAAAbyXnaahLy4141oJ/8QAGxAAAQQDAAAAAAAAAAAAAAAAAwABESASIjL/2gAIAQEAAQUCpnJkTkbbU//EABgRAAMBAQAAAAAAAAAAAAAAAAEQEQIh/9oACAEDAQE/ASYhrkX/xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQIBAT8BAqq//8QAGBAAAgMAAAAAAAAAAAAAAAAAAREgMEH/2gAIAQEABj8CghlH/8QAGxABAAIDAQEAAAAAAAAAAAAAARARACExUWH/2gAIAQEAAT8hm67mm2oG7+YCfm5AOAR//9oADAMBAAIAAwAAABDD6zz/xAAWEQEBAQAAAAAAAAAAAAAAAAARARD/2gAIAQMBAT8QgMChn//EABgRAAMBAQAAAAAAAAAAAAAAAAEQESFB/9oACAECAQE/ED3OIYi//8QAHBABAAICAwEAAAAAAAAAAAAAARARACFBUaFh/9oACAEBAAE/EJQLQH1wRW3XTp1v1gV7BxGo14EIJSWZ4oFR/9k=",aspectRatio:.7140307033202428,src:"/static/817bc40442b38b1928e4c01d97eaf83d/10fb1/charles-deluvio-695732-unsplash.jpg",srcSet:"/static/817bc40442b38b1928e4c01d97eaf83d/467b3/charles-deluvio-695732-unsplash.jpg 340w,\n/static/817bc40442b38b1928e4c01d97eaf83d/e1ddd/charles-deluvio-695732-unsplash.jpg 680w,\n/static/817bc40442b38b1928e4c01d97eaf83d/10fb1/charles-deluvio-695732-unsplash.jpg 1360w,\n/static/817bc40442b38b1928e4c01d97eaf83d/883ab/charles-deluvio-695732-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/green/"},frontmatter:{date:"May 03, 2019",title:"Green",description:"For in the true nature of things, if we rightly consider, every green tree is far more glorious than if it were made of gold and silver.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAZABQDASIAAhEBAxEB/8QAGQAAAgMBAAAAAAAAAAAAAAAAAAIBAwQF/8QAFwEBAQEBAAAAAAAAAAAAAAAAAAECA//aAAwDAQACEAMQAAAB6dduTnjUSUqMquVif//EABwQAAEEAwEAAAAAAAAAAAAAAAEAAhESECAxQf/aAAgBAQABBQIpxMr1hvg8qGidP//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQMBAT8BH//EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EABoQAAIDAQEAAAAAAAAAAAAAAAERABAhIFH/2gAIAQEABj8CgQdsrPKyZz//xAAdEAEAAgICAwAAAAAAAAAAAAABEBEAQSExUWHh/9oACAEBAAE/IU2AYMPei6ToMuLW6Qvo+YVFefGpMf/aAAwDAQACAAMAAAAQHDEP/8QAFREBAQAAAAAAAAAAAAAAAAAAASD/2gAIAQMBAT8QY//EABYRAQEBAAAAAAAAAAAAAAAAABARAf/aAAgBAgEBPxC6Q//EABwQAQEBAAIDAQAAAAAAAAAAAAERADFREEFhIf/aAAgBAQABPxAFFeVPWHAHnZMmVQlCurZRF1+55yaEFY0o+xofBT+Qrv7ns3Pg7//Z",aspectRatio:.8,src:"/static/b3d12ea3767298b8f0e55d9d26fa818a/10fb1/dose-juice-1184429-unsplash.jpg",srcSet:"/static/b3d12ea3767298b8f0e55d9d26fa818a/467b3/dose-juice-1184429-unsplash.jpg 340w,\n/static/b3d12ea3767298b8f0e55d9d26fa818a/e1ddd/dose-juice-1184429-unsplash.jpg 680w,\n/static/b3d12ea3767298b8f0e55d9d26fa818a/10fb1/dose-juice-1184429-unsplash.jpg 1360w,\n/static/b3d12ea3767298b8f0e55d9d26fa818a/883ab/dose-juice-1184429-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/get-fruity/"},frontmatter:{date:"May 02, 2019",title:"Get fruity",description:"A deep investigation into the pastel properties of colourful fruit and their psychological effects on hamsters",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAMABQDASIAAhEBAxEB/8QAFwAAAwEAAAAAAAAAAAAAAAAAAAIDBf/EABcBAAMBAAAAAAAAAAAAAAAAAAABAgP/2gAMAwEAAhADEAAAAdONlndgGf/EABkQAQACAwAAAAAAAAAAAAAAAAEAEAIDEv/aAAgBAQABBQKOw7oxCv/EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQMBAT8BP//EABQRAQAAAAAAAAAAAAAAAAAAABD/2gAIAQIBAT8BP//EABkQAAIDAQAAAAAAAAAAAAAAAAEQAAIhUf/aAAgBAQAGPwKCvXgC/8QAGRABAAMBAQAAAAAAAAAAAAAAARARUQBB/9oACAEBAAE/IeDfFx5KVidCP//aAAwDAQACAAMAAAAQ69//xAAWEQADAAAAAAAAAAAAAAAAAAABEBH/2gAIAQMBAT8QNX//xAAXEQADAQAAAAAAAAAAAAAAAAAQESFh/9oACAECAQE/EK8H/8QAGhABAAIDAQAAAAAAAAAAAAAAAQAREEFRof/aAAgBAQABPxBQLWiDwi9W1fuEEpLHsXtWgOP/2Q==",aspectRatio:1.6181229773462784,src:"/static/5dc3b87c18e7ae99cc4415ead1d003bd/10fb1/mike-dorner-173502-unsplash.jpg",srcSet:"/static/5dc3b87c18e7ae99cc4415ead1d003bd/467b3/mike-dorner-173502-unsplash.jpg 340w,\n/static/5dc3b87c18e7ae99cc4415ead1d003bd/e1ddd/mike-dorner-173502-unsplash.jpg 680w,\n/static/5dc3b87c18e7ae99cc4415ead1d003bd/10fb1/mike-dorner-173502-unsplash.jpg 1360w,\n/static/5dc3b87c18e7ae99cc4415ead1d003bd/883ab/mike-dorner-173502-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"",fields:{slug:"/fur/"},frontmatter:{date:"May 01, 2019",title:"The fur series",description:"I have one pug and one Czechoslovakian dog called Prazsky krysarik.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAcABQDASIAAhEBAxEB/8QAGQAAAwEBAQAAAAAAAAAAAAAAAAIFBAMG/8QAFQEBAQAAAAAAAAAAAAAAAAAAAAH/2gAMAwEAAhADEAAAAazR8B6g4Bil1lTaKV//xAAdEAACAgIDAQAAAAAAAAAAAAABAgADBBIQMTJC/9oACAEBAAEFAucvYRHsiE65A3SoE2xvf2vX/8QAFREBAQAAAAAAAAAAAAAAAAAAEBH/2gAIAQMBAT8BKf/EABQRAQAAAAAAAAAAAAAAAAAAACD/2gAIAQIBAT8BH//EAB8QAAAFBAMAAAAAAAAAAAAAAAABAhARISIxYRIyQf/aAAgBAQAGPwJ03QkdjnyouyOJZCS3V503/8QAHRAAAwABBQEAAAAAAAAAAAAAAAERITFBUXGB0f/aAAgBAQABPyGiZR3NqJFyU6QGUibz1yiWXjwLcjxOvokr3Q6Z58s//9oADAMBAAIAAwAAABCg6LD/xAAXEQADAQAAAAAAAAAAAAAAAAAAAREQ/9oACAEDAQE/EMpIp//EABYRAQEBAAAAAAAAAAAAAAAAABARAf/aAAgBAgEBPxAl0//EAB8QAQACAgEFAQAAAAAAAAAAAAEAESExURBBYXHR8P/aAAgBAQABPxA6kIdcRFpdtdvECs8m7d49kRzIomrMWeHcVKMs/J9uBkkkJkmbhWDTkiMG6vT+cSsCiMbv5G5SoFvtn//Z",aspectRatio:.718132854578097,src:"/static/98b3ef98da1febad9e79c09eda17307a/10fb1/charles-deluvio-550068-unsplash.jpg",srcSet:"/static/98b3ef98da1febad9e79c09eda17307a/467b3/charles-deluvio-550068-unsplash.jpg 340w,\n/static/98b3ef98da1febad9e79c09eda17307a/e1ddd/charles-deluvio-550068-unsplash.jpg 680w,\n/static/98b3ef98da1febad9e79c09eda17307a/10fb1/charles-deluvio-550068-unsplash.jpg 1360w,\n/static/98b3ef98da1febad9e79c09eda17307a/883ab/charles-deluvio-550068-unsplash.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Far far away, behind the word mountains, far from the countries Vokalia and\nConsonantia, there live the blind texts. Separated they live in…",fields:{slug:"/hi-folks/"},frontmatter:{date:"May 28, 2015",title:"New Beginnings",description:"This is a custom description for SEO and Open Graph purposes, rather than the default generated excerpt. Simply add a description field to the frontmatter.",thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAALABQDASIAAhEBAxEB/8QAFwABAQEBAAAAAAAAAAAAAAAAAAECBf/EABQBAQAAAAAAAAAAAAAAAAAAAAD/2gAMAwEAAhADEAAAAeHcCoP/xAAWEAEBAQAAAAAAAAAAAAAAAAABMSD/2gAIAQEAAQUCqzH/xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAEDAQE/AT//xAAUEQEAAAAAAAAAAAAAAAAAAAAQ/9oACAECAQE/AT//xAAXEAADAQAAAAAAAAAAAAAAAAAAASAx/9oACAEBAAY/AkZP/8QAGBAAAwEBAAAAAAAAAAAAAAAAAAERITH/2gAIAQEAAT8hSg4ItUo5pClb6xn/2gAMAwEAAgADAAAAEKAP/8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAwEBPxA//8QAFBEBAAAAAAAAAAAAAAAAAAAAEP/aAAgBAgEBPxA//8QAGhABAQEBAQEBAAAAAAAAAAAAAREAITFhof/aAAgBAQABPxAUGFC5UYSFb7+mi9O5SivusKM4Vu7R+b//2Q==",aspectRatio:1.7777777777777777,src:"/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg",srcSet:"/static/54a16e112c74520e2310f2802be25209/467b3/bbbb.jpg 340w,\n/static/54a16e112c74520e2310f2802be25209/e1ddd/bbbb.jpg 680w,\n/static/54a16e112c74520e2310f2802be25209/10fb1/bbbb.jpg 1360w,\n/static/54a16e112c74520e2310f2802be25209/883ab/bbbb.jpg 2000w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}},{node:{excerpt:"Wow! I love blogging so much already.Did you know that “despite its name, salted duck eggs can also be made from\nchicken eggs, though the…",fields:{slug:"/my-second-post/"},frontmatter:{date:"May 06, 2015",title:"My Second Post!",description:null,thumbnail:null}}},{node:{excerpt:"This is my first post on my new fake blog! How exciting!I’m sure I’ll write a lot more interesting things in the future.Oh, and here’s a…",fields:{slug:"/hello-world/"},frontmatter:{date:"May 01, 2015",title:"Hello World",description:null,thumbnail:{childImageSharp:{fluid:{base64:"data:image/jpeg;base64,/9j/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wgARCAAPABQDASIAAhEBAxEB/8QAFgABAQEAAAAAAAAAAAAAAAAAAAMB/8QAFwEAAwEAAAAAAAAAAAAAAAAAAAEEBf/aAAwDAQACEAMQAAABgik0dXC//8QAGRABAAMBAQAAAAAAAAAAAAAAAQACEhEy/9oACAEBAAEFAkqW2DlnRj73yf/EABcRAQADAAAAAAAAAAAAAAAAAAAREkH/2gAIAQMBAT8B1WX/xAAWEQEBAQAAAAAAAAAAAAAAAAAAEQL/2gAIAQIBAT8Bi6f/xAAbEAABBAMAAAAAAAAAAAAAAAAAAQIRISIxMv/aAAgBAQAGPwK9GNocyS8hCj//xAAcEAADAQACAwAAAAAAAAAAAAABESEAMUGBobH/2gAIAQEAAT8hsTTH2wx5gg2ZgM8d5JIfmMRAIe//2gAMAwEAAgADAAAAEMgv/8QAFxEBAQEBAAAAAAAAAAAAAAAAAQARIf/aAAgBAwEBPxARwyusv//EABgRAAIDAAAAAAAAAAAAAAAAAAABESFR/9oACAECAQE/EFoktI//xAAcEAEBAAIDAQEAAAAAAAAAAAABEQAxIWGBQeH/2gAIAQEAAT8QRswtDR5g4a7R5C/RHFM3BKk6zThoVp3lEYcnjGIYES7/ACZ//9k=",aspectRatio:1.3333333333333333,src:"/static/8058f3f26913fea3b6a89a73344fe94a/10fb1/salty_egg.jpg",srcSet:"/static/8058f3f26913fea3b6a89a73344fe94a/467b3/salty_egg.jpg 340w,\n/static/8058f3f26913fea3b6a89a73344fe94a/e1ddd/salty_egg.jpg 680w,\n/static/8058f3f26913fea3b6a89a73344fe94a/10fb1/salty_egg.jpg 1360w,\n/static/8058f3f26913fea3b6a89a73344fe94a/fda29/salty_egg.jpg 2040w,\n/static/8058f3f26913fea3b6a89a73344fe94a/3d25e/salty_egg.jpg 2048w",sizes:"(max-width: 1360px) 100vw, 1360px"}}}}}}]}}}},176:function(A){A.exports={data:{site:{siteMetadata:{author:"Eric Park",social:{twitter:"ericspark"}}}}}}}]);
//# sourceMappingURL=component---src-pages-index-js-16599a1a8ab61944bba3.js.map