import React from 'react';
import './App.css';
import awsconfig from './aws-exports';
import { withAuthenticator } from 'aws-amplify-react'; 
import Amplify from '@aws-amplify/core';
import Auth from '@aws-amplify/auth';
import filterFactory, { textFilter } from 'react-bootstrap-table2-filter';
import 'react-bootstrap-table-next/dist/react-bootstrap-table2.min.css';

import ToolkitProvider, { Search, CSVExport } from 'react-bootstrap-table2-toolkit';


import BootstrapTable from 'react-bootstrap-table-next'

Amplify.configure(awsconfig);

const { SearchBar, ClearSearchButton } = Search;
const { ExportCSVButton } = CSVExport;


{/* <Authenticator hideDefault>
          <LoginForm />
          <ConfirmRegisterForm />
          <VerifyContactForm />
          <ForgotPasswordForm />
</Authenticator> */}


class App extends React.Component {

/*   constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
      jwttoken: null,
      jwt2:null,
      vpcid:'vpc-641df30c',
      url:'https://j592sbi4q8.execute-api.eu-west-2.amazonaws.com/default/list_instances',
//      rowCount: products.length,
      data: [],
      listing:[]
    };

}
  componentWillMount() {
//bu datayi app in props undan cekmeye calis. Chrome da React ile inspect et.
   Auth.currentSession()
   .then(res=>{
     return res.getIdToken();
    })
    .then(res2 => {
      //console.log(`myPrecious: ${JSON.stringify(res2)}`);
      fetch(this.state.url+'?vpcs='+this.state.vpcid,{
      method: "GET",
      headers: new Headers ({
        'Authorization': 'Bearer '+res2.getJwtToken()
      }),
      cache: 'no-cache',
      mode:'cors'
    }).then(data => data.json())
    .then(data2 => {this.state.data = data2.Reservations[0].Instances})
  })
  };
  
render(){

  return(   
   <BootstrapTable keyField='id' data={ products } columns={ columns } />
  )
  }
 */


state = {

    error: null,
    isLoaded: false,
    vpcid:'vpc-641df30c',
    url:'https://j592sbi4q8.execute-api.eu-west-2.amazonaws.com/default/list_instances',
//      rowCount: products.length,
  instances: [],
  columns: [{
    dataField: 'id',
    text: 'Product ID',
    sort: true
  },
  {
    dataField: 'name',
    text: 'Product Name',
    sort: true,
  //  filter: textFilter()
  }, {
    dataField: 'price',
    text: 'Product Price',
    sort: true
  }],
  data:[],
  selectRow :{mode: 'radio',clickToSelect: true
  }

}

componentWillMount() {
  Auth.currentSession()
  .then(res=>{
    return res.getIdToken();
   })
   .then(res2 => {
     //console.log(`myPrecious: ${JSON.stringify(res2)}`);
     fetch(this.state.url+'?vpcs='+this.state.vpcid,{
     method: "GET",
     headers: new Headers ({
       'Authorization': 'Bearer '+res2.getJwtToken()
     }),
     cache: 'no-cache',
     mode:'cors'
   }).then(response  => {this.state.data = response.json()})

})}



render() {
  return (

    
    <BootstrapTable
      bootstrap4
      keyField='id'
      striped
      hovered
      condensed
      paginatioon
      search
     // pagination={ paginationFactory() }
      selectRow={ { mode: 'checkbox', clickToSelect: true } }
      //expandRow={ expandRow }
      data={ this.state.data }
      columns={ this.state.columns }
     // selectRow={ this.state.selectRow }
     tabindexcell

    />
  
  
  );
}
  };


export default withAuthenticator(App,{includeGreetings: true});
