/* ==========================================================================
   Hold'em Cheats — "Would You Fold?" quiz
   Plain JS, no dependencies. Native radio inputs + a real submit button.
   Every scenario states its assumptions; answers are judged only against
   those stated assumptions.
   ========================================================================== */

"use strict";

var RANK_NAMES = { "10": "Ten", J: "Jack", Q: "Queen", K: "King", A: "Ace" };
var SUIT_NAMES = { "\u2660": "spades", "\u2665": "hearts", "\u2666": "diamonds", "\u2663": "clubs" };

var QUESTIONS = [
  {
    id: 1,
    title: "Pocket aces, first to act",
    scene: "Friendly home game, six players, blinds 1/2. Everyone started with 200 (that's 100 big blinds deep). You are under the gun \u2014 first to act \u2014 and you look down at two black aces.",
    hero: ["A\u2660", "A\u2666"],
    board: [],
    boardNote: "Preflop \u2014 there is no board yet.",
    facts: [
      "You are first to act; five players are still to come.",
      "Blinds 1/2, and you have 200 in front of you.",
      "Nothing to read yet \u2014 nobody has shown anything."
    ],
    assumptions: "Everyone at this table is reasonable and friendly. No maniac is going to re-raise you into oblivion \u2014 and if one does, the follow-up plan is to 4-bet and smile.",
    options: [
      { id: "fold", label: "Fold" },
      { id: "call", label: "Call the 2 (limp)" },
      { id: "raise", label: "Raise to 6" }
    ],
    correct: "raise",
    best: "Raise. Aces are the strongest starting hand in Hold'em, and a raise does three jobs at once: it grows the pot while you're a huge favorite, it makes small pairs and draws pay to see cards, and it makes you the one acting after the flop. None of that works from a limp.",
    wrongs: [
      { id: "fold", text: "Folding the best hand ever dealt is a crime even cartoon villains wouldn't commit." },
      { id: "call", text: "Limping keeps the pot small with your best hand, lets the blinds see a free flop, and hides your strength so you win less when you do connect. If someone raises behind you, you'll play a big pot out of position \u2014 the worst of both worlds." }
    ],
    rule: "With premium hands (AA, KK, QQ, AK), raise before the flop almost every time.",
    context: "Against a table of wild re-raisers, the plan shifts: expect 3-bets and be ready to 4-bet rather than limp-call. Same aces, different villain \u2014 different plan.",
    ruleShort: "Premium starting hands want a bigger pot, not a cheaper flop."
  },
  {
    id: 2,
    title: "Flush draw, and the price is right",
    scene: "You called the preflop raise with jack-ten of spades. The flop comes 8\u2660 K\u2660 3\u2666 \u2014 you have four spades, one away from a flush. The raiser bets 5 into a pot of 10.",
    hero: ["J\u2660", "10\u2660"],
    board: ["8\u2660", "K\u2660", "3\u2666"],
    boardNote: "Flop \u2014 two cards still to come (turn and river).",
    facts: [
      "Nine spades left in the deck complete your flush.",
      "You risk 5 to win the 15 sitting in front of you \u2014 you need to be right about 25% of the time.",
      "With two cards to come, a 9-out draw lands roughly 35% of the time."
    ],
    assumptions: "The player who bet will not fold to a raise \u2014 he likes his hand and isn't going anywhere \u2014 and he has a real, made hand rather than a draw.",
    options: [
      { id: "fold", label: "Fold" },
      { id: "call", label: "Call 5" },
      { id: "raise", label: "Raise to 18" }
    ],
    correct: "call",
    best: "Call. The math is doing your thinking for you: you need about 25% equity to profit from this call, your flush draw with two cards to come has about 35%, and the price is small enough to be worth paying. This is the one spot where poker politely hands you an answer.",
    wrongs: [
      { id: "fold", text: "Folding one of the strongest draws you'll ever have throws away the exact situation where the numbers are begging you to stay in." },
      { id: "raise", text: "Per the assumptions, a raise only gets called by hands that beat your draw \u2014 you'd inflate a pot you'll usually lose, and when he does fold you collect 10 instead of chasing your 35%." }
    ],
    rule: "Compare your outs to the pot odds: call when your chance of winning is bigger than the price of the ticket.",
    context: "If the villain were the folding type, a raise (a semi-bluff) becomes a real weapon \u2014 you'd win the pot now and keep your 35% as backup. The cards didn't change; the opponent did.",
    ruleShort: "Call draws when your equity beats the pot odds; fold when the price is steeper."
  },
  {
    id: 3,
    title: "Top pair, big bet, honest villain",
    scene: "You called preflop with ten-nine of diamonds. The flop is T\u2666 7\u2663 3\u2666 \u2014 top pair, nine kicker. The tightest player at the table (he has shown down queens-or-better every single time he's bet big) leads 15 into a pot of 12.",
    hero: ["10\u2666", "9\u2666"],
    board: ["10\u2663", "7\u2663", "3\u2666"],
    boardNote: "Flop \u2014 four cards still to come after this one.",
    facts: [
      "You hold top pair with a medium kicker.",
      "He is betting larger than the size of the pot.",
      "He has been honest all night: when he bets big, he has had it."
    ],
    assumptions: "Take him at his word: he makes this size bet only with a hand better than a pair of tens, he is not bluffing, and he will not fold if you raise.",
    options: [
      { id: "fold", label: "Fold" },
      { id: "call", label: "Call 15" },
      { id: "raise", label: "Raise to 45" }
    ],
    correct: "fold",
    best: "Fold. Under the stated assumptions, every hand he's betting beats yours, so a call is just paying 15 to lose more often than not. Folding top pair feels dramatic; donating your stack to a hand you can't beat is worse. This is one of the few spots where the brave move is the quiet one.",
    wrongs: [
      { id: "call", text: "You'd be calling to find out if he's bluffing \u2014 but the assumptions say he isn't. That's the most expensive kind of hope in poker." },
      { id: "raise", text: "Raising turns a small loss into a big one: he won't fold (per the assumptions), so the only hands that come along are the ones that already have you beaten." }
    ],
    rule: "Against honest, big-betting opponents, top pair is a bluff-catcher at best \u2014 and a fold when the bets are large.",
    context: "Swap the villain: against an aggressive player who fires at every missed draw, calling or raising becomes the money-making answer. Same two cards, opposite decision.",
    ruleShort: "Against a never-bluffing big-bettor, top pair with a weak kicker is a fold."
  },
  {
    id: 4,
    title: "Suited connector, first to act",
    scene: "Six-max home game, blinds 1/2. You're under the gun with 9\u2666 7\u2666, and five players are still behind you. Everyone has roughly 100 big blinds.",
    hero: ["9\u2666", "7\u2666"],
    board: [],
    boardNote: "Preflop \u2014 there is no board yet.",
    facts: [
      "You would be first to act, with five players to your left.",
      "Suited connectors want a cheap look at a flop \u2014 and a good seat afterward.",
      "A raise from you invites five responses, all from players with better seats than yours."
    ],
    assumptions: "A normal friendly table: some players will call, someone will usually raise when you let them in cheaply, and nobody is folding their whole stack before the flop.",
    options: [
      { id: "fold", label: "Fold" },
      { id: "call", label: "Call 2 (limp)" },
      { id: "raise", label: "Raise to 6" }
    ],
    correct: "fold",
    best: "Fold. 9-7 suited is a hand that makes money later, not from the first seat. With five players behind you, the likely outcome is a raise from someone else, a bloated pot, and you playing a speculative hand out of position against a crowd. From early position, 'decent' isn't good enough.",
    wrongs: [
      { id: "call", text: "Limping along sets up the classic disaster: a raise comes behind you, the pot bloats, and you're the one guessing first on every street with nine-high." },
      { id: "raise", text: "Opening 9-high from under the gun is a story you'll have to keep telling on every flop you miss, against players holding position and stronger ranges." }
    ],
    rule: "From early position, play hands that can stand alone \u2014 big pairs, big cards. Suited connectors are for later seats and cheap entry.",
    context: "Deal the exact same 9\u2666 7\u2666 on the button with three limpers and the answer flips: calling (or raising) is now standard, because you'll act last and see the flop cheaply. Position changed the hand's value, not the cards.",
    ruleShort: "Suited connectors belong in late position, not under the gun."
  },
  {
    id: 5,
    title: "Top two pair on a scary board",
    scene: "You raised preflop with J\u2660 9\u2660 from the cutoff and one loose-passive player called. The flop is J\u2666 8\u2665 9\u2665 \u2014 you've hit top two pair, but the board is soaked with draws: every heart makes a flush, and any ten or seven completes a straight. He leads into you for 7 into a pot of 14.",
    hero: ["J\u2660", "9\u2660"],
    board: ["J\u2666", "8\u2665", "9\u2665"],
    boardNote: "Flop \u2014 the board is loaded with draws.",
    facts: [
      "You have the top two pair on a very wet board.",
      "He has about 150 behind \u2014 plenty worth winning.",
      "He calls almost anything and chases every draw he can picture."
    ],
    assumptions: "He will call a raise with any pair, any draw, or any piece of that board \u2014 he is not the folding type.",
    options: [
      { id: "fold", label: "Fold" },
      { id: "call", label: "Call 7" },
      { id: "raise", label: "Raise to 21" }
    ],
    correct: "raise",
    best: "Raise. Two pair is a big hand on a board full of big draws, and this opponent is exactly the kind to pay you off with worse: his flush draws, his straight draws, his stubborn pair of eights. Raising also charges those draws their full price now, before a heart or a straight card shows up and makes your job harder.",
    wrongs: [
      { id: "fold", text: "Folding top two pair to a bet of half the pot would be the villain's origin story \u2014 the hand is simply too strong to release." },
      { id: "call", text: "Calling keeps the pot small while letting his draws see another card cheaply. With a raise you stay in charge; with a call, every scare card on the turn turns you into a guesser." }
    ],
    rule: "On wet boards, strong hands raise for value and protection \u2014 make the draws pay their full rent to continue.",
    context: "If the board were J-8-3 rainbow and the villain never called with anything worse, checking behind to trap would beat raising him off your profit. Even monster hands take context orders.",
    ruleShort: "Strong hand + dangerous board = raise for value and protection."
  },
  {
    id: 6,
    title: "Small river bet from a tricky player",
    scene: "You raised preflop with A\u2660 K\u2663 on the button; the big blind \u2014 the most aggressive player in the game \u2014 called. The board ran out K\u2666 7\u2663 2\u2663 5\u2665 3\u2666: you have top pair with the best possible kicker. On the river he slides 15 into a pot of 42.",
    hero: ["A\u2660", "K\u2663"],
    board: ["K\u2666", "7\u2663", "2\u2663", "5\u2665", "3\u2666"],
    boardNote: "River \u2014 this is the last betting round.",
    facts: [
      "Pot 42, he bets 15 \u2014 a little over a third of the pot.",
      "Calling 15 to win 57 needs you to be right about 21% of the time.",
      "You beat every bluff and lose to his made hands \u2014 the question is how often he's bluffing."
    ],
    assumptions: "He is polarized on this river: he takes this exact size with two pair or better, OR with a total bluff. He has been bluffing about a third of the time on rivers today, and he will not call a raise with anything worse than your hand.",
    options: [
      { id: "fold", label: "Fold" },
      { id: "call", label: "Call 15" },
      { id: "raise", label: "Raise to 45" }
    ],
    correct: "call",
    best: "Call. You need roughly 21% equity to break even on this price, and under the stated assumptions his range is about a third bluffs \u2014 hands you beat outright. That's comfortably more than 21%, so calling wins money over time. Strong hand, small price, bluff-heavy range: just pay it.",
    wrongs: [
      { id: "fold", text: "Folding gives back exactly the chips he's stealing with his bluffs. Against a range this heavy with air, your top pair is the hand his whole plan is designed to lose to." },
      { id: "raise", text: "Raising wins less from both sides of his range: his bluffs fold (so you lose their chips) and his real hands call (so you lose more of yours). It's the only option that's worse against everyone." }
    ],
    rule: "Cheap price, strong hand, bluff-heavy opponent = call. Raise only when worse hands will call; fold only when his range contains no bluffs.",
    context: "Run this exact hand against the honest villain from question 3 \u2014 a player who only bets big with the winner \u2014 and folding becomes the correct answer. Price, position, and player decide these spots, not the cards alone.",
    ruleShort: "Against a bluffing opponent at a fair price, hero-call instead of folding."
  }
];

