import './style.css';
import home from './home';
import menu from './menu';
import contact from './contact';


(function() {
  const content = document.querySelector('#content');

  const container = document.createElement('div');
  container.classList.add('container')
  content.appendChild(container);

  const head = document.createElement('div');
  head.classList.add('head')
  container.appendChild(head);

  const bodyContent = document.createElement('div');
  bodyContent.classList.add('bodyContent')
  container.appendChild(bodyContent);

  const footer = document.createElement('div');
  footer.classList.add('footer')
  container.appendChild(footer);

  const logo = document.createElement('div');
  logo.textContent = 'Great Pizza';
  logo.classList.add('logo');
  head.appendChild(logo);

  const nav = document.createElement('div');
  nav.classList.add('nav');
  head.appendChild(nav);

  const homeBtn = document.createElement('div');
  homeBtn.classList.add('homeBtn');
  homeBtn.textContent = 'Home';
  nav.appendChild(homeBtn);

  const menuBtn = document.createElement('div');
  menuBtn.classList.add('menuBtn');
  menuBtn.textContent = 'Menu';
  nav.appendChild(menuBtn);

  const contactBtn = document.createElement('div');
  contactBtn.textContent = 'Contact';
  nav.appendChild(contactBtn);

  const footerText = document.createElement('div');
  footerText.innerHTML = '<div class="copyText">Crafted by iamEvgen in 2022</div>';
  footer.appendChild(footerText);

  const footerLogo = document.createElement('div');
  footerLogo.innerHTML = '<a href="https://github.com/iamEvgen" target="_blank"></a>'
  footer.appendChild(footerLogo);

  const contentField = document.createElement('div');
  contentField.classList.add('contentField');
  bodyContent.appendChild(contentField);

  const homePageSelect = function() {
    homeBtn.classList.add('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.remove('selected');
    contentField.classList.add('hidden');
    contentField.innerHTML = '';
    contentField.appendChild(home.mainPage);
    contentField.classList.add('centerContentField');
    setTimeout(() => {contentField.classList.remove('hidden');}, 1);
  };
  
  const menuPageSelect = function() {
    homeBtn.classList.remove('selected');
    menuBtn.classList.add('selected');
    contactBtn.classList.remove('selected');
    contentField.classList.add('hidden');
    contentField.innerHTML = '';
    contentField.classList.remove('centerContentField');
    contentField.appendChild(menu.cards);
    setTimeout(() => {contentField.classList.remove('hidden');}, 1);
  };

  const contactPageSelect = function() {
    homeBtn.classList.remove('selected');
    menuBtn.classList.remove('selected');
    contactBtn.classList.add('selected');
    contentField.classList.add('hidden');
    contentField.innerHTML = '';
    contentField.classList.remove('centerContentField');
    contentField.appendChild(contact.contactsData);
    setTimeout(() => {contentField.classList.remove('hidden');}, 1);
  };

  homePageSelect();

  homeBtn.addEventListener('click', homePageSelect);
  menuBtn.addEventListener('click', menuPageSelect);
  contactBtn.addEventListener('click', contactPageSelect);
})();