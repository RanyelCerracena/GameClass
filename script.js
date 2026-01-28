const btnAttk = document.getElementById("attackBtn");

btnAttk.addEventListener("click", function (event) {
  event.preventDefault;

  class heroClass {
    constructor(name, age, type) {
      this.name = name;
      this.age = age;
      this.type = type;
    }
  }

  const name = document.getElementById("name").value;
  const age = document.getElementById("age").value;
  const type = document.getElementById("type").value;
  const hero = new heroClass(name, age, type);
  const resultArea = document.getElementById("resultArea");
  const resultOutput = document.getElementById("resultOutput");
  resultArea.classList.remove("hidden");

  function atacar(hero){
    let attack; 

    if (hero.type === "mago") {
      attack = "magia";
    } else if (hero.type === "guerreiro") {
      attack = "espada";
    } else if (hero.type === "monge") {
      attack = "artes marciais";
    } else if (hero.type === "ninja") {
      attack = "shuriken";
    }

    let msg = `O ${hero.type} ${hero.name} atacou usando ${attack}`;
    resultOutput.innerText = msg;
  };
  atacar(hero);
});
