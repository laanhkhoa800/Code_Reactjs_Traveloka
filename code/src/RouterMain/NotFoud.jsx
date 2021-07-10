import React, { Component } from 'react';

class NotFoud extends Component {
    render() {
        var {products} = this.props;
        return ( 
                    <div>
                        Không tìm thấy trang này!
                    </div>

        );
    }
}

export default NotFoud;