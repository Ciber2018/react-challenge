export const OrderList = () =>{
    const orders = [
        {
            customer:'Customer 1',
            plates:[
                   {
                     main:'pollo',
                     type:'cuarto',
                     amount:1,
                     price:2.22,                     
                     accesories:[
                        {
                            acces_name:'arroz',
                            acces_type:'personal',
                            acces_amount:1,
                            acces_price:2.34
                        }
                     ],
                     total_price: 4.56,                     
                     plate_amount:1,
                   } 
            ],
            isPaid:true,
            subtotal:4.56,
            ivu:7,
            total:4.90
        },
        {
            customer:'Customer 2',
            plates:[
                   {
                     main:'pernil',
                     type:'1/2 libra',
                     amount:1,
                     price:4.33,                     
                     accesories:[
                        {
                            acces_name:'arroz',
                            acces_type:'personal',
                            acces_amount:1,
                            acces_price:2.34
                        },
                        {
                            acces_name:'guineos',
                            acces_type:'',
                            acces_amount:2,
                            acces_price:0.45
                        }
                     ],
                     total_price: 15.14,                     
                     plate_amount:2,
                   } 
            ],
            isPaid:true,
            subtotal:15.14,
            ivu:7,
            total:16.20
        },
        {
            customer:'Customer 3',
            plates:[
                   {
                     main:'costilla',
                     type:'1/2 libra',
                     amount:1,
                     price:4.33,                     
                     accesories:[
                        {
                            acces_name:'arroz',
                            acces_type:'personal',
                            acces_amount:1,
                            acces_price:2.34
                        }
                     ],
                     total_price: 6.67,                     
                     plate_amount:1,
                   },
                   {
                    main:'pollo',
                    type:'medio',
                    amount:1,
                    price:4.44,                     
                    accesories:[
                       {
                           acces_name:'arroz',
                           acces_type:'personal',
                           acces_amount:1,
                           acces_price:2.34
                       }
                    ],
                    total_price: 6.78,                     
                    plate_amount:1,
                  }  
            ],
            isPaid:true,
            subtotal:13.45,
            ivu:7,
            total:14.39
        }
    ];
    return orders;

   }