import { useState } from "react";

const ProductReview = ()=>{
    const [review,setReview] = useState([]);

    const [name,setName] = useState("");
    const [message,setMessage] = useState("");
    const [rating,setRating] = useState("");

    const handleSubmit = (e)=>{
        e.preventDefault();

        const newReview = {
            id:review.length + 1,
            name,
            message,
            rating
        }

        setReview([...review,newReview]);

        setName("");
        setMessage("");
        setRating("");

    }

    return(
        <>
            <h1>Product Review System</h1>

            <form onSubmit={handleSubmit}>
                <input type="text" value={name} onChange={(e)=>setName(e.target.value)} placeholder="Enter name.!" />
                <textarea placeholder="Enter message" value={message} onChange={(e)=>setMessage(e.target.value)} ></textarea>
                <select value={rating} onChange={(e)=>setRating(e.target.value)} >
                    <option value="1">⭐</option>
                    <option value="2">⭐⭐</option>
                    <option value="3">⭐⭐⭐</option>
                    <option value="4">⭐⭐⭐⭐</option>
                    <option value="5">⭐⭐⭐⭐⭐</option>
                </select>
                <button>Submit</button>
            </form>

            {
                review.map((r)=>(
                    <div className="review-card" key={r.id}>
                        <h3>{r.name}</h3>
                        <p>{r.message}</p>
                        <p>{r.rating}⭐</p>
                    </div>
                ))
            }

        </>
    )
}

export default ProductReview;