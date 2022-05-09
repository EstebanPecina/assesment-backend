
let compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];


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

    addCompliment: (req, res) => {
        const  {newCompliment} = req.body

        compliments.push(newCompliment)

        res.status(200).send('Compliment added')
    
    },

    deleteCompliment: (req, res) => {
        const {id} = req.params

        if(compliments[+id]) {
            compliments.splice(id, 1)

            res.status(200).send('Compliment removed.')
        } else {
            res.status(400).send(400)
        }

        compliments.splice(id, 1)

        res.status(200).send('Compliment removed')
    },

    updateCompliment: (req, res) => {
        const {id} = req.params
    }

}