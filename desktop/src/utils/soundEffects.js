/**
 * Sound effects utility for window actions
 */

const SOUND_VOLUME = 0.5;

class SoundManager {
  constructor() {
    this.sounds = {
      open: null,
      close: null,
      minimize: null,
      maximize: null,
      focus: null,
      theme: null,
    };
    this.initialized = false;
    this.preloadPromise = null;
  }

  init() {
    if (this.initialized) return;

    // Create and preload all audio files
    this.sounds.open = new Audio("/focus-window.mp3");
    this.sounds.close = new Audio("/close-window.mp3");
    this.sounds.minimize = new Audio("/min-max-window.mp3");
    this.sounds.maximize = new Audio("/min-max-window.mp3");
    this.sounds.focus = new Audio("/focus-window.mp3");
    this.sounds.theme = new Audio("/theme-toggle.mp3");

    // Set volume and preload for all sounds
    Object.values(this.sounds).forEach((audio) => {
      if (audio) {
        audio.volume = SOUND_VOLUME;
        audio.preload = "auto"; // Preload the audio data
        // Force load by calling load()
        audio.load();
      }
    });

    this.initialized = true;
  }

  // Preload all sounds immediately
  preload() {
    if (this.preloadPromise) return this.preloadPromise;

    this.init();

    // Create promises for all audio files to ensure they're loaded
    const loadPromises = Object.values(this.sounds).map((audio) => {
      if (!audio) return Promise.resolve();

      return new Promise((resolve) => {
        if (audio.readyState >= 3) {
          // HAVE_FUTURE_DATA or better
          resolve();
        } else {
          audio.addEventListener("canplaythrough", resolve, { once: true });
          audio.addEventListener("error", resolve, { once: true }); // Resolve even on error
        }
      });
    });

    this.preloadPromise = Promise.all(loadPromises);
    return this.preloadPromise;
  }

  play(soundName) {
    this.init(); // Ensure initialized

    const sound = this.sounds[soundName];
    if (sound) {
      // Clone and play to allow overlapping sounds
      const clone = sound.cloneNode();
      clone.volume = SOUND_VOLUME;
      clone.play().catch((err) => {
        console.warn(`Failed to play ${soundName} sound:`, err);
      });
    }
  }

  playOpen() {
    this.play("open");
  }

  playClose() {
    this.play("close");
  }

  playMinimize() {
    this.play("minimize");
  }

  playMaximize() {
    this.play("maximize");
  }

  playFocus() {
    this.play("focus");
  }

  playTheme() {
    this.play("theme");
  }
}

export const soundManager = new SoundManager();
