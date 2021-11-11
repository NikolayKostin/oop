
class Hamburger extends Food {
	constructor(props, stuffing) {
		super(props);
		if (!stuffing) console.log("Add stuffing");
		this.stuffing = stuffing;
	}

	static SIZE_SMALL = {
		price: 50,
		calories: 20
	}
	static SIZE_LARGE = {
		price: 100,
		calories: 40
	}
	static STUFFING_CHEESE = {
		price: 10,
		calories: 20
	}
	static STUFFING_SALAD = {
		price: 20,
		calories: 5
	}
	static STUFFING_POTATO = {
		price: 15,
		calories: 10
	}

	calculatePrice() {
		return this.getPrice() + this.stuffing.price;
	}

	calculateCalories() {
		return this.getCalories() + this.stuffing.calories;
	}
	
}

