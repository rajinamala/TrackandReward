import React from 'react';

class Contact extends React.Component {
    render() { 
        return (
            <div className="base-container" style={{
                display: 'flex',
                justifyContent: 'Right',
                alignItems: 'Right',
                height: '100vh'
              }}>
                 <div className='content'>
                     <h1 >MAILING ADDRESSES</h1>
                     <h3>FOR PAYMENTS</h3>
                     <h4>Mr. Cooper
                         PO Box 650783
                         Dallas, TX 75265-0783</h4>
                     </div>
                 </div>
        );
    }
}
 
export default Contact;