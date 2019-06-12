class Order {
  constructor() {
    this.orders = [];
  }

  addOrder(order) {
    this.orders.push(order);
  }

  setAmount(id, amount) {
    const order = this.orders.find(item => item.id === id);
    order.amount = amount;
    this.addOrder(order);
  }
}
module.exports = {
  Order
};
