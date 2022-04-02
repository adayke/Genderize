const getGender = document.querySelector('.getGender');
const genForm = document.querySelector('.genForm');
const serverUrl = 'https://api.genderize.io';

getGender.addEventListener("click", function () {
  const firstName = document.querySelector('.nameInput').value;
  const url = `${serverUrl}?name=${firstName}`;

  let promise = fetch(url);

  let newPromise = promise.then(function (response) {
    return response.json();
  })

  newPromise.then(function (result) { 
    let resultGender = document.createElement("p");
    resultGender.className = "resGender";
    resultGender.innerHTML = `${firstName}'s gender is ${result.gender}`;
    genForm.after(resultGender);
  });

})