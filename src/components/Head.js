const Head = () => {
  return (
    <div className="grid grid-flow-col p-5 shadow-xl justify-between bg-pink-100 sm:bg-blue-700 md:bg-purple-400">
      <div className="flex">
        <img
          className="h-12"
          alt="menu"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiC3wMxCwXBR4fAujFYPsrQTgWtn1820Q1l3QmnmU&s"
        />
        <img
          className="h-12"
          alt="youtube"
          src="https://lh3.googleusercontent.com/3zkP2SYe7yYoKKe47bsNe44yTgb4Ukh__rBbwXwgkjNRe4PykGG409ozBxzxkrubV7zHKjfxq6y9ShogWtMBMPyB3jiNps91LoNH8A=s500"
        />
      </div>
      <div>
        <input
          className="p-1 m-2"
          type="text"
        />
        <button
          className="bg-green-700 p-1 text-white text-sm rounded-xl hover:bg-green-100 hover:text-black"
        >
          Search
        </button>
      </div>
      <div>
        <img
          className="h-12"
          alt="user-icon"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s"
        />
      </div>
    </div>
  )
}

export default Head;