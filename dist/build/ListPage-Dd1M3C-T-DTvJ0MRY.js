import{r as m,aQ as F,u as $,t as Y,q as Z,as as K,w as X,$ as ee,a as e,P as k,c as p,L as D,a6 as W,bh as L,T as l,W as se,bl as B,A as te,bj as ae,C as oe,D as E,E as x,ad as I,V as ne,G as ie,H as f,F as R,bY as re,I as N,J as le,bZ as de,b_ as ce,bm as O,bn as H}from"./strapi-CYDWDzAt.js";import{u as he}from"./useWebhooks-C2yEtiSU-Bk7zl1pj.js";const ge=()=>{const[d,i]=m.useState(!1),[r,o]=m.useState([]),c=F(s=>s.admin_app.permissions.settings?.webhooks),{formatMessage:t}=$(),{_unstableFormatAPIError:h}=Y(),{toggleNotification:n}=Z(),T=K(),{isLoading:_,allowedActions:{canCreate:w,canUpdate:C,canDelete:A}}=X(c),{notifyStatus:v}=ee(),{isLoading:U,webhooks:g,error:M,updateWebhook:z,deleteManyWebhooks:P}=he();m.useEffect(()=>{if(M){n({type:"danger",message:h(M)});return}g&&v(t({id:"Settings.webhooks.list.loading.success",defaultMessage:"Webhooks have been loaded"}))},[g,M,n,t,v,h]);const G=async s=>{try{const a=await z(s);"error"in a&&n({type:"danger",message:h(a.error)})}catch{n({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},J=async s=>{try{const a=await P({ids:[s]});if("error"in a){n({type:"danger",message:h(a.error)});return}o(b=>b.filter(y=>y!==s))}catch{n({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}},V=async()=>{try{const s=await P({ids:r});if("error"in s){n({type:"danger",message:h(s.error)});return}o([])}catch{n({type:"danger",message:t({id:"notification.error",defaultMessage:"An error occurred"})})}finally{i(!1)}},q=s=>o(s?g?.map(a=>a.id)??[]:[]),Q=(s,a)=>o(s?b=>[...b,a]:b=>b.filter(y=>y!==a)),S=_||U,j=g?.length??0,u=r.length;return S?e.jsx(k.Loading,{}):e.jsxs(p.Root,{children:[e.jsx(k.Title,{children:t({id:"Settings.PageTitle",defaultMessage:"Settings - {name}"},{name:"Webhooks"})}),e.jsxs(k.Main,{"aria-busy":S,children:[e.jsx(p.Header,{title:t({id:"Settings.webhooks.title",defaultMessage:"Webhooks"}),subtitle:t({id:"Settings.webhooks.list.description",defaultMessage:"Get POST changes notifications"}),primaryAction:w&&!S&&e.jsx(D,{tag:W,startIcon:e.jsx(L,{}),variant:"default",to:"create",size:"S",children:t({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})})}),u>0&&A&&e.jsx(p.Action,{startActions:e.jsxs(e.Fragment,{children:[e.jsx(l,{variant:"epsilon",textColor:"neutral600",children:t({id:"Settings.webhooks.to.delete",defaultMessage:"{webhooksToDeleteLength, plural, one {# webhook} other {# webhooks}} selected"},{webhooksToDeleteLength:u})}),e.jsx(se,{onClick:()=>i(!0),startIcon:e.jsx(B,{}),size:"L",variant:"danger-light",children:t({id:"global.delete",defaultMessage:"Delete"})})]})}),e.jsx(p.Content,{children:j>0?e.jsxs(te,{colCount:5,rowCount:j+1,footer:e.jsx(ae,{onClick:()=>{w&&T("create")},icon:e.jsx(L,{}),children:t({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}),children:[e.jsx(oe,{children:e.jsxs(E,{children:[e.jsx(x,{children:e.jsx(I,{"aria-label":t({id:"global.select-all-entries",defaultMessage:"Select all entries"}),checked:u>0&&u<j?"indeterminate":u===j,onCheckedChange:q})}),e.jsx(x,{width:"20%",children:e.jsx(l,{variant:"sigma",textColor:"neutral600",children:t({id:"global.name",defaultMessage:"Name"})})}),e.jsx(x,{width:"60%",children:e.jsx(l,{variant:"sigma",textColor:"neutral600",children:t({id:"Settings.webhooks.form.url",defaultMessage:"URL"})})}),e.jsx(x,{width:"20%",children:e.jsx(l,{variant:"sigma",textColor:"neutral600",children:t({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})})}),e.jsx(x,{children:e.jsx(ne,{children:t({id:"Settings.webhooks.list.th.actions",defaultMessage:"Actions"})})})]})}),e.jsx(ie,{children:g?.map(s=>e.jsxs(E,{onClick:()=>{C&&T(s.id)},style:{cursor:C?"pointer":"default"},children:[e.jsx(f,{onClick:a=>a.stopPropagation(),children:e.jsx(I,{"aria-label":`${t({id:"global.select",defaultMessage:"Select"})} ${s.name}`,checked:r?.includes(s.id),onCheckedChange:a=>Q(!!a,s.id),name:"select"})}),e.jsx(f,{children:e.jsx(l,{fontWeight:"semiBold",textColor:"neutral800",children:s.name})}),e.jsx(f,{children:e.jsx(l,{textColor:"neutral800",children:s.url})}),e.jsx(f,{onClick:a=>a.stopPropagation(),children:e.jsx(R,{children:e.jsx(re,{onLabel:t({id:"global.enabled",defaultMessage:"Enabled"}),offLabel:t({id:"global.disabled",defaultMessage:"Disabled"}),"aria-label":`${s.name} ${t({id:"Settings.webhooks.list.th.status",defaultMessage:"Status"})}`,checked:s.isEnabled,onCheckedChange:a=>{G({...s,isEnabled:a})},visibleLabels:!0})})}),e.jsx(f,{children:e.jsxs(R,{gap:1,children:[C&&e.jsx(N,{label:t({id:"Settings.webhooks.events.update",defaultMessage:"Update"}),variant:"ghost",children:e.jsx(le,{})}),A&&e.jsx(ue,{onDelete:()=>{J(s.id)}})]})})]},s.id))})]}):e.jsx(de,{icon:e.jsx(ce,{width:"160px"}),content:t({id:"Settings.webhooks.list.empty.description",defaultMessage:"No webhooks found"}),action:w?e.jsx(D,{variant:"secondary",startIcon:e.jsx(L,{}),tag:W,to:"create",children:t({id:"Settings.webhooks.list.button.add",defaultMessage:"Create new webhook"})}):null})})]}),e.jsx(O.Root,{open:d,onOpenChange:i,children:e.jsx(H,{onConfirm:V})})]})},ue=({onDelete:d})=>{const[i,r]=m.useState(!1),{formatMessage:o}=$();return e.jsxs(e.Fragment,{children:[e.jsx(N,{onClick:c=>{c.stopPropagation(),r(!0)},label:o({id:"Settings.webhooks.events.delete",defaultMessage:"Delete webhook"}),variant:"ghost",children:e.jsx(B,{})}),e.jsx(O.Root,{open:i,onOpenChange:r,children:e.jsx(H,{onConfirm:c=>{c?.stopPropagation(),d()}})})]})},fe=()=>{const d=F(i=>i.admin_app.permissions.settings?.webhooks.main);return e.jsx(k.Protect,{permissions:d,children:e.jsx(ge,{})})};export{ge as ListPage,fe as ProtectedListPage};