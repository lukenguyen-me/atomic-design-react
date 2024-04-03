"use strict";(self.webpackChunkatomic_design_demo=self.webpackChunkatomic_design_demo||[]).push([[46],{"./src/components/atoms/logo/logo.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WidthHeight:()=>WidthHeight,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});const __WEBPACK_DEFAULT_EXPORT__={component:__webpack_require__("./src/components/atoms/logo/index.jsx").A},Default={args:{}},WidthHeight={args:{height:"50px"}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WidthHeight.parameters={...WidthHeight.parameters,docs:{...WidthHeight.parameters?.docs,source:{originalSource:'{\n  args: {\n    height: "50px"\n  }\n}',...WidthHeight.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WidthHeight"]},"./src/components/atoms/logo/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>logo});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");const StyledLogo=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  background-color: white;\n  border-radius: 8px;\n  padding: 8px;\n"])));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Logo=props=>(0,jsx_runtime.jsx)(StyledLogo,{children:(0,jsx_runtime.jsx)("img",{src:"data:image/png;base64,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",alt:"Logo",...props})}),logo=Logo;Logo.__docgenInfo={description:"",methods:[],displayName:"Logo"}}}]);