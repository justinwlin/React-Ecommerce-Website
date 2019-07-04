function Exercise(name) {
	this.name = name;
}

Exercise.prototype.start = function start() {
	console.log(`Starting ${this.name}`);
};

const bench = new Exercise("Bench Press");

Exercise.prototype.stop = function stop() {
	console.log(`Stopping ${this.name}`);
};

bench.start();
bench.stop();
