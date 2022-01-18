const aboutme = document.getElementById("about_me");

aboutme.addEventListener("click", async function () {
  const eleArr = ["desc", "icons", "btn"];

  for (const ele of eleArr) {
    document.getElementById(ele).classList.add(
      "animate__animated",
      "animate__fadeOut",
      "animate__faster" // 500ms
    );
  }

  await new Promise((resolve) => setTimeout(resolve, 500));
  document.querySelector(".aboutme").classList.remove("hidden");
  console.log("asd");

  document
    .querySelector(".aboutme")
    .classList.add("animate__animated", "animate__fadeIn", "animate__faster");
});
