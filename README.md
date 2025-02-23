# 👋 Getting Started With Contact Management App 





# 💻 Tech Stack:
![Python](https://img.shields.io/badge/python-3670A0?style=for-the-badge&logo=python&logoColor=ffdd54) ![JavaScript](https://img.shields.io/badge/javascript-%23323330.svg?style=for-the-badge&logo=javascript&logoColor=%23F7DF1E) ![HTML5](https://img.shields.io/badge/html5-%23E34F26.svg?style=for-the-badge&logo=html5&logoColor=white) ![Heroku](https://img.shields.io/badge/heroku-%23430098.svg?style=for-the-badge&logo=heroku&logoColor=white) ![DjangoREST](https://img.shields.io/badge/DJANGO-REST-ff1709?style=for-the-badge&logo=django&logoColor=white&color=ff1709&labelColor=gray) ![Django](https://img.shields.io/badge/django-%23092E20.svg?style=for-the-badge&logo=django&logoColor=white) ![FastAPI](https://img.shields.io/badge/FastAPI-005571?style=for-the-badge&logo=fastapi) ![React Native](https://img.shields.io/badge/react_native-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![React](https://img.shields.io/badge/react-%2320232a.svg?style=for-the-badge&logo=react&logoColor=%2361DAFB) ![Vite](https://img.shields.io/badge/vite-%23646CFF.svg?style=for-the-badge&logo=vite&logoColor=white) ![Yarn](https://img.shields.io/badge/yarn-%232C8EBB.svg?style=for-the-badge&logo=yarn&logoColor=white) ![NPM](https://img.shields.io/badge/NPM-%23CB3837.svg?style=for-the-badge&logo=npm&logoColor=white) ![Postgres](https://img.shields.io/badge/postgres-%23316192.svg?style=for-the-badge&logo=postgresql&logoColor=white) ![SQLite](https://img.shields.io/badge/sqlite-%2307405e.svg?style=for-the-badge&logo=sqlite&logoColor=white) ![GitHub](https://img.shields.io/badge/github-%23121011.svg?style=for-the-badge&logo=github&logoColor=white) ![Git](https://img.shields.io/badge/git-%23F05033.svg?style=for-the-badge&logo=git&logoColor=white) ![NodeJS](https://img.shields.io/badge/node.js-6DA55F?style=for-the-badge&logo=node.js&logoColor=white)









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

## 🌐 Socials:
[![LinkedIn](https://img.shields.io/badge/LinkedIn-%230077B5.svg?logo=linkedin&logoColor=white)](https://linkedin.com/in/https://www.linkedin.com/in/abdulkareemozovehe/) [![Twitch](https://img.shields.io/badge/Twitch-%239146FF.svg?logo=Twitch&logoColor=white)](https://twitch.tv/dopesage47) [![YouTube](https://img.shields.io/badge/YouTube-%23FF0000.svg?logo=YouTube&logoColor=white)](https://youtube.com/@sage2dope) 



# ⬆️Deployment Instructions for Production 

# Recommended Cloud Platform

This section provides a high-level instruction for deploying in a production envioronment to Google Cloud Platform, using App Engine.
GCP'S App Engine is recommended for its managed environment and scalability.


# Prerequisities
1. A GCP account with a project created.
2. Google Cloud SDK installed locally.
3. Your project committed to a Git repository.


# Deployment Steps (GCP)

1. Build the React Frontend

In the frontend directory:

```bash
cd frontend
npm run build
```

2. Configure Django to serve the build folder as static files.

Ensure the React build folder is accessible to Django as static files. In your Django settings.py, add:
```bash
import os
STATICFILES_DIRS = [os.path.join(BASE_DIR, 'frontend/build/static')]
```



3. Prepare Django for Production

Create a Procfile in your project’s root directory  to run your app:
```bash
web: gunicorn backend.wsgi --log-file -

```
Install gunicorn (a production-ready WSGI server):

```bash
pip install gunicorn
pip freeze > requirements.txt

```
Set DEBUG = False in settings.py.

4. Create an app.yaml File for storing security sensitive details.

In your project root, add:


```bash
runtime: python39
entrypoint: gunicorn -b :$PORT backend.wsgi

```

5. Set Up a Database

First ensure you have `psycopg2`

```bash
pip install psycopg2-binary
pip freeze > requirements.txt

```
 
Use a managed PostgreSQL instance (Cloud SQL) or SQLite. For Cloud SQL, update settings.py with connection details:

```bash
# Use Cloud SQL in production
DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.postgresql',
        'NAME': 'your_database_name',        
        'USER': 'your_database_user',      
        'PASSWORD': 'your_database_password', 
        'HOST': '/cloudsql/your_instance_connection_name', # Replace with your Cloud SQL instance connection name (e.g., project:region:instance)
        'PORT': '5432',
    }
}

```

6. Deploy to App Engine

Initialize and deploy:

```bash
gcloud init
gcloud app deploy

```

7. View your app:

```bash
gcloud app browse
```


8. Additional Notes: 

- Static Files: Ensure Django’s collectstatic is run and files are served correctly.
- Environment Variables: Use app.yaml or GCP’s console to set them (e.g., SECRET_KEY).
