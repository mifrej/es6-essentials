export default () => {
  function apartmentPriceCalculator(city, country, currency, size, squareMeterPrice) {
    country = country || 'Germany';
    city = city || 'Berlin';
    currency = currency || 'Euro';
    size = size || 20;
    squareMeterPrice = squareMeterPrice || 1000;
    console.log(`Apartment of size ${size} square meters, in ${country} of city ${city} is worth of ${size * squareMeterPrice} ${currency}`);
  }

  apartmentPriceCalculator();
}
