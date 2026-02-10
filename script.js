function toggle(btn){
  const text = btn.previousElementSibling;
  text.classList.toggle("show");
  btn.innerText = text.classList.contains("show") ? "Read Less" : "Read More";
}

const counters = document.querySelectorAll('.counter');
if(counters.length){
  counters.forEach(counter=>{
    const target = +counter.dataset.target;
    let count = 0;
    const step = target / 200;
    function update(){
      count += step;
      if(count < target){
        counter.innerText = Math.ceil(count);
        requestAnimationFrame(update);
      } else counter.innerText = target;
    }
    update();
  });
}

