(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[974],{1360:(e,t,a)=>{Promise.resolve().then(a.t.bind(a,7970,23)),Promise.resolve().then(a.t.bind(a,7906,23)),Promise.resolve().then(a.t.bind(a,8502,23)),Promise.resolve().then(a.t.bind(a,982,23)),Promise.resolve().then(a.bind(a,9130)),Promise.resolve().then(a.bind(a,9205)),Promise.resolve().then(a.bind(a,6583)),Promise.resolve().then(a.bind(a,3732)),Promise.resolve().then(a.bind(a,1809)),Promise.resolve().then(a.bind(a,2850)),Promise.resolve().then(a.bind(a,717)),Promise.resolve().then(a.bind(a,1304))},3732:(e,t,a)=>{"use strict";a.d(t,{default:()=>h});var n=a(5155),r=a(2115),i=a(9053),l=a(4918),s=a(2317),o=a(1027),c=a(1567);let d=(0,o.F)("inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",{variants:{variant:{default:"shadow",destructive:"bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",outline:"border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",secondary:"bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",ghost:"hover:bg-accent hover:text-accent-foreground",link:"text-primary underline-offset-4 hover:underline"},size:{default:"h-9 px-4 py-2",sm:"h-8 rounded-md px-3 text-xs",lg:"h-10 rounded-md px-8",icon:"h-9 w-9"}},defaultVariants:{variant:"default",size:"default"}}),u=r.forwardRef((e,t)=>{let{className:a,variant:r,size:i,asChild:l=!1,...o}=e,u=l?s.DX:"button";return(0,n.jsx)(u,{className:(0,c.cn)(d({variant:r,size:i,className:a})),ref:t,...o})});u.displayName="Button";let f=(0,r.createContext)({});function p(e){let{options:t,children:a,...r}=e;return(0,n.jsx)(u,{onClick:e=>{let a=e.currentTarget.getBoundingClientRect(),n=a.left+a.width/2,r=a.top+a.height/2;(0,l.A)({...t,origin:{x:n/window.innerWidth,y:r/window.innerHeight}})},...r,children:a})}(0,r.forwardRef)((e,t)=>{let{options:a,globalOptions:i={resize:!0,useWorker:!0},manualstart:s=!1,children:o,...c}=e,d=(0,r.useRef)(null),u=(0,r.useCallback)(e=>{null!==e?d.current||(d.current=l.A.create(e,{...i,resize:!0})):d.current&&(d.current.reset(),d.current=null)},[i]),p=(0,r.useCallback)(function(){var e;let t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return null===(e=d.current)||void 0===e?void 0:e.call(d,{...a,...t})},[a]),h=(0,r.useMemo)(()=>({fire:p}),[p]);return(0,r.useImperativeHandle)(t,()=>h,[h]),(0,r.useEffect)(()=>{s||p()},[s,p]),(0,n.jsxs)(f.Provider,{value:h,children:[(0,n.jsx)("canvas",{ref:u,...c}),o]})}).displayName="Confetti";let h=e=>{let{className:t,scrollToId:a,children:l}=e,[s,o]=(0,r.useState)(!1);return((0,r.useEffect)(()=>{o(!0)},[]),s)?(0,n.jsx)(p,{children:(0,n.jsxs)("button",{onClick:()=>{setTimeout(()=>{let e=document.getElementById(a);e&&e.scrollIntoView({behavior:"smooth"})},700)},className:"".concat(t," group cursor-pointer"),children:[l,(0,n.jsx)(i.A,{className:"ml-1 size-3 transition-transform duration-300 ease-in-out group-hover:translate-x-0.5"})]})}):null}},9130:(e,t,a)=>{"use strict";a.d(t,{Accordion:()=>o,AccordionContent:()=>u,AccordionItem:()=>c,AccordionTrigger:()=>d});var n=a(5155),r=a(2115),i=a(6456),l=a(1719),s=a(1567);let o=i.bL,c=r.forwardRef((e,t)=>{let{className:a,...r}=e;return(0,n.jsx)(i.q7,{ref:t,className:(0,s.cn)("border-b",a),...r})});c.displayName="AccordionItem";let d=r.forwardRef((e,t)=>{let{className:a,children:r,...o}=e;return(0,n.jsx)(i.Y9,{className:"flex",children:(0,n.jsxs)(i.l9,{ref:t,className:(0,s.cn)("flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",a),...o,children:[r,(0,n.jsx)(l.A,{className:"h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200"})]})})});d.displayName=i.l9.displayName;let u=r.forwardRef((e,t)=>{let{className:a,children:r,...l}=e;return(0,n.jsx)(i.UC,{ref:t,className:"overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",...l,children:(0,n.jsx)("div",{className:(0,s.cn)("pb-4 pt-0",a),children:r})})});u.displayName=i.UC.displayName},9205:(e,t,a)=>{"use strict";a.d(t,{default:()=>s});var n=a(5155),r=a(2115),i=a(742),l=a(1567);function s(e){let{width:t=40,height:a=40,x:s=-1,y:o=-1,strokeDasharray:c=0,numSquares:d=50,className:u,maxOpacity:f=.5,duration:p=4,repeatDelay:h=.5,...m}=e,x=(0,r.useId)(),v=(0,r.useRef)(null),[y,b]=(0,r.useState)({width:0,height:0}),[g,w]=(0,r.useState)(()=>N(d));function j(){return[Math.floor(Math.random()*y.width/t),Math.floor(Math.random()*y.height/a)]}function N(e){return Array.from({length:e},(e,t)=>({id:t,pos:j()}))}let k=e=>{w(t=>t.map(t=>t.id===e?{...t,pos:j()}:t))};return(0,r.useEffect)(()=>{y.width&&y.height&&w(N(d))},[y,d]),(0,r.useEffect)(()=>{let e=new ResizeObserver(e=>{for(let t of e)b({width:t.contentRect.width,height:t.contentRect.height})});return v.current&&e.observe(v.current),()=>{v.current&&e.unobserve(v.current)}},[v]),(0,n.jsxs)("svg",{ref:v,"aria-hidden":"true",className:(0,l.cn)("pointer-events-none absolute inset-0 h-full w-full fill-gray-400/30 stroke-gray-400/30",u),...m,children:[(0,n.jsx)("defs",{children:(0,n.jsx)("pattern",{id:x,width:t,height:a,patternUnits:"userSpaceOnUse",x:s,y:o,children:(0,n.jsx)("path",{d:"M.5 ".concat(a,"V.5H").concat(t),fill:"none",strokeDasharray:c})})}),(0,n.jsx)("rect",{width:"100%",height:"100%",fill:"url(#".concat(x,")")}),(0,n.jsx)("svg",{x:s,y:o,className:"overflow-visible",children:g.map((e,r)=>{let{pos:[l,s],id:o}=e;return(0,n.jsx)(i.P.rect,{initial:{opacity:0},animate:{opacity:f},transition:{duration:p,repeat:1,delay:.1*r,repeatType:"reverse"},onAnimationComplete:()=>k(o),width:t-1,height:a-1,x:l*t+1,y:s*a+1,fill:"currentColor",strokeWidth:"0"},"".concat(l,"-").concat(s,"-").concat(r))})})]})}},6583:(e,t,a)=>{"use strict";a.d(t,{BackgroundBeamsWithCollision:()=>o});var n=a(5155),r=a(1567),i=a(742),l=a(5683),s=a(2115);let o=e=>{let{children:t,className:a}=e,i=(0,s.useRef)(null),l=(0,s.useRef)(null);return(0,n.jsxs)("div",{ref:l,className:(0,r.cn)("md:h-screen h-min bg-gradient-to-b from-white to-neutral-100 dark:from-neutral-950 dark:to-neutral-800 relative flex items-center w-full justify-center overflow-hidden",a),children:[[{initialX:10,translateX:10,duration:7,repeatDelay:3,delay:2},{initialX:600,translateX:600,duration:3,repeatDelay:3,delay:4},{initialX:100,translateX:100,duration:7,repeatDelay:7,className:"h-6"},{initialX:400,translateX:400,duration:5,repeatDelay:14,delay:4},{initialX:800,translateX:800,duration:11,repeatDelay:2,className:"h-20"},{initialX:1e3,translateX:1e3,duration:4,repeatDelay:2,className:"h-12"},{initialX:1200,translateX:1200,duration:6,repeatDelay:4,delay:2,className:"h-6"}].map(e=>(0,n.jsx)(c,{beamOptions:e,containerRef:i,parentRef:l},e.initialX+"beam-idx")),t,(0,n.jsx)("div",{ref:i,className:"absolute bottom-0 bg-neutral-100 w-full inset-x-0 pointer-events-none",style:{boxShadow:"0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"}})]})},c=s.forwardRef((e,t)=>{let{parentRef:a,containerRef:o,beamOptions:c={}}=e,u=(0,s.useRef)(null),[f,p]=(0,s.useState)({detected:!1,coordinates:null}),[h,m]=(0,s.useState)(0),[x,v]=(0,s.useState)(!1);return(0,s.useEffect)(()=>{let e=setInterval(()=>{if(u.current&&o.current&&a.current&&!x){let e=u.current.getBoundingClientRect(),t=o.current.getBoundingClientRect(),n=a.current.getBoundingClientRect();e.bottom>=t.top&&(p({detected:!0,coordinates:{x:e.left-n.left+e.width/2,y:e.bottom-n.top}}),v(!0))}},50);return()=>clearInterval(e)},[x,o]),(0,s.useEffect)(()=>{f.detected&&f.coordinates&&(setTimeout(()=>{p({detected:!1,coordinates:null}),v(!1)},2e3),setTimeout(()=>{m(e=>e+1)},2e3))},[f]),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(i.P.div,{ref:u,animate:"animate",initial:{translateY:c.initialY||"-200px",translateX:c.initialX||"0px",rotate:c.rotate||0},variants:{animate:{translateY:c.translateY||"1800px",translateX:c.translateX||"0px",rotate:c.rotate||0}},transition:{duration:c.duration||8,repeat:1/0,repeatType:"loop",ease:"linear",delay:c.delay||0,repeatDelay:c.repeatDelay||0},className:(0,r.cn)("absolute left-0 top-20 m-auto h-14 w-px rounded-full bg-gradient-to-t from-indigo-500 via-purple-500 to-transparent",c.className)},h),(0,n.jsx)(l.N,{children:f.detected&&f.coordinates&&(0,n.jsx)(d,{className:"",style:{left:"".concat(f.coordinates.x,"px"),top:"".concat(f.coordinates.y,"px"),transform:"translate(-50%, -50%)"}},"".concat(f.coordinates.x,"-").concat(f.coordinates.y))})]})});c.displayName="CollisionMechanism";let d=e=>{let{...t}=e,a=Array.from({length:20},(e,t)=>({id:t,initialX:0,initialY:0,directionX:Math.floor(80*Math.random()-40),directionY:Math.floor(-50*Math.random()-10)}));return(0,n.jsxs)("div",{...t,className:(0,r.cn)("absolute z-50 h-2 w-2",t.className),children:[(0,n.jsx)(i.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{duration:1.5,ease:"easeOut"},className:"absolute -inset-x-10 top-0 m-auto h-2 w-10 rounded-full bg-gradient-to-r from-transparent via-indigo-500 to-transparent blur-sm"}),a.map(e=>(0,n.jsx)(i.P.span,{initial:{x:e.initialX,y:e.initialY,opacity:1},animate:{x:e.directionX,y:e.directionY,opacity:0},transition:{duration:1.5*Math.random()+.5,ease:"easeOut"},className:"absolute h-1 w-1 rounded-full bg-gradient-to-b from-indigo-500 to-purple-500"},e.id))]})}},1809:(e,t,a)=>{"use strict";a.d(t,{Cover:()=>f});var n=a(5155),r=a(2115),i=a(5683),l=a(742),s=a(1567),o=a(8975),c=a(6737),d=a(2606);let u=e=>{let{id:t,className:a,background:i,minSize:u,maxSize:f,speed:p,particleColor:h,particleDensity:m}=e,[x,v]=(0,r.useState)(!1);(0,r.useEffect)(()=>{(0,o.iC)(async e=>{await (0,c.m)(e)}).then(()=>{v(!0)})},[]);let y=(0,d.s)(),b=async e=>{e&&y.start({opacity:1,transition:{duration:1}})},g=(0,r.useId)();return(0,n.jsx)(l.P.div,{animate:y,className:(0,s.cn)("opacity-0",a),children:x&&(0,n.jsx)(o.Ay,{id:t||g,className:(0,s.cn)("h-full w-full"),particlesLoaded:b,options:{background:{color:{value:i||"#0d47a1"}},fullScreen:{enable:!1,zIndex:1},fpsLimit:120,interactivity:{events:{onClick:{enable:!0,mode:"push"},onHover:{enable:!1,mode:"repulse"},resize:!0},modes:{push:{quantity:4},repulse:{distance:200,duration:.4}}},particles:{bounce:{horizontal:{value:1},vertical:{value:1}},collisions:{absorb:{speed:2},bounce:{horizontal:{value:1},vertical:{value:1}},enable:!1,maxSpeed:50,mode:"bounce",overlap:{enable:!0,retries:0}},color:{value:h||"#ffffff",animation:{h:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!0,offset:0},s:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!0,offset:0},l:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!0,offset:0}}},effect:{close:!0,fill:!0,options:{},type:{}},groups:{},move:{angle:{offset:0,value:90},attract:{distance:200,enable:!1,rotate:{x:3e3,y:3e3}},center:{x:50,y:50,mode:"percent",radius:0},decay:0,distance:{},direction:"none",drift:0,enable:!0,gravity:{acceleration:9.81,enable:!1,inverse:!1,maxSpeed:50},path:{clamp:!0,delay:{value:0},enable:!1,options:{}},outModes:{default:"out"},random:!1,size:!1,speed:{min:.1,max:1},spin:{acceleration:0,enable:!1},straight:!1,trail:{enable:!1,length:10,fill:{}},vibrate:!1,warp:!1},number:{density:{enable:!0,width:400,height:400},limit:{mode:"delete",value:0},value:m||120},opacity:{value:{min:.1,max:1},animation:{count:0,enable:!0,speed:p||4,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},reduceDuplicates:!1,shadow:{blur:0,color:{value:"#000"},enable:!1,offset:{x:0,y:0}},shape:{close:!0,fill:!0,options:{},type:"circle"},size:{value:{min:u||1,max:f||3},animation:{count:0,enable:!1,speed:5,decay:0,delay:0,sync:!1,mode:"auto",startValue:"random",destroy:"none"}},stroke:{width:0},zIndex:{value:0,opacityRate:1,sizeRate:1,velocityRate:1},destroy:{bounds:{},mode:"none",split:{count:1,factor:{value:3},rate:{value:{min:4,max:9}},sizeOffset:!0}},roll:{darken:{enable:!1,value:0},enable:!1,enlighten:{enable:!1,value:0},mode:"vertical",speed:25},tilt:{value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",enable:!1},twinkle:{lines:{enable:!1,frequency:.05,opacity:1},particles:{enable:!1,frequency:.05,opacity:1}},wobble:{distance:5,enable:!1,speed:{angle:50,move:10}},life:{count:0,delay:{value:0,sync:!1},duration:{value:0,sync:!1}},rotate:{value:0,animation:{enable:!1,speed:0,decay:0,sync:!1},direction:"clockwise",path:!1},orbit:{animation:{count:0,enable:!1,speed:1,decay:0,delay:0,sync:!1},enable:!1,opacity:1,rotation:{value:45},width:1},links:{blink:!1,color:{value:"#fff"},consent:!1,distance:100,enable:!1,frequency:1,opacity:1,shadow:{blur:5,color:{value:"#000"},enable:!1},triangles:{enable:!1,frequency:1},width:1,warp:!1},repulse:{value:0,enabled:!1,distance:1,duration:1,factor:1,speed:1}},detectRetina:!0}})})},f=e=>{let{children:t,className:a}=e,[o,c]=(0,r.useState)(!1),d=(0,r.useRef)(null),[f,m]=(0,r.useState)(0),[x,v]=(0,r.useState)([]);return(0,r.useEffect)(()=>{if(d.current){var e,t,a,n;m(null!==(a=null===(e=d.current)||void 0===e?void 0:e.clientWidth)&&void 0!==a?a:0);let r=null!==(n=null===(t=d.current)||void 0===t?void 0:t.clientHeight)&&void 0!==n?n:0,i=Math.floor(r/10);v(Array.from({length:i},(e,t)=>r/(i+1)*(t+1)))}},[d.current]),(0,n.jsxs)("div",{onMouseEnter:()=>c(!0),onMouseLeave:()=>c(!1),ref:d,className:"relative hover:bg-neutral-900  group/cover inline-block dark:bg-neutral-900 bg-neutral-100 px-2 py-2  transition duration-200 rounded-sm",children:[(0,n.jsx)(i.N,{children:o&&(0,n.jsx)(l.P.div,{initial:{opacity:0},animate:{opacity:1},exit:{opacity:0},transition:{opacity:{duration:.2}},className:"h-full w-full overflow-hidden absolute inset-0",children:(0,n.jsxs)(l.P.div,{animate:{translateX:["-50%","0%"]},transition:{translateX:{duration:10,ease:"linear",repeat:1/0}},className:"w-[200%] h-full flex",children:[(0,n.jsx)(u,{background:"transparent",minSize:.4,maxSize:1,particleDensity:500,className:"w-full h-full",particleColor:"#FFFFFF"}),(0,n.jsx)(u,{background:"transparent",minSize:.4,maxSize:1,particleDensity:500,className:"w-full h-full",particleColor:"#FFFFFF"})]})})}),x.map((e,t)=>(0,n.jsx)(p,{hovered:o,duration:2*Math.random()+1,delay:2*Math.random()+1,width:f,style:{top:"".concat(e,"px")}},t)),(0,n.jsx)(l.P.span,{animate:{scale:o?.8:1,x:o?[0,-30,30,-30,30,0]:0,y:o?[0,30,-30,30,-30,0]:0},exit:{filter:"none",scale:1,x:0,y:0},transition:{duration:.2,x:{duration:.2,repeat:1/0,repeatType:"loop"},y:{duration:.2,repeat:1/0,repeatType:"loop"},scale:{duration:.2},filter:{duration:.2}},className:(0,s.cn)("dark:text-white inline-block text-neutral-900 relative z-20 group-hover/cover:text-white transition duration-200",a),children:t},String(o)),(0,n.jsx)(h,{className:"absolute -right-[2px] -top-[2px]"}),(0,n.jsx)(h,{className:"absolute -bottom-[2px] -right-[2px]",delay:.4}),(0,n.jsx)(h,{className:"absolute -left-[2px] -top-[2px]",delay:.8}),(0,n.jsx)(h,{className:"absolute -bottom-[2px] -left-[2px]",delay:1.6})]})},p=e=>{let{className:t,delay:a,duration:i,hovered:o,width:c=600,...d}=e,u=(0,r.useId)();return(0,n.jsxs)(l.P.svg,{width:null!=c?c:"600",height:"1",viewBox:"0 0 ".concat(null!=c?c:"600"," 1"),fill:"none",xmlns:"http://www.w3.org/2000/svg",className:(0,s.cn)("absolute inset-x-0 w-full",t),...d,children:[(0,n.jsx)(l.P.path,{d:"M0 0.5H".concat(null!=c?c:"600"),stroke:"url(#svgGradient-".concat(u,")")}),(0,n.jsx)("defs",{children:(0,n.jsxs)(l.P.linearGradient,{id:"svgGradient-".concat(u),gradientUnits:"userSpaceOnUse",initial:{x1:"0%",x2:o?"-10%":"-5%",y1:0,y2:0},animate:{x1:"110%",x2:o?"100%":"105%",y1:0,y2:0},transition:{duration:o?.5:null!=i?i:2,ease:"linear",repeat:1/0,delay:o?.8*Math.random()+.2:0,repeatDelay:o?1*Math.random()+1:null!=a?a:1},children:[(0,n.jsx)("stop",{stopColor:"#2EB9DF",stopOpacity:"0"}),(0,n.jsx)("stop",{stopColor:"#3b82f6"}),(0,n.jsx)("stop",{offset:"1",stopColor:"#3b82f6",stopOpacity:"0"})]},String(o))})]})},h=e=>{let{className:t,delay:a}=e;return(0,n.jsx)("div",{className:(0,s.cn)("pointer-events-none animate-pulse group-hover/cover:hidden group-hover/cover:opacity-100 group h-2 w-2 rounded-full bg-neutral-600 dark:bg-white opacity-20 group-hover/cover:bg-white",t)})}},2850:(e,t,a)=>{"use strict";a.d(t,{default:()=>c});var n=a(5155),r=a(2115),i=a(4420),l=a(405),s=a(8140),o=a(1567);function c(e){let{value:t,direction:a="up",delay:c=0,className:d,decimalPlaces:u=0}=e,f=(0,r.useRef)(null),p=(0,i.d)("down"===a?t:0),h=(0,l.z)(p,{damping:60,stiffness:100}),m=(0,s.W)(f,{once:!0,margin:"0px"});return(0,r.useEffect)(()=>{m&&setTimeout(()=>{p.set("down"===a?0:t)},1e3*c)},[p,m,c,t,a]),(0,r.useEffect)(()=>h.on("change",e=>{f.current&&(f.current.textContent=Intl.NumberFormat("en-US",{minimumFractionDigits:u,maximumFractionDigits:u}).format(Number(e.toFixed(u))))}),[h,u]),(0,n.jsx)("span",{className:(0,o.cn)("inline-block tabular-nums text-black dark:text-white tracking-wider",d),ref:f})}},717:(e,t,a)=>{"use strict";a.d(t,{default:()=>l});var n=a(5155),r=a(1567),i=a(2115);let l=e=>{let{className:t="",quantity:a=100,staticity:l=50,ease:s=50,size:o=.4,refresh:c=!1,color:d="#ffffff",vx:u=0,vy:f=0}=e,p=(0,i.useRef)(null),h=(0,i.useRef)(null),m=(0,i.useRef)(null),x=(0,i.useRef)([]),v=function(){let[e,t]=(0,i.useState)({x:0,y:0});return(0,i.useEffect)(()=>{let e=e=>{t({x:e.clientX,y:e.clientY})};return window.addEventListener("mousemove",e),()=>{window.removeEventListener("mousemove",e)}},[]),e}(),y=(0,i.useRef)({x:0,y:0}),b=(0,i.useRef)({w:0,h:0}),g=window.devicePixelRatio,w=(0,i.useRef)(null);(0,i.useEffect)(()=>(p.current&&(m.current=p.current.getContext("2d")),j(),E(),window.addEventListener("resize",j),()=>{null!=w.current&&window.cancelAnimationFrame(w.current),window.removeEventListener("resize",j)}),[d]),(0,i.useEffect)(()=>{N()},[v.x,v.y]),(0,i.useEffect)(()=>{j()},[c]);let j=()=>{k(),X()},N=()=>{if(p.current){let e=p.current.getBoundingClientRect(),{w:t,h:a}=b.current,n=v.x-e.left-t/2,r=v.y-e.top-a/2;n<t/2&&n>-t/2&&r<a/2&&r>-a/2&&(y.current.x=n,y.current.y=r)}},k=()=>{h.current&&p.current&&m.current&&(x.current.length=0,b.current.w=h.current.offsetWidth,b.current.h=h.current.offsetHeight,p.current.width=b.current.w*g,p.current.height=b.current.h*g,p.current.style.width="".concat(b.current.w,"px"),p.current.style.height="".concat(b.current.h,"px"),m.current.scale(g,g))},C=()=>{let e=Math.floor(Math.random()*b.current.w),t=Math.floor(Math.random()*b.current.h);return{x:e,y:t,translateX:0,translateY:0,size:Math.floor(2*Math.random())+o,alpha:0,targetAlpha:parseFloat((.6*Math.random()+.1).toFixed(1)),dx:(Math.random()-.5)*.1,dy:(Math.random()-.5)*.1,magnetism:.1+4*Math.random()}},M=function(e){3===(e=e.replace("#","")).length&&(e=e.split("").map(e=>e+e).join(""));let t=parseInt(e,16);return[t>>16&255,t>>8&255,255&t]}(d),z=function(e){let t=arguments.length>1&&void 0!==arguments[1]&&arguments[1];if(m.current){let{x:a,y:n,translateX:r,translateY:i,size:l,alpha:s}=e;m.current.translate(r,i),m.current.beginPath(),m.current.arc(a,n,l,0,2*Math.PI),m.current.fillStyle="rgba(".concat(M.join(", "),", ").concat(s,")"),m.current.fill(),m.current.setTransform(g,0,0,g,0,0),t||x.current.push(e)}},R=()=>{m.current&&m.current.clearRect(0,0,b.current.w,b.current.h)},X=()=>{R();for(let e=0;e<a;e++)z(C())},P=(e,t,a,n,r)=>{let i=(e-t)*(r-n)/(a-t)+n;return i>0?i:0},E=()=>{R(),x.current.forEach((e,t)=>{let a=parseFloat(P([e.x+e.translateX-e.size,b.current.w-e.x-e.translateX-e.size,e.y+e.translateY-e.size,b.current.h-e.y-e.translateY-e.size].reduce((e,t)=>Math.min(e,t)),0,20,0,1).toFixed(2));a>1?(e.alpha+=.02,e.alpha>e.targetAlpha&&(e.alpha=e.targetAlpha)):e.alpha=e.targetAlpha*a,e.x+=e.dx+u,e.y+=e.dy+f,e.translateX+=(y.current.x/(l/e.magnetism)-e.translateX)/s,e.translateY+=(y.current.y/(l/e.magnetism)-e.translateY)/s,z(e,!0),(e.x<-e.size||e.x>b.current.w+e.size||e.y<-e.size||e.y>b.current.h+e.size)&&(x.current.splice(t,1),z(C()))}),w.current=window.requestAnimationFrame(E)};return(0,n.jsx)("div",{className:(0,r.cn)("pointer-events-none",t),ref:h,"aria-hidden":"true",children:(0,n.jsx)("canvas",{ref:p,className:"size-full"})})}},1304:(e,t,a)=>{"use strict";a.d(t,{default:()=>o});var n=a(5155),r=a(2115),i=a(742),l=a(1567);let s=e=>{let{id:t,x:a,y:r,color:l,delay:s,scale:o}=e;return(0,n.jsx)(i.P.svg,{className:"pointer-events-none absolute z-20",initial:{opacity:0,left:a,top:r},animate:{opacity:[0,1,0],scale:[0,o,0],rotate:[75,120,150]},transition:{duration:.8,repeat:1/0,delay:s},width:"21",height:"21",viewBox:"0 0 21 21",children:(0,n.jsx)("path",{d:"M9.82531 0.843845C10.0553 0.215178 10.9446 0.215178 11.1746 0.843845L11.8618 2.72026C12.4006 4.19229 12.3916 6.39157 13.5 7.5C14.6084 8.60843 16.8077 8.59935 18.2797 9.13822L20.1561 9.82534C20.7858 10.0553 20.7858 10.9447 20.1561 11.1747L18.2797 11.8618C16.8077 12.4007 14.6084 12.3916 13.5 13.5C12.3916 14.6084 12.4006 16.8077 11.8618 18.2798L11.1746 20.1562C10.9446 20.7858 10.0553 20.7858 9.82531 20.1562L9.13819 18.2798C8.59932 16.8077 8.60843 14.6084 7.5 13.5C6.39157 12.3916 4.19225 12.4007 2.72023 11.8618L0.843814 11.1747C0.215148 10.9447 0.215148 10.0553 0.843814 9.82534L2.72023 9.13822C4.19225 8.59935 6.39157 8.60843 7.5 7.5C8.60843 6.39157 8.59932 4.19229 9.13819 2.72026L9.82531 0.843845Z",fill:l})},t)},o=e=>{let{text:t,colors:a={first:"#9E7AFF",second:"#FE8BBB"},className:i,sparklesCount:o=10,...c}=e,[d,u]=(0,r.useState)([]);return(0,r.useEffect)(()=>{let e=()=>{let e="".concat(100*Math.random(),"%"),t="".concat(100*Math.random(),"%"),n=Math.random()>.5?a.first:a.second,r=2*Math.random(),i=1*Math.random()+.3,l=10*Math.random()+5;return{id:"".concat(e,"-").concat(t,"-").concat(Date.now()),x:e,y:t,color:n,delay:r,scale:i,lifespan:l}};u(Array.from({length:o},e));let t=setInterval(()=>{u(t=>t.map(t=>t.lifespan<=0?e():{...t,lifespan:t.lifespan-.1}))},50);return()=>clearInterval(t)},[a.first,a.second]),(0,n.jsx)("div",{className:(0,l.cn)("text-2xl",i),...c,style:{"--sparkles-first-color":"".concat(a.first),"--sparkles-second-color":"".concat(a.second)},children:(0,n.jsxs)("p",{className:"relative inline-block",children:[d.map(e=>(0,n.jsx)(s,{...e},e.id)),(0,n.jsx)("strong",{children:t})]})})}},1567:(e,t,a)=>{"use strict";a.d(t,{cn:()=>i});var n=a(3463),r=a(9795);function i(){for(var e=arguments.length,t=Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.QP)((0,n.$)(t))}}},e=>{var t=t=>e(e.s=t);e.O(0,[447,96,441,517,358],()=>t(1360)),_N_E=e.O()}]);