import mapImg from './img/map.jpeg';

const contacts = (function() {
  const contactsData = document.createElement('div');
  contactsData.classList.add('contactsData');

  const phone = document.createElement('p');
  phone.textContent = '📱 +1 (999) 123-45-67';

  const address = document.createElement('p');
  address.textContent = '🏣 26110 Jewett Pl Calcium, New York(NY), 13616';

  const map = document.createElement('img');
  map.src = mapImg;

  contactsData.appendChild(phone);
  contactsData.appendChild(address);
  contactsData.appendChild(map);

  return { contactsData };
})();

export default contacts;