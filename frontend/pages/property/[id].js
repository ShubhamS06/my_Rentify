import React from 'react'
import PropertyDetails from '../../Components/PropertyDetails/PropertyDetails'
import axios from 'axios';

function propertyDetails() {
  const handleUpdateProperty = (propertyId, updatedData ) => {
    axios.put(`${process.env.GET_Properties_URL}/${propertyId}`, updatedData, {
        headers: {
            Authorization: `Bearer ${localStorage.getItem('token')}`
        }
    })
    .then(res => {
       setFilteredProperties(filteredProperties.map(property => 
            property._id === propertyId ? res.data : property
        ));
        setSelectedProperty(null);
    })
    .catch(err => {
        console.error('Error updating property:', err);
    });
};
  return (
    <div>
        <PropertyDetails handleUpdateProperty={handleUpdateProperty}/>
    </div>
  )
}

export default propertyDetails