// components
import Button from './components/button';

class App {
  initialize() {
    this.components = [new Button()];

    this.setComponents();
    this.attachEvents();
  }

  attachEvents() {}

  setComponents() {
    this.components.forEach(component => {
      component.initialize();
    });
  }
}

window.onload = () => {
  let app = null;

  window.app = app = new App();
  app.initialize();
};
