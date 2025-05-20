
fun main() {
    
}
data class Truck( var id: String, var capacity:Int, var isAvailable: Boolean)
data class Pickup(var id:String, var capacity:Int, var isAvailable:Boolean)
data class Route(var id:String,var distance:Int)
fun assignTrucks( routes:List<Route>,trucks:List<Truck>, pickups:List<Pickup>, garbageAmount:Int){
    var minDistance=routes[0]
    for (route in routes){
        if(route.distance<=minDistance.distance){
            minDistance=route
        }
        for (truck in trucks){
            if(truck.isAvailable && truck.capacity<=garbageAmount){
               println("${truck.id} is assigned and the route it should take is ${minDistance.id}")
        }
            else{
                for(pick in pickups){
                    if(pick.isAvailable){
                        println("${pick.id} is assigned and it should take the route ${minDistance.id}")
                    }
                }
            }
    }
println("No truck or pickup is available.")
}
}