/* ------------------------------------------------------------------ *
 * Rendering helpers
 * ------------------------------------------------------------------ */

var RANK_TITLES = [
  { min: 6, title: "Supreme Overlord of Value Town", note: "Flawless run. Somewhere, a cartoon villain is quietly updating their r\u00e9sum\u00e9." },
  { min: 5, title: "Mastermind Apprentice", note: "Nearly perfect \u2014 one hand got away with the loot." },
  { min: 4, title: "Trusted Henchman", note: "Solid heist thinking. Reread whichever sheet tripped you up and you're running the table." },
  { min: 3, title: "Numbered Goon With Potential", note: "Half the chips are yours; the cheat sheets know where the other half went." },
  { min: 1, title: "Fresh Minion \u2014 go reread the sheet", note: "The basics are in there. Walk the sheets again, then run the job once more." },
  { min: 0, title: "The Mark \u2014 the house's favourite customer", note: "Good news: this is the lowest score possible. The only direction from here is up." }
];

function rankFor(score, total) {
  for (var i = 0; i < RANK_TITLES.length; i++) {
    if (score >= RANK_TITLES[i].min) return RANK_TITLES[i];
  }
  return RANK_TITLES[RANK_TITLES.length - 1];
}

function describeCards(codes) {
  var parts = [];
  for (var i = 0; i < codes.length; i++) {
    var suit = codes[i].charAt(codes[i].length - 1);
    var rank = codes[i].substring(0, codes[i].length - 1);
    parts.push((RANK_NAMES[rank] || rank) + " of " + (SUIT_NAMES[suit] || suit));
  }
  return parts.join(", ");
}

