import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu/Menu";
import DataTable from 'react-data-table-component';
import axios from "axios";
import {Col, Container, Row} from "react-bootstrap";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";

class ContactPage extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isLoading:true,
            isError:false,
        }
    }
    componentDidMount() {
            axios.get('/contact/show')
            .then(res=>{
                if(res.status==200){
                    this.setState({data:res.data, isLoading:false, isError:false})
                }
            })
            .catch(e=>{
                this.setState({isLoading:false, isError:true})
            })
    }

    // delete contact info
    delete=(id)=>{
        let confirmDelete = confirm("Are you sure?");
        if(confirmDelete == true){
            axios.post('/contact/delete',{id:id})
                .then(res=>{
                    if(res.data == 1 && res.status== 200){
                        alert("Delete Success.");
                        this.componentDidMount();
                    }
                })
                .catch(e=>{
                    alert("Fail!");
                })
        }

    }

    render() {
        if (this.state.isLoading == true){
            return (
                <Menu>
                    <Container>
                        <Loading/>
                    </Container>
                </Menu>
            );
        }
        else if(this.state.isError == true){
            return (
                <Menu>
                    <Container>
                        <Error/>
                    </Container>
                </Menu>
            );
        }
        else{
            const columns = [
                { name: 'ID', selector: row => row.id, sortable: true,},
                { name: 'Name', selector: row => row.name, sortable: true,},
                { name: 'Email', selector: row => row.email, sortable: true,},
                { name: 'Message', selector: row => row.message,},
                { name: 'Action', cell: row => <button className="btn btn-danger btn-sm" onClick={()=>this.delete(row.id)}>Delete</button>,},
            ];

            const data = this.state.data;
            //     [
            //     {
            //         id: 1,
            //         name: 'Kamal Uddin',
            //         email: 'test mail',
            //         message: 'test message',
            //     },
            //     {
            //         id: 2,
            //         name: 'Hasan',
            //         email: 'test mail',
            //         message: 'test message',
            //     },
            // ];
            return (
                <Fragment>
                    <Menu title="Contact">
                        <Container>
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <DataTable columns={columns} data={data} title="Contact List" pagination selectableRows fixedHeader highlightOnHover />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>
                </Fragment>
            );
        }


    }
}

export default ContactPage;
