(window.webpackJsonp=window.webpackJsonp||[]).push([[154],{"./.linaria-cache/src/components/pack/NsfwModal.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Sticker.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css":function(e,t,a){},"./.linaria-cache/src/components/pack/Tag.linaria.css":function(e,t,a){},"./src/components/pack/NsfwModal.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),o=a.n(n),c=a("./node_modules/linaria/react.js"),s=a("./node_modules/react-router-dom/esm/react-router-dom.js"),l=a("./node_modules/react/index.js"),i=a.n(l);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var d="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},u=Object(c.styled)("div")({name:"NsfwModal",class:"n11e8w11"}),m=function(){var e=Object(l.useState)(!1),t=o()(e,2),a=t[0],r=t[1];return i.a.createElement(u,null,a?null:i.a.createElement("div",{className:"nsfw-hide"},i.a.createElement("div",{className:"modal"},i.a.createElement("div",{className:"modal-dialog  modal-dialog-centered",role:"document"},i.a.createElement("div",{className:"modal-content"},i.a.createElement("div",{className:"modal-header"},i.a.createElement("h3",{className:"modal-title"},"Content Warning")),i.a.createElement("div",{className:"modal-body"},i.a.createElement("p",null,"This pack has been marked ",i.a.createElement("i",null,"Not Safe For Work")," (",i.a.createElement("a",{href:"https://www.urbandictionary.com/define.php?term=NSFW",target:"_blank",rel:"noopener noreferrer"},"NSFW"),").",i.a.createElement("br",null),"This means that it may contain nudity, sexual content, or other potentially disturbing subject matter."),i.a.createElement("p",null,"You should not view this pack at work, or with children around.")),i.a.createElement("div",{className:"modal-footer"},i.a.createElement(s.b,{to:"/",className:"btn btn-secondary",title:"Go back home"},"Go back home"),i.a.createElement("button",{className:"btn btn-primary",onClick:function(){r(!0)}},"Show the pack")))))))};d(m,"useState{[hiddenNsfwModal, setHiddenNsfwModal](false)}");var k,p,f=m;t.a=f,a("./.linaria-cache/src/components/pack/NsfwModal.linaria.css"),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(k.register(u,"NsfwModal","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),k.register(m,"NsfwModalComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx"),k.register(f,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/NsfwModal.tsx")),(p="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&p(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Sticker.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),o=a.n(n),c=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=a.n(c),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),d=a("./node_modules/react/index.js"),u=a.n(d),m=a("./node_modules/linaria/react.js"),k=a("./node_modules/use-async-effect/index.js"),p=a.n(k),f=a("./src/lib/stickers.ts");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var b="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},g=Object(m.styled)("div")({name:"Sticker",class:"sahlm9h"}),h=function(e){var t=e.packId,a=e.packKey,r=e.stickerId,n=Object(d.useState)(""),c=i()(n,2),l=c[0],m=c[1],k=Object(d.useState)(""),b=i()(k,2),h=b[0],v=b[1];return p()(s()(o.a.mark((function e(){var n,c,s,l;return o.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Promise.all([Object(f.c)(t,a,r),Object(f.b)(t,a,r)]);case 2:n=e.sent,c=i()(n,2),s=c[0],l=c[1],m(s),v(l);case 8:case"end":return e.stop()}}),e)}))),[]),l&&h?u.a.createElement(g,{className:"shadow-sm m-3 p-4"},u.a.createElement("div",{className:"emoji"},l),u.a.createElement("img",{src:h,alt:"Sticker"})):null};b(h,"useState{[emoji, setEmoji]('')}\nuseState{[stickerSrc, setStickerSrc]('')}\nuseAsyncEffect{}",(function(){return[p.a]}));var v,y,E=h;t.a=E,a("./.linaria-cache/src/components/pack/Sticker.linaria.css"),(v="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(v.register(g,"Sticker","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),v.register(h,"StickerComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx"),v.register(E,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Sticker.tsx")),(y="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&y(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackDetail.tsx":function(e,t,a){"use strict";a.r(t),function(e){var r,n=a("./node_modules/@babel/runtime/regenerator/index.js"),o=a.n(n),c=a("./node_modules/@babel/runtime/helpers/asyncToGenerator.js"),s=a.n(c),l=a("./node_modules/@babel/runtime/helpers/slicedToArray.js"),i=a.n(l),d=a("./node_modules/react/index.js"),u=a.n(d),m=a("./node_modules/react-router/esm/react-router.js"),k=a("./node_modules/react-router-dom/esm/react-router-dom.js"),p=a("./node_modules/react-linkify/dist/index.js"),f=a.n(p),b=a("./node_modules/linaria/react.js"),g=a("./node_modules/react-octicon/lib/index.js"),h=a.n(g),v=a("./node_modules/use-async-effect/index.js"),y=a.n(v),E=a("./src/hooks/use-query.ts"),x=a("./src/lib/stickers.ts"),w=a("./src/components/pack/Sticker.tsx"),S=a("./src/components/pack/StickerPackError.tsx"),N=a("./src/components/pack/Tag.tsx"),j=a("./src/contexts/StickersContext.tsx"),H=a("./src/components/pack/NsfwModal.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var G="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},L=Object(b.styled)("div")({name:"StickerPackDetail",class:"s11r72gg"});function _(e,t,a){return u.a.createElement("a",{href:e,key:a,target:"_blank",rel:"noreferrer"},t)}var M=function(){var e=Object(m.h)().packId,t=Object(E.a)().get("key")||void 0,a=Object(d.useState)(),r=i()(a,2),n=r[0],c=r[1],l=Object(d.useState)(""),p=i()(l,2),b=p[0],g=p[1],v=Object(d.useContext)(j.b).setSearchQuery,G=Object(m.f)();if(y()(s()(o.a.mark((function a(){return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(a.prev=0,e){a.next=3;break}return a.abrupt("return");case 3:return a.t0=c,a.next=6,Object(x.d)(e,t);case 6:a.t1=a.sent,(0,a.t0)(a.t1),a.next=13;break;case 10:a.prev=10,a.t2=a.catch(0),a.t2.code&&g(a.t2.code);case 13:case"end":return a.stop()}}),a,null,[[0,10]])}))),[]),!e||!n){if(b)switch(b){case"NO_KEY_PROVIDED":return u.a.createElement(S.a,null,u.a.createElement("p",null,"This sticker pack is not listed in the Signal Stickers directory. However, if you have the pack's ",u.a.createElement("strong",null,"key"),", you can still preview the sticker pack by supplying a ",u.a.createElement("code",null,"key")," parameter in the URL."),u.a.createElement("p",null,"For example: ",u.a.createElement("code",null,"/pack/".concat(e,"?key=sticker-pack-key"))));case"MANIFEST_DECRYPT":return u.a.createElement(S.a,null,u.a.createElement("p",null,"The provided key is invalid."));default:return u.a.createElement(S.a,null,u.a.createElement("p",null,"An unknown error occurred (",b,")."))}return null}var M=n.meta.source||"N/A",T=n.manifest.stickers.length,P=n.manifest.author.trim()?n.manifest.author:"Anonymous",O=n.meta.tags||[],C="https://signal.art/addstickers/#pack_id=".concat(e,"&pack_key=").concat(n.meta.key);return u.a.createElement(L,{className:"px-1 px-sm-4 py-4 mt-0 mt-sm-5 mb-5"},n.meta.nsfw?u.a.createElement(H.a,null):null,u.a.createElement("div",{className:"row mb-4 flex-column-reverse flex-lg-row"},u.a.createElement("div",{className:"col-12 col-lg-8 mt-4 mt-lg-0"},u.a.createElement("div",{className:"title"},n.manifest.title),u.a.createElement("div",{className:"author"},u.a.createElement("a",{title:"View more packs from ".concat(P),href:"",onClick:function(e){e.preventDefault(),v(e.currentTarget.textContent),G.push("/")}},P))),u.a.createElement("div",{className:"col-12 col-lg-4 d-flex d-lg-block justify-content-between text-md-right"},n.meta?u.a.createElement(k.b,{to:"/"},u.a.createElement("button",{type:"button",className:"btn btn-link mr-2"},"Home")):null,u.a.createElement("a",{href:C,target:"_blank",rel:"noreferrer",title:"Add to Signal"},u.a.createElement("button",{className:"btn btn-primary"},u.a.createElement(h.a,{name:"plus"})," Add to Signal")))),n.meta?u.a.createElement("div",{className:"row mb-4"},u.a.createElement("div",{className:"col-12 col-lg-6"},u.a.createElement("ul",{className:"list-group"},n.meta.original?u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"star",title:"Original sticker pack"})," This pack has been created exclusively for Signal by the artist, from original artworks."):null,u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"globe",title:"Source"}),u.a.createElement("div",null,u.a.createElement(f.a,{componentDecorator:_},M))),u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"file-directory",title:"Sticker Count"}),T),n.meta.nsfw?u.a.createElement("li",{className:"list-group-item text-wrap text-break"},u.a.createElement(h.a,{name:"alert",title:"NSFW"})," ",u.a.createElement("strong",null,"NSFW")):null,u.a.createElement("li",{className:"list-group-item"},u.a.createElement(h.a,{name:"tag",title:"Tags"}),u.a.createElement("div",{className:"text-wrap text-break"},0===O.length?"None":O.map((function(e){return u.a.createElement(N.a,{key:e},e)}))))))):null,u.a.createElement("div",{className:"row"},u.a.createElement("div",{className:"col-12"},u.a.createElement("div",{className:"d-flex flex-wrap justify-content-around"},n.manifest.stickers.map((function(t){return u.a.createElement(w.a,{packId:e,packKey:n.meta.key,stickerId:t.id,key:t.id})}))))))};G(M,"useParams{{\n    packId\n  }}\nuseQuery{}\nuseState{[stickerPack, setStickerPack]}\nuseState{[stickerPackError, setStickerPackError]('')}\nuseContext{{\n    setSearchQuery\n  }}\nuseHistory{history}\nuseAsyncEffect{}",(function(){return[m.h,E.a,m.f,y.a]}));var T,P,O=M;t.default=O,a("./.linaria-cache/src/components/pack/StickerPackDetail.linaria.css"),(T="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(T.register(L,"StickerPackDetail","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),T.register(_,"LinkifyHrefDecorator","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),T.register(M,"StickerPackDetailComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx"),T.register(O,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackDetail.tsx")),(P="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&P(e)}.call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/StickerPackError.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n);(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);"undefined"!=typeof reactHotLoaderGlobal&&reactHotLoaderGlobal.default.signature;var c,s,l=function(e){return o.a.createElement("div",{className:"p-4 my-4"},o.a.createElement("div",{className:"row mb-4"},o.a.createElement("div",{className:"col-10 offset-1 alert alert-danger"},o.a.createElement("h3",{className:"alert-heading mt-1 mb-3"},"Error"),e.children)))},i=l;t.a=i,(c="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(c.register(l,"StickerPackError","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx"),c.register(i,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/StickerPackError.tsx")),(s="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&s(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/components/pack/Tag.tsx":function(e,t,a){"use strict";(function(e){var r,n=a("./node_modules/react/index.js"),o=a.n(n),c=a("./node_modules/linaria/react.js"),s=a("./node_modules/react-router/esm/react-router.js"),l=a("./src/contexts/StickersContext.tsx");(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e);var i="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e},d=Object(c.styled)("button")({name:"Tag",class:"t1fwmllz"}),u=function(e){var t=Object(n.useContext)(l.b).setSearchQuery,a=Object(s.f)();return o.a.createElement(d,{className:"btn",onClick:function(e){e.preventDefault(),t(e.currentTarget.textContent),a.push("/")},title:'View more packs with tag "'.concat(e.children,'"')},e.children)};i(u,"useContext{{\n    setSearchQuery\n  }}\nuseHistory{history}",(function(){return[s.f]}));var m,k,p=u;t.a=p,a("./.linaria-cache/src/components/pack/Tag.linaria.css"),(m="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&(m.register(d,"Tag","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),m.register(u,"TagComponent","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx"),m.register(p,"default","/home/travis/build/signalstickers/signalstickers/src/components/pack/Tag.tsx")),(k="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&k(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))},"./src/hooks/use-query.ts":function(e,t,a){"use strict";(function(e){a.d(t,"a",(function(){return s}));var r,n,o,c=a("./node_modules/react-router/esm/react-router.js");function s(){return new URLSearchParams(Object(c.g)().search)}(r="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.enterModule:void 0)&&r(e),("undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default.signature:function(e){return e})(s,"useLocation{}",(function(){return[c.g]})),(n="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.default:void 0)&&n.register(s,"useQuery","/home/travis/build/signalstickers/signalstickers/src/hooks/use-query.ts"),(o="undefined"!=typeof reactHotLoaderGlobal?reactHotLoaderGlobal.leaveModule:void 0)&&o(e)}).call(this,a("./node_modules/webpack/buildin/harmony-module.js")(e))}}]);
//# sourceMappingURL=154-24c9c14ba4d029043e36.js.map