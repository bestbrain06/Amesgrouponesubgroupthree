/* ============================================
   ICTD 361 - Statistics Lesson Website
   JavaScript: collapsible hints/solutions + auto-scoring quiz
   ============================================ */

// Toggle a hint or worked-solution block open/closed (used on practice.html)
function toggleBlock(id) {
  var el = document.getElementById(id);
  if (!el) return;
  el.style.display = (el.style.display === "block") ? "none" : "block";
}

// Auto-grade the quiz on assessment.html
function gradeQuiz() {
  var form = document.getElementById("quiz-form");
  if (!form) return;

  var answers = {
    q1: "b",          // pie chart is best for showing parts of a whole budget
    q2: "true",       // histogram bars touch because data is continuous
    q3: "b",          // line graph is best for trends over time
    q4: "false",      // bar chart and histogram are NOT the same
    q5: "pictogram",  // uses symbols/pictures with a key
    q6: "bar chart"   // comparing separate/unordered categories
  };

  var score = 0;
  var total = 0;

  for (var key in answers) {
    total++;
    var field = form.elements[key];
    var value = "";

    if (field && field.length !== undefined) {
      // radio button group
      for (var i = 0; i < field.length; i++) {
        if (field[i].checked) { value = field[i].value; }
      }
    } else if (field) {
      value = field.value.trim();
    }

    if (value.toLowerCase() === answers[key]) {
      score++;
    }
  }

  var resultDiv = document.getElementById("quiz-result");
  resultDiv.style.display = "block";
  resultDiv.textContent = "You scored " + score + " out of " + total + ".";

  resultDiv.classList.remove("result-pass", "result-fail");
  if (score >= total * 0.5) {
    resultDiv.classList.add("result-pass");
  } else {
    resultDiv.classList.add("result-fail");
  }

  resultDiv.scrollIntoView({ behavior: "smooth", block: "center" });
}
