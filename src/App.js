import "bulma/css/bulma.css";
import ProfileCard from "./ProfileCard";
import SiriImage from "./images/siri.png";
import AlexaImage from "./images/alexa.png";
import CortanaImage from "./images/cortana.png";

function App() {
  return (
    <div>
      <section className="hero is-primary">
        <div className="hero-body">
          <p className="title">Personal Digital Assitants</p>
        </div>
      </section>

      <div className="container">
        <section className="section">
          <div className="columns">
            <div className="column is-4">
              <ProfileCard 
              title="Siri" 
              handle="@siri007" 
              image={SiriImage} 
              description="Siri was made by Apple Inc. and is phased out."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Alexa"
                handle="@alexa903"
                image={AlexaImage}
                description="Alexa was created by Amazon and does some stuff."
              />
            </div>
            <div className="column is-4">
              <ProfileCard
                title="Cortana"
                handle="@cortana33"
                image={CortanaImage}
                description="Cortana was made by Microsoft and we don't know much about it"
              />
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

export default App;
