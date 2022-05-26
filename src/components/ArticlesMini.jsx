import React from 'react';
import './ArticlesMini.css'
import Judge from './mahkeme3.jpg'

const ArticlesMini = ()=> {

    return (
        <div className='article-mini-container'>

            <img src={Judge} width='150px' height='100px' />
            <div className='article-mini-body'>
                <h6 className='article-mini-title'>Lorem ipsum dolor sit.</h6>
                <p className='muted-mini'><small>3 gün önce</small></p>
            </div>
        </div>
    )

}

export default ArticlesMini;