import React from 'react';
import './styles/Challenges.css';

const Challenges = () => {
  const challenges = [
    {
      title: 'Day 1: Cardio Workout',
      description: 'Complete a 30-minute cardio workout of your choice. This can include running, cycling, or using an elliptical machine. Track your distance, time, and heart rate using a fitness tracker.',
    },
    {
      title: 'Day 2: Strength Training',
      description: 'Perform a full-body strength training routine. Include exercises for each major muscle group, such as squats, lunges, push-ups, and dumbbell rows. Track the number of sets, reps, and weights used.',
    },
    {
      title: 'Day 3: Flexibility and Stretching',
      description: 'Dedicate at least 20 minutes to stretching exercises and improving flexibility. Focus on major muscle groups like hamstrings, quadriceps, and shoulders. Use your fitness tracker to monitor your activity.',
    },
  ];

  const handleStartChallenge = (index) => {
    console.log(`Start Challenge: ${index}`);
  };

  return (
    <div>
      <div className="challenge-header">


      {challenges.map((challenge, index) => (
        <section className="challenge" key={index}>
          <h2>{challenge.title}</h2>
          <p>{challenge.description}</p>
          <button className="btn" onClick={() => handleStartChallenge(index)}>Start Challenge</button>
        </section>
      ))}
    </div>
      </div>
  );
};

export default Challenges;
