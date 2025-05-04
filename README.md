# DIPLOMATURA UNIVERSITARIA DESARROLLO WEB FULL STACK CON JAVASCRIPTNodoT

# TP FINAL - -Aplicación para ofrecer servicios de Oficios o Profecionales
Este desarrollo de proyecto consta de que cualquier persona pueda publicar sus habilidades profecionales, como por ejemplo, Oficios de trabajo o ocupación habitual, generalmente relacionada con procesos manuales o artesanales, que se aprende principalmente a través de la práctica y la experiencia laboral.

```bash
* la idea es que: sin inicio de sesión, puedes ver todos los perfiles publicados y su contacto. 
* con inicio de sesión (para futuro configuración modo pago) podrás crear perfiles y cargar tus datos
* el rol admin, podrás crear, actualizar y eliminar perfiles.
```
# Deploys

```bash
catamarca.netlify.app
```


# Clonar el repositorio Server:
https://github.com/Javier-Acosta/server.git



# Clonar el repositorio app:
git clone [https://github.com/Javier-Acosta/Final-Sprint6.git]



# Instalar las dependencias:
npm install bcryptjs cors dotenv express express-validator jsonwebtoken mongoose node nodemon winston 

**  `Inicia el servidor: `**


```bash
npm run dev
```

### 3. Configurar variables de entorno
Crear archivo `.env`:

plaintext
MONGODB_URI=mongodb+srv://root:wm84Gyyg3jQwx4BJ@cluster0.0owpnim.mongodb.net/AppFinal
PORT=3000
JWT_SECRET=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiaWF0IjoxNTE2MjM5MDIyfQ.SflKxwRJSMeKKF2QT4fwpMeJf36POk6yJV_adQssw5c


✅ Estado del Proyecto
✔ Arquitectura modular y clara
✔ CRUD de perfiles funcional
✔ Paginación para datos públicos
✔ Rutas implementada react-router-dom
 

## EJEMPLOS DE USOS - ENDPOINTS 
 

**`POST`**
```bash
   http://localhost:3000/api/auth/register
```

 ```bash
   {
      "email": "example@hotmail.com",
      "password": "TuClaverAquí",
      
   }
```
# Acceso desde la WEb 

**`Clave y Password cliente básico, cliente pago, Administrador de sistema`**

 ```bash
  Cliente básico
  email javitoacosta@gmail.com 
  password chicho
```
 ```bash
  Cliente pago
  email javitoacosta@hotmail.com
  password chicho
```
 ```bash
  Administrador de Sistema
  email jacosta@hotmail.com 
  password chicho
```

