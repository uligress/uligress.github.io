# Interfaz compartida

Desde la raíz de `site/`:

1. `node estudio/tools/build.mjs` conserva y normaliza los bancos y las clases originales.
2. `python estudio/tools/index-sources.py` añade las páginas y coincidencias literales del lector. Requiere PyMuPDF. Solo lee los doce PDFs locales, sin llamadas externas.
3. `node estudio/tools/check.mjs` comprueba conservación, fuentes y referencias del lector.

`index-sources.py` conserva las páginas vinculadas explícitamente al material. Para el resto, busca coincidencias de texto y las etiqueta como tales, sin presentarlas como validación clínica. Nunca añade contenido a preguntas o clases. Los subrayados se dibujan solo si el texto está presente en la página mostrada.

La interfaz usa un lector común en clase, práctica, examen y revisión. En escritorio dispone el contenido a la izquierda y el libro a la derecha; por debajo de 760 px apila ambas zonas. El libro y su subrayado permanecen al contestar y cambian al pasar a otro contenido.
