(function(){

	angular.module('ShoppingListCheckOff',[])
		   .controller('ToBuyShoppingController',ToBuyShoppingController)	
		   .controller('AlreadyBoughtShoppingController',AlreadyBoughtShoppingController)
		   .service('ShoppingListCheckOffService',ShoppingListCheckOffService);


	ToBuyShoppingController.$inject=['ShoppingListCheckOffService'];
	function ToBuyShoppingController(ShoppingListCheckOffService){
		var itemsList = this;		
		itemsList.buyItems = ShoppingListCheckOffService.getBuyItems();

		itemsList.buyItem = function(itemIndex){
					ShoppingListCheckOffService.boughtItem(itemIndex);
					ShoppingListCheckOffService.removeItem(itemIndex);
		}

		itemsList.buyItems = ShoppingListCheckOffService.getBuyItems();
	}


	AlreadyBoughtShoppingController.$inject=['ShoppingListCheckOffService'];
	function AlreadyBoughtShoppingController(ShoppingListCheckOffService){
		var boughtItemsList = this;
		boughtItemsList.boughtItems = ShoppingListCheckOffService.getBoughtItems();
	}


	function ShoppingListCheckOffService(){
		var service = this;

		var buyItems = [ { name : "cookies",	quantity : "10 pockets" } ,
						 { name : "cashew" , 	quantity : "10 pockets"} ,
						 { name : "drinks" , 	quantity : "10 bottles"},
						 { name : "pista" , 	quantity : "10 pockets"},
						 { name : "snacks" , 	quantity : "5 pockets"}
						];

		var boughtItems = [];

		service.boughtItem = function(itemIndex){
				boughtItems.push(buyItems[itemIndex]);
		};

		service.getBuyItems = function(){
			return buyItems;
		}

		service.removeItem= function(itemIndex){
			buyItems.splice(itemIndex,1);
		}

		service.getBoughtItems = function(){
			return boughtItems;
		};


	}

})();