import { Component } from '@angular/core';

@Component({
  selector: 'music',
  templateUrl: './music.component.html',
  styleUrls: ['./music.component.css']
})
export class MusicComponent {
  title = 'angular-music-player';
  audio = new Audio();
  currentTime = '0:00';
  musicLength = '0:00';
  trackPointer = 0;

  musicList = [
    { title: "Digital Dreams", artist: "Nova Skye", album: "Elysium Nights", url: "assets/1.mp3" },
    { title: "Infinite Beats", artist: "Luna Ray", album: "Sonic Horizons", url: "assets/2.mp3" },
    { title: "Starlit Journey", artist: "Astra Bloom", album: "Celestial Voyage", url: "assets3.mp3" },
    { title: "Echoes of Eternity", artist: "Echo Smith", album: "Timeless Melodies", url: "assets/3.mp3" },
    { title: "Rhythm of the Night", artist: "Jade Harmony", album: "Nocturnal Grooves", url: "assets/4.mp3" },
    { title: "Cosmic Vibes", artist: "Orion Waves", album: "Galactic Beats", url: "assets/5.mp3" },
    { title: "Whispers of the Wind", artist: "Skylar Frost", album: "Nature's Serenade", url: "assets/6.mp3" },
    { title: "Neon Lights", artist: "Violet Blaze", album: "Urban Echoes", url: "assets/7.mp3" },
    { title: "Serenade in Space", artist: "Lunar Echo", album: "Astral Dreams", url: "assets/8.mp3" },
    { title: "Eclipse Horizon", artist: "Zenith Dawn", album: "Mystic Skies", url: "assets/9.mp3" },
    { title: "Pulse of the Universe", artist: "Celeste Waves", album: "Rhythmic Journeys", url: "assets/9.mp3" },
    { title: "Celestial Melody", artist: "Aurora Shine", album: "Dreamscape", url: "assets10.mp3"},
    { title: "Crystalline Waves", artist: "Elysia Ray", album: "Reflections", url: "assets/11.mp3" },
  ];

  currentMusic = this.musicList[0];

  constructor() {
    this.audio.ontimeupdate = () => this.updateTime();
    this.audio.onloadedmetadata = () => this.setDuration();
  }

  play(index?: number): void {
    if (index !== undefined) {
      this.trackPointer = index;
      this.currentMusic = this.musicList[index];
      this.audio.src = this.currentMusic.url;
    }
    this.audio.paused ? this.audio.play() : this.audio.pause();
  }

  prev(): void {
    this.trackPointer = Math.max(this.trackPointer - 1, 0);
    this.play(this.trackPointer);
  }

  next(): void {
    this.trackPointer = Math.min(this.trackPointer + 1, this.musicList.length - 1);
    this.play(this.trackPointer);
  }

  updateTime(): void {
    this.currentTime = this.formatTime(this.audio.currentTime);
  }

  setDuration(): void {
    this.musicLength = this.formatTime(this.audio.duration);
  }

  formatTime(seconds: number): string {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = String(Math.floor(seconds % 60)).padStart(2, '0');
    return `${minutes}:${remainingSeconds}`;
  }
}
