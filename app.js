const projectsContainer = document.getElementById('projects-container');

fetch('projects.json')
  .then(res => res.json())
  .then(projects => {
    projects.forEach((proj, i) => {
      const projectElement = document.createElement('div');
      projectElement.className = 'project';
      projectElement.style.animationDelay = `${i * 0.1 + 0.2}s`;

      let media = '';
      if (proj.image) {
        media = `<img src="${proj.image}" alt="Project image"/>`;
      } else if (proj.youtube) {
        media = `<iframe src="https://www.youtube.com/embed/${proj.youtube}" allowfullscreen></iframe>`;
      }

      projectElement.innerHTML = `
        ${media}
        <h2>${proj.title}</h2>
        <p>${proj.description}</p>
        ${proj.link ? `<a href="${proj.link}" target="_blank">View Project</a>` : ''}
      `;

      projectsContainer.appendChild(projectElement);
    });
  })
  .catch(error => console.error('Error loading projects:', error));