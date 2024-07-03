const AdAttachment = require('../models/AdAttachment');

// Create a new ad attachment
exports.createAdAttachment = async (req, res) => {
  try {
    const newAdAttachment = new AdAttachment(req.body);
    await newAdAttachment.save();
    res.status(201).json(newAdAttachment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Get all ad attachments
exports.getAllAdAttachments = async (req, res) => {
  try {
    const adAttachments = await AdAttachment.find();
    res.json(adAttachments);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Get a single ad attachment
exports.getAdAttachmentById = async (req, res) => {
  try {
    const adAttachment = await AdAttachment.findById(req.params.id);
    if (!adAttachment) {
      return res.status(404).json({ message: 'Ad attachment not found' });
    }
    res.json(adAttachment);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// Update an ad attachment
exports.updateAdAttachment = async (req, res) => {
  try {
    const updatedAdAttachment = await AdAttachment.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedAdAttachment) {
      return res.status(404).json({ message: 'Ad attachment not found' });
    }
    res.json(updatedAdAttachment);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// Delete an ad attachment
exports.deleteAdAttachment = async (req, res) => {
  try {
    const deletedAdAttachment = await AdAttachment.findByIdAndDelete(req.params.id);
    if (!deletedAdAttachment) {
      return res.status(404).json({ message: 'Ad attachment not found' });
    }
    res.json({ message: 'Ad attachment deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
