//grab the buttons 
const container =  document.getElementById("container");
const sinBtns = document.querySelectorAll(".container-main-buttons button");
const innerChildBtns = document.querySelectorAll(".container-child-buttons button");
const textAreas = document.querySelectorAll("textarea");
let checkButton;


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



function explain(event) {
   if (event.target.parentElement.className === "container-main-buttons" && event.target.textContent !== "Enviar >>>"){
     if (event.target.textContent === "ganancia"){
       const gananciaExp = "Ganancia esta expliacada aqui!"
       document.querySelector("#explanation").innerText = gananciaExp
       document.querySelector("textarea[name=message2]").focus()
     } else if (event.target.textContent === "client"){
      const clientExp = "Client esta expliacada aqui!"
      document.querySelector("#explanation").innerText = clientExp
      document.querySelector("textarea[name=message1]").focus()
     } else if (event.target.textContent === "luxuria"){
      const luxuriaExp = "Luxuria esta expliacada aqui!"
      document.querySelector("#explanation").innerText = luxuriaExp
      document.querySelector("textarea[name=message3]").focus()
     } else if (event.target.textContent === "vaidade"){
      const vaidadeExp = "Vaidade esta expliacada aqui!"
      document.querySelector("#explanation").innerText = vaidadeExp
      document.querySelector("textarea[name=message4]").focus()
     } else if (event.target.textContent === "inveja"){
      const invejaExp = "Inveja esta expliacada aqui!"
      document.querySelector("#explanation").innerText = invejaExp
      document.querySelector("textarea[name=message5]").focus()
     } else if (event.target.textContent === "preguica"){
      const preguicaExp = "Preguica esta expliacada aqui!"
      document.querySelector("#explanation").innerText = preguicaExp 
      document.querySelector("textarea[name=message6]").focus()
     } else if (event.target.textContent === "gula"){
      const gulaExp = "Gula esta expliacada aqui!"
      document.querySelector("#explanation").innerText = gulaExp
      document.querySelector("textarea[name=message8]").focus()
     } else if (event.target.textContent === "ira"){
      const iraExp = "Ira esta expliacada aqui!"
      document.querySelector("#explanation").innerText = iraExp
      document.querySelector("textarea[name=message7]").focus()
     }
   } else if (event.target.parentElement.className === "container-child-buttons"){
    if (event.target.textContent === "curiosidade"){
      const curiosidadeExp = "Curiosidade esta expliacada aqui!"
      document.querySelector("#explanation").innerText = curiosidadeExp
    } else if (event.target.textContent === "liberdade"){
      const liberdadeExp = "Liberdade esta expliacada aqui!"
      document.querySelector("#explanation").innerText = liberdadeExp
    } else if (event.target.textContent === "amor"){
      const amorExp = "Amor esta expliacada aqui!"
      document.querySelector("#explanation").innerText = amorExp
    } else if (event.target.textContent === "espiritualidade"){
      const espiritualidadeExp = "Espiritualidade esta expliacada aqui!"
      document.querySelector("#explanation").innerText = espiritualidadeExp
    } else if (event.target.textContent === "diversao"){
      const diversaoExp = "Diversao esta expliacada aqui!"
      document.querySelector("#explanation").innerText = diversaoExp
    } else if (event.target.textContent === "seguranca"){
      const segurancaExp = "Seguranca esta expliacada aqui!"
      document.querySelector("#explanation").innerText = segurancaExp
    } else if (event.target.textContent === "recompensa"){
      const recompensaExp = "Recompensa esta expliacada aqui!"
      document.querySelector("#explanation").innerText = recompensaExp
    } else if (event.target.textContent === "pertencimento"){
      const pertencimentoExp = "Pertencimento esta expliacada aqui!"
      document.querySelector("#explanation").innerText = pertencimentoExp
    }
    document.querySelector("textarea[name=message9]").focus() 
   }
  event.preventDefault();
} 





let val;

val = container;
val = sinBtns;
val = innerChildBtns;
val = textAreas;

// console.log(val)