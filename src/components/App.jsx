
import { Component } from "react";
import { fetchPictures } from "services/gallaryAPI";
import { GlobalStyle } from "./GlobalStyle";

import { Layout } from "./Layout/Layout";

import { ImageGallery } from "./ImageGallery/ImageGallery";
import { Modal } from "./Modal/Modal";
import { Searchbar } from "./Searchbar/Searchbar";
import { Loader } from './Loader/Loader';
import { Button } from './Button/Button';

export class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    page: 1,
    query: '',
    tags: '',
    largeImageUrl: '',
    loadMore: null,
  };

  searchResult = value => {
    this.setState({ query: value, page: 1, pictures: [], loadMore: null});
  };

toggleModal = () => {
  this.setState(({showModal}) => ({
    showModal: !showModal,
  }))
};

getLargeImg = imgUrl => {
  this.setState({largeImageUrl: imgUrl})
  this.toggleModal()
};

handleLoadMore =() => {
  this.setState(prevState => ({
    page: prevState.page + 1,
  }))
}


componentDidUpdate(_, prevState) {
  const {page, query} = this.state;

  if (prevState.page !== page || prevState.query !== query) {
    this.setState({ status: 'loading'});

    fetchPictures (query, page)
    .then (e =>
      this.setState(prevState => ({
        pictures: [...prevState.pictures, ...e.hits],
        status: 'idle',
        loadMore: 12 - e.hits.length,
      })))
      .catch(error => console.log(error));
  }
};

render(){
  const {pictures,
    status,
    showModal,
    tags,
    largeImageUrl,
    loadMore
  } = this.state
  return (
    <Layout>
<GlobalStyle/>
<Searchbar onSubmit={this.searchResult}/>
{showModal && (
  <Modal url={largeImageUrl} alt={tags} onClose={this.toggleModal} />
)}
    <ImageGallery pictures={pictures} onClick={this.getLargeImg}/>  
    {status === 'loading' && <Loader />}
        {loadMore === 0 && <Button onClick={this.handleLoadMore} />}
    </Layout>
  );
};
}