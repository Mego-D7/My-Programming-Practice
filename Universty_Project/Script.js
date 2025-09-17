const loginForm = document.getElementById('loginForm');
const signupForm = document.getElementById('signupForm');
const Pay_Page = document.querySelector('.container');
const DE_Page = document.querySelector('.DE_Page');
const log_sign = document.querySelector('.log_sign');
let Paying = document.querySelector('.Paying');
let F_Words_Appear = document.getElementById('F_Words');

function IN() {
  DE_Page.style.display='inline-block';
  log_sign.style.display='none';
}

function OUT() {
  DE_Page.style.display='none';
  log_sign.style.display='inline-block';
}

function ShowPayment(){
  Pay_Page.style.display='inline-block';
  DE_Page.style.display='none';
}

function UnShowPayment(){
  Pay_Page.style.display='none';
  DE_Page.style.display='inline-block';
}

let currentUser = null;

function showSignup() {
  loginForm.classList.add('hidden');
  signupForm.classList.remove('hidden');
}

function showLogin() {
  signupForm.classList.add('hidden');
  loginForm.classList.remove('hidden');
}

// SIGN UP
signupForm.querySelector('button').addEventListener('click', () => {
  const text = document.getElementById('text').value.trim();
  const email = document.getElementById('email').value.trim();
  const password = document.getElementById('password').value.trim();
  const signupMessage = document.getElementById('signupMessage');
  IN();

  if (!text || !email || !password) {
    signupMessage.textContent = "Please fill out all fields.";
    signupMessage.className = "message error";
    return;
  }

  fetch("http://localhost:3000/signup", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ text, email, password })
  })
    .then(res => res.json())
    .then(data => {
      signupMessage.textContent = data.message;
      signupMessage.className = "message success";
      currentUser = { email, password };
      showLogin();
    })
    .catch(err => {
      signupMessage.textContent = "Signup failed.";
      signupMessage.className = "message error";
    });
});

// LOGIN
loginForm.querySelector('button').addEventListener('click', () => {
  const email = document.getElementById('loginEmail').value.trim();
  const password = document.getElementById('loginPassword').value.trim();
  const loginMessage = document.getElementById('loginMessage');

  if (!email || !password) {
    loginMessage.textContent = "Please fill out all fields.";
    loginMessage.className = "form-message error";
    return;
  }

  fetch("http://localhost:3000/login", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password })
  })
    .then(res => res.json())
    .then(data => {
      if (data.user) {
        currentUser = { email, password };

        // Check if the user has paid
        fetch("http://localhost:3000/check-payment-status", {
          method: "POST", // <-- POST because we're sending a body
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, password })
        })
          .then(res => res.json())
          .then(paymentData => {
            if (paymentData.paid) {
            F_Words_Appear.style.display='inline-block';
            Paying.style.display='none';
            IN();
            } else {
            F_Words_Appear.style.display='none';
            Paying.style.display='inline-block';
            IN();
            }
          })
          .catch(err => {
            loginMessage.textContent = "Login OK, but payment check failed.";
            loginMessage.className = "form-message error";
            console.error(err);
          });

      } else {
        loginMessage.textContent = data.message;
        loginMessage.className = "form-message error";
      }
    })
    .catch(err => {
      loginMessage.textContent = "Login failed: " + err.message;
      loginMessage.className = "form-message error";
    });
});


// PAYMENT
document.getElementById("paymentForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const card = document.getElementById("card").value.trim();
  const exp = document.getElementById("exp").value.trim();
  const cvv = document.getElementById("cvv").value.trim();
  const messageDiv = document.getElementById("message");

  if (!currentUser) {
    messageDiv.textContent = "Please log in or sign up first.";
    messageDiv.className = "message error";
    return;
  }

  const paymentInfo = {
    ...currentUser,
    cardHolder: name,
    cardNumber: card,
    exp,
    cvv
  };

  fetch("http://localhost:3000/save-payment", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify(paymentInfo)
  })
    .then((res) => res.json())
    .then((data) => {
      messageDiv.textContent = data.message;
      messageDiv.className = "message success";
      document.getElementById("paymentForm").reset();
    })
    .catch((err) => {
      messageDiv.textContent = "Payment error.";
      messageDiv.className = "message error";
      console.error(err);
    });
    setTimeout(() => {
      location.reload();
    }, 1000);
    
});
