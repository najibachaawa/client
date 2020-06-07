import React, { Component } from "react";
import {DataTable} from 'primereact/datatable';
import {Column} from 'primereact/column';
import {InputText} from 'primereact/inputtext';
import {Button} from 'primereact/button';
import { UserService } from "../../../services/user";

export default class Delete extends Component {
    constructor() {
        super();
        this.state = {
            data : [],

            globalFilter: null,
            };
            this.actionTemplate = this.actionTemplate.bind(this);
            this.userService=new UserService() ; 
    }

    componentDidMount() {
        this.userService.getAll().then(d=> this.setState({data:d})) ; 
          
    }
    deleteUser = event => {
        
        console.log('done') ;
        console.log(this.columnKey) 
         this.userService.deleteuser(this.columnKey) ;  
         console.log('bye') ; 
    }
    /*test = event => {
        console.log('button works!') ; 
        //this.deleteUser(id) ;
        this.onEditorSubmit() ; 
    }*/


    

    //this.deleteUser(this.state.data._id)
    actionTemplate(rowData, column) {
        
        
        var id=column.value.map(d=>d._id)
        console.log(rowData[id]) 
      
        return<div>
            <Button onClick={this.deleteUser} type="button" icon="pi pi-trash" className="p-button-danger"></Button>
        </div>;
    }


    render() {
        const header = (
            <div style={{'textAlign':'left'}}>
                <i className="pi pi-search" style={{margin:'4px 4px 0 0'}}></i>
                <InputText type="search" onInput={(e) => this.setState({globalFilter: e.target.value})} placeholder="Global Search" size="50"/>
            </div>
        );

        return (
        <div>
                <DataTable ref={(el) => this.dt = el} value={this.state.data} paginator={true} rows={5} header={header}
                    globalFilter={this.state.globalFilter} emptyMessage="No records found">
                    <Column field="nom" header="Lastname" filter={true} filterMatchMode="contains" />
                    <Column field="prenom" header="Firstname" filter={true} filterMatchMode="contains" />
                    <Column field="email" header="Email" filter={true} filterMatchMode="contains" />
                    <Column field="_id" body={this.actionTemplate} style={{textAlign:'center', width: '8em'}}/>
                </DataTable>
            </div>
        )    
}

}