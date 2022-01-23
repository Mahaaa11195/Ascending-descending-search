import React, { useEffect, useState } from 'react';
import axios from 'axios';

// import bootstrap from '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function Fetchapi() {

    const [posts,setposts]=useState([]);
    const [search,setSearch] = useState()
    const [final,setfinal]=useState([])
    const [wantPost,setWantPost] = useState(true)

  function ase() {
       axios.get(' https://jsonplaceholder.typicode.com/posts').then(res =>{
           console.log(res);
           setposts(res.data)
       })
       .catch(err=>{
           console.log(err);
       })
    }

    function desc(){
        axios.get(' https://jsonplaceholder.typicode.com/posts').then(res =>{
           console.log(res);
           setposts(res.data.reverse())
       })
       .catch(err=>{
           console.log(err);
       })
    }

    useEffect(()=>{
        if (search !== undefined ){
        const postsCopy=[...posts]
        const filteredList=postsCopy.filter((obj)=>{
            if (obj.title.includes(search)){
                return obj.title
            } 
        })
        setfinal(filteredList)
        setWantPost(false)
        console.log(search);
    }
    },[search])

    const handleChange = (e)=>{
        setSearch(e.target.value)
        console.log(e);
    }

  return <div className='search'>
     
      
      <input name="search" onKeyUp={handleChange} />
      <button className="btn btn-primary"onClick={ase}>Get</button>
      <button className="btn btn-success"onClick={ase}>Ascend</button>
      <button className="btn btn-danger"onClick={desc}>Descend</button> 

        { wantPost ? <ul> 
            {
                posts.map((post) =>(<li > {post.id} {post.title}</li>))
            }
        </ul> : 

         <ul>
            {
                final.map((post) =>(<li > {post.id} {post.title}</li>))
                
            }
        </ul> }

  </div>;
}

export default Fetchapi;