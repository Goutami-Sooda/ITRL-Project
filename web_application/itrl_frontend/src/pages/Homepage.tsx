import React from "react";
import { useNavigate } from "react-router-dom";

const Homepage: React.FC = () => {
  const navigate = useNavigate();

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    height: '100vh',
    display: 'flex',
    justifyContent: 'left',
    alignItems: 'left',
    overflow: 'hidden',
    backgroundColor: 'white',
  };

  const contentWrapperStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Changed to center the content vertically
    justifyContent: 'center',
    height: '100%',
    padding: '20px',
    boxSizing: 'border-box',
  };

  const contentStyle: React.CSSProperties = {
    zIndex: 1,
    color: 'white',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center', // Changed to center the content horizontally
    maxWidth: '600px',
    paddingTop: '90px', // Add padding to the top
    paddingBottom: '90px', // Add padding to the bottom
  };

  const textContainerStyle: React.CSSProperties = {
    padding: '20px',
    borderRadius: '10px',
    backgroundColor: 'rgba(128, 203, 196, 1)',
    marginBottom: '20px',
    width: '100%',
  };

  const webAppNameStyle: React.CSSProperties = {
    fontSize: '48px',
    fontWeight: 'bold',
    marginBottom: '10px',
    color: '#2c5282',
  };

  const logoStyle: React.CSSProperties = {
    width: '250px',
    height: 'auto',
    marginBottom: '20px',
  };

  const subtitleStyle: React.CSSProperties = {
    fontSize: '24px',
    marginBottom: '10px',
    color: 'black',
  };

  const descriptionStyle: React.CSSProperties = {
    fontSize: '16px',
    marginBottom: '20px',
    color: 'black',
  };

  const buttonStyle: React.CSSProperties = {
    padding: '10px 20px',
    fontSize: '16px',
    backgroundColor: '#2c5282',
    color: 'white',
    border: 'none',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  const imageContainerStyle: React.CSSProperties = {
    position: 'absolute',
    right: 0,
    bottom: 0,
    width: '50%',
    height: '100%',
    backgroundImage: 'url(./src/assets/hmpic.jpg)',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    clipPath: 'polygon(0% 0%, 100% 0, 100% 500%, 0% 0%)',
  };

  return (
    <div style={containerStyle}>
      <div style={contentWrapperStyle}>
        <div style={contentStyle}>
          <img src="./src/assets/logo.jpg" alt="Logo" style={logoStyle} />
          <div style={webAppNameStyle}>ಕಲಿಕೆmate</div>
          <div style={textContainerStyle}>
            <div style={subtitleStyle}>ಕನ್ನಡದಲ್ಲಿ ಕೋಡ್ ಮಾಡಲು ಕಲಿಯಿರಿ</div>
            <div style={subtitleStyle}>ಕೋಡಿಂಗ್ ಶಿಕ್ಷಣಕ್ಕೆ ಹೊಸ ವಿಧಾನ</div>
            <div style={descriptionStyle}>
              ಕಲಿಕೆ ಮೇಟ್ ಎನ್ನುವುದು ಸಂವಾದಾತ್ಮಕ ಕಲಿಕೆಯ ಸಾಧನವಾಗಿದ್ದು, ವಿದ್ಯಾರ್ಥಿಗಳಿಗೆ ಕನ್ನಡದಲ್ಲಿ ಕೋಡಿಂಗ್ ಕಲಿಯಲು ಸಹಾಯ ಮಾಡಲು ವಿನ್ಯಾಸಗೊಳಿಸಲಾಗಿದೆ. ಇದು ಸ್ವಯಂ ಗತಿಯ ಮತ್ತು ಬಳಕೆದಾರ ಸ್ನೇಹಿ ಪರಿಸರವಾಗಿದೆ. ಈ ವೆಬ್ ಅಪ್ಲಿಕೇಶನ್‌ನ ಉದ್ದೇಶವು ವಿದ್ಯಾರ್ಥಿಗಳಲ್ಲಿ ಕೋಡಿಂಗ್ ಕೌಶಲ್ಯ ಮತ್ತು ವಿಶ್ಲೇಷಣಾತ್ಮಕ ಚಿಂತನೆಯನ್ನು ಬೆಳೆಸುವುದು.
              ಹ್ಯಾಪಿ ಕೋಡಿಂಗ್!
            </div>
            <button style={buttonStyle} onClick={() => navigate("/Tutorials")}>
              ಲಾಗಿನ್ / ಸೈನ್ ಅಪ್
            </button>
          </div>
        </div>
      </div>
      <div style={imageContainerStyle}></div>
    </div>
  );
};

export default Homepage;
