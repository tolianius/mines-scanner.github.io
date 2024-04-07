document.addEventListener("DOMContentLoaded", function() {
  setTimeout(function() {
      var flashMessage = document.getElementById('flashMessage');
      if(flashMessage) {
          flashMessage.style.display = 'none';
      }
  }, 3000); 
});

document.getElementById('flipButton').addEventListener('click', async function() {
  const loading = document.getElementById('loading');
  const photoContainer = document.getElementById('photoContainer');
  photoContainer.style.display = 'none';
  loading.style.display = 'block';
  
  await new Promise(resolve => setTimeout(resolve, 2000));
  const randomPhotoNumber = Math.floor(Math.random() * 96) + 1;
  photoContainer.style.backgroundImage = `url('photos/${randomPhotoNumber}.jpg')`;
  photoContainer.style.display = 'block';
  loading.style.display = 'none';
});



