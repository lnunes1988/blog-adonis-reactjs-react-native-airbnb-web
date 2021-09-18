import React, {Component} from 'react'
import { Typography,Breadcrumbs,Link,ImageListItemBar } from '@material-ui/core';

export default class Mybar extends Component {
    render() {
return (<div>
    <ImageListItemBar title='Painel de informações' position='top'></ImageListItemBar>
    <br></br><br></br><br></br>
    <Breadcrumbs separator="-" aria-label="breadcrumb">
        <Link color="inherit" href="/app" >
            APP
        </Link>
        <Link color="inherit" href="/Relatorios" >
            Relatórios
        </Link>
        <Link color="inherit" href="/logout" >
            Sair
        </Link>
        <Typography color="textPrimary">Em breve...</Typography>
    </Breadcrumbs>
    </div>)
    };
}

