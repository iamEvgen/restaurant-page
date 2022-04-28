import './style.css';

const startPage = (function() {
    const body = document.querySelector('body');
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
    homeBtn.classList.add('selected');
    homeBtn.textContent = 'Home';
    nav.appendChild(homeBtn);

    const menuBtn = document.createElement('div');
    menuBtn.classList.add('menuBtn');
    menuBtn.textContent = 'Menu';
    nav.appendChild(menuBtn);

    const contact = document.createElement('div');
    contact.textContent = 'Contact';
    nav.appendChild(contact);

    const footerText = document.createElement('div');
    footerText.innerHTML = '<div class="copyText"><span>made by iamEvgen in 2022</span><a href="https://github.com/iamEvgen" target="_blank"><span></span></a></div>';
    footer.appendChild(footerText);
})();