document.getElementById("converter").addEventListener("click", async () => {
    const valor = document.getElementById("valor").value;
    const moeda = document.getElementById("moeda").value;
    const resultado = document.getElementById("resultado");

    if (!valor) {
        resultado.value = "Digite um valor!";
        return;
    }

    try {
        // API de câmbio real
        const url = `https://api.exchangerate-api.com/v4/latest/${moeda}`;
        const response = await fetch(url);
        const data = await response.json();

        // Conversão para reais (BRL)
        const taxa = data.rates.BRL;

        const convertido = (valor * taxa).toFixed(2);

        resultado.value = `R$ ${convertido}`;

    } catch (error) {
        resultado.value = "Erro!";
        console.log(error);
    }
});
