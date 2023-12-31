/******************************************************************
 * What's Function Component
 * Definition :
 * - Javascript function that return / render UI(JSX)
 * - Custom JSX TAG
 * --------------------------------------------------------------
 * Syntax : Declare
 * --------------------------------------------------------------
 * function MyComponent () {
 * 		return <h1>What Ever you want to render</h1>
 * }
 *
 * --------------------------------------------------------------
 * Syntax : Call
 * --------------------------------------------------------------
 * <MyComponent /> ✅
 *  MyComponent() ❌
 * --------------------------------------------------------------
 * Benefits
 * --------------------------------------------------------------
 * | 1 | Separation of Concern ⭐️
 * | 2 | Reusable ⭐️
 * | 3 | Composable  ⭐️
 * | 4 | Easy to Maintain ⭐️
 * --------------------------------------------------------------
 *****************************************************************/

/**********************************************
 * DIY : create root from ReactDOM
 **********************************************/
const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);

/**********************************************
 * Ex-1 : UserProfile
 **********************************************/

// // Component
// function UserProfile() {
//   return (
//     <>
//       <h1>Name : John ChawRai</h1>
//       <h2>Age : 32</h2>
//     </>
//   );
// }

// const userProfile = (
//   <>
//     <h1>Name : John ChawRai</h1>
//     <h2>Age : 30</h2>
//   </>
// );

// root.render(
//   <>
//     <UserProfile />
//   </>
// );

/*
 const h1 = <h1>Hello World</h1>
 const h1 = React.createElement("button")
*/

/**********************************************
 * Ex-1B : Compose
 **********************************************/

// (2nd Level - Child)
// function UserName() {
//   return <h1>Name : John ChawRai</h1>;
// }
// function UserAge() {
//   return <h2>Age : 32</h2>;
// }

//Compose (1st Level - Parent)
// function UserProfile() {
//   return (
//     <>
//       <UserName />
//       {/*<h1>Name : John ChawRai</h1>; */}
//       <UserAge />
//       {/*  <h2>Age : 32</h2> */}
//     </>
//   );
// }

// FC = ฟังก์ชันที่ return JSX
// FC = ฟังก์ชันสำหรับ Render =>  <Component />
// root.render(
//   <>
//     <UserProfile />
//   </>
// );

/*
 const h1 = <h1>Hello World</h1>
 const h1 = React.createElement("button")
*/
/**********************************************
 * Ex-2 : CC-DEV Landing Page (Refactor to Component)
 **********************************************/
function Header() {
  return (
    <header className='container header'>
      <nav className='nav'>
        <div className='logo'>
          <h2>CodeCamp</h2>
        </div>
        <div className='nav_menu' id='nav_menu'>
          <ul className='menu_list'>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                account
              </a>
            </li>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                about
              </a>
            </li>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                service
              </a>
            </li>
            <li className='nav_menu_item'>
              <a href='#' className='nav_menu_link'>
                contact
              </a>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}

function Hero() {
  return (
    <section className='wrapper'>
      <div className='container'>
        <div className='grid-cols-2'>
          <div className='grid-item-1'>
            <h1 className='main-heading'>
              Welcome to <span>CodeCamp</span>
              <br />
              Develop anything.
            </h1>
            <p className='info-text'>
              Build a beautiful, modern website with flexible components built from scratch.
            </p>
            <div className='btn_wrapper'>
              <button className='btn view_more_btn'>view all pages</button>
              <button className='btn documentation_btn'>documentation</button>
            </div>
          </div>
          <div className='grid-item-2'>
            <div className='team_img_wrapper'>
              <img src='https://i.ibb.co/YkbPPn3/team.png' alt='team-photo' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function App() {
  return (
    <div className='app'>
      <Header />
      <Hero />
    </div>
  );
}

root.render(<App />);

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
