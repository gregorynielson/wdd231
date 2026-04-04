const getString = window.location.search;
console.log(getString);

const formInfo = new URLSearchParams(getString);
console.log(formInfo);

console.log(formInfo.get("firstname"));
console.log(formInfo.get("lastname"));

console.log(formInfo.get("emailadd"));
console.log(formInfo.get("phonenum"));
console.log(formInfo.get("bizname"));

console.log(formInfo.get("submit-time"));


document.querySelector("#results").innerHTML = `
<p>Name: <span class="thanks-content">${formInfo.get("firstname")} ${formInfo.get("lastname")}</span></p>
<p>Email: <span class="thanks-content">${formInfo.get("emailadd")}</span></p>
<p>Phone Number: <span class="thanks-content">${formInfo.get("phonenum")}</span></p>
<p>Business Name: <span class="thanks-content">${formInfo.get("bizname")}</span></p>
<p>Time Submitted: ${formInfo.get("submit-time")}</p>`