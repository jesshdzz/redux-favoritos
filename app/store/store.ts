import { configureStore } from '@reduxjs/toolkit';
import favoritosReducer from './favoritosSlice';

const cargarFavoritos = () => {
  try {
    const favoritos = localStorage.getItem('favoritos');
    return favoritos ? JSON.parse(favoritos) : undefined;
  } catch (error) {
    return undefined;
  }
}

const guardarFavoritos = (state: any) => {
  try {
    localStorage.setItem('favoritos', JSON.stringify(state.favoritos));
  } catch (error) {
    throw new Error("Error al guardar los favoritos", { cause: error });
  }
}

export const store = configureStore({
  reducer: {
    favoritos: favoritosReducer,
  },
  preloadedState: {
    favoritos: cargarFavoritos(),
  }
});

store.subscribe(() => {
  guardarFavoritos(store.getState());
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;



