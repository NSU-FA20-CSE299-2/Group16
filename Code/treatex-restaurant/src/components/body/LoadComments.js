import React from 'react'
import dateformat from 'dateformat'
import Loading from './Loading'


const LoadComments = props =>{
    if(props.commentsIsLoading){
        return <Loading/>
    }else{
        return(
            props.comments.map(comment =>{
                return(
                    <div key={comment.id}>
                        <h5>
                            {comment.author}
                        </h5>
                            <p>{comment.comment}</p>
                            <p>Rating: {comment.rating}</p>
                            <p>{dateformat(comment.date,"dd mmm-yyyy")}</p>
                    </div>
                )
            })
        )
    }
    
}
export default LoadComments