import React from 'react';
import { Link } from 'gatsby';

export default function Footer({ title, heading, avatar }) {
  return (
    <div id="logo">
      <Link to="/">
        <span className="image" style={{ display: 'block', marginBottom: '15px' }}>
          <img
            src={avatar}
            alt=""
            style={{
              width: '120px',
              height: '120px',
              borderRadius: '50%',
              objectFit: 'cover'
            }}
          />
        </span>

        <h1 id="title">{title}</h1>
        <p>{heading}</p>
      </Link>
    </div>
  );
}