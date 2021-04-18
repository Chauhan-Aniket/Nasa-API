const title = document.querySelector(".title");
const date = document.querySelector(".date");
const image = document.querySelector(".image");
const description = document.querySelector(".description");
const copyright = document.querySelector(".copyright");
const API_KEY = "CqJ7RXgQQg5cMJaGWGQTwtQYO8kEbTVPzLZq7B2E";

const getData = async () => {
	const Base_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;
	const Count_URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}&count=1`;

	const res = await fetch(Base_URL);
	const data = await res.json();
	console.log(data);

	title.innerText = data.title;
	date.innerText = `Date: ${data.date}`;
	description.innerText = data.explanation;
	image.src = data.hdurl;
	image.alt = data.title;
	image.title = data.title;

	if (!data.copyright) {
		copyright.innerText = ` `;
	} else {
		copyright.innerText = `© ${data.copyright}`;
	}
};

getData();
