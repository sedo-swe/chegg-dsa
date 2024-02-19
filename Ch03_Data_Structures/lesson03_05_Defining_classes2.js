class Event {
  constructor(name, attendees, startTime, locationName, address) {
    let guests = null;
    if (attendees.length === 1) {
      guests = attendees[0];
    } else if (attendees.length > 1) {
      guests = `${attendees.length} attendees`;
    }

    this.name = guests ? `${name} with ${guests}` : name;
    this.details = { startTime, attendees, groupSize: attendees.length };
    this.location = { name: locationName, address };
  }
}

const event1 = new Event("Dinner", ["Sal"], 1830, "Frankie's", "477 Rain St.");

console.log(event1);

const event2 = new Event("Dinner", ["Sal1", "Sal2"], 1830, "Frankie's", "477 Rain St.");

console.log(event2);