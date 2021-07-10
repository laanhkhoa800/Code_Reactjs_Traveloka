import React, { Component } from 'react';

class NotFoudPage extends Component {
    render() {
        var {products} = this.props;
        return ( 
             <div>
                 <h1>không tìm thấy trang này !</h1>
             </div>
        );
    }
}

export default NotFoudPage;