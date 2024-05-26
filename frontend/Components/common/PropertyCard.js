import axios from 'axios';
import Link from 'next/link';
import React, { useEffect, useState } from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

function PropertyCard({ property, i, isSelerPage, handleDelete, handleShowInterested }) {
    const [liked, setLiked] = useState(false);
    const [likes, setLikes] = useState(property.likes);
    useEffect(() => {
        // Check if the user has already liked the property
        // This requires a way to track user likes, possibly a field in the property schema
        const checkIfLiked = async () => {
            try {
                const res = await axios.get(`http://localhost:5000/api/properties/${property._id}/isLiked`, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setLiked(res.data.liked);
            } catch (err) {
                console.error('Error checking like status:', err);
            }
        };

        checkIfLiked();
    }, [property._id]);

    const handleLike = async () => {
        try {
            setLiked(!liked);
            if (liked) {
                await axios.post(`http://localhost:5000/api/properties/${property._id}/unlike`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setLikes(likes - 1);
            } else {
                await axios.post(`http://localhost:5000/api/properties/${property._id}/like`, {}, {
                    headers: {
                        Authorization: `Bearer ${localStorage.getItem('token')}`
                    }
                });
                setLikes(likes + 1);
            }
            // setLiked(!liked);
        } catch (err) {
            console.error('Error toggling like:', err);
        }
    };
    const handleInterested = () => {
        axios.post(`http://localhost:5000/api/properties/${property._id}/interested`, {}, {
            headers: {
                Authorization: `Bearer ${localStorage.getItem('token')}`
            }
        })
            .then(res => {
                alert('Interest email sent successfully');
            })
            .catch(err => {
                console.error('Error expressing interest:', err);
            });
    };

    return (
        <div key={i} className='propertyCard'>
            <Link href={`/property/${property._id}`}>
                <div>
                    <img src='assets/homeIcon.png' height={100} />
                </div>
                <div>
                    <p>Place :  {property.place} </p>
                    <p>Area :  {property.area} </p>
                    {property.price && (<p>Price :  {property?.price} </p>)}
                </div>
            </Link>
            {isSelerPage ?
                <div>
                    <button onClick={(e) => handleDelete(e, property._id)}>Delete</button>
                </div>
                :
                <div style={{ display: 'flex', alignItems: "center", gap: '20px' }}>
                    <div onClick={handleLike} style={{ cursor: 'pointer' }}>
                        {liked ? <FavoriteIcon color="error" /> : <FavoriteBorderIcon />}
                    </div>
                    <button onClick={handleInterested}>I'm Interested</button>
                    {/* <p>{likes} Likes</p> */}
                </div>
                // <button onClick={() => handleShowInterested(property._id)} >I'm Interested</button>
            }
        </div>
    )
}

export default PropertyCard