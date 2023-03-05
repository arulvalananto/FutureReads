const mongoose = require('mongoose');

export default mongoose.connect(process.env.MONGO_URI).catch((error) => {
  if (error) console.log('Unable to connect DB' + error);
});
