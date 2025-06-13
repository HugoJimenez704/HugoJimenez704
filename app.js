const projectsContainer = document.getElementById('projects-container');

const projects = [
  {
    title: "MEMOCLOCK",
    description: "My first college project. A simple alarm clock that forces the user to play a Simon says game to turn it off.",
    image: "resources/memoclock.png",
    link: "https://github.com/yourusername/project-one",
    tags: ["Arduino", "ESP32"]
  },
  {
    title: "Project Two",
    description: "Another project description.",
    youtube: "dQw4w9WgXcQ",
    link: "https://yourwebsite.com/project-two",
    tags: ["Python", "Flask"]
  }
  // Add more projects as needed
];

let activeTag = null;

function renderTags(tags) {
  return tags.map(tag => `<span class="tag">${tag}</span>`).join(' ');
}

function renderProjects(filterTag = null) {
  const container = document.getElementById('projects');
  container.innerHTML = '';
  projects
    .filter(proj => !filterTag || proj.tags.includes(filterTag))
    .forEach((proj, i) => {
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
        <div class="tags">${renderTags(proj.tags)}</div>
        <p>${proj.description}</p>
        ${proj.link ? `<a href="${proj.link}" target="_blank">View Project</a>` : ''}
      `;
      container.appendChild(div);
    });
}

function renderTagDropdown() {
  const allTags = Array.from(new Set(projects.flatMap(p => p.tags)));
  const filterBar = document.getElementById('tag-filter');
  filterBar.innerHTML = `
    <label for="tag-select" style="font-weight:500;margin-right:0.5em;">Filter by technology:</label>
    <select id="tag-select" class="tag-dropdown">
      <option value="">All</option>
      ${allTags.map(tag => `<option value="${tag}">${tag}</option>`).join('')}
    </select>
  `;

  document.getElementById('tag-select').addEventListener('change', (e) => {
    activeTag = e.target.value || null;
    renderProjects(activeTag);
  });
}

window.addEventListener('DOMContentLoaded', () => {
  // Insert tag filter dropdown above projects
  const main = document.getElementById('projects');
  const filterBar = document.createElement('div');
  filterBar.id = 'tag-filter';
  filterBar.style.textAlign = 'center';
  filterBar.style.marginBottom = '2rem';
  main.parentNode.insertBefore(filterBar, main);

  renderTagDropdown();
  renderProjects();
});