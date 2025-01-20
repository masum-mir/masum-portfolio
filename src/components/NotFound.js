import React from 'react'; 

const NotFound = () => {
  const goBack = () => {
    window.history.back();
  };

  return (
    <div className="not-found-container">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        
        <div className="not-found-message">
          <h2>Page not found</h2>
          <p>Sorry, we couldn't find the page you're looking for. Please check the URL or navigate back.</p>
        </div>

        <div className="not-found-actions">
          <button onClick={goBack} className="back-button">
            <svg 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2"
              strokeLinecap="round" 
              strokeLinejoin="round"
            >
              <path d="M19 12H5M12 19l-7-7 7-7"/>
            </svg>
            Go Back
          </button>
          
          <a href="/" className="home-button">
            Return Home
          </a>
        </div>
      </div>
    </div>
  );
};

export default NotFound;