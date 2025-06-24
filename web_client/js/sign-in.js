document.getElementById("sign-in-form").addEventListener("submit", async function (e) {

    e.preventDefault();
    document.getElementById("sign-in-error").style.display = "none";

    await signIn();
});

function togglePasswordVisibility() {
    const passwordInput = document.getElementById('password-input');
    const showPasswordCheckbox = document.getElementById('show-password-checkbox');
    passwordInput.type = showPasswordCheckbox.checked ? "text" : "password";
}

async function signIn() {
    const email = document.getElementById("email-input").value;
    const password = document.getElementById("password-input").value;

    const body = JSON.stringify({ email, password });

    try {
        const response = await fetch(`${apiBaseUrl}/auth/signin`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: body,
            credentials: "include",
        });

        const bodyVal = await response.body();
        const res = JSON.parse(bodyVal);

        if (response.ok) {
            window.location = "index.html";
        }
        else if (response.status === 400) {
            const responseData = await response.text();
            const signInErrorMessageElement = document.getElementById("sign-in-error");
            signInErrorMessageElement.textContent = responseData;
            signInErrorMessageElement.style.display = "block";
        }
    }
    catch (error) {
        console.error(error);
    }
}