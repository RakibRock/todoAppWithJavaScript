const onSubmit = document.getElementById("submit");

onSubmit.addEventListener("keyup", (event) => {
  if (event.key === "Enter") {
    const variable = event.target.value;
    console.log(variable);
  }
});
onSubmit.addEventListener("blur", (event) => {
  event.target.value = "";
});
