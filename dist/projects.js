"use strict";
(self["webpackChunkwot_to_do"] = self["webpackChunkwot_to_do"] || []).push([["projects"],{

/***/ "./src/projects.js":
/*!*************************!*\
  !*** ./src/projects.js ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   createProj: () => (/* binding */ createProj),
/* harmony export */   projStorage: () => (/* binding */ projStorage),
/* harmony export */   renderProj: () => (/* binding */ renderProj)
/* harmony export */ });
function projStorage(){ //make new list or load existing
    let defaultProjList = [];
    let projList = Storage.getItem('projList');
    projList = JSON.parse(projList || defaultProjList);
  }

function createProj(projName){
    const taskList = [];
    const numTasks = taskList.length;
    return{
        projName,
        taskList,
        numTasks,
    }
}

function renderProj(projList){
    for(i in projList){
        console.log(i);
    }
}


/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/projects.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicHJvamVjdHMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7O0FBQU8sd0JBQXdCO0FBQy9CO0FBQ0E7QUFDQTtBQUNBOztBQUVPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFTztBQUNQO0FBQ0E7QUFDQTtBQUNBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd290LXRvLWRvLy4vc3JjL3Byb2plY3RzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImV4cG9ydCBmdW5jdGlvbiBwcm9qU3RvcmFnZSgpeyAvL21ha2UgbmV3IGxpc3Qgb3IgbG9hZCBleGlzdGluZ1xuICAgIGxldCBkZWZhdWx0UHJvakxpc3QgPSBbXTtcbiAgICBsZXQgcHJvakxpc3QgPSBTdG9yYWdlLmdldEl0ZW0oJ3Byb2pMaXN0Jyk7XG4gICAgcHJvakxpc3QgPSBKU09OLnBhcnNlKHByb2pMaXN0IHx8IGRlZmF1bHRQcm9qTGlzdCk7XG4gIH1cblxuZXhwb3J0IGZ1bmN0aW9uIGNyZWF0ZVByb2oocHJvak5hbWUpe1xuICAgIGNvbnN0IHRhc2tMaXN0ID0gW107XG4gICAgY29uc3QgbnVtVGFza3MgPSB0YXNrTGlzdC5sZW5ndGg7XG4gICAgcmV0dXJue1xuICAgICAgICBwcm9qTmFtZSxcbiAgICAgICAgdGFza0xpc3QsXG4gICAgICAgIG51bVRhc2tzLFxuICAgIH1cbn1cblxuZXhwb3J0IGZ1bmN0aW9uIHJlbmRlclByb2oocHJvakxpc3Qpe1xuICAgIGZvcihpIGluIHByb2pMaXN0KXtcbiAgICAgICAgY29uc29sZS5sb2coaSk7XG4gICAgfVxufVxuIl0sIm5hbWVzIjpbXSwic291cmNlUm9vdCI6IiJ9