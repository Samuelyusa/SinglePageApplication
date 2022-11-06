import React from 'react';

class PageNotFound extends React.Component {
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    render() {
        return (
            <div className='page-not-found'>
                <div className='page-not-found__body'>
                    <h1>Ooops!</h1>
                    <h2>404 Halaman Tidak Ditemukan</h2>
                    <p>Halaman yang Anda cari mungkin telah dihapus</p>
                    <p>namanya berubah atau untuk sementara tidak tersedia.</p>
                </div>
            </div>
            
        );
    }
}

export default PageNotFound;