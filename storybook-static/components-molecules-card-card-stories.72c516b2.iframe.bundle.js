"use strict";(self.webpackChunkatomic_design_demo=self.webpackChunkatomic_design_demo||[]).push([[753],{"./src/components/molecules/card/card.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithIcon:()=>WithIcon,WithIconAndTitle:()=>WithIconAndTitle,WithTitle:()=>WithTitle,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/molecules/card/index.jsx"),react_icons_kit_linea___WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./node_modules/react-icons-kit/linea/index.js");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_0__.A},Default={args:{children:"Lorem ipsum dolor sit amet"}},WithIcon={args:{children:"Lorem ipsum dolor sit amet",icon:react_icons_kit_linea___WEBPACK_IMPORTED_MODULE_1__.T9G}},WithTitle={args:{children:"Lorem ipsum dolor sit amet",title:"Title"}},WithIconAndTitle={args:{children:"Lorem ipsum dolor sit amet",title:"Title",icon:react_icons_kit_linea___WEBPACK_IMPORTED_MODULE_1__.T9G}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Lorem ipsum dolor sit amet"\n  }\n}',...Default.parameters?.docs?.source}}},WithIcon.parameters={...WithIcon.parameters,docs:{...WithIcon.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Lorem ipsum dolor sit amet",\n    icon: basic_lightbulb\n  }\n}',...WithIcon.parameters?.docs?.source}}},WithTitle.parameters={...WithTitle.parameters,docs:{...WithTitle.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Lorem ipsum dolor sit amet",\n    title: "Title"\n  }\n}',...WithTitle.parameters?.docs?.source}}},WithIconAndTitle.parameters={...WithIconAndTitle.parameters,docs:{...WithIconAndTitle.parameters?.docs,source:{originalSource:'{\n  args: {\n    children: "Lorem ipsum dolor sit amet",\n    title: "Title",\n    icon: basic_lightbulb\n  }\n}',...WithIconAndTitle.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithIcon","WithTitle","WithIconAndTitle"]},"./src/components/molecules/card/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Card});__webpack_require__("./node_modules/react/index.js");var _templateObject,react_icons_kit=__webpack_require__("./node_modules/react-icons-kit/index.js"),taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");const CardContainer=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.div(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n    display: block;\n    background: #f4f4f4;\n    margin: 50px;\n    padding: 35px 16px 27px 16px;\n    max-width: 400px;\n    border-radius: 4px;    \n    color: #673ab7;\n    text-align: center;\n \n  .card-icon {\n    text-align: center;\n  }\n\n  img.card-image {\n    min-height: 100px;\n    width: 100%;\n    display: inline-block;\n  }\n\n  > div {\n    padding: 15px;\n  }\n\n   a.card-link {\n    text-decoration: none;\n    font-size: 26px;\n    padding: 2px 0;\n    color: #673ab7; \n  }\n\n  .description {\n    margin-top: 20px;\n    font-size: 15px;\n    color: #777;\n  }\n"])));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Card(props){const{icon,title,link="#"}=props;return(0,jsx_runtime.jsxs)(CardContainer,{children:[icon&&(0,jsx_runtime.jsx)("div",{className:"card-icon",children:(0,jsx_runtime.jsx)(react_icons_kit.In,{icon,size:52})}),(0,jsx_runtime.jsxs)("div",{children:[title&&(0,jsx_runtime.jsx)("a",{href:link,className:"card-link",children:(0,jsx_runtime.jsx)("h3",{className:"card-title",children:title})}),(0,jsx_runtime.jsx)("p",{className:"description",children:props.children})]})]})}Card.__docgenInfo={description:"",methods:[],displayName:"Card"}}}]);