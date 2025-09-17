// Open & Close Modal
function openModal() {
  document.getElementById("loginModal").style.display = "block";
}
function closeModal() {
  document.getElementById("loginModal").style.display = "none";
}
window.onclick = function (event) {
  if (event.target == document.getElementById("loginModal")) closeModal();
};

// Login Form
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const role = document.getElementById("role").value;
  const email = document.getElementById("email").value;

  alert("✅ Login Successful! Welcome " + email + " (" + role + ")");
  closeModal();

  // Show health form
  document.getElementById("healthBox").style.display = "block";
  document.getElementById("mainHeader").style.display = "none";
  document.getElementById("heroSection").style.display = "none";
});

// Register User
function registerUser() {
  const role = prompt("Role (customer/employee):");
  const email = prompt("Enter email:");
  const password = prompt("Enter password:");
  alert("✅ Account created for " + email + " as " + role);
}

// Google Login (Placeholder)
function googleLogin() {
  alert("Redirecting to Google login...");
}

// Health Form
document.getElementById("healthForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  let answers = "";
  formData.forEach((v, k) => (answers += k + ": " + v + "\n"));

  document.getElementById("message").innerText = "✅ Health Data Saved!";
  console.log("Health Answers:\n" + answers);

  e.target.reset();
});
