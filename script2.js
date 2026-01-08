// ===================
// Desktop / Windows / Popups / Start Menu / Taskbar
// ===================

// Desktop icons
const iconGit = document.getElementById("icon-git");
const iconCV = document.getElementById("icon-cv");
const iconPortfolio = document.getElementById("icon-portfolio");

// CV window + taskbar button
const cvWindow = document.getElementById("cv-window");
const cvClose = document.getElementById("cv-close");
const taskCV = document.getElementById("task-cv");

// CV controls + viewer
const cvMinimize = document.getElementById("cv-minimize");
const cvMaximize = document.getElementById("cv-maximize");
const cvFrame = document.getElementById("cv-frame");
const cvZoomIn = document.getElementById("cv-zoom-in");
const cvZoomOut = document.getElementById("cv-zoom-out");

// Start menu elements
const startButton = document.getElementById("start-button");
const startMenu = document.getElementById("start-menu");
const trayDate = document.querySelector(".tray-date");

// Git confirm window
const gitConfirmWindow = document.getElementById("git-confirm-window");
const gitConfirmTitlebar = document.getElementById("git-confirm-titlebar");
const gitConfirmClose = document.getElementById("git-confirm-close");
const gitConfirmYes = document.getElementById("git-confirm-yes");
const gitConfirmCancel = document.getElementById("git-confirm-cancel");

// Portfolio confirm window
const portfolioConfirmWindow = document.getElementById(
  "portfolio-confirm-window"
);
const portfolioConfirmTitlebar = document.getElementById(
  "portfolio-confirm-titlebar"
);
const portfolioConfirmClose = document.getElementById(
  "portfolio-confirm-close"
);
const portfolioConfirmYes = document.getElementById("portfolio-confirm-yes");
const portfolioConfirmCancel = document.getElementById(
  "portfolio-confirm-cancel"
);

// Instagram confirm window
const instagramConfirmWindow = document.getElementById(
  "instagram-confirm-window"
);
const instagramConfirmTitlebar = document.getElementById(
  "instagram-confirm-titlebar"
);
const instagramConfirmClose = document.getElementById(
  "instagram-confirm-close"
);
const instagramConfirmYes = document.getElementById("instagram-confirm-yes");
const instagramConfirmCancel = document.getElementById(
  "instagram-confirm-cancel"
);

// LinkedIn confirm window
const linkedinConfirmWindow = document.getElementById(
  "linkedin-confirm-window"
);
const linkedinConfirmTitlebar = document.getElementById(
  "linkedin-confirm-titlebar"
);
const linkedinConfirmClose = document.getElementById("linkedin-confirm-close");
const linkedinConfirmYes = document.getElementById("linkedin-confirm-yes");
const linkedinConfirmCancel = document.getElementById(
  "linkedin-confirm-cancel"
);

// About window
const aboutWindow = document.getElementById("about-window");
const aboutTitlebar = document.getElementById("about-titlebar");
const aboutClose = document.getElementById("about-close");
const aboutMinimize = document.getElementById("about-minimize");
const aboutMaximize = document.getElementById("about-maximize");

// Taskbar buttons for popups
const taskGit = document.getElementById("task-git");
const taskPortfolio = document.getElementById("task-portfolio");
const taskInstagram = document.getElementById("task-instagram");
const taskLinkedin = document.getElementById("task-linkedin");
const taskCmd = document.getElementById("task-cmd");

// CMD elements
const cmdWindow = document.getElementById("cmd-window");
const cmdTitlebar = document.getElementById("cmd-titlebar");
const cmdClose = document.getElementById("cmd-close");
const cmdMinimize = document.getElementById("cmd-minimize");
const cmdMaximize = document.getElementById("cmd-maximize");
const cmdOutput = document.getElementById("cmd-output");
const startCmd = document.getElementById("start-cmd");

// Desktop root and icons
const desktop = document.getElementById("desktop");
const desktopIcons = document.querySelectorAll(".desktop-icon");

// Power overlay
const powerOverlay = document.getElementById("power-overlay");

// Power popup buttons (if you still use these IDs)
const popupShutdown = document.getElementById("popup-shutdown");
const popupRestart = document.getElementById("popup-restart");
const popupLogoff = document.getElementById("popup-logoff");
const popupCancel = document.getElementById("popup-cancel");

