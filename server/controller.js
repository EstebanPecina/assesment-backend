
let globalId = 4;


module.exports = {

    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];
      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
      
        res.status(200).send(randomCompliment);
    },

    getFortune: (req, res) => {
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.", 
        "A dubious friend may be an enemy in camouflage.", 
        "A faithful friend is a strong defense."]

        let randomIndex = Math.floor(Math.random() * fortunes.length);
        let randomFortune = fortunes[randomIndex];

        res.status(200).send(randomFortune);
    },

    newCompliment: (req, res) => {

        let {text} = req.body
        let newCompliment = {
            id: globalId,
            text: text
        }
        compliments.push(newCompliment)
        res.status(200).send(compliments);
        globalId++;
    },

    deleteCompliment: (req, res) => {
        let index = compliments.findIndex((compliment) => {
            return compliment.id === +req.params.id;
        })
        compliments.splice(index, 1);
        res.status(200).send(compliments);
    },

    updateCompliment: (req, res) => {

        let {id} = req.params;
        let {type} = req.body;

        let index = compliments.findIndex((compliment) => {
            return compliment.id === +req.params.id;
        })
    }

}