 
 
  # using javascript
  <script>
        const heading = document.createElement("h1");
        heading.innerHTML = "Hello world from javascript";

        const root = document.getElementById("root");

        root.appendChild(heading);
    </script>


  #  using React.js
     <script>
        const heading = React.createElement("h1", {}, "Hello world from React!");
   
        const root = ReactDOM.createRoot(document.getElementById("root"));

        root.render(heading);
    </script>

    {} => where will give attribute to the tags
    example id: "heading"

    at the end of the heading or any tags are javascript object. this object is an reactElememnt ReactElement(object) =>HTML(Browser understands)


  # writing React in app.js 
    const heading = React.createElement("h1", {id:"heading"}, "Hello world from React!");

console.log(heading); // object 
   
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading); // this render method is converting object to tags and put into dom