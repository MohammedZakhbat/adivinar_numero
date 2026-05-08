const numeroSecreto = Math.floor(Math.random() * 500) + 1;

    const body = document.getElementById("body");
    const mensaje = document.getElementById("mensaje");
    const boton = document.getElementById("btnAdivinar");

    function adivinar() {

      const numeroUsuario = Number(document.getElementById("numero").value);

  if (numeroUsuario < 0 || numeroUsuario > 500) {
        mensaje.textContent = "Por favor indica un número entre 0 y 500";
        mensaje.className = "mt-6 text-xl font-bold text-black";
        body.className = "bg-gray-300 min-h-screen flex items-center justify-center transition-all duration-500";
        return;
      }


  if (numeroUsuario === numeroSecreto) {
        mensaje.textContent = "🎉 ¡Ganaste!";
        mensaje.className = "mt-6 text-3xl font-bold text-green-700";

        body.className =
          "bg-green-400 min-h-screen flex items-center justify-center transition-all duration-500";
          boton.style.display = "none";

        return;
      }
      const distancia = Math.abs(numeroSecreto - numeroUsuario);
if (numeroUsuario < numeroSecreto) {

        if (distancia >= 50) {
          mensaje.textContent =
            "❄️ Frío, frío: tu número es más pequeño que el mío";

          body.className =
            "bg-blue-500 min-h-screen flex items-center justify-center transition-all duration-500";

        } else if (distancia >= 15 && distancia < 50) {
          mensaje.textContent =
            "🌤️ Tibio, tibio: tu número es más pequeño que el mío";

          body.className =
            "bg-yellow-300 min-h-screen flex items-center justify-center transition-all duration-500";

        } else {
          mensaje.textContent =
            "🔥 Caliente, caliente: tu número es más pequeño que el mío";

          body.className =
            "bg-red-500 min-h-screen flex items-center justify-center transition-all duration-500";
        }

      } else {  if (distancia >= 50) {
          mensaje.textContent =
            "❄️ Frío, frío: tu número es más grande que el mío";

          body.className =
            "bg-blue-500 min-h-screen flex items-center justify-center transition-all duration-500";

        } else if (distancia >= 15 && distancia < 50) {
          mensaje.textContent =
            "🌤️ Tibio, tibio: tu número es más grande que el mío";

          body.className =
            "bg-yellow-300 min-h-screen flex items-center justify-center transition-all duration-500";

        } else {
          mensaje.textContent =
            "🔥 Caliente, caliente: tu número es más grande que el mío";

          body.className =
            "bg-red-500 min-h-screen flex items-center justify-center transition-all duration-500";
        }
      }
    }