// Z-index management
let topZ = 50;

function bringToFront(win) {
  topZ += 1;
  if (topZ >= 9990) topZ = 50;
  win.style.zIndex = topZ;
}

// Draggable helper for windows
function makeWindowDraggable(win, handle) {
  let offsetX = 0;
  let offsetY = 0;
  let dragging = false;

  handle.addEventListener("mousedown", (e) => {
    dragging = true;
    const rect = win.getBoundingClientRect();
    offsetX = e.clientX - rect.left;
    offsetY = e.clientY - rect.top;
    document.body.style.userSelect = "none";
    bringToFront(win);
  });

  document.addEventListener("mousemove", (e) => {
    if (!dragging) return;
    win.style.left = e.clientX - offsetX + "px";
    win.style.top = e.clientY - offsetY + "px";
  });

  document.addEventListener("mouseup", () => {
    dragging = false;
    document.body.style.userSelect = "";
  });
}

// NOTE: desktop icons are no longer draggable – the makeIconDraggable
// function has been removed and we do NOT call it anywhere.

// show overlay then navigate (used by older popup buttons)
function showPowerOverlayAndGo(url, delayMs = 1200) {
  if (powerOverlay) {
    powerOverlay.classList.remove("hidden");
  }
  setTimeout(() => {
    window.location.href = url;
  }, delayMs);
}

// Helper to just open popup without navigating
function openPowerPopup() {
  if (powerOverlay) powerOverlay.classList.remove("hidden");
}

// Power popup button behavior (if you still use these buttons)
if (popupShutdown) {
  popupShutdown.addEventListener("click", () => {
    showPowerOverlayAndGo("https://www.google.com");
  });
}

if (popupRestart) {
  popupRestart.addEventListener("click", () => {
    showPowerOverlayAndGo("index2.html");
  });
}

if (popupLogoff) {
  popupLogoff.addEventListener("click", () => {
    showPowerOverlayAndGo("index.html");
  });
}

if (popupCancel) {
  popupCancel.addEventListener("click", () => {
    if (powerOverlay) powerOverlay.classList.add("hidden");
  });
}

// Make windows draggable
if (gitConfirmWindow && gitConfirmTitlebar) {
  makeWindowDraggable(gitConfirmWindow, gitConfirmTitlebar);
}
if (portfolioConfirmWindow && portfolioConfirmTitlebar) {
  makeWindowDraggable(portfolioConfirmWindow, portfolioConfirmTitlebar);
}
if (cvWindow) {
  makeWindowDraggable(cvWindow, cvWindow.querySelector(".window-titlebar"));
}
if (instagramConfirmWindow && instagramConfirmTitlebar) {
  makeWindowDraggable(instagramConfirmWindow, instagramConfirmTitlebar);
}
if (linkedinConfirmWindow && linkedinConfirmTitlebar) {
  makeWindowDraggable(linkedinConfirmWindow, linkedinConfirmTitlebar);
}
if (cmdWindow && cmdTitlebar) {
  makeWindowDraggable(cmdWindow, cmdTitlebar);
}
if (aboutWindow && aboutTitlebar) {
  makeWindowDraggable(aboutWindow, aboutTitlebar);
}

// IMPORTANT: no desktopIcons.forEach(makeIconDraggable) here,
// so desktop icons stay fixed in their original positions.

// Focus on titlebar mousedown
if (gitConfirmTitlebar) {
  gitConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(gitConfirmWindow)
  );
}
if (portfolioConfirmTitlebar) {
  portfolioConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(portfolioConfirmWindow)
  );
}
if (instagramConfirmTitlebar) {
  instagramConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(instagramConfirmWindow)
  );
}
if (linkedinConfirmTitlebar) {
  linkedinConfirmTitlebar.addEventListener("mousedown", () =>
    bringToFront(linkedinConfirmWindow)
  );
}
if (cvWindow) {
  cvWindow
    .querySelector(".window-titlebar")
    .addEventListener("mousedown", () => bringToFront(cvWindow));
}
if (cmdTitlebar) {
  cmdTitlebar.addEventListener("mousedown", () => bringToFront(cmdWindow));
}
if (aboutTitlebar) {
  aboutTitlebar.addEventListener("mousedown", () =>
    bringToFront(aboutWindow)
  );
}

