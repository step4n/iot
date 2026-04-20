const IOT_CAMP_STORAGE_KEY = "iot-camp-screen-state";
const CONFIG_VERSION = 1;
const DAILY_ACCESS_MODE = "manual";
const DEFAULT_CONFIG = {
  dailyPin: "123",
  lecturerPin: "2468",
  adminPassword: "321",
  maxStudents: 15,
  helpCodeCost: 5,
  helpWiringCost: 5,
  skipCost: 5,
};

const PREVIEW_ALLOW_ANY_PIN = false;

const LEVEL_BADGES = [
  { id: "prvni-led", label: "PRVNI LED", icon: "🏆" },
  { id: "iot-mag", label: "IOT MAG", icon: "🎖" },
  { id: "architekt", label: "ARCHITEKT", icon: "🏵" },
  { id: "expert", label: "EXPERT", icon: "✦" },
];

const sections = [
  {
    id: "beginner",
    title: "Zacatecnik",
    subtitle: "Zaklady sveta IoT",
    icon: "🔑",
    accent: "green",
    tasks: [
      {
        id: "b1",
        title: "Blikani LED",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 10,
      },
      {
        id: "b2",
        title: "Cteni vstupu",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 10,
      },
      {
        id: "b3",
        title: "Seriova komunikace",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 10,
      },
    ],
  },
  {
    id: "advanced",
    title: "Pokrocily",
    subtitle: "Propojovani systemu",
    icon: "⚙",
    accent: "amber",
    tasks: [
      {
        id: "a1",
        title: "MQTT Broker",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 15,
      },
      {
        id: "a2",
        title: "ESP32 Server",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 15,
      },
      {
        id: "a3",
        title: "OLED displej",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 20,
      },
    ],
  },
  {
    id: "expert",
    title: "Expert",
    subtitle: "Profesionalni hardware",
    icon: "🚀",
    accent: "purple",
    tasks: [
      {
        id: "e1",
        title: "Vlastni PCB",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 20,
      },
      {
        id: "e2",
        title: "AI Edge",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 20,
      },
      {
        id: "e3",
        title: "LoRa Mesh",
        description: "Demo karta pro preview vzhledu. Pozdeji ji nahradime tvym skutecnym ukolem.",
        hint: "Napoveda pro ukol bude doplnena pozdeji.",
        points: 25,
      },
    ],
  },
];

function getTodayKey() {
  return new Date().toISOString().slice(0, 10);
}

function buildDailyPin() {
  if (PREVIEW_ALLOW_ANY_PIN) {
    return "";
  }

  if (DAILY_ACCESS_MODE === "date-based") {
    const now = new Date();
    const day = String(now.getDate()).padStart(2, "0");
    const month = String(now.getMonth() + 1).padStart(2, "0");
    return `${day}${month}`;
  }

  return DEFAULT_CONFIG.dailyPin;
}

