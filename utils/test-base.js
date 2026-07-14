const { base } = require('@playwright/test');


exports.test = base.test.extends(
    {
        testDataforOrder: {

            userName: "rathore.shanu1996@yopmail.com",
            password: "Sh@nu25895",
            productName: "ZARA COAT 3"

        }
    }
)

