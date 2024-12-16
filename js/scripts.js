// Ajouter un projet fictif
document.getElementById('create-btn').addEventListener('click', function () {
    const newProject = document.createElement('li');
    newProject.textContent = `Projet ${document.querySelectorAll('#project-list li').length + 1} - Nouveau`;
    document.getElementById('project-list').appendChild(newProject);
});

// Envoi de messages dans le tchat
document.getElementById('send-btn').addEventListener('click', function () {
    const input = document.getElementById('chat-input');
    const message = input.value.trim();
    if (message) {
        const chatBox = document.getElementById('chat-box');
        const newMessage = document.createElement('p');
        newMessage.innerHTML = `<strong>Vous :</strong> ${message}`;
        chatBox.appendChild(newMessage);
        input.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;
    }
});
