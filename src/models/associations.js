const Video = require('../models/video');
const Asmrist = require('../models/asmrist');

Video.belongsTo(Asmrist, {
  foreignKey: 'asmrist',
  as: 'Asmrist'
});

Asmrist.hasMany(Video, {
  foreignKey: 'asmrist',
  as: 'Videos'
});
