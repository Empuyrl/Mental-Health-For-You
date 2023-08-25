## Welcome to Mind Matters

Mind Matters is a web application dedicated to fostering mental health resilience and self-discovery. This project aims to provide resources, tools, and a supportive community for individuals facing various mental health challenges. With features like self-assessment quizzes, reflective journaling, and access to professional mental health resources, Mind Matters strives to empower users on their mental health journey.

## MAIN Features

1. AboutPage Component (AboutPage.js): This component provides detailed information about the Mind Matters project. It explains the project's purpose, goals, commitment to mental health, available resources, and the technologies used in its development.

2. Results Component (Results.js): This component displays the assessment results for depression, anxiety, and stress. It calculates severity levels based on the assessment scores and provides explanations of the severity levels. Users can understand their mental health status and seek appropriate help if needed.

3. ResourceCard Component (ResourceCard.js): This component represents a card that displays mental health resources. It includes the type of resource, a description, and a link to access the resource. Users can explore curated resources related to mental health topics.

4. JournalModal Component (JournalModal.js): This component renders a modal where users can write, save, and manage their journal entries. It provides a private space for users to reflect on their thoughts and emotions, contributing to their emotional well-being.

5. UserPage Component (UserPage.js): This component serves as the user's homepage and provides quick access to different features, including the assessment questionnaires for depression, anxiety, and stress. It offers a central hub for users to engage with various tools and resources.

6. Depression Assessment Component (DepressionAssessment.js): This component renders the questionnaire for assessing depression symptoms. Users can answer a series of questions, and the app calculates their depression score and severity level based on their responses.

7. Anxiety Assessment Component (AnxietyAssessment.js): Similar to the depression assessment, this component provides a questionnaire to assess anxiety symptoms. It calculates the anxiety score and severity level based on the user's answers.

8. Stress Assessment Component (StressAssessment.js): This component presents the questionnaire for assessing stress levels. Users' responses are used to calculate their stress score and severity level.

These components collectively form the core features of the Mind Matters app, catering to users' mental health needs through self-assessment, resource access, journaling, and providing valuable insights into their mental well-being. The app aims to create a supportive and informative environment for users to prioritize their mental health.

## Landing Page:
The Landing Page welcomes users to Mind Matters, a digital sanctuary dedicated to fostering mental health resilience and self-discovery. Users are greeted with a powerful headline and a brief introduction. The page explains how Mind Matters empowers users through self-assessment quizzes, reflective journaling, and access to mental health resources. Users can dive into their mental health journey, either by taking the quizzes or exploring further resources.

## Results Page:
The Results Page provides users with personalized insights into their mental health assessment scores. Users can view their depression, anxiety, and stress scores, along with corresponding severity levels. The page explains what each severity level indicates and offers guidance on seeking professional help if necessary. Users gain a deeper understanding of their mental well-being and are encouraged to take proactive steps towards improving their mental health.

## Resource Page:
The Resource Page serves as a hub for accessing valuable mental health resources. Users can explore a curated collection of articles, blogs, forums, and other materials related to depression, anxiety, stress, and more. Each resource is accompanied by a description and a direct link for easy access. Users can learn more about their mental health concerns, coping strategies, and professional assistance options through these resources.

## Journal/Notebook Page:
The Journal/Notebook Page offers users a private space for self-reflection and emotional expression. Users can write and save journal entries, documenting their thoughts, feelings, and experiences. Journaling promotes self-awareness, personal growth, and emotional well-being. Users can revisit their entries over time, track their progress, and gain insights into their emotional journey.

## Depression, Anxiety, and Stress Quizzes:
The Depression, Anxiety, and Stress Quizzes provide users with self-assessment tools to gauge their mental well-being in these specific areas. Users answer a series of questions related to each topic, and the app calculates their assessment scores. Based on the scores, users are informed about the severity level of their symptoms. These quizzes offer users a starting point to understand their mental health status and guide them towards seeking appropriate support if needed.

## Database Schema
We use a PostgreSQL database to store user information, assessment responses, journal entries, and resources. Below is the database schema:

## User Table
id: Unique identifier for each user.
username: User's username (max 80 characters), must be unique.
password: Hashed password (max 1000 characters).
## Entries Table
id: Unique identifier for each journal entry.
entry_text: Text content of the journal entry.
user_id: References the corresponding user who created the entry.
createdate: Timestamp for when the entry was created.
category: Category of the entry (default: 'general').
## Response Table
id: Unique identifier for each assessment response.
user_id: References the corresponding user who took the assessment.
questionnaire_type: Type of assessment (e.g., depression, anxiety, stress).
score: Assessment score.
createdate: Timestamp for when the response was recorded.
## Resources Table
id: Unique identifier for each mental health resource.
resource_type: Type of resource (e.g., article, blog, forum).
resource_link: URL link to the resource.
resource_description: Description of the resource.
createdate: Timestamp for when the resource was added.
user_id: References the user who added the resource (optional).

## Technologies Used
React: JavaScript library for building user interfaces.
Redux: Predictable state container for managing app state.
Redux-Saga: Middleware for managing side effects in Redux.
React-Router-DOM: DOM bindings for routing in React.
Material UI: React UI framework for creating visually appealing components.
Express: Fast and minimalist web framework for Node.js.
Node.js: JavaScript runtime for server-side development.
Passport.js: Authentication middleware for Node.js.
PostgreSQL: Relational database management system.
Axios: Promise-based HTTP client for making API requests.
bcryptjs: Library for hashing passwords securely.
CSS: Stylesheet language for styling HTML documents.
Jest: Testing framework for JavaScript applications.
Supertest: Library for testing HTTP requests in Node.js.
Nodemon: Utility for auto-restarting Node.js applications during development.
Dotenv: Module for loading environment variables from a .env file.

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy


