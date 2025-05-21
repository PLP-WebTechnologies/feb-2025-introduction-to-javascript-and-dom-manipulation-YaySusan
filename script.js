// Text content update
document.getElementById('text-btn').addEventListener('click', function() {
  document.getElementById('title').textContent = 'DNA Sequencing in Plants';
});

// Style modification
document.getElementById('style-btn').addEventListener('click', function() {
  const content = document.getElementById('content');
  content.style.color = 'green';
  content.style.fontWeight = 'bold';
});

// Add/remove element
let toggle = true;
document.getElementById('style-btn').addEventListener('click', function() {
  const container = document.getElementById('container');
  if (toggle) {
    const newElement = document.createElement('p');
    newElement.textContent = 'Mendelian inheritance applies to peas and other species.';
    container.appendChild(newElement);
  } else {
    container.innerHTML = '';
  }
  toggle = !toggle;
});