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
    const togglePassword = document.querySelector(".toggle-password");
    const passwordInput = document.querySelector(".password-container input");

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener("click", function () {
            const isPassword = passwordInput.type === "password";
            passwordInput.type = isPassword ? "text" : "password";
            togglePassword.innerHTML = isPassword ? "🙈" : "👁️";
        });

        // Chặn viền xanh khi double click vào icon mắt
        togglePassword.addEventListener("mousedown", function (e) {
            e.preventDefault();
        });
    } else {
        console.error("Không tìm thấy .toggle-password hoặc input mật khẩu");
    }

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
        darkModeToggle.textContent = "Chế độ sáng ☀️"; // Thay đổi nội dung khi bật chế độ tối
    } else {
        localStorage.setItem("darkMode", "disabled");
        darkModeToggle.textContent = "Chế độ tối 🌙"; // Thay đổi nội dung khi bật chế độ sáng
    }
});



});
