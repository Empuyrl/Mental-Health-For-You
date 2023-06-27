import React from 'react';
import JournalButton from '../../JournalModal/JournalButton';
// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <h1>About Page</h1>
      <p>
        This project is designed to provide a comprehensive set of resources and information to support individuals facing various mental health challenges. Our goal is to offer a range of tools, education, and support to promote mental well-being and address the unique needs of each individual.
      </p>
      <p>
        We understand that mental health is a crucial aspect of overall well-being, and our project aims to create a safe and inclusive space where individuals can access valuable resources related to depression, stress, anxiety, and other mental health topics. By providing curated links to websites, blogs, forums, and other materials, we strive to empower individuals with knowledge and guidance on their mental health journey.
      </p>
      <p>
        Additionally, we are committed to suicide prevention and have dedicated a section to provide immediate assistance during emergencies. If you or someone you know is in crisis, please reach out to the provided hotlines for support.
      </p>
      <p>
        Our journal feature allows users to document their thoughts and feelings privately. Journaling can be a powerful tool for self-reflection, personal growth, and emotional well-being. By clicking the "Journal" button, users can start their journaling practice and explore the benefits it brings to their mental health.
      </p>
      <p>
        This project is open to all individuals, regardless of their background or circumstances. While the resources are accessible to everyone, registered users have additional benefits, such as the ability to contribute and add new resources to the platform. We believe in the collective effort of building a supportive community and providing a platform for individuals to share their knowledge and experiences.
      </p>
      <p>
        Thank you for joining us on this journey towards mental well-being. Remember, seeking help and support is a sign of strength, and together, we can create a positive impact on the mental health of individuals worldwide.
      </p>
      <JournalButton />
    </div>
  );
}

export default AboutPage;
