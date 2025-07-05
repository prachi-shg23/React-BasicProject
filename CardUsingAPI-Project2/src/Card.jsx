function Card({ title, imageUrl, price, description, expiryDate }) {
    return (
        <div className="max-w-xs p-6 rounded-md shadow-md bg-black mx-2 ">
            <img
                src="https://images.pexels.com/photos/32356082/pexels-photo-32356082.jpeg"
                alt=""
                className="object-cover object-center w-full rounded-md h-72 bg-gray-500"
            />
            <div className="mt-6 mb-2">
                <span className="block text-sm font-medium font-mono tracking-widest uppercase text-indigo-400">
                    {title}
                </span>
                <h2 className="text-xl font-semibold tracking-wide text-red-300">{price} </h2>
            </div>

            <p className="text-gray-300">
                {description}
            </p>

        </div>
    )
}

export default Card