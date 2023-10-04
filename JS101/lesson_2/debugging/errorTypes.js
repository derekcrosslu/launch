function DinoError(message) {
  this.name = "DinoError";
  this.message = message;
}
DinoError.prototype = new Error();

function cloneDinosaur(name, type) {
  var validTypes = [
    "Apatosaurus",
    "Dilophosaurus",
    "Tyrannosaurus Rex",
    "Stegosaurus",
  ];

  try {
    if (validTypes.indexOf(type) === -1) {
      throw new DinoError(
        "We don't know how to clone the dinosaur type: " + type
      );
    }

    var myDinosaur = {
      name: name,
      type: type,
      dangerMessage: name.toUpperCase() + " IS COMING!!!",
    };

    return myDinosaur;
  } catch (e) {
    if (e instanceof DinoError) {
      console.log("You experienced a DinoError!");
    } else {
      console.log("You experienced a standard error.");
    }
    console.log(e.name + ": " + e.message);

    return undefined;
  } finally {
    console.log("Dinosaur clone function complete.");
  }
}

var dino = cloneDinosaur("Dino", "Brachiosaurus");
// Logs:  You experienced a DinoError!
// Logs:  DinoError: We don't know how to clone the dinosaur type: Brachiosaurus
// Logs:  Dinosaur clone function complete.
console.log(dino);
// Logs:  undefined

var spike = cloneDinosaur(null, "Stegosaurus");
// Logs:  You experienced a standard error.
// Logs:  TypeError: Cannot read property 'toUpperCase' of null
// Logs:  Dinosaur clone function complete.
console.log(spike);
// Logs:  undefined

var rex = cloneDinosaur("Rex", "Tyrannosaurus Rex");
// Logs:  Dinosaur clone function complete.
console.log(rex);
// Logs:  { name: 'Rex', type: 'Tyrannosaurus Rex', dangerMessage: 'REX IS COMING!!!' }
