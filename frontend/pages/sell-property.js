import React from 'react';
import PropertyForm from '../Components/Seller/PropertyForm';
import axios from 'axios';
import { useRouter } from 'next/router';

const SellProperty = () => {
    const router = useRouter();

    const handleAddProperty = async (property) => {
        const token = localStorage.getItem('token'); // Assuming you have saved the token in localStorage
        try {
            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    Authorization: `Bearer ${token}`,
                },
            };
            const response = await axios.post(`${process.env.GET_Properties_URL}`, property, config);
            console.log('Property added successfully:', response.data);
            router.push('/my-properties'); // Redirect to my properties page after adding
        } catch (error) {
            console.error('Error adding property:', error.response ? error.response.data : error.message);
        }
    };

    return (
        <div>
            <h2>Sell Property</h2>
            <PropertyForm onSubmit={handleAddProperty} />
        </div>
    );
};

export default SellProperty;


// import React from 'react'
// import PropertyForm from '../Components/Seller/PropertyForm'

// function SellProperty() {
//   return (
//     <div>
//         <PropertyForm onSubmit={onSubmit}/>
//     </div>
//   )
// }

// export default SellProperty