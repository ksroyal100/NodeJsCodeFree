const getData = require('./mongodbconn');

const deleteData = async () => {
    let data = await getData();
    let result = await data.deleteOne({name: 'note S'})
    console.warn(result);
}

deleteData();