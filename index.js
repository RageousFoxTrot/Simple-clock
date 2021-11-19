const Time = function (hours = 0, minutes = 0, seconds = 0) {
  this.hours = hours;
  this.minutes = minutes;
  this.seconds = seconds;
};

Time.prototype.addTime = function (hours = 0, minutes = 0, seconds = 0) {
  this.hours += hours;
  this.minutes += minutes;
  this.seconds += seconds;

  if (this.seconds >= 60) {
    const remainder = this.seconds % 60;
    this.minutes += (this.seconds - remainder) / 60;
    this.seconds = remainder;
  }

  if (this.minutes >= 60) {
    const remainder = this.minutes % 60;
    this.hours += (this.minutes - remainder) / 60;
    this.minutes = remainder;
  }
};
// ----------------------------------

const Clock = new Time();

console.log(0, Clock);
// ----------------------------------

Clock.addTime(22, 600, 3961);

console.log(1, Clock);
// ----------------------------------
