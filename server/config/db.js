import mongoose from 'mongoose';

export default  () =>  {
    mongoose.Promise = global.Promise;
    mongoose.connect('mongodb+srv://tienmphamdev:9mMDosxEgMnGNnLh@cluster0.wmsscfy.mongodb.net');
    mongoose.connection
        .once('open', ()=> console.log('Mongodb running'))
        .on('error', err => console.error(err));
}


