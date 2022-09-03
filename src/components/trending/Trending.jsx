import React, { useState } from 'react';
import { trending } from '~/Data';
import Home from '../homes/Home';
import './trending.css';

const Trending = () => {
    const [items, setItems] = useState(trending);
    return (
        <>
            <section className="trending">
                <Home items={items} />
            </section>
        </>
    );
};

export default Trending;
