class Event {
  constructor(name, startTime, endTime, location) {
    this.name = name;
    this.startTime = startTime;
    this.endTime = endTime;
    this.location = location;
  }

  toString() {
    const { name, startTime, endTime, location } = this;
    return `${startTime} - ${endTime}: ${name} at ${location}`;
  }

  isBefore(other) {
    return this.endHours < other.startHours || (
        this.endHours === other.startHours &&
        this.endMinutes <= other.startMinutes
      );
  }

  get startHours() {
    return Number(this.startTime.split(":")[0]);
  }
  get startMinutes() {
    return Number(this.startTime.split(":")[1]);
  }
  get endHours() {
    return Number(this.endTime.split(":")[0]);
  }
  get endMinutes() {
    return Number(this.endTime.split(":")[1]);
  }
}

const lunchEvent = new Event("Lunch", "12:00", "13:00", "Chipotle");
console.log(lunchEvent.toString()); // > 12:00 - 13:00: Lunch at Chipotle
console.log(lunchEvent.startHours); // > 12
console.log(lunchEvent.startMinutes); // > 0

console.log(lunchEvent.endHours); // > 13
console.log(lunchEvent.endMinutes); // > 0

const meeting = new Event("Meeting", "14:00", "15:30", "Conference room");
console.log(lunchEvent.isBefore(meeting)); //> true
console.log(meeting.isBefore(lunchEvent)); // > false
console.log(lunchEvent.isBefore(lunchEvent)); // > false