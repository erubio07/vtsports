import React from "react";

const FeaturedProducts = ({randomProducts}) => {
    console.log(randomProducts);
    return (
        <div>
        {randomProducts.map((p) => (
            <div key={p.id}>
            <div>
            <img src={p.image} alt={p.name}/>
            </div>
            <div>
            <h4>{p.name}</h4>
            <p>$ {p.price}</p>
            </div>
            </div>
        ))}
        </div>
    );
};

export default FeaturedProducts;