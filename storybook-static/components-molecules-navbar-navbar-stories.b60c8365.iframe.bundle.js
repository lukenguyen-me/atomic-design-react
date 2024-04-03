"use strict";(self.webpackChunkatomic_design_demo=self.webpackChunkatomic_design_demo||[]).push([[249],{"./src/components/molecules/navbar/navbar.stories.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.r(__webpack_exports__),__webpack_require__.d(__webpack_exports__,{Default:()=>Default,WithMenuItems:()=>WithMenuItems,__namedExportsOrder:()=>__namedExportsOrder,default:()=>__WEBPACK_DEFAULT_EXPORT__});var _index__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__("./src/components/molecules/navbar/index.jsx"),_organisms_header_menuItems__WEBPACK_IMPORTED_MODULE_1__=__webpack_require__("./src/components/organisms/header/menuItems.js"),react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__=__webpack_require__("./node_modules/react/jsx-runtime.js");const __WEBPACK_DEFAULT_EXPORT__={component:_index__WEBPACK_IMPORTED_MODULE_0__.A,decorators:[Story=>(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)("div",{style:{background:"#222",height:"10vh"},children:(0,react_jsx_runtime__WEBPACK_IMPORTED_MODULE_2__.jsx)(Story,{})})]},Default={args:{}},WithMenuItems={args:{menuItems:_organisms_header_menuItems__WEBPACK_IMPORTED_MODULE_1__.W}};Default.parameters={...Default.parameters,docs:{...Default.parameters?.docs,source:{originalSource:"{\n  args: {}\n}",...Default.parameters?.docs?.source}}},WithMenuItems.parameters={...WithMenuItems.parameters,docs:{...WithMenuItems.parameters?.docs,source:{originalSource:"{\n  args: {\n    menuItems\n  }\n}",...WithMenuItems.parameters?.docs?.source}}};const __namedExportsOrder=["Default","WithMenuItems"]},"./src/components/atoms/link/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>atoms_link});__webpack_require__("./node_modules/react/index.js");var _templateObject,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js");const StyledLink=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js").Ay.a(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  color: #fff;\n  text-decoration: none;\n  padding: 4px 10px;\n  border-bottom: 1px solid transparent;\n\n  :hover {\n    border-bottom: 1px solid;\n    transition: 0.3s ease-in;\n  }\n"])));var jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");const Link=props=>(0,jsx_runtime.jsx)(StyledLink,{...props,children:props.children}),atoms_link=Link;Link.__docgenInfo={description:"",methods:[],displayName:"Link"}},"./src/components/molecules/navbar/index.jsx":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{A:()=>Navbar});__webpack_require__("./node_modules/react/index.js");var _templateObject,_templateObject2,taggedTemplateLiteral=__webpack_require__("./node_modules/@babel/runtime/helpers/esm/taggedTemplateLiteral.js"),styled_components_browser_esm=__webpack_require__("./node_modules/styled-components/dist/styled-components.browser.esm.js");const StyledMenu=styled_components_browser_esm.Ay.ul(_templateObject||(_templateObject=(0,taggedTemplateLiteral.A)(["\n  display: flex;\n  flex-direction: row;\n  justify-content: space-around;\n  min-width: 25%;\n  right: 100px;\n  position: absolute;\n  padding: 15px 0;\n  list-style-type: none;\n"]))),MenuItem=styled_components_browser_esm.Ay.li(_templateObject2||(_templateObject2=(0,taggedTemplateLiteral.A)(["\n  font-size: 1.5rem;\n  position: relative;\n"])));var atoms_link=__webpack_require__("./src/components/atoms/link/index.jsx"),jsx_runtime=__webpack_require__("./node_modules/react/jsx-runtime.js");function Navbar(props){const{menuItems=[{name:"Menu Item",route:"#"}]}=props;return(0,jsx_runtime.jsx)(StyledMenu,{children:menuItems.map((menuItem=>(0,jsx_runtime.jsx)(MenuItem,{children:(0,jsx_runtime.jsx)(atoms_link.A,{href:menuItem.route||"#",children:menuItem.name})})))})}Navbar.__docgenInfo={description:"",methods:[],displayName:"Navbar"}},"./src/components/organisms/header/menuItems.js":(__unused_webpack_module,__webpack_exports__,__webpack_require__)=>{__webpack_require__.d(__webpack_exports__,{W:()=>menuItems});const menuItems=[{name:"Services",route:"#"},{name:"Work",route:"#"},{name:"Blog",route:"#"},{name:"Contact",route:"#"}]}}]);