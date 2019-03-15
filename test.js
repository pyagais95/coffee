const assert = require('assert');
const should = require('should')
const Order = require('./coffee');

const order = new Order();

beforeEach(function() {
    order.wallet = 0
});

it('add coin to wallet', function (){
    assert.equal(order.addCoin(10), 10)
});

it('return error', function () {
    assert.equal(order.addCoin(20), 'принимаются только монеты номиналом 1, 3, 5, 10 сом')
});

it('return error', function () {
    assert.equal(order.addCoin('3'), 'принимаются только монеты номиналом 1, 3, 5, 10 сом')
});

it('pick americano', function () {
    assert.equal(order.pickSort(1), 'americano');
    order.coffee.type.should.be.equal('americano');
    order.price.should.be.equal(40)
});

it('pick latte', function () {
    assert.equal(order.pickSort(2), 'latte');
    order.coffee.type.should.be.equal('latte');
    order.price.should.be.equal(50)
});

it('pick capuccino', function () {
    assert.equal(order.pickSort(3), 'cappuccino');
    order.coffee.type.should.be.equal('cappuccino');
    order.price.should.be.equal(60)
});

it('return message', function () {
    assert.equal(order.pickSort(10), 'выберите сорт кофе 1: americano, 2: latte, 3: cappuccino')
});

it('add sugar to coffee', function () {
    assert.equal(order.addSugar(), 1);
    order.coffee.sugar.should.be.equal(1);
    order.price.should.be.equal(65)
});

it('add milk to coffee', function () {
    assert.equal(order.addMilk(), 1);
    order.coffee.milk.should.be.equal(1);
    order.price.should.be.equal(75)
});

it('show price', function () {
    assert.equal(order.showPrice(), 75);
    order.price.should.be.a.Number()
});

it('return message', function () {
    assert.equal(order.getCoffee(), 'недостаточно средств')
});


it('return coffee and exchange', function() {
    for(let i = 0; i < 8; i++){
        order.addCoin(10)
    }
    order.getCoffee().should.be.Object();
    order.getCoffee().order.should.be.Object();
    order.getCoffee().order.type.should.be.equal('cappuccino');
    order.getCoffee().order.sugar.should.be.equal(1);
    order.getCoffee().order.milk.should.be.equal(1);
    order.getCoffee().exchange.should.be.equal(5);
});
