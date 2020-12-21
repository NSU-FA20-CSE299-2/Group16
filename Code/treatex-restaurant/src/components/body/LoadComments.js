import React from 'react'
import dateformat from 'dateformat'

const LoadComments = props =>{
    return(
        props.comments.map(comment =>{
            return(
                <div key={comment.id}>
                    <h5>
                        {comment.author}
                        <p>{comment.comment}</p>
                        <p>{dateformat(comment.date,"dd mmm-yyyy")}</p>
                    </h5>

                </div>
            )
        })


    )
}
export default LoadComments