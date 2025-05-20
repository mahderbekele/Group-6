
fun main() {

    val routes = listOf(
        Route("R1", 10),
        Route("R2", 15),
        Route("R3", 7),
        Route("R4", 12)
    )

    val trucks = listOf(
        Truck("T01", 50, true),
        Truck("T02", 30, true),
        Truck("T03", 40, false)
    )

    val pickups = listOf(
        Pickup("P01", 20, true),
        Pickup("P02", 15, false),
        Pickup("P03", 25, true)
    )

    val garbageAmount = 25

    assignTrucks(routes, trucks, pickups, garbageAmount)
}

data class Truck(var id: String, var capacity: Int, var isAvailable: Boolean)
data class Pickup(var id: String, var capacity: Int, var isAvailable: Boolean)
data class Route(var id: String, var distance: Int)

fun assignTrucks(routes: List<Route>, trucks: List<Truck>, pickups: List<Pickup>, garbageAmount: Int) {
    if (routes.isEmpty()) {
        println("No routes available.")
        return
    }

    var minDistance = routes[0]
    for (route in routes) {
        if (route.distance < minDistance.distance) {
            minDistance = route
        }
    }

    for (truck in trucks) {
        if (truck.isAvailable && truck.capacity >= garbageAmount) {
            println("${truck.id} is assigned and the route it should take is ${minDistance.id}")
            truck.isAvailable = false
            return
        }
    }

    for (pickup in pickups) {
        if (pickup.isAvailable && pickup.capacity >= garbageAmount) {
            println("${pickup.id} is assigned and the route it should take is ${minDistance.id}")
            pickup.isAvailable = false
            return
        }
    }

    println("No available trucks or pickups can handle the garbage amount.")
}















