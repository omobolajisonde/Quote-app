import classes from './QuoteItem.module.css';
import { Link,useRouteMatch } from 'react-router-dom';
const QuoteItem = (props) => {
  const match = useRouteMatch();
  return (
    <li className={classes.item}>
      <figure>
        <blockquote>
          <p>{props.text}</p>
        </blockquote>
        <figcaption>{props.author}</figcaption>
      </figure>
      <Link className="btn" to={`${match.path}/${props.id}`}>Show more</Link>
    </li>
  );
};

export default QuoteItem;