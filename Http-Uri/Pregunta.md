***TAREA HTTP - URI***

- SEMESTRE: 2023-2
- PROFESOR: Cesar Jesús Lara Ávila

**Integrantes:**

- Bustos Ttito, José Fabricio
- Pérez Cueva Chandler Steven
- Poma Navarro Christian Daniel

***Pregunta:***
¿Cuáles son las dos diferencias principales que has visto anteriormente y lo que ves en un navegador web 'normal'? ¿Qué explica estas diferencias?

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.004.png)
![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.005.png)
En la web normal cada vez que actualizo la página me da una palabra aleatoria, en cambio en el archivo que guarde el código que me dio el comando curl solo sale texto plano, que en este caso sale la palabra creator.

La página web puede incluir elementos adicionales que no se obtienen el comando curl. Estos elementos pueden incluir referencias a archivos CSS, JavaScript, imágenes, etc.

***Pregunta***: 
Suponiendo que estás ejecutando curl desde otro shell ¿qué URL tendrás que pasarle a curl para intentar acceder a tu servidor falso y por qué?

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.007.png)

Una vez mandado el comado del ncat, que permite iniciar un servidor que escucha el puerto 8081, la URL que le enviaría seria localhost (127.0.0.1), ya que le mandamos la ip local de mi computadora.

***Pregunta:*** 
La primera línea de la solicitud identifica qué URL desea recuperar el cliente. ¿Por qué no ves http://localhost:8081 en ninguna parte de esa línea?

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.008.png)

Es una convención en las solicitudes HTTP que la URL completa no se repita cuando se solicita la página de inicio en el puerto predeterminado. En su lugar, se utiliza la ruta "/" para representar la página de inicio.

***Pregunta:*** 
Según los encabezados del servidor, ¿cuál es el código de respuesta HTTP del servidor que indica el estado de la solicitud del cliente y qué versión del protocolo HTTP utilizó el servidor para responder al cliente?

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.012.png)

El código de respuesta es el 200, y la versión del protocolo es HTTP/1.1

***Pregunta:***
Cualquier solicitud web determinada puede devolver una página HTML, una imagen u otros tipos de entidades. ¿Hay algo en los encabezados que crea que le dice al cliente cómo interpretar el resultado?

Si el Content-type, que me dice el tipo de formato que me devuelve que en este caso es HTML, y también indica la codificación de caracteres utilizada para el contenido, aqui, se especifica utf-8.

***Pregunta:*** 
¿Cuál sería el código de respuesta del servidor si intentaras buscar una URL inexistente en el sitio generador de palabras aleatorias?

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.014.png)

404, es el código de la respuesta del servidor el cual me indica que no encuentra el recurso solicitado.

***Pregunta:***
¿Qué otros códigos de error HTTP existen? Utiliza Wikipedia u otro recurso para conocer los significados de algunos de los más comunes: 200, 301, 302, 400, 404, 500. Ten en cuenta que estas son familias de estados: todos los estados 2xx significan funcionó, todos los 3xx son redireccionar etc.

En la página <https://http.cat/> nos da todo los tipos de códigos de respuesta a las solicitudes HTTP

***200:***

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.015.png)

El código de estado HTTP 200 OK, que denota éxito, señala que la solicitud fue exitosa.

***301:*** 

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.017.png)

Indica que el recurso solicitado se ha movido definitivamente a la URL proporcionada por los encabezados de Ubicación.

***302:***

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.018.png)

Indica que el recurso solicitado se ha movido temporalmente a la URL proporcionada por el encabezado Ubicación.

***400:***

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.019.png)

Indica que el servidor no puede o no procesará la solicitud debido a algo que se percibe como un error del cliente

***404:*** 

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.020.png)

Indica que el servidor no puede encontrar el recurso solicitado.

***500:***

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.021.png)

Internal Server Error indica que el servidor encontró una condición inesperada que le impidió cumplir con la solicitud.

***Pregunta:***
Tanto el encabezado 4xx como el 5xx indican condiciones de error. ¿Cuál es la principal diferencia entre 4xx y 5xx?
Los 4xx son errores por parte del cliente, y los 5xx por parte del servidor.

