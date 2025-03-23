import { Header } from "./components/Header";
import { Post } from "./Post";

import './global.css';

export function App() {

  return (
    <div>
      <Header />
      <Post 
        title="Leandro Santana" 
        content="Meu post Test" 
      />
      <Post 
        title="Leonardoz Santana" 
        content="Meu post Test" 
      />
    </div>
  )
}
