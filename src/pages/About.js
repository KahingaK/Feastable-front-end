import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import logo from "../assests/logo.png"

function About() {
  return (
    <div>
      <Navbar/>
      <div className="flex p-8 rounded-md shadow-md">
        <img src={logo} alt="Logo" className="h-32 mr-8 my-auto" style={{backgroundColor: 'black', borderRadius: '50%'}} />
        <div>
          <h1 className="text-3xl font-bold mb-4">About Our Recipe Web App</h1>
          <p className="text-lg mb-4">Our recipe web app is designed to help you discover new and exciting recipes that you can easily make at home. We believe that cooking should be fun and easy, and our app is designed to make it just that.</p>
          <p className="text-lg mb-4">Our team of experienced chefs and developers work together to create a platform that is easy to use and provides users with a variety of recipe options to choose from. We understand that everyone's dietary needs and preferences are different, which is why we offer a wide variety of recipes to choose from, including vegan, vegetarian, gluten-free, and more.</p>
          <p className="text-lg mb-4">Our app is constantly being updated with new recipes and features to make your cooking experience even better. We also offer a personalized recipe recommendation system, where you can input your dietary preferences and receive recipe recommendations tailored specifically to you.</p>
          <p className="text-lg">If you have any questions or feedback, we would love to hear from you. Contact us today to let us know how we can improve your recipe experience!</p>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default About