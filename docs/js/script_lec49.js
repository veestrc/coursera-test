// Obj literals and "this"

var literalCicle = {
    radius: 10,
    getArea: function () {
        console.log(this);
        return Math.PI * Math.pow(this.radius, 2);
    }
};

literalCicle.getArea(); // simply invokes the console.log in the func
console.log(literalCicle.getArea());// prints the returened results

var literalCircle2 = {
    radius: 10,
    getArea: function () {
		var self = this;
        console.log(this);
		
		var increaseRadius = function () {
			self.radius = 20;
		};
		increaseRadius(); // invokes the inner func increaseRadius()
        console.log(this.radius);
		
        return Math.PI * Math.pow(this.radius, 2);
		}
	};

	console.log(literalCircle2.getArea());

    function Dog(name) {
        this.name = name;
      }
      
      Dog.prototype.bark = function () {
        console.log(this.name + " likes barking! Bark!");
      }
      
      var max = new Dog("Max", "Buddy");
      max.bark();