/**
 * ====================================================================
 * POKÉMON GBA SYSTEM PORTFOLIO — MAIN APPLICATION ENGINE
 * ====================================================================
 * Handles dynamic data rendering, scroll animations, interactive
 * terminal, modal dialogs, Web Audio integration, and canvas visuals.
 * ====================================================================
 */

document.addEventListener("DOMContentLoaded", () => {
  App.init();
});

const App = {
  activeQuestFilter: "all",
  terminalHistory: [],
  terminalHistoryIndex: -1,

  init() {
    this.runBootSequence();
    this.renderAllData();
    this.initAudioAndControls();
    this.initScrollAnimations();
    this.initJourneyScrollLighting();
    this.initQuestFilter();
    this.initTerminal();
    this.initContactForm();
    this.initBackgroundCanvas();
    this.initNavigation();
  },

  // ====================================================================
  // 1. BOOT SEQUENCE
  // ====================================================================
  runBootSequence() {
    const bootScreen = document.getElementById("boot-screen");
    const bootLines = document.getElementById("boot-lines");
    const bootProgress = document.getElementById("boot-progress-fill");
    const skipBtn = document.getElementById("boot-skip-btn");

    if (!bootScreen) return;

    // Check if user previously booted during this session
    const hasBooted = sessionStorage.getItem("SYSTEM_BOOTED_SESSION");
    if (hasBooted) {
      bootScreen.classList.add("hidden");
      return;
    }

    const messages = [
      "INITIALIZING SYSTEM...",
      `LOADING TRAINER PROFILE: ${PORTFOLIO_DATA.trainer.name}...`,
      "MOUNTING SKILL TREES & ATTRIBUTES...",
      "SYNCING ACTIVE QUEST LOG...",
      "CONNECTING TO GLOBAL NETWORKS...",
      "SYSTEM READY: ALL SYSTEMS NOMINAL."
    ];

    let currentStep = 0;
    const totalSteps = messages.length;

    const finishBoot = () => {
      sessionStorage.setItem("SYSTEM_BOOTED_SESSION", "true");
      bootScreen.classList.add("hidden");
      retroAudio.playLevelUp();
      this.showToast(`WELCOME TRAINER ${PORTFOLIO_DATA.trainer.name}! SYSTEM ONLINE.`);
    };

    if (skipBtn) {
      skipBtn.addEventListener("click", () => {
        retroAudio.playSelect();
        finishBoot();
      });
    }

    const interval = setInterval(() => {
      if (currentStep < totalSteps) {
        const line = document.createElement("div");
        line.className = "boot-line";
        line.innerText = `▶ ${messages[currentStep]}`;
        bootLines.appendChild(line);

        currentStep++;
        const pct = Math.round((currentStep / totalSteps) * 100);
        if (bootProgress) bootProgress.style.width = `${pct}%`;

        retroAudio.playBootBeep();
      } else {
        clearInterval(interval);
        setTimeout(finishBoot, 400);
      }
    }, 280);
  },

  // ====================================================================
  // 2. DATA RENDERING
  // ====================================================================
  renderAllData() {
    this.renderHero();
    this.renderAbout();
    this.renderSkills();
    this.renderQuests();
    this.renderJourney();
    this.renderAchievements();
    this.renderCertificates();
    this.renderMissions();
    this.renderActivityLog();
    this.renderContact();
  },

  renderHero() {
    const t = PORTFOLIO_DATA.trainer;
    
    // Trainer Card
    const nameHero = document.getElementById("trainer-name-hero");
    if (nameHero) nameHero.innerText = t.name;

    const titleHero = document.getElementById("trainer-title-hero");
    if (titleHero) titleHero.innerText = t.title;

    const hpVal = document.getElementById("trainer-hp-val");
    if (hpVal) hpVal.innerText = t.hp;

    const expVal = document.getElementById("trainer-exp-val");
    if (expVal) expVal.innerText = `LV. ${t.level} [${t.rank}]`;

    const avatarImg = document.getElementById("trainer-avatar-img");
    if (avatarImg && t.avatarImage) {
      avatarImg.src = t.avatarImage;
    }

    // Highlight chips
    const chipsContainer = document.getElementById("hero-chips-container");
    if (chipsContainer && t.highlights) {
      chipsContainer.innerHTML = t.highlights.map(h => `
        <div class="hero-chip">
          <span class="hero-chip-label">${h.label}</span>
          <span class="hero-chip-val">${h.value}</span>
        </div>
      `).join("");
    }

    // Quick stats
    const quickStatsContainer = document.getElementById("hero-quick-stats");
    if (quickStatsContainer && t.quickStats) {
      quickStatsContainer.innerHTML = t.quickStats.map(s => `
        <div class="quick-stat-box">
          <div class="quick-stat-label">${s.label}</div>
          <div class="quick-stat-val">${s.value}</div>
        </div>
      `).join("");
    }

    // Bio paragraph in hero
    const heroBio = document.getElementById("hero-bio-lead");
    if (heroBio && t.bio && t.bio.length > 0) {
      heroBio.innerText = t.bio[0];
    }

    const resumeBtn = document.getElementById("hero-resume-btn");
    if (resumeBtn && t.resumeUrl) {
      resumeBtn.href = t.resumeUrl;
      resumeBtn.setAttribute("target", "_blank");
    }
  },

  renderAbout() {
    const t = PORTFOLIO_DATA.trainer;
    const aboutGrid = document.getElementById("about-cards-grid");
    if (!aboutGrid) return;

    aboutGrid.innerHTML = `
      <div class="about-card">
        <div class="about-card-title">▶ WHO I AM</div>
        <p class="about-card-text typewriter-target" data-original-text="${t.bio[0].replace(/"/g, '&quot;')}">${t.bio[0]}</p>
      </div>

      <div class="about-card">
        <div class="about-card-title">▶ WHAT I BUILD</div>
        <p class="about-card-text typewriter-target" data-original-text="${t.bio[1].replace(/"/g, '&quot;')}">${t.bio[1]}</p>
      </div>

      <div class="about-card">
        <div class="about-card-title">▶ SPECIALIZATION & FOCUS</div>
        <p class="about-card-text typewriter-target" data-original-text="${t.bio[2].replace(/"/g, '&quot;')}">${t.bio[2]}</p>
      </div>

      <div class="about-card">
        <div class="about-card-title">▶ TRAINER SPECS</div>
        <p class="about-card-text">
          <strong>LOCATION:</strong> ${t.location}<br>
          <strong>AFFILIATION:</strong> ${t.affiliation}<br>
          <strong>STATUS:</strong> <span style="color:var(--gba-hp-green);">${t.status}</span>
        </p>
      </div>

      <div class="philosophy-banner">
        <div class="philosophy-title">▶ CORE DEVELOPER PHILOSOPHY</div>
        <div class="philosophy-quote typewriter-target" data-original-text="&quot;Software engineering is about turning complex logic into seamless human experiences. Striving for clean architecture, high reliability, and relentless curiosity.&quot;">
          "Software engineering is about turning complex logic into seamless human experiences. Striving for clean architecture, high reliability, and relentless curiosity."
        </div>
      </div>
    `;
  },

  renderSkills() {
    const container = document.getElementById("skills-container");
    if (!container || !PORTFOLIO_DATA.skills) return;

    container.innerHTML = PORTFOLIO_DATA.skills.map((cat, catIdx) => `
      <div class="skill-category-card">
        <div class="skill-category-head">
          <span>${cat.icon} ${cat.category}</span>
          <span style="font-family:var(--font-pixel); font-size:7px; color:var(--gba-btn-red); background:#fce8e8; padding:2px 5px; border-radius:3px;">RANKED</span>
        </div>
        <div class="skill-items-list">
          ${cat.items.map((skill, sIdx) => {
            const filledBlocks = Math.round(skill.level / 10);
            return `
            <div class="skill-row">
              <div class="skill-meta">
                <span class="skill-name">${skill.name}</span>
                <span class="skill-pct-badge" data-target="${skill.level}">0%</span>
              </div>
              <div class="skill-blocks-track" data-level="${skill.level}">
                ${Array.from({ length: 10 }).map((_, bIdx) => {
                  const isFilled = bIdx < filledBlocks;
                  const delay = bIdx * 0.06;
                  return `<div class="skill-block-segment ${isFilled ? 'is-filled' : 'is-empty'}" style="transition-delay: ${delay}s;" title="${skill.name}: ${(bIdx + 1) * 10}%"></div>`;
                }).join("")}
              </div>
            </div>
          `}).join("")}
        </div>
      </div>
    `).join("");
  },

  renderQuests() {
    const container = document.getElementById("quests-container");
    if (!container || !PORTFOLIO_DATA.quests) return;

    const filtered = this.activeQuestFilter === "all" 
      ? PORTFOLIO_DATA.quests 
      : PORTFOLIO_DATA.quests.filter(q => q.category === this.activeQuestFilter || (this.activeQuestFilter === "featured" && q.featured));

    container.innerHTML = filtered.map(quest => `
      <div class="quest-card" data-quest-id="${quest.id}">
        <div>
          <div class="quest-card-head">
            <span class="quest-number">${quest.questNo}</span>
            <span class="quest-status-badge ${quest.statusColor}">${quest.status}</span>
          </div>
          <h3 class="quest-title">${quest.thumbnailIcon || '⚔️'} ${quest.title}</h3>
          <span class="quest-type-tag">TYPE: ${quest.type}</span>
          <p class="quest-desc">${quest.summary}</p>
        </div>

        <div>
          <div class="quest-tech-tags">
            ${quest.techStack.map(t => `<span class="tech-tag">${t}</span>`).join("")}
          </div>
          <div class="quest-footer">
            <div class="quest-difficulty">DIFF: ${quest.difficulty}</div>
            <div class="quest-actions">
              <button class="quest-action-btn inspect-btn" onclick="App.openQuestModal('${quest.id}')">INSPECT</button>
              ${quest.githubUrl && quest.githubUrl !== '#' ? `<a href="${quest.githubUrl}" target="_blank" rel="noopener" class="quest-action-btn">CODE</a>` : ''}
              ${quest.liveDemoUrl && quest.liveDemoUrl !== '#' ? `<a href="${quest.liveDemoUrl}" target="_blank" rel="noopener" class="quest-action-btn">DEMO</a>` : ''}
            </div>
          </div>
        </div>
      </div>
    `).join("");
  },

  renderJourney() {
    const container = document.getElementById("journey-timeline");
    if (!container || !PORTFOLIO_DATA.journey) return;

    container.innerHTML = `
      <div class="timeline-route">
        <div class="timeline-progress-line" id="timeline-progress-line"></div>
        ${PORTFOLIO_DATA.journey.map(step => `
          <div class="timeline-step">
            <div class="timeline-checkpoint-node"></div>
            <div class="timeline-card">
              <div class="timeline-card-head">
                <span class="timeline-route-tag">${step.level} • ${step.route}</span>
                <span class="timeline-period">${step.period}</span>
              </div>
              <h4 class="timeline-title">${step.title}</h4>
              <div class="timeline-institution">${step.institution} • ${step.grade}</div>
              <p class="timeline-desc typewriter-target" data-original-text="${step.description.replace(/"/g, '&quot;')}">${step.description}</p>
              <div class="timeline-badge-tag">${step.badge}</div>
            </div>
          </div>
        `).join("")}
      </div>
    `;
  },

  renderAchievements() {
    const container = document.getElementById("achievements-grid");
    if (!container || !PORTFOLIO_DATA.achievements) return;

    container.innerHTML = PORTFOLIO_DATA.achievements.map(ach => `
      <div class="badge-case-item" onclick="App.openBadgeModal('${ach.id}')" title="Click to inspect badge">
        <div class="badge-icon-wrap" style="color: ${ach.color};">
          ${ach.icon}
        </div>
        <div class="badge-name">${ach.name}</div>
        <div class="badge-category">${ach.category}</div>
      </div>
    `).join("");
  },

  renderCertificates() {
    const container = document.getElementById("certificates-vault-container");
    if (!container || !PORTFOLIO_DATA.certificates) return;

    container.innerHTML = PORTFOLIO_DATA.certificates.map(cert => `
      <div class="cert-card">
        <div>
          <div class="cert-preview-box" onclick="App.openCertificateModal('${cert.id}')" title="Click to view full certificate">
            <img src="${cert.image}" alt="${cert.title}" class="cert-thumbnail-img" loading="lazy" onerror="this.src='assets/certificates/brainwave_hackathon_astra.jpg'">
            <div class="cert-zoom-overlay">🔍 VIEW FULL</div>
          </div>
          <div style="display:flex; justify-content:space-between; align-items:center; margin-bottom:6px;">
            <span class="quest-status-badge ${cert.badgeColor}">${cert.category}</span>
            <span style="font-family:var(--font-pixel); font-size:7px; color:#607080;">${cert.date}</span>
          </div>
          <h3 class="cert-card-title">${cert.title}</h3>
          <div class="cert-issuer">🏛️ ${cert.issuer}</div>
          <p class="cert-desc">${cert.summary}</p>
        </div>

        <div>
          <ul style="list-style:none; padding:0; margin-bottom:10px; font-size:12.5px; color:#384858; display:flex; flex-direction:column; gap:4px;">
            ${cert.highlights ? cert.highlights.map(h => `<li style="display:flex; gap:6px;"><span style="color:var(--gba-btn-red);">▶</span><span>${h}</span></li>`).join("") : ''}
          </ul>
          <div class="cert-meta-bar">
            <span class="cert-id-tag">ID: ${cert.certNo}</span>
            <button class="quest-action-btn" onclick="App.openCertificateModal('${cert.id}')">INSPECT CERTIFICATE</button>
          </div>
        </div>
      </div>
    `).join("");
  },

  renderMissions() {
    const container = document.getElementById("missions-container");
    if (!container || !PORTFOLIO_DATA.missions) return;

    container.innerHTML = PORTFOLIO_DATA.missions.map(m => `
      <div class="mission-card">
        <div class="mission-head">
          <div>
            <h4 class="mission-role">${m.role}</h4>
            <div class="mission-org">${m.organization} • ${m.location}</div>
          </div>
          <span class="mission-period-badge">${m.period} [${m.type}]</span>
        </div>
        <ul class="mission-bullets">
          ${m.responsibilities.map(r => `<li>${r}</li>`).join("")}
        </ul>
        <div class="quest-tech-tags" style="margin-top: 8px;">
          ${m.techUsed.map(t => `<span class="tech-tag">${t}</span>`).join("")}
        </div>
      </div>
    `).join("");
  },

  renderActivityLog() {
    const statsContainer = document.getElementById("github-stats-container");
    const act = PORTFOLIO_DATA.activityLog;
    if (statsContainer && act) {
      statsContainer.innerHTML = `
        <div class="activity-stat-row">
          <span class="activity-stat-label">GITHUB TRAINER:</span>
          <span class="activity-stat-val">@${act.githubUsername}</span>
        </div>
        <div class="activity-stat-row">
          <span class="activity-stat-label">CONTRIBUTION LEVEL:</span>
          <span class="activity-stat-val">${act.totalContributions}</span>
        </div>
        <div class="activity-stat-row">
          <span class="activity-stat-label">CODING STREAK:</span>
          <span class="activity-stat-val" style="color:var(--gba-hp-green);">${act.streak}</span>
        </div>
        <div class="activity-stat-row">
          <span class="activity-stat-label">CURRENT RESEARCH:</span>
          <span class="activity-stat-val">${act.currentFocus}</span>
        </div>
        <div style="margin-top: 12px;">
          <div style="font-family:var(--font-pixel); font-size:7.5px; margin-bottom:6px; color:#506878;">RECENT LOGS:</div>
          ${act.recentCommits.map(c => `
            <div style="font-size:12px; margin-bottom:4px; color:#334454;">
              <span style="color:var(--gba-btn-red);">[${c.repo}]</span> ${c.msg} <em style="color:#8898a8;">(${c.time})</em>
            </div>
          `).join("")}
        </div>
      `;
    }
  },

  renderContact() {
    const c = PORTFOLIO_DATA.contact;
    const channels = document.getElementById("contact-channels-container");
    if (!channels || !c) return;

    channels.innerHTML = `
      <a href="mailto:${c.email}" class="contact-channel-item">
        <div class="channel-icon">✉️</div>
        <div class="channel-info">
          <h4>TRANSMIT EMAIL</h4>
          <p>${c.email}</p>
        </div>
      </a>

      ${c.phone ? `
      <a href="tel:${c.phone.replace(/[^0-9+]/g, '')}" class="contact-channel-item">
        <div class="channel-icon">📞</div>
        <div class="channel-info">
          <h4>COMMUNICATION LINE (PHONE)</h4>
          <p>${c.phone}</p>
        </div>
      </a>
      ` : ''}

      <a href="${c.linkedin}" target="_blank" rel="noopener" class="contact-channel-item">
        <div class="channel-icon">💼</div>
        <div class="channel-info">
          <h4>LINKEDIN PROFILE</h4>
          <p>Connect for professional networking</p>
        </div>
      </a>

      <a href="${c.github}" target="_blank" rel="noopener" class="contact-channel-item">
        <div class="channel-icon">🐙</div>
        <div class="channel-info">
          <h4>GITHUB CODEBASE</h4>
          <p>Inspect open source repositories (@mbajiya047)</p>
        </div>
      </a>

      <div class="contact-channel-item" style="background:#182434; color:#fff; border-color:var(--gba-gold-outer);">
        <div class="channel-icon" style="background:#0d1522;">📍</div>
        <div class="channel-info">
          <h4 style="color:var(--gba-gold-bright);">LOCATION & AFFILIATION</h4>
          <p style="color:#b0c8e0;">${c.location} &bull; ${c.university || 'SRM University'}</p>
          <p style="color:var(--gba-hp-green); font-size:12px; margin-top:2px;">${c.availabilityStatus}</p>
        </div>
      </div>
    `;
  },

  // ====================================================================
  // 3. AUDIO & HUD CONTROLS
  // ====================================================================
  initAudioAndControls() {
    const soundBtn = document.getElementById("sound-toggle-btn");
    if (soundBtn) {
      soundBtn.innerText = retroAudio.isEnabled() ? "🔊 AUDIO: ON" : "🔇 AUDIO: OFF";
      soundBtn.addEventListener("click", () => {
        const isEnabled = retroAudio.toggle();
        soundBtn.innerText = isEnabled ? "🔊 AUDIO: ON" : "🔇 AUDIO: OFF";
        this.showToast(isEnabled ? "AUDIO SYSTEM ENABLED" : "AUDIO SYSTEM MUTED");
      });
    }

    const crtBtn = document.getElementById("crt-toggle-btn");
    if (crtBtn) {
      crtBtn.addEventListener("click", () => {
        document.body.classList.toggle("scanlines-disabled");
        const isDisabled = document.body.classList.contains("scanlines-disabled");
        crtBtn.innerText = isDisabled ? "📺 CRT: OFF" : "📺 CRT: ON";
        retroAudio.playSelect();
        this.showToast(isDisabled ? "CRT SCANLINES DISABLED" : "CRT SCANLINES ENABLED");
      });
    }

    // Attach subtle audio blips to interactive elements
    document.body.addEventListener("mouseover", (e) => {
      if (e.target.closest("button, .retro-btn, .nav-link, .quest-card, .badge-case-item, .contact-channel-item")) {
        retroAudio.playHover();
      }
    });

    document.body.addEventListener("click", (e) => {
      if (e.target.closest("button, .retro-btn, .nav-link, .quest-action-btn")) {
        retroAudio.playSelect();
      }
    });
  },

  // ====================================================================
  // 4. SCROLL ANIMATIONS & EXP BAR FILL
  // ====================================================================
  initScrollAnimations() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add("is-revealed");

          // Animate skill bars within this section if present
          const skillBars = entry.target.querySelectorAll(".skill-bar-inner");
          skillBars.forEach(bar => {
            bar.style.width = bar.getAttribute("data-width");
          });

          // Count up percentages
          const pctSpans = entry.target.querySelectorAll(".skill-pct, .skill-pct-badge");
          pctSpans.forEach(span => {
            const target = parseInt(span.getAttribute("data-target"), 10);
            let current = 0;
            const timer = setInterval(() => {
              if (current < target) {
                current += 2;
                if (current > target) current = target;
                span.innerText = `${current}%`;
              } else {
                clearInterval(timer);
              }
            }, 20);
          });

          // Trigger live typewriter on any typewriter targets in this section
          const typewriterTargets = entry.target.querySelectorAll(".typewriter-target:not(.timeline-desc)");
          typewriterTargets.forEach((target, tIdx) => {
            setTimeout(() => {
              App.triggerTypewriter(target);
            }, tIdx * 160);
          });
        }
      });
    }, { threshold: 0.12 });

    document.querySelectorAll(".reveal-on-scroll").forEach(el => observer.observe(el));
  },

  // ====================================================================
  // 4.5 JOURNEY SCROLL LIGHTING & LIVE TYPEWRITER ENGINE
  // ====================================================================
  initJourneyScrollLighting() {
    const route = document.querySelector(".timeline-route");
    const progressLine = document.getElementById("timeline-progress-line");
    if (!route) return;

    const updateLighting = () => {
      const steps = document.querySelectorAll(".timeline-step");
      const rect = route.getBoundingClientRect();
      const windowHeight = window.innerHeight;
      const triggerPoint = windowHeight * 0.65;
      
      const startY = rect.top;
      const totalHeight = rect.height || 1;
      const scrolled = triggerPoint - startY;
      const progress = Math.max(0, Math.min(1, scrolled / totalHeight));
      
      if (progressLine) {
        progressLine.style.height = `${progress * 100}%`;
      }

      steps.forEach((step) => {
        const stepRect = step.getBoundingClientRect();
        const node = step.querySelector(".timeline-checkpoint-node");
        if (stepRect.top < triggerPoint) {
          if (!step.classList.contains("is-active-checkpoint")) {
            step.classList.add("is-active-checkpoint");
            if (node) node.classList.add("node-lit");
            
            // Trigger live typewriter on milestone description
            const target = step.querySelector(".typewriter-target");
            if (target) {
              App.triggerTypewriter(target);
            }
          }
        } else {
          step.classList.remove("is-active-checkpoint");
          if (node) node.classList.remove("node-lit");
        }
      });
    };

    window.addEventListener("scroll", updateLighting, { passive: true });
    window.addEventListener("resize", updateLighting, { passive: true });
    setTimeout(updateLighting, 200);
  },

  triggerTypewriter(element) {
    if (!element || element.dataset.hasTyped === "true") return;
    element.dataset.hasTyped = "true";

    const originalText = element.dataset.originalText || element.innerText.trim();
    element.dataset.originalText = originalText;
    element.innerHTML = '<span class="typewriter-content"></span><span class="typewriter-cursor">▋</span>';

    const contentSpan = element.querySelector(".typewriter-content");
    const cursorSpan = element.querySelector(".typewriter-cursor");
    
    let idx = 0;
    const len = originalText.length;
    const speed = Math.max(10, Math.min(22, Math.floor(1200 / len)));

    const typeInterval = setInterval(() => {
      if (idx < len) {
        contentSpan.textContent += originalText[idx];
        idx++;
        if (idx % 4 === 0) {
          retroAudio.playKeyClick();
        }
      } else {
        clearInterval(typeInterval);
        setTimeout(() => {
          if (cursorSpan) cursorSpan.style.display = "none";
        }, 1000);
      }
    }, speed);
  },

  // ====================================================================
  // 5. QUEST LOG FILTER
  // ====================================================================
  initQuestFilter() {
    const tabButtons = document.querySelectorAll(".quest-tab-btn");
    tabButtons.forEach(btn => {
      btn.addEventListener("click", () => {
        tabButtons.forEach(b => b.classList.remove("active"));
        btn.classList.add("active");
        this.activeQuestFilter = btn.getAttribute("data-filter");
        retroAudio.playSelect();
        this.renderQuests();
      });
    });
  },

  // ====================================================================
  // 6. MODALS (QUESTS & BADGES)
  // ====================================================================
  openQuestModal(questId) {
    const quest = PORTFOLIO_DATA.quests.find(q => q.id === questId);
    if (!quest) return;

    retroAudio.playModalOpen();

    const backdrop = document.getElementById("universal-modal-backdrop");
    const content = document.getElementById("universal-modal-content");
    if (!backdrop || !content) return;

    content.innerHTML = `
      <div style="font-family:var(--font-pixel); font-size:8.5px; color:var(--gba-btn-red); margin-bottom:6px;">
        ${quest.questNo} // ${quest.type}
      </div>
      <h2 style="font-family:var(--font-pixel); font-size:16px; color:#182838; margin-bottom:12px; line-height:1.3;">
        ${quest.thumbnailIcon || '⚔️'} ${quest.title}
      </h2>

      <div style="margin-bottom:14px; font-size:15px; color:#283848; line-height:1.6;">
        ${quest.summary}
      </div>

      <div style="background:#ffffff; border:2px solid #8090a0; border-radius:6px; padding:12px; margin-bottom:14px;">
        <div style="font-family:var(--font-pixel); font-size:8px; color:#182430; margin-bottom:8px;">▶ KEY FEATURES & ARCHITECTURE:</div>
        <ul style="list-style:none; padding-left:0; font-size:13.5px; color:#384858; display:flex; flex-direction:column; gap:6px;">
          ${quest.features.map(f => `<li style="display:flex; gap:6px;"><span>▶</span> <span>${f}</span></li>`).join("")}
        </ul>
      </div>

      <div style="margin-bottom:14px;">
        <div style="font-family:var(--font-pixel); font-size:8px; color:#182430; margin-bottom:6px;">▶ TECH STACK:</div>
        <div class="quest-tech-tags">
          ${quest.techStack.map(t => `<span class="tech-tag" style="background:#182434; color:#fff; border-color:var(--gba-gold-outer);">${t}</span>`).join("")}
        </div>
      </div>

      <div style="display:grid; grid-template-columns:1fr 1fr; gap:10px; margin-bottom:16px;">
        <div style="background:#f0f4f8; padding:10px; border-radius:6px; border:1px solid #c0d0e0;">
          <strong style="font-family:var(--font-pixel); font-size:7px; color:var(--gba-btn-red); display:block; margin-bottom:4px;">CHALLENGES:</strong>
          <span style="font-size:13px; color:#334454;">${quest.challenges}</span>
        </div>
        <div style="background:#f0f8f0; padding:10px; border-radius:6px; border:1px solid #b8e0b8;">
          <strong style="font-family:var(--font-pixel); font-size:7px; color:#288848; display:block; margin-bottom:4px;">KEY TAKEAWAY:</strong>
          <span style="font-size:13px; color:#284830;">${quest.learned}</span>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:10px; margin-top:16px; border-top:2px dashed #b0c0d0; padding-top:12px;">
        ${quest.githubUrl && quest.githubUrl !== '#' ? `<a href="${quest.githubUrl}" target="_blank" rel="noopener" class="retro-btn" style="padding:8px 14px; font-size:8px;">VIEW GITHUB REPO</a>` : ''}
        ${quest.liveDemoUrl && quest.liveDemoUrl !== '#' ? `<a href="${quest.liveDemoUrl}" target="_blank" rel="noopener" class="retro-btn retro-btn-success" style="padding:8px 14px; font-size:8px;">LAUNCH DEMO</a>` : ''}
      </div>
    `;

    backdrop.classList.add("active");
  },

  openBadgeModal(badgeId) {
    const badge = PORTFOLIO_DATA.achievements.find(a => a.id === badgeId);
    if (!badge) return;

    retroAudio.playBadgeChime();

    const backdrop = document.getElementById("universal-modal-backdrop");
    const content = document.getElementById("universal-modal-content");
    if (!backdrop || !content) return;

    content.innerHTML = `
      <div style="text-align:center; padding:10px 0;">
        <div style="width:72px; height:72px; margin:0 auto 12px auto; background:#182434; border:4px solid var(--gba-gold-outer); outline:2px solid var(--gba-gold-inner); border-radius:50%; display:flex; justify-content:center; align-items:center; font-size:36px; color:${badge.color};">
          ${badge.icon}
        </div>
        <div style="font-family:var(--font-pixel); font-size:8px; color:var(--gba-btn-red); margin-bottom:4px;">
          ${badge.category} BADGE
        </div>
        <h2 style="font-family:var(--font-pixel); font-size:14px; color:#182838; margin-bottom:8px;">
          ${badge.name}
        </h2>
        <div style="font-family:var(--font-pixel); font-size:9.5px; color:#285888; margin-bottom:12px;">
          ${badge.title}
        </div>
        <div style="background:#ffffff; border:2px solid #8898a8; border-radius:6px; padding:14px; margin-bottom:14px; text-align:left; font-size:14px; color:#384858; line-height:1.6;">
          ${badge.description}
        </div>
        <div style="font-size:13px; color:#687888;">
          <strong>ISSUER:</strong> ${badge.issuer} &bull; <strong>DATE:</strong> ${badge.date}
        </div>
      </div>
    `;

    backdrop.classList.add("active");
  },

  openCertificateModal(certId) {
    const cert = PORTFOLIO_DATA.certificates.find(c => c.id === certId);
    if (!cert) return;

    retroAudio.playBadgeChime();

    const backdrop = document.getElementById("universal-modal-backdrop");
    const content = document.getElementById("universal-modal-content");
    if (!backdrop || !content) return;

    content.innerHTML = `
      <div style="font-family:var(--font-pixel); font-size:8px; color:var(--gba-btn-red); margin-bottom:6px;">
        ${cert.category} // ${cert.certNo}
      </div>
      <h2 style="font-family:var(--font-pixel); font-size:14px; color:#182838; margin-bottom:12px; line-height:1.4;">
        ${cert.title}
      </h2>

      <div style="width:100%; max-height:360px; overflow:hidden; background:#0e1622; border:3px solid var(--gba-gold-outer); border-radius:8px; margin-bottom:14px; display:flex; justify-content:center; align-items:center;">
        <img src="${cert.image}" alt="${cert.title}" style="width:100%; height:auto; max-height:360px; object-fit:contain;" loading="lazy">
      </div>

      <div style="font-size:14px; color:#283848; line-height:1.6; margin-bottom:12px;">
        ${cert.summary}
      </div>

      <div style="background:#f4f8fc; border:2px solid #a0b8d0; border-radius:6px; padding:12px; margin-bottom:12px;">
        <div style="font-family:var(--font-pixel); font-size:7.5px; color:#182838; margin-bottom:6px;">▶ CREDENTIAL SPECIFICATIONS:</div>
        <div style="font-size:13px; color:#384858;">
          <strong>ISSUING BODY:</strong> ${cert.issuer}<br>
          <strong>DEPARTMENT / ORG:</strong> ${cert.department || 'N/A'}<br>
          ${cert.team ? `<strong>HACKATHON TEAM:</strong> ${cert.team}<br>` : ''}
          <strong>DATE OF ISSUANCE:</strong> ${cert.date}<br>
          <strong>VERIFICATION NO:</strong> <span style="font-family:monospace; background:#e0e8f0; padding:1px 4px; border-radius:2px;">${cert.certNo}</span>
        </div>
      </div>

      <div style="display:flex; justify-content:flex-end; gap:8px;">
        <a href="${cert.image}" target="_blank" rel="noopener" class="retro-btn" style="font-size:8px; padding:8px 12px;">OPEN ORIGINAL IMAGE 🔍</a>
      </div>
    `;

    backdrop.classList.add("active");
  },

  closeModal() {
    const backdrop = document.getElementById("universal-modal-backdrop");
    if (backdrop) {
      backdrop.classList.remove("active");
      retroAudio.playCancel();
    }
  },

  // ====================================================================
  // 7. INTERACTIVE RETRO TERMINAL
  // ====================================================================
  initTerminal() {
    const input = document.getElementById("terminal-input");
    const history = document.getElementById("terminal-history");
    const terminalPanel = document.querySelector(".terminal-panel");
    if (!input || !history) return;

    // Focus input when clicking anywhere in terminal panel
    if (terminalPanel) {
      terminalPanel.addEventListener("click", () => {
        input.focus();
      });
    }

    // Play retro key click sound on typing input
    input.addEventListener("input", () => {
      retroAudio.playKeyClick();
    });

    const printLine = (text, type = "output") => {
      const line = document.createElement("div");
      line.className = `terminal-line ${type}`;
      line.innerHTML = text;
      history.appendChild(line);
      history.scrollTop = history.scrollHeight;
    };

    // Welcome message in terminal
    printLine("SYSTEM GBA TERMINAL v2.6.0 — TYPE 'help' FOR COMMANDS", "info");

    input.addEventListener("keydown", (e) => {
      if (e.key === "Backspace" || e.key === "Delete" || e.key === "ArrowUp" || e.key === "ArrowDown") {
        retroAudio.playKeyClick();
      }

      if (e.key === "Enter") {
        const cmd = input.value.trim().toLowerCase();
        if (!cmd) return;

        retroAudio.playSelect();
        printLine(`$ mohit-os> ${input.value}`);
        this.terminalHistory.push(input.value);
        this.terminalHistoryIndex = this.terminalHistory.length;
        input.value = "";

        switch (cmd) {
          case "help":
            PORTFOLIO_DATA.activityLog.terminalHelp.forEach(h => {
              printLine(`&nbsp;&nbsp;<strong style="color:var(--gba-gold-bright);">${h.cmd.padEnd(14, ' ')}</strong> — ${h.desc}`);
            });
            break;

          case "trainer":
            printLine(`TRAINER: ${PORTFOLIO_DATA.trainer.name} | LEVEL: ${PORTFOLIO_DATA.trainer.level} | RANK: ${PORTFOLIO_DATA.trainer.rank}`);
            printLine(`TITLE: ${PORTFOLIO_DATA.trainer.title}`);
            break;

          case "skills":
            PORTFOLIO_DATA.skills.forEach(cat => {
              printLine(`[${cat.category}]`);
              const list = cat.items.map(i => `${i.name} (${i.level}%)`).join(", ");
              printLine(`&nbsp;&nbsp;${list}`, "info");
            });
            break;

          case "quests":
            PORTFOLIO_DATA.quests.forEach(q => {
              printLine(`&bull; [${q.questNo}] ${q.title} (${q.status})`);
            });
            break;

          case "certs":
            PORTFOLIO_DATA.certificates.forEach(c => {
              printLine(`&bull; 📜 [${c.category}] ${c.title} (${c.date})`, "info");
            });
            break;

          case "badges":
            PORTFOLIO_DATA.achievements.forEach(a => {
              printLine(`&bull; ${a.icon} ${a.name} — ${a.title}`);
            });
            break;

          case "contact":
            printLine(`EMAIL: ${PORTFOLIO_DATA.contact.email}`);
            printLine(`GITHUB: ${PORTFOLIO_DATA.contact.github}`);
            printLine(`LINKEDIN: ${PORTFOLIO_DATA.contact.linkedin}`);
            break;

          case "sudo hire-me":
            retroAudio.playLevelUp();
            printLine("🎉 CRITICAL HIT! S-TIER CANDIDATE UNLOCKED. DISPATCHING CONTACT FORM...", "info");
            document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            break;

          case "clear":
            history.innerHTML = "";
            break;

          case "whoami":
            printLine("GUEST_RECRUITER // ACCESS LEVEL: READ_ALL");
            break;

          default:
            printLine(`Command not recognized: '${cmd}'. Type 'help' for command list.`, "output");
        }
      }
    });
  },

  // ====================================================================
  // 8. CONTACT FORM HANDLER
  // ====================================================================
  initContactForm() {
    const form = document.getElementById("portfolio-contact-form");
    if (!form) return;

    form.addEventListener("submit", (e) => {
      e.preventDefault();
      retroAudio.playSelect();

      const name = document.getElementById("form-name")?.value.trim();
      const email = document.getElementById("form-email")?.value.trim();
      const subject = document.getElementById("form-subject")?.value.trim();
      const message = document.getElementById("form-message")?.value.trim();

      if (!name || !email || !message) {
        this.showToast("PLEASE FILL ALL REQUIRED FIELDS!");
        return;
      }

      // If user configured endpoint, submit or fallback to mailto
      const endpoint = PORTFOLIO_DATA.contact.formEndpoint;
      const submitBtn = form.querySelector("button[type='submit']");
      const originalBtnText = submitBtn ? submitBtn.innerHTML : "⚡ SEND TRANSMISSION";

      if (endpoint && endpoint.trim() !== "") {
        if (submitBtn) {
          submitBtn.disabled = true;
          submitBtn.innerHTML = "⚡ TRANSMITTING TO SERVER...";
        }

        fetch(endpoint, {
          method: "POST",
          headers: { 
            "Content-Type": "application/json",
            "Accept": "application/json"
          },
          body: JSON.stringify({ name, email, subject, message })
        }).then(response => {
          if (response.ok) {
            form.reset();
            retroAudio.playQuestReward();
            this.showToast("TRANSMISSION SUCCESSFUL! MESSAGE DELIVERED TO MOHIT.");
          } else {
            response.json().then(data => {
              if (data.errors) {
                this.showToast("TRANSMISSION FAILED: " + data.errors.map(err => err.message).join(", "));
              } else {
                this.fallbackMailto(name, email, subject, message);
              }
            }).catch(() => {
              this.fallbackMailto(name, email, subject, message);
            });
          }
        }).catch(() => {
          this.fallbackMailto(name, email, subject, message);
        }).finally(() => {
          if (submitBtn) {
            submitBtn.disabled = false;
            submitBtn.innerHTML = originalBtnText;
          }
        });
      } else {
        this.fallbackMailto(name, email, subject, message);
        form.reset();
        retroAudio.playQuestReward();
        this.showToast("TRANSMISSION PREPARED IN EMAIL CLIENT!");
      }
    });
  },

  fallbackMailto(name, email, subject, message) {
    const mailtoUrl = `mailto:${PORTFOLIO_DATA.contact.email}?subject=${encodeURIComponent(`[Portfolio Contact] ${subject || 'Inquiry'}`)}&body=${encodeURIComponent(`From: ${name} (${email})\n\n${message}`)}`;
    window.location.href = mailtoUrl;
  },

  // ====================================================================
  // 9. TOAST NOTIFICATIONS
  // ====================================================================
  showToast(message) {
    const toast = document.getElementById("notice-toast");
    if (!toast) return;

    toast.innerText = `[ SYSTEM ]  ${message}`;
    toast.style.display = "block";

    clearTimeout(this.toastTimer);
    this.toastTimer = setTimeout(() => {
      toast.style.display = "none";
    }, 3200);
  },

  // ====================================================================
  // 10. RETRO CANVAS BACKGROUND (60FPS Lightweight)
  // ====================================================================
  initBackgroundCanvas() {
    const canvas = document.getElementById("bg-canvas");
    if (!canvas) return;

    const ctx = canvas.getContext("2d");
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    window.addEventListener("resize", () => {
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    });

    // Retro pixel clouds and stars
    const stars = Array.from({ length: 45 }, () => ({
      x: Math.random() * width,
      y: Math.random() * height,
      size: Math.random() > 0.8 ? 3 : 2,
      blinkSpeed: 0.02 + Math.random() * 0.04,
      alpha: Math.random()
    }));

    const clouds = Array.from({ length: 6 }, () => ({
      x: Math.random() * width,
      y: 40 + Math.random() * (height * 0.4),
      w: 80 + Math.random() * 120,
      h: 24 + Math.random() * 20,
      speed: 0.15 + Math.random() * 0.25
    }));

    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Draw subtle stars
      stars.forEach(star => {
        star.alpha += star.blinkSpeed;
        const opacity = (Math.sin(star.alpha) + 1) / 2 * 0.6 + 0.1;
        ctx.fillStyle = `rgba(248, 208, 48, ${opacity})`;
        ctx.fillRect(Math.floor(star.x), Math.floor(star.y), star.size, star.size);
      });

      // Draw pixel clouds
      clouds.forEach(c => {
        c.x += c.speed;
        if (c.x > width + c.w) c.x = -c.w;

        ctx.fillStyle = "rgba(255, 255, 255, 0.08)";
        ctx.fillRect(Math.floor(c.x), Math.floor(c.y), c.w, c.h);
        ctx.fillRect(Math.floor(c.x + 12), Math.floor(c.y - 8), c.w - 24, c.h + 16);
      });

      requestAnimationFrame(render);
    };

    render();
  },

  // ====================================================================
  // 11. NAVIGATION & SCROLL TRACKING
  // ====================================================================
  initNavigation() {
    const mobileMenuBtn = document.getElementById("mobile-menu-btn");
    const navLinks = document.getElementById("nav-links-menu");
    const backToTop = document.getElementById("back-to-top-btn");

    if (mobileMenuBtn && navLinks) {
      mobileMenuBtn.addEventListener("click", () => {
        navLinks.classList.toggle("mobile-open");
        retroAudio.playSelect();
      });

      // Close menu on link click
      navLinks.querySelectorAll(".nav-link").forEach(link => {
        link.addEventListener("click", () => {
          navLinks.classList.remove("mobile-open");
        });
      });
    }

    // Back to top
    if (backToTop) {
      window.addEventListener("scroll", () => {
        if (window.scrollY > 400) {
          backToTop.classList.add("visible");
        } else {
          backToTop.classList.remove("visible");
        }
      });

      backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        retroAudio.playSelect();
      });
    }

    // Scroll spy for active navbar section
    const sections = document.querySelectorAll("section[id]");
    window.addEventListener("scroll", () => {
      const scrollPos = window.scrollY + 120;
      sections.forEach(section => {
        const top = section.offsetTop;
        const height = section.offsetHeight;
        const id = section.getAttribute("id");

        if (scrollPos >= top && scrollPos < top + height) {
          document.querySelectorAll(".nav-link").forEach(l => l.classList.remove("active"));
          const currentLink = document.querySelector(`.nav-link[href="#${id}"]`);
          if (currentLink) currentLink.classList.add("active");
        }
      });
    });
  }
};
