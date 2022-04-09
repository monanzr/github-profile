const API_URL = "https://api.github.com/users/";

const btnSearch = document.getElementById('btn-search');
const username = document.getElementById('username');
const card = document.getElementById('card');
const gitBio = document.getElementById('card-bio')
const elements = document.querySelector('.elements')

// var searchTerm = API_URL+username.value

const getUser = () => {
    if(username.value === "") {
        toastify('Please enter username')
    }
    else {
        fetch(API_URL + username.value)
            .then(Response => Response.json())
            .then((data) => {
                if (data.message == "Not Found") {
                    toastify('User Not found')
                } else {
                    console.log(data);

                    card.innerHTML =
                        `<div class="card__wrapper">
            <div class="card__left">
                <div class="card__img">
                    <img src="${data.avatar_url}">
                </div>
                <div class="card__content">
                    <div class="card__name" id="card-name">${data.name}</div>
                    <div class="card__username" id="card-username"><a href="${data.html_url}">@${data.login}</a></div>
                    <div class="card__bio" id="card-bio">${data.bio} </div>
                    <div class="card__follow">
                        <div class="repository"><span>${data.public_repos}</span> Repository</div>
                        <div class="following"><span>${data.following}</span> Following</div>
                        <div class="follower"><span>${data.followers}</span> Followers</div>
                    </div>
                </div>
            </div>
            <div class="card__right">
                <div class="card__right--one"><i class="fa fa-ellipsis-h" aria-hidden="true"></i></div>
                <div class="card__right--two"><i class="fa fa-pencil-alt" aria-hidden="true"></i></div>
            </div>
        </div>`;
                }
            });
        elements.style.justifyContent = "center";

    }
}

//Toastify alart
const toastify = (textValue) => {
    Toastify({
        text: textValue,
        duration: 3000,
        newWindow: true,
        className: "info",
        close: true,
        gravity: "top",
        position: "right",
        onClick: function() {
        }
    }).showToast();
}

// async function loadGetUser(gitBioCheck) {
//     await getUser();
//     checkBio(gitBioCheck)
// }
//
//
// function checkBio(gitBioCheck) {
//     if(gitBioCheck === "") {
//     }
//     else {
//         gitBio.innerHTML = gitBioCheck;
//     }
// }

