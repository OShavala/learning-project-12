let timeout;

function showOptions() {
  clearTimeout(timeout);
  document.getElementById("shareOptions").style.display = "block";
}

function hideOptions() {
  timeout = setTimeout(() => {
    document.getElementById("shareOptions").style.display = "none";
  }, 500); 
}

document.getElementById("shareBtn").addEventListener("mouseenter", showOptions);
document.getElementById("shareBtn").addEventListener("mouseleave", hideOptions);
document.getElementById("shareOptions").addEventListener("mouseenter", showOptions);
document.getElementById("shareOptions").addEventListener("mouseleave", hideOptions);


function sendToDevice() {
  console.log('Надіслати на пристрій');
  }
  
  function generateQR() {
  console.log('QR-код');
  }
  
  function copyLink() {
  console.log('Копіювати');
  }
  
  function uploadToGoogleDrive() {
   console.log('Google Диск');
  }
  