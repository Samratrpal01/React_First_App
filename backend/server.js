const express=require('express')
const mysql=require('mysql')
const cors=require('cors')
const app=express();
app.use(cors());

const config = {
    server: 'IN-PG03520H',     // MySQL server address.
    authentication: {
      type: 'default',
      options: {
        userName: '',         // Leave this empty for Windows authentication.
        password: '',         // Leave this empty for Windows authentication.
      },
    },
    options: {
      database: 'LearnReact', // Database name you want to connect to.
      encrypt: true,
    }
  };

  const Connection=new Mysql.createConnection(config);

  connection.on('Connection',(err)=>{
    if(err)
    {
        console.error("Error Connection To MySql Server");
        return;
    }
    else
    {
        console.log('Connected to mysql server');
    }

  });


  app.listen(8081,()=>{
    console.log("listening");
  });