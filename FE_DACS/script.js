document.addEventListener("DOMContentLoaded", function () {
    // ================== Xử lý đổi tab active ==================
    const featureItems = document.querySelectorAll(".feature-item");

    featureItems.forEach(item => {
        item.addEventListener("click", function () {
            featureItems.forEach(i => i.classList.remove("active"));
            this.classList.add("active");
        });
    });

    // ================== Xử lý hiển thị / ẩn mật khẩu ==================
    const togglePasswords = document.querySelectorAll(".toggle-password");
    const passwordInputs = document.querySelectorAll(".password-input");
    
    togglePasswords.forEach((toggle, index) => {
      const input = passwordInputs[index];
    
      // Ban đầu ẩn icon nếu input trống
      toggle.style.display = "none";
    
      // Khi người dùng nhập vào input
      input.addEventListener("input", function () {
        toggle.style.display = input.value.length > 0 ? "inline-block" : "none";
      });
    
      // Xử lý nhấn icon mắt
      toggle.addEventListener("click", function () {
        const isPassword = input.type === "password";
        input.type = isPassword ? "text" : "password";
        toggle.innerHTML = isPassword ? "🙈" : "👁️";
      });
    
      // Ngăn chặn viền xanh khi nhấn icon
      toggle.addEventListener("mousedown", function (e) {
        e.preventDefault();
      });
    });

    // ================== Xử lý Dark Mode ==================
    const darkModeToggle = document.querySelector(".dark-mode");
    const body = document.body;

    // Kiểm tra xem Dark Mode có được lưu trong localStorage không
    if (localStorage.getItem("darkMode") === "enabled") {
        body.classList.add("dark-mode-active");
        darkModeToggle.textContent = "Chế độ sáng ☀️";
    }

    // Xử lý khi bấm vào "Chế độ tối" / "Chế độ sáng"
    darkModeToggle.addEventListener("click", function () {
        body.classList.toggle("dark-mode-active");

        if (body.classList.contains("dark-mode-active")) {
            localStorage.setItem("darkMode", "enabled");
            darkModeToggle.textContent = "Chế độ sáng ☀️";
        } else {
            localStorage.setItem("darkMode", "disabled");
            darkModeToggle.textContent = "Chế độ tối 🌙";
        }
    });

    // ================== Xử lý cài đặt màu nền ==================
    // const settingsIcon = document.querySelector(".dashboard-settings-icon");
    // const settingsPanel = document.getElementById("settingsPanel");

    // // Sự kiện khi click vào icon cài đặt ⚙️
    // settingsIcon.addEventListener("click", function (event) {
    //     event.stopPropagation(); // Ngăn chặn sự kiện lan ra ngoài
    //     settingsPanel.classList.toggle("active");
    // });

    // // Ẩn bảng khi click ra ngoài
    // document.addEventListener("click", function (event) {
    //     if (!settingsIcon.contains(event.target) && !settingsPanel.contains(event.target)) {
    //         settingsPanel.classList.remove("active");
    //     }
    // });

    // // Đổi màu nền khi chọn màu
    // window.changeBackgroundColor = function (color) {
    //     document.body.style.backgroundColor = color;
    //     localStorage.setItem("backgroundColor", color); // Lưu màu vào localStorage
    // };

    // // Giữ màu nền sau khi reload trang
    // const savedColor = localStorage.getItem("backgroundColor");
    // if (savedColor) {
    //     document.body.style.backgroundColor = savedColor;
    // }

    const chungTab = document.getElementById('chung-tab');
const passwordTab = document.getElementById('password-tab');

// Lấy các nội dung
const accountInfoBox = document.getElementById('account-info-box');
const passwordBox = document.getElementById('password-box');

// Xử lý khi click tab "Chung"
chungTab.addEventListener('click', () => {
    // Hiện form thông tin tài khoản
    accountInfoBox.style.display = 'block';
    // Ẩn form đổi mật khẩu
    passwordBox.style.display = 'none';

    // Thêm class active
    chungTab.classList.add('active');
    passwordTab.classList.remove('active');
});

// Xử lý khi click tab "Đổi mật khẩu"
passwordTab.addEventListener('click', () => {
    // Ẩn form thông tin tài khoản
    accountInfoBox.style.display = 'none';
    // Hiện form đổi mật khẩu
    passwordBox.style.display = 'block';

    // Thêm class active
    passwordTab.classList.add('active');
    chungTab.classList.remove('active');
});
window.onload = function() {
    accountInfoBox.style.display = 'block';
    passwordBox.style.display = 'none';
    chungTab.classList.add('active');
    passwordTab.classList.remove('active');
}
});
