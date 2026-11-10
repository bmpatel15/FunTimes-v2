const form = document.querySelector("#hello-form");
const nameInput = document.querySelector("#name");
const hobbyInput = document.querySelector("#hobby");
const errorEl = document.querySelector("#form-error");
const greetingEl = document.querySelector("#greeting");

const CONFETTI_COLORS = ["#c4492c", "#e09f3e", "#1f4d3e", "#f4d35e", "#1d3557", "#f6efe6"];

function valueOf(input) {
  return input.value.trim();
}

function markInvalid(input, invalid) {
  input.classList.toggle("is-invalid", invalid);
  input.setAttribute("aria-invalid", invalid ? "true" : "false");
}

function celebrate() {
  if (typeof confetti !== "function") {
    return;
  }

  const burst = {
    colors: CONFETTI_COLORS,
    disableForReducedMotion: true,
    ticks: 240,
    gravity: 0.95,
    scalar: 1.05,
    zIndex: 20,
  };

  confetti({
    ...burst,
    particleCount: 120,
    spread: 80,
    startVelocity: 45,
    origin: { x: 0.5, y: 0.62 },
  });
  confetti({
    ...burst,
    particleCount: 70,
    angle: 60,
    spread: 58,
    origin: { x: 0, y: 0.68 },
  });
  confetti({
    ...burst,
    particleCount: 70,
    angle: 120,
    spread: 58,
    origin: { x: 1, y: 0.68 },
  });
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const name = valueOf(nameInput);
  const hobby = valueOf(hobbyInput);
  const nameMissing = name.length === 0;
  const hobbyMissing = hobby.length === 0;

  markInvalid(nameInput, nameMissing);
  markInvalid(hobbyInput, hobbyMissing);

  if (nameMissing || hobbyMissing) {
    greetingEl.hidden = true;
    greetingEl.textContent = "";
    errorEl.hidden = false;
    errorEl.textContent = "Please fill in both fields.";
    (nameMissing ? nameInput : hobbyInput).focus();
    return;
  }

  errorEl.hidden = true;
  errorEl.textContent = "";
  greetingEl.hidden = false;
  greetingEl.textContent = `Nice to meet you, ${name}! ${hobby} sounds awesome.`;
  const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  greetingEl.scrollIntoView({ behavior: reduceMotion ? "auto" : "smooth", block: "nearest" });
  celebrate();
});

for (const input of [nameInput, hobbyInput]) {
  input.addEventListener("input", () => {
    if (valueOf(input)) {
      markInvalid(input, false);
    }
    if (valueOf(nameInput) && valueOf(hobbyInput) && !errorEl.hidden) {
      errorEl.hidden = true;
      errorEl.textContent = "";
    }
  });
}
