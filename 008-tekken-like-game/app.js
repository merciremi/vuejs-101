new Vue({
  el: '#app',
  data: {
    gameIsRunning: false,
    userHealth: 100,
    monsterHealth: 100,
    nextLogId: 1,
    logs: []
  },
  watch: {
    userHealth: function(value) {
      if (value <= 0) {
        alert('You lost buddy');
      }
    },
    monsterHealth: function(value) {
      if (value <= 0) {
        alert('You win!');
      }
    }
  },
  methods: {
    startGame: function() {
      this.gameIsRunning = !this.gameIsRunning
    },
    attack: function() {
      this.attackFromUser();
      this.attackFromMonster();
    },
    attackFromUser: function() {
      var points = Math.floor(Math.random() * 10) + 1;
      this.monsterHealth -= points;
      this.logs.push({id: this.nextLogId, sender: 'user', recipient:'monster', action: 'hits', points: points });
      this.nextLogId += 1;
    },
    attackFromMonster: function() {
      var points = Math.floor(Math.random() * 10) + 1;
      this.userHealth -= points;
      this.logs.push({id: this.nextLogId, sender: 'monster', recipient:'user', action: 'hits', points: points });
      this.nextLogId += 1;
    },
    specialAttack: function() {
      var points = Math.floor(Math.random() * 10) + 10;
      this.monsterHealth -= points;
      this.logs.push({id: this.nextLogId, sender: 'user', recipient:'monster', action: 'hits', points: points });
      this.nextLogId += 1;
      this.attackFromMonster();
    },
    heal: function() {
      if (this.userHealth < 90) {
        var points = Math.floor(Math.random() * 10) + 10;
        this.userHealth += points;
        this.logs.push({id: this.nextLogId, sender: 'user', action: 'heals himself', points: points });
        this.nextLogId += 1;
      } else {
        var points = 100 - this.userHealth;
        this.userHealth = 100;
        this.logs.push({id: this.nextLogId, sender: 'user', action: 'heals himself', points: points });
        this.nextLogId += 1;
      }
      this.attackFromMonster();
    },
    giveUp: function() {
      location.reload();
    },
    logFormatting: function(log) {
      if (log.recipient == null) {
        return log.id + ' - ' + log.sender + ' ' + log.action + ' for ' + log.points + ' points.'
      } else {
        return log.id + ' - ' + log.sender + ' ' + log.action + ' ' + log.recipient + ' for ' + log.points + ' points.'
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
