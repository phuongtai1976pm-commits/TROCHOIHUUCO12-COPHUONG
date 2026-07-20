/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

class AudioSynth {
  private ctx: AudioContext | null = null;

  private init() {
    if (!this.ctx) {
      try {
        const AudioContextClass = window.AudioContext || (window as any).webkitAudioContext;
        this.ctx = new AudioContextClass();
      } catch (e) {
        console.error("Web Audio API is not supported in this browser:", e);
      }
    }
    // Resume context if suspended (browser security policies)
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume();
    }
  }

  playSuccess() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    // Cheerful chime: C5 (523Hz), E5 (659Hz), G5 (784Hz), C6 (1046Hz)
    const notes = [523.25, 659.25, 783.99, 1046.50];
    notes.forEach((freq, index) => {
      if (!this.ctx) return;
      const osc = this.ctx.createOscillator();
      const gain = this.ctx.createGain();

      osc.type = 'triangle';
      osc.frequency.setValueAtTime(freq, now + index * 0.08);

      gain.gain.setValueAtTime(0, now + index * 0.08);
      gain.gain.linearRampToValueAtTime(0.12, now + index * 0.08 + 0.02);
      gain.gain.exponentialRampToValueAtTime(0.001, now + index * 0.08 + 0.25);

      osc.connect(gain);
      gain.connect(this.ctx.destination);

      osc.start(now + index * 0.08);
      osc.stop(now + index * 0.08 + 0.3);
    });

    // Simulate "applause" claps using synthesized noise bursts
    for (let i = 0; i < 10; i++) {
      const clapTime = now + 0.05 + Math.random() * 0.45;
      const duration = 0.03 + Math.random() * 0.04;

      try {
        const bufferSize = this.ctx.sampleRate * duration;
        const buffer = this.ctx.createBuffer(1, bufferSize, this.ctx.sampleRate);
        const data = buffer.getChannelData(0);
        for (let j = 0; j < bufferSize; j++) {
          data[j] = Math.random() * 2 - 1;
        }

        const noiseNode = this.ctx.createBufferSource();
        noiseNode.buffer = buffer;

        const filter = this.ctx.createBiquadFilter();
        filter.type = 'bandpass';
        filter.frequency.setValueAtTime(900 + Math.random() * 400, clapTime);
        filter.Q.setValueAtTime(3.5, clapTime);

        const gain = this.ctx.createGain();
        gain.gain.setValueAtTime(0.05, clapTime);
        gain.gain.exponentialRampToValueAtTime(0.001, clapTime + duration);

        noiseNode.connect(filter);
        filter.connect(gain);
        gain.connect(this.ctx.destination);

        noiseNode.start(clapTime);
        noiseNode.stop(clapTime + duration);
      } catch (err) {
        // Fallback if buffer creation fails
        const osc = this.ctx.createOscillator();
        const gain = this.ctx.createGain();
        osc.type = 'sine';
        osc.frequency.setValueAtTime(800 + Math.random() * 200, clapTime);
        gain.gain.setValueAtTime(0.05, clapTime);
        gain.gain.exponentialRampToValueAtTime(0.001, clapTime + 0.03);
        osc.connect(gain);
        gain.connect(this.ctx.destination);
        osc.start(clapTime);
        osc.stop(clapTime + 0.04);
      }
    }
  }

  playFailure() {
    this.init();
    if (!this.ctx) return;
    const now = this.ctx.currentTime;

    const osc = this.ctx.createOscillator();
    const gain = this.ctx.createGain();
    const filter = this.ctx.createBiquadFilter();

    osc.type = 'sawtooth';
    osc.frequency.setValueAtTime(125, now); // soft low-pitch buzz

    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(250, now);

    gain.gain.setValueAtTime(0.15, now);
    gain.gain.exponentialRampToValueAtTime(0.001, now + 0.3);

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.ctx.destination);

    osc.start(now);
    osc.stop(now + 0.35);
  }
}

export const audioSynth = new AudioSynth();