function cardHtml(code) {
  var suit = code.charAt(code.length - 1);
  var rank = code.substring(0, code.length - 1);
  var red = suit === "\u2665" || suit === "\u2666";
  return '<span class="card' + (red ? " red" : "") + '"><span class="rank">' +
    rank + '</span><span class="suit">' + suit + '</span></span>';
}

function cardGroupHtml(label, codes) {
  return '<div class="card-group"><span class="card-label">' + label + '</span>' +
    '<span class="cards" role="img" aria-label="' + describeCards(codes) + '">' +
    codes.map(cardHtml).join("") + '</span></div>';
}

function optionLabel(q, id) {
  for (var i = 0; i < q.options.length; i++) {
    if (q.options[i].id === id) return q.options[i].label;
  }
  return id;
}

/* ------------------------------------------------------------------ *
 * State + rendering
 * ------------------------------------------------------------------ */

var state = { index: 0, score: 0, submitted: false, answers: [] };

var panel, statusEl, progressText, progressMeter, progressFill;

function renderQuestion(moveFocus) {
  var q = QUESTIONS[state.index];
  var total = QUESTIONS.length;
  state.submitted = false;

  progressText.textContent = "Question " + (state.index + 1) + " of " + total;
  progressMeter.setAttribute("aria-label", "Quiz progress: question " + (state.index + 1) + " of " + total);
  progressFill.style.width = (state.index / total) * 100 + "%";

  var boardGroup = q.board.length
    ? cardGroupHtml("Board", q.board)
    : '<div class="card-group"><span class="card-label">Board</span><span class="fine-print">no cards yet (preflop)</span></div>';

  var factsHtml = "";
  for (var i = 0; i < q.facts.length; i++) {
    factsHtml += "<li>" + q.facts[i] + "</li>";
  }

  var choicesHtml = "";
  for (var j = 0; j < q.options.length; j++) {
    var opt = q.options[j];
    choicesHtml +=
      '<label class="choice" for="opt-' + opt.id + '">' +
      '<input type="radio" id="opt-' + opt.id + '" name="answer" value="' + opt.id + '">' +
      '<span class="choice-text">' + opt.label + "</span></label>";
  }

  var html =
    '<h3 id="q-heading" tabindex="-1">' + q.title + "</h3>" +
    '<p class="quiz-scene">' + q.scene + "</p>" +
    '<div class="table-cards">' + cardGroupHtml("Your hand", q.hero) + boardGroup + "</div>" +
    (q.board.length ? '<p class="fine-print">' + q.boardNote + "</p>" : "") +
    '<ul class="facts">' + factsHtml + "</ul>" +
    '<p class="assumption"><strong>Stated assumptions:</strong> ' + q.assumptions + "</p>" +
    '<form id="quiz-form" novalidate>' +
    '<fieldset><legend class="sr-only">Choose one action: fold, call, or raise</legend>' +
    '<div class="choices">' + choicesHtml + "</div></fieldset>" +
    '<p class="form-hint" id="form-hint"></p>' +
    '<button type="submit" class="btn" id="submit-btn">Submit answer</button>' +
    "</form>" +
    '<div id="after-submit"></div>';

  panel.innerHTML = html;

  if (moveFocus) {
    var heading = document.getElementById("q-heading");
    if (heading) heading.focus();
  }
}

