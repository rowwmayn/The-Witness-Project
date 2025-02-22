import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';

const ArticlePage = () => {
  const { slug } = useParams();
  const navigate = useNavigate();
  
  // In a real application, you would fetch the article data based on the slug
  // This is example data - replace with your actual data fetching logic
  const article = {
    title: "First Article Title",
    content: `This is the full content of the article. It would typically be much longer than the preview shown on the main page. 
    
    You can include multiple paragraphs and format them as needed. The content should be comprehensive and engaging.
    
    This is another paragraph with more detailed information about the topic. You can continue adding as much content as needed for the full article.`,
    image: "/public/The Witness.png",
    donationNumber: "71234567",
    youtubeUrl: "https://www.youtube.com/watch?v=example1"
  };

  const handleInterviewClick = () => {
    window.open(article.youtubeUrl, '_blank');
  };

  const handleBackClick = () => {
    navigate('/');
  };

  return (
    <div style={{
      backgroundColor: 'black',
      color: 'white',
      minHeight: '100vh',
      padding: window.innerWidth <= 480 ? '10px' : '20px'
    }}>
      <div style={{
        maxWidth: '800px',
        margin: '0 auto',
        padding: '20px',
        border: '1px solid rgba(255, 255, 255, 0.2)',
        borderRadius: '8px'
      }}>
        <button
          onClick={handleBackClick}
          style={{
            backgroundColor: '#333',
            color: 'white',
            padding: '8px 16px',
            border: 'none',
            borderRadius: '4px',
            cursor: 'pointer',
            marginBottom: '20px'
          }}
        >
          ← Back to Articles
        </button>

        <img 
          src={article.image}
          alt={article.title}
          style={{
            width: '100%',
            maxHeight: '400px',
            objectFit: 'cover',
            borderRadius: '4px',
            marginBottom: '20px'
          }}
        />

        <h1 style={{
          fontSize: window.innerWidth <= 480 ? '24px' : '32px',
          marginBottom: '20px'
        }}>{article.title}</h1>

        <div style={{
          whiteSpace: 'pre-wrap',
          lineHeight: '1.8',
          marginBottom: '30px',
          fontSize: window.innerWidth <= 480 ? '14px' : '16px'
        }}>
          {article.content}
        </div>

        <div style={{
          display: 'flex',
          flexDirection: window.innerWidth <= 480 ? 'column' : 'row',
          gap: '20px',
          alignItems: window.innerWidth <= 480 ? 'stretch' : 'center',
          marginTop: '30px'
        }}>
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
            }}>{article.donationNumber}</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;