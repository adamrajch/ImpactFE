window.onload = () => {
  const container = document.getElementsByClassName("container")[0];
  const button = document.getElementById("btn");
  button.addEventListener("click", swap);

  function swap() {
    container.insertBefore(container.children[1], container.children[0]);
  }
};
