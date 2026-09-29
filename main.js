// Main Variables

let theInput = document.querySelector(".get-repos input");
let getButton = document.querySelector(".get-button");
let reposData = document.querySelector(".show-data");

getButton.onclick = function() {
    getRepos();
};

// Get Repos Function
function getRepos(){
    
    if(theInput.value == ""){ // If Value Is Empty
        reposData.innerHTML = "<span>Please Write Githup Username.</span>";
    }
    else{
        
        fetch(`https://api.github.com/users/${theInput.value}/repos`)

        .then((response) => response.json())

        .then((repositories) =>{
            // console.log(repositories);
            // Empty The Container
            reposData.innerHTML = '';

            // Loop On Repositories
            repositories.forEach(repo => {

                // console.log(repo.name);

                // Create The Main Div Elemnent
                let mainDiv = document.createElement("div");

                // Create Repo Name Text
                let repoName = document.createTextNode(repo.name);

                //Append The Text To Main Div
                mainDiv.appendChild(repoName);

                // Create Repo URL Anchor
                let theUrl = document.createElement('a');

                // Create Repo Url Text
                let theUrlText = document.createTextNode("Visit");

                // Append The Repo URL Text To Anchor Tag
                theUrl.appendChild(theUrlText);

                // Add The Hyper Text Refrence "href"
                theUrl.href = `https://github.com/${theInput.value}/${repo.name}`;

                // Set Attribute Blank
                theUrl.setAttribute('target', '_blank');

                // Append Url Anchor To Main Div
                mainDiv.appendChild(theUrl);

                // Create stars Count Span
                let StarsSpan = document.createElement("span");

                // Create The Stars Count Text
                let starsText = document.createTextNode(`Stars ${repo.stargazers_count}`);

                // Add Stars Count Text  To Stars Span
                StarsSpan.appendChild(starsText);

                // Append Stars Count Span To The Main Div
                mainDiv.appendChild(StarsSpan);

                // Add Class On Main Div 
                mainDiv.className = 'repo-box'


                // Append The Main Div To Container
                reposData.appendChild(mainDiv)
            });
        });

    };
};







