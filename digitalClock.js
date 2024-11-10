const clock = document.querySelector(".clock");

const tick = () => {
  const timeProvider = new Date();
  const hour = timeProvider.getHours();
  const min = timeProvider.getMinutes();
  const sec = timeProvider.getSeconds();

  const html = `<span>${hour}</span> :
    <span>${min}</span> :
    <span>${sec}</span>`;

  clock.innerHTML = html;
};

setInterval(tick, 1000);
