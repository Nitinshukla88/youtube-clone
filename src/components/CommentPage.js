import React from "react";
import CommentList from "./CommentList";

const commentsData = [
  {
    name: "Nitin Shukla",
    text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
    replies: [
      {
        name: "Nitin Shukla",
        text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
        replies: [
          {
            name: "Nitin Shukla",
            text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
            replies: [
              {
                name: "Nitin Shukla",
                text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
                replies: [
                  {
                    name: "Nitin Shukla",
                    text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
                    replies: [

                    ],
                  },
                ],
              },
            ],
          },
        ],
      },
    ],
  },
  {
    name: "Nitin Shukla",
    text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
    replies: [
      {
        name: "Nitin Shukla",
        text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
        replies: [
          {
            name: "Nitin Shukla",
            text: "Reprehenderit esse exercitation in consectetur nostrud amet do commodo magna veniam do excepteur proident",
          },
        ],
      },
    ],
  },
];

const CommentPage = () => {
  return <div>
    <p className="font-bold text-xl">Comments:</p>
    <CommentList comments={commentsData}/>
  </div>;
};

export default CommentPage;
