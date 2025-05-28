# 🏠 Phongtro123

Dự án clone lại chức năng chính của [Phongtro123.com](https://phongtro123.com), một nền tảng đăng tin cho thuê phòng trọ, với backend Node.js, frontend React

## 🔧 Công nghệ sử dụng

- **Frontend**: ReactJS, Redux, TailwindCSS, Axios, React Router
- **Backend**: Node.js, ExpressJS, MySQL
- **Database**: MySQL
- **Authentication**: JWT

## 🚀 Chức năng chính

- 🏘️ Đăng, sửa, xoá bài viết cho thuê phòng
- 🔍 Tìm kiếm theo khu vực, loại phòng
- 📍 Bản đồ vị trí (dùng API Google Maps)
- 🧑 Đăng ký, đăng nhập, phân quyền user
- 🗃️ Quản lý bài viết cá nhân
- 📦 Upload ảnh đại diện và ảnh phòng
- 📅 Lưu lịch sử đăng tin, làm mới bài

## ⚙️ Cài đặt & chạy dự án

### 1. Clone repo

git clone https://github.com/dhd5504/Phongtro123.git
cd Phongtro123

### 2. Cài đặt backend

cd server
npm install

Tạo file `.env` trong thư mục `server`:

PORT = 5000
CLIENT_URL = http://localhost:3000
SECRET_KEY = "key của bạn"
SECRET_GENERATE = phongtro123
LIMIT = 5

Chạy server:

npm start

### 3. Cài đặt frontend

cd ../client
npm install

Tạo file `.env` trong thư mục `client`:
REACT_APP_SERVER_URL = http://localhost:5000
REACT_APP_LIMIT_POST = 5
REACT_APP_CLOUND_NAME = "Nhập vào của bạn"
REACT_APP_UPLOAD_ASSETS_NAME = "Nhập vào của bạn"
REACT_APP_FORMAT_DATE = DD/MM/YYYY


npm start

Mặc định frontend chạy tại: [http://localhost:3000](http://localhost:3000)
Backend API chạy tại: [http://localhost:5000/api](http://localhost:5000/api)
