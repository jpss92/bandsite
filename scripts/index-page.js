const commentsList = [
    {
        firstName: "Connor",
        lastName: "Walton",
        date: "02/17/2021",
        comment: "This is art. This is inexplicable magic expressed in the purest way, everything that makes up this majestic work deserves reverence. Let us appreciate this for what it is and what it contains.",
    },
    {
        firstName: "Emilie",
        lastName: "Beach",
        date: "01/09/2021",
        comment: "I feel blessed to have seen them in person. What a show! They were just perfection. If there was one day of my life I could relive, this would be it. What an incredible day.",
    },
    {
        firstName: "Miles",
        lastName: "Acosta",
        date: "12/20/2020",
        comment: "I can't stop listening. Every time I hear one of their songs - the vocals - it gives me goosebumps. Shivers straight down my spine. What a beautiful expression of creativity. Can't get enough.",
    },
];

function commentsShow(array) {
    const unordLi = document.querySelector(".comment__list");

    for(let i = 0; i < array.length; i++) {

        //list for user comments
        const commentLi = document.createElement("li");
        commentLi.classList.add("comment__list--info");

        unordLi.appendChild(commentLi);

        //comments text
        const comments__text = document.createElement("div");
        comments__text.classList.add("comment__text");



        //div top of commenting area
        const upperDiv = document.createElement("div");
        upperDiv.classList.add("comment__text--upper");

        commentLi.appendChild(upperDiv);


        //name
        const firstName = document.createElement("h3");
        firstName.classList.add("comment__names");
        firstName.innerText = array[i].firstName;

        upperDiv.appendChild(firstName);

        //date
        const date = document.createElement("h3");
        date.classList.add("comment__date");
        date.innerText = array[i].date;

        upperDiv.appendChild(date);

        //div bottom of commenting area
        const lwrDiv = document.createElement("div");
        lwrDiv.classList.add("comment__text--lwr");

        commentLi.appendChild(lwrDiv);

        //comment
        const comment = document.createElement("p");
        comment.classList.add("comment__comments");
        comment.innerText = array[i].comment;


        lwrDiv.appendChild(comment);

        //image comtainer
        const imgCont = document.createElement("div");
        imgCont.classList.add("comment__profile");

        commentLi.appendChild(imgCont);


        //Profile img
        const img = document.createElement("div");
        img.classList.add("comment__profile--img");

        imgCont.appendChild(img);

        
    };
};

commentsShow(commentsList);
