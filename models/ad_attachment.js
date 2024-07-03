const adAttachmentSchema = new Schema({
    brand_id: {
      type: Schema.Types.ObjectId,
      ref: 'Brand',
      required: true
    },
    owner_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    car_info_id: {
      type: Schema.Types.ObjectId,
      ref: 'CarInfo',
      required: true
    },
    date_of_appointment: {
      type: Date,
      required: true
    },
    start_mileage: {
      type: Number,
      required: true
    },
    target_mileage: {
      type: Number,
      required: true
    },
    payrate: {
      type: Number,
      required: true
    },
    moderator_id: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true
    },
    image: {
      type: String,
      required: true
    }
  });
  
  const AdAttachment = mongoose.model('AdAttachment', adAttachmentSchema);
  module.exports = AdAttachment;
  