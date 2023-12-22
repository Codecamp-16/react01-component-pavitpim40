/**********************************************
 * Ways to Manipulate HTML
 * 1. Vanilla JS-DOM
 * 2. React (using createElement)
 * 3. React (using JSX: Javascript Syntax Extension)
 **********************************************/

/**********************************************
 * 1. Vanilla JS-DOM (Imperative way!!!!)
 **********************************************/

// 1️⃣ Create UI by document
// const h1 = document.createElement('h1'); //RealDOM
// console.dir(h1);
// h1.innerText = 'Hello from JS-DOM';
// h1.setAttribute('class', 'text-purple');

// 2️⃣ Render by document
// const root = document.getElementById('root');
// root.append(h1);

/**********************************************
 * Pre Setup for React
 * - add <div id="root"></div>
 * - add React , ReactDOM CDN script
 **********************************************/

/**********************************************
 * 2. React (using createElement)
 **********************************************/
// console.log(window, React, ReactDOM); // Global

// 1️⃣ React : Create UI
// const h1 = React.createElement('h1', null, 'Hello from React'); // VirtualDom
// console.log(h1);

// 2️⃣ ReactDOM : Render
// const htmlRoot = document.getElementById('root'); // เลือกจุด render
// const root = ReactDOM.createRoot(htmlRoot); // ให้ ReactDOM รู้ว่าจะ render ที่ไหน
// root.render(h1); // ทำการ render (Paint on browser)

/**********************************************
 * 2B. React (using createElement with Child)
 **********************************************/
// console.log(window, React, ReactDOM); // Global

// 1️⃣ React : Create UI

// Child
// React.createElement(tag, attributeObj(props), ...children)
// const h1 = React.createElement('h1', { className: 'text-purple' }, '1st Child'); // VirtualDom ==> Tag
// const h2 = React.createElement('h2', { onClick: () => alert('Hi') }, '2nd Child'); // VirtualDom ==> Tag
// const h3 = React.createElement('h3', null, '3rd Child'); // VirtualDom ==> Tag

// Challenge <script src="index.js" crossOrigin></script>
// React.createElement("script", {src:"index.js", crossOrigin:true})

// Challenge <button class="red" type="submit" onclick="alert("Hi)">Click Me</button>
// React.createElement("button",{className:"red", type:"submit", onClick: ()=> alert("Hi")} ,"ClickMe" )

// Parent
// const div = React.createElement('div', null, h1, h2, h3); // VirtualDom ==> Tag

// 2️⃣ ReactDOM : Render
// const htmlRoot = document.getElementById('root');
// const root = ReactDOM.createRoot(htmlRoot);
// root.render(div);
/**********************************************
 * 3. React (using JSX)
 **********************************************/
// const h1 = React.createElement('h1', { className: 'text-purple' }, 'Hello From React');
// console.log(h1);

// JSX : Html likes syntax in JS-File
// const h1 = <h1 className='text-purple'>Hello From React</h1>;
// console.log(h1);
// ReactElement === VirtualDOM

const button = <button>Click me</button>;

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(button);
/**********************************************
 **************** Question ********************
 **********************************************
 * 1. What's DOM Element ? Try to console.dir and investigate it
 *
 *  - JS Object (Heavy) => ตัวแทน HTML Tag ในรูปของ Object
 *	- ถ้าต้องการแก้ไข HTML TAG => แก้ไขผ่าน Object
 *
 * 2. What's React Element ? Try to console.dir and investigate it
 *
 * 	- JS Object (Light) => 	ตัวแทน HTML Tag ในรูปของ Object
 * 	- ถ้าต้องการแก้ไข HTML TAG => แก้ไขผ่าน Object
 *
 * 3. How many way to create React Element ?
 *	- React.createElement(tag, attributeObj, ...children)
 *	- JSX : <tag  attribute="value" >children</tag>
 *
 * 4. What's JSX ?
 *  - HTML like syntax ใน JS File
 *  - อีกหนึ่งรูปแบบของ React Element === Virtual DOM
 *  - Note DOM Element === RealDOM
 *
 * 5. How Different between DOM element and React Element ?
 *
 *  - React Element เบากว่า DOM Element
 *  - React Element ต้องใช้ ReactDOM ในการ Render
 *  - DOM Element ต้องใช้ document ในการ Render
 *
 * 6. Benefit of Babel & How to using in basic HTML Project?
 *
 * 	- ทำให้เขียน JSX ในไฟล์ JS ได้
 * 	- วิธีใช้งาน
 *  	-  import babel standalone (by CDN)
 * 		- เพิ่ม type="text/babel" ใน <script>
 *
 * 7. How to using React Library in basic HTML Project ?
 *
 * - import จาก CDN
 *
 * 8. What's Virtual DOM
 *
 *   Light weight Javascript Object ที่สามารถเก็บข้อมูล
 *   และเป็นตัวแทน (model & represent) ของ HTML tag ได้
 * ********************************************
 **********************************************/

// React Element === VirtualDOM ==> NODE ==> 1 TAG
{
  /* <h1>Hello</h1>; */
}
