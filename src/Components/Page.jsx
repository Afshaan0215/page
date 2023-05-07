import React, { useState, useEffect } from 'react';
import Pagination from './Pagination';
import './styles.css'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Loaders from './Loaders';
import axios from 'axios'

function Page() {
    const [user, setUser] = useState([]);
    const [search, setSearch] = useState("");
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        getData()
    }, [])
    const getData = () => {
        axios.get('https://jsonplaceholder.typicode.com/comments')
            .then((res) => {
                console.log('hi', res.data);
                setUser(res.data)
                setLoading(false);
            })
            .catch((err) => {
                console.log(err);
            })
    }

    const [currentPage, setCurrentPage] = useState(1);
    const [recordsPerPage] = useState(5);
    const indexOfLastRecord = currentPage * recordsPerPage;
    const indexOfFirstRecord = indexOfLastRecord - recordsPerPage;
    const currentRecords = user?.slice(indexOfFirstRecord, indexOfLastRecord);
    console.log('currentRecords', currentRecords);
    const nPages = Math.ceil(user.length / recordsPerPage);

    const del = (i) => {
        const temp = [...user];
        temp.splice(i, 1);
        let result = [...temp];
        setUser(result)
    }

    const notify = () => {
        toast("Please enter something to search!", { position: toast.POSITION.TOP_RIGHT });
    }

    return (
        <div>

            <h1 className='mt-3'>Table</h1>
            <div className='d-flex m-5'>
                <input type='text' className='form-control' placeholder='Search' value={search} onChange={(e) => setSearch(e.target.value)} />
                <button onClick={notify} className='btn btn-info text-light'>Notify!</button>
            </div>
            <ToastContainer />
            {loading ? <Loaders /> :
                <table className='table table-responsive table-bordered mt-5'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Body</th>
                        </tr>
                    </thead>
                    <tbody>
                        {currentRecords.filter((row) => row.name.includes(search)).map((row, i) => (
                            <tr key={i}>
                                <td>{row.id}</td>
                                <td>{row.name}</td>
                                <td>{row.email}</td>
                                <td>{row.body}</td>
                                <td><button onClick={() => { del(i) }} className='btn btn-danger' data-bs-dismiss="toast" aria-label="Close">Delete</button></td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            }
            <Pagination className='justify-content-end'
                nPages={nPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
            />
        </div>

    )
}

export default Page