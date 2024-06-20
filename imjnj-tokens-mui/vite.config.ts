import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
// https://vitejs.dev/config/
export default defineConfig({
  base: './',
  plugins: [react()],
  
  // build: {
  //   lib: {
  //     entry: path.resolve(__dirname, 'src/theme/theme.js'),
  //     name: 'jnjtheme',
  //     fileName: (format) => `jnjtheme.${format}.js`
  //   },
  //}
})
