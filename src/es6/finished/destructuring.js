export default () => {
  const person = {
    first: 'Milosz',
    last: 'Frejnik',
    country: 'Germany',
    city: 'Berlin',
    twitter: '@mifrej',
  };

  // destructure and console.log `first`, `last`, `twitter`
  const { first, last, twitter } = person;
  console.log(`${first} ${last} ${twitter}`);

  const me = {
    first: 'Milosz',
    last: 'Frejnik',
    links: {
      social: {
        twitter: 'https://twitter.com/mifrej',
        facebook: 'https://facebook.com/mifrej',
      },
      web: {
        blog: 'https://frejnik.com',
      },
    },
  };

  // destructure and console.log `twitter`, `facebook` with aliasing it to `tweet`, `fb`
  const { twitter: tweet, facebook: fb } = me.links.social;
  console.log(`${tweet}, ${fb}`);

  const settings = { width: 300, color: 'black' };

  // destructure and console.log `width`, `color` with default values `200` and `yellow`
  const { width = 200, color = 'yellow' } = settings;
  console.log(`${width}, ${color}`);


}
