import{gz as B,a5 as le,h as l,cn as de,j as s,aY as ce,r as x,u as ue,X as h,F as me}from"./strapi-Bo_S02YF.js";import{C as ge}from"./index-CUucFAK_.js";const pe=B`
  .ck-word-count {
    display: flex;
    gap: 0.5rem;
    justify-content: flex-end;
    padding-block: 0.2rem;
    font-size: 1.4rem;
  }

  .ck-editor__main {
    --ck-font-face: "Source Sans Pro", system-ui, Roboto, "Helvetica Neue", "Helvetica", Arial, sans-serif;
    color: var(--ck-color-editor-base-text);
    font-family: var(--ck-font-face);

    * {
      font: revert;
      margin: revert;
    }

    h1 {
      font-size: 3.2rem;
      margin-bottom: 0.6em;
      font-weight: 400;
    }

    h2 {
      font-size: 2.688rem;
      margin-bottom: 0.4em;
      font-weight: 400;
    }

    h3 {
      font-size: 2.176rem;
      margin-bottom: 0.2em;
      font-weight: 400;
    }

    h4 {
      font-size: 1.84rem;
      margin-bottom: 0.1em;
      font-weight: 400;
    }

    p {
      font-size: 1.6rem;
      line-height: 1.6em;
      margin-bottom: 0.8em;
    }

    figcaption {
      background-color: var(--ck-color-image-caption-background);
      caption-side: bottom;
      color: var(--ck-color-image-caption-text);
      display: table-caption;
      font-size: 1.2rem;
      outline-offset: -1px;
      padding: 0.6em;
      word-break: break-word;
    }

    .image figcaption {
      font-size: 1.2rem;
    }

    blockquote {
    }

    .table {
      font-size: 1.6rem;
    }

    code {
      font-size: 1.4rem;
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
      font-size: 1.6rem;
      list-style: initial;
      margin-left: 2rem;
    }

    ol {
      list-style: decimal;
    }

    sub {
      vertical-align: sub
    }

    sup {
      vertical-align: super
    }

    // higher specificity needed
    .ck.ck-content.ck-editor__editable {
      line-height: initial;
      min-height: 12.5rem;
      border-bottom-left-radius: 0.25rem;
      border-bottom-right-radius: 0.25rem;

      // so it's more Strapi alike
      &.ck-focused:not(.ck-editor__nested-editable) {
        border: 1px solid rgb(73, 69, 255);
        box-shadow: rgb(73 69 255) 0 0 0 0.125rem;
        border-top-left-radius: 0.25rem;
        border-top-right-radius: 0.25rem;
        transition-property: border-color, box-shadow;
        transition-duration: 0.2s;
      }
    }
  }
`,be=B`
`,he=B`
  .ck {
    --ck-color-toolbar-background: rgb(24, 24, 38);
    --ck-color-text: rgb(165, 165, 186);
    --ck-color-editor-base-text: rgb(255, 255, 255);
    --ck-color-toolbar-border: rgb(74, 74, 106);
    --ck-color-base-border: rgb(74, 74, 106);
    --ck-color-base-background: rgb(33, 33, 52);
    --ck-color-button-default-background: rgb(33, 33, 52);
    --ck-color-list-button-hover-background: rgb(24, 24, 38);
    --ck-color-button-default-hover-background: rgb(33, 33, 52);
    --ck-color-button-on-background: rgb(33, 33, 52);
    --ck-color-button-on-hover-background: rgb(33, 33, 52);
    --ck-color-button-default-active-background: rgb(33, 33, 52);
  }
  .ck-word-count {
    color: rgb(165, 165, 186)
  }
`,fe=i=>{let e=null;switch(i){case"dark":e=he;break;case"light":e=be;break}return le`
    ${pe}
    ${e}
  `},{Plugin:ke}=window.CKEDITOR,{ButtonView:Ce}=window.CKEDITOR,xe='<svg width="1em" height="1em" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M4.3.6a.9.9 0 100 1.8h15.311a.9.9 0 100-1.8H4.301zm17.1 3.7A1.6 1.6 0 0123 5.9v15.5a1.6 1.6 0 01-1.6 1.6H2.6A1.601 1.601 0 011 21.4V8 5.915C1 5.03 1.716 4.3 2.6 4.3h18.8zM5.032 19.18h14.336l-3.136-3.205-1.792 1.831-4.032-4.12-5.376 5.494zm13.44-8.697c0 1.282-.985 2.289-2.24 2.289-1.254 0-2.24-1.007-2.24-2.29 0-1.281.986-2.288 2.24-2.288 1.255 0 2.24 1.007 2.24 2.289z"></path></svg>';class w extends ke{strapiToggle=null;static get pluginName(){return"strapiMediaLib"}init(){this.editor.ui.componentFactory.add("strapiMediaLib",()=>{const t=new Ce;return t.set({label:"Media Library",icon:xe,tooltip:!0}),t.on("execute",this.toggle.bind(this)),t})}connect(e){if(typeof e!="function")throw new Error("Input parameter for toogle should be a function");this.strapiToggle=e}toggle(){if(typeof this.strapiToggle!="function")throw new Error("Strapi media library toggle function not connected. Use connect function first");this.strapiToggle()}}const{Plugin:we}=window.CKEDITOR;class ve extends we{static get pluginName(){return"MaximumLength"}static get requires(){return["WordCount"]}init(){const e=this.editor,t=e.plugins.get("WordCount"),o=e.config.get("maximumLength.characters");let d=!1;e.model.document.registerPostFixer(c=>{const n=t.characters,r=this._calculateExcessRange(o,n);r?d?c.updateMarker("maximumLengthExcess",{range:r,usingOperation:!1}):(c.addMarker("maximumLengthExcess",{range:r,usingOperation:!1}),d=!0):d&&(c.removeMarker("maximumLengthExcess"),d=!1)}),e.conversion.for("editingDowncast").markerToHighlight({model:"maximumLengthExcess",view:{classes:"ck-maximum-length-excess"}})}_calculateExcessRange(e,t){if(e>t)return null;const o=this.editor,c=o.model.createRangeIn(o.model.document.getRoot()).getWalker({singleCharacters:!0,direction:"backward"});let n=t,r,a;for(const g of c)if(g.type=="text"&&(r||(r=g.previousPosition),n--,n<e))return a=g.previousPosition,o.model.createRange(a,r)}}const{Alignment:ye,Autoformat:v,Bold:y,Italic:E,Underline:Ee,Strikethrough:Ie,Code:Te,Subscript:Le,Superscript:Ne,BlockQuote:G,CodeBlock:q,Essentials:I,FontSize:_e,FontFamily:Se,FontColor:je,FontBackgroundColor:Re,FindAndReplace:ze,Heading:T,HorizontalLine:De,HtmlEmbed:Me,Image:L,ImageCaption:N,ImageStyle:_,ImageToolbar:S,ImageUpload:j,ImageResize:Pe,Indent:R,IndentBlock:He,Link:z,LinkImage:Q,List:D,ListProperties:Fe,TodoList:Ae,Markdown:Oe,MediaEmbed:X,Paragraph:M,PasteFromOffice:P,RemoveFormat:Ve,SpecialCharacters:Ke,SpecialCharactersEssentials:Be,Table:H,TableToolbar:F,TableProperties:Ue,TableCellProperties:We,TableColumnResize:A,TableCaption:O,WordCount:V,Highlight:$e}=window.CKEDITOR,K={light:{plugins:[v,y,E,I,T,L,N,_,S,j,R,z,D,M,P,H,F,A,O,V,w],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","insertTable","|","bulletedList","numberedList"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}},standard:{plugins:[v,y,E,G,q,I,T,L,N,_,S,j,R,z,Q,D,X,M,P,H,F,A,O,V,w],toolbar:["undo","redo","|","heading","|","bold","italic","|","link","strapiMediaLib","mediaEmbed","blockQuote","insertTable","codeBlock","|","bulletedList","numberedList","outdent","indent"],heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},image:{toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","toggleTableCaption"]},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}},rich:{plugins:[ye,v,y,E,Ee,Ie,Te,Le,Ne,G,q,I,_e,Se,je,Re,ze,T,De,Me,L,N,_,S,j,Pe,R,He,z,Q,D,Fe,Ae,X,M,P,Ve,Ke,Be,H,F,Ue,We,A,O,V,$e,w],toolbar:{items:["undo","redo","|","findAndReplace","selectAll","|","heading","|","fontSize","fontFamily","fontColor","fontBackgroundColor","|","bold","italic","underline","strikethrough","superscript","subscript","code","removeFormat","-","link","strapiMediaLib","mediaEmbed","insertTable","horizontalLine","blockQuote","codeBlock","htmlEmbed","specialCharacters","highlight","|","alignment","|","bulletedList","numberedList","todoList","outdent","indent"],shouldNotGroupWhenFull:!0},heading:{options:[{model:"paragraph",title:"Paragraph",class:"ck-heading_paragraph"},{model:"heading1",view:"h1",title:"Heading 1",class:"ck-heading_heading1"},{model:"heading2",view:"h2",title:"Heading 2",class:"ck-heading_heading2"},{model:"heading3",view:"h3",title:"Heading 3",class:"ck-heading_heading3"},{model:"heading4",view:"h4",title:"Heading 4",class:"ck-heading_heading4"}]},list:{properties:{styles:!0,startIndex:!0,reversed:!0}},image:{resizeUnit:"%",resizeOptions:[{name:"resizeImage:original",value:null,icon:"original"},{name:"resizeImage:25",value:"25",icon:"small"},{name:"resizeImage:50",value:"50",icon:"medium"},{name:"resizeImage:75",value:"75",icon:"large"}],toolbar:["imageStyle:inline","imageStyle:block","imageStyle:side","|","toggleImageCaption","imageTextAlternative","|","linkImage","|","resizeImage:25","resizeImage:50","resizeImage:75","resizeImage:original"]},table:{contentToolbar:["tableColumn","tableRow","mergeTableCells","|","tableCellProperties","tableProperties","|","toggleTableCaption"]},fontSize:{options:[9,11,13,"default",17,19,21,27,35],supportAllValues:!1},fontFamily:{options:["default","Arial, Helvetica Neue, Helvetica, Source Sans Pro, sans-serif","Courier New, Courier, monospace","Georgia, serif","Lucida Sans Unicode, Lucida Grande, sans-serif","Tahoma, Geneva, sans-serif","Times New Roman, Times, serif","Trebuchet MS, Helvetica, sans-serif","Verdana, Geneva, sans-serif","Roboto, Roboto Black, Roboto Medium, Roboto Light, sans-serif"],supportAllValues:!0},fontColor:{columns:5,documentColors:10},fontBackgroundColor:{columns:5,documentColors:10},link:{decorators:{openInNewTab:{mode:"manual",label:"Open in a new tab",attributes:{target:"_blank",rel:"noopener noreferrer"}}}}}};class Ge{constructor(e){this.fieldConfig=e}getEditorConfig(){const e=this._getBaseConfig(),t=this.fieldConfig.maxLength;return this.fieldConfig.options.output==="Markdown"&&e.plugins.push(Oe),t&&(e.plugins.push(ve),e.maximumLength={characters:t}),e}_getBaseConfig(){const e=this.fieldConfig.options.preset;switch(e){case"light":return K.light;case"standard":return K.standard;case"rich":return K.rich;default:throw new Error("Invalid preset name "+e)}}}function qe(i){return i&&i.startsWith("/")?`${window.strapi.backendURL}${i}`:i}const J=({isOpen:i=!1,onChange:e=()=>{},onToggle:t=()=>{}})=>{const{components:o}=de("library",n=>n),d=o["media-library"],c=n=>{const r=n.map(a=>({alt:a.alternativeText||a.name,url:qe(a.url),mime:a.mime}));e(r)};return i?s.jsxDEV(d,{onClose:t,onSelectAssets:c},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/MediaLib/index.jsx",lineNumber:25,columnNumber:5},void 0):null};J.propTypes={isOpen:l.bool,onChange:l.func,onToggle:l.func};function Y(i){const e={"<":"&lt;",">":"&gt;",'"':"&quot;","'":"&apos;"};for(const t in e){const o=e[t];i=i.replaceAll(t,o)}return i}const{ClassicEditor:Qe}=window.CKEDITOR,Xe=localStorage.getItem("STRAPI_THEME")||"light",Ye=fe(Xe),Je=i=>{const{attribute:e,name:t,disabled:o,labelAction:d,required:c,description:n,error:r,intlLabel:a}=i,{onChange:g,value:Z}=ce(t),[f,ee]=x.useState(!1),{formatMessage:U}=ue(),{maxLengthCharacters:W,...te}=e.options,ie=new Ge({options:te,maxLength:W}).getEditorConfig(),$=x.useRef(null),[oe,ne]=x.useState(!1),k=()=>ne(u=>!u),re=u=>{let m="";u.map(b=>{if(b.mime.includes("image")){const ae=Y(b.url),se=Y(b.alt);m+=`<img src="${ae}" alt="${se}" />`}});const p=f.data.processor.toView(m),C=f.data.toModel(p);f.model.insertContent(C),k()};return s.jsxDEV(h.Root,{name:t,id:t,error:r,hint:n&&U(n),children:[s.jsxDEV(me,{spacing:1,alignItems:"normal",style:{flexDirection:"column"},children:[s.jsxDEV(h.Label,{action:d,required:c,children:a?U(a):t},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:72,columnNumber:9},void 0),s.jsxDEV(Ye,{},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:75,columnNumber:9},void 0),s.jsxDEV(ge,{editor:Qe,disabled:o,data:Z??"",onReady:u=>{const m=u.plugins.get("WordCount");$.current.appendChild(m.wordCountContainer),u.plugins.get("strapiMediaLib").connect(k),ee(u)},onChange:(u,m)=>{const p=m.getData();g({target:{name:t,value:p}}),m.plugins.get("WordCount").characters>W&&console.log("Too long")},config:ie},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:76,columnNumber:9},void 0),s.jsxDEV("div",{ref:$},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:103,columnNumber:9},void 0),s.jsxDEV(h.Hint,{},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:104,columnNumber:9},void 0),s.jsxDEV(h.Error,{},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:105,columnNumber:9},void 0)]},void 0,!0,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:71,columnNumber:7},void 0),s.jsxDEV(J,{isOpen:oe,onChange:re,onToggle:k},void 0,!1,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:107,columnNumber:7},void 0)]},void 0,!0,{fileName:"/Users/dominikraducki/Documents/medusa/furniture/strapi/my-strapi-project/node_modules/@ckeditor/strapi-plugin-ckeditor/admin/src/components/CKEditorInput/index.jsx",lineNumber:64,columnNumber:5},void 0)};Je.propTypes={attribute:l.object.isRequired,name:l.string.isRequired,description:l.object,disabled:l.bool,error:l.string,labelAction:l.object,required:l.bool};export{Je as default};
