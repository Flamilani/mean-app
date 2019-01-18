var myList = [
    {
        name: 'Angular',
        price: 140,
        category: 'Front-End'
    },
    {
        name: 'Express',
        price: 180,
        category: 'Back-End'
    }
];

module.exports = function(app) {
    
    var Controller = {
        listAll: function(req, res) {
            res.json(myList);
        },
        create: function(req, res) {
            var newItem = req.body;
            myList.push(newItem);
            res.json(myList);
        },
        remove: function(req, res) {
            var name = req.params['name'];
            var item = myList.find(item => item.name === name);
            if(item) {
                var index = myList.indexOf(item);
                myList.splice(index, 1);
            }
            res.json(myList);
        }
    }

    return Controller;
}