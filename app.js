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
	{ name: 'AJ Medford', affiliation: 'GT', image: './img/Speakers/AJ Medford.jpeg', profileUrl: 'https://www.chbe.gatech.edu/directory/person/andrew-medford', email: 'ajm@gatech.edu' },
	{ name: 'Amir Barati Farimani', affiliation: 'CMU', image: './img/Speakers/Amir Barati Farimani.jpeg', profileUrl: 'https://www.meche.engineering.cmu.edu/directory/bios/barati-farimani-amir.html',  email: 'barati@cmu.edu'},
	{ name: 'Anatoly Frenkel', affiliation: 'Stony Brook/BNL', image: './img/Speakers/Anatoly Frenkel.jpeg', profileUrl: 'https://www.stonybrook.edu/commcms/iacs/people/_affiliates/anatoly-frenkel.php',  email: 'Anatoly.Frenkel@stonybrook.edu' },
	{ name: 'Andy Peterson', affiliation: 'Brown', image: './img/Speakers/Andy Peterson.jpeg', profileUrl: 'https://engineering.brown.edu/people/andrew-peterson',  email: 'Andrew_Peterson@brown.edu' },
	{ name: 'Boris Kozinsky', affiliation: 'Harvard', image: './img/Speakers/Boris Kozinsky.webp' , profileUrl: 'https://seas.harvard.edu/person/boris-kozinsky',  email: 'bkoz@seas.harvard.edu'},
	{ name: 'Bryan Goldsmith', affiliation: 'Michigan', image: './img/Speakers/Bryan Goldsmith.jpeg' , profileUrl: 'https://che.engin.umich.edu/people/goldsmith-bryan/',  email: 'bgoldsm@umich.edu'},
	{ name: 'Chris Wolverton', affiliation: 'Northwestern', image: './img/Speakers/Chris Wolverton.jpeg' , profileUrl: 'https://stanford.edu/~vossj/',  email: 'c-wolverton@northwestern.edu'},
	{ name: 'Johannes Voss', affiliation: 'SLAC', image: './img/Speakers/Johannes Voss.jpeg' , profileUrl: 'https://stanford.edu/~vossj/',  email: 'vossj@slac.stanford.edu'},
	{ name: 'Joseph Montoya', affiliation: 'TRI', image: './img/Speakers/Joseph Montoya.jpeg' , profileUrl: 'https://www.tri.global/about-us/dr-joseph-montoya',  email: ''},
	{ name: 'Kamal Choudhary', affiliation: 'NIST', image: './img/Speakers/Kamal Choudhary.jpeg' , profileUrl: 'https://mems.duke.edu/faculty/stefano-curtarolo',  email: 'kamal.choudhary@nist.gov'},
	{ name: 'Kirsten Winther', affiliation: 'SLAC', image: './img/Speakers/Kirsten Winther.jpeg' , profileUrl: 'https://suncat.stanford.edu/people/kirsten-winther',  email: 'winther@stanford.edu'},
	{ name: 'Maria Chan', affiliation: 'ANL', image: './img/Speakers/Maria Chan.jpeg' , profileUrl: 'https://www.anl.gov/profile/maria-k-chan',  email: 'mchan@​anl.​gov'},
	{ name: 'Milad Abolhasani', affiliation: 'NCSU', image: './img/Speakers/Milad Abolhasani.jpeg' , profileUrl: 'https://www.cbe.ncsu.edu/person/mabolha/',  email: 'abolhasani@ncsu.edu'},
	{ name: 'Paulami Majumdar', affiliation: 'Dow', image: './img/Speakers/Paulami Majumdar.jpeg' , profileUrl: 'https://www.linkedin.com/in/paulami-majumdar-42a95818/',  email: 'pmajumdar@dow.com'},
	{ name: 'Paul Kenis', affiliation: 'UIUC, Tentative', image: './img/Speakers/Paul Kenis.png' , profileUrl: 'https://chbe.illinois.edu/people/profile/kenis',  email: 'kenis@illinois.edu'},
	{ name: 'Shyue Ping Ong', affiliation: 'UCSD', image: './img/Speakers/Shyue Ping Ong.jpeg' , profileUrl: 'https://jacobsschool.ucsd.edu/people/profile/shyue-ping-ong',  email: 's2ong@ucsd.edu'},
	{ name: 'Stefano Curtarolo', affiliation: 'Duke', image: './img/Speakers/Stefano Curtarolo.jpeg' , profileUrl: 'https://mems.duke.edu/faculty/stefano-curtarolo',  email: 'stefano.curtarolo@duke.edu'},
	{ name: 'Suljo Linic', affiliation: 'Michigan', image: './img/Speakers/Suljo Linic.jpeg' , profileUrl: 'https://che.engin.umich.edu/people/linic-suljo/',  email: 'linic@umich.edu'},
	{ name: 'Teodoro Laino', affiliation: 'IBM Research, Zurich', image: './img/Speakers/Teodoro Laino.jpeg' , profileUrl: 'https://research.ibm.com/people/teodoro-laino',  email: 'teo@zurich.ibm.com'},
	{ name: 'Tian Xie', affiliation: 'Microsoft, UK', image: './img/Speakers/Tian Xie.jpeg' , profileUrl: 'https://www.microsoft.com/en-us/research/people/tianxie/',  email: 'tianxie@microsoft.com'},
	{ name: 'Xiaonan Wang', affiliation: 'Tsinghua, China', image: './img/Speakers/Xiaonan Wang.webp' , profileUrl: 'https://www.smartsystemsengineering.com/',  email: 'wangxiaonan@tsinghua.edu.cn'},
	{ name: 'Wendy Shaw', affiliation: 'PNNL', image: './img/Speakers/Wendy Shaw.jpeg' , profileUrl: 'https://www.pnnl.gov/people/wendy-shaw',  email: 'wendy.shaw@pnnl.gov'},
	{ name: 'Zack Ulissi', affiliation: 'Meta', image: './img/Speakers/Zack Ulissi.jpeg' , profileUrl: 'https://zulissi.github.io/',  email: 'zulissi@meta.com'},
	{ name: 'Nongnuch Artrith', affiliation: 'Utrecht', image: './img/Speakers/Nongnuch Artrith.jpeg' , profileUrl: 'https://www.uu.nl/staff/NArtrith',  email: 'n.artrith@uu.nl'},
	{ name: 'Hao Li', affiliation: 'Tohoku', image: './img/Speakers/Hao Li.jpeg' , profileUrl: 'https://www.wpi-aimr.tohoku.ac.jp/en/research/researcher/li_h.html',  email: 'li.hao.b8@tohoku.ac.jp'},
	{ name: 'Shijing Sun', affiliation: 'UW', image: './img/Speakers/Shijing Sun.jpeg' , profileUrl: 'https://www.me.washington.edu/facultyfinder/shijing-sun',  email: 'shijing@uw.edu'},
	{ name: 'Chong Liu', affiliation: 'UCLA', image: './img/Speakers/Chong Liu.jpeg' , profileUrl: 'https://www.chemistry.ucla.edu/directory/liu-chong/',  email: 'chongliu@chem.ucla.edu'}
].sort((a, b) => a.name.localeCompare(b.name));;
  

