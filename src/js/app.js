import { toogleSwitch } from "./toogleSwitch";

//to być musi, inaczej hmr się nie odpalą
//https://webpack.js.org/api/hot-module-replacement/
if (module.hot) {
	module.hot.accept();
}

document.addEventListener("DOMContentLoaded", function () {
	toogleSwitch();
});
