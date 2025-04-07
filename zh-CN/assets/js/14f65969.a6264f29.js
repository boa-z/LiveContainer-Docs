"use strict";(self.webpackChunklivecontainer_docs=self.webpackChunklivecontainer_docs||[]).push([[873],{8453:(e,t,i)=>{i.d(t,{R:()=>r,x:()=>a});var n=i(6540);const o={},s=n.createContext(o);function r(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:r(e.components),n.createElement(s.Provider,{value:t},e.children)}},9266:(e,t,i)=>{i.r(t),i.d(t,{assets:()=>c,contentTitle:()=>a,default:()=>p,frontMatter:()=>r,metadata:()=>n,toc:()=>d});const n=JSON.parse('{"id":"faq/jit-less-diagnose-page","title":"6. About JIT-Less Diagnose Page","description":"This page exists in LiveContainer 3.1.51+","source":"@site/docs/faq/jit-less-diagnose-page.md","sourceDirName":"faq","slug":"/faq/jit-less-diagnose-page","permalink":"/LiveContainer-Docs/zh-CN/docs/faq/jit-less-diagnose-page","draft":false,"unlisted":false,"editUrl":"https://github.com/khanhduytran0/LiveContainer/tree/main/docs/docs/faq/jit-less-diagnose-page.md","tags":[],"version":"current","sidebarPosition":9,"frontMatter":{"title":"6. About JIT-Less Diagnose Page","sidebar_position":9},"sidebar":"docsSidebar","previous":{"title":"5. Using Guest Apps","permalink":"/LiveContainer-Docs/zh-CN/docs/faq/container-management"},"next":{"title":"7. Using Tweaks","permalink":"/LiveContainer-Docs/zh-CN/docs/faq/tweaks"}}');var o=i(4848),s=i(8453);const r={title:"6. About JIT-Less Diagnose Page",sidebar_position:9},a="6. About JIT-Less Diagnose Page",c={},d=[{value:"6.1. App Group ID, App Group Accessible, Store",id:"61-app-group-id-app-group-accessible-store",level:2},{value:"6.2.Patch Detected",id:"62patch-detected",level:2},{value:"6.3. Certificate Data / Password Found, Certificate Last Up Date",id:"63-certificate-data--password-found-certificate-last-up-date",level:2}];function l(e){const t={admonition:"admonition",blockquote:"blockquote",code:"code",h1:"h1",h2:"h2",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.R)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.header,{children:(0,o.jsx)(t.h1,{id:"6-about-jit-less-diagnose-page",children:"6. About JIT-Less Diagnose Page"})}),"\n",(0,o.jsx)("img",{width:"300",alt:"Image",src:"https://github.com/user-attachments/assets/03f6392d-1a2a-4e8b-b03a-e6e7568346d2"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"This page exists in LiveContainer 3.1.51+"})}),"\n",(0,o.jsx)(t.p,{children:'If you successfully setup JIT-Less mode, your JIT-Less Mode Diagnose should look like the screenshot above. The most important indicator is "Certificate Last Up Date". This field should change if you reopens your store. If not, follow the following instructions to diagnose your setup.'}),"\n",(0,o.jsx)(t.h2,{id:"61-app-group-id-app-group-accessible-store",children:"6.1. App Group ID, App Group Accessible, Store"}),"\n",(0,o.jsx)(t.p,{children:'The "App Group ID" field should end with the exact same 10 characters as the "Bundle Identifier". "App Group Accessible" should be "Yes" and "Store" should correctly show your store.'}),"\n",(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsxs)(t.p,{children:["For example, if your Bundle Identifier is ",(0,o.jsx)(t.code,{children:"com.kdt.livecontainer.A1B2C3D4E5"})," ,then your app group id should be ",(0,o.jsx)(t.code,{children:"group.com.SideStore.SideStore.A1B2C3D4E5"})," if you use SideStore, or ",(0,o.jsx)(t.code,{children:"group.com.rileytestut.AltStore.A1B2C3D4E5"})," if you use AltStore."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["If it only say ",(0,o.jsx)(t.code,{children:"group.com.SideStore.SideStore"})," or ",(0,o.jsx)(t.code,{children:"Unknown"}),", then there's something wrong with your SideStore setup. Please check:"]}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"SideStore is installed through AltServer"}),"\n",(0,o.jsx)(t.li,{children:"LiveContainer is installed directly through SideStore/AltStore"}),"\n",(0,o.jsx)(t.li,{children:"Don't try to install LiveContainer through AltStore PAL"}),"\n",(0,o.jsx)(t.li,{children:"Account used to install SideStore and LiveContainer matches. This can be checked by going to iOS settings -> General -> VPN & Device Management -> (your account name). Check if both LiveContainer and SideStore are under the same account."}),"\n"]}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsxs)(t.blockquote,{children:["\n",(0,o.jsx)(t.p,{children:'"Entitlement File" exists in 3.2.51+'}),"\n"]})}),"\n",(0,o.jsx)(t.p,{children:'If you meet the above 4 criteria but App Group is still not accessible, tap "Entitlement File" and check the entitlement extracted form LiveContainer\'s main executable. A correct entitlement may look like this:'}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-xml",children:'<?xml version="1.0" encoding="UTF-8"?>\n<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">\n<plist version="1.0">\n<dict>\n <key>application-identifier</key>\n <string>A1B2C3D4E5.com.kdt.livecontainer.A1B2C3D4E5</string>\n <key>com.apple.developer.team-identifier</key>\n <string>A1B2C3D4E5</string>\n <key>com.apple.security.application-groups</key>\n <array>\n  <string>group.com.rileytestut.AltStore.A1B2C3D4E5</string>               <--- Important!\n  <string>group.com.SideStore.SideStore.A1B2C3D4E5</string>               <--- Important!\n </array>\n <key>get-task-allow</key>\n <true/>\n <key>keychain-access-groups</key>\n <array>\n  <string>A1B2C3D4E5.com.kdt.livecontainer.shared</string>\n  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.1</string>\n  <string>A1B2C3D4E5.com.kdt.livecontainer.shared.2</string>\n </array>\n</dict>\n</plist>\n\n'})}),"\n",(0,o.jsxs)(t.p,{children:["The most important part is ",(0,o.jsx)(t.code,{children:"com.apple.security.application-groups"}),", which determines whether LiveContainer can access SideStore's app group.\nThis item should exist and its content should look like ",(0,o.jsx)(t.code,{children:"group.com.rileytestut.AltStore.A1B2C3D4E5"})," and ",(0,o.jsx)(t.code,{children:"group.com.SideStore.SideStore.A1B2C3D4E5"}),". If this item is missing or it looks like ",(0,o.jsx)(t.code,{children:"group.com.SideStore.SideStore.A1B2C3D4E5.A1B2C3D4E5"}),", then this is an bug of SideStore, not LiveContainer. The only thing you can do is to remove both LiveContainer and SideStore, and then install them again and check if this issue is solved."]}),"\n",(0,o.jsxs)(t.p,{children:["It is reported that if LiveContainer's entitlement is incorrect, you can't activate/deactivate apps in SideStore. ",(0,o.jsx)(t.strong,{children:"Please do not submit issues about incorrect entitlement as it is not a LiveContainer issue."})]}),"\n",(0,o.jsx)(t.h2,{id:"62patch-detected",children:"6.2.Patch Detected"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Make sure App Group ID, App Group Accessible and Store are correct before proceeding."})}),"\n",(0,o.jsx)(t.p,{children:'It should say "Yes". If not, close your store from the app switcher, reopen it and refresh this diagnose page.\nIf still not, patch your store again.'}),"\n",(0,o.jsx)(t.h2,{id:"63-certificate-data--password-found-certificate-last-up-date",children:"6.3. Certificate Data / Password Found, Certificate Last Up Date"}),"\n",(0,o.jsx)(t.admonition,{type:"note",children:(0,o.jsx)(t.p,{children:"Make sure 1 & 2 are correct before proceeding."})}),"\n",(0,o.jsx)(t.p,{children:'If you patched your store correctly, Certificate Data / Password Found should turn to "Yes" if you refresh the diagnose page, and "Certificate Last Up Date" should show the time when you last opens your store.'}),"\n",(0,o.jsx)(t.p,{children:'If Certificate Data / Password Found are "Yes", but "Certificate Last Up Date" is unknown, but apps are working correctly, you might have just updated from version prior to 3.1.51, patch your store again and this field should display correctly.'})]})}function p(e={}){const{wrapper:t}={...(0,s.R)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(l,{...e})}):l(e)}}}]);