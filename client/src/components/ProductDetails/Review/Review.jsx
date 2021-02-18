import React from "react";
// import React, { useEffect } from 'react';
import { Typography } from "@material-ui/core/";
import Rating from "@material-ui/lab/Rating";

import useStyles from "./styles.js";
// import { deleteReview } from '../../../actions/reviews';

const Review = ({ prodId, review: { _id, author, rating, content } }) => {
  const classes = useStyles();
  // const { isLoggedIn } = useSelector(state => state).user;
  // const [authorized, setAuthorized ] = useState(false);
  // const cookies = new Cookies();
  // const dispatch = useDispatch();

  // useEffect(() => {
  // if (isLoggedIn) {
  //   (cookies.get('user').name === author) ? setAuthorized(true) : setAuthorized(false)
  // } else {
  //   setAuthorized(false)
  // }

  // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

  // const removeReview = (pID, rID) => {
  //   dispatch(deleteReview(pID, rID));
  // }

  return (
    <div key={_id} className={classes.root}>
      <Typography
        variant="body1"
        color="textSecondary"
        style={{ padding: 0, lineHeight: 1 }}
      >
        {author}
      </Typography>
      <Rating value={rating} readOnly />
      <Typography variant="body1" style={{ padding: 0, lineHeight: 1 }}>
        {content}
      </Typography>
    </div>
  );
};

export default Review;
