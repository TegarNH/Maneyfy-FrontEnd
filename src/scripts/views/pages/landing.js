import { redirectIfAlreadytLoggedin } from '../../utils/redirect-page';
import { setupPageUserNotLoggedin } from '../../utils/setup-page';

const Landing = {
  async beforeRender() {
    redirectIfAlreadytLoggedin();
  },

  async render() {
    return `
      <header id="header" class="header-landing fixed-top">      
        <app-bar></app-bar>
      </header>
    
      <main class="main-landing">
        <hero-landing></hero-landing>
        <features-maneyfy></features-maneyfy>
        <register-now></register-now>
      </main>
    
      <footer>
        <p><a href="https://github.com/TegarNH" target="_blank" rel="noopener">Copyright 2023 - Maneyfy </p>
      </footer>
    `;
  },

  async afterRender() {
    try {
      setupPageUserNotLoggedin();
    } catch (error) {
      console.log(error);
    }
  },
};

export default Landing;
