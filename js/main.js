const selector = (value) => {
	return document.querySelector(value);
};

//FORM FOR FLIGHT
const flightForm = selector('#flightForm');

const origin = selector('#originFrom');
const destination = selector('#destinationTo');
const departingDate = selector('#departing-date-picker');
const returningDate = selector('#returning-date-picker');
const adult = selector('#adultNumber');
const children = selector('#childrenNumber');
const classType = selector('#classType');
const ticket_origin = selector('#ticket_origin');
const ticket_destination = selector('#ticket_destination');
const ticket_departing = selector('#ticket_departing');

const ticket_returning = selector('#ticket_returning');
const ticket_adult = selector('#ticket_adult');
const ticket_children = selector('#ticket_children');
const ticket_classType = selector('#ticket_classType');

flightForm.addEventListener('submit', (e) => {
	e.preventDefault();
	const origin1 = origin.value;
	const destination1 = destination.value;
	const departingDate1 = departingDate.value;
	// const returningDate1 = returningDate.value;
	const adult1 = adult.options[adult.selectedIndex].value;
	const children1 = children.options[children.selectedIndex].value;
	const classType1 = classType.options[classType.selectedIndex].value;
	sessionStorage.setItem('origin_input', origin1);
	sessionStorage.setItem('destination1_input', destination1);
	sessionStorage.setItem('departingDate1_input', departingDate1);
	// sessionStorage.setItem('returningDate1_input', returningDate1);
	sessionStorage.setItem('adult1_input', adult1);
	sessionStorage.setItem('children1_input', children1);
	sessionStorage.setItem('classType1_input', classType1);
	const origin_input = sessionStorage.getItem('origin_input');
	const destination1_input = sessionStorage.getItem('destination1_input');
	const departingDate1_input = sessionStorage.getItem('departingDate1_input');
	const returningDate1_input = sessionStorage.getItem('returningDate1_input');
	const adult1_input = sessionStorage.getItem('adult1_input');
	const children1_input = sessionStorage.getItem('children1_input');
	const classType1_input = sessionStorage.getItem('classType1_input');
	ticket_origin.textContent = origin_input;
	ticket_destination.textContent = destination1_input;
	ticket_departing.textContent = departingDate1_input;
	ticket_returning.textContent = returningDate1_input;
	ticket_adult.textContent = adult1_input;
	ticket_children.textContent = children1_input;
	ticket_classType.textContent = classType1_input;
	if(ticket_departing.textContent === ''){
        ticket_departing.textContent = 'N/A';
	}
	if(ticket_returning.textContent === ''){
		ticket_returning.textContent = 'N/A';
	}
	if(ticket_adult.textContent === ''){
         ticket_adult.textContent = 'N/A';      
	}
	if(ticket_children.textContent === ''){
		ticket_children.textContent === 'N/A'
	}

	console.log(origin_input);
});

// // FORM FOR HOTEL
const hotelForm = selector('#hotelForm');

const hotel_destination = selector('#hotel_destination');
const hotel_preference = selector('#hotel_preference');
const check_in_date = selector('#check_in_date');
const check_out_date = selector('#check_out_date');
const nationality = selector('#nationality');
let checkBox = [ ...document.querySelectorAll('input[type="radio"]') ];
const ticket_city = selector('#ticket_city');
const ticket_hotelPreference = selector('#ticket_hotelPreference');
const ticket_checkIn = selector('#ticket_checkIn');
const ticket_checkOut = selector('#ticket_checkOut');
const ticket_room = selector('#ticket_room');
const ticket_nationality = selector('#ticket_nationality');

hotelForm.addEventListener('submit', (e) => {
	e.preventDefault();
	//display value of checked checkbox
	function checkboxChecked(boxArray) {
		var ArgLength = boxArray.length;
		let checked = [];
		for (var i = 0; i < ArgLength; i++) {
			if (boxArray[i].checked) {
				checked.push(boxArray[i].value);
			}
		}
		return checked;
	}
	const hotel_destination1 = hotel_destination.value;
	const hotel_preference1 = hotel_preference.options[hotel_preference.selectedIndex].value;
	const check_in_date1 = check_in_date.value;
	const check_out_date1 = check_out_date.value;
	const nationality1 = nationality.options[nationality.selectedIndex].value;
	const room_number1 = checkboxChecked(checkBox);

	sessionStorage.setItem('hotel_destination1_input', hotel_destination1);
	sessionStorage.setItem('hotel_preference1_input', hotel_preference1);
	sessionStorage.setItem('check_in_date1_input', check_in_date1);
	sessionStorage.setItem('check_out_date1_input', check_out_date1);
	sessionStorage.setItem('room_number1_input', room_number1);
	sessionStorage.setItem('nationality1_input', nationality1);
	const hotel_destination1_input = sessionStorage.getItem('hotel_destination1_input');
	const hotel_preference1_input = sessionStorage.getItem('hotel_preference1_input');
	const check_in_date1_input = sessionStorage.getItem('check_in_date1_input');
	const check_out_date1_input = sessionStorage.getItem('check_out_date1_input');
	const room_number1_input = sessionStorage.getItem('room_number1_input');
	const nationality1_input = sessionStorage.getItem('nationality1_input');
	ticket_city.textContent = hotel_destination1_input;
	ticket_hotelPreference.textContent = hotel_preference1_input;
	ticket_checkIn.textContent = check_in_date1_input;
	ticket_checkOut.textContent = check_out_date1_input;
	ticket_room.textContent = room_number1_input;
	ticket_nationality.textContent = nationality1_input;
	if (ticket_checkIn.textContent === ''){
		ticket_checkIn.textContent = 'N/A'
	}
	if (ticket_checkOut.textContent === ''){
		ticket_checkOut.textContent = 'N/A'
	}
	if (ticket_room.textContent === ''){
		ticket_room.textContent = 'N/A'
	}
});


