document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("contact-form");
    const contactList = document.getElementById("contact-list");

    form.addEventListener("submit", function (event) {
        event.preventDefault();

        const nameInput = document.getElementById("name");
        const phoneInput = document.getElementById("phone");

        const name = nameInput.value;
        const phone = phoneInput.value;

        if (name && phone) {
            const newRow = document.createElement("tr");
            newRow.innerHTML = `
                <td>${name}</td>
                <td>${phone}</td>
            `;
            contactList.appendChild(newRow);

            nameInput.value = "";
            phoneInput.value = "";
        }
    });
});
