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
// const add = (x, y) => x + y;

// const content = <h1>{add(5, 3)}</h1>;
// root.render(content);

// Ternary
// const content = <h1>{false ? "It's true" : "It's false"}</h1>;

// OR
// let user = 'John';
// const content = <h1>{user || 'Guest'}</h1>;

// And
// let lists = ['HW', 'JW'];
// const content = <h1>{lists.length > 0 && 'I have a todo list'}</h1>;

// IIFE : Intermediately Invoke Function Express
// const content = (
//   <h1>
//     {(function () {
//       return 'A';
//     })()}
//   </h1>
// );

// ❌สิ่งที่หาผลลัพธ์ไม่ได้ ไม่ใช่ Expression
// const content = (
//   <h1>
//     {function () {
//       return 'A';
//     }}
//   </h1>
// );

// root.render(content);
/**********************************************
 * 4 : Cannot Render
 * - null, undefined, true, false (Not Show),
 * - object(Error)
 * - function(Error) == object
 **********************************************/

// let object = {
//   name: 'John',
//   age: 20,
// };

// const content = <h1>{`I'm a ${object.name} Nonlen`}</h1>; // string
// const content = <h1>{`I'm a ${object}`}</h1>; // string

// root.render(content);
/**********************************************
 * 5 : JSX Attribute: camelCase (Props)
 * - class -> className
 * - for -> htmlFor
 * - onclick -> onClick
 * - onsubmit -> onSubmit
 **********************************************/

// const content = <h1 className='text-red'>Hello</h1>;
// const content = (
//   <form onSubmit={() => alert('Submit')}>
//     <h2 className='text-red'>Select Gender</h2>
//     <label htmlFor='gender-male'>Male</label>
//     <input type='radio' id='gender-male' name='gender-form' />

//     <label htmlFor='gender-female'>Female</label>
//     <input type='radio' id='gender-female' name='gender-form' />

//     <label htmlFor='gender-other'>Other</label>
//     <input type='radio' id='gender-other' name='gender-form' />

//     <button type='submit'>save</button>
//     <button type='reset' onClick={() => alert('cancel')}>
//       cancel
//     </button>
//   </form>
// );

// root.render(content);

/**********************************************
 * 6. Styles Obj (inline-style)
 * using Object for describe style
 * all dash CSS property -> camelCase
 * all value in CSS -> JS Datatype (Number,String)
 **********************************************/

// const content = <h1 style='width:50px; color:red'>Hello</h1>; ❌

const styleObj = {
  fontSize: '100px',
  color: 'blue',
};
const content = <h1 style={styleObj}>Hello</h1>;

root.render(content);

/**********************************************
 * 7. Fragment <> </>
 * 8. CodeComment
 **********************************************/

// Html <!-- -->
// JS // /* */
// JSX  {/* */}

{
  /* <h1 style={styleObj}>Hello</h1> */
}

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
