$('.carousel').carousel({
    interval: 2000
  })

//   //Business logic
//   function Order(type,size,crust,topping){
//       this.type = type;
//       this.size = size;
//       this.crust = crust;
//       this.topping = topping;
//   }

//   Order.prototype.fullOrder = function(){
//       return this.type + " with a crust of " + this.crust + " and " + this.topping + " as toppings.";

//   };

//   function Total(price,quantity,delivery){
//       this.price = price;
//       this.quantity = quantity;
//       this.delivery = delivery;
//   }

//   Total.prototype.finalTotal = function(){
//       return this.price * this.quantity + this.delivery;
//   }

//   var sizePrice = [1000,800,600]
//   var deliverPrice = [200];

//   //User Interface Logic

//   $(document).ready(function(){
//       $('form#myForm').submit(function(event){
//           event.PreventDefault();
//           var pizzaType = $('type').val();
//           var pizzaSize = parseInt($('#size').val());
//           var pizzaCrust = $('#crust').val();
//           var pizzaTop = $('#top').val();
//           var pizzaQty = parseInt($('#qty').val());
//           var pizzaPick = parseInt($('#pick').val());

//           var price = sizePrice[pizzaSize - 1];

//           var DeliveryCost = deliverPrices[pizzaPick - 1];

//           newOrder = new Order(pizzaType,pizzaSize,pizzaCrust,pizzaTop);
//           newTotal = new Total(price,pizzaQty,DeliveryCost);
//           if (pizzaPick===1){
//               alert("Your order is: " + newOrder.fullOrder() + " .Continue to see your total bill");
//               alert("Your bill is: " + newTotal.finalTotal());
//           }else{
//               if(pizzaPick===2){
//                   prompt("Enter where you want your pizza to be delivered");
//                   alert("Your order has been received and it will be delivered.Continue to see your order details.");
//                   alert("Your order is: " + newOrder.fullOrder() + ".continue to see your total bill");
//                   alert("Your bill is: " + newTotal.finalTotal());
//               }
//           }
//       });


//sending message function after filling the contacts form

$('form#contactForm').submit(function(event){
    event.PreventDefault();
    var name = $('#name').val();
    var pass = $('#email').val();
    var mess = $('#mess').val();
    alert("Hi " + name + " We have received your message and we will get back to you.Thank you for contacting us");
});

//   });

