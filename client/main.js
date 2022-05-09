const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addComplimentBtn = document.getElementById("createCompliment")
const removeBtn = document.getElementById("deleteBtn")

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

complimentBtn.addEventListener('click', getCompliment)

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

fortuneBtn.addEventListener('click', getFortune)

const newComplimentBtn = document.querySelector('#new-compliment-btn')
const newComplimentInput = document.getElementById('new-compliment-input')

const addCompliment = () => {
    const newCompliment = newComplimentInput.value
    axios.post(`http://localhost:4000/api/compliment/`, {newCompliment})
    .then(res => {
        alert(res.data)
        newComplimentInput.value = ''
    })
}

newComplimentBtn.addEventListener('click', addCompliment)

const deleteBtn = document.getElementById('delete-btn')
const deleteInput = document.getElementById('delete-input')

const deleteCompliment = () => {
    axios.delete(`http://localhost:4000/api/compliment/${deleteInput.value}`)
    .then(res => {
        alert(res.data)
        deleteInput.value = ''
    })
    .catch(err => {
        alert('No compliment to delete')
    })
}

deleteBtn.addEventListener('click', deleteCompliment)

const updateComplimentBtn = document.getElementById('update-btn')
const complimentInput = document.getElementById('update-input')

const updateCompliment = () => {
    axios.put(`http://localhost:4000/api/compliment/${updateInput}`)
    .then(res => {
        alert(res.data)
        updateInput.value = ''
    })
}