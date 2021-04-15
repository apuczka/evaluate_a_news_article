let URL = "https://api.meaningcloud.com/sentiment-2.1";

function handleSubmit(event) {
    event.preventDefault()

    // check what text was put into the form field
    let formText = document.getElementById('url').value
    // Client.checkForName(formText)

    // console.log("::: Form Submitted :::")
    fetch('http://localhost:8081')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}





const settings = async (URL='',  data={}) => {
    
        const res = await fetch(URL, {
            method: 'POST' ,
            credetials: 'same orgin',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
            
        })
        return updateUI()
    
    }
    
    /* Update UI*/
    const updateUI = async () => {
        const req = await fetch('/test')
        try{
            const allData = await req.json()
            // console.log(allData);
            document.getElementById('model').innerHTML = `Model: ${data.model}`;
            document.getElementById('score').innerHTML = `Score tag: ${data.score }`;
            document.getElementById('agreement').innerHTML = `Agreement: ${data.agreement}`;
            document.getElementById('subjectivity').innerHTML = `Subjectivity: ${data.subjectivity}`;
            document.getElementById('confidence').innerHTML = `Confidence: ${data.confidence}`;
            document.getElementById('irony').innerHTML = `Irony: ${data.irony}`;
        }catch(error){
            console.log("error", error)
        }
    }

export { handleSubmit }
