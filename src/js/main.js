import Home from "./components/home";
const appDiv = document.getElementById("app");

export default () => {
appDiv.innerText = Home();

}