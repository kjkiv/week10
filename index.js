let button = document.getElementById('my-button');
document.getElementById('add').addEventListener('click', () => {
    var parent = document.getElementById('paragraphs');
    var newElement = document.createElement('p')
    newElement.innerHTML = document.getElementById('new-text').value;
    parent.appendChild(newElement);
});