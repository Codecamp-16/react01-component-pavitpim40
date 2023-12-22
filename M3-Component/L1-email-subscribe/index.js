/**********************************************
 * 🚀 Welcome to the React Practice Lab! 🚀
 *
 *
 * 📝 Problem Statement:
 * - สร้าง Function Component ที่ชื่อว่า EmailSubScribe
 * - นำ Component มา render โดยให้แสดงผลเหมือนกับรูปใน images/example.png
 *
 *
 * 🎯 Objective :
 * - พื้นฐานการเขียน Function Component
 * - การเรียกใช้งาน Function Component
 *
 * 🚧 Challenge : Abstraction, Refactor and Compose
 * - ลองแยก JSX บางส่วนจาก EmailSubscribe ไปสร้างเป็น Component ใหม่
 * - นำ Component ที่เพิ่งสร้างมาแสดงผลใน EmailSubscribe เพื่อให้แสดงเหมือนเดิม
 *
 * 🌈 Enjoy the coding journey, and remember:
 *    "The more you code, the more you learn!" 🚀🌐
 **********************************************/

// Render

const htmlRoot = document.getElementById('root');
const root = ReactDOM.createRoot(htmlRoot);
root.render(
  <div className='app'>
    <div className='card'>
      <div className='card__image'>
        <img
          src='https://images.unsplash.com/photo-1579113800032-c38bd7635818?q=80&w=987&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
          className='card__image--img'
        />
      </div>
      <div className='card__content'>
        <div className='card__content--title'>
          <h3>Get diet and fitness tips in your inbox</h3>
          <p>Eat better and exercise better. signup up for the diet&fitness new letters</p>
        </div>
        <div className='card__content--form'>
          <input className='card__content--input' type='text' />
          <button className='card__content--btn'>Subscribe</button>
        </div>
      </div>
    </div>
  </div>
);
