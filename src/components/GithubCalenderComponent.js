import React from 'react';
import GitHubCalendar from 'react-github-calendar';

const Portfolio = () => {
  const customColors = {
    background: 'transparent',
    text: '#000000',
    grade0: '#EBEDF0',
    grade1: 'rgba(14, 224, 224, 0.25)',
    grade2: 'rgba(14, 224, 224, 0.5)',
    grade3: 'rgba(14, 224, 224, 0.75)',
    grade4: 'rgb(14, 224, 224)',
  };

  return (
    <div>
      <h1>My Portfolio</h1>
      <GitHubCalendar 
        username="yourGitHubUsername"
        theme={customColors}
      />
    </div>
  );
};

export default Portfolio;
