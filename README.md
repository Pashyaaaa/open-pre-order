# open-po
Project PT.Fiesto Informatika | OpenPO


## Proses Instalasi Project
### Instalasi pada server
Untuk bagian server maka lakukan perintah :
1. cd server
2. npm install

### Instalasi pada dashboard
Untuk bagian server maka lakukan perintah :
1. cd dashboard
2. npm install

### Instalasi pada client
Untuk bagian server maka lakukan perintah :
1. cd client
2. npm install

### Database Setting
1. import openpo_db.sql
2. DATABASE = openpo
   DATABASE_HOST = localhost
   DATABASE_USER = root
   DATABASE_PASSWORD = 
   DATABASE_DIALECT = mysql

## Proses Development
### Untuk mengaktifkan Server maka yang perlu dilakukan adalah :
1. Nyalakan Laragon/Xampp
2. kemudian pergi ke folder server
3. Lalu, buka terminal dan jalankan perintah `nodemon app`
4. Server sudah siap dieksekusi

### Untuk mengaktifkan Dashboard maka yang perlu dilakukan adalah :
1. Pergi ke folder Dashboard
2. Lalu, buka terminal dan jalankan perintah `npm run dev`
3. Lalu copy dan paste url `http://localhost:5173` pada browser
4. Dashboard sudah siap digunakan

### Untuk mengaktifkan Client maka yang perlu dilakukan adalah :
1. Pergi ke folder Client
2. Lalu, buka terminal dan jalankan perintah `npm run dev`
3. Lalu copy dan paste url `http://localhost:5173` pada browser
4. Client sudah siap digunakan








