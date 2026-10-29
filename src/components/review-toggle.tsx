'use client';
import {useState} from 'react';
export function ReviewToggle(){const [review,setReview]=useState(false);return <div className="review-notes-control"><button type="button" className="review-toggle" aria-pressed={review} onClick={()=>{document.body.classList.toggle('review',!review);setReview(!review)}}><span className="sw"/>Review notes</button></div>}
