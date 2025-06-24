document.getElementById("sign-up-form").addEventListener("submit", async function (e) {

    e.preventDefault();
    document.getElementById("sign-up-error").style.display = "none";

    await signUp();
});

async function signUp() {
    try {
        const email = document.getElementById("email-input").value;
        const password = document.getElementById("password-input").value;

        const response = await fetch(`${apiBaseUrl}/auth/signup`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ email, password }),
        });

        if (response.ok) {
            window.location = "sign-in.html";
        }
        else if (response.status === 400) {
            const responseData = await response.text();

            const el = document.getElementById("sign-up-error");
            el.textContent = responseData;
            el.style.display = "block";
        }
        else {
            alert(await response.text());
        }
    }
    catch (e) {
        console.error(e);
    }
}