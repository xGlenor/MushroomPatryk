const mongoose = require('mongoose');

const mushroomSchema = new mongoose.Schema({
  class: String,
  cap_diameter: Number,
  cap_shape: String,
  cap_surface: String,
  cap_color: String,
  does_bruise_or_bleed: Boolean,
  gill_attachment: String,
  gill_spacing: String, // Allow empty strings
  gill_color: String,
  stem_height: Number,
  stem_width: Number,
  stem_root: String,
  stem_surface: String,
  stem_color: String,
  veil_type: String,
  veil_color: String,
  has_ring: Boolean,
  ring_type: String,
  spore_print_color: String, // Allow empty strings
  habitat: String,
  season: String
});

const Mushroom = mongoose.model('Mushroom', mushroomSchema);

module.exports = Mushroom;