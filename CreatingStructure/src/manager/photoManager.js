const Photo = require("../models/Photo");

exports.getAll = () => Photo.find().populate("owner");

exports.create = (photoData) => Photo.create(photoData);

exports.getOne = (id) => Photo.findById(id).populate("owner");

exports.delete = (id) => Photo.findByIdAndDelete(id);

exports.edit = (id, data) => Photo.findByIdAndUpdate(id, data);

exports.addComment = async (id, commentData) => {
  const photo = await Photo.findById(id);

  photo.comments.push(commentData);

  return photo.save();
};
exports.getByOwner = (userId) => Photo.find({ owner: userId });
