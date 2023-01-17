const url = 'https://randomuser.me/api/?inc=name,login,picture,email,location';

let avatar = document.getElementById('avatar')
let fullName = document.getElementById('fullname')
let userName = document.getElementById('username')
let email = document.getElementById('email')
let city = document.getElementById('city')
let nextBtn = document.getElementById('next-btn')

nextBtn.addEventListener('click', () => {
    fetch(url)
        .then(parseJSON)
        .then(profileUpdate)
})

function parseJSON (res){
    return res.json();
  }

function profileUpdate(profile) {
    avatar.src = profile.results[0].picture.medium;
    fullName.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last; 
    userName.innerHTML = profile.results[0].login.username;
    email.innerHTML = profile.results[0].email;
    city.innerHTML = profile.results[0].location.city;
    return 1;
}