document.addEventListener("DOMContentLoaded", () => {
  const topicBtns = document.querySelectorAll(".topic-btn");

  topicBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      topicBtns.forEach((otherBtn) => {
        if (otherBtn !== this && otherBtn.classList.contains("active")) {
          otherBtn.classList.remove("active");
          otherBtn.nextElementSibling.style.maxHeight = null;
        }
      });

      this.classList.toggle("active");
      const questionsContainer = this.nextElementSibling;

      if (this.classList.contains("active")) {
        questionsContainer.style.maxHeight =
          questionsContainer.scrollHeight + 5000 + "px";
      } else {
        questionsContainer.style.maxHeight = null;

        const activeQuestions = questionsContainer.querySelectorAll(
          ".question-btn.active",
        );
        activeQuestions.forEach((q) => {
          q.classList.remove("active");
          q.nextElementSibling.style.maxHeight = null;
        });
      }
    });
  });

  const questionBtns = document.querySelectorAll(".question-btn");

  questionBtns.forEach((btn) => {
    btn.addEventListener("click", function () {
      const currentContainer = this.closest(".questions-container");

      const siblingBtns = currentContainer.querySelectorAll(".question-btn");
      siblingBtns.forEach((otherBtn) => {
        if (otherBtn !== this && otherBtn.classList.contains("active")) {
          otherBtn.classList.remove("active");
          otherBtn.nextElementSibling.style.maxHeight = null;
        }
      });

      this.classList.toggle("active");
      const answerPanel = this.nextElementSibling;

      if (this.classList.contains("active")) {
        answerPanel.style.maxHeight = answerPanel.scrollHeight + "px";
      } else {
        answerPanel.style.maxHeight = null;
      }
    });
  });
});

const themeBtn = document.getElementById("theme-btn");
const themeIcon = document.getElementById("theme-icon");

const sunSvg =
  '<circle cx="12" cy="12" r="5"></circle><line x1="12" y1="1" x2="12" y2="3"></line><line x1="12" y1="21" x2="12" y2="23"></line><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"></line><line x1="18.36" y1="18.36" x2="19.78" y2="19.78"></line><line x1="1" y1="12" x2="3" y2="12"></line><line x1="21" y1="12" x2="23" y2="12"></line><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"></line><line x1="18.36" y1="5.64" x2="19.78" y2="4.22"></line>';
const moonSvg =
  '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>';

if (themeBtn) {
  themeBtn.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
      themeIcon.innerHTML = sunSvg;
    } else {
      themeIcon.innerHTML = moonSvg;
    }
  });
}
