const clock = document.querySelector(".clock");
const button = document.querySelector(".button");

let convert12Hour = true;

const tick = () => {
  // const times = new Date();
  const timeProvider = new Date();

  let hour = timeProvider.getHours();
  let min = timeProvider.getMinutes();
  let sec = timeProvider.getSeconds();

  if (convert12Hour && hour > 12) {
    hour = hour - 12;
  }

  // Add leading zeros if needed 
  hour = hour < 10 ? `0${hour}` : hour;
  min = min < 10 ? `0${min}` : min;
  sec = sec < 10 ? `0${sec}` : sec;

  const html = `<span>${hour}</span> :
  <span>${min}</span> :
  <span>${sec}</span>`;

  clock.innerHTML = html;
};
let i = 0;  
button.addEventListener("click", (e) => {
  e.preventDefault();
  i++;
  if(i%2==0){  
    button.innerHTML= ` <i class="fa fa-exchange" aria-hidden="true"></i>  24-Hour Format`;
    convert12Hour = !convert12Hour; // Toggle between 24-hour and 12-hour format
  }
  else{
    button.innerHTML= ` <i class="fa fa-exchange" aria-hidden="true"></i>  12-Hour Format`;
    convert12Hour = !convert12Hour; // Toggle between 24-hour and 12-hour format
  }
});

setInterval(tick, 1000);
