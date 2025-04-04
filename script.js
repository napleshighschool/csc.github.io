//We're using an object for our data structure.  There is not limit to the number of clubs and interests we can add
const clubs = [
    { name: "Computer Science Club", interests: ["programming","technology","science"]},
    { name: "Fellowship of Christian Athletes", interests: ["faith","encouragement"]},
    { name: "Debate Team", interests: ["competition","writing","debate"]},
    { name: "DECA", interests: ["business","entrepreneur","finance"]},
    { name: "Model United Nations", interests: ["debate","research"]},
    { name: "Crochet Club", interests: ["creativity"]},
    { name: "Word Worms", interests: ["creativity","writing"]},
    { name: "Student Government", interests: ["leadership"]},
    { name: "We Dine Together", interests: ["kindness"]},
    { name: "Future Doctors of America", interests: ["medical field","science"]},
    { name: "Envirothon", interests: ["competition","science","environment"]},
    { name: "Green Club", interests: ["environment"]}, 
    { name: "Academic World Quest", interests: ["competition",]}, 
    { name: "Alliance Club", interests: ["kindness"]}, 
    { name: "American Sign Language Club", interests: ["languages"]}, 
    { name: "Animal Welfare", interests: ["environment", "kindness","volunteering"]},
    { name: "Arts & Crafts Club", interests: ["creativity","art"]}, 
    { name: "Beach Volleyball Club", interests: ["athletics"]}, 
    { name: "Best Buddies", interests: ["kindness","encouragement"]}, 
    { name: "Bible Study Club", interests: ["faith"]}, 
    { name: "Chess Club", interests: ["competition"]}, 
    { name: "City of Naples Youth Council", interests: ["leadership"]}, 
    { name: "Culture Club", interests: ["cultures"]}, 
    { name: "Drawing for Dementia", interests: ["art","kindness","volunteering"]},
    { name: "Engineering & Robotics", interests: ["science","leadership"]}, 
    { name: "Fencing Club", interests: ["athletics"]}, 
    { name: "Film Society", interests: ["films","art"]}, 
    { name: "Finance Club", interests: ["finance","business"]}, 
    { name: "Future Florida Educators of America", interests: ["leadership","encouragement"]},
    { name: "Interact Club", interests: ["volunteering"]}, 
    { name: "Journalism Club", interests: ["art", "creativity"]},
    { name: "Key Club", interests: ["leadership","volunteering"]}, 
    { name: "Kids CAN", interests: ["volunteering","kindness"]},
    { name: "Mu Alpha Theta", interests: ["competition"]}, 
    { name: "Pickleball Club", interests: ["athletics"]}, 
    { name: "Ping Pong Club", interests: ["athletics"]},
    { name: "Scholar Bowl", interests: ["competition"]},
    { name: "Spanish Honor Society (La Sociedad Honoraria Hispánica)", interests: ["languages","cultures"]},
    { name: "Spreading Sunshine", interests: ["creativity","writing","volunteering"]},
    { name: "Student Government Association", interests: ["leadership"]},
    { name: "Tabletop Gaming Club", interests: ["gaming","creativity"]}, 
    { name: "TOMS Campus Club", interests: ["volunteering","kindness"]}, 
    { name: "JROTC Drum Corps", interests: ["music"]},

    
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

//Function to disable right-click
function disableRightClick() { 
alert("Sorry, right click is not allowed !!"); 
return false; 
} 
