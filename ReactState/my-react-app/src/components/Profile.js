import React from 'react';

const Profile = ({ person }) => {
    return (
        <div>
            <h2>{person.fullName}</h2>
            <p>{person.bio}</p>
            <img src={person.imgSrc} alt={person.fullName} />
            <p>Profession: {person.profession}</p>
        </div>
    );
};

export default Profile;