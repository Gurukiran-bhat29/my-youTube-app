import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSearchParams } from "react-router-dom";
import { closeMenu } from "../utils/appSlice";
import CommentContainer from "./CommentContainer";

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

const WatchPage = () => {
  const [searchParam] = useSearchParams();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(closeMenu());
  }, [])

  return (
    <div>
      <div className="p-10">
        <iframe
          width="1000"
          height="500"
          src={"https://www.youtube.com/embed/" + searchParam.get('v')}
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>
      <CommentContainer info={commentData} />
    </div>
  )
}

export default WatchPage;