const commentsList = [
    {
        username: "Connor Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        username: "Emilie Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        username: "Miles Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    }
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

        const username = document.createElement("p");
        username.classList.add("comment__username");
        username.innerText = array[i].username;
        userCommentInfo.appendChild(username);

        const date = document.createElement("p");
        date.classList.add("comment__date");
        date.innerText = array[i].date;
        userCommentInfo.appendChild(date);
        
        const comment = document.createElement("div");
        comment.classList.add("comment__comments");
        comment.innerText = array[i].comment;
        commentLi.appendChild(comment);
        
        const userCommentWords = document.createElement("p");
        userCommentWords.classList.add("comment__user--info");
        comment.appendChild(userCommentWords);
    }
}
commentBio(commentsList);



let myPost = document.getElementById("comment__post");
myPost.addEventListener("submit", evt => {
    evt.preventDefault();

    const username = document.getElementById("username");
    const comment = document.getElementById("comment");

    if (username.value == '' || comment.value == ''){
        alert("Please fill all areas")

        username.value = "";
        comment.value = "";
    } 
    else {
        alert ('Comment successfully posted');

    username.value = "";
    comment.value = "";
    }
    
});