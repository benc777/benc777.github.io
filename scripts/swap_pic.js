const profilePic = document.getElementById('profile-pic');

profilePic.addEventListener('mouseenter', () => {
  profilePic.src = 'assets/pepe_cook.png'; // Hover image
});

profilePic.addEventListener('mouseleave', () => {
  profilePic.src = 'assets/ben_profile_pic.png'; // Original image
});



