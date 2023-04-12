const CommentContainer = () => {

  const commentData = [
    {
      name: 'Guru kiran 2',
      comment: 'refdsf fsdf sfs fds fsdfsfsdf',
      replies: [
        {
          name: 'Vignesh',
          comment: 'refdsf fsdf sfs fds fsdfsfsdf',
          replies: [
            {
              name: 'Soorya',
              comment: 'refdsf fsdf sfs fds fsdfsfsdf',
              replies: [
                {
                  name: 'Noor',
                  comment: 'refdsf fsdf sfs fds fsdfsfsdf',
                  replies: [],
                }
              ],
            }
          ],
        }
      ]
    },
    {
      name: 'Guru kiran 1',
      comment: 'refdsf fsdf sfs fds fsdfsfsdf',
      replies: [
        {
          name: 'Amod',
          comment: 'refdsf fsdf sfs fds fsdfsfsdf',
          replies: [
            {
              name: 'Amod',
              comment: 'refdsf fsdf sfs fds fsdfsfsdf',
              replies: [],
            },
          ],
        },
        {
          name: 'Shreyas',
          comment: 'refdsf fsdf sfs fds fsdfsfsdf',
          replies: [],
        }
      ]
    },
    {
      name: 'Guru kiran 3',
      comment: 'refdsf fsdf sfs fds fsdfsfsdf',
      replies: []
    },
    {
      name: 'Guru kiran 4',
      comment: 'refdsf fsdf sfs fds fsdfsfsdf',
      replies: []
    },
    {
      name: 'Guru kiran 5',
      comment: 'refdsf fsdf sfs fds fsdfsfsdf',
      replies: []
    },
    {
      name: 'Guru kiran 6',
      comment: 'refdsf fsdf sfs fds fsdfsfsdf',
      replies: []
    }
  ];

  const Comment = ({ info }) => {
    const { name, comment, replies } = info;

    return (
      <div className="flex p-4 my-4 bg-gray-200 rounded-md shadow-md">
        <img
          className="w-12 h-12"
          alt="user-comment"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSSYyNXOWAO3zkAU8IsCQ7ITRY1FxAnQq675gUmpbV_6A&s"
        />
        <div className="ml-4">
          <p>{name}</p>
          <p>{comment}</p>
          <div className="border-l-2 border-l-gray-400">
            {replies && replies.map((reply, index) => <Comment key={reply.name + index} info={reply} />)}
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="lg:w-[74%] px-10 my-5 lg:my-0">
      <p className="font-bold text-lg">Comments:</p>
      {commentData.map((data, index) => <Comment key={data.name + index} info={data} />)}
    </div>
  )
}

export default CommentContainer;