import React from 'react'
import RootLayout from '../layouts/RootLayout'
import "../styles/about.css"
function About() {
  return (
    <RootLayout title="About Us"> 
      <main className='about-main'>
        <p>
          {" "}
          Welcome to our simple and intuitive Todo app! We're delighted to help
          you stay organized and manage your tasks efficiently.{" "}
        </p>{" "}
        <h2 className="about-subtitle">Why Choose Our Todo App?</h2>{" "}
        <p>
          {" "}
          We understand the importance of keeping track of your daily tasks and
          responsibilities. Our app is designed with simplicity and usability in
          mind to make task management a breeze. Here's why you should choose
          our Todo app:{" "}
        </p>{" "}
        <h3 className="about-subtitle">Easy Task Management</h3>{" "}
        <p>
          {" "}
          Our app allows you to create and mark tasks as completed effortlessly.
          Stay on top of your to-do list without any hassle.{" "}
        </p>{" "}
        <h3 className="about-subtitle">Intuitive User Interface</h3>{" "}
        <p>
          {" "}
          We believe that a clean and user-friendly interface is key to a great
          user experience. Our app's design is intuitive and straightforward,
          making it suitable for users of all ages.{" "}
        </p>{" "}
        <h3 className="about-subtitle">Accessibility</h3>{" "}
        <p>
          {" "}
          We're committed to making our app accessible to everyone. We strive to
          provide an inclusive experience, ensuring that all users can
          effectively use and benefit from our app.{" "}
        </p>{" "}
        <h2 className="about-subtitle">Contact Us</h2>{" "}
        <p>
          {" "}
          We value your feedback and are here to assist you. If you have any
          questions, suggestions, or encounter any issues while using our app,
          please don't hesitate to{" "}
          <a href="mailto:contact@example.com">contact us</a>. Your input helps
          us improve our app and make it even better for you.{" "}
        </p>{" "}
        <p>
          {" "}
          Thank you for choosing our Todo app to simplify your task management.
          We hope it helps you stay organized and productive!{" "}
        </p>
      </main>
    </RootLayout>
  );
}

export default About