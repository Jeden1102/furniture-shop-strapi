import{h as a,gz as T,a5 as M,fY as C,d as R,a as c,B as S,X as P,F as $,aY as G,r as f,aV as y,gA as U,cn as F,gB as B,_ as o}from"./strapi-CYDWDzAt.js";import{C as q}from"./index-C2hKIbLM.js";const D=t=>t&&t.startsWith("/")?`${window.strapi.backendURL}${t}`:t,j=({isOpen:t=!1,onToggle:r=()=>{},editor:e})=>{const l=F("MediaLib",({components:k})=>k)["media-library"],h=k=>{let d="";k.map(({name:u,url:_,alt:w,formats:b,mime:m,width:x,height:O})=>{if(m.includes("image"))if(b&&globalThis.SH_CKE_UPLOAD_ADAPTER_IS_RESPONSIVE){let i="";Object.keys(b).sort((g,I)=>b[g].width-b[I].width).map(g=>i+=D(b[g].url)+` ${b[g].width}w,`),d=`<img src="${_}" alt="${w}" width="${x}" height="${O}" srcset="${i}" />`}else d=`<img src="${_}" alt="${w}" width="${x}" height="${O}" />`;else m.includes("video")?d=`
            <video class="video" controls width="500px">
                <source src="${_}" type="${m}" />
            </video>`:d=`<a href="${_}">${u||"Open document"}</a>`});const s=e.data.processor.toView(d),E=e.data.toModel(s);e.model.insertContent(E),r()},v=k=>{const d=k.map(s=>({name:s.name,alt:s.alternativeText||s.name,url:D(s.url),mime:s.mime,formats:s.formats,width:s.width,height:s.height}));h(d)};return t?c.jsx(l,{onClose:r,onSelectAssets:v}):null};j.propTypes={isOpen:a.bool,onToggle:a.func};const L={TOKEN:"jwtToken",PREFERED_LANGUAGE:"strapi-admin-language",PROFILE_THEME:"STRAPI_THEME"},H=()=>{const t=localStorage.getItem(L.TOKEN)??sessionStorage.getItem(L.TOKEN);return typeof t=="string"?JSON.parse(t):null},K=()=>localStorage.getItem(L.PREFERED_LANGUAGE)?.replace(/^"|"$/g,"")||"en",W=()=>localStorage.getItem(L.PROFILE_THEME),Z=(t,r)=>{const e=H(),n=t?.plugins?[...t.plugins.map(l=>l.pluginName)]:[];n.includes("StrapiMediaLib")&&(t.strapiMediaLib={toggle:r}),n.includes("StrapiUploadAdapter")&&(t.strapiUploadAdapter={uploadUrl:`${strapi.backendURL}/upload`,headers:{Authorization:"Bearer "+e},backendUrl:strapi.backendURL,responsive:globalThis.SH_CKE_UPLOAD_ADAPTER_IS_RESPONSIVE}),n.includes("WordCount")&&(t.WordCountPlugin=!0)},V={af:()=>o(()=>import("./af-DcfwdA8K.js"),[]),ar:()=>o(()=>import("./ar-GVa09iLH.js"),[]),ast:()=>o(()=>import("./ast-B40fg1_M.js"),[]),az:()=>o(()=>import("./az-Df_iSNBZ.js"),[]),bg:()=>o(()=>import("./bg-0fFNbT1L.js"),[]),bn:()=>o(()=>import("./bn-WwCKnl1S.js"),[]),bs:()=>o(()=>import("./bs-Cijo5pFW.js"),[]),ca:()=>o(()=>import("./ca-DJn2umC8.js"),[]),cs:()=>o(()=>import("./cs-BfuREAnh.js"),[]),da:()=>o(()=>import("./da-X7A4-m9-.js"),[]),"de-ch":()=>o(()=>import("./de-ch-K1hgL_sj.js"),[]),de:()=>o(()=>import("./de-BHBZzzcc.js"),[]),el:()=>o(()=>import("./el-Bb99PQ2G.js"),[]),"en-au":()=>o(()=>import("./en-au-Do5UvSBt.js"),[]),"en-gb":()=>o(()=>import("./en-gb-C1PukfhL.js"),[]),en:()=>o(()=>import("./en-Dl5RiQ7S.js"),[]),eo:()=>o(()=>import("./eo-Bc7rMUQ7.js"),[]),"es-co":()=>o(()=>import("./es-co-CYtZeYvr.js"),[]),es:()=>o(()=>import("./es-DvHwrBWS.js"),[]),et:()=>o(()=>import("./et-DJDN6JEJ.js"),[]),eu:()=>o(()=>import("./eu-uhQ8ND_N.js"),[]),fa:()=>o(()=>import("./fa-DDTH8v0d.js"),[]),fi:()=>o(()=>import("./fi-BRLwj2gl.js"),[]),fr:()=>o(()=>import("./fr-CCM_8H-3.js"),[]),gl:()=>o(()=>import("./gl-CR0_3l1x.js"),[]),gu:()=>o(()=>import("./gu-8yGacfLx.js"),[]),he:()=>o(()=>import("./he-CL9wIS17.js"),[]),hi:()=>o(()=>import("./hi-DbsFaLVa.js"),[]),hr:()=>o(()=>import("./hr-cc2PGkw3.js"),[]),hu:()=>o(()=>import("./hu-D87zfGjg.js"),[]),hy:()=>o(()=>import("./hy-CmrdVShq.js"),[]),id:()=>o(()=>import("./id-LhDUqfmb.js"),[]),it:()=>o(()=>import("./it-DbInDA_2.js"),[]),ja:()=>o(()=>import("./ja-BeDFRIZ8.js"),[]),jv:()=>o(()=>import("./jv-BqMhXmL8.js"),[]),kk:()=>o(()=>import("./kk-svYywxz8.js"),[]),km:()=>o(()=>import("./km-D0VqPJsj.js"),[]),kn:()=>o(()=>import("./kn-DKx38G_6.js"),[]),ko:()=>o(()=>import("./ko-UCazDuPP.js"),[]),ku:()=>o(()=>import("./ku-CQx-UI0Q.js"),[]),lt:()=>o(()=>import("./lt-Dlj2YohE.js"),[]),lv:()=>o(()=>import("./lv-Bwu6rm36.js"),[]),ms:()=>o(()=>import("./ms-Bfk-R2Oh.js"),[]),nb:()=>o(()=>import("./nb-Ch7iAvrf.js"),[]),ne:()=>o(()=>import("./ne-FKf8nnnC.js"),[]),nl:()=>o(()=>import("./nl-BAqncc0O.js"),[]),no:()=>o(()=>import("./no-DBtiDx09.js"),[]),oc:()=>o(()=>import("./oc-DzrhRekM.js"),[]),pl:()=>o(()=>import("./pl-BM6ql4Ha.js"),[]),"pt-br":()=>o(()=>import("./pt-br-DCwO7kEX.js"),[]),pt:()=>o(()=>import("./pt-DU8YiAkv.js"),[]),ro:()=>o(()=>import("./ro-ChmRTmhR.js"),[]),ru:()=>o(()=>import("./ru-KkXqevLe.js"),[]),si:()=>o(()=>import("./si-DGgJ3nce.js"),[]),sk:()=>o(()=>import("./sk-Beeg_XQ9.js"),[]),sl:()=>o(()=>import("./sl-ENgb7HCd.js"),[]),sq:()=>o(()=>import("./sq-EnrJj0Hc.js"),[]),sr:()=>o(()=>import("./sr-CRZ1CbM3.js"),[]),"sr-latn":()=>o(()=>import("./sr-latn-BvNBivEs.js"),[]),sv:()=>o(()=>import("./sv-1vxsGsiF.js"),[]),th:()=>o(()=>import("./th-CzZa-TOj.js"),[]),ti:()=>o(()=>import("./ti-CfzNLDUK.js"),[]),tk:()=>o(()=>import("./tk-CpwDDmu0.js"),[]),tr:()=>o(()=>import("./tr-DUEA-4a6.js"),[]),tt:()=>o(()=>import("./tt-DtIX794H.js"),[]),ug:()=>o(()=>import("./ug-DLrhrsDH.js"),[]),uk:()=>o(()=>import("./uk-rv-sUYZU.js"),[]),ur:()=>o(()=>import("./ur-CtuhuD2G.js"),[]),uz:()=>o(()=>import("./uz-b4hJi0uQ.js"),[]),vi:()=>o(()=>import("./vi-CWL5AeQ5.js"),[]),"zh-cn":()=>o(()=>import("./zh-cn-BYOS3mhY.js"),[]),zh:()=>o(()=>import("./zh-Df41MvGm.js"),[])},Y=async(t,r)=>{if(V[r]){const e=await V[r]();t.translations=e.default}else console.error(`No translation found for language: ${r}`)},J=()=>{const t=new URLSearchParams(window.location.search),e=Object.fromEntries(t.entries())["plugins[i18n][locale]"];return e&&e.split("-")[0]},X=async t=>{const r=J(),e=K(),{ui:n=t.language&&typeof t.language=="string"?t.language:e,textPartLanguage:l,ignorei18n:h}=t.language||{};r&&!h&&(t.language={ui:n,content:r,textPartLanguage:l}),n!=="en"&&await Y(t,n)},Q=async(t,r)=>{const{presets:e,dontMergePresets:n}=globalThis.SH_CKE_CONFIG||{},l=n?e[t]:B[t];return Z(l.editorConfig,r),await X(l.editorConfig),l},oo=T`
  .ck {
    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);
    --ck-color-mention-background: hsla(341, 100%, 30%, 0.1);
    --ck-color-mention-text: hsl(341, 100%, 30%);
    --ck-color-table-caption-background: hsl(0, 0%, 97%);
    --ck-color-table-caption-text: hsl(0, 0%, 20%);
    --ck-highlight-marker-blue: hsl(201, 97%, 72%);
    --ck-highlight-marker-green: hsl(120, 93%, 68%);
    --ck-highlight-marker-pink: hsl(345, 96%, 73%);
    --ck-highlight-marker-yellow: hsl(60, 97%, 73%);
    --ck-highlight-pen-green: hsl(112, 100%, 27%);
    --ck-highlight-pen-red: hsl(0, 85%, 49%);
    --ck-image-style-spacing: 1.5em;
    --ck-inline-image-style-spacing: calc(var(--ck-image-style-spacing) / 2);
    --ck-todo-list-checkmark-size: 16px;
    font-size: 14px;
  }

  .ck.ck-sticky-panel .ck-sticky-panel__content_sticky {
    top: 64px !important;
  }
  .ck.ck-reset.ck-dropdown__panel.ck-dropdown__panel_sw.ck-dropdown__panel-visible {
    border-radius: 4px;
  }

  .ck-editor__main {
    --ck-font-face: 'Source Sans Pro', system-ui, Roboto, 'Helvetica Neue',
      'Helvetica', Arial, sans-serif;

    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 2.3em;
    }

    h2 {
      font-size: 1.84em;
    }

    h3 {
      font-size: 1.48em;
    }

    h4 {
      font-size: 1.22em;
    }

    h5 {
      font-size: 1.06em;
    }

    h6 {
      font-size: 1em;
    }

    h1,
    h2,
    h3,
    h4,
    h5,
    h6 {
      line-height: 1.2em;
      padding-top: 0.8em;
      margin-bottom: 0.4em;
    }

    blockquote,
    ol,
    p,
    ul {
      font-size: 1em;
      line-height: 1.6em;
      padding-top: 0.2em;
      margin-bottom: var(--ck-spacing-large);
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 0.75em;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    a {
      text-decoration: none;
      color: #1b3af2;
    }

    a:hover {
      text-decoration: underline;
    }

    .table {
      margin: 0;
    }

    ul.todo-list {
      list-style: none;
      margin: revert;
      color: revert;
      font-family: revert;
      margin-left: 2rem;
    }

    ul,
    ol {
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub;
    }

    sup {
      vertical-align: super;
    }

    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;
      transition-property: border-color, box-shadow, max-height;
      transition-timing-function: ease-in-out;
      transition-duration: 0.5s;
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid var(--ck-color-base-border);
        /* border: var(--ck-focus-ring); */
        box-shadow: none;
        transition-property: border-color, box-shadow, max-height;
        transition-timing-function: ease-in-out;
        transition-duration: 0.5s;
      }
    }

    .ck-focused,
    .ck-blurred {
      overflow-y: auto;
      overflow-x: hidden;
      transition: max-height 0.5s ease-in-out, min-height 0.5s ease-in-out !important;
      ::-webkit-scrollbar {
        width: 7px;
      }
      ::-webkit-scrollbar-track {
        background: var(--ck-scroll-track-background);
        border: none;
      }
      ::-webkit-scrollbar-thumb {
        transition: background 2s;
        background: var(--ck-scroll-thumb-background);
        border: 1px solid var(--ck-scroll-thumb-border-color);
      }
      ::-webkit-scrollbar-thumb:hover {
        transition: background 2s;
        background: var(--ck-scroll-thumb-hover-background);
      }
      ::-webkit-scrollbar-thumb:active {
        background: var(--ck-scroll-thumb-active-background);
      }
    }
  }

  .ck .ck-source-editing-area textarea {
    color: var(--ck-color-text);
    background-color: var(--ck-color-base-background);
    border: 1px solid var(--ck-color-base-border) !important;
    box-shadow: none !important;
  }

  .ck .ck-block-toolbar-button {
    min-width: 0 !important;
    min-height: 0 !important;
    width: 20px !important;
    height: 25px !important;
    margin-left: -2px !important ;

    & svg {
      color: var(--ck-color-text) !important;
      position: absolute;
      width: 20px;
      height: 20px;
    }
  }

  .ck-word-count {
    margin-top: 0.3rem;
    display: flex;
    justify-content: end;
    gap: 0.3rem;
    font-size: 1rem;
    font-weight: 500;
    text-transform: lowercase;
    /* color: #b3b3c4; */
  }

  .ck[dir='rtl'] {
    .ck-block-toolbar-button {
      margin-left: 2px !important ;
    }
    & + div {
      justify-content: flex-start;
      & > .ck-word-count {
        & > div:first-child {
          order: 2;
        }
        & > div:last-child {
          order: 1;
        }
      }
    }
  }

  .ck.ck-editor__editable > .ck-placeholder::before {
    color: var(--ck-color-editor-base-text);
    opacity: 0.65;
  }
`,to=T`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: #e4e3ff !important;
    --ck-focus-ring: 1px solid rgb(73, 69, 255) !important;
    --ck-color-button-default-hover-background: #f0f0ff !important;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: #001234;
  }

  .ck {
    --ck-scroll-track-background: rgb(242, 242, 242);
    --ck-scroll-thumb-background: rgb(236, 236, 236);
    --ck-scroll-thumb-border-color: #cdcdf8;
    --ck-scroll-thumb-hover-background: #f0f0ff;
    --ck-scroll-thumb-active-background: #d9d8ff;

    --ck-color-editor-base-text: #001234;
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #dcdce4;
    --ck-color-base-background: #ffffff;
    --ck-custom-background: #ffffff;
    --ck-custom-foreground: #dedede;
    --ck-custom-border: #dcdce4;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #f0f0ff;
    --ck-color-base-active-focus: #e2e2fd;
    
    /* -- Overrides generic colors. ----------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);

    --ck-color-focus-border: rgb(73, 69, 255);

    --ck-color-text: #32324d;
    --ck-color-shadow-drop: hsla(250, 31%, 80%, 0.1);
    --ck-color-shadow-inner: hsla(250, 31%, 80%, 0.1);

    /* -- Overrides the default .ck-button class colors. -------------------- */

    --ck-color-button-default-background: var(--ck-custom-background);
    --ck-color-button-default-hover-background: #f0f0ff;
    --ck-color-button-default-active-background: #f6f6f9;
    --ck-color-button-default-active-shadow: #dedefb;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: rgb(73, 69, 255);
    --ck-color-button-on-background: #f0f0ff;
    --ck-color-button-on-hover-background: #e6e9fc;
    --ck-color-button-on-active-background: #f6f6f9;
    --ck-color-button-on-active-shadow: #cdcdf8;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. ------------------ */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. --------------- */

    --ck-color-split-button-hover-background: var(
      --ck-color-button-default-hover-background
    );
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. --------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(0, 0%, 97%);
    --ck-color-input-disabled-border: rgb(214, 214, 214);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. -------- */

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ---------------------- */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #f4f4fb;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(
      --ck-color-base-active-focus
    );
    --ck-color-list-button-on-text: #271fe2;

    /* -- Overrides the default .ck-balloon-panel class colors. ------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. ------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. ------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. - */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package.  */

    --ck-color-widget-blurred-border: #cfcffa;
    --ck-color-widget-hover-border: #c9c9e4;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. -- */

    --ck-color-link-default: hsl(209, 89%, 33%);

    --ck-powered-by-background: transparrent;
    --ck-powered-by-border-color: var(--ck-color-base-background);

    --ck-color-dialog-background: var(--ck-custom-background);
    --ck-color-dialog-form-header-border: var(--ck-color-base-border);
  }
`,ro=T`
  :root {
    --ck-color-focus-outer-shadow: rgba(77, 115, 255, 0.2) !important;
    --ck-color-focus-disabled-shadow: rgba(106, 114, 143, 0.4) !important;
    --ck-focus-ring: 1px solid #4945ff !important;
    --ck-color-button-default-hover-background: #262630 !important;
  }

  .ck.ck-powered-by > a > svg > path:first-child {
    fill: rgb(236, 236, 236);
  }

  .ck.ck-powered-by > a > svg > path:nth-child(3) {
    fill: rgb(172, 156, 251);
  }

  .ck {
    --ck-scroll-track-background: #3d3d57;
    --ck-scroll-thumb-background: #181826;
    --ck-scroll-thumb-border-color: rgb(70, 70, 70);
    --ck-scroll-thumb-hover-background: #202033;
    --ck-scroll-thumb-active-background: #2b2b45;

    --ck-color-editor-base-text: rgb(236, 236, 236);
    /* Overrides the border radius setting in the theme. */
    --ck-border-radius: 4px;

    /* Helper variables to avoid duplication in the colors. */
    --ck-color-base-border: #4a4a6a;
    --ck-color-base-background: #212134;
    --ck-custom-background: #181826;
    --ck-custom-foreground: #26263b;
    --ck-custom-border: #4a4a6a;
    --ck-custom-white: hsl(0, 0%, 100%);

    --ck-color-focus-outer-shadow: #212134;

    --ck-color-base-focus: #bbbaf1;
    --ck-color-base-active: #2e2e5c;
    --ck-color-base-active-focus: #28284d;
    
    /* -- Overrides generic colors. ----------------------------------------- */

    --ck-color-base-foreground: var(--ck-custom-background);
    --ck-color-focus-border: #6765bd;
    --ck-color-text: hsl(0, 0%, 93%);
    --ck-color-shadow-drop: hsla(0, 0%, 0%, 0.2);
    --ck-color-shadow-inner: hsla(0, 0%, 0%, 0.1);

    /* -- Overrides the default .ck-button class colors. -------------------- */

    --ck-color-button-default-background: rgb(33, 33, 52);

    --ck-color-button-default-hover-background: #262630;
    --ck-color-button-default-active-background: #3c3c47;
    --ck-color-button-default-active-shadow: #3c3c47;
    --ck-color-button-default-disabled-background: var(--ck-custom-background);

    --ck-color-button-on-color: #7b79ff;
    --ck-color-button-on-background: #2b2b36;
    --ck-color-button-on-hover-background: #30303b;
    --ck-color-button-on-active-background: #3c3c47;
    --ck-color-button-on-active-shadow: #3c3c47;
    --ck-color-button-on-disabled-background: var(--ck-custom-foreground);

    --ck-color-button-action-background: hsl(168, 76%, 42%);
    --ck-color-button-action-hover-background: hsl(168, 76%, 38%);
    --ck-color-button-action-active-background: hsl(168, 76%, 36%);
    --ck-color-button-action-active-shadow: hsl(168, 75%, 34%);
    --ck-color-button-action-disabled-background: hsl(168, 76%, 42%);
    --ck-color-button-action-text: var(--ck-custom-white);

    --ck-color-button-save: hsl(120, 100%, 46%);
    --ck-color-button-cancel: hsl(15, 100%, 56%);

    /* -- Overrides the default .ck-dropdown class colors. ------------------ */

    --ck-color-dropdown-panel-background: var(--ck-custom-background);
    --ck-color-dropdown-panel-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-splitbutton class colors. --------------- */

    --ck-color-split-button-hover-background: var(
      --ck-color-button-default-hover-background
    );
    --ck-color-split-button-hover-border: var(--ck-custom-foreground);

    /* -- Overrides the default .ck-input class colors. --------------------- */

    --ck-color-input-background: var(--ck-custom-background);
    --ck-color-input-border: hsl(257, 3%, 43%);
    --ck-color-input-text: hsl(0, 0%, 98%);
    --ck-color-input-disabled-background: hsl(255, 4%, 21%);
    --ck-color-input-disabled-border: hsl(250, 3%, 38%);
    --ck-color-input-disabled-text: hsl(0, 0%, 78%);

    /* -- Overrides the default .ck-labeled-field-view class colors. ---------*/

    --ck-color-labeled-field-label-background: var(--ck-custom-background);

    /* -- Overrides the default .ck-list class colors. ---------------------- */

    --ck-color-list-background: var(--ck-custom-background);
    --ck-color-list-button-hover-background: #121221;
    --ck-color-list-button-on-background: var(--ck-color-base-active);
    --ck-color-list-button-on-background-focus: var(
      --ck-color-base-active-focus
    );
    --ck-color-list-button-on-text: #ffffff;

    /* -- Overrides the default .ck-balloon-panel class colors. ------------- */

    --ck-color-panel-background: var(--ck-custom-background);
    --ck-color-panel-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-toolbar class colors. ------------------- */

    --ck-color-toolbar-background: var(--ck-custom-background);
    --ck-color-toolbar-border: var(--ck-custom-border);

    /* -- Overrides the default .ck-tooltip class colors. ------------------- */

    --ck-color-tooltip-background: #3a3955;
    --ck-color-tooltip-text: hsl(0, 0%, 93%);

    /* -- Overrides the default colors used by the ckeditor5-image package. - */

    --ck-color-image-caption-background: hsl(0, 0%, 97%);
    --ck-color-image-caption-text: hsl(0, 0%, 20%);

    /* -- Overrides the default colors used by the ckeditor5-widget package.  */

    --ck-color-widget-blurred-border: #7c7c96;
    --ck-color-widget-hover-border: #666687;
    --ck-color-widget-editable-focus-background: var(--ck-custom-white);

    /* -- Overrides the default colors used by the ckeditor5-link package. -- */

    --ck-color-link-default: hsl(216, 100%, 75%);

    --ck-powered-by-background: transparrent;
    --ck-powered-by-border-color: var(--ck-color-base-background);

    --ck-color-dialog-background: var(--ck-custom-background);
    --ck-color-dialog-form-header-border: var(--ck-color-base-border);
  }
`,eo=T`
  /* --- expanding --- */

  .ck.ck-editor__main .ck-blurred {
    max-height: 200px !important;
  }
  .ck.ck-editor__main .ck-focused {
    min-height: 200px !important;
    max-height: 700px !important;
  }

  /* --- color-grid --- */

  .ck.ck-color-ui-dropdown {
    --ck-color-grid-tile-size: 22px !important;
  }
  .ck.ck-color-grid__tile {
    width: auto;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid {
    grid-gap: 2px;
  }
  .ck.ck-color-ui-dropdown .ck-color-grid .ck-button {
    border-radius: 2px;
  }
  .ck.ck-color-ui-dropdown
    .ck.ck-color-grid
    .ck-color-grid__tile:hover:not(.ck-disabled),
  .ck.ck-color-ui-dropdown
    .ck.ck-color-grid
    .ck-color-grid__tile:focus:not(.ck-disabled) {
    z-index: 1;
    transform: scale(1.1);
    border-radius: 2px;
  }

  /* ---- Styles feature ------------------------------------------------------ */

  :root {
    --ck-georgia-serif-font-stack: Georgia, Times, Times New Roman, serif;
  }

  .ck-content h1.document-title {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 50px;
    font-weight: bold;
    border: 0;
  }

  .ck-content h2.document-subtitle {
    font-family: var(--ck-georgia-serif-font-stack);
    font-size: 20px;
    font-weight: bold;
    color: #d1d1d1;
    letter-spacing: 10px;
  }

  .ck-content p.callout {
    --border-color: #e91e1e;
    padding: 1.2em 2em;
    border: 1px solid var(--border-color);
    border-left: 10px solid var(--border-color);
    background: #fff9fb;
    border-radius: 5px;
    margin: 1.5em 2em;
    box-shadow: 5px 5px 0 #ffe6ef;
  }

  .ck-content blockquote.side-quote {
    font-family: var(--ck-georgia-serif-font-stack);
    font-style: normal;
    float: right;
    width: 35%;
    position: relative;
    border: 0;
    overflow: visible;
    z-index: 1;
    margin-left: 1em;
  }

  .ck-content blockquote.side-quote::before {
    content: '“';
    position: absolute;
    top: -37px;
    left: -10px;
    display: block;
    font-size: 200px;
    color: #e7e7e7;
    z-index: -1;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p {
    font-size: 2em;
    line-height: 1;
  }

  .ck-content blockquote.side-quote p:last-child:not(:first-child) {
    font-size: 1.3em;
    text-align: right;
    color: #555;
  }

  .ck-content span.needs-clarification {
    outline: 1px dashed #c8a24b;
    background: #ffe19c;
    border-radius: 2px;
    position: relative;
  }

  .ck-content span.needs-clarification::after {
    content: '?';
    display: inline-block;
    color: #fff;
    background: #3b3b3b;
    font-size: 12px;
    vertical-align: super;
    width: 12px;
    height: 12px;
    line-height: 12px;
    border-radius: 10px;
    text-align: center;
    position: absolute;
    right: -6px;
    top: -6px;
    font-weight: bold;
    letter-spacing: initial;
  }

  .ck-content span.wide-spacing {
    letter-spacing: 0.3em;
  }

  .ck-content span.small-caps {
    font-variant: small-caps;
  }

  .ck-content span.spoiler {
    background: #000;
    color: #000;
  }

  .ck-content span.spoiler:hover {
    background: #000;
    color: #fff;
  }

  .ck-content pre.stylish-code {
    border-color: transparent;
    margin-left: 2em;
    margin-right: 2em;
    border-radius: 10px;
  }

  .ck-content pre.stylish-code::before {
    content: '';
    display: block;
    height: 13px;
    background: url(data:image/svg+xml;base64,PHN2ZyBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA1NCAxMyI+CiAgPGNpcmNsZSBjeD0iNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGMzZCNUMiLz4KICA8Y2lyY2xlIGN4PSIyNi41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiNGOUJFNEQiLz4KICA8Y2lyY2xlIGN4PSI0Ny41IiBjeT0iNi41IiByPSI2LjUiIGZpbGw9IiM1NkM0NTMiLz4KPC9zdmc+Cg==);
    margin-bottom: 8px;
    background-repeat: no-repeat;
  }

  .ck-content pre.stylish-code-dark,
  .ck-content pre.stylish-code-bright {
    padding: 1em;
  }

  .ck-content pre.stylish-code-dark {
    background: #272822;
    box-shadow: 5px 5px 0 #0000001f;
    color: white;
  }

  .ck-content pre.stylish-code-dark code {
    color: white;
  }

  .ck-content pre.stylish-code-bright {
    background: #dddfe0;
    color: #000;
    box-shadow: 5px 5px 0 #b3b3b3;
  }

  .ck-content pre.stylish-code-bright code {
    color: #222;
  }
`,co={common:oo,light:to,dark:ro,additional:eo},io=M`
  ${({theme:t})=>t.common}
  ${({theme:t,variant:r})=>t[r]}
  ${({theme:t})=>t.additional}
`,ao=()=>window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches?"dark":"light",no=()=>{const{theme:t,dontMergeTheme:r}=globalThis.SH_CKE_CONFIG||{},e=W(),n=e&&e!=="system"?e:ao(),l=r?t:{...co,...t};return c.jsx(io,{theme:l,variant:n})},lo=C.memo(no),so=R("div")`
  ${({styles:t})=>t}
`,z=({name:t,disabled:r,presetName:e,maxLength:n,placeholder:l})=>{const{onChange:h,value:v}=G(t),[k,d]=f.useState(!1),[s,E]=f.useState(!1),[u,_]=f.useState(null),[w,b]=f.useState(!1),m=f.useRef(null),x=()=>E(i=>!i),O=i=>i>n?b(!0):b(!1);return f.useEffect(()=>{(async()=>{const i=await Q(e,x);if(l){const p={...i,editorConfig:{...i.editorConfig,placeholder:l}};_(p)}else _(i)})()},[]),c.jsxs(c.Fragment,{children:[u&&c.jsx(lo,{}),c.jsxs(so,{styles:u?.styles,children:[!u&&c.jsx(ko,{hasRadius:!0,background:"neutral100",children:c.jsx(y,{children:"Loading..."})}),u&&c.jsxs(c.Fragment,{children:[c.jsx(q,{editor:U,config:u.editorConfig,disabled:r,data:v??"",onReady:i=>{if(u.editorConfig.WordCountPlugin){const p=i.plugins.get("WordCount");p.on("update",(I,A)=>O(A.characters)),m.current?.appendChild(p.wordCountContainer)}i.plugins.has("ImageUploadEditing")&&i.plugins.get("ImageUploadEditing").on("uploadComplete",(p,{data:g,imageElement:I})=>i.model.change(A=>A.setAttribute("alt",g.alt,I))),d(i)},onChange:(i,p)=>{const g=p.getData();h({target:{name:t,value:g}})}}),c.jsx(j,{isOpen:s,onToggle:x,editor:k}),u.editorConfig.WordCountPlugin&&c.jsx(uo,{color:w?"danger500":"neutral400",ref:m,children:!k&&c.jsx(y,{small:!0,children:"Loading..."})})]})]})]})};z.propTypes={name:a.string.isRequired,disabled:a.bool,presetName:a.string.isRequired,maxLength:a.number,placeholder:a.string};const uo=R(S)`
  display: flex;
  width: 100%;
  justify-content: flex-end;
  align-items: center;
`,ko=R(S)`
  display: flex;
  height: 200px;
  width: 100%;
  justify-content: center;
  align-items: center;
`,N=({name:t,attribute:r,value:e="",labelAction:n=null,label:l,disabled:h=!1,error:v=null,required:k=!1,hint:d="",placeholder:s})=>{const{preset:E,maxLengthCharacters:u,..._}=r.options;return c.jsx(P.Root,{name:t,id:t,error:v,hint:d,required:k,children:c.jsxs($,{direction:"column",alignItems:"stretch",gap:1,children:[c.jsx(P.Label,{action:n,children:l}),c.jsx(z,{disabled:h,name:t,value:e,presetName:E,maxLength:u,placeholder:s}),c.jsx(P.Hint,{}),c.jsx(P.Error,{})]})})};N.propTypes={name:a.string.isRequired,attribute:a.object.isRequired,value:a.string,labelAction:a.object,label:a.string,disabled:a.bool,error:a.string,required:a.bool,hint:a.string,placeholder:a.string};const _o=C.memo(N);export{_o as default};
