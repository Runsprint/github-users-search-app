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
let body = document.getElementById("body") as HTMLElement;
let search = document.getElementById("search") as HTMLInputElement;
let logo = document.getElementById("logo") as HTMLImageElement;
async function getGithubInfo(url: string) {
  const response = await fetch(url);
  const data = await response.json();
  return data;
}
let data = await getGithubInfo(`https://api.github.com/users/octocat`);
console.log(data);

logo_light.addEventListener("click",()=>{
    body.style.background = "#ffffff";
});
button.addEventListener("click",async ()=>{
  let result = 'https://api.github.com/users/' + search.value; 
  let data = await getGithubInfo(result);
  console.log(data);
  logo.src = data.avatar_url;
  userName.textContent = data.login;
  shortName.textContent = "@" + data.login;
  let dateObject = new Date(data.created_at);//took some object from data
  let dateString = dateObject.toDateString();//after this object transform in string
  let dateArray = dateString.split(" "); //after this string gavsplitet and this space, means splitting one-one and get array
  let [,month,day,year]= dateArray;//after this array transform and gve this names , first is without name, seocnd is month, third day and etc.
  joined.textContent = `Joined ${day} ${month} ${year}`; //after used teamplate literal (this structure with $ and {} and spacs)
  bio.textContent = data.bio;
  repos.textContent = data.public_repos;
  followers.textContent = data.followers;
  following.textContent= data.following;
  userLocation.textContent = data.location;
  github_url.textContent = data.html_url;
  github.textContent = data.company;
})



