// El styles lo importamos aquí, ya se carga después al compilar todo
import '../scss/styles.scss';

const formElement = document.getElementById('form');

const validateForm = event => {
  event.preventDefault();
};

formElement.addEventListener('submit', validateForm);
