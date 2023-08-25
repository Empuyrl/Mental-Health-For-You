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

## Deployment

1. Create a new Heroku project
1. Link the Heroku project to the project GitHub Repo
1. Create an Heroku Postgres database
1. Connect to the Heroku Postgres database from Postico
1. Create the necessary tables
1. Add an environment variable for `SERVER_SESSION_SECRET` with a nice random string for security
1. In the deploy section, select manual deploy


