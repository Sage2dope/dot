# 💫 About Me:
I'm a Data Analyst & Software Developer<br>I've spent the last 4 years building, scaling software and analysing data for companies.<br>I also have a gaming channel where I review gaming gadgets online<br>In case you've got a good product you like to review 🎮. Let's connect!


## 🌐 Socials:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/https://www.linkedin.com/in/abdulkareemozovehe/) [![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?logo=Twitch&logoColor=white)](https://twitch.tv/dopesage47) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@sage2dope) 

# 💻 Tech Stack:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)




# 👋 Getting Started With Contact Management App 




#  🐍 Backend Setup Instructions 

1. First, Clone the repository 

```bash
git clone https://github.com/Sage2dope/dot.git
```

2. Navigate to project directory 
```bash
cd dot 
```
3. Open a Terminal and navigate to the backend folder
```bash
cd backend
```


4. Setting up the Virtual Environment

```bash
python -m venv venv
```
5. Activate the virtual environment using the following command 

```bash
source venv/bin/activate
```

```bash
 # On Windows use 
 venv\Scripts\activate
```
6. Setting up all dependencies
```bash

pip install -r requirements.txt
```

7. Run the command to populate the template needed for the project backend environment variables
```bash
cp .env.example .env
```

8. Apply Migrations to create the database
```bash
python manage.py migrate
```

9. Start the development server
```bash
python manage.py runserver
```

10. Create a superuser (optional, for admin access)
```bash
python manage.py createsuperuser
```


#  💻 Frontend Setup Instructions 

1. Open a new terminal and use the following code to navigate to the frontend directory
```bash
cd frontend
```

2. Installing Dependencies 

```bash
npm install
```

3. Run the command to populate the template needed for the project frontend environment variables
```bash
cp .env.example .env
```

4. Start the development server

```bash
npm run dev
```

# ⬆️High-Level Deployment Instructions for Production 

# Recommended Cloud Platform

For ease of deployment and straightforward process, I recommend Heroku as it provides a simple workflow for full-stack applications. Alternatively for easy scalability, AWS Elastic Beanstalk would be the best cloud solution.

# Deployment Steps (Heroku)

1. Preparing the Backend (Django)

Ensure you have a requirements.txt and Procfile in your Django backend directory.
Install Gunicorn for production:

```bash
pip install gunicorn
```

Add gunicorn to requirements.txt
```bash
echo "gunicorn" >> requirements.txt
```

Create a Procfile in the backend directory:
```bash
web: gunicorn backend_project.wsgi --log-file -
```

2. Configure the Database

If using PostgreSQL in production environment 
```bash
pip install psycopg2-binary

```

Update Django settings (settings.py):
Short Explanation: When deploying a Django application to Heroku, you typically use PostgreSQL as the database. Heroku provides the database URL as an environment variable, and `dj_database_url` helps you easily configure your Django settings to use this URL.
```bash
import dj_database_url
DATABASES['default'] = dj_database_url.config(conn_max_age=600)

```