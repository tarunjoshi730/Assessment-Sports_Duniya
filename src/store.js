import { configureStore } from '@reduxjs/toolkit';
import newsReducer from './features/newsSlice';
import articleReducer from "./features/articleSlice";
import authReducer from "./features/authSlice";
import themeReducer from "./features/themeSlice";

const store = configureStore({
  reducer: {
    news: newsReducer,
    articles: articleReducer,
    auth: authReducer,
    theme: themeReducer,
  },
});

export default store;
