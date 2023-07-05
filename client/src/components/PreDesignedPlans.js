import React from 'react';
import './styles/PreDesignedPlans.css';
import workoutImage from './styles/images/workout1.png';

const PreDesignedPlans = () => {
  return (
    <div className='pre-plans'>
      <section className="pre-designed-plans">
        <h2>
          <u>Weight Loss Workout Plan</u>
        </h2>

        <div className="workout-plan">
          <img src={workoutImage} alt="Weight Loss Workout" />
          <div className="workout-details">
            <h3>Full Body Workout</h3>
            <p>
              This full body workout routine is designed to help you lose weight and tone your muscles. A
              comprehensive full body workout targeting all major muscle groups to build strength and burn
              calories. Follow the steps below:
            </p>
            <div className="steps">
              <div className="step">
                <span>Step 1:</span> Warm up with 5 minutes of light cardio exercises such as jogging or jumping jacks.
              </div>
              <div className="step">
                <span>Step 2:</span> Perform 3 sets of squats, 12 repetitions per set.
              </div>
              <div className="step">
                <span>Step 3:</span> Do 3 sets of push-ups, 10 repetitions per set.
              </div>
              <div className="step">
                <span>Step 4:</span> Perform 3 sets of lunges, 10 repetitions per leg.
              </div>
              <div className="step">
                <span>Step 5:</span> Do 3 sets of dumbbell shoulder presses, 10 repetitions per set.
              </div>
              <div className="step">
                <span>Step 6:</span> Perform 3 sets of plank exercises, holding each plank for 30 seconds.
              </div>
              <div className="step">
                <span>Step 7:</span> Cool down with 5 minutes of stretching exercises.
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PreDesignedPlans;
