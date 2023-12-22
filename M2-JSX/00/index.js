/******************************************************************
 * What's JSX
 * Def :  HTML likes Syntax in JS file, but not actual HTML
 *
 * --------------------------------------------------------------
 * Six Keys Concept
 * --------------------------------------------------------------
 * | 1 | One Root Parent ⭐️
 * | 2 | Need Closing Tag / Self Closing Tag
 * | 3 | Insert JS-Expression inside bracket {} ⭐️
 * | 4 | Cannot Render null, undefined, true, false, object(Error)
 * | 5 | JSX Attribute: camelCase (Props) ⭐️
 * | 6 | Styles Obj (inline-style)
 * --------------------------------------------------------------
 *
 * Additional
 * 7. React Fragment <> </>
 * 8. CodeComment
 *****************************************************************/

/**********************************************
 * DIY : Implement React DOM (just Once)
 **********************************************/
const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);

/**********************************************
 * 1 : One Root Parent
 **********************************************/

// const myContent = (
//   <>
//     <h1>Hello JSX</h1>
//     <h1>Hello JSX</h1>
//   </>
// );
// root.render(myContent);
/**********************************************
 * 2 : Need Closing Tag / Self Closing Tag
 **********************************************/
/*
imgUrl : https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
*/
// <img > ❌
// <img ></img> ✅ Open Close tag (Can insert Child)
// <img /> ✅ Self Closing Tag (Can't insert Child)

/* <img src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' /> */
// root.render(<input type='text' placeholder='email' />);

/**********************************************
 * 3 : Insert JS-Expression inside bracket {expression}
 * - Number, ArithMatic Expression // {2 ** 5}
 * - String, Template Literal
 * - Array
 * - Function Result
 * - Ternary, Logical Operator
 **********************************************/

// String
// let user = 'John';
// const content = <h1>Hello...{user}</h1>;

// let finalString = `Hello...${user}`;
// const content = <h1>{finalString}</h1>;

// Array
// const users = ['John', 'Jame', 'Joe'];
// const content = <h1>{['John', 'Jame']}</h1>;
// const content = <h1>{users}</h1>;

// Function Result == Generate Value ==> Expression
function returnSomething(name) {
  return 'Hello ' + name;
}
// const content = <h1>{returnSomething('John')}</h1>;

// const add = function (x,y) {
// 	return x + y
// }
const add = (x, y) => x + y;

const content = <h1>{add(5, 3)}</h1>;

root.render(content);

/**********************************************
 * 4 : Cannot Render null, undefined, true, false, object(Error)
 **********************************************/

/**********************************************
 * 5 : JSX Attribute: camelCase (Props)
 * - class -> className
 * - for -> htmlFor
 * - onclick -> onClick
 * - onsubmit -> onSubmit
 **********************************************/

/**********************************************
 * 6. Styles Obj (inline-style)
 * using Object for describe style
 * all dash CSS property -> camelCase
 * all value in CSS -> JS Datatype
 **********************************************/

/**********************************************
 * 7. Fragment
 * 8. CodeComment
 **********************************************/

/******************************************************************
 * 🚀 CodeCamp Thailand - Relearn Solution Co. 🌐
 *
 * 👤 Author: Pavit Pimchanagul
 * 📅 Date: 2023-12 (CC16)
 *
 * 📜 Description:
 *    [Brief description of the code or file]
 *
 * 🛠️ Modification History:
 *    [Date] - 🧑‍💻 [ModifiedBy]
 *       [Description of changes]
 *
 * 🌟 Elevate your coding journey with Relearn Solution!
 *    Happy coding, fellow CodeCampers! 🚀✨
 ******************************************************************/
