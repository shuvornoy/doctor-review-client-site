import React from 'react';

const Utiliti = (user) => {


            const currentUser = {
                email: user.email
            }
            // get jwt token
            fetch('https://modul-66-genius-car-server.vercel.app/jwt', {
                method: 'POST',
                headers: {
                    'content-type': 'application/json'
                },
                body: JSON.stringify(currentUser)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    // local storage is the easiest but not the best place to store jwt token
                    localStorage.setItem('genius-token', data.token);
                    
                });
    
};

export default Utiliti;