let currentPage = 1;
const pages = document.querySelectorAll('.page');

function showPage(pageNumber) {
  pages.forEach(page => page.classList.remove('active'));
  document.getElementById(`page${pageNumber}`).classList.add('active');
  currentPage = pageNumber;
}

function nextPage() {
  if (currentPage < pages.length) {
    showPage(currentPage + 1);
  }
}

function prevPage() {
  if (currentPage > 1) {
    showPage(currentPage - 1);
  }
}
