const url = " https://randomuser.me/api/?results=6 ";

let avatar = document.getElementById("avatar");
let fullname = document.getElementById("fullname");
let city = document.getElementById("city");
let email = document.getElementById("email");
let bday = document.getElementById("bday");
let phone = document.getElementById("phone");
let btn = document.getElementById("btn");
fetch(url)
  .then(parseJSON)
  .then(updateProfile);

btn.addEventListener("click", function () {
  fetch(url)
    .then(parseJSON)
    .then(updateProfile);

});

function parseJSON(res) {
  return res.json();
}

function updateProfile(profile) {
  avatar5.src = profile.results[5].picture.medium;
  fullname5.innerHTML = profile.results[5].name.first + " " + profile.results[5].name.last;
  email5.innerHTML = profile.results[5].email;
  city5.innerHTML = profile.results[5].location.city;
  bday5.innerHTML = profile.results[5].dob.date + " " + profile.results[5].dob.age;
  phone5.innerHTML = profile.results[5].phone;
  //----------------------------------------------
  avatar4.src = profile.results[4].picture.medium;
  fullname4.innerHTML = profile.results[4].name.first + " " + profile.results[4].name.last;
  email4.innerHTML = profile.results[4].email;
  city4.innerHTML = profile.results[4].location.city;
  bday4.innerHTML = profile.results[4].dob.date + " " + profile.results[4].dob.age;
  phone4.innerHTML = profile.results[4].phone;
  //----------------------------------------------
  avatar0.src = profile.results[0].picture.medium;
  fullname0.innerHTML = profile.results[0].name.first + " " + profile.results[0].name.last;
  email0.innerHTML = profile.results[0].email;
  city0.innerHTML = profile.results[0].location.city;
  bday0.innerHTML = profile.results[0].dob.date + " " + profile.results[0].dob.age;
  phone0.innerHTML = profile.results[0].phone;
  //----------------------------------------------
  avatar1.src = profile.results[1].picture.medium;
  fullname1.innerHTML = profile.results[1].name.first + " " + profile.results[1].name.last;
  email1.innerHTML = profile.results[1].email;
  city1.innerHTML = profile.results[1].location.city;
  bday1.innerHTML = profile.results[1].dob.date + " " + profile.results[1].dob.age;
  phone1.innerHTML = profile.results[1].phone;
  //----------------------------------------------
  avatar2.src = profile.results[2].picture.medium;
  fullname2.innerHTML = profile.results[2].name.first + " " + profile.results[2].name.last;
  email2.innerHTML = profile.results[2].email;
  city2.innerHTML = profile.results[2].location.city;
  bday2.innerHTML = profile.results[2].dob.date + " " + profile.results[2].dob.age;
  phone2.innerHTML = profile.results[2].phone;
  //----------------------------------------------
  avatar3.src = profile.results[3].picture.medium;
  fullname3.innerHTML = profile.results[3].name.first + " " + profile.results[3].name.last;
  email3.innerHTML = profile.results[3].email;
  city3.innerHTML = profile.results[3].location.city;
  bday3.innerHTML = profile.results[3].dob.date + " " + profile.results[3].dob.age;
  phone3.innerHTML = profile.results[3].phone;
  //----------------------------------------------
  return 1;

}
