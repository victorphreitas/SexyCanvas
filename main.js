//grab the buttons 
const container =  document.getElementById("container");
const sinBtns = document.querySelectorAll(".container-main-buttons button");
const innerChildBtns = document.querySelectorAll(".container-child-buttons button");
const textAreas = document.querySelectorAll("textarea");
let checkButton;

//explanation object goes here
const explanationObj = {
  greed: ["explanationGreed ", "example1Greed"],
  lust: ["explanationLust", "example1Lust"],
  pride: ["explanationPride", "example1Pride"],
  envy: ["explanationEnvy", "example1Envy"],
  sloth: ["explanationSloth", "example1Sloth"],
  wrath: ["explanationWrath", "example1Wrath"],
  gluttony: ["explanationGluttony", "example1Gluttony"],
  innerChild: ["explanationInnerChild", "example1InnerChild"],
  curiosity: ["explanationCuriosity", "example1Curiosity"],
  freedom: ["explanationFreedom", "example1Freedom"],
  love: ["explanationLove", "example1Love"],
  spirituality: ["explanationSpirituality", "example1Spitituality"],
  fun: ["explanationFun", "example1Fun"],
  safety: ["explanationSafety", "example1Safety"],
  reward: ["explanationReward", "example1Reward"],
  belonging: ["explanationBelongin", "example1Belonging"]
}


//event lisnteners to the sin buttons
sinBtns.forEach((button)=>{
  if (button.textContent !== "Enviar >>>"){
    button.addEventListener("click", explain);
  }
});

//event listener to the inner child buttons
innerChildBtns.forEach((button)=>{
  button.addEventListener("click", explain);
})

//Email js library goes here
window.onload = function() {
  document.getElementById('template_fys9v8f').addEventListener('submit', function(event) {
      event.preventDefault();
      // generate a five digit number for the contact_number variable
      this.contact_number.value = Math.random() * 100000 | 0;
      // these IDs from the previous steps
      emailjs.sendForm('service_3rzk32a', 'template_fys9v8f', this)
          .then(function() {
              console.log('SUCCESS!');
              alert("Email enviado com sucesso!")
              document.querySelectorAll("textarea").forEach(textArea=>{
                textArea.value = ""
             })
          }, function(error) {
              console.log('FAILED...', error);
              alert("Preencha o campo nome e email, por favor.")
          });
  });
}

//to swing between examples and explanations when you click the same button again
let tellEx = true


function explain(event) {
   if (event.target.parentElement.className === "container-main-buttons" && event.target.textContent !== "Enviar >>>"){
     if (event.target.textContent === "ganancia"){
       if (tellEx === true){
        document.querySelector("#explanation").innerText = explanationObj.greed[0]
        tellEx = false
       } else {
        document.querySelector("#explanation").innerText = explanationObj.greed[1]
        tellEx = true
       }
       document.querySelector("textarea[name=message2]").focus()
     } else if (event.target.textContent === "client"){
      const clientExp = "Client esta expliacada aqui!"
      document.querySelector("#explanation").innerText = clientExp
      document.querySelector("textarea[name=message1]").focus()
     } else if (event.target.textContent === "luxuria"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.lust[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.lust[1]
        tellEx = true
      }
      document.querySelector("textarea[name=message3]").focus()
     } else if (event.target.textContent === "vaidade"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.pride[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.pride[1]
        tellEx = true
      }
      document.querySelector("textarea[name=message4]").focus()
     } else if (event.target.textContent === "inveja"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.envy[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.envy[1]
        tellEx = true
      }
      document.querySelector("textarea[name=message5]").focus()
     } else if (event.target.textContent === "preguica"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.sloth[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.sloth[1]
        tellEx = true
      } 
      document.querySelector("textarea[name=message6]").focus()
     } else if (event.target.textContent === "gula"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.gluttony[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.gluttony[1]
        tellEx = true
      }
      document.querySelector("textarea[name=message8]").focus()
     } else if (event.target.textContent === "ira"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.wrath[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.wrath[1]
        tellEx = true
      }
      document.querySelector("textarea[name=message7]").focus()
     }
   } else if (event.target.parentElement.className === "container-child-buttons"){
    if (event.target.textContent === "curiosidade"){
      const curiosidadeExp = "Curiosidade esta expliacada aqui!"
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.curiosity[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.curiosity[1]
        tellEx = true
      }
    } else if (event.target.textContent === "liberdade"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.freedom[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.freedom[1]
        tellEx = true
      }
    } else if (event.target.textContent === "amor"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.love[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.love[1]
        tellEx = true
      }
    } else if (event.target.textContent === "espiritualidade"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.spirituality[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.spirituality[1]
        tellEx = true
      }
    } else if (event.target.textContent === "diversao"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.fun[0] 
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.fun[1]
        tellEx = true
      }
    } else if (event.target.textContent === "seguranca"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.safety[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.safety[1]
        tellEx = true
      }
    } else if (event.target.textContent === "recompensa"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.reward[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.reward[1]
        tellEx = true
      }
    } else if (event.target.textContent === "pertencimento"){
      if (tellEx === true) {
        document.querySelector("#explanation").innerText = explanationObj.belonging[0]
        tellEx = false
      } else {
        document.querySelector("#explanation").innerText = explanationObj.belonging[1]
        tellEx = true
      }
    }
    document.querySelector("textarea[name=message9]").focus() 
   }
  event.preventDefault();
} 

