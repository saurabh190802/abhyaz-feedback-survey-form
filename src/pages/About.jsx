import Card from "../components/shared/Card";
import { Link } from "react-router-dom";

function About() {
  return (
    <Card>
      <div className="about">
        <h1>Abhyaz Feedback Survey</h1>
        <p>
          Tell us how can we make your experience better.
        </p>
        <p>Thank You ❤️</p>

        <p>
          <Link to="/">Back To Home</Link>
        </p>
      </div>
    </Card>
  );
}

export default About;
