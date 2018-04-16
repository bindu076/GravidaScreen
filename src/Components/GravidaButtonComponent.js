import React,{Component} from "react";
import  '../assets/main.css';

class GravidaButton extends Component{

    render() {
        return (
            <section className="row container section2">
                <h1> In Gravida </h1>
                <div className="col-4 learnmore">
                    <h3>Cras ac mauris</h3>
                    <p>nteger dictum hendrerit pharetra. Cras fermentum posuere egestas.</p>
                    <a className="button">Learn More<span className="arrow"></span></a>
                </div>
                <div className="col-4 learnmore">
                    <h3>Curabitur elementum</h3>
                    <p>Cras vel imperdiet mauris. Pellentesque libero mauris, interdum a felis et, condimentum mattis erat.</p>
                    <a className="button">Learn More <span className="arrow"></span></a>
                </div>
                <div className="col-4 learnmore">
                    <h3>Awards and Recognitions</h3>
                    <p>Aliquam eget ligula mauris. Etiam viverra non turpis eu auctor. Nullam pretium est libero, et condimentum massa egestas id. </p>
                    <a className="button">Learn More <span className="arrow"></span></a>
                </div>
                <div className="col-4 learnmore">
                    <h3>Morbi placerat </h3>
                    <p> Nam feugiat ultrices ligula eget faucibus. Mauris convallis ipsum est.</p>
                    <a className="button">Learn More <span className="arrow"></span></a>
                </div>
                <div className="col-4 learnmore">
                    <h3>Suspendisse eu</h3>
                    <p>Duis pretium elementum dui, id feugiat neque facilisis vel.</p>
                    <a className="button">Learn More <span className="arrow"></span></a>
                </div>
                <div className="col-4 learnmore">
                    <h3> Integer faucibus</h3>
                    <p> Vivamus at rutrum est, eu pellentesque lacus. Curabitur imperdiet tortor sit amet enim ullamcorper, a aliquet odio rutrum.</p>
                    <a className="button">Learn More <span className="arrow"></span></a>
                </div>
            </section>
        );
    }
}
export default GravidaButton;