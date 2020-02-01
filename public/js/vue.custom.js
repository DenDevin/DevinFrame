var vm = new Vue({
    el: '#app',
    data: function(){
        return {
            balance: 100,
            totalSumm: 0,
            totalCount: 0,
            productCart: [],
            products: {
             apple: {
                 id: 1,
                 name: 'apple',
                 price: 0.3

             },
             beer: {
                 id: 2,
                 name: 'beer',
                 price: 2

             },
             water: {
                 id: 3,
                 name: 'water',
                 price: 1

             },
             cheese: {
                 id: 4,
                 name: 'cheese',
                 price: 3.74

             }
         },


          applesCount: 0,
          beerCount: 0,
          waterCount: 0,
          cheeseCount: 0,

            applesPrice: 0,
            beerPrice: 0,
            waterPrice: 0,
            cheesePrice: 0,

        }
    },
    methods:
    {
        buyCart: function()
        {
            if(this.balance >= this.totalSumm)
            {
                this.balance = this.balance - this.totalSumm
                this.totalSumm = 0
                this.totalCount = 0
                window.sessionStorage.setItem('balanceCart', this.balance)
            }
            else
            {
                alert('Not enouth money!')
            }

        },
        buyProduct: function()
        {
            this.countAllProducts
            this.countAllPrices.toFixed(2)
        },


        plusItem: function(id)
        {
         if(id == 1)
         {
             ++this.applesCount
             this.applesPrice += this.products.apple.price
         }
         else if(id == 2)
         {
             ++this.beerCount
             this.beerPrice += this.products.beer.price

         }

         else if(id == 3)
         {
             ++this.waterCount
             this.waterPrice += this.products.water.price

         }

         else if(id == 4)
         {
             ++this.cheeseCount
             this.cheesePrice += this.products.cheese.price

         }

        },

        minusItem: function(id)
        {
            if(id == 1)
            {
                if(this.applesCount > 0)
                {
                    --this.applesCount
                    if(this.applesPrice > 0)
                    {
                        this.applesPrice -= this.products.apple.price
                    }

                }


            }
            else if(id == 2)
            {
                if(this.beerCount > 0)
                {
                    --this.beerCount

                    if(this.beerPrice > 0)
                    {
                        this.beerPrice -= this.products.beer.price
                    }
                }
            }

            else if(id == 3)
            {
                if(this.waterCount > 0)
                {
                    --this.waterCount

                    if(this.waterPrice > 0)
                    {
                        this.waterPrice -= this.products.water.price
                    }
                }
            }

            else if(id == 4)
            {
                if(this.cheeseCount > 0)
                {
                    --this.cheeseCount
                    if(this.cheesePrice > 0)
                    {
                        this.cheesePrice -= this.products.cheese.price
                    }
                }
            }

        },
        countPrice: function(id)
        {
            if(id == 1)
            {
                return this.applesPrice.toFixed(2)
            }
            else if(id == 2)
            {
                return this.beerPrice.toFixed(2)
            }

            else if(id == 3)
            {
                return this.waterPrice.toFixed(2)
            }

            else if(id == 4)
            {
                return this.cheesePrice.toFixed(2)
            }

        },
        countItem: function(id)
        {
            if(id == 1)
            {
                return this.applesCount
            }
            else if(id == 2)
            {
                return this.beerCount
            }

            else if(id == 3)
            {
                return this.waterCount
            }

            else if(id == 4)
            {
                return this.cheeseCount
            }

        }

    },

    computed:
    {
            countAllProducts: function()
            {
                this.totalCount = Number(this.applesCount) + Number(this.beerCount) + Number(this.waterCount) + Number(this.cheeseCount)
                return this.totalCount;
            },
            countAllPrices: function() {
                this.totalSumm = this.applesPrice + this.cheesePrice + this.waterPrice + this.beerPrice
                if (this.totalSumm > 0)
                {
                    console.log(parseFloat((this.totalSumm).toFixed(2)));
                    return parseFloat((this.totalSumm).toFixed(2))

                }
                else
                    {
                      return 0;
                    }

           }


    },
    created: function(){
    if(!window.sessionStorage.getItem('balanceCart'))
    {
        this.balance = 100
    }

    else
    {
        this.balance = window.sessionStorage.getItem('balanceCart')
    }

    }



});