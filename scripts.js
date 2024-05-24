document.getElementById('loadPythonProjects').addEventListener('click', function() {
  fetch('https://api.github.com/users/Maab-Fathalalim/repos')
    .then(response => response.json())
    .then(data => {
      const pythonProjects = data.filter(repo => repo.language === 'Python');
      const projectContainer = document.getElementById('pythonProjects');
      projectContainer.innerHTML = '';

      pythonProjects.forEach(project => {
        const projectElement = document.createElement('div');
        projectElement.className = 'project';

        const projectTitle = document.createElement('h4');
        projectTitle.textContent = project.name;
        projectElement.appendChild(projectTitle);

        const projectDescription = document.createElement('p');
        projectDescription.textContent = project.description || 'No description available';
        projectElement.appendChild(projectDescription);

        const projectLink = document.createElement('a');
        projectLink.href = project.html_url;
        projectLink.target = '_blank';
        projectLink.textContent = 'View on GitHub';
        projectElement.appendChild(projectLink);

        projectContainer.appendChild(projectElement);
      });
    })
    .catch(error => console.error('Error fetching the repos:', error));
});