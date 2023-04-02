const ChatMessage = ({ name, message }) => {
  return (
    <div className="flex items-center shadow-md p-1">
      <img
        className="h-10"
        alt="user-icon"
        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s"
      />
      <span className="font-bold px-2">{name}</span>
      <span>{message}</span>
    </div>
  );
}

export default ChatMessage;