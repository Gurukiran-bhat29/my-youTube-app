const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex shadow-md p-2">
      <img
        className="h-10"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s"
      />
      <p className="break-all px-1">
        <span className="font-bold pr-2">
          {name}
        </span>
        {message}
      </p>
    </div>
  );
}

export default ChatMessage;