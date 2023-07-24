const commentsList = [
    // {
    //     name: "Connor Walton",
    //     timestamp: "02/17/2021",
    //     comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    // },
    // {
    //     name: "Emilie Beach",
    //     timestamp: "01/09/2021",
    //     comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    // },
    // {
    //     name: "Miles Acosta",
    //     timestamp: "12/20/2020",
    //     comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    // }
]

function commentBio(array) {
    const commentInfo = document.querySelector(".comment__posts");
   
    for( let i = 0; i < array.length; i++) {

        const commentLi = document.createElement("li");
        commentLi.classList.add("comment__list");
        commentInfo.appendChild(commentLi);

        const userCommentInfo = document.createElement("div");
        userCommentInfo.classList.add("comment__user--field");
        commentLi.appendChild(userCommentInfo);

        const userProfile = document.createElement("div");
        userProfile.classList.add("comment__user--div");
        commentLi.appendChild(userProfile);

        const userProfileImg = document.createElement("img");
        userProfileImg.classList.add("comment__section--img");
        userProfile.appendChild(userProfileImg);

        const name = document.createElement("p");
        name.classList.add("comment__username");
        name.innerText = array[i].name;
        userCommentInfo.appendChild(name);

        const timestamp = document.createElement("p");
        timestamp.classList.add("comment__date");
        timestamp.innerText = array[i].timestamp;
        userCommentInfo.appendChild(timestamp);
        
        const comment = document.createElement("div");
        comment.classList.add("comment__comments");
        comment.innerText = array[i].comment;
        commentLi.appendChild(comment);
        
        const userCommentWords = document.createElement("p");
        userCommentWords.classList.add("comment__user--info");
        comment.appendChild(userCommentWords);
    }

    const formItems = document.getElementById('comment__post');
formItems.addEventListener('submit', (e) => {
    e.preventDefault();

    newComment = {}
    newComment.name = e.target.username.value;
    newComment.comment = e.target.comment.value;

    const date = new Date();
    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();
    const timestamp = `${month}/${day}/${year}`;

    
    commentsList.unshift(newComment);
    commentInfo.innerHTML = "";
    commentBio(commentsList);
    document.getElementById("comment__post").reset();
});
}
commentBio(commentsList);



let commentPage = [];
const fetchCommentPage = () => {
    axios
        .get('https://project-1-api.herokuapp.com/comments?api_key=58ad2596-7c3c-4b66-9ca3-1f8b4c991f73')
        .then((response) => {
        console.log(response.data);
        commentPage = response.data;
        console.log(commentPage);
        

    commentsList.push(commentPage);
    commentBio.innerHTML = "";
    commentsList.forEach((commentsList) => commentBio(commentsList));
})

}
fetchCommentPage();