// CV window logic
function openCVWindow() {
  cvWindow.classList.remove("hidden");
  taskCV.classList.remove("hidden");
  bringToFront(cvWindow);
}

function closeCVWindow() {
  cvWindow.classList.add("hidden");
  taskCV.classList.add("hidden");
}

cvClose.addEventListener("click", closeCVWindow);

let cvIsMaximized = false;
let cvStoredRect = null;

function maximizeCV() {
  if (!cvIsMaximized) {
    const rect = cvWindow.getBoundingClientRect();
    cvStoredRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    cvWindow.style.left = "0px";
    cvWindow.style.top = "0px";
    cvWindow.style.width = "100vw";
    cvWindow.style.height = "100vh";
    cvIsMaximized = true;
    cvMaximize.textContent = "🗗";
  } else if (cvStoredRect) {
    cvWindow.style.left = cvStoredRect.left + "px";
    cvWindow.style.top = cvStoredRect.top + "px";
    cvWindow.style.width = cvStoredRect.width + "px";
    cvWindow.style.height = cvStoredRect.height + "px";
    cvIsMaximized = false;
    cvMaximize.textContent = "▢";
  }
}

function minimizeCV() {
  cvWindow.classList.add("hidden");
  taskCV.classList.remove("hidden");
}

cvMaximize.addEventListener("click", maximizeCV);
cvMinimize.addEventListener("click", minimizeCV);

// CV zoom
let cvZoom = 1.0;

function applyCVZoom() {
  cvFrame.style.transform = `scale(${cvZoom})`;
  cvFrame.style.transformOrigin = "top left";
}

cvZoomIn.addEventListener("click", () => {
  cvZoom = Math.min(cvZoom + 0.25, 3);
  applyCVZoom();
});

cvZoomOut.addEventListener("click", () => {
  cvZoom = Math.max(cvZoom - 0.25, 0.5);
  applyCVZoom();
});

applyCVZoom();

// Git confirm
function openGitConfirm() {
  gitConfirmWindow.classList.remove("hidden");
  taskGit.classList.remove("hidden");
  bringToFront(gitConfirmWindow);
}

function closeGitConfirm() {
  gitConfirmWindow.classList.add("hidden");
  taskGit.classList.add("hidden");
}

gitConfirmClose.addEventListener("click", closeGitConfirm);
gitConfirmCancel.addEventListener("click", closeGitConfirm);
gitConfirmYes.addEventListener("click", () => {
  window.open("https://github.com/Andrew-Fernando-15", "_blank");
  closeGitConfirm();
});

// Portfolio confirm
function openPortfolioConfirm() {
  portfolioConfirmWindow.classList.remove("hidden");
  taskPortfolio.classList.remove("hidden");
  bringToFront(portfolioConfirmWindow);
}

function closePortfolioConfirm() {
  portfolioConfirmWindow.classList.add("hidden");
  taskPortfolio.classList.add("hidden");
}

portfolioConfirmClose.addEventListener("click", closePortfolioConfirm);
portfolioConfirmCancel.addEventListener("click", closePortfolioConfirm);
portfolioConfirmYes.addEventListener("click", () => {
  window.open(
    "https://andrew-fernando-15.github.io/portfolio1/index.html",
    "_blank"
  );
  closePortfolioConfirm();
});

// Instagram confirm
function openInstagramConfirm() {
  instagramConfirmWindow.classList.remove("hidden");
  taskInstagram.classList.remove("hidden");
  bringToFront(instagramConfirmWindow);
}

function closeInstagramConfirm() {
  instagramConfirmWindow.classList.add("hidden");
  taskInstagram.classList.add("hidden");
}

instagramConfirmClose.addEventListener("click", closeInstagramConfirm);
instagramConfirmCancel.addEventListener("click", closeInstagramConfirm);
instagramConfirmYes.addEventListener("click", () => {
  window.open("https://instagram.com/your-instagram-username", "_blank");
  closeInstagramConfirm();
});

