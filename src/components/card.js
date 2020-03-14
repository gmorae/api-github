import React, { Component } from 'react';

class Card extends Component {
    render() {
        const AvatarStyle = {
            width: '120px',
            marginTop: '-60px',
            overflow: 'hidden',
            border: '5px solid #fff',
            borderRadius: '50%'
        }

        const cardUpStyle = {
            height: '120px',
            overflow: 'hidden',
            borderTopLeftRadius: '.25rem',
            borderTopRightRadius: '.25rem',
            backgroundColor: '#002'
        }
        return (
            <div className="col-lg-4 col-md-12 mb-4">
                <div className="card testimonial-card">
                    <div style={cardUpStyle}></div>
                    <div style={AvatarStyle} className="mx-auto white">
                        <img src={this.props.image} aria-hidden alt="Picture profile" className="rounded-circle img-fluid" />
                    </div>
                    <div className="card-body">
                        <h4 className="font-weight-bold mb-4">{this.props.name}</h4>
                        <hr />
                        <p className="dark-grey-text mt-4">{this.props.bio}</p>
                        <div>
                            <a className="dark-grey-text" href={`https://github.com/${this.props.url}`} target="_blanck">
                                <i class="fab fa-github mr-2"></i>
                                Perfil
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Card;