const presenters = [
	{ name: 'Marc Porosoff', affiliation: 'U of Rochester', image: './img/Presenters/Marc Porosoff.jpeg' , profileUrl: 'https://www.hajim.rochester.edu/che/people/faculty/porosoff_marc/index.html',  email: 'marc.porosoff@rochester.edu'},
	{ name: 'Daniel Schwalbe-Koda', affiliation: 'UCLA', image: './img/Presenters/Daniel Schwalbe-Koda.jpeg' , profileUrl: 'https://samueli.ucla.edu/people/daniel-schwalbe-koda/',  email: 'dskoda@ucla.edu'},
	{ name: 'Evan Spotte-Smith', affiliation: 'CMU', image: './img/Presenters/Evan Spotte-Smith.jpeg' , profileUrl: 'https://espottesmith.github.io/',  email: 'espottesmith@gmail.com'},
	{ name: 'Tibor Szilvasi', affiliation: 'UA', image: './img/Presenters/Tibor Szilvasi.jpeg' , profileUrl: 'https://eng.ua.edu/eng-directory/dr-tibor-szilvasi/',  email: 'tszilvasi@ua.edu'},
	{ name: 'Emma Hu', affiliation: 'GT', image: './img/Presenters/Emma Hu.png' , profileUrl: 'https://chemistry.gatech.edu/people/guoxiang-emma-hu',  email: 'emma.hu@mse.gatech.edu'},
	{ name: 'Fanglin Che', affiliation: 'UML', image: './img/Presenters/Fanglin Che.jpeg', profileUrl: 'https://www.uml.edu/engineering/chemical/faculty/che-fanglin.aspx',  email: 'Fanglin_Che@uml.edu' },
	{ name: 'Zisheng Zhang', affiliation: 'UCLA', image: './img/Presenters/Zisheng Zhang.jpeg', profileUrl: 'https://www.chem.ucla.edu/~ana/cv_ZZ.pdf',  email: 'zisheng@chem.ucla.edu' },
	{ name: 'Brandon Bukowski', affiliation: 'JHU', image: './img/Presenters/Brandon Bukowski.webp' , profileUrl: 'https://engineering.jhu.edu/faculty/brandon-c-bukowski/',  email: 'bbukows1@jhu.edu'},
	{ name: 'Kasun Gunasooriya', affiliation: 'OU', image: './img/Presenters/Kasun Gunasooriya.jpeg', profileUrl: 'https://www.ou.edu/coe/scbme/people/faculty/gunasooriya',  email: 'kasun.gunasooriya@ou.edu' },
	{ name: 'Pengfei Ou', affiliation: 'Northwestern', image: './img/Presenters/Pengfei Ou.jpeg' , profileUrl: 'https://light.northwestern.edu/team/dr-pengfei-ou/',  email: 'pengfei.ou@northwestern.edu'},
	{ name: 'Tyler Josephson', affiliation: 'UMBC', image: './img/Presenters/Tyler Josephson.jpeg' , profileUrl: 'https://cbee.umbc.edu/josephson/',  email: 'tjo@umbc.edu'},
	{ name: 'Rui Ding', affiliation: 'UChicago', image: './img/Presenters/Rui Ding.png' , profileUrl: 'https://datascience.uchicago.edu/people/rui-ding/',  email: 'ruiding@uchicago.edu'}
].sort((a, b) => a.name.localeCompare(b.name));;

