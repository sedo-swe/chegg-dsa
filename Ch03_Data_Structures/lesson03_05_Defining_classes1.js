class Event {
    constructor(name, startTime, endTime, location) {
      this.name = name;
      this.startTime = startTime;
      this.endTime = endTime;
      this.location = location;
    }
}

const lunch = new Event("Lunch", "12:00", "13:00", "Chipotle");
console.log(lunch);
console.log(lunch.name);

const dinner = new Event("Dinner", "18:00", "19:30");
console.log(dinner);
console.log(dinner.location);