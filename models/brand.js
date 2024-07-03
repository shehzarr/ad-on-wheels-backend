const brandSchema = new Schema({
    name: {
      type: String,
      required: true
    },
    websitelink: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    payrate: {
      type: Number,
      required: true
    }
  });
  
  const Brand = mongoose.model('Brand', brandSchema);
  module.exports = Brand;
  