function lockIn(choice) {
  var q = QUESTIONS[state.index];
  var total = QUESTIONS.length;
  var isCorrect = choice === q.correct;
  state.submitted = true;
  state.answers[state.index] = choice;
  if (isCorrect) state.score++;

  // Freeze the radios and mark the outcomes.
  var labels = panel.querySelectorAll(".choice");
  for (var i = 0; i < labels.length; i++) {
    var input = labels[i].querySelector("input");
    input.disabled = true;
    var value = input.value;
    if (value === q.correct) labels[i].classList.add("is-correct");
    else if (value === choice) labels[i].classList.add("is-wrong");
  }

  var submitBtn = document.getElementById("submit-btn");
  if (submitBtn) submitBtn.hidden = true;

  var wrongsHtml = "";
  for (var w = 0; w < q.wrongs.length; w++) {
    wrongsHtml += "<li>" + q.wrongs[w].text + "</li>";
  }

  var isLast = state.index === total - 1;
  var after = document.getElementById("after-submit");
  after.innerHTML =
    '<section class="explanation" aria-labelledby="explanation-heading">' +
    '<p class="verdict ' + (isCorrect ? "good" : "bad") + '">' +
    (isCorrect ? "&#10004; Right under these assumptions." : "&#10008; Not under these assumptions.") +
    "</p>" +
    '<h3 id="explanation-heading" tabindex="-1">Best answer: ' + optionLabel(q, q.correct) + "</h3>" +
    "<p>" + q.best + "</p>" +
    "<h4>Why not the others?</h4><ul>" + wrongsHtml + "</ul>" +
    '<p class="rule-note"><strong>Cheat-sheet rule:</strong> ' + q.rule + "</p>" +
    '<p class="context-note"><strong>Context check:</strong> ' + q.context + "</p>" +
    "</section>" +
    '<button type="button" class="btn" id="next-btn">' +
    (isLast ? "See my results" : "Next question") + "</button>";

  progressFill.style.width = ((state.index + 1) / total) * 100 + "%";
  statusEl.textContent =
    (isCorrect ? "Correct. " : "Not quite. ") +
    "Best answer under these assumptions: " + optionLabel(q, q.correct) + ".";

  var explanationHeading = document.getElementById("explanation-heading");
  if (explanationHeading) explanationHeading.focus();
}

