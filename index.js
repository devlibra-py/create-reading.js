function doubleH1() {
  const h1 = document.getElementById("titulo");
  console.log(h1);

  const newH1 = document.createElement("h1");
  newH1.innerHTML = "<h1>Novo Titulo</h1>";

  document.body.appendChild(newH1);
}