// LinkedIn confirm
function openLinkedinConfirm() {
  linkedinConfirmWindow.classList.remove("hidden");
  taskLinkedin.classList.remove("hidden");
  bringToFront(linkedinConfirmWindow);
}

function closeLinkedinConfirm() {
  linkedinConfirmWindow.classList.add("hidden");
  taskLinkedin.classList.add("hidden");
}

linkedinConfirmClose.addEventListener("click", closeLinkedinConfirm);
linkedinConfirmCancel.addEventListener("click", closeLinkedinConfirm);
linkedinConfirmYes.addEventListener("click", () => {
  window.open("https://www.linkedin.com/in/your-linkedin-username", "_blank");
  closeLinkedinConfirm();
});

// About window
function openAboutWindow() {
  if (!aboutWindow) return;
  aboutWindow.classList.remove("hidden");
  bringToFront(aboutWindow);
}

function closeAboutWindow() {
  if (!aboutWindow) return;
  aboutWindow.classList.add("hidden");
}

if (aboutClose) aboutClose.addEventListener("click", closeAboutWindow);
if (aboutMinimize) aboutMinimize.addEventListener("click", closeAboutWindow);

let aboutIsMaximized = false;
let aboutStoredRect = null;

function maximizeAbout() {
  if (!aboutWindow) return;
  if (!aboutIsMaximized) {
    const rect = aboutWindow.getBoundingClientRect();
    aboutStoredRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    aboutWindow.style.left = "0px";
    aboutWindow.style.top = "0px";
    aboutWindow.style.width = "100vw";
    aboutWindow.style.height = "100vh";
    aboutIsMaximized = true;
    if (aboutMaximize) aboutMaximize.textContent = "🗗";
  } else if (aboutStoredRect) {
    aboutWindow.style.left = aboutStoredRect.left + "px";
    aboutWindow.style.top = aboutStoredRect.top + "px";
    aboutWindow.style.width = aboutStoredRect.width + "px";
    aboutWindow.style.height = aboutStoredRect.height + "px";
    aboutIsMaximized = false;
    if (aboutMaximize) aboutMaximize.textContent = "▢";
  }
}

if (aboutMaximize) {
  aboutMaximize.addEventListener("click", maximizeAbout);
}

// Desktop icons click
iconGit.addEventListener("click", openGitConfirm);
iconPortfolio.addEventListener("click", openPortfolioConfirm);
iconCV.addEventListener("dblclick", openCVWindow);

// Taskbar CV button
taskCV.addEventListener("click", () => {
  const isHidden = cvWindow.classList.contains("hidden");
  if (isHidden) openCVWindow();
  else minimizeCV();
});

// Taskbar popup buttons
if (taskGit) {
  taskGit.addEventListener("click", () => {
    if (gitConfirmWindow.classList.contains("hidden")) openGitConfirm();
    else bringToFront(gitConfirmWindow);
  });
}

if (taskPortfolio) {
  taskPortfolio.addEventListener("click", () => {
    if (portfolioConfirmWindow.classList.contains("hidden"))
      openPortfolioConfirm();
    else bringToFront(portfolioConfirmWindow);
  });
}

if (taskInstagram) {
  taskInstagram.addEventListener("click", () => {
    if (instagramConfirmWindow.classList.contains("hidden"))
      openInstagramConfirm();
    else bringToFront(instagramConfirmWindow);
  });
}

if (taskLinkedin) {
  taskLinkedin.addEventListener("click", () => {
    if (linkedinConfirmWindow.classList.contains("hidden"))
      openLinkedinConfirm();
    else bringToFront(linkedinConfirmWindow);
  });
}

// CMD taskbar button
if (taskCmd) {
  taskCmd.addEventListener("click", () => {
    const isHidden = cmdWindow.classList.contains("hidden");
    if (isHidden) {
      openCmdWindow();
    } else {
      cmdWindow.classList.add("hidden");
    }
  });
}

// Start menu
function toggleStartMenu() {
  startMenu.classList.toggle("hidden");
}

startButton.addEventListener("click", (event) => {
  event.stopPropagation();
  toggleStartMenu();
});

document.addEventListener("click", () => {
  startMenu.classList.add("hidden");
});

