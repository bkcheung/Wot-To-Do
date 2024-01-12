"use strict";
(self["webpackChunkwot_to_do"] = self["webpackChunkwot_to_do"] || []).push([["tasks"],{

/***/ "./src/tasks.js":
/*!**********************!*\
  !*** ./src/tasks.js ***!
  \**********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ createTask)
/* harmony export */ });
/* harmony import */ var _edit_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./edit.png */ "./src/edit.png");
/* harmony import */ var _details_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./details.png */ "./src/details.png");




function createTask(){
    return {
      title: 'Exercise!',
      description: 'Exercise for 30 minutes',
      dueDate: 'Jan 10 2024',
      priority: 'Medium',

      render(){
        const taskItem = document.createElement('div');
        taskItem.classList.add('task');
        
        const taskText = document.createElement('div');
        taskText.innerHTML = this.title;
        taskText.classList.add("taskText");

        const descButton = document.createElement('button');
        descButton.innerHTML = "...";

        const dDate = document.createElement('div');
        dDate.innerHTML = this.dueDate;

        const modButton = document.createElement('button');
        modButton.appendChild(editIcon);

        const delButton = document.createElement('button');
        delButton.innerHTML = "X";

        switch (this.priority){
          case 'High':
            taskItem.setAttribute('style','border-left: 4px solid red');
            break;
          case 'Medium':
            taskItem.setAttribute('style','border-left: 4px solid orange');
            break;
          case 'Low':
            taskItem.setAttribute('style','border-left: 4px solid low');
            break;
        };

        taskItem.appendChild(taskText);
        taskItem.appendChild(dDate);
        taskItem.appendChild(descButton);
        taskItem.appendChild(modButton);
        taskItem.appendChild(delButton);

        return taskItem;
      },

      set editTitle(value){
        title = value;
      },
      set editDesc(value){
        description = value;
      },
      set editDate(value){
        dueDate = value;
      },
      set editPriority(value){
        priority = value;
      }
    }
  }


const editIcon = new Image();
editIcon.src = _edit_png__WEBPACK_IMPORTED_MODULE_0__;
editIcon.setAttribute('style','height: 20px;');

const detailIcon = new Image();
detailIcon.src = _details_png__WEBPACK_IMPORTED_MODULE_1__;
detailIcon.setAttribute('style','height: 20px;');

/***/ }),

/***/ "./src/details.png":
/*!*************************!*\
  !*** ./src/details.png ***!
  \*************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "f460ec391257afadc23b.png";

/***/ }),

