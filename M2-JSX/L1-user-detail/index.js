/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 * 🚀 Relearn Solution - All Rights Reserved 🚀
 *
 * 📝 Problem Statement:
 * - render หน้า web โดยใช้ JSX ดังนี้
 * - แสดงชื่อ ชื่อจริง นามสกุลของตัวเอง ใน tag <h1>
 * - แสดงอายุใน tag <p> (ให้เอาปีปัจจุบันลบด้วยปีเกิด)
 *
 * 🎯 Objective :
 * - พื้นฐานการใช้งาน JSX
 *
 * 🚧 Challenge
 * - แสดงผลโดยใช้ตัวแปรเก็บข้อมูลแทนการ HardCode ลง JSX
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

// ReactDOM (Render)

const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);

let fullName = 'Pavit Pimchanagul';
let age = 2023 - 2000;

// const content = (
// 	<>
//     <h1>{fullName}</h1>
//     <p>{age}</p>
//   </>
// )
root.render(
  <>
    <h1>{fullName}</h1>
    <p>{age}</p>
  </>
);
