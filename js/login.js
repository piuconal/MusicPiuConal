// login
const loginFormContainer = document.getElementById('login-form-container');
const loginIcon = document.querySelector('li i.fa-right-to-bracket');
const logoutFormContainer = document.getElementById('logout-form-container');
const logoutIcon = document.querySelector('li i.fa-user-secret');
// Thêm sự kiện khi ấn icon
const iconDangNhap = document.getElementById('icon-dangnhap');
iconDangNhap.addEventListener('click', () => {
    if (iconDangNhap.classList.contains('fa-right-to-bracket')) {
        loginFormContainer.classList.toggle('show');
    } else if (iconDangNhap.classList.contains('fa-user-secret')) {
        logoutFormContainer.classList.toggle('show');
    }
});
//Check login
const loginForm = document.getElementById('login-form-container');
loginForm.addEventListener('submit', (event) => {
    event.preventDefault(); // ngăn chặn form submit lại theo cách mặc định

    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Kiểm tra tài khoản trên mock API
    fetch('https://64554944f803f345763f77ea.mockapi.io/exam/signup')
        .then(response => response.json())
        .then(data => {
            // tìm kiếm trong danh sách tài khoản đăng ký nếu có tài khoản trùng với thông tin đăng nhập
            const found = data.find(user => user.fullname === username && user.mk === password);
            if (found) {
                // nếu tài khoản tồn tại, lưu thông tin đăng nhập vào trình duyệt để sử dụng trong phiên làm việc sau này
                localStorage.setItem('isLoggedIn', 'true');
                localStorage.setItem('currentUser', JSON.stringify(found));
                // redirect tới trang chủ hoặc trang nào đó mà bạn muốn người dùng được chuyển tới sau khi đăng nhập thành công
                window.location.href = 'home.html';
                // login user
                // Lấy icon từ localStorage, nếu không có thì mặc định là "fa-right-to-bracket"
                var icon = localStorage.getItem("icon") || "fa-right-to-bracket";

                // Cập nhật icon ban đầu
                document.getElementById("icon-dangnhap").className = "fa-solid " + icon;
                var icon = "fa-user-secret";
                document.getElementById("icon-dangnhap").className = "fa-solid " + icon;

                // Lưu icon mới vào localStorage
                localStorage.setItem("icon", icon);
            } else {
                alert('Tài khoản hoặc mật khẩu không chính xác');
            }
        })
        .catch(error => console.error(error));
});
// login user
// Lấy icon từ localStorage, nếu không có thì mặc định là "fa-right-to-bracket"
var icon = localStorage.getItem("icon") || "fa-right-to-bracket";

// Cập nhật icon ban đầu
document.getElementById("icon-dangnhap").className = "fa-solid " + icon;
