(() => {
  const SECOND = 1000; //1000 เท่ากับหนึ่งวินาที
  const MINUTE = SECOND * 60; // 60 นาที
  const HOUR = MINUTE * 60;
  const DAY = HOUR * 24;

  function setElementinnerText(id, text) {
    const element = document.getElementById(id);
    element.innerText = text;
  }

  function countDown() {
    // ฟังก์ชั่น data() เรียกใช้การ method getTime() เพื่อดึงค่าเวลา
    // method getTime จะดึงข้อมูลเป็น unix timestamp
    // Unix Timestamp คือเวลาในหน่วยวินาที
    const now = new Date().getTime();
    const newYear = new Date("December 31, 2023 23:59:59").getTime();
    const unixTimeLeft = newYear - now;

    //console.log(unixTimeLeft);

    //const daysElem = document.getElementById('days');
    //daysElem.innerHTML = 'Hello' //มันก็แสดง Hello ขึ้นมา
    //.floor มีเศษเท่าไหร่ให้ปัดลง
    //daysElem.innerHTML = Math.floor(unixTimeLeft / DAY);
    //สร้างฟังชันเข้ามาช่วยเพื่อให้เขียนโค้ดสั้นลง
    setElementinnerText("days", Math.floor(unixTimeLeft / DAY));

    //const hoursElem = document.getElementById('hours');
    // เวลาทั้งหมดที่ไปถึงวันปีใหม่ หารด้วย จำนวนวัน เอาเศษที่ได้มา หารด้วยชั่วโมง ได้เท่าไหร่ปัดลง
    //hoursElem.innerHTML = Math.floor(unixTimeLeft % DAY / HOUR);

    setElementinnerText("hours", Math.floor((unixTimeLeft % DAY) / HOUR));
    setElementinnerText("minutes", Math.floor((unixTimeLeft % HOUR) / MINUTE));
    setElementinnerText(
      "seconds",
      Math.floor((unixTimeLeft % MINUTE) / SECOND)
    );
  }
  var audio = document.getElementById("myaudio");
  audio.onvolumechange = 0.2;

  function run() {
    countDown();
    //setInterval ตัวนับเวลาถอยหลัง เป็นวินาทีคือ 1000
    setInterval(countDown, SECOND);
  }
  run();
})();
