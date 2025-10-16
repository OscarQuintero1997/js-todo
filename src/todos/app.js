import html from './app.html?raw';

/**
 * @param {String} elementId
 */
export const App = (elementId) => {
  const element = document.querySelector(elementId);

  if (!element) {
    console.error(`No se encontró el elemento con selector ${elementId}`);
    return;
  }

  const app = document.createElement('div');
  app.innerHTML = html;
  element.append(app);
};

