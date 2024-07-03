const carInfoSchema = new Schema({
    registration: {
      type: String,
      required: true,
      unique: true
    },
    category: {
      type: String,
      required: true
    },
    mileage: {
      type: Number,
      required: true
    },
    carmake: {
      type: String,
      required: true
    },
    car_name: {
      type: String,
      required: true
    },
    car_model: {
      type: String,
      required: true
    },
    carownerid: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    img: {
      type: String,
      required: true
    }
  });
  
  const CarInfo = mongoose.model('CarInfo', carInfoSchema);
  module.exports = CarInfo;
  