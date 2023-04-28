import React from 'react'

export default function ListArticles({data}) {
    
    return(
       data.map((post, index) => {
        
        return(
            <div key={index}>
                <h4>{post.title}</h4>
            </div>
        )
       })
    )
}