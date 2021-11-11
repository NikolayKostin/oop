
class Salad extends Food {
	constructor(props, weight=100) {
		super(props);
		this.weight = Number(weight);
	}

	static CAESAR = {
		price: 100,
		calories: 20
	}

	static OLIVIE = {
		price: 50,
		calories: 80
	}

	calculatePrice() {
		return (this.getPrice() * this.weight / 100);
	}
	
	calculateCalories() {
		return (this.getCalories() * this.weight / 100);
	}

}

