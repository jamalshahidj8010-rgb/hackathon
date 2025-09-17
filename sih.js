// Modal controls
function openModal() { document.getElementById("loginModal").style.display = "block"; }
function closeModal() { document.getElementById("loginModal").style.display = "none"; }
window.onclick = function(event) {
  if (event.target == document.getElementById("loginModal")) closeModal();
}
document.addEventListener("keydown", function(e) {
  if (e.key === "Escape") closeModal();
});

// Login form
document.getElementById("loginForm").addEventListener("submit", (e) => {
  e.preventDefault();
  const role = document.getElementById("role").value.trim();
  const email = document.getElementById("email").value.trim();
  if (!role || !email) return alert("Please select a role and enter your email.");
  alert("Login Successful ✅ Welcome " + email + " (" + role + ")");
  closeModal();
  document.getElementById("healthBox").style.display = "block";
  document.getElementById("mainHeader").style.display = "none";
  document.getElementById("heroSection").style.display = "none";
});

// Register user
function registerUser() {
  const role = prompt("Role (customer/employee):");
  if (!role) return alert("Registration cancelled");
  const email = prompt("Enter email:");
  if (!email) return alert("Registration cancelled");
  const password = prompt("Enter password:");
  if (!password) return alert("Registration cancelled");
  alert("Account created for " + email + " as " + role + " ✅");
}

// Google login placeholder
function googleLogin() { alert("Redirecting to Google login..."); }

// Health form submit
document.getElementById("healthForm").addEventListener("submit",(e)=>{
  e.preventDefault();
  const formData = new FormData(e.target);
  let answers = "";
  formData.forEach((v,k)=>answers+=k+": "+v+"\n");
  document.getElementById("message").innerText = "✅ Health Data Saved!";
  console.log("Health Answers:\n"+answers);
  e.target.reset();
});

// Smooth scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({ behavior: 'smooth' });
  });
});
