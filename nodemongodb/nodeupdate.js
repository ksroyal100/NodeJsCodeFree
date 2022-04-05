const getData = require('./mongodbconn');


const updateData = async() => {
    let data = await getData();
    let result = await data.updateOne(
        { name: 'max pro 5' }, {
        $set: { name: 'note S' }
    }
    );
    console.warn(result);  
}
updateData();