startMenu.addEventListener("click", (event) => {
  event.stopPropagation();
});

// Start menu items
const startGithub = document.getElementById("start-github");
const startPortfolio1 = document.getElementById("start-portfolio1");
const startInstagram = document.getElementById("start-instagram");
const startLinkedin = document.getElementById("start-linkedin");
const startAbout = document.getElementById("start-about");
const startLogoff = document.getElementById("start-logoff");
const startRestart = document.getElementById("start-restart");
const startShutdown = document.getElementById("start-shutdown");

if (startGithub) {
  startGithub.addEventListener("click", (event) => {
    event.stopPropagation();
    openGitConfirm();
  });
}

if (startPortfolio1) {
  startPortfolio1.addEventListener("click", (event) => {
    event.stopPropagation();
    openPortfolioConfirm();
  });
}

if (startInstagram) {
  startInstagram.addEventListener("click", (event) => {
    event.stopPropagation();
    openInstagramConfirm();
  });
}

if (startLinkedin) {
  startLinkedin.addEventListener("click", (event) => {
    event.stopPropagation();
    openLinkedinConfirm();
  });
}

if (startAbout) {
  startAbout.addEventListener("click", (event) => {
    event.stopPropagation();
    openAboutWindow();
    startMenu.classList.add("hidden");
  });
}

// Start-menu power tiles now open popup instead of navigating directly
if (startLogoff) {
  startLogoff.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openPowerPopup();
  });
}

if (startRestart) {
  startRestart.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openPowerPopup();
  });
}

if (startShutdown) {
  startShutdown.addEventListener("click", (event) => {
    event.stopPropagation();
    startMenu.classList.add("hidden");
    openPowerPopup();
  });
}

// ===================
// NEW CMD IMPLEMENTATION (UI-polished)
// ===================

let gameState = "none";
let currentPromptInput = null;
let cmdHasBooted = false;

// Focus helper: keep caret in current prompt
function focusCurrentPrompt() {
  if (!currentPromptInput) return;

  currentPromptInput.focus();

  // move caret to end
  const range = document.createRange();
  const sel = window.getSelection();
  range.selectNodeContents(currentPromptInput);
  range.collapse(false);
  sel.removeAllRanges();
  sel.addRange(range);
}

// Clicking anywhere in CMD body refocuses prompt
const cmdBody = document.querySelector(".cmd-body");
if (cmdBody) {
  cmdBody.addEventListener("mousedown", (e) => {
    // if user clicks directly in input span, let browser handle it
    if (e.target.classList.contains("cmd-prompt-input")) return;
    focusCurrentPrompt();
  });
}

const flirtLines = [
  "Are you gravity? Because every time you walk in, you pull my attention your way.",
  "Are you a sunrise? Because talking to you feels like the start of something bright.",
  "Are you a playlist? Because somehow you match every mood I did not know I had.",
  "Are you a spoiler alert? Because one look at you and my heart already knows the ending.",
  "Are you a good book? Because I keep wanting just one more chapter with you.",
  "Are you Wi‑Fi? Because the moment you’re near, everything suddenly connects.",
  "Are you a checkpoint? Because when you smile, life feels like it just saved my progress.",
  "Are you a cheat code? Because things feel a little too good when you’re around.",
  "Are you a star? Because even from a distance, you’re hard not to notice.",
  "Are you a bug fix? Because since you showed up, everything makes a lot more sense.",
];

function applyCmdColor() {
  if (!cmdWindow) return;
  cmdWindow.style.color = "#ffffff";
  if (cmdOutput) cmdOutput.style.color = "#ffffff";
}
applyCmdColor();

function appendCmdLine(text = "") {
  const line = document.createElement("div");
  line.textContent = text;
  cmdOutput.appendChild(line);
  cmdOutput.scrollTop = cmdOutput.scrollHeight;
  return line;
}

function appendBlankLine() {
  appendCmdLine("");
}

