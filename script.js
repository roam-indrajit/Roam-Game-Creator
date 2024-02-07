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


let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  // Prevent the default browser prompt
  event.preventDefault();

  // Stash the event so it can be triggered later
  deferredPrompt = event;

  // Display your own install button or custom UI
  // For example, show a button to prompt the user to install the app
  showInstallButton();
});

function showInstallButton() {
  // Display your own install button or custom UI
  // For example, show a button to prompt the user to install the app
  const installButton = document.getElementById('installButton');
  installButton.style.display = 'block';

  installButton.addEventListener('click', () => {
    // Show the browser's install prompt
    deferredPrompt.prompt();

    // Wait for the user to respond to the prompt
    deferredPrompt.userChoice.then((choiceResult) => {
      if (choiceResult.outcome === 'accepted') {
        console.log('User accepted the install prompt');
        // Optionally, you can track or log installations here
      } else {
        console.log('User dismissed the install prompt');
        // Optionally, you can handle user dismissal here
      }
      // Reset the deferredPrompt variable
      deferredPrompt = null;
    });
  });
}