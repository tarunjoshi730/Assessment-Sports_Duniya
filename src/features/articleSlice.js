import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  articles: [],
};

const articleSlice = createSlice({
  name: "articles",
  initialState,
  reducers: {
    setArticles: (state, action) => {
      state.articles = action.payload;
    },
    updatePayoutRate: (state, action) => {
      const { url, payoutRate } = action.payload;
      const article = state.articles.find((article) => article.url === url);
      if (article) {
        article.payoutRate = payoutRate;
      }
    },
  },
});

export const { setArticles, updatePayoutRate } = articleSlice.actions;
export default articleSlice.reducer;
