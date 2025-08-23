🎥 [Watch Project Demo (Google Drive)](https://drive.google.com/file/d/1840glSDNmTA7CVwl6A84Xr0xrWpCNZgR/view?usp=sharing)


### Live Deployment Links

- 🖥️ Deployment: [![Deployment Live](https://img.shields.io/badge/deployment-live-blue?logo=render)](https://mediconnect-frontend-cn70.onrender.com)

**MediConnect – Doctor Appointment Booking System**

MediConnect is a web-based healthcare management system designed to streamline doctor-patient interactions. Built using the MERN stack (MongoDB, Express.js, React.js, Node.js), it provides three levels of authentication – Patient, Doctor, and Admin – and enables appointment booking, profile management, secure payments, and teleconsultation.

**Features**
**Patient**

Create account, login, and manage profile.

Browse doctors by specialty.

Book, reschedule, or cancel appointments.

View upcoming and past appointments in My Appointments.

Integrated Razorpay payment gateway (button changes to Paid).

**Doctor**

Manage schedules and availability.

Accept or cancel appointments.

View and track earnings.

**Admin**

Manage doctor profiles and verify credentials.

Monitor appointments and platform activity.

Oversee payments and reports.

**Tech Stack**

**Frontend:** React.js, HTML, CSS, JavaScript

**Backend:** Node.js, Express.js

**Database:** MongoDB

**Other Integrations:** Razorpay

**Version Control & Deployment:** Git, GitHub , VScode , Render

**Getting Started**
**1. Clone the Repository**
git clone https://github.com/Varshithagajula/MediConnect.git
cd MediConnect

**2. Install Dependencies**

**Frontend**

cd frontend
npm install


**Backend**

cd ../backend
npm install

**3. Configure Environment Variables**

**Create a .env file in the backend with:**

MONGO_URI=<your_mongo_db_connection>
RAZORPAY_KEY_ID=<your_key>
RAZORPAY_KEY_SECRET=<your_secret>
JWT_SECRET=<your_jwt_secret>

**4. Run the Application**

**Backend**

npm run server


**Frontend**

npm run dev

**Admin**

npm run dev

Access the app at http://localhost:3000


**Future Enhancements**

TeleConsultation.

AI chatbot.

Chat feature between patients and doctors.

Prescription and medical report upload/download.

Doctor rating and feedback system.

Mobile app integration.

**License**

This project is licensed under the MIT License
