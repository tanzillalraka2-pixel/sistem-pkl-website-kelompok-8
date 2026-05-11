        const form = document.getElementById("formDaftar");
        const notif = document.getElementById("notif");

        form.addEventListener("submit", function(e) {
            e.preventDefault();

            notif.classList.remove("d-none");

            setTimeout(() => {
                window.location.href = "berhasil.html";
            }, 2000);

            form.reset();
        });
