import React,{Component} from 'react';
import  '../assets/main.css';
import banner from '../assets/images/banner.jpg';
import fb from '../assets/images/fb.png';
import twitter from '../assets/images/twitter.png';
import pinterest from '../assets/images/pinterest.png';
import blog from '../assets/images/blog.png';
import email from '../assets/images/email.png';

class MainComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            initialItems: [
                "Alaska",
                "Alabama",
                "Arkansas",
                "American Samoa",
                "Arizona",
                "California",
                "Colorado",
                "Connecticut",
                "District of Columbia",
                "Delaware",
                "Florida",
                "Georgia",
                "Guam",
                "Hawaii",
                "Iowa",
                "Idaho",
                "Illinois",
                "Indiana",
                "Kansas",
                "Kentucky",
                "Louisiana",
                "Massachusetts",
                "Maryland",
                "Maine",
                "Michigan",
                "Minnesota",
                "Missouri",
                "Mississippi",
                "Montana",
                "North Carolina",
                "North Dakota",
                "Nebraska",
                "New Hampshire",
                "New Jersey",
                "New Mexico",
                "Nevada",
                "New York",
                "Ohio",
                "Oklahoma",
                "Oregon",
                "Pennsylvania",
                "Puerto Rico",
                "Rhode Island",
                "South Carolina",
                "South Dakota",
                "Tennessee",
                "Texas",
                "Utah",
                "Virginia",
                "Virgin Islands",
                "Vermont",
                "Washington",
                "Wisconsin",
                "West Virginia",
                "Wyoming"
            ],
            items: []
        };
    }

    filterList(event) {
        let updatedList = this.state.initialItems;
        updatedList = updatedList.filter(function (item) {
            return item.toLowerCase().search(
                event.target.value.toLowerCase()) !== -1;
        });
        this.setState({items: updatedList});
    }

    itemList() {
        this.setState({items: {}})
    }
    render() {
            return (
                <div>
                    <div className='banner'>
                        <img src={banner}/>
                        <ul className="social">
                            <p> Connect </p>
                            <li><a href="#"><img src={fb}/></a></li>
                            <li><a href="#"><img src={twitter}/></a></li>
                            <li><a href="#"><img src={pinterest}/></a></li>
                            <li><a href="#"><img src={blog}/></a></li>
                            <li><a href="#"><img src={email}/></a></li>
                        </ul>
                    </div>
                    <div className="container">
                        <section className="row section1">
                            <div className="col-8 summary">
                                <h1> In Gravida Libero </h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer enim neque, molestie
                                    ut placerat id, tincidunt in sem. Pellentesque sodales lobortis eros nec pulvinar.
                                    In ac ultrices ipsum, ultricies semper nisi. Morbi ac hendrerit nulla. Sed nec ex
                                    commodo, tincidunt felis ac, iaculis ipsum.</p>
                                <p>Morbi ac hendrerit nulla. Sed nec ex commodo, tincidunt felis ac, iaculis ipsum</p>
                            </div>
                            <div className="l-right">
                                <div className="col-4 statefinder">
                                    <p className="subtitle">State Finder</p>
                                    <p className="text"> Morbi ac henderit nulla. Sed nec ex commodo</p>
                                    <span className="fa fa-search"/>
                                    <input type="search" placeholder="Search Hotels" onBlur={this.itemList.bind(this)}
                                           onInput={this.filterList.bind(this)}/>
                                    <ul id="myUL">
                                        {
                                            this.state.items.length > 0 && this.state.items.map(function (item) {
                                            return <li><a key={item} >{item}</a></li>
                                        })}
                                    </ul>
                                </div>
                            </div>
                        </section>
                    </div>
                </div>
            );
        }
}


export default MainComponent;