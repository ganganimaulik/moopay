const partners = require('./partners.json');
const getDistanceFromLatLonInKm = require('./getDistanceFromLatLonInKm.js');

function invitePartners(partners, base, rangeLimit = 100) {
  return partners
    .filter(partner => {
      let withinRange = false;
      partner.offices.forEach(office => {
        let [lat, long] = office.coordinates.split(',');
         
        if(getDistanceFromLatLonInKm(+lat, +long, +base.lat, +base.long) <= rangeLimit) {
          withinRange = true;
        }
      });
      return withinRange;
    })
    .sort((a, b) => a.organization.localeCompare(b.organization, 'en', { sensitivity: 'base' }));
}

const london = {lat: '51.515419', long: '-0.141099'}
let result = invitePartners(partners, london, 100);
console.log(result);
