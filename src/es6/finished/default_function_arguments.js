export default () => {
  function apartmentPriceCalculator(city = 'Berlin', country = 'Germany', currency = 'Euro', size = 20, squareMeterPrice = 1000) {
    console.log(`Apartment of size ${size} square meters, in ${country} of city ${city} is worth of ${size * squareMeterPrice} ${currency}.`);
  }

  apartmentPriceCalculator();
  apartmentPriceCalculator('Frankfurt', undefined, undefined, 60, 3000);
}
