import React, { useEffect } from 'react';
// import axios from 'axios';
// import { Link } from 'react-router-dom';
import { Typography } from '@material-ui/core/';
// import Cookies from 'universal-cookie';
// import { useDispatch, useSelector } from 'react-redux';

import useStyles from './styles.js'; 
// import { deleteReview } from '../../../actions/reviews';


const Review = ({ prodId, review: { author, content, _id: id } }) => {
  const classes = useStyles();
  // const { isLoggedIn } = useSelector(state => state).user;
  // const [authorized, setAuthorized ] = useState(false);
  // const cookies = new Cookies();
  // const dispatch = useDispatch();

  useEffect(() => {
    // if (isLoggedIn) {
    //   (cookies.get('user').name === author) ? setAuthorized(true) : setAuthorized(false)
    // } else {
    //   setAuthorized(false)
    // }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // const removeReview = (pID, rID) => {
  //   dispatch(deleteReview(pID, rID));
  // }
  
  return (
    <div key={id} className={classes.root}>
      {/* <div component={Link} className={classes.content}> */}
        <Typography variant="h6" >{content}</Typography>
        <Typography variant="subtitle2" color="textSecondary" >By: {author}</Typography>
      {/* </div> */}
      {/* {authorized &&
        <CardActions>
          <Button component={Link} to={`/form/${id}`}>Edit</Button>
          <Button size="small" color="primary" onClick={() => removeReview(prodId, id)}>Delete</Button>
        </CardActions>
      } */}
    </div>
  )
}

export default Review;