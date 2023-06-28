const showTitle = document.querySelector(".showtimes");

const showTitleDiv = document.createElement("div");
showTitleDiv.classList.add("showtimes__title");
showTitleDiv.innerText = "Shows";
showTitle.appendChild(showTitleDiv);

const infoLabels = document.querySelector(".showTimes");

const labelsDiv = document.createElement("div");
labelsDiv.classList.add("showtimes__label");
showTitle.appendChild(labelsDiv);

const dateDivLabel = document.createElement("p");
dateDivLabel.classList.add("showtimes__label--items");
dateDivLabel.innerText = "Date";
labelsDiv.appendChild(dateDivLabel);

const venueDivLabel = document.createElement("p");
venueDivLabel.classList.add("showtimes__label--items");
venueDivLabel.innerText = "Venue";
labelsDiv.appendChild(venueDivLabel);

const locationDivLabel = document.createElement("p");
locationDivLabel.classList.add("showtimes__label--items");
locationDivLabel.innerText = "Location";
labelsDiv.appendChild(locationDivLabel);

const filler = document.createElement("p");
filler.classList.add("showtimes__label--fill")
labelsDiv.appendChild(filler);



const showsInfo = [
    {
        date: "Mon Spet 06 2021",
        venue: "Ronald Lane",
        location: "San Francisco, CA"
    },
    {
        date: "Tue Sept 21 2021",
        venue: "Peir 3 East",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Oct 15 2021",
        venue: "View Lounge",
        location: "San Francisco, CA"
    },
    {
        date: "Sat Nov 06 2021",
        venue: "Hyatt Agency",
        location: "San Francisco, CA"
    },
    {
        date: "Fri Nov 26 2021",
        venue: "Moscow Center",
        location: "San Francisco, CA"
    },
    {
        date: "Wed Dec 15 2021",
        venue: "Press Club",
        location: "San Francisco, CA"
    }
]



function showList(array) {
    const showTime = document.querySelector(".showtimes");
   

    for( let i = 0; i < array.length; i++) {


        const unordLi = document.createElement("ul");
        unordLi.classList.add("showtimes__list");
        showTime.appendChild(unordLi);

        const showLi = document.createElement("li");
        showLi.classList.add("showtimes__list--info");
        unordLi.appendChild(showLi);

        const dateLabel = document.createElement("div");
        dateLabel.classList.add("showtimes__date--label");
        dateLabel.innerText = "Date";
        showLi.appendChild(dateLabel);

        const dateDiv = document.createElement("div");
        dateDiv.classList.add("showtimes__date--title", "showtimes__list--items");
        showLi.appendChild(dateDiv);

        const date = document.createElement("p");
        date.classList.add("showtimes__date");
        date.innerText = array[i].date;
        dateDiv.appendChild(date);

        const venueLabel = document.createElement("div");
        venueLabel.classList.add("showtimes__venue--label");
        venueLabel.innerText = "Venue";
        showLi.appendChild(venueLabel);

        const venueDiv = document.createElement("div");
        venueDiv.classList.add("showtimes__venue--title", "showtimes__list--items");
        showLi.appendChild(venueDiv);

        const venue = document.createElement("p");
        venue.classList.add("showtimes__venue");
        venue.innerText = array[i].venue;
        venueDiv.appendChild(venue);

        const locationLabel = document.createElement("div");
        locationLabel.classList.add("showtimes__location--label");
        locationLabel.innerText = "Location"
        showLi.appendChild(locationLabel);

        const locationDiv = document.createElement("div");
        locationDiv.classList.add("showtimes__location--title", "showtimes__list--items");
        showLi.appendChild(locationDiv);

        const location = document.createElement("p");
        location.classList.add("showtimes__location");
        location.innerText = array[i].location;
        locationDiv.appendChild(location);

        const ticketBtn = document.createElement("button");
        ticketBtn.classList.add("showtimes__button");
        ticketBtn.innerText = "BUY TICKETS";
        showLi.appendChild(ticketBtn);

    }
}

showList(showsInfo);



// $('.showtimes__list').on('click', function() {
//     $(this).addClass('active');
//   });

// $(".showtimes__list").focus(function() {
//     var $this = $(this);
//     $this.select();
// });