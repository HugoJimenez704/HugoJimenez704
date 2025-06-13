const projectsContainer = document.getElementById('projects-container');

const projects = [
  {
    title: "Project One",
    description: "Short description of your project goes here.",
    image: "https://via.placeholder.com/320x180?text=Image+1",
    link: "https://github.com/yourusername/project-one"
  },
  {
    title: "Project Two",
    description: "Another project description.",
    youtube: "dQw4w9WgXcQ",
    link: "https://yourwebsite.com/project-two"
  }
];

window.addEventListener('DOMContentLoaded', () => {
  const container = document.getElementById('projects');
  projects.forEach((proj, i) => {
    const div = document.createElement('div');
    div.className = 'project';
    div.style.animationDelay = `${i * 0.1 + 0.2}s`;

    let media = '';
    if (proj.image) {
      media = `<img src="${proj.image}" alt="Project image"/>`;
    } else if (proj.youtube) {
      media = `<iframe src="https://www.youtube.com/embed/${proj.youtube}" allowfullscreen></iframe>`;
    }

    div.innerHTML = `
      ${media}
      <h2>${proj.title}</h2>
      <p>${proj.description}</p>
      ${proj.link ? `<a href="${proj.link}" target="_blank">View Project</a>` : ''}
    `;
    container.appendChild(div);
  });
});