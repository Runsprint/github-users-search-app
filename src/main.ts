let button = document.getElementById("butt")as HTMLButtonElement;
let userName= document.getElementById("name")as HTMLElement;
let shortName = document.getElementById("@octocat")as HTMLElement;
let joined = document.getElementById("joined")as HTMLElement;
let bio = document.getElementById("bio")as HTMLElement;
let repos = document.getElementById("repos")as HTMLElement;
let followers = document.getElementById("followers")as HTMLElement;
let following = document.getElementById("following")as HTMLElement;
let userLocation = document.getElementById("location")as HTMLElement;
let github_url = document.getElementById("github_link")as HTMLElement;
let github = document.getElementById("@github")as HTMLElement;
let logo_light = document.getElementById("logo_light")as HTMLDivElement;
let logo = document.getElementById("logo") as HTMLImageElement;
let available = document.getElementById("available") as HTMLElement;
let noResult = document.getElementById("noResult")as HTMLElement;
let devfinder= document.getElementById("devfinder")as HTMLElement;
let moon = document.getElementById("moon")as HTMLImageElement;
let sun_moon = document.getElementById("sun_moon")as HTMLImageElement;
let div2 = document.querySelectorAll(".div2");
let elements= document.querySelectorAll(".h1");
let body_color = document.querySelectorAll(".body_color");
let numbers = document.querySelectorAll(".numbers");
let loc = document.querySelector('.pictures') as HTMLElement;
let search = document.querySelector('input') as HTMLInputElement;// how to change input placeholder text color 
let loc2 = document.querySelector('.pictures2') as HTMLElement;
let loc3 = document.querySelector('.pictures3') as HTMLElement;
let light = document.querySelector(".light")as HTMLElement;
let inputValue = document.getElementById("search")as HTMLInputElement;

// async function getGithubInfo(url: string) {
//   const response = await fetch(url);
//   const data = await response.json();
//   return data;
// }

// let data = await getGithubInfo(`https://api.github.com/users/octocat`);
// logo.src= data.avatar_url;
// console.log(data);

let isClicked = false;
logo_light.addEventListener("click",()=>{
  if(!isClicked){
    body_color.forEach((element) => {
      (element as HTMLElement).style.background = "#F6F8FF";
    });

      devfinder.style.color="black";
      logo_light.style.color= "#4B6A9B";
      sun_moon.style.display= "none";
      moon.style.display= "flex";
      search.style.background="#ffffff";//i deleted and add new classname , which I didnt use in html, just classed in css and used it with this code
      search.classList.remove('search'); 
      search.classList.add('dark_input'); 
  
      div2.forEach((element) => {
        (element as HTMLElement).style.background = '#ffffff';
      });

      userName.style.color="black";

      elements.forEach((element) => {
        (element as HTMLElement).style.color = '#697C9A';
      });

      numbers.forEach((element) => {
        (element as HTMLElement).style.color = 'black';
      });

      loc.classList.remove('pictures'); 
      loc.classList.add('svgcolor');
      loc2.classList.remove('pictures2'); 
      loc2.classList.add('svgcolor');
      loc3.classList.remove('pictures3'); 
      loc3.classList.add('svgcolor');
      light.textContent= "Dark"; 
      isClicked = true;
  } else{

    body_color.forEach((element) => {
      (element as HTMLElement).style.background = "#141D2F";
    });

    search.style.background="#1E2A47";
    devfinder.style.color="white";
    logo_light.style.color= "white";
    sun_moon.style.display= "flex";
    moon.style.display= "none";   
    loc.classList.remove('svgcolor'); 
    loc.classList.add('pictures');
    loc2.classList.remove('svgcolor'); 
    loc2.classList.add('pictures2');
    loc3.classList.remove('svgcolor'); 
    loc3.classList.add('pictures3');   

    div2.forEach((element) => {
      (element as HTMLElement).style.background = '#1E2A47';
    });

    userName.style.color="white";

    elements.forEach((element) => {
      (element as HTMLElement).style.color = 'white';
    });

    numbers.forEach((element) => {
      (element as HTMLElement).style.color = 'white';
     }); 

     light.textContent= "Light";      
     isClicked = false; 
 }
});


button.addEventListener("click",async ()=>{debugger
  try {
      let url = 'https://api.github.com/users/' + inputValue.value;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data);
        if(!response.ok){
            throw new Error("Failed to fetch data");   
         } else {
          noResult.style.display= "none"; 
          logo.src = data.avatar_url;
          userName.textContent = data.login;
          shortName.textContent = "@" + data.login;
          let dateObject = new Date(data.created_at);//took some object from data
          let dateString = dateObject.toDateString();//after this object transform in string
          let dateArray = dateString.split(" "); //after this string gavsplitet and this space, means splitting one-one and get array
          let [,month,day,year]= dateArray;//after this array transform and gve this names , first is without name, seocnd is month, third day and etc.
          joined.textContent = `Joined ${day} ${month} ${year}`; //after used teamplate literal (this structure with $ and {} and spacs)
          bio.textContent = data.bio?data.bio : available.textContent;
          repos.textContent = data.public_repos?data.public_repos : available.textContent;
          followers.textContent = data.followers?data.followers : available.textContent;
          following.textContent= data.following?data.following : available.textContent;
          userLocation.textContent = data.location?data.location: available.textContent;
          github_url.textContent = data.html_url?data.html_url:available.textContent ;
          github.textContent = data.company?data.company : available.textContent;  
         } 
  } catch(error){
    noResult.style.display= "flex"; 
  }

})



