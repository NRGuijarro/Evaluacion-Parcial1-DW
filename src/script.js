document.getElementById('theme').addEventListener('click', () => {
  document.body.classList.toggle('dark-theme');
});

fetch('https://randomuser.me/api/?results=5')
  .then(response => response.json())
  .then(data => {
    const peopleList = document.getElementById('peopleList');
    data.results.forEach(person => {
      const participantDiv = document.createElement('div');
      participantDiv.classList.add('participant');
      participantDiv.innerHTML = `
        <img src="${person.picture.medium}" alt="${person.name.first} ${person.name.last}">
        <p>${person.name.first} ${person.name.last}</p>
      `;
      peopleList.appendChild(participantDiv);
    });
  })
  .catch(error => console.error('Error cargando los participantes:', error));