***Pregunta:***
Cuando se envía un formulario HTML, se genera una solicitud HTTP POST desde el navegador. Para llegar a tu servidor falso, ¿con qué URL deberías reemplazar Url-servidor-falso en el archivo anterior?

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.022.png)

Cambiamos a la dirección IP local de nuestro sistema que es <http://127.0.0.1:8081>

***Pregunta:***
¿Cómo se presenta al servidor la información que ingresó en el formulario? ¿Qué tareas necesitaría realizar un framework SaaS como Sinatra o Rails para presentar esta información en un formato conveniente a una aplicación SaaS escrita, por ejemplo, en Ruby?

Se presenta al servidor como una solicitud HTTP POST que contiene los datos del formulario. La solicitud POST incluirá los datos del formulario como parte de su cuerpo (body), y estos datos estarán codificados en un formato específico.

1. ***Recibir la Solicitud POST:*** El framework debe estar configurado para manejar las solicitudes HTTP POST en la URL especificada en el atributo action
1. ***Parsar los Datos del Formulario:*** El framework debe analizar los datos enviados en la solicitud POST para extraer la información ingresada en el formulario, como el correo electrónico, la contraseña y cualquier otro campo.
1. ***Validación y Procesamiento:*** El framework debe realizar la validación de los datos del formulario.
1. ***Generar Respuesta HTML o JSON:*** Una vez que los datos del formulario se hayan procesado y validado, el framework puede generar una respuesta HTML o JSON para enviarla al cliente.

***Preguntas:***

***¿Cuál es el efecto de agregar parámetros URI adicionales como parte de la ruta POST?***
No tiene ningún efecto directo en el contenido del formulario que se envía a través de la solicitud POST.

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.024.png)


***¿Cuál es el efecto de cambiar las propiedades de nombre de los campos del formulario?***
Solo afectará cómo se identifican esos campos en el lado del servidor cuando se procesa la solicitud POST.

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.026.png)

***¿Puedes tener más de un botón Submit? Si es así, ¿cómo sabe el servidor en cuál se hizo clic?*** (Sugerencia: experimenta con los atributos de la etiqueta <submit>).
Si, en la solicitud POST te indica en que botón se hizo el clic como muestra la imagen

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.028.png)

***¿Se puede enviar el formulario mediante GET en lugar de POST? En caso afirmativo, ¿cuál es la diferencia en cómo el servidor ve esas solicitudes?***

Si, los datos se muestran dentro de la URL como muestra en la imagen.
![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.030.png)

***¿Qué otros verbos HTTP son posibles en la ruta de envío del formulario? ¿Puedes hacer que el navegador web genere una ruta que utilice PUT, PATCH o DELETE?***

Los verbos HTTP más comunes utilizados en formularios HTML son GET y POST. Los navegadores web generan solicitudes GET y POST. Para utilizar PUT, PATCH o DELETE, se necesita un lenguaje de programador.

***Pregunta:*** 
Prueba las dos primeras operaciones GET anteriores. El cuerpo de la respuesta para la primera debe ser "Logged in: false" y para la segunda "Login cookie set". ¿Cuáles son las diferencias en los encabezados de respuesta que indican que la segunda operación está configurando una cookie? (Sugerencia: usa curl -v, que mostrará tanto los encabezados de solicitud como los encabezados y el cuerpo de la respuesta, junto con otra información de depuración. curl --help imprimirá una ayuda voluminosa para usar cURL y man curl mostrará la página del manual de Unix para cURL en la mayoría de los sistemas.)

![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.034.png)

En el encabezado de la pagina sin el login, manda la operación get a la raíz, mientras que el que si tiene login manda la operación get /login.

***Ejecutamos los comandos dados:***


![](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/Http-Uri/images/Aspose.Words.0ac7ce18-8902-4c35-af50-35507bcea07a.040.png)

***Pregunta:*** 
Al observar el encabezado Set-Cookie o el contenido del archivo cookies.txt, parece que podría haber creado fácilmente esta cookie y simplemente obligar al servidor a creer que ha iniciado sesión. En la práctica, ¿cómo evitan los servidores esta inseguridad?

- Las cookies pueden configurarse como "seguras", lo que significa que solo se transmiten a través de conexiones HTTPS seguras.
- Las cookies suelen tener una fecha de vencimiento después de la cual ya no son válidas.
