$('.carousel').carousel({
    interval: 2000
  })

  //Business logic
  function Order(type,size,crust,topping){
      this.type = type;
      this.size = size;
      this.crust = crust;
      this.topping = topping;
  }

  Order.prototype.fullOrder = function(){
      return this.type + " with a crust of " + this.crust + " and " + this.topping + " as toppings.";

  };

  function Total(price,quantity,delivery){
      this.price = price;
      this.quantity = quantity;
      this.delivery = delivery;
  }

  Total.prototype.finalTotal = function(){
      return this.price * this.quantity + this.delivery;
  }

  