/**
 * 
 * <div id="parent">
 * <div id="child">
 *        <h1>I am nested</h1>
 *     </div>
 *      </div>
 * 
 * 
 * 
 */

const parent = React.createElement("div", {id: "parent"},[React.createElement("div", {id: "child"},[ React.createElement("h1",{}, "I am nested"), React.createElement("h2",{}, "I am nested")]),React.createElement("div", {id: "child 2"},[ React.createElement("h1",{}, "I am nested"), React.createElement("h2",{}, "I am nested")])]);




console.log(parent); // object 
   
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(parent); // this render method is converting object to tags and put into dom