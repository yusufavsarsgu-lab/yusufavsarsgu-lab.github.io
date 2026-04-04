
document.addEventListener("DOMContentLoaded", () => {
  const forms = document.querySelectorAll("[data-api-form]");
  if (!forms.length) return;

  forms.forEach((form) => {
    const statusBox = form.querySelector(".form-status");
    const submitButton = form.querySelector('button[type="submit"]');
    const honeypot = form.querySelector('input[name="botcheck"]');

    form.addEventListener("submit", async (event) => {
      event.preventDefault();
      if (honeypot && honeypot.value.trim() !== "") return;
      if (!statusBox || !submitButton) return;

      statusBox.className = "form-status";
      statusBox.textContent = "";
      submitButton.disabled = true;
      const originalLabel = submitButton.textContent;
      submitButton.textContent = "Gönderiliyor...";

      const formData = new FormData(form);
      const payload = Object.fromEntries(formData.entries());

      try {
        const response = await fetch(form.action, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Accept: "application/json"
          },
          body: JSON.stringify(payload)
        });

        const result = await response.json();
        if (response.ok) {
          statusBox.className = "form-status success";
          statusBox.textContent = "Talebiniz alındı. Uygun olduğumuzda size dönüş yapılacaktır.";
          form.reset();
        } else {
          statusBox.className = "form-status error";
          statusBox.textContent = result.message || "Gönderim sırasında bir sorun oluştu.";
        }
      } catch (error) {
        statusBox.className = "form-status error";
        statusBox.textContent = "Bağlantı kurulamadı. Lütfen daha sonra tekrar deneyin.";
      } finally {
        submitButton.disabled = false;
        submitButton.textContent = originalLabel;
      }
    });
  });
});