function escapeHtml(value) {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function getAllTasks() {
  return sections.flatMap((section) => section.tasks);
}

function findTask(taskId) {
  return getAllTasks().find((task) => task.id === taskId) ?? null;
}

function findSectionIndexByTaskId(taskId) {
  return sections.findIndex((section) => section.tasks.some((task) => task.id === taskId));
}

function createDefaultTaskState() {
  const taskState = {};

  getAllTasks().forEach((task) => {
    taskState[task.id] = {
      completed: false,
      completionType: null,
      openedHelp: [],
    };
  });

  taskState.b1.completed = true;
  taskState.b1.completionType = "verified";
  taskState.b2.completed = true;
  taskState.b2.completionType = "verified";

  return taskState;
}

function createDefaultScreenState() {
  return {
    currentView: "overview",
    activeSectionId: sections[0]?.id ?? null,
    activeTaskId: null,
    codeDrafts: {},
  };
}

function createDefaultAccountState() {
  return {
    stars: 20,
    taskState: createDefaultTaskState(),
    screenState: createDefaultScreenState(),
  };
}

function createIotCampScreen(container, options = {}) {
  const storageKey = options.storageKey ?? IOT_CAMP_STORAGE_KEY;

  function loadState() {
    const raw = localStorage.getItem(storageKey);

    if (!raw) {
      return {
        configVersion: CONFIG_VERSION,
        config: { ...DEFAULT_CONFIG },
        accounts: {},
        authenticatedForDay: null,
        currentStudentNumber: null,
        adminPanelOpen: false,
        adminAuthenticated: false,
        stars: 20,
        taskState: createDefaultTaskState(),
        screenState: createDefaultScreenState(),
      };
    }

    try {
      const parsed = JSON.parse(raw);
      const shouldResetConfig = parsed.configVersion !== CONFIG_VERSION;
      const config = {
        ...DEFAULT_CONFIG,
        ...(shouldResetConfig ? {} : (parsed.config ?? {})),
      };
      const accounts = parsed.accounts ?? {};
      const currentStudentNumber = parsed.currentStudentNumber ?? null;
      const currentAccount = currentStudentNumber && accounts[currentStudentNumber]
        ? accounts[currentStudentNumber]
        : createDefaultAccountState();

      return {
        authenticatedForDay: parsed.authenticatedForDay ?? null,
        currentStudentNumber,
        adminPanelOpen: false,
        adminAuthenticated: false,
        configVersion: CONFIG_VERSION,
        config,
        accounts,
        stars: Number.isFinite(currentAccount.stars)
          ? currentAccount.stars
          : Number.isFinite(parsed.stars)
            ? parsed.stars
            : Number.isFinite(parsed.points)
              ? parsed.points
              : 20,
        taskState: {
          ...createDefaultTaskState(),
          ...(currentAccount.taskState ?? parsed.taskState ?? {}),
        },
        screenState: {
          ...createDefaultScreenState(),
          ...(currentAccount.screenState ?? parsed.screenState ?? {}),
        },
      };
    } catch (error) {
      return {
        configVersion: CONFIG_VERSION,
        config: { ...DEFAULT_CONFIG },
        accounts: {},
        authenticatedForDay: null,
        currentStudentNumber: null,
        adminPanelOpen: false,
        adminAuthenticated: false,
        stars: 20,
        taskState: createDefaultTaskState(),
        screenState: createDefaultScreenState(),
      };
    }
  }

  let state = loadState();

  function sanitizeLockedSectionProgress() {
    sections.forEach((section, sectionIndex) => {
      const sectionUnlocked = sectionIndex === 0 || sections[sectionIndex - 1].tasks.every((task) => {
        const previousTaskState = state.taskState[task.id];
        return previousTaskState?.completed;
      });

      if (sectionUnlocked) {
        return;
      }

      section.tasks.forEach((task) => {
        if (!state.taskState[task.id]) {
          return;
        }

        state.taskState[task.id] = {
          ...state.taskState[task.id],
          completed: false,
          completionType: null,
        };
      });
    });
  }

  sanitizeLockedSectionProgress();
  let toastTimer = null;

  function commitCurrentAccount() {
    if (!state.currentStudentNumber) {
      return;
    }

    state.accounts[state.currentStudentNumber] = {
      stars: state.stars,
      taskState: state.taskState,
      screenState: state.screenState,
    };
  }

  function saveState() {
    commitCurrentAccount();
    localStorage.setItem(storageKey, JSON.stringify({
      configVersion: CONFIG_VERSION,
      config: state.config,
      accounts: state.accounts,
      authenticatedForDay: state.authenticatedForDay,
      currentStudentNumber: state.currentStudentNumber,
    }));
  }

  function isAuthenticated() {
    return Boolean(state.currentStudentNumber) && state.authenticatedForDay === getTodayKey();
  }

  function loadAccount(studentNumber) {
    const storedAccount = state.accounts[studentNumber] ?? createDefaultAccountState();
    state.currentStudentNumber = studentNumber;
    state.stars = storedAccount.stars;
    state.taskState = {
      ...createDefaultTaskState(),
      ...(storedAccount.taskState ?? {}),
    };
    state.screenState = {
      ...createDefaultScreenState(),
      ...(storedAccount.screenState ?? {}),
    };
    sanitizeLockedSectionProgress();
  }

  function getTaskState(taskId) {
    return state.taskState[taskId];
  }

  function getTaskCounts(sectionIndex) {
    const section = sections[sectionIndex];
    const total = section.tasks.length;
    const completed = section.tasks.filter((task) => getTaskState(task.id)?.completed).length;
    const available = section.tasks.reduce((sum, task) => sum + task.points, 0);
    const earned = section.tasks.reduce((sum, task) => {
      const taskState = getTaskState(task.id);
      return taskState?.completionType === "verified" ? sum + task.points : sum;
    }, 0);

    return { total, completed, available, earned };
  }

  function getTotalCompletedTasks() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).completed, 0);
  }

  function getTotalTaskCount() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).total, 0);
  }

  function getTotalScore() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).earned, 0);
  }

  function getMaxScore() {
    return sections.reduce((sum, _section, index) => sum + getTaskCounts(index).available, 0);
  }

  function isSectionCompleted(sectionIndex) {
    const { total, completed } = getTaskCounts(sectionIndex);
    return total > 0 && total === completed;
  }

  function isSectionUnlocked(sectionIndex) {
    if (sectionIndex === 0) {
      return true;
    }

    return isSectionCompleted(sectionIndex - 1);
  }

  function isTaskUnlocked(sectionIndex, taskIndex) {
    if (!isSectionUnlocked(sectionIndex)) {
      return false;
    }

    if (taskIndex === 0) {
      return true;
    }

    const previousTask = sections[sectionIndex].tasks[taskIndex - 1];
    return getTaskState(previousTask.id)?.completed ?? false;
  }

  function showMessage(text, tone = "info") {
    const message = container.querySelector('[data-role="action-message"]');
    if (!message) {
      return;
    }

    message.textContent = text;
    message.className = `toast toast--${tone}`;
    message.hidden = false;

    if (toastTimer) {
      clearTimeout(toastTimer);
    }

    toastTimer = setTimeout(() => {
      message.hidden = true;
    }, 2600);
  }

  function getCodeDraft(taskId) {
    return state.screenState.codeDrafts?.[taskId] ?? "";
  }

  function setCodeDraft(taskId, value) {
    state.screenState.codeDrafts = {
      ...(state.screenState.codeDrafts ?? {}),
      [taskId]: value,
    };
    saveState();
  }

  function hasCodeDraft(taskId) {
    return getCodeDraft(taskId).trim().length > 0;
  }

  function isCodeSubmissionValid(taskId) {
    const code = getCodeDraft(taskId).trim();

    if (!code) {
      return false;
    }

    const normalized = code.toLowerCase();
    const hasSetup = normalized.includes("setup");
    const hasLoop = normalized.includes("loop");
    const hasArduinoAction = normalized.includes("digitalwrite")
      || normalized.includes("digitalread")
      || normalized.includes("analogread")
      || normalized.includes("pinmode")
      || normalized.includes("serial.");

    return hasSetup && hasLoop && hasArduinoAction;
  }

  function syncCodeTextareaHeight(textarea) {
    if (!textarea) {
      return;
    }

    textarea.style.height = "auto";
    textarea.style.height = `${Math.max(textarea.scrollHeight, 160)}px`;
  }

  function hasEnoughStars(cost) {
    return state.stars >= cost;
  }

  function getSectionIndexById(sectionId) {
    return sections.findIndex((section) => section.id === sectionId);
  }

  function canOpenTask(sectionIndex, taskIndex) {
    const section = sections[sectionIndex];
    const task = section?.tasks[taskIndex];

    if (!task) {
      return false;
    }

    const taskState = getTaskState(task.id);
    return Boolean(taskState?.completed || isTaskUnlocked(sectionIndex, taskIndex));
  }

  function openSection(sectionId) {
    const sectionIndex = getSectionIndexById(sectionId);

    if (sectionIndex < 0) {
      return;
    }

    if (!isSectionUnlocked(sectionIndex)) {
      showMessage("Tato sekce je zatim zamcena.");
      return;
    }

    state.screenState.currentView = "section";
    state.screenState.activeSectionId = sectionId;
    state.screenState.activeTaskId = null;
    saveState();
    render();
  }

  function openTask(taskId) {
    const task = findTask(taskId);

    if (!task) {
      return;
    }

    const sectionIndex = findSectionIndexByTaskId(taskId);
    const taskIndex = sections[sectionIndex].tasks.findIndex((item) => item.id === taskId);

    if (!canOpenTask(sectionIndex, taskIndex)) {
      showMessage("Tento ukol je zatim zamceny.");
      return;
    }

    state.screenState.currentView = "task";
    state.screenState.activeSectionId = sections[sectionIndex].id;
    state.screenState.activeTaskId = taskId;
    saveState();
    render();
  }

  function backToOverview() {
    state.screenState.currentView = "overview";
    state.screenState.activeTaskId = null;
    saveState();
    render();
  }

  function backToSection() {
    state.screenState.currentView = "section";
    state.screenState.activeTaskId = null;
    saveState();
    render();
  }

  function unlockHint(taskId) {
    const taskProgress = getTaskState(taskId);

    if (!taskProgress || taskProgress.completed) {
      showMessage("Napovedu ted nelze odemknout.");
      return;
    }

    if ((taskProgress.openedHelp ?? []).includes("code")) {
      showMessage("Napoveda ke kodu uz byla koupena.");
      return;
    }

    if (!hasEnoughStars(state.config.helpCodeCost)) {
      showMessage("Nemas dost hvezdicek na napovedu ke kodu.");
      return;
    }

    state.stars -= state.config.helpCodeCost;
    taskProgress.openedHelp = Array.from(new Set([...(taskProgress.openedHelp ?? []), "code"]));
    saveState();
    render();
    showMessage("Napoveda ke kodu byla odemcena.");
  }

  function unlockWiringHelp(taskId) {
    const taskProgress = getTaskState(taskId);

    if (!taskProgress || taskProgress.completed) {
      showMessage("Napovedu k zapojeni ted nelze odemknout.");
      return;
    }

    if ((taskProgress.openedHelp ?? []).includes("wiring")) {
      showMessage("Napoveda k zapojeni uz byla koupena.");
      return;
    }

    if (!hasEnoughStars(state.config.helpWiringCost)) {
      showMessage("Nemas dost hvezdicek na napovedu k zapojeni.");
      return;
    }

    state.stars -= state.config.helpWiringCost;
    taskProgress.openedHelp = Array.from(new Set([...(taskProgress.openedHelp ?? []), "wiring"]));
    saveState();
    render();
    showMessage("Napoveda k zapojeni byla odemcena.");
  }

  function skipTask(taskId) {
    const taskProgress = getTaskState(taskId);

    if (!taskProgress || taskProgress.completed) {
      showMessage("Preskoceni ted nelze pouzit.");
      return;
    }

    if (!hasEnoughStars(state.config.skipCost)) {
      showMessage("Nemas dost hvezdicek na preskoceni.");
      return;
    }

    state.stars -= state.config.skipCost;
    taskProgress.completed = true;
    taskProgress.completionType = "skipped";
    saveState();
    backToSection();
    showMessage("Ukol byl preskocen bez zisku bodu.");
  }

  function completeTask(taskId) {
    const task = findTask(taskId);
    const taskProgress = getTaskState(taskId);

    if (!task || !taskProgress || taskProgress.completed) {
      showMessage("Tento ukol uz nejde potvrdit.");
      return;
    }

    if (!hasCodeDraft(taskId)) {
      showMessage("Nejdriv vloz kod pro kontrolu.", "error");
      return;
    }

    if (!isCodeSubmissionValid(taskId)) {
      showMessage("Reseni zatim nevypada jako uspesny Arduino program.", "error");
      return;
    }

    const enteredPin = window.prompt("Zadej lektorsky PIN pro potvrzeni splneni:");

    if (enteredPin === null) {
      showMessage("Potvrzeni bylo zruseno.", "info");
      return;
    }

    if (!PREVIEW_ALLOW_ANY_PIN && enteredPin.trim() !== state.config.lecturerPin) {
      showMessage("Lektorsky PIN neni spravny.", "error");
      return;
    }

    taskProgress.completed = true;
    taskProgress.completionType = "verified";
    state.stars += task.points;
    saveState();
    backToSection();
    showMessage(`Reseni uspesne. Ziskano ${task.points} hvezdicek.`, "success");
  }

  function resetProgress() {
    const confirmed = window.confirm("Opravdu chces resetovat body i cely postup?");

    if (!confirmed) {
      return;
    }

    if (!state.currentStudentNumber) {
      return;
    }

    state.accounts[state.currentStudentNumber] = createDefaultAccountState();
    loadAccount(state.currentStudentNumber);
    state.authenticatedForDay = getTodayKey();
    saveState();
    render();
    showMessage("Preview postup byl resetovan.", "info");
  }

  function logoutStudent() {
    commitCurrentAccount();
    state.authenticatedForDay = null;
    state.currentStudentNumber = null;
    state.screenState = createDefaultScreenState();
    saveState();
    render();
  }

  function openAdminPanel() {
    state.adminPanelOpen = true;
    state.adminAuthenticated = false;
    saveState();
    render();
  }

  function closeAdminPanel() {
    state.adminPanelOpen = false;
    state.adminAuthenticated = false;
    saveState();
    render();
  }

  function bindEvents() {
    const actionButtons = container.querySelectorAll("[data-action]");

    actionButtons.forEach((button) => {
      button.addEventListener("click", () => {
        const action = button.dataset.action;
        const sectionId = button.dataset.sectionId;
        const taskId = button.dataset.taskId;

        if (action === "open-section" && sectionId) {
          openSection(sectionId);
          return;
        }

        if (action === "open-task" && taskId) {
          openTask(taskId);
          return;
        }

        if (action === "back-to-overview") {
          backToOverview();
          return;
        }

        if (action === "back-to-section") {
          backToSection();
          return;
        }

        if (action === "hint" && taskId) {
          unlockHint(taskId);
          return;
        }

        if (action === "wiring-help" && taskId) {
          unlockWiringHelp(taskId);
          return;
        }

        if (action === "skip" && taskId) {
          skipTask(taskId);
          return;
        }

        if (action === "complete" && taskId) {
          completeTask(taskId);
          return;
        }
      });
    });

    const resetButton = container.querySelector('[data-action="reset-progress"]');
    const resetAccessButton = container.querySelector('[data-action="reset-access"]');
    const loginForm = container.querySelector('[data-role="daily-pin-form"]');
    const adminToggleButton = container.querySelector('[data-action="open-admin"]');
    const adminCloseButton = container.querySelector('[data-action="close-admin"]');
    const adminLoginForm = container.querySelector('[data-role="admin-login-form"]');
    const adminForm = container.querySelector('[data-role="admin-form"]');
    const codeTextarea = container.querySelector("[data-role='code-submission']");
    const codeCheckButton = container.querySelector("[data-role='code-submit']");

    if (resetButton) {
      resetButton.addEventListener("click", resetProgress);
    }

    if (resetAccessButton) {
      resetAccessButton.addEventListener("click", logoutStudent);
    }

    if (loginForm) {
      loginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="daily-pin-message"]');
        const formData = new FormData(loginForm);
        const enteredPin = String(formData.get("dailyPin") ?? "").trim();
        const studentNumber = String(formData.get("studentNumber") ?? "").replace(/\D/g, "");

        if (!studentNumber) {
          message.textContent = "Zadej cislo studenta.";
          return;
        }

        const studentNumberValue = Number(studentNumber);

        if (studentNumberValue < 1 || studentNumberValue > state.config.maxStudents) {
          message.textContent = `Cislo studenta musi byt v rozsahu 1 az ${state.config.maxStudents}.`;
          return;
        }

        if (!PREVIEW_ALLOW_ANY_PIN && enteredPin !== state.config.dailyPin) {
          message.textContent = "PIN neni spravny.";
          return;
        }

        loadAccount(studentNumber);
        state.authenticatedForDay = getTodayKey();
        state.currentStudentNumber = studentNumber;
        saveState();
        render();
      });
    }

    if (adminToggleButton) {
      adminToggleButton.addEventListener("click", openAdminPanel);
    }

    if (adminCloseButton) {
      adminCloseButton.addEventListener("click", closeAdminPanel);
    }

    if (adminLoginForm) {
      adminLoginForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="admin-login-message"]');
        const formData = new FormData(adminLoginForm);
        const adminPassword = String(formData.get("adminPassword") ?? "").trim();

        if (adminPassword !== state.config.adminPassword) {
          message.textContent = "Admin PIN neni spravny.";
          return;
        }

        state.adminAuthenticated = true;
        saveState();
        render();
      });
    }

    if (adminForm) {
      adminForm.addEventListener("submit", (event) => {
        event.preventDefault();
        const message = container.querySelector('[data-role="admin-message"]');
        const formData = new FormData(adminForm);

        const nextDailyPin = String(formData.get("nextDailyPin") ?? "").trim();
        const nextMaxStudents = Number(formData.get("nextMaxStudents") ?? "");

        if (nextDailyPin) {
          state.config.dailyPin = nextDailyPin;
        }

        if (Number.isFinite(nextMaxStudents) && nextMaxStudents > 0) {
          state.config.maxStudents = nextMaxStudents;
        }

        saveState();
        render();
        showMessage("Admin nastaveni bylo ulozeno.", "success");
      });
    }

    if (codeTextarea && codeCheckButton) {
      const taskId = codeTextarea.dataset.taskId;

      syncCodeTextareaHeight(codeTextarea);
      codeCheckButton.disabled = !hasCodeDraft(taskId);

      codeTextarea.addEventListener("input", () => {
        setCodeDraft(taskId, codeTextarea.value);
        syncCodeTextareaHeight(codeTextarea);
        codeCheckButton.disabled = !hasCodeDraft(taskId);
      });

      document.addEventListener("keydown", (event) => {
        const activeTaskId = state.screenState.activeTaskId;
        const isEnter = event.key === "Enter";
        const isInsideTextarea = event.target === codeTextarea;

        if (!isEnter || isInsideTextarea || !activeTaskId || activeTaskId !== taskId) {
          return;
        }

        if (codeCheckButton.disabled) {
          return;
        }

        event.preventDefault();
        completeTask(taskId);
      });
    }
  }

  function renderProgressHeader() {
    const completedTasks = getTotalCompletedTasks();
    const totalTasks = getTotalTaskCount();
    const completedSections = sections.filter((_section, index) => isSectionCompleted(index)).length;

    const badgesMarkup = LEVEL_BADGES.map((badge, index) => {
      const isReached = completedSections > index || completedTasks >= Math.max(1, index * 2);
      return `
        <div class="badge ${isReached ? "badge--active" : ""}">
          <span class="badge__icon">${badge.icon}</span>
          <span class="badge__label">${escapeHtml(badge.label)}</span>
        </div>
      `;
    }).join("");

    return `
      <section class="hero-card">
        <div class="hero-card__score">
          <span class="hero-card__score-main">${completedTasks}</span>
          <span class="hero-card__score-max">/${totalTasks}</span>
        </div>
        <div class="hero-card__copy">
          <h1>Celkove skore</h1>
        </div>
        <div class="badge-strip">
          ${badgesMarkup}
        </div>
      </section>
    `;
  }

  function renderSectionCards() {
    return sections.map((section, sectionIndex) => {
      const counts = getTaskCounts(sectionIndex);
      const sectionUnlocked = isSectionUnlocked(sectionIndex);
      const progressPercent = counts.total ? Math.round((counts.completed / counts.total) * 100) : 0;
      const tasksMarkup = section.tasks.map((task, taskIndex) => {
        const unlocked = isTaskUnlocked(sectionIndex, taskIndex);
        const taskState = getTaskState(task.id);
        const isCompleted = taskState?.completed;
        const stateClass = !sectionUnlocked || !unlocked
          ? "task-pill--locked"
          : isCompleted
            ? "task-pill--complete"
            : "task-pill--active";
        const icon = !sectionUnlocked || !unlocked ? "🔒" : isCompleted ? "✓" : "○";

        return `
          <div class="task-pill ${stateClass}">
            <span class="task-pill__status">${icon}</span>
            <span class="task-pill__title">${escapeHtml(task.title)}</span>
            <span class="task-pill__arrow">›</span>
          </div>
        `;
      }).join("");

      return `
        <button class="section-card section-card--${section.accent} ${sectionUnlocked ? "section-card--clickable" : "section-card--locked"}" type="button" data-action="open-section" data-section-id="${section.id}" ${sectionUnlocked ? "" : "disabled"}>
          <div class="section-card__header">
            <div class="section-card__icon">${section.icon}</div>
            <div>
              <h2>${escapeHtml(section.title)}</h2>
              <p>${escapeHtml(section.subtitle)}</p>
            </div>
            <span class="section-card__tag">${sectionUnlocked ? (isSectionCompleted(sectionIndex) ? "DOKONCENO" : "AKTIVNI") : "ZAMCENO"}</span>
          </div>
          <div class="section-card__tasks">
            ${tasksMarkup}
          </div>
          <div class="section-card__footer">
            <div class="progress-bar">
              <span style="width:${progressPercent}%"></span>
            </div>
            <strong>${counts.completed}/${counts.total} splneno</strong>
          </div>
        </button>
      `;
    }).join("");
  }

  function renderSectionView(sectionId) {
    const sectionIndex = getSectionIndexById(sectionId);
    const section = sections[sectionIndex];

    if (!section) {
      return "";
    }

    const tasksMarkup = section.tasks.map((task, taskIndex) => {
      const taskState = getTaskState(task.id);
      const isCompleted = Boolean(taskState?.completed);
      const isActive = !isCompleted && isTaskUnlocked(sectionIndex, taskIndex);
      const isLocked = !isCompleted && !isActive;
      const statusLabel = isCompleted ? "Splneno" : isActive ? "Aktivni" : "Zamceno";
      const statusClass = isCompleted ? "task-row--complete" : isActive ? "task-row--active" : "task-row--locked";

      return `
        <button
          class="task-row ${statusClass}"
          type="button"
          data-action="open-task"
          data-task-id="${task.id}"
          ${canOpenTask(sectionIndex, taskIndex) ? "" : "disabled"}
        >
          <span class="task-row__left">
            <span class="task-row__dot">${isCompleted ? "✓" : isActive ? "→" : "🔒"}</span>
            <span>
              <strong>${escapeHtml(task.title)}</strong>
              <small>${statusLabel}</small>
            </span>
          </span>
          <span class="task-row__right">${task.points} b</span>
        </button>
      `;
    }).join("");

    return `
      <section class="detail-card">
        <div class="detail-card__topbar">
          <button class="ghost-button" type="button" data-action="back-to-overview">Zpet na prehled</button>
          <span class="detail-card__badge">${escapeHtml(section.title)}</span>
        </div>
        <h2>${escapeHtml(section.title)}</h2>
        <p class="detail-card__meta">${escapeHtml(section.subtitle)}</p>
        <p class="detail-card__meta">Kliknout jde jen na splnene ukoly a na prave aktivni ukol. Dalsi se odemykaji postupne podle postupu.</p>
        <div class="task-row-list">
          ${tasksMarkup}
        </div>
      </section>
    `;
  }

  function renderTaskView(taskId) {
    const task = findTask(taskId);

    if (!task) {
      return `
        <section class="detail-card">
          <h2>Ukol nenalezen</h2>
          <button class="ghost-button" type="button" data-action="back-to-overview">Zpet</button>
        </section>
      `;
    }

    const taskProgress = getTaskState(taskId);
    const sectionIndex = findSectionIndexByTaskId(taskId);
    const section = sections[sectionIndex];
    const openedHelp = taskProgress.openedHelp ?? [];
    const canBuyCodeHelp = !taskProgress.completed && !openedHelp.includes("code") && hasEnoughStars(state.config.helpCodeCost);
    const canBuyWiringHelp = !taskProgress.completed && !openedHelp.includes("wiring") && hasEnoughStars(state.config.helpWiringCost);
    const canSkipTask = !taskProgress.completed && hasEnoughStars(state.config.skipCost);
    const codeDraft = getCodeDraft(task.id);
    const canSubmitCode = codeDraft.trim().length > 0 && !taskProgress.completed;
    const statusText = taskProgress.completed
      ? taskProgress.completionType === "skipped"
        ? "Splneno preskocenim"
        : "Splneno lektorem"
      : "Pripraveno";

    return `
      <section class="detail-card">
        <div class="detail-card__topbar">
          <button class="ghost-button" type="button" data-action="back-to-section">Zpet na sekci</button>
          <div class="detail-card__top-actions">
            <details class="help-menu">
              <summary>Napoveda</summary>
              <div class="help-menu__content">
                <button type="button" data-action="hint" data-task-id="${task.id}" ${canBuyCodeHelp ? "" : "disabled"}>
                  <span>Kod</span>
                  <span class="help-menu__price">&#9733; ${state.config.helpCodeCost}</span>
                </button>
                <button type="button" data-action="wiring-help" data-task-id="${task.id}" ${canBuyWiringHelp ? "" : "disabled"}>
                  <span>Zapojeni</span>
                  <span class="help-menu__price">&#9733; ${state.config.helpWiringCost}</span>
                </button>
                <button type="button" data-action="skip" data-task-id="${task.id}" ${canSkipTask ? "" : "disabled"}>
                  <span>Preskocit</span>
                  <span class="help-menu__price">&#9733; ${state.config.skipCost}</span>
                </button>
              </div>
            </details>
            <span class="detail-card__stars">&#9733; ${state.stars}</span>
            <span class="detail-card__badge">${escapeHtml(section.title)}</span>
          </div>
        </div>
        <p class="detail-card__section">${escapeHtml(section.title)}</p>
        <h2>${escapeHtml(task.title)}</h2>
        <p class="detail-card__meta">Hvezdicky za splneni: ${task.points}</p>
        <p class="detail-card__meta">Stav: ${statusText}</p>
        <div class="task-structure">
          <div class="task-structure__card">
            <strong>1. Zapojeni obvodu</strong>
            <p>Deti postavi Arduino zapojeni podle zadani nebo obrazku.</p>
          </div>
          <div class="task-structure__card">
            <strong>2. Program</strong>
            <p>Potom vytvori nebo upravi program, ktery bude s obvodem pracovat.</p>
          </div>
        </div>
        <div class="detail-card__placeholder">Placeholder pro obrazek / zadani ukolu</div>
        <p>${escapeHtml(task.description)}</p>
        <div class="code-check-panel">
          <label class="code-check-panel__label" for="code-submission">Kod pro kontrolu</label>
          <textarea
            id="code-submission"
            class="code-check-panel__input"
            data-role="code-submission"
            data-task-id="${task.id}"
            placeholder="Sem se bude vkladat Arduino kod pro kontrolu."
          >${escapeHtml(codeDraft)}</textarea>
          <p class="code-check-panel__note">Kontrola patri k ukolu, ktery se sklada ze zapojeni obvodu a programu.</p>
        </div>
        <div class="detail-card__actions detail-card__actions--single">
          <button
            type="button"
            data-action="complete"
            data-role="code-submit"
            data-task-id="${task.id}"
            ${canSubmitCode ? "" : "disabled"}
          >Zkontrolovat</button>
        </div>
      </section>
    `;
  }

  function renderLogin() {
    container.innerHTML = `
      <section class="login-screen">
        <div class="login-card ${state.adminPanelOpen ? "login-card--admin" : ""}">
          <div class="login-card__corner">
            ${state.adminPanelOpen
              ? '<button type="button" class="ghost-button admin-toggle" data-action="close-admin">Zavrit admin</button>'
              : '<button type="button" class="ghost-button admin-toggle" data-action="open-admin">Admin</button>'}
          </div>
          ${state.adminPanelOpen ? `
            <section class="admin-panel admin-panel--full">
              <p class="eyebrow">ADMIN</p>
              ${state.adminAuthenticated ? `
                <h1>Nastaveni dne</h1>
                <p class="admin-panel__note">Po ulozeni budou studenti moci zadat jen cisla od 1 do nastaveneho poctu studentu.</p>
                <form data-role="admin-form" class="login-form login-form--stack">
                  <input name="nextDailyPin" type="text" autocomplete="off" placeholder="PIN na tento den" value="${escapeHtml(state.config.dailyPin)}" required>
                  <input name="nextMaxStudents" type="number" min="1" step="1" autocomplete="off" placeholder="Pocet studentu" value="${state.config.maxStudents}" required>
                  <button type="submit">Ulozit nastaveni dne</button>
                </form>
                <p data-role="admin-message" aria-live="polite"></p>
              ` : `
                <h1>Prihlaseni admina</h1>
                <p class="admin-panel__note">Zadej admin PIN a otevres dalsi okno s nastavenim denniho PINu a poctu studentu.</p>
                <form data-role="admin-login-form" class="login-form login-form--stack">
                  <input name="adminPassword" type="password" autocomplete="off" placeholder="Admin PIN" required>
                  <button type="submit">Prihlasit jako admin</button>
                </form>
                <p data-role="admin-login-message" aria-live="polite"></p>
              `}
            </section>
          ` : `
            <section>
              <p class="eyebrow">IOT TABOR</p>
              <h1>Prihlaseni studenta</h1>
              <p>Zadej denni PIN a cislo studenta. Povolena cisla jsou od 1 do ${state.config.maxStudents}.</p>
              <form data-role="daily-pin-form" class="login-form login-form--stack">
                <input id="daily-pin-input" name="dailyPin" type="password" inputmode="numeric" autocomplete="off" placeholder="Denni PIN" required>
                <input id="student-number-input" name="studentNumber" type="text" inputmode="numeric" autocomplete="off" placeholder="Cislo studenta" required>
                <button type="submit">Vstoupit</button>
              </form>
              <p data-role="daily-pin-message" aria-live="polite"></p>
            </section>
          `}
        </div>
      </section>
    `;

    bindEvents();
  }

  function renderApp() {
    let bodyContent = "";

    if (state.screenState.currentView === "task" && state.screenState.activeTaskId) {
      bodyContent = renderTaskView(state.screenState.activeTaskId);
    } else if (state.screenState.currentView === "section" && state.screenState.activeSectionId) {
      bodyContent = renderSectionView(state.screenState.activeSectionId);
    } else {
      bodyContent = `
        ${renderProgressHeader()}
        <div class="section-stack">
          ${renderSectionCards()}
        </div>
      `;
    }

    container.innerHTML = `
      <section class="dashboard-shell">
        ${bodyContent}
        <div class="toast" data-role="action-message" hidden></div>
      </section>
    `;

    bindEvents();
  }

  function render() {
    if (!isAuthenticated()) {
      renderLogin();
      return;
    }

    renderApp();
  }

  return {
    render,
  };
}

window.IotCampScreen = {
  mount(target, options) {
    const container = typeof target === "string" ? document.querySelector(target) : target;

    if (!container) {
      throw new Error("Cilovy kontejner pro IotCampScreen nebyl nalezen.");
    }

    const screen = createIotCampScreen(container, options);
    screen.render();
    return screen;
  },
};

document.addEventListener("DOMContentLoaded", () => {
  const previewRoot = document.querySelector("#app");

  if (previewRoot) {
    window.IotCampScreen.mount(previewRoot);
  }
});
