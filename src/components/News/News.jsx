import React ,  { useEffect, useState }from 'react'
import axios from 'axios';
export default function News() {
    let[news, setnews]=useState([]);
    async function getnews(){
        let {data}=await axios.get(`https://newsapi.org/v2/everything?q=apps&apiKey=9f6c69765ae14d659314dc3e419e9b49`);
        setnews(data.articles);
    }
    useEffect(()=>{
        getnews();
    },[])
  return (
    <div className='news py-5 text-center'>
     <div className="container">
      <h2 className='s-h2 mt-5 lh-lg'>World Wide Apps News!</h2>
        <div className="row">
            {news.map((post,index)=>
            <div key={index} className="col-lg-4 mt-4">
               <div className="news-member mb-3">
                   {post.urlToImage?<img src={post.urlToImage} alt="" className='news-img w-100 mb-3'/>:<img src="./images/pic2.png" alt="" className='news-img w-100 mb-3'/>}
                   <a title='Clik Here To Read The Article' href={post.url} target='_blank' className='text-decoration-none text-dark'>{post.title.split(' ').slice(0,10).join(' ')}</a>
               </div>
            </div>
            )}
        </div>
     </div>




    </div>
  )
}
