import React from 'react';
import JournalButton from '../../JournalModal/JournalButton';
// import '../../tailwind.css';

const InfoPage = () => {
  return (
    <div className="container mx-auto bg-gradient-to-br from-purple-500 to-blue-500">
      <h1 className="text-center text-4xl font-bold mb-8">Welcome to the Project Info Page</h1>
      <p className="text-lg mb-4">
        This project aims to provide a comprehensive set of resources and information to help individuals dealing with various mental health challenges such as depression, stress, and anxiety. Our goal is to offer support, education, and tools to promote mental well-being.
      </p>
      <p className="text-lg mb-4">
        Browse through the different pages to explore resources specific to each category. You can find links to websites, blogs, forums, and other helpful materials that provide further information and guidance on these topics.
      </p>
      <p className="text-lg mb-4">
        Additionally, we have a dedicated section for suicide prevention resources that are always available for emergencies. Please reach out to the provided hotlines if you or someone you know is in crisis.
      </p>
      <p className="text-lg mb-4">
        If you'd like to document your thoughts and feelings, our journal feature allows you to write and reflect privately. Click the "Journal" button to start journaling.
      </p>
      <p className="text-lg mb-4">
        This project is open to everyone and aims to be a valuable resource for individuals seeking knowledge, support, and tools for mental health. While the resources are accessible to all, only logged-in users can contribute and add new resources to the platform.
      </p>
      <p className="text-lg mb-8">
        We hope that this project serves as a helpful companion on your mental health journey. Remember, seeking help and support is a sign of strength, and you're not alone in this.
      </p>
      <JournalButton className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-700 hover:text-white text-lg transition duration-300" />
    </div>
  );
};

export default InfoPage;