// FORM FOR RIDE
const carForm = selector('#carForm');
// Show Ticket Button
selector('#summary').style.display = 'none';
// Show Ticket Button

const travel_type = selector('#travel_type');
const source_city = selector('#source_city');
const destination_city = selector('#destination_city');
const multiCity_trip_date_1 = selector('#multiCity_trip_date_1');
const multiCity_trip_date_2 = selector('#multiCity_trip_date_2');
const one_way_trip_date = selector('#one_way_trip_date');
const round_trip_date = selector('#round_trip_date');
const returnTrip_date = selector('#returnTrip_date');
const pickup_hours = selector('#pickup_hours');
const pickup_minutes = selector('#pickup_minutes');
const pickup_meridiem = selector('#pickup_meridiem');
const ticket_travelType = selector('#ticket_travelType');
const ticket_sourceCity = selector('#ticket_sourceCity');
const ticket_destinationCity = selector('#ticket_destinationCity');
const ticket_multiCity_trip_date_2 = selector('#ticket_multiCity_trip_date_2');
const ticket_multiCity_trip_date_1 = selector('#ticket_multiCity_trip_date_1');
const ticket_one_way_trip_date = selector('#ticket_one_way_trip_date');
const ticket_returnTrip_date = selector('#ticket_returnTrip_date');
const ticket_round_trip_date = selector('#ticket_round_trip_date');
const ticket_pickup_hours = selector('#ticket_pickup_hours');
const ticket_pickup_minutes = selector('#ticket_pickup_minutes');
const ticket_pickup_meridiem = selector('#ticket_pickup_meridiem');

carForm.addEventListener('submit', (e) => {
	e.preventDefault();
	selector('#summary').style.display = 'block';
	// const travel_type1 = travel_type.options[travel_type.selectedIndex].value;
	const source_city1 = source_city.value;
	const destination_city1 = destination_city.value;
	const multiCity_trip_date_one = multiCity_trip_date_1.value;
	const multiCity_trip_date_two = multiCity_trip_date_2.value;
	const one_way_trip_date1 = one_way_trip_date.value;
	const round_trip_date1 = round_trip_date.value;
	const returnTrip_date1 = returnTrip_date.value;
	const pickup_hours1 = pickup_hours.value;
	const pickup_minutes1 = pickup_minutes.value;
	const pickup_meridiem1 = pickup_meridiem.value;
	// sessionStorage.setItem('travel_type1_input', travel_type1);
	sessionStorage.setItem('source_city1_input', source_city1);
	sessionStorage.setItem('destination_city1_input', destination_city1);
	sessionStorage.setItem('multiCity_trip_date_one_input', multiCity_trip_date_one);
	sessionStorage.setItem('multiCity_trip_date_two_input', multiCity_trip_date_two);
	sessionStorage.setItem('one_way_trip_date1_input', one_way_trip_date1);
	sessionStorage.setItem('round_trip_date1_input', round_trip_date1);
	sessionStorage.setItem('returnTrip_date1_input', returnTrip_date1);
	sessionStorage.setItem('pickup_hours1_input', pickup_hours1);
	sessionStorage.setItem('pickup_minutes1_input', pickup_minutes1);
	sessionStorage.setItem('pickup_meridiem1_input', pickup_meridiem1);
	const travel_type1_input = sessionStorage.getItem('travel_type1_input');
	const source_city1_input = sessionStorage.getItem('source_city1_input');
	const destination_city1_input = sessionStorage.getItem('destination_city1_input');
	const multiCity_trip_date_one_input = sessionStorage.getItem('multiCity_trip_date_one_input');
	const multiCity_trip_date_two_input = sessionStorage.getItem('multiCity_trip_date_two_input');
	const one_way_trip_date1_input = sessionStorage.getItem('one_way_trip_date1_input');
	const round_trip_date1_input = sessionStorage.getItem('round_trip_date1_input');
	const returnTrip_date1_input = sessionStorage.getItem('returnTrip_date1_input');
	const pickup_hours1_input = sessionStorage.getItem('pickup_hours1_input');
	const pickup_minutes1_input = sessionStorage.getItem('pickup_minutes1_input');
	const pickup_meridiem1_input = sessionStorage.getItem('pickup_meridiem1_input');

	ticket_travelType.textContent = travel_type1_input;
	ticket_sourceCity.textContent = source_city1_input;
	ticket_destinationCity.textContent = destination_city1_input;
	ticket_multiCity_trip_date_1.textContent = multiCity_trip_date_one_input;
	ticket_multiCity_trip_date_2.textContent = multiCity_trip_date_two_input;
	ticket_one_way_trip_date.textContent = one_way_trip_date1_input;
	ticket_returnTrip_date.textContent = returnTrip_date1_input;
	ticket_round_trip_date.textContent = round_trip_date1_input;
	ticket_pickup_hours.textContent = pickup_hours1_input;
	ticket_pickup_minutes.textContent = pickup_minutes1_input;
	ticket_pickup_meridiem.textContent = pickup_meridiem1_input;
	if (ticket_pickup_hours.textContent === '-1'){
		ticket_pickup_hours.textContent = 'N/A'
		ticket_pickup_minutes.textContent = 'N/A'
		ticket_pickup_meridiem.textContent = 'N/A'
	}
});
