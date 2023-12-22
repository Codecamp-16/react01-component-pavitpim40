/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 * Relearn Solution - All Rights Reserved
 *
 * 🎯 Objective : การใช้ผลลัพธ์ของฟังก์ชันแสดงผลใน JSX
 *
 * 📝 Problem Statement:
 * - ให้สร้างฟังก์ชัน calcBMI เพื่อคำนวณค่า BMI (BMI = m / h^2)
 * - m คือมวล , h คือความสูง
 * - ให้ render หน้า web เพื่อแสดงค่า BMI ใน tag <h3>
 *
 *
 *
 * 🚧 Challenge
 * - ใช้ตัวแปรเก็บข้อมูลแทนการ HardCode
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

// ####### Calculation (Javascript)

function calcBMI(mass, height) {
  return mass / height ** 2;
}

let result = calcBMI(60, 1.75);
console.log(result.toFixed(2));

//########## Presentation (React, JSX)

// const content = <h3>{result.toFixed(2)}</h3>;
const content = <h3>{calcBMI(60, 1.75)}</h3>;

//########### Render (ReactDOM)
const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);

root.render(content);
