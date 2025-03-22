import React from 'react';

function EmailList({ emails, responses, onSelectEmail, selectedEmail }) {
  return (
    <ul className="email-list">
      {emails.map(email => {
        const response = responses.find(r => r.emailId === email.id);
        const isSelected = selectedEmail && selectedEmail.id === email.id;
        return (
          <li
            key={email.id}
            onClick={() => onSelectEmail(email)}
            className="email-item"
            style={{
              background: isSelected ? '#30363d' : response ? (response.isCorrect ? '#1a2e1a' : '#2e1a1a') : '#161b22',
            }}
          >
            <div>
              <strong>{email.sender}</strong>
              <p>{email.subject}</p>
            </div>
            <span style={{ color: '#8b949e', fontSize: '0.9rem' }}>{email.date}</span>
          </li>
        );
      })}
    </ul>
  );
}

export default EmailList;