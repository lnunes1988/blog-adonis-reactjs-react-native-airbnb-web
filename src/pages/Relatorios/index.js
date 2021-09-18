import React, { useState, useEffect } from 'react';
import {
    makeStyles
} from '@material-ui/core/styles';
import axios from "axios";
import Cookies, { get } from 'js-cookie'

import api from "../../services/api";
import { logout } from '../../services/auth';


export default function Example() {
  const [count, setCount] = useState(0);
  const [reg, setReg] = useState(0);

  // Similar a componentDidMount e componentDidUpdate:
  useEffect(() => {
    // Atualiza o título do documento utilizando a API do navegador
    document.title = `You clicked ${count} times`;
    //document.title = `Há ${reg} registros`;
     clinhas().then(result => setReg(
      result));
    clinhas().then(result => console.log(result[count][5],result[1][5],result[2][5],result[3][5],result[4][5]))
       });

  return (
    <div>
      <p>You clicked {count} times</p>
      <p>You clicked {reg} times</p>
      
      <button onClick={() => setCount(count + 1)}>
        Click me
      </button>
      <button onClick={() => setReg(clinhas())}>
        Click me
      </button>
   

    </div>
  );
}
const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function createData(name, calories, fat, carbs, protein) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein
    };
}

const getTokenAPI = localStorage.getItem("portal2")

async function tabelajson() {
    try {
//        console.log("try:")
        const tokenapi = Cookies.get("portal")
//        console.log(getTokenAPI)
        api.defaults.headers.authorization = `Bearer ${getTokenAPI}`;


        const responser = await axios.post("http://187.94.62.84:4322/REST/TELEGRAM/TeleJson?cQuery=select top 10 * from CN9010")
        //console.log(responser)

        return responser.data
        //console.log(response)
    } catch (err) {
        console.log('erro no post')
    }
}


const array = []
let subarray = []

async function clinhas() {
  

  if (getTokenAPI != null) {
  let linha2 = await tabelajson()
  console.log(linha2)
  if (!linha2 ){
    console.log('saindo')
    
    logout()
  }else{
  const objarray = Object.values(linha2)
  const objarray2 = objarray[0]
  let n=1  
  subarray = []
  
    for (var item in objarray2) {
     const objarray3 = Object.values(objarray2[item])
 //       console.log(objarray3)     
        if (n <= objarray2.length){
          subarray.push(objarray3)
    //      console.log('push')
          n++
        }
        
    }
  }
    //console.log('array')
    console.log(subarray)
    return subarray
  }
}
if (getTokenAPI != null) {
const array2 = clinhas()
/* console.log('array2')
console.log(array2) */
}
 const rows = clinhas()
 
//const rows = clinhas()
export function DenseTable() {
  const classes = useStyles();
  
  return (
    <div><div>teste ant</div><DenseTable2></DenseTable2></div>
  );
}


export function DenseTable2() {
  const classes = useStyles();
  
  return (
    <div>{rows.then()}</div>
  );
}