function renderCards(containerId, items) {
	const container = document.getElementById(containerId);
	items.forEach(item => {
	  const card = document.createElement('div');
	  card.classList.add('card');
  
	  const cardContent = `
		<a href="${item.profileUrl}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">
		  <div class="icon"><img src="${item.image}" alt="${item.name}" /></div>
		  <div class="card-container">
			<h2><b>${item.name}</b></h2>
			<p>${item.affiliation}</p>
			<!--  <p><a href="mailto:${item.email}" style="text-decoration: underline; color: inherit;">${item.email}</a></p> -->
		  </div>
		</a>
	  `;
  
	  card.innerHTML = cardContent;
	  container.appendChild(card);
	});
  }
  

//   renderCards('organizerCards', organizers);
  renderCards('speakerCards', speakers);
  renderCards('presenterCards', presenters);
  
  // Add click event listener to the "Show Nearby Hotels" link
  document.getElementById("showHotelsLink").addEventListener("click", showHotelDetails);
  
});

function renderCards(containerId, items) {
	const container = document.getElementById(containerId);
	items.forEach(item => {
	  const card = document.createElement('div');
	  card.classList.add('card');
  
	  // Creating an anchor element to wrap the card content
	  const cardLink = document.createElement('a');
	  cardLink.href = item.profileUrl; // Setting the profile URL
	  cardLink.target = "_blank"; // Opens the link in a new tab
	  cardLink.rel = "noopener noreferrer"; // For security and performance reasons
  
	  cardLink.innerHTML = `
		<div class="icon"><img src="${item.image}" alt="${item.name}" /></div>
		<div class="card-container">
		  <h2><b>${item.name}</b></h2>
		  <p>${item.desc || item.affiliation}</p>
		</div>
	  `;
	  
	  // Append the anchor element to the card
	  card.appendChild(cardLink);
	  container.appendChild(card);
	});
  }
  

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
  
  