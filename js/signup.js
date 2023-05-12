//Đăng ký tài khoản
const registerForm = document.getElementById('signup-form-container');
registerForm.addEventListener('submit', (event) => {
    event.preventDefault(); // ngăn chặn form submit lại theo cách mặc định

    const fullname = document.getElementById('full-name').value;
    const mk = document.getElementById('mk').value;
    const email = document.getElementById('email').value;

    // gửi dữ liệu đăng kí lên mock API
    fetch('https://64554944f803f345763f77ea.mockapi.io/exam/signup', {

        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            fullname,
            mk,
            email
        })
    })
        .then(response => response.json())
        .then(data => {
            console.log(data);
        })
        .catch(error => console.error(error));
});

// Kiểm tra các trường
function validateForm() {
    var username = document.forms["signup-form"]["username"].value;
    var password = document.forms["signup-form"]["password"].value;
    var repassword = document.forms["signup-form"]["repassword"].value;
    var email = document.forms["signup-form"]["email"].value;


    // Kiểm tra trường Username không được để trống
    if (username == "") {
        alert("Username không được để trống");
        return false;
    }

    // Kiểm tra trường Password phải tối thiểu 8 kí tự và chứa kí tự đặc biệt
    var passwordRegex = /^(?=.*\d)(?=.*[!@#$%^&*])(?=.*[a-z])(?=.*[A-Z]).{8,}$/;
    if (!password.match(passwordRegex)) {
        alert("Password phải tối thiểu 8 kí tự và chứa kí tự đặc biệt");
        return false;
    }

    // Kiểm tra trường Repassword phải trùng với Password
    if (repassword != password) {
        alert("Repassword phải trùng với Password");
        return false;
    }

    // Kiểm tra trường Email phải đúng cấu trúc
    var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!email.match(emailRegex)) {
        alert("Email phải đúng cấu trúc");
        return false;
    }
    alert("Chúc mừng bạn đã là thành viên của PiuMusic");
    window.location.href = "/MusicPiuConal/html/home.html";
    return false;
}
// signup
const signupFormContainer = document.getElementById('signup-form-container');
const signupIcon = document.querySelector('li i.fa-user-plus');

signupIcon.addEventListener('click', () => {
  signupFormContainer.classList.toggle('show');
});