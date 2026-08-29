/**
 * ====================================================================
 * RETRO 8-BIT AUDIO SYNTHESIZER (Web Audio API)
 * ====================================================================
 * Zero external audio assets needed! Generates authentic GBA/NES
 * square & triangle wave sound effects directly through code.
 * Includes user mute preferences saved to localStorage.
 * ====================================================================
 */

class RetroAudioEngine {
  constructor() {
    this.ctx = null;
    const savedSetting = localStorage.getItem("POKEMON_PORTFOLIO_SOUND");
    this.enabled = savedSetting !== null ? savedSetting === "true" : true;
    this.initialized = false;
  }

  init() {
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
        this.initialized = true;
      }
    }
    if (this.ctx && this.ctx.state === "suspended") {
      this.ctx.resume().catch(() => {});
    }
  }

  toggle() {
    this.enabled = !this.enabled;
    localStorage.setItem("POKEMON_PORTFOLIO_SOUND", this.enabled.toString());
    if (this.enabled) {
      this.init();
      this.playSelect();
    }
    return this.enabled;
  }

  isEnabled() {
    return this.enabled;
  }

  playTone(freq, type = "square", duration = 0.08, gainVal = 0.08, ramp = true) {
    if (!this.enabled) return;
    try {
      this.init();
      if (!this.ctx) return;

      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, this.ctx.currentTime);

      gain.gain.setValueAtTime(gainVal, this.ctx.currentTime);
      if (ramp) {
        gain.gain.exponentialRampToValueAtTime(0.00001, this.ctx.currentTime + duration);
      } else {
        gain.gain.setValueAtTime(0, this.ctx.currentTime + duration);
      }

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start();
      osc.stop(this.ctx.currentTime + duration);
    } catch (e) {
      // Audio autoplay policy fallback
    }
  }

  // --- SOUND EFFECTS ---

  // Subtle button / link hover tick
  playHover() {
    this.playTone(520, "triangle", 0.03, 0.03);
  }

  // Action / Click selection
  playSelect() {
    this.playTone(880, "square", 0.05, 0.06);
  }

  // Cancel / Close dialog
  playCancel() {
    this.playTone(330, "sawtooth", 0.06, 0.05);
  }

  // Boot sequence blip
  playBootBeep() {
    this.playTone(720, "square", 0.04, 0.05);
  }

  // Modal / Quest inspect open
  playModalOpen() {
    if (!this.enabled) return;
    const notes = [440, 659, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "square", 0.05, 0.06), idx * 40);
    });
  }

  // Badge inspect / Achievement click
  playBadgeChime() {
    if (!this.enabled) return;
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "triangle", 0.09, 0.08), idx * 60);
    });
  }

  // Quest complete reward chime
  playQuestReward() {
    if (!this.enabled) return;
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => this.playTone(freq, "square", 0.07, 0.08), idx * 70);
    });
  }

  // Classic level up fanfare
  playLevelUp() {
    if (!this.enabled) return;
    const sequence = [
      { f: 659.25, d: 0.10 },
      { f: 659.25, d: 0.10 },
      { f: 659.25, d: 0.10 },
      { f: 659.25, d: 0.28 },
      { f: 523.25, d: 0.22 },
      { f: 587.33, d: 0.22 },
      { f: 659.25, d: 0.50 }
    ];
    let time = 0;
    sequence.forEach((item) => {
      setTimeout(() => this.playTone(item.f, "square", item.d, 0.12), time * 1000);
      time += item.d + 0.03;
    });
  }

  // Terminal command typing tick
  playKeyClick() {
    this.playTone(400 + Math.random() * 200, "sine", 0.02, 0.02);
  }
}

// Global instance
const retroAudio = new RetroAudioEngine();
