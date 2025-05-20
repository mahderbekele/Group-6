
function assignTruckAndRoute(routes, trucks, pickUps, garbageAmount) {
  if (routes.length === 0) return "No routes available.";
  const shortestRoute = routes.reduce((min, r) => r.distance < min.distance ? r : min, routes[0]);
  const availableTruck = trucks.find(truck => truck.available && truck.capacity >= garbageAmount);
  if (availableTruck) {
    return `Assign truck ${availableTruck.id} to route ${shortestRoute.id}`;
  }
  const availablePickUp = pickUps.find(pickUp => pickUp.available && pickUp.capacity >= garbageAmount);
  if (availablePickUp) {
    return `Assign pickUp ${availablePickUp.id} to route ${shortestRoute.id}`;
  }

  
  return "No available vehicle";
}



const routes = [
  { id: 1, distance: 10 },
  { id: 2, distance: 5 },
  { id: 3, distance: 8 }
];
const trucks = [
  { id: 1, capacity: 500, available: true },
  { id: 2, capacity: 200, available: true }
];
const pickUps = [
  { id: 1, capacity: 800, available: true },
  { id: 2, capacity: 700, available: false }
];
const garbageAmount = 600;

console.log(assignTruckAndRoute(routes, trucks, pickUps, garbageAmount));
