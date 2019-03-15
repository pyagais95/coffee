class Order {
	constructor(wallet = 0, coffeeSorts, order, price = 0){
		this.wallet = wallet;
		this.coffeeSorts = {
			1:{
				type: 'americano',
				price: 40
			},
			2:{
				type: 'latte',
				price: 50
			},
			3:{
				type: 'cappuccino',
				price: 60
			},
		};
		this.coffee = {
			type: '',
			sugar: 0,
			milk: 0,
		};
		this.price = price
	}

	//addCoin добавляет на счет монеты номиналом 1, 3, 5 и 10 сом
	addCoin(coin) {
		if(coin === 1 || coin === 3 || coin === 5 || coin === 10){
			this.wallet = this.wallet + coin;
			console.log('+' + coin);
			return this.wallet
		} else {
			return 'принимаются только монеты номиналом 1, 3, 5, 10 сом'
		}
	}
	// pickSort позволяет выбрать вид кофе
	pickSort(sort){
		if(sort === 1 || sort === 2 || sort === 3){
			console.log(this.coffeeSorts[sort.toString()]);
			this.coffee.type = this.coffeeSorts[sort.toString()].type;
			this.price = this.coffeeSorts[sort.toString()].price;
			return this.coffeeSorts[sort.toString()].type
		} else {
			console.log('выберите сорт кофе 1: americano, 2: latte, 3: cappuccino ');
			return 'выберите сорт кофе 1: americano, 2: latte, 3: cappuccino'
		}
	}

	//addSugar добавляет сахар в кофе и прибавляет 5 к цене
	addSugar(){
		this.coffee.sugar ++;
		this.price = this.price + 5;
		return this.coffee.sugar
	}
	//addMilk добавляет молоко в кофе и прибавляет 10 к цене
	addMilk(){
		this.coffee.milk ++;
		this.price = this.price + 10;
		return this.coffee.milk
	}
	//showPrice показывает цену заказа
	showPrice(){
		return this.price
	}

	//getCoffee отдает кофе и сдачу если достаточно средств иначе возвращает сообщение
	getCoffee(){
		if(this.wallet >= this.price){
			const exchange = this.wallet - this.price;
			//console.log('ваша сдача: ' + exchange);
			return {
				order: this.coffee,
				exchange: exchange
			}
		}else {
			console.log('недостаточно средств');
			console.log('стоимость заказа: ' + this.price);
			console.log('на счету: ' + this.wallet);
			return 'недостаточно средств'
		}
	}
}
module.exports = Order;