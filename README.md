# Smart Brain - AI Face Detector App

## 專案介紹
包含註冊、登入、AI 臉部辨識功能的網站。

獨自開發網站前、後端，前端使用 React + vite ，並使用 TailwindCSS；後端使用 Node.JS 開發，資料庫採用 PostgreSQL（後端專案請點此）。

Demo: https://yachuh.github.io/smartBrain/

### 前端
- 使用 Axios 串接 Clarafai API ，偵測並顯示圖片中的人臉
- 註冊、登入功能（含表單驗證與錯誤訊息提示）
- RWD 網站，使用 TailwinCSS 開發，並客製化

### 後端
- 開發 RESTful API、實作資料庫 CRUD 語法
- 使用 Node.js + Express.js 開發
- 使用 bcrypt 套件加密儲存使用者密碼
- 使用 PostgreSQL 做為資料庫

> 畫面導覽：
> 
> 人臉辨識功能
> ![SmartBrain](https://github.com/yachuh/smartBrain/assets/16102202/d8cdff93-1ca6-401c-88c5-f00fc6fb0e2f)
>
> 註冊/登入與表單驗證
> ![Smart Brain](https://github.com/yachuh/smartBrain/assets/16102202/92c5dd9b-8b77-4b3c-a1c8-731556583057)
> 



## 專案架構 
前端
```
├── src
│   └── assets
│   │   └── images
│   ├── components
│   ├── utils
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── dist
└── index.html
```

後端
```
├── controllers
└── server.js
```


## 使用技術

前端
- ReactJS
- TailwindCSS
- Vite
- ESLint

後端
- Node.js
- Express.js
- PostgreSQL
- Render


## 使用套件

前端
- [React Hook Form](https://react-hook-form.com/)
- [React Parallax tilt](https://www.npmjs.com/package/react-parallax-tilt)
- [sweetalert2](https://sweetalert2.github.io/)

後端
- [cors](https://www.npmjs.com/package/cors)
- [bcrypt-nodejs](https://www.npmjs.com/package/bcrypt-nodejs)
- [Knex.js](https://knexjs.org/)


### Project setup
```
npm install
```

### Development

vite command:
- `npm run dev`: start develop mode
- `npm run build`: project compliement
- `npm run pre delpoy`: project compliement
- `npm run deploy`: dep;oy to github page
