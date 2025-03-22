import React, { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import EmailList from '../components/EmailList';

function Challenge() {
  const [emails, setEmails] = useState([]);
  const [responses, setResponses] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState(null);
  const history = useHistory();

  useEffect(() => {
    fetch('http://localhost:5000/api/emails')
      .then(res => res.json())
      .then(data => setEmails(data))
      .catch(err => console.error('Error fetching emails:', err));
  }, []);

  const handleAnswer = (emailId, userAnswer) => {
    fetch('http://localhost:5000/api/check', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ emailId, userAnswer })
    })
      .then(res => res.json())
      .then(data => {
        const newResponses = [...responses, { emailId, ...data }];
        setResponses(newResponses);
        setSelectedEmail(null);
        if (newResponses.length === emails.length) {
          history.push('/results', { responses: newResponses });
        }
      })
      .catch(err => console.error('Error checking answer:', err));
  };

  return (
    <div className="container">
      <h1>Bandeja de entrada</h1>
      <div style={{ display: 'flex', gap: '30px', flexWrap: 'wrap' }}>
        <div style={{ flex: '1', minWidth: '300px', maxWidth: '450px' }}>
          <EmailList
            emails={emails}
            responses={responses}
            onSelectEmail={setSelectedEmail}
            selectedEmail={selectedEmail}
          />
        </div>
        {selectedEmail && (
          <div className="email-detail" style={{ flex: '2', minWidth: '300px' }}>
            <h2>{selectedEmail.subject}</h2>
            <p><strong>De:</strong> {selectedEmail.sender}</p>
            <p><strong>Fecha:</strong> {selectedEmail.date}</p>
            <p>{selectedEmail.body}</p>
            {selectedEmail.links.length > 0 && (
              <p><strong>Enlaces:</strong> {selectedEmail.links.join(', ')}</p>
            )}
            {!responses.find(r => r.emailId === selectedEmail.id) ? (
              <div style={{ marginTop: '20px' }}>
                <button
                  onClick={() => handleAnswer(selectedEmail.id, true)}
                  style={{ marginRight: '15px' }}
                >
                  Es Phishing
                </button>
                <button onClick={() => handleAnswer(selectedEmail.id, false)}>
                  Es Legítimo
                </button>
              </div>
            ) : (
              <p style={{
                color: responses.find(r => r.emailId === selectedEmail.id).isCorrect ? '#2ea043' : '#f85149',
                fontWeight: '500',
                marginTop: '20px'
              }}>
                {responses.find(r => r.emailId === selectedEmail.id).isCorrect ? '¡Correcto!' : 'Incorrecto'} -{' '}
                {responses.find(r => r.emailId === selectedEmail.id).explanation}
              </p>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default Challenge;