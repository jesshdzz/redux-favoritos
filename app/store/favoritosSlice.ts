// store/favoritosSlice.ts
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { Perro } from '../interfaces/Perro';

const favoritosSlice = createSlice({
  name: 'favoritos',
  initialState: [] as Perro[],
  reducers: {
    agregarFavorito: (state, action: PayloadAction<Perro>) => {
      const existe = state.find(p => p.message === action.payload.message);
      if (!existe) {
        state.push(action.payload);
      }
    },
    eliminarFavorito: (state, action: PayloadAction<string>) => {
      const nuevo = state.filter(p => p.message !== action.payload);
      return nuevo;
    },
    toggleFavorito: (state, action: PayloadAction<Perro>) => {
      const yaExiste = state.find(p => p.message === action.payload.message);
      if (yaExiste) {
        // Eliminar
        return state.filter(p => p.message !== action.payload.message);
      } else {
        // Agregar
        return [...state, action.payload];
      }
    },
  },
});

export const { agregarFavorito, eliminarFavorito, toggleFavorito } = favoritosSlice.actions;
export default favoritosSlice.reducer;
