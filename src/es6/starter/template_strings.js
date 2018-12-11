export default () => {
  const teamName = 'ACM';
  const age = 2;
  const teamMembers = ['Alexander', 'Bastian', 'Christos', 'Gaelan', 'Kai', 'Leszek', 'Miłosz', 'Ulrike']
  const teamSentence = teamName + ' team is ' + age + ' years old, or so.';
  const membersSentence = teamName + ' has ' + teamMembers.length + ' members.' +
  ' Their names are ' + teamMembers.join(', ') + ' .'
  console.log(teamSentence);
  console.log(membersSentence);
}
