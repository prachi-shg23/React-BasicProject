/* eslint-disable @next/next/no-img-element */
function Card({name, price, published, description}) {
  return (
    <div className="w-60 flex flex-col rounded-xl bg-red-500 text-white m-4 ">
      <div>
        <img
          src="https://cdn.vox-cdn.com/thumbor/ZkmdkuJUTLgJh96_FWQ5zweGGxo=/1400x1400/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/23084330/bored_ape_nft_accidental_.jpg"
          alt="test"
          className="object-cover object-center rounded-t-xl"
        />
      </div>
      <div className="flex flex-col py-3 px-3 pb-10  text-white">
        <div className="flex justify-between ">
          <h1 className="font-bold  text-white">{name}</h1>
          <h1 className="font-bold  text-white">Price</h1>
        </div>
        <div className="flex  justify-between">
          <p>Published Date : {published}</p>
          <p>Rs {price}</p>
        </div>
        <div className="flex  justify-between">
          <h4>Description</h4>
        </div>
        <div className="flex  justify-between mt-2">
          <p>
            {description}
          </p>
        </div>
      </div>
    </div>
  )
}

export default Card

      