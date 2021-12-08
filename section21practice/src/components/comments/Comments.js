import { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router';
import useHttp from '../../hooks/use-http';
import { getAllComments } from '../../lib/api';
import LoadingSpinner from '../UI/LoadingSpinner';

import classes from './Comments.module.css';
import CommentsList from './CommentsList';
import NewCommentForm from './NewCommentForm';

const Comments = () => {
  const [isAddingComment, setIsAddingComment] = useState(false);
  const params = useParams();
  const {quoteId}=params;
  const {sendRequest,data: loadedComments,status,error}=useHttp(getAllComments);
  useEffect(() => {
    sendRequest(quoteId);
  }, [quoteId,sendRequest]);
  const startAddCommentHandler = () => {
    setIsAddingComment(true);
  };
  const addedCommentHanldler=useCallback(()=>{
    sendRequest(quoteId);
  },[])
  let comments;
  if(status === 'pending'){
    comments= <div className='centered'>
      <LoadingSpinner/>
    </div>
  }
  if(status=== 'completed' && loadedComments && loadedComments.length>0){
    comments = <CommentsList comments={loadedComments}/>
  }
  if(status=== 'completed' && (!loadedComments || loadedComments.length === 0)){
    comments = <p className='centered'> Not comments were added yet</p>
  }
  return (
    <section className={classes.comments}>
      <h2>User Comments</h2>
      {!isAddingComment && (
        <button className='btn' onClick={startAddCommentHandler}>
          Add a Comment
        </button>
      )}
      {isAddingComment && <NewCommentForm onAddedComment={addedCommentHanldler} quoteId={quoteId}/>}
      {comments}
    </section>
  );
};

export default Comments;