function renderResults() {
  var total = QUESTIONS.length;
  var rank = rankFor(state.score, total);

  progressText.textContent = "Finished";
  progressMeter.setAttribute("aria-label", "Quiz progress: finished, " + total + " of " + total);
  progressFill.style.width = "100%";

  var reviewHtml = "";
  for (var i = 0; i < QUESTIONS.length; i++) {
    var q = QUESTIONS[i];
    var given = state.answers[i];
    var gotIt = given === q.correct;
    reviewHtml +=
      "<li>" +
      '<span class="review-q">' + (i + 1) + ". " + q.title + "</span>" +
      '<span class="pill ' + (gotIt ? "pill-you" : "pill-miss") + '">You: ' + optionLabel(q, given) + "</span>" +
      '<span class="pill pill-best">Best: ' + optionLabel(q, q.correct) + "</span>" +
      '<p class="review-rule">' + q.ruleShort + "</p>" +
      "</li>";
  }

  panel.innerHTML =
    '<div class="results">' +
    '<p class="q-count">Final score</p>' +
    '<p class="results-score">' + state.score + " / " + total + "</p>" +
    '<h3 class="results-title" id="results-heading" tabindex="-1">' + rank.title + "</h3>" +
    "<p>" + rank.note + "</p>" +
    '<ol class="review">' + reviewHtml + "</ol>" +
    '<button type="button" class="btn" id="restart-btn">Try again</button>' +
    "</div>";

  statusEl.textContent =
    "Quiz complete. Score " + state.score + " of " + total + ". Rank: " + rank.title + ".";
  var heading = document.getElementById("results-heading");
  if (heading) heading.focus();
}

function nextQuestion() {
  state.index++;
  if (state.index >= QUESTIONS.length) renderResults();
  else renderQuestion(true);
}

function restart() {
  state = { index: 0, score: 0, submitted: false, answers: [] };
  renderQuestion(true);
}

/* ------------------------------------------------------------------ *
 * Events (delegated, native form submission)
 * ------------------------------------------------------------------ */

function onSubmit(event) {
  event.preventDefault();
  if (state.submitted) return;

  var checked = panel.querySelector('input[name="answer"]:checked');
  var hint = document.getElementById("form-hint");
  if (!checked) {
    if (hint) hint.textContent = "Pick fold, call, or raise first.";
    var first = panel.querySelector('input[name="answer"]');
    if (first) first.focus();
    return;
  }
  if (hint) hint.textContent = "";
  lockIn(checked.value);
}

function onClick(event) {
  var target = event.target;
  if (target && target.id === "next-btn") nextQuestion();
  else if (target && target.id === "restart-btn") restart();
}

function init() {
  panel = document.getElementById("quiz-panel");
  if (!panel) return;
  statusEl = document.getElementById("quiz-status");
  progressText = document.getElementById("progress-text");
  progressMeter = document.getElementById("progress-meter");
  progressFill = document.getElementById("progress-fill");

  renderQuestion(false);
  panel.addEventListener("submit", onSubmit);
  panel.addEventListener("click", onClick);
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
