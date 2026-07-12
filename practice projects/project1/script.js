const list = document.querySelectorAll('.button');
const body = document.querySelector("body")

list.forEach( (button)=>{
  console.log(button);
  button.addEventListener("click",function(e){
    console.log(e);
    console.log(e.target);
    const colors = {
      red: "#ff9999",
      blue: "#999BFF",
      orange: "#FFD199",
      violet: "#D499FF",
      green: "#9EFF99"
    };
    
    body.style.backgroundColor = colors[e.target.id];
  })
})