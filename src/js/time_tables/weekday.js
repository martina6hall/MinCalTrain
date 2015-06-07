var TrainTypes = require('../constants/TrainTypes');

var northboundBase = {
  'gilroy': null,
  'san-martin': null,
  'morgan-hill': null,
  'blossom-hill': null,
  'capitol': null,
  'tamien': null,
  'san-jose-diridon': null,
  'college-park': null,
  'san-jose': null,
  'santa-clara': null,
  'lawrence': null,
  'sunnyvale': null,
  'mountain-view': null,
  'san-antonio': null,
  'california-ave': null,
  'palo-alto': null,
  'menlo-park': null,
  'atherton': null,
  'redwood-city': null,
  'san-carlos': null,
  'belmont': null,
  'hillsdale': null,
  'hayward-park': null,
  'san-mateo': null,
  'burlingame': null,
  'broadway': null,
  'millbrae': null,
  'san-bruno': null,
  'so-san-francisco': null,
  'bayshore': null,
  '22nd-street': null,
  'san-francisco': null,
};

var southboundBase = {
  'san-francisco': null,
  '22nd-street': null,
  'bayshore': null,
  'so-san-francisco': null,
  'san-bruno': null,
  'millbrae': null,
  'broadway': null,
  'burlingame': null,
  'san-mateo': null,
  'hayward-park': null,
  'hillsdale': null,
  'belmont': null,
  'san-carlos': null,
  'redwood-city': null,
  'atherton': null,
  'menlo-park': null,
  'palo-alto': null,
  'california-ave': null,
  'san-antonio': null,
  'mountain-view': null,
  'sunnyvale': null,
  'lawrence': null,
  'santa-clara': null,
  'san-jose': null,
  'college-park': null,
  'san-jose-diridon': null,
  'tamien': null,
  'capitol': null,
  'blossom-hill': null,
  'morgan-hill': null,
  'san-martin': null,
  'gilroy': null,
};

var NORTHBOUND = [{
  id: 101,
  type: TrainTypes.LOCAL,
  stops: {
    'gilroy': null,
    'san-martin': null,
    'morgan-hill': null,
    'blossom-hill': null,
    'capitol': null,
    'tamien': null,
    'san-jose-diridon': '4:30am',
    'college-park': null,
    'san-jose': null,
    'santa-clara': '4:35am',
    'lawrence': null,
    'sunnyvale': null,
    'mountain-view': null,
    'san-antonio': null,
    'california-ave': null,
    'palo-alto': null,
    'menlo-park': null,
    'atherton': null,
    'redwood-city': null,
    'san-carlos': null,
    'belmont': null,
    'hillsdale': null,
    'hayward-park': null,
    'san-mateo': null,
    'burlingame': null,
    'broadway': null,
    'millbrae': null,
    'san-bruno': null,
    'so-san-francisco': null,
    'bayshore': null,
    '22nd-street': null,
    'san-francisco': null,
  },

}, {
  id: 103,
  type: TrainTypes.LOCAL,
  stops: {
    'gilroy': null,
    'san-martin': null,
    'morgan-hill': null,
    'blossom-hill': null,
    'capitol': null,
    'tamien': null,
    'san-jose-diridon': null,
    'college-park': null,
    'san-jose': null,
    'santa-clara': null,
    'lawrence': null,
    'sunnyvale': null,
    'mountain-view': null,
    'san-antonio': null,
    'california-ave': null,
    'palo-alto': null,
    'menlo-park': null,
    'atherton': null,
    'redwood-city': null,
    'san-carlos': null,
    'belmont': null,
    'hillsdale': null,
    'hayward-park': null,
    'san-mateo': null,
    'burlingame': null,
    'broadway': null,
    'millbrae': null,
    'san-bruno': null,
    'so-san-francisco': null,
    'bayshore': null,
    '22nd-street': null,
    'san-francisco': null,
  },
}];

module.exports = {
  NORTHBOUND: NORTHBOUND,
};