(this["webpackJsonpchun-andrew.github.io"]=this["webpackJsonpchun-andrew.github.io"]||[]).push([[0],{53:function(e,t,i){},54:function(e,t,i){},72:function(e,t,i){"use strict";i.r(t);var n=i(0),a=i.n(n),r=i(15),c=i.n(r),s=(i(53),i(54),i(11)),o=i(12),l=i(14),d=i(13),h=i(27),j=i(22),u=i(6),b=i(1),p=function(e){var t=e.experience,i=e.details;return Object(b.jsxs)(u.a,{className:"experienceCard",children:[Object(b.jsxs)(u.a.Header,{children:[Object(b.jsx)(u.a.Title,{children:Object(b.jsx)("h3",{children:Object(b.jsx)("a",{rel:"noopener noreferrer",href:t.web,target:"_blank",children:t.organization})})}),Object(b.jsx)(u.a.Subtitle,{children:t.date})]}),Object(b.jsx)(u.a.Body,{children:Object(b.jsx)(u.a.Text,{children:i})})]})},m=[{title:"Computer Science",organization:"University of North Carolina, Chapel Hill",location:"Chapel Hill, NC",date:"August 2018 - expected May 2022",details:["Pursuing a double major in Computer Science and Statistics, minoring in Astronomy","Sponsorship Committee Lead for HackReality, first XR-focused hackathon in Southeast region.","ospitality Chair for Triangle Asian-American Student Conference.","Events Chair for UNC-Chapel Hill branch of SolidariTee"]},{organization:"William G. Enloe High School",location:"Raleigh, NC",date:"August 2014 - June 2018",details:["President/Founder of Enloe Film Society","Chief Editor of Enloe Literary Organization","Member of varsity QuizBowl team, WebMasters, and local NPO Food Ark"]}],O=i(10),x=i.n(O),f=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"makeContent",value:function(e){for(var t=[],i=[],n=0;n<e.length;n+=1){for(var r=[],c=0;c<e[n].details.length;c+=1)r.push(Object(b.jsx)("li",{children:e[n].details[c]}));i.push(Object(b.jsx)(p,{experience:e[n],details:r}))}for(i.length%2===1&&i.push(Object(b.jsx)(a.a.Fragment,{}));i.length>0;)t.push(Object(b.jsx)(x.a,{left:!0,cascade:!0,children:Object(b.jsxs)(h.a,{children:[Object(b.jsx)(j.a,{xs:12,md:6,children:i.shift()}),Object(b.jsx)(j.a,{xs:12,md:6,children:i.shift()})]})}));return t}},{key:"render",value:function(){var e=this.makeContent(m);return Object(b.jsxs)("div",{id:this.props.id,className:"WholeModule Experience",children:[Object(b.jsx)("h2",{children:" Education "}),e]})}}]),i}(n.Component),g=i(44),v=i(43),y=i(17),k=i.p+"static/media/pfp.42bffc5f.jpg",C=function(e){var t=e.id;return Object(b.jsxs)("div",{id:t,className:"WholeModule IntroComponent",children:[Object(b.jsx)("div",{className:"filler"}),Object(b.jsxs)(h.a,{children:[Object(b.jsxs)(j.a,{xs:{span:12,order:12},md:{span:6,order:1},children:[Object(b.jsx)("p",{children:" Hello!  "}),Object(b.jsx)("h1",{children:" My name is Andrew Chun. "}),Object(b.jsx)("h2",{children:" I'm a computer science major looking to become a software engineer. "})]}),Object(b.jsx)(j.a,{xs:{span:12,order:5},md:{span:4,order:8},children:Object(b.jsx)(x.a,{right:!0,children:Object(b.jsx)(v.a,{src:k,roundedCircle:!0,fluid:!0})})})]}),Object(b.jsxs)("p",{children:[" Some interests/skills I have include (but are not limited to!):",Object(b.jsxs)("ul",{children:[Object(b.jsx)("li",{children:" Full-stack development "}),Object(b.jsx)("li",{children:" Blockchain "}),Object(b.jsx)("li",{children:" Data Science/Database Management "}),Object(b.jsx)("li",{children:" Scientific Research "})]})]}),Object(b.jsxs)(g.a,{className:"ContactButton",href:"mailto:achun@live.unc.edu",children:[Object(b.jsx)(y.d,{})," Get in Touch"]})]})},w=i(45),S=["C/C++","HTML/CSS","Java","JavaScript","Python","R","Solidity","MatLab","MIPS Assembly","SQL","LaTeX"],H=["Docker","agile methodology","git","Figma","Adobe Creative Suite","JUnit","Amazon Web Services","MongoDB","Firebase"],M=["Angular","jQuery","Bootstrap","React","NodeJS","Bulma","Flask"],A=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"makeCards",value:function(e,t){for(var i=[],n=0;n<e.length;n+=1)i.push(Object(b.jsx)("li",{children:e[n]}));return Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.a.Header,{as:"h3",children:t}),Object(b.jsx)(u.a.Body,{children:Object(b.jsx)(u.a.Text,{children:i})})]})}},{key:"render",value:function(){var e=this.makeCards(S,"Languages"),t=this.makeCards(H,"Technologies/Others"),i=this.makeCards(M,"Frameworks/Libraries");return Object(b.jsxs)("div",{id:this.props.id,className:"WholeModule SkillsComponent",children:[Object(b.jsx)("h2",{children:" Skills "}),Object(b.jsx)(x.a,{left:!0,cascade:!0,children:Object(b.jsxs)(w.a,{children:[e,i,t]})})]})}}]),i}(n.Component),L=i(20),N=i(23),T=i(19),B=i.p+"static/media/Resume.ade51ca8.pdf",I=function(){return Object(b.jsxs)(L.a,{expand:"md",bg:"light",fixed:"top",variant:"dark",children:[Object(b.jsx)(T.a.Item,{children:Object(b.jsx)(N.Link,{activeClass:"active",to:"home",spy:!0,smooth:!0,duration:500,children:"Hello!"})}),Object(b.jsx)(L.a.Toggle,{"aria-controls":"responsive-navbar-nav"}),Object(b.jsxs)(L.a.Collapse,{id:"responsive-navbar-nav",children:[Object(b.jsxs)(T.a,{className:"mr-auto",children:[Object(b.jsx)(T.a.Item,{children:Object(b.jsx)(N.Link,{activeClass:"active",to:"work",spy:!0,smooth:!0,duration:500,children:"Experience"})}),Object(b.jsx)(T.a.Item,{children:Object(b.jsx)(N.Link,{activeClass:"active",to:"education",spy:!0,smooth:!0,duration:500,children:"Education"})}),Object(b.jsx)(T.a.Item,{children:Object(b.jsx)(N.Link,{activeClass:"active",to:"skills",spy:!0,smooth:!0,duration:500,children:"Skills"})}),Object(b.jsx)(T.a.Item,{children:Object(b.jsx)(N.Link,{activeClass:"active",to:"projects",spy:!0,smooth:!0,duration:500,children:"Projects"})})]}),Object(b.jsx)(L.a.Text,{children:Object(b.jsxs)("a",{href:B,download:!0,children:["Resume ",Object(b.jsx)(y.b,{})]})}),Object(b.jsx)(L.a.Text,{children:Object(b.jsxs)("a",{rel:"noopener noreferrer",href:"https://www.linkedin.com/in/andrew-chun/",target:"_blank",children:["LinkedIn ",Object(b.jsx)(y.a,{})]})}),Object(b.jsx)(L.a.Text,{children:Object(b.jsxs)("a",{rel:"noopener noreferrer",href:"https://github.com/BlueHeron42",target:"_blank",children:["GitHub ",Object(b.jsx)(y.c,{})]})})]})]})},z=i(32),J=[{title:"Software Engineering Intern",organization:"BlockChain Center",web:"https://www.blockchaincenter.com/",date:"January 2021 - Current",details:["Organization dedicated to growing the blockchain sector through open-source projects and community initiatives","Participate in and contribute to educational initiatives","Contribute to company-initiated open source projects"]},{title:"Software Intern/Growth Intern",organization:"Omneky",web:"https://www.omneky.com/",date:"April 2020 - August 2020",details:["Prototyped photo-editing functionality for product, using JavaScript/CSS/HTML","Developed web application to automate creation of slide decks for potential customers","Worked with customers to develop ad campaigns","Helped construct sales infrastructure and playbook thru A/B testing, analysis of consumer base ad performance"]},{title:"Learning Assistant",organization:"UNC-Chapel Hill Computer Science Department",web:"https://cs.unc.edu/",location:"Chapel Hill, NC",date:"January 2020 - May 2020",details:["Utilize MatLab to create assignments based around image processing and analysis using real image computing objectives","Host weekly office hours and teach students on a one-on-few basis"]},{title:"Research Intern",organization:"University of Florida Astronomy Department",location:"Gainesville, Florida",web:"https://astro.ufl.edu/",date:"June 2016 \u2013 January 2018",details:["Conducted research improving precision of the radial velocity exoplanet detection method, specifically investigating improved usage of fiber optics","Co-author on research paper accepted by American Astronomical Society and won SIEMENS Competition Semi-Finalist"]}],P=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"makeContent",value:function(e){for(var t=[],i=0;i<e.length;i+=1){for(var n=i.toString(),a=[],r=0;r<e[i].details.length;r+=1)a.push(Object(b.jsx)("li",{children:e[i].details[r]}));e[i].location?t.push(Object(b.jsx)(x.a,{left:!0,cascade:!0,children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(z.a.Toggle,{as:u.a.Header,eventKey:n,children:Object(b.jsxs)("p",{children:[" ",e[i].title," @ ",Object(b.jsx)("a",{rel:"noopener noreferrer",href:e[i].web,target:"_blank",children:e[i].organization})," "]})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsxs)("p",{children:[" ",e[i].date," \xa0 | \xa0 ",e[i].location," "]}),Object(b.jsx)("ul",{children:a})]})]})})):t.push(Object(b.jsx)(x.a,{left:!0,cascade:!0,children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(z.a.Toggle,{as:u.a.Header,eventKey:n,children:Object(b.jsxs)("p",{children:[" ",e[i].title," @ ",Object(b.jsx)("a",{rel:"noopener noreferrer",href:e[i].web,target:"_blank",children:e[i].organization})," "]})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsxs)("p",{children:[" ",e[i].date," \xa0"]}),Object(b.jsx)("ul",{children:a})]})]})}))}return t}},{key:"render",value:function(){var e=this.makeContent(J);return Object(b.jsxs)("div",{id:this.props.id,className:"WholeModule EducationComponent",children:[Object(b.jsx)("h2",{children:" Experience "}),Object(b.jsx)(z.a,{defaultActiveKey:"0",children:e})]})}}]),i}(n.Component),E=[{title:"The Zap Project",repo:"https://github.com/zapproject",tech:"Solidity, JavaScript",details:["Zap is a platform for tokenizing services and curating service providers with a focus oracle services. ","Contributed several PR requests working towards implementing into JavaScript and C++"]},{title:"HandOff",repo:"https://github.com/devincmartin/Handoff",tech:"JavaScript, HTML/CSS MapBox API, Python",details:["Developed ride-share/carpool & communications platform, connecting 95% of local non-profit Reality Ministries volunteers lacking transportation options to increase volunteer turnout. ","Funded by Duke University to implement in general Durham community"]},{title:"Guessify",repo:"https://github.com/manleigh/guessify",tech:"JavaScript, HTML, CSS, FireBase, Spotify API",details:["Developed web game in which users guess song artists or song names in timed rounds"]},{title:"Personal Website",repo:"https://github.com/chun-andrew/chun-andrew.github.io",tech:"React, JavaScript, HTML/CSS, Bootstrap",details:["Personal website hosted on GitHub pages."]}],F=i(48),R=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"makeContent",value:function(e){var t=[];return e.map((function(e){t.push(Object(b.jsx)(x.a,{left:!0,cascade:!0,children:Object(b.jsxs)(u.a,{children:[Object(b.jsx)(u.a.Header,{children:Object(b.jsxs)("h3",{children:[" ",e.title," "]})}),Object(b.jsxs)(u.a.Body,{children:[Object(b.jsxs)("p",{children:[" ",e.details," "]}),Object(b.jsxs)("p",{children:["Utilizes: ",e.tech," "]}),Object(b.jsxs)(u.a.Link,{href:e.repo,children:[" ",Object(b.jsx)(y.c,{})," ",Object(b.jsx)("i",{children:" Repo Link "})," "]})]})]})}))})),t}},{key:"render",value:function(){var e=this.makeContent(E);return Object(b.jsxs)("div",{id:this.props.id,className:"WholeModule EducationComponent",children:[Object(b.jsx)("h2",{children:" Projects "}),Object(b.jsx)(F.a,{children:e})]})}}]),i}(n.Component),W=function(e){Object(l.a)(i,e);var t=Object(d.a)(i);function i(){return Object(s.a)(this,i),t.apply(this,arguments)}return Object(o.a)(i,[{key:"render",value:function(){return Object(b.jsxs)(a.a.Fragment,{children:[Object(b.jsx)(I,{}),Object(b.jsxs)("div",{className:"WholePage",children:[Object(b.jsx)(C,{id:"home"}),Object(b.jsx)(P,{id:"work"}),Object(b.jsx)(f,{id:"education"}),Object(b.jsx)(A,{id:"skills"}),Object(b.jsx)(R,{id:"projects"})]}),Object(b.jsxs)("footer",{children:["Design inspired by ",Object(b.jsx)("a",{href:"https://brianbalayon.github.io/",style:{color:"black"},children:"brianbalayon.github.io"})]})]})}}]),i}(n.Component);var D=function(){return Object(b.jsx)("div",{className:"App",children:Object(b.jsx)(W,{})})};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i(71);c.a.render(Object(b.jsx)(D,{}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[72,1,2]]]);
//# sourceMappingURL=main.f5e517a3.chunk.js.map