// JavaScript for hamburger menu functionality
const menuIcon = document.querySelector('.menu-icon');
const menu = document.querySelector('.menu');

menuIcon.addEventListener('click', function () {
  menuIcon.classList.toggle('active');
  menu.classList.toggle('active');

  // Toggle the menu icon between hamburger and close (x) icons
  if (menuIcon.classList.contains('active')) {
    menuIcon.innerHTML = '<i class="fas fa-times"></i>'; // Close (x) icon
  } else {
    menuIcon.innerHTML = '<i class="fas fa-bars"></i>'; // Hamburger icon
  }
});


//JavaScript code for date

// Function to check if it's a new day and update the content
function updateContentBasedOnDay() {
  // Get the current date
  var currentDate = new Date();

  // Get the current day (0 = Sunday, 1 = Monday, ..., 6 = Saturday)
  var currentDay = currentDate.getDay();

  // Check if it's the following day (midnight or the next day)
  if (currentDay === 0) {
    // On Sunday, move content from index.html to yesterday.html
    var indexContent = document.getElementById('index-content');
    var yesterdayContent = document.getElementById('yesterday-content');
    if (indexContent && yesterdayContent) {
      // Clear previous content in yesterday.html
      yesterdayContent.innerHTML = "";
      
      // Move content from index.html to yesterday.html
      while (indexContent.firstChild) {
        yesterdayContent.appendChild(indexContent.firstChild);
      }
    }
  } else if (currentDay === 1) {
    // On Monday, move content from tomorrow.html to index.html
    var tomorrowContent = document.getElementById('tomorrow-content');
    var indexContent = document.getElementById('index-content');
    if (tomorrowContent && indexContent) {
      // Clear previous content in index.html
      indexContent.innerHTML = "";
      
      // Move content from tomorrow.html to index.html
      while (tomorrowContent.firstChild) {
        indexContent.appendChild(tomorrowContent.firstChild);
      }
    }
  }
}

// Function to check the time every second and update the content if it's a new day
function checkTimeAndUpdateContent() {
  // Get the current time
  var currentTime = new Date();

  // Get the remaining time until the next day in milliseconds
  var remainingTime = 24 * 60 * 60 * 1000 - (currentTime.getHours() * 60 * 60 * 1000 + currentTime.getMinutes() * 60 * 1000 + currentTime.getSeconds() * 1000 + currentTime.getMilliseconds());

  // Set a timeout to update the content when it's a new day
  setTimeout(function() {
    updateContentBasedOnDay();
    // Call the function again after 24 hours
    checkTimeAndUpdateContent();
  }, remainingTime);
}

// Call the function to start checking the time and updating the content
checkTimeAndUpdateContent();

//console.log(checkTimeAndUpdateContent());





      
