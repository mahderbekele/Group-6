
function assignTruckAndRoute(routes, trucks, pickUps, garbageAmount) {
  if (routes.length === 0) return "No routes available.";

  // Find the shortest route
  const shortestRoute = routes.reduce((min, r) => r.distance < min.distance ? r : min, routes[0]);

  // Try to assign a suitable available truck
  const availableTruck = trucks.find(truck => truck.available && truck.capacity >= garbageAmount);
  if (availableTruck) {
    return `Assign truck ${availableTruck.id} to route ${shortestRoute.id}`;
  }

  // If no truck is suitable, try to assign a suitable available pickUp
  const availablePickUp = pickUps.find(pickUp => pickUp.available && pickUp.capacity >= garbageAmount);
  if (availablePickUp) {
    return `Assign pickUp ${availablePickUp.id} to route ${shortestRoute.id}`;
  }

  // If neither is available
  return "No available vehicle";
}


// Example usage:
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
//   const mainTruck = trucks.find(t =>
//     t.type === "main" && t.available && garbageAmount <= t.capacity
//   );
//   if (mainTruck) {
//     mainTruck.available = false;
//     return `Assign MAIN truck (id=${mainTruck.id}) to route id=${shortestRoute.id} (distance=${shortestRoute.distance})`;
//   }

//   const pickupTruck = trucks.find(t =>
//     t.type === "pickup" && t.available && garbageAmount <= t.capacity
//   );
//   if (pickupTruck) {
//     pickupTruck.available = false;
//     return `Assign PICKUP truck (id=${pickupTruck.id}) to route id=${shortestRoute.id} (distance=${shortestRoute.distance})`;
//   }
//   return `No available truck can carry ${garbageAmount} units of garbage per compliance/rules.`;
// }
// const routes = [
//   { id: 1, distance: 10 },
//   { id: 2, distance: 5 },
//   { id: 3, distance: 8 }
// ];
// const trucks = [
//   { id: 1, type: "main", capacity: 500, available: true },
//   { id: 2, type: "pickup", capacity: 200, available: true }
// ];
// const garbageAmount = 180;
// const result = assignTruckAndRoute(routes, trucks, garbageAmount);
// console.log(result);
