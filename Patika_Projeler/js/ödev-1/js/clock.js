function getUserName() {
  let userName = prompt("Lütfen adınızı giriniz:");

  if (!userName) {
    userName = "Misafir";
  }
  userName = userName.toUpperCase();

  document.getElementById("myName").innerText = userName;

  return userName;
}

function showTime() {
  const date = new Date();

  let hour = date.getHours();
  let minute = date.getMinutes();
  let second = date.getSeconds();

  hour = hour < 10 ? "0" + hour : hour;
  minute = minute < 10 ? "0" + minute : minute;
  second = second < 10 ? "0" + second : second;

  const time = hour + ":" + minute + ":" + second;

  document.getElementById("myClock").innerText = time;

  setTimeout(showTime, 1000);
}

getUserName();
showTime();
