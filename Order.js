
class Order {
	constructor() {
		this.isPaid = false;
		this.order = [];
	}

	addItem(props, quantity=1) {
		if (!this.isPaid) {
			for (let i = 0; i < quantity; i++) {
				this.order.push(props);
			}
			return this;
		} else {
			console.log("Order has been paid");
		}
	}

	deleteItem(index) {
		if (!this.isPaid) {
			this.order = this.order.filter((prop, i) => i !== index)
			return this;
		} else {
			console.log("Order has been paid");
		}
	}

	getOrderPrice() {
		let orderPrice = 0;
		for (let i = 0; i < this.order.length; i++) {
			orderPrice += this.order[i].calculatePrice();
		}
		return orderPrice;
	}

	getOrderCalories() {
		let orderCalories = 0;
		for (let i = 0; i < this.order.length; i++) {
			orderCalories += this.order[i].calculateCalories();
		}
		return orderCalories;
	}

	pay() {
		this.isPaid = true;
		Object.freeze(this.order);
	}

}

