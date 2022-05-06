const complimentBtn = document.getElementById("complimentButton")
const fortuneBtn = document.getElementById("fortuneButton")
const addComplimentBtn = document.getElementById("createCompliment")
const removeBtn = document.getElementById("deleteBtn")

const baseURL = `http://localhost:4000/api/compliment/`

const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};

const getFortune = () => {
    axios.get("http://localhost:4000/api/fortune/")
        .then(res => {
            const data = res.data;
            alert(data);
        })
};

const newCompliment = () => {
    axios.post("http://localhost:4000/api/compliment/" , body)
        .then(res => {
            const data = res.data;
        })
};

const deleteCompliment = () => {
    axios.delete(`${baseURL}/${id}`)
        .then(res => {
            const data = res.data;
        })
};

const updateCompliment =() => {
    axios.put(`${baseURL}/${id}`)
        .then(res => {
            const data = res.data;
        })
}



function submitHandler(e) {
    e.preventDefault()

    let bodyObj = {
        text: text.value
    }
        newCompliment(bodyObj)
        text.value = ''
}




complimentBtn.addEventListener('click', getCompliment)
fortuneBtn.addEventListener('click', getFortune)
addComplimentBtn.addEventListener('submit', newCompliment)
removeBtn.addEventListener('click', deleteCompliment)