import React from 'react';
import JournalButton from '../../JournalModal/JournalButton';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is


const InfoPage = () => {
  return (
    <div className="container">
      <h1>Welcome to the Project Info Page</h1>
      <p>
        This project aims to provide a comprehensive set of resources and information to help individuals dealing with various mental health challenges such as depression, stress, and anxiety. Our goal is to offer support, education, and tools to promote mental well-being.
      </p>
      <p>
        Browse through the different pages to explore resources specific to each category. You can find links to websites, blogs, forums, and other helpful materials that provide further information and guidance on these topics.
      </p>
      <p>
        Additionally, we have a dedicated section for suicide prevention resources that are always available for emergencies. Please reach out to the provided hotlines if you or someone you know is in crisis.
      </p>
      <p>
        If you'd like to document your thoughts and feelings, our journal feature allows you to write and reflect privately. Click the "Journal" button to start journaling.
      </p>
      <p>
        This project is open to everyone and aims to be a valuable resource for individuals seeking knowledge, support, and tools for mental health. While the resources are accessible to all, only logged-in users can contribute and add new resources to the platform.
      </p>
      <p>
        We hope that this project serves as a helpful companion on your mental health journey. Remember, seeking help and support is a sign of strength, and you're not alone in this.
      </p>
      <JournalButton />
    </div>
  );
};

export default InfoPage;
