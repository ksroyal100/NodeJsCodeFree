const getData = require('./mongodbconn');

const insert = async () => {
    const db = await getData();
    console.log(db);
    const result = await db.insertMany(
        [
            { name: 'note S', brand: 'vivo', price: 132 },
        {name: 'realme', brand: 'oppo', price: 133},
        {name: 'redmi', brand: 'mi', price: 134}
            
        ]
    );
    if (result.acknowledged) {
        console.log("data inserted");
    }
}
insert();
