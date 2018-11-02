import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    return [{
      name: 'Name1',
      voteId: 111,
      time: 'Sunday',
    },
    {
      name: 'Name1',
      voteId: 111,
      time: 'Sunday',
    },
    ]
  }
});
