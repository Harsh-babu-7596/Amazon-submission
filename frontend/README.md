📌 SalesDuo Amazon Listing Optimizer — Full Project Documentation
📖 Overview

SalesDuo Amazon Listing Optimizer is a full-stack AI-powered application that intelligently improves Amazon product listings for better SEO performance and conversions.

Users can:

Enter an Amazon ASIN

Automatically fetch product details using web scraping

Optimize content using Google Gemini AI

Store and view optimization history (latest 10 records)

Compare content visually in a clean UI

This project demonstrates experience with APIs, scraping, AI models, databases, UI development & deployment-ready structure, as required for the SalesDuo Intern Assignment.

🎯 Key Features
Feature	Status
Enter ASIN & fetch product listing from Amazon	✔️
Optimize content using Gemini	✔️
Improved title, bullet points, SEO description, keywords	✔️
Save results to MySQL database	✔️
Global history of past 10 optimizations	✔️
Clean Material-UI based interface	✔️
Loading & error handling	✔️
🛠️ Tech Stack
Layer	Tools Used
Frontend	React + Material UI
Backend	Node.js + Express
Database	MySQL + Sequelize ORM
AI	Google Generative AI (Gemini-Pro)
Scraping	Axios + Cheerio
📂 Project Structure
salesduo-assignment/
│
├── backend/
│   ├── src/
│   │   ├── config/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── services/
│   │   └── app.js
│   ├── package.json
│   ├── .env
│
└── salesduo-frontend/
    ├── src/
    ├── public/
    ├── package.json

⚙️ Installation & Setup
1️⃣ Clone the repository
git clone <your-repo-url>
cd salesduo-assignment

2️⃣ Backend Setup
cd backend
npm install


Create .env file:

PORT=5000
DB_HOST=localhost
DB_USER=root
DB_PASS=YOUR_MYSQL_PASSWORD
DB_NAME=salesduo
GENAI_API_KEY=YOUR_GOOGLE_GEMINI_API_KEY


Start server:

npm start


Backend runs at:
👉 http://localhost:5000/

3️⃣ Database Setup (MySQL)
CREATE DATABASE salesduo;


Tables auto-created by Sequelize when backend starts.

4️⃣ Frontend Setup
cd ../salesduo-frontend
npm install
npm start


Frontend runs at:
👉 http://localhost:3000/

🔍 How It Works (Flow)
Step	Description
1️⃣ Scrape	Extract product title + bullets + description from Amazon page
2️⃣ Optimize	Send content to Gemini AI → Get SEO-enhanced results
3️⃣ Store	Save original + optimized content in MySQL
4️⃣ Display	Show comparison UI + chips for keywords
5️⃣ History	Latest 10 optimizations displayed in History tab
🧠 AI Prompt Engineering

The AI is instructed to:
✔ Improve readability & conversion
✔ Target relevant Amazon SEO keywords
✔ Ensure guideline compliance
✔ Strict JSON response format (avoid hallucination)

Example prompt:

Improve clarity, SEO, and readability while keeping Amazon guidelines.
Respond ONLY in JSON with:
optimizedTitle, optimizedBullets, optimizedDescription, keywords[]

🗄 Database Schema

Table: Optimizations

Field	Type	Purpose
id	INT (PK)	Record
asin	VARCHAR	Amazon product
originalTitle	TEXT	Scraped
originalBullets	TEXT (stringified JSON)	
originalDescription	TEXT	
optimizedTitle	TEXT	Gemini output
optimizedBullets	TEXT (stringified JSON)	
optimizedDescription	TEXT	
optimizedKeywords	TEXT (stringified JSON)	
createdAt	DATETIME	Timestamp

We limit queries to latest 10 rows for fast UI.

🧪 Testing ASINs
Product	ASIN
Lymio Jacket	B0FMDLH793
Boat Wireless Earbuds	B07H65KP63
🖥️ User Interface Screens (Add screenshots in your repo)
Home Page

ASIN input

Optimize

View History

Optimize View

Optimized listing sections

Chips for keywords

Link to history

History View

Last 10 optimized searches

Titles + ASIN + quick info

🔐 Security Measures

✔ .env for credentials
✔ No API keys or passwords pushed to GitHub
✔ Sequelize avoids raw SQL injection

🚀 Future Improvements (Optional)
Improvement	Value
Amazon product image scraping	More context in UI
History filtering by ASIN	Deep analytics
Excel/PDF export	Seller ready output
Authentication	Multi-user system
Scheduling re-optimization	Best SEO rankings
👨‍💻 Developer

Your Name
SalesDuo Internship Applicant
GitHub: your github link
Email: your email here

🏁 Conclusion

This project demonstrates:

✔ Full-stack development
✔ Real-world Amazon scraping + AI optimization
✔ Database persistence
✔ Clean UI and user flow
✔ Prompt design & API integration
✔ Assignment requirements achieved
