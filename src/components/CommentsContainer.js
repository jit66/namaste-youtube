import React from 'react'

const commentsData = [
    {
      name: "Jeet Thakur",
      text: "h1 Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Jeet Thakur",
      text: "h2 Lorem ipsum dolor sit amet, consectetur adip",
      replies: [
        {
          name: "Jeet Thakur",
          text: "h22 Lorem ipsum dolor sit amet, consectetur adip",
          replies: [],
        },
        {
          name: "Jeet Thakur",
          text: " h23 Lorem ipsum dolor sit amet, consectetur adip",
          replies: [
            {
              name: "Jeet Thakur",
              text: "Lorem ipsum dolor sit amet, consectetur adip",
              replies: [
                {
                  name: "Jeet Thakur",
                  text: "Lorem ipsum dolor sit amet, consectetur adip",
                  replies: [
                    {
                      name: "Jeet Thakur",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [
                        {
                          name: "Jeet Thakur",
                          text: "Lorem ipsum dolor sit amet, consectetur adip",
                          replies: [],
                        },
                      ],
                    },
                    {
                      name: "Jeet Thakur",
                      text: "Lorem ipsum dolor sit amet, consectetur adip",
                      replies: [],
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
      name: "Jeet Thakur",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Jeet Thakur",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Jeet Thakur",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
    {
      name: "Jeet Thakur",
      text: "Lorem ipsum dolor sit amet, consectetur adip",
      replies: [],
    },
  ];
  

const Comment = ({ data }) => {
  const { name, text } = data;
  return (
    <div className="flex my-2 p-2 shadow-sm bg-gray-100 rounded-lg">
      <img
        className="w-12 h-12"
        alt="user"
        src="https://cdn-icons-png.flaticon.com/512/9131/9131529.png"
      ></img>
      <div className="px-3">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
        {/* <p>{replies}</p> */}
      </div>
    </div>
  );
};

const CommentsList = ({ comments }) => {
  return comments.map((comment, index) => {
        return (
          <div key={index}>
            <Comment data={comment} />
            <div className='pl-5 border border-l-black ml-5'>
            <CommentsList comments={comment.replies} />
            </div>
          </div>
        );
      }
  );
};

const CommentsContainer = () => {
  return (
    <div className='m-5 p-2'>
        <h1 className='text-2xl font-bold'>Comments :</h1>
        {/* <Comment data={commentsData[0]}/> */}
        <CommentsList comments={commentsData}/>
    </div>
  )
}

export default CommentsContainer