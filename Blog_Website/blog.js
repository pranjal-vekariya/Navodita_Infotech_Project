// admin.js
document.addEventListener('DOMContentLoaded', function () {
    const createForm = document.getElementById('create-article-form');
    const editArticlesList = document.getElementById('edit-articles-list');
    const publishArticlesList = document.getElementById('publish-articles-list');

    // Mock data for demonstration
    let articles = [
        { id: 1, title: 'First Article', content: 'This is the content of the first article.', published: false },
        { id: 2, title: 'Second Article', content: 'This is the content of the second article.', published: true }
    ];

    // Function to render editable articles
    function renderEditableArticles() {
        editArticlesList.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <textarea>${article.content}</textarea>
                <button onclick="updateArticle(${article.id})">Update</button>
            `;
            editArticlesList.appendChild(articleElement);
        });
    }

    // Function to render publishable articles
    function renderPublishableArticles() {
        publishArticlesList.innerHTML = '';
        articles.forEach(article => {
            const articleElement = document.createElement('div');
            articleElement.innerHTML = `
                <h3>${article.title}</h3>
                <button onclick="togglePublishArticle(${article.id})">${article.published ? 'Unpublish' : 'Publish'}</button>
            `;
            publishArticlesList.appendChild(articleElement);
        });
    }

    // Function to create a new article
    createForm.addEventListener('submit', function (event) {
        event.preventDefault();
        const title = document.getElementById('title').value;
        const content = document.getElementById('content').value;
        const newArticle = { id: articles.length + 1, title, content, published: false };
        articles.push(newArticle);
        renderEditableArticles();
        renderPublishableArticles();
        createForm.reset();
    });

    // Mock function to update an article (placeholder for actual implementation)
    window.updateArticle = function (id) {
        const article = articles.find(article => article.id === id);
        const newContent = document.querySelector(textarea).value;
        article.content = newContent;
    };

    // Mock function to publish/unpublish an article (placeholder for actual implementation)
    window.togglePublishArticle = function (id) {
        const article = articles.find(article => article.id === id);
        article.published = !article.published;
        renderPublishableArticles();
    };

    // Initial render
    renderEditableArticles();
    renderPublishableArticles();
});