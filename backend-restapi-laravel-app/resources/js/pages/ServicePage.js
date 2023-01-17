import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu/Menu";
import axios from "axios";
import {Col, Container, Row, Modal, Button,Form} from "react-bootstrap";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import DataTable from "react-data-table-component";

class ServicePage extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isLoading:true,
            isError:false,
            addModal: false,
            validationErrorMessage:'',
        }
    }
    componentDidMount() {
        // get data
        axios.get('/service/show')
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
            axios.post('/service/delete',{id:id})
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

    // add modal open,close handle
    addModalOpen=()=>{
        this.setState({addModal:true});
    }
    addModalClose=()=>{
        this.setState({addModal:false});
    }

    // add data
    add=()=>{
        let name = document.getElementById('name').value;
        let description = document.getElementById('description').value;
        let image = document.getElementById('image').files[0];
        // text field validation
        if(name.length <= 0)
            this.setState({validationErrorMessage:"Name Empty!"});

        let data=new FormData();
        data.append('name',name);
        data.append('description',description);
        data.append('image',image);
        let config={headers:{'content-type': 'multipart/form-data'}}

        // post data
        axios.post('/service/store',data,config)
            .then(response=>{
                console.log(response)
                if(response.data == 1){
                    alert("Data Added Successfully.");
                    this.addModalClose();
                    this.componentDidMount();
                }
            })
            .catch(error=>{
                this.addModalClose();
                alert("Fail!");
            })
    }

    render() {
        if(this.state.isLoading == true){
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
            const basePath = window.location.protocol+"//"+window.location.host+"/images/";
            const columns = [
                // { name: 'ID', selector: row => row.id, sortable: true, style:{maxWidth:'120px'}},
                { name: 'Image', selector: row => <img src={basePath+row.image} width='80px' height='80px' /> },
                { name: 'Name', selector: row => row.name, sortable: true,},
                { name: 'Service Details', selector: row => row.description,},
                { name: 'Action', cell: row => <button className="btn btn-danger btn-sm" onClick={()=>this.delete(row.id)}>Delete</button>,},
            ];

            const data = this.state.data;
            const handleChange = ({ selectedRows }) => {
                // You can set state or dispatch with something like Redux so we can use the retrieved data
                console.log('Selected Rows: ', selectedRows);
            };

            const tableCustomStyles = {
                headCells: {
                    style: {
                        fontSize: '13px',
                        fontWeight: 'bold',
                        //paddingLeft: '0 8px',
                        //justifyContent: 'center',
                        backgroundColor: '#dee3e9',

                    },
                },
            }

            return (
                <Fragment>
                    {/* menu & table data */}
                    <Menu title="Contact">
                        <Container className="">
                            <Row>
                                <Col sm={12} md={12} lg={12}>
                                    <button className="addButton float-end" onClick={this.addModalOpen}> Add New Service</button>
                                    <DataTable columns={columns} data={data} title="Service List" customStyles={tableCustomStyles} pagination fixedHeader highlightOnHover selectableRows onSelectedRowsChange={handleChange} />
                                </Col>
                            </Row>
                        </Container>
                    </Menu>

                    {/*  Add modal  */}
                    <Modal size="lg" show={this.state.addModal} onHide={this.addModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Add New Service</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-left'>Service Name <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" id="name"  placeholder="Enter name" />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-left'>Description</Form.Label>
                                    <Form.Control id="description" as="textarea" placeholder="Description" style={{ height: '100px' }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-left'>Image</Form.Label>
                                    <Form.Control type="file" id="image"   />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="secondary" onClick={this.addModalClose}> Close </Button>
                            <Button variant="primary" onClick={this.add}> Save </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }

    }
}

export default ServicePage;
