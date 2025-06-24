// const apiBaseUrl = "http://localhost:5555/api";
const apiBaseUrl = "http://217.198.9.32/api/api";
let currentUser = null;

document.addEventListener("DOMContentLoaded", async () => {

    document.getElementById("sign-out-button").addEventListener("click", signOut);

    document.getElementById("sign-in-button").addEventListener("click",  () => {
        window.location = "sign-in.html";
    });
});

async function isAuthenticated() {
    try {
        const response = await fetch(`${apiBaseUrl}/auth/me`, {
            method: "GET",
            credentials: "include",
        });

        if (response.status === 200) {
            const user = await response.json();
            document.getElementById("sign-in-button").style.display = "none";
            document.getElementById("user-account-container").style.display = "inline-block";
            document.getElementById("user-email").textContent = user.email;
            return user;
        }
        else if (response.status === 401) {
            return null;
        }
        else {
            alert(await response.text());
        }
    }
    catch (error) {
        console.error(error)
    }
}

async function signOut(){
    try {
        const response = await fetch(`${apiBaseUrl}/auth/sign-out`, {
            method: "POST",
            credentials: "include",
        });

        if (response.status === 200) {
            window.location.reload();
        }
        else {
            alert(await response.text());
        }
    }
    catch (error) {
        console.error(error);
    }
}

function showIfAdmin() {
    if (currentUser && currentUser.role === "Admin") {
        document.querySelectorAll(".admin-item").forEach(el => {
            el.style.display = "block";
        });
    }
}

function onOpenModalWindow(windowId) {
    document.getElementById(windowId).style.display = "block";
}

function onCloseModalWindow(windowId) {
    document.getElementById(windowId).style.display = "none";
}
