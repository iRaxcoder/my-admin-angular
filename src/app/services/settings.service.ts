import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class SettingsService {
  public linkTheme = document.querySelector('#theme');

  constructor() {
    const url =
      localStorage.getItem('adminTheme') ||
      './assets/css/colors/purple-dark.css';
    this.linkTheme?.setAttribute('href', url);
  }

  changeTheme(theme: string) {
    const url = `./assets/css/colors/${theme}.css`;
    this.linkTheme?.setAttribute('href', url);
    localStorage.setItem('adminTheme', url);
    this.checkCurrentTheme();
  }

  checkCurrentTheme() {
    const themeLinks = document.querySelectorAll('.selector');
    themeLinks.forEach((link) => {
      link.classList.remove('working');
      const btnTheme = link.getAttribute('data-theme');
      const btnThemeUrl = `./assets/css/colors/${btnTheme}.css`;
      const currentTheme = this.linkTheme?.getAttribute('href');
      if (currentTheme === btnThemeUrl) {
        link.classList.add('working');
      }
    });
  }
}
