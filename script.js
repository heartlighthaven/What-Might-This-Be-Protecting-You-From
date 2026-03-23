const content = {
  rejected: {
    help: "protect yourself from feeling unwanted, dismissed, or emotionally left out.",
    cost: "keeping distance, holding back honesty, or expecting rejection before connection has a chance to form.",
    prompt: "Where do you notice yourself pulling back before someone can respond?"
  },
  exposed: {
    help: "avoid feeling too vulnerable, too visible, or too emotionally open.",
    cost: "keeping parts of yourself hidden, even when being known might bring closeness or relief.",
    prompt: "What feels hardest to let other people really see?"
  },
  failure: {
    help: "avoid the shame, disappointment, or self-judgment that can come with not getting it right.",
    cost: "staying small, overthinking, or not trying at all in places where growth is possible.",
    prompt: "Where might fear of getting it wrong be keeping you from moving at all?"
  },
  conflict: {
    help: "reduce tension, avoid arguments, or keep the peace when disconnection feels risky.",
    cost: "silencing your needs, staying agreeable, or avoiding honest conversations that matter.",
    prompt: "What do you tend to swallow to keep things calm?"
  },
  disappointment: {
    help: "protect yourself from hoping for something that might not happen.",
    cost: "lowering your expectations so much that you also block desire, effort, or possibility.",
    prompt: "Where have you learned it feels safer not to expect much?"
  },
  uncertainty: {
    help: "create predictability when the unknown feels overwhelming or unsafe.",
    cost: "clinging to familiar patterns, even when they no longer fit who you are becoming.",
    prompt: "What feels hardest about not knowing what comes next?"
  },
  misunderstood: {
    help: "avoid the pain of not being seen clearly or being taken the wrong way.",
    cost: "over-explaining, shutting down, or deciding not to share at all.",
    prompt: "When do you stop trying to explain yourself because it feels pointless?"
  },
  control: {
    help: "protect against chaos, helplessness, or the discomfort of not being able to manage the outcome.",
    cost: "creating pressure, rigidity, or exhaustion from trying to hold everything together.",
    prompt: "What feels most at risk when you cannot stay in control?"
  }
};

const buttons = document.querySelectorAll(".protect-btn");
const insightCard = document.getElementById("insightCard");
const helpText = document.getElementById("helpText");
const costText = document.getElementById("costText");
const reflectionPrompt = document.getElementById("reflectionPrompt");

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const key = button.dataset.key;
    const selected = content[key];

    buttons.forEach((btn) => btn.classList.remove("active"));
    button.classList.add("active");

    helpText.textContent = selected.help;
    costText.textContent = selected.cost;
    reflectionPrompt.textContent = selected.prompt;

    insightCard.classList.remove("hidden");
  });
});