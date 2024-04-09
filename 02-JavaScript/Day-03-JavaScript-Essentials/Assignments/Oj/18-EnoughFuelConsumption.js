function EnoughFuelConsumption(amt, dist) {
  //write code here
  let totalFuel = amt * dist;
  if (totalFuel > 50) {
    console.log("Enough");
  } else {
    console.log("Go On");
  }
}

EnoughFuelConsumption(1, 46);
EnoughFuelConsumption(1, 55);
