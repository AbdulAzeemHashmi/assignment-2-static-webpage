# 📘 Assignment & Project Services

> A responsive static webpage offering assignment and project services with instant price calculation and direct contact options.

🔗 **Live Demo:** [assignment-2-static-webpage-silk.vercel.app](https://assignment-2-static-webpage-silk.vercel.app/)

---

## 📖 About The Project

This is a single page static website built as part of the **Codoc IT Internship Development Programme, Assignment 2**. It serves as a professional service page where students can:

- Check pricing for assignments and projects based on deadline urgency
- Send direct messages via Gmail using a contact form
- Connect instantly via WhatsApp for quick inquiries

The page is fully responsive and works seamlessly on desktop, tablet, and mobile devices.

---

## ✨ Features

| Feature | Description |
|---------|-------------|
| 💰 **Price Calculator** | Select "Assignment" or "Project", pick a deadline date, and get an instant price quote |
| 📩 **Contact Form** | Sends messages directly to abdulazeem7982@gmail.com via Gmail's mailto functionality |
| 📱 **WhatsApp Integration** | One-click button to start a chat on WhatsApp |
| 📱 **Responsive Design** | Optimized for all screen sizes using CSS Flexbox, Grid, and Media Queries |
| 🧭 **Semantic HTML** | Clean, accessible markup using header, nav, main, section, and footer tags |
| 🎨 **Modern UI** | Professional color scheme with hover effects and smooth transitions |

---

## 💰 Pricing Logic

The calculator works out the price based on how many days remain until the deadline.

**Assignments**
- 🟢 7 or more days remaining, 100 PKR
- 🟡 3 to 6 days remaining, 200 PKR
- 🔴 0 to 2 days remaining, 500 PKR

**Projects**
- 🟢 More than 7 days remaining, 1000 PKR
- 🔴 7 or fewer days remaining, 2000 PKR

If the selected deadline date is in the past, the calculator shows a warning and does not return a price.

---

## 🛠️ Built With

- **HTML5** - Semantic markup structure
- **CSS3** - Custom styling with Flexbox, Grid, and responsive media queries
- **JavaScript (Vanilla)** - Price calculation logic and form handling
- **Git and GitHub** - Version control with feature branch workflow
- **Vercel** - Deployment and hosting

---

## 🚀 Deployment

This project is deployed on **Vercel** for free and reliable hosting.

🔗 **Live URL:** [https://assignment-2-static-webpage-silk.vercel.app/](https://assignment-2-static-webpage-silk.vercel.app/)

---

## 📂 Project Structure

```
assignment-2-static-webpage/
├── index.html # Main HTML file
├── style.css # All styles and responsive design
├── script.js # Price calculator + contact form logic
└── README.md # Project documentation

---

## 🔧 Git Workflow

This project follows a clean Git workflow as required by the assignment:

- **Feature Branch:** feature/website was used for development
- **Meaningful Commits:** Each commit has a clear, descriptive message
- **Merge to Main:** The feature branch was successfully merged into main

---

## 👨‍💻 Author

Abdul Azeem

- 🐙 GitHub: [@AbdulAzeemHashmi](https://github.com/AbdulAzeemHashmi)
- ✉️ Email: abdulazeem7982@gmail.com
- 📱 WhatsApp: +92 322 8535002

---

## 📝 License

This project is built for educational purposes as part of the Codoc IT Internship Programme.

---

## 🙏 Acknowledgments

- Codoc IT Ltd. for providing the training and assignment guidelines
- All resources and documentation that helped in building this project