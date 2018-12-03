new Vue({
  el: '#app',
  data: {
    startGame: true,
    user: {
      health: 100
    },
    monster: {
      health: 100
    },
    nextLogId: 1,
    logs: []
  },
  methods: {
    attack: function() {
      this.attackFromUser();
      this.attackFromMonster();
    },
    attackFromUser: function() {
      var points = Math.floor(Math.random() * 10) + 1;
      this.monster.health -= points;
      this.logs.push({id: this.nextLogId, sender: 'user', recipient:'monster', action: 'hits', points: points });
      this.nextLogId += 1;
    },
    attackFromMonster: function() {
      var points = Math.floor(Math.random() * 10) + 1;
      this.user.health -= points;
      this.logs.push({id: this.nextLogId, sender: 'monster', recipient:'user', action: 'hits', points: points });
      this.nextLogId += 1;
    },
    specialAttack: function() {
      var points = Math.floor(Math.random() * 10) + 10;
      this.monster.health -= points;
      this.logs.push({id: this.nextLogId, sender: 'user', recipient:'monster', action: 'hits', points: points });
      this.nextLogId += 1;
      this.attackFromMonster();
    },
    heal: function() {
      var points = Math.floor(Math.random() * 10) + 10;
      this.user.health += points;
      this.logs.push({id: this.nextLogId, sender: 'user', action: 'heals himself', points: points });
      this.attackFromMonster();
    },
    giveUp: function() {
      location.reload();
    },
    logFormatting: function(log) {
      if (log.recipient == null) {
        return log.sender + ' ' + log.action + ' for ' + log.points + ' points.'
      } else {
        return log.sender + ' ' + log.action + ' ' + log.recipient + ' for ' + log.points + ' points.'
      }
    },
    logClass: function(log) {
      return {
        'player-turn': log.sender == 'user',
        'monster-turn': log.sender == 'monster'
      }
    }
  }
});
