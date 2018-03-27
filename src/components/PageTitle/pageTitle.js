import React from 'react';

const pageTitle = (props) => {
    return (
        <div className="tc v-mid fl h5 w5 black-70 mb3 mr5" style={{backgroundImage:'url("/static/background.jpg', backgroundSize: '100%', backgroundOrigin: 'border-box', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed'}}>
            <div className="h-100 w-100 relative">
                <div className="absolute dib w-90" style={{border:"1px solid white", height: '90%', top: '5%', left: '5%'}}>
                    <h1 className="dib absolute fw3 white ma0" style={{top:'50%', left:'50%', transform:'translate(-50%, -50%)'}}>{props.title}</h1>
                </div>
            </div>
        </div>
    );
}

export default pageTitle;