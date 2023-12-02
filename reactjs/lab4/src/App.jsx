import React, { useEffect, useState } from 'react';

const App = () => {
    const [key, setKey] = useState('');
    const [images, setImages] = useState([]);

    const handleSubmit = (e) => {
        e.preventDefault();
    }

    const fetchByKey = (key) => {
        const accessKey = '37BtByyEjyYs1J0sF5-y9hFgnxnv7QsT8sC9ILWoLQs';
        const apiUrl = 'https://api.unsplash.com/';

        // Specify the number of images you want to fetch per page
        const perPage = 9;

        // Specify the search query (e.g., 'nature', 'cities', 'animals', etc.)

        // Specify the page number you want to fetch
        const page = 1;

        // Example: Fetch multiple images using search with pagination
        fetch(apiUrl + 'search/photos?client_id=' + accessKey + '&query=' + key + '&per_page=' + perPage + '&page=' + page)
            .then(response => response.json())
            .then(data => {
                setImages(data.results);
            })
            .catch(error => console.error('Error:', error));
    }

    useEffect(() => {
        fetchByKey('cars');
    }, []);

    return (
        <>
            <div className="container">
                <div className="card p-4 mt-2">
                    <form onSubmit={(e) => handleSubmit(e)}>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Search"
                                onChange={(e) => fetchByKey(e.target.value)} />
                        </div>
                    </form>
                </div>
            </div>

            <div className="container">
                <div className="row">
                    {images.map((image, index) => ( // Only display the first 3 images
                        <div key={index} className="col-sm-4 px-2 py-2">
                            <img src={image.urls.full} alt={`Image ${index}`} style={{height:"400px", width: "400px"}} />
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}

export default App;