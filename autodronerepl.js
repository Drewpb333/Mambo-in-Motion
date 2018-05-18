//have packages required here

//best way to execute this would be to receive an array of objects from UI
//each object would have an action, a distance (length), and a time (ms) property
//we would loop through each object in the array
//each action would be matched with a method and executed
//each method would also have to account for distance or time

const autodrone = require("ardrone-autonomy");
var mission = autodrone.createMission();

let flightPlan = [];

flightPlan.forEach(action => )


let flightMethods = {
    "takeoff": () => mission.takeoff(),
    "zero": () => mission.zero(),
    "altitude": height => mission.altitude(height),
    "forward": distance => mission.forward(distance),
    "right": distance => mission.right(distance),
    "backward": distance => mission.backward(distance),
    "left": distance => mission.left(distance),
    "hover": ms => mission.hover(ms),
    "land": () => mission.land()
}

//runs drone
mission.run(function (err, result) {
    if (err) {
        console.trace("Oops, something bad happened: %s", err.message);
        mission.client().stop();
        mission.client().land();
    } else {
        console.log("Mission success!");
        process.exit(0);
    }
});