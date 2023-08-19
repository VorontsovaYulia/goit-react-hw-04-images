import toast, { Toaster } from 'react-hot-toast';
import { Component } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Searchbar } from "../Searchbar/Searchbar";
import { Button } from "../Button/Button";
import { fetchImages } from '../API';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Wrapper } from './App.styled';

const notify = () => toast.error("Please, enter your query")
const notifyEnd = () => toast.error("Sorry, no more images for you :(")
const notifyNoImages = () => toast.error("Nothing found for your request :(")



export class App extends Component {
  state = {
    query: "",
    images: [],
    page: 1,
    loading: false,
    totalHits: 0,
    totalPage: 0
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
        if (!imageItems.hits.length) {
          notifyNoImages();
        }
        this.setState(prevState => ({
          images: [...prevState.images, ...imageItems.hits],
          loading: false,
          totalHits: imageItems.totalHits,
          totalPage: Math.ceil(imageItems.totalHits/12)
        }))
      } catch (error) {
        console.log(error)
      } 
    }
  }

  loadMore = () => {
    if (this.state.page === this.state.totalPage) {
      notifyEnd();
      return
    }
    this.setState(prevState => ({ page: prevState.page + 1 }))

  }

  render() {
    const { loading, images } = this.state;

    return (
      <Wrapper>
        <Searchbar changeQuery={this.changeQuery} />
        {images.length > 0 && <ImageGallery images={this.state.images} />}
        {loading && (<Loader />)}
        {images.length !== 0 && (<Button onButton={this.loadMore}  />)}
        <Toaster position="top-right"/>
        <GlobalStyle />
      </Wrapper>
    )
  }  
};
