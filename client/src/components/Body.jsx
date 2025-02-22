import React from 'react';
import { useNavigate } from 'react-router-dom';

const Article = ({ title, content, image, donationNumber, youtubeUrl, slug }) => {
  const navigate = useNavigate();
  const handleInterviewClick = () => {
    window.open(youtubeUrl, '_blank');
  };

  const handleReadMore = () => {
    navigate(`/article/${slug}`);
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      padding: '20px',
      margin: '20px 0',
      display: 'flex',
      flexDirection: window.innerWidth <= 768 ? 'column' : 'row',
      gap: '20px',
      borderRadius: '8px',
      maxWidth: '100%',
      overflow: 'hidden',
      border: '1px solid rgba(255, 255, 255, 0.2)'
    }}>
      <div style={{ 
        flex: '1',
        minWidth: 0
      }}>
        <h2 style={{
          fontSize: window.innerWidth <= 480 ? '20px' : '24px',
          marginBottom: '16px',
          wordWrap: 'break-word'
        }}>{title}</h2>
        
        <p style={{
          lineHeight: '1.6',
          marginBottom: '16px',
          fontSize: window.innerWidth <= 480 ? '14px' : '16px'
        }}>{content}</p>
        
        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
          alignItems: window.innerWidth <= 480 ? 'stretch' : 'center',
          gap: window.innerWidth <= 480 ? '10px' : '20px',
          marginBottom: '16px'
        }}>
          <button 
            onClick={handleReadMore}
            style={{
              backgroundColor: '#333',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: window.innerWidth <= 480 ? '100%' : 'auto'
            }}
          >
            Read More
          </button>

          <button 
            onClick={handleInterviewClick}
            style={{
              backgroundColor: '#c4302b',
              color: 'white',
              padding: '8px 16px',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              width: window.innerWidth <= 480 ? '100%' : 'auto'
            }}
          >
            View Interview
          </button>
          
          <div style={{
            display: 'flex',
            alignItems: 'center',
            gap: '8px',
            width: window.innerWidth <= 480 ? '100%' : 'auto',
            flexWrap: 'wrap'
          }}>
            <span>Donate to:</span>
            <span style={{
              backgroundColor: '#333',
              padding: '4px 12px',
              borderRadius: '4px',
              fontFamily: 'monospace',
              letterSpacing: '1px',
              flex: window.innerWidth <= 480 ? '1' : '0'
            }}>{donationNumber}</span>
          </div>
        </div>
      </div>
      
      <img 
        src={image} 
        alt={title}
        style={{
          width: window.innerWidth <= 768 ? '250px' : '200px', // Reduced mobile image width
          height: window.innerWidth <= 768 ? '250px' : '200px', // Made mobile image square
          maxHeight: '300px',
          objectFit: 'cover',
          borderRadius: '4px',
          alignSelf: window.innerWidth <= 768 ? 'center' : 'flex-start' // Center image in mobile view
        }}
      />
    </div>
  );
};

/* Rest of the Body component remains the same */

const Body = () => {
  const [windowWidth, setWindowWidth] = React.useState(window.innerWidth);

  React.useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const articles = [
    {
      title: "First Article Title",
      content: "This is the main paragraph of the first article. It should be long enough to demonstrate how the text wraps and flows alongside the image. The content should be engaging and informative.",
      image: "/public/The Witness.png",
      donationNumber: "71234567",
      youtubeUrl: "https://www.youtube.com/watch?v=example1",
      slug: "first-article"
    },
    {
      title: "Second Article Title",
      content: "This is the main paragraph of the second article. Each article maintains consistent styling while allowing for different content lengths and image aspects.",
      image: "/public/logo.png",
      donationNumber: "71234568",
      youtubeUrl: "https://www.youtube.com/watch?v=example2",
      slug: "second-article"
    }
  ];

  return (
    <div style={{
      backgroundColor: 'black',
      minHeight: '100vh',
      padding: window.innerWidth <= 480 ? '10px' : '20px',
      maxWidth: '100%',
      width: '100%',
      margin: '0'
    }}>
      <div style={{
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        {articles.map((article, index) => (
          <Article
            key={index}
            {...article}
          />
        ))}
      </div>
    </div>
  );
};

export default Body;