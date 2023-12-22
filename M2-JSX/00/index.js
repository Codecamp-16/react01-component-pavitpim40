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
 * 7. Fragment
 * 8. CodeComment
 *****************************************************************/

/**********************************************
 * DIY : Implement React DOM (just Once)
 **********************************************/
const root = ReactDOM.createRoot(document.getElementById('root'));

/**********************************************
 * 1 : One Root Parent
 **********************************************/
// root.render(
//   <div>
//     <h1>Name : Pavit Pimchanagul</h1>
//     <h2>Hobby : Coding </h2>
//   </div>
// );

// root.render(
//   <ul>
//     <li>Home</li>
//     <li>About US</li>
//   </ul>
// );

/**********************************************
 * 2 : Need Closing Tag / Self Closing Tag
 **********************************************/
/*
imgUrl : https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D
*/
// <input> <img>

// root.render(<input type='password'></input>); //❌
// root.render(<input type='password' />); //✅
// root.render(
//   <img src='https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' />
// );

/**********************************************
 * 3 : Insert JS-Expression inside bracket {}
 * - Number, ArithMatic Expression
 * - String, Template Literal
 * - Array
 * - Function Result
 * - Ternary, Logical Operator
 **********************************************/

// ✨
// root.render(<h1>1+2</h1>); //❌
// root.render(<h1>{1 + 2}</h1>); //✅

// ✨
// const fullName = 'John Doe';
// root.render(<h1>{`My name is ${fullName}`}</h1>); //✅

// ✨
// root.render(<h1>{['Jane', 'Noon', 'Bow']}</h1>);

// ✨
// const add = (x, y) => x + y;
// root.render(<h1>{add(5, 6)}</h1>);

// ✨
// let isPlaying = false;
// root.render(<h1>{isPlaying ? 'Playing' : 'Pause'}</h1>);

// ✨
// const todoList = ['Hw', 'Movie'];
// root.render(<ul>{todoList.length > 0 ? todoList : 'empty todo'}</ul>);

// ✨
// const user = null;
// const user = {
//   name: 'John',
// };
// root.render(<h1>{user ? user.name : 'Guest'}</h1>);

/**********************************************
 * 4 : Cannot Render null, undefined, true, false, object(Error)
 **********************************************/

// let a = null;
// let b = undefined;
// let c = true;
// let d = false;
// let e = {
//   name: 'John',
// };

// root.render(<h1>{a}</h1>);
// root.render(<h1>{`Hi vanish value ${a}`}</h1>);

/**********************************************
 * 5 : JSX Attribute: camelCase (Props)
 * - class -> className
 * - for -> htmlFor
 * - onclick -> onClick
 * - onsubmit -> onSubmit
 **********************************************/

// root.render(
//   <>
//     <h1 className='text-red'>Survey Form</h1>
//     <label htmlFor='kid'>Kid </label>
//     <input type='radio' name='age' id='kid' />
//     <label htmlFor='adult'>Adult </label>
//     <input type='radio' name='age' id='adult' />
//     <label htmlFor='elder'>Elder </label>
//     <input type='radio' name='age' id='elder' />
//     <button type='button' onClick={() => console.log('submit')}>
//       submit
//     </button>
//   </>
// );

// root.render(
//   <form onSubmit={() => console.log('summit')}>
//     <h1 className='text-red'>Survey Form</h1>
//     <label htmlFor='kid'>Kid </label>
//     <input type='radio' name='age' id='kid' />
//     <label htmlFor='adult'>Adult </label>
//     <input type='radio' name='age' id='adult' />
//     <label htmlFor='elder'>Elder </label>
//     <input type='radio' name='age' id='elder' />
//     <button type='submit'>submit</button>
//   </form>
// );

/**********************************************
 * 6. Styles Obj (inline-style)
 * using Object for describe style
 * all dash CSS property -> camelCase
 * all value in CSS -> JS Datatype
 **********************************************/

// const styleObj = {
//   fontSize: '80px',
//   color: 'red',
//   textDecoration: 'underline',
// };
// const reactElement = <h1 style={styleObj}>Hello React</h1>;
// root.render(reactElement);

/**********************************************
 * 7. Fragment
 * 8. CodeComment
 **********************************************/

// root.render(
//   <form onSubmit={() => console.log('summit')}>
//     <h1 className='text-red'>Survey Form</h1>
//     <label htmlFor='kid'>Kid </label>
//     <input type='radio' name='age' id='kid' />
//     <label htmlFor='adult'>Adult </label>
//     <input type='radio' name='age' id='adult' />
//     <label htmlFor='elder'>Elder </label>
//     <input type='radio' name='age' id='elder' />
//     <button type='submit'>submit</button>
//   </form>
// );

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
