# Portfolio Website

A modern personal portfolio website built with **Nuxt 3**, **Tailwind CSS**, and **Lucide Icons**, featuring a sleek design with dark mode support, smooth animations, and a dynamic contact form. This portfolio showcases projects, skills, and professional experience in a clean, responsive layout.

## 🎯 Features
- ✅ Responsive mobile-first design  
- ✅ Dark/Light mode toggle with local storage  
- ✅ Smooth scroll navigation  
- ✅ Fade-in animations on scroll  
- ✅ Dynamic project and skill sections  
- ✅ Backend contact form using **nodemailer**
- ✅ Custom transitions and hover effects  
- ✅ SEO-friendly structure  

## 🧰 Technologies Used

[![Nuxt.js](https://img.shields.io/badge/nuxt.js-181818?style=for-the-badge&logo=nuxt&logoColor=white)](https://nuxt.com)  
[![Vue.js](https://img.shields.io/badge/vue.js-369135?style=for-the-badge&logo=vue.js&logoColor=white)](https://vuejs.org)  
[![Tailwind CSS](https://img.shields.io/badge/tailwindcss-%2338B2AC.svg?style=for-the-badge&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)  
[![Lucide Icons](https://img.shields.io/badge/lucide-icons-blue?style=for-the-badge)](https://lucide.dev)  
[![Nodemailer](https://img.shields.io/badge/nodemailer-%2300A3FF?style=for-the-badge&logo=nodemailer&logoColor=white)](https://nodemailer.com)  
[![TypeScript](https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)  

## 📁 Project Structure

```
portfolio-nuxt/
├── assets/                   # CSS files and custom styles
│   └── css/
│       └── tailwind.css      # Tailwind setup + custom animations
├── components/               # Reusable UI components (Navbar, Hero, About, etc.)
├── pages/                    # Page content (index.vue)
├── plugins/                  # Vue directives for fade-in animation
├── public/                   # Static assets like images and fonts
├── server/                   # API routes for backend functionality
├── nuxt.config.ts            # Nuxt configuration including modules
├── tailwind.config.ts        # Tailwind CSS settings
├── package.json              # Dependencies and scripts
├── .env                      # Environment variables for SMTP
```

## 🚀 How to Run the Project

1. **Clone the repository**
```bash
git clone https://github.com/yourusername/portfolio-nuxt
```

2. **Install dependencies**
```bash
npm install
```

3. **Set up environment variables**
Create a `.env` file:
```env
MAIL_SMTP_HOST=smtp.gmail.com
MAIL_SMTP_PORT=587
MAIL_SMTP_SECURE=false
MAIL_SMTP_USER=email@gmail.com
MAIL_SMTP_PASS=secret
MAIL_DEFAULT_TO=email@gmail.com
```

4. **Run development server**
```bash
npm run dev
```

5. **Build for production**
```bash
npm run build
```

6. **Generate static site (optional)**
```bash
npm run generate
```

## ☁️ Deployment

| Platform     | Command             | Notes |
|--------------|---------------------|-------|
| **Vercel**  | `vercel`            | Set `.env` values in Vercel dashboard |
| **Netlify**  | `netlify deploy`    | Add environment variables via Netlify UI |
| **GitHub Pages** | `npm run generate` then push contents of `/dist` folder | Use `gh-pages` for automation |

## 🔐 License

This project is licensed under the MIT License – see the [LICENSE](./LICENSE) file for details.

## 📧 Get In Touch

📧 dzulkiflianwar2@gmail.com  
🐙 [GitHub](https://github.com/da578)

### 📝 Notes

This portfolio was originally based on a pure HTML/CSS template and has been fully converted into a **Nuxt 3 app** with enhanced interactivity and backend capabilities. All features are modular and ready for customization.