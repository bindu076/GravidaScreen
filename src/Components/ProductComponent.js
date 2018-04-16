import React,{Component} from 'react';
import  '../assets/main.css';
import cereal from '../assets/images/cereal_b.jpg';
import candy_b from '../assets/images/candy_b.jpg';
import machine_b from '../assets/images/machine_b.jpg';
import flower_b from '../assets/images/flower_b.jpg';

class ProductComponent extends Component {
    constructor(props){
        super(props);
        this.state = {
            showReply: true,
            productId: 1
        };
        this.onHandleClick = this.onHandleClick.bind(this);
    }
    onHandleClick = (event) =>{
        const x = event.target.value;
        for(let i =1; i<5 ; i++){
            const hideDesc = document.getElementById('product'+i).classList.contains('_hide');
            if(!hideDesc){
                document.getElementById('product'+i).classList.add('_hide');
            }
        }
        document.getElementById('product'+x).classList.remove('_hide');
    };

    filterProduct = (event) => {
        const value = event.target.value;
        const priceObj = [{grp1: ["productPrice0"]}, {grp2: ["productPrice1"]}, {grp3: ["productPrice2"]}, {grp4: ["productPrice3"]}];
        let listIndex = '';

        for (let i = 0; i < 4 ; i++) {
            if (Object.keys(priceObj[i])[0] === value) {
                listIndex = i
            }
            const hideDesc = document.getElementById('productPrice' + i).classList.contains('_hide');
            if(value !== "all") {
                if (!hideDesc) {
                    document.getElementById('productPrice' + i).classList.add('_hide');
                }
            }
            else{
                document.getElementById('productPrice' + i).classList.remove('_hide');
            }
        }
        if( listIndex !== ''){
            for (let j = 0; j < priceObj[listIndex][value].length; j++) {
                document.getElementById(priceObj[listIndex][value][j]).classList.remove('_hide');
            }
        }
    };
    render() {
        const props = this.props;
        return (
    <div>
            <section className="row container section3">
                <div className="row">
                    <h2 className="l-inline-block">Products</h2>
                    <div className="filter">
                        <p className="l-inline-block hide">Filter By:</p>
                        <select onChange={this.filterProduct}>
                            <option value="all">All</option>
                            <option value="grp1">Less Than $500</option>
                            <option value="grp2">From $500 to $1000</option>
                            <option value="grp3">From $1000 to $2000</option>
                            <option value="grp4">$2000 or more</option>
                        </select>
                    </div>
                </div>
                <div id ="productPrice0" className="col-3 products less500">
                    <h3>Product Title 1</h3>
                    <p  className="subtitle">Starting at $499</p>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                    <img src={cereal} className="img-responsive" alt=""/>
                    <li value = "1" onClick={this.onHandleClick}>Learn More</li>
                </div>
                <div id ="productPrice1" className="col-3 products 1000to2000">
                    <h3>Product Title 2</h3>
                    <p  className="subtitle">Starting at $1900</p>
                    <p>Donec ornare magna sit amet erat molestie sollicitudin ac vitae lectus.</p>
                    <img src={flower_b} className="img-responsive" alt=""/>
                    <li value = "2" onClick={this.onHandleClick}>Learn More</li>
                </div>
                <div id ="productPrice2" className="col-3 products 2000more">
                    <h3>Product Title 3</h3>
                    <p className="subtitle">Starting at $2730</p>
                    <p>Cras non metus sed odio tristique imperdiet.</p>
                    <img src={machine_b} className="img-responsive" alt=""/>
                    <li value = "3" onClick={this.onHandleClick}>Learn More</li>
                </div>
                <div id ="productPrice3" className="col-3 products 500to1000">
                    <h3>Product Title 4</h3>
                    <p className="subtitle">Starting at $731</p>
                    <p>Pellentesque mattis tellus ut molestie dapibus.</p>
                    <img src={candy_b} className="img-responsive" alt=""/>
                    <li value = "4" onClick={this.onHandleClick}>Learn More</li>
                </div>
            </section>
            <section className = "row container section3">
                <div id="product1" className="_hide">
                    <h3>Product Title 1</h3>
                    <p className="subtitle">Starting at $499</p>
                    <p>Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis
                        odio
                        a,
                        gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis
                        erat
                        sem,
                        ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique
                        ipsum
                        velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus
                        hendrerit
                        ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque
                        vestibulum.
                        Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec. Mauris sed
                        enim
                        risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis.
                        Sed
                        laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit
                        amet
                        erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices
                        justo
                        nec
                        venenatis.</p>
                    <img src={cereal} className="img-responsive"/>
                </div>
                <div id="product2" className="_hide" >
                    <h3>Product Title 2</h3>
                    <p className="subtitle">Starting at $1900</p>
                    <p>Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis
                        odio
                        a,
                        gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis
                        erat
                        sem,
                        ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique
                        ipsum
                        velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus
                        hendrerit
                        ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque
                        vestibulum.
                        Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec. Mauris sed
                        enim
                        risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis.
                        Sed
                        laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit
                        amet
                        erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices
                        justo
                        nec
                        venenatis.</p>
                    <img src={flower_b} className="img-responsive"/>
                </div>

                <div id="product3" className="_hide">
                    <h3>Product Title 3</h3>
                    <p className="subtitle">Starting at $2730</p>
                    <p>Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique, iaculis
                        odio
                        a,
                        gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis
                        erat
                        sem,
                        ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut tristique
                        ipsum
                        velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus
                        hendrerit
                        ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque
                        vestibulum.
                        Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec. Mauris sed
                        enim
                        risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus sagittis.
                        Sed
                        laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus sit
                        amet
                        erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis ultrices
                        justo
                        nec
                        venenatis.</p>
                    <img src={machine_b} className="img-responsive"/>
                </div>
                <div id="product4" className="_hide">
                    <h3>Product Title 4</h3>
                    <p className="subtitle">Starting at $731</p>
                    <p>Cras a ante eget dui dignissim molestie nec non lectus. Donec id sapien tristique,
                        iaculis
                        odio
                        a,
                        gravida ligula. In hac habitasse platea dictumst. Praesent non lacus elit. Sed convallis
                        erat
                        sem,
                        ac egestas ipsum tempor in. Sed consectetur ex at dolor ullamcorper vulputate. Ut
                        tristique
                        ipsum
                        velit, eget pretium ipsum dictum vel. Aenean ut tempus elit, non facilisis odio. Vivamus
                        hendrerit
                        ipsum vel risus ultrices, ut ornare metus ornare. Quisque semper ante ac pellentesque
                        vestibulum.
                        Cras a massa turpis. Pellentesque congue leo velit, non porta dui euismod nec. Mauris
                        sed
                        enim
                        risus. Quisque mollis justo quis commodo euismod. Nullam non massa in lorem cursus
                        sagittis.
                        Sed
                        laoreet felis mauris, a eleifend sapien molestie eget. Duis at volutpat elit. Phasellus
                        sit
                        amet
                        erat ut libero lobortis sollicitudin pellentesque ac lectus. Phasellus venenatis
                        ultrices
                        justo
                        nec
                        venenatis.</p>
                    <img src={candy_b} className="img-responsive"/>
                </div>
            </section>
    </div>
        );
    }
}
export default ProductComponent;