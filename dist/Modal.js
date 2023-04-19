"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
exports.displayModal = displayModal;
exports.hideModal = hideModal;
require("./Modal.css");
var _react = _interopRequireDefault(require("react"));
var _jsxRuntime = require("react/jsx-runtime");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
// fonction d'affichage de la modale
function displayModal() {
  var modal = document.querySelector("#confirmation");
  modal.style.display = "block";
}
// fonction de cache de la modale
function hideModal() {
  var modal = document.querySelector("#confirmation");
  modal.style.display = "none";
}
function Modal(_ref) {
  var Text = _ref.Text;
  return /*#__PURE__*/(0, _jsxRuntime.jsxs)("div", {
    id: "confirmation",
    className: "modal",
    children: [/*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      onClick: hideModal,
      className: "close-modal",
      children: "X"
    }), /*#__PURE__*/(0, _jsxRuntime.jsx)("p", {
      className: "text-modal",
      children: Text
    })]
  });
}
var _default = Modal;
exports["default"] = _default;