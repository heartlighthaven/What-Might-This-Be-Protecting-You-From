const patternData = {
  shut_down: {
    label: "I shut down",
    sentence: "shut down",
    protection: {
      exposed: "being seen too clearly or having to reveal what feels hard to name.",
      rejected: "the sting of being dismissed, ignored, or not met with care.",
      not_good_enough: "feeling inadequate or judged for not handling things better.",
      overwhelmed: "taking in more emotion or pressure than you feel able to hold.",
      misunderstood: "having your inner experience missed or minimized.",
      out_of_control: "the fear that emotions or situations will become too much too fast.",
      disappointed: "hoping for support and not receiving it.",
      vulnerable: "having to stay open when you already feel tender."
    }
  },
  overthink: {
    label: "I overthink",
    sentence: "overthink",
    protection: {
      exposed: "making a wrong move and feeling exposed afterward.",
      rejected: "saying or doing something that could lead to disapproval.",
      not_good_enough: "the shame of not getting it right.",
      overwhelmed: "the uncertainty of acting before you feel fully prepared.",
      misunderstood: "being misread because you did not explain enough.",
      out_of_control: "the discomfort of not being able to predict the outcome.",
      disappointed: "getting your hopes up too soon.",
      vulnerable: "trusting yourself before you feel fully certain."
    }
  },
  people_please: {
    label: "I people please",
    sentence: "people please",
    protection: {
      exposed: "showing your real needs and risking discomfort.",
      rejected: "disapproval, distance, or the fear of not being liked.",
      not_good_enough: "feeling like who you are is not enough on its own.",
      overwhelmed: "the tension that can come when others are upset.",
      misunderstood: "being seen as difficult instead of caring.",
      out_of_control: "relationship shifts you cannot manage once honesty enters the room.",
      disappointed: "asking for more and not receiving it.",
      vulnerable: "revealing what you truly want."
    }
  },
  avoid: {
    label: "I avoid responding",
    sentence: "avoid responding",
    protection: {
      exposed: "having to engage before you feel ready.",
      rejected: "a response that feels cold, critical, or unwanted.",
      not_good_enough: "being seen as unprepared or behind.",
      overwhelmed: "more pressure, more emotion, or more demand.",
      misunderstood: "getting pulled into something you do not know how to explain.",
      out_of_control: "a conversation that moves faster than you can manage.",
      disappointed: "hoping for understanding and not finding it.",
      vulnerable: "contact that feels emotionally risky."
    }
  },
  control: {
    label: "I try to control everything",
    sentence: "try to control everything",
    protection: {
      exposed: "feeling unprepared or visibly uncertain.",
      rejected: "being blamed or criticized if things go wrong.",
      not_good_enough: "the belief that mistakes mean failure.",
      overwhelmed: "chaos, unpredictability, or too many unknowns at once.",
      misunderstood: "others not seeing how much pressure you are carrying.",
      out_of_control: "helplessness or the feeling that everything could unravel.",
      disappointed: "trusting something outside yourself and being let down.",
      vulnerable: "relying on others or allowing imperfection."
    }
  },
  withdraw: {
    label: "I withdraw",
    sentence: "withdraw",
    protection: {
      exposed: "being emotionally visible when you feel raw.",
      rejected: "the pain of reaching out and not being met.",
      not_good_enough: "being seen in a moment where you feel lacking.",
      overwhelmed: "too much closeness, demand, or stimulation.",
      misunderstood: "having to explain yourself when you already feel tired.",
      out_of_control: "emotional intensity that feels hard to regulate.",
      disappointed: "wanting connection and not receiving it.",
      vulnerable: "staying present when distance feels safer."
    }
  },
  overexplain: {
    label: "I over explain",
    sentence: "over explain",
    protection: {
      exposed: "saying too little and being judged without context.",
      rejected: "others deciding against you before fully understanding.",
      not_good_enough: "looking careless, wrong, or flawed.",
      overwhelmed: "uncertainty about whether you have done enough.",
      misunderstood: "being taken the wrong way.",
      out_of_control: "not being able to shape how others see the situation.",
      disappointed: "trusting that a short explanation will be enough.",
      vulnerable: "letting your words stand without extra protection."
    }
  },
  procrastinate: {
    label: "I procrastinate",
    sentence: "procrastinate",
    protection: {
      exposed: "putting your effort out there and having it evaluated.",
      rejected: "feedback that feels discouraging or critical.",
      not_good_enough: "proof that you may not meet your own expectations.",
      overwhelmed: "the pressure of starting something that feels big or uncertain.",
      misunderstood: "others not understanding why it feels hard to begin.",
      out_of_control: "engaging with a task that could reveal limits or unpredictability.",
      disappointed: "trying fully and still not getting the result you want.",
      vulnerable: "caring deeply about something and risking imperfection."
    }
  }
};

const feelingLabels = {
  rejected: "Rejected",
  exposed: "Exposed",
  not_good_enough: "Not good enough",
  overwhelmed: "Overwhelmed",
  misunderstood: "Misunderstood",
  out_of_control: "Out of control",
  disappointed: "Disappointed",
  vulnerable: "Vulnerable"
};

let selectedPattern = null;
let selectedFeeling = null;

const buttons = document.querySelectorAll(".choice-btn");
const resultCard = document.getElementById("resultCard");
const patternText = document.getElementById("patternText");
const feelingText = document.getElementById("feelingText");
const protectionText = document.getElementById("protectionText");
const summaryText = document.getElementById("summaryText");

function updateResult() {
  if (!selectedPattern || !selectedFeeling) {
    resultCard.classList.add("hidden");
    return;
  }

  const pattern = patternData[selectedPattern];
  const feeling = feelingLabels[selectedFeeling];
  const protection = pattern.protection[selectedFeeling];

  patternText.textContent = pattern.label;
  feelingText.textContent = feeling;
  protectionText.textContent = protection;
  summaryText.textContent = `When you ${pattern.sentence}, it is often because you may be feeling ${feeling.toLowerCase()}. This pattern may be helping you protect yourself from ${protection} It does not mean the pattern is wrong. It may mean it developed to help you cope in some way.`;

  resultCard.classList.remove("hidden");
}

buttons.forEach((button) => {
  button.addEventListener("click", () => {
    const type = button.dataset.type;
    const key = button.dataset.key;

    if (type === "pattern") {
      selectedPattern = key;
      document.querySelectorAll('[data-type="pattern"]').forEach((btn) => {
        btn.classList.remove("active");
      });
    }

    if (type === "feeling") {
      selectedFeeling = key;
      document.querySelectorAll('[data-type="feeling"]').forEach((btn) => {
        btn.classList.remove("active");
      });
    }

    button.classList.add("active");
    updateResult();
  });
});
