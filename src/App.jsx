import { Header } from "./components/Header";
import { Post } from "./components/Post";
import { Sidebar } from "./components/Sidebar";

import styles from './App.module.css';
import './global.css';

const posts = [
  {
    id: 1,
    author: {
      avatarUrl : "https://github.com/lesantana09.png",
      name: "Leandro Santana",
      role: "Web Developer Senior"
    },
    content: [
      { type: 'paragraph', content: 'Fala galero, beleza? 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, onde desenvolvi uma aplicação para gerenciar tarefas.' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto #nlw #rocketseat' }
    ],
    publishedAt: new Date('2025-02-11 08:13:30'),
  },
  {
    id: 2,
    author: {
      avatarUrl : "https://github.com/Shadowz3n.png",
      name: "Henrique Bissoli Silva",
      role: "Web Developer"
    },
    content: [
      { type: 'paragraph', content: 'Fala galera, beleza? 👋' },
      { type: 'paragraph', content: 'Acabei de subir mais um projeto no meu portfólio. É um projeto que fiz no Ignite, onde desenvolvi uma aplicação para gerenciar tarefas.' },
      { type: 'link', content: 'jane.design/doctorcare' },
      { type: 'hashtag', content: '#novoprojeto #nlw #rocketseat' }
    ],
    publishedAt: new Date('2025-04-11 08:13:30'),
  }, 
]

export function App() {

  return (
    <div>
      <Header />

      <div className={styles.wrapper}>
        <Sidebar/>
        <main>
          {posts.map(post => {
            return (
              <Post 
                key={post.id}
                author={post.author}
                content={post.content}
                publishedAt={post.publishedAt}
              />
            )
          }
          )}
        </main>
      </div>
    </div>
  )
}
