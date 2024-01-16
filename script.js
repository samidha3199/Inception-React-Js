// Task:
// To create hello world using HTML, JAVASCRIPT AND REACT JS 

// JAVASCRIPT 

// const heading = document.createElement("h1");
// heading.innerHTML = "Hello World from Javascript!";
// const root = document.getElementById("root");
// root.appendChild(heading);



// REACT 

// const heading = React.createElement("h1",{},"Hello World from React.");
// const root = ReactDOM.createRoot(document.getElementById("root"));  
// root.render(heading);

// const heading = React.createElement("h1",{},"Hello World!");
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(heading);

{/* <div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
    </div>
</div> */}

// const parent = React.createElement("div",{id:"parent"},
//         React.createElement("div",{id:"child"},
//         React.createElement("h1",{id:"h1"},"Hi, I am an h1 tag")));
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

{/* <div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
        <h2>Hi, I am an h2 tag</h2>
    </div>
</div> */}

// const parent = React.createElement("div",{id:"parent"},
//         React.createElement("div",{id:"child"},
//         [React.createElement("h1",{},"Hi, I am an h1 tag"),
//         React.createElement("h2",{},"Hi, I am an h2 tag")]))
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);

{/* <div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
        <h2>Hi, I am an h2 tag</h2>
    </div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
        <h2>Hi, I am an h2 tag</h2>
    </div>
</div> */}


// const parent = React.createElement("div",{id:"parent"},
//         [
//             React.createElement("div",{id:"child1"},
//             [
//                 React.createElement("h1",{},"Hi, I am an h1 tag"),
//                 React.createElement("h2",{},"Hi, I am an h2 tag")
//             ]),
//             React.createElement("div",{id:"child2"},
//             [
//                 React.createElement("h1",{},"Hi, I am an h1 tag"),
//                 React.createElement("h2",{},"Hi, I am an h2 tag"),
//             ])
//         ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);


{/* <div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
        <h2>Hi, I am an h2 tag</h2>
    </div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
        <h2>Hi, I am an h2 tag</h2>
    </div>
    <div>
        <h1>Hi, I am an h1 tag</h1>
        <h2>Hi, I am an h2 tag</h2>
    </div>
</div> */}

// const parent = React.createElement("div",{id:"parent"},
//     [
//         React.createElement("div",{id:"child1"},
//         [
//             React.createElement("h1",{},"I am an h1 tag, Hello World"),
//             React.createElement("h2",{},"Hi, I am an h2 tag"),
//         ]),
//         React.createElement("div",{id:"child2"},
//         [
//             React.createElement("h1",{},"I am an h1 tag"),
//             React.createElement("h2",{},"Hi, I am an h2 tag"),
//         ]),
//         React.createElement("div",{id:"child3"},
//         [
//             React.createElement("h1",{},"I am an h1 tag"),
//             React.createElement("h2",{},"Hi, I am an h2 tag"),
//         ]),
//     ]);
// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(parent);




const parent = React.createElement("div",{id:"parent"},
        React.createElement("div",{id:"child"},
        [React.createElement("h1",{},"Hi, I am an h1 tag"),
        React.createElement("h2",{},"Hi, I am an h2 tag")]))
console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);


// React.createElement is an Object 

// There are lot of other package/library makes our app Fast,scalable, and production ready app. 