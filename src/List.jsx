import React ,{ useEffect, useState } from 'react';
import Card from './Card.';
import ReactPaginate from 'react-paginate';


function List() {
  const [details,setDetails]=useState([]);
  const [pageCount, setpageCount] = useState(0);
  let limit=3;
  
  useEffect(() => {
    const getComments = async () => {
     const res= await fetch("https://ghibliapi.herokuapp.com/films?_page=1&_limit=3")
     const data=await res.json();
     const total= res.headers.get("x-total-count");
     setpageCount(Math.ceil(total / limit));
     // console.log(Math.ceil(total/12));
       setDetails(data);
       
       }
     
    getComments();
    }, [limit]);

    const fetchComments = async (currentPage) => {
      const res = await fetch(
        `https://ghibliapi.herokuapp.com/films?_page=${currentPage}&_limit=${limit}`
        // `https://jsonplaceholder.typicode.com/comments?_page=${currentPage}&_limit=${limit}`
      );
      const data = await res.json();
      return data;
    };
    const handlePageClick = async (data) => {
      console.log(data.selected);
  
      let currentPage = data.selected + 1;
  
      const commentsFormServer = await fetchComments(currentPage);
  
      setDetails(commentsFormServer);
      // scroll to the top
      //window.scrollTo(0, 0)
    };
      
  return (
    
    <div className="App">
      
       <div className='card-container'>
            
      {
      details && details.map((people,index)=>{
        
        return <Card name={people.title} no={index} key={index} director={people.director} image={people.image} id={people.id}/>;
    
      })
     }      
        </div> 
      
       <ReactPaginate
        previousLabel={"previous"}
        nextLabel={"next"}
        breakLabel={"..."}
        pageCount={pageCount}
        marginPagesDisplayed={2}
        pageRangeDisplayed={3}
        onPageChange={handlePageClick}
        containerClassName={"pagination justify-content-center fixed-bottom"}
        pageClassName={"page-item"}
        pageLinkClassName={"page-link"}
        previousClassName={"page-item"}
        previousLinkClassName={"page-link"}
        nextClassName={"page-item"}
        nextLinkClassName={"page-link"}
        breakClassName={"page-item"}
        breakLinkClassName={"page-link"}
        activeClassName={"active"}
        
      />
    </div> 
    
  );
}

export default List;