/***/ "./src/edit.png":
/*!**********************!*\
  !*** ./src/edit.png ***!
  \**********************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "931de60c76b19e55b94a.png";

/***/ })

},
/******/ __webpack_require__ => { // webpackRuntimeModules
/******/ var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
/******/ var __webpack_exports__ = (__webpack_exec__("./src/tasks.js"));
/******/ }
]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoidGFza3MuYnVuZGxlLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7OztBQUE4QztBQUNYO0FBQ0M7O0FBRXJCO0FBQ2Y7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLE9BQU87O0FBRVA7QUFDQTtBQUNBLE9BQU87QUFDUDtBQUNBO0FBQ0EsT0FBTztBQUNQO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQSxlQUFlLHNDQUFTO0FBQ3hCLDRDQUE0Qzs7QUFFNUM7QUFDQSxpQkFBaUIseUNBQU87QUFDeEIsOENBQThDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd290LXRvLWRvLy4vc3JjL3Rhc2tzLmpzIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbXBhcmVBc2MsIGZvcm1hdCB9IGZyb20gXCJkYXRlLWZuc1wiO1xuaW1wb3J0IGVkaXRJbWFnZSBmcm9tICcuL2VkaXQucG5nJztcbmltcG9ydCBkZXRhaWxzIGZyb20gJy4vZGV0YWlscy5wbmcnO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBjcmVhdGVUYXNrKCl7XG4gICAgcmV0dXJuIHtcbiAgICAgIHRpdGxlOiAnRXhlcmNpc2UhJyxcbiAgICAgIGRlc2NyaXB0aW9uOiAnRXhlcmNpc2UgZm9yIDMwIG1pbnV0ZXMnLFxuICAgICAgZHVlRGF0ZTogJ0phbiAxMCAyMDI0JyxcbiAgICAgIHByaW9yaXR5OiAnTWVkaXVtJyxcblxuICAgICAgcmVuZGVyKCl7XG4gICAgICAgIGNvbnN0IHRhc2tJdGVtID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tJdGVtLmNsYXNzTGlzdC5hZGQoJ3Rhc2snKTtcbiAgICAgICAgXG4gICAgICAgIGNvbnN0IHRhc2tUZXh0ID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XG4gICAgICAgIHRhc2tUZXh0LmlubmVySFRNTCA9IHRoaXMudGl0bGU7XG4gICAgICAgIHRhc2tUZXh0LmNsYXNzTGlzdC5hZGQoXCJ0YXNrVGV4dFwiKTtcblxuICAgICAgICBjb25zdCBkZXNjQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlc2NCdXR0b24uaW5uZXJIVE1MID0gXCIuLi5cIjtcblxuICAgICAgICBjb25zdCBkRGF0ZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xuICAgICAgICBkRGF0ZS5pbm5lckhUTUwgPSB0aGlzLmR1ZURhdGU7XG5cbiAgICAgICAgY29uc3QgbW9kQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIG1vZEJ1dHRvbi5hcHBlbmRDaGlsZChlZGl0SWNvbik7XG5cbiAgICAgICAgY29uc3QgZGVsQnV0dG9uID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnYnV0dG9uJyk7XG4gICAgICAgIGRlbEJ1dHRvbi5pbm5lckhUTUwgPSBcIlhcIjtcblxuICAgICAgICBzd2l0Y2ggKHRoaXMucHJpb3JpdHkpe1xuICAgICAgICAgIGNhc2UgJ0hpZ2gnOlxuICAgICAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JvcmRlci1sZWZ0OiA0cHggc29saWQgcmVkJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdNZWRpdW0nOlxuICAgICAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JvcmRlci1sZWZ0OiA0cHggc29saWQgb3JhbmdlJyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgICBjYXNlICdMb3cnOlxuICAgICAgICAgICAgdGFza0l0ZW0uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2JvcmRlci1sZWZ0OiA0cHggc29saWQgbG93Jyk7XG4gICAgICAgICAgICBicmVhaztcbiAgICAgICAgfTtcblxuICAgICAgICB0YXNrSXRlbS5hcHBlbmRDaGlsZCh0YXNrVGV4dCk7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGREYXRlKTtcbiAgICAgICAgdGFza0l0ZW0uYXBwZW5kQ2hpbGQoZGVzY0J1dHRvbik7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKG1vZEJ1dHRvbik7XG4gICAgICAgIHRhc2tJdGVtLmFwcGVuZENoaWxkKGRlbEJ1dHRvbik7XG5cbiAgICAgICAgcmV0dXJuIHRhc2tJdGVtO1xuICAgICAgfSxcblxuICAgICAgc2V0IGVkaXRUaXRsZSh2YWx1ZSl7XG4gICAgICAgIHRpdGxlID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0IGVkaXREZXNjKHZhbHVlKXtcbiAgICAgICAgZGVzY3JpcHRpb24gPSB2YWx1ZTtcbiAgICAgIH0sXG4gICAgICBzZXQgZWRpdERhdGUodmFsdWUpe1xuICAgICAgICBkdWVEYXRlID0gdmFsdWU7XG4gICAgICB9LFxuICAgICAgc2V0IGVkaXRQcmlvcml0eSh2YWx1ZSl7XG4gICAgICAgIHByaW9yaXR5ID0gdmFsdWU7XG4gICAgICB9XG4gICAgfVxuICB9XG5cblxuY29uc3QgZWRpdEljb24gPSBuZXcgSW1hZ2UoKTtcbmVkaXRJY29uLnNyYyA9IGVkaXRJbWFnZTtcbmVkaXRJY29uLnNldEF0dHJpYnV0ZSgnc3R5bGUnLCdoZWlnaHQ6IDIwcHg7Jyk7XG5cbmNvbnN0IGRldGFpbEljb24gPSBuZXcgSW1hZ2UoKTtcbmRldGFpbEljb24uc3JjID0gZGV0YWlscztcbmRldGFpbEljb24uc2V0QXR0cmlidXRlKCdzdHlsZScsJ2hlaWdodDogMjBweDsnKTsiXSwibmFtZXMiOltdLCJzb3VyY2VSb290IjoiIn0=