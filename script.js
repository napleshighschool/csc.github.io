//We're using an object for our data structure.  There is not limit to the number of clubs and interests we can add
const clubs = [
    { name: "Computer Science Club", interests: ["programming", "technology", "web development"] },
    { name: "Academic World Quest", interests: [""]},
    // Add more clubs and their associated interests
  ];

//Below you will find the JavaScript code for our club page's functionality

  // Function to filter clubs based on selected interests
  function findClubs() {
    const selectedInterests = Array.from(document.querySelectorAll('input[name="interest"]:checked'))
      .map(el => el.value);
  
    const matchingClubs = clubs.filter(club => {
      return club.interests.some(interest => selectedInterests.includes(interest));
    });
  
    displayClubs(matchingClubs);
  }
  
  // Function to display the matching clubs
  function displayClubs(clubs) {
    const resultsContainer = document.getElementById("results");
    resultsContainer.innerHTML = "";
  
    if (clubs.length === 0) {
      resultsContainer.innerHTML = "<p>No matching clubs found.</p>";
    } else {
      const clubList = document.createElement("ul");
      clubs.forEach(club => {
        const listItem = document.createElement("li");
        listItem.textContent = club.name;
        clubList.appendChild(listItem);
      });
      resultsContainer.appendChild(clubList);
    }
  }
