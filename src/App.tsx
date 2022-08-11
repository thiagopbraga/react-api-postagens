import { useEffect, useState } from "react";
import { Posts } from "./types/Posts";
import { PostForm } from "./components/PostForm";
import { PostItem } from "./components/PostItem";
import { api } from "./api";

const App = () => {
  const [posts, setPosts] = useState<Posts[]>([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    loadPosts();
  }, []);

  const loadPosts = async () => {
    setLoading(true);
    let json = await api.getAllPosts();
    setLoading(false);
    setPosts(json);
  };

  const handleAddPost = async (title: string, body: string) => {
    let json = await api.addNewPost(title, body, 1);
    if (json.id) {
      alert("Post adicionado com sucesso");
    } else {
      alert("Erro ao adicionar post");
    }
  };

  return (
    <div className="p-5">
      {loading &&
        <div>Carregando...</div>
      }

      <PostForm onAdd={handleAddPost} />

      {!loading && posts.length > 0 && 
        <>
          <div>
            Total de posts: {posts.length}
          </div>
          <div>
            {posts.map((item, index) => (
              <PostItem data={item} />
            ))}
          </div>
        </>
      }

      {!loading && posts.length === 0 &&
        <div>Não há posts para exibir</div>
      }
    </div>
  );
};

export default App;

// https://api.b7web.com.br/cinema/
