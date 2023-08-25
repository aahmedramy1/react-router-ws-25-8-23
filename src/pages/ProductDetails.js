import {useEffect} from "react";
import {useParams} from "react-router-dom";

const ProductDetails = () => {
    const {id} = useParams();

    useEffect(() => {
        console.log(id);
    }, []);


    return (
        <div>
            <h1>Product Details</h1>
            <p>Product ID: {id}</p>
        </div>
    )
}

export default ProductDetails;