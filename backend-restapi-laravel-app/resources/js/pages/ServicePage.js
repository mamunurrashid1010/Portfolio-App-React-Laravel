import React, {Component, Fragment} from 'react';
import Menu from "../components/Menu/Menu";
import axios from "axios";
import {Col, Container, Row, Modal, Button,Form} from "react-bootstrap";
import Loading from "../components/Loading/Loading";
import Error from "../components/Error/Error";
import DataTable from "react-data-table-component";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

class ServicePage extends Component {
    constructor(){
        super();
        this.state={
            data:[],
            isLoading:true,
            isError:false,
            addModal: false,
            validationErrorMessage:'',
            editModal: false,
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
                        this.componentDidMount();
                        toast.success("Success");
                    }
                })
                .catch(e=>{
                    toast.error("Fail!");
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
                    this.addModalClose();
                    this.componentDidMount();
                    toast.success("Success");
                }
            })
            .catch(error=>{
                this.addModalClose();
                toast.error("Fail!");
            })
    }

    // edit modal open,close handle
    editModalOpen=()=>{
        this.setState({editModal:true});
    }
    editModalClose=()=>{
        this.setState({editModal:false});
    }

    //edit
    edit=(id)=>{
        this.editModalOpen();
        axios.post('/service/edit',{id:id})
            .then(res=>{
                if(res.data && res.status== 200){
                    document.getElementById('e_id').value=res.data.id;
                    document.getElementById('e_name').value=res.data.name;
                    document.getElementById('e_description').value=res.data.description;
                }
            })
            .catch(e=>{
                this.editModalClose();
                toast.error("Error!");
            })
    }

    // update
    update=()=>{
        let id = document.getElementById('e_id').value;
        let name = document.getElementById('e_name').value;
        let description = document.getElementById('e_description').value;
        let image = document.getElementById('e_image').files[0];
        // text field validation
        if(name.length <= 0)
            this.setState({validationErrorMessage:"Name Empty!"});

        let data=new FormData();
        data.append('id',id);
        data.append('name',name);
        data.append('description',description);
        if(image){
            data.append('image',image);
        }
        let config={headers:{'content-type': 'multipart/form-data'}}

        axios.post('/service/update',data,config)
            .then(response=>{
                //console.log(response)
                if(response.data == 1){
                    this.editModalClose();
                    this.componentDidMount();
                    toast.success("Success");
                }
            })
            .catch(error=>{
                this.editModalClose();
                toast.error("Fail!");
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
            //const basePath = window.location.protocol+"//"+window.location.host+"/images/";
            const columns = [
                // { name: 'ID', selector: row => row.id, sortable: true, style:{maxWidth:'120px'}},
                { name: 'Image', selector: row => <img src={row.image} width='80px' height='80px' /> },
                { name: 'Name', selector: row => row.name, sortable: true,},
                { name: 'Service Details', selector: row => row.description,},
                { name: 'Action', cell: row =>
                        [
                        <button className="btn btn-warning btn-sm" onClick={()=>this.edit(row.id)}>Edit</button>,
                        <button className="btn btn-danger btn-sm" onClick={()=>this.delete(row.id)}>Delete</button>,
                        ]
                },
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
                    <div className="p-3 m-2">
                        {/* toast message container */}
                        <ToastContainer />
                        {/* menu & table data */}
                        <Menu title="Service">
                            <button className="addButton float-end" onClick={this.addModalOpen}> Add New Service</button>
                            <DataTable columns={columns} data={data} title="Service List" customStyles={tableCustomStyles} pagination fixedHeader highlightOnHover selectableRows onSelectedRowsChange={handleChange} />
                        </Menu>
                    </div>


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

                    {/*  Edit modal  */}
                    <Modal size="lg" show={this.state.editModal} onHide={this.editModalClose}>
                        <Modal.Header closeButton>
                            <Modal.Title>Edit Service</Modal.Title>
                        </Modal.Header>
                        <Modal.Body>
                            <Form>
                                <input type="hidden" id="e_id" value="" required />
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-left'>Service Name <span className='text-danger'>*</span></Form.Label>
                                    <Form.Control type="text" id="e_name" placeholder="Enter name" required />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-left'>Description</Form.Label>
                                    <Form.Control id="e_description" as="textarea" style={{ height: '100px' }} />
                                </Form.Group>
                                <Form.Group className="mb-3">
                                    <Form.Label className='text-left'>Image</Form.Label>
                                    <Form.Control type="file" id="e_image"   />
                                </Form.Group>
                            </Form>
                        </Modal.Body>
                        <Modal.Footer>
                            <Button variant="danger" onClick={this.editModalClose}> Close </Button>
                            <Button variant="success" onClick={this.update}> Update Now </Button>
                        </Modal.Footer>
                    </Modal>

                </Fragment>
            );
        }

    }
}

export default ServicePage;
