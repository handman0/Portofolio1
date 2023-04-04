const formEl = document.getElementById('dataUser');
const submitter = document.getElementById('submitData');
let KEY = 1;

const isSupportLocalStorage = () => {
    return typeof Storage !== 'undefined';
};

const sendDataToStorage = () => {
    return () => {
        const userSubmit = {};
        const dataUser = new FormData(formEl, submitter);
        for (const [key, value] of dataUser.entries()) {
            userSubmit[key] = value;
        }

        localStorage.setItem(KEY, JSON.stringify(userSubmit));
    };
};

const dataUserProcess = () => {
    const DATA_FROM_LOCAL_STORAGE = [];

    if (localStorage.length === 0) {
        return DATA_FROM_LOCAL_STORAGE;
    } else {
        for (let i = 1; i <= localStorage.length; i++) {
            let data = localStorage.getItem(i);
            const parseData = JSON.parse(data);
            DATA_FROM_LOCAL_STORAGE.push(parseData);
        }

        return DATA_FROM_LOCAL_STORAGE;
    }
};

const elementCard = (usia, lokasi, pengalaman, email) => /* html */ `
<div class="col-md-4 my-2">
    <div class="card">
        <ul class="list-group list-group-flush">
            <li class="list-group-item">usia: ${usia}</li>
            <li class="list-group-item">lokasi: ${lokasi}</li>
            <li class="list-group-item">pengalaman: ${pengalaman}</li>
            <li class="list-group-item">email: ${email}</li>
        </ul>
    </div>
</div>
`;

const renderCard = (containerEl) => {
    const dataUser = dataUserProcess();

    console.log(dataUser);

    const cards = dataUser.map((data) => {
        return elementCard(data.age, data.location, data.experience, data.email);
    });

    let tempElement = '';

    cards.forEach((element) => {
        tempElement += element;
    });

    containerEl.innerHTML = tempElement;
};

formEl.addEventListener('submit', (ev) => {
    ev.preventDefault();
    if (isSupportLocalStorage()) {
        const send = sendDataToStorage();
        send();
        KEY++;
        formEl.reset();

        renderCard(document.querySelector('.user-data'));
    } else {
        alert('browser anda tidak mendukung web storage');
    }
});

window.addEventListener('DOMContentLoaded', () => {
    KEY = localStorage.length + 1;
    renderCard(document.querySelector('.user-data'));
});
