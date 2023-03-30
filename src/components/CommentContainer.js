const CommentContainer = ({ info }) => {

  const Comment = ({ info }) => {
    const { name, comment, replies } = info;

    return (
      <div className="flex p-4 bg-gray-200 rounded-md shadow-md">
        <img
          className="w-12 h-12"
          alt="user-comment"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s"
        />
        <div className="ml-4">
          <p>{name}</p>
          <p>{comment}</p>
          {replies && replies.map((reply) => <Comment info={reply} />)}
        </div>
      </div>
    )
  }

  return (
    <div className="mx-10">
      <p className="font-bold text-lg">Comments:</p>
      {info.map((infuu) => <Comment info={infuu} />)}
    </div>
  )
}

export default CommentContainer;