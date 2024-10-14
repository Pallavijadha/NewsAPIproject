import React, { Component } from "react";

class Newsupdate extends Component {
    render() {
        let {title,imageurl,newsurl,date,source}=this.props
        return (
            <div className="my-3">
                <div class="card-header">featured</div>
                <div className="card" style={{width: "25rem"}}>
                    <div className="card-header bg-warning">{source}</div>
                    <img src={imageurl} className="card-img-top" alt="..." height="200px" width="400px"/>
                        <div className="card-body">
                            <div style={{height:"100px"}}>
                            <h5 className="card-title">{title}</h5>
                            </div>
                            
                            
                            <a rel="noreferrer" href={newsurl}  className="btn btn-primary">Go somewhere</a>
                        </div>
                        <div class="card-footer text-muted">published at:{date}</div>
                </div>

            </div>
        );
    }
}

export default Newsupdate;
