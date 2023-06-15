import propTypes from "prop-types"; //imports specifically from font-awesome
import Card from "./shared/Card";


function FeedbackItem({ item }) {
  
  return (
    <Card>
      {/* these are the children to the card component which are passed to the it */}
      <div className="num-display">{item.rating}</div>
     
      <div className="text-display">{item.text}</div>
    </Card>
  );
}

FeedbackItem.propTypes = {
  item: propTypes.object.isRequired,
};

export default FeedbackItem;
