import React, { useEffect } from 'react'
import "./styles.css"

const Pagination = ({ nPages, currentPage, setCurrentPage }) => {

    console.log('currentPage !== 1', nPages);
    const pageNumbers = [...Array(nPages + 1).keys()].slice(1)


    const prevcurrentPage = currentPage - 1;
    const nextcurrentPage = currentPage + 1;
    const firstSet = 2;
    const lastSet = nPages - 1;
    console.log(prevcurrentPage);
    console.log(nextcurrentPage);
    console.log(lastSet);
    const nextPage = () => {
        if (currentPage !== nPages) { setCurrentPage(currentPage + 1) }
    }
    const prevPage = () => {
        if (currentPage !== 1) setCurrentPage(currentPage - 1)
    }
    useEffect(() => {

    }, [currentPage])

    return (
        <div>
            <nav>
                {nPages > 1 &&
                    <ul className='pagination justify-content-center'>
                        {currentPage !== 1 &&
                            <li className="page-item ">
                                <a className="page-link" onClick={prevPage} href={() => false}>
                                    <span aria-hidden="true">&laquo;</span>
                                </a>
                            </li>
                        }
                        {pageNumbers.map(pgNumber => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {pgNumber <= firstSet &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false}>
                                        {pgNumber}
                                    </a>
                                }
                            </li>
                        ))}
                        {pageNumbers.map((pgNumber) => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {pgNumber === firstSet + 1 && pgNumber < prevcurrentPage && pgNumber < currentPage &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false}>
                                        ...
                                    </a>
                                }
                            </li>
                        ))}
                        {pageNumbers.map((pgNumber, i) => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {pgNumber > firstSet && pgNumber === currentPage - 1 && pgNumber < lastSet &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                        {pgNumber}
                                    </a>
                                }
                            </li>
                        ))}
                        {pageNumbers.map((pgNumber, i) => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {pgNumber > firstSet && pgNumber === currentPage && pgNumber < lastSet &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                        {pgNumber}
                                    </a>
                                }
                            </li>
                        ))}
                        {pageNumbers.map((pgNumber, i) => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {pgNumber > firstSet && pgNumber === currentPage + 1 && pgNumber < lastSet &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                        {pgNumber}
                                    </a>
                                }
                            </li>
                        ))}
                        {pageNumbers.map((pgNumber, i) => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {pgNumber === lastSet - 2 && pgNumber > prevcurrentPage && pgNumber > currentPage &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                        ...
                                    </a>
                                }
                            </li>
                        ))}
                        {pageNumbers.map(pgNumber => (
                            <li key={pgNumber} className={`page-item ${currentPage === pgNumber ? 'active' : ''} `} >
                                {lastSet <= pgNumber &&
                                    <a onClick={() => setCurrentPage(pgNumber)} className='page-link' href={() => false} >
                                        {pgNumber}
                                    </a>
                                }
                            </li>
                        ))}
                        {nPages !== currentPage &&
                            <li className="page-item ">
                                <a className="page-link" onClick={nextPage} href={() => false}>
                                    <span aria-hidden="true">&raquo;</span>
                                </a>
                            </li>
                        }
                    </ul>
                }
            </nav>
        </div>
    )
}

export default Pagination