/**********************************************
 * Ways to Manipulate HTML
 * 1. Vanilla JS-DOM
 * 2. React (using createElement)
 * 3. React (using JSX)
 **********************************************/

/**********************************************
 * 1. Vanilla JS-DOM (Imperative way!)
 **********************************************/
// const root = document.getElementById('root');

// const h1 = document.createElement('h1');
// h1.innerText = 'Hello from JS-DOM';

// root.append(h1);

/**********************************************
 * Pre Setup for React
 * - add <div id="root"></div>
 * - add React , ReactDOM CDN script
 **********************************************/

/**********************************************
 * 2. React (using createElement)
 **********************************************/

// const h1 = React.createElement(
//   'h1',
//   { className: 'text-purple' },
//   'Hello from React.createElement()'
// );

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h1);

/**********************************************
 * 3. React (using JSX)
 **********************************************/

// const h1 = <h1 className='text-purple'>Hello from JSX</h1>;
// console.dir(h1);

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(h1);
// root.render(<h1 className='text-purple'>Hello from JSX</h1>)

/**********************************************
 **************** Question ********************
 **********************************************
 * 1. What's DOM Element ? Try to console.dir and investigate it
 *
 *
 * 2. What's React Element ? Try to console.dir and investigate it
 *
 *
 * 3. How many way to create React Element ?
 *
 *
 * 4. What's JSX ?
 *
 *
 * 5. How Different between DOM element and React Element ?
 *
 *
 * 6. Benefit of Babel & How to using in basic HTML Project?
 *
 *
 * 7. How to using React Library in basic HTML Project ?
 *
 *
 * 8. What's Virtual DOM
 * ********************************************
 **********************************************/
