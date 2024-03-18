document.querySelectorAll(".faq-question").forEach((question) => {
  question.addEventListener("click", (event) => {
    const answer = event.target.nextElementSibling;
    answer.style.display = answer.style.display === "block" ? "none" : "block";
    question.parentElement.style.backgroundColor =
      answer.style.display === "block"
        ? "rgb(24,125,123)"
        : "rgb(143, 225, 212)";
    question.parentElement.style.color =
      answer.style.display === "block" ? "white" : "black";
  });
});
