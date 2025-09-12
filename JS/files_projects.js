const projects = [
            {
                id: 1,
                title: "Adaopte",
                description: "Application de recherche d'animaux abandonnés pour les adopter.",
                preview: "assets/IMG/adaopte.svg",
                fullImage: "assets/IMG/adaopte.svg",
                technologies: ["HTML5", "CSS", "Tailwind", "JavaScript"],
                fullDescription: "Une application qui permet de mettre en relation des personnes avec des animaux abandonnés, afin de les adopter. Avec une possibilité de devenir bénévole pour aider et prendre soin des animaux.",
                demoLink: "#",
                githubLink: "https://github.com/DwoDwoS/projet_Adaopte"
            },
            {
                id: 2,
                title: "To Do List",
                description: "Application de gestion de tâches en temps réel.",
                preview: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%234CAF50' width='300' height='200'/%3E%3Ctext x='150' y='100' font-family='Arial' font-size='18' fill='white' text-anchor='middle'%3ETo Do List%3C/text%3E%3C/svg%3E",
                fullImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%234CAF50' width='600' height='400'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3ETo Do List%3C/text%3E%3C/svg%3E",
                technologies: ["HTML5", "CSS", "JavaScript"],
                fullDescription: "Application permettant d'ajouter ou de supprimmer des tâches à faire, possibilité de les rayer en cliquant dessus. Système de local storage afin de garder ses tâches entre deux connections.",
                demoLink: "#",
                githubLink: "https://github.com/DwoDwoS/ToDoList"
            },
            {
                id: 3,
                title: "Weather Dataviz",
                description: "Dashboard météo interactif avec prévisions sur plusieurs jours.",
                preview: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%232196F3' width='300' height='200'/%3E%3Ctext x='150' y='100' font-family='Arial' font-size='18' fill='white' text-anchor='middle'%3EWeather Dataviz%3C/text%3E%3C/svg%3E",
                fullImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%232196F3' width='600' height='400'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3EWeather Dataviz%3C/text%3E%3C/svg%3E",
                technologies: ["HTML5", "CSS", "OpenWeather API", "JavaScript"],
                fullDescription: "Dashboard météorologique interactif utilisant l'API OpenWeatherMap. Inclut la météo en temps réelle et les prévisions sur 7 jours.",
                demoLink: "#",
                githubLink: "https://github.com/Margot-g44/Dataviz"
            },
            {
                id: 4,
                title: "Traducteur de Morse",
                description: "Un traducteur de français (alphabet latin) en Morse et inversement.",
                preview: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='300' height='200' viewBox='0 0 300 200'%3E%3Crect fill='%239C27B0' width='300' height='200'/%3E%3Ctext x='150' y='100' font-family='Arial' font-size='18' fill='white' text-anchor='middle'%3ETraducteur%3C/text%3E%3C/svg%3E",
                fullImage: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='600' height='400' viewBox='0 0 600 400'%3E%3Crect fill='%239C27B0' width='600' height='400'/%3E%3Ctext x='300' y='200' font-family='Arial' font-size='30' fill='white' text-anchor='middle'%3ETraducteur%3C/text%3E%3C/svg%3E",
                technologies: ["HTML5", "CSS", "JavaScript"],
                fullDescription: "Traducteur de français vers latin en temps réel.",
                demoLink: "#",
                githubLink: "https://github.com/DwoDwoS/Exercices_Individuels_ADA/tree/main/Exercices_Individuels/5.%20Parlez%20vous%20le%20morse"
            }
        ];

        function createFilingCabinet() {
            const cabinet = document.getElementById('filingCabinet');
            
            projects.forEach(project => {
                const drawer = document.createElement('div');
                drawer.className = 'file-drawer';
                drawer.innerHTML = `
                    <div class="file-tab">PROJET #${project.id.toString().padStart(3, '0')}</div>
                    <div class="classified-stamp">CLASSIFIÉ</div>
                    <div class="file-content" onclick="openProject(${project.id})">
                        <div class="file-preview">
                            <img src="${project.preview}" alt="${project.title}">
                        </div>
                        <div class="file-info">
                            <div class="file-title">${project.title}</div>
                            <div class="file-description">${project.description}</div>
                            <div class="file-tech">
                                ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                            </div>
                        </div>
                    </div>
                `;
                cabinet.appendChild(drawer);
            });
        }

        function openProject(projectId) {
            const project = projects.find(p => p.id === projectId);
            if (!project) return;

            const modal = document.getElementById('projectModal');
            const content = document.getElementById('projectContent');
            
            content.innerHTML = `
                <img src="${project.fullImage}" alt="${project.title}">
                <h2>${project.title}</h2>
                <p>${project.fullDescription}</p>
                <div class="file-tech">
                    ${project.technologies.map(tech => `<span class="tech-tag">${tech}</span>`).join('')}
                </div>
                <div class="project-links">
                    <a href="${project.demoLink}" class="project-link" target="_blank">Voir la démo</a>
                    <a href="${project.githubLink}" class="project-link" target="_blank">Code source</a>
                </div>
            `;
            
            modal.classList.add('active');
            document.body.style.overflow = 'hidden';
        }

        function closeProject() {
            const modal = document.getElementById('projectModal');
            modal.classList.remove('active');
            document.body.style.overflow = 'auto';
        }

        document.getElementById('projectModal').addEventListener('click', function(e) {
            if (e.target === this) {
                closeProject();
            }
        });

        document.addEventListener('keydown', function(e) {
            if (e.key === 'Escape') {
                closeProject();
            }
        });

        document.addEventListener('DOMContentLoaded', function() {
            createFilingCabinet();
        });