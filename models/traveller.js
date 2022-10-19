const Traveller = function (journeys) {
  this.journeys = journeys;
};

Traveller.prototype.getJourneyStartLocations = function () {
  return this.journeys.map((journey) => journey.startLocation);
};

Traveller.prototype.getJourneyEndLocations = function () {
  return this.journeys.map((journey) => journey.endLocation);
};

Traveller.prototype.getJourneysByTransport = function (transport) {
  return this.journeys.filter((journey) => journey.transport === transport);
};

Traveller.prototype.getJourneysByMinDistance = function (minDistance) {
  return this.journeys.filter((journey) => journey.distance > minDistance);
};

Traveller.prototype.calculateTotalDistanceTravelled = function () {
  const totalDistance = this.journeys.reduce((initialValue, journey) => {
    return initialValue + journey.distance;
  }, 0);
  return totalDistance;
};

Traveller.prototype.getUniqueModesOfTransport = function () {
  //return an array of all the transport using map
  //["train", "train", "aeroplane", "car", "ferry"]
  const transportTypes = this.journeys.map((journey) => journey.transport);
  //filter method returns a new array with only the elements that pass a specific test.

  //IndexOf return the first occurence of an element in the array
  //train - index[0] - indexOf[0]
  //train - index[1] - indexOf[0]
  //aeroplane - index[2] - indexOf[2]
  //car - index[3] - indexOf[3]
  //ferry - index[4] - indexOf[4]

  const uniqueTransport = transportTypes.filter((journey, index) => {
    //if the index of journey === index return transport with filter
    return transportTypes.indexOf(journey) === index;
  });
  return uniqueTransport;
};

module.exports = Traveller;
