const fs = require("fs");
// Read the Map Token JSON
const mapData = JSON.parse(fs.readFileSync("map.json", "utf8"));

// Read the Seed Token JSON
const seedData = JSON.parse(fs.readFileSync("seed.json", "utf8"));

// Function to resolve references recursively
function resolveReferences(obj, seed) {
  if (typeof obj === "string") {
    // Check if the string is a reference to a seed value
    const match = obj.match(/{([^{}]+)}/);
    if (match && match[1]) {
      const reference = match[1];
      const value = getValueFromSeed(reference, seed);
      if (value !== undefined) {
        return value;
      }
    }
  } else if (typeof obj === "object") {
    // Recursively resolve references in nested objects or arrays
    for (let key in obj) {
      obj[key] = resolveReferences(obj[key], seed);
    }
  }
  return obj;
}

// Function to get the value from the seed based on the reference
function getValueFromSeed(reference, seed) {
  const keys = reference.split(".");
  let value = seed;
  for (const key of keys) {
    if (value.hasOwnProperty(key)) {
      value = value[key];
    } else {
      return undefined; // Reference not found in seed
    }
  }

  //only return the value not return the obj
  return value?.value;
}

// Resolve references in the map data
const resolvedMapData = resolveReferences(mapData, seedData);

// Write the resolved map data to a file
fs.writeFileSync("resolved_map.json", JSON.stringify(resolvedMapData, null, 2));

console.log("References resolved. Check resolved_map.json for the result!");
