
def assign_truck(trucks, routes, pickups, garbage_amount):
    min_distance_route = routes[0]
    for route in routes:
        if route["distance"] < min_distance_route["distance"]:
            min_distance_route = route

    for truck in trucks:
        if truck["available"] and truck["capacity"] >= garbage_amount:
            return f'{truck["id"]} is assigned and the route it should take is {min_distance_route["id"]}'

    for pick in pickups:
        if pick["available"]:
            return f'{pick["id"]} is assigned and the route it should take is {min_distance_route["id"]}'

    return "No truck or pickup available for assignment."
trucks=[{"id":"t-01","available":True,"capacity":300},{"id":"t-02","available":False,"capacity":200},{"id":"t-03","available":True,"capacity":400}]
pickups=[{"id":"p-01","available":True,"capacity":800},{"id":"p-02","available":False,"capacity":900},{"id":"t-03","available":True,"capacity":500}]
routes=[{"id":"r01","distance":400},{"id":"r02","distance":200},{"id":"r03","distance":500}]

print(assign_truck(trucks, routes, pickups, 400))
print(assign_truck(trucks,routes,pickups,700))