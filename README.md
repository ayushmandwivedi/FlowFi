# **FlowFi - Personal Expense Tracker**  

FlowFi is a modern and intuitive personal expense tracker designed to help users manage their finances efficiently. It provides insights into income, expenses, and savings with interactive analytics and budgeting tools.  

## 🚀 **Features**  
- 📊 **Dashboard** – Overview of income, expenses, and savings  
- 💰 **Expense & Income Tracking** – Add, edit, and manage transactions  
- 📅 **Budgeting** – Set financial goals and track spending habits  
- 📈 **Analytics** – Visual charts and insights on financial trends  
- 🌙 **Dark Mode** – Sleek UI with theme switching  

## 🛠 **Tech Stack**  
- **Frontend:** Next.js, TypeScript, TailwindCSS  
- **Backend:** Next.js API routes (serverless)  
- **Database:** PostgreSQL (with Prisma ORM)  
- **Authentication:** NextAuth.js  
- **State Management:** React Context API  
- **Charts:** ApexCharts  

## 📂 **Project Structure**  
```
/components   - Reusable UI components  
/pages        - Next.js pages (Dashboard, Transactions, Budgeting)  
/utils        - Helper functions  
/styles       - Global styles  
```

## 🚀 **Getting Started**  
### 1️⃣ Clone the Repository  
```sh
git clone https://github.com/your-username/flowfi.git  
cd flowfi
```
### 2️⃣ Install Dependencies  
```sh
npm install  # or yarn install  
```
### 3️⃣ Set Up Environment Variables  
Create a `.env.local` file and add:  
```env
DATABASE_URL=your_postgresql_url
NEXTAUTH_SECRET=your_secret
NEXTAUTH_URL=http://localhost:3000
```

### 4️⃣ Run the Development Server  
```sh
npm run dev  # or yarn dev  
```
Your app will be live at **http://localhost:3000** 🚀  

## 🤝 **Contributing**  
Feel free to fork the repo, make changes, and submit a PR!  

## 📜 **License**  
This project is licensed under the **MIT License**.  
