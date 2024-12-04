En lo posible leer el "README.docx" ya que esta mas detallado con imagenes.

--------------------------------------------------------------------
-                      Requisitos previos.                         -
--------------------------------------------------------------------
Tener instalado lo siguiente.
-	Docker y Docker-compose
-	Nodejs y npm
-	Python
--------------------------------------------------------------------
1.	Clonar repositorio de github. 
git clone https://github.com/usuario/repo.git

2.	Crear y activar el entorno virtual para el backend
Dentro de la carpeta backend debemos crear un entorno virtual “python -m venv venv”

3.	Asegurarse de tener el archivo requirements.txt
pip install -r requirements.txt, para instalar las dependencias del proyecto.
podemos generar este archivo si no lo tenemos “pip freeze > requirements.txt”.

4.	Crear el archivo docker-compose.yml en la carpeta backend con sus credenciales y configuraciones.
 
5.	Crear el archivo “Dockerfile” dentro de la carpeta backend con sus configuraciones.

6.	Construir y levantar el Backend
donde se encuentra el Docker-compose.yml 
-	docker-compose build
-	docker-compose up -d
Como es un chat en tiempo real y es asíncrono, no use base de datos. Pero en el caso de que en un futuro sea otro proyecto. Se usa lo siguiente.
-	Ingresamos a nuestro contenedor
-	Aplicamos las migraciones (python manage.py migrate)
-	Tambien podemos crear un superusuario pero es opcional.

7.	Levantar el frontend (npm install)
Dentro de la carpeta frontend colocamos el compando npm install para instalar todas las dependencias…

8.	Correr el proyecto (ng serve).
Como el proyecto esta configurado automáticamente, cuando ingresamos a localhost:4200 ya nos crea una sala.
Por default la sala es “general” pero en la url si cambiamos “general” por “Alberto” nos mostraria “chat de Alberto”.


--------------------------------------------------------------------
-                     Comandos diarios.                            -
--------------------------------------------------------------------
Una vez finalizado todo los comandos diarios serán estos.

-	Ir a la carpeta “backend/venv(este es mi entorno vitual)/Scripts” y colocar el comando actívate. Tambien podemos optar por este comando “venv\Scripts\activate”

-	Volvemos a la carpeta Backend y en ella colocamos “Docker-compose up -d” para levantar nuestro backend y base de datos(en el caso de que la tengamos).

-	Vamos a nuestra carpeta frontend y en ella levantamos el frontend con el comando “ng serve”.

