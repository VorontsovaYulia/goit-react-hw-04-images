import toast, { Toaster } from 'react-hot-toast';
import { useEffect, useState } from "react";
import { GlobalStyle } from "../GlobalStyle";
import { Searchbar } from "../Searchbar/Searchbar";
import { Button } from "../Button/Button";
import { fetchImages } from '../API';
import { ImageGallery } from '../ImageGallery/ImageGallery';
import { Loader } from '../Loader/Loader';
import { Wrapper } from './App.styled';

const notify = () => toast.error("Please, enter your query");
const notifyNoImages = () => toast.error("Nothing found for your request :(");

export const App = () => {

  const [query, setQuery] = useState('');
  const [images, setImages] = useState([]);
  const [page, setPage] = useState(1);
  const [loading, setLoading] = useState(false);
  const [totalPage, setTotalPage] = useState(1);
  
  const changeQuery = newQuery => {
    if (newQuery === "") {
      return notify();
    };
    
    setQuery(`${Date.now()}/${newQuery}`);
    setImages([]);
    setPage(1);
    setTotalPage(1)
  }

  useEffect(() => {
    if (!query) return;
    const querySlice = query.slice(query.indexOf("/") + 1);
    async function getImages() {
      try {
        setLoading(true);
        const imageItems = await fetchImages(querySlice, page);
        if (!imageItems.hits.length) {
          notifyNoImages();
        }
        setImages(prevState => [...prevState, ...imageItems.hits]);
        setTotalPage(Math.ceil(imageItems.totalHits / 12));
      } catch (error) {
        console.log(error)
      } finally {
        setLoading(false);
      };
    };
    getImages();
  }, [query, page]);

  const loadMore = () => {
    setPage(prevState => (prevState + 1))
  };

    return (
      <Wrapper>
        <Searchbar changeQuery={changeQuery} />
        {images.length > 0 && <ImageGallery images={images} />}
        {loading && (<Loader />)}
        {page < totalPage && (<Button onButton={loadMore}  />)}
        <Toaster position="top-right"/>
        <GlobalStyle />
      </Wrapper>
    ) 
};

