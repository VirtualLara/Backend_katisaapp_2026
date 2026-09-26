use katisa_app;

create table users(
	id bigint primary key auto_increment,
    name varchar(50) not null,
    lastname varchar(50) not null, 
    email varchar(100) not null unique,
    phone varchar(10) CHECK (phone REGEXP '^[0-9]+$') not null unique,
    ocupation varchar(50) null,
    postalCode varchar(5) CHECK (postalCode REGEXP '^[0-9]+$') null,
    interests varchar(255) null,
    notifications boolean null,
    image varchar(255) null,
    password varchar(100) not null,
    created_at timestamp(0) not null,
    updated_at timestamp(0) not null
);

/* 
//TRUNCATE RESETEAR TABLA A CERO
TRUNCATE TABLE USERS

//solucionar problema de conexion node a mysql
ALTER USER 'root'@'localhost' IDENTIFIED WITH mysql_native_password BY '123456'; //poner mis datos de conexion

//renombrar columna
alter table users RENAME COLUMN created_ad to created_at;

//agregar columna
ALTER TABLE users ADD updated_at timestamp(0) not null;

//body para insertar usuario completo
{
    "name":"test", 
    "lastname":"testing", 
    "email":"test@test.com", 
    "phone":"1234567890", 
    "ocupation":"electricista", 
    "postalCode":"12345",
    "interests": "focos",
    "notifications": "true",
    "image":"https://img.magnific.com/vector-gratis/cute-cool-boy-dabbing-pose-dibujos-animados-vector-icono-ilustracion-concepto-icono-moda-personas-aislado_138676-5680.jpg?semt=ais_hybrid&w=740&q=80" ,
    "password":"123456", 
}

//PARAR PROCESO NODEMON O NODE
netstat -ano | findstr :<PUERTO> 3000
taskkill /PID <PID> /F NUMERO FINAL


*/