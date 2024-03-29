const hamburger = document.querySelector('.header .nav-bar .nav-list .hamburger');
const mobile_menu = document.querySelector('.header .nav-bar .nav-list ul');
const menu_item = document.querySelectorAll('.header .nav-bar .nav-list ul li a');
const header = document.querySelector('.header.container');

hamburger.addEventListener('click', () => {
	hamburger.classList.toggle('active');
	mobile_menu.classList.toggle('active');
});

document.addEventListener('scroll', () => {
	var scroll_position = window.scrollY;
	if (scroll_position > 250) {
		header.style.backgroundColor = '#29323c';
	} else {
		header.style.backgroundColor = 'transparent';
	}
});

menu_item.forEach((item) => {
	item.addEventListener('click', () => {
		hamburger.classList.toggle('active');
		mobile_menu.classList.toggle('active');
	});
});

document.addEventListener('DOMContentLoaded', function() {
  const organizers = [
	{ name: 'HongLiang Xin', desc: 'Lorem ipsum dolor sit amet consectetur' },
	{ name: 'John Kitchin', desc: 'Lorem ipsum dolor sit amet consectetur' },
	{ name: 'Nuria Lopez', desc: 'Lorem ipsum dolor sit amet consectetur' },
	{ name: 'Neil Schweitzer', desc: 'Lorem ipsum dolor sit amet amet consectetur' }
  ];

  const speakers = [
	{ name: 'AJ Medford', affiliation: 'GT', image: './img/Speakers/AJ Medford.jpeg' },
	{ name: 'Amir Barati Farimani', affiliation: 'CMU', image: './img/Speakers/Amir Barati Farimani.jpeg' },
	{ name: 'Anatoly Frenkel', affiliation: 'Stony Brook/BNL', image: './img/Speakers/Anatoly Frenkel.jpeg' },
	{ name: 'Andy Peterson', affiliation: 'Brown', image: './img/Speakers/Andy Peterson.jpeg' },
	{ name: 'Boris Kozinsky', affiliation: 'Harvard', image: './img/Speakers/Boris Kozinsky.webp' },
	{ name: 'Bryan Goldsmith', affiliation: 'Michigan', image: './img/Speakers/Bryan Goldsmith.jpeg' },
	{ name: 'Chris Wolverton', affiliation: 'Northwestern', image: './img/Speakers/Chris Wolverton.jpeg' },
	{ name: 'Johannes Voss', affiliation: 'SLAC', image: './img/Speakers/Johannes Voss.jpeg' },
	{ name: 'Joseph Montoya', affiliation: 'TRI', image: './img/Speakers/Joseph Montoya.jpeg' },
	{ name: 'Kamal Choudhary', affiliation: 'NIST', image: './img/Speakers/Kamal Choudhary.jpeg' },
	{ name: 'Kirsten Winther', affiliation: 'SLAC', image: './img/Speakers/Kirsten Winther.jpeg' },
	{ name: 'Maria Chan', affiliation: 'ANL', image: './img/Speakers/Maria Chan.jpeg' },
	{ name: 'Milad Abolhasani', affiliation: 'NCSU', image: './img/Speakers/Milad Abolhasani.jpeg' },
	{ name: 'Paulami Majumdar', affiliation: 'Dow', image: './img/Speakers/Paulami Majumdar.jpeg' },
	{ name: 'Paul Kenis', affiliation: 'UIUC, Tentative', image: './img/Speakers/Paul Kenis.png' },
	{ name: 'Shyue Ping Ong', affiliation: 'UCSD', image: './img/Speakers/Shyue Ping Ong.jpeg' },
	{ name: 'Stefano Curtarolo', affiliation: 'Duke', image: './img/Speakers/Stefano Curtarolo.jpeg' },
	{ name: 'Suljo Linic', affiliation: 'Michigan', image: './img/Speakers/Suljo Linic.jpeg' },
	{ name: 'Teodoro Laino', affiliation: 'IBM Research, Zurich', image: './img/Speakers/Teodoro Laino.jpeg' },
	{ name: 'Tian Xie', affiliation: 'Microsoft, UK', image: './img/Speakers/Tian Xie.jpeg' },
	{ name: 'Xiaonan Wang', affiliation: 'Tsinghua, China', image: './img/Speakers/Xiaonan Wang.webp' },
	{ name: 'Wendy Shaw', affiliation: 'PNNL', image: './img/Speakers/Wendy Shaw.jpeg' },
	{ name: 'Zack Ulissi', affiliation: 'Meta', image: './img/Speakers/Zack Ulissi.jpeg' }
];

const presenters = [
	{ name: 'Marc Porosoff', affiliation: 'U of Rochester', image: './img/Presenters/Marc Porosoff.jpeg' },
	{ name: 'Daniel Schwalbe-Koda', affiliation: 'UCLA', image: './img/Presenters/Daniel Schwalbe-Koda.jpeg' },
	{ name: 'Evan Spotte-Smith', affiliation: 'CMU', image: './img/Presenters/Evan Spotte-Smith.jpeg' },
	{ name: 'Tibor Szilvasi', affiliation: 'UA', image: './img/Presenters/Tibor Szilvasi.jpeg' },
	{ name: 'Emma Hu', affiliation: 'GT', image: './img/Presenters/Emma Hu.png' },
	{ name: 'Fanglin Che', affiliation: 'UML', image: './img/Presenters/Fanglin Che.jpeg' },
	{ name: 'Zisheng Zhang', affiliation: 'UCLA', image: './img/Presenters/Zisheng Zhang.jpeg' },
	{ name: 'Brandon Bukowski', affiliation: 'JHU', image: './img/Presenters/Brandon Bukowski.webp' },
	{ name: 'Kasun Gunasooriya', affiliation: 'OU', image: './img/Presenters/Kasun Gunasooriya.jpeg' },
	{ name: 'Pengfei Ou', affiliation: 'Northwestern', image: './img/Presenters/Pengfei Ou.jpeg' },
	{ name: 'Tyler Josephson', affiliation: 'UMBC', image: './img/Presenters/Tyler Josephson.jpeg' },
	{ name: 'Rui Ding', affiliation: 'UChicago', image: './img/Presenters/Rui Ding.png' }
];


  function renderCards(containerId, items) {
	const container = document.getElementById(containerId);
	items.forEach(item => {
	  const card = document.createElement('div');
	  card.classList.add('card');
	  card.innerHTML = `
	    <div class="icon"><img src="${item.image}" /></div>
		<div class="card-container">
		  <h2><b>${item.name}</b></h2>
		  <p>${item.desc || item.affiliation}</p>
		</div>
	  `;
	  container.appendChild(card);
	});
  }
  document.addEventListener('DOMContentLoaded', function() {
	const testContainer = document.getElementById('organizerCards');
	const testElement = document.createElement('p');
	testElement.textContent = 'Test content';
	testContainer.appendChild(testElement);
  });
  

//   renderCards('organizerCards', organizers);
  renderCards('speakerCards', speakers);
  renderCards('presenterCards', presenters);
  
  // Add click event listener to the "Show Nearby Hotels" link
  document.getElementById("showHotelsLink").addEventListener("click", showHotelDetails);
  
});

