import toast, { Toaster } from 'react-hot-toast';
import { Component } from "react";
import { GlobalStyle } from "./GlobalStyle";
import { Searchbar } from "./Searchbar/Searchbar";
import { Button } from "./Button/Button";
import { fetchImages } from './API';
import { ImageGallery } from './ImageGallery/ImageGallery';
import { Loader } from './Loader/Loader';

const notify = () => toast.error("Please, enter your query")

export class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    loading: false,
  }
  
  changeQuery = newQuery => {
    if (newQuery === "") {
      return notify();
    }
    
    this.setState({
      query: `${Date.now()}/${newQuery}`,
      images: [],
      page: 1,
    });
  };

  async componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;
    
    if (prevState.query !== query || prevState.page !== page) {
      const querySlice = query.slice(query.indexOf("/") + 1);
      try {
        this.setState({ loading: true });
        const imageItems = await fetchImages(querySlice, page);
        this.setState(prevState => ({
          images: [...prevState.images, ...imageItems],
          loading: false,
        }))
      } catch (error) {
        console.log(error)
      } 
    }
  }

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }))
  }

  render() {
    const {loading, images } = this.state
    return (
      <>
        <Searchbar changeQuery={this.changeQuery} />
        {loading ? (<Loader />) : (<ImageGallery images={this.state.images} />)}
        {images.length !== 0 && (<Button onButton={this.loadMore} />)}
        <Toaster />
        <GlobalStyle />
      </>
  )
  }
  
};
