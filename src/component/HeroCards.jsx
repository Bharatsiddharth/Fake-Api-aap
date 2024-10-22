import React, { useContext } from 'react';
import { ProductContext } from '../utils/context';
import { Link } from 'react-router-dom';

const HeroCards = () => {
    const [products] = useContext(ProductContext);

    let distinct_category =
        products && products.reduce((acc, cv) => [...acc, cv.category], []);

    distinct_category = [...new Set(distinct_category)]; // Remove duplicates

    const color = () => {
        return `rgba(${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},${(Math.random() * 255).toFixed()},0.4)`;
    };

    return (
        <div className="p-4 py-20">
            <div className="flex flex-wrap gap-5 justify-center">
                {distinct_category.map((c, i) => (
                    <Link
                        key={i}
                        to={`/products?category=${c}`}
                        className="flex justify-center items-center text-lg md:text-2xl lg:text-3xl uppercase rounded-3xl shadow-lg shadow-gray-500/40 hover:shadow-indigo-500/40 w-full sm:w-[45%] md:w-[30%] lg:w-[20%] h-[30vh] relative"
                    >
                        {/* <span
                            style={{ backgroundColor: color() }}
                            className="w-[15px] h-[15px] rounded-full mr-2"
                        ></span> */}
                        {c}
                    </Link>
                ))}
            </div>
        </div>
    );
};

export default HeroCards;