// Create interactive "C:\> " prompt at the current end
function appendPrompt() {
  const line = document.createElement("div");

  const prefix = document.createElement("span");
  prefix.className = "cmd-prompt-prefix";
  prefix.textContent = "C:\\> ";

  const inputSpan = document.createElement("span");
  inputSpan.className = "cmd-prompt-input";
  inputSpan.contentEditable = "true";

  line.appendChild(prefix);
  line.appendChild(inputSpan);
  cmdOutput.appendChild(line);
  cmdOutput.scrollTop = cmdOutput.scrollHeight;

  currentPromptInput = inputSpan;
  focusCurrentPrompt();

  inputSpan.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      submitCurrentCommand();
    }
  });

  return inputSpan;
}

// Boot text + first prompt
function resetCmdBoot() {
  cmdOutput.innerHTML = "";
  appendCmdLine("AndrewXP v2.9 [1 Jan]");
  appendCmdLine("Inspired by Mitchivin");
  appendBlankLine();
  appendCmdLine('type "Help" for list of commands avalable');
  appendCmdLine("press ENTER/RETURN to execute command");
  appendCmdLine('for i-cursor press Tab')
  appendBlankLine();
  appendPrompt();
  gameState = "none";
}

// Freeze current prompt line as "C:\> command" and handle it
function submitCurrentCommand() {
  if (!currentPromptInput) return;
  const commandRaw = currentPromptInput.textContent.trim();
  const lineDiv = currentPromptInput.parentElement;

  currentPromptInput.remove();
  const frozenSpan = document.createElement("span");
  frozenSpan.textContent = commandRaw;
  lineDiv.appendChild(frozenSpan);

  currentPromptInput = null;

  handleCommand(commandRaw);
}

// Command handler
function handleCommand(raw) {
  const input = raw.trim();
  const lower = input.toLowerCase();

  if (gameState === "knock-sequence") {
    handleKnockGameStep(lower);
    return;
  }

  switch (lower) {
    case "":
      appendPrompt();
      break;
    case "help":
      printHelp();
      appendPrompt();
      break;
    case "clear":
      cmdOutput.innerHTML = "";
      appendPrompt();
      break;
    case "exit":
      closeCmdWindow();
      break;
    case "version":
      appendCmdLine("AndrewXP Command Prompt v2.9");
      appendCmdLine("(c) 2026 Andrew Fernando. All rights reserved.");
      appendPrompt();
      break;
    case "time":
      printTime();
      appendPrompt();
      break;
    case "date":
      printDate();
      appendPrompt();
      break;
    case "about":
      printAboutCmd();
      appendPrompt();
      break;
    case "joke":
      printJoke();
      appendPrompt();
      break;
    case "game":
    case "knock":
      startKnockGame();
      break;
    case "open github":
      appendCmdLine("Opening GitHub in a new tab...");
      window.open("https://github.com/Andrew-Fernando-15", "_blank");
      appendPrompt();
      break;
    case "open portfolio":
      appendCmdLine("Opening Portfolio in a new tab...");
      window.open(
        "https://andrew-fernando-15.github.io/portfolio-practice/index.html",
        "_blank"
      );
      appendPrompt();
      break;

    // Hidden fun commands
    case "flirt":
      printFlirtLine();
      appendPrompt();
      break;
    case "rickroll":
      appendCmdLine("Never gonna give you up...");
      window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ", "_blank");
      appendPrompt();
      break;
    case "matrix":
      appendCmdLine(
        "Unfortunately, your GPU is still booting in another universe."
      );
      appendPrompt();
      break;

    default:
      appendCmdLine(
        `'${input}' is not recognized as an internal or external command.`
      );
      appendCmdLine('Type "help" for the list of available commands.');
      appendPrompt();
      break;
  }
}

// Help output
function printHelp() {
  appendCmdLine("Available commands:");
  appendCmdLine("  help           - Show this help message");
  appendCmdLine("  clear          - Clear the screen");
  appendCmdLine("  exit           - Close the Command Prompt");
  appendCmdLine("  version        - Show version information");
  appendCmdLine("  time           - Show the current time");
  appendCmdLine("  date           - Show the current date");
  appendCmdLine("  about          - About this mini OS");
  appendCmdLine("  joke           - Tell a short joke");
  appendCmdLine("  game / knock   - Start a knock-knock game");
  appendCmdLine("  open github    - Open GitHub profile");
  appendCmdLine("  open portfolio - Open portfolio website");
  appendBlankLine();
}

