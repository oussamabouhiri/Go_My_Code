import React from 'react';
import Card from 'react-bootstrap/Card';

const Player = ({ name, team, nationality, jerseyNumber, age, imageUrl }) => {
    const cardStyle = {
        width: '18rem',
        margin: '10px',
        textAlign: 'center',
    };

    return (
        <Card style={cardStyle}>
            <Card.Img variant="top" src={imageUrl} />
            <Card.Body>
                <Card.Title>{name}</Card.Title>
                <Card.Text>
                    <strong>Team:</strong> {team}<br />
                    <strong>Nationality:</strong> {nationality}<br />
                    <strong>Jersey Number:</strong> {jerseyNumber}<br />
                    <strong>Age:</strong> {age}
                </Card.Text>
            </Card.Body>
        </Card>
    );
};

Player.defaultProps = {
    name: 'Unknown Player',
    team: 'Unknown Team',
    nationality: 'Unknown',
    jerseyNumber: '0',
    age: 'N/A',
    imageUrl: 'https://via.placeholder.com/150',
};

export default Player;