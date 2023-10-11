1. Luego de crear una película, si esta se creó correctamente entonces se redirige a la página de la información de la película 'show'
![img](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/PC2/Parte2/images/p1.png)  

2. Primero vamos a agregar :description a los parámetros permitidos al momento de llevar a cabo la creación de una película.

![img](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/PC2/Parte2/images/p2a.png)

Y en el .erb de la vista de la película, agregamos el campo de descripción.

![img](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/PC2/Parte2/images/p2b.png)

Ahora vemos en el navegador que se muestra el campo de descripción, al momento de mostrar las películas.

![img](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/PC2/Parte2/images/p2c.png)

3. En la función set_movie, se puede ver que se está usando el método find para buscar una película así que usamos un begin ... rescue para capturar la excepción ActiveRecord::RecordNotFound y mostrar un mensaje de error y redirigir a la página principal. 

![img](https://github.com/chandler-pc/Desarrollo-CC3S2/blob/main/PC2/Parte2/images/p3.png)
