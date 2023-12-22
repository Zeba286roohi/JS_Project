let selectedFilter = '';
let image = document.getElementById('image-preview');
let downloadLink = document.getElementById('download-link');

document.getElementById('image-input').addEventListener('change', function (event) {
  const file = event.target.files[0];
  if (file) {
    const reader = new FileReader();
    reader.onload = function (e) {
      image.src = e.target.result;
      downloadLink.style.display = 'none';
    };
    reader.readAsDataURL(file);
  }
});

function applyFilter() {
  const filterSelect = document.getElementById('filter-select');
  selectedFilter = filterSelect.value;

  if (selectedFilter) {
    image.style.filter = selectedFilter;
    downloadLink.style.display = 'block';
  }
}
