document.querySelector("#form").addEventListener("submit", (e) => {
  e.preventDefault();
  const btn = document.querySelector('#submit');
  btn.innerText = 'Submitting ......'
  btn.setAttribute('disabled', true);
  btn.style.cursor = "not-allowed";
  
  let info = {
    email: document.querySelector('input[name="email"]').value,
    name: document.querySelector('input[name="name"]').value,
    gender: document.querySelector('input[name="gender"]:checked').value,
    maritalStatus: document.querySelector('input[name="maritalStatus"]:checked')
      .value,
    yearOfGraduation: document.querySelector('select[name="yearOfGraduation"]')
      .value,
    house: document.querySelector('select[name="house"]').value,
    postHeldInPade: document.querySelector('input[name="postHeldInPade"]')
      .value,
    occupation: document.querySelector('input[name="occupation"]').value,
    whatsappNo: document.querySelector('input[name="whatsappNo"]').value,
    phoneNo: document.querySelector('input[name="phoneNo"]').value,
    homeAddress: document.querySelector('input[name="homeAddress"]').value,
    field: document.querySelector('input[name="field"]').value,
    aoi: document.querySelector('input[name="aoi"]').value,
    officeAddress: document.querySelector('input[name="officeAddress"]').value,
    schoolAddress: document.querySelector('input[name="schoolAddress"]').value,
    nok: document.querySelector('input[name="nok"]').value,
    phoneNoOfNok: document.querySelector('input[name="phoneNoOfNok"]').value,
  };

  fetch("/.netlify/functions/getInfo", {
    method: "POST",
    mode: "no-cors",
    headers: {
      "Content-Type": "application/json;charset=utf-8",
    },
    body: JSON.stringify(info),
  })
  .then(res => {
    document.querySelector("#form").innerHTML = `
    <div class="card intro">
            <h1>RESPONSE SENT</h1>
            <p style="margin-top: 5%">Thank you for filling out the form</p>
            <p>We will get Back to you soon!!</p>
        </div>
    `
  })
  .catch(err => console.log(err))
});