// Time, date, about, jokes, etc.
function printTime() {
  const now = new Date();
  appendCmdLine("Current time: " + now.toLocaleTimeString());
}

function printDate() {
  const now = new Date();
  appendCmdLine("Current date: " + now.toLocaleDateString());
}

function printAboutCmd() {
  appendCmdLine(
    "This Command Prompt is part of AndrewXP, a Windows XP-style portfolio desktop."
  );
  appendCmdLine(
    "Built by Andrew Fernando to showcase front-end, JS, and creative coding skills."
  );
}

function printJoke() {
  appendCmdLine("Why do programmers prefer dark mode?");
  appendCmdLine("Because light attracts bugs.");
}

function printFlirtLine() {
  const idx = Math.floor(Math.random() * flirtLines.length);
  appendCmdLine(flirtLines[idx]);
}

// Knock-knock mini-game
function startKnockGame() {
  gameState = "knock-sequence";
  appendCmdLine("Knock, knock.");
  appendPrompt();
}

function handleKnockGameStep(lower) {
  if (lower === "who's there" || lower === "whos there") {
    appendCmdLine("Andrew.");
    appendPrompt();
    gameState = "knock-sequence-2";
  } else if (gameState === "knock-sequence-2") {
    if (lower === "andrew who" || lower === "andrew who?") {
      appendCmdLine(
        "Andrew XP — the guy who turned his portfolio into an operating system."
      );
      gameState = "none";
      appendPrompt();
    } else {
      appendCmdLine("You were supposed to say: Andrew who?");
      gameState = "none";
      appendPrompt();
    }
  } else {
    appendCmdLine("You were supposed to say: Who's there?");
    gameState = "none";
    appendPrompt();
  }
}

// CMD window open/close
function openCmdWindow() {
  if (!cmdWindow) return;
  cmdWindow.classList.remove("hidden");
  taskCmd.classList.remove("hidden");
  bringToFront(cmdWindow);
  if (!cmdHasBooted) {
    cmdHasBooted = true;
    resetCmdBoot();
  } else if (!currentPromptInput) {
    appendPrompt();
  } else {
    focusCurrentPrompt();
  }
}

function closeCmdWindow() {
  if (!cmdWindow) return;
  cmdWindow.classList.add("hidden");
  taskCmd.classList.add("hidden");
}

if (cmdClose) cmdClose.addEventListener("click", closeCmdWindow);
if (cmdMinimize) {
  cmdMinimize.addEventListener("click", () => {
    cmdWindow.classList.add("hidden");
  });
}

// CMD maximize/restore
let cmdIsMaximized = false;
let cmdStoredRect = null;

function maximizeCmd() {
  if (!cmdWindow) return;
  if (!cmdIsMaximized) {
    const rect = cmdWindow.getBoundingClientRect();
    cmdStoredRect = {
      left: rect.left,
      top: rect.top,
      width: rect.width,
      height: rect.height,
    };
    cmdWindow.style.left = "0px";
    cmdWindow.style.top = "0px";
    cmdWindow.style.width = "100vw";
    cmdWindow.style.height = "100vh";
    cmdIsMaximized = true;
    if (cmdMaximize) cmdMaximize.textContent = "🗗";
  } else if (cmdStoredRect) {
    cmdWindow.style.left = cmdStoredRect.left + "px";
    cmdWindow.style.top = cmdStoredRect.top + "px";
    cmdWindow.style.width = cmdStoredRect.width + "px";
    cmdWindow.style.height = cmdStoredRect.height + "px";
    cmdIsMaximized = false;
    if (cmdMaximize) cmdMaximize.textContent = "▢";
  }
}

if (cmdMaximize) cmdMaximize.addEventListener("click", maximizeCmd);

// Start menu: open CMD from tile
if (startCmd) {
  startCmd.addEventListener("click", (event) => {
    event.stopPropagation();
    openCmdWindow();
    startMenu.classList.add("hidden");
  });
}

// Show date in tray
function updateTrayDate() {
  const now = new Date();
  if (trayDate) {
    trayDate.textContent = now.toLocaleDateString();
  }
}
updateTrayDate();
setInterval(updateTrayDate, 60000);
