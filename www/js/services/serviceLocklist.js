angular.module('service.Locklist', [])

.service('LocklistsServ', function(){
    var locklists = [
      { title: 'Entr�e ', id: 1 },
      { title: 'Garage', id: 2 },
      { title: 'Chambre 1', id: 3 },
      { title: 'Arri�re cours', id: 4 },
      { title: 'Bureau', id: 5 }
    ];

    this.getLocklist = function(){
        return locklists;
    }
});

