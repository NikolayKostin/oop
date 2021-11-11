
class Drink extends Food {
	constructor(props) {
		super(props);
	}

	static COLA = {
		price: 50,
		calories: 40
	}

	static COFFEE = {
		price: 80,
		calories: 20
	}

	calculatePrice() {
		return this.getPrice();
	}
	
	calculateCalories() {
		return this.getCalories();
	}

}

