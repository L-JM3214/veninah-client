import React, { useEffect, useState } from 'react';
import { Star } from 'react-feather';
import '../App.css';
import Navbar from './Navbar';
import Footer from './Footer';

function TrackingPage() {
  const estimatedTime = 5;
  const [elapsedTime, setElapsedTime] = useState(0);
  const [rate, setRate] = useState(0);
  const [feedback, setFeedback] = useState('');

  const user = {
    email: 'user@example.com',
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setElapsedTime((prevTime) => prevTime + 1);
    }, 60000);

    return () => clearInterval(interval);
  }, []);

  const getStepByElapsedTime = () => {
    const totalSteps = 4;
    const stepDuration = estimatedTime / totalSteps;
    const currentStep = Math.floor(elapsedTime / stepDuration) + 1;
    return currentStep > totalSteps ? totalSteps : currentStep;
  };

  const handleRateClick = (selectedRate) => {
    setRate(selectedRate);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!user || !user.email) {
      console.error('User email not found');
      return;
    }

    // Make a POST request to the Flask API
    try {
      const response = await fetch(`http://127.0.0.1:5000/reviews`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          userEmail: user.email,
          rating: rate,
          feedback,
        }),
      });

      if (response.ok) {
        console.log('Review submitted successfully');
        setRate(0);
        setFeedback('');
      } else {
        console.error('Failed to submit review');
      }
    } catch (error) {
      console.error('Error:', error);
    }
  };

  const renderRatingIcons = () => {
    const totalRatings = 5;
    const ratingIcons = [];

    for (let i = 1; i <= totalRatings; i++) {
      ratingIcons.push(
        <button
          key={i}
          onClick={() => handleRateClick(i)}
          className={i <= rate ? 'active' : ''}
          style={{
            transition: 'background-color 0.3s ease-in-out',
            backgroundColor: 'transparent', // Set the background color to transparent
            ':hover': { backgroundColor: 'rgba(0, 0, 0, 0.2)' },
          }}
        >
          <Star
            className="star"
            color="currentColor"
            size={28}
          />
        </button>
      );
      
    }

    return ratingIcons;
  };

  return (
    <div>
      <Navbar />
      <div className="track-order-container">
        <div className="steps-container">
          {['Ordered', 'Preparing', 'In Transit', 'Arrived'].map((step, index) => (
            <div
              key={index}
              className={`step ${getStepByElapsedTime() === index + 1 ? 'active' : ''}`}
            >
              {step}
            </div>
          ))}
        </div>
        <div className="estimate-bar">
          <div
            className="estimate-progress"
            style={{ width: `${(elapsedTime / estimatedTime) * 100}%` }}
          ></div>
        </div>
        <div className="estimated-time">Estimated Time: {estimatedTime - elapsedTime} minutes</div>
        {/* Add other tracking page content here */}

        {/* Creative form for order status */}
        <div className="order-status-form">
          <h3 style={{marginBottom:"30px", fontSize:"20px"}}>Your feedback is important to us:</h3>
          <label htmlFor="status1"m style={{fontSize:"20px"}}>Rate our Service: </label>
          <div className="rating-container">{renderRatingIcons()}</div>
          <form onSubmit={handleSubmit}>
        <label htmlFor="status2">What Makes You Feel This Way</label>
        <input
          className="feedback"
          type="text"
          id="status2"
          placeholder="Good Food, Fast delivery etc.."
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
        />
        <button type="submit" className="continue-shoppingbtn">
          Submit
        </button>
      </form>
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default TrackingPage;