// Function to show the modal dialog with hotel details
function showHotelDetails(event) {
	event.preventDefault(); // Prevent the default behavior of the link
	var modal = document.getElementById("hotelDetailsModal");
	var span = document.getElementsByClassName("close")[0];
	modal.style.display = "block";
	
	// Fill the modal content with hotel details
	var hotelDetails = document.getElementById("hotelDetails");
	hotelDetails.innerHTML = `
	  <p><strong>Aloft Hotel (Marriott Brand)</strong></p>
	  <p>Website: <a href="https://www.marriott.com/hotels/travel/chial-aloft-chicago-ohare/">Aloft Hotel</a></p>
	  <p>Contact: Cristina Sposato</p>
	  <p>Email: <a href="mailto:cristina.sposato@aloftchicagoohare.com">cristina.sposato@aloftchicagoohare.com</a></p>
	  <p>Phone: 847-671-2064</p>
	  
	  <p><strong>The Rose Hotel (Hilton Brand)</strong></p>
	  <p>Website: <a href="https://www.hilton.com/en/hotels/ordrbup-the-rose-hotel-chicago-ohare/">The Rose Hotel</a></p>
	  <p>Contact: Jeydi Guerrero</p>
	  <p>Email: <a href="mailto:Jeydi.Guerrero@Hilton.com">Jeydi.Guerrero@Hilton.com</a></p>
	  <p>Phone: 847-260-4767</p>
	  
	  <p><strong>Loews Chicago O’Hare</strong></p>
	  <p>Website: <a href="https://www.loewshotels.com/chicago-ohare">Loews Chicago O’Hare</a></p>
	  <p>Contact: Amy Leeds</p>
	  <p>Email: <a href="mailto:amy.leeds@loewshotels.com">amy.leeds@loewshotels.com</a></p>
	  <p>Phone: 847-447-4208</p>
	  
	  <p><strong>DoubleTree or Embassy Suites (Hilton Brand)</strong></p>
	  <p>Website: <a href="https://www.hilton.com/en/hotels/chidtdt-doubletree-chicago-ohare-airport-rosemont/">DoubleTree</a>, <a href="https://www.hilton.com/en/hotels/chirmes-embassy-suites-chicago-ohare-rosemont/">Embassy Suites</a></p>
	  <p>Contact: Renee Alberson</p>
	  <p>Email: <a href="mailto:Renee.Alberson@hilton.com">Renee.Alberson@hilton.com</a></p>
	  <p>Phone: 847-928-7630</p>
	`;
	
	// Close the modal when the user clicks on the close button
	span.onclick = function() {
	  modal.style.display = "none";
	}
	
	// Close the modal when the user clicks anywhere outside of it
	window.onclick = function(event) {
	  if (event.target == modal) {
		modal.style.display = "none";
	  }
	}
  }
  
  
  

  
  document.addEventListener('DOMContentLoaded', function() {
	const agenda = {
	  day1: [
		"Opening Remarks",
		"Topical Keynote Sessions",
		"Foundational Models",
		"Materials & Knowledge Discovery",
		"Data & Software Infrastructures",
		"Future Labs",
		"Reception & Early Career Investigators Poster Session"
	  ],
	  day2: [
		"Themed Panels",
		"Panel 1: What are the technological barriers in AI that hinder achieving scientific breakthroughs, particularly in catalysis for sustainability?",
		"Panel 2: What is the future of AI for driving scientific discovery, and how funding agencies can help shape the vision in catalysis?",
		"Breakout Session",
		"Concluding Remarks"
	  ]
	};
  
	function renderAgendaDay(containerId, dayItems) {
	  const container = document.getElementById(containerId);
	  let content = `<h2>${containerId === 'day1Card' ? 'Day 1' : 'Day 2'}</h2><ul>`;
	  dayItems.forEach(item => {
		// Check if item is a sub-section
		const isSubSection = ["Foundational Models", "Materials & Knowledge Discovery", "Data & Software Infrastructures", "Future Labs"].includes(item);
		content += `<li${isSubSection ? ' class="sub-section"' : ''}>${item}</li>`;
	  });
	  content += '</ul>';
	  container.innerHTML = content;
	}
  
	renderAgendaDay('day1Card', agenda.day1);
	renderAgendaDay('day2Card', agenda.day2);
  });
  
  