const projects = [
    {
        id: 1,
        title: "Traducteur de Morse",
        description: "Un traducteur de français (alphabet latin) en Morse et inversement.",
        preview: "assets/IMG/Morse_preview.png",
        fullImage: "assets/IMG/Morse_preview.png",
        technologies: ["HTML5", "CSS", "JavaScript"],
        fullDescription: "Traducteur de français vers latin en temps réel.",
        demoLink: "#",
        githubLink: "https://github.com/DwoDwoS/Exercices_Individuels_ADA/tree/main/Exercices_Individuels/5.%20Parlez%20vous%20le%20morse"
    },
    {
        id: 2,
        title: "To Do List",
        description: "Application de gestion de tâches en temps réel.",
        preview: "assets/IMG/Todolist_preview.png",
        fullImage: "assets/IMG/Todolist_preview.png",
        technologies: ["HTML5", "CSS", "JavaScript"],
        fullDescription: "Application permettant d'ajouter ou de supprimmer des tâches à faire, possibilité de les rayer en cliquant dessus. Système de local storage afin de garder ses tâches entre deux connections.",
        demoLink: "https://dwodwos.github.io/ToDoList/",
        githubLink: "https://github.com/DwoDwoS/ToDoList"
    },
    {
        id: 3,
        title: "Weather Dataviz",
        description: "Dashboard météo interactif avec prévisions sur plusieurs jours.",
        preview: "assets/IMG/Weather_preview.png",
        fullImage: "assets/IMG/Weather_preview.png",
        technologies: ["HTML5", "CSS", "OpenWeather API", "JavaScript"],
        fullDescription: "Dashboard météorologique interactif utilisant l'API OpenWeatherMap. Inclut la météo en temps réelle et les prévisions sur 7 jours.",
        demoLink: "#",
        githubLink: "https://github.com/Margot-g44/Dataviz"
    },
    {
        id: 4,
        title: "Mastermind",
        description: "Une adaptation du célèbre jeu de société, Mastermind. Vous allez devoir deviner quel est le code de couleur secret.",
        preview: "assets/IMG/Mastermind.png",
        fullImage: "assets/IMG/Mastermind_colors.png",
        technologies: ["Python", "CustomTKinter"],
        fullDescription: "Adaptation du jeu Mastermind en utilisant Python et CustomTKinter pour l'aspect visuel.",
        demoLink: "#",
        githubLink: "https://github.com/DwoDwoS/Exercices_Individuels_ADA/tree/main/Exercices_Individuels/8.%20Mastermind"
    },
    {
        id: 5,
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
        id: 6,
        title: "Adaction",
        description: "Application de gestion des déchets pour une entreprise fictive nommée Adaction. Avec gestion de bénévoles.",
        preview: "assets/IMG/Adaction_login.png",
        fullImage: "assets/IMG/Adaction_login.png",
        technologies: ["React", "Vite", "Java", "Spring Boot", "NeonDB"],
        fullDescription: "Application web complète avec front-end en React et back-end en Java, Spring Boot, utilisant NeonDB pour la gestion des données.",
        demoLink: "https://github.com/Hellyes31/Projet_Adaction_API",
        githubLink: "https://github.com/DwoDwoS/Project_Adaction_Front"
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